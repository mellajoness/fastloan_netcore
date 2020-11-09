import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Headers,RequestOptions } from '@angular/http';
import { Loader, Api, Session } from '../../providers';
import moment from 'moment';

/**
  Created by Akobundu Michael(P7543) AKA Bundle
 */

@IonicPage()
@Component({
  selector: 'page-extendloan',
  templateUrl: 'extendloan.html',
})
export class ExtendloanPage {

  phoneNumber: string;

  sessionKey: string;

  message: string;

  data: any = [];

  expiration: string  = "Loading.."

  constructor(public api: Api, public loading: Loader, public session: Session, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.phoneNumber = this.session._getPhoneNumber();
    this.sessionKey = this.session._getSessionKey();

    this.fetchLoanExtension();
  }

  fetchLoanExtension () {
    this.loading.show('Fetching loan extensions...');
    this.api.get('Loan/get-loan-extensions',  {'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      this.loading.hide();
      console.log('get extend res',res)
      if(res.code == '00') {
        if(res.data) {
          this.data = res.data;
        }
        this.message = res.message;
      }
      else {
        this.message = res.message;
      }
    }, (error: any) => {
      this.loading.hide();
      this.api.messageHandler(error.error.message);
    })
  }

  acceptExtension () {
    this.loading.show('Accepting loan extension...');
    var req = {
      clientNo: this.phoneNumber,
      id: this.data[0].id 
    }
    console.log('body',req)
    this.api.post("Loan/accept-loan-extension", req, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      this.loading.hide();
      console.log('accept extension',res)
      if (res.code == '00') {
        this.api.messageHandler("Your loan has been extended", 5000, 'bottom');
        this.navCtrl.setRoot('DashboardPage');
      }
      else{
        this.api.messageHandler(res.message);
      }
    }, (error: any) => {
      this.loading.hide();
        this.api.messageHandler(error.error.message);
    })
  }

  rejectExtension () {
    this.navCtrl.pop();
  }

}
