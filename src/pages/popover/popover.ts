import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { Session } from '../../providers';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  template:`
    <ion-list>
      <button ion-item (click)="gotoChangePassword()">Change Password</button>
      <button ion-item (click)="doLogout()">Logout</button>
    </ion-list>
  `,
})
export class PopoverPage {

  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController, public session: Session, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  gotoChangePassword () {
    this.viewCtrl.dismiss('Change password')
  }

  

  doLogout() {
    this.viewCtrl.dismiss('logout');
  }
  

}
