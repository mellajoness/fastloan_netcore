webpackJsonp([23],{

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendPageModule", function() { return RecommendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommend__ = __webpack_require__(925);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecommendPageModule = /** @class */ (function () {
    function RecommendPageModule() {
    }
    RecommendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recommend__["a" /* RecommendPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recommend__["a" /* RecommendPage */]),
            ],
        })
    ], RecommendPageModule);
    return RecommendPageModule;
}());

//# sourceMappingURL=recommend.module.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(301);
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
  Created by Akobundu Michael AKA Bundle
 */
var RecommendPage = /** @class */ (function () {
    function RecommendPage(socialSharing, session, modalCtrl, toastCtrl, storage, formBuilder, api, loading, navCtrl, navParams) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.session = session;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.api = api;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recommendMsg = "Kindly go to https://play.google.com/store/apps/details?id=io.fidelity.flashlend and download FastLoan";
        this.form = formBuilder.group({
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(13), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(13), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{13}')])]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToProceed = _this.form.valid;
        });
    }
    RecommendPage.prototype.ionViewDidLoad = function () {
        this.phoneNumber = this.session._getPhoneNumber();
        this.sessionKey = this.session._getSessionKey();
    };
    /*inviteFriend() {
        this.loading.show("Sending your invite...");
        var req = {
          productId: 230,
          referee: this.form.value.phoneNumber,
          referrer: this.phoneNumber
        };
        this.api.post('add-referral', req, this.api._injectAuth(this.sessionKey)).subscribe((res: any) => {
          if(res) {
            this.loading.hide();
            let status = this.modalCtrl.create('ReferralstatusPage', {success : res.code == '00' ? true : false });
            status.onDidDismiss((_action) => {
              if(!_action) {
                this.form.value.phoneNumber = null;
                return;
              }
              this.navCtrl.setRoot('DashboardPage');
            })
            status.present();
          }
  
        }, (error) => {
          console.log("error", error);
        })
    }*/
    RecommendPage.prototype.shareOnTwitter = function () {
        var _this = this;
        this.socialSharing.shareViaTwitter(this.recommendMsg).then(function () {
            console.log('Message shared on twitter');
        }).catch(function () {
            _this.api.messageHandler('Could not share on twitter: an error occured, please try installing the Twitter App if it is not installed');
        });
    };
    RecommendPage.prototype.shareOnFacebook = function () {
        var _this = this;
        this.socialSharing.shareViaFacebook(this.recommendMsg).then(function () {
            console.log('Message shared on Facebook');
        }).catch(function () {
            _this.api.messageHandler('Could not share on Facebook: an error occured, please try installing the Facebook App if it is not installed');
        });
    };
    RecommendPage.prototype.shareOnInstagram = function () {
        var _this = this;
        this.socialSharing.shareViaInstagram(this.recommendMsg, null).then(function () {
            console.log('Message shared on Instagram');
        }).catch(function () {
            _this.api.messageHandler('Could not share on Instagram: an error occured, please try installing the Instagram App if it is not installed');
        });
    };
    RecommendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommend',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\recommend\recommend.html"*/'<!--\n  Created by Akobundu Michael (P7543)\n-->\n<ion-header style="background-image: linear-gradient(#247BA0 0%, #0A2463);">\n\n  <ion-navbar transparent>\n    <ion-title>Recommend a Friend</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <div padding>\n        <p style="color:#3D5789">Recommend FastLoan to your friends and family via social media.</p>\n        <p style="color:#3D5789">You can recommend it to as many people as you like to share your awesome experience</p>\n        <div padding align="center" style="position: absolute;top:178px; left: 0; bottom: 0; right: 0;">\n        <ion-list padding>\n            <ion-item class="recommend-card" (click)="shareOnTwitter()">\n                <span><img src="../../assets/img/twitter.png" width="20" height="20"/></span> <span class="label-wrapper"> Share on Twitter</span>\n            </ion-item>\n            <ion-item class="recommend-card" (click)="shareOnFacebook()">\n                <span><img src="../../assets/img/facebook.png" width="15" height="20"/></span> <span class="label-wrapper"> Share on Facebook</span>\n            </ion-item>\n            <ion-item class="recommend-card" (click)="shareOnInstagram()">\n                <span><img src="../../assets/img/instagram.png" width="20" height="20"/></span> <span class="label-wrapper"> Share on Instagram</span>\n            </ion-item>\n        </ion-list>\n    </div>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\recommend\recommend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], RecommendPage);
    return RecommendPage;
}());

//# sourceMappingURL=recommend.js.map

/***/ })

});
//# sourceMappingURL=23.js.map