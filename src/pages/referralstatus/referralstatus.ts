import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReferralstatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referralstatus',
  templateUrl: 'referralstatus.html',
})
export class ReferralstatusPage {

  status: boolean;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.status = this.navParams.get('success');
  }

  cancel() {
    this.viewCtrl.dismiss('close');
  }

  gotoMenu() {
    this.navCtrl.setRoot('DashboardPage');
  }

  referAnother() {
    this.viewCtrl.dismiss();
  }

}
