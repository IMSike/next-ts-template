webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_caroussel_tsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/caroussel.tsx */ \"./components/caroussel.tsx\");\n/* harmony import */ var _components_cardSlider_tsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/cardSlider.tsx */ \"./components/cardSlider.tsx\");\n/* harmony import */ var _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../env/infos.tsx */ \"./env/infos.tsx\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mdi/react */ \"./node_modules/@mdi/react/Icon.js\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mdi_react__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mdi/js */ \"./node_modules/@mdi/js/mdi.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/aurelien/repo/next-ts-template/pages/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"trackScrolling\", function () {\n      var wrappedElement = document.getElementById('footer');\n\n      if (_this.isBottom(wrappedElement)) {\n        console.log('footer bottom reached');\n\n        _this.setState({\n          displayLogo: true\n        });\n\n        document.removeEventListener('scroll', _this.trackScrolling);\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderHead\", function () {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"title\", {\n          children: \"Template\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"link\", {\n          rel: \"icon\",\n          href: \"/favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderMain\", function () {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"main\", {\n        className: _this.state.fullScreen ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.hidden : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.main,\n        children: [_this.renderContent(), _this.renderContact()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderContent\", function () {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contentContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n          children: [_this.state.displayLogo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.containerBufferLogo,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"img\", {\n              src: \"logo.png\",\n              alt: \"logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"h1\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,\n            children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"].shopName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.accroche,\n            children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"].accroche\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_components_cardSlider_tsx__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderContact\", function () {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactContainer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactContentContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"h1\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactTitle,\n            children: \"Contact\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactLine,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_mdi_react__WEBPACK_IMPORTED_MODULE_14___default.a, {\n              path: _mdi_js__WEBPACK_IMPORTED_MODULE_15__[\"mdiPhone\"],\n              title: \"mail\",\n              size: 1,\n              color: false ? undefined : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n              children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"].tel\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactLine,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_mdi_react__WEBPACK_IMPORTED_MODULE_14___default.a, {\n              path: _mdi_js__WEBPACK_IMPORTED_MODULE_15__[\"mdiMapMarker\"],\n              title: \"mail\",\n              size: 1,\n              color: false ? undefined : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n              children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"].adr\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.contactLine,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_mdi_react__WEBPACK_IMPORTED_MODULE_14___default.a, {\n              path: _mdi_js__WEBPACK_IMPORTED_MODULE_15__[\"mdiEmail\"],\n              title: \"mail\",\n              size: 1,\n              color: false ? undefined : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n              children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"].mail\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 13\n            }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 7\n      }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"renderFooter\", function () {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"footer\", {\n        id: \"footer\",\n        className: _this.state.fullScreen ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.hidden : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.footer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"img\", {\n          src: \"Silhouet_France_with_Flag.png\",\n          alt: \"France aux couleur du drapeau \",\n          height: \"100%\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.footerTextContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.footerTitle,\n            children: \"Cet artisan fran\\xE7ais \\xE0 besoin de soutient !\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.footerText,\n            children: \"Nous pouvons l'aider en cette p\\xE9riode de COVID en continuant d'acheter chez lui.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 11\n          }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 9\n        }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this))]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 7\n      }, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    });\n\n    _this.state = {\n      fullScreen: false,\n      displayLogo: size.width < 1280 ? true : false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Home, [{\n    key: \"isBottom\",\n    value: function isBottom(el) {\n      return el.getBoundingClientRect().bottom <= window.innerHeight;\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.addEventListener('scroll', this.trackScrolling);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      document.removeEventListener('scroll', this.trackScrolling);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.container,\n        children: [this.renderHead(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_components_caroussel_tsx__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          fullScreen: this.state.fullScreen,\n          defineFullScreen: function defineFullScreen() {\n            return _this2.setState({\n              fullScreen: !_this2.state.fullScreen\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 9\n        }, this), this.renderMain(), this.renderFooter()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // export async function getStaticProps(context) {\n//   await fetch('');\n//   return {\n//     props: {},\n//   }\n// }\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwid3JhcHBlZEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaXNCb3R0b20iLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJkaXNwbGF5TG9nbyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmFja1Njcm9sbGluZyIsInN0YXRlIiwiZnVsbFNjcmVlbiIsInN0eWxlcyIsImhpZGRlbiIsIm1haW4iLCJyZW5kZXJDb250ZW50IiwicmVuZGVyQ29udGFjdCIsImNvbnRlbnRDb250YWluZXIiLCJjb250YWluZXJCdWZmZXJMb2dvIiwidGl0bGUiLCJpbmZvcyIsInNob3BOYW1lIiwiYWNjcm9jaGUiLCJjb250YWN0Q29udGFpbmVyIiwiY29udGFjdENvbnRlbnRDb250YWluZXIiLCJjb250YWN0VGl0bGUiLCJjb250YWN0TGluZSIsIm1kaVBob25lIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRvY3VtZW50RWxlbWVudCIsImdldFByb3BlcnR5VmFsdWUiLCJ0ZWwiLCJtZGlNYXBNYXJrZXIiLCJhZHIiLCJtZGlFbWFpbCIsIm1haWwiLCJmb290ZXIiLCJmb290ZXJUZXh0Q29udGFpbmVyIiwiZm9vdGVyVGl0bGUiLCJmb290ZXJUZXh0Iiwic2l6ZSIsIndpZHRoIiwiZWwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWluZXIiLCJyZW5kZXJIZWFkIiwicmVuZGVyTWFpbiIsInJlbmRlckZvb3RlciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFVcUJBLEk7Ozs7O0FB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RyxLQUFLQyxVQUFMLEVBREgsZUFFRSxxRUFBQyxrRUFBRDtBQUFVLG9CQUFVLEVBQUUsS0FBS3ZDLEtBQUwsQ0FBV0MsVUFBakM7QUFBNkMsMEJBQWdCLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNMLFFBQUwsQ0FBYztBQUFDSyx3QkFBVSxFQUFDLENBQUMsTUFBSSxDQUFDRCxLQUFMLENBQVdDO0FBQXhCLGFBQWQsQ0FBTjtBQUFBO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHRyxLQUFLdUMsVUFBTCxFQUhILEVBSUcsS0FBS0MsWUFBTCxFQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBUUQ7Ozs7RUFsSCtCQyw0Q0FBSyxDQUFDQyxTLEdBcUh4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvY2Fyb3Vzc2VsLnRzeCdcbmltcG9ydCBDYXJkU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZFNsaWRlci50c3gnXG5pbXBvcnQgaW5mb3MgZnJvbSAnLi4vZW52L2luZm9zLnRzeCdcbmltcG9ydCBJY29uIGZyb20gXCJAbWRpL3JlYWN0XCI7XG5pbXBvcnQgeyBtZGlFbWFpbCwgbWRpTWFwTWFya2VyLCBtZGlQaG9uZSB9IGZyb20gXCJAbWRpL2pzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgZnVsbFNjcmVlbjogYm9vbGVhbixcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZ1bGxTY3JlZW46ZmFsc2UsXG4gICAgICBkaXNwbGF5TG9nbzpzaXplLndpZHRoIDwgMTI4MCA/IHRydWUgOiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBpc0JvdHRvbShlbCkge1xuICAgIHJldHVybiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy50cmFja1Njcm9sbGluZyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnRyYWNrU2Nyb2xsaW5nKTtcbiAgfVxuXG4gIHRyYWNrU2Nyb2xsaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICAgIGlmICh0aGlzLmlzQm90dG9tKHdyYXBwZWRFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvb3RlciBib3R0b20gcmVhY2hlZCcpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheUxvZ286dHJ1ZX0pO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy50cmFja1Njcm9sbGluZyk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlckhlYWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UZW1wbGF0ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICApXG4gIH1cblxuICByZW5kZXJNYWluID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5mdWxsU2NyZWVuID8gc3R5bGVzLmhpZGRlbiA6IHN0eWxlcy5tYWlufT5cbiAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxuICAgICAgICB7dGhpcy5yZW5kZXJDb250YWN0KCl9XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXlMb2dvID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyQnVmZmVyTG9nb30+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtcImxvZ28ucG5nXCJ9IGFsdD17XCJsb2dvXCJ9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDpcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgIHtpbmZvcy5zaG9wTmFtZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFjY3JvY2hlfT5cbiAgICAgICAgICAgIHtpbmZvcy5hY2Nyb2NoZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q2FyZFNsaWRlci8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJDb250YWN0ID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdENvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdENvbnRlbnRDb250YWluZXJ9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0VGl0bGV9PkNvbnRhY3Q8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdExpbmV9PlxuICAgICAgICAgICAgPEljb24gcGF0aD17bWRpUGhvbmV9IHRpdGxlPXtcIm1haWxcIn0gc2l6ZT17MX0gY29sb3I9e3R5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcImJsYWNrXCIgOiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1tYWluQ29sb3InKX0vPlxuICAgICAgICAgICAgPHA+e2luZm9zLnRlbH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0TGluZX0+XG4gICAgICAgICAgICA8SWNvbiBwYXRoPXttZGlNYXBNYXJrZXJ9IHRpdGxlPXtcIm1haWxcIn0gc2l6ZT17MX0gY29sb3I9e3R5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcImJsYWNrXCIgOiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1tYWluQ29sb3InKX0vPlxuICAgICAgICAgICAgPHA+e2luZm9zLmFkcn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0TGluZX0+XG4gICAgICAgICAgICA8SWNvbiBwYXRoPXttZGlFbWFpbH0gdGl0bGU9e1wibWFpbFwifSBzaXplPXsxfSBjb2xvcj17dHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiYmxhY2tcIiA6IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLW1haW5Db2xvcicpfS8+XG4gICAgICAgICAgICA8cD57aW5mb3MubWFpbH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgIDxmb290ZXIgaWQ9e1wiZm9vdGVyXCJ9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5mdWxsU2NyZWVuID8gc3R5bGVzLmhpZGRlbiA6IHN0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8aW1nIHNyYz17XCJTaWxob3VldF9GcmFuY2Vfd2l0aF9GbGFnLnBuZ1wifSBhbHQ9e1wiRnJhbmNlIGF1eCBjb3VsZXVyIGR1IGRyYXBlYXUgXCJ9IGhlaWdodD17XCIxMDAlXCJ9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUZXh0Q29udGFpbmVyfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUaXRsZX0+Q2V0IGFydGlzYW4gZnJhbsOnYWlzIMOgIGJlc29pbiBkZSBzb3V0aWVudCAhPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclRleHR9Pk5vdXMgcG91dm9ucyBsJ2FpZGVyIGVuIGNldHRlIHDDqXJpb2RlIGRlIENPVklEIGVuIGNvbnRpbnVhbnQgZCdhY2hldGVyIGNoZXogbHVpLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7dGhpcy5yZW5kZXJIZWFkKCl9XG4gICAgICAgIDxDYXJvdXNlbCBmdWxsU2NyZWVuPXt0aGlzLnN0YXRlLmZ1bGxTY3JlZW59IGRlZmluZUZ1bGxTY3JlZW49eygpID0+IHRoaXMuc2V0U3RhdGUoe2Z1bGxTY3JlZW46IXRoaXMuc3RhdGUuZnVsbFNjcmVlbn0pfS8+XG4gICAgICAgIHt0aGlzLnJlbmRlck1haW4oKX1cbiAgICAgICAge3RoaXMucmVuZGVyRm9vdGVyKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbi8vICAgYXdhaXQgZmV0Y2goJycpO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7fSxcbi8vICAgfVxuLy8gfVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})