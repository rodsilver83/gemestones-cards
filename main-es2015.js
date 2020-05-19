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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/action-card/action-card.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/action-card/action-card.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-card [value]=\"config?.value\" [color]=\"config?.bgColor\">\n\n\t<p class=\"action-card__main\">ACCION</p>\n\t<div class=\"action-card__action\">\n\t\t<i *ngIf=\"config?.icon\"\n\t\t\tclass=\"action-card__icon fa {{config?.icon}}\"\n\t\t\t[style.color]=\"config?.iconColor\"></i>\n\t\t<div class=\"action-card__title\">{{config?.title}}</div>\n\t</div>\n\t<p class=\"action-card__desc\">{{config?.desc}}</p>\n\n</app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<app-deck></app-deck>\n<!-- <router-outlet></router-outlet> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"card\">\n\t<div class=\"card__container\"\n\t\t[style.background-color]=\"color\">\n\t\t<div class=\"card__value\">\n\t\t\t<i class=\"fas fa-dollar-sign\"></i>{{value}}\n\t\t</div>\n\n\t\t<ng-content></ng-content>\n\n\t\t<div class=\"card__value\">\n\t\t\t<i class=\"fas fa-dollar-sign\"></i>{{value}}\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deck/deck.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deck/deck.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"deck\">\n\t<ng-container *ngFor=\"let card of deckCards\" [ngSwitch]=\"card.type\">\n\t\t<app-action-card *ngSwitchCase=\"'ACTION'\" [config]=\"card\"></app-action-card>\n\t\t<app-property-card *ngSwitchCase=\"'PROPERTY'\" [config]=\"card\"></app-property-card>\n\t</ng-container>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/money-card/money-card.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/money-card/money-card.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>money-card works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/property-card/property-card.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/property-card/property-card.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-card [value]=\"config?.value\" [color]=\"config?.bgColor\">\n\n\t<div class=\"property-card__main\"\n\t\t[style.background-color]=\"config?.color\"\n\t\t[style.color]=\"config?.textColor\">\n\t\t{{config.name}}\n\t</div>\n\t<div class=\"property-card__rent\">\n\t\t<div class=\"property-card__rent-row\">\n\t\t\t<span class=\"property-card__rent-no\">(No. de propiedades en el grupo)</span>\n\t\t\t<span class=\"property-card__rent-title\">RENT</span>\n\t\t</div>\n\n\t\t<div class=\"property-card__rent-row\" *ngFor=\"let rent of config?.rents\">\n\t\t\t<span class=\"property-card__card\">{{rent.houses}}\n\t\t\t\t<i class=\"fas fa-home\"></i>\n\t\t\t\t<!-- <i class=\"fas fa-home\" *ngIf=\"rent.houses> 1\"></i>\n\t\t\t\t<i class=\"fas fa-home\" *ngIf=\"rent.houses> 2\"></i>\n\t\t\t\t<i class=\"fas fa-home\" *ngIf=\"rent.houses> 3\"></i> -->\n\t\t\t</span>\n\t\t\t<span><i class=\"fa fa-dollar-sign\"\n\t\t\t\t\t[style.color]=\"config?.iconColor\"></i>{{rent.rent}}\n\t\t\t</span>\n\t\t</div>\n\n\t\t<div class=\"property-card__title\">{{config?.title}}</div>\n\t\t<p class=\"property-card__desc\">{{config?.desc}}</p>\n\t</div>\n</app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rent-card/rent-card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rent-card/rent-card.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>rent-card works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wild-card/wild-card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wild-card/wild-card.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>wild-card works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/action-card/action-card.component.scss":
/*!********************************************************!*\
  !*** ./src/app/action-card/action-card.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".action-card__action {\n  border: 5px solid #333;\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  background-color: #eee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.action-card__main {\n  font-weight: bold;\n  margin: 5px;\n}\n\n.action-card__title {\n  width: 85%;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n}\n\n.action-card__icon {\n  margin-bottom: 10px;\n  font-size: 2em;\n}\n\n.action-card__desc {\n  font-size: 0.7rem;\n  padding-right: 25px;\n  margin: 5px 0 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2RyaWdvL0NvZGUvbW9ub3BvbHktY2FyZHMvc3JjL2FwcC9hY3Rpb24tY2FyZC9hY3Rpb24tY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWN0aW9uLWNhcmQvYWN0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0VBQ0EsV0FBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9hY3Rpb24tY2FyZC9hY3Rpb24tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tY2FyZF9fYWN0aW9uIHtcblx0Ym9yZGVyOiA1cHggc29saWQgIzMzMztcblx0d2lkdGg6IDEzMHB4O1xuXHRoZWlnaHQ6IDEzMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWN0aW9uLWNhcmRfX21haW4ge1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luOiA1cHg7XG59XG5cbi5hY3Rpb24tY2FyZF9fdGl0bGUge1xuXHR3aWR0aDogODUlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmFjdGlvbi1jYXJkX19pY29uIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0Zm9udC1zaXplOiAyZW07XG59XG5cbi5hY3Rpb24tY2FyZF9fZGVzYyB7XG5cdGZvbnQtc2l6ZTogMC43cmVtO1xuXHRwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuXHRtYXJnaW46IDVweCAwIDEwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi5hY3Rpb24tY2FyZF9fYWN0aW9uIHtcbiAgYm9yZGVyOiA1cHggc29saWQgIzMzMztcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWN0aW9uLWNhcmRfX21haW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5hY3Rpb24tY2FyZF9fdGl0bGUge1xuICB3aWR0aDogODUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmFjdGlvbi1jYXJkX19pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5hY3Rpb24tY2FyZF9fZGVzYyB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDVweCAwIDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/action-card/action-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/action-card/action-card.component.ts ***!
  \******************************************************/
/*! exports provided: ActionCard, ActionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCard", function() { return ActionCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCardComponent", function() { return ActionCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");



class ActionCard extends _card_card_component__WEBPACK_IMPORTED_MODULE_2__["Card"] {
    constructor(...args) {
        super(...args);
        this.title = '';
        this.icon = '';
        this.iconColor = '';
        this.desc = '';
        Object.assign(this, ...args);
    }
    get type() {
        return 'ACTION';
    }
}
let ActionCardComponent = class ActionCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ActionCardComponent.prototype, "config", void 0);
ActionCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-action-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./action-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/action-card/action-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./action-card.component.scss */ "./src/app/action-card/action-card.component.scss")).default]
    })
], ActionCardComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2RyaWdvL0NvZGUvbW9ub3BvbHktY2FyZHMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0ZGlzcGxheTogZmxleDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'monopoly-cards';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _action_card_action_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-card/action-card.component */ "./src/app/action-card/action-card.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _deck_deck_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deck/deck.component */ "./src/app/deck/deck.component.ts");
/* harmony import */ var _property_card_property_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./property-card/property-card.component */ "./src/app/property-card/property-card.component.ts");
/* harmony import */ var _wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wild-card/wild-card.component */ "./src/app/wild-card/wild-card.component.ts");
/* harmony import */ var _rent_card_rent_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rent-card/rent-card.component */ "./src/app/rent-card/rent-card.component.ts");
/* harmony import */ var _money_card_money_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./money-card/money-card.component */ "./src/app/money-card/money-card.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _action_card_action_card_component__WEBPACK_IMPORTED_MODULE_5__["ActionCardComponent"],
            _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
            _deck_deck_component__WEBPACK_IMPORTED_MODULE_7__["DeckComponent"],
            _property_card_property_card_component__WEBPACK_IMPORTED_MODULE_8__["PropertyCardComponent"],
            _wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_9__["WildCardComponent"],
            _rent_card_rent_card_component__WEBPACK_IMPORTED_MODULE_10__["RentCardComponent"],
            _money_card_money_card_component__WEBPACK_IMPORTED_MODULE_11__["MoneyCardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  background-color: #fafafa;\n  border: 1px solid #333;\n  border-radius: 30px;\n  width: 200px;\n  height: 300px;\n  padding: 13px;\n  margin: 5px;\n}\n\n.card__container {\n  background-color: inherit;\n  border: 2px solid #333;\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  padding: 10px;\n}\n\n.card__container::before {\n  content: \"\";\n  width: calc(100% - 10px);\n  height: calc(100% - 10px);\n  border-radius: 10px;\n  position: absolute;\n  top: 3px;\n  border: 2px dotted #333;\n  pointer-events: none;\n}\n\n.card__value {\n  border: 2px solid #333;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 37px;\n  font-size: 1.1rem;\n  font-weight: bold;\n  align-self: flex-end;\n  background-color: inherit;\n  position: absolute;\n}\n\n.card__value::before {\n  content: \"\";\n  position: absolute;\n  border: 1px dotted #333;\n  width: 44px;\n  height: 44px;\n  left: -5px;\n  top: -5px;\n  border-radius: 50%;\n}\n\n.card__value:first-child {\n  align-self: flex-start;\n  top: -5px;\n  left: -5px;\n}\n\n.card__value:last-child {\n  bottom: -5px;\n  right: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2RyaWdvL0NvZGUvbW9ub3BvbHktY2FyZHMvc3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUNDLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NEOztBRENDO0VBQ0MsV0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURHQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDREQ7O0FER0M7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElDO0VBQ0Msc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBREtDO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcblx0Ym9yZGVyOiAxcHggc29saWQgIzMzMztcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcblx0d2lkdGg6IDIwMHB4O1xuXHRoZWlnaHQ6IDMwMHB4O1xuXHRwYWRkaW5nOiAxM3B4O1xuXHRtYXJnaW46IDVweDtcbn1cblxuLmNhcmRfX2NvbnRhaW5lciB7XG5cdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cdGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cblx0Jjo6YmVmb3JlIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwcHgpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogM3B4O1xuXHRcdGJvcmRlcjogMnB4IGRvdHRlZCAjMzMzO1xuXHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHR9XG59XG5cbi5jYXJkX192YWx1ZSB7XG5cdGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogNDBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRsaW5lLWhlaWdodDogMzdweDtcblx0Ly8gdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuXHRmb250LXNpemU6IDEuMXJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cblx0Jjo6YmVmb3JlIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3JkZXI6IDFweCBkb3R0ZWQgIzMzMztcblx0XHR3aWR0aDogNDRweDtcblx0XHRoZWlnaHQ6IDQ0cHg7XG5cdFx0bGVmdDogLTVweDtcblx0XHR0b3A6IC01cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR9XG5cblx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcblx0XHR0b3A6IC01cHg7XG5cdFx0bGVmdDogLTVweDtcblx0fVxuXG5cdCY6bGFzdC1jaGlsZCB7XG5cdFx0Ym90dG9tOiAtNXB4O1xuXHRcdHJpZ2h0OiAtNXB4O1xuXHR9XG59XG4iLCIuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMTNweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5jYXJkX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNhcmRfX2NvbnRhaW5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBib3JkZXI6IDJweCBkb3R0ZWQgIzMzMztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jYXJkX192YWx1ZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzdweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNhcmRfX3ZhbHVlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IGRvdHRlZCAjMzMzO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBsZWZ0OiAtNXB4O1xuICB0b3A6IC01cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jYXJkX192YWx1ZTpmaXJzdC1jaGlsZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHRvcDogLTVweDtcbiAgbGVmdDogLTVweDtcbn1cbi5jYXJkX192YWx1ZTpsYXN0LWNoaWxkIHtcbiAgYm90dG9tOiAtNXB4O1xuICByaWdodDogLTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: Card, CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class Card {
    constructor(...args) {
        this.value = 0;
        this.bgColor = '';
        Object.assign(this, ...args);
    }
}
let CardComponent = class CardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "color", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/deck/deck.component.scss":
/*!******************************************!*\
  !*** ./src/app/deck/deck.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".deck {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2RyaWdvL0NvZGUvbW9ub3BvbHktY2FyZHMvc3JjL2FwcC9kZWNrL2RlY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlY2svZGVjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvZGVjay9kZWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlY2sge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xufVxuIiwiLmRlY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/deck/deck.component.ts":
/*!****************************************!*\
  !*** ./src/app/deck/deck.component.ts ***!
  \****************************************/
/*! exports provided: DeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckComponent", function() { return DeckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _action_card_action_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-card/action-card.component */ "./src/app/action-card/action-card.component.ts");
/* harmony import */ var _deck_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deck.json */ "./src/app/deck/deck.json");
var _deck_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./deck.json */ "./src/app/deck/deck.json", 1);
/* harmony import */ var _property_card_property_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../property-card/property-card.component */ "./src/app/property-card/property-card.component.ts");





let DeckComponent = class DeckComponent {
    constructor() {
        this.deckCards = Array();
    }
    ngOnInit() {
        this.initActionCards();
    }
    initActionCards() {
        _deck_json__WEBPACK_IMPORTED_MODULE_3__["Deck"].forEach((item) => {
            for (let i = 0; i < item.quantity; i++) {
                switch (item.type) {
                    case 'ACTION':
                        this.deckCards.push(new _action_card_action_card_component__WEBPACK_IMPORTED_MODULE_2__["ActionCard"](item.config));
                        break;
                    case 'PROPERTY':
                        this.deckCards.push(new _property_card_property_card_component__WEBPACK_IMPORTED_MODULE_4__["PropertyCard"](item.config));
                        break;
                }
            }
        });
    }
};
DeckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deck',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deck.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deck/deck.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deck.component.scss */ "./src/app/deck/deck.component.scss")).default]
    })
], DeckComponent);



/***/ }),

/***/ "./src/app/deck/deck.json":
/*!********************************!*\
  !*** ./src/app/deck/deck.json ***!
  \********************************/
/*! exports provided: Deck, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Deck\":[{\"type\":\"PROPERTY\",\"quantity\":1,\"config\":{\"color\":\"#000000\",\"textColor\":\"#FFFFFF\",\"bgColor\":\"#FFFFFF\",\"value\":2,\"icon\":\"fa-tint\",\"iconColor\":\"#000000\",\"name\":\"Short Line\",\"rents\":[{\"houses\":1,\"rent\":1},{\"houses\":2,\"rent\":2},{\"houses\":3,\"rent\":3},{\"houses\":4,\"rent\":4}]}},{\"type\":\"ACTION\",\"quantity\":1,\"config\":{\"bgColor\":\"#C3CFCC\",\"title\":\"Cobra Deudas\",\"value\":3,\"desc\":\"Obliga a un jugador a pagarte $5. Juega al centro.\"}},{\"type\":\"ACTION\",\"quantity\":1,\"config\":{\"bgColor\":\"#7b7ab2\",\"title\":\"Roba Negocios\",\"value\":5,\"desc\":\"Robe un set completo de propiedades de cualquier jugador (incluyendo edificios). Juega al centro.\"}},{\"type\":\"ACTION\",\"quantity\":1,\"config\":{\"bgColor\":\"#C2D8EC\",\"title\":\"Hotel\",\"icon\":\"fa-hotel\",\"iconColor\":\"#D71921\",\"value\":4,\"desc\":\"Para jugarse con una tarjeta de renta. Juega al centro.\"}}]}");

/***/ }),

/***/ "./src/app/money-card/money-card.component.scss":
/*!******************************************************!*\
  !*** ./src/app/money-card/money-card.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbmV5LWNhcmQvbW9uZXktY2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/money-card/money-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/money-card/money-card.component.ts ***!
  \****************************************************/
/*! exports provided: MoneyCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyCardComponent", function() { return MoneyCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MoneyCardComponent = class MoneyCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
MoneyCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-money-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./money-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/money-card/money-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./money-card.component.scss */ "./src/app/money-card/money-card.component.scss")).default]
    })
], MoneyCardComponent);



/***/ }),

/***/ "./src/app/property-card/property-card.component.scss":
/*!************************************************************!*\
  !*** ./src/app/property-card/property-card.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".property-card__main {\n  border: 1px solid #333;\n  font-weight: bold;\n  width: 100%;\n  text-align: center;\n  height: 40px;\n  line-height: 40px;\n}\n\n.property-card__icon {\n  align-self: flex-end;\n  padding: 8px;\n}\n\n.property-card__rent {\n  flex-grow: 1;\n  width: 100%;\n  padding-top: 10px;\n}\n\n.property-card__rent-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px;\n}\n\n.property-card__rent-row:first-child {\n  padding: 5px 0;\n}\n\n.property-card__rent-no {\n  font-size: 0.1rem;\n  text-align: center;\n}\n\n.property-card__card {\n  border-radius: 5px;\n  padding: 5px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2RyaWdvL0NvZGUvbW9ub3BvbHktY2FyZHMvc3JjL2FwcC9wcm9wZXJ0eS1jYXJkL3Byb3BlcnR5LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb3BlcnR5LWNhcmQvcHJvcGVydHktY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTtFQUNDLG9CQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxjQUFBO0FDQ0Y7O0FER0E7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0FDQUQ7O0FER0E7RUFFQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0REIiwiZmlsZSI6InNyYy9hcHAvcHJvcGVydHktY2FyZC9wcm9wZXJ0eS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWNhcmRfX21haW4ge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0d2lkdGg6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0aGVpZ2h0OiA0MHB4O1xuXHRsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLnByb3BlcnR5LWNhcmRfX2ljb24ge1xuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblx0cGFkZGluZzogOHB4O1xufVxuXG4ucHJvcGVydHktY2FyZF9fcmVudCB7XG5cdGZsZXgtZ3JvdzogMTtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ucHJvcGVydHktY2FyZF9fcmVudC1yb3cge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBhZGRpbmc6IDAgMTVweDtcblxuXHQmOmZpcnN0LWNoaWxkIHtcblx0XHRwYWRkaW5nOiA1cHggMDtcblx0fVxufVxuXG4ucHJvcGVydHktY2FyZF9fcmVudC1ubyB7XG5cdGZvbnQtc2l6ZTogMC4xcmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9wZXJ0eS1jYXJkX19jYXJkIHtcblx0Ly8gYm9yZGVyOiAxcHggc29saWQgIzMzMztcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRwYWRkaW5nOiA1cHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiIsIi5wcm9wZXJ0eS1jYXJkX19tYWluIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5wcm9wZXJ0eS1jYXJkX19pY29uIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnByb3BlcnR5LWNhcmRfX3JlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnByb3BlcnR5LWNhcmRfX3JlbnQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4ucHJvcGVydHktY2FyZF9fcmVudC1yb3c6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLnByb3BlcnR5LWNhcmRfX3JlbnQtbm8ge1xuICBmb250LXNpemU6IDAuMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvcGVydHktY2FyZF9fY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/property-card/property-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/property-card/property-card.component.ts ***!
  \**********************************************************/
/*! exports provided: PropertyCard, PropertyCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCard", function() { return PropertyCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCardComponent", function() { return PropertyCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");



class Rent {
    constructor() {
        this.houses = 0;
        this.amount = 0;
    }
}
class PropertyCard extends _card_card_component__WEBPACK_IMPORTED_MODULE_2__["Card"] {
    constructor(...args) {
        super(...args);
        this.name = '';
        this.icon = '';
        this.iconColor = '';
        this.color = '';
        this.textColor = '';
        this.rent = Array();
        Object.assign(this, ...args);
    }
    get type() {
        return 'PROPERTY';
    }
}
let PropertyCardComponent = class PropertyCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PropertyCardComponent.prototype, "config", void 0);
PropertyCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/property-card/property-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-card.component.scss */ "./src/app/property-card/property-card.component.scss")).default]
    })
], PropertyCardComponent);



/***/ }),

/***/ "./src/app/rent-card/rent-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/rent-card/rent-card.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbnQtY2FyZC9yZW50LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/rent-card/rent-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/rent-card/rent-card.component.ts ***!
  \**************************************************/
/*! exports provided: RentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentCardComponent", function() { return RentCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RentCardComponent = class RentCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
RentCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rent-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rent-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rent-card/rent-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rent-card.component.scss */ "./src/app/rent-card/rent-card.component.scss")).default]
    })
], RentCardComponent);



/***/ }),

/***/ "./src/app/wild-card/wild-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/wild-card/wild-card.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbGQtY2FyZC93aWxkLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/wild-card/wild-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/wild-card/wild-card.component.ts ***!
  \**************************************************/
/*! exports provided: WildCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildCardComponent", function() { return WildCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WildCardComponent = class WildCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
WildCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wild-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wild-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wild-card/wild-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wild-card.component.scss */ "./src/app/wild-card/wild-card.component.scss")).default]
    })
], WildCardComponent);



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
    production: false
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





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rodrigo/Code/monopoly-cards/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map