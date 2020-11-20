webpackJsonp([34],{

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordPageModule", function() { return ForgetpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgetpassword__ = __webpack_require__(914);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgetpasswordPageModule = /** @class */ (function () {
    function ForgetpasswordPageModule() {
    }
    ForgetpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgetpassword__["a" /* ForgetpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgetpassword__["a" /* ForgetpasswordPage */]),
            ],
        })
    ], ForgetpasswordPageModule);
    return ForgetpasswordPageModule;
}());

//# sourceMappingURL=forgetpassword.module.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpasswordPage; });
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
 * Generated class for the ForgetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetpasswordPage = /** @class */ (function () {
    function ForgetpasswordPage(device, idle, loading, api, session, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.device = device;
        this.idle = idle;
        this.loading = loading;
        this.api = api;
        this.session = session;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isBusy = false;
        this.hasQuestion = false;
        // additon starts
        this.hasHint = false;
        // additon close
        this.secretQuestionTryCount = 0;
        this.form = formBuilder.group({
            answer: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{11}')])],
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.form.valid;
        });
    }
    ForgetpasswordPage.prototype.ionViewWillEnter = function () {
        this.idle.stop();
    };
    ForgetpasswordPage.prototype.ionViewWillLeave = function () {
        this.idle.watch();
    };
    ForgetpasswordPage.prototype.getSecretQuestion = function () {
        var _this = this;
        // this.secretQuestionTryCount++;
        this.isBusy = true;
        var req = {
            //deviceId: this.device.uuid,
            deviceId: '79b8f6b41479cde4',
            phoneNumber: this.session._injectCountryCode(this.form.value.phoneNumber)
        };
        console.log('Forgot Password Body', req);
        this.api.post('login-controller/forget-password', req).subscribe(function (res) {
            console.log('Forgot Response', res);
            _this.isBusy = false;
            if (res.code == '00') {
                _this.question = res.data.secretQuestion;
                _this.hasQuestion = true;
                return;
            }
            _this.api.messageHandler(res.message, 5000, 'top');
            //I did this for the purpose of Hint
            // if(res.code == '99') {
            //   this.question = res.data.secretQuestion;
            //   this.hasQuestion = true;
            // } else if(res.code == '88'){
            //   this.hintStyle = res.data.hint
            //   this.hasHint = true;
            // } else if(res.code !== '99' && res.code !=='88'){
            //   this.api.messageHandler(res.message, 5000, 'top');
            // } else {
            //   return;
            // }
        }, function (error) {
            console.log(error);
            _this.isBusy = false;
            _this.api.messageHandler(error.error.message);
        });
    };
    ForgetpasswordPage.prototype.press = function (val) {
        if (val.length == 11) {
            this.getSecretQuestion();
        }
    };
    ForgetpasswordPage.prototype.submit = function () {
        var _this = this;
        this.loading.show('Reseting your password...');
        var req = {
            confirmPassword: this.form.value.confirmPassword,
            password: this.form.value.newPassword,
            phoneNumber: this.session._injectCountryCode(this.form.value.phoneNumber),
            secretAnswer: this.form.value.answer,
            //deviceId: this.device.uuid
            deviceId: '79b8f6b41479cde4'
        };
        console.log('Reset Body', req);
        this.api.post('login-controller/reset-password', req).subscribe(function (res) {
            console.log('Reset Password Response', res);
            _this.api.messageHandler(res.message);
            if (res.code == '00') {
                var email = _this.session._getEmail();
                var custId = _this.session._getCustID();
                console.log('my email is', email);
                console.log('my cust id', custId);
                var payload = {
                    CUSTOMER_ID: custId,
                    EMAIL: email
                };
                Smartech.setIdentity(payload.CUSTOMER_ID);
                Smartech.track("FORGET_PASSWORD_SUCCESSFUL", payload);
                _this.navCtrl.push('SigninPage');
            }
            else {
                _this.api.messageHandler(res.message);
                var email = _this.session._getEmail();
                var custId = _this.session._getCustID();
                console.log('my email is', email);
                console.log('my cust id', custId);
                var payload = {
                    CUSTOMER_ID: custId,
                    EMAIL: email
                };
                Smartech.setIdentity(payload.CUSTOMER_ID);
                Smartech.track("FORGET_PASSWORD_STEP_1_FAILED", payload);
            }
        }, function (error) {
            _this.api.messageHandler("An error occured, please try again");
        }, function () {
            _this.loading.hide();
        });
    };
    ForgetpasswordPage.prototype.gotoLogin = function () {
        this.navCtrl.push('SigninPage');
    };
    ForgetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgetpassword',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\forgetpassword\forgetpassword.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="app_bg" style="height: 100%">\n  <form *ngIf="form" [formGroup]="form" (submit)="submit()">\n    <!-- <div align="center" style="margin-top:100px">\n      <p *ngIf="hasQuestion" style="color:#FFFFFF; font-size:18px">Question: {{ question }}</p>\n      <ion-item>\n        <ion-input type="tel" formControlName="phoneNumber" name="phoneNumber" placeholder="Phone Number" (keyup)="press($event.target.value)"></ion-input>\n      </ion-item>\n      <div align="center" *ngIf="isBusy">\n        <ion-spinner name="dots"></ion-spinner>\n      </div>\n      <ion-item *ngIf="hasQuestion">\n        <ion-input type="text" formControlName="answer" name="asnwer" placeholder="Secret Answer"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="hasQuestion">\n        <ion-input type="password" formControlName="newPassword" name="newPassword" placeholder="New Password"></ion-input>\n      </ion-item>\n      <div *ngIf="!form.controls.newPassword.valid && form.controls.newPassword.dirty">\n        <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n      </div>\n      <ion-item *ngIf="hasQuestion">\n        <ion-input type="password" formControlName="confirmPassword" name="confirmPassword" placeholder="Confirm Password"></ion-input>\n      </ion-item>\n      <div *ngIf="(form.controls.newPassword.valid) && (form.controls.confirmPassword.value != form.controls.newPassword.value && form.controls.confirmPassword.dirty)">\n        <p class="input-error">Password did not match</p>\n      </div>\n      <div *ngIf="(!form.controls.newPassword.valid) && (!form.controls.confirmPassword.valid && form.controls.confirmPassword.dirty)">\n        <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n      </div>\n    </div> -->\n\n    <div  align="center" style="margin-top:100px">\n      <!-- <p *ngIf="hasHint" style="color:#FFFFFF; font-size:18px">Hint: {{ hintStyle }}</p> -->\n      <p *ngIf="hasQuestion"  style="color:#FFFFFF; font-size:18px">Question: {{ question }}</p>\n      <ion-item>\n        <ion-input type="tel" formControlName="phoneNumber" name="phoneNumber" placeholder="Phone Number" (keyup)="press($event.target.value)"></ion-input>\n        <!-- <ion-input type="tel" [hidden]="true" value="secretQuestionTryCount"></ion-input> -->\n      </ion-item>\n      <div align="center" *ngIf="isBusy">\n        <ion-spinner name="dots"></ion-spinner>\n      </div>\n\n      <!-- <div *ngIf="hasQuestion || hasHint"> -->\n          <div *ngIf="hasQuestion">\n      <ion-item>\n        <ion-input type="text" formControlName="answer" name="asnwer" placeholder="Secret Answer"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" formControlName="newPassword" name="newPassword" placeholder="New Password"></ion-input>\n      </ion-item>\n\n      <div *ngIf="!form.controls.newPassword.valid && form.controls.newPassword.dirty">\n        <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n      </div>\n      <ion-item>\n        <ion-input type="password" formControlName="confirmPassword" name="confirmPassword" placeholder="Confirm Password"></ion-input>\n      </ion-item>\n      <div *ngIf="(form.controls.newPassword.valid) && (form.controls.confirmPassword.value != form.controls.newPassword.value && form.controls.confirmPassword.dirty)">\n        <p class="input-error">Password did not match</p>\n      </div>\n      <div *ngIf="(!form.controls.newPassword.valid) && (!form.controls.confirmPassword.valid && form.controls.confirmPassword.dirty)">\n        <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n      </div>\n\n    </div>\n\n    <!-- <div *ngIf="hasHint">\n      <ion-item>\n        <ion-input type="text" formControlName="answer" name="asnwer" placeholder="Secret Answer"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" formControlName="newPassword" name="newPassword" placeholder="New Password"></ion-input>\n      </ion-item>\n\n      <div *ngIf="!form.controls.newPassword.valid && form.controls.newPassword.dirty">\n        <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n      </div>\n      <ion-item>\n        <ion-input type="password" formControlName="confirmPassword" name="confirmPassword" placeholder="Confirm Password"></ion-input>\n      </ion-item>\n      <div *ngIf="(form.controls.newPassword.valid) && (form.controls.confirmPassword.value != form.controls.newPassword.value && form.controls.confirmPassword.dirty)">\n        <p class="input-error">Password did not match</p>\n      </div>\n      <div *ngIf="(!form.controls.newPassword.valid) && (!form.controls.confirmPassword.valid && form.controls.confirmPassword.dirty)">\n        <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n      </div>\n\n    </div> -->\n    </div>\n\n    <div align="center" style="margin-top:30px">\n        <button ion-button [disabled]="!isReadyToProceed" style="width: 285px;height: 50px;border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Submit</button>\n    </div>\n    <div align="center">\n        <p style="height: 16px;font-style: normal;font-weight: normal;line-height: normal;font-size: 13px;text-align: center;color: #E5E5E5;">Already have an account? <a (click)="gotoLogin()">Sign in</a></p>\n    </div>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\forgetpassword\forgetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["b" /* Idle */], __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], ForgetpasswordPage);
    return ForgetpasswordPage;
}());

//# sourceMappingURL=forgetpassword.js.map

/***/ })

});
//# sourceMappingURL=34.js.map