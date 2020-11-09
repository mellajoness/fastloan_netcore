import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Headers,RequestOptions } from '@angular/http';
import { Loader, Api, Session } from '../../providers';
declare let Smartech:any;
/**
 * Generated class for the RequestloanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requestloan',
  templateUrl: 'requestloan.html',
})
export class RequestloanPage {

  phoneNumber : string;
  sessionKey: string;

  offers: any = [];

  message: string;

  follow_up_message: string;

  request: any = {};

  userHasLoan: boolean = false;

  constructor( public translateService: TranslateService, public session: Session, public toastCtrl: ToastController, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams, public api: Api, public loading: Loader, public storage: Storage) {

  }

  ionViewDidLoad() {
    this.phoneNumber = this.session._getPhoneNumber();

    this.sessionKey = this.session._getSessionKey();

    this.getoffers();

  }

  getoffers () {
    this.loading.show('Fetching loan offers...');
            this.api.get('Loan/get-offers',{'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
              console.log(res);
              if(res.code == '00') {
                this.offers = res.data;
                // this.message = res.data.message;
                this.message = res.message == 'ok' ? 'Sorry we couldn\'t determine an offer for you' : res.message.replace("Client currently has", "You currently have");
                this.userHasLoan = res.message == 'ok' ? false : true;
                this.translateService.get('NOLOAN_OFFER_FOLLOWUP_MESSAGE').subscribe((value) => {
                  this.follow_up_message = value;
                })
              }
            }, (error) => {
              console.log(error);
              this.api.messageHandler(error.error.message);
            }, () => {
              this.loading.hide();
            })

  }

  gotoBalance () {
    this.navCtrl.push('LoanbalancePage');
  }

  decline() {
    this.navCtrl.pop();
  }

  selectLoan(offer) {
    this.loading.show('Selecting loan offer...');
    var req = {
      clientNo: this.phoneNumber,
      offerId: offer.id
    }
    this.api.post('Loan/select-loan-offer', req, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {

      if(res.code == '00') {
        this.request.offerId = offer.id;
        this.request.expiration = offer.expiration;
        this.request.fee = offer.fee;
        this.request.principal = offer.principal;
        this.request.term = offer.term;
        this.request.timestamp = offer.timestamp;
        this.navCtrl.push('SelectloanPage', {request: this.request});

        let email= this.session._getEmail();
        console.log('my email is', email)

        const payload = {
          EMAIL:email,
          OFFER_TYPE:'Migo'
            }
            Smartech.setIdentity(payload.EMAIL);
            Smartech.track("Loan_Offer_StepOne",payload);
      }
      else {
        this.api.messageHandler(res.message, 5000);
      }
    }, (error) => {
      this.api.messageHandler(error.error.message);
    }, () => {
      this.loading.hide();
    })

  }

}
