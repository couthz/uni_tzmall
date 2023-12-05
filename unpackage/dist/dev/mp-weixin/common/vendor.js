(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "",
    appName: "yamikejimall4j",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.98",
    uniRuntimeVersion: "3.98",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "",
      appName: "yamikejimall4j",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"yamikejimall4j","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 230:
/*!********************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/utils/crypto.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encrypt = encrypt;
var _cryptoJs = _interopRequireDefault(__webpack_require__(/*! crypto-js */ 231));
// 加密
var keyStr = '-mall4j-password'; // 解密用的key
function encrypt(word) {
  var time = Date.now();
  var key = _cryptoJs.default.enc.Utf8.parse(keyStr);
  var srcs = _cryptoJs.default.enc.Utf8.parse(time + word); // 加密方式: 时间戳 + 密文
  var encrypted = _cryptoJs.default.AES.encrypt(srcs, key, {
    mode: _cryptoJs.default.mode.ECB,
    padding: _cryptoJs.default.pad.Pkcs7
  });
  return encrypted.toString();
}

/***/ }),

/***/ 231:
/*!************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./x64-core */ 234), __webpack_require__(/*! ./lib-typedarrays */ 235), __webpack_require__(/*! ./enc-utf16 */ 236), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./enc-base64url */ 238), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./sha1 */ 240), __webpack_require__(/*! ./sha256 */ 241), __webpack_require__(/*! ./sha224 */ 242), __webpack_require__(/*! ./sha512 */ 243), __webpack_require__(/*! ./sha384 */ 244), __webpack_require__(/*! ./sha3 */ 245), __webpack_require__(/*! ./ripemd160 */ 246), __webpack_require__(/*! ./hmac */ 247), __webpack_require__(/*! ./pbkdf2 */ 248), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250), __webpack_require__(/*! ./mode-cfb */ 251), __webpack_require__(/*! ./mode-ctr */ 252), __webpack_require__(/*! ./mode-ctr-gladman */ 253), __webpack_require__(/*! ./mode-ofb */ 254), __webpack_require__(/*! ./mode-ecb */ 255), __webpack_require__(/*! ./pad-ansix923 */ 256), __webpack_require__(/*! ./pad-iso10126 */ 257), __webpack_require__(/*! ./pad-iso97971 */ 258), __webpack_require__(/*! ./pad-zeropadding */ 259), __webpack_require__(/*! ./pad-nopadding */ 260), __webpack_require__(/*! ./format-hex */ 261), __webpack_require__(/*! ./aes */ 262), __webpack_require__(/*! ./tripledes */ 263), __webpack_require__(/*! ./rc4 */ 264), __webpack_require__(/*! ./rabbit */ 265), __webpack_require__(/*! ./rabbit-legacy */ 266));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./x64-core */ 234), __webpack_require__(/*! ./lib-typedarrays */ 235), __webpack_require__(/*! ./enc-utf16 */ 236), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./enc-base64url */ 238), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./sha1 */ 240), __webpack_require__(/*! ./sha256 */ 241), __webpack_require__(/*! ./sha224 */ 242), __webpack_require__(/*! ./sha512 */ 243), __webpack_require__(/*! ./sha384 */ 244), __webpack_require__(/*! ./sha3 */ 245), __webpack_require__(/*! ./ripemd160 */ 246), __webpack_require__(/*! ./hmac */ 247), __webpack_require__(/*! ./pbkdf2 */ 248), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250), __webpack_require__(/*! ./mode-cfb */ 251), __webpack_require__(/*! ./mode-ctr */ 252), __webpack_require__(/*! ./mode-ctr-gladman */ 253), __webpack_require__(/*! ./mode-ofb */ 254), __webpack_require__(/*! ./mode-ecb */ 255), __webpack_require__(/*! ./pad-ansix923 */ 256), __webpack_require__(/*! ./pad-iso10126 */ 257), __webpack_require__(/*! ./pad-iso97971 */ 258), __webpack_require__(/*! ./pad-zeropadding */ 259), __webpack_require__(/*! ./pad-nopadding */ 260), __webpack_require__(/*! ./format-hex */ 261), __webpack_require__(/*! ./aes */ 262), __webpack_require__(/*! ./tripledes */ 263), __webpack_require__(/*! ./rc4 */ 264), __webpack_require__(/*! ./rabbit */ 265), __webpack_require__(/*! ./rabbit-legacy */ 266)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  return CryptoJS;
});

/***/ }),

/***/ 232:
/*!***********************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/core.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory();
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /*globals window, global, require*/

  /**
   * CryptoJS core components.
   */
  var CryptoJS = CryptoJS || function (Math, undefined) {
    var crypto;

    // Native crypto from window (Browser)
    if (typeof window !== 'undefined' && window.crypto) {
      crypto = window.crypto;
    }

    // Native crypto in web worker (Browser)
    if (typeof self !== 'undefined' && self.crypto) {
      crypto = self.crypto;
    }

    // Native crypto from worker
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      crypto = globalThis.crypto;
    }

    // Native (experimental IE 11) crypto from window (Browser)
    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
      crypto = window.msCrypto;
    }

    // Native crypto from global (NodeJS)
    if (!crypto && typeof global !== 'undefined' && global.crypto) {
      crypto = global.crypto;
    }

    // Native crypto import via require (NodeJS)
    if (!crypto && "function" === 'function') {
      try {
        crypto = __webpack_require__(/*! crypto */ 233);
      } catch (err) {}
    }

    /*
     * Cryptographically secure pseudorandom number generator
     *
     * As Math.random() is cryptographically not safe to use
     */
    var cryptoSecureRandomInt = function cryptoSecureRandomInt() {
      if (crypto) {
        // Use getRandomValues method (Browser)
        if (typeof crypto.getRandomValues === 'function') {
          try {
            return crypto.getRandomValues(new Uint32Array(1))[0];
          } catch (err) {}
        }

        // Use randomBytes method (NodeJS)
        if (typeof crypto.randomBytes === 'function') {
          try {
            return crypto.randomBytes(4).readInt32LE();
          } catch (err) {}
        }
      }
      throw new Error('Native crypto module could not be used to get secure random number.');
    };

    /*
     * Local polyfill of Object.create
      */
    var create = Object.create || function () {
      function F() {}
      return function (obj) {
        var subtype;
        F.prototype = obj;
        subtype = new F();
        F.prototype = null;
        return subtype;
      };
    }();

    /**
     * CryptoJS namespace.
     */
    var C = {};

    /**
     * Library namespace.
     */
    var C_lib = C.lib = {};

    /**
     * Base object for prototypal inheritance.
     */
    var Base = C_lib.Base = function () {
      return {
        /**
         * Creates a new object that inherits from this object.
         *
         * @param {Object} overrides Properties to copy into the new object.
         *
         * @return {Object} The new object.
         *
         * @static
         *
         * @example
         *
         *     var MyType = CryptoJS.lib.Base.extend({
         *         field: 'value',
         *
         *         method: function () {
         *         }
         *     });
         */
        extend: function extend(overrides) {
          // Spawn
          var subtype = create(this);

          // Augment
          if (overrides) {
            subtype.mixIn(overrides);
          }

          // Create default initializer
          if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
            subtype.init = function () {
              subtype.$super.init.apply(this, arguments);
            };
          }

          // Initializer's prototype is the subtype object
          subtype.init.prototype = subtype;

          // Reference supertype
          subtype.$super = this;
          return subtype;
        },
        /**
         * Extends this object and runs the init method.
         * Arguments to create() will be passed to init().
         *
         * @return {Object} The new object.
         *
         * @static
         *
         * @example
         *
         *     var instance = MyType.create();
         */
        create: function create() {
          var instance = this.extend();
          instance.init.apply(instance, arguments);
          return instance;
        },
        /**
         * Initializes a newly created object.
         * Override this method to add some logic when your objects are created.
         *
         * @example
         *
         *     var MyType = CryptoJS.lib.Base.extend({
         *         init: function () {
         *             // ...
         *         }
         *     });
         */
        init: function init() {},
        /**
         * Copies properties into this object.
         *
         * @param {Object} properties The properties to mix in.
         *
         * @example
         *
         *     MyType.mixIn({
         *         field: 'value'
         *     });
         */
        mixIn: function mixIn(properties) {
          for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
              this[propertyName] = properties[propertyName];
            }
          }

          // IE won't copy toString using the loop above
          if (properties.hasOwnProperty('toString')) {
            this.toString = properties.toString;
          }
        },
        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = instance.clone();
         */
        clone: function clone() {
          return this.init.prototype.extend(this);
        }
      };
    }();

    /**
     * An array of 32-bit words.
     *
     * @property {Array} words The array of 32-bit words.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var WordArray = C_lib.WordArray = Base.extend({
      /**
       * Initializes a newly created word array.
       *
       * @param {Array} words (Optional) An array of 32-bit words.
       * @param {number} sigBytes (Optional) The number of significant bytes in the words.
       *
       * @example
       *
       *     var wordArray = CryptoJS.lib.WordArray.create();
       *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
       *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
       */
      init: function init(words, sigBytes) {
        words = this.words = words || [];
        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 4;
        }
      },
      /**
       * Converts this word array to a string.
       *
       * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
       *
       * @return {string} The stringified word array.
       *
       * @example
       *
       *     var string = wordArray + '';
       *     var string = wordArray.toString();
       *     var string = wordArray.toString(CryptoJS.enc.Utf8);
       */
      toString: function toString(encoder) {
        return (encoder || Hex).stringify(this);
      },
      /**
       * Concatenates a word array to this word array.
       *
       * @param {WordArray} wordArray The word array to append.
       *
       * @return {WordArray} This word array.
       *
       * @example
       *
       *     wordArray1.concat(wordArray2);
       */
      concat: function concat(wordArray) {
        // Shortcuts
        var thisWords = this.words;
        var thatWords = wordArray.words;
        var thisSigBytes = this.sigBytes;
        var thatSigBytes = wordArray.sigBytes;

        // Clamp excess bits
        this.clamp();

        // Concat
        if (thisSigBytes % 4) {
          // Copy one byte at a time
          for (var i = 0; i < thatSigBytes; i++) {
            var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
          }
        } else {
          // Copy one word at a time
          for (var j = 0; j < thatSigBytes; j += 4) {
            thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
          }
        }
        this.sigBytes += thatSigBytes;

        // Chainable
        return this;
      },
      /**
       * Removes insignificant bits.
       *
       * @example
       *
       *     wordArray.clamp();
       */
      clamp: function clamp() {
        // Shortcuts
        var words = this.words;
        var sigBytes = this.sigBytes;

        // Clamp
        words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
        words.length = Math.ceil(sigBytes / 4);
      },
      /**
       * Creates a copy of this word array.
       *
       * @return {WordArray} The clone.
       *
       * @example
       *
       *     var clone = wordArray.clone();
       */
      clone: function clone() {
        var clone = Base.clone.call(this);
        clone.words = this.words.slice(0);
        return clone;
      },
      /**
       * Creates a word array filled with random bytes.
       *
       * @param {number} nBytes The number of random bytes to generate.
       *
       * @return {WordArray} The random word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.lib.WordArray.random(16);
       */
      random: function random(nBytes) {
        var words = [];
        for (var i = 0; i < nBytes; i += 4) {
          words.push(cryptoSecureRandomInt());
        }
        return new WordArray.init(words, nBytes);
      }
    });

    /**
     * Encoder namespace.
     */
    var C_enc = C.enc = {};

    /**
     * Hex encoding strategy.
     */
    var Hex = C_enc.Hex = {
      /**
       * Converts a word array to a hex string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The hex string.
       *
       * @static
       *
       * @example
       *
       *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var hexChars = [];
        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          hexChars.push((bite >>> 4).toString(16));
          hexChars.push((bite & 0x0f).toString(16));
        }
        return hexChars.join('');
      },
      /**
       * Converts a hex string to a word array.
       *
       * @param {string} hexStr The hex string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
       */
      parse: function parse(hexStr) {
        // Shortcut
        var hexStrLength = hexStr.length;

        // Convert
        var words = [];
        for (var i = 0; i < hexStrLength; i += 2) {
          words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
        }
        return new WordArray.init(words, hexStrLength / 2);
      }
    };

    /**
     * Latin1 encoding strategy.
     */
    var Latin1 = C_enc.Latin1 = {
      /**
       * Converts a word array to a Latin1 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The Latin1 string.
       *
       * @static
       *
       * @example
       *
       *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var latin1Chars = [];
        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          latin1Chars.push(String.fromCharCode(bite));
        }
        return latin1Chars.join('');
      },
      /**
       * Converts a Latin1 string to a word array.
       *
       * @param {string} latin1Str The Latin1 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
       */
      parse: function parse(latin1Str) {
        // Shortcut
        var latin1StrLength = latin1Str.length;

        // Convert
        var words = [];
        for (var i = 0; i < latin1StrLength; i++) {
          words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
        }
        return new WordArray.init(words, latin1StrLength);
      }
    };

    /**
     * UTF-8 encoding strategy.
     */
    var Utf8 = C_enc.Utf8 = {
      /**
       * Converts a word array to a UTF-8 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The UTF-8 string.
       *
       * @static
       *
       * @example
       *
       *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        try {
          return decodeURIComponent(escape(Latin1.stringify(wordArray)));
        } catch (e) {
          throw new Error('Malformed UTF-8 data');
        }
      },
      /**
       * Converts a UTF-8 string to a word array.
       *
       * @param {string} utf8Str The UTF-8 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
       */
      parse: function parse(utf8Str) {
        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
      }
    };

    /**
     * Abstract buffered block algorithm template.
     *
     * The property blockSize must be implemented in a concrete subtype.
     *
     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
      /**
       * Resets this block algorithm's data buffer to its initial state.
       *
       * @example
       *
       *     bufferedBlockAlgorithm.reset();
       */
      reset: function reset() {
        // Initial values
        this._data = new WordArray.init();
        this._nDataBytes = 0;
      },
      /**
       * Adds new data to this block algorithm's buffer.
       *
       * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
       *
       * @example
       *
       *     bufferedBlockAlgorithm._append('data');
       *     bufferedBlockAlgorithm._append(wordArray);
       */
      _append: function _append(data) {
        // Convert string to WordArray, else assume WordArray already
        if (typeof data == 'string') {
          data = Utf8.parse(data);
        }

        // Append
        this._data.concat(data);
        this._nDataBytes += data.sigBytes;
      },
      /**
       * Processes available data blocks.
       *
       * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
       *
       * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
       *
       * @return {WordArray} The processed data.
       *
       * @example
       *
       *     var processedData = bufferedBlockAlgorithm._process();
       *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
       */
      _process: function _process(doFlush) {
        var processedWords;

        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var dataSigBytes = data.sigBytes;
        var blockSize = this.blockSize;
        var blockSizeBytes = blockSize * 4;

        // Count blocks ready
        var nBlocksReady = dataSigBytes / blockSizeBytes;
        if (doFlush) {
          // Round up to include partial blocks
          nBlocksReady = Math.ceil(nBlocksReady);
        } else {
          // Round down to include only full blocks,
          // less the number of blocks that must remain in the buffer
          nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
        }

        // Count words ready
        var nWordsReady = nBlocksReady * blockSize;

        // Count bytes ready
        var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

        // Process blocks
        if (nWordsReady) {
          for (var offset = 0; offset < nWordsReady; offset += blockSize) {
            // Perform concrete-algorithm logic
            this._doProcessBlock(dataWords, offset);
          }

          // Remove processed words
          processedWords = dataWords.splice(0, nWordsReady);
          data.sigBytes -= nBytesReady;
        }

        // Return processed words
        return new WordArray.init(processedWords, nBytesReady);
      },
      /**
       * Creates a copy of this object.
       *
       * @return {Object} The clone.
       *
       * @example
       *
       *     var clone = bufferedBlockAlgorithm.clone();
       */
      clone: function clone() {
        var clone = Base.clone.call(this);
        clone._data = this._data.clone();
        return clone;
      },
      _minBufferSize: 0
    });

    /**
     * Abstract hasher template.
     *
     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */
    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
      /**
       * Configuration options.
       */
      cfg: Base.extend(),
      /**
       * Initializes a newly created hasher.
       *
       * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
       *
       * @example
       *
       *     var hasher = CryptoJS.algo.SHA256.create();
       */
      init: function init(cfg) {
        // Apply config defaults
        this.cfg = this.cfg.extend(cfg);

        // Set initial values
        this.reset();
      },
      /**
       * Resets this hasher to its initial state.
       *
       * @example
       *
       *     hasher.reset();
       */
      reset: function reset() {
        // Reset data buffer
        BufferedBlockAlgorithm.reset.call(this);

        // Perform concrete-hasher logic
        this._doReset();
      },
      /**
       * Updates this hasher with a message.
       *
       * @param {WordArray|string} messageUpdate The message to append.
       *
       * @return {Hasher} This hasher.
       *
       * @example
       *
       *     hasher.update('message');
       *     hasher.update(wordArray);
       */
      update: function update(messageUpdate) {
        // Append
        this._append(messageUpdate);

        // Update the hash
        this._process();

        // Chainable
        return this;
      },
      /**
       * Finalizes the hash computation.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} messageUpdate (Optional) A final message update.
       *
       * @return {WordArray} The hash.
       *
       * @example
       *
       *     var hash = hasher.finalize();
       *     var hash = hasher.finalize('message');
       *     var hash = hasher.finalize(wordArray);
       */
      finalize: function finalize(messageUpdate) {
        // Final message update
        if (messageUpdate) {
          this._append(messageUpdate);
        }

        // Perform concrete-hasher logic
        var hash = this._doFinalize();
        return hash;
      },
      blockSize: 512 / 32,
      /**
       * Creates a shortcut function to a hasher's object interface.
       *
       * @param {Hasher} hasher The hasher to create a helper for.
       *
       * @return {Function} The shortcut function.
       *
       * @static
       *
       * @example
       *
       *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
       */
      _createHelper: function _createHelper(hasher) {
        return function (message, cfg) {
          return new hasher.init(cfg).finalize(message);
        };
      },
      /**
       * Creates a shortcut function to the HMAC's object interface.
       *
       * @param {Hasher} hasher The hasher to use in this HMAC helper.
       *
       * @return {Function} The shortcut function.
       *
       * @static
       *
       * @example
       *
       *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
       */
      _createHmacHelper: function _createHmacHelper(hasher) {
        return function (message, key) {
          return new C_algo.HMAC.init(hasher, key).finalize(message);
        };
      }
    });

    /**
     * Algorithm namespace.
     */
    var C_algo = C.algo = {};
    return C;
  }(Math);
  return CryptoJS;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 233:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 234:
/*!***************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/x64-core.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var X32WordArray = C_lib.WordArray;

    /**
     * x64 namespace.
     */
    var C_x64 = C.x64 = {};

    /**
     * A 64-bit word.
     */
    var X64Word = C_x64.Word = Base.extend({
      /**
       * Initializes a newly created 64-bit word.
       *
       * @param {number} high The high 32 bits.
       * @param {number} low The low 32 bits.
       *
       * @example
       *
       *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
       */
      init: function init(high, low) {
        this.high = high;
        this.low = low;
      }

      /**
       * Bitwise NOTs this word.
       *
       * @return {X64Word} A new x64-Word object after negating.
       *
       * @example
       *
       *     var negated = x64Word.not();
       */
      // not: function () {
      // var high = ~this.high;
      // var low = ~this.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise ANDs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to AND with this word.
       *
       * @return {X64Word} A new x64-Word object after ANDing.
       *
       * @example
       *
       *     var anded = x64Word.and(anotherX64Word);
       */
      // and: function (word) {
      // var high = this.high & word.high;
      // var low = this.low & word.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise ORs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to OR with this word.
       *
       * @return {X64Word} A new x64-Word object after ORing.
       *
       * @example
       *
       *     var ored = x64Word.or(anotherX64Word);
       */
      // or: function (word) {
      // var high = this.high | word.high;
      // var low = this.low | word.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise XORs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to XOR with this word.
       *
       * @return {X64Word} A new x64-Word object after XORing.
       *
       * @example
       *
       *     var xored = x64Word.xor(anotherX64Word);
       */
      // xor: function (word) {
      // var high = this.high ^ word.high;
      // var low = this.low ^ word.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Shifts this word n bits to the left.
       *
       * @param {number} n The number of bits to shift.
       *
       * @return {X64Word} A new x64-Word object after shifting.
       *
       * @example
       *
       *     var shifted = x64Word.shiftL(25);
       */
      // shiftL: function (n) {
      // if (n < 32) {
      // var high = (this.high << n) | (this.low >>> (32 - n));
      // var low = this.low << n;
      // } else {
      // var high = this.low << (n - 32);
      // var low = 0;
      // }

      // return X64Word.create(high, low);
      // },

      /**
       * Shifts this word n bits to the right.
       *
       * @param {number} n The number of bits to shift.
       *
       * @return {X64Word} A new x64-Word object after shifting.
       *
       * @example
       *
       *     var shifted = x64Word.shiftR(7);
       */
      // shiftR: function (n) {
      // if (n < 32) {
      // var low = (this.low >>> n) | (this.high << (32 - n));
      // var high = this.high >>> n;
      // } else {
      // var low = this.high >>> (n - 32);
      // var high = 0;
      // }

      // return X64Word.create(high, low);
      // },

      /**
       * Rotates this word n bits to the left.
       *
       * @param {number} n The number of bits to rotate.
       *
       * @return {X64Word} A new x64-Word object after rotating.
       *
       * @example
       *
       *     var rotated = x64Word.rotL(25);
       */
      // rotL: function (n) {
      // return this.shiftL(n).or(this.shiftR(64 - n));
      // },

      /**
       * Rotates this word n bits to the right.
       *
       * @param {number} n The number of bits to rotate.
       *
       * @return {X64Word} A new x64-Word object after rotating.
       *
       * @example
       *
       *     var rotated = x64Word.rotR(7);
       */
      // rotR: function (n) {
      // return this.shiftR(n).or(this.shiftL(64 - n));
      // },

      /**
       * Adds this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to add with this word.
       *
       * @return {X64Word} A new x64-Word object after adding.
       *
       * @example
       *
       *     var added = x64Word.add(anotherX64Word);
       */
      // add: function (word) {
      // var low = (this.low + word.low) | 0;
      // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
      // var high = (this.high + word.high + carry) | 0;

      // return X64Word.create(high, low);
      // }
    });

    /**
     * An array of 64-bit words.
     *
     * @property {Array} words The array of CryptoJS.x64.Word objects.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var X64WordArray = C_x64.WordArray = Base.extend({
      /**
       * Initializes a newly created word array.
       *
       * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
       * @param {number} sigBytes (Optional) The number of significant bytes in the words.
       *
       * @example
       *
       *     var wordArray = CryptoJS.x64.WordArray.create();
       *
       *     var wordArray = CryptoJS.x64.WordArray.create([
       *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
       *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
       *     ]);
       *
       *     var wordArray = CryptoJS.x64.WordArray.create([
       *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
       *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
       *     ], 10);
       */
      init: function init(words, sigBytes) {
        words = this.words = words || [];
        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 8;
        }
      },
      /**
       * Converts this 64-bit word array to a 32-bit word array.
       *
       * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
       *
       * @example
       *
       *     var x32WordArray = x64WordArray.toX32();
       */
      toX32: function toX32() {
        // Shortcuts
        var x64Words = this.words;
        var x64WordsLength = x64Words.length;

        // Convert
        var x32Words = [];
        for (var i = 0; i < x64WordsLength; i++) {
          var x64Word = x64Words[i];
          x32Words.push(x64Word.high);
          x32Words.push(x64Word.low);
        }
        return X32WordArray.create(x32Words, this.sigBytes);
      },
      /**
       * Creates a copy of this word array.
       *
       * @return {X64WordArray} The clone.
       *
       * @example
       *
       *     var clone = x64WordArray.clone();
       */
      clone: function clone() {
        var clone = Base.clone.call(this);

        // Clone "words" array
        var words = clone.words = this.words.slice(0);

        // Clone each X64Word object
        var wordsLength = words.length;
        for (var i = 0; i < wordsLength; i++) {
          words[i] = words[i].clone();
        }
        return clone;
      }
    });
  })();
  return CryptoJS;
});

/***/ }),

/***/ 235:
/*!**********************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/lib-typedarrays.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Check if typed arrays are supported
    if (typeof ArrayBuffer != 'function') {
      return;
    }

    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;

    // Reference original init
    var superInit = WordArray.init;

    // Augment WordArray.init to handle typed arrays
    var subInit = WordArray.init = function (typedArray) {
      // Convert buffers to uint8
      if (typedArray instanceof ArrayBuffer) {
        typedArray = new Uint8Array(typedArray);
      }

      // Convert other array views to uint8
      if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
        typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
      }

      // Handle Uint8Array
      if (typedArray instanceof Uint8Array) {
        // Shortcut
        var typedArrayByteLength = typedArray.byteLength;

        // Extract bytes
        var words = [];
        for (var i = 0; i < typedArrayByteLength; i++) {
          words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
        }

        // Initialize this word array
        superInit.call(this, words, typedArrayByteLength);
      } else {
        // Else call normal init
        superInit.apply(this, arguments);
      }
    };
    subInit.prototype = WordArray;
  })();
  return CryptoJS.lib.WordArray;
});

/***/ }),

/***/ 236:
/*!****************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/enc-utf16.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * UTF-16 BE encoding strategy.
     */
    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
      /**
       * Converts a word array to a UTF-16 BE string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The UTF-16 BE string.
       *
       * @static
       *
       * @example
       *
       *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var utf16Chars = [];
        for (var i = 0; i < sigBytes; i += 2) {
          var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;
          utf16Chars.push(String.fromCharCode(codePoint));
        }
        return utf16Chars.join('');
      },
      /**
       * Converts a UTF-16 BE string to a word array.
       *
       * @param {string} utf16Str The UTF-16 BE string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
       */
      parse: function parse(utf16Str) {
        // Shortcut
        var utf16StrLength = utf16Str.length;

        // Convert
        var words = [];
        for (var i = 0; i < utf16StrLength; i++) {
          words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
        }
        return WordArray.create(words, utf16StrLength * 2);
      }
    };

    /**
     * UTF-16 LE encoding strategy.
     */
    C_enc.Utf16LE = {
      /**
       * Converts a word array to a UTF-16 LE string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The UTF-16 LE string.
       *
       * @static
       *
       * @example
       *
       *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var utf16Chars = [];
        for (var i = 0; i < sigBytes; i += 2) {
          var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);
          utf16Chars.push(String.fromCharCode(codePoint));
        }
        return utf16Chars.join('');
      },
      /**
       * Converts a UTF-16 LE string to a word array.
       *
       * @param {string} utf16Str The UTF-16 LE string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
       */
      parse: function parse(utf16Str) {
        // Shortcut
        var utf16StrLength = utf16Str.length;

        // Convert
        var words = [];
        for (var i = 0; i < utf16StrLength; i++) {
          words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
        }
        return WordArray.create(words, utf16StrLength * 2);
      }
    };
    function swapEndian(word) {
      return word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;
    }
  })();
  return CryptoJS.enc.Utf16;
});

/***/ }),

/***/ 237:
/*!*****************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/enc-base64.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * Base64 encoding strategy.
     */
    var Base64 = C_enc.Base64 = {
      /**
       * Converts a word array to a Base64 string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @return {string} The Base64 string.
       *
       * @static
       *
       * @example
       *
       *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = this._map;

        // Clamp excess bits
        wordArray.clamp();

        // Convert
        var base64Chars = [];
        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
          var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
          var triplet = byte1 << 16 | byte2 << 8 | byte3;
          for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
          }
        }

        // Add padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }
        return base64Chars.join('');
      },
      /**
       * Converts a Base64 string to a word array.
       *
       * @param {string} base64Str The Base64 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
       */
      parse: function parse(base64Str) {
        // Shortcuts
        var base64StrLength = base64Str.length;
        var map = this._map;
        var reverseMap = this._reverseMap;
        if (!reverseMap) {
          reverseMap = this._reverseMap = [];
          for (var j = 0; j < map.length; j++) {
            reverseMap[map.charCodeAt(j)] = j;
          }
        }

        // Ignore padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);
          if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
          }
        }

        // Convert
        return parseLoop(base64Str, base64StrLength, reverseMap);
      },
      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    };
    function parseLoop(base64Str, base64StrLength, reverseMap) {
      var words = [];
      var nBytes = 0;
      for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
          var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
          var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
          var bitsCombined = bits1 | bits2;
          words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
          nBytes++;
        }
      }
      return WordArray.create(words, nBytes);
    }
  })();
  return CryptoJS.enc.Base64;
});

/***/ }),

/***/ 238:
/*!********************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/enc-base64url.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * Base64url encoding strategy.
     */
    var Base64url = C_enc.Base64url = {
      /**
       * Converts a word array to a Base64url string.
       *
       * @param {WordArray} wordArray The word array.
       *
       * @param {boolean} urlSafe Whether to use url safe
       *
       * @return {string} The Base64url string.
       *
       * @static
       *
       * @example
       *
       *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
       */
      stringify: function stringify(wordArray) {
        var urlSafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = urlSafe ? this._safe_map : this._map;

        // Clamp excess bits
        wordArray.clamp();

        // Convert
        var base64Chars = [];
        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
          var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
          var triplet = byte1 << 16 | byte2 << 8 | byte3;
          for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
          }
        }

        // Add padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }
        return base64Chars.join('');
      },
      /**
       * Converts a Base64url string to a word array.
       *
       * @param {string} base64Str The Base64url string.
       *
       * @param {boolean} urlSafe Whether to use url safe
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
       */
      parse: function parse(base64Str) {
        var urlSafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        // Shortcuts
        var base64StrLength = base64Str.length;
        var map = urlSafe ? this._safe_map : this._map;
        var reverseMap = this._reverseMap;
        if (!reverseMap) {
          reverseMap = this._reverseMap = [];
          for (var j = 0; j < map.length; j++) {
            reverseMap[map.charCodeAt(j)] = j;
          }
        }

        // Ignore padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);
          if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
          }
        }

        // Convert
        return parseLoop(base64Str, base64StrLength, reverseMap);
      },
      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
    };
    function parseLoop(base64Str, base64StrLength, reverseMap) {
      var words = [];
      var nBytes = 0;
      for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
          var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
          var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
          var bitsCombined = bits1 | bits2;
          words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
          nBytes++;
        }
      }
      return WordArray.create(words, nBytes);
    }
  })();
  return CryptoJS.enc.Base64url;
});

/***/ }),

/***/ 239:
/*!**********************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/md5.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Constants table
    var T = [];

    // Compute constants
    (function () {
      for (var i = 0; i < 64; i++) {
        T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
      }
    })();

    /**
     * MD5 hash algorithm.
     */
    var MD5 = C_algo.MD5 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Swap endian
        for (var i = 0; i < 16; i++) {
          // Shortcuts
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];
          M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
        }

        // Shortcuts
        var H = this._hash.words;
        var M_offset_0 = M[offset + 0];
        var M_offset_1 = M[offset + 1];
        var M_offset_2 = M[offset + 2];
        var M_offset_3 = M[offset + 3];
        var M_offset_4 = M[offset + 4];
        var M_offset_5 = M[offset + 5];
        var M_offset_6 = M[offset + 6];
        var M_offset_7 = M[offset + 7];
        var M_offset_8 = M[offset + 8];
        var M_offset_9 = M[offset + 9];
        var M_offset_10 = M[offset + 10];
        var M_offset_11 = M[offset + 11];
        var M_offset_12 = M[offset + 12];
        var M_offset_13 = M[offset + 13];
        var M_offset_14 = M[offset + 14];
        var M_offset_15 = M[offset + 15];

        // Working varialbes
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];

        // Computation
        a = FF(a, b, c, d, M_offset_0, 7, T[0]);
        d = FF(d, a, b, c, M_offset_1, 12, T[1]);
        c = FF(c, d, a, b, M_offset_2, 17, T[2]);
        b = FF(b, c, d, a, M_offset_3, 22, T[3]);
        a = FF(a, b, c, d, M_offset_4, 7, T[4]);
        d = FF(d, a, b, c, M_offset_5, 12, T[5]);
        c = FF(c, d, a, b, M_offset_6, 17, T[6]);
        b = FF(b, c, d, a, M_offset_7, 22, T[7]);
        a = FF(a, b, c, d, M_offset_8, 7, T[8]);
        d = FF(d, a, b, c, M_offset_9, 12, T[9]);
        c = FF(c, d, a, b, M_offset_10, 17, T[10]);
        b = FF(b, c, d, a, M_offset_11, 22, T[11]);
        a = FF(a, b, c, d, M_offset_12, 7, T[12]);
        d = FF(d, a, b, c, M_offset_13, 12, T[13]);
        c = FF(c, d, a, b, M_offset_14, 17, T[14]);
        b = FF(b, c, d, a, M_offset_15, 22, T[15]);
        a = GG(a, b, c, d, M_offset_1, 5, T[16]);
        d = GG(d, a, b, c, M_offset_6, 9, T[17]);
        c = GG(c, d, a, b, M_offset_11, 14, T[18]);
        b = GG(b, c, d, a, M_offset_0, 20, T[19]);
        a = GG(a, b, c, d, M_offset_5, 5, T[20]);
        d = GG(d, a, b, c, M_offset_10, 9, T[21]);
        c = GG(c, d, a, b, M_offset_15, 14, T[22]);
        b = GG(b, c, d, a, M_offset_4, 20, T[23]);
        a = GG(a, b, c, d, M_offset_9, 5, T[24]);
        d = GG(d, a, b, c, M_offset_14, 9, T[25]);
        c = GG(c, d, a, b, M_offset_3, 14, T[26]);
        b = GG(b, c, d, a, M_offset_8, 20, T[27]);
        a = GG(a, b, c, d, M_offset_13, 5, T[28]);
        d = GG(d, a, b, c, M_offset_2, 9, T[29]);
        c = GG(c, d, a, b, M_offset_7, 14, T[30]);
        b = GG(b, c, d, a, M_offset_12, 20, T[31]);
        a = HH(a, b, c, d, M_offset_5, 4, T[32]);
        d = HH(d, a, b, c, M_offset_8, 11, T[33]);
        c = HH(c, d, a, b, M_offset_11, 16, T[34]);
        b = HH(b, c, d, a, M_offset_14, 23, T[35]);
        a = HH(a, b, c, d, M_offset_1, 4, T[36]);
        d = HH(d, a, b, c, M_offset_4, 11, T[37]);
        c = HH(c, d, a, b, M_offset_7, 16, T[38]);
        b = HH(b, c, d, a, M_offset_10, 23, T[39]);
        a = HH(a, b, c, d, M_offset_13, 4, T[40]);
        d = HH(d, a, b, c, M_offset_0, 11, T[41]);
        c = HH(c, d, a, b, M_offset_3, 16, T[42]);
        b = HH(b, c, d, a, M_offset_6, 23, T[43]);
        a = HH(a, b, c, d, M_offset_9, 4, T[44]);
        d = HH(d, a, b, c, M_offset_12, 11, T[45]);
        c = HH(c, d, a, b, M_offset_15, 16, T[46]);
        b = HH(b, c, d, a, M_offset_2, 23, T[47]);
        a = II(a, b, c, d, M_offset_0, 6, T[48]);
        d = II(d, a, b, c, M_offset_7, 10, T[49]);
        c = II(c, d, a, b, M_offset_14, 15, T[50]);
        b = II(b, c, d, a, M_offset_5, 21, T[51]);
        a = II(a, b, c, d, M_offset_12, 6, T[52]);
        d = II(d, a, b, c, M_offset_3, 10, T[53]);
        c = II(c, d, a, b, M_offset_10, 15, T[54]);
        b = II(b, c, d, a, M_offset_1, 21, T[55]);
        a = II(a, b, c, d, M_offset_8, 6, T[56]);
        d = II(d, a, b, c, M_offset_15, 10, T[57]);
        c = II(c, d, a, b, M_offset_6, 15, T[58]);
        b = II(b, c, d, a, M_offset_13, 21, T[59]);
        a = II(a, b, c, d, M_offset_4, 6, T[60]);
        d = II(d, a, b, c, M_offset_11, 10, T[61]);
        c = II(c, d, a, b, M_offset_2, 15, T[62]);
        b = II(b, c, d, a, M_offset_9, 21, T[63]);

        // Intermediate hash value
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
        var nBitsTotalL = nBitsTotal;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;
        data.sigBytes = (dataWords.length + 1) * 4;

        // Hash final blocks
        this._process();

        // Shortcuts
        var hash = this._hash;
        var H = hash.words;

        // Swap endian
        for (var i = 0; i < 4; i++) {
          // Shortcut
          var H_i = H[i];
          H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
        }

        // Return final computed hash
        return hash;
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });
    function FF(a, b, c, d, x, s, t) {
      var n = a + (b & c | ~b & d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }
    function GG(a, b, c, d, x, s, t) {
      var n = a + (b & d | c & ~d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }
    function HH(a, b, c, d, x, s, t) {
      var n = a + (b ^ c ^ d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }
    function II(a, b, c, d, x, s, t) {
      var n = a + (c ^ (b | ~d)) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.MD5('message');
     *     var hash = CryptoJS.MD5(wordArray);
     */
    C.MD5 = Hasher._createHelper(MD5);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacMD5(message, key);
     */
    C.HmacMD5 = Hasher._createHmacHelper(MD5);
  })(Math);
  return CryptoJS.MD5;
});

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 240:
/*!***********************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/sha1.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Reusable object
    var W = [];

    /**
     * SHA-1 hash algorithm.
     */
    var SHA1 = C_algo.SHA1 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var H = this._hash.words;

        // Working variables
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];

        // Computation
        for (var i = 0; i < 80; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = n << 1 | n >>> 31;
          }
          var t = (a << 5 | a >>> 27) + e + W[i];
          if (i < 20) {
            t += (b & c | ~b & d) + 0x5a827999;
          } else if (i < 40) {
            t += (b ^ c ^ d) + 0x6ed9eba1;
          } else if (i < 60) {
            t += (b & c | b & d | c & d) - 0x70e44324;
          } else /* if (i < 80) */{
              t += (b ^ c ^ d) - 0x359d3e2a;
            }
          e = d;
          d = c;
          c = b << 30 | b >>> 2;
          b = a;
          a = t;
        }

        // Intermediate hash value
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Return final computed hash
        return this._hash;
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA1('message');
     *     var hash = CryptoJS.SHA1(wordArray);
     */
    C.SHA1 = Hasher._createHelper(SHA1);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA1(message, key);
     */
    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
  })();
  return CryptoJS.SHA1;
});

/***/ }),

/***/ 241:
/*!*************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/sha256.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Initialization and round constants tables
    var H = [];
    var K = [];

    // Compute constants
    (function () {
      function isPrime(n) {
        var sqrtN = Math.sqrt(n);
        for (var factor = 2; factor <= sqrtN; factor++) {
          if (!(n % factor)) {
            return false;
          }
        }
        return true;
      }
      function getFractionalBits(n) {
        return (n - (n | 0)) * 0x100000000 | 0;
      }
      var n = 2;
      var nPrime = 0;
      while (nPrime < 64) {
        if (isPrime(n)) {
          if (nPrime < 8) {
            H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
          }
          K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
          nPrime++;
        }
        n++;
      }
    })();

    // Reusable object
    var W = [];

    /**
     * SHA-256 hash algorithm.
     */
    var SHA256 = C_algo.SHA256 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init(H.slice(0));
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var H = this._hash.words;

        // Working variables
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        var f = H[5];
        var g = H[6];
        var h = H[7];

        // Computation
        for (var i = 0; i < 64; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var gamma0x = W[i - 15];
            var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
            var gamma1x = W[i - 2];
            var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
            W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
          }
          var ch = e & f ^ ~e & g;
          var maj = a & b ^ a & c ^ b & c;
          var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
          var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
          var t1 = h + sigma1 + ch + K[i] + W[i];
          var t2 = sigma0 + maj;
          h = g;
          g = f;
          f = e;
          e = d + t1 | 0;
          d = c;
          c = b;
          b = a;
          a = t1 + t2 | 0;
        }

        // Intermediate hash value
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
        H[5] = H[5] + f | 0;
        H[6] = H[6] + g | 0;
        H[7] = H[7] + h | 0;
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Return final computed hash
        return this._hash;
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA256('message');
     *     var hash = CryptoJS.SHA256(wordArray);
     */
    C.SHA256 = Hasher._createHelper(SHA256);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA256(message, key);
     */
    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
  })(Math);
  return CryptoJS.SHA256;
});

/***/ }),

/***/ 242:
/*!*************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/sha224.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./sha256 */ 241));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./sha256 */ 241)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var SHA256 = C_algo.SHA256;

    /**
     * SHA-224 hash algorithm.
     */
    var SHA224 = C_algo.SHA224 = SHA256.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
      },
      _doFinalize: function _doFinalize() {
        var hash = SHA256._doFinalize.call(this);
        hash.sigBytes -= 4;
        return hash;
      }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA224('message');
     *     var hash = CryptoJS.SHA224(wordArray);
     */
    C.SHA224 = SHA256._createHelper(SHA224);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA224(message, key);
     */
    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
  })();
  return CryptoJS.SHA224;
});

/***/ }),

/***/ 243:
/*!*************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/sha512.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./x64-core */ 234));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./x64-core */ 234)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Hasher = C_lib.Hasher;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var X64WordArray = C_x64.WordArray;
    var C_algo = C.algo;
    function X64Word_create() {
      return X64Word.create.apply(X64Word, arguments);
    }

    // Constants
    var K = [X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd), X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc), X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019), X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118), X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe), X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2), X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1), X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694), X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3), X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65), X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483), X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5), X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210), X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4), X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725), X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70), X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926), X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df), X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8), X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b), X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001), X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30), X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910), X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8), X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53), X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8), X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb), X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3), X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60), X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec), X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9), X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b), X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207), X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178), X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6), X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b), X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493), X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c), X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a), X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)];

    // Reusable objects
    var W = [];
    (function () {
      for (var i = 0; i < 80; i++) {
        W[i] = X64Word_create();
      }
    })();

    /**
     * SHA-512 hash algorithm.
     */
    var SHA512 = C_algo.SHA512 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new X64WordArray.init([new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b), new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1), new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f), new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcuts
        var H = this._hash.words;
        var H0 = H[0];
        var H1 = H[1];
        var H2 = H[2];
        var H3 = H[3];
        var H4 = H[4];
        var H5 = H[5];
        var H6 = H[6];
        var H7 = H[7];
        var H0h = H0.high;
        var H0l = H0.low;
        var H1h = H1.high;
        var H1l = H1.low;
        var H2h = H2.high;
        var H2l = H2.low;
        var H3h = H3.high;
        var H3l = H3.low;
        var H4h = H4.high;
        var H4l = H4.low;
        var H5h = H5.high;
        var H5l = H5.low;
        var H6h = H6.high;
        var H6l = H6.low;
        var H7h = H7.high;
        var H7l = H7.low;

        // Working variables
        var ah = H0h;
        var al = H0l;
        var bh = H1h;
        var bl = H1l;
        var ch = H2h;
        var cl = H2l;
        var dh = H3h;
        var dl = H3l;
        var eh = H4h;
        var el = H4l;
        var fh = H5h;
        var fl = H5l;
        var gh = H6h;
        var gl = H6l;
        var hh = H7h;
        var hl = H7l;

        // Rounds
        for (var i = 0; i < 80; i++) {
          var Wil;
          var Wih;

          // Shortcut
          var Wi = W[i];

          // Extend message
          if (i < 16) {
            Wih = Wi.high = M[offset + i * 2] | 0;
            Wil = Wi.low = M[offset + i * 2 + 1] | 0;
          } else {
            // Gamma0
            var gamma0x = W[i - 15];
            var gamma0xh = gamma0x.high;
            var gamma0xl = gamma0x.low;
            var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
            var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);

            // Gamma1
            var gamma1x = W[i - 2];
            var gamma1xh = gamma1x.high;
            var gamma1xl = gamma1x.low;
            var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
            var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);

            // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
            var Wi7 = W[i - 7];
            var Wi7h = Wi7.high;
            var Wi7l = Wi7.low;
            var Wi16 = W[i - 16];
            var Wi16h = Wi16.high;
            var Wi16l = Wi16.low;
            Wil = gamma0l + Wi7l;
            Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
            Wil = Wil + gamma1l;
            Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
            Wil = Wil + Wi16l;
            Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
            Wi.high = Wih;
            Wi.low = Wil;
          }
          var chh = eh & fh ^ ~eh & gh;
          var chl = el & fl ^ ~el & gl;
          var majh = ah & bh ^ ah & ch ^ bh & ch;
          var majl = al & bl ^ al & cl ^ bl & cl;
          var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
          var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
          var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
          var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);

          // t1 = h + sigma1 + ch + K[i] + W[i]
          var Ki = K[i];
          var Kih = Ki.high;
          var Kil = Ki.low;
          var t1l = hl + sigma1l;
          var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
          var t1l = t1l + chl;
          var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
          var t1l = t1l + Kil;
          var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
          var t1l = t1l + Wil;
          var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);

          // t2 = sigma0 + maj
          var t2l = sigma0l + majl;
          var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);

          // Update working variables
          hh = gh;
          hl = gl;
          gh = fh;
          gl = fl;
          fh = eh;
          fl = el;
          el = dl + t1l | 0;
          eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
          dh = ch;
          dl = cl;
          ch = bh;
          cl = bl;
          bh = ah;
          bl = al;
          al = t1l + t2l | 0;
          ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
        }

        // Intermediate hash value
        H0l = H0.low = H0l + al;
        H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
        H1l = H1.low = H1l + bl;
        H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
        H2l = H2.low = H2l + cl;
        H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
        H3l = H3.low = H3l + dl;
        H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
        H4l = H4.low = H4l + el;
        H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
        H5l = H5.low = H5l + fl;
        H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
        H6l = H6.low = H6l + gl;
        H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
        H7l = H7.low = H7l + hl;
        H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Convert hash to 32-bit word array before returning
        var hash = this._hash.toX32();

        // Return final computed hash
        return hash;
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      },
      blockSize: 1024 / 32
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA512('message');
     *     var hash = CryptoJS.SHA512(wordArray);
     */
    C.SHA512 = Hasher._createHelper(SHA512);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA512(message, key);
     */
    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
  })();
  return CryptoJS.SHA512;
});

/***/ }),

/***/ 244:
/*!*************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/sha384.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./x64-core */ 234), __webpack_require__(/*! ./sha512 */ 243));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./x64-core */ 234), __webpack_require__(/*! ./sha512 */ 243)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var X64WordArray = C_x64.WordArray;
    var C_algo = C.algo;
    var SHA512 = C_algo.SHA512;

    /**
     * SHA-384 hash algorithm.
     */
    var SHA384 = C_algo.SHA384 = SHA512.extend({
      _doReset: function _doReset() {
        this._hash = new X64WordArray.init([new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507), new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939), new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511), new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);
      },
      _doFinalize: function _doFinalize() {
        var hash = SHA512._doFinalize.call(this);
        hash.sigBytes -= 16;
        return hash;
      }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA384('message');
     *     var hash = CryptoJS.SHA384(wordArray);
     */
    C.SHA384 = SHA512._createHelper(SHA384);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA384(message, key);
     */
    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
  })();
  return CryptoJS.SHA384;
});

/***/ }),

/***/ 245:
/*!***********************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/sha3.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./x64-core */ 234));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./x64-core */ 234)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var C_algo = C.algo;

    // Constants tables
    var RHO_OFFSETS = [];
    var PI_INDEXES = [];
    var ROUND_CONSTANTS = [];

    // Compute Constants
    (function () {
      // Compute rho offset constants
      var x = 1,
        y = 0;
      for (var t = 0; t < 24; t++) {
        RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
        var newX = y % 5;
        var newY = (2 * x + 3 * y) % 5;
        x = newX;
        y = newY;
      }

      // Compute pi index constants
      for (var x = 0; x < 5; x++) {
        for (var y = 0; y < 5; y++) {
          PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
        }
      }

      // Compute round constants
      var LFSR = 0x01;
      for (var i = 0; i < 24; i++) {
        var roundConstantMsw = 0;
        var roundConstantLsw = 0;
        for (var j = 0; j < 7; j++) {
          if (LFSR & 0x01) {
            var bitPosition = (1 << j) - 1;
            if (bitPosition < 32) {
              roundConstantLsw ^= 1 << bitPosition;
            } else /* if (bitPosition >= 32) */{
                roundConstantMsw ^= 1 << bitPosition - 32;
              }
          }

          // Compute next LFSR
          if (LFSR & 0x80) {
            // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
            LFSR = LFSR << 1 ^ 0x71;
          } else {
            LFSR <<= 1;
          }
        }
        ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
      }
    })();

    // Reusable objects for temporary values
    var T = [];
    (function () {
      for (var i = 0; i < 25; i++) {
        T[i] = X64Word.create();
      }
    })();

    /**
     * SHA-3 hash algorithm.
     */
    var SHA3 = C_algo.SHA3 = Hasher.extend({
      /**
       * Configuration options.
       *
       * @property {number} outputLength
       *   The desired number of bits in the output hash.
       *   Only values permitted are: 224, 256, 384, 512.
       *   Default: 512
       */
      cfg: Hasher.cfg.extend({
        outputLength: 512
      }),
      _doReset: function _doReset() {
        var state = this._state = [];
        for (var i = 0; i < 25; i++) {
          state[i] = new X64Word.init();
        }
        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcuts
        var state = this._state;
        var nBlockSizeLanes = this.blockSize / 2;

        // Absorb
        for (var i = 0; i < nBlockSizeLanes; i++) {
          // Shortcuts
          var M2i = M[offset + 2 * i];
          var M2i1 = M[offset + 2 * i + 1];

          // Swap endian
          M2i = (M2i << 8 | M2i >>> 24) & 0x00ff00ff | (M2i << 24 | M2i >>> 8) & 0xff00ff00;
          M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff | (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00;

          // Absorb message into state
          var lane = state[i];
          lane.high ^= M2i1;
          lane.low ^= M2i;
        }

        // Rounds
        for (var round = 0; round < 24; round++) {
          // Theta
          for (var x = 0; x < 5; x++) {
            // Mix column lanes
            var tMsw = 0,
              tLsw = 0;
            for (var y = 0; y < 5; y++) {
              var lane = state[x + 5 * y];
              tMsw ^= lane.high;
              tLsw ^= lane.low;
            }

            // Temporary values
            var Tx = T[x];
            Tx.high = tMsw;
            Tx.low = tLsw;
          }
          for (var x = 0; x < 5; x++) {
            // Shortcuts
            var Tx4 = T[(x + 4) % 5];
            var Tx1 = T[(x + 1) % 5];
            var Tx1Msw = Tx1.high;
            var Tx1Lsw = Tx1.low;

            // Mix surrounding columns
            var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
            var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
            for (var y = 0; y < 5; y++) {
              var lane = state[x + 5 * y];
              lane.high ^= tMsw;
              lane.low ^= tLsw;
            }
          }

          // Rho Pi
          for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
            var tMsw;
            var tLsw;

            // Shortcuts
            var lane = state[laneIndex];
            var laneMsw = lane.high;
            var laneLsw = lane.low;
            var rhoOffset = RHO_OFFSETS[laneIndex];

            // Rotate lanes
            if (rhoOffset < 32) {
              tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
              tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
            } else /* if (rhoOffset >= 32) */{
                tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
              }

            // Transpose lanes
            var TPiLane = T[PI_INDEXES[laneIndex]];
            TPiLane.high = tMsw;
            TPiLane.low = tLsw;
          }

          // Rho pi at x = y = 0
          var T0 = T[0];
          var state0 = state[0];
          T0.high = state0.high;
          T0.low = state0.low;

          // Chi
          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              // Shortcuts
              var laneIndex = x + 5 * y;
              var lane = state[laneIndex];
              var TLane = T[laneIndex];
              var Tx1Lane = T[(x + 1) % 5 + 5 * y];
              var Tx2Lane = T[(x + 2) % 5 + 5 * y];

              // Mix rows
              lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
              lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
            }
          }

          // Iota
          var lane = state[0];
          var roundConstant = ROUND_CONSTANTS[round];
          lane.high ^= roundConstant.high;
          lane.low ^= roundConstant.low;
        }
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        var blockSizeBits = this.blockSize * 32;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;
        dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Shortcuts
        var state = this._state;
        var outputLengthBytes = this.cfg.outputLength / 8;
        var outputLengthLanes = outputLengthBytes / 8;

        // Squeeze
        var hashWords = [];
        for (var i = 0; i < outputLengthLanes; i++) {
          // Shortcuts
          var lane = state[i];
          var laneMsw = lane.high;
          var laneLsw = lane.low;

          // Swap endian
          laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;
          laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00;

          // Squeeze state to retrieve hash
          hashWords.push(laneLsw);
          hashWords.push(laneMsw);
        }

        // Return final computed hash
        return new WordArray.init(hashWords, outputLengthBytes);
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        var state = clone._state = this._state.slice(0);
        for (var i = 0; i < 25; i++) {
          state[i] = state[i].clone();
        }
        return clone;
      }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA3('message');
     *     var hash = CryptoJS.SHA3(wordArray);
     */
    C.SHA3 = Hasher._createHelper(SHA3);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA3(message, key);
     */
    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
  })(Math);
  return CryptoJS.SHA3;
});

/***/ }),

/***/ 246:
/*!****************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/ripemd160.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /** @preserve
  (c) 2012 by Cédric Mesnil. All rights reserved.
  	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */

  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Constants table
    var _zl = WordArray.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
    var _zr = WordArray.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
    var _sl = WordArray.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
    var _sr = WordArray.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
    var _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
    var _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

    /**
     * RIPEMD160 hash algorithm.
     */
    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Swap endian
        for (var i = 0; i < 16; i++) {
          // Shortcuts
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];

          // Swap
          M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
        }
        // Shortcut
        var H = this._hash.words;
        var hl = _hl.words;
        var hr = _hr.words;
        var zl = _zl.words;
        var zr = _zr.words;
        var sl = _sl.words;
        var sr = _sr.words;

        // Working variables
        var al, bl, cl, dl, el;
        var ar, br, cr, dr, er;
        ar = al = H[0];
        br = bl = H[1];
        cr = cl = H[2];
        dr = dl = H[3];
        er = el = H[4];
        // Computation
        var t;
        for (var i = 0; i < 80; i += 1) {
          t = al + M[offset + zl[i]] | 0;
          if (i < 16) {
            t += f1(bl, cl, dl) + hl[0];
          } else if (i < 32) {
            t += f2(bl, cl, dl) + hl[1];
          } else if (i < 48) {
            t += f3(bl, cl, dl) + hl[2];
          } else if (i < 64) {
            t += f4(bl, cl, dl) + hl[3];
          } else {
            // if (i<80) {
            t += f5(bl, cl, dl) + hl[4];
          }
          t = t | 0;
          t = rotl(t, sl[i]);
          t = t + el | 0;
          al = el;
          el = dl;
          dl = rotl(cl, 10);
          cl = bl;
          bl = t;
          t = ar + M[offset + zr[i]] | 0;
          if (i < 16) {
            t += f5(br, cr, dr) + hr[0];
          } else if (i < 32) {
            t += f4(br, cr, dr) + hr[1];
          } else if (i < 48) {
            t += f3(br, cr, dr) + hr[2];
          } else if (i < 64) {
            t += f2(br, cr, dr) + hr[3];
          } else {
            // if (i<80) {
            t += f1(br, cr, dr) + hr[4];
          }
          t = t | 0;
          t = rotl(t, sr[i]);
          t = t + er | 0;
          ar = er;
          er = dr;
          dr = rotl(cr, 10);
          cr = br;
          br = t;
        }
        // Intermediate hash value
        t = H[1] + cl + dr | 0;
        H[1] = H[2] + dl + er | 0;
        H[2] = H[3] + el + ar | 0;
        H[3] = H[4] + al + br | 0;
        H[4] = H[0] + bl + cr | 0;
        H[0] = t;
      },
      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff | (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;
        data.sigBytes = (dataWords.length + 1) * 4;

        // Hash final blocks
        this._process();

        // Shortcuts
        var hash = this._hash;
        var H = hash.words;

        // Swap endian
        for (var i = 0; i < 5; i++) {
          // Shortcut
          var H_i = H[i];

          // Swap
          H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
        }

        // Return final computed hash
        return hash;
      },
      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }
    });
    function f1(x, y, z) {
      return x ^ y ^ z;
    }
    function f2(x, y, z) {
      return x & y | ~x & z;
    }
    function f3(x, y, z) {
      return (x | ~y) ^ z;
    }
    function f4(x, y, z) {
      return x & z | y & ~z;
    }
    function f5(x, y, z) {
      return x ^ (y | ~z);
    }
    function rotl(x, n) {
      return x << n | x >>> 32 - n;
    }

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.RIPEMD160('message');
     *     var hash = CryptoJS.RIPEMD160(wordArray);
     */
    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
     */
    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
  })(Math);
  return CryptoJS.RIPEMD160;
});

/***/ }),

/***/ 247:
/*!***********************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/hmac.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var C_algo = C.algo;

    /**
     * HMAC algorithm.
     */
    var HMAC = C_algo.HMAC = Base.extend({
      /**
       * Initializes a newly created HMAC.
       *
       * @param {Hasher} hasher The hash algorithm to use.
       * @param {WordArray|string} key The secret key.
       *
       * @example
       *
       *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
       */
      init: function init(hasher, key) {
        // Init hasher
        hasher = this._hasher = new hasher.init();

        // Convert string to WordArray, else assume WordArray already
        if (typeof key == 'string') {
          key = Utf8.parse(key);
        }

        // Shortcuts
        var hasherBlockSize = hasher.blockSize;
        var hasherBlockSizeBytes = hasherBlockSize * 4;

        // Allow arbitrary length keys
        if (key.sigBytes > hasherBlockSizeBytes) {
          key = hasher.finalize(key);
        }

        // Clamp excess bits
        key.clamp();

        // Clone key for inner and outer pads
        var oKey = this._oKey = key.clone();
        var iKey = this._iKey = key.clone();

        // Shortcuts
        var oKeyWords = oKey.words;
        var iKeyWords = iKey.words;

        // XOR keys with pad constants
        for (var i = 0; i < hasherBlockSize; i++) {
          oKeyWords[i] ^= 0x5c5c5c5c;
          iKeyWords[i] ^= 0x36363636;
        }
        oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

        // Set initial values
        this.reset();
      },
      /**
       * Resets this HMAC to its initial state.
       *
       * @example
       *
       *     hmacHasher.reset();
       */
      reset: function reset() {
        // Shortcut
        var hasher = this._hasher;

        // Reset
        hasher.reset();
        hasher.update(this._iKey);
      },
      /**
       * Updates this HMAC with a message.
       *
       * @param {WordArray|string} messageUpdate The message to append.
       *
       * @return {HMAC} This HMAC instance.
       *
       * @example
       *
       *     hmacHasher.update('message');
       *     hmacHasher.update(wordArray);
       */
      update: function update(messageUpdate) {
        this._hasher.update(messageUpdate);

        // Chainable
        return this;
      },
      /**
       * Finalizes the HMAC computation.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} messageUpdate (Optional) A final message update.
       *
       * @return {WordArray} The HMAC.
       *
       * @example
       *
       *     var hmac = hmacHasher.finalize();
       *     var hmac = hmacHasher.finalize('message');
       *     var hmac = hmacHasher.finalize(wordArray);
       */
      finalize: function finalize(messageUpdate) {
        // Shortcut
        var hasher = this._hasher;

        // Compute HMAC
        var innerHash = hasher.finalize(messageUpdate);
        hasher.reset();
        var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
        return hmac;
      }
    });
  })();
});

/***/ }),

/***/ 248:
/*!*************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/pbkdf2.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./sha1 */ 240), __webpack_require__(/*! ./hmac */ 247));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./sha1 */ 240), __webpack_require__(/*! ./hmac */ 247)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var SHA1 = C_algo.SHA1;
    var HMAC = C_algo.HMAC;

    /**
     * Password-Based Key Derivation Function 2 algorithm.
     */
    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
      /**
       * Configuration options.
       *
       * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
       * @property {Hasher} hasher The hasher to use. Default: SHA1
       * @property {number} iterations The number of iterations to perform. Default: 1
       */
      cfg: Base.extend({
        keySize: 128 / 32,
        hasher: SHA1,
        iterations: 1
      }),
      /**
       * Initializes a newly created key derivation function.
       *
       * @param {Object} cfg (Optional) The configuration options to use for the derivation.
       *
       * @example
       *
       *     var kdf = CryptoJS.algo.PBKDF2.create();
       *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
       *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
       */
      init: function init(cfg) {
        this.cfg = this.cfg.extend(cfg);
      },
      /**
       * Computes the Password-Based Key Derivation Function 2.
       *
       * @param {WordArray|string} password The password.
       * @param {WordArray|string} salt A salt.
       *
       * @return {WordArray} The derived key.
       *
       * @example
       *
       *     var key = kdf.compute(password, salt);
       */
      compute: function compute(password, salt) {
        // Shortcut
        var cfg = this.cfg;

        // Init HMAC
        var hmac = HMAC.create(cfg.hasher, password);

        // Initial values
        var derivedKey = WordArray.create();
        var blockIndex = WordArray.create([0x00000001]);

        // Shortcuts
        var derivedKeyWords = derivedKey.words;
        var blockIndexWords = blockIndex.words;
        var keySize = cfg.keySize;
        var iterations = cfg.iterations;

        // Generate key
        while (derivedKeyWords.length < keySize) {
          var block = hmac.update(salt).finalize(blockIndex);
          hmac.reset();

          // Shortcuts
          var blockWords = block.words;
          var blockWordsLength = blockWords.length;

          // Iterations
          var intermediate = block;
          for (var i = 1; i < iterations; i++) {
            intermediate = hmac.finalize(intermediate);
            hmac.reset();

            // Shortcut
            var intermediateWords = intermediate.words;

            // XOR intermediate with block
            for (var j = 0; j < blockWordsLength; j++) {
              blockWords[j] ^= intermediateWords[j];
            }
          }
          derivedKey.concat(block);
          blockIndexWords[0]++;
        }
        derivedKey.sigBytes = keySize * 4;
        return derivedKey;
      }
    });

    /**
     * Computes the Password-Based Key Derivation Function 2.
     *
     * @param {WordArray|string} password The password.
     * @param {WordArray|string} salt A salt.
     * @param {Object} cfg (Optional) The configuration options to use for this computation.
     *
     * @return {WordArray} The derived key.
     *
     * @static
     *
     * @example
     *
     *     var key = CryptoJS.PBKDF2(password, salt);
     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
     */
    C.PBKDF2 = function (password, salt, cfg) {
      return PBKDF2.create(cfg).compute(password, salt);
    };
  })();
  return CryptoJS.PBKDF2;
});

/***/ }),

/***/ 249:
/*!*************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/evpkdf.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./sha1 */ 240), __webpack_require__(/*! ./hmac */ 247));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./sha1 */ 240), __webpack_require__(/*! ./hmac */ 247)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var MD5 = C_algo.MD5;

    /**
     * This key derivation function is meant to conform with EVP_BytesToKey.
     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
     */
    var EvpKDF = C_algo.EvpKDF = Base.extend({
      /**
       * Configuration options.
       *
       * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
       * @property {Hasher} hasher The hash algorithm to use. Default: MD5
       * @property {number} iterations The number of iterations to perform. Default: 1
       */
      cfg: Base.extend({
        keySize: 128 / 32,
        hasher: MD5,
        iterations: 1
      }),
      /**
       * Initializes a newly created key derivation function.
       *
       * @param {Object} cfg (Optional) The configuration options to use for the derivation.
       *
       * @example
       *
       *     var kdf = CryptoJS.algo.EvpKDF.create();
       *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
       *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
       */
      init: function init(cfg) {
        this.cfg = this.cfg.extend(cfg);
      },
      /**
       * Derives a key from a password.
       *
       * @param {WordArray|string} password The password.
       * @param {WordArray|string} salt A salt.
       *
       * @return {WordArray} The derived key.
       *
       * @example
       *
       *     var key = kdf.compute(password, salt);
       */
      compute: function compute(password, salt) {
        var block;

        // Shortcut
        var cfg = this.cfg;

        // Init hasher
        var hasher = cfg.hasher.create();

        // Initial values
        var derivedKey = WordArray.create();

        // Shortcuts
        var derivedKeyWords = derivedKey.words;
        var keySize = cfg.keySize;
        var iterations = cfg.iterations;

        // Generate key
        while (derivedKeyWords.length < keySize) {
          if (block) {
            hasher.update(block);
          }
          block = hasher.update(password).finalize(salt);
          hasher.reset();

          // Iterations
          for (var i = 1; i < iterations; i++) {
            block = hasher.finalize(block);
            hasher.reset();
          }
          derivedKey.concat(block);
        }
        derivedKey.sigBytes = keySize * 4;
        return derivedKey;
      }
    });

    /**
     * Derives a key from a password.
     *
     * @param {WordArray|string} password The password.
     * @param {WordArray|string} salt A salt.
     * @param {Object} cfg (Optional) The configuration options to use for this computation.
     *
     * @return {WordArray} The derived key.
     *
     * @static
     *
     * @example
     *
     *     var key = CryptoJS.EvpKDF(password, salt);
     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
     */
    C.EvpKDF = function (password, salt, cfg) {
      return EvpKDF.create(cfg).compute(password, salt);
    };
  })();
  return CryptoJS.EvpKDF;
});

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"yamikejimall4j","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"yamikejimall4j","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"yamikejimall4j","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"yamikejimall4j","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 250:
/*!******************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/cipher-core.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./evpkdf */ 249));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./evpkdf */ 249)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /**
   * Cipher core components.
   */
  CryptoJS.lib.Cipher || function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var Base64 = C_enc.Base64;
    var C_algo = C.algo;
    var EvpKDF = C_algo.EvpKDF;

    /**
     * Abstract base cipher template.
     *
     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
     */
    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
      /**
       * Configuration options.
       *
       * @property {WordArray} iv The IV to use for this operation.
       */
      cfg: Base.extend(),
      /**
       * Creates this cipher in encryption mode.
       *
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {Cipher} A cipher instance.
       *
       * @static
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
       */
      createEncryptor: function createEncryptor(key, cfg) {
        return this.create(this._ENC_XFORM_MODE, key, cfg);
      },
      /**
       * Creates this cipher in decryption mode.
       *
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {Cipher} A cipher instance.
       *
       * @static
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
       */
      createDecryptor: function createDecryptor(key, cfg) {
        return this.create(this._DEC_XFORM_MODE, key, cfg);
      },
      /**
       * Initializes a newly created cipher.
       *
       * @param {number} xformMode Either the encryption or decryption transormation mode constant.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
       */
      init: function init(xformMode, key, cfg) {
        // Apply config defaults
        this.cfg = this.cfg.extend(cfg);

        // Store transform mode and key
        this._xformMode = xformMode;
        this._key = key;

        // Set initial values
        this.reset();
      },
      /**
       * Resets this cipher to its initial state.
       *
       * @example
       *
       *     cipher.reset();
       */
      reset: function reset() {
        // Reset data buffer
        BufferedBlockAlgorithm.reset.call(this);

        // Perform concrete-cipher logic
        this._doReset();
      },
      /**
       * Adds data to be encrypted or decrypted.
       *
       * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
       *
       * @return {WordArray} The data after processing.
       *
       * @example
       *
       *     var encrypted = cipher.process('data');
       *     var encrypted = cipher.process(wordArray);
       */
      process: function process(dataUpdate) {
        // Append
        this._append(dataUpdate);

        // Process available blocks
        return this._process();
      },
      /**
       * Finalizes the encryption or decryption process.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
       *
       * @return {WordArray} The data after final processing.
       *
       * @example
       *
       *     var encrypted = cipher.finalize();
       *     var encrypted = cipher.finalize('data');
       *     var encrypted = cipher.finalize(wordArray);
       */
      finalize: function finalize(dataUpdate) {
        // Final data update
        if (dataUpdate) {
          this._append(dataUpdate);
        }

        // Perform concrete-cipher logic
        var finalProcessedData = this._doFinalize();
        return finalProcessedData;
      },
      keySize: 128 / 32,
      ivSize: 128 / 32,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      /**
       * Creates shortcut functions to a cipher's object interface.
       *
       * @param {Cipher} cipher The cipher to create a helper for.
       *
       * @return {Object} An object with encrypt and decrypt shortcut functions.
       *
       * @static
       *
       * @example
       *
       *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
       */
      _createHelper: function () {
        function selectCipherStrategy(key) {
          if (typeof key == 'string') {
            return PasswordBasedCipher;
          } else {
            return SerializableCipher;
          }
        }
        return function (cipher) {
          return {
            encrypt: function encrypt(message, key, cfg) {
              return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
            },
            decrypt: function decrypt(ciphertext, key, cfg) {
              return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
            }
          };
        };
      }()
    });

    /**
     * Abstract base stream cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
     */
    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
      _doFinalize: function _doFinalize() {
        // Process partial blocks
        var finalProcessedBlocks = this._process(!!'flush');
        return finalProcessedBlocks;
      },
      blockSize: 1
    });

    /**
     * Mode namespace.
     */
    var C_mode = C.mode = {};

    /**
     * Abstract base block cipher mode template.
     */
    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
      /**
       * Creates this mode for encryption.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @static
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
       */
      createEncryptor: function createEncryptor(cipher, iv) {
        return this.Encryptor.create(cipher, iv);
      },
      /**
       * Creates this mode for decryption.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @static
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
       */
      createDecryptor: function createDecryptor(cipher, iv) {
        return this.Decryptor.create(cipher, iv);
      },
      /**
       * Initializes a newly created mode.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
       */
      init: function init(cipher, iv) {
        this._cipher = cipher;
        this._iv = iv;
      }
    });

    /**
     * Cipher Block Chaining mode.
     */
    var CBC = C_mode.CBC = function () {
      /**
       * Abstract base CBC mode.
       */
      var CBC = BlockCipherMode.extend();

      /**
       * CBC encryptor.
       */
      CBC.Encryptor = CBC.extend({
        /**
         * Processes the data block at offset.
         *
         * @param {Array} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         *
         * @example
         *
         *     mode.processBlock(data.words, offset);
         */
        processBlock: function processBlock(words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;

          // XOR and encrypt
          xorBlock.call(this, words, offset, blockSize);
          cipher.encryptBlock(words, offset);

          // Remember this block to use with next block
          this._prevBlock = words.slice(offset, offset + blockSize);
        }
      });

      /**
       * CBC decryptor.
       */
      CBC.Decryptor = CBC.extend({
        /**
         * Processes the data block at offset.
         *
         * @param {Array} words The data words to operate on.
         * @param {number} offset The offset where the block starts.
         *
         * @example
         *
         *     mode.processBlock(data.words, offset);
         */
        processBlock: function processBlock(words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;

          // Remember this block to use with next block
          var thisBlock = words.slice(offset, offset + blockSize);

          // Decrypt and XOR
          cipher.decryptBlock(words, offset);
          xorBlock.call(this, words, offset, blockSize);

          // This block becomes the previous block
          this._prevBlock = thisBlock;
        }
      });
      function xorBlock(words, offset, blockSize) {
        var block;

        // Shortcut
        var iv = this._iv;

        // Choose mixing block
        if (iv) {
          block = iv;

          // Remove IV for subsequent blocks
          this._iv = undefined;
        } else {
          block = this._prevBlock;
        }

        // XOR blocks
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= block[i];
        }
      }
      return CBC;
    }();

    /**
     * Padding namespace.
     */
    var C_pad = C.pad = {};

    /**
     * PKCS #5/7 padding strategy.
     */
    var Pkcs7 = C_pad.Pkcs7 = {
      /**
       * Pads data using the algorithm defined in PKCS #5/7.
       *
       * @param {WordArray} data The data to pad.
       * @param {number} blockSize The multiple that the data should be padded to.
       *
       * @static
       *
       * @example
       *
       *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
       */
      pad: function pad(data, blockSize) {
        // Shortcut
        var blockSizeBytes = blockSize * 4;

        // Count padding bytes
        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

        // Create padding word
        var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;

        // Create padding
        var paddingWords = [];
        for (var i = 0; i < nPaddingBytes; i += 4) {
          paddingWords.push(paddingWord);
        }
        var padding = WordArray.create(paddingWords, nPaddingBytes);

        // Add padding
        data.concat(padding);
      },
      /**
       * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
       *
       * @param {WordArray} data The data to unpad.
       *
       * @static
       *
       * @example
       *
       *     CryptoJS.pad.Pkcs7.unpad(wordArray);
       */
      unpad: function unpad(data) {
        // Get number of padding bytes from last byte
        var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

        // Remove padding
        data.sigBytes -= nPaddingBytes;
      }
    };

    /**
     * Abstract base block cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
     */
    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
      /**
       * Configuration options.
       *
       * @property {Mode} mode The block mode to use. Default: CBC
       * @property {Padding} padding The padding strategy to use. Default: Pkcs7
       */
      cfg: Cipher.cfg.extend({
        mode: CBC,
        padding: Pkcs7
      }),
      reset: function reset() {
        var modeCreator;

        // Reset cipher
        Cipher.reset.call(this);

        // Shortcuts
        var cfg = this.cfg;
        var iv = cfg.iv;
        var mode = cfg.mode;

        // Reset block mode
        if (this._xformMode == this._ENC_XFORM_MODE) {
          modeCreator = mode.createEncryptor;
        } else /* if (this._xformMode == this._DEC_XFORM_MODE) */{
            modeCreator = mode.createDecryptor;
            // Keep at least one block in the buffer for unpadding
            this._minBufferSize = 1;
          }
        if (this._mode && this._mode.__creator == modeCreator) {
          this._mode.init(this, iv && iv.words);
        } else {
          this._mode = modeCreator.call(mode, this, iv && iv.words);
          this._mode.__creator = modeCreator;
        }
      },
      _doProcessBlock: function _doProcessBlock(words, offset) {
        this._mode.processBlock(words, offset);
      },
      _doFinalize: function _doFinalize() {
        var finalProcessedBlocks;

        // Shortcut
        var padding = this.cfg.padding;

        // Finalize
        if (this._xformMode == this._ENC_XFORM_MODE) {
          // Pad data
          padding.pad(this._data, this.blockSize);

          // Process final blocks
          finalProcessedBlocks = this._process(!!'flush');
        } else /* if (this._xformMode == this._DEC_XFORM_MODE) */{
            // Process final blocks
            finalProcessedBlocks = this._process(!!'flush');

            // Unpad data
            padding.unpad(finalProcessedBlocks);
          }
        return finalProcessedBlocks;
      },
      blockSize: 128 / 32
    });

    /**
     * A collection of cipher parameters.
     *
     * @property {WordArray} ciphertext The raw ciphertext.
     * @property {WordArray} key The key to this ciphertext.
     * @property {WordArray} iv The IV used in the ciphering operation.
     * @property {WordArray} salt The salt used with a key derivation function.
     * @property {Cipher} algorithm The cipher algorithm.
     * @property {Mode} mode The block mode used in the ciphering operation.
     * @property {Padding} padding The padding scheme used in the ciphering operation.
     * @property {number} blockSize The block size of the cipher.
     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
     */
    var CipherParams = C_lib.CipherParams = Base.extend({
      /**
       * Initializes a newly created cipher params object.
       *
       * @param {Object} cipherParams An object with any of the possible cipher parameters.
       *
       * @example
       *
       *     var cipherParams = CryptoJS.lib.CipherParams.create({
       *         ciphertext: ciphertextWordArray,
       *         key: keyWordArray,
       *         iv: ivWordArray,
       *         salt: saltWordArray,
       *         algorithm: CryptoJS.algo.AES,
       *         mode: CryptoJS.mode.CBC,
       *         padding: CryptoJS.pad.PKCS7,
       *         blockSize: 4,
       *         formatter: CryptoJS.format.OpenSSL
       *     });
       */
      init: function init(cipherParams) {
        this.mixIn(cipherParams);
      },
      /**
       * Converts this cipher params object to a string.
       *
       * @param {Format} formatter (Optional) The formatting strategy to use.
       *
       * @return {string} The stringified cipher params.
       *
       * @throws Error If neither the formatter nor the default formatter is set.
       *
       * @example
       *
       *     var string = cipherParams + '';
       *     var string = cipherParams.toString();
       *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
       */
      toString: function toString(formatter) {
        return (formatter || this.formatter).stringify(this);
      }
    });

    /**
     * Format namespace.
     */
    var C_format = C.format = {};

    /**
     * OpenSSL formatting strategy.
     */
    var OpenSSLFormatter = C_format.OpenSSL = {
      /**
       * Converts a cipher params object to an OpenSSL-compatible string.
       *
       * @param {CipherParams} cipherParams The cipher params object.
       *
       * @return {string} The OpenSSL-compatible string.
       *
       * @static
       *
       * @example
       *
       *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
       */
      stringify: function stringify(cipherParams) {
        var wordArray;

        // Shortcuts
        var ciphertext = cipherParams.ciphertext;
        var salt = cipherParams.salt;

        // Format
        if (salt) {
          wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
        } else {
          wordArray = ciphertext;
        }
        return wordArray.toString(Base64);
      },
      /**
       * Converts an OpenSSL-compatible string to a cipher params object.
       *
       * @param {string} openSSLStr The OpenSSL-compatible string.
       *
       * @return {CipherParams} The cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
       */
      parse: function parse(openSSLStr) {
        var salt;

        // Parse base64
        var ciphertext = Base64.parse(openSSLStr);

        // Shortcut
        var ciphertextWords = ciphertext.words;

        // Test for salt
        if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
          // Extract salt
          salt = WordArray.create(ciphertextWords.slice(2, 4));

          // Remove salt from ciphertext
          ciphertextWords.splice(0, 4);
          ciphertext.sigBytes -= 16;
        }
        return CipherParams.create({
          ciphertext: ciphertext,
          salt: salt
        });
      }
    };

    /**
     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
     */
    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
      /**
       * Configuration options.
       *
       * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
       */
      cfg: Base.extend({
        format: OpenSSLFormatter
      }),
      /**
       * Encrypts a message.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {WordArray|string} message The message to encrypt.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {CipherParams} A cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       */
      encrypt: function encrypt(cipher, message, key, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Encrypt
        var encryptor = cipher.createEncryptor(key, cfg);
        var ciphertext = encryptor.finalize(message);

        // Shortcut
        var cipherCfg = encryptor.cfg;

        // Create and return serializable cipher params
        return CipherParams.create({
          ciphertext: ciphertext,
          key: key,
          iv: cipherCfg.iv,
          algorithm: cipher,
          mode: cipherCfg.mode,
          padding: cipherCfg.padding,
          blockSize: cipher.blockSize,
          formatter: cfg.format
        });
      },
      /**
       * Decrypts serialized ciphertext.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {WordArray} The plaintext.
       *
       * @static
       *
       * @example
       *
       *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       */
      decrypt: function decrypt(cipher, ciphertext, key, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Convert string to CipherParams
        ciphertext = this._parse(ciphertext, cfg.format);

        // Decrypt
        var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
        return plaintext;
      },
      /**
       * Converts serialized ciphertext to CipherParams,
       * else assumed CipherParams already and returns ciphertext unchanged.
       *
       * @param {CipherParams|string} ciphertext The ciphertext.
       * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
       *
       * @return {CipherParams} The unserialized ciphertext.
       *
       * @static
       *
       * @example
       *
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
       */
      _parse: function _parse(ciphertext, format) {
        if (typeof ciphertext == 'string') {
          return format.parse(ciphertext, this);
        } else {
          return ciphertext;
        }
      }
    });

    /**
     * Key derivation function namespace.
     */
    var C_kdf = C.kdf = {};

    /**
     * OpenSSL key derivation function.
     */
    var OpenSSLKdf = C_kdf.OpenSSL = {
      /**
       * Derives a key and IV from a password.
       *
       * @param {string} password The password to derive from.
       * @param {number} keySize The size in words of the key to generate.
       * @param {number} ivSize The size in words of the IV to generate.
       * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
       *
       * @return {CipherParams} A cipher params object with the key, IV, and salt.
       *
       * @static
       *
       * @example
       *
       *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
       *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
       */
      execute: function execute(password, keySize, ivSize, salt) {
        // Generate random salt
        if (!salt) {
          salt = WordArray.random(64 / 8);
        }

        // Derive key and IV
        var key = EvpKDF.create({
          keySize: keySize + ivSize
        }).compute(password, salt);

        // Separate key and IV
        var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
        key.sigBytes = keySize * 4;

        // Return params
        return CipherParams.create({
          key: key,
          iv: iv,
          salt: salt
        });
      }
    };

    /**
     * A serializable cipher wrapper that derives the key from a password,
     * and returns ciphertext as a serializable cipher params object.
     */
    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
      /**
       * Configuration options.
       *
       * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
       */
      cfg: SerializableCipher.cfg.extend({
        kdf: OpenSSLKdf
      }),
      /**
       * Encrypts a message using a password.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {WordArray|string} message The message to encrypt.
       * @param {string} password The password.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {CipherParams} A cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
       *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
       */
      encrypt: function encrypt(cipher, message, password, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Derive key and other params
        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

        // Add IV to config
        cfg.iv = derivedParams.iv;

        // Encrypt
        var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

        // Mix in derived params
        ciphertext.mixIn(derivedParams);
        return ciphertext;
      },
      /**
       * Decrypts serialized ciphertext using a password.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
       * @param {string} password The password.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {WordArray} The plaintext.
       *
       * @static
       *
       * @example
       *
       *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
       *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
       */
      decrypt: function decrypt(cipher, ciphertext, password, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Convert string to CipherParams
        ciphertext = this._parse(ciphertext, cfg.format);

        // Derive key and other params
        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

        // Add IV to config
        cfg.iv = derivedParams.iv;

        // Decrypt
        var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
        return plaintext;
      }
    });
  }();
});

/***/ }),

/***/ 251:
/*!***************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/mode-cfb.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /**
   * Cipher Feedback block mode.
   */
  CryptoJS.mode.CFB = function () {
    var CFB = CryptoJS.lib.BlockCipherMode.extend();
    CFB.Encryptor = CFB.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

        // Remember this block to use with next block
        this._prevBlock = words.slice(offset, offset + blockSize);
      }
    });
    CFB.Decryptor = CFB.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;

        // Remember this block to use with next block
        var thisBlock = words.slice(offset, offset + blockSize);
        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

        // This block becomes the previous block
        this._prevBlock = thisBlock;
      }
    });
    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
      var keystream;

      // Shortcut
      var iv = this._iv;

      // Generate keystream
      if (iv) {
        keystream = iv.slice(0);

        // Remove IV for subsequent blocks
        this._iv = undefined;
      } else {
        keystream = this._prevBlock;
      }
      cipher.encryptBlock(keystream, 0);

      // Encrypt
      for (var i = 0; i < blockSize; i++) {
        words[offset + i] ^= keystream[i];
      }
    }
    return CFB;
  }();
  return CryptoJS.mode.CFB;
});

/***/ }),

/***/ 252:
/*!***************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/mode-ctr.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /**
   * Counter block mode.
   */
  CryptoJS.mode.CTR = function () {
    var CTR = CryptoJS.lib.BlockCipherMode.extend();
    var Encryptor = CTR.Encryptor = CTR.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter;

        // Generate keystream
        if (iv) {
          counter = this._counter = iv.slice(0);

          // Remove IV for subsequent blocks
          this._iv = undefined;
        }
        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0);

        // Increment counter
        counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;

        // Encrypt
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }
    });
    CTR.Decryptor = Encryptor;
    return CTR;
  }();
  return CryptoJS.mode.CTR;
});

/***/ }),

/***/ 253:
/*!***********************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/mode-ctr-gladman.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   */
  CryptoJS.mode.CTRGladman = function () {
    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
    function incWord(word) {
      if ((word >> 24 & 0xff) === 0xff) {
        //overflow
        var b1 = word >> 16 & 0xff;
        var b2 = word >> 8 & 0xff;
        var b3 = word & 0xff;
        if (b1 === 0xff)
          // overflow b1
          {
            b1 = 0;
            if (b2 === 0xff) {
              b2 = 0;
              if (b3 === 0xff) {
                b3 = 0;
              } else {
                ++b3;
              }
            } else {
              ++b2;
            }
          } else {
          ++b1;
        }
        word = 0;
        word += b1 << 16;
        word += b2 << 8;
        word += b3;
      } else {
        word += 0x01 << 24;
      }
      return word;
    }
    function incCounter(counter) {
      if ((counter[0] = incWord(counter[0])) === 0) {
        // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
        counter[1] = incWord(counter[1]);
      }
      return counter;
    }
    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter;

        // Generate keystream
        if (iv) {
          counter = this._counter = iv.slice(0);

          // Remove IV for subsequent blocks
          this._iv = undefined;
        }
        incCounter(counter);
        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0);

        // Encrypt
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }
    });
    CTRGladman.Decryptor = Encryptor;
    return CTRGladman;
  }();
  return CryptoJS.mode.CTRGladman;
});

/***/ }),

/***/ 254:
/*!***************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/mode-ofb.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /**
   * Output Feedback block mode.
   */
  CryptoJS.mode.OFB = function () {
    var OFB = CryptoJS.lib.BlockCipherMode.extend();
    var Encryptor = OFB.Encryptor = OFB.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var keystream = this._keystream;

        // Generate keystream
        if (iv) {
          keystream = this._keystream = iv.slice(0);

          // Remove IV for subsequent blocks
          this._iv = undefined;
        }
        cipher.encryptBlock(keystream, 0);

        // Encrypt
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }
    });
    OFB.Decryptor = Encryptor;
    return OFB;
  }();
  return CryptoJS.mode.OFB;
});

/***/ }),

/***/ 255:
/*!***************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/mode-ecb.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /**
   * Electronic Codebook block mode.
   */
  CryptoJS.mode.ECB = function () {
    var ECB = CryptoJS.lib.BlockCipherMode.extend();
    ECB.Encryptor = ECB.extend({
      processBlock: function processBlock(words, offset) {
        this._cipher.encryptBlock(words, offset);
      }
    });
    ECB.Decryptor = ECB.extend({
      processBlock: function processBlock(words, offset) {
        this._cipher.decryptBlock(words, offset);
      }
    });
    return ECB;
  }();
  return CryptoJS.mode.ECB;
});

/***/ }),

/***/ 256:
/*!*******************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/pad-ansix923.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /**
   * ANSI X.923 padding strategy.
   */
  CryptoJS.pad.AnsiX923 = {
    pad: function pad(data, blockSize) {
      // Shortcuts
      var dataSigBytes = data.sigBytes;
      var blockSizeBytes = blockSize * 4;

      // Count padding bytes
      var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

      // Compute last byte position
      var lastBytePos = dataSigBytes + nPaddingBytes - 1;

      // Pad
      data.clamp();
      data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
      data.sigBytes += nPaddingBytes;
    },
    unpad: function unpad(data) {
      // Get number of padding bytes from last byte
      var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

      // Remove padding
      data.sigBytes -= nPaddingBytes;
    }
  };
  return CryptoJS.pad.Ansix923;
});

/***/ }),

/***/ 257:
/*!*******************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/pad-iso10126.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /**
   * ISO 10126 padding strategy.
   */
  CryptoJS.pad.Iso10126 = {
    pad: function pad(data, blockSize) {
      // Shortcut
      var blockSizeBytes = blockSize * 4;

      // Count padding bytes
      var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

      // Pad
      data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
    },
    unpad: function unpad(data) {
      // Get number of padding bytes from last byte
      var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

      // Remove padding
      data.sigBytes -= nPaddingBytes;
    }
  };
  return CryptoJS.pad.Iso10126;
});

/***/ }),

/***/ 258:
/*!*******************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/pad-iso97971.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /**
   * ISO/IEC 9797-1 Padding Method 2.
   */
  CryptoJS.pad.Iso97971 = {
    pad: function pad(data, blockSize) {
      // Add 0x80 byte
      data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

      // Zero pad the rest
      CryptoJS.pad.ZeroPadding.pad(data, blockSize);
    },
    unpad: function unpad(data) {
      // Remove zero padding
      CryptoJS.pad.ZeroPadding.unpad(data);

      // Remove one more byte -- the 0x80 byte
      data.sigBytes--;
    }
  };
  return CryptoJS.pad.Iso97971;
});

/***/ }),

/***/ 259:
/*!**********************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/pad-zeropadding.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /**
   * Zero padding strategy.
   */
  CryptoJS.pad.ZeroPadding = {
    pad: function pad(data, blockSize) {
      // Shortcut
      var blockSizeBytes = blockSize * 4;

      // Pad
      data.clamp();
      data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
    },
    unpad: function unpad(data) {
      // Shortcut
      var dataWords = data.words;

      // Unpad
      var i = data.sigBytes - 1;
      for (var i = data.sigBytes - 1; i >= 0; i--) {
        if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff) {
          data.sigBytes = i + 1;
          break;
        }
      }
    }
  };
  return CryptoJS.pad.ZeroPadding;
});

/***/ }),

/***/ 26:
/*!***************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/pages.json ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 260:
/*!********************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/pad-nopadding.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  /**
   * A noop padding strategy.
   */
  CryptoJS.pad.NoPadding = {
    pad: function pad() {},
    unpad: function unpad() {}
  };
  return CryptoJS.pad.NoPadding;
});

/***/ }),

/***/ 261:
/*!*****************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/format-hex.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var CipherParams = C_lib.CipherParams;
    var C_enc = C.enc;
    var Hex = C_enc.Hex;
    var C_format = C.format;
    var HexFormatter = C_format.Hex = {
      /**
       * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
       *
       * @param {CipherParams} cipherParams The cipher params object.
       *
       * @return {string} The hexadecimally encoded string.
       *
       * @static
       *
       * @example
       *
       *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
       */
      stringify: function stringify(cipherParams) {
        return cipherParams.ciphertext.toString(Hex);
      },
      /**
       * Converts a hexadecimally encoded ciphertext string to a cipher params object.
       *
       * @param {string} input The hexadecimally encoded string.
       *
       * @return {CipherParams} The cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
       */
      parse: function parse(input) {
        var ciphertext = Hex.parse(input);
        return CipherParams.create({
          ciphertext: ciphertext
        });
      }
    };
  })();
  return CryptoJS.format.Hex;
});

/***/ }),

/***/ 262:
/*!**********************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/aes.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;

    // Lookup tables
    var SBOX = [];
    var INV_SBOX = [];
    var SUB_MIX_0 = [];
    var SUB_MIX_1 = [];
    var SUB_MIX_2 = [];
    var SUB_MIX_3 = [];
    var INV_SUB_MIX_0 = [];
    var INV_SUB_MIX_1 = [];
    var INV_SUB_MIX_2 = [];
    var INV_SUB_MIX_3 = [];

    // Compute lookup tables
    (function () {
      // Compute double table
      var d = [];
      for (var i = 0; i < 256; i++) {
        if (i < 128) {
          d[i] = i << 1;
        } else {
          d[i] = i << 1 ^ 0x11b;
        }
      }

      // Walk GF(2^8)
      var x = 0;
      var xi = 0;
      for (var i = 0; i < 256; i++) {
        // Compute sbox
        var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
        sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
        SBOX[x] = sx;
        INV_SBOX[sx] = x;

        // Compute multiplication
        var x2 = d[x];
        var x4 = d[x2];
        var x8 = d[x4];

        // Compute sub bytes, mix columns tables
        var t = d[sx] * 0x101 ^ sx * 0x1010100;
        SUB_MIX_0[x] = t << 24 | t >>> 8;
        SUB_MIX_1[x] = t << 16 | t >>> 16;
        SUB_MIX_2[x] = t << 8 | t >>> 24;
        SUB_MIX_3[x] = t;

        // Compute inv sub bytes, inv mix columns tables
        var t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
        INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
        INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
        INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
        INV_SUB_MIX_3[sx] = t;

        // Compute next counter
        if (!x) {
          x = xi = 1;
        } else {
          x = x2 ^ d[d[d[x8 ^ x2]]];
          xi ^= d[d[xi]];
        }
      }
    })();

    // Precomputed Rcon lookup
    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

    /**
     * AES block cipher algorithm.
     */
    var AES = C_algo.AES = BlockCipher.extend({
      _doReset: function _doReset() {
        var t;

        // Skip reset of nRounds has been set before and key did not change
        if (this._nRounds && this._keyPriorReset === this._key) {
          return;
        }

        // Shortcuts
        var key = this._keyPriorReset = this._key;
        var keyWords = key.words;
        var keySize = key.sigBytes / 4;

        // Compute number of rounds
        var nRounds = this._nRounds = keySize + 6;

        // Compute number of key schedule rows
        var ksRows = (nRounds + 1) * 4;

        // Compute key schedule
        var keySchedule = this._keySchedule = [];
        for (var ksRow = 0; ksRow < ksRows; ksRow++) {
          if (ksRow < keySize) {
            keySchedule[ksRow] = keyWords[ksRow];
          } else {
            t = keySchedule[ksRow - 1];
            if (!(ksRow % keySize)) {
              // Rot word
              t = t << 8 | t >>> 24;

              // Sub word
              t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];

              // Mix Rcon
              t ^= RCON[ksRow / keySize | 0] << 24;
            } else if (keySize > 6 && ksRow % keySize == 4) {
              // Sub word
              t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
            }
            keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
          }
        }

        // Compute inv key schedule
        var invKeySchedule = this._invKeySchedule = [];
        for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
          var ksRow = ksRows - invKsRow;
          if (invKsRow % 4) {
            var t = keySchedule[ksRow];
          } else {
            var t = keySchedule[ksRow - 4];
          }
          if (invKsRow < 4 || ksRow <= 4) {
            invKeySchedule[invKsRow] = t;
          } else {
            invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
          }
        }
      },
      encryptBlock: function encryptBlock(M, offset) {
        this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
      },
      decryptBlock: function decryptBlock(M, offset) {
        // Swap 2nd and 4th rows
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
        this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

        // Inv swap 2nd and 4th rows
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
      },
      _doCryptBlock: function _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
        // Shortcut
        var nRounds = this._nRounds;

        // Get input, add round key
        var s0 = M[offset] ^ keySchedule[0];
        var s1 = M[offset + 1] ^ keySchedule[1];
        var s2 = M[offset + 2] ^ keySchedule[2];
        var s3 = M[offset + 3] ^ keySchedule[3];

        // Key schedule row counter
        var ksRow = 4;

        // Rounds
        for (var round = 1; round < nRounds; round++) {
          // Shift rows, sub bytes, mix columns, add round key
          var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
          var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
          var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
          var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

          // Update state
          s0 = t0;
          s1 = t1;
          s2 = t2;
          s3 = t3;
        }

        // Shift rows, sub bytes, add round key
        var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
        var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
        var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
        var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

        // Set output
        M[offset] = t0;
        M[offset + 1] = t1;
        M[offset + 2] = t2;
        M[offset + 3] = t3;
      },
      keySize: 256 / 32
    });

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
     */
    C.AES = BlockCipher._createHelper(AES);
  })();
  return CryptoJS.AES;
});

/***/ }),

/***/ 263:
/*!****************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/tripledes.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;

    // Permuted Choice 1 constants
    var PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];

    // Permuted Choice 2 constants
    var PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];

    // Cumulative bit shift constants
    var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

    // SBOXes and round permutation constants
    var SBOX_P = [{
      0x0: 0x808200,
      0x10000000: 0x8000,
      0x20000000: 0x808002,
      0x30000000: 0x2,
      0x40000000: 0x200,
      0x50000000: 0x808202,
      0x60000000: 0x800202,
      0x70000000: 0x800000,
      0x80000000: 0x202,
      0x90000000: 0x800200,
      0xa0000000: 0x8200,
      0xb0000000: 0x808000,
      0xc0000000: 0x8002,
      0xd0000000: 0x800002,
      0xe0000000: 0x0,
      0xf0000000: 0x8202,
      0x8000000: 0x0,
      0x18000000: 0x808202,
      0x28000000: 0x8202,
      0x38000000: 0x8000,
      0x48000000: 0x808200,
      0x58000000: 0x200,
      0x68000000: 0x808002,
      0x78000000: 0x2,
      0x88000000: 0x800200,
      0x98000000: 0x8200,
      0xa8000000: 0x808000,
      0xb8000000: 0x800202,
      0xc8000000: 0x800002,
      0xd8000000: 0x8002,
      0xe8000000: 0x202,
      0xf8000000: 0x800000,
      0x1: 0x8000,
      0x10000001: 0x2,
      0x20000001: 0x808200,
      0x30000001: 0x800000,
      0x40000001: 0x808002,
      0x50000001: 0x8200,
      0x60000001: 0x200,
      0x70000001: 0x800202,
      0x80000001: 0x808202,
      0x90000001: 0x808000,
      0xa0000001: 0x800002,
      0xb0000001: 0x8202,
      0xc0000001: 0x202,
      0xd0000001: 0x800200,
      0xe0000001: 0x8002,
      0xf0000001: 0x0,
      0x8000001: 0x808202,
      0x18000001: 0x808000,
      0x28000001: 0x800000,
      0x38000001: 0x200,
      0x48000001: 0x8000,
      0x58000001: 0x800002,
      0x68000001: 0x2,
      0x78000001: 0x8202,
      0x88000001: 0x8002,
      0x98000001: 0x800202,
      0xa8000001: 0x202,
      0xb8000001: 0x808200,
      0xc8000001: 0x800200,
      0xd8000001: 0x0,
      0xe8000001: 0x8200,
      0xf8000001: 0x808002
    }, {
      0x0: 0x40084010,
      0x1000000: 0x4000,
      0x2000000: 0x80000,
      0x3000000: 0x40080010,
      0x4000000: 0x40000010,
      0x5000000: 0x40084000,
      0x6000000: 0x40004000,
      0x7000000: 0x10,
      0x8000000: 0x84000,
      0x9000000: 0x40004010,
      0xa000000: 0x40000000,
      0xb000000: 0x84010,
      0xc000000: 0x80010,
      0xd000000: 0x0,
      0xe000000: 0x4010,
      0xf000000: 0x40080000,
      0x800000: 0x40004000,
      0x1800000: 0x84010,
      0x2800000: 0x10,
      0x3800000: 0x40004010,
      0x4800000: 0x40084010,
      0x5800000: 0x40000000,
      0x6800000: 0x80000,
      0x7800000: 0x40080010,
      0x8800000: 0x80010,
      0x9800000: 0x0,
      0xa800000: 0x4000,
      0xb800000: 0x40080000,
      0xc800000: 0x40000010,
      0xd800000: 0x84000,
      0xe800000: 0x40084000,
      0xf800000: 0x4010,
      0x10000000: 0x0,
      0x11000000: 0x40080010,
      0x12000000: 0x40004010,
      0x13000000: 0x40084000,
      0x14000000: 0x40080000,
      0x15000000: 0x10,
      0x16000000: 0x84010,
      0x17000000: 0x4000,
      0x18000000: 0x4010,
      0x19000000: 0x80000,
      0x1a000000: 0x80010,
      0x1b000000: 0x40000010,
      0x1c000000: 0x84000,
      0x1d000000: 0x40004000,
      0x1e000000: 0x40000000,
      0x1f000000: 0x40084010,
      0x10800000: 0x84010,
      0x11800000: 0x80000,
      0x12800000: 0x40080000,
      0x13800000: 0x4000,
      0x14800000: 0x40004000,
      0x15800000: 0x40084010,
      0x16800000: 0x10,
      0x17800000: 0x40000000,
      0x18800000: 0x40084000,
      0x19800000: 0x40000010,
      0x1a800000: 0x40004010,
      0x1b800000: 0x80010,
      0x1c800000: 0x0,
      0x1d800000: 0x4010,
      0x1e800000: 0x40080010,
      0x1f800000: 0x84000
    }, {
      0x0: 0x104,
      0x100000: 0x0,
      0x200000: 0x4000100,
      0x300000: 0x10104,
      0x400000: 0x10004,
      0x500000: 0x4000004,
      0x600000: 0x4010104,
      0x700000: 0x4010000,
      0x800000: 0x4000000,
      0x900000: 0x4010100,
      0xa00000: 0x10100,
      0xb00000: 0x4010004,
      0xc00000: 0x4000104,
      0xd00000: 0x10000,
      0xe00000: 0x4,
      0xf00000: 0x100,
      0x80000: 0x4010100,
      0x180000: 0x4010004,
      0x280000: 0x0,
      0x380000: 0x4000100,
      0x480000: 0x4000004,
      0x580000: 0x10000,
      0x680000: 0x10004,
      0x780000: 0x104,
      0x880000: 0x4,
      0x980000: 0x100,
      0xa80000: 0x4010000,
      0xb80000: 0x10104,
      0xc80000: 0x10100,
      0xd80000: 0x4000104,
      0xe80000: 0x4010104,
      0xf80000: 0x4000000,
      0x1000000: 0x4010100,
      0x1100000: 0x10004,
      0x1200000: 0x10000,
      0x1300000: 0x4000100,
      0x1400000: 0x100,
      0x1500000: 0x4010104,
      0x1600000: 0x4000004,
      0x1700000: 0x0,
      0x1800000: 0x4000104,
      0x1900000: 0x4000000,
      0x1a00000: 0x4,
      0x1b00000: 0x10100,
      0x1c00000: 0x4010000,
      0x1d00000: 0x104,
      0x1e00000: 0x10104,
      0x1f00000: 0x4010004,
      0x1080000: 0x4000000,
      0x1180000: 0x104,
      0x1280000: 0x4010100,
      0x1380000: 0x0,
      0x1480000: 0x10004,
      0x1580000: 0x4000100,
      0x1680000: 0x100,
      0x1780000: 0x4010004,
      0x1880000: 0x10000,
      0x1980000: 0x4010104,
      0x1a80000: 0x10104,
      0x1b80000: 0x4000004,
      0x1c80000: 0x4000104,
      0x1d80000: 0x4010000,
      0x1e80000: 0x4,
      0x1f80000: 0x10100
    }, {
      0x0: 0x80401000,
      0x10000: 0x80001040,
      0x20000: 0x401040,
      0x30000: 0x80400000,
      0x40000: 0x0,
      0x50000: 0x401000,
      0x60000: 0x80000040,
      0x70000: 0x400040,
      0x80000: 0x80000000,
      0x90000: 0x400000,
      0xa0000: 0x40,
      0xb0000: 0x80001000,
      0xc0000: 0x80400040,
      0xd0000: 0x1040,
      0xe0000: 0x1000,
      0xf0000: 0x80401040,
      0x8000: 0x80001040,
      0x18000: 0x40,
      0x28000: 0x80400040,
      0x38000: 0x80001000,
      0x48000: 0x401000,
      0x58000: 0x80401040,
      0x68000: 0x0,
      0x78000: 0x80400000,
      0x88000: 0x1000,
      0x98000: 0x80401000,
      0xa8000: 0x400000,
      0xb8000: 0x1040,
      0xc8000: 0x80000000,
      0xd8000: 0x400040,
      0xe8000: 0x401040,
      0xf8000: 0x80000040,
      0x100000: 0x400040,
      0x110000: 0x401000,
      0x120000: 0x80000040,
      0x130000: 0x0,
      0x140000: 0x1040,
      0x150000: 0x80400040,
      0x160000: 0x80401000,
      0x170000: 0x80001040,
      0x180000: 0x80401040,
      0x190000: 0x80000000,
      0x1a0000: 0x80400000,
      0x1b0000: 0x401040,
      0x1c0000: 0x80001000,
      0x1d0000: 0x400000,
      0x1e0000: 0x40,
      0x1f0000: 0x1000,
      0x108000: 0x80400000,
      0x118000: 0x80401040,
      0x128000: 0x0,
      0x138000: 0x401000,
      0x148000: 0x400040,
      0x158000: 0x80000000,
      0x168000: 0x80001040,
      0x178000: 0x40,
      0x188000: 0x80000040,
      0x198000: 0x1000,
      0x1a8000: 0x80001000,
      0x1b8000: 0x80400040,
      0x1c8000: 0x1040,
      0x1d8000: 0x80401000,
      0x1e8000: 0x400000,
      0x1f8000: 0x401040
    }, {
      0x0: 0x80,
      0x1000: 0x1040000,
      0x2000: 0x40000,
      0x3000: 0x20000000,
      0x4000: 0x20040080,
      0x5000: 0x1000080,
      0x6000: 0x21000080,
      0x7000: 0x40080,
      0x8000: 0x1000000,
      0x9000: 0x20040000,
      0xa000: 0x20000080,
      0xb000: 0x21040080,
      0xc000: 0x21040000,
      0xd000: 0x0,
      0xe000: 0x1040080,
      0xf000: 0x21000000,
      0x800: 0x1040080,
      0x1800: 0x21000080,
      0x2800: 0x80,
      0x3800: 0x1040000,
      0x4800: 0x40000,
      0x5800: 0x20040080,
      0x6800: 0x21040000,
      0x7800: 0x20000000,
      0x8800: 0x20040000,
      0x9800: 0x0,
      0xa800: 0x21040080,
      0xb800: 0x1000080,
      0xc800: 0x20000080,
      0xd800: 0x21000000,
      0xe800: 0x1000000,
      0xf800: 0x40080,
      0x10000: 0x40000,
      0x11000: 0x80,
      0x12000: 0x20000000,
      0x13000: 0x21000080,
      0x14000: 0x1000080,
      0x15000: 0x21040000,
      0x16000: 0x20040080,
      0x17000: 0x1000000,
      0x18000: 0x21040080,
      0x19000: 0x21000000,
      0x1a000: 0x1040000,
      0x1b000: 0x20040000,
      0x1c000: 0x40080,
      0x1d000: 0x20000080,
      0x1e000: 0x0,
      0x1f000: 0x1040080,
      0x10800: 0x21000080,
      0x11800: 0x1000000,
      0x12800: 0x1040000,
      0x13800: 0x20040080,
      0x14800: 0x20000000,
      0x15800: 0x1040080,
      0x16800: 0x80,
      0x17800: 0x21040000,
      0x18800: 0x40080,
      0x19800: 0x21040080,
      0x1a800: 0x0,
      0x1b800: 0x21000000,
      0x1c800: 0x1000080,
      0x1d800: 0x40000,
      0x1e800: 0x20040000,
      0x1f800: 0x20000080
    }, {
      0x0: 0x10000008,
      0x100: 0x2000,
      0x200: 0x10200000,
      0x300: 0x10202008,
      0x400: 0x10002000,
      0x500: 0x200000,
      0x600: 0x200008,
      0x700: 0x10000000,
      0x800: 0x0,
      0x900: 0x10002008,
      0xa00: 0x202000,
      0xb00: 0x8,
      0xc00: 0x10200008,
      0xd00: 0x202008,
      0xe00: 0x2008,
      0xf00: 0x10202000,
      0x80: 0x10200000,
      0x180: 0x10202008,
      0x280: 0x8,
      0x380: 0x200000,
      0x480: 0x202008,
      0x580: 0x10000008,
      0x680: 0x10002000,
      0x780: 0x2008,
      0x880: 0x200008,
      0x980: 0x2000,
      0xa80: 0x10002008,
      0xb80: 0x10200008,
      0xc80: 0x0,
      0xd80: 0x10202000,
      0xe80: 0x202000,
      0xf80: 0x10000000,
      0x1000: 0x10002000,
      0x1100: 0x10200008,
      0x1200: 0x10202008,
      0x1300: 0x2008,
      0x1400: 0x200000,
      0x1500: 0x10000000,
      0x1600: 0x10000008,
      0x1700: 0x202000,
      0x1800: 0x202008,
      0x1900: 0x0,
      0x1a00: 0x8,
      0x1b00: 0x10200000,
      0x1c00: 0x2000,
      0x1d00: 0x10002008,
      0x1e00: 0x10202000,
      0x1f00: 0x200008,
      0x1080: 0x8,
      0x1180: 0x202000,
      0x1280: 0x200000,
      0x1380: 0x10000008,
      0x1480: 0x10002000,
      0x1580: 0x2008,
      0x1680: 0x10202008,
      0x1780: 0x10200000,
      0x1880: 0x10202000,
      0x1980: 0x10200008,
      0x1a80: 0x2000,
      0x1b80: 0x202008,
      0x1c80: 0x200008,
      0x1d80: 0x0,
      0x1e80: 0x10000000,
      0x1f80: 0x10002008
    }, {
      0x0: 0x100000,
      0x10: 0x2000401,
      0x20: 0x400,
      0x30: 0x100401,
      0x40: 0x2100401,
      0x50: 0x0,
      0x60: 0x1,
      0x70: 0x2100001,
      0x80: 0x2000400,
      0x90: 0x100001,
      0xa0: 0x2000001,
      0xb0: 0x2100400,
      0xc0: 0x2100000,
      0xd0: 0x401,
      0xe0: 0x100400,
      0xf0: 0x2000000,
      0x8: 0x2100001,
      0x18: 0x0,
      0x28: 0x2000401,
      0x38: 0x2100400,
      0x48: 0x100000,
      0x58: 0x2000001,
      0x68: 0x2000000,
      0x78: 0x401,
      0x88: 0x100401,
      0x98: 0x2000400,
      0xa8: 0x2100000,
      0xb8: 0x100001,
      0xc8: 0x400,
      0xd8: 0x2100401,
      0xe8: 0x1,
      0xf8: 0x100400,
      0x100: 0x2000000,
      0x110: 0x100000,
      0x120: 0x2000401,
      0x130: 0x2100001,
      0x140: 0x100001,
      0x150: 0x2000400,
      0x160: 0x2100400,
      0x170: 0x100401,
      0x180: 0x401,
      0x190: 0x2100401,
      0x1a0: 0x100400,
      0x1b0: 0x1,
      0x1c0: 0x0,
      0x1d0: 0x2100000,
      0x1e0: 0x2000001,
      0x1f0: 0x400,
      0x108: 0x100400,
      0x118: 0x2000401,
      0x128: 0x2100001,
      0x138: 0x1,
      0x148: 0x2000000,
      0x158: 0x100000,
      0x168: 0x401,
      0x178: 0x2100400,
      0x188: 0x2000001,
      0x198: 0x2100000,
      0x1a8: 0x0,
      0x1b8: 0x2100401,
      0x1c8: 0x100401,
      0x1d8: 0x400,
      0x1e8: 0x2000400,
      0x1f8: 0x100001
    }, {
      0x0: 0x8000820,
      0x1: 0x20000,
      0x2: 0x8000000,
      0x3: 0x20,
      0x4: 0x20020,
      0x5: 0x8020820,
      0x6: 0x8020800,
      0x7: 0x800,
      0x8: 0x8020000,
      0x9: 0x8000800,
      0xa: 0x20800,
      0xb: 0x8020020,
      0xc: 0x820,
      0xd: 0x0,
      0xe: 0x8000020,
      0xf: 0x20820,
      0x80000000: 0x800,
      0x80000001: 0x8020820,
      0x80000002: 0x8000820,
      0x80000003: 0x8000000,
      0x80000004: 0x8020000,
      0x80000005: 0x20800,
      0x80000006: 0x20820,
      0x80000007: 0x20,
      0x80000008: 0x8000020,
      0x80000009: 0x820,
      0x8000000a: 0x20020,
      0x8000000b: 0x8020800,
      0x8000000c: 0x0,
      0x8000000d: 0x8020020,
      0x8000000e: 0x8000800,
      0x8000000f: 0x20000,
      0x10: 0x20820,
      0x11: 0x8020800,
      0x12: 0x20,
      0x13: 0x800,
      0x14: 0x8000800,
      0x15: 0x8000020,
      0x16: 0x8020020,
      0x17: 0x20000,
      0x18: 0x0,
      0x19: 0x20020,
      0x1a: 0x8020000,
      0x1b: 0x8000820,
      0x1c: 0x8020820,
      0x1d: 0x20800,
      0x1e: 0x820,
      0x1f: 0x8000000,
      0x80000010: 0x20000,
      0x80000011: 0x800,
      0x80000012: 0x8020020,
      0x80000013: 0x20820,
      0x80000014: 0x20,
      0x80000015: 0x8020000,
      0x80000016: 0x8000000,
      0x80000017: 0x8000820,
      0x80000018: 0x8020820,
      0x80000019: 0x8000020,
      0x8000001a: 0x8000800,
      0x8000001b: 0x0,
      0x8000001c: 0x20800,
      0x8000001d: 0x820,
      0x8000001e: 0x20020,
      0x8000001f: 0x8020800
    }];

    // Masks that select the SBOX input
    var SBOX_MASK = [0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000, 0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];

    /**
     * DES block cipher algorithm.
     */
    var DES = C_algo.DES = BlockCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words;

        // Select 56 bits according to PC1
        var keyBits = [];
        for (var i = 0; i < 56; i++) {
          var keyBitPos = PC1[i] - 1;
          keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
        }

        // Assemble 16 subkeys
        var subKeys = this._subKeys = [];
        for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
          // Create subkey
          var subKey = subKeys[nSubKey] = [];

          // Shortcut
          var bitShift = BIT_SHIFTS[nSubKey];

          // Select 48 bits according to PC2
          for (var i = 0; i < 24; i++) {
            // Select from the left 28 key bits
            subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;

            // Select from the right 28 key bits
            subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
          }

          // Since each subkey is applied to an expanded 32-bit input,
          // the subkey can be broken into 8 values scaled to 32-bits,
          // which allows the key to be used without expansion
          subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
          for (var i = 1; i < 7; i++) {
            subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
          }
          subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
        }

        // Compute inverse subkeys
        var invSubKeys = this._invSubKeys = [];
        for (var i = 0; i < 16; i++) {
          invSubKeys[i] = subKeys[15 - i];
        }
      },
      encryptBlock: function encryptBlock(M, offset) {
        this._doCryptBlock(M, offset, this._subKeys);
      },
      decryptBlock: function decryptBlock(M, offset) {
        this._doCryptBlock(M, offset, this._invSubKeys);
      },
      _doCryptBlock: function _doCryptBlock(M, offset, subKeys) {
        // Get input
        this._lBlock = M[offset];
        this._rBlock = M[offset + 1];

        // Initial permutation
        exchangeLR.call(this, 4, 0x0f0f0f0f);
        exchangeLR.call(this, 16, 0x0000ffff);
        exchangeRL.call(this, 2, 0x33333333);
        exchangeRL.call(this, 8, 0x00ff00ff);
        exchangeLR.call(this, 1, 0x55555555);

        // Rounds
        for (var round = 0; round < 16; round++) {
          // Shortcuts
          var subKey = subKeys[round];
          var lBlock = this._lBlock;
          var rBlock = this._rBlock;

          // Feistel function
          var f = 0;
          for (var i = 0; i < 8; i++) {
            f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
          }
          this._lBlock = rBlock;
          this._rBlock = lBlock ^ f;
        }

        // Undo swap from last round
        var t = this._lBlock;
        this._lBlock = this._rBlock;
        this._rBlock = t;

        // Final permutation
        exchangeLR.call(this, 1, 0x55555555);
        exchangeRL.call(this, 8, 0x00ff00ff);
        exchangeRL.call(this, 2, 0x33333333);
        exchangeLR.call(this, 16, 0x0000ffff);
        exchangeLR.call(this, 4, 0x0f0f0f0f);

        // Set output
        M[offset] = this._lBlock;
        M[offset + 1] = this._rBlock;
      },
      keySize: 64 / 32,
      ivSize: 64 / 32,
      blockSize: 64 / 32
    });

    // Swap bits across the left and right words
    function exchangeLR(offset, mask) {
      var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
      this._rBlock ^= t;
      this._lBlock ^= t << offset;
    }
    function exchangeRL(offset, mask) {
      var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
      this._lBlock ^= t;
      this._rBlock ^= t << offset;
    }

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
     */
    C.DES = BlockCipher._createHelper(DES);

    /**
     * Triple-DES block cipher algorithm.
     */
    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words;
        // Make sure the key length is valid (64, 128 or >= 192 bit)
        if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
          throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
        }

        // Extend the key according to the keying options defined in 3DES standard
        var key1 = keyWords.slice(0, 2);
        var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
        var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

        // Create DES instances
        this._des1 = DES.createEncryptor(WordArray.create(key1));
        this._des2 = DES.createEncryptor(WordArray.create(key2));
        this._des3 = DES.createEncryptor(WordArray.create(key3));
      },
      encryptBlock: function encryptBlock(M, offset) {
        this._des1.encryptBlock(M, offset);
        this._des2.decryptBlock(M, offset);
        this._des3.encryptBlock(M, offset);
      },
      decryptBlock: function decryptBlock(M, offset) {
        this._des3.decryptBlock(M, offset);
        this._des2.encryptBlock(M, offset);
        this._des1.decryptBlock(M, offset);
      },
      keySize: 192 / 32,
      ivSize: 64 / 32,
      blockSize: 64 / 32
    });

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
     */
    C.TripleDES = BlockCipher._createHelper(TripleDES);
  })();
  return CryptoJS.TripleDES;
});

/***/ }),

/***/ 264:
/*!**********************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/rc4.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;

    /**
     * RC4 stream cipher algorithm.
     */
    var RC4 = C_algo.RC4 = StreamCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words;
        var keySigBytes = key.sigBytes;

        // Init sbox
        var S = this._S = [];
        for (var i = 0; i < 256; i++) {
          S[i] = i;
        }

        // Key setup
        for (var i = 0, j = 0; i < 256; i++) {
          var keyByteIndex = i % keySigBytes;
          var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;
          j = (j + S[i] + keyByte) % 256;

          // Swap
          var t = S[i];
          S[i] = S[j];
          S[j] = t;
        }

        // Counters
        this._i = this._j = 0;
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        M[offset] ^= generateKeystreamWord.call(this);
      },
      keySize: 256 / 32,
      ivSize: 0
    });
    function generateKeystreamWord() {
      // Shortcuts
      var S = this._S;
      var i = this._i;
      var j = this._j;

      // Generate keystream word
      var keystreamWord = 0;
      for (var n = 0; n < 4; n++) {
        i = (i + 1) % 256;
        j = (j + S[i]) % 256;

        // Swap
        var t = S[i];
        S[i] = S[j];
        S[j] = t;
        keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
      }

      // Update counters
      this._i = i;
      this._j = j;
      return keystreamWord;
    }

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
     */
    C.RC4 = StreamCipher._createHelper(RC4);

    /**
     * Modified RC4 stream cipher algorithm.
     */
    var RC4Drop = C_algo.RC4Drop = RC4.extend({
      /**
       * Configuration options.
       *
       * @property {number} drop The number of keystream words to drop. Default 192
       */
      cfg: RC4.cfg.extend({
        drop: 192
      }),
      _doReset: function _doReset() {
        RC4._doReset.call(this);

        // Drop
        for (var i = this.cfg.drop; i > 0; i--) {
          generateKeystreamWord.call(this);
        }
      }
    });

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
     */
    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
  })();
  return CryptoJS.RC4;
});

/***/ }),

/***/ 265:
/*!*************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/rabbit.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;

    // Reusable objects
    var S = [];
    var C_ = [];
    var G = [];

    /**
     * Rabbit stream cipher algorithm
     */
    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var K = this._key.words;
        var iv = this.cfg.iv;

        // Swap endian
        for (var i = 0; i < 4; i++) {
          K[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff | (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;
        }

        // Generate initial state values
        var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];

        // Generate initial counter values
        var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];

        // Carry bit
        this._b = 0;

        // Iterate the system four times
        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        }

        // Modify the counters
        for (var i = 0; i < 8; i++) {
          C[i] ^= X[i + 4 & 7];
        }

        // IV setup
        if (iv) {
          // Shortcuts
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1];

          // Generate four subvectors
          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
          var i1 = i0 >>> 16 | i2 & 0xffff0000;
          var i3 = i2 << 16 | i0 & 0x0000ffff;

          // Modify counter values
          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3;

          // Iterate the system four times
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var X = this._X;

        // Iterate the system
        nextState.call(this);

        // Generate four keystream words
        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
        S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
        S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
        S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
        for (var i = 0; i < 4; i++) {
          // Swap endian
          S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;

          // Encrypt
          M[offset + i] ^= S[i];
        }
      },
      blockSize: 128 / 32,
      ivSize: 64 / 32
    });
    function nextState() {
      // Shortcuts
      var X = this._X;
      var C = this._C;

      // Save old counter values
      for (var i = 0; i < 8; i++) {
        C_[i] = C[i];
      }

      // Calculate new counter values
      C[0] = C[0] + 0x4d34d34d + this._b | 0;
      C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
      C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
      C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
      C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
      C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
      C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
      C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
      this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;

      // Calculate the g-values
      for (var i = 0; i < 8; i++) {
        var gx = X[i] + C[i];

        // Construct high and low argument for squaring
        var ga = gx & 0xffff;
        var gb = gx >>> 16;

        // Calculate high and low result of squaring
        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
        var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);

        // High XOR low
        G[i] = gh ^ gl;
      }

      // Calculate new state values
      X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
      X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
      X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
      X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
      X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
      X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
      X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
      X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
    }

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
     */
    C.Rabbit = StreamCipher._createHelper(Rabbit);
  })();
  return CryptoJS.Rabbit;
});

/***/ }),

/***/ 266:
/*!********************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/node_modules/crypto-js/rabbit-legacy.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
;
(function (root, factory, undef) {
  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250));
  } else if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./core */ 232), __webpack_require__(/*! ./enc-base64 */ 237), __webpack_require__(/*! ./md5 */ 239), __webpack_require__(/*! ./evpkdf */ 249), __webpack_require__(/*! ./cipher-core */ 250)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (CryptoJS) {
  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;

    // Reusable objects
    var S = [];
    var C_ = [];
    var G = [];

    /**
     * Rabbit stream cipher algorithm.
     *
     * This is a legacy version that neglected to convert the key to little-endian.
     * This error doesn't affect the cipher's security,
     * but it does affect its compatibility with other implementations.
     */
    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var K = this._key.words;
        var iv = this.cfg.iv;

        // Generate initial state values
        var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];

        // Generate initial counter values
        var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];

        // Carry bit
        this._b = 0;

        // Iterate the system four times
        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        }

        // Modify the counters
        for (var i = 0; i < 8; i++) {
          C[i] ^= X[i + 4 & 7];
        }

        // IV setup
        if (iv) {
          // Shortcuts
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1];

          // Generate four subvectors
          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
          var i1 = i0 >>> 16 | i2 & 0xffff0000;
          var i3 = i2 << 16 | i0 & 0x0000ffff;

          // Modify counter values
          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3;

          // Iterate the system four times
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      },
      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var X = this._X;

        // Iterate the system
        nextState.call(this);

        // Generate four keystream words
        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
        S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
        S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
        S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
        for (var i = 0; i < 4; i++) {
          // Swap endian
          S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;

          // Encrypt
          M[offset + i] ^= S[i];
        }
      },
      blockSize: 128 / 32,
      ivSize: 64 / 32
    });
    function nextState() {
      // Shortcuts
      var X = this._X;
      var C = this._C;

      // Save old counter values
      for (var i = 0; i < 8; i++) {
        C_[i] = C[i];
      }

      // Calculate new counter values
      C[0] = C[0] + 0x4d34d34d + this._b | 0;
      C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
      C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
      C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
      C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
      C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
      C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
      C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
      this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;

      // Calculate the g-values
      for (var i = 0; i < 8; i++) {
        var gx = X[i] + C[i];

        // Construct high and low argument for squaring
        var ga = gx & 0xffff;
        var gb = gx >>> 16;

        // Calculate high and low result of squaring
        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
        var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);

        // High XOR low
        G[i] = gh ^ gl;
      }

      // Calculate new state values
      X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
      X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
      X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
      X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
      X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
      X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
      X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
      X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
    }

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
     */
    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
  })();
  return CryptoJS.RabbitLegacy;
});

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!******************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/utils/http.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _consts = __webpack_require__(/*! ../../../Desktop/svn源代码/sinohealthtec/yijiaan/trunk/yijiaan-miniprogram/utils/consts.js */ 31);
var _constant = __webpack_require__(/*! ./constant.js */ 32);
var config = __webpack_require__(/*! ./config.js */ 33); //统一的网络请求方法
var util = __webpack_require__(/*! ./util.js */ 34);
var auth = __webpack_require__(/*! ./auth.js */ 35);
function request(params, isGetToken) {
  console.log("开始请求:" + params);
  // 全局变量
  var globalData = getApp().globalData; // 如果正在进行登陆，就将非登陆请求放在队列中等待登陆完毕后进行调用

  // if (!isGetToken && globalData.isLanding) {
  //   globalData.requestQueue.push(params);
  //   return;
  // }

  if (Object.prototype.toString.call(params.data) == "[object Array]") {
    params.data = JSON.stringify(params.data);
  } else if (Object.prototype.toString.call(params.data) == "[object Number]") {
    params.data = params.data + "";
  }
  var needToken = false;
  // if (params.url.indexOf("/p/") == 0 || params.url.indexOf("/user/registerOrBindUser") == 0) {
  // 	needToken = true
  // }

  wx.request({
    // url: config.domain + params.url,
    url: (params.domain ? params.domain : config.domain) + params.url,
    //接口请求地址
    data: params.data,
    header: {
      // 'content-type': params.method == "GET" ? 'application/x-www-form-urlencoded' : 'application/json;charset=utf-8',
      // 'Authorization': params.login ? undefined : uni.getStorageSync('token')
      Authorization: uni.getStorageSync("token")
    },
    method: params.method == undefined ? "POST" : params.method,
    dataType: "json",
    responseType: params.responseType == undefined ? "text" : params.responseType,
    success: function success(res) {
      var responseData = res.data;

      // 00000 请求成功
      if (responseData.code === 200) {
        if (params.callBack) {
          console.log("请求成功");
          params.callBack(responseData.data);
        }
        return;
      }

      // A00004 未授权
      if (responseData.code === 11001) {
        console.log("登录过期");
        uni.removeStorageSync("loginResult");
        uni.removeStorageSync("token");
        auth.wxLogin().then(function () {
          //重新尝试
          request(params);
        }).catch(function (err) {
          uni.hideLoading();
          if (!params.dontTrunLogin) {
            if (uni.getStorageSync("hadLogin")) {
              uni.showModal({
                title: "提示",
                content: "登录已过期",
                cancelText: "取消",
                confirmText: "确定",
                success: function success(res) {
                  if (res.confirm) {
                    // 跳转登录页面
                    var url = "";
                    if (uni.getStorageSync("appType") == _constant.AppType.MP || uni.getStorageSync("appType") == _constant.AppType.MINI) {
                      url = "/pages/login/login";
                    } else {
                      url = "/pages/accountLogin/accountLogin";
                    }
                    uni.navigateTo({
                      url: url
                    });
                  } else {
                    uni.switchTab({
                      url: "/pages/index/index"
                    });
                  }
                }
              });
            } else {
              uni.showModal({
                title: "提示",
                content: "登录已过期",
                cancelText: "取消",
                confirmText: "确定",
                success: function success(res) {
                  if (res.confirm) {
                    // 跳转登录页面

                    uni.navigateTo({
                      url: "/pages/login/login"
                    });
                  } else {
                    uni.switchTab({
                      url: "/pages/index/index"
                    });
                  }
                }
              });
              // 		// 跳转登录页面
              //

              //
              // 		uni.navigateTo({
              // 			url: '/pages/login/login'
              // 		})
              //
            }
          }
        });

        return;
      }

      // A00001 用于直接显示提示用户的错误，内容由输入内容决定
      if (responseData.code === 10000) {
        if (params.errCallBack) {
          params.errCallBack(responseData);
          return;
        }
        uni.showToast({
          title: responseData.msg || "Error",
          icon: "none"
        });
        return;
      }

      // 其他异常
      if (responseData.code !== 200) {
        // console.log('params', params)
        console.log("\u63A5\u53E3: ".concat(params.url));
        console.log("\u8FD4\u56DE\u4FE1\u606F\uFF1A ", res);
        if (params.errCallBack) {
          params.errCallBack(responseData);
        }
        uni.showToast({
          title: res.message,
          icon: "none"
        });
      }
      if (!globalData.isLanding) {
        wx.hideLoading();
      }
    },
    fail: function fail(err) {
      uni.hideLoading();
      if (err.errMsg == "request:fail abort") {
        console.log("请求被取消啦~");
        return;
      }
      setTimeout(function () {
        uni.showToast({
          // zheli
          title: "服务器出了点小差",
          icon: "none"
        });
      }, 1);
    }
  });
} //通过code获取token,并保存到缓存

var getToken = function getToken() {
  // uni.login({
  //   success: res => {
  //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //     request({
  //       login: true,
  //       url: '/login?grant_type=mini_app',
  //       data: {
  //         principal: res.code
  //       },
  //       callBack: result => {
  //         // 没有获取到用户昵称，说明服务器没有保存用户的昵称，也就是用户授权的信息并没有传到服务器
  //         if (!result.nickName) {
  //           updateUserInfo();
  //         }
  //         if (result.userStutas == 0) {
  //           uni.showModal({
  //             showCancel: false,
  //             title: '提示',
  //             content: '您已被禁用，不能购买，请联系客服'
  //           });
  //           uni.setStorageSync('token', '');
  //         } else {
  //           uni.setStorageSync('token', 'bearer' + result.access_token); //把token存入缓存，请求接口数据时要用
  //         }
  //         var globalData = getApp().globalData;
  //         globalData.isLanding = false;
  //         while (globalData.requestQueue.length) {
  //           request(globalData.requestQueue.pop());
  //         }
  //       }
  //     }, true);
  //   }
  // });
}; // 更新用户头像昵称

/**
 * 微信公众号登录
 * @param {Object} fn  登录成功回调
 * @param {String} code  微信授权返回的code, 用于登录
 */
var mpLogin = function mpLogin(fn, code) {
  // 发送 res.code 到后台换取 openId, sessionKey, unionId
  request({
    login: true,
    url: "/appLogin",
    data: {
      principal: code,
      appType: _constant.AppType.MP // 登录类型
    },

    callBack: function callBack(result) {
      loginSuccess(result, fn);
    }
  }, true);
};
var getToken = function getToken(fn) {};

/**
 * 登录成功后执行
 * @param {Object} result  登录成功返回的数据
 * @param {Object} fn		登录成功后的回调
 */
function loginSuccess(result, fn) {
  // if (!result.enabled) {
  // 	uni.showModal({
  // 		showCancel: false,
  // 		title: "提示",
  // 		content: "您已被禁用，不能购买，请联系客服",
  // 		cancelText: "取消",
  // 		confirmText: "确定",
  // 		success: function (res) {
  //       if (res.confirm) {
  // 				wx.switchTab({
  // 					url: '/pages/index/index'
  // 				});
  //       }
  // 		}
  // 	})
  // 	wx.setStorageSync('token', '');
  // 	return
  // }

  // 保存登陆信息
  wx.setStorageSync("loginResult", result);
  // 保存成功登录标识,token过期判断
  wx.setStorageSync("hadLogin", true);
  // 没有获取到用户昵称，说明服务器没有保存用户的昵称，也就是用户授权的信息并没有传到服务器
  // if (!result.pic) {
  // 	updateUserInfo();
  // }
  var expiresTimeStamp = result.expiresIn * 1000 / 2 + new Date().getTime();
  // 缓存token的过期时间
  uni.setStorageSync("expiresTimeStamp", expiresTimeStamp);
  wx.setStorageSync("token", result.accessToken); //把token存入缓存，请求接口数据时要用

  // const routeUrlAfterLogin = uni.getStorageSync('routeUrlAfterLogin')
  // const pages = getCurrentPages()
  // if (pages.length === 1) {
  //   uni.reLaunch({
  //     url: routeUrlAfterLogin
  //   })
  //   uni.removeStorageSync('routeUrlAfterLogin')
  //   return
  // }
  // const prevPage = pages[pages.length - 2]
  // if (!prevPage) {
  // 	wx.switchTab({
  // 		url: '/pages/index/index'
  // 	});
  //   return
  // }
  // // 判断上一页面是否为tabbar页面 (首页和分类页无需登录接口)
  // const isTabbar = prevPage.route === 'pages/user/user' || prevPage.route === 'pages/basket/basket'
  // if (isTabbar) {
  // 	wx.switchTab({
  // 		url: '/' + prevPage.route
  // 	});
  // } else {
  //   // 非tabbar页面
  //   let backDelata = 0
  //   pages.forEach((page, index) => {
  //     if (page.$page.fullPath === routeUrlAfterLogin) {
  //       backDelata = pages.length - index - 1
  //     }
  //   })
  //   if (backDelata) {
  //     uni.navigateBack({
  //       delta: backDelata
  //     })
  //   } else {
  // 		wx.switchTab({
  // 			url: '/pages/index/index'
  // 		});
  //   }
  // }

  if (fn) {
    fn();
  }
}
function updateUserInfo() {
  uni.getUserInfo({
    success: function success(res) {
      var userInfo = JSON.parse(res.rawData);
      request({
        url: "/p/user/setUserInfo",
        method: "PUT",
        data: {
          avatarUrl: userInfo.avatarUrl,
          nickName: userInfo.nickName
        }
      });
    }
  });
}
function isUserAuthInfo() {
  // 查看是否授权
  wx.getSetting({
    success: function success(res) {
      if (res.authSetting["scope.userInfo"]) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        wx.getUserInfo({
          success: function success(res) {
            console.log(res.userInfo);
          }
        });
      }
    }
  });
}
function mpAuthLogin(page, needCode) {
  // 在微信环境打开,请求公众号网页登陆
  var redirectUrl = null;
  if (!page) {
    redirectUrl = window.location.href;
  } else {
    var _window$location = window.location,
      protocol = _window$location.protocol,
      host = _window$location.host,
      pathname = _window$location.pathname,
      hash = _window$location.hash;
    var redirectUrl = "".concat(protocol, "//").concat(host) + page;
  }
  var scope = "snsapi_userinfo";
  window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + config.mpAppId + "&redirect_uri=" + encodeURIComponent(redirectUrl) + "&response_type=code&scope=" + scope + "&state=" + (needCode ? "needCode" : "unNeedCode") + "#wechat_redirect";
}

/**
 * 获取购物车商品数量
 */
function getCartCount() {
  if (!uni.getStorageSync("token")) {
    // wx.removeTabBarBadge({
    // 	index: 2
    // });
    util.removeTabBadge();
    return;
  }
  var params = {
    url: "/p/shopCart/prodCount",
    method: "GET",
    dontTrunLogin: true,
    data: {},
    callBack: function callBack(res) {
      if (res > 0) {
        wx.setTabBarBadge({
          index: 2,
          text: res + ""
        });
        var app = getApp().globalData;
        getApp().globalData.totalCartCount = res;
      } else {
        wx.removeTabBarBadge({
          index: 2
        });
        var app = getApp().globalData;
        getApp().globalData.totalCartCount = 0;
      }
    }
  };
  request(params);
}
exports.getToken = getToken;
exports.request = request;
exports.getCartCount = getCartCount;
exports.updateUserInfo = updateUserInfo;
exports.mpAuthLogin = mpAuthLogin;
exports.loginSuccess = loginSuccess;
exports.mpLogin = mpLogin;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 31:
/*!*******************************************************************************************************!*\
  !*** /Users/zhengheci/Desktop/svn源代码/sinohealthtec/yijiaan/trunk/yijiaan-miniprogram/utils/consts.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var base_url, resource_url;

/**  体验版 */
// base_url = "https://minipro.sinohealthtec.com/trialapi";
// resource_url = "https://static.sinohealthtec.com";

/** 正式版 */
base_url = "https://minipro.sinohealthtec.com/api";
resource_url = "https://static.sinohealthtec.com";

/** 暂时不用*/
// base_url = "http://open.sinohealthtec.com/api";
// resource_url = "http://open.sinohealthtec.com/api";

/** 开发板 */
// base_url = "http://10.10.13.197:9005/api";
// base_url = "http://10.10.14.189:9005/api";//罗浩
// resource_url = "http://10.10.13.197";

var name_storage = {
  location_city_headquarter_name: "location_city_headquarter_name",
  location_city_name: "location_city_name",
  location_city_id: "location_city_id",
  location_city_phone: "location_city_phone",
  is_register_name: "is_register_name",
  is_has_phoneno_name: "is_has_phoneno_name",
  unionid_name: "unionid_name",
  session_name: "session_name",
  wx_userinfo_name: "wx_userinfo_name",
  userinfo_name: "userinfo_name",
  /** 客服电话 */
  service_phone_name: "service_phone_name",
  /** token */
  token: "token",
  /** code */
  wx_code: "wx_code",
  has_unread_consult: "has_unread_consult",
  /** 赛诺菲相关存储key */
  snf_doctor_id: "snf_doctor_id",
  /** 赛诺菲开通服务类型 1-激活 2-支付 */
  snf_open_service_type: "snf_open_service_type"
};
var http_url = {
  /** 微信登陆功能 */
  login: base_url + "/user/login",
  /** 发送短信验证码 */
  send_sms: base_url + "/common/send_sms",
  /** 注册 */
  register: base_url + "/user/register",
  /** 首页 */
  index: base_url + "/index",
  /** 根据城市名称获取城市信息 */
  get_info_city_name: base_url + "/headquarters/get_info_by_city_name",
  /** 根据区域id获取药房名称 */
  headquarter_info: base_url + "/headquarters/headquarter_info",
  /** 药师列表 */
  page_doctor: base_url + "/doctor/page",
  /** 视光中心医师列表 */
  page_doctor_optometry: base_url + "/doctor/page_optometry",
  /** 药师基本信息 */
  info_doctor: base_url + "/doctor/info",
  /** 订阅取消订阅医生 */
  subscription_doctor: base_url + "/doctor/subscription",
  /** 上传留言咨询 */
  consulting_doctor: base_url + "/doctor/consulting",
  /** 上传留言咨询的图片 */
  consult_uploadImage: base_url + "/doctor/uploadImage",
  /** 获取留言咨询的图片 */
  consult_getImageList: base_url + "/doctor/patientConsultImg",
  /** 获取最后购买的商品名称 */
  consult_warenames: base_url + "/doctor/warenames",
  /** 获取指定药师的患者咨询列表 */
  consult_pharmacist_page: base_url + "/doctor/patientConsultByPharmacistId",
  /** 获取指定用户的患者咨询列表 */
  consult_user_list: base_url + "/doctor/patientConsultPageByUserId",
  /** 根据id获取患者咨询详情 */
  consult_detail: base_url + "/doctor/patientConsultById",
  /** 根据id获取患者咨询详情 */
  consult_hasUnread: base_url + "/doctor/hasUnreadConsult",
  /** 根据id获取患者咨询详情 */
  read_consult: base_url + "/doctor/readConsult",
  /** 专栏列表药师 */
  page_column: base_url + "/column/page",
  /** 专栏列表视光 */
  page_column_optometry: base_url + "/column/page_optometry",
  /** 专栏详情 */
  info_column: base_url + "/column/info",
  /** 提交评论 */
  comment_column: base_url + "/column/comment",
  /** 点赞 */
  like_column: base_url + "/column/like",
  /** 收藏 */
  collect_column: base_url + "/column/collect",
  /**  取消收藏 */
  cancel_collec: base_url + "/column/cancel_collec",
  /** 转发 */
  forward_column: base_url + "/column/forward",
  /** 阅读 */
  read_column: base_url + "/column/read",
  /** 客服电话 */
  service_phone: base_url + "/system/get_service_phone",
  /** basic信息 */
  basic_info: base_url + "/user/basic_info",
  /** 保存basic信息 */
  save_basic_info: base_url + "/user/save_basic",
  /** 健康档案 */
  health_list: base_url + "/user/health_list",
  /** 订阅列表 */
  subscription_list: base_url + "/user/subscription",
  /** 文章收藏列表 */
  collect_list: base_url + "/user/collect",
  /** 解密 */
  decrypt: base_url + "/common/decrypt",
  /** 实时音视频获取基本信息 */
  get_usersig: base_url + "/webrtc/get_usersig",
  /** 实时音视频加入房间 */
  join_room: base_url + "/webrtc/join_room",
  /** 实时音视频心跳检测 */
  heartbeat: base_url + "/webrtc/heartbeat",
  /** 实时音视频离开房间 */
  leave_room: base_url + "/webrtc/leave_room",
  /** 和缓视频医生服务是否过期 */
  is_in_service: base_url + "/is_in_service",
  /** 家庭圈列表 */
  list_user_family: base_url + "/user/list_user_family",
  /** 添加家庭圈成员 */
  add_user_family: base_url + "/user/add_user_family",
  /** 订单-和缓卡订单下单 */
  hehuan_card_order_add: base_url + "/user/hehuan_card_order_add",
  /** 订单-查询订单状态 */
  hehuan_card_order_status: base_url + "/user/hehuan_card_order_status",
  /** 和缓卡激活*/
  hehuan_card_activate: base_url + "/hehuan_card_activation/hehuan_card_activate",
  /** 用户已激活卡列表*/
  activated_card_list: base_url + "/hehuan_card_activation/activated_card_list",
  /** 和缓电子病历查看 */
  hehuan_record_list: base_url + "/hehuan_record/list_record",
  /** 订单-和缓卡订单列表 */
  hehuan_card_order_list: base_url + "/user/hehuan_card_order_list",
  /** 订单-和缓卡订单详情 */
  hehuan_card_order_info: base_url + "/user/hehuan_card_order_info",
  /** 赛诺菲-绑定医生药师 */
  snf_bind_user_doctor: base_url + "/snf/bind_user_doctor",
  /** 赛诺菲-服务状态 */
  snf_is_service_opened: base_url + "/snf/is_service_opened",
  /** 赛诺菲-药师列表 */
  snf_pharmacist_list: base_url + "/snf/pharmacist_list",
  /** 赛诺菲-提交资料 */
  snf_extend_userInfo: base_url + "/snf/extend_userInfo",
  /** 赛诺菲-激活服务 */
  snf_activate_service: base_url + "/snf/activate_service",
  /** 赛诺菲-支付服务 */
  snf_wx_pay_service: base_url + "/snf/wx_pay_service",
  /** 赛诺菲-糖护士绑定*/
  snf_device_bind: base_url + "/snf/ths_activate",
  /** 赛诺菲-糖护士解绑*/
  snf_device_delBind: base_url + "/snf/ths_deactivate",
  /** 赛诺菲-糖护士绑定设备列表*/
  snf_device_list: base_url + "/snf/ths_list",
  /** 赛诺菲-患者补充信息*/
  snf_get_extend_userinfo: base_url + "/snf/get_extend_userinfo",
  /**获取绑定医生信息*/
  get_bind_doctor_info: base_url + "/user/getFetalHeartDoctorInfo",
  /**关联绑定医生信息*/
  bind_doctor_info: base_url + "/user/bindDoctor"
  // /**获取绑定医生信息*/
  // get_bind_doctor_info: "http://open.sinohealthtec.com/api" + "/user/getFetalHeartDoctorInfo",
  /**关联绑定医生信息*/
  //  bind_doctor_info: "http://open.sinohealthtec.com/api" + "/user/bindDoctor",
};

module.exports = {
  base_url: base_url,
  name_storage: name_storage,
  http_url: http_url,
  resource_url: resource_url
};

/***/ }),

/***/ 32:
/*!**********************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/utils/constant.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var PayType = {
  SCOREPAY: 0,
  // 积分支付
  WECHATPAY: 1,
  // 小程序支付
  ALIPAY: 2,
  // 支付宝支付
  WECHATPAY_SWEEP_CODE: 3,
  //微信扫码支付
  WECHATPAY_H5: 4,
  //微信H5支付
  WECHATPAY_MP: 5,
  //微信公众号支付
  ALIPAY_H5: 6,
  //支付宝H5支付
  ALIPAY_APP: 7,
  // 支付宝APP支付
  WECHATPAY_APP: 8,
  // 微信APP支付
  BALANCEPAY: 9 // 余额支付
};

var AppType = {
  MINI: 1,
  // 小程序
  MP: 2,
  // 微信公众号
  PC: 3,
  //pc
  H5: 4,
  //h5
  ANDROID: 5,
  //安卓
  IOS: 6,
  //苹果
  ALI: 7,
  //支付宝H5
  ALIMINI: 8 //支付宝小程序
};

module.exports = {
  PayType: PayType,
  AppType: AppType
};

/***/ }),

/***/ 33:
/*!********************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/utils/config.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 公众号appid
var mpAppId = 'wx81a3c2c1f68c91d6';
// 临时
var domain = "http://127.0.0.1:3100/api"; //统一接口域名，测试环境

exports.domain = domain;
exports.mpAppId = mpAppId;

/***/ }),

/***/ 34:
/*!******************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/utils/util.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};
var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
var formatHtml = function formatHtml(content) {
  content = content.replace(/\<img/gi, '<img style="width:100% !important;height:auto !important;margin:0;display:flex;" ');
  content = content.replace(/\<td/gi, '<td  cellspacing="0" cellpadding="0" border="0" style="display:block;vertical-align:top;margin: 0px; padding: 0px; border: 0px;outline-width:0px;" ');
  content = content.replace(/width=/gi, 'sss=');
  content = content.replace(/height=/gi, 'sss=');
  content = content.replace(/ \/\>/gi, ' style="max-width:100% !important;height:auto !important;margin:0;display:block;" \/\>');
  return content;
};

/**
 * 获取链接上的参数
 */
var getUrlKey = function getUrlKey(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || ['', ''])[1].replace(/\+/g, '%20')) || null;
};

/**
 * 移除购物车Tabbar的数字
 */
var removeTabBadge = function removeTabBadge() {
  var pl = '';
  pl = 'mp';
  uni.removeTabBarBadge({
    index: pl == 'mp' ? 3 : 2
  });
};
module.exports = {
  formatTime: formatTime,
  getUrlKey: getUrlKey,
  formatHtml: formatHtml,
  removeTabBadge: removeTabBadge
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 35:
/*!******************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/utils/auth.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var http = __webpack_require__(/*! ./http.js */ 30);

//两个调用时机
//1. onLauch
//2. 后端返回认证失败之后
var wxLogin = function wxLogin() {
  return new Promise(function (resolve, reject) {
    console.log("自动登录");
    var globalData = getApp().globalData;
    var token = uni.getStorageSync("token");
    if (token) {
      resolve();
    } else if (globalData.isLanding) {
      // 说明有并发登录请求，请求轮询稍后，避免重复调用登录接口,如果前面的成功,后面的也不会再执行了
      setTimeout(function () {
        wxLogin().then(function (res) {
          resolve(res);
        }).catch(function (err) {
          reject(err);
        });
      }, 500);
    } else {
      globalData.isLanding = true;
      uni.login({
        success: function success(res) {
          console.log("准备给后台发code");
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          var params = {
            url: "/user/auth/wxLogin",
            method: "post",
            data: {
              code: res.code
            },
            callBack: function callBack(res) {
              http.loginSuccess(res, function () {
                console.log("登录成功:" + JSON.stringify(res));
                globalData.isLanding = false;
                resolve();
              });
            },
            errCallBack: function errCallBack(res) {
              console.log("登录失败:" + JSON.stringify(res));
              globalData.isLanding = false;
              reject(res);
            }
          };
          http.request(params);
        },
        fail: function fail(err) {
          console.log("登录失败:" + err);
          globalData.isLanding = false;
          reject(err);
        }
      });
    }
  });
};
exports.wxLogin = wxLogin;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 370:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 371)();
module.exports = runtime;

/***/ }),

/***/ 371:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 372:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 373:
/*!***********************************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/uni_modules/uni-forms/components/uni-forms/validate.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 370));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 374));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 375));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 377));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 372));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var pattern = {
  email: /^\S+?@\S+?\.\S+?$/,
  idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i')
};
var FORMAT_MAPPING = {
  "int": 'integer',
  "bool": 'boolean',
  "double": 'number',
  "long": 'number',
  "password": 'string'
  // "fileurls": 'array'
};

function formatMessage(args) {
  var resources = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultMessage = ['label'];
  defaultMessage.forEach(function (item) {
    if (args[item] === undefined) {
      args[item] = '';
    }
  });
  var str = resources;
  for (var key in args) {
    var reg = new RegExp('{' + key + '}');
    str = str.replace(reg, args[key]);
  }
  return str;
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (typeof value === 'string' && !value) {
    return true;
  }
  if (Array.isArray(value) && !value.length) {
    return true;
  }
  if (type === 'object' && !Object.keys(value).length) {
    return true;
  }
  return false;
}
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  string: function string(value) {
    return typeof value === 'string';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  "boolean": function boolean(value) {
    return typeof value === 'boolean';
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  object: function object(value) {
    return (0, _typeof2.default)(value) === 'object' && !types.array(value);
  },
  date: function date(value) {
    return value instanceof Date;
  },
  timestamp: function timestamp(value) {
    if (!this.integer(value) || Math.abs(value).toString().length > 16) {
      return false;
    }
    return true;
  },
  file: function file(value) {
    return typeof value.url === 'string';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  pattern: function pattern(reg, value) {
    try {
      return new RegExp(reg).test(value);
    } catch (e) {
      return false;
    }
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  idcard: function idcard(value) {
    return typeof value === 'string' && !!value.match(pattern.idcard);
  },
  'url-https': function urlHttps(value) {
    return this.url(value) && value.startsWith('https://');
  },
  'url-scheme': function urlScheme(value) {
    return value.startsWith('://');
  },
  'url-web': function urlWeb(value) {
    return false;
  }
};
var RuleValidator = /*#__PURE__*/function () {
  function RuleValidator(message) {
    (0, _classCallCheck2.default)(this, RuleValidator);
    this._message = message;
  }
  (0, _createClass2.default)(RuleValidator, [{
    key: "validateRule",
    value: function () {
      var _validateRule = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(fieldKey, fieldValue, value, data, allData) {
        var result, rules, hasRequired, message, i, rule, vt, now, resultExpr;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = null;
                rules = fieldValue.rules;
                hasRequired = rules.findIndex(function (item) {
                  return item.required;
                });
                if (!(hasRequired < 0)) {
                  _context.next = 8;
                  break;
                }
                if (!(value === null || value === undefined)) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return", result);
              case 6:
                if (!(typeof value === 'string' && !value.length)) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return", result);
              case 8:
                message = this._message;
                if (!(rules === undefined)) {
                  _context.next = 11;
                  break;
                }
                return _context.abrupt("return", message['default']);
              case 11:
                i = 0;
              case 12:
                if (!(i < rules.length)) {
                  _context.next = 35;
                  break;
                }
                rule = rules[i];
                vt = this._getValidateType(rule);
                Object.assign(rule, {
                  label: fieldValue.label || "[\"".concat(fieldKey, "\"]")
                });
                if (!RuleValidatorHelper[vt]) {
                  _context.next = 20;
                  break;
                }
                result = RuleValidatorHelper[vt](rule, value, message);
                if (!(result != null)) {
                  _context.next = 20;
                  break;
                }
                return _context.abrupt("break", 35);
              case 20:
                if (!rule.validateExpr) {
                  _context.next = 26;
                  break;
                }
                now = Date.now();
                resultExpr = rule.validateExpr(value, allData, now);
                if (!(resultExpr === false)) {
                  _context.next = 26;
                  break;
                }
                result = this._getMessage(rule, rule.errorMessage || this._message['default']);
                return _context.abrupt("break", 35);
              case 26:
                if (!rule.validateFunction) {
                  _context.next = 32;
                  break;
                }
                _context.next = 29;
                return this.validateFunction(rule, value, data, allData, vt);
              case 29:
                result = _context.sent;
                if (!(result !== null)) {
                  _context.next = 32;
                  break;
                }
                return _context.abrupt("break", 35);
              case 32:
                i++;
                _context.next = 12;
                break;
              case 35:
                if (result !== null) {
                  result = message.TAG + result;
                }
                return _context.abrupt("return", result);
              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function validateRule(_x, _x2, _x3, _x4, _x5) {
        return _validateRule.apply(this, arguments);
      }
      return validateRule;
    }()
  }, {
    key: "validateFunction",
    value: function () {
      var _validateFunction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(rule, value, data, allData, vt) {
        var result, callbackMessage, res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = null;
                _context2.prev = 1;
                callbackMessage = null;
                _context2.next = 5;
                return rule.validateFunction(rule, value, allData || data, function (message) {
                  callbackMessage = message;
                });
              case 5:
                res = _context2.sent;
                if (callbackMessage || typeof res === 'string' && res || res === false) {
                  result = this._getMessage(rule, callbackMessage || res, vt);
                }
                _context2.next = 12;
                break;
              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                result = this._getMessage(rule, _context2.t0.message, vt);
              case 12:
                return _context2.abrupt("return", result);
              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 9]]);
      }));
      function validateFunction(_x6, _x7, _x8, _x9, _x10) {
        return _validateFunction.apply(this, arguments);
      }
      return validateFunction;
    }()
  }, {
    key: "_getMessage",
    value: function _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message['default']);
    }
  }, {
    key: "_getValidateType",
    value: function _getValidateType(rule) {
      var result = '';
      if (rule.required) {
        result = 'required';
      } else if (rule.format) {
        result = 'format';
      } else if (rule.arrayType) {
        result = 'arrayTypeFormat';
      } else if (rule.range) {
        result = 'range';
      } else if (rule.maximum !== undefined || rule.minimum !== undefined) {
        result = 'rangeNumber';
      } else if (rule.maxLength !== undefined || rule.minLength !== undefined) {
        result = 'rangeLength';
      } else if (rule.pattern) {
        result = 'pattern';
      } else if (rule.validateFunction) {
        result = 'validateFunction';
      }
      return result;
    }
  }]);
  return RuleValidator;
}();
var RuleValidatorHelper = {
  required: function required(rule, value, message) {
    if (rule.required && isEmptyValue(value, rule.format || (0, _typeof2.default)(value))) {
      return formatMessage(rule, rule.errorMessage || message.required);
    }
    return null;
  },
  range: function range(rule, value, message) {
    var range = rule.range,
      errorMessage = rule.errorMessage;
    var list = new Array(range.length);
    for (var i = 0; i < range.length; i++) {
      var item = range[i];
      if (types.object(item) && item.value !== undefined) {
        list[i] = item.value;
      } else {
        list[i] = item;
      }
    }
    var result = false;
    if (Array.isArray(value)) {
      result = new Set(value.concat(list)).size === list.length;
    } else {
      if (list.indexOf(value) > -1) {
        result = true;
      }
    }
    if (!result) {
      return formatMessage(rule, errorMessage || message['enum']);
    }
    return null;
  },
  rangeNumber: function rangeNumber(rule, value, message) {
    if (!types.number(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    var minimum = rule.minimum,
      maximum = rule.maximum,
      exclusiveMinimum = rule.exclusiveMinimum,
      exclusiveMaximum = rule.exclusiveMaximum;
    var min = exclusiveMinimum ? value <= minimum : value < minimum;
    var max = exclusiveMaximum ? value >= maximum : value > maximum;
    if (minimum !== undefined && min) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMinimum ? 'exclusiveMinimum' : 'minimum']);
    } else if (maximum !== undefined && max) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMaximum ? 'exclusiveMaximum' : 'maximum']);
    } else if (minimum !== undefined && maximum !== undefined && (min || max)) {
      return formatMessage(rule, rule.errorMessage || message['number'].range);
    }
    return null;
  },
  rangeLength: function rangeLength(rule, value, message) {
    if (!types.string(value) && !types.array(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    var min = rule.minLength;
    var max = rule.maxLength;
    var val = value.length;
    if (min !== undefined && val < min) {
      return formatMessage(rule, rule.errorMessage || message['length'].minLength);
    } else if (max !== undefined && val > max) {
      return formatMessage(rule, rule.errorMessage || message['length'].maxLength);
    } else if (min !== undefined && max !== undefined && (val < min || val > max)) {
      return formatMessage(rule, rule.errorMessage || message['length'].range);
    }
    return null;
  },
  pattern: function pattern(rule, value, message) {
    if (!types['pattern'](rule.pattern, value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    return null;
  },
  format: function format(rule, value, message) {
    var customTypes = Object.keys(types);
    var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
    if (customTypes.indexOf(format) > -1) {
      if (!types[format](value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
    }
    return null;
  },
  arrayTypeFormat: function arrayTypeFormat(rule, value, message) {
    if (!Array.isArray(value)) {
      return formatMessage(rule, rule.errorMessage || message.typeError);
    }
    for (var i = 0; i < value.length; i++) {
      var element = value[i];
      var formatResult = this.format(rule, element, message);
      if (formatResult !== null) {
        return formatResult;
      }
    }
    return null;
  }
};
var SchemaValidator = /*#__PURE__*/function (_RuleValidator) {
  (0, _inherits2.default)(SchemaValidator, _RuleValidator);
  var _super = _createSuper(SchemaValidator);
  function SchemaValidator(schema, options) {
    var _this;
    (0, _classCallCheck2.default)(this, SchemaValidator);
    _this = _super.call(this, SchemaValidator.message);
    _this._schema = schema;
    _this._options = options || null;
    return _this;
  }
  (0, _createClass2.default)(SchemaValidator, [{
    key: "updateSchema",
    value: function updateSchema(schema) {
      this._schema = schema;
    }
  }, {
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context3.next = 5;
                  break;
                }
                _context3.next = 4;
                return this.invokeValidate(data, false, allData);
              case 4:
                result = _context3.sent;
              case 5:
                return _context3.abrupt("return", result.length ? result[0] : null);
              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function validate(_x11, _x12) {
        return _validate.apply(this, arguments);
      }
      return validate;
    }()
  }, {
    key: "validateAll",
    value: function () {
      var _validateAll = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context4.next = 5;
                  break;
                }
                _context4.next = 4;
                return this.invokeValidate(data, true, allData);
              case 4:
                result = _context4.sent;
              case 5:
                return _context4.abrupt("return", result);
              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function validateAll(_x13, _x14) {
        return _validateAll.apply(this, arguments);
      }
      return validateAll;
    }()
  }, {
    key: "validateUpdate",
    value: function () {
      var _validateUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context5.next = 5;
                  break;
                }
                _context5.next = 4;
                return this.invokeValidateUpdate(data, false, allData);
              case 4:
                result = _context5.sent;
              case 5:
                return _context5.abrupt("return", result.length ? result[0] : null);
              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function validateUpdate(_x15, _x16) {
        return _validateUpdate.apply(this, arguments);
      }
      return validateUpdate;
    }()
  }, {
    key: "invokeValidate",
    value: function () {
      var _invokeValidate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(data, all, allData) {
        var result, schema, key, value, errorMessage;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = [];
                schema = this._schema;
                _context6.t0 = _regenerator.default.keys(schema);
              case 3:
                if ((_context6.t1 = _context6.t0()).done) {
                  _context6.next = 15;
                  break;
                }
                key = _context6.t1.value;
                value = schema[key];
                _context6.next = 8;
                return this.validateRule(key, value, data[key], data, allData);
              case 8:
                errorMessage = _context6.sent;
                if (!(errorMessage != null)) {
                  _context6.next = 13;
                  break;
                }
                result.push({
                  key: key,
                  errorMessage: errorMessage
                });
                if (all) {
                  _context6.next = 13;
                  break;
                }
                return _context6.abrupt("break", 15);
              case 13:
                _context6.next = 3;
                break;
              case 15:
                return _context6.abrupt("return", result);
              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function invokeValidate(_x17, _x18, _x19) {
        return _invokeValidate.apply(this, arguments);
      }
      return invokeValidate;
    }()
  }, {
    key: "invokeValidateUpdate",
    value: function () {
      var _invokeValidateUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(data, all, allData) {
        var result, key, errorMessage;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result = [];
                _context7.t0 = _regenerator.default.keys(data);
              case 2:
                if ((_context7.t1 = _context7.t0()).done) {
                  _context7.next = 13;
                  break;
                }
                key = _context7.t1.value;
                _context7.next = 6;
                return this.validateRule(key, this._schema[key], data[key], data, allData);
              case 6:
                errorMessage = _context7.sent;
                if (!(errorMessage != null)) {
                  _context7.next = 11;
                  break;
                }
                result.push({
                  key: key,
                  errorMessage: errorMessage
                });
                if (all) {
                  _context7.next = 11;
                  break;
                }
                return _context7.abrupt("break", 13);
              case 11:
                _context7.next = 2;
                break;
              case 13:
                return _context7.abrupt("return", result);
              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function invokeValidateUpdate(_x20, _x21, _x22) {
        return _invokeValidateUpdate.apply(this, arguments);
      }
      return invokeValidateUpdate;
    }()
  }, {
    key: "_checkFieldInSchema",
    value: function _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return '';
      }
      var noExistFields = keys.filter(function (key) {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message['defaultInvalid']);
      return [{
        key: 'invalid',
        errorMessage: errorMessage
      }];
    }
  }]);
  return SchemaValidator;
}(RuleValidator);
function Message() {
  return {
    TAG: "",
    default: '验证错误',
    defaultInvalid: '提交的字段{field}在数据库中并不存在',
    validateFunction: '验证无效',
    required: '{label}必填',
    'enum': '{label}超出范围',
    timestamp: '{label}格式无效',
    whitespace: '{label}不能为空',
    typeError: '{label}类型无效',
    date: {
      format: '{label}日期{value}格式无效',
      parse: '{label}日期无法解析,{value}无效',
      invalid: '{label}日期{value}无效'
    },
    length: {
      minLength: '{label}长度不能少于{minLength}',
      maxLength: '{label}长度不能超过{maxLength}',
      range: '{label}必须介于{minLength}和{maxLength}之间'
    },
    number: {
      minimum: '{label}不能小于{minimum}',
      maximum: '{label}不能大于{maximum}',
      exclusiveMinimum: '{label}不能小于等于{minimum}',
      exclusiveMaximum: '{label}不能大于等于{maximum}',
      range: '{label}必须介于{minimum}and{maximum}之间'
    },
    pattern: {
      mismatch: '{label}格式不匹配'
    }
  };
}
SchemaValidator.message = new Message();
var _default = SchemaValidator;
exports.default = _default;

/***/ }),

/***/ 374:
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 375:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 376);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 376:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 377:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 378:
/*!********************************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/uni_modules/uni-forms/components/uni-forms/utils.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeFilter = exports.type = exports.setDataValue = exports.realName = exports.rawData = exports.objSet = exports.objGet = exports.name2arr = exports.isRequiredField = exports.isRealName = exports.isNumber = exports.isEqual = exports.isBoolean = exports.getValue = exports.getDataValueType = exports.getDataValue = exports.deepCopy = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 简单处理对象拷贝
 * @param {Obejct} 被拷贝对象
 * @@return {Object} 拷贝对象
 */
var deepCopy = function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
};
/**
 * 过滤数字类型
 * @param {String} format 数字类型
 * @@return {Boolean} 返回是否为数字类型
 */
exports.deepCopy = deepCopy;
var typeFilter = function typeFilter(format) {
  return format === 'int' || format === 'double' || format === 'number' || format === 'timestamp';
};

/**
 * 把 value 转换成指定的类型，用于处理初始值，原因是初始值需要入库不能为 undefined
 * @param {String} key 字段名
 * @param {any} value 字段值
 * @param {Object} rules 表单校验规则
 */
exports.typeFilter = typeFilter;
var getValue = function getValue(key, value, rules) {
  var isRuleNumType = rules.find(function (val) {
    return val.format && typeFilter(val.format);
  });
  var isRuleBoolType = rules.find(function (val) {
    return val.format && val.format === 'boolean' || val.format === 'bool';
  });
  // 输入类型为 number
  if (!!isRuleNumType) {
    if (!value && value !== 0) {
      value = null;
    } else {
      value = isNumber(Number(value)) ? Number(value) : value;
    }
  }

  // 输入类型为 boolean
  if (!!isRuleBoolType) {
    value = isBoolean(value) ? value : false;
  }
  return value;
};

/**
 * 获取表单数据
 * @param {String|Array} name 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 * @param {any} value  需要设置的值
 */
exports.getValue = getValue;
var setDataValue = function setDataValue(field, formdata, value) {
  formdata[field] = value;
  return value || '';
};

/**
 * 获取表单数据
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 */
exports.setDataValue = setDataValue;
var getDataValue = function getDataValue(field, data) {
  return objGet(data, field);
};

/**
 * 获取表单类型
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 */
exports.getDataValue = getDataValue;
var getDataValueType = function getDataValueType(field, data) {
  var value = getDataValue(field, data);
  return {
    type: type(value),
    value: value
  };
};

/**
 * 获取表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */
exports.getDataValueType = getDataValueType;
var realName = function realName(name) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var base_name = _basePath(name);
  if ((0, _typeof2.default)(base_name) === 'object' && Array.isArray(base_name) && base_name.length > 1) {
    var realname = base_name.reduce(function (a, b) {
      return a += "#".concat(b);
    }, '_formdata_');
    return realname;
  }
  return base_name[0] || name;
};

/**
 * 判断是否表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */
exports.realName = realName;
var isRealName = function isRealName(name) {
  var reg = /^_formdata_#*/;
  return reg.test(name);
};

/**
 * 获取表单数据的原始格式
 * @@return {Object|Array} object 需要解析的数据
 */
exports.isRealName = isRealName;
var rawData = function rawData() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var newData = JSON.parse(JSON.stringify(object));
  var formData = {};
  for (var i in newData) {
    var path = name2arr(i);
    objSet(formData, path, newData[i]);
  }
  return formData;
};

/**
 * 真实name还原为 array
 * @param {*} name 
 */
exports.rawData = rawData;
var name2arr = function name2arr(name) {
  var field = name.replace('_formdata_#', '');
  field = field.split('#').map(function (v) {
    return isNumber(v) ? Number(v) : v;
  });
  return field;
};

/**
 * 对象中设置值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} value 需要设置的值
 */
exports.name2arr = name2arr;
var objSet = function objSet(object, path, value) {
  if ((0, _typeof2.default)(object) !== 'object') return object;
  _basePath(path).reduce(function (o, k, i, _) {
    if (i === _.length - 1) {
      // 若遍历结束直接赋值
      o[k] = value;
      return null;
    } else if (k in o) {
      // 若存在对应路径，则返回找到的对象，进行下一次遍历
      return o[k];
    } else {
      // 若不存在对应路径，则创建对应对象，若下一路径是数字，新对象赋值为空数组，否则赋值为空对象
      o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
      return o[k];
    }
  }, object);
  // 返回object
  return object;
};

// 处理 path， path有三种形式：'a[0].b.c'、'a.0.b.c' 和 ['a','0','b','c']，需要统一处理成数组，便于后续使用
exports.objSet = objSet;
function _basePath(path) {
  // 若是数组，则直接返回
  if (Array.isArray(path)) return path;
  // 若有 '[',']'，则替换成将 '[' 替换成 '.',去掉 ']'
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

/**
 * 从对象中获取值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} defaultVal 如果无法从调用链中获取值的默认值
 */
var objGet = function objGet(object, path) {
  var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undefined';
  // 先将path处理成统一格式
  var newPath = _basePath(path);
  // 递归处理，返回最后结果
  var val = newPath.reduce(function (o, k) {
    return (o || {})[k];
  }, object);
  return !val || val !== undefined ? val : defaultVal;
};

/**
 * 是否为 number 类型 
 * @param {any} num 需要判断的值
 * @return {Boolean} 是否为 number
 */
exports.objGet = objGet;
var isNumber = function isNumber(num) {
  return !isNaN(Number(num));
};

/**
 * 是否为 boolean 类型 
 * @param {any} bool 需要判断的值
 * @return {Boolean} 是否为 boolean
 */
exports.isNumber = isNumber;
var isBoolean = function isBoolean(bool) {
  return typeof bool === 'boolean';
};
/**
 * 是否有必填字段
 * @param {Object} rules 规则
 * @return {Boolean} 是否有必填字段
 */
exports.isBoolean = isBoolean;
var isRequiredField = function isRequiredField(rules) {
  var isNoField = false;
  for (var i = 0; i < rules.length; i++) {
    var ruleData = rules[i];
    if (ruleData.required) {
      isNoField = true;
      break;
    }
  }
  return isNoField;
};

/**
 * 获取数据类型
 * @param {Any} obj 需要获取数据类型的值
 */
exports.isRequiredField = isRequiredField;
var type = function type(obj) {
  var class2type = {};

  // 生成class2type映射
  "Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
  });
  if (obj == null) {
    return obj + "";
  }
  return (0, _typeof2.default)(obj) === "object" || typeof obj === "function" ? class2type[Object.prototype.toString.call(obj)] || "object" : (0, _typeof2.default)(obj);
};

/**
 * 判断两个值是否相等
 * @param {any} a 值  
 * @param {any} b 值  
 * @return {Boolean} 是否相等
 */
exports.type = type;
var isEqual = function isEqual(a, b) {
  //如果a和b本来就全等
  if (a === b) {
    //判断是否为0和-0
    return a !== 0 || 1 / a === 1 / b;
  }
  //判断是否为null和undefined
  if (a == null || b == null) {
    return a === b;
  }
  //接下来判断a和b的数据类型
  var classNameA = toString.call(a),
    classNameB = toString.call(b);
  //如果数据类型不相等，则返回false
  if (classNameA !== classNameB) {
    return false;
  }
  //如果数据类型相等，再根据不同数据类型分别判断
  switch (classNameA) {
    case '[object RegExp]':
    case '[object String]':
      //进行字符串转换比较
      return '' + a === '' + b;
    case '[object Number]':
      //进行数字转换比较,判断是否为NaN
      if (+a !== +a) {
        return +b !== +b;
      }
      //判断是否为0或-0
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
  }
  //如果是对象类型
  if (classNameA == '[object Object]') {
    //获取a和b的属性长度
    var propsA = Object.getOwnPropertyNames(a),
      propsB = Object.getOwnPropertyNames(b);
    if (propsA.length != propsB.length) {
      return false;
    }
    for (var i = 0; i < propsA.length; i++) {
      var propName = propsA[i];
      //如果对应属性对应值不相等，则返回false
      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  }
  //如果是数组类型
  if (classNameA == '[object Array]') {
    if (a.toString() == b.toString()) {
      return true;
    }
    return false;
  }
};
exports.isEqual = isEqual;

/***/ }),

/***/ 38:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 407:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 370));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ 376));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 372));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 374));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 375));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 377));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 408));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 410));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e34) { throw _e34; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e35) { didErr = true; err = _e35; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function n(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var s = n(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) {
              e.hasOwnProperty(t) && (this[t] = e[t]);
            }
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) {
              t[s + i >>> 2] = n[i >>> 2];
            }
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) {
              n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            }
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) {
              n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            }
            return new o.init(n, t);
          }
        },
        h = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        l = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var h = 0; h < c; h += i) {
                this._doProcessBlock(s, h);
              }
              var l = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(l, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = l.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          l.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  r = s,
  i = (n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) {
          a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            p = e[t + 2],
            f = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            I = e[t + 10],
            S = e[t + 11],
            b = e[t + 12],
            k = e[t + 13],
            A = e[t + 14],
            P = e[t + 15],
            T = i[0],
            C = i[1],
            x = i[2],
            O = i[3];
          T = u(T, C, x, O, o, 7, a[0]), O = u(O, T, C, x, c, 12, a[1]), x = u(x, O, T, C, p, 17, a[2]), C = u(C, x, O, T, f, 22, a[3]), T = u(T, C, x, O, g, 7, a[4]), O = u(O, T, C, x, m, 12, a[5]), x = u(x, O, T, C, y, 17, a[6]), C = u(C, x, O, T, _, 22, a[7]), T = u(T, C, x, O, w, 7, a[8]), O = u(O, T, C, x, v, 12, a[9]), x = u(x, O, T, C, I, 17, a[10]), C = u(C, x, O, T, S, 22, a[11]), T = u(T, C, x, O, b, 7, a[12]), O = u(O, T, C, x, k, 12, a[13]), x = u(x, O, T, C, A, 17, a[14]), T = h(T, C = u(C, x, O, T, P, 22, a[15]), x, O, c, 5, a[16]), O = h(O, T, C, x, y, 9, a[17]), x = h(x, O, T, C, S, 14, a[18]), C = h(C, x, O, T, o, 20, a[19]), T = h(T, C, x, O, m, 5, a[20]), O = h(O, T, C, x, I, 9, a[21]), x = h(x, O, T, C, P, 14, a[22]), C = h(C, x, O, T, g, 20, a[23]), T = h(T, C, x, O, v, 5, a[24]), O = h(O, T, C, x, A, 9, a[25]), x = h(x, O, T, C, f, 14, a[26]), C = h(C, x, O, T, w, 20, a[27]), T = h(T, C, x, O, k, 5, a[28]), O = h(O, T, C, x, p, 9, a[29]), x = h(x, O, T, C, _, 14, a[30]), T = l(T, C = h(C, x, O, T, b, 20, a[31]), x, O, m, 4, a[32]), O = l(O, T, C, x, w, 11, a[33]), x = l(x, O, T, C, S, 16, a[34]), C = l(C, x, O, T, A, 23, a[35]), T = l(T, C, x, O, c, 4, a[36]), O = l(O, T, C, x, g, 11, a[37]), x = l(x, O, T, C, _, 16, a[38]), C = l(C, x, O, T, I, 23, a[39]), T = l(T, C, x, O, k, 4, a[40]), O = l(O, T, C, x, o, 11, a[41]), x = l(x, O, T, C, f, 16, a[42]), C = l(C, x, O, T, y, 23, a[43]), T = l(T, C, x, O, v, 4, a[44]), O = l(O, T, C, x, b, 11, a[45]), x = l(x, O, T, C, P, 16, a[46]), T = d(T, C = l(C, x, O, T, p, 23, a[47]), x, O, o, 6, a[48]), O = d(O, T, C, x, _, 10, a[49]), x = d(x, O, T, C, A, 15, a[50]), C = d(C, x, O, T, m, 21, a[51]), T = d(T, C, x, O, b, 6, a[52]), O = d(O, T, C, x, f, 10, a[53]), x = d(x, O, T, C, I, 15, a[54]), C = d(C, x, O, T, c, 21, a[55]), T = d(T, C, x, O, w, 6, a[56]), O = d(O, T, C, x, P, 10, a[57]), x = d(x, O, T, C, y, 15, a[58]), C = d(C, x, O, T, k, 21, a[59]), T = d(T, C, x, O, g, 6, a[60]), O = d(O, T, C, x, S, 10, a[61]), x = d(x, O, T, C, p, 15, a[62]), C = d(C, x, O, T, v, 21, a[63]), i[0] = i[0] + T | 0, i[1] = i[1] + C | 0, i[2] = i[2] + x | 0, i[3] = i[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var h = c[u];
            c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), n(function (e, t) {
    var n;
    e.exports = (n = r, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {
            a[u] ^= 1549556828, c[u] ^= 909522486;
          }
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), n(function (e, t) {
    e.exports = r.HmacMD5;
  })),
  o = n(function (e, t) {
    e.exports = r.enc.Utf8;
  }),
  a = n(function (e, t) {
    var n;
    e.exports = (n = r, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) {
          if (o % 4) {
            var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
              c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
            r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
          }
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) {
            for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
              r.push(s.charAt(o >>> 6 * (3 - a) & 63));
            }
          }
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) {
            r.push(c);
          }
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) {
              r[n.charCodeAt(i)] = i;
            }
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var c = "FUNCTION",
  u = "OBJECT",
  h = "CLIENT_DB",
  l = "pending",
  d = "fulfilled",
  p = "rejected";
function f(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function g(e) {
  return "object" === f(e);
}
function m(e) {
  return "function" == typeof e;
}
function y(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var _ = "REJECTED",
  w = "NOT_PENDING";
var v = /*#__PURE__*/function () {
  function v() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref.createPromise,
      _ref$retryRule = _ref.retryRule,
      t = _ref$retryRule === void 0 ? _ : _ref$retryRule;
    (0, _classCallCheck2.default)(this, v);
    this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t;
  }
  (0, _createClass2.default)(v, [{
    key: "needRetry",
    get: function get() {
      if (!this.status) return !0;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
  }, {
    key: "exec",
    value: function exec() {
      var _this = this;
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then(function (e) {
        return _this.status = d, Promise.resolve(e);
      }, function (e) {
        return _this.status = p, Promise.reject(e);
      }), this.promise) : this.promise;
    }
  }]);
  return v;
}();
function I(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var S = "development" === "development",
  b = "mp-weixin",
  k = "true" === undefined || !0 === undefined,
  A = I([]),
  P = "h5" === b ? "web" : "app-plus" === b ? "app" : b,
  T = I(undefined),
  C = I([]) || [],
  x = true;
var O = "";
try {
  O = (__webpack_require__(/*! uni-stat-config */ 411).default || __webpack_require__(/*! uni-stat-config */ 411)).appid;
} catch (e) {}
var E = {};
function L(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = E, s = e, Object.prototype.hasOwnProperty.call(n, s) || (E[e] = t), E[e];
}
"app" === P && (E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var R = ["invoke", "success", "fail", "complete"],
  U = L("_globalUniCloudInterceptor");
function N(e, t) {
  U[e] || (U[e] = {}), g(t) && Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      s || (s = U[e][t] = []), -1 === s.indexOf(n) && m(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function D(e, t) {
  U[e] || (U[e] = {}), g(t) ? Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete U[e];
}
function M(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function q(e, t) {
  return U[e] && U[e][t] || [];
}
function F(e) {
  N("callObject", e);
}
var K = L("_globalUniCloudListener"),
  j = "response",
  $ = "needLogin",
  B = "refreshToken",
  W = "clientdb",
  H = "cloudfunction",
  z = "cloudobject";
function J(e) {
  return K[e] || (K[e] = []), K[e];
}
function G(e, t) {
  var n = J(e);
  n.includes(t) || n.push(t);
}
function V(e, t) {
  var n = J(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function Y(e, t) {
  var n = J(e);
  for (var _e2 = 0; _e2 < n.length; _e2++) {
    (0, n[_e2])(t);
  }
}
var Q,
  X = !1;
function Z() {
  return Q || (Q = new Promise(function (e) {
    X && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (X = !0, e());
      }
      X || setTimeout(function () {
        t();
      }, 30);
    }();
  }), Q);
}
function ee(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    m(_s2) && (t[_n2] = y(_s2));
  }
  return t;
}
var te = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(te, _Error);
  var _super = _createSuper(te);
  function te(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, te);
    _this2 = _super.call(this, e.message), _this2.errMsg = e.message || e.errMsg || "unknown system error", _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(te, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return te;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
var ne = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  }
};
function se() {
  return {
    token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"),
    tokenExpired: ne.getStorageSync("uni_id_token_expired")
  };
}
function re() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref2.token,
    t = _ref2.tokenExpired;
  e && ne.setStorageSync("uni_id_token", e), t && ne.setStorageSync("uni_id_token_expired", t);
}
var ie, oe;
function ae() {
  return ie || (ie = uni.getSystemInfoSync()), ie;
}
function ce() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
function ue() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (oe) return _objectSpread(_objectSpread({}, oe), {}, {
    locale: e,
    LOCALE: e
  });
  var t = ae(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
  for (var _e3 = 0; _e3 < o.length; _e3++) {
    delete t[o[_e3]];
  }
  return oe = _objectSpread(_objectSpread({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, ce()), t), _objectSpread(_objectSpread({}, oe), {}, {
    locale: e,
    LOCALE: e
  });
}
var he = {
  sign: function sign(e, t) {
    var n = "";
    return Object.keys(e).sort().forEach(function (t) {
      e[t] && (n = n + "&" + t + "=" + e[t]);
    }), n = n.slice(1), i(n, t).toString();
  },
  wrappedRequest: function wrappedRequest(e, t) {
    return new Promise(function (n, s) {
      t(Object.assign(e, {
        complete: function complete(e) {
          e || (e = {}), S && "web" === P && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
          var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
          if (!e.statusCode || e.statusCode >= 400) return s(new te({
            code: "SYS_ERR",
            message: e.errMsg || "request:fail",
            requestId: t
          }));
          var r = e.data;
          if (r.error) return s(new te({
            code: r.error.code,
            message: r.error.message,
            requestId: t
          }));
          r.result = r.data, r.requestId = t, delete r.data, n(r);
        }
      }));
    });
  },
  toBase64: function toBase64(e) {
    return a.stringify(o.parse(e));
  }
};
var le = /*#__PURE__*/function () {
  function le(e) {
    var _this3 = this;
    (0, _classCallCheck2.default)(this, le);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), this.config = Object.assign({}, {
      endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({
      createPromise: function createPromise() {
        return _this3.requestAuth(_this3.setupRequest({
          method: "serverless.auth.user.anonymousAuthorize",
          params: "{}"
        }, "auth")).then(function (e) {
          if (!e.result || !e.result.accessToken) throw new te({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          });
          _this3.setAccessToken(e.result.accessToken);
        });
      },
      retryRule: w
    });
  }
  (0, _createClass2.default)(le, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return he.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this4 = this;
      return Promise.resolve().then(function () {
        return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this4.getAccessToken();
          }).then(function () {
            var t = _this4.rebuildRequest(e);
            return _this4.request(t, !0);
          });
        }) : _this4.getAccessToken().then(function () {
          var t = _this4.rebuildRequest(e);
          return _this4.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = he.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAccessToken();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function authorize() {
        return _authorize.apply(this, arguments);
      }
      return authorize;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref3) {
      var _this5 = this;
      var e = _ref3.url,
        t = _ref3.formData,
        n = _ref3.name,
        s = _ref3.filePath,
        r = _ref3.fileType,
        i = _ref3.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
        var e, t, _ref4$fileType, n, _ref4$cloudPathAsReal, s, r, i, o, a, c, u, h, l, d, p, g, m, y, _, _e4, w;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e = _ref4.filePath, t = _ref4.cloudPath, _ref4$fileType = _ref4.fileType, n = _ref4$fileType === void 0 ? "image" : _ref4$fileType, _ref4$cloudPathAsReal = _ref4.cloudPathAsRealPath, s = _ref4$cloudPathAsReal === void 0 ? !1 : _ref4$cloudPathAsReal, r = _ref4.onUploadProgress, i = _ref4.config;
                if (!("string" !== f(t))) {
                  _context2.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context2.next = 5;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context2.next = 7;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                o = i && i.envType || this.config.envType;
                if (!(s && ("/" !== t[0] && (t = "/" + t), t.indexOf("\\") > -1))) {
                  _context2.next = 10;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                });
              case 10:
                _context2.next = 12;
                return this.getOSSUploadOptionsFromPath({
                  env: o,
                  filename: s ? t.split("/").pop() : t,
                  fileId: s ? t : void 0
                });
              case 12:
                a = _context2.sent.result;
                c = "https://" + a.cdnDomain + "/" + a.ossPath;
                u = a.securityToken;
                h = a.accessKeyId;
                l = a.signature;
                d = a.host;
                p = a.ossPath;
                g = a.id;
                m = a.policy;
                y = a.ossCallbackUrl;
                _ = {
                  "Cache-Control": "max-age=2592000",
                  "Content-Disposition": "attachment",
                  OSSAccessKeyId: h,
                  Signature: l,
                  host: d,
                  id: g,
                  key: p,
                  policy: m,
                  success_action_status: 200
                };
                if (u && (_["x-oss-security-token"] = u), y) {
                  _e4 = JSON.stringify({
                    callbackUrl: y,
                    callbackBody: JSON.stringify({
                      fileId: g,
                      spaceId: this.config.spaceId
                    }),
                    callbackBodyType: "application/json"
                  });
                  _.callback = he.toBase64(_e4);
                }
                w = {
                  url: "https://" + a.host,
                  formData: _,
                  fileName: "file",
                  name: "file",
                  filePath: e,
                  fileType: n
                };
                _context2.next = 27;
                return this.uploadFileToOSS(Object.assign({}, w, {
                  onUploadProgress: r
                }));
              case 27:
                if (!y) {
                  _context2.next = 29;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 29:
                _context2.next = 31;
                return this.reportOSSUpload({
                  id: g
                });
              case 31:
                if (!_context2.sent.success) {
                  _context2.next = 33;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 33:
                throw new te({
                  code: "UPLOAD_FAILED",
                  message: "文件上传失败"
                });
              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref5.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new te({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _ref6,
          e,
          t,
          _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref6 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref6.fileList;
                if (!(!Array.isArray(e) || 0 === e.length)) {
                  _context3.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
              case 3:
                t = {
                  method: "serverless.file.resource.info",
                  params: JSON.stringify({
                    id: e.map(function (e) {
                      return e.split("?")[0];
                    }).join(",")
                  })
                };
                _context3.next = 6;
                return this.request(this.setupRequest(t));
              case 6:
                _context3.t0 = _context3.sent.result;
                return _context3.abrupt("return", {
                  fileList: _context3.t0
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return le;
}();
var de = {
  init: function init(e) {
    var t = new le(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var pe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var fe;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(fe || (fe = {}));
var ge = function ge() {},
  me = n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [],
        c = [];
      !function () {
        function t(t) {
          for (var n = e.sqrt(t), s = 2; s <= n; s++) {
            if (!(t % s)) return !1;
          }
          return !0;
        }
        function n(e) {
          return 4294967296 * (e - (0 | e)) | 0;
        }
        for (var s = 2, r = 0; r < 64;) {
          t(s) && (r < 8 && (a[r] = n(e.pow(s, .5))), c[r] = n(e.pow(s, 1 / 3)), r++), s++;
        }
      }();
      var u = [],
        h = o.SHA256 = i.extend({
          _doReset: function _doReset() {
            this._hash = new r.init(a.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(e, t) {
            for (var n = this._hash.words, s = n[0], r = n[1], i = n[2], o = n[3], a = n[4], h = n[5], l = n[6], d = n[7], p = 0; p < 64; p++) {
              if (p < 16) u[p] = 0 | e[t + p];else {
                var f = u[p - 15],
                  g = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                  m = u[p - 2],
                  y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                u[p] = g + u[p - 7] + y + u[p - 16];
              }
              var _ = s & r ^ s & i ^ r & i,
                w = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22),
                v = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & l) + c[p] + u[p];
              d = l, l = h, h = a, a = o + v | 0, o = i, i = r, r = s, s = v + (w + _) | 0;
            }
            n[0] = n[0] + s | 0, n[1] = n[1] + r | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0, n[5] = n[5] + h | 0, n[6] = n[6] + l | 0, n[7] = n[7] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            var t = this._data,
              n = t.words,
              s = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(s / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = s, t.sigBytes = 4 * n.length, this._process(), this._hash;
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      t.SHA256 = i._createHelper(h), t.HmacSHA256 = i._createHmacHelper(h);
    }(Math), n.SHA256);
  }),
  ye = me,
  _e = n(function (e, t) {
    e.exports = r.HmacSHA256;
  });
var we = function we() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new te({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e5, s) {
      return _e5 ? n(_e5) : t(s);
    };
  });
  return e.promise = t, e;
};
function ve(e) {
  return void 0 === e;
}
function Ie(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var Se;
function be(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = _createForOfIteratorHelper(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e6 = _step.value;
      var _t4 = _e6.isMatch,
        _n4 = _e6.genAdapter,
        _s4 = _e6.runtime;
      if (_t4()) return {
        adapter: _n4(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(Se || (Se = {}));
var ke = {
    adapter: null,
    runtime: void 0
  },
  Ae = ["anonymousUuidKey"];
var Pe = /*#__PURE__*/function (_ge) {
  (0, _inherits2.default)(Pe, _ge);
  var _super2 = _createSuper(Pe);
  function Pe() {
    var _this6;
    (0, _classCallCheck2.default)(this, Pe);
    _this6 = _super2.call(this), ke.adapter.root.tcbObject || (ke.adapter.root.tcbObject = {});
    return _this6;
  }
  (0, _createClass2.default)(Pe, [{
    key: "setItem",
    value: function setItem(e, t) {
      ke.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return ke.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete ke.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete ke.adapter.root.tcbObject;
    }
  }]);
  return Pe;
}(ge);
function Te(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new Pe();
    case "none":
      return new Pe();
    default:
      return t.sessionStorage || new Pe();
  }
}
var Ce = /*#__PURE__*/function () {
  function Ce(e) {
    (0, _classCallCheck2.default)(this, Ce);
    if (!this._storage) {
      this._persistence = ke.adapter.primaryStorage || e.persistence, this._storage = Te(this._persistence, ke.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n5 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n5,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r,
        loginTypeKey: _i,
        userInfoKey: _o
      };
    }
  }
  (0, _createClass2.default)(Ce, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Te(e, ke.adapter);
      for (var _e7 in this.keys) {
        var _s6 = this.keys[_e7];
        if (t && Ae.includes(_e7)) continue;
        var _r2 = this._storage.getItem(_s6);
        ve(_r2) || Ie(_r2) || (n.setItem(_s6, _r2), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return Ce;
}();
var xe = {},
  Oe = {};
function Ee(e) {
  return xe[e];
}
var Le = /*#__PURE__*/(0, _createClass2.default)(function Le(e, t) {
  (0, _classCallCheck2.default)(this, Le);
  this.data = t || null, this.name = e;
});
var Re = /*#__PURE__*/function (_Le) {
  (0, _inherits2.default)(Re, _Le);
  var _super3 = _createSuper(Re);
  function Re(e, t) {
    var _this7;
    (0, _classCallCheck2.default)(this, Re);
    _this7 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this7.error = e;
    return _this7;
  }
  return (0, _createClass2.default)(Re);
}(Le);
var Ue = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Re) return console.error(e.error), this;
      var n = "string" == typeof e ? new Le(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e8 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = _createForOfIteratorHelper(_e8),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function Ne(e, t) {
  Ue.on(e, t);
}
function De(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Ue.fire(e, t);
}
function Me(e, t) {
  Ue.off(e, t);
}
var qe = "loginStateChanged",
  Fe = "loginStateExpire",
  Ke = "loginTypeChanged",
  je = "anonymousConverted",
  $e = "refreshAccessToken";
var Be;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(Be || (Be = {}));
var We = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  He = {
    "X-SDK-Version": "1.3.5"
  };
function ze(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e9 in r) {
        o.append(_e9, r[_e9]);
      }
    }(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);
  };
}
function Je() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: _objectSpread(_objectSpread({}, He), {}, {
      "x-seqid": e
    })
  };
}
var Ge = /*#__PURE__*/function () {
  function Ge() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Ge);
    var t;
    this.config = e, this._reqClass = new ke.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = Ee(this.config.env), this._localCache = (t = this.config.env, Oe[t]), ze(this._reqClass, "post", [Je]), ze(this._reqClass, "upload", [Je]), ze(this._reqClass, "download", [Je]);
  }
  (0, _createClass2.default)(Ge, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._reqClass.post(e);
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function post(_x2) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._reqClass.upload(e);
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function upload(_x3) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(e) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._reqClass.download(e);
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function download(_x4) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var e, t;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context7.prev = 1;
                _context7.next = 4;
                return this._refreshAccessTokenPromise;
              case 4:
                e = _context7.sent;
                _context7.next = 10;
                break;
              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                t = _context7.t0;
              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context7.next = 12;
                  break;
                }
                throw t;
              case 12:
                return _context7.abrupt("return", e);
              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this$_cache$keys, e, t, n, s, r, i, o, a, _e10, _e11, _t7, _s8;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                i = this._cache.getStore(n);
                if (i) {
                  _context8.next = 5;
                  break;
                }
                throw new te({
                  message: "未登录CloudBase"
                });
              case 5:
                o = {
                  refresh_token: i
                };
                _context8.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", o);
              case 8:
                a = _context8.sent;
                if (!a.data.code) {
                  _context8.next = 21;
                  break;
                }
                _e10 = a.data.code;
                if (!("SIGN_PARAM_INVALID" === _e10 || "REFRESH_TOKEN_EXPIRED" === _e10 || "INVALID_REFRESH_TOKEN" === _e10)) {
                  _context8.next = 20;
                  break;
                }
                if (!(this._cache.getStore(s) === Be.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e10)) {
                  _context8.next = 19;
                  break;
                }
                _e11 = this._cache.getStore(r);
                _t7 = this._cache.getStore(n);
                _context8.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e11,
                  refresh_token: _t7
                });
              case 17:
                _s8 = _context8.sent;
                return _context8.abrupt("return", (this.setRefreshToken(_s8.refresh_token), this._refreshAccessToken()));
              case 19:
                De(Fe), this._cache.removeStore(n);
              case 20:
                throw new te({
                  code: a.data.code,
                  message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
                });
              case 21:
                if (!a.data.access_token) {
                  _context8.next = 23;
                  break;
                }
                return _context8.abrupt("return", (De($e), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));
              case 23:
                a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
              case 24:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _this$_cache$keys2, e, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;
                if (this._cache.getStore(n)) {
                  _context9.next = 3;
                  break;
                }
                throw new te({
                  message: "refresh token不存在，登录状态异常"
                });
              case 3:
                s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
                _context9.t0 = this._shouldRefreshAccessTokenHook;
                if (!_context9.t0) {
                  _context9.next = 9;
                  break;
                }
                _context9.next = 8;
                return this._shouldRefreshAccessTokenHook(s, r);
              case 8:
                _context9.t0 = !_context9.sent;
              case 9:
                _context9.t1 = _context9.t0;
                if (!_context9.t1) {
                  _context9.next = 12;
                  break;
                }
                i = !1;
              case 12:
                return _context9.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                  accessToken: s,
                  accessTokenExpire: r
                });
              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(e, t, n) {
        var s, r, i, _e12, o, _e13, _e14, a, c, u, h, l, d, p, f, g;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                s = "x-tcb-trace_".concat(this.config.env);
                r = "application/x-www-form-urlencoded";
                i = _objectSpread({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);
                if (!(-1 === We.indexOf(e))) {
                  _context10.next = 10;
                  break;
                }
                _e12 = this._cache.keys.refreshTokenKey;
                _context10.t0 = this._cache.getStore(_e12);
                if (!_context10.t0) {
                  _context10.next = 10;
                  break;
                }
                _context10.next = 9;
                return this.getAccessToken();
              case 9:
                i.access_token = _context10.sent.accessToken;
              case 10:
                if ("storage.uploadFile" === e) {
                  o = new FormData();
                  for (_e13 in o) {
                    o.hasOwnProperty(_e13) && void 0 !== o[_e13] && o.append(_e13, i[_e13]);
                  }
                  r = "multipart/form-data";
                } else {
                  r = "application/json", o = {};
                  for (_e14 in i) {
                    void 0 !== i[_e14] && (o[_e14] = i[_e14]);
                  }
                }
                a = {
                  headers: {
                    "content-type": r
                  }
                };
                n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
                c = this._localCache.getStore(s);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, h = t.inQuery, l = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));
                p = function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var s = /\?/.test(t);
                  var r = "";
                  for (var _e15 in n) {
                    "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e15, "=").concat(encodeURIComponent(n[_e15]));
                  }
                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(pe, "//tcb-api.tencentcloudapi.com/web", d);
                l && (p += l);
                _context10.next = 22;
                return this.post(_objectSpread({
                  url: p,
                  data: o
                }, a));
              case 22:
                f = _context10.sent;
                g = f.header && f.header["x-tcb-trace"];
                if (!(g && this._localCache.setStore(s, g), 200 !== Number(f.status) && 200 !== Number(f.statusCode) || !f.data)) {
                  _context10.next = 26;
                  break;
                }
                throw new te({
                  code: "NETWORK_ERROR",
                  message: "network request error"
                });
              case 26:
                return _context10.abrupt("return", f);
              case 27:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function request(_x5, _x6, _x7) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {
        var t,
          n,
          _n6,
          _args11 = arguments;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                t = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                _context11.next = 3;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 3:
                n = _context11.sent;
                if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === We.indexOf(e))) {
                  _context11.next = 13;
                  break;
                }
                _context11.next = 7;
                return this.refreshAccessToken();
              case 7:
                _context11.next = 9;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 9:
                _n6 = _context11.sent;
                if (!_n6.data.code) {
                  _context11.next = 12;
                  break;
                }
                throw new te({
                  code: _n6.data.code,
                  message: _n6.data.message
                });
              case 12:
                return _context11.abrupt("return", _n6.data);
              case 13:
                if (!n.data.code) {
                  _context11.next = 15;
                  break;
                }
                throw new te({
                  code: n.data.code,
                  message: n.data.message
                });
              case 15:
                return _context11.abrupt("return", n.data);
              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function send(_x8) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
        t = _this$_cache$keys3.accessTokenKey,
        n = _this$_cache$keys3.accessTokenExpireKey,
        s = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return Ge;
}();
var Ve = {};
function Ye(e) {
  return Ve[e];
}
var Qe = /*#__PURE__*/function () {
  function Qe(e) {
    (0, _classCallCheck2.default)(this, Qe);
    this.config = e, this._cache = Ee(e.env), this._request = Ye(e.env);
  }
  (0, _createClass2.default)(Qe, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
        t = _this$_cache$keys4.accessTokenKey,
        n = _this$_cache$keys4.accessTokenExpireKey,
        s = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
        n = _this$_cache$keys5.accessTokenKey,
        s = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _yield$this$_request$, e;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$ = _context12.sent;
                e = _yield$this$_request$.data;
                return _context12.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return Qe;
}();
var Xe = /*#__PURE__*/function () {
  function Xe(e) {
    (0, _classCallCheck2.default)(this, Xe);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = Ee(this._envId), this._request = Ye(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(Xe, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var _yield$this$_request$2, e, t, n;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._request.send("auth.getLinkedUidList", {});
              case 2:
                _yield$this$_request$2 = _context13.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                n = e.users;
                return _context13.abrupt("return", (n.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: n,
                  hasPrimaryUid: t
                }));
              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                t = e.nickName;
                n = e.gender;
                s = e.avatarUrl;
                r = e.province;
                i = e.country;
                o = e.city;
                _context14.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: n,
                  avatarUrl: s,
                  province: r,
                  country: i,
                  city: o
                });
              case 8:
                _yield$this$_request$3 = _context14.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);
              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function update(_x9) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        var _yield$this$_request$4, e;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$4 = _context15.sent;
                e = _yield$this$_request$4.data;
                return _context15.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return Xe;
}();
var Ze = /*#__PURE__*/function () {
  function Ze(e) {
    (0, _classCallCheck2.default)(this, Ze);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = Ee(e);
    var _this$_cache$keys6 = this._cache.keys,
      t = _this$_cache$keys6.refreshTokenKey,
      n = _this$_cache$keys6.accessTokenKey,
      s = _this$_cache$keys6.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new Xe(e);
  }
  (0, _createClass2.default)(Ze, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === Be.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === Be.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === Be.WECHAT || this.loginType === Be.WECHAT_OPEN || this.loginType === Be.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return Ze;
}();
var et = /*#__PURE__*/function (_Qe) {
  (0, _inherits2.default)(et, _Qe);
  var _super4 = _createSuper(et);
  function et() {
    (0, _classCallCheck2.default)(this, et);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(et, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var _this$_cache$keys7, e, t, n, s, r, _e16;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._cache.updatePersistence("local");
                _this$_cache$keys7 = this._cache.keys;
                e = _this$_cache$keys7.anonymousUuidKey;
                t = _this$_cache$keys7.refreshTokenKey;
                n = this._cache.getStore(e) || void 0;
                s = this._cache.getStore(t) || void 0;
                _context16.next = 8;
                return this._request.send("auth.signInAnonymously", {
                  anonymous_uuid: n,
                  refresh_token: s
                });
              case 8:
                r = _context16.sent;
                if (!(r.uuid && r.refresh_token)) {
                  _context16.next = 20;
                  break;
                }
                this._setAnonymousUUID(r.uuid);
                this.setRefreshToken(r.refresh_token);
                _context16.next = 14;
                return this._request.refreshAccessToken();
              case 14:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.ANONYMOUS,
                  persistence: "local"
                });
                _e16 = new Ze(this.config.env);
                _context16.next = 19;
                return _e16.user.refresh();
              case 19:
                return _context16.abrupt("return", _e16);
              case 20:
                throw new te({
                  message: "匿名登录失败"
                });
              case 21:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {
        var _this$_cache$keys8, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _this$_cache$keys8 = this._cache.keys;
                t = _this$_cache$keys8.anonymousUuidKey;
                n = _this$_cache$keys8.refreshTokenKey;
                s = this._cache.getStore(t);
                r = this._cache.getStore(n);
                _context17.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: s,
                  refresh_token: r,
                  ticket: e
                });
              case 7:
                i = _context17.sent;
                if (!i.refresh_token) {
                  _context17.next = 16;
                  break;
                }
                this._clearAnonymousUUID();
                this.setRefreshToken(i.refresh_token);
                _context17.next = 13;
                return this._request.refreshAccessToken();
              case 13:
                De(je, {
                  env: this.config.env
                });
                De(Ke, {
                  loginType: Be.CUSTOM,
                  persistence: "local"
                });
                return _context17.abrupt("return", {
                  credential: {
                    refreshToken: i.refresh_token
                  }
                });
              case 16:
                throw new te({
                  message: "匿名转化失败"
                });
              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function linkAndRetrieveDataWithTicket(_x10) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
        t = _this$_cache$keys9.anonymousUuidKey,
        n = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Be.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return et;
}(Qe);
var tt = /*#__PURE__*/function (_Qe2) {
  (0, _inherits2.default)(tt, _Qe2);
  var _super5 = _createSuper(tt);
  function tt() {
    (0, _classCallCheck2.default)(this, tt);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(tt, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context18.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "ticket must be a string"
                });
              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context18.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });
              case 5:
                n = _context18.sent;
                if (!n.refresh_token) {
                  _context18.next = 15;
                  break;
                }
                this.setRefreshToken(n.refresh_token);
                _context18.next = 10;
                return this._request.refreshAccessToken();
              case 10:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.CUSTOM,
                  persistence: this.config.persistence
                });
                _context18.next = 14;
                return this.refreshUserInfo();
              case 14:
                return _context18.abrupt("return", new Ze(this.config.env));
              case 15:
                throw new te({
                  message: "自定义登录失败"
                });
              case 16:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function signIn(_x11) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return tt;
}(Qe);
var nt = /*#__PURE__*/function (_Qe3) {
  (0, _inherits2.default)(nt, _Qe3);
  var _super6 = _createSuper(nt);
  function nt() {
    (0, _classCallCheck2.default)(this, nt);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(nt, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context19.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "email must be a string"
                });
              case 2:
                n = this._cache.keys.refreshTokenKey;
                _context19.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 5:
                s = _context19.sent;
                r = s.refresh_token;
                i = s.access_token;
                o = s.access_token_expire;
                if (!r) {
                  _context19.next = 22;
                  break;
                }
                this.setRefreshToken(r);
                if (!(i && o)) {
                  _context19.next = 15;
                  break;
                }
                this.setAccessToken(i, o);
                _context19.next = 17;
                break;
              case 15:
                _context19.next = 17;
                return this._request.refreshAccessToken();
              case 17:
                _context19.next = 19;
                return this.refreshUserInfo();
              case 19:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.EMAIL,
                  persistence: this.config.persistence
                });
                return _context19.abrupt("return", new Ze(this.config.env));
              case 22:
                throw s.code ? new te({
                  code: s.code,
                  message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new te({
                  message: "邮箱登录失败"
                });
              case 23:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function signIn(_x12, _x13) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(e) {
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));
              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
      function activate(_x14) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));
              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
      function resetPasswordWithToken(_x15, _x16) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return nt;
}(Qe);
var st = /*#__PURE__*/function (_Qe4) {
  (0, _inherits2.default)(st, _Qe4);
  var _super7 = _createSuper(st);
  function st() {
    (0, _classCallCheck2.default)(this, st);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(st, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context22.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                n = this._cache.keys.refreshTokenKey;
                _context22.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: Be.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 6:
                s = _context22.sent;
                r = s.refresh_token;
                i = s.access_token_expire;
                o = s.access_token;
                if (!r) {
                  _context22.next = 23;
                  break;
                }
                this.setRefreshToken(r);
                if (!(o && i)) {
                  _context22.next = 16;
                  break;
                }
                this.setAccessToken(o, i);
                _context22.next = 18;
                break;
              case 16:
                _context22.next = 18;
                return this._request.refreshAccessToken();
              case 18:
                _context22.next = 20;
                return this.refreshUserInfo();
              case 20:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.USERNAME,
                  persistence: this.config.persistence
                });
                return _context22.abrupt("return", new Ze(this.config.env));
              case 23:
                throw s.code ? new te({
                  code: s.code,
                  message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new te({
                  message: "用户名密码登录失败"
                });
              case 24:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
      function signIn(_x17, _x18) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return st;
}(Qe);
var rt = /*#__PURE__*/function () {
  function rt(e) {
    (0, _classCallCheck2.default)(this, rt);
    this.config = e, this._cache = Ee(e.env), this._request = Ye(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ne(Ke, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(rt, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new et(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new tt(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new nt(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new st(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23() {
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", new et(this.config).signIn());
              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", new nt(this.config).signIn(e, t));
              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
      function signInWithEmailAndPassword(_x19, _x20) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new st(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new et(this.config)), Ne(je, this._onAnonymousConverted);
                _context25.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
              case 3:
                return _context25.abrupt("return", _context25.sent);
              case 4:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
      function linkAndRetrieveDataWithTicket(_x21) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26() {
        var _this$_cache$keys10, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(this.loginType === Be.ANONYMOUS)) {
                  _context26.next = 2;
                  break;
                }
                throw new te({
                  message: "匿名用户不支持登出操作"
                });
              case 2:
                _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);
                if (s) {
                  _context26.next = 5;
                  break;
                }
                return _context26.abrupt("return");
              case 5:
                _context26.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: s
                });
              case 7:
                r = _context26.sent;
                return _context26.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), De(qe), De(Ke, {
                  env: this.config.env,
                  loginType: Be.NULL,
                  persistence: this.config.persistence
                }), r));
              case 9:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27(e, t) {
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));
              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
      function signUpWithEmailAndPassword(_x22, _x23) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));
              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
      function sendPasswordResetEmail(_x24) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;
      Ne(qe, function () {
        var t = _this9.hasLoginState();
        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      Ne(Fe, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      Ne($e, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      Ne(je, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;
      Ne(Ke, function () {
        var t = _this10.hasLoginState();
        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29() {
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this._request.getAccessToken();
              case 2:
                _context29.t0 = _context29.sent.accessToken;
                _context29.t1 = this.config.env;
                return _context29.abrupt("return", {
                  accessToken: _context29.t0,
                  env: _context29.t1
                });
              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new Ze(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30(e) {
        var _yield$this$_request$5, t;
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context30.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                _context30.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });
              case 4:
                _yield$this$_request$5 = _context30.sent;
                t = _yield$this$_request$5.data;
                return _context30.abrupt("return", t && t.isRegistered);
              case 7:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
      function isUsernameRegistered(_x25) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31(e) {
        return _regenerator.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", new tt(this.config).signIn(e));
              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
      function signInWithTicket(_x26) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
        e = _this$_cache$keys11.refreshTokenKey,
        t = _this$_cache$keys11.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return rt;
}();
var it = function it(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        h = _e$data2.fileId,
        l = _e$data2.cosFileId,
        d = e.requestId,
        p = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": l,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: p,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: h,
          requestId: d
        }) : t(new te({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ot = function ot(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  at = function at(_ref7, t) {
    var e = _ref7.fileList;
    if (t = t || we(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t8 = _step3.value;
        if (!_t8 || "string" != typeof _t8) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return Ye(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ct = function ct(_ref8, t) {
    var e = _ref8.fileList;
    t = t || we(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = _createForOfIteratorHelper(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s9 = _step4.value;
        "object" == (0, _typeof2.default)(_s9) ? (_s9.hasOwnProperty("fileID") && _s9.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s9.fileID,
          max_age: _s9.maxAge
        })) : "string" == typeof _s9 ? n.push({
          fileid: _s9
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return Ye(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ut = /*#__PURE__*/function () {
    var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32(_ref9, t) {
      var e, n, s, r;
      return _regenerator.default.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              e = _ref9.fileID;
              _context32.next = 3;
              return ct.call(this, {
                fileList: [{
                  fileID: e,
                  maxAge: 600
                }]
              });
            case 3:
              n = _context32.sent.fileList[0];
              if (!("SUCCESS" !== n.code)) {
                _context32.next = 6;
                break;
              }
              return _context32.abrupt("return", t ? t(n) : new Promise(function (e) {
                e(n);
              }));
            case 6:
              s = Ye(this.config.env);
              r = n.download_url;
              if (!(r = encodeURI(r), !t)) {
                _context32.next = 10;
                break;
              }
              return _context32.abrupt("return", s.download({
                url: r
              }));
            case 10:
              _context32.t0 = t;
              _context32.next = 13;
              return s.download({
                url: r
              });
            case 13:
              _context32.t1 = _context32.sent;
              (0, _context32.t0)(_context32.t1);
            case 15:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, this);
    }));
    return function ut(_x27, _x28) {
      return _ref10.apply(this, arguments);
    };
  }(),
  ht = function ht(_ref11, i) {
    var e = _ref11.name,
      t = _ref11.data,
      n = _ref11.query,
      s = _ref11.parse,
      r = _ref11.search;
    var o = i || we();
    var a;
    try {
      a = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new te({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var c = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: a
    };
    return Ye(this.config.env).send("functions.invokeFunction", c).then(function (e) {
      if (e.code) o(null, e);else {
        var _t9 = e.data.response_data;
        if (s) o(null, {
          result: _t9,
          requestId: e.requestId
        });else try {
          _t9 = JSON.parse(e.data.response_data), o(null, {
            result: _t9,
            requestId: e.requestId
          });
        } catch (e) {
          o(new te({
            message: "response data must be json"
          }));
        }
      }
      return o.promise;
    }).catch(function (e) {
      o(e);
    }), o.promise;
  },
  lt = {
    timeout: 15e3,
    persistence: "session"
  },
  dt = {};
var pt = /*#__PURE__*/function () {
  function pt(e) {
    (0, _classCallCheck2.default)(this, pt);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(pt, [{
    key: "init",
    value: function init(e) {
      switch (ke.adapter || (this.requestClient = new ke.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = _objectSpread(_objectSpread({}, lt), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new pt(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref12.persistence;
      if (this.authObj) return this.authObj;
      var t = e || ke.adapter.primaryStorage || lt.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        xe[t] = new Ce(e), Oe[t] = new Ce(_objectSpread(_objectSpread({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, Ve[n.env] = new Ge(n), this.authObj = new rt(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return Ne.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Me.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return ht.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return at.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return ct.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return ut.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return it.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return ot.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      dt[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33(e, t) {
        var n;
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                n = dt[e];
                if (n) {
                  _context33.next = 3;
                  break;
                }
                throw new te({
                  message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
                });
              case 3:
                _context33.next = 5;
                return n.invoke(t, this);
              case 5:
                return _context33.abrupt("return", _context33.sent);
              case 6:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function invokeExtension(_x29, _x30) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref13 = be(e) || {},
        t = _ref13.adapter,
        n = _ref13.runtime;
      t && (ke.adapter = t), n && (ke.runtime = n);
    }
  }]);
  return pt;
}();
var ft = new pt();
function gt(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) {
    "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  }
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var mt = /*#__PURE__*/function () {
  function mt() {
    (0, _classCallCheck2.default)(this, mt);
  }
  (0, _createClass2.default)(mt, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers;
      return new Promise(function (e, r) {
        ne.request({
          url: gt("https:", t),
          data: n,
          method: "POST",
          header: s,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = ne.uploadFile({
            url: gt("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return mt;
}();
var yt = {
  setItem: function setItem(e, t) {
    ne.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return ne.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    ne.removeStorageSync(e);
  },
  clear: function clear() {
    ne.clearStorageSync();
  }
};
var _t = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: mt,
      localStorage: yt,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
ft.useAdapters(_t);
var wt = ft,
  vt = wt.init;
wt.init = function (e) {
  e.env = e.spaceId;
  var t = vt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      var n;
      t[e] = (n = t[e], function (e) {
        e = e || {};
        var _ee = ee(e),
          t = _ee.success,
          s = _ee.fail,
          r = _ee.complete;
        if (!(t || s || r)) return n.call(this, e);
        n.call(this, e).then(function (e) {
          t && t(e), r && r(e);
        }, function (e) {
          s && s(e), r && r(e);
        });
      }).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var It = wt;
var St = /*#__PURE__*/function (_le) {
  (0, _inherits2.default)(St, _le);
  var _super8 = _createSuper(St);
  function St() {
    (0, _classCallCheck2.default)(this, St);
    return _super8.apply(this, arguments);
  }
  (0, _createClass2.default)(St, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;
      return new Promise(function (e, t) {
        var n = "Anonymous_Access_token";
        _this11.setAccessToken(n), e(n);
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret);
      var r = ue();
      s["x-client-info"] = encodeURIComponent(JSON.stringify(r));
      var _se = se(),
        i = _se.token;
      return s["x-client-token"] = i, {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: JSON.parse(JSON.stringify(s))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref14) {
      var _this12 = this;
      var e = _ref14.url,
        t = _ref14.formData,
        n = _ref14.name,
        s = _ref14.filePath,
        r = _ref14.fileType,
        i = _ref14.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref15) {
      var _this13 = this;
      var e = _ref15.filePath,
        t = _ref15.cloudPath,
        _ref15$fileType = _ref15.fileType,
        n = _ref15$fileType === void 0 ? "image" : _ref15$fileType,
        s = _ref15.onUploadProgress;
      if (!t) throw new te({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        r = t.result.fileUrl;
        var c = {
          url: i,
          formData: o,
          name: a,
          filePath: e,
          fileType: n
        };
        return _this13.uploadFileToOSS(Object.assign({}, c, {
          onUploadProgress: s
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new te({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref16) {
      var e = _ref16.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return e.result;
        throw new te({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref17.fileList,
        t = _ref17.maxAge;
      if (!Array.isArray(e) || 0 === e.length) throw new te({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var n = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e,
          maxAge: t
        })
      };
      return this.request(this.setupRequest(n)).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new te({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return St;
}(le);
var bt = {
    init: function init(e) {
      var t = new St(e),
        n = {
          signInAnonymously: function signInAnonymously() {
            return t.authorize();
          },
          getLoginState: function getLoginState() {
            return Promise.resolve(!1);
          }
        };
      return t.auth = function () {
        return n;
      }, t.customAuth = t.auth, t;
    }
  },
  kt = n(function (e, t) {
    e.exports = r.enc.Hex;
  });
function At() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n = t.data,
    s = t.functionName,
    r = t.method,
    i = t.headers,
    _t$signHeaderKeys = t.signHeaderKeys,
    o = _t$signHeaderKeys === void 0 ? [] : _t$signHeaderKeys,
    a = t.config,
    c = Date.now(),
    u = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = 16 * Math.random() | 0;
      return ("x" === e ? t : 3 & t | 8).toString(16);
    }),
    h = Object.assign({}, i, {
      "x-from-app-id": a.spaceAppId,
      "x-from-env-id": a.spaceId,
      "x-to-env-id": a.spaceId,
      "x-from-instance-id": c,
      "x-from-function-name": s,
      "x-client-timestamp": c,
      "x-alipay-source": "client",
      "x-request-id": u,
      "x-alipay-callid": u
    }),
    l = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o),
    _ref18 = e.split("?") || [],
    _ref19 = (0, _slicedToArray2.default)(_ref18, 2),
    _ref19$ = _ref19[0],
    d = _ref19$ === void 0 ? "" : _ref19$,
    _ref19$2 = _ref19[1],
    p = _ref19$2 === void 0 ? "" : _ref19$2,
    f = function (e) {
      var t = e.signedHeaders.join(";"),
        n = e.signedHeaders.map(function (t) {
          return "".concat(t.toLowerCase(), ":").concat(e.headers[t], "\n");
        }).join(""),
        s = ye(e.body).toString(kt),
        r = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(n, "\n").concat(t, "\n").concat(s, "\n"),
        i = ye(r).toString(kt),
        o = "HMAC-SHA256\n".concat(e.timestamp, "\n").concat(i, "\n"),
        a = _e(o, e.secretKey).toString(kt);
      return "HMAC-SHA256 Credential=".concat(e.secretId, ", SignedHeaders=").concat(t, ", Signature=").concat(a);
    }({
      path: d,
      query: p,
      method: r,
      headers: h,
      timestamp: c,
      body: JSON.stringify(n),
      secretId: a.accessKey,
      secretKey: a.secretKey,
      signedHeaders: l.sort()
    });
  return {
    url: "".concat(a.endpoint).concat(e),
    headers: Object.assign({}, h, {
      Authorization: f
    })
  };
}
function Pt(_ref20) {
  var e = _ref20.url,
    t = _ref20.data,
    _ref20$method = _ref20.method,
    n = _ref20$method === void 0 ? "POST" : _ref20$method,
    _ref20$headers = _ref20.headers,
    s = _ref20$headers === void 0 ? {} : _ref20$headers;
  return new Promise(function (r, i) {
    ne.request({
      url: e,
      method: n,
      data: t,
      header: s,
      dataType: "json",
      complete: function complete() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (!e.statusCode || e.statusCode >= 400) {
          var _ref21 = e.data || {},
            _t10 = _ref21.errMsg;
          return i(new te({
            code: "SYS_ERR",
            message: _t10 || e.errMsg || "request:fail",
            requestId: e.requestID
          }));
        }
        r({
          status: e.statusCode,
          data: e.data,
          headers: e.header,
          requestId: e.requestID
        });
      }
    });
  });
}
function Tt(e, t) {
  var n = e.path,
    s = e.data,
    _e$method = e.method,
    r = _e$method === void 0 ? "GET" : _e$method,
    _At = At(n, {
      functionName: "",
      data: s,
      method: r,
      headers: {
        "x-alipay-cloud-mode": "oss",
        "x-data-api-type": "oss",
        "x-expire-timestamp": Date.now() + 6e4
      },
      signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
      config: t
    }),
    i = _At.url,
    o = _At.headers;
  return Pt({
    url: i,
    data: s,
    method: r,
    headers: o
  }).then(function (e) {
    var t = e.data || {};
    if (!t.success) throw new te({
      code: e.code,
      message: e.message,
      requestId: e.trace_id
    });
    return t.data || {};
  }).catch(function (e) {
    throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
  });
}
function Ct() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = e.trim().replace(/^cloud:\/\//, ""),
    n = t.indexOf("/");
  if (n <= 0) throw new te({
    code: "INVALID_PARAM",
    message: "fileID不合法"
  });
  var s = t.substring(0, n),
    r = t.substring(n + 1);
  return s !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), r;
}
var xt = /*#__PURE__*/function () {
  function xt(e) {
    (0, _classCallCheck2.default)(this, xt);
    if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), e.endpoint) {
      if ("string" != typeof e.endpoint) throw new Error("endpoint must be string");
      if (!/^https:\/\//.test(e.endpoint)) throw new Error("endpoint must start with https://");
      e.endpoint = e.endpoint.replace(/\/$/, "");
    }
    this.config = Object.assign({}, e, {
      endpoint: e.endpoint || "https://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn")
    });
  }
  (0, _createClass2.default)(xt, [{
    key: "callFunction",
    value: function callFunction(e) {
      return function (e, t) {
        var n = e.name,
          s = e.data,
          r = "POST",
          _At2 = At("/functions/invokeFunction", {
            functionName: n,
            data: s,
            method: r,
            headers: {
              "x-to-function-name": n
            },
            signHeaderKeys: ["x-to-function-name"],
            config: t
          }),
          i = _At2.url,
          o = _At2.headers;
        return Pt({
          url: i,
          data: s,
          method: r,
          headers: o
        }).then(function (e) {
          return {
            errCode: 0,
            success: !0,
            requestId: e.requestId,
            result: e.data
          };
        }).catch(function (e) {
          throw new te({
            code: e.errCode,
            message: e.errMsg,
            requestId: e.requestId
          });
        });
      }(e, this.config);
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref22) {
      var e = _ref22.url,
        t = _ref22.filePath,
        n = _ref22.fileType,
        s = _ref22.formData,
        r = _ref22.onUploadProgress;
      return new Promise(function (i, o) {
        var a = ne.uploadFile({
          url: e,
          filePath: t,
          fileType: n,
          formData: s,
          name: "file",
          success: function success(e) {
            e && e.statusCode < 400 ? i(e) : o(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            o(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof r && a && "function" == typeof a.onProgressUpdate && a.onProgressUpdate(function (e) {
          r({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34(_ref23) {
        var e, _ref23$cloudPath, t, _ref23$fileType, n, s, r, i, o, a, c;
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                e = _ref23.filePath, _ref23$cloudPath = _ref23.cloudPath, t = _ref23$cloudPath === void 0 ? "" : _ref23$cloudPath, _ref23$fileType = _ref23.fileType, n = _ref23$fileType === void 0 ? "image" : _ref23$fileType, s = _ref23.onUploadProgress;
                if (!("string" !== f(t))) {
                  _context34.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context34.next = 5;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context34.next = 7;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                _context34.next = 9;
                return Tt({
                  path: "/".concat(t.replace(/^\//, ""), "?post_url")
                }, this.config);
              case 9:
                r = _context34.sent;
                i = r.file_id;
                o = r.upload_url;
                a = r.form_data;
                c = a && a.reduce(function (e, t) {
                  return e[t.key] = t.value, e;
                }, {});
                return _context34.abrupt("return", this.uploadFileToOSS({
                  url: o,
                  filePath: e,
                  fileType: n,
                  formData: c,
                  onUploadProgress: s
                }).then(function () {
                  return {
                    fileID: i
                  };
                }));
              case 15:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function uploadFile(_x31) {
        return _uploadFile2.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function () {
      var _getTempFileURL = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35(_ref24) {
        var _this14 = this;
        var e;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                e = _ref24.fileList;
                return _context35.abrupt("return", new Promise(function (t, n) {
                  (!e || e.length < 0) && n(new te({
                    errCode: "INVALID_PARAM",
                    errMsg: "fileList不能为空数组"
                  })), e.length > 50 && n(new te({
                    errCode: "INVALID_PARAM",
                    errMsg: "fileList数组长度不能超过50"
                  }));
                  var s = [];
                  var _iterator5 = _createForOfIteratorHelper(e),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _t11 = _step5.value;
                      "string" !== f(_t11) && n(new te({
                        errCode: "INVALID_PARAM",
                        errMsg: "fileList的元素必须是非空的字符串"
                      }));
                      var _e17 = Ct.call(_this14, _t11);
                      s.push({
                        file_id: _e17,
                        expire: 600
                      });
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                  Tt({
                    path: "/?download_url",
                    data: {
                      file_list: s
                    },
                    method: "POST"
                  }, _this14.config).then(function (e) {
                    var _e$file_list = e.file_list,
                      n = _e$file_list === void 0 ? [] : _e$file_list;
                    t({
                      fileList: n.map(function (e) {
                        return {
                          fileID: e.file_id,
                          tempFileURL: e.download_url
                        };
                      })
                    });
                  }).catch(function (e) {
                    return n(e);
                  });
                }));
              case 2:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35);
      }));
      function getTempFileURL(_x32) {
        return _getTempFileURL.apply(this, arguments);
      }
      return getTempFileURL;
    }()
  }]);
  return xt;
}();
var Ot = {
  init: function init(e) {
    e.provider = "alipay";
    var t = new xt(e);
    return t.auth = function () {
      return {
        signInAnonymously: function signInAnonymously() {
          return Promise.resolve();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!0);
        }
      };
    }, t;
  }
};
function Et(_ref25) {
  var e = _ref25.data;
  var t;
  t = ue();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _se2 = se(),
      _e18 = _se2.token;
    _e18 && (n.uniIdToken = _e18);
  }
  return n;
}
function Lt() {
  return _Lt.apply(this, arguments);
}
function _Lt() {
  _Lt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee56() {
    var _this27 = this;
    var _ref67,
      e,
      t,
      _this$__dev__,
      n,
      s,
      r,
      i,
      o,
      a,
      _args6 = arguments;
    return _regenerator.default.wrap(function _callee56$(_context56) {
      while (1) {
        switch (_context56.prev = _context56.next) {
          case 0:
            _ref67 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, e = _ref67.name, t = _ref67.data;
            _context56.next = 3;
            return this.__dev__.initLocalNetwork();
          case 3:
            _this$__dev__ = this.__dev__, n = _this$__dev__.localAddress, s = _this$__dev__.localPort, r = {
              aliyun: "aliyun",
              tencent: "tcb",
              alipay: "alipay"
            }[this.config.provider], i = this.config.spaceId, o = "http://".concat(n, ":").concat(s, "/system/check-function"), a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);
            return _context56.abrupt("return", new Promise(function (t, n) {
              ne.request({
                method: "POST",
                url: o,
                data: {
                  name: e,
                  platform: P,
                  provider: r,
                  spaceId: i
                },
                timeout: 3e3,
                success: function success(e) {
                  t(e);
                },
                fail: function fail() {
                  t({
                    data: {
                      code: "NETWORK_ERROR",
                      message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                    }
                  });
                }
              });
            }).then(function () {
              var _ref68 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                e = _ref68.data;
              var _ref69 = e || {},
                t = _ref69.code,
                n = _ref69.message;
              return {
                code: 0 === t ? 0 : t || "SYS_ERR",
                message: n || "SYS_ERR"
              };
            }).then(function (_ref70) {
              var n = _ref70.code,
                s = _ref70.message;
              if (0 !== n) {
                switch (n) {
                  case "MODULE_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "FUNCTION_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "ACTION_ENCRYPTED":
                    console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                    break;
                  case "NETWORK_ERROR":
                    {
                      var _e30 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
                      throw console.error(_e30), new Error(_e30);
                    }
                  case "SWITCH_TO_CLOUD":
                    break;
                  default:
                    {
                      var _e31 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
                      throw console.error(_e31), new Error(_e31);
                    }
                }
                return _this27._callCloudFunction({
                  name: e,
                  data: t
                });
              }
              return new Promise(function (e, n) {
                var s = Et.call(_this27, {
                  data: t
                });
                ne.request({
                  method: "POST",
                  url: a,
                  data: {
                    provider: r,
                    platform: P,
                    param: s
                  },
                  success: function success() {
                    var _ref71 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      t = _ref71.statusCode,
                      s = _ref71.data;
                    return !t || t >= 400 ? n(new te({
                      code: s.code || "SYS_ERR",
                      message: s.message || "request:fail"
                    })) : e({
                      result: s
                    });
                  },
                  fail: function fail(e) {
                    n(new te({
                      code: e.code || e.errCode || "SYS_ERR",
                      message: e.message || e.errMsg || "request:fail"
                    }));
                  }
                });
              });
            }));
          case 5:
          case "end":
            return _context56.stop();
        }
      }
    }, _callee56, this);
  }));
  return _Lt.apply(this, arguments);
}
var Rt = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var Ut = /[\\^$.*+?()[\]{}|]/g,
  Nt = RegExp(Ut.source);
function Dt(e, t, n) {
  return e.replace(new RegExp((s = t) && Nt.test(s) ? s.replace(Ut, "\\$&") : s, "g"), n);
  var s;
}
var Mt = "none",
  qt = "request",
  Ft = "response",
  Kt = "both";
var jt = /*#__PURE__*/function () {
  function jt() {
    var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref26.secretType,
      t = _ref26.uniCloudIns;
    (0, _classCallCheck2.default)(this, jt);
    this.clientType = "", this.secretType = e || Mt, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)(jt, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = ae()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36(e) {
        return _regenerator.default.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", this.secretType === Mt ? e : this.platformEncryptData(e));
              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));
      function encryptData(_x33) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37(e) {
        var _ref27, t, n;
        return _regenerator.default.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (!(this.secretType === Mt)) {
                  _context37.next = 2;
                  break;
                }
                return _context37.abrupt("return", e);
              case 2:
                _ref27 = e || {}, t = _ref27.errCode, n = _ref27.content;
                return _context37.abrupt("return", t || !n ? e : this.secretType === qt ? n : this.platformDecryptResult(e));
              case 4:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));
      function decryptResult(_x34) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
        var _ref29,
          n,
          _ref29$data,
          s,
          r,
          _args38 = arguments;
        return _regenerator.default.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _ref29 = _args38.length > 0 && _args38[0] !== undefined ? _args38[0] : {}, n = _ref29.name, _ref29$data = _ref29.data, s = _ref29$data === void 0 ? {} : _ref29$data;
                _context38.next = 3;
                return t.prepare();
              case 3:
                _context38.next = 5;
                return t.platformGetSignOption();
              case 5:
                (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context38.sent;
                _context38.next = 8;
                return e({
                  name: n,
                  data: s
                });
              case 8:
                r = _context38.sent;
                _context38.t0 = t.isClientKeyNotFound(r);
                if (!_context38.t0) {
                  _context38.next = 19;
                  break;
                }
                _context38.next = 13;
                return t.prepare({
                  forceUpdate: !0
                });
              case 13:
                _context38.next = 15;
                return t.platformGetSignOption();
              case 15:
                s._uniCloudOptions = _context38.sent;
                _context38.next = 18;
                return e({
                  name: n,
                  data: s
                });
              case 18:
                r = _context38.sent;
              case 19:
                return _context38.abrupt("return", r);
              case 20:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39() {
        var _ref31,
          n,
          _ref31$data,
          s,
          r,
          i,
          _r3,
          _args39 = arguments;
        return _regenerator.default.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _ref31 = _args39.length > 0 && _args39[0] !== undefined ? _args39[0] : {}, n = _ref31.name, _ref31$data = _ref31.data, s = _ref31$data === void 0 ? {} : _ref31$data;
                _context39.next = 3;
                return t.prepare();
              case 3:
                _context39.next = 5;
                return t.encryptData(s);
              case 5:
                r = _context39.sent;
                _context39.next = 8;
                return e({
                  name: n,
                  data: r
                });
              case 8:
                i = _context39.sent;
                if (!t.isClientKeyNotFound(i)) {
                  _context39.next = 21;
                  break;
                }
                _context39.next = 12;
                return t.prepare({
                  forceUpdate: !0
                });
              case 12:
                _context39.next = 14;
                return t.encryptData(s);
              case 14:
                _r3 = _context39.sent;
                _context39.next = 17;
                return t.platformGetSignOption();
              case 17:
                s._uniCloudOptions = _context39.sent;
                _context39.next = 20;
                return e({
                  name: n,
                  data: _r3
                });
              case 20:
                i = _context39.sent;
              case 21:
                _context39.next = 23;
                return t.decryptResult(i.result);
              case 23:
                i.result = _context39.sent;
                return _context39.abrupt("return", i);
              case 25:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39);
      }));
    }
  }]);
  return jt;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function $t(e) {
  return parseInt(e) === e;
}
function Bt(e) {
  if (!$t(e.length)) return !1;
  for (var t = 0; t < e.length; t++) {
    if (!$t(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  }
  return !0;
}
function Wt(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!Bt(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if ($t(e.length) && Bt(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function Ht(e) {
  return new Uint8Array(e);
}
function zt(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var Jt,
  Gt = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return Wt(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  Vt = (Jt = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(Jt[(240 & s) >> 4] + Jt[15 & s]);
      }
      return t.join("");
    }
  }),
  Yt = {
    16: 10,
    24: 12,
    32: 14
  },
  Qt = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  Xt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  Zt = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  en = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  tn = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  nn = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  sn = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  rn = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  on = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  an = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  cn = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  un = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  hn = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  ln = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  dn = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function pn(e) {
  for (var t = [], n = 0; n < e.length; n += 4) {
    t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  }
  return t;
}
var fn = /*#__PURE__*/function () {
  function fn(e) {
    (0, _classCallCheck2.default)(this, fn);
    if (!(this instanceof fn)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: Wt(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(fn, [{
    key: "_prepare",
    value: function _prepare() {
      var e = Yt[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) {
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      }
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = pn(this.key);
      for (t = 0; t < r; t++) {
        n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      }
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= Xt[o >> 16 & 255] << 24 ^ Xt[o >> 8 & 255] << 16 ^ Xt[255 & o] << 8 ^ Xt[o >> 24 & 255] ^ Qt[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {
          i[t] ^= i[t - 1];
        } else {
          for (t = 1; t < r / 2; t++) {
            i[t] ^= i[t - 1];
          }
          o = i[r / 2 - 1], i[r / 2] ^= Xt[255 & o] ^ Xt[o >> 8 & 255] << 8 ^ Xt[o >> 16 & 255] << 16 ^ Xt[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) {
            i[t] ^= i[t - 1];
          }
        }
        for (t = 0; t < r && c < s;) {
          u = c >> 2, h = c % 4, this._Ke[u][h] = i[t], this._Kd[e - u][h] = i[t++], c++;
        }
      }
      for (var u = 1; u < e; u++) {
        for (var h = 0; h < 4; h++) {
          o = this._Kd[u][h], this._Kd[u][h] = un[o >> 24 & 255] ^ hn[o >> 16 & 255] ^ ln[o >> 8 & 255] ^ dn[255 & o];
        }
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = pn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Ke[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = en[s[r] >> 24 & 255] ^ tn[s[(r + 1) % 4] >> 16 & 255] ^ nn[s[(r + 2) % 4] >> 8 & 255] ^ sn[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        }
        s = n.slice();
      }
      var o,
        a = Ht(16);
      for (r = 0; r < 4; r++) {
        o = this._Ke[t][r], a[4 * r] = 255 & (Xt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Xt[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Xt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Xt[255 & s[(r + 3) % 4]] ^ o);
      }
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = pn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Kd[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = rn[s[r] >> 24 & 255] ^ on[s[(r + 3) % 4] >> 16 & 255] ^ an[s[(r + 2) % 4] >> 8 & 255] ^ cn[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        }
        s = n.slice();
      }
      var o,
        a = Ht(16);
      for (r = 0; r < 4; r++) {
        o = this._Kd[t][r], a[4 * r] = 255 & (Zt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Zt[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Zt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Zt[255 & s[(r + 1) % 4]] ^ o);
      }
      return a;
    }
  }]);
  return fn;
}();
var gn = /*#__PURE__*/function () {
  function gn(e) {
    (0, _classCallCheck2.default)(this, gn);
    if (!(this instanceof gn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new fn(e);
  }
  (0, _createClass2.default)(gn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Wt(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Ht(e.length), n = Ht(16), s = 0; s < e.length; s += 16) {
        zt(e, n, 0, s, s + 16), zt(n = this._aes.encrypt(n), t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Wt(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Ht(e.length), n = Ht(16), s = 0; s < e.length; s += 16) {
        zt(e, n, 0, s, s + 16), zt(n = this._aes.decrypt(n), t, s);
      }
      return t;
    }
  }]);
  return gn;
}();
var mn = /*#__PURE__*/function () {
  function mn(e, t) {
    (0, _classCallCheck2.default)(this, mn);
    if (!(this instanceof mn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Ht(16);
    this._lastCipherblock = Wt(t, !0), this._aes = new fn(e);
  }
  (0, _createClass2.default)(mn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Wt(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Ht(e.length), n = Ht(16), s = 0; s < e.length; s += 16) {
        zt(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) {
          n[r] ^= this._lastCipherblock[r];
        }
        this._lastCipherblock = this._aes.encrypt(n), zt(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Wt(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Ht(e.length), n = Ht(16), s = 0; s < e.length; s += 16) {
        zt(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) {
          t[s + r] = n[r] ^ this._lastCipherblock[r];
        }
        zt(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return mn;
}();
var yn = /*#__PURE__*/function () {
  function yn(e, t, n) {
    (0, _classCallCheck2.default)(this, yn);
    if (!(this instanceof yn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = Ht(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = Wt(t, !0), this._aes = new fn(e);
  }
  (0, _createClass2.default)(yn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = Wt(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        zt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), zt(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = Wt(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        zt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), zt(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return yn;
}();
var _n = /*#__PURE__*/function () {
  function _n(e, t) {
    (0, _classCallCheck2.default)(this, _n);
    if (!(this instanceof _n)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Ht(16);
    this._lastPrecipher = Wt(t, !0), this._lastPrecipherIndex = 16, this._aes = new fn(e);
  }
  (0, _createClass2.default)(_n, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Wt(e, !0), n = 0; n < t.length; n++) {
        16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return _n;
}();
var wn = /*#__PURE__*/function () {
  function wn(e) {
    (0, _classCallCheck2.default)(this, wn);
    if (!(this instanceof wn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = Ht(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(wn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) {
        this._counter[t] = e % 256, e = parseInt(e / 256);
      }
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = Wt(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return wn;
}();
var vn = /*#__PURE__*/function () {
  function vn(e, t) {
    (0, _classCallCheck2.default)(this, vn);
    if (!(this instanceof vn)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof wn || (t = new wn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new fn(e);
  }
  (0, _createClass2.default)(vn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Wt(e, !0), n = 0; n < t.length; n++) {
        16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return vn;
}();
var In = {
  AES: fn,
  Counter: wn,
  ModeOfOperation: {
    ecb: gn,
    cbc: mn,
    cfb: yn,
    ofb: _n,
    ctr: vn
  },
  utils: {
    hex: Vt,
    utf8: Gt
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = Wt(e, !0)).length % 16,
          n = Ht(e.length + t);
        zt(e, n);
        for (var s = e.length; s < n.length; s++) {
          n[s] = t;
        }
        return n;
      },
      strip: function strip(e) {
        if ((e = Wt(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) {
          if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        }
        var r = Ht(n);
        return zt(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: Wt,
    createArray: Ht,
    copyArray: zt
  }
};
function Sn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = In.utils.utf8.toBytes(n),
    i = In.utils.utf8.toBytes(e),
    o = new In.ModeOfOperation.cbc(s, r),
    a = In.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var bn = {
    code: 2e4,
    message: "System error"
  },
  kn = {
    code: 20101,
    message: "Invalid client"
  },
  An = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  Pn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function Tn(e) {
  var _ref32 = e || {},
    t = _ref32.errSubject,
    n = _ref32.subject,
    s = _ref32.errCode,
    r = _ref32.errMsg,
    i = _ref32.code,
    o = _ref32.message,
    a = _ref32.cause;
  return new te({
    subject: t || n || "uni-secure-network",
    code: s || i || bn.code,
    message: r || o,
    cause: a
  });
}
var Cn,
  xn,
  On = null;
var En = /*#__PURE__*/function (_jt) {
  (0, _inherits2.default)(En, _jt);
  var _super9 = _createSuper(En);
  function En(e) {
    var _this15;
    (0, _classCallCheck2.default)(this, En);
    _this15 = _super9.call(this, e), _this15.clientType = "mp-weixin", _this15.userEncryptKey = null;
    return _this15;
  }
  (0, _createClass2.default)(En, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode || !!this.scopedGlobalCache.mpWeixinOpenid;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40() {
        return _regenerator.default.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                if (this.isLogin()) {
                  _context40.next = 7;
                  break;
                }
                if (this.scopedGlobalCache.initPromise) {
                  _context40.next = 3;
                  break;
                }
                throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
              case 3:
                _context40.next = 5;
                return this.scopedGlobalCache.initPromise;
              case 5:
                if (this.isLogin()) {
                  _context40.next = 7;
                  break;
                }
                throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
              case 7:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41() {
        var _this16 = this;
        var e;
        return _regenerator.default.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                if (!this.userEncryptKey) {
                  _context41.next = 2;
                  break;
                }
                return _context41.abrupt("return", this.userEncryptKey);
              case 2:
                if (!(On && On.expireTime)) {
                  _context41.next = 6;
                  break;
                }
                e = Date.now();
                if (!(On.expireTime - e > 0)) {
                  _context41.next = 6;
                  break;
                }
                return _context41.abrupt("return", (this.userEncryptKey = On, this.userEncryptKey));
              case 6:
                return _context41.abrupt("return", new Promise(function (e, t) {
                  uni.getUserCryptoManager().getLatestUserKey({
                    success: function success(t) {
                      On = t, _this16.userEncryptKey = t, e(_this16.userEncryptKey);
                    },
                    fail: function fail(e) {
                      t(Tn(_objectSpread(_objectSpread({}, An), {}, {
                        cause: e
                      })));
                    }
                  });
                }));
              case 7:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42() {
        var _yield$this$getUserEn, e, t, n;
        return _regenerator.default.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn = _context42.sent;
                e = _yield$this$getUserEn.encryptKey;
                t = _yield$this$getUserEn.iv;
                n = _yield$this$getUserEn.version;
                return _context42.abrupt("return", {
                  verifyClientSign: Sn(JSON.stringify({
                    data: JSON.stringify({}),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ae().platform,
                    timestamp: Date.now()
                  }), e, t),
                  encryptKeyId: n,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                });
              case 7:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee43(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return _regenerator.default.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn2 = _context43.sent;
                t = _yield$this$getUserEn2.encryptKey;
                n = _yield$this$getUserEn2.iv;
                s = _yield$this$getUserEn2.version;
                r = {
                  secretType: this.secretType,
                  encryptKeyId: s,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                };
                return _context43.abrupt("return", this.secretType === Ft ? {
                  content: e,
                  _uniCloudOptions: r
                } : {
                  content: Sn(JSON.stringify({
                    data: JSON.stringify(e),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ae().platform,
                    timestamp: Date.now()
                  }), t, n),
                  _uniCloudOptions: r
                });
              case 8:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
      function platformEncryptData(_x35) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee44(e) {
        var t, _yield$this$getUserEn3, n, s;
        return _regenerator.default.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                t = e.content;
                _context44.next = 3;
                return this.getUserEncryptKey();
              case 3:
                _yield$this$getUserEn3 = _context44.sent;
                n = _yield$this$getUserEn3.encryptKey;
                s = _yield$this$getUserEn3.iv;
                return _context44.abrupt("return", JSON.parse(function (e, t, n) {
                  var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                    r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                    i = In.utils.utf8.toBytes(n),
                    o = new In.ModeOfOperation.cbc(r, i),
                    a = In.padding.pkcs7.strip(o.decrypt(s));
                  return In.utils.utf8.fromBytes(a);
                }(t, n, s)));
              case 7:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));
      function platformDecryptResult(_x36) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      return !1;
    }
  }]);
  return En;
}(jt);
function Ln(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop(_s10) {
    var r = t[_s10];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref33.type,
            t = _ref33.data,
            r = _ref33.errCode,
            i = _ref33.errMsg,
            o = _ref33.errSubject,
            a = _ref33.message;
          "success" === e ? n(t) : s(Tn({
            errCode: r,
            errMsg: Pn[r] || i || a,
            errSubject: o
          }));
        }])) : s(Tn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s10 = 0; _s10 < t.length; _s10++) {
    _loop(_s10);
  }
  return n;
}
var Rn = /*#__PURE__*/function (_jt2) {
  (0, _inherits2.default)(Rn, _jt2);
  var _super10 = _createSuper(Rn);
  function Rn(e) {
    var _this17;
    (0, _classCallCheck2.default)(this, Rn);
    _this17 = _super10.call(this, e), _this17.clientType = "app", _this17.appUtils = _objectSpread({}, Ln(uni.requireNativePlugin("plus"))), _this17.systemInfo = Cn || (Cn = ae());
    return _this17;
  }
  (0, _createClass2.default)(Rn, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee45() {
        return _regenerator.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return this.appUtils.hasClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId
                });
              case 2:
                this._hasClientKey = _context45.sent;
                return _context45.abrupt("return", this._hasClientKey);
              case 4:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee46() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _context46.next = 2;
                return this.appUtils.encryptGetClientKeyPayload({
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$ = _context46.sent;
                e = _yield$this$appUtils$.data;
                t = _yield$this$appUtils$.key;
                _context46.next = 7;
                return this.uniCloudIns.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    redirectTo: "encryption",
                    action: "getAppClientKey",
                    data: e,
                    key: t
                  }
                });
              case 7:
                _context46.t0 = _context46.sent.result;
                if (_context46.t0) {
                  _context46.next = 10;
                  break;
                }
                _context46.t0 = {};
              case 10:
                n = _context46.t0;
                if (!(0 !== n.errCode)) {
                  _context46.next = 13;
                  break;
                }
                throw function (e) {
                  return new te({
                    subject: e.errSubject || "uni-secure-network",
                    code: e.errCode || e.code || bn.code,
                    message: e.errMsg || e.message
                  });
                }(n);
              case 13:
                s = n.clientKey, r = n.key;
                _context46.next = 16;
                return this.appUtils.setClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  clientKey: s,
                  key: r
                });
              case 16:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee47() {
        var _this18 = this;
        var _ref34,
          _ref34$forceUpdate,
          e,
          _args47 = arguments;
        return _regenerator.default.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _ref34 = _args47.length > 0 && _args47[0] !== undefined ? _args47[0] : {}, _ref34$forceUpdate = _ref34.forceUpdate, e = _ref34$forceUpdate === void 0 ? !1 : _ref34$forceUpdate;
                _context47.t1 = !0;
                _context47.next = 4;
                return this.hasClientKey();
              case 4:
                _context47.t2 = _context47.sent;
                _context47.t0 = _context47.t1 !== _context47.t2;
                if (_context47.t0) {
                  _context47.next = 8;
                  break;
                }
                _context47.t0 = e;
              case 8:
                if (!_context47.t0) {
                  _context47.next = 10;
                  break;
                }
                return _context47.abrupt("return", (e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === l || !e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== p || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                  _this18.scopedGlobalCache.initStatus = d;
                }).catch(function (e) {
                  throw _this18.scopedGlobalCache.initStatus = p, e;
                }), this.scopedGlobalCache.initStatus = l), this.scopedGlobalCache.initPromise));
              case 10:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee48() {
        var _ref35,
          _ref35$forceUpdate,
          e,
          _args48 = arguments;
        return _regenerator.default.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _ref35 = _args48.length > 0 && _args48[0] !== undefined ? _args48[0] : {}, _ref35$forceUpdate = _ref35.forceUpdate, e = _ref35$forceUpdate === void 0 ? !1 : _ref35$forceUpdate;
                _context48.next = 3;
                return this.ensureClientKey({
                  forceUpdate: e
                });
              case 3:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee49() {
        var _yield$this$appUtils$2, e, t;
        return _regenerator.default.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                _context49.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$2 = _context49.sent;
                e = _yield$this$appUtils$2.data;
                t = _yield$this$appUtils$2.key;
                return _context49.abrupt("return", {
                  verifyClientSign: e,
                  encryptKeyId: t
                });
              case 6:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee50(e) {
        var _yield$this$appUtils$3, t, n, s;
        return _regenerator.default.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify(e)
                });
              case 2:
                _yield$this$appUtils$3 = _context50.sent;
                t = _yield$this$appUtils$3.data;
                n = _yield$this$appUtils$3.key;
                s = {
                  secretType: this.secretType,
                  encryptKeyId: n
                };
                return _context50.abrupt("return", this.secretType === Ft ? {
                  content: e,
                  _uniCloudOptions: s
                } : {
                  content: t,
                  _uniCloudOptions: s
                });
              case 7:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));
      function platformEncryptData(_x37) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee51(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return _regenerator.default.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                t = e.content;
                _e$_uniCloudOptions = e._uniCloudOptions;
                n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
                s = n.encryptKeyId;
                _context51.next = 6;
                return this.appUtils.decrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: t,
                  key: s
                });
              case 6:
                r = _context51.sent;
                return _context51.abrupt("return", JSON.parse(r.data));
              case 8:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));
      function platformDecryptResult(_x38) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.result || {};
      return 70009 === t.errCode && "uni-secure-network" === t.errSubject;
    }
  }]);
  return Rn;
}(jt);
function Un() {
  var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref36.secretType;
  return e === qt || e === Ft || e === Kt;
}
function Nn() {
  var _ref37 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref37.name,
    _ref37$data = _ref37.data,
    t = _ref37$data === void 0 ? {} : _ref37$data;
  return "app" === P && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function Dn() {
  var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref38.provider,
    t = _ref38.spaceId,
    n = _ref38.functionName;
  var _ae = ae(),
    s = _ae.appId,
    r = _ae.uniPlatform,
    i = _ae.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref39.provider,
      t = _ref39.spaceId;
    var n = A;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var h = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!h) return !1;
  if ((c[h] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), Tn(kn);
}
function Mn(_ref40) {
  var e = _ref40.functionName,
    t = _ref40.result,
    n = _ref40.logPvd;
  if (S && this.__dev__.debugLog && t && t.requestId) {
    var _s11 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s11, "[/").concat(n, "-request]"));
  }
}
function qn(e) {
  var t = e.callFunction,
    n = function n(_n7) {
      var _this19 = this;
      var s = _n7.name;
      _n7.data = Et.call(e, {
        data: _n7.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb",
          alipay: "alipay"
        }[this.config.provider],
        i = Un(_n7),
        o = Nn(_n7),
        a = i || o;
      return t.call(this, _n7).then(function (e) {
        return e.errCode = 0, !a && Mn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && Mn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref41 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref41$message = _ref41.message,
            e = _ref41$message === void 0 ? "" : _ref41$message,
            _ref41$extraInfo = _ref41.extraInfo,
            t = _ref41$extraInfo === void 0 ? {} : _ref41$extraInfo,
            _ref41$formatter = _ref41.formatter,
            n = _ref41$formatter === void 0 ? [] : _ref41$formatter;
          for (var _s12 = 0; _s12 < n.length; _s12++) {
            var _n$_s = n[_s12],
              _r4 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a = e.match(_r4);
            if (!_a) continue;
            var _c = _i3;
            for (var _e19 = 1; _e19 < _a.length; _e19++) {
              _c = Dt(_c, "{$".concat(_e19, "}"), _a[_e19]);
            }
            for (var _e20 in t) {
              _c = Dt(_c, "{".concat(_e20, "}"), t[_e20]);
            }
            return "replace" === _o3 ? _c : e + _c;
          }
          return e;
        }({
          message: "[".concat(_n7.name, "]: ").concat(e.message),
          formatter: Rt,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, S && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && C ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = Lt), o = Lt) : o = n, o = o.bind(e), Nn(t)) a = n.call(e, t);else if (function (_ref42) {
      var e = _ref42.name,
        _ref42$data = _ref42.data,
        t = _ref42$data === void 0 ? {} : _ref42$data;
      return "mp-weixin" === P && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (Un(t)) {
      a = new xn({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (Dn({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new xn({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a;
  };
}
xn = "mp-weixin" !== P && "app" !== P ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw Tn({
      message: "Platform ".concat(P, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : k ? "mp-weixin" === P ? En : Rn : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw Tn({
      message: "Platform ".concat(P, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var Fn = Symbol("CLIENT_DB_INTERNAL");
function Kn(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Fn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t12 = e[n];
        return "function" == typeof _t12 ? _t12.bind(e) : _t12;
      }
      return t.get(e, n, s);
    }
  });
}
function jn(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var $n = ["db.Geo", "db.command", "command.aggregate"];
function Bn(e, t) {
  return $n.indexOf("".concat(e, ".").concat(t)) > -1;
}
function Wn(e) {
  switch (f(e)) {
    case "array":
      return e.map(function (e) {
        return Wn(e);
      });
    case "object":
      return e._internalType === Fn || Object.keys(e).forEach(function (t) {
        e[t] = Wn(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function Hn(e) {
  return e && e.content && e.content.$method;
}
var zn = /*#__PURE__*/function () {
  function zn(e, t, n) {
    (0, _classCallCheck2.default)(this, zn);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(zn, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) {
        e = e.prevStage, t.push(e.content);
      }
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: Wn(e.$param)
          };
        })
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this.toJSON());
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = Hn(e),
          _n8 = Hn(e.prevStage);
        if ("aggregate" === t && "collection" === _n8 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === Hn(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = Hn(e),
          _n9 = Hn(e.prevStage);
        if ("aggregate" === t && "command" === _n9) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return Jn({
          $method: e,
          $param: Wn(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: Wn(t)
      }), S) {
        var _e21 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t13 = _e21 && _e21.$param;
        _t13 && 1 === _t13.length && "string" == typeof _e21.$param[0] && _e21.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return zn;
}();
function Jn(e, t, n) {
  return Kn(new zn(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), Bn(s, t) ? Jn({
        $method: t
      }, e, n) : function () {
        return Jn({
          $method: t,
          $param: Wn(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function Gn(_ref43) {
  var e = _ref43.path,
    t = _ref43.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.toJSON());
      }
    }]);
    return _class4;
  }();
}
function Vn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Kn(new e(t), {
    get: function get(e, t) {
      return Bn("db", t) ? Jn({
        $method: t
      }, null, e) : function () {
        return Jn({
          $method: t,
          $param: Wn(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var Yn = /*#__PURE__*/function (_ref44) {
  (0, _inherits2.default)(Yn, _ref44);
  var _super11 = _createSuper(Yn);
  function Yn() {
    (0, _classCallCheck2.default)(this, Yn);
    return _super11.apply(this, arguments);
  }
  (0, _createClass2.default)(Yn, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref45) {
      var _this20 = this;
      var e = _ref45.action,
        t = _ref45.command,
        n = _ref45.multiCommand,
        s = _ref45.queryList;
      function r(e, t) {
        if (n && s) for (var _n10 = 0; _n10 < s.length; _n10++) {
          var _r5 = s[_n10];
          _r5.udb && "function" == typeof _r5.udb.setResult && (t ? _r5.udb.setResult(t) : _r5.udb.setResult(e.result.dataList[_n10]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), M(q(o, "fail"), e).then(function () {
          return M(q(o, "complete"), e);
        }).then(function () {
          return r(null, e), Y(j, {
            type: W,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = M(q(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: h,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e22 = 0; _e22 < u.length; _e22++) {
          var _u$_e = u[_e22],
            _t14 = _u$_e.level,
            _n11 = _u$_e.message,
            _s13 = _u$_e.detail,
            _r6 = console["app" === P && "warn" === _t14 ? "error" : _t14] || console.log;
          var _i4 = "[System Info]" + _n11;
          _s13 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s13)), _r6(_i4);
        }
        if (t) {
          return a(new te({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (re({
          token: s,
          tokenExpired: c
        }), _this20._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this20._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), Y(B, {
          token: s,
          tokenExpired: c
        }));
        var h = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2(_t15) {
          var _h$_t = h[_t15],
            n = _h$_t.prop,
            s = _h$_t.tips;
          if (n in e.result) {
            var _t16 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t16;
              }
            });
          }
        };
        for (var _t15 = 0; _t15 < h.length; _t15++) {
          _loop2(_t15);
        }
        return function (e) {
          return M(q(o, "success"), e).then(function () {
            return M(q(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return Y(j, {
              type: W,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new te({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return Yn;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref46$uniClient = _ref46.uniClient,
      e = _ref46$uniClient === void 0 ? {} : _ref46$uniClient,
      _ref46$isJQL = _ref46.isJQL,
      t = _ref46$isJQL === void 0 ? !1 : _ref46$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t || (this.auth = jn(this._authCallBacks)), this._isJQL = t, Object.assign(this, jn(this._dbCallBacks)), this.env = Kn({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = Kn({}, {
      get: function get(e, t) {
        return Gn({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = Gn({
      path: [],
      method: "serverDate"
    }), this.RegExp = Gn({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }]);
  return _class5;
}());
var Qn = "token无效，跳转登录页面",
  Xn = "token过期，跳转登录页面",
  Zn = {
    TOKEN_INVALID_TOKEN_EXPIRED: Xn,
    TOKEN_INVALID_INVALID_CLIENTID: Qn,
    TOKEN_INVALID: Qn,
    TOKEN_INVALID_WRONG_TOKEN: Qn,
    TOKEN_INVALID_ANONYMOUS_USER: Qn
  },
  es = {
    "uni-id-token-expired": Xn,
    "uni-id-check-token-failed": Qn,
    "uni-id-token-not-exist": Qn,
    "uni-id-check-device-feature-failed": Qn
  };
function ts(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function ns() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(ts(t, e.path)) : !1 === e.needLogin && s.push(ts(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function ss(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function rs() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath || "";
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function is() {
  return ss(rs());
}
function os() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = ss(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var as = !!_pages.default.uniIdRouter;
var _ref47 = function () {
    var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref28$pages = _ref28.pages,
      t = _ref28$pages === void 0 ? [] : _ref28$pages,
      _ref28$subPackages = _ref28.subPackages,
      n = _ref28$subPackages === void 0 ? [] : _ref28$subPackages,
      _ref28$uniIdRouter = _ref28.uniIdRouter,
      s = _ref28$uniIdRouter === void 0 ? {} : _ref28$uniIdRouter,
      _ref28$tabBar = _ref28.tabBar,
      r = _ref28$tabBar === void 0 ? {} : _ref28$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _ns = ns(t),
      c = _ns.needLoginPage,
      u = _ns.notNeedLoginPage,
      _ref30 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _ns2 = ns(r, s),
            i = _ns2.needLoginPage,
            o = _ns2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      h = _ref30.needLoginPage,
      l = _ref30.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(h)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(l)),
      loginPageInTabBar: os(i, r)
    };
  }(),
  cs = _ref47.loginPage,
  us = _ref47.routerNeedLogin,
  hs = _ref47.resToLogin,
  ls = _ref47.needLoginPage,
  ds = _ref47.notNeedLoginPage,
  ps = _ref47.loginPageInTabBar;
if (ls.indexOf(cs) > -1) throw new Error("Login page [".concat(cs, "] should not be \"needLogin\", please check your pages.json"));
function fs(e) {
  var t = is();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e23 = 0; _e23 < r.length; _e23++) {
    var _t17 = r[_e23];
    ".." === _t17 ? i.pop() : "." !== _t17 && i.push(_t17);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function gs(e) {
  var t = ss(fs(e));
  return !(ds.indexOf(t) > -1) && (ls.indexOf(t) > -1 || us.some(function (t) {
    return function (e, t) {
      return new RegExp(t).test(e);
    }(e, t);
  }));
}
function ms(_ref48) {
  var e = _ref48.redirect;
  var t = ss(e),
    n = ss(cs);
  return is() !== n && t !== n;
}
function ys() {
  var _ref49 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref49.api,
    t = _ref49.redirect;
  if (!t || !ms({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(cs, t);
  ps ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  });
}
function _s() {
  var _ref50 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref50.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _se3 = se(),
        e = _se3.token,
        t = _se3.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e24 = "uni-id-token-expired";
          n = {
            errCode: _e24,
            errMsg: es[_e24]
          };
        }
      } else {
        var _e25 = "uni-id-check-token-failed";
        n = {
          errCode: _e25,
          errMsg: es[_e25]
        };
      }
      return n;
    }();
  if (gs(e) && n) {
    n.uniIdRedirectUrl = e;
    if (J($).length > 0) return setTimeout(function () {
      Y($, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function ws() {
  !function () {
    var e = rs(),
      _s14 = _s({
        url: e
      }),
      t = _s14.abortLoginPageJump,
      n = _s14.autoToLoginPage;
    t || n && ys({
      api: "redirectTo",
      redirect: e
    });
  }();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3(_t18) {
    var n = e[_t18];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _s15 = _s({
            url: e.url
          }),
          t = _s15.abortLoginPageJump,
          s = _s15.autoToLoginPage;
        return t ? e : s ? (ys({
          api: n,
          redirect: fs(e.url)
        }), !1) : e;
      }
    });
  };
  for (var _t18 = 0; _t18 < e.length; _t18++) {
    _loop3(_t18);
  }
}
function vs() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref51 = e || {},
            t = _ref51.errCode;
          return t in es;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref52 = e || {},
            t = _ref52.errCode;
          return t in Zn;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = J($);
      Z().then(function () {
        var n = rs();
        if (n && ms({
          redirect: n
        })) return t.length > 0 ? Y($, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (cs && ys({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function Is(e) {
  !function (e) {
    e.onResponse = function (e) {
      G(j, e);
    }, e.offResponse = function (e) {
      V(j, e);
    };
  }(e), function (e) {
    e.onNeedLogin = function (e) {
      G($, e);
    }, e.offNeedLogin = function (e) {
      V($, e);
    }, as && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = !0, Z().then(function () {
      ws.call(e);
    }), hs && vs.call(e)));
  }(e), function (e) {
    e.onRefreshToken = function (e) {
      G(B, e);
    }, e.offRefreshToken = function (e) {
      V(B, e);
    };
  }(e);
}
var Ss;
var bs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  ks = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function As() {
  var e = se().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse((s = t[1], decodeURIComponent(Ss(s).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  var s;
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
Ss = "function" != typeof atob ? function (e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ks.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t;
  e += "==".slice(2 - (3 & e.length));
  for (var n, s, r = "", i = 0; i < e.length;) {
    t = bs.indexOf(e.charAt(i++)) << 18 | bs.indexOf(e.charAt(i++)) << 12 | (n = bs.indexOf(e.charAt(i++))) << 6 | (s = bs.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
  }
  return r;
} : atob;
var Ps = n(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref53) {
      var s = _ref53.onChooseFile,
        r = _ref53.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t19 = s(e);
          if (void 0 !== _t19) return Promise.resolve(_t19).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) {
              c();
            }
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                cloudPathAsRealPath: u.cloudPathAsRealPath,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  Ts = t(Ps);
var Cs = "manual";
function xs(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {}
      };
    },
    created: function created() {
      var _this21 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this21[t]);
        }), e;
      }, function (e, t) {
        if (_this21.loadtime === Cs) return;
        var n = !1;
        var s = [];
        for (var _r7 = 2; _r7 < e.length; _r7++) {
          e[_r7] !== t[_r7] && (s.push(e[_r7]), n = !0);
        }
        e[0] !== t[0] && (_this21.mixinDatacomPage.current = _this21.pageCurrent), _this21.mixinDatacomPage.size = _this21.pageSize, _this21.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this22 = this;
        var _ref54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref54$getone = _ref54.getone,
          e = _ref54$getone === void 0 ? !1 : _ref54$getone,
          t = _ref54.success,
          n = _ref54.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {
          _this22.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this22.getcount && (_this22.mixinDatacomPage.count = r), _this22.mixinDatacomHasMore = s.length < _this22.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this22.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this22.mixinDatacomLoading = !1, _this22.mixinDatacomErrorMessage = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n12;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n = e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n12 = n).collection.apply(_n12, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var h = t.orderby || this.orderby;
        h && (n = n.orderBy(h));
        var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          p = void 0 !== t.getcount ? t.getcount : this.getcount,
          f = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: p
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return f && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;
      }
    }
  };
}
function Os(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n13 = n,
      s = _n13.customUI,
      r = _n13.loadingOptions,
      i = _n13.errorOptions,
      o = _n13.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        return function () {
          var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref55.fn,
            t = _ref55.interceptorName,
            n = _ref55.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee52() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return _regenerator.default.wrap(function _callee52$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      s[_key2] = _args[_key2];
                    }
                    r = n ? n({
                      params: s
                    }) : {};
                    _context52.prev = 2;
                    _context52.next = 5;
                    return M(q(t, "invoke"), _objectSpread({}, r));
                  case 5:
                    _context52.next = 7;
                    return e.apply(void 0, s);
                  case 7:
                    i = _context52.sent;
                    _context52.next = 10;
                    return M(q(t, "success"), _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 10:
                    return _context52.abrupt("return", i);
                  case 13:
                    _context52.prev = 13;
                    _context52.t0 = _context52["catch"](2);
                    o = _context52.t0;
                    _context52.next = 18;
                    return M(q(t, "fail"), _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }));
                  case 18:
                    throw o;
                  case 19:
                    _context52.prev = 19;
                    _context52.next = 22;
                    return M(q(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }) : _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 22:
                    return _context52.finish(19);
                  case 23:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee52, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s16 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee54() {
              var l,
                _len3,
                h,
                _key3,
                d,
                p,
                _ref57,
                f,
                g,
                m,
                y,
                _e26,
                _yield,
                _t20,
                _n14,
                _args4 = arguments;
              return _regenerator.default.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      a && uni.showLoading({
                        title: r.title,
                        mask: r.mask
                      });
                      for (_len3 = _args4.length, h = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        h[_key3] = _args4[_key3];
                      }
                      d = {
                        name: t,
                        type: u,
                        data: {
                          method: c,
                          params: h
                        }
                      };
                      "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                        var n = t.data.method,
                          s = e.secretMethods || {},
                          r = s[n] || s["*"];
                        r && (t.secretType = r);
                      }(n, d);
                      p = !1;
                      _context54.prev = 5;
                      _context54.next = 8;
                      return e.callFunction(d);
                    case 8:
                      l = _context54.sent;
                      _context54.next = 14;
                      break;
                    case 11:
                      _context54.prev = 11;
                      _context54.t0 = _context54["catch"](5);
                      p = !0, l = {
                        result: new te(_context54.t0)
                      };
                    case 14:
                      _ref57 = l.result || {}, f = _ref57.errSubject, g = _ref57.errCode, m = _ref57.errMsg, y = _ref57.newToken;
                      if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (re(y), Y(B, _objectSpread({}, y))), g)) {
                        _context54.next = 39;
                        break;
                      }
                      _e26 = m;
                      if (!(p && o)) {
                        _context54.next = 24;
                        break;
                      }
                      _context54.next = 20;
                      return o({
                        objectName: t,
                        methodName: c,
                        params: h,
                        errSubject: f,
                        errCode: g,
                        errMsg: m
                      });
                    case 20:
                      _context54.t1 = _context54.sent.errMsg;
                      if (_context54.t1) {
                        _context54.next = 23;
                        break;
                      }
                      _context54.t1 = m;
                    case 23:
                      _e26 = _context54.t1;
                    case 24:
                      if (!a) {
                        _context54.next = 37;
                        break;
                      }
                      if (!("toast" === i.type)) {
                        _context54.next = 29;
                        break;
                      }
                      uni.showToast({
                        title: _e26,
                        icon: "none"
                      });
                      _context54.next = 37;
                      break;
                    case 29:
                      if (!("modal" !== i.type)) {
                        _context54.next = 31;
                        break;
                      }
                      throw new Error("Invalid errorOptions.type: ".concat(i.type));
                    case 31:
                      _context54.next = 33;
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee53() {
                        var _ref59,
                          e,
                          t,
                          n,
                          s,
                          r,
                          _args2 = arguments;
                        return _regenerator.default.wrap(function _callee53$(_context53) {
                          while (1) {
                            switch (_context53.prev = _context53.next) {
                              case 0:
                                _ref59 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref59.title, t = _ref59.content, n = _ref59.showCancel, s = _ref59.cancelText, r = _ref59.confirmText;
                                return _context53.abrupt("return", new Promise(function (i, o) {
                                  uni.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: n,
                                    cancelText: s,
                                    confirmText: r,
                                    success: function success(e) {
                                      i(e);
                                    },
                                    fail: function fail() {
                                      i({
                                        confirm: !1,
                                        cancel: !0
                                      });
                                    }
                                  });
                                }));
                              case 2:
                              case "end":
                                return _context53.stop();
                            }
                          }
                        }, _callee53);
                      }))({
                        title: "提示",
                        content: _e26,
                        showCancel: i.retry,
                        cancelText: "取消",
                        confirmText: i.retry ? "重试" : "确定"
                      });
                    case 33:
                      _yield = _context54.sent;
                      _t20 = _yield.confirm;
                      if (!(i.retry && _t20)) {
                        _context54.next = 37;
                        break;
                      }
                      return _context54.abrupt("return", s.apply(void 0, h));
                    case 37:
                      _n14 = new te({
                        subject: f,
                        code: g,
                        message: m,
                        requestId: l.requestId
                      });
                      throw _n14.detail = l.result, Y(j, {
                        type: z,
                        content: _n14
                      }), _n14;
                    case 39:
                      return _context54.abrupt("return", (Y(j, {
                        type: z,
                        content: l.result
                      }), l.result));
                    case 40:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, null, [[5, 11]]);
            }));
            function s() {
              return _s16.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref60 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref60.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function Es(e) {
  return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function Ls() {
  return _Ls.apply(this, arguments);
}
function _Ls() {
  _Ls = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee57() {
    var _ref72,
      e,
      _ref72$callLoginByWei,
      t,
      n,
      s,
      r,
      _args7 = arguments;
    return _regenerator.default.wrap(function _callee57$(_context57) {
      while (1) {
        switch (_context57.prev = _context57.next) {
          case 0:
            _ref72 = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, e = _ref72.openid, _ref72$callLoginByWei = _ref72.callLoginByWeixin, t = _ref72$callLoginByWei === void 0 ? !1 : _ref72$callLoginByWei;
            n = Es(this);
            if (!("mp-weixin" !== P)) {
              _context57.next = 4;
              break;
            }
            throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(P, "`"));
          case 4:
            if (!(e && t)) {
              _context57.next = 6;
              break;
            }
            throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
          case 6:
            if (!e) {
              _context57.next = 8;
              break;
            }
            return _context57.abrupt("return", (n.mpWeixinOpenid = e, {}));
          case 8:
            _context57.next = 10;
            return new Promise(function (e, t) {
              uni.login({
                success: function success(t) {
                  e(t.code);
                },
                fail: function fail(e) {
                  t(new Error(e.errMsg));
                }
              });
            });
          case 10:
            s = _context57.sent;
            r = this.importObject("uni-id-co", {
              customUI: !0
            });
            _context57.next = 14;
            return r.secureNetworkHandshakeByWeixin({
              code: s,
              callLoginByWeixin: t
            });
          case 14:
            n.mpWeixinCode = s;
            return _context57.abrupt("return", {
              code: s
            });
          case 16:
          case "end":
            return _context57.stop();
        }
      }
    }, _callee57, this);
  }));
  return _Ls.apply(this, arguments);
}
function Rs(_x39) {
  return _Rs.apply(this, arguments);
}
function _Rs() {
  _Rs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee58(e) {
    var t;
    return _regenerator.default.wrap(function _callee58$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            t = Es(this);
            return _context58.abrupt("return", (t.initPromise || (t.initPromise = Ls.call(this, e)), t.initPromise));
          case 2:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee58, this);
  }));
  return _Rs.apply(this, arguments);
}
function Us(e) {
  return function () {
    var _ref61 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref61.openid,
      _ref61$callLoginByWei = _ref61.callLoginByWeixin,
      n = _ref61$callLoginByWei === void 0 ? !1 : _ref61$callLoginByWei;
    return Rs.call(e, {
      openid: t,
      callLoginByWeixin: n
    });
  };
}
function Ns(e) {
  var t = {
    getSystemInfo: uni.getSystemInfo,
    getPushClientId: uni.getPushClientId
  };
  return function (n) {
    return new Promise(function (s, r) {
      t[e](_objectSpread(_objectSpread({}, n), {}, {
        success: function success(e) {
          s(e);
        },
        fail: function fail(e) {
          r(e);
        }
      }));
    });
  };
}
var Ds = /*#__PURE__*/function (_ref62) {
  (0, _inherits2.default)(Ds, _ref62);
  var _super12 = _createSuper(Ds);
  function Ds() {
    var _this23;
    (0, _classCallCheck2.default)(this, Ds);
    _this23 = _super12.call(this), _this23._uniPushMessageCallback = _this23._receivePushMessage.bind((0, _assertThisInitialized2.default)(_this23)), _this23._currentMessageId = -1, _this23._payloadQueue = [];
    return _this23;
  }
  (0, _createClass2.default)(Ds, [{
    key: "init",
    value: function init() {
      var _this24 = this;
      return Promise.all([Ns("getSystemInfo")(), Ns("getPushClientId")()]).then(function () {
        var _ref63 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
          _ref64 = (0, _slicedToArray2.default)(_ref63, 2),
          _ref64$ = _ref64[0];
        _ref64$ = _ref64$ === void 0 ? {} : _ref64$;
        var e = _ref64$.appId,
          _ref64$2 = _ref64[1];
        _ref64$2 = _ref64$2 === void 0 ? {} : _ref64$2;
        var t = _ref64$2.cid;
        if (!e) throw new Error("Invalid appId, please check the manifest.json file");
        if (!t) throw new Error("Invalid push client id");
        _this24._appId = e, _this24._pushClientId = t, _this24._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), _this24.emit("open"), _this24._initMessageListener();
      }, function (e) {
        throw _this24.emit("error", e), _this24.close(), e;
      });
    }
  }, {
    key: "open",
    value: function () {
      var _open = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee55() {
        return _regenerator.default.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                return _context55.abrupt("return", this.init());
              case 1:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));
      function open() {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "_isUniCloudSSE",
    value: function _isUniCloudSSE(e) {
      if ("receive" !== e.type) return !1;
      var t = e && e.data && e.data.payload;
      return !(!t || "UNI_CLOUD_SSE" !== t.channel || t.seqId !== this._seqId);
    }
  }, {
    key: "_receivePushMessage",
    value: function _receivePushMessage(e) {
      if (!this._isUniCloudSSE(e)) return;
      var t = e && e.data && e.data.payload,
        n = t.action,
        s = t.messageId,
        r = t.message;
      this._payloadQueue.push({
        action: n,
        messageId: s,
        message: r
      }), this._consumMessage();
    }
  }, {
    key: "_consumMessage",
    value: function _consumMessage() {
      var _this25 = this;
      for (;;) {
        var _e27 = this._payloadQueue.find(function (e) {
          return e.messageId === _this25._currentMessageId + 1;
        });
        if (!_e27) break;
        this._currentMessageId++, this._parseMessagePayload(_e27);
      }
    }
  }, {
    key: "_parseMessagePayload",
    value: function _parseMessagePayload(e) {
      var t = e.action,
        n = e.messageId,
        s = e.message;
      "end" === t ? this._end({
        messageId: n,
        message: s
      }) : "message" === t && this._appendMessage({
        messageId: n,
        message: s
      });
    }
  }, {
    key: "_appendMessage",
    value: function _appendMessage() {
      var _ref65 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref65.messageId,
        t = _ref65.message;
      this.emit("message", t);
    }
  }, {
    key: "_end",
    value: function _end() {
      var _ref66 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref66.messageId,
        t = _ref66.message;
      this.emit("end", t), this.close();
    }
  }, {
    key: "_initMessageListener",
    value: function _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        appId: this._appId,
        pushClientId: this._pushClientId,
        seqId: this._seqId
      };
    }
  }, {
    key: "close",
    value: function close() {
      this._destroy(), this.emit("close");
    }
  }]);
  return Ds;
}( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
    this._callback = {};
  }
  (0, _createClass2.default)(_class6, [{
    key: "addListener",
    value: function addListener(e, t) {
      this._callback[e] || (this._callback[e] = []), this._callback[e].push(t);
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return this.addListener(e, t);
    }
  }, {
    key: "removeListener",
    value: function removeListener(e, t) {
      if (!t) throw new Error('The "listener" argument must be of type function. Received undefined');
      var n = this._callback[e];
      if (!n) return;
      var s = function (e, t) {
        for (var _n15 = e.length - 1; _n15 >= 0; _n15--) {
          if (e[_n15] === t) return _n15;
        }
        return -1;
      }(n, t);
      n.splice(s, 1);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return this.removeListener(e, t);
    }
  }, {
    key: "removeAllListener",
    value: function removeAllListener(e) {
      delete this._callback[e];
    }
  }, {
    key: "emit",
    value: function emit(e) {
      var n = this._callback[e];
      for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        t[_key4 - 1] = arguments[_key4];
      }
      if (n) for (var _e28 = 0; _e28 < n.length; _e28++) {
        n[_e28].apply(n, t);
      }
    }
  }]);
  return _class6;
}());
function Ms(_x40, _x41) {
  return _Ms.apply(this, arguments);
}
function _Ms() {
  _Ms = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee59(e, t) {
    var n, _e32, s;
    return _regenerator.default.wrap(function _callee59$(_context59) {
      while (1) {
        switch (_context59.prev = _context59.next) {
          case 0:
            n = "http://".concat(e, ":").concat(t, "/system/ping");
            _context59.prev = 1;
            _context59.next = 4;
            return s = {
              url: n,
              timeout: 500
            }, new Promise(function (e, t) {
              ne.request(_objectSpread(_objectSpread({}, s), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });
          case 4:
            _e32 = _context59.sent;
            return _context59.abrupt("return", !(!_e32.data || 0 !== _e32.data.code));
          case 8:
            _context59.prev = 8;
            _context59.t0 = _context59["catch"](1);
            return _context59.abrupt("return", !1);
          case 11:
          case "end":
            return _context59.stop();
        }
      }
    }, _callee59, null, [[1, 8]]);
  }));
  return _Ms.apply(this, arguments);
}
function qs(_x42) {
  return _qs.apply(this, arguments);
}
function _qs() {
  _qs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee61(e) {
    var _ae2, _e33, _t22, t, _t$debugInfo, n, s, _yield2, r, i, o;
    return _regenerator.default.wrap(function _callee61$(_context61) {
      while (1) {
        switch (_context61.prev = _context61.next) {
          case 0:
            if (S) {
              _context61.next = 2;
              break;
            }
            return _context61.abrupt("return", Promise.resolve());
          case 2:
            if ("app" === P) {
              _ae2 = ae(), _e33 = _ae2.osName, _t22 = _ae2.osVersion;
              "ios" === _e33 && function (e) {
                if (!e || "string" != typeof e) return 0;
                var t = e.match(/^(\d+)./);
                return t && t[1] ? parseInt(t[1]) : 0;
              }(_t22) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
            }
            t = e.__dev__;
            if (t.debugInfo) {
              _context61.next = 6;
              break;
            }
            return _context61.abrupt("return");
          case 6:
            _t$debugInfo = t.debugInfo;
            n = _t$debugInfo.address;
            s = _t$debugInfo.servePort;
            _context61.next = 11;
            return function () {
              var _ref73 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee60(e, t) {
                var n, _s17, _r8;
                return _regenerator.default.wrap(function _callee60$(_context60) {
                  while (1) {
                    switch (_context60.prev = _context60.next) {
                      case 0:
                        _s17 = 0;
                      case 1:
                        if (!(_s17 < e.length)) {
                          _context60.next = 11;
                          break;
                        }
                        _r8 = e[_s17];
                        _context60.next = 5;
                        return Ms(_r8, t);
                      case 5:
                        if (!_context60.sent) {
                          _context60.next = 8;
                          break;
                        }
                        n = _r8;
                        return _context60.abrupt("break", 11);
                      case 8:
                        _s17++;
                        _context60.next = 1;
                        break;
                      case 11:
                        return _context60.abrupt("return", {
                          address: n,
                          port: t
                        });
                      case 12:
                      case "end":
                        return _context60.stop();
                    }
                  }
                }, _callee60);
              }));
              return function (_x43, _x44) {
                return _ref73.apply(this, arguments);
              };
            }()(n, s);
          case 11:
            _yield2 = _context61.sent;
            r = _yield2.address;
            if (!r) {
              _context61.next = 15;
              break;
            }
            return _context61.abrupt("return", (t.localAddress = r, void (t.localPort = s)));
          case 15:
            i = console["app" === P ? "error" : "warn"];
            o = "";
            if (!("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, o = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === P && (o += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === P.indexOf("mp-") && (o += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t.debugInfo.forceRemote)) {
              _context61.next = 19;
              break;
            }
            throw new Error(o);
          case 19:
            i(o);
          case 20:
          case "end":
            return _context61.stop();
        }
      }
    }, _callee61);
  }));
  return _qs.apply(this, arguments);
}
function Fs(e) {
  e._initPromiseHub || (e._initPromiseHub = new v({
    createPromise: function createPromise() {
      var t = Promise.resolve();
      var n;
      n = 1, t = new Promise(function (e) {
        setTimeout(function () {
          e();
        }, n);
      });
      var s = e.auth();
      return t.then(function () {
        return s.getLoginState();
      }).then(function (e) {
        return e ? Promise.resolve() : s.signInAnonymously();
      });
    }
  }));
}
var Ks = {
  tcb: It,
  tencent: It,
  aliyun: de,
  private: bt,
  alipay: Ot
};
var js = new ( /*#__PURE__*/function () {
  function _class7() {
    (0, _classCallCheck2.default)(this, _class7);
  }
  (0, _createClass2.default)(_class7, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = Ks[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), S && function (e) {
        if (!S) return;
        var t = {};
        e.__dev__ = t, t.debugLog = S && ("web" === P && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === P);
        var n = T;
        n && !n.code && (t.debugInfo = n);
        var s = new v({
          createPromise: function createPromise() {
            return qs(e);
          }
        });
        t.initLocalNetwork = function () {
          return s.exec();
        };
      }(t), Fs(t), qn(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = Vn(Yn, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = Vn(Yn, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = As, e.chooseAndUploadFile = Ts.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return xs(e);
          }
        }), e.SSEChannel = Ds, e.initSecureNetworkByWeixin = Us(e), e.importObject = Os(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return n.apply(t, Array.from(arguments));
        }, t[e] = function (e, t) {
          return function (n) {
            var _this26 = this;
            var s = !1;
            if ("callFunction" === t) {
              var _e29 = n && n.type || c;
              s = _e29 !== c;
            }
            var r = "callFunction" === t && !s,
              i = this._initPromiseHub.exec();
            n = n || {};
            var _ee2 = ee(n),
              o = _ee2.success,
              a = _ee2.fail,
              u = _ee2.complete,
              h = i.then(function () {
                return s ? Promise.resolve() : M(q(t, "invoke"), n);
              }).then(function () {
                return e.call(_this26, n);
              }).then(function (e) {
                return s ? Promise.resolve(e) : M(q(t, "success"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return r && Y(j, {
                    type: H,
                    content: e
                  }), Promise.resolve(e);
                });
              }, function (e) {
                return s ? Promise.reject(e) : M(q(t, "fail"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return Y(j, {
                    type: H,
                    content: e
                  }), Promise.reject(e);
                });
              });
            if (!(o || a || u)) return h;
            h.then(function (e) {
              o && o(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            }, function (e) {
              a && a(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            });
          };
        }(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class7;
}())();
(function () {
  var e = C;
  var t = {};
  if (e && 1 === e.length) t = e[0], js = js.init(t), js._isDefault = !0;else {
    var _t21 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    var _n16;
    _n16 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : x ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t21.forEach(function (e) {
      js[e] = function () {
        return console.error(_n16), Promise.reject(new te({
          code: "SYS_ERR",
          message: _n16
        }));
      };
    });
  }
  Object.assign(js, {
    get mixinDatacom() {
      return xs(js);
    }
  }), Is(js), js.addInterceptor = N, js.removeInterceptor = D, js.interceptObject = F, S && "web" === P && (window.uniCloud = js);
})();
var $s = js;
exports.default = $s;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 408:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 377);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 409);
var construct = __webpack_require__(/*! ./construct.js */ 15);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 409:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 410:
/*!********************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/pages.json?{"type":"origin-pages-json"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": [{
    "path": "pages/index/index",
    "style": {
      "backgroundTextStyle": "dark",
      "navigationBarBackgroundColor": "#FFFFFF",
      "navigationBarTextStyle": "black",
      "enablePullDownRefresh": true,
      "navigationBarTitleText": "mall4j"
    }
  }, {
    "path": "pages/logs/logs",
    "style": {
      "navigationBarTitleText": "查看启动日志"
    }
  }, {
    "path": "pages/user/user",
    "style": {
      "navigationBarTitleText": "个人中心"
    }
  }, {
    "path": "pages/basket/basket",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "购物车",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/category/category",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "分类商品",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/search-page/search-page",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "搜索",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/delivery-address/delivery-address",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "收货地址",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/editAddress/editAddress",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "编辑收货地址",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/orderList/orderList",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarTitleText": "订单列表",
      "navigationBarTextStyle": "black",
      "navigationBarBackgroundColor": "#fafafa"
    }
  }, {
    "path": "pages/order-detail/order-detail",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "订单详情",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/submit-order/submit-order",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "提交订单",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/binding-phone/binding-phone",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "绑定手机号码",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/express-delivery/express-delivery",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "物流查询",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/pay-result/pay-result",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "支付结果",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/search-prod-show/search-prod-show",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "搜索结果",
      "navigationBarTextStyle": "black"
    }
  }, {
    "path": "pages/prod/prod",
    "style": {
      "navigationBarTitleText": "商品详情"
    }
  }, {
    "path": "pages/login/login",
    "style": {}
  }, {
    "path": "pages/prod-classify/prod-classify",
    "style": {
      "onReachBottomDistance": 0
    }
  }, {
    "path": "pages/recent-news/recent-news",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarTitleText": "最新公告",
      "navigationBarTextStyle": "black",
      "navigationBarBackgroundColor": "#fafafa"
    }
  }, {
    "path": "pages/news-detail/news-detail",
    "style": {
      "backgroundTextStyle": "light",
      "navigationBarTitleText": "最新公告",
      "navigationBarTextStyle": "black",
      "navigationBarBackgroundColor": "#fafafa"
    }
  }, {
    "path": "pages/accountLogin/accountLogin"
  }, {
    "path": "pages/register/register"
  }, {
    "path": "pages/aftersale-apply/aftersale-type",
    "style": {}
  }, {
    "path": "pages/aftersale-apply/aftersale-info",
    "style": {}
  }, {
    "path": "pages/aftersale-apply/aftersale-reason",
    "style": {}
  }, {
    "path": "pages/aftersale-apply/aftersale-describe",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/aftersale-detail/aftersale-detail",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/aftersale-apply/aftersale-reason-chose",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/aftersale-list/aftersale-list",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/aftersale-delivery-submit/aftersale-delivery-submit",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }],
  "tabBar": {
    "selectedColor": "#3a86b9",
    "color": "#b8b8b8",
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "/static/images/tabbar/homepage.png",
      "selectedIconPath": "/static/images/tabbar/homepage-sel.png"
    }, {
      "pagePath": "pages/category/category",
      "text": "分类",
      "iconPath": "/static/images/tabbar/category.png",
      "selectedIconPath": "/static/images/tabbar/category-sel.png"
    }, {
      "pagePath": "pages/basket/basket",
      "text": "购物车",
      "iconPath": "/static/images/tabbar/basket.png",
      "selectedIconPath": "/static/images/tabbar/basket-sel.png"
    }, {
      "pagePath": "pages/user/user",
      "text": "我的",
      "iconPath": "/static/images/tabbar/user.png",
      "selectedIconPath": "/static/images/tabbar/user-sel.png"
    }]
  },
  "sitemapLocation": "sitemap.json",
  "globalStyle": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black"
  },
  "condition": {
    "current": 0,
    "list": [{
      "name": "描述页",
      "path": "pages/aftersale-apply/aftersale-type",
      "query": ""
    }]
  },
  "subPackages": []
};
exports.default = _default;

/***/ }),

/***/ 411:
/*!*******************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/pages.json?{"type":"stat"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": ""
};
exports.default = _default;

/***/ }),

/***/ 412:
/*!*************************************************************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/uni_modules/uni-file-picker/components/uni-file-picker/choose-and-upload-file.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx, uniCloud) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseAndUploadFile = chooseAndUploadFile;
exports.uploadCloudFiles = uploadCloudFiles;
var ERR_MSG_OK = 'chooseAndUploadFile:ok';
var ERR_MSG_FAIL = 'chooseAndUploadFile:fail';
function chooseImage(opts) {
  var count = opts.count,
    _opts$sizeType = opts.sizeType,
    sizeType = _opts$sizeType === void 0 ? ['original', 'compressed'] : _opts$sizeType,
    sourceType = opts.sourceType,
    extension = opts.extension;
  return new Promise(function (resolve, reject) {
    uni.chooseImage({
      count: count,
      sizeType: sizeType,
      sourceType: sourceType,
      extension: extension,
      success: function success(res) {
        resolve(normalizeChooseAndUploadFileRes(res, 'image'));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseImage:fail', ERR_MSG_FAIL)
        });
      }
    });
  });
}
function chooseVideo(opts) {
  var camera = opts.camera,
    compressed = opts.compressed,
    maxDuration = opts.maxDuration,
    sourceType = opts.sourceType,
    extension = opts.extension;
  return new Promise(function (resolve, reject) {
    uni.chooseVideo({
      camera: camera,
      compressed: compressed,
      maxDuration: maxDuration,
      sourceType: sourceType,
      extension: extension,
      success: function success(res) {
        var tempFilePath = res.tempFilePath,
          duration = res.duration,
          size = res.size,
          height = res.height,
          width = res.width;
        resolve(normalizeChooseAndUploadFileRes({
          errMsg: 'chooseVideo:ok',
          tempFilePaths: [tempFilePath],
          tempFiles: [{
            name: res.tempFile && res.tempFile.name || '',
            path: tempFilePath,
            size: size,
            type: res.tempFile && res.tempFile.type || '',
            width: width,
            height: height,
            duration: duration,
            fileType: 'video',
            cloudPath: ''
          }]
        }, 'video'));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseVideo:fail', ERR_MSG_FAIL)
        });
      }
    });
  });
}
function chooseAll(opts) {
  var count = opts.count,
    extension = opts.extension;
  return new Promise(function (resolve, reject) {
    var chooseFile = uni.chooseFile;
    if (typeof wx !== 'undefined' && typeof wx.chooseMessageFile === 'function') {
      chooseFile = wx.chooseMessageFile;
    }
    if (typeof chooseFile !== 'function') {
      return reject({
        errMsg: ERR_MSG_FAIL + ' 请指定 type 类型，该平台仅支持选择 image 或 video。'
      });
    }
    chooseFile({
      type: 'all',
      count: count,
      extension: extension,
      success: function success(res) {
        resolve(normalizeChooseAndUploadFileRes(res));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseFile:fail', ERR_MSG_FAIL)
        });
      }
    });
  });
}
function normalizeChooseAndUploadFileRes(res, fileType) {
  res.tempFiles.forEach(function (item, index) {
    if (!item.name) {
      item.name = item.path.substring(item.path.lastIndexOf('/') + 1);
    }
    if (fileType) {
      item.fileType = fileType;
    }
    item.cloudPath = Date.now() + '_' + index + item.name.substring(item.name.lastIndexOf('.'));
  });
  if (!res.tempFilePaths) {
    res.tempFilePaths = res.tempFiles.map(function (file) {
      return file.path;
    });
  }
  return res;
}
function uploadCloudFiles(files) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var _onUploadProgress = arguments.length > 2 ? arguments[2] : undefined;
  files = JSON.parse(JSON.stringify(files));
  var len = files.length;
  var count = 0;
  var self = this;
  return new Promise(function (resolve) {
    while (count < max) {
      next();
    }
    function next() {
      var cur = count++;
      if (cur >= len) {
        !files.find(function (item) {
          return !item.url && !item.errMsg;
        }) && resolve(files);
        return;
      }
      var fileItem = files[cur];
      var index = self.files.findIndex(function (v) {
        return v.uuid === fileItem.uuid;
      });
      fileItem.url = '';
      delete fileItem.errMsg;
      uniCloud.uploadFile({
        filePath: fileItem.path,
        cloudPath: fileItem.cloudPath,
        fileType: fileItem.fileType,
        onUploadProgress: function onUploadProgress(res) {
          res.index = index;
          _onUploadProgress && _onUploadProgress(res);
        }
      }).then(function (res) {
        fileItem.url = res.fileID;
        fileItem.index = index;
        if (cur < len) {
          next();
        }
      }).catch(function (res) {
        fileItem.errMsg = res.errMsg || res.message;
        fileItem.index = index;
        if (cur < len) {
          next();
        }
      });
    }
  });
}
function uploadFiles(choosePromise, _ref) {
  var onChooseFile = _ref.onChooseFile,
    onUploadProgress = _ref.onUploadProgress;
  return choosePromise.then(function (res) {
    if (onChooseFile) {
      var customChooseRes = onChooseFile(res);
      if (typeof customChooseRes !== 'undefined') {
        return Promise.resolve(customChooseRes).then(function (chooseRes) {
          return typeof chooseRes === 'undefined' ? res : chooseRes;
        });
      }
    }
    return res;
  }).then(function (res) {
    if (res === false) {
      return {
        errMsg: ERR_MSG_OK,
        tempFilePaths: [],
        tempFiles: []
      };
    }
    return res;
  });
}
function chooseAndUploadFile() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    type: 'all'
  };
  if (opts.type === 'image') {
    return uploadFiles(chooseImage(opts), opts);
  } else if (opts.type === 'video') {
    return uploadFiles(chooseVideo(opts), opts);
  }
  return uploadFiles(chooseAll(opts), opts);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 407)["default"]))

/***/ }),

/***/ 413:
/*!********************************************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/uni_modules/uni-file-picker/components/uni-file-picker/utils.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_files_and_is_max = exports.get_file_info = exports.get_file_ext = exports.get_file_data = exports.get_extname = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 370));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 372));
/**
 * 获取文件名和后缀
 * @param {String} name
 */
var get_file_ext = function get_file_ext(name) {
  var last_len = name.lastIndexOf('.');
  var len = name.length;
  return {
    name: name.substring(0, last_len),
    ext: name.substring(last_len + 1, len)
  };
};

/**
 * 获取扩展名
 * @param {Array} fileExtname
 */
exports.get_file_ext = get_file_ext;
var get_extname = function get_extname(fileExtname) {
  if (!Array.isArray(fileExtname)) {
    var extname = fileExtname.replace(/(\[|\])/g, '');
    return extname.split(',');
  } else {
    return fileExtname;
  }
  return [];
};

/**
 * 获取文件和检测是否可选
 */
exports.get_extname = get_extname;
var get_files_and_is_max = function get_files_and_is_max(res, _extname) {
  var filePaths = [];
  var files = [];
  if (!_extname || _extname.length === 0) {
    return {
      filePaths: filePaths,
      files: files
    };
  }
  res.tempFiles.forEach(function (v) {
    var fileFullName = get_file_ext(v.name);
    var extname = fileFullName.ext.toLowerCase();
    if (_extname.indexOf(extname) !== -1) {
      files.push(v);
      filePaths.push(v.path);
    }
  });
  if (files.length !== res.tempFiles.length) {
    uni.showToast({
      title: "\u5F53\u524D\u9009\u62E9\u4E86".concat(res.tempFiles.length, "\u4E2A\u6587\u4EF6 \uFF0C").concat(res.tempFiles.length - files.length, " \u4E2A\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E"),
      icon: 'none',
      duration: 5000
    });
  }
  return {
    filePaths: filePaths,
    files: files
  };
};

/**
 * 获取图片信息
 * @param {Object} filepath
 */
exports.get_files_and_is_max = get_files_and_is_max;
var get_file_info = function get_file_info(filepath) {
  return new Promise(function (resolve, reject) {
    uni.getImageInfo({
      src: filepath,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};
/**
 * 获取封装数据
 */
exports.get_file_info = get_file_info;
var get_file_data = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(files) {
    var type,
      fileFullName,
      extname,
      filedata,
      imageinfo,
      _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            type = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'image';
            // 最终需要上传数据库的数据
            fileFullName = get_file_ext(files.name);
            extname = fileFullName.ext.toLowerCase();
            filedata = {
              name: files.name,
              uuid: files.uuid,
              extname: extname || '',
              cloudPath: files.cloudPath,
              fileType: files.fileType,
              url: files.path || files.path,
              size: files.size,
              //单位是字节
              image: {},
              path: files.path,
              video: {}
            };
            if (!(type === 'image')) {
              _context.next = 14;
              break;
            }
            _context.next = 7;
            return get_file_info(files.path);
          case 7:
            imageinfo = _context.sent;
            delete filedata.video;
            filedata.image.width = imageinfo.width;
            filedata.image.height = imageinfo.height;
            filedata.image.location = imageinfo.path;
            _context.next = 15;
            break;
          case 14:
            delete filedata.image;
          case 15:
            return _context.abrupt("return", filedata);
          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function get_file_data(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.get_file_data = get_file_data;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 449:
/*!****************************************************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimation = createAnimation;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {
    (0, _classCallCheck2.default)(this, MPAnimation);
    this.options = options;
    // 在iOS10+QQ小程序平台下，传给原生的对象一定是个普通对象而不是Proxy对象，否则会报parameter should be Object instead of ProxyObject的错误
    this.animation = uni.createAnimation(_objectSpread({}, options));
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  (0, _createClass2.default)(MPAnimation, [{
    key: "_nvuePushAnimates",
    value: function _nvuePushAnimates(type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    }
  }, {
    key: "_animateRun",
    value: function _animateRun() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles
        }, config), function (res) {
          resolve();
        });
      });
    }
  }, {
    key: "_nvueNextAnimate",
    value: function _nvueNextAnimate(animates) {
      var _this2 = this;
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {
        var styles = obj.styles,
          config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.animation.step(config);
      return this;
    }
  }, {
    key: "run",
    value: function run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);
    }
  }]);
  return MPAnimation;
}();
var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];
var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {
    var _this$animation;
    (_this$animation = this.animation)[type].apply(_this$animation, arguments);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 462:
/*!********************************************************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "id": "2852637",
  "name": "uniui图标库",
  "font_family": "uniicons",
  "css_prefix_text": "uniui-",
  "description": "",
  "glyphs": [{
    "icon_id": "25027049",
    "name": "yanse",
    "font_class": "color",
    "unicode": "e6cf",
    "unicode_decimal": 59087
  }, {
    "icon_id": "25027048",
    "name": "wallet",
    "font_class": "wallet",
    "unicode": "e6b1",
    "unicode_decimal": 59057
  }, {
    "icon_id": "25015720",
    "name": "settings-filled",
    "font_class": "settings-filled",
    "unicode": "e6ce",
    "unicode_decimal": 59086
  }, {
    "icon_id": "25015434",
    "name": "shimingrenzheng-filled",
    "font_class": "auth-filled",
    "unicode": "e6cc",
    "unicode_decimal": 59084
  }, {
    "icon_id": "24934246",
    "name": "shop-filled",
    "font_class": "shop-filled",
    "unicode": "e6cd",
    "unicode_decimal": 59085
  }, {
    "icon_id": "24934159",
    "name": "staff-filled-01",
    "font_class": "staff-filled",
    "unicode": "e6cb",
    "unicode_decimal": 59083
  }, {
    "icon_id": "24932461",
    "name": "VIP-filled",
    "font_class": "vip-filled",
    "unicode": "e6c6",
    "unicode_decimal": 59078
  }, {
    "icon_id": "24932462",
    "name": "plus_circle_fill",
    "font_class": "plus-filled",
    "unicode": "e6c7",
    "unicode_decimal": 59079
  }, {
    "icon_id": "24932463",
    "name": "folder_add-filled",
    "font_class": "folder-add-filled",
    "unicode": "e6c8",
    "unicode_decimal": 59080
  }, {
    "icon_id": "24932464",
    "name": "yanse-filled",
    "font_class": "color-filled",
    "unicode": "e6c9",
    "unicode_decimal": 59081
  }, {
    "icon_id": "24932465",
    "name": "tune-filled",
    "font_class": "tune-filled",
    "unicode": "e6ca",
    "unicode_decimal": 59082
  }, {
    "icon_id": "24932455",
    "name": "a-rilidaka-filled",
    "font_class": "calendar-filled",
    "unicode": "e6c0",
    "unicode_decimal": 59072
  }, {
    "icon_id": "24932456",
    "name": "notification-filled",
    "font_class": "notification-filled",
    "unicode": "e6c1",
    "unicode_decimal": 59073
  }, {
    "icon_id": "24932457",
    "name": "wallet-filled",
    "font_class": "wallet-filled",
    "unicode": "e6c2",
    "unicode_decimal": 59074
  }, {
    "icon_id": "24932458",
    "name": "paihangbang-filled",
    "font_class": "medal-filled",
    "unicode": "e6c3",
    "unicode_decimal": 59075
  }, {
    "icon_id": "24932459",
    "name": "gift-filled",
    "font_class": "gift-filled",
    "unicode": "e6c4",
    "unicode_decimal": 59076
  }, {
    "icon_id": "24932460",
    "name": "fire-filled",
    "font_class": "fire-filled",
    "unicode": "e6c5",
    "unicode_decimal": 59077
  }, {
    "icon_id": "24928001",
    "name": "refreshempty",
    "font_class": "refreshempty",
    "unicode": "e6bf",
    "unicode_decimal": 59071
  }, {
    "icon_id": "24926853",
    "name": "location-ellipse",
    "font_class": "location-filled",
    "unicode": "e6af",
    "unicode_decimal": 59055
  }, {
    "icon_id": "24926735",
    "name": "person-filled",
    "font_class": "person-filled",
    "unicode": "e69d",
    "unicode_decimal": 59037
  }, {
    "icon_id": "24926703",
    "name": "personadd-filled",
    "font_class": "personadd-filled",
    "unicode": "e698",
    "unicode_decimal": 59032
  }, {
    "icon_id": "24923351",
    "name": "back",
    "font_class": "back",
    "unicode": "e6b9",
    "unicode_decimal": 59065
  }, {
    "icon_id": "24923352",
    "name": "forward",
    "font_class": "forward",
    "unicode": "e6ba",
    "unicode_decimal": 59066
  }, {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrow-right",
    "unicode": "e6bb",
    "unicode_decimal": 59067
  }, {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrowthinright",
    "unicode": "e6bb",
    "unicode_decimal": 59067
  }, {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrow-left",
    "unicode": "e6bc",
    "unicode_decimal": 59068
  }, {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrowthinleft",
    "unicode": "e6bc",
    "unicode_decimal": 59068
  }, {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrow-up",
    "unicode": "e6bd",
    "unicode_decimal": 59069
  }, {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrowthinup",
    "unicode": "e6bd",
    "unicode_decimal": 59069
  }, {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrow-down",
    "unicode": "e6be",
    "unicode_decimal": 59070
  }, {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrowthindown",
    "unicode": "e6be",
    "unicode_decimal": 59070
  }, {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "bottom",
    "unicode": "e6b8",
    "unicode_decimal": 59064
  }, {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "arrowdown",
    "unicode": "e6b8",
    "unicode_decimal": 59064
  }, {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "right",
    "unicode": "e6b5",
    "unicode_decimal": 59061
  }, {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "arrowright",
    "unicode": "e6b5",
    "unicode_decimal": 59061
  }, {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "top",
    "unicode": "e6b6",
    "unicode_decimal": 59062
  }, {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "arrowup",
    "unicode": "e6b6",
    "unicode_decimal": 59062
  }, {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "left",
    "unicode": "e6b7",
    "unicode_decimal": 59063
  }, {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "arrowleft",
    "unicode": "e6b7",
    "unicode_decimal": 59063
  }, {
    "icon_id": "24923334",
    "name": "eye",
    "font_class": "eye",
    "unicode": "e651",
    "unicode_decimal": 58961
  }, {
    "icon_id": "24923335",
    "name": "eye-filled",
    "font_class": "eye-filled",
    "unicode": "e66a",
    "unicode_decimal": 58986
  }, {
    "icon_id": "24923336",
    "name": "eye-slash",
    "font_class": "eye-slash",
    "unicode": "e6b3",
    "unicode_decimal": 59059
  }, {
    "icon_id": "24923337",
    "name": "eye-slash-filled",
    "font_class": "eye-slash-filled",
    "unicode": "e6b4",
    "unicode_decimal": 59060
  }, {
    "icon_id": "24923305",
    "name": "info-filled",
    "font_class": "info-filled",
    "unicode": "e649",
    "unicode_decimal": 58953
  }, {
    "icon_id": "24923299",
    "name": "reload-01",
    "font_class": "reload",
    "unicode": "e6b2",
    "unicode_decimal": 59058
  }, {
    "icon_id": "24923195",
    "name": "mic_slash_fill",
    "font_class": "micoff-filled",
    "unicode": "e6b0",
    "unicode_decimal": 59056
  }, {
    "icon_id": "24923165",
    "name": "map-pin-ellipse",
    "font_class": "map-pin-ellipse",
    "unicode": "e6ac",
    "unicode_decimal": 59052
  }, {
    "icon_id": "24923166",
    "name": "map-pin",
    "font_class": "map-pin",
    "unicode": "e6ad",
    "unicode_decimal": 59053
  }, {
    "icon_id": "24923167",
    "name": "location",
    "font_class": "location",
    "unicode": "e6ae",
    "unicode_decimal": 59054
  }, {
    "icon_id": "24923064",
    "name": "starhalf",
    "font_class": "starhalf",
    "unicode": "e683",
    "unicode_decimal": 59011
  }, {
    "icon_id": "24923065",
    "name": "star",
    "font_class": "star",
    "unicode": "e688",
    "unicode_decimal": 59016
  }, {
    "icon_id": "24923066",
    "name": "star-filled",
    "font_class": "star-filled",
    "unicode": "e68f",
    "unicode_decimal": 59023
  }, {
    "icon_id": "24899646",
    "name": "a-rilidaka",
    "font_class": "calendar",
    "unicode": "e6a0",
    "unicode_decimal": 59040
  }, {
    "icon_id": "24899647",
    "name": "fire",
    "font_class": "fire",
    "unicode": "e6a1",
    "unicode_decimal": 59041
  }, {
    "icon_id": "24899648",
    "name": "paihangbang",
    "font_class": "medal",
    "unicode": "e6a2",
    "unicode_decimal": 59042
  }, {
    "icon_id": "24899649",
    "name": "font",
    "font_class": "font",
    "unicode": "e6a3",
    "unicode_decimal": 59043
  }, {
    "icon_id": "24899650",
    "name": "gift",
    "font_class": "gift",
    "unicode": "e6a4",
    "unicode_decimal": 59044
  }, {
    "icon_id": "24899651",
    "name": "link",
    "font_class": "link",
    "unicode": "e6a5",
    "unicode_decimal": 59045
  }, {
    "icon_id": "24899652",
    "name": "notification",
    "font_class": "notification",
    "unicode": "e6a6",
    "unicode_decimal": 59046
  }, {
    "icon_id": "24899653",
    "name": "staff",
    "font_class": "staff",
    "unicode": "e6a7",
    "unicode_decimal": 59047
  }, {
    "icon_id": "24899654",
    "name": "VIP",
    "font_class": "vip",
    "unicode": "e6a8",
    "unicode_decimal": 59048
  }, {
    "icon_id": "24899655",
    "name": "folder_add",
    "font_class": "folder-add",
    "unicode": "e6a9",
    "unicode_decimal": 59049
  }, {
    "icon_id": "24899656",
    "name": "tune",
    "font_class": "tune",
    "unicode": "e6aa",
    "unicode_decimal": 59050
  }, {
    "icon_id": "24899657",
    "name": "shimingrenzheng",
    "font_class": "auth",
    "unicode": "e6ab",
    "unicode_decimal": 59051
  }, {
    "icon_id": "24899565",
    "name": "person",
    "font_class": "person",
    "unicode": "e699",
    "unicode_decimal": 59033
  }, {
    "icon_id": "24899566",
    "name": "email-filled",
    "font_class": "email-filled",
    "unicode": "e69a",
    "unicode_decimal": 59034
  }, {
    "icon_id": "24899567",
    "name": "phone-filled",
    "font_class": "phone-filled",
    "unicode": "e69b",
    "unicode_decimal": 59035
  }, {
    "icon_id": "24899568",
    "name": "phone",
    "font_class": "phone",
    "unicode": "e69c",
    "unicode_decimal": 59036
  }, {
    "icon_id": "24899570",
    "name": "email",
    "font_class": "email",
    "unicode": "e69e",
    "unicode_decimal": 59038
  }, {
    "icon_id": "24899571",
    "name": "personadd",
    "font_class": "personadd",
    "unicode": "e69f",
    "unicode_decimal": 59039
  }, {
    "icon_id": "24899558",
    "name": "chatboxes-filled",
    "font_class": "chatboxes-filled",
    "unicode": "e692",
    "unicode_decimal": 59026
  }, {
    "icon_id": "24899559",
    "name": "contact",
    "font_class": "contact",
    "unicode": "e693",
    "unicode_decimal": 59027
  }, {
    "icon_id": "24899560",
    "name": "chatbubble-filled",
    "font_class": "chatbubble-filled",
    "unicode": "e694",
    "unicode_decimal": 59028
  }, {
    "icon_id": "24899561",
    "name": "contact-filled",
    "font_class": "contact-filled",
    "unicode": "e695",
    "unicode_decimal": 59029
  }, {
    "icon_id": "24899562",
    "name": "chatboxes",
    "font_class": "chatboxes",
    "unicode": "e696",
    "unicode_decimal": 59030
  }, {
    "icon_id": "24899563",
    "name": "chatbubble",
    "font_class": "chatbubble",
    "unicode": "e697",
    "unicode_decimal": 59031
  }, {
    "icon_id": "24881290",
    "name": "upload-filled",
    "font_class": "upload-filled",
    "unicode": "e68e",
    "unicode_decimal": 59022
  }, {
    "icon_id": "24881292",
    "name": "upload",
    "font_class": "upload",
    "unicode": "e690",
    "unicode_decimal": 59024
  }, {
    "icon_id": "24881293",
    "name": "weixin",
    "font_class": "weixin",
    "unicode": "e691",
    "unicode_decimal": 59025
  }, {
    "icon_id": "24881274",
    "name": "compose",
    "font_class": "compose",
    "unicode": "e67f",
    "unicode_decimal": 59007
  }, {
    "icon_id": "24881275",
    "name": "qq",
    "font_class": "qq",
    "unicode": "e680",
    "unicode_decimal": 59008
  }, {
    "icon_id": "24881276",
    "name": "download-filled",
    "font_class": "download-filled",
    "unicode": "e681",
    "unicode_decimal": 59009
  }, {
    "icon_id": "24881277",
    "name": "pengyouquan",
    "font_class": "pyq",
    "unicode": "e682",
    "unicode_decimal": 59010
  }, {
    "icon_id": "24881279",
    "name": "sound",
    "font_class": "sound",
    "unicode": "e684",
    "unicode_decimal": 59012
  }, {
    "icon_id": "24881280",
    "name": "trash-filled",
    "font_class": "trash-filled",
    "unicode": "e685",
    "unicode_decimal": 59013
  }, {
    "icon_id": "24881281",
    "name": "sound-filled",
    "font_class": "sound-filled",
    "unicode": "e686",
    "unicode_decimal": 59014
  }, {
    "icon_id": "24881282",
    "name": "trash",
    "font_class": "trash",
    "unicode": "e687",
    "unicode_decimal": 59015
  }, {
    "icon_id": "24881284",
    "name": "videocam-filled",
    "font_class": "videocam-filled",
    "unicode": "e689",
    "unicode_decimal": 59017
  }, {
    "icon_id": "24881285",
    "name": "spinner-cycle",
    "font_class": "spinner-cycle",
    "unicode": "e68a",
    "unicode_decimal": 59018
  }, {
    "icon_id": "24881286",
    "name": "weibo",
    "font_class": "weibo",
    "unicode": "e68b",
    "unicode_decimal": 59019
  }, {
    "icon_id": "24881288",
    "name": "videocam",
    "font_class": "videocam",
    "unicode": "e68c",
    "unicode_decimal": 59020
  }, {
    "icon_id": "24881289",
    "name": "download",
    "font_class": "download",
    "unicode": "e68d",
    "unicode_decimal": 59021
  }, {
    "icon_id": "24879601",
    "name": "help",
    "font_class": "help",
    "unicode": "e679",
    "unicode_decimal": 59001
  }, {
    "icon_id": "24879602",
    "name": "navigate-filled",
    "font_class": "navigate-filled",
    "unicode": "e67a",
    "unicode_decimal": 59002
  }, {
    "icon_id": "24879603",
    "name": "plusempty",
    "font_class": "plusempty",
    "unicode": "e67b",
    "unicode_decimal": 59003
  }, {
    "icon_id": "24879604",
    "name": "smallcircle",
    "font_class": "smallcircle",
    "unicode": "e67c",
    "unicode_decimal": 59004
  }, {
    "icon_id": "24879605",
    "name": "minus-filled",
    "font_class": "minus-filled",
    "unicode": "e67d",
    "unicode_decimal": 59005
  }, {
    "icon_id": "24879606",
    "name": "micoff",
    "font_class": "micoff",
    "unicode": "e67e",
    "unicode_decimal": 59006
  }, {
    "icon_id": "24879588",
    "name": "closeempty",
    "font_class": "closeempty",
    "unicode": "e66c",
    "unicode_decimal": 58988
  }, {
    "icon_id": "24879589",
    "name": "clear",
    "font_class": "clear",
    "unicode": "e66d",
    "unicode_decimal": 58989
  }, {
    "icon_id": "24879590",
    "name": "navigate",
    "font_class": "navigate",
    "unicode": "e66e",
    "unicode_decimal": 58990
  }, {
    "icon_id": "24879591",
    "name": "minus",
    "font_class": "minus",
    "unicode": "e66f",
    "unicode_decimal": 58991
  }, {
    "icon_id": "24879592",
    "name": "image",
    "font_class": "image",
    "unicode": "e670",
    "unicode_decimal": 58992
  }, {
    "icon_id": "24879593",
    "name": "mic",
    "font_class": "mic",
    "unicode": "e671",
    "unicode_decimal": 58993
  }, {
    "icon_id": "24879594",
    "name": "paperplane",
    "font_class": "paperplane",
    "unicode": "e672",
    "unicode_decimal": 58994
  }, {
    "icon_id": "24879595",
    "name": "close",
    "font_class": "close",
    "unicode": "e673",
    "unicode_decimal": 58995
  }, {
    "icon_id": "24879596",
    "name": "help-filled",
    "font_class": "help-filled",
    "unicode": "e674",
    "unicode_decimal": 58996
  }, {
    "icon_id": "24879597",
    "name": "plus-filled",
    "font_class": "paperplane-filled",
    "unicode": "e675",
    "unicode_decimal": 58997
  }, {
    "icon_id": "24879598",
    "name": "plus",
    "font_class": "plus",
    "unicode": "e676",
    "unicode_decimal": 58998
  }, {
    "icon_id": "24879599",
    "name": "mic-filled",
    "font_class": "mic-filled",
    "unicode": "e677",
    "unicode_decimal": 58999
  }, {
    "icon_id": "24879600",
    "name": "image-filled",
    "font_class": "image-filled",
    "unicode": "e678",
    "unicode_decimal": 59000
  }, {
    "icon_id": "24855900",
    "name": "locked-filled",
    "font_class": "locked-filled",
    "unicode": "e668",
    "unicode_decimal": 58984
  }, {
    "icon_id": "24855901",
    "name": "info",
    "font_class": "info",
    "unicode": "e669",
    "unicode_decimal": 58985
  }, {
    "icon_id": "24855903",
    "name": "locked",
    "font_class": "locked",
    "unicode": "e66b",
    "unicode_decimal": 58987
  }, {
    "icon_id": "24855884",
    "name": "camera-filled",
    "font_class": "camera-filled",
    "unicode": "e658",
    "unicode_decimal": 58968
  }, {
    "icon_id": "24855885",
    "name": "chat-filled",
    "font_class": "chat-filled",
    "unicode": "e659",
    "unicode_decimal": 58969
  }, {
    "icon_id": "24855886",
    "name": "camera",
    "font_class": "camera",
    "unicode": "e65a",
    "unicode_decimal": 58970
  }, {
    "icon_id": "24855887",
    "name": "circle",
    "font_class": "circle",
    "unicode": "e65b",
    "unicode_decimal": 58971
  }, {
    "icon_id": "24855888",
    "name": "checkmarkempty",
    "font_class": "checkmarkempty",
    "unicode": "e65c",
    "unicode_decimal": 58972
  }, {
    "icon_id": "24855889",
    "name": "chat",
    "font_class": "chat",
    "unicode": "e65d",
    "unicode_decimal": 58973
  }, {
    "icon_id": "24855890",
    "name": "circle-filled",
    "font_class": "circle-filled",
    "unicode": "e65e",
    "unicode_decimal": 58974
  }, {
    "icon_id": "24855891",
    "name": "flag",
    "font_class": "flag",
    "unicode": "e65f",
    "unicode_decimal": 58975
  }, {
    "icon_id": "24855892",
    "name": "flag-filled",
    "font_class": "flag-filled",
    "unicode": "e660",
    "unicode_decimal": 58976
  }, {
    "icon_id": "24855893",
    "name": "gear-filled",
    "font_class": "gear-filled",
    "unicode": "e661",
    "unicode_decimal": 58977
  }, {
    "icon_id": "24855894",
    "name": "home",
    "font_class": "home",
    "unicode": "e662",
    "unicode_decimal": 58978
  }, {
    "icon_id": "24855895",
    "name": "home-filled",
    "font_class": "home-filled",
    "unicode": "e663",
    "unicode_decimal": 58979
  }, {
    "icon_id": "24855896",
    "name": "gear",
    "font_class": "gear",
    "unicode": "e664",
    "unicode_decimal": 58980
  }, {
    "icon_id": "24855897",
    "name": "smallcircle-filled",
    "font_class": "smallcircle-filled",
    "unicode": "e665",
    "unicode_decimal": 58981
  }, {
    "icon_id": "24855898",
    "name": "map-filled",
    "font_class": "map-filled",
    "unicode": "e666",
    "unicode_decimal": 58982
  }, {
    "icon_id": "24855899",
    "name": "map",
    "font_class": "map",
    "unicode": "e667",
    "unicode_decimal": 58983
  }, {
    "icon_id": "24855825",
    "name": "refresh-filled",
    "font_class": "refresh-filled",
    "unicode": "e656",
    "unicode_decimal": 58966
  }, {
    "icon_id": "24855826",
    "name": "refresh",
    "font_class": "refresh",
    "unicode": "e657",
    "unicode_decimal": 58967
  }, {
    "icon_id": "24855808",
    "name": "cloud-upload",
    "font_class": "cloud-upload",
    "unicode": "e645",
    "unicode_decimal": 58949
  }, {
    "icon_id": "24855809",
    "name": "cloud-download-filled",
    "font_class": "cloud-download-filled",
    "unicode": "e646",
    "unicode_decimal": 58950
  }, {
    "icon_id": "24855810",
    "name": "cloud-download",
    "font_class": "cloud-download",
    "unicode": "e647",
    "unicode_decimal": 58951
  }, {
    "icon_id": "24855811",
    "name": "cloud-upload-filled",
    "font_class": "cloud-upload-filled",
    "unicode": "e648",
    "unicode_decimal": 58952
  }, {
    "icon_id": "24855813",
    "name": "redo",
    "font_class": "redo",
    "unicode": "e64a",
    "unicode_decimal": 58954
  }, {
    "icon_id": "24855814",
    "name": "images-filled",
    "font_class": "images-filled",
    "unicode": "e64b",
    "unicode_decimal": 58955
  }, {
    "icon_id": "24855815",
    "name": "undo-filled",
    "font_class": "undo-filled",
    "unicode": "e64c",
    "unicode_decimal": 58956
  }, {
    "icon_id": "24855816",
    "name": "more",
    "font_class": "more",
    "unicode": "e64d",
    "unicode_decimal": 58957
  }, {
    "icon_id": "24855817",
    "name": "more-filled",
    "font_class": "more-filled",
    "unicode": "e64e",
    "unicode_decimal": 58958
  }, {
    "icon_id": "24855818",
    "name": "undo",
    "font_class": "undo",
    "unicode": "e64f",
    "unicode_decimal": 58959
  }, {
    "icon_id": "24855819",
    "name": "images",
    "font_class": "images",
    "unicode": "e650",
    "unicode_decimal": 58960
  }, {
    "icon_id": "24855821",
    "name": "paperclip",
    "font_class": "paperclip",
    "unicode": "e652",
    "unicode_decimal": 58962
  }, {
    "icon_id": "24855822",
    "name": "settings",
    "font_class": "settings",
    "unicode": "e653",
    "unicode_decimal": 58963
  }, {
    "icon_id": "24855823",
    "name": "search",
    "font_class": "search",
    "unicode": "e654",
    "unicode_decimal": 58964
  }, {
    "icon_id": "24855824",
    "name": "redo-filled",
    "font_class": "redo-filled",
    "unicode": "e655",
    "unicode_decimal": 58965
  }, {
    "icon_id": "24841702",
    "name": "list",
    "font_class": "list",
    "unicode": "e644",
    "unicode_decimal": 58948
  }, {
    "icon_id": "24841489",
    "name": "mail-open-filled",
    "font_class": "mail-open-filled",
    "unicode": "e63a",
    "unicode_decimal": 58938
  }, {
    "icon_id": "24841491",
    "name": "hand-thumbsdown-filled",
    "font_class": "hand-down-filled",
    "unicode": "e63c",
    "unicode_decimal": 58940
  }, {
    "icon_id": "24841492",
    "name": "hand-thumbsdown",
    "font_class": "hand-down",
    "unicode": "e63d",
    "unicode_decimal": 58941
  }, {
    "icon_id": "24841493",
    "name": "hand-thumbsup-filled",
    "font_class": "hand-up-filled",
    "unicode": "e63e",
    "unicode_decimal": 58942
  }, {
    "icon_id": "24841494",
    "name": "hand-thumbsup",
    "font_class": "hand-up",
    "unicode": "e63f",
    "unicode_decimal": 58943
  }, {
    "icon_id": "24841496",
    "name": "heart-filled",
    "font_class": "heart-filled",
    "unicode": "e641",
    "unicode_decimal": 58945
  }, {
    "icon_id": "24841498",
    "name": "mail-open",
    "font_class": "mail-open",
    "unicode": "e643",
    "unicode_decimal": 58947
  }, {
    "icon_id": "24841488",
    "name": "heart",
    "font_class": "heart",
    "unicode": "e639",
    "unicode_decimal": 58937
  }, {
    "icon_id": "24839963",
    "name": "loop",
    "font_class": "loop",
    "unicode": "e633",
    "unicode_decimal": 58931
  }, {
    "icon_id": "24839866",
    "name": "pulldown",
    "font_class": "pulldown",
    "unicode": "e632",
    "unicode_decimal": 58930
  }, {
    "icon_id": "24813798",
    "name": "scan",
    "font_class": "scan",
    "unicode": "e62a",
    "unicode_decimal": 58922
  }, {
    "icon_id": "24813786",
    "name": "bars",
    "font_class": "bars",
    "unicode": "e627",
    "unicode_decimal": 58919
  }, {
    "icon_id": "24813788",
    "name": "cart-filled",
    "font_class": "cart-filled",
    "unicode": "e629",
    "unicode_decimal": 58921
  }, {
    "icon_id": "24813790",
    "name": "checkbox",
    "font_class": "checkbox",
    "unicode": "e62b",
    "unicode_decimal": 58923
  }, {
    "icon_id": "24813791",
    "name": "checkbox-filled",
    "font_class": "checkbox-filled",
    "unicode": "e62c",
    "unicode_decimal": 58924
  }, {
    "icon_id": "24813794",
    "name": "shop",
    "font_class": "shop",
    "unicode": "e62f",
    "unicode_decimal": 58927
  }, {
    "icon_id": "24813795",
    "name": "headphones",
    "font_class": "headphones",
    "unicode": "e630",
    "unicode_decimal": 58928
  }, {
    "icon_id": "24813796",
    "name": "cart",
    "font_class": "cart",
    "unicode": "e631",
    "unicode_decimal": 58929
  }]
};
exports.default = _default;

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 71:
/*!*********************************************************!*\
  !*** /Users/zhengheci/hlshop/mall4uni/utils/big.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* big.js v5.2.2 https://github.com/MikeMcl/big.js/LICENCE */
!function (e) {
  "use strict";

  var r,
    i = 20,
    s = 1,
    P = 1e6,
    o = -7,
    f = 21,
    c = "[big.js] ",
    u = c + "Invalid ",
    b = u + "decimal places",
    h = u + "rounding mode",
    x = c + "Division by zero",
    l = {},
    D = void 0,
    a = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  function R(e, r, t, n) {
    var i = e.c,
      s = e.e + r + 1;
    if (s < i.length) {
      if (1 === t) n = 5 <= i[s];else if (2 === t) n = 5 < i[s] || 5 == i[s] && (n || s < 0 || i[s + 1] !== D || 1 & i[s - 1]);else if (3 === t) n = n || !!i[0];else if (n = !1, 0 !== t) throw Error(h);
      if (s < 1) i.length = 1, i[0] = n ? (e.e = -r, 1) : e.e = 0;else {
        if (i.length = s--, n) for (; 9 < ++i[s];) {
          i[s] = 0, s-- || (++e.e, i.unshift(1));
        }
        for (s = i.length; !i[--s];) {
          i.pop();
        }
      }
    } else if (t < 0 || 3 < t || t !== ~~t) throw Error(h);
    return e;
  }
  function t(e, r, t, n) {
    var i,
      s,
      o = e.constructor,
      f = !e.c[0];
    if (t !== D) {
      if (t !== ~~t || t < (3 == r) || P < t) throw Error(3 == r ? u + "precision" : b);
      for (t = n - (e = new o(e)).e, e.c.length > ++n && R(e, t, o.RM), 2 == r && (n = e.e + t + 1); e.c.length < n;) {
        e.c.push(0);
      }
    }
    if (i = e.e, t = (s = e.c.join("")).length, 2 != r && (1 == r || 3 == r && n <= i || i <= o.NE || i >= o.PE)) s = s.charAt(0) + (1 < t ? "." + s.slice(1) : "") + (i < 0 ? "e" : "e+") + i;else if (i < 0) {
      for (; ++i;) {
        s = "0" + s;
      }
      s = "0." + s;
    } else if (0 < i) {
      if (++i > t) for (i -= t; i--;) {
        s += "0";
      } else i < t && (s = s.slice(0, i) + "." + s.slice(i));
    } else 1 < t && (s = s.charAt(0) + "." + s.slice(1));
    return e.s < 0 && (!f || 4 == r) ? "-" + s : s;
  }
  l.abs = function () {
    var e = new this.constructor(this);
    return e.s = 1, e;
  }, l.cmp = function (e) {
    var r,
      t = this,
      n = t.c,
      i = (e = new t.constructor(e)).c,
      s = t.s,
      o = e.s,
      f = t.e,
      c = e.e;
    if (!n[0] || !i[0]) return n[0] ? s : i[0] ? -o : 0;
    if (s != o) return s;
    if (r = s < 0, f != c) return c < f ^ r ? 1 : -1;
    for (o = (f = n.length) < (c = i.length) ? f : c, s = -1; ++s < o;) {
      if (n[s] != i[s]) return n[s] > i[s] ^ r ? 1 : -1;
    }
    return f == c ? 0 : c < f ^ r ? 1 : -1;
  }, l.div = function (e) {
    var r = this,
      t = r.constructor,
      n = r.c,
      i = (e = new t(e)).c,
      s = r.s == e.s ? 1 : -1,
      o = t.DP;
    if (o !== ~~o || o < 0 || P < o) throw Error(b);
    if (!i[0]) throw Error(x);
    if (!n[0]) return new t(0 * s);
    var f,
      c,
      u,
      h,
      l,
      a = i.slice(),
      g = f = i.length,
      p = n.length,
      w = n.slice(0, f),
      d = w.length,
      v = e,
      m = v.c = [],
      E = 0,
      M = o + (v.e = r.e - e.e) + 1;
    for (v.s = s, s = M < 0 ? 0 : M, a.unshift(0); d++ < f;) {
      w.push(0);
    }
    do {
      for (u = 0; u < 10; u++) {
        if (f != (d = w.length)) h = d < f ? 1 : -1;else for (l = -1, h = 0; ++l < f;) {
          if (i[l] != w[l]) {
            h = i[l] > w[l] ? 1 : -1;
            break;
          }
        }
        if (!(h < 0)) break;
        for (c = d == f ? i : a; d;) {
          if (w[--d] < c[d]) {
            for (l = d; l && !w[--l];) {
              w[l] = 9;
            }
            --w[l], w[d] += 10;
          }
          w[d] -= c[d];
        }
        for (; !w[0];) {
          w.shift();
        }
      }
      m[E++] = h ? u : ++u, w[0] && h ? w[d] = n[g] || 0 : w = [n[g]];
    } while ((g++ < p || w[0] !== D) && s--);
    return m[0] || 1 == E || (m.shift(), v.e--), M < E && R(v, o, t.RM, w[0] !== D), v;
  }, l.eq = function (e) {
    return !this.cmp(e);
  }, l.gt = function (e) {
    return 0 < this.cmp(e);
  }, l.gte = function (e) {
    return -1 < this.cmp(e);
  }, l.lt = function (e) {
    return this.cmp(e) < 0;
  }, l.lte = function (e) {
    return this.cmp(e) < 1;
  }, l.minus = l.sub = function (e) {
    var r,
      t,
      n,
      i,
      s = this,
      o = s.constructor,
      f = s.s,
      c = (e = new o(e)).s;
    if (f != c) return e.s = -c, s.plus(e);
    var u = s.c.slice(),
      h = s.e,
      l = e.c,
      a = e.e;
    if (!u[0] || !l[0]) return l[0] ? (e.s = -c, e) : new o(u[0] ? s : 0);
    if (f = h - a) {
      for ((n = (i = f < 0) ? (f = -f, u) : (a = h, l)).reverse(), c = f; c--;) {
        n.push(0);
      }
      n.reverse();
    } else for (t = ((i = u.length < l.length) ? u : l).length, f = c = 0; c < t; c++) {
      if (u[c] != l[c]) {
        i = u[c] < l[c];
        break;
      }
    }
    if (i && (n = u, u = l, l = n, e.s = -e.s), 0 < (c = (t = l.length) - (r = u.length))) for (; c--;) {
      u[r++] = 0;
    }
    for (c = r; f < t;) {
      if (u[--t] < l[t]) {
        for (r = t; r && !u[--r];) {
          u[r] = 9;
        }
        --u[r], u[t] += 10;
      }
      u[t] -= l[t];
    }
    for (; 0 === u[--c];) {
      u.pop();
    }
    for (; 0 === u[0];) {
      u.shift(), --a;
    }
    return u[0] || (e.s = 1, u = [a = 0]), e.c = u, e.e = a, e;
  }, l.mod = function (e) {
    var r,
      t = this,
      n = t.constructor,
      i = t.s,
      s = (e = new n(e)).s;
    if (!e.c[0]) throw Error(x);
    return t.s = e.s = 1, r = 1 == e.cmp(t), t.s = i, e.s = s, r ? new n(t) : (i = n.DP, s = n.RM, n.DP = n.RM = 0, t = t.div(e), n.DP = i, n.RM = s, this.minus(t.times(e)));
  }, l.plus = l.add = function (e) {
    var r,
      t = this,
      n = t.constructor,
      i = t.s,
      s = (e = new n(e)).s;
    if (i != s) return e.s = -s, t.minus(e);
    var o = t.e,
      f = t.c,
      c = e.e,
      u = e.c;
    if (!f[0] || !u[0]) return u[0] ? e : new n(f[0] ? t : 0 * i);
    if (f = f.slice(), i = o - c) {
      for ((r = 0 < i ? (c = o, u) : (i = -i, f)).reverse(); i--;) {
        r.push(0);
      }
      r.reverse();
    }
    for (f.length - u.length < 0 && (r = u, u = f, f = r), i = u.length, s = 0; i; f[i] %= 10) {
      s = (f[--i] = f[i] + u[i] + s) / 10 | 0;
    }
    for (s && (f.unshift(s), ++c), i = f.length; 0 === f[--i];) {
      f.pop();
    }
    return e.c = f, e.e = c, e;
  }, l.pow = function (e) {
    var r = this,
      t = new r.constructor(1),
      n = t,
      i = e < 0;
    if (e !== ~~e || e < -1e6 || 1e6 < e) throw Error(u + "exponent");
    for (i && (e = -e); 1 & e && (n = n.times(r)), e >>= 1;) {
      r = r.times(r);
    }
    return i ? t.div(n) : n;
  }, l.round = function (e, r) {
    var t = this.constructor;
    if (e === D) e = 0;else if (e !== ~~e || e < -P || P < e) throw Error(b);
    return R(new t(this), e, r === D ? t.RM : r);
  }, l.sqrt = function () {
    var e,
      r,
      t,
      n = this,
      i = n.constructor,
      s = n.s,
      o = n.e,
      f = new i(.5);
    if (!n.c[0]) return new i(n);
    if (s < 0) throw Error(c + "No square root");
    for (o = (e = 0 === (s = Math.sqrt(n + "")) || s === 1 / 0 ? ((r = n.c.join("")).length + o & 1 || (r += "0"), o = ((o + 1) / 2 | 0) - (o < 0 || 1 & o), new i(((s = Math.sqrt(r)) == 1 / 0 ? "1e" : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + o)) : new i(s)).e + (i.DP += 4); t = e, e = f.times(t.plus(n.div(t))), t.c.slice(0, o).join("") !== e.c.slice(0, o).join("");) {
      ;
    }
    return R(e, i.DP -= 4, i.RM);
  }, l.times = l.mul = function (e) {
    var r,
      t = this.constructor,
      n = this.c,
      i = (e = new t(e)).c,
      s = n.length,
      o = i.length,
      f = this.e,
      c = e.e;
    if (e.s = this.s == e.s ? 1 : -1, !n[0] || !i[0]) return new t(0 * e.s);
    for (e.e = f + c, s < o && (r = n, n = i, i = r, c = s, s = o, o = c), r = new Array(c = s + o); c--;) {
      r[c] = 0;
    }
    for (f = o; f--;) {
      for (o = 0, c = s + f; f < c;) {
        o = r[c] + i[f] * n[c - f - 1] + o, r[c--] = o % 10, o = o / 10 | 0;
      }
      r[c] = (r[c] + o) % 10;
    }
    for (o ? ++e.e : r.shift(), f = r.length; !r[--f];) {
      r.pop();
    }
    return e.c = r, e;
  }, l.toExponential = function (e) {
    return t(this, 1, e, e);
  }, l.toFixed = function (e) {
    return t(this, 2, e, this.e + e);
  }, l.toPrecision = function (e) {
    return t(this, 3, e, e - 1);
  }, l.toString = function () {
    return t(this);
  }, l.valueOf = l.toJSON = function () {
    return t(this, 4);
  }, (r = function t() {
    function n(e) {
      var r = this;
      if (!(r instanceof n)) return e === D ? t() : new n(e);
      e instanceof n ? (r.s = e.s, r.e = e.e, r.c = e.c.slice()) : function (e, r) {
        var t, n, i;
        if (0 === r && 1 / r < 0) r = "-0";else if (!a.test(r += "")) throw Error(u + "number");
        for (e.s = "-" == r.charAt(0) ? (r = r.slice(1), -1) : 1, -1 < (t = r.indexOf(".")) && (r = r.replace(".", "")), 0 < (n = r.search(/e/i)) ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), i = r.length, n = 0; n < i && "0" == r.charAt(n);) {
          ++n;
        }
        if (n == i) e.c = [e.e = 0];else {
          for (; 0 < i && "0" == r.charAt(--i);) {
            ;
          }
          for (e.e = t - n - 1, e.c = [], t = 0; n <= i;) {
            e.c[t++] = +r.charAt(n++);
          }
        }
      }(r, e), r.constructor = n;
    }
    return n.prototype = l, n.DP = i, n.RM = s, n.NE = o, n.PE = f, n.version = "5.2.2", n;
  }()).default = r.Big = r,  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return r;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this);

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map