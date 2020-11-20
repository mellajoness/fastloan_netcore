webpackJsonp([28],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayfailedPageModule", function() { return PayfailedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payfailed__ = __webpack_require__(921);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayfailedPageModule = /** @class */ (function () {
    function PayfailedPageModule() {
    }
    PayfailedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payfailed__["a" /* PayfailedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payfailed__["a" /* PayfailedPage */]),
            ],
        })
    ], PayfailedPageModule);
    return PayfailedPageModule;
}());

//# sourceMappingURL=payfailed.module.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayfailedPage; });
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
 * Generated class for the PayfailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PayfailedPage = /** @class */ (function () {
    function PayfailedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.failed = {};
    }
    PayfailedPage.prototype.ionViewDidLoad = function () {
        this.failed = this.navParams.get('failed');
        console.log(this.failed);
    };
    PayfailedPage.prototype.ionViewWillEnter = function () {
        this.navCtrl.swipeBackEnabled = false;
    };
    PayfailedPage.prototype.ionViewWillLeave = function () {
        this.navCtrl.swipeBackEnabled = true;
    };
    PayfailedPage.prototype.done = function () {
        this.navCtrl.popTo('DirectdebitPage');
    };
    PayfailedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payfailed',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\payfailed\payfailed.html"*/'<ion-header no-border>\n\n  <ion-navbar hideBackButton transparent>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-image: linear-gradient(#247BA0 0%, #0A2463);height:100%">\n    <div align="center" style="margin-top:30px">\n        <img src="../../assets/img/caution.png" width="200" height="200"/>\n    </div>\n\n    <div class="drop" align="center">\n\n        <p style="color:#ffffff">{{failed.message}}</p>\n    </div>\n    <div class="button_drop" align="center">\n        <button (click)="done()" ion-button class="done-button">OK</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\payfailed\payfailed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PayfailedPage);
    return PayfailedPage;
}());

//# sourceMappingURL=payfailed.js.map

/***/ })

});
//# sourceMappingURL=28.js.map