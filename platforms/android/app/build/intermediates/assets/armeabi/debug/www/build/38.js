webpackJsonp([38],{

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]),
            ],
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(124);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(loading, api, session, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.loading = loading;
        this.api = api;
        this.session = session;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = formBuilder.group({
            currentPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$')])],
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.form.valid;
        });
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        this.phoneNumber = this.session._getPhoneNumber();
        this.sessionKey = this.session._getSessionKey();
    };
    ChangepasswordPage.prototype.submit = function () {
        var _this = this;
        this.loading.show('Changing your password...');
        var req = {
            oldPassword: this.form.value.currentPassword,
            phoneNumber: this.phoneNumber,
            newPassword: this.form.value.newPassword,
            confirmNewPassword: this.form.value.confirmPassword
        };
        console.log(req);
        this.api.post('login-changePassword', req, this.api._injectAuth(this.sessionKey)).subscribe(function (res) {
            _this.loading.hide();
            if (res.code == '00') {
                _this.api.messageHandler('Password changed successfully', 5000, 'top');
                _this.navCtrl.setRoot('DashboardPage');
            }
            else {
                _this.api.messageHandler('Incorrect/Wrong Password Entered', 5000, 'top');
            }
        }, function (error) {
            _this.loading.hide();
            _this.api.messageHandler(error.error.message, 5000, 'top');
            console.log(error);
        });
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\changepassword\changepassword.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  class="app_bg" style="height: 100%">\n  <form *ngIf="form" [formGroup]="form" (submit)="submit()">\n    <div align="center" style="margin-top:100px">\n      <ion-item>\n        <ion-input type="password" formControlName="currentPassword" name="currentPassword" placeholder="Current Password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" formControlName="newPassword" name="newPassword" placeholder="New Password"></ion-input>\n      </ion-item>\n      <div *ngIf="!form.controls.newPassword.valid && form.controls.newPassword.dirty">\n        <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n      </div>\n      <ion-item>\n        <ion-input type="password" formControlName="confirmPassword" name="confirmPassword" placeholder="Confirm Password"></ion-input>\n      </ion-item>\n      <div *ngIf="(form.controls.newPassword.valid) && (form.controls.confirmPassword.value != form.controls.newPassword.value && form.controls.confirmPassword.dirty)">\n        <p class="input-error">Password did not match</p>\n      </div>\n      <div *ngIf="(!form.controls.newPassword.valid) && (!form.controls.confirmPassword.valid && form.controls.confirmPassword.dirty)">\n        <p class="input-error">Password must contain a number, a capital letter, a small letter, a symbol and must be at least 8 character length</p>\n      </div>\n    </div>\n    <div align="center" style="margin-top:30px">\n        <button ion-button [disabled]="!isReadyToProceed" style="width: 285px;height: 50px;border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Submit</button>\n    </div>\n  </form>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ })

});
//# sourceMappingURL=38.js.map