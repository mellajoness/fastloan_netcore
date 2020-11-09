import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FailurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-failure',
  templateUrl: 'failure.html',
})
export class FailurePage {
  failure: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    this.failure = this.navParams.get('failure');
    console.log(this.failure)
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
