webpackJsonp([30],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenaccountPageModule", function() { return OpenaccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__openaccount__ = __webpack_require__(915);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpenaccountPageModule = /** @class */ (function () {
    function OpenaccountPageModule() {
    }
    OpenaccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__openaccount__["a" /* OpenaccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__openaccount__["a" /* OpenaccountPage */]),
            ],
        })
    ], OpenaccountPageModule);
    return OpenaccountPageModule;
}());

//# sourceMappingURL=openaccount.module.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
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
 * Generated class for the OpenaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpenaccountPage = /** @class */ (function () {
    function OpenaccountPage(navCtrl, navParams, loading, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.form = formBuilder.group({
            bvn: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]{11}')])]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.form.valid;
        });
    }
    OpenaccountPage.prototype.ionViewDidLoad = function () {
    };
    OpenaccountPage.prototype.tiggerAccountOpening = function () {
        var _this = this;
        this.loading.show('Opening account...');
        setTimeout(function () {
            _this.loading.hide();
            _this.navCtrl.push('OpenaccountsuccessPage');
        }, 5000);
    };
    OpenaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-openaccount',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\openaccount\openaccount.html"*/'<!--\n  Generated template for the OpenaccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="fidelityBlue">\n    <ion-title>Open an Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="app-content">\n  <p><img src="../assets/img/logo.png" class="logo"/></p>\n  <form *ngIf="form" [formGroup]="form" (submit)="tiggerAccountOpening()">\n    <ion-list class="accountlist-wrapper">\n      <ion-item>\n        <ion-input type="tel" placeholder="BVN Details" formControlName="bvn" name="bvn"></ion-input>\n      </ion-item>\n    </ion-list>\n  <button ion-button color="fidelityGreen" [disabled]="!isReadyToProceed" class="custom-button" round>Open an Account</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\openaccount\openaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], OpenaccountPage);
    return OpenaccountPage;
}());

//# sourceMappingURL=openaccount.js.map

/***/ })

});
//# sourceMappingURL=30.js.map