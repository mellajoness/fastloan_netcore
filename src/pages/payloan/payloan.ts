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
  //   let email= this.session._getEmail();
  //   console.log('my email is', email)
  
  //   const payloadata = {
  //    EMAIL:email,
  //    LOAN_TYPE:"test@gmail.com"
  //  };
  //    Smartech.setIdentity(payloadata.EMAIL);
  //    Smartech.track("Pay_Loan_StepThree_PayWith_Fidelity", payloadata);
  
    this.navCtrl.push('PaywithcardPage');
  }

  paywithatm() {
    this.navCtrl.push('PaywithatmPage');
  }

  paywithtransfer() {
    let email= this.session._getEmail();
    console.log('my email is', email)
  
    const payloadata = {
     EMAIL:email,
   };
     Smartech.setIdentity(payloadata.EMAIL);
     Smartech.track("Pay_Loan_StepThree_PayWith_Fidelity", payloadata);
    this.navCtrl.push('PaywithtransferPage');
  }

  paywithBankTransfer() {
    let email= this.session._getEmail();
    console.log('my email is', email)
    const payload = {
      EMAIL:email
      }
      Smartech.setIdentity(payload.EMAIL);
      Smartech.track("Pay_Loan_StepThree_PayWith_Fidelity",payload);
    this.navCtrl.push('DirectdebitPage')
  }



}
