webpackJsonp([32],{

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(918);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_idle_core__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    //fingerprintOptions : FingerprintOptions;
    function LoginPage(navCtrl, user, api, idle, toastCtrl, loading, storage, session, formBuilder, menu, faio, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.api = api;
        this.idle = idle;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.storage = storage;
        this.session = session;
        this.menu = menu;
        this.faio = faio;
        this.translateService = translateService;
        this.hasFingerPrint = false;
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
        this.form = formBuilder.group({
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{11}')])],
            isFingerPrint: [false]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.form.valid;
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.idle.stop();
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.idle.watch();
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        //this.menu.enable(false);
        /*this.faio.isAvailable().then(result =>{
          result == 'finger' ? this.hasFingerPrint = true : console.log('device does not have finger print');
        });
        this.storage.get("usingBiometric").then((res) => {
          if(res) {
              this.storage.get("phoneNumber").then((PhoneNumber) => {
                this.form.value.phoneNumber = PhoneNumber;
                this.showFingerprintAuthDlg();
              })
          }
          return;
        })*/
    };
    LoginPage.prototype.FingerPrintAuth = function () {
        if (this.form.value.isFingerPrint) {
            this.showFingerprintAuthDlg();
        }
        return;
    };
    LoginPage.prototype.showFingerprintAuthDlg = function () {
        var _this = this;
        this.faio.show({
            clientId: 'Fingerprint-Demo',
            clientSecret: 'password',
            localizedFallbackTitle: 'Use Pin',
            localizedReason: 'Please authenticate'
        })
            .then(function (result) {
            _this.storage.set("usingBiometric", true);
            _this.storage.set("phoneNumber", _this.form.value.phoneNumber);
            _this.doContinue();
        })
            .catch(function (error) { return console.log(error); });
        /*this.fingerprintOptions = {
            clientId: 'fingerprint-Demo',
            clientSecret: 'password', //Only necessary for Android
            disableBackup:true  //Only for Android(optional)
        }*/
    };
    LoginPage.prototype.doContinue = function () {
        var _this = this;
        this.phoneNumber = this.session._injectCountryCode(this.form.value.phoneNumber);
        console.log('Phone Number', this.phoneNumber);
        this.loading.show('Sending OTP to phone...');
        this.api.get('Mobile/request-verification/' + this.phoneNumber).subscribe(function (res) {
            _this.loading.hide();
            console.log(res);
            if (res.code == '00') {
                var payload = {
                    EMAIL: _this.form.value.email,
                    PHONE: _this.session._injectCountryCode(_this.form.value.phoneNumber),
                };
                Smartech.setIdentity(payload.EMAIL);
                Smartech.track("REGISTER_STEP_1", payload);
                _this.navCtrl.push('RegisterPage', { phone: _this.phoneNumber });
            }
            else {
                var payload = {
                    EMAIL: _this.form.value.email,
                    PHONE: _this.session._injectCountryCode(_this.form.value.phoneNumber),
                };
                Smartech.setIdentity(payload.EMAIL);
                Smartech.track("REGISTER_STEP_1_FAILED", payload);
                _this.navCtrl.push('RegisterPage', { phone: _this.phoneNumber });
                _this.api.messageHandler(res.message, 5000);
            }
        }, function (error) {
            _this.loading.hide();
            _this.api.messageHandler(error.error.message);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\login\login.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="app_bg">\n  <div align="center" style="margin-top:10px">\n    <img src="../../assets/img/ff.png" width="200" height="50"/>\n  </div>\n  <form *ngIf="form" [formGroup]="form" (submit)="doContinue()">\n    <div align="center" style="position: absolute;top: 128px; left: 0; bottom: 0; right: 0;">\n      <p style="width: 221px;height: 21px;font-weight: bold;line-height: normal;font-size: 17px;text-align: center;color: #E5E5E5;">What\'s your mobile number</p>\n    </div>\n    <div align="center" style="position: absolute;top: 172px; left: 0; bottom: 0; right: 0;">\n      <!--<p style="width: 222px;height: 16px;font-style: normal;font-weight: normal;line-height: normal;font-size: 13px;text-align: center;color: #E5E5E5;">We want to retrieve your loan account</p>-->\n    </div>\n    <div align="center" style="position: absolute;top: 216px; left: 0; bottom: 0; right: 0;">\n      <ion-item>\n        <!--<ion-label color="primary" stacked>Stacked Label</ion-label>-->\n        <ion-input type="tel" formControlName="phoneNumber" name="phoneNumber" placeholder="Mobile Number"></ion-input>\n      </ion-item>\n    </div>\n    <div align="center" style="position: absolute;top: 354px; left: 0; bottom: 0; right: 0;">\n        <button ion-button [disabled]="!isReadyToProceed" style="width: 285px;height: 50px;border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">{{ \'PROCEED_BUTTON\' | translate }}</button>\n    </div>\n    <!--<div align="center" style="position: absolute;top: 580px; left: 0; bottom: 0; right: 0;">\n        <p style="height: 16px;font-style: normal;font-weight: normal;line-height: normal;font-size: 13px;text-align: center;color: #E5E5E5;">I do not want to continue</p>\n    </div>-->\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers__["e" /* User */],
            __WEBPACK_IMPORTED_MODULE_7__providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_6__ng_idle_core__["b" /* Idle */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers__["b" /* Loader */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__providers__["c" /* Session */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=32.js.map