import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController  } from 'ionic-angular';
import { Loader, Api, Session} from '../../providers';
declare let Smartech:any;
/**
 * Generated class for the CardlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardlist',
  templateUrl: 'cardlist.html',
})
export class CardlistPage {

  card: any = [];

  // amount: string;

  // I changed the key for the amount

  amountEntered: string;

  sessionKey: string;

  phoneNumber: string;

  balance: string;

  loanId: any;

  constructor(public session: Session, public loading: Loader, public api: Api, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    //this.cards = this.navParams.get('cards');
    this.card = this.navParams.get('card');
    console.log('card data pushed',this.card);

    this.sessionKey = this.session._getSessionKey();

    this.phoneNumber = this.session._getPhoneNumber();

    this.fetchLoanBalance();

  }

  cardSelected(card) {
    this.viewCtrl.dismiss(card);
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  async pay () {
    if(parseInt(this.amountEntered) > parseInt(this.balance)){
 this.api.messageHandler('Amount Specified is above the loan balance', 5000, 'top');
      return;
    }

      this.loading.show('Making payment...');
      var req = {
        amount: this.amountEntered,
        clientNo: this.phoneNumber,
        loanId: this.loanId,
        paymentMethod: {
          cardId: this.card.id,
          cvv: "456",
          expDate: this.card.expDate,
          pin: "9706",
          tokenizationMethod: this.card.tokenizationMethod
        },
        paymentType: "card"
      };
      console.log('Sent Stuffs',req);
      this.api.post('Loan/pay-loan-payment-card',  req, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
        console.log('Update', res);
        if (res.code == '00' || '01' || '02') {
          var params = {
            amount: this.amountEntered,
            res: res,
            success: true
          };

          this.viewCtrl.dismiss(params);

          let email= this.session._getEmail();
          console.log('my email is', email)
        
          const payloadata = {
           EMAIL:email,
          
         };
           Smartech.setIdentity(payloadata.EMAIL);
           Smartech.track("Pay_Loan_StepThree_WithCard_succcess", payloadata);
  
        }
      },
       (error) => {
        console.log('What happened', error);
        this.api.messageHandler(error.error.message);

        
                
        let email= this.session._getEmail();
        console.log('my email is', email)
      
        const payloadata = {
         EMAIL:email,
         REASON_FOR_FAILURE: error.error.message
       };
         Smartech.setIdentity(payloadata.EMAIL);
         console.log("card successful")
         Smartech.track("Pay_Loan_StepThree_WithCard_Failed", payloadata);


      }, () => {
        this.loading.hide();
      })
  }

  fetchLoanBalance () {
    this.loading.show();
    this.api.get('Loan/get-loans', {'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      this.loading.hide();
      console.log('loan balance',res);
        if(res.data.length) {
          this.balance = res.data[0].totalOutstanding;
          this.amountEntered = res.data[0].totalOutstanding; // I hashed this part
          this.loanId = res.data[0].id;
          return;
        }
        this.viewCtrl.dismiss();
        this.api.messageHandler('You have no loan to repay', 5000, 'top');
        //this.balance = "0.00";
    }, (error) => {
      this.loading.hide();
      this.api.messageHandler(error.error.message);
    })
  }

}
