webpackJsonp([20],{

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectloanPageModule", function() { return RejectloanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rejectloan__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RejectloanPageModule = /** @class */ (function () {
    function RejectloanPageModule() {
    }
    RejectloanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rejectloan__["a" /* RejectloanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rejectloan__["a" /* RejectloanPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], RejectloanPageModule);
    return RejectloanPageModule;
}());

//# sourceMappingURL=rejectloan.module.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectloanPage; });
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
  Created by Akobundu Michael (P7543)
 */
var RejectloanPage = /** @class */ (function () {
    function RejectloanPage(session, loading, api, toastCtrl, navCtrl, navParams) {
        this.session = session;
        this.loading = loading;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RejectloanPage.prototype.ionViewDidLoad = function () {
        this.sessionKey = this.session._getSessionKey();
        this.phoneNumber = this.session._getPhoneNumber();
    };
    RejectloanPage.prototype.ionViewWillEnter = function () {
        this.navCtrl.swipeBackEnabled = false;
    };
    RejectloanPage.prototype.ionViewWillLeave = function () {
        this.navCtrl.swipeBackEnabled = true;
    };
    RejectloanPage.prototype.gotodashboard = function () {
        this.navCtrl.setRoot('DashboardPage');
    };
    RejectloanPage.prototype.submit = function (reason) {
        var _this = this;
        this.loading.show("Logging your reason...");
        var req = {
            reason: reason,
            phoneNumber: this.phoneNumber
        };
        console.log('body', req);
        this.api.post('Loan/rejection-reason', req, this.api._injectAuth(this.sessionKey)).subscribe(function (res) {
            console.log('rejrction response', res);
            _this.loading.hide();
            if (res.code == '00') {
                _this.api.messageHandler('Your reason has been logged successfully', 7000, 'bottom');
                _this.gotodashboard();
                return;
            }
            _this.api.messageHandler(res.message);
        }, function (error) {
            _this.loading.hide();
            _this.api.messageHandler(error.error.message);
        });
    };
    RejectloanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rejectloan',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\rejectloan\rejectloan.html"*/'<!--\n\nCreated by Akobundu Michael (P7543)\n\n-->\n\n<!--<ion-header no-border>\n\n\n\n  <ion-navbar transparent>\n\n    <ion-title class="app-title"></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content padding class="app_bg">\n\n    <p padding class="sub-title">You rejected your laon, please what could have been the problem?</p>\n\n    <div padding align="center" style="position: absolute;top:178px; left: 0; bottom: 0; right: 0;">\n\n        <ion-list padding>\n\n            <ion-item class="recommend-card" (click)="submit(\'Loan amount is too low\')">\n\n                <span class="label-wrapper"> Loan amount is too low</span>\n\n            </ion-item>\n\n            <ion-item class="recommend-card" (click)="submit(\'Loan interest is too high\')">\n\n                <span class="label-wrapper"> Loan interest is too high</span>\n\n            </ion-item>\n\n            <ion-item class="recommend-card" (click)="submit(\'Loan term is too high\')">\n\n                <span class="label-wrapper"> Loan term is too high</span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n    <div padding align="center" style="position: absolute;top:500px; left: 0; bottom: 0; right: 0;">\n\n        <p class="no-reason" (click)="gotodashboard()">I don\'t have a reason</p>\n\n    </div>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\rejectloan\rejectloan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], RejectloanPage);
    return RejectloanPage;
}());

//# sourceMappingURL=rejectloan.js.map

/***/ })

});
//# sourceMappingURL=20.js.map