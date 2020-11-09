import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loader, Api, Session} from '../../providers';

/**
 * Generated class for the DisbursedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disbursed',
  templateUrl: 'disbursed.html',
})
export class DisbursedPage {

  details: any = [];
  phoneNumber: string;
  sessionKey: string;

  constructor(public loading: Loader, public api: Api, public session: Session, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //Do something stupid
  }

  ionViewWillEnter() {
    this.navCtrl.swipeBackEnabled = false;

    this.sessionKey = this.session._getSessionKey();
    this.phoneNumber = this.session._getPhoneNumber();

    this.details = this.navParams.get("details");

    var req = {
        censoredAccountNumber: this.details.censoredAccountNo,
        phoneNumber: this.phoneNumber
    };
    this.api.post('Mobile/set-operative-account', req, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      console.log(res);
    }, (error: any) => {
      console.log("Error",error);
      this.api.messageHandler('An error occured while setting your disbursed account', 5000, 'bottom');
    })
  }

  ionViewWillLeave() {
    this.navCtrl.swipeBackEnabled = true;
  }

  openAccount() {
    this.navCtrl.push('OpenaccountPage');
  }

  gotodashboard() {
    this.navCtrl.setRoot('DashboardPage');
  }

}
