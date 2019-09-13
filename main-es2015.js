(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"app-graf\">\n  <div *ngIf=\"root$ | async as root\">\n    <smeup-choose [id]=\"root.id\"></smeup-choose>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart/chart.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart/chart.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kup-chart\n  *ngIf=\"comp.loaded\"\n  [data]=\"comp.data\"\n  [axis]=\"getAxis()\"\n  [series]=\"getSeries()\"\n  [types]=\"types\"\n></kup-chart>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/choose/choose.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/choose/choose.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template smeupChooseComponent></ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dash/dash.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dash/dash.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kup-dash *ngIf=\"comp.loaded\" [layout]=\"layout\">\n  <div slot=\"icon\">\n    <span [ngClass]=\"icon\"></span>\n  </div>\n  <div slot=\"value\">\n    {{ value }}\n  </div>\n  <div slot=\"value-int\">\n    {{ valueInt }}\n  </div>\n  <div slot=\"value-dec\">\n    {{ valueDec }}\n  </div>\n  <div slot=\"descr\">\n    {{ description }}\n  </div>\n  <div slot=\"unit\">\n    {{ um }}\n  </div>\n</kup-dash>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/exd/exd.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/exd/exd.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"comp.loaded\" class=\"exd\" [ngClass]=\"exdClass\">\n  <smeup-section\n    *ngFor=\"let section of comp.sections\"\n    [section]=\"section\"\n    [ngStyle]=\"getSectionStyle(section)\"\n  ></smeup-section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/label/label.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/label/label.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"comp.loaded\">\n  <p *ngFor=\"let value of comp.data\">{{ value.value }}</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/matrix/matrix.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/matrix/matrix.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"comp.loaded\">\n  <kup-data-table\n    [data]=\"comp.data\"\n    [columnsWidth]=\"columnsWidth\"\n    [enableSortableColumns]=\"enableSortableColumns\"\n    (kupRowSelected)=\"onRowSelected($event)\"\n  ></kup-data-table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n  <div *ngIf=\"hasSections; then sections; else components\"></div>\n\n  <ng-template #sections>\n    <div [ngClass]=\"sectionClass\">\n      <smeup-section\n        *ngFor=\"let s of section.sections\"\n        [section]=\"s\"\n        [ngStyle]=\"getSectionStyle(s)\"\n      ></smeup-section>\n    </div>\n  </ng-template>\n\n  <ng-template #components>\n    <div *ngIf=\"isFlat; then flat; else multi\"></div>\n  </ng-template>\n\n  <ng-template #flat>\n    <h3 *ngIf=\"mainComponent.title && '*NONE' !== mainComponent.title\">\n      {{ mainComponent.title }}\n    </h3>\n    <smeup-choose [id]=\"mainComponent.id\"></smeup-choose>\n  </ng-template>\n\n  <ng-template #multi>Multi section not yet implemented</ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/unknown/unknown.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/unknown/unknown.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"comp.loaded\">Unknown component type: {{ comp.type }}</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/graf/graf.actions */ "./src/app/store/graf/graf.actions.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");






let AppComponent = class AppComponent {
    constructor(store, snackBar) {
        this.store = store;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.store.dispatch(_store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_4__["loadRoot"]());
        this.root$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_5__["getRootComponent"]));
        this.messagesSub = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_5__["getMessages"]))
            .subscribe(messages => messages.forEach(message => this.snackBar.open(message, "Close", {
            duration: 2000
        })));
    }
    ngOnDestroy() {
        if (this.messagesSub) {
            this.messagesSub.unsubscribe();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _directives_choose_component_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/choose-component.directive */ "./src/app/directives/choose-component.directive.ts");
/* harmony import */ var _components_choose_choose_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/choose/choose.component */ "./src/app/components/choose/choose.component.ts");
/* harmony import */ var _components_exd_exd_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/exd/exd.component */ "./src/app/components/exd/exd.component.ts");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/section/section.component */ "./src/app/components/section/section.component.ts");
/* harmony import */ var _components_label_label_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/label/label.component */ "./src/app/components/label/label.component.ts");
/* harmony import */ var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/chart/chart.component */ "./src/app/components/chart/chart.component.ts");
/* harmony import */ var _components_unknown_unknown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/unknown/unknown.component */ "./src/app/components/unknown/unknown.component.ts");
/* harmony import */ var _components_matrix_matrix_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/matrix/matrix.component */ "./src/app/components/matrix/matrix.component.ts");
/* harmony import */ var _components_dash_dash_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dash/dash.component */ "./src/app/components/dash/dash.component.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _store_graf_graf_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/graf/graf.effects */ "./src/app/store/graf/graf.effects.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _directives_choose_component_directive__WEBPACK_IMPORTED_MODULE_9__["ChooseComponentDirective"],
            _components_choose_choose_component__WEBPACK_IMPORTED_MODULE_10__["ChooseComponent"],
            _components_exd_exd_component__WEBPACK_IMPORTED_MODULE_11__["ExdComponent"],
            _components_section_section_component__WEBPACK_IMPORTED_MODULE_12__["SectionComponent"],
            _components_label_label_component__WEBPACK_IMPORTED_MODULE_13__["LabelComponent"],
            _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_14__["ChartComponent"],
            _components_unknown_unknown_component__WEBPACK_IMPORTED_MODULE_15__["UnknownComponent"],
            _components_matrix_matrix_component__WEBPACK_IMPORTED_MODULE_16__["MatrixComponent"],
            _components_dash_dash_component__WEBPACK_IMPORTED_MODULE_17__["DashComponent"]
        ],
        entryComponents: [
            _components_exd_exd_component__WEBPACK_IMPORTED_MODULE_11__["ExdComponent"],
            _components_label_label_component__WEBPACK_IMPORTED_MODULE_13__["LabelComponent"],
            _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_14__["ChartComponent"],
            _components_matrix_matrix_component__WEBPACK_IMPORTED_MODULE_16__["MatrixComponent"],
            _components_dash_dash_component__WEBPACK_IMPORTED_MODULE_17__["DashComponent"],
            _components_unknown_unknown_component__WEBPACK_IMPORTED_MODULE_15__["UnknownComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_18__["reducers"], {
                metaReducers: _store__WEBPACK_IMPORTED_MODULE_18__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_store_graf_graf_effects__WEBPACK_IMPORTED_MODULE_19__["GrafEffects"]])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/basic-component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/basic-component.ts ***!
  \***********************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/app/store/index.ts");
/* harmony import */ var _store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/graf/graf.actions */ "./src/app/store/graf/graf.actions.ts");






class BasicComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.storeSub = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_4__["getComponentById"], { id: this.id }))
            .subscribe(comp => {
            this.comp = comp;
            this.loadData();
            this.checkRefreshSub();
        });
    }
    ngOnDestroy() {
        this.store.dispatch(_store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_5__["removeComponent"]({ id: this.id }));
        this.storeSub.unsubscribe();
        if (this.refreshSub) {
            this.refreshSub.unsubscribe();
        }
    }
    getComponentType() {
        return this.componentType;
    }
    loadData() {
        if (!this.comp || !this.comp.loaded) {
            return;
        }
        if (this.componentType === "EXD") {
            if (this.comp.sections) {
                // comp already loaded
                return;
            }
        }
        else {
            if (this.comp.data) {
                // data already loaded, nothing to do
                return;
            }
        }
        this.store.dispatch(_store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_5__["loadComponent"]({
            comp: this.comp
        }));
    }
    getAttributeValue(attribute) {
        const ct = this.getComponentType();
        if (!this.comp || !this.comp.options || !ct || !attribute) {
            return null;
        }
        const options = this.comp.options[ct];
        if (!options) {
            console.warn(`cannot find a setup for component type ${ct}`, this.comp.options);
            return null;
        }
        const defaultSetup = options.default;
        if (!defaultSetup) {
            console.warn("cannot find a default setup", options);
            return null;
        }
        return defaultSetup[attribute];
    }
    hasDynamisms() {
        return (this.comp != null && this.comp.dynamisms && this.comp.dynamisms.length > 0);
    }
    getDynamisms(dynamismName) {
        if (this.hasDynamisms()) {
            return this.comp.dynamisms.filter((dynamism) => dynamismName === dynamism.event);
        }
        return [];
    }
    checkRefreshSub() {
        if (this.refreshSub) {
            this.refreshSub.unsubscribe();
        }
        const refresh = this.getAttributeValue("refresh");
        if (refresh) {
            this.refreshSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(parseInt(refresh)).subscribe(() => this.store.dispatch(_store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_5__["loadComponent"]({
                comp: this.comp
            })));
        }
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BasicComponent.prototype, "id", void 0);


/***/ }),

/***/ "./src/app/components/chart/chart.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/chart/chart.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/chart/chart.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/chart/chart.component.ts ***!
  \*****************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-component */ "./src/app/components/basic-component.ts");




let ChartComponent = class ChartComponent extends _basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"] {
    constructor(store) {
        super(store);
        this.componentType = "CHA";
    }
    get types() {
        return this.getAttributeValue("types");
    }
    getAxis() {
        return this.getAttributeValue("axis");
    }
    getSeries() {
        return this.getAttributeValue("series");
    }
};
ChartComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "smeup-chart",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart/chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chart.component.scss */ "./src/app/components/chart/chart.component.scss")).default]
    })
], ChartComponent);



/***/ }),

/***/ "./src/app/components/choose/choose-component-utils.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/choose/choose-component-utils.ts ***!
  \*************************************************************/
/*! exports provided: getComponentByType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentByType", function() { return getComponentByType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _exd_exd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exd/exd.component */ "./src/app/components/exd/exd.component.ts");
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label/label.component */ "./src/app/components/label/label.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chart/chart.component */ "./src/app/components/chart/chart.component.ts");
/* harmony import */ var _unknown_unknown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unknown/unknown.component */ "./src/app/components/unknown/unknown.component.ts");
/* harmony import */ var _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../matrix/matrix.component */ "./src/app/components/matrix/matrix.component.ts");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dash/dash.component */ "./src/app/components/dash/dash.component.ts");







const componentType = {
    EXD: {
        componentFactory: _exd_exd_component__WEBPACK_IMPORTED_MODULE_1__["ExdComponent"]
    },
    LAB: {
        componentFactory: _label_label_component__WEBPACK_IMPORTED_MODULE_2__["LabelComponent"]
    },
    CHA: {
        componentFactory: _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]
    },
    MAT: {
        componentFactory: _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_5__["MatrixComponent"]
    },
    DSH: {
        componentFactory: _dash_dash_component__WEBPACK_IMPORTED_MODULE_6__["DashComponent"]
    },
    UNK: {
        componentFactory: _unknown_unknown_component__WEBPACK_IMPORTED_MODULE_4__["UnknownComponent"]
    }
};
function getComponentByType(type) {
    const comp = componentType[type];
    return comp ? comp : componentType.UNK;
}


/***/ }),

/***/ "./src/app/components/choose/choose.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/choose/choose.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hvb3NlL2Nob29zZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/choose/choose.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/choose/choose.component.ts ***!
  \*******************************************************/
/*! exports provided: ChooseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseComponent", function() { return ChooseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _directives_choose_component_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/choose-component.directive */ "./src/app/directives/choose-component.directive.ts");
/* harmony import */ var _choose_component_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-component-utils */ "./src/app/components/choose/choose-component-utils.ts");
/* harmony import */ var src_app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store */ "./src/app/store/index.ts");







let ChooseComponent = class ChooseComponent {
    constructor(store, componentFactoryResolver) {
        this.store = store;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        this.store
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store__WEBPACK_IMPORTED_MODULE_6__["getComponentById"], { id: this.id }))
            .subscribe(comp => {
            if (!comp) {
                return;
            }
            const type = comp.type;
            const c = Object(_choose_component_utils__WEBPACK_IMPORTED_MODULE_5__["getComponentByType"])(type);
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(c.componentFactory);
            // clearing content of template
            const viewContainerRef = this.host.viewContainerRef;
            viewContainerRef.clear();
            // create component
            const componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.id = comp.id;
        });
    }
};
ChooseComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChooseComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directives_choose_component_directive__WEBPACK_IMPORTED_MODULE_4__["ChooseComponentDirective"], { static: true })
], ChooseComponent.prototype, "host", void 0);
ChooseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "smeup-choose",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choose.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/choose/choose.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./choose.component.scss */ "./src/app/components/choose/choose.component.scss")).default]
    })
], ChooseComponent);



/***/ }),

/***/ "./src/app/components/dash/dash.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/dash/dash.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaC9kYXNoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/dash/dash.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/dash/dash.component.ts ***!
  \***************************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-component */ "./src/app/components/basic-component.ts");




let DashComponent = class DashComponent extends _basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"] {
    constructor(store) {
        super(store);
        this.componentType = "DSH";
    }
    get layout() {
        const layout = this.getAttributeValue("layout");
        return layout ? layout : "1";
    }
    get value() {
        return this.getAttrValue("value");
    }
    get valueInt() {
        return this.getAttrValue("valueInt");
    }
    get valueDec() {
        return this.getAttrValue("valueDec");
    }
    get description() {
        return this.getAttrValue("descr");
    }
    get icon() {
        return this.getAttrValue("icon");
    }
    get um() {
        return this.getAttrValue("unit");
    }
    getAttrValue(attr) {
        if (this.comp && this.comp.data) {
            return this.comp.data[attr];
        }
        return "";
    }
};
DashComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
DashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "smeup-dash",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dash.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dash/dash.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dash.component.scss */ "./src/app/components/dash/dash.component.scss")).default]
    })
], DashComponent);



/***/ }),

/***/ "./src/app/components/exd/exd.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/exd/exd.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".exd {\n  display: flex;\n  flex-direction: column;\n}\n.exd.row {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.exd > smeup-section {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jZXNjby9Xb3JrL2phdmFzY3JpcHQvYW5ndWxhci9zbWV1cC1ncmFmL3NyYy9hcHAvY29tcG9uZW50cy9leGQvZXhkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4ZC9leGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhkL2V4ZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICYucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gID4gc21ldXAtc2VjdGlvbiB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbn1cbiIsIi5leGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmV4ZC5yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZXhkID4gc21ldXAtc2VjdGlvbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/exd/exd.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/exd/exd.component.ts ***!
  \*************************************************/
/*! exports provided: ExdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExdComponent", function() { return ExdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-component */ "./src/app/components/basic-component.ts");
/* harmony import */ var _section_section_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../section/section.helper */ "./src/app/components/section/section.helper.ts");





let ExdComponent = class ExdComponent extends _basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"] {
    constructor(store) {
        super(store);
        this.componentType = "EXD";
    }
    get exdClass() {
        if (!this.comp) {
            return null;
        }
        return {
            row: "column" !== this.comp.layout
        };
    }
    getSectionStyle(section) {
        return Object(_section_section_helper__WEBPACK_IMPORTED_MODULE_4__["getStyle"])(section);
    }
};
ExdComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ExdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "smeup-exd",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/exd/exd.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exd.component.scss */ "./src/app/components/exd/exd.component.scss")).default]
    })
], ExdComponent);



/***/ }),

/***/ "./src/app/components/label/label.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/label/label.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/label/label.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/label/label.component.ts ***!
  \*****************************************************/
/*! exports provided: LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function() { return LabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-component */ "./src/app/components/basic-component.ts");




let LabelComponent = class LabelComponent extends _basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"] {
    constructor(store) {
        super(store);
        this.componentType = "LAB";
    }
};
LabelComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
LabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "smeup-label",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./label.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/label/label.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./label.component.scss */ "./src/app/components/label/label.component.scss")).default]
    })
], LabelComponent);



/***/ }),

/***/ "./src/app/components/matrix/matrix.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/matrix/matrix.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWF0cml4L21hdHJpeC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/matrix/matrix.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/matrix/matrix.component.ts ***!
  \*******************************************************/
/*! exports provided: MatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixComponent", function() { return MatrixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-component */ "./src/app/components/basic-component.ts");
/* harmony import */ var src_app_services_dynamism_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dynamism.service */ "./src/app/services/dynamism.service.ts");
/* harmony import */ var src_app_models_classes_Dynamism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/classes/Dynamism */ "./src/app/models/classes/Dynamism.ts");






let MatrixComponent = class MatrixComponent extends _basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"] {
    constructor(store, dynService) {
        super(store);
        this.dynService = dynService;
        this.componentType = "MAT";
    }
    get columnsWidth() {
        const attr = this.getAttributeValue("columnsWidth");
        return attr ? attr : [];
    }
    get enableSortableColumns() {
        return !!this.getAttributeValue("enableSortableColumns");
    }
    get expandGroups() {
        return !!this.getAttributeValue("expandGroups");
    }
    get filters() {
        const attr = this.getAttributeValue("filters");
        return attr ? attr : {};
    }
    onRowSelected({ detail }) {
        const clickedColumn = detail.clickedColumn;
        const selectedRows = detail.selectedRows;
        const dyns = this.getDynamisms("click");
        dyns.forEach(dyn => {
            const d = new src_app_models_classes_Dynamism__WEBPACK_IMPORTED_MODULE_5__["default"](dyn.event);
            d.source = this.comp;
            d.targets = dyn.targets;
            d.addImplictVariable({
                key: "Column",
                value: clickedColumn
            });
            if (selectedRows.length === 1) {
                const row = selectedRows[0];
                const selectedCell = row.cells[clickedColumn];
                d.addImplictVariable({
                    key: "T1",
                    value: selectedCell.obj.t
                });
                d.addImplictVariable({
                    key: "P1",
                    value: selectedCell.obj.p
                });
                d.addImplictVariable({
                    key: "K1",
                    value: selectedCell.obj.k
                });
                Object.keys(row.cells).forEach(k => {
                    d.addImplictVariable({
                        key: k,
                        value: row.cells[k].obj.k
                    });
                });
            }
            else {
                // TOOD Multi sel
            }
            this.dynService.execute(d);
        });
    }
};
MatrixComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: src_app_services_dynamism_service__WEBPACK_IMPORTED_MODULE_4__["DynamismService"] }
];
MatrixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "smeup-matrix",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./matrix.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/matrix/matrix.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./matrix.component.scss */ "./src/app/components/matrix/matrix.component.scss")).default]
    })
], MatrixComponent);



/***/ }),

/***/ "./src/app/components/section/section.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/section/section.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n.section.row {\n  flex-direction: row;\n}\n.section > smeup-section {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jZXNjby9Xb3JrL2phdmFzY3JpcHQvYW5ndWxhci9zbWV1cC1ncmFmL3NyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gICYucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgPiBzbWV1cC1zZWN0aW9uIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxufVxuIiwiLnNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uc2VjdGlvbi5yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnNlY3Rpb24gPiBzbWV1cC1zZWN0aW9uIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/components/section/section.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/section/section.component.ts ***!
  \*********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/graf/graf.actions */ "./src/app/store/graf/graf.actions.ts");
/* harmony import */ var _section_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section.helper */ "./src/app/components/section/section.helper.ts");





let SectionComponent = class SectionComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        if (this.hasComponents) {
            this.section.components.forEach(comp => this.store.dispatch(Object(src_app_store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_3__["addComponent"])({ comp })));
        }
    }
    get isFlat() {
        if (this.hasSections) {
            return false;
        }
        return this.hasComponents && this.section.components.length === 1;
    }
    get mainComponent() {
        if (this.isFlat) {
            return this.section.components[0];
        }
        return null;
    }
    get sectionClass() {
        if (!this.section) {
            return null;
        }
        return {
            section: true,
            row: "column" !== this.section.layout
        };
    }
    get hasSections() {
        return (!!this.section &&
            !!this.section.sections &&
            this.section.sections.length > 0);
    }
    get hasComponents() {
        return (!!this.section &&
            !!this.section.components &&
            this.section.components.length > 0);
    }
    getSectionStyle(section) {
        return Object(_section_helper__WEBPACK_IMPORTED_MODULE_4__["getStyle"])(section);
    }
};
SectionComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "section", void 0);
SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "smeup-section",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section.component.scss */ "./src/app/components/section/section.component.scss")).default]
    })
], SectionComponent);



/***/ }),

/***/ "./src/app/components/section/section.helper.ts":
/*!******************************************************!*\
  !*** ./src/app/components/section/section.helper.ts ***!
  \******************************************************/
/*! exports provided: getStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function getStyle(section) {
    const grow = section && section.size ? section.size : "1";
    return {
        flex: `${grow} 1 0%`
    };
}


/***/ }),

/***/ "./src/app/components/unknown/unknown.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/unknown/unknown.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdW5rbm93bi91bmtub3duLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/unknown/unknown.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/unknown/unknown.component.ts ***!
  \*********************************************************/
/*! exports provided: UnknownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownComponent", function() { return UnknownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-component */ "./src/app/components/basic-component.ts");




let UnknownComponent = class UnknownComponent extends _basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"] {
    constructor(store) {
        super(store);
        this.componentType = "UNK";
    }
};
UnknownComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
UnknownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "smeup-unknown",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unknown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/unknown/unknown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unknown.component.scss */ "./src/app/components/unknown/unknown.component.scss")).default]
    })
], UnknownComponent);



/***/ }),

/***/ "./src/app/directives/choose-component.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/choose-component.directive.ts ***!
  \**********************************************************/
/*! exports provided: ChooseComponentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseComponentDirective", function() { return ChooseComponentDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChooseComponentDirective = class ChooseComponentDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
ChooseComponentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
ChooseComponentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[smeupChooseComponent]"
    })
], ChooseComponentDirective);



/***/ }),

/***/ "./src/app/models/classes/Dynamism.ts":
/*!********************************************!*\
  !*** ./src/app/models/classes/Dynamism.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dynamism; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Dynamism {
    constructor(event) {
        this.variables = {};
        this.targets = [];
        this.exec = "";
        this.event = event;
    }
    addImplictVariable(variable) {
        this.variables[variable.key] = variable.value;
    }
    isEnabled() {
        // TODO
        return true;
    }
}


/***/ }),

/***/ "./src/app/models/classes/expressions/Constant.ts":
/*!********************************************************!*\
  !*** ./src/app/models/classes/expressions/Constant.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Constant {
    constructor(value) {
        this.value = value;
    }
    evaluate(context) {
        return this.value;
    }
}


/***/ }),

/***/ "./src/app/models/classes/expressions/ExpressionEvaluator.ts":
/*!*******************************************************************!*\
  !*** ./src/app/models/classes/expressions/ExpressionEvaluator.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExpressionEvaluator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constant */ "./src/app/models/classes/expressions/Constant.ts");
/* harmony import */ var _Variable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Variable */ "./src/app/models/classes/expressions/Variable.ts");



class ExpressionEvaluator {
    variableExpression(context, expression) {
        if (!expression) {
            return "";
        }
        let sqrBrkCount = 0;
        let constString = "";
        let varString = "";
        const expressions = [];
        for (let i = 0; i < expression.length; i++) {
            const c = expression.charAt(i);
            if (c === "[") {
                if (sqrBrkCount === 0 && constString.length > 0) {
                    expressions.push(this.addSubExpression(constString));
                    constString = "";
                }
                sqrBrkCount++;
                varString += c;
            }
            else if (c === "]") {
                sqrBrkCount--;
                varString += c;
                if (sqrBrkCount === 0) {
                    expressions.push(this.addSubExpression(varString));
                    varString = "";
                }
            }
            else if (sqrBrkCount === 0) {
                constString += c;
            }
            else {
                varString += c;
            }
        }
        if (sqrBrkCount !== 0) {
            throw `[ ]  unbalanced near ${expression} `;
        }
        if (constString.length > 0) {
            expressions.push(this.addSubExpression(constString));
        }
        return expressions.map(exp => exp.evaluate(context)).join("");
    }
    addSubExpression(expression) {
        const first = expression.indexOf("[");
        const last = expression.lastIndexOf("]");
        if (first === -1 && last === -1) {
            return new _Constant__WEBPACK_IMPORTED_MODULE_1__["default"](expression);
        }
        else if (first === 0 && last === expression.length - 1) {
            return new _Variable__WEBPACK_IMPORTED_MODULE_2__["default"](expression.substring(1, last));
        }
        else if (first === last - 1) {
            throw `Empty [] in ${expression}`;
        }
        else {
            throw `[ ]  unbalanced near ${expression} `;
        }
    }
}


/***/ }),

/***/ "./src/app/models/classes/expressions/Variable.ts":
/*!********************************************************!*\
  !*** ./src/app/models/classes/expressions/Variable.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Variable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Variable {
    constructor(value) {
        this.value = value;
    }
    evaluate(context) {
        return context.variables[this.value];
    }
}


/***/ }),

/***/ "./src/app/services/dynamism.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/dynamism.service.ts ***!
  \**********************************************/
/*! exports provided: DynamismService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamismService", function() { return DynamismService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/graf/graf.actions */ "./src/app/store/graf/graf.actions.ts");




let DynamismService = class DynamismService {
    constructor(store) {
        this.store = store;
    }
    execute(dynamism) {
        if (!dynamism.source) {
            // TODO errore
            return;
        }
        if (!dynamism.isEnabled()) {
            // TODO
            return;
        }
        // check targets
        if (!dynamism.targets || dynamism.targets.length == 0) {
            // save variable in source
            this.store.dispatch(_store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_3__["addVariables"]({
                id: dynamism.source.id,
                variables: dynamism.variables
            }));
        }
        else {
            dynamism.targets.forEach(target => {
                this.store.dispatch(_store_graf_graf_actions__WEBPACK_IMPORTED_MODULE_3__["addVariables"]({
                    id: target,
                    variables: dynamism.variables
                }));
            });
        }
        if (dynamism.targets.length === 0 &&
            dynamism.exec &&
            dynamism.exec !== "") {
            // TODO exec?
        }
    }
};
DynamismService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
DynamismService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], DynamismService);



/***/ }),

/***/ "./src/app/services/script.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/script.service.ts ***!
  \********************************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_mocks_dynamicChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/mocks/dynamicChart */ "./src/mocks/dynamicChart.ts");
/* harmony import */ var src_transformers_grafanaTransformer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/transformers/grafanaTransformer */ "./src/transformers/grafanaTransformer.ts");








let ScriptService = class ScriptService {
    constructor(http) {
        this.http = http;
    }
    getScript(script) {
        // mock for dynamic charts... to be removed
        if ("dynamic/graf/chart" === script) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(src_mocks_dynamicChart__WEBPACK_IMPORTED_MODULE_6__["getChartData"])());
        }
        else if (script.startsWith("graf:")) {
            const url = script.substr(5);
            return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].grafanaUrl}/${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => Object(src_transformers_grafanaTransformer__WEBPACK_IMPORTED_MODULE_7__["transform"])(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
        else {
            return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].configUrl}/${script}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, body was:`, error.error);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Something bad happened; please try again later.");
    }
};
ScriptService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ScriptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ScriptService);



/***/ }),

/***/ "./src/app/store/graf/graf.actions.ts":
/*!********************************************!*\
  !*** ./src/app/store/graf/graf.actions.ts ***!
  \********************************************/
/*! exports provided: loadRoot, loadRootSuccess, loadRootFail, loadComponent, loadComponentSuccess, loadComponentFail, addComponent, addVariables, removeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRoot", function() { return loadRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRootSuccess", function() { return loadRootSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRootFail", function() { return loadRootFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponent", function() { return loadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponentSuccess", function() { return loadComponentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponentFail", function() { return loadComponentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComponent", function() { return addComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVariables", function() { return addVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeComponent", function() { return removeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const loadRoot = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Graf] Load Root");
const loadRootSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Graf] Load Root Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const loadRootFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Graf] Load Root Fail", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const loadComponent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Graf] Load Component", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const loadComponentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Graf] Load Component Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const loadComponentFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Graf] Load Component Fail", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const addComponent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Graf] Add Component", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const addVariables = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Graf] Add Variables", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const removeComponent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])("[Graf] Remove Component", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/store/graf/graf.effects.ts":
/*!********************************************!*\
  !*** ./src/app/store/graf/graf.effects.ts ***!
  \********************************************/
/*! exports provided: GrafEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrafEffects", function() { return GrafEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _services_script_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/script.service */ "./src/app/services/script.service.ts");
/* harmony import */ var _graf_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graf.actions */ "./src/app/store/graf/graf.actions.ts");
/* harmony import */ var _models_classes_expressions_ExpressionEvaluator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/classes/expressions/ExpressionEvaluator */ "./src/app/models/classes/expressions/ExpressionEvaluator.ts");








let GrafEffects = class GrafEffects {
    constructor(actions$, scriptService) {
        this.actions$ = actions$;
        this.scriptService = scriptService;
        this.loadRoot$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_graf_actions__WEBPACK_IMPORTED_MODULE_6__["loadRoot"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.scriptService.getScript("config/graf/Start3").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(root => _graf_actions__WEBPACK_IMPORTED_MODULE_6__["loadRootSuccess"]({ root })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(message => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_graf_actions__WEBPACK_IMPORTED_MODULE_6__["loadRootFail"]({ message })))))));
        this.loadComponent$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_graf_actions__WEBPACK_IMPORTED_MODULE_6__["loadComponent"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(({ comp }) => {
            const fun = new _models_classes_expressions_ExpressionEvaluator__WEBPACK_IMPORTED_MODULE_7__["default"]().variableExpression(comp, comp.fun);
            return this.scriptService.getScript(fun).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => _graf_actions__WEBPACK_IMPORTED_MODULE_6__["loadComponentSuccess"]({ data, id: comp.id })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(message => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_graf_actions__WEBPACK_IMPORTED_MODULE_6__["loadComponentFail"]({ id: comp.id, message }))));
        })));
    }
};
GrafEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
    { type: _services_script_service__WEBPACK_IMPORTED_MODULE_5__["ScriptService"] }
];
GrafEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GrafEffects);



/***/ }),

/***/ "./src/app/store/graf/graf.reducers.ts":
/*!*********************************************!*\
  !*** ./src/app/store/graf/graf.reducers.ts ***!
  \*********************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _graf_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graf.actions */ "./src/app/store/graf/graf.actions.ts");



const initialState = {
    componentsById: {},
    rootComponentId: null
};
const grafReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_graf_actions__WEBPACK_IMPORTED_MODULE_2__["loadRootSuccess"], (state, { root }) => {
    const newCompById = Object.assign({}, state.componentsById);
    newCompById[root.id] = root;
    return Object.assign({}, state, { componentsById: newCompById, rootComponentId: root.id });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_graf_actions__WEBPACK_IMPORTED_MODULE_2__["loadRootFail"], state => (Object.assign({}, state, { componentsById: {}, rootComponentId: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_graf_actions__WEBPACK_IMPORTED_MODULE_2__["loadComponentSuccess"], (state, { data, id }) => {
    const copy = Object.assign({}, state, { componentsById: Object.assign({}, state.componentsById) });
    const comp = copy.componentsById[id];
    if (comp) {
        if ("EXD" === comp.type) {
            copy.componentsById[id] = Object.assign({}, copy.componentsById[id], { sections: data });
        }
        else {
            copy.componentsById[id] = Object.assign({}, copy.componentsById[id], { data });
        }
    }
    return copy;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_graf_actions__WEBPACK_IMPORTED_MODULE_2__["addComponent"], (state, { comp }) => {
    const copy = Object.assign({}, state, { componentsById: Object.assign({}, state.componentsById) });
    copy.componentsById[comp.id] = comp;
    return copy;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_graf_actions__WEBPACK_IMPORTED_MODULE_2__["addVariables"], (state, { id, variables }) => {
    const copy = Object.assign({}, state, { componentsById: Object.assign({}, state.componentsById) });
    const compToUpdate = copy.componentsById[id];
    if (compToUpdate) {
        const ct = compToUpdate.type;
        // TODO mmh not sure about this
        if ("EXD" === ct) {
            copy.componentsById[id] = Object.assign({}, copy.componentsById[id], { loaded: true, sections: null, variables: Object.assign({}, compToUpdate.variables) });
        }
        else {
            copy.componentsById[id] = Object.assign({}, copy.componentsById[id], { loaded: true, data: null, variables: Object.assign({}, compToUpdate.variables) });
        }
        Object.keys(variables).forEach(k => (copy.componentsById[id].variables[k] = variables[k]));
    }
    return copy;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_graf_actions__WEBPACK_IMPORTED_MODULE_2__["removeComponent"], (state, { id }) => {
    const copy = Object.assign({}, state, { componentsById: Object.assign({}, state.componentsById) });
    delete copy.componentsById[id];
    return copy;
}));
function reducer(state, action) {
    return grafReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: getComponentById, getRootComponent, getMessages, reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentById", function() { return getComponentById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRootComponent", function() { return getRootComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessages", function() { return getMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _graf_graf_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graf/graf.reducers */ "./src/app/store/graf/graf.reducers.ts");
/* harmony import */ var _messages_messages_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/messages.reducers */ "./src/app/store/messages/messages.reducers.ts");





const selectComponents = (state) => state.graf.componentsById;
const selectRootComponentId = (state) => state.graf.rootComponentId;
const selectMessages = (state) => state.messages.messages;
const getComponentById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectComponents, (components, props) => components[props.id]);
const getRootComponent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectComponents, selectRootComponentId, (components, rootComponentId) => components[rootComponentId]);
const getMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMessages, messages => messages);
const reducers = {
    graf: _graf_graf_reducers__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    messages: _messages_messages_reducers__WEBPACK_IMPORTED_MODULE_4__["reducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
    ? []
    : [];


/***/ }),

/***/ "./src/app/store/messages/messages.reducers.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/messages/messages.reducers.ts ***!
  \*****************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _graf_graf_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graf/graf.actions */ "./src/app/store/graf/graf.actions.ts");



const initialState = {
    messages: []
};
const addMessage = (state, { message }) => (Object.assign({}, state, { messages: [...state.messages, message] }));
const messagesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_graf_graf_actions__WEBPACK_IMPORTED_MODULE_2__["loadRootFail"], addMessage), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_graf_graf_actions__WEBPACK_IMPORTED_MODULE_2__["loadComponentFail"], addMessage));
function reducer(state, action) {
    return messagesReducer(state, action);
}


/***/ }),

/***/ "./src/assets/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!***************************************************************************************************************************!*\
  !*** ./src/assets/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./kup-badge.entry.js": [
		"./src/assets/dist/esm/kup-badge.entry.js",
		9
	],
	"./kup-box.entry.js": [
		"./src/assets/dist/esm/kup-box.entry.js",
		2,
		"common",
		10
	],
	"./kup-btn_11.entry.js": [
		"./src/assets/dist/esm/kup-btn_11.entry.js",
		8
	],
	"./kup-chart.entry.js": [
		"./src/assets/dist/esm/kup-chart.entry.js",
		2,
		11
	],
	"./kup-chip.entry.js": [
		"./src/assets/dist/esm/kup-chip.entry.js",
		12
	],
	"./kup-dash.entry.js": [
		"./src/assets/dist/esm/kup-dash.entry.js",
		13
	],
	"./kup-data-table.entry.js": [
		"./src/assets/dist/esm/kup-data-table.entry.js",
		2,
		14
	],
	"./kup-graphic-cell.entry.js": [
		"./src/assets/dist/esm/kup-graphic-cell.entry.js",
		15
	],
	"./kup-image_2.entry.js": [
		"./src/assets/dist/esm/kup-image_2.entry.js",
		16
	],
	"./kup-paginator.entry.js": [
		"./src/assets/dist/esm/kup-paginator.entry.js",
		"common",
		17
	],
	"./kup-tooltip.entry.js": [
		"./src/assets/dist/esm/kup-tooltip.entry.js",
		18
	],
	"./legacy/kup-badge.entry.js": [
		"./src/assets/dist/esm/legacy/kup-badge.entry.js",
		0,
		"common"
	],
	"./legacy/kup-box.entry.js": [
		"./src/assets/dist/esm/legacy/kup-box.entry.js",
		0,
		1,
		3
	],
	"./legacy/kup-btn_11.entry.js": [
		"./src/assets/dist/esm/legacy/kup-btn_11.entry.js",
		0,
		4
	],
	"./legacy/kup-chart.entry.js": [
		"./src/assets/dist/esm/legacy/kup-chart.entry.js",
		0,
		1,
		5
	],
	"./legacy/kup-chip.entry.js": [
		"./src/assets/dist/esm/legacy/kup-chip.entry.js",
		0,
		"common"
	],
	"./legacy/kup-dash.entry.js": [
		"./src/assets/dist/esm/legacy/kup-dash.entry.js",
		0,
		"common"
	],
	"./legacy/kup-data-table.entry.js": [
		"./src/assets/dist/esm/legacy/kup-data-table.entry.js",
		0,
		1,
		6
	],
	"./legacy/kup-graphic-cell.entry.js": [
		"./src/assets/dist/esm/legacy/kup-graphic-cell.entry.js",
		0,
		7
	],
	"./legacy/kup-image_2.entry.js": [
		"./src/assets/dist/esm/legacy/kup-image_2.entry.js",
		0,
		"common"
	],
	"./legacy/kup-paginator.entry.js": [
		"./src/assets/dist/esm/legacy/kup-paginator.entry.js",
		0,
		"common",
		19
	],
	"./legacy/kup-tooltip.entry.js": [
		"./src/assets/dist/esm/legacy/kup-tooltip.entry.js",
		0,
		"common"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/assets/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/assets/dist/esm/chunk-1851c479.js":
/*!***********************************************!*\
  !*** ./src/assets/dist/esm/chunk-1851c479.js ***!
  \***********************************************/
/*! exports provided: H, a, b, c, g, h, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
const NAMESPACE = 'mycomponent';

const win = window;
const doc = document;
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
};
const supportsShadowDom =  !!doc.documentElement.attachShadow ;
const supportsConstructibleStylesheets =  /*@__PURE__*/ (() => {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})() ;

const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
const registerHost = (elm) => {
    {
        const hostRef = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef.$onReadyPromise$ = new Promise(r => hostRef.$onReadyResolve$ = r);
        return hostRefs.set(elm, hostRef);
    }
};
const isMemberInElement = (elm, memberName) => memberName in elm;

const consoleError = (e) => console.error(e);

const moduleCache = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = ( cmpMeta.$lazyBundleIds$);
    const module =  moduleCache.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    return __webpack_require__("./src/assets/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")(`./${bundleId}.entry.js`).then(importedModule => {
        {
            moduleCache.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};

const styles = new Map();
const cssVarShim =  /*@__PURE__*/ win.__stencil_cssshim ;

let queueCongestion = 0;
let queuePending = false;
const queueDomReads = [];
const queueDomWrites = [];
const queueDomWritesLow = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const consumeTimeout = (queue, timeout) => {
    let i = 0;
    let ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
const flush = () => {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    const timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (10 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push(...queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
const nextTick = /*@__PURE__*/ (cb) => Promise.resolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);

/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
/**
 * Namespaces
 */
const SVG_NS = 'http://www.w3.org/2000/svg';

const isDef = (v) => v != null;
const toLowerCase = (str) => str.toLowerCase();
const isComplexType = (o) => ['object', 'function'].includes(typeof o);

const getDynamicImportFunction = (namespace) => {
    return `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
};

const patchEsm = () => {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() | css-shim-3ea8955c-3ea8955c-js */ "css-shim-3ea8955c-3ea8955c-js").then(__webpack_require__.t.bind(null, /*! ./css-shim-3ea8955c-3ea8955c.js */ "./src/assets/dist/esm/css-shim-3ea8955c-3ea8955c.js", 7));
    }
    return Promise.resolve();
};
const patchBrowser = async () => {
    // @ts-ignore
    const importMeta = "";
    if (importMeta !== '') {
        return Promise.resolve(new URL('.', importMeta).href);
    }
    else {
        const scriptElm = Array.from(doc.querySelectorAll('script')).find(s => (s.src.includes(`/${NAMESPACE}.esm.js`) ||
            s.getAttribute('data-namespace') === NAMESPACE));
        const resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
        patchDynamicImport(resourcesUrl.href);
        if (!window.customElements) {
            // @ts-ignore
            await __webpack_require__.e(/*! import() | dom-860d8016-860d8016-js */ "dom-860d8016-860d8016-js").then(__webpack_require__.t.bind(null, /*! ./dom-860d8016-860d8016.js */ "./src/assets/dist/esm/dom-860d8016-860d8016.js", 7));
        }
        return resourcesUrl.href;
    }
};
const patchDynamicImport = (base) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const HYDRATED_CLASS = 'hydrated';
const XLINK_NS = 'http://www.w3.org/1999/xlink';

const rootAppliedStyles = new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId = getScopeId(cmpMeta.$tagName$);
    let style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        const newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if ( !styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [
                ...styleContainerNode.adoptedStyleSheets,
                style
            ];
        }
    }
    return scopeId;
};
const attachStyles = (elm, cmpMeta, mode) => {
    const styleId = addStyle(( supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta, mode, elm);
    if ( cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
const getScopeId = (tagName, mode) => 'sc-' + ( tagName);

/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let simple = false;
    let lastSimple = false;
    let key;
    let slotName;
    let vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if ( vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            slotName = vnodeData.name;
        }
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class = typeof classData !== 'object'
                    ? classData
                    : Object.keys(classData)
                        .filter(k => classData[k])
                        .join(' ');
            }
        }
    }
    if ( typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => {
    return node && node.$tag$ === Host;
};
const vdomFnUtils = {
    'forEach': (children, cb) => children.map(convertToPublic).forEach(cb),
    'map': (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
const convertToPublic = (node) => {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
const convertToPrivate = (node) => {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};

/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue === newValue) {
        return;
    }
    if ( memberName === 'class' && !isSvg) {
        // Class
        {
            const oldList = parseClassList(oldValue);
            const baseList = parseClassList(elm.className).filter(item => !oldList.includes(item));
            elm.className = baseList.concat(parseClassList(newValue).filter(item => !baseList.includes(item))).join(' ');
        }
    }
    else if ( memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (const prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if ( prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (const prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if ( prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if ( memberName === 'key') ;
    else if ( memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if ( memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        const isProp = isMemberInElement(elm, memberName);
        const isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        /**
         * Need to manually update attribute if:
         * - memberName is not an attribute
         * - if we are rendering the host element in order to reflect attribute
         * - if it's a SVG, since properties might not work in <svg>
         * - if the newValue is null/undefined or 'false'.
         */
        const isXlinkNs =  isSvg && (memberName !== (memberName = memberName.replace(/^xlink\:?/, ''))) ? true : false;
        if (newValue == null || newValue === false) {
            if (isXlinkNs) {
                elm.removeAttributeNS(XLINK_NS, toLowerCase(memberName));
            }
            else {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            if (isXlinkNs) {
                elm.setAttributeNS(XLINK_NS, toLowerCase(memberName), newValue);
            }
            else {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
const parseClassList = (value) => (!value) ? [] : value.split(' ');

const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};

let scopeId;
let contentRef;
let hostTagName;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    let newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if ( !useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            if (!newVNode.$children$) {
                // slot element does not have fallback content
                // create an html comment we'll use to always reference
                // where actual slot content should sit next to
                newVNode.$flags$ |= 1 /* isSlotReference */;
            }
            else {
                // slot element has fallback content
                // still create an element that "mocks" the slot element
                newVNode.$flags$ |= 2 /* isSlotFallback */;
            }
        }
    }
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if ( newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        newVNode.$elm$ =  doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = (( (isSvgMode || newVNode.$tag$ === 'svg'))
            ? doc.createElementNS(SVG_NS, newVNode.$tag$)
            : doc.createElement(( newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$));
        {
            isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if ( isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        if ( newVNode.$tag$ === 'svg') {
            // Only reset the SVG context when we're exiting SVG element
            isSvgMode = false;
        }
    }
    {
        newVNode.$elm$['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            newVNode.$elm$['s-sr'] = true;
            // remember the content reference comment
            newVNode.$elm$['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            newVNode.$elm$['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return newVNode.$elm$;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = (( parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if ( containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode,  referenceNode(before) );
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if ( (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if ( (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if ( idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if ( newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
const isSameVnode = (vnode1, vnode2) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if ( vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
const patch = (oldVNode, newVNode) => {
    const elm = newVNode.$elm$ = oldVNode.$elm$;
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    let defaultHolder;
    {
        // test if we're rendering an svg element, or still rendering nodes inside of one
        // only add this to the when the compiler sees we're using an svg somewhere
        isSvgMode = elm &&
            isDef(elm.parentNode) &&
            elm.ownerSVGElement !== undefined;
        isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
    }
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            if ( newVNode.$tag$ === 'slot') ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if ( isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if ( isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if ( isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ( (defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = newVNode.$text$;
    }
    else if ( oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
    if ( isSvgMode && newVNode.$tag$ === 'svg') {
        isSvgMode = false;
    }
};
const updateFallbackSlotVisibility = (elm, childNode, childNodes, i, ilen, j, slotNameAttr, nodeType) => {
    childNodes = elm.childNodes;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                        // this sibling node is from a different component
                        nodeType = childNodes[j].nodeType;
                        if (slotNameAttr !== '') {
                            // this is a named fallback slot node
                            if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNodes = elm.childNodes;
    let ilen = childNodes.length;
    let i = 0;
    let j = 0;
    let nodeType = 0;
    let childNode;
    let node;
    let hostContentNodes;
    let slotNameAttr;
    for (ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    nodeType = node.nodeType;
                    if (((nodeType === 3 /* TextNode */ || nodeType === 8 /* CommentNode */) && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === null && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        if (!relocateNodes.some(r => r.nodeToRelocate === node)) {
                            // made some changes to slots
                            // let's make sure we also double check
                            // fallbacks are correctly hidden or shown
                            checkSlotFallbackVisibility = true;
                            node['s-sn'] = slotNameAttr;
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                slotRefNode: childNode,
                                nodeToRelocate: node
                            });
                        }
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
const callNodeRefs = (vNode, isDestroy) => {
    if ( vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(vChild => {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
const renderVdom = (hostElm, hostRef, cmpMeta, renderFnResults) => {
    hostTagName = toLowerCase(hostElm.tagName);
    const oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    const rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    if ( cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.forEach(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = ( hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadowDom && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotRelocate = checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            for (let i = 0; i < relocateNodes.length; i++) {
                const relocateNode = relocateNodes[i];
                if (!relocateNode.nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    const orgLocationNode =  doc.createTextNode('');
                    orgLocationNode['s-nr'] = relocateNode.nodeToRelocate;
                    relocateNode.nodeToRelocate.parentNode.insertBefore((relocateNode.nodeToRelocate['s-ol'] = orgLocationNode), relocateNode.nodeToRelocate);
                }
            }
            // while we're moving nodes around existing nodes, temporarily disable
            // the disconnectCallback from working
            plt.$flags$ |= 1 /* isTmpDisconnected */;
            for (let i = 0; i < relocateNodes.length; i++) {
                const relocateNode = relocateNodes[i];
                // by default we're just going to insert it directly
                // after the slot reference node
                const parentNodeRef = relocateNode.slotRefNode.parentNode;
                let insertBeforeNode = relocateNode.slotRefNode.nextSibling;
                let orgLocationNode = relocateNode.nodeToRelocate['s-ol'];
                while (orgLocationNode = orgLocationNode.previousSibling) {
                    let refNode = orgLocationNode['s-nr'];
                    if (refNode &&
                        refNode['s-sn'] === relocateNode.nodeToRelocate['s-sn'] &&
                        parentNodeRef === refNode.parentNode) {
                        refNode = refNode.nextSibling;
                        if (!refNode || !refNode['s-nr']) {
                            insertBeforeNode = refNode;
                            break;
                        }
                    }
                }
                if ((!insertBeforeNode && parentNodeRef !== relocateNode.nodeToRelocate.parentNode) ||
                    (relocateNode.nodeToRelocate.nextSibling !== insertBeforeNode)) {
                    // we've checked that it's worth while to relocate
                    // since that the node to relocate
                    // has a different next sibling or parent relocated
                    if (relocateNode.nodeToRelocate !== insertBeforeNode) {
                        // add it back to the dom but in its new home
                        parentNodeRef.insertBefore(relocateNode.nodeToRelocate, insertBeforeNode);
                    }
                }
            }
            // done moving nodes around
            // allow the disconnect callback to work again
            plt.$flags$ &= ~1 /* isTmpDisconnected */;
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // always reset
        relocateNodes.length = 0;
    }
};

const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const scheduleUpdate = (elm, hostRef, cmpMeta, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    const instance =  hostRef.$lazyInstance$ ;
    let promise;
    if (isInitialLoad) {
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    else {
        {
            promise = safeCall(instance, 'componentWillUpdate');
        }
    }
    {
        promise = then(promise, () => safeCall(instance, 'componentWillRender'));
    }
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const update = () => updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad);
    return then(promise,  () => writeTask(update)
        );
};
const updateComponent = (elm, hostRef, cmpMeta, instance, isInitialLoad) => {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if ( isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta,  instance.render() );
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if ( elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(cb => cb());
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
const postUpdateComponent = (elm, hostRef, ancestorsActivelyLoadingChildren) => {
    if ( !elm['s-al']) {
        const instance =  hostRef.$lazyInstance$ ;
        const ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 64 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                safeCall(instance, 'componentDidLoad');
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if ( !ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(() => plt.$flags$ |= 2 /* appLoaded */, 999);
                }
            }
        }
        else {
            {
                // we've already loaded this component
                // fire off the user's componentDidUpdate method (if one was provided)
                // componentDidUpdate runs AFTER render() has been called
                // and all child components have finished updating
                safeCall(instance, 'componentDidUpdate');
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if ( ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
const forceUpdate = (elm, cmpMeta) => {
    {
        const hostRef = getHostRef(elm);
        if (hostRef.$flags$ & 2 /* hasRendered */) {
            scheduleUpdate(elm, hostRef, cmpMeta, false);
        }
    }
};

const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        const instance =  hostRef.$lazyInstance$ ;
        {
            safeCall(instance, 'componentDidUnload');
        }
    }
};

const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if ( propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if ( propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if ( propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};

const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm =  hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && ( !(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if ( hostRef.$lazyInstance$) {
            // get an array of method names of watch functions to call
            if ( cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(watchMethodName => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            ( hostRef.$lazyInstance$ )[watchMethodName].call(( hostRef.$lazyInstance$ ), newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ( (flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};

const proxyComponent = (Cstr, cmpMeta, flags) => {
    if ( cmpMeta.$members$) {
        if ( Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.forEach(([memberName, [memberFlags]]) => {
            if ( ((memberFlags & 31 /* Prop */) ||
                (( flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if ( (flags & 1 /* isElementConstructor */) && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onReadyPromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    }
                });
            }
        });
        if ( ( flags & 1 /* isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    this[propName] = newValue === null && typeof this[propName] === 'boolean'
                        ? false
                        : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if ( m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};

const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ( (hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        // we haven't initialized this element yet
        hostRef.$flags$ |= 32 /* hasInitializedComponent */;
        {
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                Cstr = await Cstr;
            }
            if ( !Cstr.isProxied) {
                // we'eve never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                Cstr.isProxied = true;
            }
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* isWatchReady */;
            }
        }
        if ( !Cstr.isStyleRegistered && Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            let scopeId = getScopeId(cmpMeta.$tagName$);
            if ( cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
                style = await __webpack_require__.e(/*! import() | shadow-css-984bac74-549b16dd-js */ "shadow-css-984bac74-549b16dd-js").then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "./src/assets/dist/esm/shadow-css-984bac74-549b16dd.js")).then(m => m.scopeCss(style, scopeId, false));
            }
            registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
            Cstr.isStyleRegistered = true;
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(elm, hostRef, cmpMeta, true);
    if ( ancestorComponent && ancestorComponent['s-lr'] === false && ancestorComponent['s-rc']) {
        // this is the intial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const connectedCallback = (elm, cmpMeta) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        const hostRef = getHostRef(elm);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            let hostId;
            if ( !hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if (
                    ( cmpMeta.$flags$ & 4 /* hasSlotRelocation */) ||
                    ( cmpMeta.$flags$ & 8 /* needsShadowDomShim */)) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ( (ancestorComponent['s-init'] && ancestorComponent['s-lr'] === false)) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if ( cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
            }
        }
    }
};
const setContentReference = (elm, contentRefElm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    let crName;
    {
        crName = '';
    }
    contentRefElm = elm['s-cr'] = doc.createComment(crName);
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};

const bootstrapLazy = (lazyBundles, options = {}) => {
    const cmpTags = [];
    const exclude = options.exclude || [];
    const head = doc.head;
    const customElements = win.customElements;
    const y = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(lazyBundle => lazyBundle[1].forEach(compactMeta => {
        const cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$attrsToReflect$ = [];
        }
        {
            cmpMeta.$watchers$ = {};
        }
        if ( !supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        const tagName = cmpMeta.$tagName$;
        const HostElement = class extends HTMLElement {
            // StencilLazyHost
            constructor(self) {
                // @ts-ignore
                super(self);
                self = this;
                {
                    this['s-lr'] = false;
                    this['s-rc'] = [];
                }
                registerHost(self);
                if ( cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if ( !('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
            }
            connectedCallback() {
                plt.jmp(() => connectedCallback(this, cmpMeta));
            }
            disconnectedCallback() {
                plt.jmp(() => disconnectedCallback(this));
            }
            's-init'() {
                const hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            }
            's-hmr'(hmrVersionId) {
            }
            forceUpdate() {
                forceUpdate(this, cmpMeta);
            }
            componentOnReady() {
                return getHostRef(this).$onReadyPromise$;
            }
        };
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }));
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};

const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => elm.dispatchEvent(new ( CustomEvent)(name, {
            bubbles: !!(flags & 4 /* Bubbles */),
            composed: !!(flags & 2 /* Composed */),
            cancelable: !!(flags & 1 /* Cancellable */),
            detail
        }))
    };
};

const getElement = (ref) =>  getHostRef(ref).$hostElement$ ;




/***/ }),

/***/ "./src/assets/dist/esm/loader.mjs":
/*!****************************************!*\
  !*** ./src/assets/dist/esm/loader.mjs ***!
  \****************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-1851c479.js */ "./src/assets/dist/esm/chunk-1851c479.js");


const defineCustomElements = (win, options) => {
  return Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["a"])().then(() => {
    Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["kup-chart",[[1,"kup-chart",{"data":[16],"types":[16],"axis":[1],"series":[16],"asp":[1],"colors":[16],"width":[2],"height":[2],"legend":[4],"stacked":[4],"graphTitle":[1,"graph-title"],"graphTitleColor":[1,"graph-title-color"],"graphTitleSize":[2,"graph-title-size"],"showMarks":[4,"show-marks"],"version":[1]}]]],["kup-chip",[[1,"kup-chip",{"closable":[4],"disabled":[4]}]]],["kup-dash",[[1,"kup-dash",{"layout":[1],"fontsize":[1]}]]],["kup-tooltip",[[1,"kup-tooltip",{"layout":[1],"detailData":[16],"visible":[32],"detailVisible":[32]}]]],["kup-graphic-cell",[[1,"kup-graphic-cell",{"value":[1],"height":[2],"width":[2]}]]],["kup-paginator",[[1,"kup-paginator",{"max":[2],"perPage":[2,"per-page"],"selectedPerPage":[2,"selected-per-page"],"currentPage":[2,"current-page"],"mode":[513]}]]],["kup-data-table",[[1,"kup-data-table",{"columnsWidth":[16],"data":[16],"enableSortableColumns":[4,"enable-sortable-columns"],"expandGroups":[4,"expand-groups"],"filters":[1040],"globalFilter":[4,"global-filter"],"groups":[1040],"headerIsPersistent":[516,"header-is-persistent"],"multiSelection":[4,"multi-selection"],"loadMoreLimit":[2,"load-more-limit"],"loadMoreStep":[2,"load-more-step"],"loadMoreMode":[1,"load-more-mode"],"paginatorPos":[1,"paginator-pos"],"rowsPerPage":[2,"rows-per-page"],"rowActions":[16],"selectRow":[2,"select-row"],"showHeader":[516,"show-header"],"showFilters":[4,"show-filters"],"showGrid":[1,"show-grid"],"showLoadMore":[516,"show-load-more"],"sortEnabled":[4,"sort-enabled"],"sort":[1040],"sortableColumnsMutateData":[4,"sortable-columns-mutate-data"],"totals":[16],"globalFilterValue":[32],"currentPage":[32],"currentRowsPerPage":[32],"selectedRows":[32],"groupState":[32],"openedMenu":[32],"density":[32],"defaultSortingFunction":[64]}]]],["kup-badge",[[1,"kup-badge",{"text":[1],"position":[1],"icon":[1]}]]],["kup-image_2",[[1,"kup-image",{"src":[1],"alt":[1],"width":[2],"height":[2],"badges":[16]}],[1,"kup-progress-bar",{"value":[2],"labelText":[1,"label-text"],"hideLabel":[4,"hide-label"]}]]],["kup-btn_11",[[1,"kup-btn",{"buttons":[16],"config":[16],"selectedBtnIndex":[32]}],[1,"kup-fld",{"config":[1],"data":[8],"type":[32],"showSubmit":[32],"submitLabel":[32],"submitPos":[32],"label":[32],"labelPos":[32],"propagate":[32],"extensions":[32],"getCurrentValue":[64]}],[1,"kup-html",{"label":[1],"isButton":[516,"is-button"],"src":[1]}],[1,"kup-gauge",{"arcThickness":[2,"arc-thickness"],"colors":[16],"firstThreshold":[2,"first-threshold"],"labelDistance":[2,"label-distance"],"maxValue":[2,"max-value"],"measurementUnit":[1,"measurement-unit"],"minValue":[2,"min-value"],"reverseColors":[4,"reverse-colors"],"secondThreshold":[2,"second-threshold"],"showLabels":[4,"show-labels"],"showMaxmin":[4,"show-maxmin"],"showValue":[4,"show-value"],"size":[2],"value":[2],"valueSize":[2,"value-size"],"needleCircle":[4,"needle-circle"],"onlyValue":[4,"only-value"],"widthComponent":[1,"width-component"]}],[1,"kup-radio",{"label":[1],"direction":[1],"displayedField":[1,"displayed-field"],"initialValue":[16],"items":[16],"radioName":[1,"radio-name"],"valueField":[1,"value-field"],"selectedRadio":[32]}],[1,"kup-checkbox",{"checked":[1540],"disabled":[516],"label":[1],"setTabIndex":[2,"set-tab-index"]}],[1,"kup-combo",{"displayedField":[1,"displayed-field"],"initialValue":[16],"isClearable":[4,"is-clearable"],"isFilterable":[516,"is-filterable"],"items":[16],"label":[1],"obj":[16],"valueField":[1,"value-field"],"usePortal":[4,"use-portal"],"value":[32],"filter":[32],"isOpen":[32],"closeCombo":[64],"openCombo":[64]}],[1,"kup-portal",{"isVisible":[4,"is-visible"],"mirroredCssVars":[16],"nodes":[16],"portalParentRef":[16],"refOffset":[16],"portalRootNode":[16],"styleNode":[16],"getPortalInstance":[64]}],[1,"kup-text-input",{"initialValue":[1,"initial-value"],"inputType":[1,"input-type"],"isClearable":[4,"is-clearable"],"label":[1],"maxLength":[2,"max-length"],"debounce":[2],"obj":[16],"placeholder":[1],"value":[32],"triggerFocus":[64]}],[1,"kup-button",{"flat":[4],"label":[1],"buttonClass":[1,"button-class"],"iconClass":[1,"icon-class"],"fillspace":[4],"showtext":[4],"showicon":[4],"rounded":[4],"textmode":[1],"transparent":[4],"align":[1],"iconUrl":[1,"icon-url"]}],[1,"kup-portal-instance",{"additionalAdoptedStyleSheets":[16],"isVisible":[516,"is-visible"],"styleNode":[16],"vNodes":[16]}]]],["kup-box",[[1,"kup-box",{"data":[16],"layout":[16],"columns":[2],"sortEnabled":[4,"sort-enabled"],"sortBy":[1025,"sort-by"],"filterEnabled":[4,"filter-enabled"],"multiSelection":[4,"multi-selection"],"selectBox":[2,"select-box"],"showSelection":[4,"show-selection"],"enableRowActions":[4,"enable-row-actions"],"pagination":[516],"pageSize":[514,"page-size"],"globalFilterValue":[32],"collapsedSection":[32],"selectedRows":[32],"rowActionMenuOpened":[32],"currentPage":[32],"loadRowActions":[64]}]]]], options);
  });
};




/***/ }),

/***/ "./src/assets/dist/esm/polyfills/index.js":
/*!************************************************!*\
  !*** ./src/assets/dist/esm/polyfills/index.js ***!
  \************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() | dom-js */ "dom-js").then(__webpack_require__.t.bind(null, /*! ./dom.js */ "./src/assets/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() | core-js-js */ "core-js-js").then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "./src/assets/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() | css-shim-js */ "css-shim-js").then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "./src/assets/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}


/***/ }),

/***/ "./src/assets/dist/loader/index.es2017.mjs":
/*!*************************************************!*\
  !*** ./src/assets/dist/loader/index.es2017.mjs ***!
  \*************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/polyfills/index.js */ "./src/assets/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _esm_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm/loader.mjs */ "./src/assets/dist/esm/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });






/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    configUrl: "http://localhost:3000",
    grafanaUrl: "http://iot.smeup.com/influxdb/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _assets_dist_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/dist/loader */ "./src/assets/dist/loader/index.es2017.mjs");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));
Object(_assets_dist_loader__WEBPACK_IMPORTED_MODULE_5__["applyPolyfills"])().then(() => {
    Object(_assets_dist_loader__WEBPACK_IMPORTED_MODULE_5__["defineCustomElements"])(window);
});


/***/ }),

/***/ "./src/mocks/dynamicChart.ts":
/*!***********************************!*\
  !*** ./src/mocks/dynamicChart.ts ***!
  \***********************************/
/*! exports provided: getChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartData", function() { return getChartData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function randomNumberFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const data = {
    columns: [
        {
            name: "Col1",
            title: "Person",
            size: "10"
        },
        {
            name: "Col2",
            title: "Value1",
            size: "10"
        },
        {
            name: "Col3",
            title: "Value2",
            size: "10"
        }
    ],
    rows: []
};
const getChartData = () => {
    const rows = data.rows;
    if (rows.length <= 10) {
        while (rows.length <= 10) {
            // creating a new row
            const col2Value = randomNumberFromInterval(50, 70);
            const col3Value = randomNumberFromInterval(50, 70);
            const newRow = {
                cells: {
                    Col1: {
                        obj: {
                            t: "NR",
                            p: "",
                            k: rows.length
                        },
                        value: rows.length
                    },
                    Col2: {
                        obj: {
                            t: "NR",
                            p: "",
                            k: col2Value
                        },
                        value: col2Value
                    },
                    Col3: {
                        obj: {
                            t: "NR",
                            p: "",
                            k: col3Value
                        },
                        value: col3Value
                    }
                }
            };
            rows.push(newRow);
        }
    }
    else {
        rows.splice(0, 1);
        const col2Value = randomNumberFromInterval(50, 70);
        const col3Value = randomNumberFromInterval(50, 70);
        const newRow = {
            cells: {
                Col1: {
                    obj: {
                        t: "NR",
                        p: "",
                        k: rows[rows.length - 1].cells.Col1.value + 1
                    },
                    value: rows[rows.length - 1].cells.Col1.value + 1
                },
                Col2: {
                    obj: {
                        t: "NR",
                        p: "",
                        k: col2Value
                    },
                    value: col2Value
                },
                Col3: {
                    obj: {
                        t: "NR",
                        p: "",
                        k: col3Value
                    },
                    value: col3Value
                }
            }
        };
        rows.push(newRow);
    }
    return { columns: [...data.columns], rows: [...rows] };
};


/***/ }),

/***/ "./src/transformers/grafanaTransformer.ts":
/*!************************************************!*\
  !*** ./src/transformers/grafanaTransformer.ts ***!
  \************************************************/
/*! exports provided: transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function transform(grafanaData) {
    const data = {
        columns: [],
        rows: []
    };
    if (!grafanaData) {
        return data;
    }
    const firstResult = grafanaData.results[0];
    const firstSerie = firstResult.series[0];
    data.columns = convertColumns(firstSerie.columns);
    data.rows = firstSerie.values.map(row => convertRow(firstSerie.columns, row));
    return data;
}
function convertColumns(grafanaColumns) {
    return grafanaColumns.map(name => ({
        name,
        title: name
    }));
}
function convertRow(grafanaColumns, grafanaRow) {
    const r = {
        cells: {}
    };
    for (let i = 0; i < grafanaColumns.length; i++) {
        const column = grafanaColumns[i];
        const cell = {
            obj: {
                t: "",
                p: "",
                k: grafanaRow[i]
            },
            value: grafanaRow[i]
        };
        r.cells[column] = cell;
    }
    return r;
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/francesco/Work/javascript/angular/smeup-graf/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map