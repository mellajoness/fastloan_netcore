import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { Loader, Api, Session } from '../../providers';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Headers,RequestOptions } from '@angular/http';
declare let Smartech:any;
/**
 * Generated class for the SelectloanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectloan',
  templateUrl: 'selectloan.html',
})
export class SelectloanPage {

  isReadyToProceed: boolean;

  phoneNumber: string;

  sessionKey: string;

  accountSelected: boolean;

  bankaccounts: any = [];

  selectedAccount: any = [];

  request : any = {};

  accountAddedMsg: string;

  noAccountMsg: string;

  isBusy: boolean = false;

  isSavedAccounts: boolean = false;

  constructor(public translateService: TranslateService, public session: Session, public toastCtrl: ToastController, public storage: Storage, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public api: Api, public loading: Loader) {
    this.translateService.get('ACCOUNTADDED_MSG').subscribe((value) => {
      this.accountAddedMsg = value;
    });

    this.translateService.get('NOACCOUNT_MSG').subscribe((value) => {
      this.noAccountMsg = value;
    })
  }

  ionViewDidLoad() {
    let request = this.navParams.get('request');
    this.request = request;
    console.log(this.request);

    this.phoneNumber = this.session._getPhoneNumber();

    this.sessionKey = this.session._getSessionKey();

    this.getbankaccounts();
  }

  getbankaccounts() {
    this.loading.show('Fetching bank accounts...')
    this.isBusy = true
    this.api.get('mobile/get-bank-accounts', {'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      console.log('get bank account',res)
      if (res.code == '00') {
        this.bankaccounts = res.data;
        if( !this.bankaccounts.length ) {
          this.showAddaccountownModal();
        }
        //return;
      }   

    }, (error) => {
      this.api.messageHandler(error.error.message);
    }, () => {
      this.loading.hide();
      this.isBusy = false;
    })
  }

  doRefresh(refresher) {
    this.getbankaccounts();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  showAddaccountModal(ownbank ? : boolean) {
    console.log(ownbank);
    let addModal = this.modalCtrl.create('AddaccountPage', {ownbank: ownbank});
      addModal.onDidDismiss(item => {
        if (item) {
          this.loading.show('Adding account...');
          var req = {
            accountNo: item.accountNo,
            accountType: item.accountType,
            bankCode: ownbank ? '070' : item.bank,
            bvn: item.bvn,
            clientNo: this.phoneNumber
          }
          this.api.post('mobile/add-bank-account', req, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
            if(res.code == '00') {
              this.api.messageHandler(this.accountAddedMsg, 3000, 'bottom');
              this.selectAccount(res.data);
              this.getbankaccounts();
            }
          }, (error) => {
            this.api.messageHandler(error.error.message);
          }, () => {
            this.loading.hide();
          })
        }
    })
    addModal.present();
  }

  showAddaccountownModal(ownbank ? : boolean) {
    let addModal = this.modalCtrl.create('AddownaccountPage');
      addModal.onDidDismiss(item => {
        if (item) {
          this.loading.show('Adding account...');
          var req = {
            accountNo: item.accountNo,
            accountType: item.accountType,
            bankCode: item.bank ,
            bvn: item.bvn,
            clientNo: this.phoneNumber
          }
          this.api.post('mobile/add-bank-account', req, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
            if(res.code == '00') {
              this.api.messageHandler(this.accountAddedMsg, 3000, 'bottom');
              this.selectAccount(res.data);
              //this.getbankaccounts();

            }
            else {
              this.api.messageHandler(res, 5000, 'top');
            }
          }, (error) => {
            this.api.messageHandler(error.error.message);
          }, () => {
            this.loading.hide();
          })
        }
    })
    addModal.present();
  }

  gotoAddCard() {
    this.navCtrl.push('AddcardPage', {request: this.request});
  }

  gotoConfirm() {
    this.navCtrl.push('ConfirmloanPage', {request: this.request});
  }

  selectAccount (account) {
    this.accountSelected = true;
    this.selectedAccount = account;
    this.request.bankCode = account.bankCode;
    this.request.bankName = account.bankName;
    this.request.censoredAccountNo = account.censoredAccountNo;
    this.request.code = account.code || null;
    this.request.accountId = account.id;
    this.request.lastUseAccount = account.lastUsed || null;
    this.request.message = account.message || null;
    this.request.msisdn = account.msisdn;
    console.log('Request', this.request);
    console.log('bank',this.request.bankName)
    //this.isReadyToProceed = true;
    this.gotoAddCard();

    let custId= this.session._getCustID();
    const payload = {
      CUSTOMER_ID :custId,
      BANK:this.request.bankName
        }
        Smartech.setIdentity(payload.CUSTOMER_ID);
        Smartech.track("Loan_Offer_StepTwo",payload);

  }

  showAccounts() {
    let listModal = this.modalCtrl.create('AccountlistPage', {bankaccounts : this.bankaccounts});
      listModal.onDidDismiss(item => {
        if (item) {
          this.selectAccount(item);
        }
    })
    listModal.present();
  }

}
