import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loader, Api, Session } from '../../providers';
import { Idle } from '@ng-idle/core';
import { Device } from '@ionic-native/device';

/**
 * Generated class for the NewregPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newreg',
  templateUrl: 'newreg.html',
})
export class NewregPage {
  isReadyToProceed: boolean;

  newreg: FormGroup;

  phoneNumber: string;

  data: any;

  constructor(public idle: Idle, public session: Session, public loading: Loader, public api: Api, public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, private device: Device) {
    this.newreg = formBuilder.group({
      secretQuestion: ['', Validators.required],
      secretAnswer: ['', Validators.required],
      secretQuestionHint: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
    });

    this.newreg.valueChanges.subscribe((v) => {
      this.isReadyToProceed = this.newreg.valid;
    });
  }


  ionViewDidLoad() {
    this.data = this.navParams.get('wholeData');
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

  // gotoNext() {
  //   document.getElementById("secondForm").style.display = "block";
  //   document.getElementById("firstForm").style.display = "none";
  // }

  // gotoPrevious() {
  //   document.getElementById("secondForm").style.display = "none";
  //   document.getElementById("firstForm").style.display = "block";
  // }

  newRegistration() {
    if(this.newreg.value.password != this.newreg.value.confirmPassword) {
      this.api.messageHandler('Password does not match', 5000, 'bottom');
      return;
    }
    this.loading.show('Updating your account...');
    var req = {
      confirmPassword: this.newreg.value.confirmPassword,
      password: this.newreg.value.password,
      secretAnswer: this.newreg.value.secretAnswer,
      secretQuestion: this.newreg.value.secretQuestion,
      secretQuestionHint: this.newreg.value.secretQuestionHint,
       phoneNumber: this.data.phoneNumber,
       deviceId: this.device.uuid
       //deviceId: 'df1284ucnod'
    };

    console.log(req, 'Body');
    this.api.post('reregister-user', req).subscribe((res: any) => {
      console.log('ReReg Response', res);
      this.loading.hide();
      if(res.code == '00') {
        this.session._setPhoneNumber(this.data.phoneNumber);
        this.session._setSessionKey(this.data.sessionKey);
        this.session._setEmail(this.data.emailAddress);
        this.session._setFirstname(this.data.firstName);
        this.session._setLastname(this.data.lastName);

        this.navCtrl.setRoot('DashboardPage');
      }
      else {
        this.api.messageHandler(res.message, 5000, 'top');
      }

    }, (error:any) => {
      this.loading.hide();
      this.api.messageHandler(error.error.message, 5000, 'top');
    })
  }
}
