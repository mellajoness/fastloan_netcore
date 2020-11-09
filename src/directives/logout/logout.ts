import { Directive, HostListener } from '@angular/core';
import { Config, NavController, Platform, AlertController} from 'ionic-angular';
import { Settings, Session } from '../../providers';

/**
Created by Akobundu Michael Bundle (P7543)
 */
@Directive({
  selector: '[logout]' // Attribute selector
})
export class LogoutDirective {

  constructor(public session: Session, public alertCtrl: AlertController, public navCtrl: NavController) {
    //console.log('Hello LogoutDirective Directive');
  }

  @HostListener('click') onClick() {
          if (this.session.isAlertUp) return;
          this.session.isAlertUp = true;
          let confirmAlert = this.alertCtrl.create({
                  title: "Logout",
                  message: "Are you sure you want to logout ?",
                  buttons: [
                      {
                          text: 'No',
                          handler: () => {
                              return;
                          }
                      },
                      {
                          text: 'Yes',
                          handler: () => {
                            this.session._destroy();
                            this.navCtrl.setRoot('SigninPage', {}, {
                              animate: true,
                              direction: 'forward'
                            });
                          }
                      }
                  ]
              });
              confirmAlert.onDidDismiss(() => {
                this.session.isAlertUp = false;
              })
              confirmAlert.present();
  }

}
