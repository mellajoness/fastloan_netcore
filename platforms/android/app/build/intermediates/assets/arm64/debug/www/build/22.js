webpackJsonp([22],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralstatusPageModule", function() { return ReferralstatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__referralstatus__ = __webpack_require__(929);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReferralstatusPageModule = /** @class */ (function () {
    function ReferralstatusPageModule() {
    }
    ReferralstatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__referralstatus__["a" /* ReferralstatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__referralstatus__["a" /* ReferralstatusPage */]),
            ],
        })
    ], ReferralstatusPageModule);
    return ReferralstatusPageModule;
}());

//# sourceMappingURL=referralstatus.module.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralstatusPage; });
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
 * Generated class for the ReferralstatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReferralstatusPage = /** @class */ (function () {
    function ReferralstatusPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReferralstatusPage.prototype.ionViewDidLoad = function () {
        this.status = this.navParams.get('success');
    };
    ReferralstatusPage.prototype.cancel = function () {
        this.viewCtrl.dismiss('close');
    };
    ReferralstatusPage.prototype.gotoMenu = function () {
        this.navCtrl.setRoot('DashboardPage');
    };
    ReferralstatusPage.prototype.referAnother = function () {
        this.viewCtrl.dismiss();
    };
    ReferralstatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-referralstatus',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\referralstatus\referralstatus.html"*/'<!--\n  Generated template for the ReferralstatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="fidelityBlue">\n    <ion-title>Recommend a Friend</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios" style="color: #fff">\n          Cancel\n        </span>\n        <ion-icon style="font-size:25px" name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="app-content">\n  <ion-card class="status-card">\n    <ion-card-header style="background-color:#0E237E">\n        <div align="center" *ngIf="status">\n          <ion-icon name="happy" style="color:#fff;font-size:70px; padding: 10px"></ion-icon>\n        </div>\n        <div align="center" *ngIf="!status">\n          <ion-icon name="sad" style="color:#fff;font-size:70px; padding: 10px"></ion-icon>\n        </div>\n    </ion-card-header>\n    <ion-card-content>\n        <div align="center" *ngIf="status" style="margin-top:50px">\n          <p style="font-size:30px">Thank You!</p>\n        </div>\n        <div align="center" *ngIf="!status" style="margin-top:50px">\n          <p style="font-size:30px;color:red">Sorry!</p>\n        </div>\n        <div align="center" *ngIf="status" style="margin-top:60px">\n          <p style="font-size:15px">Thank You for recommending FastLoan!</p>\n          <p style="font-size:15px">Your referral will be notified shortly</p>\n        </div>\n        <div align="center" *ngIf="!status" style="margin-top:60px">\n          <p style="font-size:15px">The number you have referred does not qualify for a referral at this time. Please try another number</p>\n        </div>\n        <div padding align="center" style="margin-top:40px">\n            <button ion-button color="fidelityGreen" class="status == true ? \'custom-button\' : \'another-button\'" (click)="status == true ? gotoMenu() : referAnother()" round>{{ status == true ? \'Menu\' : \'Another person\' }}</button>\n        </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\referralstatus\referralstatus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ReferralstatusPage);
    return ReferralstatusPage;
}());

//# sourceMappingURL=referralstatus.js.map

/***/ })

});
//# sourceMappingURL=22.js.map