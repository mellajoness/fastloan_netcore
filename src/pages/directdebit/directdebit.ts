import { Component, ViewChild, ElementRef } from '@angular/core';
import { e } from '@angular/core/src/render3';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ToastController, Platform } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
import { Loader, Api, Session } from '../../providers';
declare let Smartech:any;
/**
 * Generated class for the DirectdebitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directdebit',
  templateUrl: 'directdebit.html',
})
export class DirectdebitPage {
  // @ViewChild('input') input: ElementRef;

  sessionKey: string;
  phoneNumber: string;
  accounts: any = {};
  balance: string;
  // amount: any;
  amountEntered: any;
  loanId: string;
  otp: string;
  selectedAccount: string;
  sent: boolean = false;

  constructor(public session: Session, public loading: Loader, public api: Api, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.sessionKey = this.session._getSessionKey();
    this.phoneNumber = this.session._getPhoneNumber();

    this.fetchFidelityAccounts();

    this.fetchLoanBalance();

  }

  fetchLoanBalance () {
    this.api.get('get-loans', null, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      console.log(res);
        if(res.data.length) {
          this.balance = res.data[0].totalOutstanding;
          // this.amount = res.data[0].totalOutstanding; // I hashed this part
          this.loanId = res.data[0].id;
          return;
        }
        this.balance = "0.00";
        this.navCtrl.pop();
        this.api.messageHandler("You currently have no loan to repay", 3000, 'bottom');
        return;
    }, (error) => {
      this.api.messageHandler(error.error.message);
    })
  }

  async validate() {
    if(!this.selectedAccount){
      this.api.messageHandler('Please select an account');
      return;
    }
    if (parseInt(this.amountEntered) > parseInt(this.balance)){
      this.api.messageHandler('Amount Specified is above the loan balance');
      return;
    }

    this.loading.show('Requesting for validation code...');
    this.api.get('otp-request', null, this.api._injectAuth(this.sessionKey)).subscribe((res:any) => {
      this.loading.hide();
      console.log(res);
      if(res.code == '00') {
        this.sent = true;
        this.api.messageHandler("OTP has been sent to your phone number", 3000, 'bottom');


        let custId= this.session._getCustID();
        const payload = {	
          CUSTOMER_ID :custId,
          }	
          Smartech.setIdentity(payload.CUSTOMER_ID);	
          Smartech.track("Pay_Loan_StepThree_PayWith_Fidelity_Success",payload);	
      }

      else{
        let email= this.session._getEmail();
        const payload={
        EMAIL:email,
        REASON_FOR_FAILURE:res.message	
        }	
        Smartech.setIdentity(payload.EMAIL);	
        Smartech.track("Pay_Loan_StepThree_PayWith_Fidelity_Failed",payload);	  
      }

      

     
      this.api.messageHandler(res.message);
    }, (error:any) => {
      this.loading.hide();
      console.log(error);
      this.api.messageHandler(error.error.message);
    })
  }

  pay() {
    this.loading.show('Validating payment code...');
    var req = {
      phoneNumber: this.phoneNumber,
      verificationCode: this.otp
    };
    this.api.post('verify-otp', req, this.api._injectAuth(this.sessionKey)).subscribe((res:any) => {
      this.loading.hide();
      console.log(res);
      if(res.code == '00') {
        this.makePayment();
        // return;
      } else if(res.code !== '00'){
        this.navCtrl.push('PayfailedPage', {
          failed: res
        })
      }
      // this.api.messageHandler(res.message);
    }, (error:any) => {
      this.loading.hide();
      console.log(error);
      this.api.messageHandler(error.error.message);
    })
  }

  makePayment () {
    this.loading.show('Making payment...');
    var req = {
      amount: this.amountEntered,
      debitAccount: this.selectedAccount,
      phoneNumber: this.phoneNumber,
      outstandingBalance: this.balance,
      loanId: this.loanId,
      channelId: 'Mobile'
    }
    console.log(req);
    this.api.post('make-debit-instruction', req, this.api._injectAuth(this.sessionKey)).subscribe((res:any) => {
      this.loading.hide();
      console.log("Success: ", res);
      //trying something
      if (res == null){
        this.api.messageHandler('Please try again');
        return;
      }
      //trying something
      if(res.code == '00') {
        this.navCtrl.push('PaysuccessPage', {amountPaid: this.amountEntered, success: res});
        // return;
      } else if(res.code !== '00'){
        this.navCtrl.push('PayfailedPage', {
          failed: res
        })
      } else if(res.code !=='00' || '01' || '012'){
        this.navCtrl.push('FailurePage', {
          failure: res
        })
      }
        // this.api.messageHandler(res.message);

    }, (error:any) => {
      this.loading.hide();
      console.log("Error: ", error);
      this.api.messageHandler(error.error.message);
    })
  }
  /*fetchFidelityAccounts() {
    this.loading.show('Fetching your accounts...');
    this.api.get('get-operative-account', null, this.api._injectAuth(this.sessionKey)).timeout(60000).catch((err:Response) => {
        let details: any  = err;
        console.log(details);
        this.api.messageHandler('Looks like you don\'t have an operative account', 700, 'top');
        return Observable.throw(new Error(details));
    }).subscribe((res:any) => {
      this.loading.hide();
      console.log('Success', res);
      if (res.code == '00') {
        this.accounts = res.data;
        //this.selectedBvn = res.data[0].bvn;
        this.accounts.length ? console.log('user has account with fidelity') : this.api.messageHandler('Sorry you don\'t have an account with fidelity bank ', 500, 'top');
        return;
      }
      this.api.messageHandler(res.message);
    }, (error: any) => {
      this.loading.hide();
      console.log('Error', error);
    })
  }*/

  fetchFidelityAccounts() {
    this.loading.show('Fetching your accounts...');
    this.api.get('get-operative-account', null, this.api._injectAuth(this.sessionKey)).timeout(60000).catch((err:Response) => {
        let details: any  = err;
        console.log(details);
        this.api.messageHandler('Looks like you don\'t have an operative account', 700, 'top');
        return Observable.throw(new Error(details));
    }).subscribe((res:any) => {
      this.loading.hide();
      console.log('Success', res);
      if (res.code == '00') {
        this.accounts = res.data;
        return;
      }
      this.api.messageHandler(res.message);
    }, (error: any) => {
      this.loading.hide();
      console.log('Error', error);
      this.api.messageHandler(error.error.message);
    })
  }


  // async pay(){
  //   this.loading.show('Validating payment code...');
  //   const body ={
  //     phoneNumber: this.phoneNumber,
  //     verificationCode: this.otp
  //   }
  //   console.log(body)
  //   try {
  //     const response = await this.api.post('verify-otp', body, this.api._injectAuth(this.sessionKey));
  //     console.log('I got here',response);

  //   } catch (error){
  //    console.log(error)
  //    this.api.messageHandler(error.error.message);
  //   }
  //   this.loading.hide();

  // }

}


