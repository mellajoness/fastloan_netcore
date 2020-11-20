webpackJsonp([35],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailurePageModule", function() { return FailurePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__failure__ = __webpack_require__(911);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FailurePageModule = /** @class */ (function () {
    function FailurePageModule() {
    }
    FailurePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__failure__["a" /* FailurePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__failure__["a" /* FailurePage */]),
            ],
        })
    ], FailurePageModule);
    return FailurePageModule;
}());

//# sourceMappingURL=failure.module.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailurePage; });
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
 * Generated class for the FailurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FailurePage = /** @class */ (function () {
    function FailurePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.failure = {};
    }
    FailurePage.prototype.ionViewDidLoad = function () {
        this.failure = this.navParams.get('failure');
        console.log(this.failure);
    };
    FailurePage.prototype.ionViewWillEnter = function () {
        this.navCtrl.swipeBackEnabled = false;
    };
    FailurePage.prototype.ionViewWillLeave = function () {
        this.navCtrl.swipeBackEnabled = true;
    };
    FailurePage.prototype.done = function () {
        this.navCtrl.popTo('DirectdebitPage');
    };
    FailurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-failure',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\failure\failure.html"*/'<ion-header no-border>\n\n  <ion-navbar hideBackButton transparent>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image: linear-gradient(#247BA0 0%, #0A2463);height:100%">\n    <div align="center" style="margin-top:30px">\n        <img src="../../assets/img/error.png" width="200" height="200"/>\n    </div>\n\n    <div class="drop" align="center">\n\n        <p style="color:#ffffff">{{failure.message}}</p>\n    </div>\n    <div class="button_drop" align="center">\n        <button (click)="done()" ion-button class="done-button">OK</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\failure\failure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FailurePage);
    return FailurePage;
}());

//# sourceMappingURL=failure.js.map

/***/ })

});
//# sourceMappingURL=35.js.map