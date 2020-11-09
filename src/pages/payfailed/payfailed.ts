import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PayfailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payfailed',
  templateUrl: 'payfailed.html',
})
export class PayfailedPage {
  failed: any ={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.failed = this.navParams.get('failed');
    console.log(this.failed)
  }

    ionViewWillEnter() {
    this.navCtrl.swipeBackEnabled = false;
  }

  ionViewWillLeave() {
    this.navCtrl.swipeBackEnabled = true;
  }


  done() {
    this.navCtrl.popTo('DirectdebitPage');
  }

}
