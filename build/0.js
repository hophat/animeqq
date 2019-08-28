webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPlayPageModule", function() { return MPlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__m_play__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MPlayPageModule = /** @class */ (function () {
    function MPlayPageModule() {
    }
    MPlayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__m_play__["a" /* MPlayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__m_play__["a" /* MPlayPage */]),
            ],
        })
    ], MPlayPageModule);
    return MPlayPageModule;
}());

//# sourceMappingURL=m-play.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MPlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the MPlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MPlayPage = /** @class */ (function () {
    function MPlayPage(navCtrl, api, sanitization, navParams) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.sanitization = sanitization;
        this.navParams = navParams;
        this.movie_id = this.navParams.get('movie_id');
        this.episode_id = this.navParams.get('episode_id');
    }
    MPlayPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.movie_id, this.episode_id);
                        this.episodeP = this.episode_id;
                        return [4 /*yield*/, this.api.get_episode_flim(this.movie_id, this.episode_id)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        this.flim = res.flim[0];
                        this.list_server = JSON.parse(res.flim[0].servers);
                        this.load_iframe(this.list_server.server1);
                        this.list_episode = res.list_episode;
                        return [2 /*return*/];
                }
            });
        });
    };
    MPlayPage.prototype.load_iframe = function (link) {
        if (link.indexOf(".m3u8") != -1) {
            this.iframe = this.sanitization.bypassSecurityTrustHtml("<video src=" + link + " autoplay=true controls height='250px' width='100%'></video>");
        }
        else {
            this.iframe = this.sanitization.bypassSecurityTrustHtml("<iframe  sandbox=\" allow-scripts allow-same-origin\" class=\"embed-responsive-item\" \n     src=" + link + " allowfullscreen=\"true\" scrolling=\"no\" width=\"100%\" height=\"250px\"></iframe>");
        }
    };
    MPlayPage.prototype.push_play = function (episode) {
        this.navParams.data.episode_id = episode;
        this.ionViewDidLoad();
    };
    MPlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-m-play',template:/*ion-inline-start:"D:\ionicP\anime\src\pages\m-play\m-play.html"*/'<ion-header ion-header no-border>\n    <ion-navbar transparent>\n      <ion-title>Play</ion-title>\n    </ion-navbar>\n    \n  </ion-header>\n\n<ion-content>\n  <!-- <div id="player_video" [innerHTML]="linkVideo" ></div> -->\n  <div [innerHTML]="iframe" id="iframe"></div>\n  <!-- info -->\n  \n  <div padding>\n  <h2  *ngIf="flim" >{{flim.title_flim}}</h2>\n  <!-- list episode -->\n  <div  *ngIf="list_server" text-center>\n      <button ion-button [color]="link1==list_server.server1 ? \'black\'  : \'dark\'"\n       *ngIf="list_server.server1" (click)="load_iframe(list_server.server1)">SERVER1</button>\n      <button ion-button [color]="link1==list_server.server2 ? \'black\'  : \'dark\'" \n      *ngIf="list_server.server2" (click)="load_iframe(list_server.server2)">SERVER2</button>\n      <button ion-button [color]="link1==list_server.server3 ? \'black\'  : \'dark\'"\n       *ngIf="list_server.server3" (click)="load_iframe(list_server.server3)">SERVER3</button>\n    </div>\n  \n    <div  *ngIf="list_episode" text-center >\n        <button ion-button class="bnt-episode" [color]="(episodeP !== f.episode)? \'dark\' : \'danger\' " round \n         *ngFor="let f of list_episode" (click)="push_play(f.episode)" >\n         {{f.episode}}\n        </button>\n        \n     </div>\n \n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionicP\anime\src\pages\m-play\m-play.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MPlayPage);
    return MPlayPage;
}());

//# sourceMappingURL=m-play.js.map

/***/ })

});
//# sourceMappingURL=0.js.map