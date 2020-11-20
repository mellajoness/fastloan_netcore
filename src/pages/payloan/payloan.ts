import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Session } from '../../providers';
declare let Smartech:any;
/**
 * Generated class for the PayloanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payloan',
  templateUrl: 'payloan.html',
})
export class PayloanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public session: Session,) {
  }

  ionViewDidLoad() {
    
  }

  paywithcard () {
    let custId= this.session._getCustID();
    console.log('my email is', custId)
  
    const payloadata = {
      CUSTOMER_ID :custId,
   };
     Smartech.setIdentity(payloadata.CUSTOMER_ID);
     Smartech.track("Pay_Loan_StepOne_WithCard", payloadata);
  
    this.navCtrl.push('PaywithcardPage');
  }

  paywithatm() {
    this.navCtrl.push('PaywithatmPage');
  }

  paywithtransfer() {
    let custId= this.session._getCustID();
    console.log('my email is', custId)
  
    const payloadata = {
      CUSTOMER_ID :custId
      
   };
     Smartech.setIdentity(payloadata.CUSTOMER_ID);
     Smartech.track("Pay_Loan_StepThree_PayWith_Fidelity", payloadata);
    this.navCtrl.push('PaywithtransferPage');
  }

  paywithBankTransfer() {
    let custId= this.session._getCustID();
    console.log('my email is', custId)
    const payload = {
      CUSTOMER_ID :custId
      }
      Smartech.setIdentity(payload.CUSTOMER_ID);
      Smartech.track("Pay_Loan_StepThree_PayWith_Fidelity",payload);
    this.navCtrl.push('DirectdebitPage')
  }



}
