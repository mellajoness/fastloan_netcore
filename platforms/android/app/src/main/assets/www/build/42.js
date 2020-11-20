webpackJsonp([42],{

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountlistPageModule", function() { return AccountlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountlist__ = __webpack_require__(898);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountlistPageModule = /** @class */ (function () {
    function AccountlistPageModule() {
    }
    AccountlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accountlist__["a" /* AccountlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accountlist__["a" /* AccountlistPage */]),
            ],
        })
    ], AccountlistPageModule);
    return AccountlistPageModule;
}());

//# sourceMappingURL=accountlist.module.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountlistPage; });
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
 * Generated class for the AccountlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountlistPage = /** @class */ (function () {
    function AccountlistPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bankAccounts = [];
    }
    AccountlistPage.prototype.ionViewDidLoad = function () {
        this.bankAccounts = this.navParams.get('bankaccounts');
        console.log(this.bankAccounts);
    };
    AccountlistPage.prototype.accountSelected = function (item) {
        this.viewCtrl.dismiss(item);
    };
    AccountlistPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AccountlistPage.prototype.gotoAddAccount = function (addaccount) {
        this.viewCtrl.dismiss(addaccount);
    };
    AccountlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accountlist',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\accountlist\accountlist.html"*/'<!--\n  Created by Akobundu Michael (P7543)\n-->\n<ion-header style="background-image: linear-gradient(#247BA0 0%, #0A2463);">\n\n  <ion-navbar transparent>\n    <ion-title style="color:#ffffff">Accounts</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios" style="color: #fff">\n          Cancel\n        </span>\n        <ion-icon style="font-size:25px" name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar transparent>\n    <!--<div align="center">-->\n      <p class="request-level">50% Complete</p>\n      <img src="../../assets/img/progress2.png"/>\n      <ion-grid style="color:#ffffff;font-size:11px">\n        <ion-row>\n            <ion-col>\n                Loan Offers\n            </ion-col>\n            <ion-col>\n                Select bank\n            </ion-col>\n            <ion-col>\n                Payment Card\n            </ion-col>\n            <ion-col>\n            condirm Loan\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n    <!--</div>-->\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding style="height:100%">\n        <p class="sub-title">Please select account</p>\n            <div style="top:241px;height:80px">\n                <ion-item *ngFor="let bankaccount of bankAccounts" class="account-details-wrapper" (click)="accountSelected(bankaccount)">\n                    <p style="color:#3D5789;font-weight:bold">{{ bankaccount.bankName }}</p>\n                    <p style="color:#3D5789;margin-top:10px">{{ bankaccount.censoredAccountNo }}</p>\n                    <button ion-button clear item-end>\n                    <ion-icon style="font-size:30px;color:gray" name="ios-arrow-forward"></ion-icon>\n                    </button>\n                </ion-item>\n            </div>\n            <div align="center" style="position: absolute;min-height:100px; left: 0; bottom: 0; right: 0;">\n                <p style="color:#3D5789" (click)="gotoAddAccount(\'addaccount\')">I think i\'ll use a new account </p>\n            </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\accountlist\accountlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], AccountlistPage);
    return AccountlistPage;
}());

//# sourceMappingURL=accountlist.js.map

/***/ })

});
//# sourceMappingURL=42.js.map