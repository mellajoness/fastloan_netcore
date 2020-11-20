webpackJsonp([37],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisbursedPageModule", function() { return DisbursedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disbursed__ = __webpack_require__(909);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DisbursedPageModule = /** @class */ (function () {
    function DisbursedPageModule() {
    }
    DisbursedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__disbursed__["a" /* DisbursedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__disbursed__["a" /* DisbursedPage */]),
            ],
        })
    ], DisbursedPageModule);
    return DisbursedPageModule;
}());

//# sourceMappingURL=disbursed.module.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisbursedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(124);
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
 * Generated class for the DisbursedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisbursedPage = /** @class */ (function () {
    function DisbursedPage(loading, api, session, navCtrl, navParams) {
        this.loading = loading;
        this.api = api;
        this.session = session;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.details = [];
    }
    DisbursedPage.prototype.ionViewDidLoad = function () {
        //Do something stupid
    };
    DisbursedPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.navCtrl.swipeBackEnabled = false;
        this.sessionKey = this.session._getSessionKey();
        this.phoneNumber = this.session._getPhoneNumber();
        this.details = this.navParams.get("details");
        var req = {
            censoredAccountNumber: this.details.censoredAccountNo,
            phoneNumber: this.phoneNumber
        };
        this.api.post('Mobile/set-operative-account', req, this.api._injectAuth(this.sessionKey)).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log("Error", error);
            _this.api.messageHandler('An error occured while setting your disbursed account', 5000, 'bottom');
        });
    };
    DisbursedPage.prototype.ionViewWillLeave = function () {
        this.navCtrl.swipeBackEnabled = true;
    };
    DisbursedPage.prototype.openAccount = function () {
        this.navCtrl.push('OpenaccountPage');
    };
    DisbursedPage.prototype.gotodashboard = function () {
        this.navCtrl.setRoot('DashboardPage');
    };
    DisbursedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-disbursed',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\disbursed\disbursed.html"*/'<!--\nCreated by Akobundu Michael (P7543)\n-->\n<ion-header no-border>\n\n  <ion-navbar hideBackButton transparent>\n    <ion-title class="app-title">100% Complete</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="gotodashboard()">\n        Exit\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-image: linear-gradient(#247BA0 0%, #0A2463); height: 100%">\n    <div align="center" style="position: absolute;top: 70px; left: 0; bottom: 0; right: 0;">\n        <img src="../../assets/img/ok.png" width="60" height="60"/>\n    </div>\n    <div align="center" style="position: absolute;top: 150px; left: 0; bottom: 0; right: 0;font-size:18px;color:#ffffff">\n        <p>Congratulations!</p>\n        <p>Your loan has been disbursed.</p>\n    </div>\n    <div align="center" style="position: absolute;top: 279px; left: 0; bottom: 0; right: 0;color:#ffffff">\n        <p>Your Loan balance is</p>\n        <span style="font-size:30px" >&#8358;{{details.loanwithinterest}}</span> <span style="font-size:18px">(Loan + Interest)</span>\n        <p>{{details.expirydate}}<p>\n    </div>\n    <div align="center" style="position: absolute;top: 460px; left: 0; bottom: 0; right: 0">\n        <button (click)="gotodashboard()" ion-button style="width: 285px;height: 50px;border: 1px solid #FFFFFF;box-sizing: border-box;border-radius: 2px;background-color: transparent !important">Got it</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\disbursed\disbursed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], DisbursedPage);
    return DisbursedPage;
}());

//# sourceMappingURL=disbursed.js.map

/***/ })

});
//# sourceMappingURL=37.js.map