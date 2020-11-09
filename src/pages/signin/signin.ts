import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, MenuController, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { Loader, Api, Session } from '../../providers';
import { Idle, WindowInterruptSource } from '@ng-idle/core';
import { Device } from '@ionic-native/device';
import { Platform } from 'ionic-angular';

 declare let Smartech:any;
// import Smartech from 'smartech-cordova';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  Smartech:any;
  isReadyToProceed: boolean;
  
  form: FormGroup;

  isFingerPrint: boolean;

  sessionExpired: boolean = false;

  hasFingerPrint: boolean = false;

  //  appVersion: string = '0.0.6';  live
   appVersion: string = '1';


  constructor(private device: Device, public menu: MenuController, public alertCtrl: AlertController, public viewCtrl: ViewController, public idle: Idle, public storage: Storage, public session: Session, private faio: FingerprintAIO, public loading: Loader, public api: Api, formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.form = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('[0-9]{11}')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      isFingerPrint: [false]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToProceed = this.form.valid;
    });
  }

  ionViewDidLoad() {

  }
  ionViewWillEnter() {
    this.menu.enable(false);
    this.idle.stop();
  }

  ionViewWillLeave() {
    this.menu.enable(true);
    this.idle.watch();
  }

  ionViewDidEnter() {
    this.sessionExpired = this.navParams.get('sessionExpired');
    if ( this.sessionExpired ) {
      console.log('Your session has expired');
      this.session._getExpiredSessionMsg();
    }
    this.faio.isAvailable().then(result => {
      result == 'finger' ? this.hasFingerPrint = true : console.log('device does not have finger print');
    });
    this.storage.get("usingBiometric").then((res) => {
      if(res) {
          this.storage.get("phoneNumber").then((PhoneNumber) => {
            if(PhoneNumber) {
              this.form.value.username = PhoneNumber;
              this.storage.get("password").then((password) => {
                this.form.value.password = password;
                this.showFingerprintAuthDlg();
              })
            }
          })
      }
      return;
    })
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
            this.session._closeExpiredSessionMsg();
            this.storage.set("usingBiometric", true);
            this.storage.set("phoneNumber", this.form.value.username);
            this.storage.set("password", this.form.value.password);
            this.doLogin();
          })
          .catch((error: any) => console.log(error));
    /*this.fingerprintOptions = {
        clientId: 'fingerprint-Demo',
        clientSecret: 'password', //Only necessary for Android
        disableBackup:true  //Only for Android(optional)
    }*/

  }

  gotoLogin() {
    this.navCtrl.push('LoginPage');
  }

 doLogin() {
    this.loading.show('Logging in...');
    var req = {
      password: this.form.value.password,
      phoneNumber: this.session._injectCountryCode(this.form.value.username),
      deviceId: '79b8f6b41479cde4',  
      appVersion: this.appVersion,
      // deviceId: 'df1284ucnod',

      
      //deviceId: this.device.uuid,

     

      // deviceId: 'df1284ucnod' //is a hard coded device id

     

     //deviceId: 'a39fd1e4153d329a' //is a hard coded device id
    };     
console.log('Body', req);
    this.api.postLogin('login-controller/login', req).subscribe((res:any) => {
      console.log('Login Response', res);
      this.loading.hide();
      if(res.code == '00') {
        this.session._setPhoneNumber(res.data.phoneNumber);
        this.session._setSessionKey(res.data.sessionKey);
        this.session._setEmail(res.data.emailAddress);
        this.session._setFirstname(res.data.firstName);
        this.session._setLastname(res.data.lastName);
         this.session._setCustID(res.data.customerId)

       let email= this.session._getEmail();
       let custId= this.session._getCustID();
       console.log('my email is', email)
       console.log('my cust id', custId)

       const payloadata = {
        CUSTOMER_ID :custId,
        EMAIL:email 
      
      };
        Smartech.setIdentity(payloadata.CUSTOMER_ID);
        Smartech.login(payloadata.CUSTOMER_ID);
        console.log("Login successful")
        Smartech.track("USER_LOGIN", payloadata);
        


        this.navCtrl.setRoot('DashboardPage');
      }
       else if(res.code == '012' && this.platform.is('android')){
        const alert = this.alertCtrl.create({
          title: '<strong>Update Required!</strong>',
          message: res.message,
          buttons: [
            {
              text: 'Update',
              handler: () => {
                window.open('https://play.google.com/store/apps/details?id=io.fidelity.flashlend', '_system')
                console.log('Confirm Okay');
              }
            }
          ]
        });
        alert.present();
      } else if (res.code == '012' && this.platform.is('ios')){
        const alert = this.alertCtrl.create({
          title: '<strong>Update Required!</strong>',
          message: res.message,
          buttons: [
             {
              text: 'Update',
              handler: () => {
                // window.open('https://google.com.ng', '_system')
                console.log('Confirm Okay');
              }
            }
          ]
        });
        alert.present();
      }
      else {
        this.api.messageHandler(res.message, 5000, 'top');
      }
    }, (error:any) => {
      this.loading.hide();
      this.api.messageHandler(error.error.message, 5000, 'top');
    })
  }

  gotoChangeDevice() {
    this.navCtrl.push('ChangedevicePage');
  }

  gotoForgotpassword () {
    this.navCtrl.push('ForgetpasswordPage');
  }

  // navigate(){
  //   this.navCtrl.push('NewregPage');
  // }

}
