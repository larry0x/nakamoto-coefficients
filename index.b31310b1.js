// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cosmos = require("./cosmos");
var _cosmosDefault = parcelHelpers.interopDefault(_cosmos);
var _terra = require("./terra");
var _terraDefault = parcelHelpers.interopDefault(_terra);
var _thorchain = require("./thorchain");
var _thorchainDefault = parcelHelpers.interopDefault(_thorchain);
var _helpers = require("./helpers");
const chains = [_cosmosDefault.default, _terraDefault.default, _thorchainDefault.default];
const promises = chains.map((chain)=>chain.compute()
);
async function run() {
    Promise.all(promises).then((results)=>{
        // sort chains from highest coeff to lowest
        // if same, sort by bribe
        results.sort((a, b)=>{
            if (a.coeff > b.coeff) return -1;
            else if (a.coeff < b.coeff) return 1;
            else {
                if (a.bribe > b.bribe) return -1;
                else return 1;
            }
        });
        // generate table
        const rows = results.map((result)=>{
            let row = "<tr>";
            row += `<td>${result.name}</td>`;
            row += `<td>${result.symbol}</td>`;
            row += `<td>${_helpers.formatMoney(result.price)}</td>`;
            // row += `<td>${formatInteger(result.totalBond)} ${result.symbol}</td>`;
            row += `<td>${_helpers.formatPercentage(result.threshold)}</td>`;
            row += `<td>${result.coeff}</td>`;
            row += `<td>${_helpers.formatMoney(result.bribe, 0)}</td>`;
            row += "</tr>";
            return row;
        });
        document.getElementById("tbody").innerHTML = rows.join("\n");
    });
}
run();

},{"./cosmos":"kyhrL","./terra":"8iRPt","./thorchain":"JrXY1","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./helpers":"cllzS"}],"kyhrL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _helpers = require("./helpers");
var _chain = require("./chain");
const cosmos = new _chain.Chain("cosmoshub", "cosmos", "ATOM", 1 / 3);
cosmos["compute"] = async function() {
    // LUNA price
    const price = (await _axiosDefault.default.get(`https://api.coingecko.com/api/v3/simple/price?ids=${this.coingeckoId}&vs_currencies=usd`)).data[this.coingeckoId].usd;
    // list of validators
    const validators = (await _axiosDefault.default.get("https://cosmos.sg-1.online/validatorsets/latest")).data.result.validators;
    // the bonded amount of each validator
    const bonds = validators.map((validator)=>{
        return _helpers.parseBigInt(validator.voting_power, 0); // 1 voting power = 1 ATOM
    });
    // cosmos can be halted by 33%+1 validators
    const { totalBond , cummBond , coeff  } = _helpers.findCoeff(bonds, 1 / 3);
    const bribe = cummBond * price;
    console.log(this.name);
    console.log(`totalBond = ${_helpers.formatInteger(totalBond)} ${this.symbol}`);
    console.log(`coeff = ${coeff}`);
    console.log(`bribe = ${_helpers.formatMoney(bribe, 0)}`);
    console.log(`price = ${_helpers.formatMoney(price, 2)}`);
    return {
        name: this.name,
        symbol: this.symbol,
        threshold: this.threshold,
        price,
        totalBond,
        coeff,
        bribe
    };
};
exports.default = cosmos;

},{"axios":"iYoWk","./helpers":"cllzS","./chain":"gysVZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iYoWk":[function(require,module,exports) {
module.exports = require('./lib/axios');

},{"./lib/axios":"3QmO2"}],"3QmO2":[function(require,module,exports) {
'use strict';
var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Factory for creating new instances
axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = require('./helpers/spread');
// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"hOPY0","./helpers/bind":"4bHkG","./core/Axios":"KVzea","./core/mergeConfig":"8vb7m","./defaults":"g96L2","./cancel/Cancel":"iGO1D","./cancel/CancelToken":"6kJtU","./cancel/isCancel":"6KzET","./helpers/spread":"3fmMu","./helpers/isAxiosError":"1NqDP"}],"hOPY0":[function(require,module,exports) {
'use strict';
var bind = require('./helpers/bind');
/*global toString:true*/ // utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== '[object Object]') return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) return false;
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') return;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {
    };
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({
        }, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') a[key] = bind(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) content = content.slice(1);
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};

},{"./helpers/bind":"4bHkG"}],"4bHkG":[function(require,module,exports) {
'use strict';
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

},{}],"KVzea":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
        config = arguments[1] || {
        };
        config.url = arguments[0];
    } else config = config || {
    };
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = 'get';
    // Hook up interceptors middleware
    var chain = [
        dispatchRequest,
        undefined
    ];
    var promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while(chain.length)promise = promise.then(chain.shift(), chain.shift());
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};
// Provide aliases for supported request methods
utils.forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {
        }, {
            method: method,
            url: url,
            data: (config || {
            }).data
        }));
    };
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {
        }, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;

},{"./../utils":"hOPY0","../helpers/buildURL":"3Jodf","./InterceptorManager":"9kkIC","./dispatchRequest":"dmFav","./mergeConfig":"8vb7m"}],"3Jodf":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') return;
            if (utils.isArray(val)) key = key + '[]';
            else val = [
                val
            ];
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) v = v.toISOString();
                else if (utils.isObject(v)) v = JSON.stringify(v);
                parts.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};

},{"./../utils":"hOPY0"}],"9kkIC":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = InterceptorManager;

},{"./../utils":"hOPY0"}],"dmFav":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {
    };
    // Transform request data
    config.data = transformData(config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {
    }, config.headers[config.method] || {
    }, config.headers);
    utils.forEach([
        'delete',
        'get',
        'head',
        'post',
        'put',
        'patch',
        'common'
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData(response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

},{"./../utils":"hOPY0","./transformData":"57wgh","../cancel/isCancel":"6KzET","../defaults":"g96L2"}],"57wgh":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn(data, headers);
    });
    return data;
};

},{"./../utils":"hOPY0"}],"6KzET":[function(require,module,exports) {
'use strict';
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

},{}],"g96L2":[function(require,module,exports) {
var process = require("process");
'use strict';
var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) headers['Content-Type'] = value;
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
    else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') // For node use HTTP adapter
    adapter = require('./adapters/http');
    return adapter;
}
var defaults = {
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
            if (utils.isArrayBufferView(data)) return data.buffer;
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            if (utils.isObject(data)) {
                setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                return JSON.stringify(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            /*eslint no-param-reassign:0*/ if (typeof data === 'string') try {
                data = JSON.parse(data);
            } catch (e) {
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    }
};
defaults.headers = {
    common: {
        'Accept': 'application/json, text/plain, */*'
    }
};
utils.forEach([
    'delete',
    'get',
    'head'
], function forEachMethodNoData(method) {
    defaults.headers[method] = {
    };
});
utils.forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"process":"6Upk8","./utils":"hOPY0","./helpers/normalizeHeaderName":"6GUF5","./adapters/xhr":"4uZQD","./adapters/http":"4uZQD"}],"6Upk8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while((++queueIndex) < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"6GUF5":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

},{"../utils":"hOPY0"}],"4uZQD":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        if (utils.isFormData(requestData)) delete requestHeaders['Content-Type']; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        // Listen for ready state
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) return;
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(resolve, reject, response);
            // Clean up request
            request = null;
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(createError('Request aborted', config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ('setRequestHeader' in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (config.responseType) try {
            request.responseType = config.responseType;
        } catch (e) {
            // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
            // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
            if (config.responseType !== 'json') throw e;
        }
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') request.addEventListener('progress', config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) request.upload.addEventListener('progress', config.onUploadProgress);
        if (config.cancelToken) // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) return;
            request.abort();
            reject(cancel);
            // Clean up request
            request = null;
        });
        if (!requestData) requestData = null;
        // Send the request
        request.send(requestData);
    });
};

},{"./../utils":"hOPY0","./../core/settle":"ehRY8","./../helpers/cookies":"dRE5q","./../helpers/buildURL":"3Jodf","../core/buildFullPath":"1RLcm","./../helpers/parseHeaders":"9TT83","./../helpers/isURLSameOrigin":"2SCwc","../core/createError":"cfxXs"}],"ehRY8":[function(require,module,exports) {
'use strict';
var createError = require('./createError');
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
};

},{"./createError":"cfxXs"}],"cfxXs":[function(require,module,exports) {
'use strict';
var enhanceError = require('./enhanceError');
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"3f4N4"}],"3f4N4":[function(require,module,exports) {
'use strict';
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) error.code = code;
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code
        };
    };
    return error;
};

},{}],"dRE5q":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
(function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
            if (utils.isNumber(expires)) cookie.push('expires=' + new Date(expires).toGMTString());
            if (utils.isString(path)) cookie.push('path=' + path);
            if (utils.isString(domain)) cookie.push('domain=' + domain);
            if (secure === true) cookie.push('secure');
            document.cookie = cookie.join('; ');
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
        }
    };
})() : // Non standard browser env (web workers, react-native) lack needed support.
(function nonStandardBrowserEnv() {
    return {
        write: function write() {
        },
        read: function read() {
            return null;
        },
        remove: function remove() {
        }
    };
})();

},{"./../utils":"hOPY0"}],"1RLcm":[function(require,module,exports) {
'use strict';
var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
    return requestedURL;
};

},{"../helpers/isAbsoluteURL":"8E1N1","../helpers/combineURLs":"e9OEH"}],"8E1N1":[function(require,module,exports) {
'use strict';
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"e9OEH":[function(require,module,exports) {
'use strict';
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

},{}],"9TT83":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {
    };
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === 'set-cookie') parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
    });
    return parsed;
};

},{"./../utils":"hOPY0"}],"2SCwc":[function(require,module,exports) {
'use strict';
var utils = require('./../utils');
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
(function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
})() : // Non standard browser envs (web workers, react-native) lack needed support.
(function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
})();

},{"./../utils":"hOPY0"}],"8vb7m":[function(require,module,exports) {
'use strict';
var utils = require('../utils');
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {
    };
    var config = {
    };
    var valueFromConfig2Keys = [
        'url',
        'method',
        'data'
    ];
    var mergeDeepPropertiesKeys = [
        'headers',
        'auth',
        'proxy',
        'params'
    ];
    var defaultToConfig2Keys = [
        'baseURL',
        'transformRequest',
        'transformResponse',
        'paramsSerializer',
        'timeout',
        'timeoutMessage',
        'withCredentials',
        'adapter',
        'responseType',
        'xsrfCookieName',
        'xsrfHeaderName',
        'onUploadProgress',
        'onDownloadProgress',
        'decompress',
        'maxContentLength',
        'maxBodyLength',
        'maxRedirects',
        'transport',
        'httpAgent',
        'httpsAgent',
        'cancelToken',
        'socketPath',
        'responseEncoding'
    ];
    var directMergeKeys = [
        'validateStatus'
    ];
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        else if (utils.isPlainObject(source)) return utils.merge({
        }, source);
        else if (utils.isArray(source)) return source.slice();
        return source;
    }
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) config[prop] = getMergedValue(config1[prop], config2[prop]);
        else if (!utils.isUndefined(config1[prop])) config[prop] = getMergedValue(undefined, config1[prop]);
    }
    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) config[prop] = getMergedValue(undefined, config2[prop]);
    });
    utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) config[prop] = getMergedValue(undefined, config2[prop]);
        else if (!utils.isUndefined(config1[prop])) config[prop] = getMergedValue(undefined, config1[prop]);
    });
    utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) config[prop] = getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) config[prop] = getMergedValue(undefined, config1[prop]);
    });
    var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
    var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
    });
    utils.forEach(otherKeys, mergeDeepProperties);
    return config;
};

},{"../utils":"hOPY0"}],"iGO1D":[function(require,module,exports) {
'use strict';
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

},{}],"6kJtU":[function(require,module,exports) {
'use strict';
var Cancel = require('./Cancel');
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== 'function') throw new TypeError('executor must be a function.');
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

},{"./Cancel":"iGO1D"}],"3fmMu":[function(require,module,exports) {
'use strict';
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

},{}],"1NqDP":[function(require,module,exports) {
'use strict';
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return typeof payload === 'object' && payload.isAxiosError === true;
};

},{}],"cllzS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseBigInt", ()=>parseBigInt
);
// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
parcelHelpers.export(exports, "formatInteger", ()=>formatInteger
);
parcelHelpers.export(exports, "formatMoney", ()=>formatMoney
);
parcelHelpers.export(exports, "formatPercentage", ()=>formatPercentage
);
parcelHelpers.export(exports, "findCoeff", ()=>findCoeff
);
var _bnJs = require("bn.js");
function parseBigInt(big, decPlaces) {
    const decimals = new _bnJs.BN("10").pow(new _bnJs.BN(decPlaces));
    const int = new _bnJs.BN(big).div(decimals).toNumber();
    const dec = new _bnJs.BN(big).mod(decimals).toNumber() / decimals.toNumber();
    return int + dec;
}
function formatInteger(int) {
    return Math.floor(int).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function formatMoney(amount, decPlaces = 2) {
    const dec = amount % 1;
    return "$" + formatInteger(amount) + (decPlaces > 0 ? dec.toFixed(decPlaces).slice(1) : "");
}
function formatPercentage(percent, decPlaces = 0) {
    return (percent * 100).toFixed(decPlaces) + "%";
}
function findCoeff(bonds, threshold) {
    // sort bond amounts descendingly
    bonds.sort((a, b)=>{
        if (a > b) return -1;
        else return 1;
    });
    // find Nakamoto coefficient
    let totalBond = bonds.reduce((a, b)=>a + b
    , 0);
    let cummBond = 0;
    let coeff = 0;
    for(let i = 0; i < bonds.length; i++){
        cummBond += bonds[i];
        // thorchteain can be halted by 33%+1 nodes
        if (cummBond > totalBond * threshold) {
            coeff = i + 1;
            break;
        }
    }
    return {
        totalBond,
        cummBond,
        coeff
    };
}
// test
if (undefined === module) {
    // should be 123.456789
    console.log(`parseBigInt("123456789", 6) = ${parseBigInt("123456789", 6)}`);
    // should be 1.23456789
    console.log(`parseBigInt("123456789", 8) = ${parseBigInt("123456789", 8)}`);
    // should be 123,456,789
    console.log(`formatInteger(123456789) = ${formatInteger(123456789)}`);
    // should be 1,234,567 (decimal part is rounded down)
    console.log(`formatInteger(1234567.89) = ${formatInteger(1234567.89)}`);
}

},{"bn.js":"9iLnt","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9iLnt":[function(require,module,exports) {
(function(module, exports) {
    // Utils
    function assert(val, msg) {
        if (!val) throw new Error(msg || 'Assertion failed');
    }
    // Could use `inherits` module, but don't want to move from single file
    // architecture yet.
    function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
    // BN
    function BN(number, base, endian) {
        if (BN.isBN(number)) return number;
        this.negative = 0;
        this.words = null;
        this.length = 0;
        // Reduction context
        this.red = null;
        if (number !== null) {
            if (base === 'le' || base === 'be') {
                endian = base;
                base = 10;
            }
            this._init(number || 0, base || 10, endian || 'be');
        }
    }
    if (typeof module === 'object') module.exports = BN;
    else exports.BN = BN;
    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;
    try {
        if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') Buffer = window.Buffer;
        else Buffer = require('buffer').Buffer;
    } catch (e) {
    }
    BN.isBN = function isBN(num) {
        if (num instanceof BN) return true;
        return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };
    BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
    };
    BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
    };
    BN.prototype._init = function init(number, base, endian) {
        if (typeof number === 'number') return this._initNumber(number, base, endian);
        if (typeof number === 'object') return this._initArray(number, base, endian);
        if (base === 'hex') base = 16;
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, '');
        var start = 0;
        if (number[0] === '-') {
            start++;
            this.negative = 1;
        }
        if (start < number.length) {
            if (base === 16) this._parseHex(number, start, endian);
            else {
                this._parseBase(number, base, start);
                if (endian === 'le') this._initArray(this.toArray(), base, endian);
            }
        }
    };
    BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
            this.negative = 1;
            number = -number;
        }
        if (number < 67108864) {
            this.words = [
                number & 67108863
            ];
            this.length = 1;
        } else if (number < 4503599627370496) {
            this.words = [
                number & 67108863,
                number / 67108864 & 67108863
            ];
            this.length = 2;
        } else {
            assert(number < 9007199254740992); // 2 ^ 53 (unsafe)
            this.words = [
                number & 67108863,
                number / 67108864 & 67108863,
                1
            ];
            this.length = 3;
        }
        if (endian !== 'le') return;
        // Reverse the bytes
        this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initArray = function _initArray(number, base, endian) {
        // Perhaps a Uint8Array
        assert(typeof number.length === 'number');
        if (number.length <= 0) {
            this.words = [
                0
            ];
            this.length = 1;
            return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)this.words[i] = 0;
        var j, w;
        var off = 0;
        if (endian === 'be') for(i = number.length - 1, j = 0; i >= 0; i -= 3){
            w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        else if (endian === 'le') for(i = 0, j = 0; i < number.length; i += 3){
            w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        return this._strip();
    };
    function parseHex4Bits(string, index) {
        var c = string.charCodeAt(index);
        // '0' - '9'
        if (c >= 48 && c <= 57) return c - 48;
        else if (c >= 65 && c <= 70) return c - 55;
        else if (c >= 97 && c <= 102) return c - 87;
        else assert(false, 'Invalid character in ' + string);
    }
    function parseHexByte(string, lowerBound, index) {
        var r = parseHex4Bits(string, index);
        if (index - 1 >= lowerBound) r |= parseHex4Bits(string, index - 1) << 4;
        return r;
    }
    BN.prototype._parseHex = function _parseHex(number, start, endian) {
        // Create possibly bigger array to ensure that it fits the number
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)this.words[i] = 0;
        // 24-bits chunks
        var off = 0;
        var j = 0;
        var w;
        if (endian === 'be') for(i = number.length - 1; i >= start; i -= 2){
            w = parseHexByte(number, start, i) << off;
            this.words[j] |= w & 67108863;
            if (off >= 18) {
                off -= 18;
                j += 1;
                this.words[j] |= w >>> 26;
            } else off += 8;
        }
        else {
            var parseLength = number.length - start;
            for(i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2){
                w = parseHexByte(number, start, i) << off;
                this.words[j] |= w & 67108863;
                if (off >= 18) {
                    off -= 18;
                    j += 1;
                    this.words[j] |= w >>> 26;
                } else off += 8;
            }
        }
        this._strip();
    };
    function parseBase(str, start, end, mul) {
        var r = 0;
        var b = 0;
        var len = Math.min(str.length, end);
        for(var i = start; i < len; i++){
            var c = str.charCodeAt(i) - 48;
            r *= mul;
            // 'a'
            if (c >= 49) b = c - 49 + 10;
            else if (c >= 17) b = c - 17 + 10;
            else b = c;
            assert(c >= 0 && b < mul, 'Invalid character');
            r += b;
        }
        return r;
    }
    BN.prototype._parseBase = function _parseBase(number, base, start) {
        // Initialize as zero
        this.words = [
            0
        ];
        this.length = 1;
        // Find length of limb in base
        for(var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base)limbLen++;
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for(var i = start; i < end; i += limbLen){
            word = parseBase(number, i, i + limbLen, base);
            this.imuln(limbPow);
            if (this.words[0] + word < 67108864) this.words[0] += word;
            else this._iaddn(word);
        }
        if (mod !== 0) {
            var pow = 1;
            word = parseBase(number, i, number.length, base);
            for(i = 0; i < mod; i++)pow *= base;
            this.imuln(pow);
            if (this.words[0] + word < 67108864) this.words[0] += word;
            else this._iaddn(word);
        }
        this._strip();
    };
    BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)dest.words[i] = this.words[i];
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
    };
    function move(dest, src) {
        dest.words = src.words;
        dest.length = src.length;
        dest.negative = src.negative;
        dest.red = src.red;
    }
    BN.prototype._move = function _move(dest) {
        move(dest, this);
    };
    BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
    };
    BN.prototype._expand = function _expand(size) {
        while(this.length < size)this.words[this.length++] = 0;
        return this;
    };
    // Remove leading `0` from `this`
    BN.prototype._strip = function strip() {
        while(this.length > 1 && this.words[this.length - 1] === 0)this.length--;
        return this._normSign();
    };
    BN.prototype._normSign = function _normSign() {
        // -0 = 0
        if (this.length === 1 && this.words[0] === 0) this.negative = 0;
        return this;
    };
    // Check Symbol.for because not everywhere where Symbol defined
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility
    if (typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') try {
        BN.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspect;
    } catch (e) {
        BN.prototype.inspect = inspect;
    }
    else BN.prototype.inspect = inspect;
    function inspect() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */ var zeros = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000'
    ];
    var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ];
    var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        10000000,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64000000,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        24300000,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
    ];
    BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === 'hex') {
            out = '';
            var off = 0;
            var carry = 0;
            for(var i = 0; i < this.length; i++){
                var w = this.words[i];
                var word = ((w << off | carry) & 16777215).toString(16);
                carry = w >>> 24 - off & 16777215;
                if (carry !== 0 || i !== this.length - 1) out = zeros[6 - word.length] + word + out;
                else out = word + out;
                off += 2;
                if (off >= 26) {
                    off -= 26;
                    i--;
                }
            }
            if (carry !== 0) out = carry.toString(16) + out;
            while(out.length % padding !== 0)out = '0' + out;
            if (this.negative !== 0) out = '-' + out;
            return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
            // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
            var groupSize = groupSizes[base];
            // var groupBase = Math.pow(base, groupSize);
            var groupBase = groupBases[base];
            out = '';
            var c = this.clone();
            c.negative = 0;
            while(!c.isZero()){
                var r = c.modrn(groupBase).toString(base);
                c = c.idivn(groupBase);
                if (!c.isZero()) out = zeros[groupSize - r.length] + r + out;
                else out = r + out;
            }
            if (this.isZero()) out = '0' + out;
            while(out.length % padding !== 0)out = '0' + out;
            if (this.negative !== 0) out = '-' + out;
            return out;
        }
        assert(false, 'Base should be between 2 and 36');
    };
    BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) ret += this.words[1] * 67108864;
        else if (this.length === 3 && this.words[2] === 1) // NOTE: at this stage it is known that the top bit is set
        ret += 4503599627370496 + this.words[1] * 67108864;
        else if (this.length > 2) assert(false, 'Number can only safely store up to 53 bits');
        return this.negative !== 0 ? -ret : ret;
    };
    BN.prototype.toJSON = function toJSON() {
        return this.toString(16, 2);
    };
    if (Buffer) BN.prototype.toBuffer = function toBuffer(endian, length) {
        return this.toArrayLike(Buffer, endian, length);
    };
    BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
    };
    var allocate = function allocate1(ArrayType, size) {
        if (ArrayType.allocUnsafe) return ArrayType.allocUnsafe(size);
        return new ArrayType(size);
    };
    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        this._strip();
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, 'byte array longer than desired length');
        assert(reqLength > 0, 'Requested array length <= 0');
        var res = allocate(ArrayType, reqLength);
        var postfix = endian === 'le' ? 'LE' : 'BE';
        this['_toArrayLike' + postfix](res, byteLength);
        return res;
    };
    BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
        var position = 0;
        var carry = 0;
        for(var i = 0, shift = 0; i < this.length; i++){
            var word = this.words[i] << shift | carry;
            res[position++] = word & 255;
            if (position < res.length) res[position++] = word >> 8 & 255;
            if (position < res.length) res[position++] = word >> 16 & 255;
            if (shift === 6) {
                if (position < res.length) res[position++] = word >> 24 & 255;
                carry = 0;
                shift = 0;
            } else {
                carry = word >>> 24;
                shift += 2;
            }
        }
        if (position < res.length) {
            res[position++] = carry;
            while(position < res.length)res[position++] = 0;
        }
    };
    BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
        var position = res.length - 1;
        var carry = 0;
        for(var i = 0, shift = 0; i < this.length; i++){
            var word = this.words[i] << shift | carry;
            res[position--] = word & 255;
            if (position >= 0) res[position--] = word >> 8 & 255;
            if (position >= 0) res[position--] = word >> 16 & 255;
            if (shift === 6) {
                if (position >= 0) res[position--] = word >> 24 & 255;
                carry = 0;
                shift = 0;
            } else {
                carry = word >>> 24;
                shift += 2;
            }
        }
        if (position >= 0) {
            res[position--] = carry;
            while(position >= 0)res[position--] = 0;
        }
    };
    if (Math.clz32) BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
    };
    else BN.prototype._countBits = function _countBits1(w) {
        var t = w;
        var r = 0;
        if (t >= 4096) {
            r += 13;
            t >>>= 13;
        }
        if (t >= 64) {
            r += 7;
            t >>>= 7;
        }
        if (t >= 8) {
            r += 4;
            t >>>= 4;
        }
        if (t >= 2) {
            r += 2;
            t >>>= 2;
        }
        return r + t;
    };
    BN.prototype._zeroBits = function _zeroBits(w) {
        // Short-cut
        if (w === 0) return 26;
        var t = w;
        var r = 0;
        if ((t & 8191) === 0) {
            r += 13;
            t >>>= 13;
        }
        if ((t & 127) === 0) {
            r += 7;
            t >>>= 7;
        }
        if ((t & 15) === 0) {
            r += 4;
            t >>>= 4;
        }
        if ((t & 3) === 0) {
            r += 2;
            t >>>= 2;
        }
        if ((t & 1) === 0) r++;
        return r;
    };
    // Return number of used bits in a BN
    BN.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];
        var hi = this._countBits(w);
        return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
        var w = new Array(num.bitLength());
        for(var bit = 0; bit < w.length; bit++){
            var off = bit / 26 | 0;
            var wbit = bit % 26;
            w[bit] = num.words[off] >>> wbit & 1;
        }
        return w;
    }
    // Number of trailing zero bits
    BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;
        for(var i = 0; i < this.length; i++){
            var b = this._zeroBits(this.words[i]);
            r += b;
            if (b !== 26) break;
        }
        return r;
    };
    BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
    };
    BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) return this.abs().inotn(width).iaddn(1);
        return this.clone();
    };
    BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) return this.notn(width).iaddn(1).ineg();
        return this.clone();
    };
    BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
    };
    // Return negative clone of `this`
    BN.prototype.neg = function neg() {
        return this.clone().ineg();
    };
    BN.prototype.ineg = function ineg() {
        if (!this.isZero()) this.negative ^= 1;
        return this;
    };
    // Or `num` with `this` in-place
    BN.prototype.iuor = function iuor(num) {
        while(this.length < num.length)this.words[this.length++] = 0;
        for(var i = 0; i < num.length; i++)this.words[i] = this.words[i] | num.words[i];
        return this._strip();
    };
    BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
    };
    // Or `num` with `this`
    BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
    };
    BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
    };
    // And `num` with `this` in-place
    BN.prototype.iuand = function iuand(num) {
        // b = min-length(num, this)
        var b;
        if (this.length > num.length) b = num;
        else b = this;
        for(var i = 0; i < b.length; i++)this.words[i] = this.words[i] & num.words[i];
        this.length = b.length;
        return this._strip();
    };
    BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
    };
    // And `num` with `this`
    BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
    };
    BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
    };
    // Xor `num` with `this` in-place
    BN.prototype.iuxor = function iuxor(num) {
        // a.length > b.length
        var a;
        var b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        for(var i = 0; i < b.length; i++)this.words[i] = a.words[i] ^ b.words[i];
        if (this !== a) for(; i < a.length; i++)this.words[i] = a.words[i];
        this.length = a.length;
        return this._strip();
    };
    BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
    };
    // Xor `num` with `this`
    BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
    };
    BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
    };
    // Not ``this`` with ``width`` bitwidth
    BN.prototype.inotn = function inotn(width) {
        assert(typeof width === 'number' && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        // Extend the buffer with leading zeroes
        this._expand(bytesNeeded);
        if (bitsLeft > 0) bytesNeeded--;
        // Handle complete words
        for(var i = 0; i < bytesNeeded; i++)this.words[i] = ~this.words[i] & 67108863;
        // Handle the residue
        if (bitsLeft > 0) this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
        // And remove leading zeroes
        return this._strip();
    };
    BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
    };
    // Set `bit` of `this`
    BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === 'number' && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) this.words[off] = this.words[off] | 1 << wbit;
        else this.words[off] = this.words[off] & ~(1 << wbit);
        return this._strip();
    };
    // Add `num` to `this` in-place
    BN.prototype.iadd = function iadd(num) {
        var r;
        // negative + positive
        if (this.negative !== 0 && num.negative === 0) {
            this.negative = 0;
            r = this.isub(num);
            this.negative ^= 1;
            return this._normSign();
        // positive + negative
        } else if (this.negative === 0 && num.negative !== 0) {
            num.negative = 0;
            r = this.isub(num);
            num.negative = 1;
            return r._normSign();
        }
        // a.length > b.length
        var a, b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
            this.words[this.length] = carry;
            this.length++;
        // Copy the rest of the words
        } else if (a !== this) for(; i < a.length; i++)this.words[i] = a.words[i];
        return this;
    };
    // Add `num` to `this`
    BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
            num.negative = 0;
            res = this.sub(num);
            num.negative ^= 1;
            return res;
        } else if (num.negative === 0 && this.negative !== 0) {
            this.negative = 0;
            res = num.sub(this);
            this.negative = 1;
            return res;
        }
        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
    };
    // Subtract `num` from `this` in-place
    BN.prototype.isub = function isub(num) {
        // this - (-num) = this + num
        if (num.negative !== 0) {
            num.negative = 0;
            var r = this.iadd(num);
            num.negative = 1;
            return r._normSign();
        // -this - num = -(this + num)
        } else if (this.negative !== 0) {
            this.negative = 0;
            this.iadd(num);
            this.negative = 1;
            return this._normSign();
        }
        // At this point both numbers are positive
        var cmp = this.cmp(num);
        // Optimization - zeroify
        if (cmp === 0) {
            this.negative = 0;
            this.length = 1;
            this.words[0] = 0;
            return this;
        }
        // a > b
        var a, b;
        if (cmp > 0) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
        }
        // Copy rest of the words
        if (carry === 0 && i < a.length && a !== this) for(; i < a.length; i++)this.words[i] = a.words[i];
        this.length = Math.max(this.length, i);
        if (a !== this) this.negative = 1;
        return this._strip();
    };
    // Subtract `num` from `this`
    BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
    };
    function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        // Peel one iteration (compiler can't do it, because of code complexity)
        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 67108863;
        var carry = r / 67108864 | 0;
        out.words[0] = lo;
        for(var k = 1; k < len; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = carry >>> 26;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j | 0;
                a = self.words[i] | 0;
                b = num.words[j] | 0;
                r = a * b + rword;
                ncarry += r / 67108864 | 0;
                rword = r & 67108863;
            }
            out.words[k] = rword | 0;
            carry = ncarry | 0;
        }
        if (carry !== 0) out.words[k] = carry | 0;
        else out.length--;
        return out._strip();
    }
    // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).
    var comb10MulTo = function comb10MulTo1(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 8191;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 8191;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 8191;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        /* k = 0 */ lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        /* k = 1 */ lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        /* k = 2 */ lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        /* k = 3 */ lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        /* k = 4 */ lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        /* k = 5 */ lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        /* k = 6 */ lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        /* k = 7 */ lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        /* k = 8 */ lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        /* k = 9 */ lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        /* k = 10 */ lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        /* k = 11 */ lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        /* k = 12 */ lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        /* k = 13 */ lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        /* k = 14 */ lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        /* k = 15 */ lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        /* k = 16 */ lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        /* k = 17 */ lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        /* k = 18 */ lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
            o[19] = c;
            out.length++;
        }
        return out;
    };
    // Polyfill comb
    if (!Math.imul) comb10MulTo = smallMulTo;
    function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for(var k = 0; k < out.length - 1; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = hncarry;
            hncarry = 0;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j;
                var a = self.words[i] | 0;
                var b = num.words[j] | 0;
                var r = a * b;
                var lo = r & 67108863;
                ncarry = ncarry + (r / 67108864 | 0) | 0;
                lo = lo + rword | 0;
                rword = lo & 67108863;
                ncarry = ncarry + (lo >>> 26) | 0;
                hncarry += ncarry >>> 26;
                ncarry &= 67108863;
            }
            out.words[k] = rword;
            carry = ncarry;
            ncarry = hncarry;
        }
        if (carry !== 0) out.words[k] = carry;
        else out.length--;
        return out._strip();
    }
    function jumboMulTo(self, num, out) {
        // Temporary disable, see https://github.com/indutny/bn.js/issues/211
        // var fftm = new FFTM();
        // return fftm.mulp(self, num, out);
        return bigMulTo(self, num, out);
    }
    BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) res = comb10MulTo(this, num, out);
        else if (len < 63) res = smallMulTo(this, num, out);
        else if (len < 1024) res = bigMulTo(this, num, out);
        else res = jumboMulTo(this, num, out);
        return res;
    };
    // Cooley-Tukey algorithm for FFT
    // slightly revisited to rely on looping instead of recursion
    function FFTM(x, y) {
        this.x = x;
        this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;
        for(var i = 0; i < N; i++)t[i] = this.revBin(i, l, N);
        return t;
    };
    // Returns binary-reversed representation of `x`
    FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1) return x;
        var rb = 0;
        for(var i = 0; i < l; i++){
            rb |= (x & 1) << l - i - 1;
            x >>= 1;
        }
        return rb;
    };
    // Performs "tweedling" phase, therefore 'emulating'
    // behaviour of the recursive algorithm
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for(var i = 0; i < N; i++){
            rtws[i] = rws[rbt[i]];
            itws[i] = iws[rbt[i]];
        }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);
        for(var s = 1; s < N; s <<= 1){
            var l = s << 1;
            var rtwdf = Math.cos(2 * Math.PI / l);
            var itwdf = Math.sin(2 * Math.PI / l);
            for(var p = 0; p < N; p += l){
                var rtwdf_ = rtwdf;
                var itwdf_ = itwdf;
                for(var j = 0; j < s; j++){
                    var re = rtws[p + j];
                    var ie = itws[p + j];
                    var ro = rtws[p + j + s];
                    var io = itws[p + j + s];
                    var rx = rtwdf_ * ro - itwdf_ * io;
                    io = rtwdf_ * io + itwdf_ * ro;
                    ro = rx;
                    rtws[p + j] = re + ro;
                    itws[p + j] = ie + io;
                    rtws[p + j + s] = re - ro;
                    itws[p + j + s] = ie - io;
                    /* jshint maxdepth : false */ if (j !== l) {
                        rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                        itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                        rtwdf_ = rx;
                    }
                }
            }
        }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;
        for(N = N / 2 | 0; N; N = N >>> 1)i++;
        return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1) return;
        for(var i = 0; i < N / 2; i++){
            var t = rws[i];
            rws[i] = rws[N - i - 1];
            rws[N - i - 1] = t;
            t = iws[i];
            iws[i] = -iws[N - i - 1];
            iws[N - i - 1] = -t;
        }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;
        for(var i = 0; i < N / 2; i++){
            var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
            ws[i] = w & 67108863;
            if (w < 67108864) carry = 0;
            else carry = w / 67108864 | 0;
        }
        return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;
        for(var i = 0; i < len; i++){
            carry = carry + (ws[i] | 0);
            rws[2 * i] = carry & 8191;
            carry = carry >>> 13;
            rws[2 * i + 1] = carry & 8191;
            carry = carry >>> 13;
        }
        // Pad with zeroes
        for(i = 2 * len; i < N; ++i)rws[i] = 0;
        assert(carry === 0);
        assert((carry & -8192) === 0);
    };
    FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);
        for(var i = 0; i < N; i++)ph[i] = 0;
        return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);
        var _ = this.stub(N);
        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);
        for(var i = 0; i < N; i++){
            var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
            iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
            rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out._strip();
    };
    // Multiply `this` by `num`
    BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
    };
    // Multiply employing FFT
    BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
    };
    // In-place Multiplication
    BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
    };
    BN.prototype.imuln = function imuln(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(typeof num === 'number');
        assert(num < 67108864);
        // Carry
        var carry = 0;
        for(var i = 0; i < this.length; i++){
            var w = (this.words[i] | 0) * num;
            var lo = (w & 67108863) + (carry & 67108863);
            carry >>= 26;
            carry += w / 67108864 | 0;
            // NOTE: lo is 27bit maximum
            carry += lo >>> 26;
            this.words[i] = lo & 67108863;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return isNegNum ? this.ineg() : this;
    };
    BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
    };
    // `this` * `this`
    BN.prototype.sqr = function sqr() {
        return this.mul(this);
    };
    // `this` * `this` in-place
    BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
    };
    // Math.pow(`this`, `num`)
    BN.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0) return new BN(1);
        // Skip leading zeroes
        var res = this;
        for(var i = 0; i < w.length; i++, res = res.sqr()){
            if (w[i] !== 0) break;
        }
        if ((++i) < w.length) for(var q = res.sqr(); i < w.length; i++, q = q.sqr()){
            if (w[i] === 0) continue;
            res = res.mul(q);
        }
        return res;
    };
    // Shift-left in-place
    BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 67108863 >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
            var carry = 0;
            for(i = 0; i < this.length; i++){
                var newCarry = this.words[i] & carryMask;
                var c = (this.words[i] | 0) - newCarry << r;
                this.words[i] = c | carry;
                carry = newCarry >>> 26 - r;
            }
            if (carry) {
                this.words[i] = carry;
                this.length++;
            }
        }
        if (s !== 0) {
            for(i = this.length - 1; i >= 0; i--)this.words[i + s] = this.words[i];
            for(i = 0; i < s; i++)this.words[i] = 0;
            this.length += s;
        }
        return this._strip();
    };
    BN.prototype.ishln = function ishln(bits) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushln(bits);
    };
    // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits
    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === 'number' && bits >= 0);
        var h;
        if (hint) h = (hint - hint % 26) / 26;
        else h = 0;
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 67108863 ^ 67108863 >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h);
        // Extended mode, copy masked part
        if (maskedWords) {
            for(var i = 0; i < s; i++)maskedWords.words[i] = this.words[i];
            maskedWords.length = s;
        }
        if (s === 0) ;
        else if (this.length > s) {
            this.length -= s;
            for(i = 0; i < this.length; i++)this.words[i] = this.words[i + s];
        } else {
            this.words[0] = 0;
            this.length = 1;
        }
        var carry = 0;
        for(i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--){
            var word = this.words[i] | 0;
            this.words[i] = carry << 26 - r | word >>> r;
            carry = word & mask;
        }
        // Push carried bits as a mask
        if (maskedWords && carry !== 0) maskedWords.words[maskedWords.length++] = carry;
        if (this.length === 0) {
            this.words[0] = 0;
            this.length = 1;
        }
        return this._strip();
    };
    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
    };
    // Shift-left
    BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
    };
    BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
    };
    // Shift-right
    BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
    };
    BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
    };
    // Test if n bit is set
    BN.prototype.testn = function testn(bit) {
        assert(typeof bit === 'number' && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) return false;
        // Check bit and return
        var w = this.words[s];
        return !!(w & q);
    };
    // Return only lowers bits of number (in-place)
    BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, 'imaskn works only with positive numbers');
        if (this.length <= s) return this;
        if (r !== 0) s++;
        this.length = Math.min(s, this.length);
        if (r !== 0) {
            var mask = 67108863 ^ 67108863 >>> r << r;
            this.words[this.length - 1] &= mask;
        }
        return this._strip();
    };
    // Return only lowers bits of number
    BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
    };
    // Add plain number `num` to `this`
    BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === 'number');
        assert(num < 67108864);
        if (num < 0) return this.isubn(-num);
        // Possible sign change
        if (this.negative !== 0) {
            if (this.length === 1 && (this.words[0] | 0) <= num) {
                this.words[0] = num - (this.words[0] | 0);
                this.negative = 0;
                return this;
            }
            this.negative = 0;
            this.isubn(num);
            this.negative = 1;
            return this;
        }
        // Add without checks
        return this._iaddn(num);
    };
    BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        // Carry
        for(var i = 0; i < this.length && this.words[i] >= 67108864; i++){
            this.words[i] -= 67108864;
            if (i === this.length - 1) this.words[i + 1] = 1;
            else this.words[i + 1]++;
        }
        this.length = Math.max(this.length, i + 1);
        return this;
    };
    // Subtract plain number `num` from `this`
    BN.prototype.isubn = function isubn(num) {
        assert(typeof num === 'number');
        assert(num < 67108864);
        if (num < 0) return this.iaddn(-num);
        if (this.negative !== 0) {
            this.negative = 0;
            this.iaddn(num);
            this.negative = 1;
            return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
            this.words[0] = -this.words[0];
            this.negative = 1;
        } else // Carry
        for(var i = 0; i < this.length && this.words[i] < 0; i++){
            this.words[i] += 67108864;
            this.words[i + 1] -= 1;
        }
        return this._strip();
    };
    BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
    };
    BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
    };
    BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
    };
    BN.prototype.abs = function abs() {
        return this.clone().iabs();
    };
    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul1, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w;
        var carry = 0;
        for(i = 0; i < num.length; i++){
            w = (this.words[i + shift] | 0) + carry;
            var right = (num.words[i] | 0) * mul1;
            w -= right & 67108863;
            carry = (w >> 26) - (right / 67108864 | 0);
            this.words[i + shift] = w & 67108863;
        }
        for(; i < this.length - shift; i++){
            w = (this.words[i + shift] | 0) + carry;
            carry = w >> 26;
            this.words[i + shift] = w & 67108863;
        }
        if (carry === 0) return this._strip();
        // Subtraction overflow
        assert(carry === -1);
        carry = 0;
        for(i = 0; i < this.length; i++){
            w = -(this.words[i] | 0) + carry;
            carry = w >> 26;
            this.words[i] = w & 67108863;
        }
        this.negative = 1;
        return this._strip();
    };
    BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num;
        // Normalize
        var bhi = b.words[b.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
            b = b.ushln(shift);
            a.iushln(shift);
            bhi = b.words[b.length - 1] | 0;
        }
        // Initialize quotient
        var m = a.length - b.length;
        var q;
        if (mode !== 'mod') {
            q = new BN(null);
            q.length = m + 1;
            q.words = new Array(q.length);
            for(var i = 0; i < q.length; i++)q.words[i] = 0;
        }
        var diff = a.clone()._ishlnsubmul(b, 1, m);
        if (diff.negative === 0) {
            a = diff;
            if (q) q.words[m] = 1;
        }
        for(var j = m - 1; j >= 0; j--){
            var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
            // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
            // (0x7ffffff)
            qj = Math.min(qj / bhi | 0, 67108863);
            a._ishlnsubmul(b, qj, j);
            while(a.negative !== 0){
                qj--;
                a.negative = 0;
                a._ishlnsubmul(b, 1, j);
                if (!a.isZero()) a.negative ^= 1;
            }
            if (q) q.words[j] = qj;
        }
        if (q) q._strip();
        a._strip();
        // Denormalize
        if (mode !== 'div' && shift !== 0) a.iushrn(shift);
        return {
            div: q || null,
            mod: a
        };
    };
    // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested
    BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) return {
            div: new BN(0),
            mod: new BN(0)
        };
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
            res = this.neg().divmod(num, mode);
            if (mode !== 'mod') div = res.div.neg();
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) mod.iadd(num);
            }
            return {
                div: div,
                mod: mod
            };
        }
        if (this.negative === 0 && num.negative !== 0) {
            res = this.divmod(num.neg(), mode);
            if (mode !== 'mod') div = res.div.neg();
            return {
                div: div,
                mod: res.mod
            };
        }
        if ((this.negative & num.negative) !== 0) {
            res = this.neg().divmod(num.neg(), mode);
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) mod.isub(num);
            }
            return {
                div: res.div,
                mod: mod
            };
        }
        // Both numbers are positive at this point
        // Strip both numbers to approximate shift value
        if (num.length > this.length || this.cmp(num) < 0) return {
            div: new BN(0),
            mod: this
        };
        // Very short reduction
        if (num.length === 1) {
            if (mode === 'div') return {
                div: this.divn(num.words[0]),
                mod: null
            };
            if (mode === 'mod') return {
                div: null,
                mod: new BN(this.modrn(num.words[0]))
            };
            return {
                div: this.divn(num.words[0]),
                mod: new BN(this.modrn(num.words[0]))
            };
        }
        return this._wordDiv(num, mode);
    };
    // Find `this` / `num`
    BN.prototype.div = function div(num) {
        return this.divmod(num, 'div', false).div;
    };
    // Find `this` % `num`
    BN.prototype.mod = function mod(num) {
        return this.divmod(num, 'mod', false).mod;
    };
    BN.prototype.umod = function umod(num) {
        return this.divmod(num, 'mod', true).mod;
    };
    // Find Round(`this` / `num`)
    BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        // Fast case - exact division
        if (dm.mod.isZero()) return dm.div;
        var mod1 = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod1.cmp(half);
        // Round down
        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
        // Round up
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN.prototype.modrn = function modrn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(num <= 67108863);
        var p = 67108864 % num;
        var acc = 0;
        for(var i = this.length - 1; i >= 0; i--)acc = (p * acc + (this.words[i] | 0)) % num;
        return isNegNum ? -acc : acc;
    };
    // WARNING: DEPRECATED
    BN.prototype.modn = function modn(num) {
        return this.modrn(num);
    };
    // In-place division by number
    BN.prototype.idivn = function idivn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(num <= 67108863);
        var carry = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var w = (this.words[i] | 0) + carry * 67108864;
            this.words[i] = w / num | 0;
            carry = w % num;
        }
        this._strip();
        return isNegNum ? this.ineg() : this;
    };
    BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
    };
    BN.prototype.egcd = function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x = this;
        var y = p.clone();
        if (x.negative !== 0) x = x.umod(p);
        else x = x.clone();
        // A * x + B * y = x
        var A = new BN(1);
        var B = new BN(0);
        // C * x + D * y = y
        var C = new BN(0);
        var D = new BN(1);
        var g = 0;
        while(x.isEven() && y.isEven()){
            x.iushrn(1);
            y.iushrn(1);
            ++g;
        }
        var yp = y.clone();
        var xp = x.clone();
        while(!x.isZero()){
            for(var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                x.iushrn(i);
                while((i--) > 0){
                    if (A.isOdd() || B.isOdd()) {
                        A.iadd(yp);
                        B.isub(xp);
                    }
                    A.iushrn(1);
                    B.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                y.iushrn(j);
                while((j--) > 0){
                    if (C.isOdd() || D.isOdd()) {
                        C.iadd(yp);
                        D.isub(xp);
                    }
                    C.iushrn(1);
                    D.iushrn(1);
                }
            }
            if (x.cmp(y) >= 0) {
                x.isub(y);
                A.isub(C);
                B.isub(D);
            } else {
                y.isub(x);
                C.isub(A);
                D.isub(B);
            }
        }
        return {
            a: C,
            b: D,
            gcd: y.iushln(g)
        };
    };
    // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed
    BN.prototype._invmp = function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();
        if (a.negative !== 0) a = a.umod(p);
        else a = a.clone();
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();
        while(a.cmpn(1) > 0 && b.cmpn(1) > 0){
            for(var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                a.iushrn(i);
                while((i--) > 0){
                    if (x1.isOdd()) x1.iadd(delta);
                    x1.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                b.iushrn(j);
                while((j--) > 0){
                    if (x2.isOdd()) x2.iadd(delta);
                    x2.iushrn(1);
                }
            }
            if (a.cmp(b) >= 0) {
                a.isub(b);
                x1.isub(x2);
            } else {
                b.isub(a);
                x2.isub(x1);
            }
        }
        var res;
        if (a.cmpn(1) === 0) res = x1;
        else res = x2;
        if (res.cmpn(0) < 0) res.iadd(p);
        return res;
    };
    BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0;
        // Remove common factor of two
        for(var shift = 0; a.isEven() && b.isEven(); shift++){
            a.iushrn(1);
            b.iushrn(1);
        }
        do {
            while(a.isEven())a.iushrn(1);
            while(b.isEven())b.iushrn(1);
            var r = a.cmp(b);
            if (r < 0) {
                // Swap `a` and `b` to make `a` always bigger than `b`
                var t = a;
                a = b;
                b = t;
            } else if (r === 0 || b.cmpn(1) === 0) break;
            a.isub(b);
        }while (true)
        return b.iushln(shift);
    };
    // Invert number in the field F(num)
    BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
    };
    BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
    };
    BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
    };
    // And first word and num
    BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
    };
    // Increment at the bit position in-line
    BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === 'number');
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) {
            this._expand(s + 1);
            this.words[s] |= q;
            return this;
        }
        // Add bit and propagate, if needed
        var carry = q;
        for(var i = s; carry !== 0 && i < this.length; i++){
            var w = this.words[i] | 0;
            w += carry;
            carry = w >>> 26;
            w &= 67108863;
            this.words[i] = w;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return this;
    };
    BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
    };
    BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this._strip();
        var res;
        if (this.length > 1) res = 1;
        else {
            if (negative) num = -num;
            assert(num <= 67108863, 'Number is too big');
            var w = this.words[0] | 0;
            res = w === num ? 0 : w < num ? -1 : 1;
        }
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`
    BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Unsigned comparison
    BN.prototype.ucmp = function ucmp(num) {
        // At this point both numbers have the same sign
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var a = this.words[i] | 0;
            var b = num.words[i] | 0;
            if (a === b) continue;
            if (a < b) res = -1;
            else if (a > b) res = 1;
            break;
        }
        return res;
    };
    BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
    };
    BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
    };
    BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
    };
    BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
    };
    BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
    };
    BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
    };
    BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
    };
    BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
    };
    BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
    };
    BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
    };
    //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //
    BN.red = function red(num) {
        return new Red(num);
    };
    BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        assert(this.negative === 0, 'red works only with positives');
        return ctx.convertTo(this)._forceRed(ctx);
    };
    BN.prototype.fromRed = function fromRed() {
        assert(this.red, 'fromRed works only with numbers in reduction context');
        return this.red.convertFrom(this);
    };
    BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
    };
    BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        return this._forceRed(ctx);
    };
    BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, 'redAdd works only with red numbers');
        return this.red.add(this, num);
    };
    BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, 'redIAdd works only with red numbers');
        return this.red.iadd(this, num);
    };
    BN.prototype.redSub = function redSub(num) {
        assert(this.red, 'redSub works only with red numbers');
        return this.red.sub(this, num);
    };
    BN.prototype.redISub = function redISub(num) {
        assert(this.red, 'redISub works only with red numbers');
        return this.red.isub(this, num);
    };
    BN.prototype.redShl = function redShl(num) {
        assert(this.red, 'redShl works only with red numbers');
        return this.red.shl(this, num);
    };
    BN.prototype.redMul = function redMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.mul(this, num);
    };
    BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.imul(this, num);
    };
    BN.prototype.redSqr = function redSqr() {
        assert(this.red, 'redSqr works only with red numbers');
        this.red._verify1(this);
        return this.red.sqr(this);
    };
    BN.prototype.redISqr = function redISqr() {
        assert(this.red, 'redISqr works only with red numbers');
        this.red._verify1(this);
        return this.red.isqr(this);
    };
    // Square root over p
    BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, 'redSqrt works only with red numbers');
        this.red._verify1(this);
        return this.red.sqrt(this);
    };
    BN.prototype.redInvm = function redInvm() {
        assert(this.red, 'redInvm works only with red numbers');
        this.red._verify1(this);
        return this.red.invm(this);
    };
    // Return negative clone of `this` % `red modulo`
    BN.prototype.redNeg = function redNeg() {
        assert(this.red, 'redNeg works only with red numbers');
        this.red._verify1(this);
        return this.red.neg(this);
    };
    BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, 'redPow(normalNum)');
        this.red._verify1(this);
        return this.red.pow(this, num);
    };
    // Prime numbers with efficient reduction
    var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    // Pseudo-Mersenne prime
    function MPrime(name, p) {
        // P = 2 ^ N - K
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        var r = num;
        var rlen;
        do {
            this.split(r, this.tmp);
            r = this.imulK(r);
            r = r.iadd(this.tmp);
            rlen = r.bitLength();
        }while (rlen > this.n)
        var cmp1 = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp1 === 0) {
            r.words[0] = 0;
            r.length = 1;
        } else if (cmp1 > 0) r.isub(this.p);
        else if (r.strip !== undefined) // r is a BN v4 instance
        r.strip();
        else // r is a BN v5 instance
        r._strip();
        return r;
    };
    MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
    };
    function K256() {
        MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    inherits(K256, MPrime);
    K256.prototype.split = function split1(input, output) {
        // 256 = 9 * 26 + 22
        var mask = 4194303;
        var outLen = Math.min(input.length, 9);
        for(var i = 0; i < outLen; i++)output.words[i] = input.words[i];
        output.length = outLen;
        if (input.length <= 9) {
            input.words[0] = 0;
            input.length = 1;
            return;
        }
        // Shift by 9 limbs
        var prev = input.words[9];
        output.words[output.length++] = prev & mask;
        for(i = 10; i < input.length; i++){
            var next = input.words[i] | 0;
            input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
            prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) input.length -= 10;
        else input.length -= 9;
    };
    K256.prototype.imulK = function imulK1(num) {
        // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
        var lo = 0;
        for(var i = 0; i < num.length; i++){
            var w = num.words[i] | 0;
            lo += w * 977;
            num.words[i] = lo & 67108863;
            lo = w * 64 + (lo / 67108864 | 0);
        }
        // Fast length reduction
        if (num.words[num.length - 1] === 0) {
            num.length--;
            if (num.words[num.length - 1] === 0) num.length--;
        }
        return num;
    };
    function P224() {
        MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    inherits(P224, MPrime);
    function P192() {
        MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    inherits(P192, MPrime);
    function P25519() {
        // 2 ^ 255 - 19
        MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    inherits(P25519, MPrime);
    P25519.prototype.imulK = function imulK2(num) {
        // K = 0x13
        var carry = 0;
        for(var i = 0; i < num.length; i++){
            var hi = (num.words[i] | 0) * 19 + carry;
            var lo = hi & 67108863;
            hi >>>= 26;
            num.words[i] = lo;
            carry = hi;
        }
        if (carry !== 0) num.words[num.length++] = carry;
        return num;
    };
    // Exported mostly for testing purposes, use plain name instead
    BN._prime = function prime(name) {
        // Cached version of prime
        if (primes[name]) return primes[name];
        var prime;
        if (name === 'k256') prime = new K256();
        else if (name === 'p224') prime = new P224();
        else if (name === 'p192') prime = new P192();
        else if (name === 'p25519') prime = new P25519();
        else throw new Error('Unknown prime ' + name);
        primes[name] = prime;
        return prime;
    };
    //
    // Base reduction engine
    //
    function Red(m) {
        if (typeof m === 'string') {
            var prime1 = BN._prime(m);
            this.m = prime1.p;
            this.prime = prime1;
        } else {
            assert(m.gtn(1), 'modulus must be greater than 1');
            this.m = m;
            this.prime = null;
        }
    }
    Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, 'red works only with positives');
        assert(a.red, 'red works only with red numbers');
    };
    Red.prototype._verify2 = function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, 'red works only with positives');
        assert(a.red && a.red === b.red, 'red works only with red numbers');
    };
    Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        move(a, a.umod(this.m)._forceRed(this));
        return a;
    };
    Red.prototype.neg = function neg1(a) {
        if (a.isZero()) return a.clone();
        return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add1(a, b) {
        this._verify2(a, b);
        var res = a.add(b);
        if (res.cmp(this.m) >= 0) res.isub(this.m);
        return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd1(a, b) {
        this._verify2(a, b);
        var res = a.iadd(b);
        if (res.cmp(this.m) >= 0) res.isub(this.m);
        return res;
    };
    Red.prototype.sub = function sub1(a, b) {
        this._verify2(a, b);
        var res = a.sub(b);
        if (res.cmpn(0) < 0) res.iadd(this.m);
        return res._forceRed(this);
    };
    Red.prototype.isub = function isub1(a, b) {
        this._verify2(a, b);
        var res = a.isub(b);
        if (res.cmpn(0) < 0) res.iadd(this.m);
        return res;
    };
    Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul1(a, b) {
        this._verify2(a, b);
        return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul1(a, b) {
        this._verify2(a, b);
        return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr1(a) {
        return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr1(a) {
        return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        // Fast case
        if (mod3 === 3) {
            var pow1 = this.m.add(new BN(1)).iushrn(2);
            return this.pow(a, pow1);
        }
        // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)
        var q = this.m.subn(1);
        var s = 0;
        while(!q.isZero() && q.andln(1) === 0){
            s++;
            q.iushrn(1);
        }
        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.
        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);
        while(this.pow(z, lpow).cmp(nOne) !== 0)z.redIAdd(nOne);
        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;
        while(t.cmp(one) !== 0){
            var tmp = t;
            for(var i = 0; tmp.cmp(one) !== 0; i++)tmp = tmp.redSqr();
            assert(i < m);
            var b = this.pow(c, new BN(1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
        }
        return r;
    };
    Red.prototype.invm = function invm1(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
        } else return this.imod(inv);
    };
    Red.prototype.pow = function pow2(a, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;
        for(var i = 2; i < wnd.length; i++)wnd[i] = this.mul(wnd[i - 1], a);
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) start = 26;
        for(i = num.length - 1; i >= 0; i--){
            var word = num.words[i];
            for(var j = start - 1; j >= 0; j--){
                var bit = word >> j & 1;
                if (res !== wnd[0]) res = this.sqr(res);
                if (bit === 0 && current === 0) {
                    currentLen = 0;
                    continue;
                }
                current <<= 1;
                current |= bit;
                currentLen++;
                if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                res = this.mul(res, wnd[current]);
                currentLen = 0;
                current = 0;
            }
            start = 26;
        }
        return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
    };
    //
    // Montgomery method engine
    //
    BN.mont = function mont(num) {
        return new Mont(num);
    };
    function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) this.shift += 26 - this.shift % 26;
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
    }
    inherits(Mont, Red);
    Mont.prototype.convertTo = function convertTo1(num) {
        return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom1(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
    };
    Mont.prototype.imul = function imul2(a, b) {
        if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
        }
        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) res = u.isub(this.m);
        else if (u.cmpn(0) < 0) res = u.iadd(this.m);
        return res._forceRed(this);
    };
    Mont.prototype.mul = function mul2(a, b) {
        if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) res = u.isub(this.m);
        else if (u.cmpn(0) < 0) res = u.iadd(this.m);
        return res._forceRed(this);
    };
    Mont.prototype.invm = function invm2(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
    };
})(typeof module === 'undefined' || module, this);

},{"buffer":"8VSUO"}],"8VSUO":[function(require,module,exports) {
"use strict";

},{}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gysVZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Chain", ()=>Chain
);
class Chain {
    constructor(name, coingeckoId, symbol, threshold){
        this.name = name;
        this.coingeckoId = coingeckoId;
        this.symbol = symbol;
        this.threshold = threshold;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8iRPt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _helpers = require("./helpers");
var _chain = require("./chain");
const terra = new _chain.Chain("terra", "terra-luna", "LUNA", 1 / 3);
terra["compute"] = async function() {
    // LUNA price
    const price = (await _axiosDefault.default.get("https://api.coingecko.com/api/v3/simple/price?ids=terra-luna&vs_currencies=usd")).data[this.coingeckoId].usd;
    // list of validators
    const validators = (await _axiosDefault.default.get("https://lcd.terra.dev/staking/validators")).data.result;
    // the bonded amount of each validator
    const bonds = validators.map((validator)=>{
        return _helpers.parseBigInt(validator.tokens, 6); // LUNA has 6 decimal places
    });
    // terra can be halted by 33%+1 validators
    const { totalBond , cummBond , coeff  } = _helpers.findCoeff(bonds, 1 / 3);
    const bribe = cummBond * price;
    console.log(this.name);
    console.log(`totalBond = ${_helpers.formatInteger(totalBond)} ${this.symbol}`);
    console.log(`coeff = ${coeff}`);
    console.log(`bribe = ${_helpers.formatMoney(bribe, 0)}`);
    console.log(`price = ${_helpers.formatMoney(price, 2)}`);
    return {
        name: this.name,
        symbol: this.symbol,
        threshold: this.threshold,
        price,
        totalBond,
        coeff,
        bribe
    };
};
exports.default = terra;

},{"axios":"iYoWk","./helpers":"cllzS","./chain":"gysVZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JrXY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _helpers = require("./helpers");
var _chain = require("./chain");
const thorchain = new _chain.Chain("thorchain", "thorchain", "RUNE", 1 / 3);
thorchain["compute"] = async function() {
    // RUNE price
    const price = (await _axiosDefault.default.get("https://api.coingecko.com/api/v3/simple/price?ids=thorchain&vs_currencies=usd")).data[this.coingeckoId].usd;
    // list of nodes
    const nodes = (await _axiosDefault.default.get("https://midgard.thorchain.info/v2/thorchain/nodes")).data;
    // filter off inactive nodes
    const activeNodes = nodes.filter((node)=>{
        return node.status === "Active";
    });
    // the bonded amount of each active node
    const bonds = activeNodes.map((node)=>{
        return _helpers.parseBigInt(node.bond, 8); // RUNE has 8 decimal places
    });
    // thorchain can be halted by 33%+1 validators
    const { totalBond , cummBond , coeff  } = _helpers.findCoeff(bonds, 1 / 3);
    const bribe = cummBond * price;
    console.log(this.name);
    console.log(`totalBond = ${_helpers.formatInteger(totalBond)} ${this.symbol}`);
    console.log(`coeff = ${coeff}`);
    console.log(`bribe = ${_helpers.formatMoney(bribe, 0)}`);
    console.log(`price = ${_helpers.formatMoney(price, 2)}`);
    return {
        name: this.name,
        symbol: this.symbol,
        threshold: this.threshold,
        price,
        totalBond,
        coeff,
        bribe
    };
};
exports.default = thorchain;

},{"axios":"iYoWk","./helpers":"cllzS","./chain":"gysVZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["8uBhv","4aleK"], "4aleK", "parcelRequiree455")

//# sourceMappingURL=index.b31310b1.js.map
