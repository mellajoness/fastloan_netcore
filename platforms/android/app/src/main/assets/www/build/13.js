webpackJsonp([13],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcardsPageModule", function() { return ViewcardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewcards__ = __webpack_require__(938);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewcardsPageModule = /** @class */ (function () {
    function ViewcardsPageModule() {
    }
    ViewcardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewcards__["a" /* ViewcardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewcards__["a" /* ViewcardsPage */]),
            ],
        })
    ], ViewcardsPageModule);
    return ViewcardsPageModule;
}());

//# sourceMappingURL=viewcards.module.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewcardsPage; });
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
 * Generated class for the ViewcardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewcardsPage = /** @class */ (function () {
    function ViewcardsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isReadyToProceed = false;
    }
    ViewcardsPage.prototype.ionViewDidLoad = function () {
        this.cardadded = this.navParams.get("cardAdded");
        if (this.cardadded)
            this.isReadyToProceed = true;
    };
    ViewcardsPage.prototype.gotoConfirmLoan = function () {
        this.navCtrl.push('ConfirmloanPage');
    };
    ViewcardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewcards',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\viewcards\viewcards.html"*/'<!--\n  Generated template for the SelectloanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="fidelityBlue">\n    <ion-title>Select Payment Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="app-content">\n<p style="margin-left:10px">Please select a payment card below to associate with your loan</p>\n<ion-card style="padding-bottom: 50px; border-radius:10px">\n  <ion-list class="addaccount-list">\n    <button *ngIf="!isReadyToProceed" ion-item style="font-size:20px">\n      Select Card\n    </button>\n    <button *ngIf="isReadyToProceed" ion-item style="font-size:20px">\n      <p>MasterCard</p>\n      <p>*****************6790</p>\n    </button><hr/>\n\n    <button ion-item style="font-size:20px" (click)="showAddaccountModal()">\n      <ion-icon style="font-size:50px" name="ios-add-circle" color="fidelityGreen" item-start></ion-icon>\n      Add new card\n    </button>\n\n  </ion-list>\n  <div align="center" style="margin-top:70px">\n    <button ion-button color="fidelityGreen" [disabled]="!isReadyToProceed" (click)="gotoConfirmLoan()" class="custom-button" round>Proceed</button>\n  </div>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\viewcards\viewcards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ViewcardsPage);
    return ViewcardsPage;
}());

//# sourceMappingURL=viewcards.js.map

/***/ })

});
//# sourceMappingURL=13.js.map