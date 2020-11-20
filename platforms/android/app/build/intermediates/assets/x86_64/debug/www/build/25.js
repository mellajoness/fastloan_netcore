webpackJsonp([25],{

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaywithtransferPageModule", function() { return PaywithtransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paywithtransfer__ = __webpack_require__(923);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaywithtransferPageModule = /** @class */ (function () {
    function PaywithtransferPageModule() {
    }
    PaywithtransferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paywithtransfer__["a" /* PaywithtransferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paywithtransfer__["a" /* PaywithtransferPage */]),
            ],
        })
    ], PaywithtransferPageModule);
    return PaywithtransferPageModule;
}());

//# sourceMappingURL=paywithtransfer.module.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaywithtransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
 * Generated class for the PaywithtransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaywithtransferPage = /** @class */ (function () {
    function PaywithtransferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaywithtransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaywithtransferPage');
    };
    PaywithtransferPage.prototype.okay = function () {
        this.navCtrl.pop();
    };
    PaywithtransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paywithtransfer',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\paywithtransfer\paywithtransfer.html"*/'<!--\nCreated by Akobundu Michael (P7543)\n-->\n<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="app_bg" style="height: 100%">\n    <p style="text-align: center;font-size:18px;color:#fff;margin-top:-15px">Pay Loan</p>\n    <p style="padding-left:15px;font-weight:bold;color:#ffffff">Pay at a Bank Branch</p>\n    <div padding style="margin-top:-20px">\n        <p style="color:#ffffff">To pay at a bank branch, visit any of the following banks:</p>\n        <p style="margin-top:20px;color:#ffffff">1. Fidelity Bank</p>\n        <p style="color:#ffffff">2. Access Bank </p>\n        <p style="color:#ffffff">3. UBA</p>\n        <p style="color:#ffffff">4. GT Bank</p>\n        <p style="color:#ffffff">5. Keystone Bank</p>\n        <p style="color:#ffffff">6. Sterling Bank</p>\n    </div>\n    <div padding style="margin-top:-20px;color:#FFFFFF">\n        Your repayment shall be processed via PAYDIRECT. Please provide the phone number used with Fidelity Migo as your customer reference number, Thank you.\n    </div>\n    <div align="center" style="position: absolute;top:440px; left: 0; bottom: 0; right: 0;">\n        <button (click)="okay()" ion-button style="margin-top:10px;width: 285px;height: 50px;border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Okay</button>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\paywithtransfer\paywithtransfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PaywithtransferPage);
    return PaywithtransferPage;
}());

//# sourceMappingURL=paywithtransfer.js.map

/***/ })

});
//# sourceMappingURL=25.js.map