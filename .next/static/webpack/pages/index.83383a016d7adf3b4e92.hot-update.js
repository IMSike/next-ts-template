webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_caroussel_tsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/caroussel.tsx */ \"./components/caroussel.tsx\");\n/* harmony import */ var _components_cardSlider_tsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/cardSlider.tsx */ \"./components/cardSlider.tsx\");\n/* harmony import */ var _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../env/infos.tsx */ \"./env/infos.tsx\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mdi/react */ \"./node_modules/@mdi/react/Icon.js\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mdi_react__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mdi/js */ \"./node_modules/@mdi/js/mdi.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/aurelien/repo/next-ts-template/pages/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"trackScrolling\", function () {\n      var wrappedElement = document.getElementById('footer');\n\n      if (_this.isBottom(wrappedElement)) {\n        console.log('footer bottom reached');\n        document.removeEventListener('scroll', _this.trackScrolling);\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderHead\", function () {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"title\", {\n          children: \"Template\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"link\", {\n          rel: \"icon\",\n          href: \"/favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 7\n      }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderMain\", function () {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"main\", {\n        className: _this.state.fullScreen ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.hidden : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.main,\n        children: [_this.renderContent(), _this.renderContact()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 7\n      }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderContent\", function () {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contentContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.containerBufferLogo,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"img\", {\n              src: \"logo.png\",\n              alt: \"logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"h1\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,\n            children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"].shopName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.accroche,\n            children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"].accroche\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_components_cardSlider_tsx__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderContact\", function () {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactContainer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactContentContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"h1\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactTitle,\n            children: \"Contact\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactLine,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_mdi_react__WEBPACK_IMPORTED_MODULE_14___default.a, {\n              path: _mdi_js__WEBPACK_IMPORTED_MODULE_15__[\"mdiPhone\"],\n              title: \"mail\",\n              size: 1,\n              color: false ? undefined : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n              children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"].tel\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactLine,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_mdi_react__WEBPACK_IMPORTED_MODULE_14___default.a, {\n              path: _mdi_js__WEBPACK_IMPORTED_MODULE_15__[\"mdiMapMarker\"],\n              title: \"mail\",\n              size: 1,\n              color: false ? undefined : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n              children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"].adr\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactLine,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_mdi_react__WEBPACK_IMPORTED_MODULE_14___default.a, {\n              path: _mdi_js__WEBPACK_IMPORTED_MODULE_15__[\"mdiEmail\"],\n              title: \"mail\",\n              size: 1,\n              color: false ? undefined : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n              children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"].mail\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 7\n      }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderFooter\", function () {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"footer\", {\n        id: \"footer\",\n        className: _this.state.fullScreen ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.hidden : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.footer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"img\", {\n          src: \"Silhouet_France_with_Flag.png\",\n          alt: \"France aux couleur du drapeau \",\n          height: \"100%\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.footerTextContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.footerTitle,\n            children: \"Cet artisan fran\\xE7ais \\xE0 besoin de soutient !\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.footerText,\n            children: \"Nous pouvons l'aider en cette p\\xE9riode de COVID en continuant d'acheter chez lui.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 7\n      }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    });\n\n    _this.state = {\n      fullScreen: false,\n      displayLogo: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Home, [{\n    key: \"isBottom\",\n    value: function isBottom(el) {\n      return el.getBoundingClientRect().bottom <= window.innerHeight;\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.addEventListener('scroll', this.trackScrolling);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      document.removeEventListener('scroll', this.trackScrolling);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.container,\n        children: [this.renderHead(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_components_caroussel_tsx__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          fullScreen: this.state.fullScreen,\n          defineFullScreen: function defineFullScreen() {\n            return _this2.setState({\n              fullScreen: !_this2.state.fullScreen\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 9\n        }, this), this.renderMain(), this.renderFooter()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // export async function getStaticProps(context) {\n//   await fetch('');\n//   return {\n//     props: {},\n//   }\n// }\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwid3JhcHBlZEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaXNCb3R0b20iLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRyYWNrU2Nyb2xsaW5nIiwic3RhdGUiLCJmdWxsU2NyZWVuIiwic3R5bGVzIiwiaGlkZGVuIiwibWFpbiIsInJlbmRlckNvbnRlbnQiLCJyZW5kZXJDb250YWN0IiwiY29udGVudENvbnRhaW5lciIsImNvbnRhaW5lckJ1ZmZlckxvZ28iLCJ0aXRsZSIsImluZm9zIiwic2hvcE5hbWUiLCJhY2Nyb2NoZSIsImNvbnRhY3RDb250YWluZXIiLCJjb250YWN0Q29udGVudENvbnRhaW5lciIsImNvbnRhY3RUaXRsZSIsImNvbnRhY3RMaW5lIiwibWRpUGhvbmUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRlbCIsIm1kaU1hcE1hcmtlciIsImFkciIsIm1kaUVtYWlsIiwibWFpbCIsImZvb3RlciIsImZvb3RlclRleHRDb250YWluZXIiLCJmb290ZXJUaXRsZSIsImZvb3RlclRleHQiLCJkaXNwbGF5TG9nbyIsImVsIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGFpbmVyIiwicmVuZGVySGVhZCIsInNldFN0YXRlIiwicmVuZGVyTWFpbiIsInJlbmRlckZvb3RlciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFTcUJBLEk7Ozs7O0FBQ25CLGdCQUFZQyxLQUFa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QUksQ0FBQ0QsS0FBTCxDQUFXQztBQUF4QixhQUFkLENBQU47QUFBQTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0csS0FBS3VDLFVBQUwsRUFISCxFQUlHLEtBQUtDLFlBQUwsRUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQVFEOzs7O0VBN0crQkMsNENBQUssQ0FBQ0MsUyxHQWdIeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvY2Fyb3Vzc2VsLnRzeCdcbmltcG9ydCBDYXJkU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZFNsaWRlci50c3gnXG5pbXBvcnQgaW5mb3MgZnJvbSAnLi4vZW52L2luZm9zLnRzeCdcbmltcG9ydCBJY29uIGZyb20gXCJAbWRpL3JlYWN0XCI7XG5pbXBvcnQgeyBtZGlFbWFpbCwgbWRpTWFwTWFya2VyLCBtZGlQaG9uZSB9IGZyb20gXCJAbWRpL2pzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgZnVsbFNjcmVlbjogYm9vbGVhbixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmdWxsU2NyZWVuOmZhbHNlLFxuICAgICAgZGlzcGxheUxvZ286ZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgaXNCb3R0b20oZWwpIHtcbiAgICByZXR1cm4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMudHJhY2tTY3JvbGxpbmcpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy50cmFja1Njcm9sbGluZyk7XG4gIH1cblxuICB0cmFja1Njcm9sbGluZyA9ICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgICBpZiAodGhpcy5pc0JvdHRvbSh3cmFwcGVkRWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb290ZXIgYm90dG9tIHJlYWNoZWQnKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMudHJhY2tTY3JvbGxpbmcpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXJIZWFkID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGVtcGxhdGU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTWFpbiA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZnVsbFNjcmVlbiA/IHN0eWxlcy5oaWRkZW4gOiBzdHlsZXMubWFpbn0+XG4gICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cbiAgICAgICAge3RoaXMucmVuZGVyQ29udGFjdCgpfVxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckJ1ZmZlckxvZ299PlxuICAgICAgICAgICAgPGltZyBzcmM9e1wibG9nby5wbmdcIn0gYWx0PXtcImxvZ29cIn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICB7aW5mb3Muc2hvcE5hbWV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hY2Nyb2NoZX0+XG4gICAgICAgICAgICB7aW5mb3MuYWNjcm9jaGV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmRTbGlkZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyQ29udGFjdCA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RDb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdFRpdGxlfT5Db250YWN0PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RMaW5lfT5cbiAgICAgICAgICAgIDxJY29uIHBhdGg9e21kaVBob25lfSB0aXRsZT17XCJtYWlsXCJ9IHNpemU9ezF9IGNvbG9yPXt0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJibGFja1wiIDogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tbWFpbkNvbG9yJyl9Lz5cbiAgICAgICAgICAgIDxwPntpbmZvcy50ZWx9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdExpbmV9PlxuICAgICAgICAgICAgPEljb24gcGF0aD17bWRpTWFwTWFya2VyfSB0aXRsZT17XCJtYWlsXCJ9IHNpemU9ezF9IGNvbG9yPXt0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJibGFja1wiIDogZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tbWFpbkNvbG9yJyl9Lz5cbiAgICAgICAgICAgIDxwPntpbmZvcy5hZHJ9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdExpbmV9PlxuICAgICAgICAgICAgPEljb24gcGF0aD17bWRpRW1haWx9IHRpdGxlPXtcIm1haWxcIn0gc2l6ZT17MX0gY29sb3I9e3R5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcImJsYWNrXCIgOiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1tYWluQ29sb3InKX0vPlxuICAgICAgICAgICAgPHA+e2luZm9zLm1haWx9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckZvb3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8Zm9vdGVyIGlkPXtcImZvb3RlclwifSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZnVsbFNjcmVlbiA/IHN0eWxlcy5oaWRkZW4gOiBzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGltZyBzcmM9e1wiU2lsaG91ZXRfRnJhbmNlX3dpdGhfRmxhZy5wbmdcIn0gYWx0PXtcIkZyYW5jZSBhdXggY291bGV1ciBkdSBkcmFwZWF1IFwifSBoZWlnaHQ9e1wiMTAwJVwifS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyVGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyVGl0bGV9PkNldCBhcnRpc2FuIGZyYW7Dp2FpcyDDoCBiZXNvaW4gZGUgc291dGllbnQgITwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUZXh0fT5Ob3VzIHBvdXZvbnMgbCdhaWRlciBlbiBjZXR0ZSBww6lyaW9kZSBkZSBDT1ZJRCBlbiBjb250aW51YW50IGQnYWNoZXRlciBjaGV6IGx1aS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAge3RoaXMucmVuZGVySGVhZCgpfVxuICAgICAgICA8Q2Fyb3VzZWwgZnVsbFNjcmVlbj17dGhpcy5zdGF0ZS5mdWxsU2NyZWVufSBkZWZpbmVGdWxsU2NyZWVuPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtmdWxsU2NyZWVuOiF0aGlzLnN0YXRlLmZ1bGxTY3JlZW59KX0vPlxuICAgICAgICB7dGhpcy5yZW5kZXJNYWluKCl9XG4gICAgICAgIHt0aGlzLnJlbmRlckZvb3RlcigpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGF3YWl0IGZldGNoKCcnKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge30sXG4vLyAgIH1cbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})