import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PaysuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paysuccess',
  templateUrl: 'paysuccess.html',
})
export class PaysuccessPage {

  amount:string;
  success: any ={};
  PayWithCardRESP: any ={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.amount = this.navParams.get('amountPaid');
    this.success = this.navParams.get('success');
    this.PayWithCardRESP = this.navParams.get('payWithCardResponse');
    console.log(this.amount)
    console.log(this.success)
    console.log('PayWithCardResponse', this.PayWithCardRESP);
  }

  ionViewWillEnter() {
    this.navCtrl.swipeBackEnabled = false;
  }

  ionViewWillLeave() {
    this.navCtrl.swipeBackEnabled = true;
  }

  cancel () {
    this.viewCtrl.dismiss();
  }

  done() {
    this.navCtrl.setRoot('DashboardPage');
  }

}
