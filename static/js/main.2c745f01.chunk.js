(window["webpackJsonp__demo"] = window["webpackJsonp__demo"] || []).push([[0],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tabs":"_15h6D","tab":"_5ii9Y","list":"_2c8z2"};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"errorBoundary":"_21AM7","centered":"rhZ-r","title":"_3qjsK","subTitle":"_3MDas"};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"bubble":"_1123L","lowBubble":"aInUt _1123L","mediumBubble":"_2GtCD _1123L","highBubble":"_3REIl _1123L"};

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"_2x3cr","title":"_1kFDE"};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"chart":"_1GVXF"};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"toggle":"_1m76T"};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"bubbleChartContainer":"_1rbpR"};

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _actions_namespaceObject = {};
__webpack_require__.r(_actions_namespaceObject);
__webpack_require__.d(_actions_namespaceObject, "fetch", function() { return _actions_fetch; });
__webpack_require__.d(_actions_namespaceObject, "selectBubble", function() { return _actions_selectBubble; });
__webpack_require__.d(_actions_namespaceObject, "selectType", function() { return _actions_selectType; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(43);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/format-message/index.js
var format_message = __webpack_require__(4);
var format_message_default = /*#__PURE__*/__webpack_require__.n(format_message);

// EXTERNAL MODULE: ./src/shared/error-boundary/index.css
var error_boundary = __webpack_require__(21);
var error_boundary_default = /*#__PURE__*/__webpack_require__.n(error_boundary);

// CONCATENATED MODULE: ./src/shared/error-boundary/index.tsx
var _jsxFileName = "/Users/maurobuselli/my-projects/bubble-bouncing-balls-chart/src/shared/error-boundary/index.tsx";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var error_boundary_ErrorBoundary =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ErrorBoundary, _PureComponent);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service...
      console.error(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return react_default.a.createElement("div", {
          className: classnames_default()(error_boundary_default.a.errorBoundary, this.props.className),
          "data-qa": "errorBoundary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react_default.a.createElement("div", {
          className: error_boundary_default.a.centered,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react_default.a.createElement("h1", {
          className: error_boundary_default.a.title,
          "data-qa": "errorBoundaryTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, format_message_default()({
          id: "we_ve_had_a_slight_malfunction_46473151",
          default: "We\u2019ve had a slight malfunction"
        })), react_default.a.createElement("div", {
          className: error_boundary_default.a.subTitle,
          "data-qa": "errorBoundarySubtitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, format_message_default()({
          id: "you_could_give_refreshing_your_page_a_shot_or_just_c06e6764",
          default: "You could give refreshing your page a shot. Or just sit tight, and we\u2019ll figure this out."
        }))));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14);

// CONCATENATED MODULE: ./src/pages/bubble-chart/_actionTypes.ts
var BUBBLES_FETCH_START = 'BUBBLES.FETCH.START';
var BUBBLES_FETCH_SUCCESS = 'BUBBLES.FETCH.SUCCESS';
var BUBBLES_FETCH_FAILURE = 'BUBBLES.FETCH.FAILURE';
var SELECT_TYPE = 'SELECT.TYPE';
var SELECT_BUBBLE = 'SELECT.BUBBLE';
// CONCATENATED MODULE: ./src/pages/bubble-chart/_reducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  bubbles: [],
  selectedBubble: null,
  selectedType: null,
  statusses: {
    fetch: 'UNSENT'
  }
};
/* harmony default export */ var _reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case BUBBLES_FETCH_START:
      return _objectSpread({}, state, {
        statusses: _objectSpread({}, state.statusses, {
          fetch: 'LOADING'
        })
      });

    case BUBBLES_FETCH_SUCCESS:
      return _objectSpread({}, state, {
        bubbles: action.payload.elements,
        statusses: _objectSpread({}, state.statusses, {
          fetch: 'SUCCESS'
        })
      });

    case BUBBLES_FETCH_FAILURE:
      return _objectSpread({}, state, {
        statusses: _objectSpread({}, state.statusses, {
          fetch: 'ERROR'
        })
      });

    case SELECT_BUBBLE:
      return _objectSpread({}, state, {
        selectedBubble: action.selectedBubble,
        selectedType: action.selectedType
      });

    case SELECT_TYPE:
      return _objectSpread({}, state, {
        selectedType: action.selectedType
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/redux/reducers/index.ts


/* harmony default export */ var reducers = (Object(redux["c" /* combineReducers */])({
  bubbles: _reducer
}));
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(15);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/redux/middlewares/fetch.types.ts
var FETCH_START = 'FETCH.START';
var FETCH_CANCEL = 'FETCH.CANCEL';
var FETCH_SUCCESS = 'FETCH.SUCCESS';
var FETCH_FAILURE = 'FETCH.FAILURE';
// CONCATENATED MODULE: ./src/redux/middlewares/fetch.ts



var fetch_fromStartTo = function fromStartTo(targetSuffix) {
  return function (actionType) {
    var prefix = actionType.slice(0, -FETCH_START.length);
    return prefix + targetSuffix;
  };
};

var asSuccessAction = fetch_fromStartTo(FETCH_SUCCESS);
var asFailureAction = fetch_fromStartTo(FETCH_FAILURE);
var fetch_fetchMiddleware = function fetchMiddleware(facade) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (action.type.endsWith(FETCH_CANCEL)) {
          facade.cancelRequest(action);
          return next(action);
        }

        if (action.type.endsWith(FETCH_START)) {
          var promise = facade.createRequest(action);
          next(action);
          return promise.then(function (_ref) {
            var payload = _ref.data;
            store.dispatch({
              type: asSuccessAction(action.type),
              payload: payload,
              initiator: action
            });
            return payload;
          }).catch(function (error) {
            if (!axios_default.a.isCancel(error)) {
              store.dispatch({
                type: asFailureAction(action.type),
                payload: error.response ? error.response.data : null,
                error: error,
                initiator: action,
                request: error.request
              });
            } // Propagate error to consumers so that they don't assume code was successful.


            throw error;
          });
        }

        return next(action);
      };
    };
  };
};
// CONCATENATED MODULE: ./src/pages/bubble-chart/_actions.ts

var _actions_fetch = function fetch() {
  return {
    type: BUBBLES_FETCH_START,
    method: 'GET',
    url: '/api/bubbles'
  };
};
var _actions_selectBubble = function selectBubble(selectedType, selectedBubble) {
  return {
    type: SELECT_BUBBLE,
    selectedBubble: selectedBubble,
    selectedType: selectedType
  };
};
var _actions_selectType = function selectType(selectedType) {
  return {
    type: SELECT_TYPE,
    selectedType: selectedType
  };
};
// CONCATENATED MODULE: ./src/utils/fetch/fetch-cache.ts
var requests = new Map();
function generateRequestId(key) {
  if (key.id) {
    return key.id;
  }

  var baseId = "".concat(key.method, " ").concat(key.url);
  return key.method === 'POST' ? "".concat(baseId, " ").concat(Math.random().toString(36).slice(2)) : baseId;
}
function getRequest(key) {
  var id = generateRequestId(key);
  return requests.get(id);
}
function addRequest(key, value) {
  var id = generateRequestId(key);
  requests.set(id, value);
}
function deleteRequest(key) {
  var id = generateRequestId(key);
  requests.delete(id);
}
function clearCache() {
  requests.clear();
}
// CONCATENATED MODULE: ./src/utils/json-tools/index.ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function json_tools_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { json_tools_typeof = function _typeof(obj) { return typeof obj; }; } else { json_tools_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return json_tools_typeof(obj); }

var camel = function camel(key) {
  return key.replace(/_[a-z]/g, function (_) {
    return _[1].toUpperCase();
  });
};

var snake = function snake(key) {
  return key.replace(/[A-Z]/g, function (alpha) {
    return "_".concat(alpha.toLowerCase());
  });
};

var ISO_DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
var ISO_DATE = /^\d{4,}-\d{2}-\d{2}T\d{2}((:\d{2})?:\d{2}(\.\d+)?([-+]\d{2}:\d{2})?Z?)?$/;
var IS_CAPS = /^[A-Z_.]+$/;
var replacer = function replacer(key, value) {
  if (value === null) {
    return value;
  }

  if (json_tools_typeof(value) === 'object' && !Array.isArray(value)) {
    return Object.keys(value).reduce(function (object, key) {
      var newKey = IS_CAPS.test(key) ? key : snake(key); // eslint-disable-next-line immutable/no-mutation

      object[newKey] = value[key];
      return object;
    }, {});
  }

  return value;
};
var reviver = function reviver(key, value) {
  if (value === null) {
    return value;
  }

  if (typeof value === 'string' && ISO_DATE_ONLY.test(value)) {
    var _value$split$map = value.split(/-/).map(Number),
        _value$split$map2 = _slicedToArray(_value$split$map, 3),
        year = _value$split$map2[0],
        month = _value$split$map2[1],
        day = _value$split$map2[2];

    return new Date(year, month - 1, day);
  } else if (typeof value === 'string' && ISO_DATE.test(value)) {
    return new Date(value);
  } else if (json_tools_typeof(value) === 'object' && !Array.isArray(value)) {
    return Object.keys(value).reduce(function (object, key) {
      var newKey = IS_CAPS.test(key) ? key : camel(key); // eslint-disable-next-line immutable/no-mutation

      object[newKey] = value[key];
      return object;
    }, {});
  }

  return value;
};
// CONCATENATED MODULE: ./src/utils/fetch/util.tsx

function addContentTypeHeader(params) {
  if (params.body) {
    if ('contentType' in params) {
      if (params.contentType) {
        return {
          'Content-Type': params.contentType
        };
      }
    } else {
      return {
        'Content-Type': 'application/json'
      };
    }
  }

  return {};
}
var util_createResponseTransformer = function createResponseTransformer() {
  return function (data, headers) {
    var contentType = headers['content-type'] || 'application/json';

    if (contentType.startsWith('application/json')) {
      return data ? JSON.parse(data, reviver) : null;
    }

    return data;
  };
};
function handleRequestErrors(error) {
  var responseStatus = error.response ? error.response.status : null;

  switch (responseStatus) {
    case 400:
      throw new Error('Bad Request');

    case 401:
      throw new Error('User is Unauthorized');

    default:
      throw new Error('Network request failed');
  }
}
function requestTransformer() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return data && !(data instanceof FormData || data instanceof Blob) ? JSON.parse(JSON.stringify(data, replacer)) : data;
}
// CONCATENATED MODULE: ./src/utils/fetch/fetch-factory.ts
function fetch_factory_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function fetch_factory_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { fetch_factory_ownKeys(Object(source), true).forEach(function (key) { fetch_factory_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { fetch_factory_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function fetch_factory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




function defaultTransformers(transformers) {
  if (!transformers) {
    return [];
  } else if (transformers instanceof Array) {
    return transformers;
  } else {
    return [transformers];
  }
}

var axiosInstance;
function initialize() {
  var newInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : axios_default.a.create();
  // eslint-disable-next-line immutable/no-mutation
  newInstance.defaults.transformRequest = [requestTransformer].concat(_toConsumableArray(defaultTransformers(axios_default.a.defaults.transformRequest)));
  newInstance.interceptors.response.use(undefined, function (error) {
    return handleRequestErrors(error);
  });
  axiosInstance = newInstance;
}
function createRequest(_ref) {
  var method = _ref.method,
      url = _ref.url,
      body = _ref.body,
      contentType = _ref.contentType,
      requestConfig = _objectWithoutProperties(_ref, ["method", "url", "body", "contentType"]);

  var headers = fetch_factory_objectSpread({}, addContentTypeHeader({
    body: body,
    contentType: contentType
  }));

  var source = axios_default.a.CancelToken.source();
  var promise = axiosInstance.request(fetch_factory_objectSpread({
    method: method,
    url: url,
    data: body,
    cancelToken: source.token,
    headers: headers,
    transformResponse: util_createResponseTransformer()
  }, requestConfig));
  promise.catch(console.error);
  return {
    promise: promise,
    cancel: function cancel() {
      source.cancel();
    }
  };
}
initialize();
// CONCATENATED MODULE: ./src/utils/fetch/index.ts
function fetch_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = fetch_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function fetch_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // We are opening this up to allow any valid axios request config field.
// The primary motivation is to give testers the ability to set or
// override specific fields that might be necessary for the test env.

function fetch_createRequest(_ref) {
  var _ref$suppressCancelEr = _ref.suppressCancelErrors,
      suppressCancelErrors = _ref$suppressCancelEr === void 0 ? true : _ref$suppressCancelEr,
      requestParams = fetch_objectWithoutProperties(_ref, ["suppressCancelErrors"]);

  // Handle pending requests
  var request = getRequest(requestParams);

  if (request) {
    // If a GET, then just re-use the current request.
    if (requestParams.method === 'GET') {
      return request.promise;
    }

    request.cancel();
  }

  var newRequest = createRequest(requestParams);
  addRequest(requestParams, newRequest);
  return newRequest.promise.then(function (result) {
    deleteRequest(requestParams);
    return result;
  }, function (error) {
    deleteRequest(requestParams);

    if (!axios_default.a.isCancel(error) || !suppressCancelErrors) {
      throw error;
    }
  });
}

function cancelRequest(requestParams) {
  var request = getRequest(requestParams);

  if (request) {
    request.cancel();
    deleteRequest(requestParams);
  }
}

var fetchApi = {
  createRequest: fetch_createRequest,
  cancelRequest: cancelRequest
};
// CONCATENATED MODULE: ./src/store.ts






var store_bindActions = function bindActions(store) {
  return {
    bubbles: Object(redux["b" /* bindActionCreators */])(_actions_namespaceObject, store.dispatch)
  };
};

function create() {
  var store = Object(redux["d" /* createStore */])(reducers, undefined, Object(redux["a" /* applyMiddleware */])(fetch_fetchMiddleware(fetchApi)));
  var actions = store_bindActions(store);
  return {
    actions: actions,
    store: store
  };
}
// CONCATENATED MODULE: ./src/format.ts

var formatConfig = {
  missingTranslation: 'ignore',
  formats: {
    date: {
      dd: {
        day: '2-digit'
      },
      MMM: {
        month: 'short'
      },
      MMMM: {
        month: 'long'
      },
      'MMM d': {
        month: 'short',
        day: 'numeric'
      },
      'MMM d yyyy': {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      },
      'MMMM d': {
        month: 'long',
        day: 'numeric'
      },
      'MMMM yy': {
        month: 'long',
        year: '2-digit'
      },
      'MMM yyyy': {
        month: 'short',
        year: 'numeric'
      },
      'MMMM yyyy': {
        month: 'long',
        year: 'numeric'
      },
      'M/d/yyyy': {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      },
      'MM/dd/yyyy': {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      },
      'dd MMM yyyy': {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      },
      'd MMMM yyyy': {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      },
      yyyy: {
        year: 'numeric'
      },
      EEEE: {
        weekday: 'long'
      },
      'EEEE, MMM d': {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      },
      'E M/d': {
        weekday: 'short',
        month: 'numeric',
        day: 'numeric'
      },
      'EEEE MMMM d, yyyy': {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric'
      }
    },
    time: {
      H: {
        hour: 'numeric'
      },
      'H:mm': {
        hour: 'numeric',
        minute: '2-digit'
      }
    }
  }
};
var format_initFormatMessage = function initFormatMessage() {
  return format_message_default.a.setup(formatConfig);
};
// EXTERNAL MODULE: ./node_modules/d3-force/src/index.js + 26 modules
var src = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/d3-selection/src/select.js + 40 modules
var src_select = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/bezier-easing/src/index.js
var bezier_easing_src = __webpack_require__(18);
var src_default = /*#__PURE__*/__webpack_require__.n(bezier_easing_src);

// CONCATENATED MODULE: ./src/utils/timing-functions/index.ts
 // https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#ease

var ease = src_default()(0.25, 0.1, 0.25, 1);
var easeIn = src_default()(0.42, 0, 1, 1);
var easeInOut = src_default()(0.42, 0, 0.58, 1);
var easeOut = src_default()(0, 0, 0.58, 1); // Should exactly match --curve-spring from variables.css

var spring = src_default()(0.5, 3, 0.5, 0.3); // linear interpolation, for finding point along curve

var interpolate = function interpolate(t, from, to) {
  return from + (to - from) * t;
};
// CONCATENATED MODULE: ./src/pages/bubble-chart/bouncing-bubble-chart/nodes.ts
var MIN_RADIUS = 10;
function generateNodes(_ref) {
  var bubbles = _ref.bubbles,
      scale = _ref.scale,
      height = _ref.height,
      width = _ref.width,
      centerY = _ref.centerY;
  var nodes = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = bubbles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var bubble = _step.value;
      var id = bubble.id,
          _bubble$count = bubble.count,
          low = _bubble$count.low,
          medium = _bubble$count.medium,
          high = _bubble$count.high,
          name = bubble.title;
      var highR = Math.max(high * scale, MIN_RADIUS);
      var mediumR = Math.max(medium * scale, MIN_RADIUS);
      var lowR = Math.max(low * scale, MIN_RADIUS);
      high > 0 && nodes.push({
        bubbleId: "bubble".concat(id, "high"),
        initialRadius: highR,
        mastery: 'high',
        name: name,
        r: highR,
        skillId: id,
        x: Math.random() * width,
        y: 0
      });
      medium > 0 && nodes.push({
        bubbleId: "bubble".concat(id, "medium"),
        initialRadius: mediumR,
        mastery: 'medium',
        name: name,
        r: mediumR,
        skillId: id,
        x: Math.random() * width,
        y: centerY
      });
      low > 0 && nodes.push({
        bubbleId: "bubble".concat(id, "low"),
        initialRadius: lowR,
        mastery: 'low',
        name: name,
        r: lowR,
        skillId: id,
        x: Math.random() * width,
        y: height
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return nodes;
}
// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/on.js
var on = __webpack_require__(44);

// EXTERNAL MODULE: ./src/pages/bubble-chart/bouncing-bubble-chart/bubble-drawer.css
var bubble_drawer = __webpack_require__(24);
var bubble_drawer_default = /*#__PURE__*/__webpack_require__.n(bubble_drawer);

// CONCATENATED MODULE: ./src/pages/bubble-chart/bouncing-bubble-chart/bubble-drawer.tsx
function bubble_drawer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bubble_drawer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bubble_drawer_createClass(Constructor, protoProps, staticProps) { if (protoProps) bubble_drawer_defineProperties(Constructor.prototype, protoProps); if (staticProps) bubble_drawer_defineProperties(Constructor, staticProps); return Constructor; }

function bubble_drawer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var bubbleClassByType = {
  high: bubble_drawer_default.a.highBubble,
  medium: bubble_drawer_default.a.mediumBubble,
  low: bubble_drawer_default.a.lowBubble
};

var bubble_drawer_BubbleDrawer =
/*#__PURE__*/
function () {
  function BubbleDrawer(props) {
    var _this = this;

    bubble_drawer_classCallCheck(this, BubbleDrawer);

    bubble_drawer_defineProperty(this, "props", void 0);

    bubble_drawer_defineProperty(this, "bubbles", null);

    bubble_drawer_defineProperty(this, "handleTick", function () {
      _this.bubbles && _this.bubbles.attr('cx', function (d) {
        return d.x;
      }).attr('cy', function (d) {
        return d.y;
      }).attr('r', function (d) {
        return d.r;
      });
    });

    bubble_drawer_defineProperty(this, "handleClick", function (d) {
      var onBubbleClick = _this.props.onBubbleClick;
      onBubbleClick && onBubbleClick(d.mastery, d.skillId);
    });

    bubble_drawer_defineProperty(this, "handleMouseOver", function (_ref) {
      var skillId = _ref.skillId,
          type = _ref.type;
      var _this$props = _this.props,
          onBubbleHover = _this$props.onBubbleHover,
          svg = _this$props.svg;
      onBubbleHover && onBubbleHover(skillId, type);
      svg && svg.selectAll('circle').attr('opacity', function (d) {
        return skillId === d.skillId ? 1 : 0.5;
      });
    });

    bubble_drawer_defineProperty(this, "handleMouseLeave", function () {
      var _this$props2 = _this.props,
          onBubbleHover = _this$props2.onBubbleHover,
          svg = _this$props2.svg;
      onBubbleHover && onBubbleHover(null);
      svg && svg.selectAll('circle').attr('opacity', 1);
    });

    bubble_drawer_defineProperty(this, "handleFocus", function (_ref2) {
      var skillId = _ref2.skillId,
          type = _ref2.type;
      var onBubbleFocus = _this.props.onBubbleFocus;
      onBubbleFocus && onBubbleFocus(skillId, type);
    });

    bubble_drawer_defineProperty(this, "handleKeyPress", function (d) {
      if (!(on["b" /* event */] instanceof KeyboardEvent)) return;

      switch (on["b" /* event */].key) {
        case 'Enter':
        case ' ':
          _this.handleClick(d);

          on["b" /* event */].preventDefault();
          break;

        case 'Tab':
          if (!on["b" /* event */].shiftKey) {
            var onTabPressed = _this.props.onTabPressed;
            onTabPressed && onTabPressed(on["b" /* event */]);
          }

          break;
      }
    });

    bubble_drawer_defineProperty(this, "focus", function (skillId, type) {
      var svg = _this.props.svg;
      var node = svg && svg.select("#bubble".concat(skillId).concat(type)).node();
      var nextBubble = node && node.nextElementSibling;

      while (nextBubble && nextBubble.getAttribute('tabindex') !== '0') {
        nextBubble = nextBubble.nextElementSibling;
      }

      nextBubble && nextBubble instanceof SVGElement && nextBubble.focus && nextBubble.focus();
      return _this;
    });

    bubble_drawer_defineProperty(this, "setTabbableBubbles", function (type) {
      var svg = _this.props.svg;
      svg && svg.selectAll('circle').attr('tabindex', function (d) {
        return !type || type === d.mastery ? 0 : -1;
      });
      return _this;
    });

    bubble_drawer_defineProperty(this, "highlightType", function (type) {
      var svg = _this.props.svg;
      if (!svg) return _this;
      var count = {
        high: 0,
        medium: 0,
        low: 0
      };
      var bubbles = svg.selectAll('circle');
      bubbles.each(function (d) {
        count[d.mastery] += d.initialRadius; // eslint-disable-line immutable/no-mutation
      });
      var alpha = type ? (count.high + count.medium + count.low) / count[type] / 2 : 1;
      bubbles.each(function (d) {
        // eslint-disable-next-line immutable/no-mutation
        d.r = d.initialRadius * Math.min(d.mastery === type ? alpha : 1, 5);
      });
      return _this;
    });

    bubble_drawer_defineProperty(this, "remove", function () {
      var svg = _this.props.svg;
      svg && svg.selectAll('circle').remove();
      return _this;
    });

    this.props = props; // eslint-disable-line immutable/no-mutation
  }

  bubble_drawer_createClass(BubbleDrawer, [{
    key: "draw",
    value: function draw(simulation) {
      var svg = this.props.svg;
      if (!svg) return this;
      this.bubbles = svg // eslint-disable-line immutable/no-mutation
      .selectAll('circle').data(simulation.nodes()).enter().append('circle').attr('r', function (d) {
        return d.r;
      }).attr('class', function (d) {
        return bubbleClassByType[d.mastery];
      }).attr('role', 'button').attr('tabindex', 0).attr('id', function (d) {
        return d.bubbleId;
      }).attr('aria-label', function (d) {
        return format_message_default()({
          id: "select_bubblename_37cc9d85",
          default: "Select {bubbleName}"
        }, {
          bubbleName: d.name
        });
      }).on('mouseover', this.handleMouseOver).on('focus', this.handleFocus).on('click', this.handleClick).on('keydown', this.handleKeyPress);
      this.bubbles && this.bubbles.exit().remove();
      simulation.on('tick', this.handleTick);
      return this;
    }
  }]);

  return BubbleDrawer;
}();


// EXTERNAL MODULE: ./src/pages/bubble-chart/bouncing-bubble-chart/index.css
var bouncing_bubble_chart = __webpack_require__(45);
var bouncing_bubble_chart_default = /*#__PURE__*/__webpack_require__.n(bouncing_bubble_chart);

// CONCATENATED MODULE: ./src/pages/bubble-chart/bouncing-bubble-chart/index.tsx
var bouncing_bubble_chart_jsxFileName = "/Users/maurobuselli/my-projects/bubble-bouncing-balls-chart/src/pages/bubble-chart/bouncing-bubble-chart/index.tsx";

function bouncing_bubble_chart_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { bouncing_bubble_chart_typeof = function _typeof(obj) { return typeof obj; }; } else { bouncing_bubble_chart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return bouncing_bubble_chart_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function bouncing_bubble_chart_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = bouncing_bubble_chart_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function bouncing_bubble_chart_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function bouncing_bubble_chart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bouncing_bubble_chart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bouncing_bubble_chart_createClass(Constructor, protoProps, staticProps) { if (protoProps) bouncing_bubble_chart_defineProperties(Constructor.prototype, protoProps); if (staticProps) bouncing_bubble_chart_defineProperties(Constructor, staticProps); return Constructor; }

function bouncing_bubble_chart_possibleConstructorReturn(self, call) { if (call && (bouncing_bubble_chart_typeof(call) === "object" || typeof call === "function")) { return call; } return bouncing_bubble_chart_assertThisInitialized(self); }

function bouncing_bubble_chart_getPrototypeOf(o) { bouncing_bubble_chart_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return bouncing_bubble_chart_getPrototypeOf(o); }

function bouncing_bubble_chart_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function bouncing_bubble_chart_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) bouncing_bubble_chart_setPrototypeOf(subClass, superClass); }

function bouncing_bubble_chart_setPrototypeOf(o, p) { bouncing_bubble_chart_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return bouncing_bubble_chart_setPrototypeOf(o, p); }

function bouncing_bubble_chart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var bouncing_bubble_chart_BouncingBubbleChart =
/*#__PURE__*/
function (_PureComponent) {
  bouncing_bubble_chart_inherits(BouncingBubbleChart, _PureComponent);

  function BouncingBubbleChart() {
    var _getPrototypeOf2;

    var _this;

    bouncing_bubble_chart_classCallCheck(this, BouncingBubbleChart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = bouncing_bubble_chart_possibleConstructorReturn(this, (_getPrototypeOf2 = bouncing_bubble_chart_getPrototypeOf(BouncingBubbleChart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "svg", void 0);

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "setSVGRef", function (svg) {
      _this.svg = svg ? Object(src_select["a" /* default */])(svg) : null; // eslint-disable-line immutable/no-mutation
    });

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "simulation", void 0);

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "bubbleDrawer", void 0);

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "center", {
      x: 500,
      y: 300
    });

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "renderSimulation", function () {
      var _this$props = _this.props,
          bubbles = _this$props.bubbles,
          scale = _this$props.scale,
          height = _this$props.height,
          width = _this$props.width,
          onBubbleClick = _this$props.onBubbleClick,
          onBubbleHover = _this$props.onBubbleHover,
          onBubbleFocus = _this$props.onBubbleFocus,
          type = _this$props.type; // eslint-disable-next-line immutable/no-mutation

      var nodes = generateNodes({
        bubbles: bubbles,
        scale: scale,
        height: height,
        width: width,
        centerY: _this.center.y
      });
      if (!nodes.length) return; // eslint-disable-next-line immutable/no-mutation

      _this.simulation = Object(src["d" /* forceSimulation */])(nodes); // eslint-disable-next-line immutable/no-mutation

      _this.bubbleDrawer = new bubble_drawer_BubbleDrawer({
        svg: _this.svg,
        onBubbleClick: onBubbleClick,
        onBubbleHover: onBubbleHover,
        onBubbleFocus: onBubbleFocus
      });

      _this.bubbleDrawer.draw(_this.simulation);

      if (type) {
        _this.joinBubblesByType();
      } else {
        _this.joinBubbles();
      }
    });

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "defaultCharge", function (d) {
      return -0.07 * Math.pow(d.r, 2.0);
    });

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "weakCharge", function (d) {
      return -0.078 * Math.pow(d.r, 2.0);
    });

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "getMasteryGroups", function () {
      var _this$props2 = _this.props,
          type = _this$props2.type,
          width = _this$props2.width;
      var target = width / 2;
      var outsidePosX = {
        high: width + _this.center.x,
        medium: type === 'high' ? -_this.center.x : width + _this.center.x,
        low: -_this.center.x
      };
      return {
        high: type === 'high' ? target : outsidePosX.high,
        medium: type === 'medium' ? target : outsidePosX.medium,
        low: type === 'low' ? target : outsidePosX.low
      };
    });

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "joinBubbles", function () {
      var _this$props3 = _this.props,
          scale = _this$props3.scale,
          width = _this$props3.width,
          height = _this$props3.height;
      var forceStrength = 0.04;
      var targetY = {
        high: _this.center.y - interpolate(scale / 20, 15, 50),
        medium: _this.center.y,
        low: _this.center.y + interpolate(scale / 20, 15, 50)
      };
      _this.bubbleDrawer && _this.bubbleDrawer.highlightType();
      _this.simulation && _this.simulation.alpha(0.85).alphaDecay(0.00358).alphaTarget(0).alphaMin(0.15).velocityDecay(0.11).force('collide', null).force('center', Object(src["a" /* forceCenter */])(width / 2, height / 2)).force('charge', Object(src["c" /* forceManyBody */])().strength(_this.defaultCharge)).force('x', Object(src["e" /* forceX */])().strength(forceStrength).x(_this.center.x)).force('y', Object(src["f" /* forceY */])().strength(forceStrength + 0.002).y(function (d) {
        return targetY[d.mastery];
      })).restart();
    });

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "joinBubblesByType", function () {
      if (!_this.simulation) return;
      var type = _this.props.type;
      var forceStrength = 0.04;

      var groups = _this.getMasteryGroups();

      var offset = 20;
      _this.bubbleDrawer && _this.bubbleDrawer.highlightType(type);
      _this.simulation && _this.simulation.alpha(1).alphaDecay(0.025).alphaTarget(0).alphaMin(0).velocityDecay(0.13).force('x', Object(src["e" /* forceX */])().strength(forceStrength).x(function (d) {
        return groups[d.mastery] + offset;
      })).force('y', Object(src["f" /* forceY */])().strength(forceStrength + 0.002).y(_this.center.y)).force('collide', null).force('center', null).force('charge', Object(src["c" /* forceManyBody */])().strength(_this.weakCharge)).restart();
    });

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "splitBubbles", function () {
      var width = _this.props.width;
      var groupsTarget = {
        high: width * 0.8,
        medium: _this.center.x,
        low: width * 0.2
      };
      var forceStrength = 0.04;
      var offset = 100;
      _this.bubbleDrawer && _this.bubbleDrawer.highlightType();
      _this.simulation && _this.simulation.alpha(1).alphaDecay(0.0228).alphaTarget(0).alphaMin(0).velocityDecay(0.1).force('x', Object(src["e" /* forceX */])().strength(forceStrength).x(function (d) {
        return groupsTarget[d.mastery];
      })).force('y', Object(src["f" /* forceY */])().strength(forceStrength).y(_this.center.y - offset)).force('collide', Object(src["b" /* forceCollide */])().radius(function (d) {
        return d.r + 3;
      })).force('charge', null).force('center', null).restart();
    });

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "handleMouseLeave", function () {
      _this.bubbleDrawer && _this.bubbleDrawer.handleMouseLeave();
    });

    bouncing_bubble_chart_defineProperty(bouncing_bubble_chart_assertThisInitialized(_this), "handleTooltipBlur", function () {
      var _this$props4 = _this.props,
          tooltipForBubbleId = _this$props4.tooltipForBubbleId,
          tooltipForType = _this$props4.tooltipForType;
      tooltipForBubbleId && tooltipForType && _this.bubbleDrawer && _this.bubbleDrawer.focus(tooltipForBubbleId.toString(), tooltipForType);
    });

    return _this;
  }

  bouncing_bubble_chart_createClass(BouncingBubbleChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props5 = this.props,
          width = _this$props5.width,
          height = _this$props5.height;
      this.svg && this.svg.append('g');
      this.center.x = width / 2; // eslint-disable-line immutable/no-mutation

      this.center.y = height / 2; // eslint-disable-line immutable/no-mutation

      this.renderSimulation();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var type = this.props.type;

      if (prevProps.bubbles !== this.props.bubbles) {
        this.renderSimulation();
      } else {
        if (prevProps.type !== type) {
          if (type) {
            this.joinBubblesByType();
          } else {
            this.joinBubbles();
          }

          this.bubbleDrawer && this.bubbleDrawer.setTabbableBubbles(type);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.simulation && this.simulation.stop();
      this.bubbleDrawer && this.bubbleDrawer.remove();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          height = _this$props6.height,
          type = _this$props6.type,
          onBubbleClick = _this$props6.onBubbleClick,
          onBubbleFocus = _this$props6.onBubbleFocus,
          onBubbleHover = _this$props6.onBubbleHover,
          scale = _this$props6.scale,
          selectedId = _this$props6.selectedId,
          bubbles = _this$props6.bubbles,
          tooltipForBubbleId = _this$props6.tooltipForBubbleId,
          tooltipForType = _this$props6.tooltipForType,
          width = _this$props6.width,
          props = bouncing_bubble_chart_objectWithoutProperties(_this$props6, ["height", "type", "onBubbleClick", "onBubbleFocus", "onBubbleHover", "scale", "selectedId", "bubbles", "tooltipForBubbleId", "tooltipForType", "width"]);

      return react_default.a.createElement("div", _extends({
        "aria-controls": "bubbleChartTabPanel",
        onClick: this.handleMouseLeave,
        onMouseLeave: this.handleMouseLeave,
        tabIndex: -1
      }, props, {
        __source: {
          fileName: bouncing_bubble_chart_jsxFileName,
          lineNumber: 284
        },
        __self: this
      }), react_default.a.createElement("svg", {
        className: bouncing_bubble_chart_default.a.chart,
        focusable: "false",
        height: height,
        ref: this.setSVGRef,
        viewBox: "0 0 ".concat(width, " ").concat(height),
        width: "100%",
        __source: {
          fileName: bouncing_bubble_chart_jsxFileName,
          lineNumber: 291
        },
        __self: this
      }));
    }
  }]);

  return BouncingBubbleChart;
}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js + 11 modules
var Button = __webpack_require__(103);

// EXTERNAL MODULE: ./src/pages/bubble-chart/tabs/index.css
var tabs = __webpack_require__(16);
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs);

// CONCATENATED MODULE: ./src/pages/bubble-chart/tabs/index.tsx
var tabs_jsxFileName = "/Users/maurobuselli/my-projects/bubble-bouncing-balls-chart/src/pages/bubble-chart/tabs/index.tsx";

function tabs_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tabs_typeof = function _typeof(obj) { return typeof obj; }; } else { tabs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tabs_typeof(obj); }

function tabs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tabs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tabs_createClass(Constructor, protoProps, staticProps) { if (protoProps) tabs_defineProperties(Constructor.prototype, protoProps); if (staticProps) tabs_defineProperties(Constructor, staticProps); return Constructor; }

function tabs_possibleConstructorReturn(self, call) { if (call && (tabs_typeof(call) === "object" || typeof call === "function")) { return call; } return tabs_assertThisInitialized(self); }

function tabs_getPrototypeOf(o) { tabs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tabs_getPrototypeOf(o); }

function tabs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tabs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tabs_setPrototypeOf(subClass, superClass); }

function tabs_setPrototypeOf(o, p) { tabs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tabs_setPrototypeOf(o, p); }

function tabs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var tabs_BubbleChartTabs =
/*#__PURE__*/
function (_PureComponent) {
  tabs_inherits(BubbleChartTabs, _PureComponent);

  function BubbleChartTabs() {
    var _getPrototypeOf2;

    var _this;

    tabs_classCallCheck(this, BubbleChartTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = tabs_possibleConstructorReturn(this, (_getPrototypeOf2 = tabs_getPrototypeOf(BubbleChartTabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    tabs_defineProperty(tabs_assertThisInitialized(_this), "handleSelectAll", function () {
      return _this.props.onChange(null);
    });

    tabs_defineProperty(tabs_assertThisInitialized(_this), "handleSelectLow", function () {
      return _this.props.onChange('low');
    });

    tabs_defineProperty(tabs_assertThisInitialized(_this), "handleSelectMedium", function () {
      return _this.props.onChange('medium');
    });

    tabs_defineProperty(tabs_assertThisInitialized(_this), "handleSelectHigh", function () {
      return _this.props.onChange('high');
    });

    return _this;
  }

  tabs_createClass(BubbleChartTabs, [{
    key: "render",
    value: function render() {
      var activeTab = this.props.activeTab;
      return react_default.a.createElement("div", {
        className: tabs_default.a.tabs,
        role: "tablist",
        "data-qa": "tabs",
        __source: {
          fileName: tabs_jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react_default.a.createElement("ul", {
        className: tabs_default.a.list,
        __source: {
          fileName: tabs_jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react_default.a.createElement("li", {
        __source: {
          fileName: tabs_jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react_default.a.createElement(Button["a" /* default */], {
        "aria-controls": "bubbleChartTabPanel",
        "aria-selected": activeTab === null,
        color: activeTab === null ? 'secondary' : 'primary',
        role: "tab",
        className: tabs_default.a.tab,
        onClick: this.handleSelectAll,
        "data-qa": "allTab",
        __source: {
          fileName: tabs_jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, format_message_default()({
        id: "all_4321c3a1",
        default: "All"
      }))), react_default.a.createElement("li", {
        __source: {
          fileName: tabs_jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react_default.a.createElement(Button["a" /* default */], {
        "aria-controls": "bubbleChartTabPanel",
        "aria-selected": activeTab === 'low',
        color: activeTab === 'low' ? 'secondary' : 'primary',
        role: "tab",
        className: tabs_default.a.tab,
        onClick: this.handleSelectLow,
        "data-qa": "lowTab",
        __source: {
          fileName: tabs_jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, format_message_default()({
        id: "low_eab1cadd",
        default: "Low"
      }))), react_default.a.createElement("li", {
        __source: {
          fileName: tabs_jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react_default.a.createElement(Button["a" /* default */], {
        "aria-controls": "bubbleChartTabPanel",
        "aria-selected": activeTab === 'medium',
        color: activeTab === 'medium' ? 'secondary' : 'primary',
        role: "tab",
        className: tabs_default.a.tab,
        onClick: this.handleSelectMedium,
        "data-qa": "mediumTab",
        __source: {
          fileName: tabs_jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, format_message_default()({
        id: "medium_5a8e9ead",
        default: "Medium"
      }))), react_default.a.createElement("li", {
        __source: {
          fileName: tabs_jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react_default.a.createElement(Button["a" /* default */], {
        "aria-controls": "bubbleChartTabPanel",
        "aria-selected": activeTab === 'high',
        color: activeTab === 'high' ? 'secondary' : 'primary',
        role: "tab",
        className: tabs_default.a.tab,
        onClick: this.handleSelectHigh,
        "data-qa": "highTab",
        __source: {
          fileName: tabs_jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, format_message_default()({
        id: "high_b5cbd048",
        default: "High"
      })))));
    }
  }]);

  return BubbleChartTabs;
}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/OpenWith.js
var OpenWith = __webpack_require__(48);
var OpenWith_default = /*#__PURE__*/__webpack_require__.n(OpenWith);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CenterFocusStrong.js
var CenterFocusStrong = __webpack_require__(47);
var CenterFocusStrong_default = /*#__PURE__*/__webpack_require__.n(CenterFocusStrong);

// EXTERNAL MODULE: ./src/pages/bubble-chart/toggle/index.css
var toggle = __webpack_require__(46);
var toggle_default = /*#__PURE__*/__webpack_require__.n(toggle);

// CONCATENATED MODULE: ./src/pages/bubble-chart/toggle/index.tsx
var toggle_jsxFileName = "/Users/maurobuselli/my-projects/bubble-bouncing-balls-chart/src/pages/bubble-chart/toggle/index.tsx";

function toggle_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { toggle_typeof = function _typeof(obj) { return typeof obj; }; } else { toggle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return toggle_typeof(obj); }

function toggle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function toggle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function toggle_createClass(Constructor, protoProps, staticProps) { if (protoProps) toggle_defineProperties(Constructor.prototype, protoProps); if (staticProps) toggle_defineProperties(Constructor, staticProps); return Constructor; }

function toggle_possibleConstructorReturn(self, call) { if (call && (toggle_typeof(call) === "object" || typeof call === "function")) { return call; } return toggle_assertThisInitialized(self); }

function toggle_getPrototypeOf(o) { toggle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return toggle_getPrototypeOf(o); }

function toggle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function toggle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) toggle_setPrototypeOf(subClass, superClass); }

function toggle_setPrototypeOf(o, p) { toggle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return toggle_setPrototypeOf(o, p); }

function toggle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var toggle_BubbleToggle =
/*#__PURE__*/
function (_Component) {
  toggle_inherits(BubbleToggle, _Component);

  function BubbleToggle() {
    var _getPrototypeOf2;

    var _this;

    toggle_classCallCheck(this, BubbleToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = toggle_possibleConstructorReturn(this, (_getPrototypeOf2 = toggle_getPrototypeOf(BubbleToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    toggle_defineProperty(toggle_assertThisInitialized(_this), "state", {
      expandedView: false
    });

    toggle_defineProperty(toggle_assertThisInitialized(_this), "handleExpandedView", function () {
      var _this$props = _this.props,
          bubbleChart = _this$props.bubbleChart,
          onExpand = _this$props.onExpand;

      _this.setState({
        expandedView: true
      });

      bubbleChart && bubbleChart.splitBubbles();
      onExpand && onExpand();
    });

    toggle_defineProperty(toggle_assertThisInitialized(_this), "handleCollapseView", function () {
      var _this$props2 = _this.props,
          bubbleChart = _this$props2.bubbleChart,
          onContract = _this$props2.onContract;

      _this.setState({
        expandedView: false
      });

      bubbleChart && bubbleChart.joinBubbles();
      onContract && onContract();
    });

    return _this;
  }

  toggle_createClass(BubbleToggle, [{
    key: "render",
    value: function render() {
      var expandedView = this.state.expandedView;
      return react_default.a.createElement("div", {
        className: toggle_default.a.toggle,
        role: "tablist",
        "data-qa": "bubbleToggleView",
        __source: {
          fileName: toggle_jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react_default.a.createElement(Button["a" /* default */], {
        "aria-controls": "bubbleChartTabPanel",
        "aria-selected": !expandedView,
        color: !expandedView ? 'secondary' : 'primary',
        onClick: this.handleCollapseView,
        role: "tab",
        "data-qa": "bubbleCollapseButton",
        __source: {
          fileName: toggle_jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react_default.a.createElement(CenterFocusStrong_default.a, {
        __source: {
          fileName: toggle_jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react_default.a.createElement(Button["a" /* default */], {
        "aria-controls": "bubbleChartTabPanel",
        "aria-selected": expandedView,
        color: !expandedView ? 'primary' : 'secondary',
        onClick: this.handleExpandedView,
        role: "tab",
        "data-qa": "bubbleExpandedButton",
        __source: {
          fileName: toggle_jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react_default.a.createElement(OpenWith_default.a, {
        __source: {
          fileName: toggle_jsxFileName,
          lineNumber: 59
        },
        __self: this
      })));
    }
  }]);

  return BubbleToggle;
}(react["Component"]);
// EXTERNAL MODULE: ./src/pages/bubble-chart/page.css
var page = __webpack_require__(49);
var page_default = /*#__PURE__*/__webpack_require__.n(page);

// CONCATENATED MODULE: ./src/pages/bubble-chart/page.tsx
var page_jsxFileName = "/Users/maurobuselli/my-projects/bubble-bouncing-balls-chart/src/pages/bubble-chart/page.tsx";

function page_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { page_typeof = function _typeof(obj) { return typeof obj; }; } else { page_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return page_typeof(obj); }

function page_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function page_createClass(Constructor, protoProps, staticProps) { if (protoProps) page_defineProperties(Constructor.prototype, protoProps); if (staticProps) page_defineProperties(Constructor, staticProps); return Constructor; }

function page_possibleConstructorReturn(self, call) { if (call && (page_typeof(call) === "object" || typeof call === "function")) { return call; } return page_assertThisInitialized(self); }

function page_getPrototypeOf(o) { page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return page_getPrototypeOf(o); }

function page_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function page_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) page_setPrototypeOf(subClass, superClass); }

function page_setPrototypeOf(o, p) { page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return page_setPrototypeOf(o, p); }

function page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CHART_HEIGHT = 800;
var page_Page =
/*#__PURE__*/
function (_PureComponent) {
  page_inherits(Page, _PureComponent);

  function Page() {
    var _getPrototypeOf2;

    var _this;

    page_classCallCheck(this, Page);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = page_possibleConstructorReturn(this, (_getPrototypeOf2 = page_getPrototypeOf(Page)).call.apply(_getPrototypeOf2, [this].concat(args)));

    page_defineProperty(page_assertThisInitialized(_this), "state", {
      bubbleChartRef: null,
      tooltipForBubbleId: null,
      tooltipForType: null
    });

    page_defineProperty(page_assertThisInitialized(_this), "setBubbleChartRef", function (ref) {
      _this.setState({
        bubbleChartRef: ref
      });
    });

    page_defineProperty(page_assertThisInitialized(_this), "handleSingleBubbleHover", function (id, type) {
      return _this.setState({
        tooltipForBubbleId: id || null,
        tooltipForType: type || null
      });
    });

    page_defineProperty(page_assertThisInitialized(_this), "handleBubbleClick", function (bubbleType, id) {
      var _this$props = _this.props,
          selectType = _this$props.selectType,
          selectBubble = _this$props.selectBubble,
          bubbles = _this$props.bubbles;
      var bubble = bubbles.find(function (bubble) {
        return bubble.id === id;
      });
      selectType(bubbleType);
      selectBubble(bubbleType, bubble || null);
    });

    page_defineProperty(page_assertThisInitialized(_this), "handleTypeChange", function (type) {
      var _this$props2 = _this.props,
          selectType = _this$props2.selectType,
          bubbles = _this$props2.bubbles;
      selectType(type);

      if (type && bubbles.length > 0) {
        var _bubbles$reduce = bubbles.reduce(function (selectedBubble, bubble) {
          return bubble.count[type] > selectedBubble.count[type] ? bubble : selectedBubble;
        }),
            id = _bubbles$reduce.id;

        _this.handleBubbleClick(type, id);
      }
    });

    return _this;
  }

  page_createClass(Page, [{
    key: "getScale",
    value: function getScale() {
      var bubbles = this.props.bubbles;
      var lowArea = 0;
      var mediumArea = 0;
      var highArea = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = bubbles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value$count = _step.value.count,
              low = _step$value$count.low,
              medium = _step$value$count.medium,
              high = _step$value$count.high;
          lowArea += Math.pow(Math.PI * low, 2);
          mediumArea += Math.pow(Math.PI * medium, 2);
          highArea += Math.pow(Math.PI * high, 2);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var maxRadius = Math.sqrt(Math.max(lowArea + mediumArea + highArea) / Math.PI);
      return CHART_HEIGHT / 2.5 / maxRadius;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          bubbles = _this$props3.bubbles,
          selectedBubble = _this$props3.selectedBubble,
          selectedType = _this$props3.selectedType;
      var _this$state = this.state,
          tooltipForBubbleId = _this$state.tooltipForBubbleId,
          tooltipForType = _this$state.tooltipForType,
          bubbleChartRef = _this$state.bubbleChartRef;
      var scale = this.getScale();
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(tabs_BubbleChartTabs, {
        activeTab: selectedType,
        onChange: this.handleTypeChange,
        __source: {
          fileName: page_jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), !selectedType && react_default.a.createElement(toggle_BubbleToggle, {
        bubbleChart: bubbleChartRef,
        __source: {
          fileName: page_jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react_default.a.createElement(bouncing_bubble_chart_BouncingBubbleChart, {
        bubbles: bubbles,
        className: page_default.a.bubbleChartContainer,
        height: CHART_HEIGHT,
        onBubbleClick: this.handleBubbleClick,
        onBubbleFocus: this.handleSingleBubbleHover,
        onBubbleHover: this.handleSingleBubbleHover,
        ref: this.setBubbleChartRef,
        scale: scale,
        selectedId: selectedBubble ? selectedBubble.id : undefined,
        tooltipForBubbleId: tooltipForBubbleId,
        tooltipForType: tooltipForType,
        type: selectedType,
        width: 1450,
        __source: {
          fileName: page_jsxFileName,
          lineNumber: 99
        },
        __self: this
      }));
    }
  }]);

  return Page;
}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(100);

// CONCATENATED MODULE: ./src/pages/bubble-chart/index.tsx
var bubble_chart_jsxFileName = "/Users/maurobuselli/my-projects/bubble-bouncing-balls-chart/src/pages/bubble-chart/index.tsx";

function bubble_chart_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { bubble_chart_typeof = function _typeof(obj) { return typeof obj; }; } else { bubble_chart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return bubble_chart_typeof(obj); }

function bubble_chart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bubble_chart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bubble_chart_createClass(Constructor, protoProps, staticProps) { if (protoProps) bubble_chart_defineProperties(Constructor.prototype, protoProps); if (staticProps) bubble_chart_defineProperties(Constructor, staticProps); return Constructor; }

function bubble_chart_possibleConstructorReturn(self, call) { if (call && (bubble_chart_typeof(call) === "object" || typeof call === "function")) { return call; } return bubble_chart_assertThisInitialized(self); }

function bubble_chart_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function bubble_chart_getPrototypeOf(o) { bubble_chart_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return bubble_chart_getPrototypeOf(o); }

function bubble_chart_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) bubble_chart_setPrototypeOf(subClass, superClass); }

function bubble_chart_setPrototypeOf(o, p) { bubble_chart_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return bubble_chart_setPrototypeOf(o, p); }







var mapStateToProps = function mapStateToProps(state) {
  return {
    bubbles: state.bubbles.bubbles,
    fetchStatus: state.bubbles.statusses.fetch,
    selectedBubble: state.bubbles.selectedBubble,
    selectedType: state.bubbles.selectedType
  };
};

var mapDispatchToProps = {
  fetch: _actions_fetch,
  selectBubble: _actions_selectBubble,
  selectType: _actions_selectType
};
var bubble_chart_BubbleChart =
/*#__PURE__*/
function (_PureComponent) {
  bubble_chart_inherits(BubbleChart, _PureComponent);

  function BubbleChart() {
    bubble_chart_classCallCheck(this, BubbleChart);

    return bubble_chart_possibleConstructorReturn(this, bubble_chart_getPrototypeOf(BubbleChart).apply(this, arguments));
  }

  bubble_chart_createClass(BubbleChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          fetch = _this$props.fetch,
          fetchStatus = _this$props.fetchStatus;

      if (fetchStatus !== 'LOADING' && fetchStatus !== 'SUCCESS') {
        fetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          bubbles = _this$props2.bubbles,
          selectType = _this$props2.selectType,
          fetchStatus = _this$props2.fetchStatus,
          selectedBubble = _this$props2.selectedBubble,
          selectedType = _this$props2.selectedType;
      var isLoading = fetchStatus === 'LOADING';
      return react_default.a.createElement("main", {
        __source: {
          fileName: bubble_chart_jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, isLoading ? react_default.a.createElement(CircularProgress["a" /* default */], {
        __source: {
          fileName: bubble_chart_jsxFileName,
          lineNumber: 54
        },
        __self: this
      }) : react_default.a.createElement(page_Page, {
        bubbles: bubbles,
        selectBubble: _actions_selectBubble,
        selectedBubble: selectedBubble,
        selectedType: selectedType,
        selectType: selectType,
        __source: {
          fileName: bubble_chart_jsxFileName,
          lineNumber: 56
        },
        __self: this
      }));
    }
  }]);

  return BubbleChart;
}(react["PureComponent"]);
var BubbleChartPage = Object(es["b" /* connect */])(mapStateToProps, mapDispatchToProps)(bubble_chart_BubbleChart);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(101);

// EXTERNAL MODULE: ./src/app.css
var app = __webpack_require__(28);
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// CONCATENATED MODULE: ./src/app.tsx
var app_jsxFileName = "/Users/maurobuselli/my-projects/bubble-bouncing-balls-chart/src/app.tsx";





function App() {
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(CssBaseline["a" /* default */], {
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react_default.a.createElement("section", {
    className: app_default.a.app,
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react_default.a.createElement("header", {
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react_default.a.createElement("h1", {
    className: app_default.a.title,
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, format_message_default()({
    id: "awesome_animated_bubble_chart_demo_c3895d1e",
    default: "Awesome Animated Bubble Chart - Demo"
  }))), react_default.a.createElement(BubbleChartPage, {
    __source: {
      fileName: app_jsxFileName,
      lineNumber: 17
    },
    __self: this
  })));
}
// CONCATENATED MODULE: ./src/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return src_initApp; });
var src_jsxFileName = "/Users/maurobuselli/my-projects/bubble-bouncing-balls-chart/src/index.tsx";







var src_initApp = function initApp() {
  var root = document.getElementById('root');
  if (!root) return;

  var _createStore = create(),
      store = _createStore.store;

  format_initFormatMessage();
  Object(react_dom["render"])(react_default.a.createElement(error_boundary_ErrorBoundary, {
    __source: {
      fileName: src_jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react_default.a.createElement(es["a" /* Provider */], {
    store: store,
    __source: {
      fileName: src_jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react_default.a.createElement(App, {
    __source: {
      fileName: src_jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), root);
};
src_initApp();

/***/ })

},[[83,1,2]]]);