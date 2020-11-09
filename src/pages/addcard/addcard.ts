import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import { Loader, Api, Session } from '../../providers';
import { Storage } from '@ionic/storage';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Headers,RequestOptions } from '@angular/http';

declare let Smartech:any;
/**
 * Generated class for the AddcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcard',
  templateUrl: 'addcard.html',
})
export class AddcardPage {

  hasCard: boolean;

  isReadyToProceed: boolean;

  phoneNumber: string;

  sessionKey: string;

  cards: any = [];

  request : any = {};

  constructor(public session: Session, private _InAppBrowser: InAppBrowser, public toastCtrl: ToastController, public storage:Storage, public api: Api, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modal: ModalController, public loading: Loader) {
  }

  ionViewDidLoad() {

    this.request = this.navParams.get("request");
    console.log(this.request);

    this.phoneNumber = this.session._getPhoneNumber();

    this.sessionKey = this.session._getSessionKey();

    this.getpaymentCards();

  }

  getpaymentCards() {
    this.loading.show('Fetching payment cards...');
    this.api.get('Payments/get-payment-cards', {'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      console.log('get card',res);
      if(res.code == '00') {
        this.cards = res.data;
      }
      else {
        this.api.messageHandler(res.message);
      }
    }, (error: any) => {
      this.api.messageHandler(error.error.message);
    }, () => {
        this.loading.hide();
    })
  }

  doRefresh(refresher) {
    this.getpaymentCards();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  addCardDetails() {
    let email= this.session._getEmail();
    const payload = {
      EMAIL:email
        }
        Smartech.setIdentity(payload.EMAIL);
        Smartech.track("Loan_Offer_StepThree_Add_Card",payload);


    this.loading.show('Fetching link...');
    this.api.get('Payments/get-cards-registration-link', {'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res:any) => {
      console.log('add card',res)
      if(res.code == '00') {

        let email= this.session._getEmail();
        console.log('my email is', email)
        const payloadata = {
         EMAIL:email
       };
         Smartech.setIdentity(payloadata.EMAIL);
         Smartech.track("ADDCARD_LOGIN", payloadata);

        let target = "_self";
        //let target = "_blank";
        var options = "location = yes";
        const browser = this._InAppBrowser.create('https://' + res.message, target, options);
        browser.on('exit').subscribe(event => {
          this.getpaymentCards();
        });
      }
      else {
        
        let email= this.session._getEmail();
        console.log('my email is', email)
      
        const payloadata = {
         EMAIL:email,
         REASON_FOR_FAILURE:res.message
       };
         Smartech.setIdentity(payloadata.EMAIL);
         console.log("card successful")
         Smartech.track("ADD_CARD_FAILED", payloadata);


        this.api.messageHandler(res.message);
      }
    }, (error) => {
      this.api.messageHandler(error.error.message);
    }, () => {
      this.loading.hide();
    })
  }

  showCardlist() {
    let cardlist = this.modal.create('CardlistPage', {cards: this.cards});
    cardlist.present();
  }

  gotoConfirm() {
    this.navCtrl.push('ConfirmloanPage', {request: this.request});
  }

  exitLoanOffer() {
    this.navCtrl.push('DashboardPage');
  }

}
