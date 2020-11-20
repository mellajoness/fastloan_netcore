webpackJsonp([43],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(194);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(195);
/* unused harmony reexport Items */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(346);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(347);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader__ = __webpack_require__(348);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__loader_loader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_session__ = __webpack_require__(356);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__session_session__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accountlist/accountlist.module": [
		384,
		42
	],
	"../pages/addaccount/addaccount.module": [
		385,
		41
	],
	"../pages/addcard/addcard.module": [
		386,
		9
	],
	"../pages/addownaccount/addownaccount.module": [
		394,
		1
	],
	"../pages/balance/balance.module": [
		387,
		12
	],
	"../pages/carddetails/carddetails.module": [
		426,
		40
	],
	"../pages/cardlist/cardlist.module": [
		388,
		8
	],
	"../pages/changedevice/changedevice.module": [
		389,
		39
	],
	"../pages/changepassword/changepassword.module": [
		398,
		38
	],
	"../pages/confirmloan/confirmloan.module": [
		390,
		11
	],
	"../pages/dashboard/dashboard.module": [
		391,
		7
	],
	"../pages/directdebit/directdebit.module": [
		392,
		0
	],
	"../pages/disbursed/disbursed.module": [
		395,
		37
	],
	"../pages/disclaimer/disclaimer.module": [
		393,
		36
	],
	"../pages/extendloan/extendloan.module": [
		425,
		6
	],
	"../pages/failure/failure.module": [
		397,
		35
	],
	"../pages/forgetpassword/forgetpassword.module": [
		400,
		34
	],
	"../pages/getcardlink/getcardlink.module": [
		396,
		33
	],
	"../pages/loanbalance/loanbalance.module": [
		399,
		10
	],
	"../pages/loanhistory/loanhistory.module": [
		403,
		5
	],
	"../pages/login/login.module": [
		404,
		32
	],
	"../pages/newreg/newreg.module": [
		405,
		31
	],
	"../pages/openaccount/openaccount.module": [
		401,
		30
	],
	"../pages/openaccountsuccess/openaccountsuccess.module": [
		402,
		29
	],
	"../pages/payfailed/payfailed.module": [
		407,
		28
	],
	"../pages/payloan/payloan.module": [
		414,
		27
	],
	"../pages/paysuccess/paysuccess.module": [
		408,
		4
	],
	"../pages/paywithatm/paywithatm.module": [
		406,
		26
	],
	"../pages/paywithcard/paywithcard.module": [
		410,
		3
	],
	"../pages/paywithtransfer/paywithtransfer.module": [
		409,
		25
	],
	"../pages/popover/popover.module": [
		412,
		24
	],
	"../pages/recommend/recommend.module": [
		411,
		23
	],
	"../pages/referralstatus/referralstatus.module": [
		415,
		22
	],
	"../pages/register/register.module": [
		417,
		21
	],
	"../pages/rejectloan/rejectloan.module": [
		413,
		20
	],
	"../pages/requestloan/requestloan.module": [
		416,
		2
	],
	"../pages/selectloan/selectloan.module": [
		419,
		19
	],
	"../pages/settings/settings.module": [
		423,
		18
	],
	"../pages/signin/signin.module": [
		422,
		17
	],
	"../pages/terms/terms.module": [
		418,
		16
	],
	"../pages/tutorial/tutorial.module": [
		420,
		15
	],
	"../pages/validate/validate.module": [
		421,
		14
	],
	"../pages/viewcards/viewcards.module": [
		424,
		13
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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
 * Created by Akobundu Michael (P7543)
 */
var Api = /** @class */ (function () {
    function Api(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        //url: string = 'https://example.com/api/v1';
        //url: string = 'http://10.20.2.33:9009/api/v1';
        // url: string = 'http://196.13.161.88:6780/MinesMobile/api/v1';
        //  url: string = 'https://lending.fidelitybank.ng/api/v1' ;       live           
        //url: string = 'http://10.10.7.213:9009/api/v1';
        //url: string = 'https://jsonplaceholder.typicode.com/posts';
        //  url:string='https://dtptest.fidelitybank.ng/DigitalLoanCSharp/api/v1';
        //  url:string='http://80.248.12.41:9008/api/v1';
        this.loginurl = 'https://dtptest.fidelitybank.ng/MigoLoanService/api/v1';
        this.url = 'https://dtptest.fidelitybank.ng/MigoLoanService/api/v1';
        this._connectionError = "Unable to connect to server, please check your internet connection";
    }
    Api.prototype._injectAuth = function (sessionKey) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set("sessionId", sessionKey);
        return this.options = {
            headers: headers
        };
    };
    Api.prototype.messageHandler = function (msg, duration, position) {
        var _this = this;
        var messageToDisplay;
        if (typeof msg === 'string' && (msg !== null || msg !== undefined))
            this.isString = true;
        /*if(this.isString) {
          messageToDisplay = msg;
        }
        else {
          if(msg.error || msg.message) {
            if(msg.error) {
              messageToDisplay = msg.error.message;
            }
            if(msg.message) {
              messageToDisplay = msg.message;
            }
          }
          else {
             messageToDisplay = this._connectionError;
          }

        }*/
        setTimeout(function () {
            var toast = _this.toastCtrl.create({
                message: _this.isString ? msg : msg.error ? msg.error.message || _this._connectionError : msg.message,
                duration: duration || 3000,
                position: position || 'top'
            });
            toast.present();
        }, 1000);
    };
    // digitalLoangetNewUrl(serviceName: string): Observable<any>  {
    //   const headers = new HttpHeaders();
    //   headers.append('Content-Type','application/json');
    //   headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, XApiKey');
    //   headers.append('Access-Control-Allow-Origin', '*');
    //   const options = { headers: headers};
    //   const url = "https://dtptest.fidelitybank.ng/MigoLoanService/api/v1/Loan/"+ serviceName;
    //   return this.http.get(url, {...options}).pipe(shareReplay(1));
    // }
    // newGetLoans(phoneNumber) {  
    //   return  this.digitalLoangetNewUrl(`get-loans?Phonenumber=${phoneNumber}`);
    //  }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.postLogin = function (endpoint, body, reqOpts) {
        return this.http.post(this.loginurl + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(307);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fingerprint_aio__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_progressbar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_idle_keepalive__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__mocks_providers_items__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { DirectivesModule } from '../directives/directives.module';



// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_17__providers__["d" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_progressbar__["b" /* NgProgressModule */],
                //DirectivesModule,
                __WEBPACK_IMPORTED_MODULE_13__ng_idle_keepalive__["a" /* NgIdleKeepaliveModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/accountlist/accountlist.module#AccountlistPageModule', name: 'AccountlistPage', segment: 'accountlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addaccount/addaccount.module#AddaccountPageModule', name: 'AddaccountPage', segment: 'addaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addcard/addcard.module#AddcardPageModule', name: 'AddcardPage', segment: 'addcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/balance/balance.module#BalancePageModule', name: 'BalancePage', segment: 'balance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cardlist/cardlist.module#CardlistPageModule', name: 'CardlistPage', segment: 'cardlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changedevice/changedevice.module#ChangedevicePageModule', name: 'ChangedevicePage', segment: 'changedevice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmloan/confirmloan.module#ConfirmloanPageModule', name: 'ConfirmloanPage', segment: 'confirmloan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/directdebit/directdebit.module#DirectdebitPageModule', name: 'DirectdebitPage', segment: 'directdebit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/disclaimer/disclaimer.module#DisclaimerPageModule', name: 'DisclaimerPage', segment: 'disclaimer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addownaccount/addownaccount.module#AddownaccountPageModule', name: 'AddownaccountPage', segment: 'addownaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/disbursed/disbursed.module#DisbursedPageModule', name: 'DisbursedPage', segment: 'disbursed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/getcardlink/getcardlink.module#GetcardlinkPageModule', name: 'GetcardlinkPage', segment: 'getcardlink', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/failure/failure.module#FailurePageModule', name: 'FailurePage', segment: 'failure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loanbalance/loanbalance.module#LoanbalancePageModule', name: 'LoanbalancePage', segment: 'loanbalance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgetpassword/forgetpassword.module#ForgetpasswordPageModule', name: 'ForgetpasswordPage', segment: 'forgetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/openaccount/openaccount.module#OpenaccountPageModule', name: 'OpenaccountPage', segment: 'openaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/openaccountsuccess/openaccountsuccess.module#OpenaccountsuccessPageModule', name: 'OpenaccountsuccessPage', segment: 'openaccountsuccess', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loanhistory/loanhistory.module#LoanhistoryPageModule', name: 'LoanhistoryPage', segment: 'loanhistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newreg/newreg.module#NewregPageModule', name: 'NewregPage', segment: 'newreg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paywithatm/paywithatm.module#PaywithatmPageModule', name: 'PaywithatmPage', segment: 'paywithatm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payfailed/payfailed.module#PayfailedPageModule', name: 'PayfailedPage', segment: 'payfailed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paysuccess/paysuccess.module#PaysuccessPageModule', name: 'PaysuccessPage', segment: 'paysuccess', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paywithtransfer/paywithtransfer.module#PaywithtransferPageModule', name: 'PaywithtransferPage', segment: 'paywithtransfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paywithcard/paywithcard.module#PaywithcardPageModule', name: 'PaywithcardPage', segment: 'paywithcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recommend/recommend.module#RecommendPageModule', name: 'RecommendPage', segment: 'recommend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rejectloan/rejectloan.module#RejectloanPageModule', name: 'RejectloanPage', segment: 'rejectloan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payloan/payloan.module#PayloanPageModule', name: 'PayloanPage', segment: 'payloan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/referralstatus/referralstatus.module#ReferralstatusPageModule', name: 'ReferralstatusPage', segment: 'referralstatus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requestloan/requestloan.module#RequestloanPageModule', name: 'RequestloanPage', segment: 'requestloan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selectloan/selectloan.module#SelectloanPageModule', name: 'SelectloanPage', segment: 'selectloan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/validate/validate.module#ValidatePageModule', name: 'ValidatePage', segment: 'validate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewcards/viewcards.module#ViewcardsPageModule', name: 'ViewcardsPage', segment: 'viewcards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/extendloan/extendloan.module#ExtendloanPageModule', name: 'ExtendloanPage', segment: 'extendloan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carddetails/carddetails.module#CarddetailsPageModule', name: 'CarddetailsPage', segment: 'carddetails', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_16__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_17__providers__["e" /* User */],
                __WEBPACK_IMPORTED_MODULE_17__providers__["b" /* Loader */],
                __WEBPACK_IMPORTED_MODULE_17__providers__["c" /* Session */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_17__providers__["d" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(127);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(194);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__(196);
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
 * Created by Akobundu Michael
 * Loader is a generic App busy handler.
 */
var Loader = /** @class */ (function () {
    function Loader(loadingCtrl, ngProgress) {
        this.loadingCtrl = loadingCtrl;
        this.ngProgress = ngProgress;
        this.content = 'Please wait';
    }
    Loader.prototype.create = function (message) {
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: message || this.content
        });
    };
    Loader.prototype.show = function (message) {
        this.create(message);
        this.ngProgress.start();
        return this.loading.present();
    };
    Loader.prototype.hide = function () {
        this.ngProgress.done();
        return this.loading.dismiss();
    };
    Loader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */]])
    ], Loader);
    return Loader;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Session = /** @class */ (function () {
    function Session(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this._isLoggedOut = false;
        this.isAlertUp = false;
    }
    Session.prototype._setSessionKey = function (sessionKey) {
        this._sessionKey = sessionKey;
    };
    Session.prototype._setPhoneNumber = function (phoneNumber) {
        this._phoneNumber = phoneNumber;
    };
    Session.prototype._getPhoneNumber = function () {
        return this._phoneNumber;
    };
    Session.prototype._getSessionKey = function () {
        return this._sessionKey;
    };
    Session.prototype._setEmail = function (email) {
        this._email = email;
    };
    Session.prototype._getEmail = function () {
        return this._email;
    };
    Session.prototype._setCustID = function (custId) {
        this._custId = custId;
    };
    Session.prototype._getCustID = function () {
        return this._custId;
    };
    Session.prototype._setFirstname = function (firstname) {
        this._firstname = firstname;
    };
    Session.prototype._getFirstname = function () {
        return this._firstname;
    };
    Session.prototype._setLastname = function (lastname) {
        this._lastname = lastname;
    };
    Session.prototype._getLastname = function () {
        return this._lastname;
    };
    Session.prototype._formatPhoneNumber = function (phoneNumber) {
        return phoneNumber.replace(/^234+/, '0').replace(/(\d{4})(\d{3})(\d{4})/, "$1-$2-$3");
    };
    Session.prototype._injectCountryCode = function (phoneNumber) {
        return phoneNumber.replace(/^0+/, '234');
    };
    Session.prototype._getExpiredSessionMsg = function () {
        var _this = this;
        if (this.isAlertUp)
            return;
        this.isAlertUp = true;
        this.alert = this.alertCtrl.create({
            title: 'Logged out',
            subTitle: 'Your session has expired',
            buttons: ['Dismiss']
        });
        this.alert.onDidDismiss(function () {
            _this.isAlertUp = false;
        });
        this.alert.present();
    };
    Session.prototype._closeExpiredSessionMsg = function () {
        if (!this.isAlertUp)
            return;
        this.alert.dismiss();
    };
    Session.prototype._checkIfLoggedOut = function () {
        return this._isLoggedOut;
    };
    Session.prototype._logout = function () {
        var _this = this;
        if (this.isAlertUp)
            return;
        this.isAlertUp = true;
        var confirmAlert = this.alertCtrl.create({
            title: "Logout",
            message: "Are you sure you want to logout ?",
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this._destroy();
                        /*this.navCtrl.push('SigninPage', {}, {
                          animate: true,
                          direction: 'forward'
                        });*/
                    }
                }
            ]
        });
        confirmAlert.onDidDismiss(function () {
            _this.isAlertUp = false;
        });
        confirmAlert.present();
    };
    Session.prototype._destroy = function () {
        if ((this._sessionKey == null || this._sessionKey == undefined) && (this._phoneNumber == null || this._phoneNumber == undefined) &&
            (this._email == null || this._email == undefined) &&
            (this._firstname == null || this._firstname == undefined) && (this._lastname == null || this._lastname == undefined)) {
            return;
        }
        this._sessionKey = null;
        this._phoneNumber = null;
        this._email = null;
        this._firstname = null;
        this._lastname = null;
        this._isLoggedOut = true;
    };
    Session = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], Session);
    return Session;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_idle_core__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//declare var cordova;
var MyApp = /** @class */ (function () {
    function MyApp(loading, api, idle, screenOrientation, session, alertCtrl, translate, platform, settings, config, statusBar, splashScreen) {
        var _this = this;
        this.loading = loading;
        this.api = api;
        this.idle = idle;
        this.screenOrientation = screenOrientation;
        this.session = session;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages__["a" /* FirstRunPage */];
        this.pressed = false;
        this.pages = [
            { title: 'Dashboard', component: 'DashboardPage' },
            { title: 'Request Loan', component: 'RequestloanPage' },
            // { title: 'Loan balance', component: 'BalancePage' },
            { title: 'Loan balance', component: 'LoanbalancePage' },
            { title: 'Pay loan', component: 'PayloanPage' },
            { title: 'Recommend a friend', component: 'RecommendPage' },
            { title: 'Loan History', component: 'LoanhistoryPage' }
        ];
        idle.setIdle(240);
        idle.setTimeout(10);
        idle.setInterrupts(__WEBPACK_IMPORTED_MODULE_7__ng_idle_core__["a" /* DEFAULT_INTERRUPTSOURCES */]);
        idle.onTimeoutWarning.subscribe(function (countdown) {
            _this.api.messageHandler('You will be logged out in ' + countdown + ' second(s)');
        });
        idle.onTimeout.subscribe(function () {
            _this.loading.hide(); //close any pending/loading activity before session expires
            _this.session._destroy(); //Destroy session at the App level.
            _this.nav.setRoot('SigninPage', { sessionExpired: true }, {
                animate: true,
                direction: 'forward'
            });
        });
        idle.onIdleEnd.subscribe(function () {
            //Do something amazing here
        });
        idle.watch();
        platform.ready().then(function () {
            //cordova.plugins.certificates.trustUnsecureCerts(true);
            // smartech netcore
            console.log(_this.screenOrientation.type);
            _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            platform.registerBackButtonAction(function () {
                var view = _this.nav.getActive();
                //alert(view.component.name)
                if (_this.nav.length() == 1) {
                    if (_this.pressed || _this.session.isAlertUp || view.component.name == 'DisbursedPage' || view.component.name == 'PaysuccessPage')
                        return;
                    _this.pressed = true;
                    var confirmAlert = _this.alertCtrl.create({
                        title: "Exit",
                        message: _this.exit_advise,
                        buttons: [
                            {
                                text: 'No',
                                handler: function () {
                                    _this.pressed = false;
                                    return;
                                }
                            },
                            {
                                text: 'Yes',
                                handler: function () {
                                    platform.exitApp();
                                }
                            }
                        ]
                    });
                    confirmAlert.present();
                }
                else {
                    if (_this.nav.canGoBack()) {
                        _this.nav.pop();
                    }
                }
            });
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
                //this.translate.use('fr');
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
        this.translate.get('EXIT_ADVISE').subscribe(function (value) {
            _this.exit_advise = value;
        });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        if (this.session.isAlertUp)
            return;
        this.session.isAlertUp = true;
        var confirmAlert = this.alertCtrl.create({
            title: "Logout",
            message: "Are you sure you want to logout ?",
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.session._destroy();
                        _this.nav.setRoot('SigninPage', {}, {
                            animate: true,
                            direction: 'forward'
                        });
                    }
                }
            ]
        });
        confirmAlert.onDidDismiss(function () {
            _this.session.isAlertUp = false;
        });
        confirmAlert.present();
    };
    MyApp.prototype.gotoTerms = function () {
        this.nav.push('TermsPage');
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.gotoDisclaimer = function () {
        this.nav.push('DisclaimerPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header no-border>\n      <ion-toolbar transparent>\n        <ion-title></ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"sidebar_bg\">\n      <p padding style=\"margin-top:-15px\"><img src=\"../../assets/img/man.png\" width=\"80\" height=\"80\"/></p>\n      <div style=\"border-bottom:0px;margin-top:-25px\">\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\" no-lines style=\"background-color: transparent !important;border:none;color:#ffffff\">\n          {{p.title}}\n        </button>\n      </div>\n    </ion-content>\n    <ion-footer no-border>\n      <ion-toolbar transparent>\n        <div style=\"border-bottom:0px;margin-top:20px\">\n          <button menuClose ion-item (click)=\"gotoDisclaimer()\" no-lines style=\"background-color: transparent !important;color:#ffffff;font-size:13px\">\n            Disclaimer\n          </button>\n          <button menuClose ion-item (click)=\"gotoTerms()\" no-lines style=\"background-color: transparent !important;color:#ffffff;font-size:13px\">\n            Terms and Conditions\n          </button>\n          <button menuClose ion-item (click)=\"logout()\" no-lines style=\"background-color: transparent !important;border:none;color:#ffffff;font-size:13px\">\n            Logout\n          </button>\n        </div>\n      </ion-toolbar>\n    </ion-footer>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>",
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_8__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_7__ng_idle_core__["b" /* Idle */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_8__providers__["c" /* Session */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__providers__["d" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
/*export const MainPage = 'TabsPage';

export const SignUpPage = 'SignupPage';

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = 'ListMasterPage';
export const Tab2Root = 'SearchPage';
export const Tab3Root = 'SettingsPage';*/
//# sourceMappingURL=index.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map