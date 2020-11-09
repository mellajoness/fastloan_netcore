import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController} from 'ionic-angular';
import { Loader, Api, Session } from '../../providers';
import { Storage } from '@ionic/storage';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Headers,RequestOptions } from '@angular/http';
declare let Smartech:any;
/**
 * Generated class for the PaywithcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paywithcard',
  templateUrl: 'paywithcard.html',
})
export class PaywithcardPage {

  hasCard: boolean;

  isReadyToProceed: boolean;

  phoneNumber: string;

  sessionKey: string;

  cards: any = [];

  isBusy: boolean = false;
  formatedPhoneNumber: any;
  bankName: string;

  constructor(public _InAppBrowser: InAppBrowser, public session: Session, public alertCtrl: AlertController, public toastCtrl: ToastController, public api: Api, public storage: Storage, public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public loading: Loader) {
  }

  ionViewDidLoad() {
    this.phoneNumber = this.session._getPhoneNumber();
    this.formatedPhoneNumber = this.session._formatPhoneNumber(this.phoneNumber);
    
 

    this.sessionKey = this.session._getSessionKey();

    //setTimeout(() => {
      this.getpaymentCards();
    //}, 500);
  }

  showCardalert() {
    let cardAlert =  this.alertCtrl.create({
      title: 'Cards',
      subTitle: 'You currently do not have any card registered with us, kindly add a new card to pay with.',
      buttons: ['Dismiss']
    });
    cardAlert.present();
  }

  doRefresh(refresher) {
    this.getpaymentCards();

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }


  addCardDetails() {
    this.loading.show('Fetching link...');
    this.api.get('Payments/get-cards-registration-link',{'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res:any) => {
      this.loading.hide();
      console.log(res);
      if(res.code == '00') {
        let target = "_self";
        //let target = "_blank";
        //let target = "_system";
        var options = "location = yes";
        const browser = this._InAppBrowser.create('https://' + res.message, target, options);
        browser.on('exit').subscribe(event => {
          this.getpaymentCards();
        });
      }
      else {
        this.api.messageHandler(res.message, 5000, 'top');
      }
    }, (error) => {
      this.loading.hide();
      console.log(error);
      this.api.messageHandler(error.error.message);
    })
  }

  getpaymentCards() {
    this.loading.show('Fetching payment cards...');
    this.isBusy = true;
    this.api.get('Payments/get-payment-cards', {'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      console.log('get card ',res)
      if(res.code == '00') {
        this.cards = res.data;
        console.log('card',this.cards)
      }
      else {
        this.api.messageHandler(res.message, 5000, 'top');
      }
    }, (error: any) => {
      this.api.messageHandler(error.error.message);
    }, () => {
      this.loading.hide();
      this.isBusy = false;
    })
  }

  payWith(card) {
    if (card.bankCode == '070') {
      this.bankName = "Fidelity Bank";
    }
    if (card.bankCode  == '033') {
      this.bankName= "UBA";
    }
    if (card.bankCode  == '050') {
      this.bankName= "Eco Bank";
    }
    if (card.bankCode  == '044') {
      this.bankName= "Access Bank";
    }
    if (card.bankCode  == '063') {
      this.bankName= "Diamond Bank";
    }
    if (card.bankCode  == '014') {
      this.bankName= "Mainstreet Bank";
    }
    if (card.bankCode  == '082') {
      this.bankName= "Keystone Bank";
    }
    if (card.bankCode  == '084') {
      this.bankName= "Enterprise Bank";
    }
    if (card.bankCode  == '011') {
      this.bankName= "First Bank";
    }
    if (card.bankCode  == '214') {
      this.bankName= "FCMB";
    }
    if (card.bankCode  == '032') {
      this.bankName= "Union Bank";
    }
    if (card.bankCode  == '232') {
      this.bankName= "Sterling Bank";
    }
    if (card.bankCode  == '076') {
      this.bankName= "Polaris Bank";
    }
    if (card.bankCode  == '058') {
      this.bankName= "GTB";
    }
    if (card.bankCode  == '215') {
      this.bankName= "Unity Bank";
    }
    if (card.bankCode  == '057') {
      this.bankName= "Zenith Bank";
    }
    if (card.bankCode  == '023') {
      this.bankName= "Citi Bank";
    }
    if (card.bankCode  == '039') {
      this.bankName= "Stanbic IBTC Bank";
    }
    if (card.bankCode  == '068') {
      this.bankName= "Standard Chartered";
    }
    if (card.bankCode  == '035') {
      this.bankName= "Wema Bank";
    }
    if (card.bankCode  == '301') {
      this.bankName= "Jaiz Bank";
    }
    if (card.bankCode  == '030') {
      this.bankName= "Heritage Bank";
    }

  
   console.log('bank',this.bankName)
    let email= this.session._getEmail();
    const payload = {
      EMAIL: email,
      LOAN_TYPE: "Migo",
      BANK: this.bankName
      }
      Smartech.setIdentity(payload.EMAIL);
      Smartech.track("Pay_Loan_StepThree_WithCard",payload);


    let pay = this.modal.create('CardlistPage', {card: card});
    pay.onDidDismiss((param ?:any) => {
      if(param) {
        if (!param.success) return;
       
        this.navCtrl.push('PaysuccessPage', {amountPaid: param.amount, payWithCardResponse: param.res});
      }
    })
    pay.present();
  }

  showCardlist() {
    let cardlist = this.modal.create('CardlistPage', {cards: this.cards});
    cardlist.onDidDismiss((item) => {
      console.log(item);
    })
    cardlist.present();
  }

  /*payLoan () {
    this.loading.show("processing payment...");
    setTimeout(() => {
      this.loading.hide();
      let success = this.modal.create('PaysuccessPage');
      success.onDidDismiss((item) => {
          this.navCtrl.setRoot('DashboardPage');
      })
      success.present();
    }, 5000);
  }*/


  /*addCardDetailsd() {
    let addcard = this.modal.create('CarddetailsPage');
    addcard.onDidDismiss((item) => {
      if(item) {
        this.loading.show("Adding card...");
        setTimeout(() => {
          this.loading.hide();
          console.log(item);
          this.hasCard = true;
          this.isReadyToProceed = true;
        }, 5000);
      }
    })
    addcard.present();
  }*/


}
