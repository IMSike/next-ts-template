webpackHotUpdate_N_E("pages/index",{

/***/ "./components/cardSlider.tsx":
/*!***********************************!*\
  !*** ./components/cardSlider.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _env_infos_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../env/infos.tsx */ \"./env/infos.tsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/home/aurelien/repo/next-ts-template/components/cardSlider.tsx\",\n    _settings,\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar settings = (_settings = {\n  dots: true,\n  infinite: true,\n  speed: 500,\n  slidesToShow: 1,\n  slidesToScroll: 1,\n  arrows: false,\n  autoplay: true,\n  autoplaySpeed: 5000\n}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_settings, \"speed\", 1000), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_settings, \"adaptiveHeight\", true), _settings);\n\nvar renderSlide = function renderSlide(props) {\n  _s();\n\n  // console.log(\"props :\", props)\n  var slideRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var back = function back() {\n    slideRef.current.slickPrev();\n  };\n\n  var next = function next() {\n    slideRef.current.slickNext();\n  };\n\n  var renderSlide = function renderSlide() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({\n      ref: slideRef\n    }, settings), {}, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleDesc,\n          children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"].titleDesc\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,\n          children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"].description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleDesc,\n          children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"].titleDesc\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,\n          children: _env_infos_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"].description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, _this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardSlideContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardSlideBtn,\n      onClick: back,\n      children: \"<\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardSlideContainerContent,\n      children: renderSlide()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardSlideBtn,\n      onClick: back,\n      children: \">\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 10\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(renderSlide, \"gJaECBhX1RZYOycrFm+2oPe2Pnk=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderSlide);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkU2xpZGVyLnRzeD9lMDRiIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJlbmRlclNsaWRlIiwicHJvcHMiLCJzbGlkZVJlZiIsInVzZVJlZiIsImJhY2siLCJjdXJyZW50Iiwic2xpY2tQcmV2IiwibmV4dCIsInNsaWNrTmV4dCIsInN0eWxlcyIsInRpdGxlRGVzYyIsImluZm9zIiwiZGVzY3JpcHRpb24iLCJjYXJkU2xpZGVDb250YWluZXIiLCJjYXJkU2xpZGVCdG4iLCJjYXJkU2xpZGVDb250YWluZXJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsUUFBUTtBQUNWQyxNQUFJLEVBQUUsSUFESTtBQUVWQyxVQUFRLEVBQUUsSUFGQTtBQUdWQyxPQUFLLEVBQUUsR0FIRztBQUlWQyxjQUFZLEVBQUUsQ0FKSjtBQUtWQyxnQkFBYyxFQUFFLENBTE47QUFNVkMsUUFBTSxFQUFDLEtBTkc7QUFPVkMsVUFBUSxFQUFDLElBUEM7QUFRVkMsZUFBYSxFQUFDO0FBUkosaUhBU0osSUFUSSwwSEFVSyxJQVZMLGFBQVo7O0FBaUJBLElBQU1DLFdBQVcsR0FBRyxxQkFBQ0MsS0FBRCxFQUFtQjtBQUFBOztBQUN0QztBQUNBLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQkYsWUFBUSxDQUFDRyxPQUFULENBQWlCQyxTQUFqQjtBQUNBLEdBRkQ7O0FBR0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQkwsWUFBUSxDQUFDRyxPQUFULENBQWlCRyxTQUFqQjtBQUNBLEdBRkQ7O0FBR0EsTUFBTVIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6Qix3QkFDQyxxRUFBQyxrREFBRDtBQUFRLFNBQUcsRUFBRUU7QUFBYixPQUEyQlgsUUFBM0I7QUFBQSw4QkFDQztBQUFBLGdDQUNDO0FBQUcsbUJBQVMsRUFBRWtCLDhEQUFNLENBQUNDLFNBQXJCO0FBQUEsb0JBQ0VDLHNEQUFLLENBQUNEO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUlDO0FBQUcsbUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0csV0FBckI7QUFBQSxvQkFDRUQsc0RBQUssQ0FBQ0M7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBU0M7QUFBQSxnQ0FDQztBQUFHLG1CQUFTLEVBQUVILDhEQUFNLENBQUNDLFNBQXJCO0FBQUEsb0JBQ0VDLHNEQUFLLENBQUNEO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUlDO0FBQUcsbUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0csV0FBckI7QUFBQSxvQkFDRUQsc0RBQUssQ0FBQ0M7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBb0JBLEdBckJEOztBQXNCQSxzQkFDQztBQUFLLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksa0JBQXZCO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVKLDhEQUFNLENBQUNLLFlBQXZCO0FBQXFDLGFBQU8sRUFBRVYsSUFBOUM7QUFBQSxnQkFDRTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUlDO0FBQUssZUFBUyxFQUFFSyw4REFBTSxDQUFDTSx5QkFBdkI7QUFBQSxnQkFDRWYsV0FBVztBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRCxlQU9PO0FBQUssZUFBUyxFQUFFUyw4REFBTSxDQUFDSyxZQUF2QjtBQUFxQyxhQUFPLEVBQUVWLElBQTlDO0FBQUEsZ0JBQ0o7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFhQSxDQTVDRDs7R0FBTUosVzs7QUE2Q1NBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYXJkU2xpZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGluZm9zIGZyb20gJy4uL2Vudi9pbmZvcy50c3gnXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuXG52YXIgc2V0dGluZ3MgPSB7XG4gIGRvdHM6IHRydWUsXG4gIGluZmluaXRlOiB0cnVlLFxuICBzcGVlZDogNTAwLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBhcnJvd3M6ZmFsc2UsXG4gIGF1dG9wbGF5OnRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6NTAwMCxcbiAgc3BlZWQ6MTAwMCxcbiAgYWRhcHRpdmVIZWlnaHQ6dHJ1ZSxcbn07XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIC8vIGZ1bGxTY3JlZW46IEJvb2xlYW47XG59XG5cbmNvbnN0IHJlbmRlclNsaWRlID0gKHByb3BzOiBJUHJvcHMpID0+IHtcblx0Ly8gY29uc29sZS5sb2coXCJwcm9wcyA6XCIsIHByb3BzKVxuXHRjb25zdCBzbGlkZVJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBiYWNrID0gKCkgPT4ge1xuXHRcdHNsaWRlUmVmLmN1cnJlbnQuc2xpY2tQcmV2KCk7XG5cdH1cblx0Y29uc3QgbmV4dCA9ICgpID0+IHtcblx0XHRzbGlkZVJlZi5jdXJyZW50LnNsaWNrTmV4dCgpO1xuXHR9XG5cdGNvbnN0IHJlbmRlclNsaWRlID0gKCkgPT4ge1xuXHRcdHJldHVybihcblx0XHRcdDxTbGlkZXIgcmVmPXtzbGlkZVJlZn0gey4uLnNldHRpbmdzfT5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZURlc2N9PlxuXHRcdFx0XHRcdFx0e2luZm9zLnRpdGxlRGVzY31cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuXHRcdFx0XHRcdFx0e2luZm9zLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVEZXNjfT5cblx0XHRcdFx0XHRcdHtpbmZvcy50aXRsZURlc2N9XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cblx0XHRcdFx0XHRcdHtpbmZvcy5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9TbGlkZXI+XG5cdFx0KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkU2xpZGVDb250YWluZXJ9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkU2xpZGVCdG59IG9uQ2xpY2s9e2JhY2t9PlxuXHRcdFx0XHR7XCI8XCJ9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFNsaWRlQ29udGFpbmVyQ29udGVudH0+XG5cdFx0XHRcdHtyZW5kZXJTbGlkZSgpfVxuXHQgICAgICAgIDwvZGl2PlxuXHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFNsaWRlQnRufSBvbkNsaWNrPXtiYWNrfT5cblx0XHRcdFx0e1wiPlwifVxuXHRcdFx0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU2xpZGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cardSlider.tsx\n");

/***/ })

})