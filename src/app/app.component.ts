import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, AlertController} from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { FirstRunPage } from '../pages';
import { Keepalive } from '@ng-idle/keepalive';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core'
import { Settings, Session, Api, Loader } from '../providers';

//declare var cordova;

@Component({
  template: `<ion-menu [content]="content">
    <ion-header no-border>
      <ion-toolbar transparent>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="sidebar_bg">
      <p padding style="margin-top:-15px"><img src="../../assets/img/man.png" width="80" height="80"/></p>
      <div style="border-bottom:0px;margin-top:-25px">
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" no-lines style="background-color: transparent !important;border:none;color:#ffffff">
          {{p.title}}
        </button>
      </div>
    </ion-content>
    <ion-footer no-border>
      <ion-toolbar transparent>
        <div style="border-bottom:0px;margin-top:20px">
          <button menuClose ion-item (click)="gotoDisclaimer()" no-lines style="background-color: transparent !important;color:#ffffff;font-size:13px">
            Disclaimer
          </button>
          <button menuClose ion-item (click)="gotoTerms()" no-lines style="background-color: transparent !important;color:#ffffff;font-size:13px">
            Terms and Conditions
          </button>
          <button menuClose ion-item (click)="logout()" no-lines style="background-color: transparent !important;border:none;color:#ffffff;font-size:13px">
            Logout
          </button>
        </div>
      </ion-toolbar>
    </ion-footer>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`,
      providers: [
        ScreenOrientation
    ]
})
export class MyApp {
  rootPage = FirstRunPage;

  pressed : boolean = false;

  exit_advise: string;

  lastPing: any;

  //linear-gradient(rgba(10, 36, 99, 0.93) , rgba(36, 123, 160, 0.93));box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Dashboard', component: 'DashboardPage' },
    { title: 'Request Loan', component: 'RequestloanPage' },
    // { title: 'Loan balance', component: 'BalancePage' },
    { title: 'Loan balance', component: 'LoanbalancePage' },
    { title: 'Pay loan', component: 'PayloanPage' },
    { title: 'Recommend a friend', component: 'RecommendPage' },
    { title: 'Loan History', component: 'LoanhistoryPage' }
  ]

  constructor(public loading: Loader, public api: Api, public idle: Idle, private screenOrientation: ScreenOrientation, public session: Session, public alertCtrl: AlertController, private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
        idle.setIdle(240);
        idle.setTimeout(10);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

        idle.onTimeoutWarning.subscribe((countdown: number) => {
            this.api.messageHandler('You will be logged out in ' + countdown + ' second(s)');
        });

        idle.onTimeout.subscribe(() => {
          this.loading.hide(); //close any pending/loading activity before session expires
          this.session._destroy(); //Destroy session at the App level.
          this.nav.setRoot('SigninPage', {sessionExpired:true}, {
            animate: true,
            direction: 'forward'
          });
        });

        idle.onIdleEnd.subscribe(() => {
          //Do something amazing here
        })

        idle.watch();

    platform.ready().then(() => {

      //cordova.plugins.certificates.trustUnsecureCerts(true);

      // smartech netcore


      console.log(this.screenOrientation.type);

      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
            platform.registerBackButtonAction(() => {
            let view = this.nav.getActive();
            //alert(view.component.name)
            if (this.nav.length() == 1) {
              if (this.pressed || this.session.isAlertUp || view.component.name == 'DisbursedPage' || view.component.name == 'PaysuccessPage') return;
              this.pressed = true;
              let confirmAlert = this.alertCtrl.create({
                  title: "Exit",
                  message: this.exit_advise,
                  buttons: [
                      {
                          text: 'No',
                          handler: () => {
                              this.pressed = false;
                              return;
                          }
                      },
                      {
                          text: 'Yes',
                          handler: () => {
                              platform.exitApp();
                          }
                      }
                  ]
              });
              confirmAlert.present();
            }
            else {
              if (this.nav.canGoBack()) {
                  this.nav.pop();
              }
            }
        });
    });
    this.initTranslate();
  }

  initTranslate() {
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
        //this.translate.use('fr');
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });

    this.translate.get('EXIT_ADVISE').subscribe((value) => {
      this.exit_advise = value;
    })
  }

  logout() {
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
                            this.nav.setRoot('SigninPage', {}, {
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
  }


  gotoTerms() {
    this.nav.push('TermsPage');
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  gotoDisclaimer () {
    this.nav.push('DisclaimerPage');
  }
}
