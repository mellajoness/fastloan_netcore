import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loader, Api, Session } from '../../providers';
import { Idle } from '@ng-idle/core';
import { Device } from '@ionic-native/device';
declare let Smartech:any;
/**
 * Generated class for the ChangedevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changedevice',
  templateUrl: 'changedevice.html',
})
export class ChangedevicePage {

  isReadyToProceed: boolean;

  form: FormGroup;

  phoneNumber: string;

  constructor(private device: Device, public idle: Idle, public loading: Loader, public api: Api, public session: Session, formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.form = formBuilder.group({
      phoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('[0-9]{11}')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])]
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

  submit() {
    var req = {
      phoneNumber: this.session._injectCountryCode(this.form.value.phoneNumber),
      password: this.form.value.password,
      //newDeviceId: this.device.uuid//'df1284ucnod'
      newDeviceId: 'qwerty'
    }
console.log('Change Device Body', req);
    this.loading.show('Changing your device...');
    this.api.post('login-controller/change-device', req).subscribe((res:any) => {
      console.log('Change Device Response', res);
      this.loading.hide();
      if(res.code == '00') {
        this.api.messageHandler('Device Changed Successfully', 5000, 'top');
        this.navCtrl.pop();


        let email= this.session._getEmail();
        console.log('my email is', email)
    
        const payload = {
          EMAIL: email,
          PHONE: this.phoneNumber,
        }
        Smartech.setIdentity(payload.EMAIL);
        Smartech.track("change device",payload);
    
      
      }


      this.api.messageHandler(res.message, 5000, 'top');
      let email= this.session._getEmail();
      console.log('my email is', email)
  
      const payload = {
        EMAIL: email,
        PHONE: this.phoneNumber,
      }
      Smartech.setIdentity(payload.EMAIL);
      Smartech.track("change failed",payload);
   }, 


    (error:any) => {
      this.loading.hide();
      this.api.messageHandler(error.error.message, 5000, 'top');
      console.log(error);
    });
  }

  gotoLogin() {
    this.navCtrl.pop();
    
  }

}
