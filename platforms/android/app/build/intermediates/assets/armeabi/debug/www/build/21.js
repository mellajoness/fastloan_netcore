webpackJsonp([21],{

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(931);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(idle, session, loading, api, navCtrl, navParams, formBuilder, device) {
        var _this = this;
        this.idle = idle;
        this.session = session;
        this.loading = loading;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.appVersion = '0.0.6';
        this.form = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            secretQuestion: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            secretAnswer: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            otp: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            // hint: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.form.valid;
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        this.phoneNumber = this.navParams.get('phone');
    };
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.idle.stop();
    };
    RegisterPage.prototype.ionViewWillLeave = function () {
        this.idle.watch();
    };
    RegisterPage.prototype.gotoLogin = function () {
        this.navCtrl.push('SigninPage');
    };
    RegisterPage.prototype.gotoNext = function () {
        document.getElementById("secondForm").style.display = "block";
        document.getElementById("firstForm").style.display = "none";
    };
    RegisterPage.prototype.gotoPrevious = function () {
        document.getElementById("secondForm").style.display = "none";
        document.getElementById("firstForm").style.display = "block";
    };
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        if (this.form.value.password != this.form.value.confirmPassword) {
            this.api.messageHandler('Password does not match', 5000, 'bottom');
            return;
        }
        this.loading.show('Creating your account...');
        var req = {
            confirmPassword: this.form.value.confirmPassword,
            //confirmSecretAnswer: "string",
            emailAddress: this.form.value.email,
            firstName: this.form.value.firstName,
            lastName: this.form.value.lastName,
            password: this.form.value.password,
            phoneNumber: this.phoneNumber,
            secretAnswer: this.form.value.secretAnswer,
            secretQuestion: this.form.value.secretQuestion,
            otp: this.form.value.otp,
            //deviceId: this.device.uuid,
            deviceId: 'df1284ucnod',
            appVersion: this.appVersion,
        };
        console.log(req, 'Body');
        this.api.post('login-controller/register-user', req).subscribe(function (res) {
            console.log('Register user Response', res);
            _this.loading.hide();
            if (res.code == '00') {
                _this.session._setPhoneNumber(res.data.phoneNumber);
                _this.session._setSessionKey(res.data.sessionKey);
                _this.session._setEmail(res.data.emailAddress);
                _this.session._setFirstname(res.data.firstName);
                _this.session._setLastname(res.data.lastName);
                _this.session._setCustID(res.data.customerId);
                var payload = {
                    CUSTOMER_ID: res.data.customerId
                };
                Smartech.setIdentity(payload.CUSTOMER_ID);
                Smartech.track("REGISTER_SUCCESSFUL", payload);
                // this.navCtrl.setRoot('DashboardPage');
                _this.navCtrl.push('DashboardPage');
            }
            else {
                _this.api.messageHandler(res.message, 5000, 'top');
                var payload = {
                    CUSTOMER_ID: res.data.customerId
                };
                Smartech.setIdentity(payload.CUSTOMER_ID);
                Smartech.track("REGISTER_STEP_2_FAILED", payload);
            }
        }, function (error) {
            _this.api.messageHandler(error.error.message);
        }, function () {
            _this.loading.hide();
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\register\register.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title>Create Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="app_bg" style="height: 100%">\n  <form *ngIf="form" [formGroup]="form" (submit)="doRegister()">\n    <div align="center" id="firstForm" style="margin-top:50px">\n      <p class="form-subtitle">Personal Details</p>\n      <ion-item>\n        <ion-input type="text" formControlName="firstName" name="firstName" placeholder="First Name"></ion-input>\n      </ion-item>\n      <div *ngIf="!form.controls.firstName.valid && form.controls.firstName.dirty">\n        <p class="input-error">Kindly put a valid name</p>\n      </div>\n      <ion-item>\n        <ion-input type="text" formControlName="lastName" name="lastName" placeholder="Last Name"></ion-input>\n      </ion-item>\n      <div *ngIf="!form.controls.lastName.valid && form.controls.lastName.dirty">\n        <p class="input-error">Kindly put a valid name</p>\n      </div>\n      <ion-item>\n        <ion-input type="email" formControlName="email" name="email" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="tel" formControlName="otp" name="otp" placeholder="OTP"></ion-input>\n      </ion-item>\n      <ion-grid>\n  <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <button type="button" ion-button (click)="gotoNext()" [disabled]="!form.controls.firstName.valid || !form.controls.lastName.valid || !form.controls.email.valid || !form.controls.otp.valid" style="border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;margin-left:25px;background-color: transparent !important">Next</button>\n    </ion-col>\n  </ion-row>\n      </ion-grid>\n      <!--<div align="center" style="margin-top:30px">\n          <button type="button" ion-button (click)="gotoNext()" [disabled]="!form.controls.firstName.valid || !form.controls.lastName.valid || !form.controls.email.valid" style="width: 285px;height: 50px;border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Next</button>\n      </div>-->\n    </div>\n    <div align="center" id="secondForm" style="margin-top:20px;display:none">\n      <p class="form-subtitle">Security Details</p>\n      <ion-item>\n        <ion-input type="text" formControlName="secretQuestion" name="secretQuestion" placeholder="Secret Question"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" formControlName="secretAnswer" name="secretAnswer" placeholder="Secret Answer"></ion-input>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-input type="text" formControlName="hint" name="hint" placeholder="Hint"></ion-input>\n      </ion-item> -->\n      <ion-item>\n        <ion-input type="password" formControlName="password" name="password" placeholder="Password"></ion-input>\n      </ion-item>\n      <div *ngIf="!form.controls.password.valid && form.controls.password.dirty">\n        <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n      </div>\n      <ion-item>\n        <ion-input type="password" formControlName="confirmPassword" name="confirmPassword" placeholder="Confirm Password"></ion-input>\n      </ion-item>\n      <div *ngIf="(form.controls.password.valid) && (form.controls.confirmPassword.value != form.controls.password.value && form.controls.confirmPassword.dirty)">\n        <p class="input-error">Password did not match</p>\n      </div>\n      <div *ngIf="(!form.controls.password.valid) && (!form.controls.confirmPassword.valid && form.controls.confirmPassword.dirty)">\n        <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n      </div>\n            <ion-grid>\n  <ion-row>\n    <ion-col>\n      <button type="button" (click)="gotoPrevious()" ion-button style="border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Previous</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button [disabled]="!isReadyToProceed" style="border: 1px solid #FFFFFF;margin-left:15px;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Submit</button>\n    </ion-col>\n  </ion-row>\n      </ion-grid>\n      <!--<div align="center" style="margin-top:30px">\n          <button ion-button [disabled]="!isReadyToProceed" style="width: 285px;height: 50px;border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Create Account</button>\n      </div>-->\n    </div>\n    <div align="center">\n        <p style="height: 16px;font-style: normal;font-weight: normal;line-height: normal;font-size: 13px;text-align: center;color: #E5E5E5;">Already have an account? <a (click)="gotoLogin()">Sign in</a></p>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["b" /* Idle */], __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=21.js.map