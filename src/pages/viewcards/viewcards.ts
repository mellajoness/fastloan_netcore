import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewcardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewcards',
  templateUrl: 'viewcards.html',
})
export class ViewcardsPage {

  isReadyToProceed : boolean = false;

  cardadded : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.cardadded = this.navParams.get("cardAdded"); 
    if (this.cardadded) this.isReadyToProceed = true;
  }

  gotoConfirmLoan() {
    this.navCtrl.push('ConfirmloanPage');
  }
}
