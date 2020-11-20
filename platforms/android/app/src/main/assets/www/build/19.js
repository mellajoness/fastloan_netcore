webpackJsonp([19],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectloanPageModule", function() { return SelectloanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectloan__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SelectloanPageModule = /** @class */ (function () {
    function SelectloanPageModule() {
    }
    SelectloanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__selectloan__["a" /* SelectloanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__selectloan__["a" /* SelectloanPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], SelectloanPageModule);
    return SelectloanPageModule;
}());

//# sourceMappingURL=selectloan.module.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectloanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(126);
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
 * Generated class for the SelectloanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectloanPage = /** @class */ (function () {
    function SelectloanPage(translateService, session, toastCtrl, storage, alertCtrl, navCtrl, navParams, modalCtrl, api, loading) {
        var _this = this;
        this.translateService = translateService;
        this.session = session;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.loading = loading;
        this.bankaccounts = [];
        this.selectedAccount = [];
        this.request = {};
        this.isBusy = false;
        this.isSavedAccounts = false;
        this.translateService.get('ACCOUNTADDED_MSG').subscribe(function (value) {
            _this.accountAddedMsg = value;
        });
        this.translateService.get('NOACCOUNT_MSG').subscribe(function (value) {
            _this.noAccountMsg = value;
        });
    }
    SelectloanPage.prototype.ionViewDidLoad = function () {
        var request = this.navParams.get('request');
        this.request = request;
        console.log(this.request);
        this.phoneNumber = this.session._getPhoneNumber();
        this.sessionKey = this.session._getSessionKey();
        this.getbankaccounts();
    };
    SelectloanPage.prototype.getbankaccounts = function () {
        var _this = this;
        this.loading.show('Fetching bank accounts...');
        this.isBusy = true;
        this.api.get('mobile/get-bank-accounts', { 'phoneNumber': this.phoneNumber }, this.api._injectAuth(this.sessionKey)).subscribe(function (res) {
            console.log('get bank account', res);
            if (res.code == '00') {
                _this.bankaccounts = res.data;
                if (!_this.bankaccounts.length) {
                    _this.showAddaccountownModal();
                }
                //return;
            }
        }, function (error) {
            _this.api.messageHandler(error.error.message);
        }, function () {
            _this.loading.hide();
            _this.isBusy = false;
        });
    };
    SelectloanPage.prototype.doRefresh = function (refresher) {
        this.getbankaccounts();
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    SelectloanPage.prototype.showAddaccountModal = function (ownbank) {
        var _this = this;
        console.log(ownbank);
        var addModal = this.modalCtrl.create('AddaccountPage', { ownbank: ownbank });
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.loading.show('Adding account...');
                var req = {
                    accountNo: item.accountNo,
                    accountType: item.accountType,
                    bankCode: ownbank ? '070' : item.bank,
                    bvn: item.bvn,
                    clientNo: _this.phoneNumber
                };
                _this.api.post('mobile/add-bank-account', req, _this.api._injectAuth(_this.sessionKey)).subscribe(function (res) {
                    if (res.code == '00') {
                        _this.api.messageHandler(_this.accountAddedMsg, 3000, 'bottom');
                        _this.selectAccount(res.data);
                        _this.getbankaccounts();
                    }
                }, function (error) {
                    _this.api.messageHandler(error.error.message);
                }, function () {
                    _this.loading.hide();
                });
            }
        });
        addModal.present();
    };
    SelectloanPage.prototype.showAddaccountownModal = function (ownbank) {
        var _this = this;
        var addModal = this.modalCtrl.create('AddownaccountPage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.loading.show('Adding account...');
                var req = {
                    accountNo: item.accountNo,
                    accountType: item.accountType,
                    bankCode: item.bank,
                    bvn: item.bvn,
                    clientNo: _this.phoneNumber
                };
                _this.api.post('mobile/add-bank-account', req, _this.api._injectAuth(_this.sessionKey)).subscribe(function (res) {
                    if (res.code == '00') {
                        _this.api.messageHandler(_this.accountAddedMsg, 3000, 'bottom');
                        _this.selectAccount(res.data);
                        //this.getbankaccounts();
                    }
                    else {
                        _this.api.messageHandler(res, 5000, 'top');
                    }
                }, function (error) {
                    _this.api.messageHandler(error.error.message);
                }, function () {
                    _this.loading.hide();
                });
            }
        });
        addModal.present();
    };
    SelectloanPage.prototype.gotoAddCard = function () {
        this.navCtrl.push('AddcardPage', { request: this.request });
    };
    SelectloanPage.prototype.gotoConfirm = function () {
        this.navCtrl.push('ConfirmloanPage', { request: this.request });
    };
    SelectloanPage.prototype.selectAccount = function (account) {
        this.accountSelected = true;
        this.selectedAccount = account;
        this.request.bankCode = account.bankCode;
        this.request.bankName = account.bankName;
        this.request.censoredAccountNo = account.censoredAccountNo;
        this.request.code = account.code || null;
        this.request.accountId = account.id;
        this.request.lastUseAccount = account.lastUsed || null;
        this.request.message = account.message || null;
        this.request.msisdn = account.msisdn;
        console.log('Request', this.request);
        console.log('bank', this.request.bankName);
        //this.isReadyToProceed = true;
        this.gotoAddCard();
        var custId = this.session._getCustID();
        var payload = {
            CUSTOMER_ID: custId,
            BANK: this.request.bankName
        };
        Smartech.setIdentity(payload.CUSTOMER_ID);
        Smartech.track("Loan_Offer_StepTwo", payload);
    };
    SelectloanPage.prototype.showAccounts = function () {
        var _this = this;
        var listModal = this.modalCtrl.create('AccountlistPage', { bankaccounts: this.bankaccounts });
        listModal.onDidDismiss(function (item) {
            if (item) {
                _this.selectAccount(item);
            }
        });
        listModal.present();
    };
    SelectloanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectloan',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\selectloan\selectloan.html"*/'<!--\n  Created by Akobundu Michael (P7543)\n-->\n<ion-header style="background-image: linear-gradient(#247BA0 0%, #0A2463);">\n\n  <ion-navbar transparent>\n    <ion-title style="color:#ffffff">{{ \'REQUESTLOAN_TITLE\' | translate }}</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="getbankaccounts()">\n        <ion-icon name="refresh"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar transparent>\n    <!--<div align="center">-->\n      <p class="request-level">50% Complete</p>\n      <img src="../../assets/img/progress2.png"/>\n      <ion-grid style="color:#ffffff;font-size:11px">\n        <ion-row>\n            <ion-col>\n                Loan Offers\n            </ion-col>\n            <ion-col>\n                Select Bank\n            </ion-col>\n            <ion-col>\n                Payment Card\n            </ion-col>\n            <ion-col>\n            Confirm Loan\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n    <!--</div>-->\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding style="height:100%">\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n        <p class="sub-title">Please select an account</p>\n            <div style="margin-top:20px;">\n                <ion-item *ngFor="let bankaccount of bankaccounts" class="account-details-wrapper" (click)="selectAccount(bankaccount)">\n                    <p style="color:#3D5789;font-weight:bold">{{ bankaccount.bankName }}</p>\n                    <p style="color:#3D5789;margin-top:10px">{{ bankaccount.censoredAccountNo }}</p>\n                    <button ion-button clear item-end>\n                    <ion-icon style="font-size:30px;color:gray" name="ios-arrow-forward"></ion-icon>\n                    </button>\n                </ion-item>\n            </div>\n            <div align="center" style="margin-top:10px">\n                <p style="color:#3D5789" (click)="showAddaccountownModal()">I think i\'ll use a new account </p>\n            </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\selectloan\selectloan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Loader */]])
    ], SelectloanPage);
    return SelectloanPage;
}());

//# sourceMappingURL=selectloan.js.map

/***/ })

});
//# sourceMappingURL=19.js.map