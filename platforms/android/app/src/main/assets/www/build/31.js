webpackJsonp([31],{

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewregPageModule", function() { return NewregPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newreg__ = __webpack_require__(919);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewregPageModule = /** @class */ (function () {
    function NewregPageModule() {
    }
    NewregPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newreg__["a" /* NewregPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newreg__["a" /* NewregPage */]),
            ],
        })
    ], NewregPageModule);
    return NewregPageModule;
}());

//# sourceMappingURL=newreg.module.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewregPage; });
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
 * Generated class for the NewregPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewregPage = /** @class */ (function () {
    function NewregPage(idle, session, loading, api, navCtrl, navParams, formBuilder, device) {
        var _this = this;
        this.idle = idle;
        this.session = session;
        this.loading = loading;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.device = device;
        this.newreg = formBuilder.group({
            secretQuestion: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            secretAnswer: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            secretQuestionHint: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
        });
        this.newreg.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.newreg.valid;
        });
    }
    NewregPage.prototype.ionViewDidLoad = function () {
        this.data = this.navParams.get('wholeData');
    };
    NewregPage.prototype.ionViewWillEnter = function () {
        this.idle.stop();
    };
    NewregPage.prototype.ionViewWillLeave = function () {
        this.idle.watch();
    };
    NewregPage.prototype.gotoLogin = function () {
        this.navCtrl.push('SigninPage');
    };
    // gotoNext() {
    //   document.getElementById("secondForm").style.display = "block";
    //   document.getElementById("firstForm").style.display = "none";
    // }
    // gotoPrevious() {
    //   document.getElementById("secondForm").style.display = "none";
    //   document.getElementById("firstForm").style.display = "block";
    // }
    NewregPage.prototype.newRegistration = function () {
        var _this = this;
        if (this.newreg.value.password != this.newreg.value.confirmPassword) {
            this.api.messageHandler('Password does not match', 5000, 'bottom');
            return;
        }
        this.loading.show('Updating your account...');
        var req = {
            confirmPassword: this.newreg.value.confirmPassword,
            password: this.newreg.value.password,
            secretAnswer: this.newreg.value.secretAnswer,
            secretQuestion: this.newreg.value.secretQuestion,
            secretQuestionHint: this.newreg.value.secretQuestionHint,
            phoneNumber: this.data.phoneNumber,
            deviceId: this.device.uuid
            //deviceId: 'df1284ucnod'
        };
        console.log(req, 'Body');
        this.api.post('reregister-user', req).subscribe(function (res) {
            console.log('ReReg Response', res);
            _this.loading.hide();
            if (res.code == '00') {
                _this.session._setPhoneNumber(_this.data.phoneNumber);
                _this.session._setSessionKey(_this.data.sessionKey);
                _this.session._setEmail(_this.data.emailAddress);
                _this.session._setFirstname(_this.data.firstName);
                _this.session._setLastname(_this.data.lastName);
                _this.navCtrl.setRoot('DashboardPage');
            }
            else {
                _this.api.messageHandler(res.message, 5000, 'top');
            }
        }, function (error) {
            _this.loading.hide();
            _this.api.messageHandler(error.error.message, 5000, 'top');
        });
    };
    NewregPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newreg',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\newreg\newreg.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title>Reregister Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="app_bg" style="height: 100%">\n  <form [formGroup]="newreg" (submit)="newRegistration()">\n\n    <div align="center" class="regForm">\n      <ion-item>\n          <ion-input type="password" formControlName="password" placeholder="Password"></ion-input>\n        </ion-item>\n\n        <div *ngIf="!newreg.controls.password.valid && newreg.controls.password.dirty">\n            <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n          </div>\n\n        <ion-item>\n            <ion-input type="password" formControlName="confirmPassword" placeholder="Confirm Password"></ion-input>\n          </ion-item>\n\n          <div *ngIf="(newreg.controls.password.valid) && (newreg.controls.confirmPassword.value != newreg.controls.password.value && newreg.controls.confirmPassword.dirty)">\n              <p class="input-error">Password did not match</p>\n            </div>\n            <div *ngIf="(!newreg.controls.password.valid) && (!newreg.controls.confirmPassword.valid && newreg.controls.confirmPassword.dirty)">\n              <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n            </div>\n\n          <ion-item>\n              <ion-input type="text" formControlName="secretQuestion" placeholder="Secret Question"></ion-input>\n            </ion-item>\n\n            <div *ngIf="!newreg.controls.secretQuestion.valid && newreg.controls.secretQuestion.dirty">\n                <p class="input-error">Field is mandatory</p>\n              </div>\n\n            <ion-item>\n                <ion-input type="text" formControlName="secretAnswer" placeholder="Secret Answer"></ion-input>\n              </ion-item>\n\n              <div *ngIf="!newreg.controls.secretAnswer.valid && newreg.controls.secretAnswer.dirty">\n                  <p class="input-error">Answer the secret question above</p>\n                </div>\n\n              <ion-item>\n                  <ion-input type="text" formControlName="secretQuestionHint" placeholder="Hint"></ion-input>\n                </ion-item>\n\n                <div *ngIf="!newreg.controls.secretQuestionHint.valid && newreg.controls.secretQuestionHint.dirty">\n                    <p class="input-error">Field is compulsory and must be maximum of 10 character length</p>\n                  </div>\n      </div>\n\n      <div align="center" class="submit_button">\n      <button ion-button type="submit" [disabled]="!isReadyToProceed">Submit</button>\n    </div>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\newreg\newreg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["b" /* Idle */], __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */]])
    ], NewregPage);
    return NewregPage;
}());

//# sourceMappingURL=newreg.js.map

/***/ })

});
//# sourceMappingURL=31.js.map