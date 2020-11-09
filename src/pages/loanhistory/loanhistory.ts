import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Loader, Api, Session } from '../../providers';

/**
    Created by Akobundu Michael (P7543)
 */

@IonicPage()
@Component({
  selector: 'page-loanhistory',
  templateUrl: 'loanhistory.html',
})
export class LoanhistoryPage {

  phoneNumber: string;

  sessionKey: string;

  loans: any = [];

  message: string;

  constructor(public session: Session, public loading: Loader, public api: Api, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.phoneNumber = this.session._getPhoneNumber();
    this.sessionKey = this.session._getSessionKey();

    this.fetchLoanHistory();
  }

  fetchLoanHistory () {
    this.loading.show('Fetching loan history...');
    this.api.get('get-existing-loans', null, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      if(res.code == '00') {
        res.data.length ? this.loans = res.data : this.message = "Your history box is empty!";
        return;
      }
      this.api.messageHandler(res.message);
    }, (error: any) => {
      this.api.messageHandler(error.error.message);
    }, () => {
      this.loading.hide();
    })
  }

}
