import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, Platform, MenuController, ViewController, NavParams, AlertController, Nav, ModalController, PopoverController } from 'ionic-angular';
//import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Headers,RequestOptions } from '@angular/http';
import { Loader, Api, Session } from '../../providers';
import { Idle } from '@ng-idle/core'
declare let Smartech:any;
/*
    Created by Akobundu Michael P7543 AKA Bundle AKA Mr.Bitches
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  phoneNumber : string;

  sessionKey : string;

  formatedPhoneNumber: string;

  isBusy: boolean = false;

  balance: any = "Loading...";

  loans: any = [];

  message: string;

  requestMsg: string;

  highestOffer: string;

  hasHighestOffer: boolean = false;

  firstname: string;

  constructor(public idle: Idle, public popoverCtrl: PopoverController, public viewCtrl: ViewController, public session: Session, public modalCtrl: ModalController, public platform: Platform, public api: Api, public loading: Loader, private alertCtrl: AlertController, private nav: Nav, private navCtrl: NavController, public menu: MenuController, public navParams: NavParams, public storage: Storage) {
  }


  ionViewDidLoad() {

    this.idle.watch();

    this.phoneNumber = this.session._getPhoneNumber();
    this.formatedPhoneNumber = this.session._formatPhoneNumber(this.phoneNumber);
    this.firstname = this.session._getFirstname();

    this.sessionKey = this.session._getSessionKey();
    console.log('session key',this.sessionKey)
    console.log('phone no',this.phoneNumber)

    this.fetchLoanBalance();

    this.fetchHistory();

    this.getoffers();
    // this.getLoans()

  }

  fetchLoanBalance () {
    this.isBusy = true;
    this.api.get('Loan/get-loans', {'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      console.log('Get Loan Response',res);
      if(res.data){
        if(res.data.length) {
          this.balance = res.data[0].totalOutstanding;
          return;
        }
      }
      this.balance = "0.00";
    }, (error) => {
      this.api.messageHandler(error.error.message);
    }, () => {
      this.isBusy = false;
    })
  }



// getLoans(){
//   this.api.newGetLoans(this.phoneNumber).subscribe(resp =>{
//     console.log('kmj',resp)
//   });
// }



  fetchHistory () {
    this.loading.show();
    this.api.get('Loan/get-existing-loans', {'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      console.log('Get Existing Loan Response', res)
      if(res.code == '00') {
        res.data.length ? this.loans = res.data.slice(0, 3) : this.message = "Your history box is empty!";
        return;
      }
    }, (error) => {
      this.api.messageHandler(error.error.message);
    }, () => {
      this.loading.hide();
    })
  }

    presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.onDidDismiss(comingFrom  => {
      switch(comingFrom) {
        case 'logout':
          if (this.session.isAlertUp) return;
          this.session.isAlertUp = true;
          let confirmAlert = this.alertCtrl.create({
                  title: "Logout",
                  message: "Are you sure you want to logout ?",
                  buttons: [
                      {
                          text: 'No',
                          handler: () => {
                              return;
                          }
                      },
                      {
                          text: 'Yes',
                          handler: () => {
                            this.session._destroy();
                            this.navCtrl.setRoot('SigninPage', {}, {
                              animate: true,
                              direction: 'forward'
                            });
                          }
                      }
                  ]
              });
              confirmAlert.onDidDismiss(() => {
                this.session.isAlertUp = false;
              })
              confirmAlert.present();
            break;
        case 'Change password':
            this.navCtrl.push('ChangepasswordPage');
            break;
      }
    })
    popover.present({
      ev: myEvent
    });   
  }

    getoffers () {
            this.api.get('Loan/get-offers',{'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
              console.log('Get Offer Response ', res);
              if(res.code == '00') {
                if (res.data.length) {
                  this.hasHighestOffer = true;
                  this.highestOffer = res.data[0].principal;
                  return;
                }
                this.requestMsg = res.message == 'ok' ? 'Sorry we could not determine an offer for you' : 'You already have a loan';//.replace("Client currently has", "You currently have");
              }
            }, (error) => {
              this.api.messageHandler(error.error.message);
            })

  }


  checkBalance() {
    let balanceModal = this.modalCtrl.create('BalancePage');
    balanceModal.present();
  }

  recommendFriend() {
    this.navCtrl.push('RecommendPage');
  }

  gotoTerms() {
    this.navCtrl.push('TermsPage');
  }

  gotoHistory () {
    this.navCtrl.push('LoanhistoryPage');
  }

  extendLoan () {
    this.navCtrl.push('ExtendloanPage')
  }

  payLoan () {
    let email= this.session._getEmail();
    console.log('my email is', email)
    const payload = {
      EMAIL:email,
      LOAN_TYPE: 'Migo'
      }
      Smartech.setIdentity(payload.EMAIL);
      Smartech.track("Pay_Loan_StepOne",payload);
    this.navCtrl.push('PayloanPage');
  }

  exitMenu() {
    this.navCtrl.setRoot('LoginPage', {}, {
        animate: true,
        direction: 'forward'
      });
  }

  ionViewWillEnter() {
    this.nav.swipeBackEnabled = false;
  }

  ionViewDidEnter() {
    //this.menu.enable(false);
  }

  ionViewWillLeave() {
    this.nav.swipeBackEnabled = true;
  }

  requestLoan() {
    this.navCtrl.push('RequestloanPage');
  }


}
