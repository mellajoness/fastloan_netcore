import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import moment from 'moment';
import { Storage } from '@ionic/storage';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Headers,RequestOptions } from '@angular/http';
import { Loader, Api, Session } from '../../providers';
//import { MoneyTransformPipe  } from '../../pipes/money-transform/money-transform';


@IonicPage()
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class BalancePage {

  phoneNumber: string;
  sessionKey: string;
  loans: any = [];
  message: string;
  totalexpectedPayment : any = 'Loading...';
  totaloutstanding : any = 'Loading...';
  interest: any = 'Loading...';
  principal: any = 'Loading...';

  dueDateFromNow: string;
  duedate: string;
  disburseddate: string;
  upcoming: boolean = true;
  history: boolean = false;
  isLoanDue: boolean = false;

  _connectionError : string =  "Unable to sign in. Please check your account information and try again";

  constructor(public viewCtrl: ViewController, public session: Session, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public loading: Loader, public api: Api, public storage: Storage) {
  }

  ionViewDidLoad() {

    this.phoneNumber = this.session._getPhoneNumber();

    this.sessionKey = this.session._getSessionKey();


    this.getbalance();

  }

  goBack () {
    this.navCtrl.pop();
  }

  upcomingTapped () {
    document.getElementById("upcoming").style.backgroundColor = "#1ABE2A";
    document.getElementById("history").style.backgroundColor = "gray";
  }

  historyTapped () {
    document.getElementById("upcoming").style.backgroundColor = "gray";
    document.getElementById("history").style.backgroundColor = "#1ABE2A";
  }

  cancel() {

    this.viewCtrl.dismiss('');
    // this.navCtrl.setRoot('DashboardPage');

  }

  getbalance() {
    this.loading.show('Fetching loan balance');
    this.api.get('Loan/get-loans', {'phoneNumber':this.phoneNumber}, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
      console.log('Get Loan Response',res);
      this.loading.hide();
      if(res.code == '00') {
        this.loans = res.data;
        if(this.loans.length) {
          moment(this.loans[0].dueDate).fromNow().indexOf('in') !== -1 ? console.log('your loan is not due yet') : this.isLoanDue = true;
          this.dueDateFromNow = moment(this.loans[0].dueDate).fromNow().replace('in', '');
          this.duedate = moment(this.loans[0].dueDate).format('MMM DD, YYYY');
          this.disburseddate = moment(this.loans[0].disbursedDate).format('MMM DD, YYYY');
          this.totalexpectedPayment = this.loans[0].totalExpectedRepayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.totaloutstanding = this.loans[0].totalOutstanding.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.principal = this.loans[0].principal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.interest = this.loans[0].interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return;
        }
        this.message = "You have no pending loan";
        return;
      }
      else {
        this.api.messageHandler(res.message);
      }
    }, (error) => {
      this.loading.hide();
      this.api.messageHandler(error.error.message);
    })
  }

}
