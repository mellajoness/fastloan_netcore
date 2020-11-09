import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AccountlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountlist',
  templateUrl: 'accountlist.html',
})
export class AccountlistPage {

  bankAccounts : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.bankAccounts = this.navParams.get('bankaccounts');
    console.log(this.bankAccounts);
  }

  accountSelected (item) {
    this.viewCtrl.dismiss(item);
  }

  cancel () {
    this.viewCtrl.dismiss();
  }

  gotoAddAccount (addaccount) {
    this.viewCtrl.dismiss(addaccount)
  }

}
