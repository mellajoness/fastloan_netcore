import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ToastController, Platform } from 'ionic-angular';
import { Loader, Api, Session } from '../../providers';
import { Storage } from '@ionic/storage';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Headers,RequestOptions } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-addaccount',
  templateUrl: 'addaccount.html',
})
export class AddaccountPage {

  isReadyToProceed: boolean;
  form: FormGroup;
  ownbank: boolean;
  phoneNumber: string;
  sessionKey: string;
  banks: any = [];
  isIos: boolean = false;
  constructor(public platform: Platform, public session: Session, public toastCtrl: ToastController, public api: Api, public storage: Storage, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public loading: Loader) {
    this.form = formBuilder.group({
      accountNo: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]{10}')])],
      bvn: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('[0-9]{11}')])],
      accountType: ['', Validators.required],
      bank: ['', Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToProceed = this.form.valid;
    });
  }

  ionViewDidLoad() {

    if (this.platform.is('ios')) {
      console.log('I am an iOS device!');
      this.isIos = true;
    }

    this.phoneNumber = this.session._getPhoneNumber();
    this.sessionKey = this.session._getSessionKey();

    let ownBank = this.navParams.get('ownbank');
    console.log(ownBank);
    if(ownBank) {
      this.ownbank = true;
      this.form.value.bank = '070';
    }

    this.getbanks();
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

 getbanks() {
    this.loading.show('Fetching bank...');
    this.api.get('get-banks', null, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      this.loading.hide();
      console.log(res);
      if(res.code == '00') {
        this.banks = res.data;
      }
      else {
        this.api.messageHandler(res.message);
      }
    }, (error) => {
      this.loading.hide();
      console.log(error);
      this.api.messageHandler(error.error.message);
    })
  }

  doSubmit() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

}
