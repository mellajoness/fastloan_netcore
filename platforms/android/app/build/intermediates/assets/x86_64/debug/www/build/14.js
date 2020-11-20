webpackJsonp([14],{

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatePageModule", function() { return ValidatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validate__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ValidatePageModule = /** @class */ (function () {
    function ValidatePageModule() {
    }
    ValidatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__validate__["a" /* ValidatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__validate__["a" /* ValidatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ValidatePageModule);
    return ValidatePageModule;
}());

//# sourceMappingURL=validate.module.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__ = __webpack_require__(63);
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
  Created by Akobundu Michael(Bundle AKA Mr Bitches(P7543))
 */
var ValidatePage = /** @class */ (function () {
    function ValidatePage(idle, session, navCtrl, toastCtrl, menu, navParams, loading, api, storage) {
        this.idle = idle;
        this.session = session;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.loading = loading;
        this.api = api;
        this.storage = storage;
        this.passcode = "";
    }
    ValidatePage.prototype.ionViewDidLoad = function () {
        this.phoneNumber = this.navParams.get('phone');
        this.formatedNumber = this.session._formatPhoneNumber(this.phoneNumber);
    };
    ValidatePage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    ValidatePage.prototype.ionViewWillEnter = function () {
        this.idle.stop();
    };
    ValidatePage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
        this.idle.watch();
    };
    ValidatePage.prototype.retry = function () {
        var _this = this;
        this.loading.show('Re-sending OTP');
        this.api.get('request-verification/' + this.phoneNumber).subscribe(function (res) {
            _this.loading.hide();
            if (res.code == '00') {
                _this.api.messageHandler('OTP sent to ' + _this.phoneNumber + ' :)', 5000);
            }
            else {
                _this.api.messageHandler(res.message, 5000);
            }
        }, function (error) {
            _this.loading.hide();
            _this.api.messageHandler(error.error.message);
        });
    };
    ValidatePage.prototype.add = function (value) {
        var _this = this;
        if (this.passcode.length < 4) {
            this.passcode = this.passcode + value;
            if (this.passcode.length == 1) {
                document.getElementById("firstinput").style.borderBottom = "1px solid #E5E5E5";
                document.getElementById("secondinput").style.borderBottom = "2px solid #1ABE2A";
            }
            else if (this.passcode.length == 2) {
                document.getElementById("secondinput").style.borderBottom = "1px solid #E5E5E5";
                document.getElementById("thirdinput").style.borderBottom = "2px solid #1ABE2A";
            }
            else if (this.passcode.length == 3) {
                document.getElementById("thirdinput").style.borderBottom = "1px solid #E5E5E5";
                document.getElementById("fourthinput").style.borderBottom = "2px solid #1ABE2A";
            }
            else if (this.passcode.length == 4) {
                console.log(this.passcode);
                document.getElementById("fourthinput").style.borderBottom = "1px solid #E5E5E5";
                this.loading.show('Authenticating...');
                var req = {
                    phoneNumber: this.phoneNumber,
                    verificationCode: this.passcode
                };
                console.log(req);
                this.api.post('verify-code', req).subscribe(function (res) {
                    _this.loading.hide();
                    console.log("res", res);
                    if (res.code == '00') {
                        //this.session._setPhoneNumber(this.phoneNumber);
                        //this.session._setSessionKey(res.sessionId);
                        //this.navCtrl.setRoot('DashboardPage');
                        _this.navCtrl.push('RegisterPage', { phone: _this.phoneNumber });
                    }
                    else {
                        _this.api.messageHandler(res.message, 5000);
                    }
                }, function (error) {
                    _this.loading.hide();
                    _this.api.messageHandler(error.error.message);
                });
            }
        }
    };
    ValidatePage.prototype.delete = function () {
        if (this.passcode.length > 0) {
            this.passcode = this.passcode.substring(0, this.passcode.length - 1);
            if (this.passcode.length == 3) {
                document.getElementById("fourthinput").style.borderBottom = "2px solid #1ABE2A";
            }
            if (this.passcode.length == 2) {
                document.getElementById("thirdinput").style.borderBottom = "2px solid #1ABE2A";
                document.getElementById("fourthinput").style.borderBottom = "1px solid #E5E5E5";
            }
            if (this.passcode.length == 1) {
                document.getElementById("secondinput").style.borderBottom = "2px solid #1ABE2A";
                document.getElementById("thirdinput").style.borderBottom = "1px solid #E5E5E5";
            }
            if (this.passcode.length == 0) {
                document.getElementById("firstinput").style.borderBottom = "2px solid #1ABE2A";
                document.getElementById("secondinput").style.borderBottom = "1px solid #E5E5E5";
            }
        }
    };
    ;
    ValidatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-validate',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\validate\validate.html"*/'<!--\n\nCreated by Akobundu Michael\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar transparent>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image: linear-gradient(rgba(130, 156, 188, 0.95), rgba(61, 87, 137, 0.95), rgba(10, 36, 99, 0.95)); height: 100%;color:#E5E5E5;">\n\n    <div align="center">\n\n      <img src="../../assets/img/bar.png" width="200" height="5"/>\n\n    </div>\n\n  <h4 class="verification_title">{{ \'VALIDATION_TITLE\' | translate }}</h4>\n\n  <p style="text-align:center">{{ \'VALIDATION_MSG\' | translate }} <b>{{ formatedNumber }}</b></p>\n\n  <p style="text-align:center"><a (click)="retry()" style="color:#1ABE2A"><b>Click here</b></a> to resend</p>\n\n     <div style="margin-top: 60px; margin-right:30px">\n\n      <div class="row" style="text-align: center">\n\n        <div id="firstinput" class="col col-10 col-offset-15 pin-display">\n\n          <p class="pin">{{ passcode.substring(0, 1) }}</p>\n\n        </div>\n\n        <div id="secondinput" class="col col-10 col-offset-10 pin-display">\n\n          <p class="pin">{{ passcode.substring(1, 2) }}</p>\n\n        </div>\n\n        <div id="thirdinput" class="col col-10 col-offset-10 pin-display">\n\n          <p class="pin">{{ passcode.substring(2, 3) }}</p>\n\n        </div>\n\n        <div id="fourthinput" class="col col-10 col-offset-10 pin-display">\n\n          <p class="pin">{{ passcode.substring(3, 4) }}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div style="margin-top: 20px;margin-left:40px">\n\n      <div class="row">\n\n        <div class="col col-25 col-offset-15">\n\n          <button class="round-overlay-button button button-icon vallidate_buttons" (click)="add(1)">1</button>\n\n        </div>\n\n        <div class="col col-25">\n\n          <button class="round-overlay-button button button-icon vallidate_buttons" (click)="add(2)">2</button>\n\n        </div>\n\n        <div class="col col-25">\n\n          <button class="round-overlay-button button button-icon vallidate_buttons" (click)="add(3)">3</button>\n\n        </div>\n\n      </div>\n\n      <div class="row">\n\n        <div class="col col-25 col-offset-15">\n\n          <button class="round-overlay-button button button-icon vallidate_buttons" (click)="add(4)">4</button>\n\n        </div>\n\n        <div class="col col-25">\n\n          <button class="round-overlay-button button button-icon vallidate_buttons" (click)="add(5)">5</button>\n\n        </div>\n\n        <div class="col col-25">\n\n          <button class="round-overlay-button button button-icon vallidate_buttons" (click)="add(6)">6</button>\n\n        </div>\n\n      </div>\n\n      <div class="row">\n\n        <div class="col col-25 col-offset-15">\n\n          <button class="round-overlay-button button button-icon vallidate_buttons" (click)="add(7)">7</button>\n\n        </div>\n\n        <div class="col col-25">\n\n          <button class="round-overlay-button button button-icon vallidate_buttons" (click)="add(8)">8</button>\n\n        </div>\n\n        <div class="col col-25">\n\n          <button class="round-overlay-button button button-icon vallidate_buttons" (click)="add(9)">9</button>\n\n        </div>\n\n      </div>\n\n      <div class="row">\n\n        <div class="col col-25 col-offset-15">\n\n          <!--<button class="round-overlay-button button button-icon ion-android-delete" (click)="reset()"></button>-->\n\n        </div>\n\n        <div class="col col-25">\n\n          <button class="round-overlay-button button button-icon vallidate_buttons" (click)="add(0)">0</button>\n\n        </div>\n\n        <div class="col col-25">\n\n          <button *ngIf="passcode.length" class="round-overlay-button button button-icon delete_button" (click)="delete()"><img src="../../assets/img/delete-button.png"/></button>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div align="center">\n\n      <p style="font-size:12px">{{ \'VALIDATION_ADVISE\' | translate }}</p>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\validate\validate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["b" /* Idle */], __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ValidatePage);
    return ValidatePage;
}());

//# sourceMappingURL=validate.js.map

/***/ })

});
//# sourceMappingURL=14.js.map