webpackHotUpdate_N_E("pages/index",{

/***/ "./components/logo.tsx":
/*!*****************************!*\
  !*** ./components/logo.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/aurelien/repo/next-ts-template/components/logo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar renderLogo = function renderLogo(props) {\n  _s();\n\n  var size = useWindowSize();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.containerBufferLogo,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"logo.png\",\n      alt: \"logo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(renderLogo, \"/dTDjnwlNGsRzu12Dr5t7HJe8sA=\", false, function () {\n  return [useWindowSize];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderLogo); // Hook\n\nfunction useWindowSize() {\n  _s2();\n\n  // Initialize state with undefined width/height so server and client renders match\n  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    width: undefined,\n    height: undefined\n  }),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // only execute all the code below in client side\n    if (true) {\n      // Handler to call on window resize\n      var handleResize = function handleResize() {\n        // Set window width/height to state\n        setWindowSize({\n          width: window.innerWidth,\n          height: window.innerHeight\n        });\n      }; // Add event listener\n\n\n      window.addEventListener(\"resize\", handleResize); // Call handler right away so state gets updated with initial window size\n\n      handleResize(); // Remove event listener on cleanup\n\n      return function () {\n        return window.removeEventListener(\"resize\", handleResize);\n      };\n    }\n  }, []); // Empty array ensures that effect is only run on mount\n\n  return windowSize;\n}\n\n_s2(useWindowSize, \"J9BENybIGqNw0/U+xsdkGfZ/Kpg=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dvLnRzeD8wNTg4Il0sIm5hbWVzIjpbInJlbmRlckxvZ28iLCJwcm9wcyIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwic3R5bGVzIiwiY29udGFpbmVyQnVmZmVyTG9nbyIsInVzZVN0YXRlIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBS0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFtQjtBQUFBOztBQUNsQyxNQUFNQyxJQUFJLEdBQUdDLGFBQWEsRUFBMUI7QUFFSCxzQkFDTztBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsbUJBQXZCO0FBQUEsMkJBQ0U7QUFBSyxTQUFHLEVBQUUsVUFBVjtBQUFzQixTQUFHLEVBQUU7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEUDtBQUtBLENBUkQ7O0dBQU1MLFU7VUFDV0csYTs7O0FBUUZILHlFQUFmLEUsQ0FHQTs7QUFDQSxTQUFTRyxhQUFULEdBQXlCO0FBQUE7O0FBQ3hCO0FBQ0E7QUFGd0Isa0JBR1lHLHNEQUFRLENBQUM7QUFDNUNDLFNBQUssRUFBRUMsU0FEcUM7QUFFNUNDLFVBQU0sRUFBRUQ7QUFGb0MsR0FBRCxDQUhwQjtBQUFBLE1BR2pCRSxVQUhpQjtBQUFBLE1BR0xDLGFBSEs7O0FBT3hCQyx5REFBUyxDQUFDLFlBQU07QUFDZjtBQUNBLGNBQW1DO0FBQ2xDO0FBRGtDLFVBRXpCQyxZQUZ5QixHQUVsQyxTQUFTQSxZQUFULEdBQXdCO0FBQ3ZCO0FBQ0FGLHFCQUFhLENBQUM7QUFDYkosZUFBSyxFQUFFTyxNQUFNLENBQUNDLFVBREQ7QUFFYk4sZ0JBQU0sRUFBRUssTUFBTSxDQUFDRTtBQUZGLFNBQUQsQ0FBYjtBQUlBLE9BUmlDLEVBU2xDOzs7QUFDQUYsWUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0osWUFBbEMsRUFWa0MsQ0FXbEM7O0FBQ0FBLGtCQUFZLEdBWnNCLENBYWxDOztBQUNBLGFBQU87QUFBQSxlQUFNQyxNQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxZQUFyQyxDQUFOO0FBQUEsT0FBUDtBQUNBO0FBQ0QsR0FsQlEsRUFrQk4sRUFsQk0sQ0FBVCxDQVB3QixDQXlCaEI7O0FBQ1IsU0FBT0gsVUFBUDtBQUNBOztJQTNCUVAsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbG9nby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5jb25zdCByZW5kZXJMb2dvID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xuXG5cdHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyQnVmZmVyTG9nb30+XG4gICAgICAgICAgPGltZyBzcmM9e1wibG9nby5wbmdcIn0gYWx0PXtcImxvZ29cIn0vPlxuICAgICAgICA8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckxvZ287XG5cblxuLy8gSG9va1xuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcblx0Ly8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxuXHQvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXG5cdGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcblx0XHR3aWR0aDogdW5kZWZpbmVkLFxuXHRcdGhlaWdodDogdW5kZWZpbmVkLFxuXHR9KTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBvbmx5IGV4ZWN1dGUgYWxsIHRoZSBjb2RlIGJlbG93IGluIGNsaWVudCBzaWRlXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHQvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxuXHRcdFx0ZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuXHRcdFx0XHQvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxuXHRcdFx0XHRzZXRXaW5kb3dTaXplKHtcblx0XHRcdFx0XHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQWRkIGV2ZW50IGxpc3RlbmVyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXHRcdFx0Ly8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxuXHRcdFx0aGFuZGxlUmVzaXplKCk7XG5cdFx0XHQvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxuXHRcdFx0cmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cdFx0fVxuXHR9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnRcblx0cmV0dXJuIHdpbmRvd1NpemU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/logo.tsx\n");

/***/ })

})