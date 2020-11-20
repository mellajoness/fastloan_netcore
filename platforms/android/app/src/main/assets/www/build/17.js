webpackJsonp([17],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin__ = __webpack_require__(936);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */]),
            ],
        })
    ], SigninPageModule);
    return SigninPageModule;
}());

//# sourceMappingURL=signin.module.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_idle_core__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import Smartech from 'smartech-cordova';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(device, menu, alertCtrl, viewCtrl, idle, storage, session, faio, loading, api, formBuilder, navCtrl, navParams, platform) {
        var _this = this;
        this.device = device;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.idle = idle;
        this.storage = storage;
        this.session = session;
        this.faio = faio;
        this.loading = loading;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.sessionExpired = false;
        this.hasFingerPrint = false;
        //  appVersion: string = '0.0.6';  live
        this.appVersion = '1';
        this.form = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{11}')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)])],
            isFingerPrint: [false]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.form.valid;
        });
    }
    SigninPage.prototype.ionViewDidLoad = function () {
    };
    SigninPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(false);
        this.idle.stop();
    };
    SigninPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
        this.idle.watch();
    };
    SigninPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.sessionExpired = this.navParams.get('sessionExpired');
        if (this.sessionExpired) {
            console.log('Your session has expired');
            this.session._getExpiredSessionMsg();
        }
        this.faio.isAvailable().then(function (result) {
            result == 'finger' ? _this.hasFingerPrint = true : console.log('device does not have finger print');
        });
        this.storage.get("usingBiometric").then(function (res) {
            if (res) {
                _this.storage.get("phoneNumber").then(function (PhoneNumber) {
                    if (PhoneNumber) {
                        _this.form.value.username = PhoneNumber;
                        _this.storage.get("password").then(function (password) {
                            _this.form.value.password = password;
                            _this.showFingerprintAuthDlg();
                        });
                    }
                });
            }
            return;
        });
    };
    SigninPage.prototype.FingerPrintAuth = function () {
        if (this.form.value.isFingerPrint) {
            this.showFingerprintAuthDlg();
        }
        return;
    };
    SigninPage.prototype.showFingerprintAuthDlg = function () {
        var _this = this;
        this.faio.show({
            clientId: 'Fingerprint-Demo',
            clientSecret: 'password',
            localizedFallbackTitle: 'Use Pin',
            localizedReason: 'Please authenticate'
        })
            .then(function (result) {
            _this.session._closeExpiredSessionMsg();
            _this.storage.set("usingBiometric", true);
            _this.storage.set("phoneNumber", _this.form.value.username);
            _this.storage.set("password", _this.form.value.password);
            _this.doLogin();
        })
            .catch(function (error) { return console.log(error); });
        /*this.fingerprintOptions = {
            clientId: 'fingerprint-Demo',
            clientSecret: 'password', //Only necessary for Android
            disableBackup:true  //Only for Android(optional)
        }*/
    };
    SigninPage.prototype.gotoLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    SigninPage.prototype.doLogin = function () {
        var _this = this;
        this.loading.show('Logging in...');
        var req = {
            password: this.form.value.password,
            phoneNumber: this.session._injectCountryCode(this.form.value.username),
            deviceId: '79b8f6b41479cde4',
            appVersion: this.appVersion,
        };
        console.log('Body', req);
        this.api.postLogin('login-controller/login', req).subscribe(function (res) {
            console.log('Login Response', res);
            _this.loading.hide();
            if (res.code == '00') {
                _this.session._setPhoneNumber(res.data.phoneNumber);
                _this.session._setSessionKey(res.data.sessionKey);
                _this.session._setEmail(res.data.emailAddress);
                _this.session._setFirstname(res.data.firstName);
                _this.session._setLastname(res.data.lastName);
                _this.session._setCustID(res.data.customerId);
                var email = _this.session._getEmail();
                var custId = _this.session._getCustID();
                console.log('my email is', email);
                console.log('my cust id', custId);
                var payloadata = {
                    CUSTOMER_ID: custId,
                    EMAIL: email
                };
                Smartech.setIdentity(payloadata.CUSTOMER_ID);
                Smartech.login(payloadata.CUSTOMER_ID);
                console.log("Login successful");
                Smartech.track("USER_LOGIN", payloadata);
                _this.navCtrl.setRoot('DashboardPage');
            }
            else if (res.code == '012' && _this.platform.is('android')) {
                var alert_1 = _this.alertCtrl.create({
                    title: '<strong>Update Required!</strong>',
                    message: res.message,
                    buttons: [
                        {
                            text: 'Update',
                            handler: function () {
                                window.open('https://play.google.com/store/apps/details?id=io.fidelity.flashlend', '_system');
                                console.log('Confirm Okay');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else if (res.code == '012' && _this.platform.is('ios')) {
                var alert_2 = _this.alertCtrl.create({
                    title: '<strong>Update Required!</strong>',
                    message: res.message,
                    buttons: [
                        {
                            text: 'Update',
                            handler: function () {
                                // window.open('https://google.com.ng', '_system')
                                console.log('Confirm Okay');
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
                _this.api.messageHandler(res.message, 5000, 'top');
            }
        }, function (error) {
            _this.loading.hide();
            _this.api.messageHandler(error.error.message, 5000, 'top');
        });
    };
    SigninPage.prototype.gotoChangeDevice = function () {
        this.navCtrl.push('ChangedevicePage');
    };
    SigninPage.prototype.gotoForgotpassword = function () {
        this.navCtrl.push('ForgetpasswordPage');
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\signin\signin.html"*/'\n<ion-content class="app_bg">\n  <form *ngIf="form" [formGroup]="form" (submit)="doLogin()">\n    <div align="center" style="margin-top:60px; padding-left: 30px;">\n      <img src="../../assets/img/ff.png" width="200" height="50"/>\n    </div>\n    <div align="center">\n      <p style="color:#FFFFFF;">Powered by Fidelity Bank PLC</p>\n    </div>\n    <div align="center" style="margin-top:100px">\n      <ion-item>\n        <ion-input type="tel" formControlName="username" name="username" placeholder="Mobile Number"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" formControlName="password" name="password" placeholder="Password"></ion-input>\n      </ion-item>\n      <ion-item class="biometric" *ngIf="hasFingerPrint">\n        <ion-label class="biometric-label">Enable Biometric</ion-label>\n        <ion-toggle formControlName="isFingerPrint" [disabled]="!isReadyToProceed" name="isFingerPrint" (ionChange)="FingerPrintAuth()" checked="false"></ion-toggle>\n      </ion-item>\n    </div>\n    <div align="center" style="margin-top:30px">\n        <button ion-button [disabled]="!isReadyToProceed" style="width: 285px;height: 50px;border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Sign in</button>\n    </div>\n    <div align="center">\n        <p style="height: 16px;font-style: normal;font-weight: normal;line-height: normal;font-size: 13px;text-align: center;color: #E5E5E5;">I do not have an account <a (click)="gotoLogin()">Create account</a></p>\n        <p style="height: 16px;font-style: normal;font-weight: normal;line-height: normal;font-size: 13px;text-align: center;color: #E5E5E5;"><a (click)="gotoForgotpassword()">Forgot Password</a></p>\n        <p style="height: 16px;font-style: normal;font-weight: normal;line-height: normal;font-size: 13px;text-align: center;color: #E5E5E5;"><a (click)="gotoChangeDevice()">Change Device</a></p>\n    </div>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__ng_idle_core__["b" /* Idle */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */], __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_5__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ })

});
//# sourceMappingURL=17.js.map