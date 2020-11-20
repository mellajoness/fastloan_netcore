webpackJsonp([39],{

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangedevicePageModule", function() { return ChangedevicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changedevice__ = __webpack_require__(903);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangedevicePageModule = /** @class */ (function () {
    function ChangedevicePageModule() {
    }
    ChangedevicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changedevice__["a" /* ChangedevicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changedevice__["a" /* ChangedevicePage */]),
            ],
        })
    ], ChangedevicePageModule);
    return ChangedevicePageModule;
}());

//# sourceMappingURL=changedevice.module.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangedevicePage; });
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
 * Generated class for the ChangedevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangedevicePage = /** @class */ (function () {
    function ChangedevicePage(device, idle, loading, api, session, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.device = device;
        this.idle = idle;
        this.loading = loading;
        this.api = api;
        this.session = session;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = formBuilder.group({
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{11}')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.form.valid;
        });
    }
    ChangedevicePage.prototype.ionViewWillEnter = function () {
        this.idle.stop();
    };
    ChangedevicePage.prototype.ionViewWillLeave = function () {
        this.idle.watch();
    };
    ChangedevicePage.prototype.submit = function () {
        var _this = this;
        var req = {
            phoneNumber: this.session._injectCountryCode(this.form.value.phoneNumber),
            password: this.form.value.password,
            // newDeviceId: this.device.uuid     //'df1284ucnod'
            newDeviceId: '79b8f6b41479cde4'
        };
        console.log('Change Device Body', req);
        this.loading.show('Changing your device...');
        this.api.post('login-controller/change-device', req).subscribe(function (res) {
            console.log('Change Device Response', res);
            _this.loading.hide();
            if (res.code == '00') {
                _this.api.messageHandler(res.message, 5000, 'top');
                // this.navCtrl.pop();
                var email = _this.session._getEmail();
                var custId = 'R04265456';
                console.log('my email is', email);
                console.log('my cust id', custId);
                var payload = {
                    CUSTOMER_ID: custId,
                    EMAIL: email,
                };
                Smartech.setIdentity(payload.CUSTOMER_ID);
                Smartech.track("CHANGE_DEVICE_SUCCESSFUL", payload);
                console.log("card successful");
            }
            else {
                _this.api.messageHandler(res.message, 5000, 'top');
                var payload = {
                    REASON_FOR_FAILURE: res.message,
                    PHONE: _this.session._injectCountryCode(_this.form.value.phoneNumber),
                };
                Smartech.setIdentity(payload.PHONE);
                Smartech.track("CHANGE_DEVICE_FAILED", payload);
            }
        }, function (error) {
            _this.loading.hide();
            _this.api.messageHandler(error.error.message, 5000, 'top');
            console.log(error);
        });
    };
    ChangedevicePage.prototype.gotoLogin = function () {
        this.navCtrl.pop();
    };
    ChangedevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changedevice',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\changedevice\changedevice.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title>Change Device</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="app_bg" style="height: 100%">\n  <form *ngIf="form" [formGroup]="form" (submit)="submit()">\n    <div align="center" style="margin-top:100px">\n      <ion-item>\n        <ion-input type="tel" formControlName="phoneNumber" name="phoneNumber" placeholder="Phone Number"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" formControlName="password" name="password" placeholder="Password"></ion-input>\n      </ion-item>\n    </div>\n    <div align="center" style="margin-top:30px">\n        <button ion-button [disabled]="!isReadyToProceed" style="width: 285px;height: 50px;border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Submit</button>\n    </div>\n    <div align="center">\n        <p style="height: 16px;font-style: normal;font-weight: normal;line-height: normal;font-size: 13px;text-align: center;color: #E5E5E5;">Already have an account? <a (click)="gotoLogin()">Sign in</a></p>\n    </div>\n  </form>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\changedevice\changedevice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["b" /* Idle */], __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], ChangedevicePage);
    return ChangedevicePage;
}());

//# sourceMappingURL=changedevice.js.map

/***/ })

});
//# sourceMappingURL=39.js.map