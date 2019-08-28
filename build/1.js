webpackJsonp([1],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDetailPageModule", function() { return MDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__m_detail__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MDetailPageModule = /** @class */ (function () {
    function MDetailPageModule() {
    }
    MDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__m_detail__["a" /* MDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__m_detail__["a" /* MDetailPage */]),
            ],
        })
    ], MDetailPageModule);
    return MDetailPageModule;
}());

//# sourceMappingURL=m-detail.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(99);
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
 * Generated class for the MDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MDetailPage = /** @class */ (function () {
    function MDetailPage(navCtrl, api, navParams) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.navParams = navParams;
        this.id = this.navParams.get('id');
        console.log(this.movie);
    }
    MDetailPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var detail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get_movie_detail(this.id)];
                    case 1:
                        detail = _a.sent();
                        this.movie = detail.movie[0];
                        this.categories = detail.categories;
                        this.episodes = detail.list_episode;
                        console.log(detail);
                        return [2 /*return*/];
                }
            });
        });
    };
    MDetailPage.prototype.push_play = function (movie, episodes) {
        this.navCtrl.push('play', { movie_id: movie.id, episode_id: episodes[0].episode });
    };
    MDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-m-detail',template:/*ion-inline-start:"D:\ionicP\anime\src\pages\m-detail\m-detail.html"*/'<ion-header ion-header >\n  <ion-navbar transparent>\n    <!-- <ion-buttons end>\n            <button ion-button icon-only >\n                <ion-icon name="home"  ></ion-icon>\n            </button>\n    </ion-buttons> -->\n    <ion-title>detail</ion-title>\n    <!-- <ion-buttons end>\n            <button ion-button icon-only  >\n                <ion-icon name="albums" ></ion-icon>\n            </button>\n    </ion-buttons> -->\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="backdrop" *ngIf="movie">\n    <img  [src]="movie.avatar">\n  </div>\n  <div class="backdrop-separator1"></div>\n  <div class="backdrop-separator2"></div>\n\n  <div class="poster" *ngIf="movie">\n    <img  class="poster" [src]="movie.avatar">\n    <img  class="poster-effect" [src]="movie.avatar">\n  </div>\n\n  <div class="movie-data" *ngIf="movie">\n    <div class="title">{{ movie.title_flim }}</div>\n    <div class="year">{{ movie.year }}</div>\n    <div class="vote">\n      <div class="text">\n          <ion-icon class="icon" name="videocam"  color="warinng"></ion-icon> <b>{{ movie.present_episode }}</b>/{{ movie.total_episode }}\n      </div>\n    </div>\n    <div style="clear: both"></div>\n    <div class="bar-play">\n        <button ion-button color="dark" outline icon-start>\n            <ion-icon name="add"></ion-icon>\n           Add\n          </button>\n\n        <button ion-button  outline icon-start (click)="push_play(movie,episodes)">\n            <ion-icon name="play"></ion-icon>\n            Play\n          </button>\n    </div>\n    \n      \n\n    <div class="overview" [innerHTML]="movie.content"></div>\n\n  \n    <div class="genres" *ngIf="categories">\n      <div class="label"><ion-icon name="md-pricetag"></ion-icon>Thể loại</div>\n      <div class="value">\n        <span *ngFor="let cate of categories; let last = last">{{ cate.name }}\n          <span *ngIf="!last">, \n\n          </span></span></div>\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionicP\anime\src\pages\m-detail\m-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MDetailPage);
    return MDetailPage;
}());

//# sourceMappingURL=m-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map