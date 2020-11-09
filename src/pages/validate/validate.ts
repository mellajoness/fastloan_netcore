import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Api, Loader, Session } from '../../providers';
import { Idle } from '@ng-idle/core'
/**
  Created by Akobundu Michael(Bundle AKA Mr Bitches(P7543))
 */

@IonicPage()
@Component({
  selector: 'page-validate',
  templateUrl: 'validate.html',
})
export class ValidatePage {

  public passcode: string = "";

  public phoneNumber: string;

  formatedNumber: string;

  constructor(public idle: Idle, public session: Session, public navCtrl: NavController, public toastCtrl: ToastController, public menu: MenuController, public navParams: NavParams, public loading: Loader, public api: Api, public storage: Storage) {
  }

  ionViewDidLoad() {
    this.phoneNumber = this.navParams.get('phone');
    this.formatedNumber = this.session._formatPhoneNumber(this.phoneNumber);
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ionViewWillEnter() {
    this.idle.stop();
  }

  ionViewWillLeave() {
    this.menu.enable(true);
    this.idle.watch();
  }


  retry() {
    this.loading.show('Re-sending OTP');
    this.api.get('request-verification/' + this.phoneNumber).subscribe((res: any) => {
        this.loading.hide();
        if(res.code == '00') {
          this.api.messageHandler('OTP sent to ' + this.phoneNumber + ' :)', 5000);
        }
        else {
          this.api.messageHandler(res.message, 5000);
        }
      }, (error) => {
        this.loading.hide();
        this.api.messageHandler(error.error.message);
      })
  }

  add(value) {
      if (this.passcode.length < 4) {
        this.passcode = this.passcode + value;
        if (this.passcode.length == 1) {
          document.getElementById("firstinput").style.borderBottom = "1px solid #E5E5E5";
          document.getElementById("secondinput").style.borderBottom = "2px solid #1ABE2A";
        }
        else if (this.passcode.length == 2) {
          document.getElementById("secondinput").style.borderBottom = "1px solid #E5E5E5";
          document.getElementById("thirdinput").style.borderBottom = "2px solid #1ABE2A";
        }
        else if (this.passcode.length == 3) {
          document.getElementById("thirdinput").style.borderBottom = "1px solid #E5E5E5";
          document.getElementById("fourthinput").style.borderBottom = "2px solid #1ABE2A";
        }
        else if (this.passcode.length == 4) {
          console.log(this.passcode);
          document.getElementById("fourthinput").style.borderBottom = "1px solid #E5E5E5";
          this.loading.show('Authenticating...');
            let req = {
              phoneNumber: this.phoneNumber,
              verificationCode: this.passcode
            };
            console.log(req);
            this.api.post('verify-code', req).subscribe((res: any) => {
              this.loading.hide();
              console.log("res", res);
              if(res.code == '00') {
                //this.session._setPhoneNumber(this.phoneNumber);
                //this.session._setSessionKey(res.sessionId);

                //this.navCtrl.setRoot('DashboardPage');
                this.navCtrl.push('RegisterPage',{phone:this.phoneNumber});
              }
              else {
                this.api.messageHandler(res.message, 5000);
              }
            }, (error) => {
              this.loading.hide();
              this.api.messageHandler(error.error.message);
            })
        }
      }
    }

    delete() {
      if (this.passcode.length > 0) {
        this.passcode = this.passcode.substring(0, this.passcode.length - 1);
        if(this.passcode.length == 3) {
          document.getElementById("fourthinput").style.borderBottom = "2px solid #1ABE2A";
        }
        if(this.passcode.length == 2) {
          document.getElementById("thirdinput").style.borderBottom = "2px solid #1ABE2A";
          document.getElementById("fourthinput").style.borderBottom = "1px solid #E5E5E5";
        }
        if(this.passcode.length == 1) {
          document.getElementById("secondinput").style.borderBottom = "2px solid #1ABE2A";
          document.getElementById("thirdinput").style.borderBottom = "1px solid #E5E5E5";
        }
        if(this.passcode.length == 0) {
          document.getElementById("firstinput").style.borderBottom = "2px solid #1ABE2A";
          document.getElementById("secondinput").style.borderBottom = "1px solid #E5E5E5";
        }
      }
    };

}
