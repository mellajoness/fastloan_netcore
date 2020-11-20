webpackJsonp([27],{

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayloanPageModule", function() { return PayloanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payloan__ = __webpack_require__(928);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayloanPageModule = /** @class */ (function () {
    function PayloanPageModule() {
    }
    PayloanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payloan__["a" /* PayloanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payloan__["a" /* PayloanPage */]),
            ],
        })
    ], PayloanPageModule);
    return PayloanPageModule;
}());

//# sourceMappingURL=payloan.module.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayloanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(127);
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
 * Generated class for the PayloanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PayloanPage = /** @class */ (function () {
    function PayloanPage(navCtrl, navParams, storage, session) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.session = session;
    }
    PayloanPage.prototype.ionViewDidLoad = function () {
    };
    PayloanPage.prototype.paywithcard = function () {
        var custId = this.session._getCustID();
        console.log('my email is', custId);
        var payloadata = {
            CUSTOMER_ID: custId,
        };
        Smartech.setIdentity(payloadata.CUSTOMER_ID);
        Smartech.track("Pay_Loan_StepOne_WithCard", payloadata);
        this.navCtrl.push('PaywithcardPage');
    };
    PayloanPage.prototype.paywithatm = function () {
        this.navCtrl.push('PaywithatmPage');
    };
    PayloanPage.prototype.paywithtransfer = function () {
        var custId = this.session._getCustID();
        console.log('my email is', custId);
        var payloadata = {
            CUSTOMER_ID: custId
        };
        Smartech.setIdentity(payloadata.CUSTOMER_ID);
        Smartech.track("Pay_Loan_StepThree_PayWith_Fidelity", payloadata);
        this.navCtrl.push('PaywithtransferPage');
    };
    PayloanPage.prototype.paywithBankTransfer = function () {
        var custId = this.session._getCustID();
        console.log('my email is', custId);
        var payload = {
            CUSTOMER_ID: custId
        };
        Smartech.setIdentity(payload.CUSTOMER_ID);
        Smartech.track("Pay_Loan_StepThree_PayWith_Fidelity", payload);
        this.navCtrl.push('DirectdebitPage');
    };
    PayloanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payloan',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\payloan\payloan.html"*/'<!--\n\nCreated by Akobundu Michael (P7543)\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar transparent>\n\n    <ion-title></ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="app_bg">\n\n    <p class="page-title">Pay Loan</p>\n\n    <p class="sub-title">Choose a convenient channel to pay your loan</p>\n\n    <div align="center" class="buttons-wrapper">\n\n        <button (click)="paywithcard()" ion-button class="button-design">Pay with card</button>\n\n        <button (click)="paywithBankTransfer()" ion-button class="button-design">Pay with a Fidelity Bank Account</button>\n\n        <button (click)="paywithatm()" ion-button class="button-design">Pay with ATM</button>\n\n        <button (click)="paywithtransfer()" ion-button class="button-design">Pay at a Bank Branch</button>\n\n        <!--<button (click)="paywithtransfer()" ion-button class="button-design">Pay by Bank Transfer</button>-->\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\payloan\payloan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* Session */]])
    ], PayloanPage);
    return PayloanPage;
}());

//# sourceMappingURL=payloan.js.map

/***/ })

});
//# sourceMappingURL=27.js.map