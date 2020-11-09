import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ToastController, Platform } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
import { Loader, Api, Session } from '../../providers';
import { Storage } from '@ionic/storage';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Headers,RequestOptions } from '@angular/http';


/**
 * Generated class for the AddownaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addownaccount',
  templateUrl: 'addownaccount.html',
})
export class AddownaccountPage {

  isReadyToProceed: boolean;
  form: FormGroup;
  ownbank: boolean;
  phoneNumber: string;
  sessionKey: string;
  banks: any = [];
  accounts: any = [];
  isIos: boolean = false;
  bvn: string;
  currentSelected: any;
  selectedAccountNo: string;
  selectedBvn: string;
  accountSelected: boolean = false;
  isOtherBanks: boolean = false;
  enquiryDone: boolean = false;
  enquiredName: string;

  constructor(public session: Session, public platform: Platform, public toastCtrl: ToastController, public api: Api, public storage: Storage, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public loading: Loader) {
    this.form = formBuilder.group({
      //accountNo: [this.selectedAccountNo],// Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]{10}')])],
      //bvn: [this.selectedBvn],//, Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('[0-9]{11}')])],
      accountType: ['', Validators.required],
      bank: ['', Validators.required],
      accountNo: [''],
      bvn: ['']
    });

    if (this.platform.is('ios')) {
      console.log('I am an iOS device!');
      this.isIos = true;
    }
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToProceed = this.form.valid;
    });
  }

  ionViewDidLoad() {

    this.sessionKey = this.session._getSessionKey();
    this.phoneNumber = this.session._getPhoneNumber();
    //this.fetchFidelityAccounts();

    this.getbanks();
  }

   getbanks() {
    this.loading.show('Fetching bank...');
    this.api.get('Mobile/get-banks', {'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      console.log('Get banks', res);
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

  press(val) {
    if(val.length == 10) {
      //this.getSecretQuestion();
      //console.log('Am about to call NIP name enquiry!!');
      this.doNameEnquiry();
    }
  }

  doNameEnquiry() {
    console.log(this.form.value.bank);
    console.log(this.form.value.accountNo);
    this.loading.show('Verifying account...');
    this.api.get('Mobile/account-name-enquiry/'+ this.form.value.bank +'/'+ this.form.value.accountNo, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      this.loading.hide();
      console.log(res);
      this.enquiryDone = true;
      this.enquiredName = res.fullName;
    }, (error: any) => {
      this.loading.hide();
      console.log(error);
      this.api.messageHandler(error.error.message);
    })
  }

  onChange(val) {
    console.log(val);
    if(val == '070') {
      this.fetchFidelityAccounts();
      this.isOtherBanks = false;
      return;
    }
    this.isOtherBanks = true;
    return;

  }

  fetchFidelityAccounts() {
    this.loading.show('Fetching your accounts...');
    this.api.get('Mobile/get-fidelity-accounts',{'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).timeout(60000).catch((err: Response) => {
        let details: any  = err;
        console.log(details);
        this.api.messageHandler('Looks like you don\'t have an account with fidelity bank', 7000, 'top');
        return Observable.throw(new Error(details));
    }).subscribe((res:any) => {
      this.loading.hide();
      console.log('Success', res);
      if (res.code == '00') {
        this.accounts = res.data;
        this.selectedBvn = res.data[0].bvn;
        this.accounts.length ? console.log('user has account with fidelity') : this.api.messageHandler('Sorry you don\'t have an account with fidelity bank ', 5000, 'top');
        return;
      }
      this.api.messageHandler(res.message);
    }, (error: any) => {
      this.loading.hide();
      console.log('Error', error);
    })
  }

  doSubmit() {
    if (!this.form.valid) { return; }
    var req = {
      accountNo: this.selectedAccountNo || this.form.value.accountNo,
      accountType: this.form.value.accountType,
      bvn: this.selectedBvn || this.form.value.bvn,
      bank: this.form.value.bank
    }
    this.viewCtrl.dismiss(req);
  }

  onItemClicked(id, accountNo) {
    //console.log("id is", id)
    this.currentSelected = id;
    this.selectedAccountNo = accountNo;
    console.log(this.form.value);
    if(this.selectedAccountNo && this.selectedBvn) {
      this.accountSelected = true;
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
