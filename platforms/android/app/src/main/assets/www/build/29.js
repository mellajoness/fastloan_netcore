webpackJsonp([29],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenaccountsuccessPageModule", function() { return OpenaccountsuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__openaccountsuccess__ = __webpack_require__(916);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpenaccountsuccessPageModule = /** @class */ (function () {
    function OpenaccountsuccessPageModule() {
    }
    OpenaccountsuccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__openaccountsuccess__["a" /* OpenaccountsuccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__openaccountsuccess__["a" /* OpenaccountsuccessPage */]),
            ],
        })
    ], OpenaccountsuccessPageModule);
    return OpenaccountsuccessPageModule;
}());

//# sourceMappingURL=openaccountsuccess.module.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenaccountsuccessPage; });
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
 * Generated class for the OpenaccountsuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpenaccountsuccessPage = /** @class */ (function () {
    function OpenaccountsuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OpenaccountsuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpenaccountsuccessPage');
    };
    OpenaccountsuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-openaccountsuccess',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\openaccountsuccess\openaccountsuccess.html"*/'<!--\n  Generated template for the OpenaccountsuccessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="fidelityBlue">\n    <ion-title>Success</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="app-content">\n    <p><img src="../assets/img/logo.png" class="logo"/></p>\n\n      <div class="accountnumber-wrapper">\n          Congratulations your fidelity bank account number is:\n      </div>\n      <div align="center" class="accountnumber">\n          5050139163\n      </div>\n      <div class="accountnumber-info">\n          Your account number has been entered in the raffle draw.\n      </div>\n      <div class="accountnumber-info">\n          Click on the link below to register for online and internet banking.\n      </div>\n      <div padding align="center" style="margin-top:100px">\n        <button ion-button color="fidelityGreen" class="custom-button" round>Register</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\openaccountsuccess\openaccountsuccess.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], OpenaccountsuccessPage);
    return OpenaccountsuccessPage;
}());

//# sourceMappingURL=openaccountsuccess.js.map

/***/ })

});
//# sourceMappingURL=29.js.map