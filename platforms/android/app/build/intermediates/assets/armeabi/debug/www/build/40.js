webpackJsonp([40],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarddetailsPageModule", function() { return CarddetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carddetails__ = __webpack_require__(940);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarddetailsPageModule = /** @class */ (function () {
    function CarddetailsPageModule() {
    }
    CarddetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__carddetails__["a" /* CarddetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carddetails__["a" /* CarddetailsPage */]),
            ],
        })
    ], CarddetailsPageModule);
    return CarddetailsPageModule;
}());

//# sourceMappingURL=carddetails.module.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarddetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
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
 * Generated class for the CarddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarddetailsPage = /** @class */ (function () {
    function CarddetailsPage(navCtrl, navParams, formBuilder, api, loading, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.loading = loading;
        this.viewCtrl = viewCtrl;
        this.form = formBuilder.group({
            cardNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(16)])],
            cvv: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{3}')])],
            cardPin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{4}')])],
            cardYear: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{2}')])],
            cardMonth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{2}')])],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.form.valid;
        });
    }
    CarddetailsPage.prototype.ionViewDidLoad = function () {
    };
    CarddetailsPage.prototype.doSubmit = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    CarddetailsPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    CarddetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carddetails',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\carddetails\carddetails.html"*/'<!--\n  Created by Akobundu Michael (bundle 4 the girls ...:))\n-->\n<ion-header>\n\n  <ion-navbar color="fidelityBlue">\n    <ion-title>Card Registration</ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="cancel()">\n          <span color="primary" showWhen="ios" style="color: #fff">\n            Cancel\n          </span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="app-content">\n  <form *ngIf="form" [formGroup]="form" (submit)="doSubmit()">\n    <ion-card class="card-card">\n      <ion-card-content class="card-content">\n        <ion-list>\n          <p class="account-item">Enter your card Number</p>\n          <ion-item class="card-data">\n            <ion-input formControlName="cardNumber" name="cardNumber" type="tel" placeholder="Card Number"></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <p class="account-item">Expiration Date</p>\n          <ion-grid style="margin-left:5px" class="card-data">\n            <ion-row>\n              <ion-col>\n                <ion-item class="card-data">\n                  <ion-input formControlName="cardYear" name="cardYear" type="tel" placeholder="YY"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item class="card-data">\n                  <ion-input formControlName="cardMonth" name="cardMonth" type="tel" placeholder="MM"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-list>\n        <ion-list>\n          <p class="account-item">Pin & CVV</p>\n          <ion-grid style="margin-left:5px" class="card-data">\n            <ion-row>\n              <ion-col>\n                <ion-item class="card-data">\n                  <ion-input formControlName="cardPin" name="cardPin" type="password" placeholder="Card Pin"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item class="card-data">\n                  <ion-input formControlName="cvv" name="cvv" type="tel" placeholder="CVV"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-list>\n        <div align="center" style="margin-top:50px">\n          <button ion-button color="fidelityGreen" [disabled]="!isReadyToProceed" class="custom-button" round>Proceed</button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\carddetails\carddetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], CarddetailsPage);
    return CarddetailsPage;
}());

//# sourceMappingURL=carddetails.js.map

/***/ })

});
//# sourceMappingURL=40.js.map