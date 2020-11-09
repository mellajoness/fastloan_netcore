import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { AlertController} from 'ionic-angular';


@Injectable()
export class Session {
  _phoneNumber: any;
  _sessionKey: any;
  _email: any;
  _firstname: any;
  _lastname: any;
  alert: any;
  _custId:any;
  _isLoggedOut: boolean = false;

  isAlertUp: boolean = false;

  constructor(public alertCtrl: AlertController) { }


  _setSessionKey (sessionKey) {
      this._sessionKey = sessionKey;
  }

  _setPhoneNumber (phoneNumber) {
    this._phoneNumber = phoneNumber;
  }

  _getPhoneNumber () {
      return this._phoneNumber;
  }

  _getSessionKey () {
      return this._sessionKey;
  }

  _setEmail (email) {
      this._email = email;
  }

  _getEmail () {
      return this._email;
  }

  _setCustID (custId) {
    this._custId = custId;
}

_getCustID () {
   return this._custId 
}


  _setFirstname (firstname) {
      this._firstname = firstname;
  }

  _getFirstname () {
      return this._firstname;
  }

  _setLastname (lastname) {
      this._lastname = lastname;
  }

  _getLastname () {
      return this._lastname;
  }

  _formatPhoneNumber (phoneNumber) {
      return phoneNumber.replace(/^234+/, '0').replace(/(\d{4})(\d{3})(\d{4})/, "$1-$2-$3");
  }

  _injectCountryCode(phoneNumber) {
      return phoneNumber.replace(/^0+/, '234');
  }

  _getExpiredSessionMsg () {
    if (this.isAlertUp) return;
    this.isAlertUp = true;
    this.alert = this.alertCtrl.create({
        title: 'Logged out',
        subTitle: 'Your session has expired',
        buttons: ['Dismiss']
    });
    this.alert.onDidDismiss(() => {
        this.isAlertUp = false;
    })
    this.alert.present();
  }

  _closeExpiredSessionMsg () {
      if (!this.isAlertUp) return;
      this.alert.dismiss();
  }

  _checkIfLoggedOut () {
      return this._isLoggedOut;

  }

  _logout () {
            if (this.isAlertUp) return;
              this.isAlertUp = true;
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
                                this._destroy();
                                /*this.navCtrl.push('SigninPage', {}, {
                                  animate: true,
                                  direction: 'forward'
                                });*/
                              }
                          }
                      ]
                  });
                  confirmAlert.onDidDismiss(() => {
                    this.isAlertUp = false;
                  })
                  confirmAlert.present();
  }

  _destroy () {
      if((this._sessionKey == null || this._sessionKey == undefined) && (this._phoneNumber == null || this._phoneNumber == undefined) &&
      (this._email == null || this._email == undefined) &&
      (this._firstname == null || this._firstname == undefined) && (this._lastname == null || this._lastname == undefined)) {
          return;
      }
      this._sessionKey = null;
      this._phoneNumber = null;
      this._email = null;
      this._firstname = null;
      this._lastname = null;
      this._isLoggedOut = true;
  }
}
