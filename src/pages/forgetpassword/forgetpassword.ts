import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loader, Api, Session } from '../../providers';
import { Idle } from '@ng-idle/core';
import { Device } from '@ionic-native/device';
declare let Smartech:any;
/**
 * Generated class for the ForgetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html',
})
export class ForgetpasswordPage {

  isReadyToProceed: boolean;

  form: FormGroup;

  phoneNumber: string;

  // additon starts

  hintStyle: string;

  // additon close

  question: string;

  isBusy: boolean = false;

  hasQuestion: boolean = false;

  // additon starts
  hasHint: boolean = false;

  // additon close

  secretQuestionTryCount : number = 0;

  constructor(private device: Device, public idle: Idle, public loading: Loader, public api: Api, public session: Session, formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {

    this.form = formBuilder.group({
      answer: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('[0-9]{11}')])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
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
  getSecretQuestion() {

    // this.secretQuestionTryCount++;
      this.isBusy = true;
      var req =  {
        //deviceId: this.device.uuid,
        deviceId: '79b8f6b41479cde4',
        phoneNumber: this.session._injectCountryCode(this.form.value.phoneNumber)
      }
      console.log('Forgot Password Body', req)
      this.api.post('login-controller/forget-password', req).subscribe((res: any) => {
        console.log('Forgot Response', res);
        this.isBusy = false;

        if(res.code == '00') {
          this.question = res.data.secretQuestion;
          this.hasQuestion = true;
        
          return;
        }

        this.api.messageHandler(res.message, 5000, 'top');
      
        //I did this for the purpose of Hint

        // if(res.code == '99') {
        //   this.question = res.data.secretQuestion;
        //   this.hasQuestion = true;
        // } else if(res.code == '88'){
        //   this.hintStyle = res.data.hint
        //   this.hasHint = true;
        // } else if(res.code !== '99' && res.code !=='88'){
        //   this.api.messageHandler(res.message, 5000, 'top');
        // } else {
        //   return;
        // }

      }, (error) => {
        console.log(error);
        this.isBusy = false;
        this.api.messageHandler(error.error.message);
      })
  }

  press(val) {
    if(val.length == 11) {
      this.getSecretQuestion();
    }
  }

  submit () {
    this.loading.show('Reseting your password...');
    var req = {
      confirmPassword: this.form.value.confirmPassword,
      password: this.form.value.newPassword,
      phoneNumber: this.session._injectCountryCode(this.form.value.phoneNumber),
      secretAnswer: this.form.value.answer,
      //deviceId: this.device.uuid
      deviceId: '79b8f6b41479cde4'
    };
    console.log('Reset Body', req);
    this.api.post('login-controller/reset-password', req).subscribe((res: any) => {
      console.log('Reset Password Response', res);
      this.api.messageHandler(res.message);
      if(res.code == '00') {
        
        let email= this.session._getEmail();
        let custId= this.session._getCustID();
        console.log('my email is', email)
        console.log('my cust id', custId)
        const payload = {
          CUSTOMER_ID :custId,
          EMAIL:email 
        }
        Smartech.setIdentity(payload.CUSTOMER_ID);
        Smartech.track("FORGET_PASSWORD_SUCCESSFUL",payload);
        this.navCtrl.push('SigninPage');
      }
      else{
        this.api.messageHandler(res.message);

        let email= this.session._getEmail();
        let custId= this.session._getCustID();
        console.log('my email is', email)
        console.log('my cust id', custId)
        const payload = {
          CUSTOMER_ID :custId,
          EMAIL:email 
        }
        Smartech.setIdentity(payload.CUSTOMER_ID);
        Smartech.track("FORGET_PASSWORD_STEP_1_FAILED",payload);


      }
    }, (error: any) => {
      this.api.messageHandler("An error occured, please try again");
    }, () => {
      this.loading.hide();
    })
  }

  gotoLogin() {
    this.navCtrl.push('SigninPage');
  }


}
