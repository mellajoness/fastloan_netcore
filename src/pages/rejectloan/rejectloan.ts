import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Api, Loader, Session } from '../../providers'

/**
  Created by Akobundu Michael (P7543)
 */

@IonicPage()
@Component({
  selector: 'page-rejectloan',
  templateUrl: 'rejectloan.html',
})
export class RejectloanPage {

  sessionKey: string;

  phoneNumber: string;

  constructor(public session: Session, public loading: Loader, public api: Api, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.sessionKey = this.session._getSessionKey();
    this.phoneNumber = this.session._getPhoneNumber();
  }

  ionViewWillEnter() {
    this.navCtrl.swipeBackEnabled = false;
  }

  ionViewWillLeave() {
    this.navCtrl.swipeBackEnabled = true;
  }

  gotodashboard() {
    this.navCtrl.setRoot('DashboardPage');
  }

  submit(reason) {
    this.loading.show("Logging your reason...");
    var req = {
      reason: reason,
      phoneNumber: this.phoneNumber
    };
    console.log('body',req)
    this.api.post('Loan/rejection-reason',  req,  this.api._injectAuth(this.sessionKey)).subscribe((res:any) => {
      console.log('rejrction response',res)
      this.loading.hide();
      if (res.code == '00') {
        this.api.messageHandler('Your reason has been logged successfully', 7000, 'bottom');
        this.gotodashboard();
        return;
      }
      this.api.messageHandler(res.message);
    }, (error : any) => {
      this.loading.hide();
      this.api.messageHandler(error.error.message);
    })
  }

}
