import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Loader, Api, Session} from '../../providers';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Headers,RequestOptions } from '@angular/http';
import moment from 'moment';
declare let Smartech:any;
/**
 * Generated class for the ConfirmloanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmloan',
  templateUrl: 'confirmloan.html',
})
export class ConfirmloanPage {

  request: any = [];

  expirydate: string;

  loanwithinterest: any = "computing...";

  principal: any = "loading..."

  phoneNumber: string;

  sessionKey: string;

  constructor(public session: Session, public alertCtrl: AlertController, public storage: Storage, public navCtrl: NavController, public navParams: NavParams, public loading: Loader, public api: Api) {
  }

  ionViewDidLoad() {

    this.phoneNumber = this.session._getPhoneNumber();

    this.sessionKey = this.session._getSessionKey();


    this.request = this.navParams.get("request");
    console.log('Request Data',this.request);
    let formatedExpiryDate =  this.request.expiration.substring(0,8);
    this.expirydate = moment(formatedExpiryDate).format('dddd, DD MMMM, YYYY');

    setTimeout(() => {
      this.computeInterest();
      this.getPrincipal();
    }, 500);
  }

  computeInterest() {
    let interest =  parseFloat(this.request.principal) * parseFloat(this.request.fee) / 100;
    let myloanwithinterest = parseFloat(this.request.principal) + interest;
    this.loanwithinterest = myloanwithinterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  }

  getPrincipal() {
    this.principal =  this.request.principal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  confirm() {
    this.loading.show("Disbursing your loan...");
    var req = {
      accountId: this.request.accountId,
      clientNo: this.phoneNumber,
      offerId: this.request.offerId,
      accountNo: this.request.censoredAccountNo,
      expiration: this.request.expiration,
      fee: this.request.fee,
      principal: this.request.principal,
      term: this.request.term,
      timestamp: this.request.timestamp
    };
    this.api.post('Loan/submit-new-loan', req, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      this.loading.hide();
      if(res.code == '00') {
        var details = {
          loanwithinterest: this.loanwithinterest,
          expiryDate: this.expirydate,
          censoredAccountNo: this.request.censoredAccountNo
        };



        let custId= this.session._getCustID();
        console.log('my email is', custId)
        const payloadata = {
         CUSTOMER_ID:custId 
       
       };
         Smartech.setIdentity(payloadata.CUSTOMER_ID);
         Smartech.track("DISBURSEMENT_SUCCESSFUL", payloadata);

        this.navCtrl.push('DisbursedPage', {details:details});
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'Book Loan',
          subTitle: res.message,
          buttons: ['Ok']
        });
        alert.present();

        let custId= this.session._getCustID();
        console.log('my email is', custId)
        const payloadata = {
         CUSTOMER_ID:custId 
       
       };
         Smartech.setIdentity(payloadata.CUSTOMER_ID);
         Smartech.track("DISBURSEMENT_FAILURE", payloadata);

      }
    }, (error: any) => {
      this.loading.hide();
      console.log("error", error);
      this.api.messageHandler(error.error.message);
    })
  }

  reject() {
    this.navCtrl.push('RejectloanPage');
  }

  gotoTerms() {
    this.navCtrl.push('TermsPage');
  }

  gotoDisclaimer() {
    this.navCtrl.push('DisclaimerPage');
  }
}
