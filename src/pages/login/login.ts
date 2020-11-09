import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { IonicPage, NavController, MenuController, ToastController} from 'ionic-angular';
import { Idle } from '@ng-idle/core'

import { User } from '../../providers';
import { Loader, Api, Session } from '../../providers';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  isReadyToProceed: boolean;

  form: FormGroup;

  // Our translated text strings
  private loginErrorString: string;

  phoneNumber: string;

  isFingerPrint: boolean;

  hasFingerPrint: boolean = false;

  //fingerprintOptions : FingerprintOptions;

  constructor(public navCtrl: NavController,
    public user: User,
    public api: Api,
    public idle: Idle,
    public toastCtrl: ToastController,
    public loading: Loader,
    public storage: Storage,
    public session: Session,
    formBuilder: FormBuilder,
    public menu: MenuController,
    private faio: FingerprintAIO,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })

    this.form = formBuilder.group({
      phoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('[0-9]{11}')])],
      isFingerPrint: [false]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToProceed = this.form.valid;
    });

  }

  ionViewWillEnter() {
    this.idle.stop();
  }

  ionViewWillLeave() {
    this.idle.watch();
  }

  ionViewDidEnter() {
    //this.menu.enable(false);
    /*this.faio.isAvailable().then(result =>{
      result == 'finger' ? this.hasFingerPrint = true : console.log('device does not have finger print');
    });
    this.storage.get("usingBiometric").then((res) => {
      if(res) {
          this.storage.get("phoneNumber").then((PhoneNumber) => {
            this.form.value.phoneNumber = PhoneNumber;
            this.showFingerprintAuthDlg();
          })
      }
      return;
    })*/
  }

  FingerPrintAuth() {
    if(this.form.value.isFingerPrint) {
      this.showFingerprintAuthDlg();
    }
    return;
  }

  showFingerprintAuthDlg(){
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // Only Android
      localizedFallbackTitle: 'Use Pin', // Only iOS
      localizedReason: 'Please authenticate'
    })
          .then((result: any) => {
            this.storage.set("usingBiometric", true);
            this.storage.set("phoneNumber", this.form.value.phoneNumber);
            this.doContinue();
          })
          .catch((error: any) => console.log(error));
    /*this.fingerprintOptions = {
        clientId: 'fingerprint-Demo',
        clientSecret: 'password', //Only necessary for Android
        disableBackup:true  //Only for Android(optional)
    }*/

  }

  doContinue() {
    this.phoneNumber = this.session._injectCountryCode(this.form.value.phoneNumber);
    console.log('Phone Number', this.phoneNumber);
    this.loading.show('Sending OTP to phone...');
      this.api.get('Mobile/request-verification/' + this.phoneNumber).subscribe((res: any) => {
        this.loading.hide();
        console.log(res);
        if(res.code == '00') {
          this.navCtrl.push('RegisterPage', {phone: this.phoneNumber});
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
