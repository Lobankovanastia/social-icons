(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('social-icons-lib', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['social-icons-lib'] = {}, global.ng.core, global.ng.platformBrowser));
}(this, (function (exports, core, platformBrowser) { 'use strict';

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
        };
        return __assign.apply(this, arguments);
    };

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

    var SocialIconsLibService = /** @class */ (function () {
        function SocialIconsLibService() {
        }
        SocialIconsLibService.ɵprov = core.ɵɵdefineInjectable({ factory: function SocialIconsLibService_Factory() { return new SocialIconsLibService(); }, token: SocialIconsLibService, providedIn: "root" });
        SocialIconsLibService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], SocialIconsLibService);
        return SocialIconsLibService;
    }());

    var Doctolib = /** @class */ (function () {
        function Doctolib() {
        }
        Doctolib.svg = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' +
            '<!-- Generator: Adobe Illustrator 18.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n' +
            '\n' +
            '<svg\n' +
            '   xmlns:dc="http://purl.org/dc/elements/1.1/"\n' +
            '   xmlns:cc="http://creativecommons.org/ns#"\n' +
            '   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n' +
            '   xmlns:svg="http://www.w3.org/2000/svg"\n' +
            '   xmlns="http://www.w3.org/2000/svg"\n' +
            '   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n' +
            '   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n' +
            '   version="1.1"\n' +
            '   id="Calque_1"\n' +
            '   x="0px"\n' +
            '   y="0px"\n' +
            '   viewBox="0 0 135.05391 122.99132"\n' +
            '   enable-background="new 0 0 685 327"\n' +
            '   xml:space="preserve"\n' +
            '   sodipodi:docname="doctolib.svg"\n' +
            '   width="135.05391"\n' +
            '   height="122.99132"\n' +
            '   inkscape:version="0.92.4 (5da689c313, 2019-01-14)"><metadata\n' +
            '   id="metadata39"><rdf:RDF><cc:Work\n' +
            '       rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type\n' +
            '         rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs\n' +
            '   id="defs37">\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '\t\n' +
            '</defs><sodipodi:namedview\n' +
            '   pagecolor="#ffffff"\n' +
            '   bordercolor="#666666"\n' +
            '   borderopacity="1"\n' +
            '   objecttolerance="10"\n' +
            '   gridtolerance="10"\n' +
            '   guidetolerance="10"\n' +
            '   inkscape:pageopacity="0"\n' +
            '   inkscape:pageshadow="2"\n' +
            '   inkscape:window-width="1920"\n' +
            '   inkscape:window-height="1017"\n' +
            '   id="namedview35"\n' +
            '   showgrid="false"\n' +
            '   inkscape:zoom="2.4838561"\n' +
            '   inkscape:cx="192.09688"\n' +
            '   inkscape:cy="18.576024"\n' +
            '   inkscape:window-x="0"\n' +
            '   inkscape:window-y="0"\n' +
            '   inkscape:window-maximized="1"\n' +
            '   inkscape:current-layer="Calque_1" />\n' +
            '<path\n' +
            '   style="fill:#4097e1"\n' +
            '   inkscape:connector-curvature="0"\n' +
            '   id="path26"\n' +
            '   d="m 16.065685,61.956847 c 0,0 -0.1,0.3 -0.4,0.9 -0.3,0.6 -0.6,1.4 -1,2.4 -0.8,2.1 -1.9,5.2 -2.4,8.9 -0.2,1.9 -0.4,3.9 -0.3,6 0,1.1 0.1,2.2 0.3,3.3 0.1,0.6 0.1,1.1 0.2,1.3 0.1,0.4 0.2,0.8 0.4,1.3 1.2,3.5 4.9,7.7 10,11.4 5.1,3.700003 11.5,7.200003 18.5,10.600003 7,3.3 15,6.5 23.7,7.8 4.4,0.6 8.9,0.7 13.4,0.1 2.2,-0.3 4.5,-0.8 6.7,-1.4 2.2,-0.7 4.3,-1.5 6.4,-2.5 4.1,-2 7.8,-4.8 10.900005,-8.1 3,-3.3 5.4,-7.200003 7.2,-11.300003 0.9,-2 1.6,-4.1 2.3,-6.2 0.6,-2.1 1.1,-4.2 1.7,-6.7 0.1,-0.6 0.3,-1.2 0.4,-1.8 l 0.4,-1.7 c 0.2,-1.1 0.5,-2.2 0.7,-3.3 0.2,-1.1 0.5,-2.3 0.7,-3.4 0.2,-1.1 0.4,-2.2 0.6,-3.3 1.5,-8.9 1.8,-17.6 0.4,-25 -0.7,-3.7 -1.9,-7 -3.4,-9.8 -0.8,-1.4 -1.7,-2.7 -2.6,-4 -1,-1.2 -2,-2.4 -3.2,-3.4 -4.7,-4.2 -11.000005,-7.1 -17.300005,-8.9 -6.4,-1.8 -12.7,-2.8 -18.4,-3.4 -5.7,-0.6 -10.8,-0.8 -15.1,-0.9 -4.2,-0.1 -7.6,-0.1 -9.9,-0.1 -2.3,0 -3.5,0 -3.5,0 h -0.9 l -0.3,-1.2 0.8,-0.4 c 0,0 1.1,-0.6 3.3,-1.5 2.2,-0.9 5.4,-2.2 9.7,-3.4 4.2,-1.3 9.5,-2.5 15.7,-3.40000001 6.2,-0.8 13.4,-1.3 21.5,-0.3 4,0.50000001 8.300005,1.30000001 12.700005,2.90000001 1.1,0.4 2.2,0.8 3.3,1.3 1.1,0.5 2.2,1 3.3,1.6 2.2,1.1 4.4,2.5 6.4,4.1 2.1,1.6 4,3.5 5.9,5.5 1.8,2.1 3.4,4.4 4.7,6.8 1.3,2.5 2.5,5 3.2,7.7 0.5,1.3 0.7,2.7 1.1,4 0.3,1.3 0.5,2.7 0.7,4 0.7,5.4 0.6,10.7 0,15.9 -0.6,5.2 -1.7,10.3 -3,15.2 -0.4,1.2 -0.7,2.5 -1.1,3.7 -0.4,1.2 -0.8,2.4 -1.2,3.6 -0.4,1.2 -0.9,2.4 -1.4,3.6 l -0.7,1.8 c -0.2,0.6 -0.5,1.1 -0.7,1.7 l -1.5,3.5 c -0.6,1.2 -1.2,2.4 -1.8,3.6 -1.3,2.4 -2.7,4.7 -4.4,6.8 -3.2,4.300003 -7.1,8.200003 -11.3,11.300003 -4.2,3.2 -8.800005,5.7 -13.500005,7.6 -1.2,0.5 -2.4,0.9 -3.5,1.3 -1.2,0.4 -2.4,0.8 -3.6,1.1 -2.4,0.7 -4.8,1.3 -7.2,1.7 -4.8,1 -9.7,1.6 -14.5,1.9 -9.6,0.6 -19.2,0.1 -28,-2.1 -8.8,-2.2 -16.8,-6.2 -23.2,-11.6 -3.3,-2.6 -6.0999996,-5.6 -8.4999996,-8.9 -2.3,-3.300003 -4.2,-7.100003 -4.99999998,-11.200003 -0.2,-1 -0.3,-2 -0.4,-3.1 -0.1,-1.2 -0.1,-2.1 0.1,-2.9 0.1,-0.8 0.2,-1.6 0.4,-2.4 0.1,-0.8 0.3,-1.5 0.49999998,-2.3 0.8,-3 1.9,-5.5 3.2,-7.7 2.6,-4.3 5.5,-6.8 7.5999996,-8.2 0.5,-0.4 1,-0.7 1.4,-0.9 0.4,-0.3 0.8,-0.4 1,-0.6 0.6,-0.3 0.9,-0.4 0.9,-0.4 l 0.8,-0.4 0.8,0.7 z" /><g\n' +
            '   id="g30"\n' +
            '   transform="translate(-136.23431,-102.14315)">\n' +
            '\t\t<path\n' +
            '   style="fill:#4097e1"\n' +
            '   inkscape:connector-curvature="0"\n' +
            '   id="path28"\n' +
            '   d="m 209.6,132.8 c -3.7,18.7 -7.3,37.3 -11,56 -1.2,6.1 11.5,-1 12.4,-5.1 3.7,-18.7 7.3,-37.3 11,-56 1.1,-6.2 -11.6,0.9 -12.4,5.1 z" />\n' +
            '\t</g>\n' +
            '</svg>';
        return Doctolib;
    }());

    var SocialIconsLibComponent = /** @class */ (function () {
        function SocialIconsLibComponent(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SocialIconsLibComponent.prototype.ngOnInit = function () {
            this.svg = this.sanitizer.bypassSecurityTrustHtml(Doctolib.svg);
        };
        SocialIconsLibComponent.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
        ]; };
        SocialIconsLibComponent = __decorate([
            core.Component({
                // tslint:disable-next-line:component-selector
                selector: 'social-icon',
                template: "<div class=\"svg\" [innerHTML]=\"svg\"></div>\n"
            })
        ], SocialIconsLibComponent);
        return SocialIconsLibComponent;
    }());

    var SocialIconsLibModule = /** @class */ (function () {
        function SocialIconsLibModule() {
        }
        SocialIconsLibModule = __decorate([
            core.NgModule({
                declarations: [SocialIconsLibComponent],
                imports: [],
                exports: [SocialIconsLibComponent]
            })
        ], SocialIconsLibModule);
        return SocialIconsLibModule;
    }());

    exports.Doctolib = Doctolib;
    exports.SocialIconsLibComponent = SocialIconsLibComponent;
    exports.SocialIconsLibModule = SocialIconsLibModule;
    exports.SocialIconsLibService = SocialIconsLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=social-icons-lib.umd.js.map
