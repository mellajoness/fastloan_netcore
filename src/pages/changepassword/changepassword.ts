import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loader, Api, Session } from '../../providers';
/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {

  isReadyToProceed: boolean;

  form: FormGroup;

  phoneNumber: string;

  sessionKey: string;

  constructor(public loading: Loader, public api: Api, public session: Session, formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.form = formBuilder.group({
      currentPassword: ['', Validators.compose([Validators.required])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToProceed = this.form.valid;
    });
  }

  ionViewDidLoad() {
    this.phoneNumber = this.session._getPhoneNumber();
    this.sessionKey = this.session._getSessionKey();
  }

  submit() {
    this.loading.show('Changing your password...');
    var req = {
      oldPassword: this.form.value.currentPassword,
      phoneNumber: this.phoneNumber,
      newPassword: this.form.value.newPassword,
      confirmNewPassword: this.form.value.confirmPassword
    };
    console.log(req)
    this.api.post('login-changePassword', req, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      this.loading.hide();
      if(res.code == '00') {
        this.api.messageHandler('Password changed successfully', 5000, 'top');
        this.navCtrl.setRoot('DashboardPage');
      }
      else {
        this.api.messageHandler('Incorrect/Wrong Password Entered', 5000, 'top');
      }
    }, (error: any) => {
      this.loading.hide();
      this.api.messageHandler(error.error.message, 5000, 'top');
      console.log(error);
    })
  }

}
