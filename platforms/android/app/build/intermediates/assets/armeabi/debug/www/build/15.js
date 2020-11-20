webpackJsonp([15],{

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
            ]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_idle_core__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = /** @class */ (function () {
    function TutorialPage(idle, navCtrl, menu, translate, platform) {
        this.idle = idle;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.showSkip = true;
        this.dir = 'ltr';
        this.dir = platform.dir();
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.setRoot('SigninPage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.idle.stop();
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
        this.idle.watch();
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\tutorial\tutorial.html"*/'<ion-content no-bounce>\n\n  <ion-slides autoplay="3000" speed="500" loop="true" pager="true" dir="{{dir}}"(ionSlideWillChange)="onSlideChangeStart($event)">\n\n    <ion-slide>\n\n        <div padding align="center" class="logo">\n\n            <img src="../../assets/img/slide1.png" height="20" width="20"/>\n\n        </div>\n\n        <div padding align="center" class="write-up-title">\n\n            <h1>Quick Payback</h1>\n\n        </div>\n\n        <div padding align="center" class="write-up">\n\n            <p>Payback in less than 2 minutes</p>\n\n        </div>\n\n    </ion-slide>\n\n    <ion-slide>\n\n        <div padding align="center" class="logo">\n\n            <img src="../../assets/img/slide2.png" height="20" width="20"/>\n\n        </div>\n\n        <div padding align="center" class="write-up-title">\n\n            <h1>Instant Loan</h1>\n\n        </div>\n\n        <div padding align="center" class="write-up">\n\n            <p>Have your money credited in your account in less than 2 minutes</p>\n\n        </div>\n\n    </ion-slide>\n\n    <ion-slide>\n\n        <div padding align="center" style="margin-top:100px">\n\n            <img src="../../assets/img/slide3.png" height="20" width="20"/>\n\n        </div>\n\n        <div padding align="center" >\n\n            <h1>Secure</h1>\n\n        </div>\n\n        <div padding align="center" >\n\n            <p>We provide every security measure to protect your account</p>\n\n        </div>\n\n            <button (click)="startApp()" ion-button style="width: 285px;height: 50px;border: 1px solid #134074;box-sizing: border-box;border-radius: 2px;background-color: transparent !important;color:#134074;">Get Started</button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LONGBRIDGE\Documents\ionic\fastloan_netcore\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_idle_core__["b" /* Idle */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=15.js.map