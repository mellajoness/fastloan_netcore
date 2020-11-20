webpackJsonp([26],{

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaywithatmPageModule", function() { return PaywithatmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paywithatm__ = __webpack_require__(920);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaywithatmPageModule = /** @class */ (function () {
    function PaywithatmPageModule() {
    }
    PaywithatmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paywithatm__["a" /* PaywithatmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paywithatm__["a" /* PaywithatmPage */]),
            ],
        })
    ], PaywithatmPageModule);
    return PaywithatmPageModule;
}());

//# sourceMappingURL=paywithatm.module.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaywithatmPage; });
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
 * Generated class for the PaywithatmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaywithatmPage = /** @class */ (function () {
    function PaywithatmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaywithatmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaywithatmPage');
    };
    PaywithatmPage.prototype.okay = function () {
        this.navCtrl.pop();
    };
    PaywithatmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paywithatm',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\paywithatm\paywithatm.html"*/'<!--\nCreated by Akobundu Michael (P7543)\n-->\n<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="app_bg" style="height: 100%">\n    <p style="text-align: center;font-size:18px;color:#fff;margin-top:-15px">Pay Loan</p>\n    <p style="padding-left:15px;font-weight:bold;color:#ffffff">Pay with ATM</p>\n    <div padding style="margin-top:-20px">\n        <p style="color:#ffffff">To pay at an ATM, please ensure you have the phone that receives your bank alerts with you in case you need to receive a token, then do the following:</p>\n        <p style="color:#ffffff">1. Insert your ATM card and select the \'Quickteller\' option</p>\n        <p style="color:#ffffff">2. Select \'Pay Bills\' </p>\n        <p style="color:#ffffff">3. Select \'Others\' </p>\n        <p style="color:#ffffff">4. Enter \'04225701\' as the Biller Code </p>\n        <p style="color:#ffffff">5. Enter the phone number being used with FastLoan for \'Customer Reference Number\' </p>\n        <p style="color:#ffffff">6. Confirm payment</p>\n        <p style="color:#ffffff">7. You will see a confirmation message for your payment.</p>\n        <p style="color:#ffffff">Kindly note that there is a N100 processing fee</p>\n    </div>\n    <div align="center" style="position: absolute;top:430px; left: 0; bottom: 0; right: 0;">\n        <button (click)="okay()" ion-button style="margin-top:10px;width: 285px;height: 50px;border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Okay</button>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\paywithatm\paywithatm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PaywithatmPage);
    return PaywithatmPage;
}());

//# sourceMappingURL=paywithatm.js.map

/***/ })

});
//# sourceMappingURL=26.js.map