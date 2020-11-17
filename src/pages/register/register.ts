import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loader, Api, Session } from '../../providers';
import { Idle } from '@ng-idle/core';
import { Device } from '@ionic-native/device';
declare let Smartech:any;
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  isReadyToProceed: boolean;

  form: FormGroup;

  phoneNumber: string;

  appVersion: string = '0.0.6';

  constructor(public idle: Idle, public session: Session, public loading: Loader, public api: Api, public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, private device: Device) {
    this.form = formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      email: ['', Validators.required],
      secretQuestion: ['', Validators.required],
      secretAnswer: ['', Validators.required],
      otp: ['', Validators.required],
      // hint: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToProceed = this.form.valid;
    });
  }

  ionViewDidLoad() {
    this.phoneNumber = this.navParams.get('phone');
  }

  ionViewWillEnter() {
    this.idle.stop();
  }

  ionViewWillLeave() {
    this.idle.watch();
  }

  gotoLogin() {
    this.navCtrl.push('SigninPage');
  }

  gotoNext() {
    document.getElementById("secondForm").style.display = "block";
    document.getElementById("firstForm").style.display = "none";
  }

  gotoPrevious() {
    document.getElementById("secondForm").style.display = "none";
    document.getElementById("firstForm").style.display = "block";
  }

  doRegister() {
    if(this.form.value.password != this.form.value.confirmPassword) {
      this.api.messageHandler('Password does not match', 5000, 'bottom');
      return;
    }
    this.loading.show('Creating your account...');
    var req = {
      confirmPassword: this.form.value.confirmPassword,
      //confirmSecretAnswer: "string",
      emailAddress: this.form.value.email,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      password: this.form.value.password,
      phoneNumber: this.phoneNumber,
      secretAnswer: this.form.value.secretAnswer,
      secretQuestion: this.form.value.secretQuestion,
      otp: this.form.value.otp,
      //deviceId: this.device.uuid,
       deviceId: 'df1284ucnod',
      appVersion: this.appVersion,
      //  hint: this.form.value.hint,

    };

    console.log(req, 'Body');
    this.api.post('login-controller/register-user', req).subscribe((res: any) => {
      console.log('Register user Response', res)
      this.loading.hide();  
      if(res.code == '00') {

        this.session._setPhoneNumber(res.data.phoneNumber);
        this.session._setSessionKey(res.data.sessionKey);
        this.session._setEmail(res.data.emailAddress);
        this.session._setFirstname(res.data.firstName);
        this.session._setLastname(res.data.lastName);

        const payload = {
          EMAIL: this.form.value.email,
          PHONE: this.phoneNumber,
        }
        Smartech.setIdentity(payload.EMAIL);
        Smartech.track("register step 2",payload);

        
        // this.navCtrl.setRoot('DashboardPage');
         this.navCtrl.push('DashboardPage');
      }
      else {
        this.api.messageHandler(res.message, 5000, 'top');
      }

    }, (error: any) => {
      this.api.messageHandler(error.error.message);
    }, () => {
      this.loading.hide();  
    });
  }

}
