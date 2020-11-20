webpackJsonp([41],{

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddaccountPageModule", function() { return AddaccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addaccount__ = __webpack_require__(899);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddaccountPageModule = /** @class */ (function () {
    function AddaccountPageModule() {
    }
    AddaccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addaccount__["a" /* AddaccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addaccount__["a" /* AddaccountPage */]),
            ],
        })
    ], AddaccountPageModule);
    return AddaccountPageModule;
}());

//# sourceMappingURL=addaccount.module.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddaccountPage = /** @class */ (function () {
    function AddaccountPage(platform, session, toastCtrl, api, storage, navCtrl, navParams, viewCtrl, formBuilder, loading) {
        var _this = this;
        this.platform = platform;
        this.session = session;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loading = loading;
        this.banks = [];
        this.isIos = false;
        this.form = formBuilder.group({
            accountNo: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{10}')])],
            bvn: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{11}')])],
            accountType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            bank: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.form.valid;
        });
    }
    AddaccountPage.prototype.ionViewDidLoad = function () {
        if (this.platform.is('ios')) {
            console.log('I am an iOS device!');
            this.isIos = true;
        }
        this.phoneNumber = this.session._getPhoneNumber();
        this.sessionKey = this.session._getSessionKey();
        var ownBank = this.navParams.get('ownbank');
        console.log(ownBank);
        if (ownBank) {
            this.ownbank = true;
            this.form.value.bank = '070';
        }
        this.getbanks();
    };
    AddaccountPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddaccountPage.prototype.getbanks = function () {
        var _this = this;
        this.loading.show('Fetching bank...');
        this.api.get('get-banks', null, this.api._injectAuth(this.sessionKey)).subscribe(function (res) {
            _this.loading.hide();
            console.log(res);
            if (res.code == '00') {
                _this.banks = res.data;
            }
            else {
                _this.api.messageHandler(res.message);
            }
        }, function (error) {
            _this.loading.hide();
            console.log(error);
            _this.api.messageHandler(error.error.message);
        });
    };
    AddaccountPage.prototype.doSubmit = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    AddaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addaccount',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\addaccount\addaccount.html"*/'<!--\n  Generated template for the AddaccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="fidelityBlue">\n    <ion-title>Add Account</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios" style="color: #fff">\n          Cancel\n        </span>\n        <ion-icon style="font-size:25px" name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="app-content">\n<form *ngIf="form" [formGroup]="form" (submit)="doSubmit()">\n<ion-card class="account-card">\n  <ion-list>\n    <p class="account-item" *ngIf="!ownbank">Please select your bank account</p>\n    <ion-item *ngIf="!ownbank" class="card-data">\n      <ion-select formControlName="bank" name="bank">\n        <ion-option value="">Select Bank</ion-option>\n        <ion-option *ngFor="let bank of banks" value="{{bank.code}}">{{bank.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <p class="account-item">Please enter your account No</p>\n    <ion-item class="card-data">\n      <ion-input formControlName="accountNo" name="accountNo" type="tel" placeholder="Account Number"></ion-input>\n    </ion-item>\n    <p class="account-item">Please enter your BVN</p>\n    <ion-item class="card-data">\n      <ion-input formControlName="bvn" name="bvn" type="tel" placeholder="BVN"></ion-input>\n    </ion-item>\n    <ion-item></ion-item>\n  </ion-list>\n  <p class="account-item-last">Account type</p>\n    <ion-grid radio-group formControlName="accountType" name="accountType" style="margin-left:5px" class="card-data">\n    <ion-row>\n      <ion-col>\n      <ion-radio value="savings"></ion-radio> Savings\n      </ion-col>\n      <ion-col>\n      <ion-radio value="current"></ion-radio> Current\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n    <div style="margin-top:20px">\n      <button ion-button color="fidelityGreen" [disabled]="!isReadyToProceed" class="custom-button adjust-button" round>Proceed</button>\n    </div>\n</ion-card>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\addaccount\addaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Loader */]])
    ], AddaccountPage);
    return AddaccountPage;
}());

//# sourceMappingURL=addaccount.js.map

/***/ })

});
//# sourceMappingURL=41.js.map