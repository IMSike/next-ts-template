webpackHotUpdate_N_E("pages/index",{

/***/ "./components/logo.tsx":
/*!*****************************!*\
  !*** ./components/logo.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/aurelien/repo/next-ts-template/components/logo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar renderLogo = function renderLogo(props) {\n  _s();\n\n  var size = useWindowSize();\n\n  if (size.width < 1280) {\n    console.log(\"HERE\");\n  }\n\n  if (props.visible === false) {\n    return;\n  } else {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.containerBufferLogo,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"logo.png\",\n        alt: \"logo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 12\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }, _this);\n  }\n};\n\n_s(renderLogo, \"/dTDjnwlNGsRzu12Dr5t7HJe8sA=\", false, function () {\n  return [useWindowSize];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderLogo); // Hook\n\nfunction useWindowSize() {\n  _s2();\n\n  // Initialize state with undefined width/height so server and client renders match\n  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    width: undefined,\n    height: undefined\n  }),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // only execute all the code below in client side\n    if (true) {\n      // Handler to call on window resize\n      var handleResize = function handleResize() {\n        // Set window width/height to state\n        setWindowSize({\n          width: window.innerWidth,\n          height: window.innerHeight\n        });\n      }; // Add event listener\n\n\n      window.addEventListener(\"resize\", handleResize); // Call handler right away so state gets updated with initial window size\n\n      handleResize(); // Remove event listener on cleanup\n\n      return function () {\n        return window.removeEventListener(\"resize\", handleResize);\n      };\n    }\n  }, []); // Empty array ensures that effect is only run on mount\n\n  return windowSize;\n}\n\n_s2(useWindowSize, \"J9BENybIGqNw0/U+xsdkGfZ/Kpg=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dvLnRzeD8wNTg4Il0sIm5hbWVzIjpbInJlbmRlckxvZ28iLCJwcm9wcyIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwid2lkdGgiLCJjb25zb2xlIiwibG9nIiwidmlzaWJsZSIsInN0eWxlcyIsImNvbnRhaW5lckJ1ZmZlckxvZ28iLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsImhlaWdodCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQW1CO0FBQUE7O0FBQ2xDLE1BQU1DLElBQUksR0FBR0MsYUFBYSxFQUExQjs7QUFDQSxNQUFJRCxJQUFJLENBQUNFLEtBQUwsR0FBYSxJQUFqQixFQUF1QjtBQUN0QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBOztBQUNELE1BQUlMLEtBQUssQ0FBQ00sT0FBTixLQUFrQixLQUF0QixFQUE2QjtBQUM1QjtBQUNBLEdBRkQsTUFFTztBQUNULHdCQUNPO0FBQUssZUFBUyxFQUFFQyw4REFBTSxDQUFDQyxtQkFBdkI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRSxVQUFWO0FBQXNCLFdBQUcsRUFBRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURQO0FBS0c7QUFDSixDQWREOztHQUFNVCxVO1VBQ1dHLGE7OztBQWNGSCx5RUFBZixFLENBR0E7O0FBQ0EsU0FBU0csYUFBVCxHQUF5QjtBQUFBOztBQUN4QjtBQUNBO0FBRndCLGtCQUdZTyxzREFBUSxDQUFDO0FBQzVDTixTQUFLLEVBQUVPLFNBRHFDO0FBRTVDQyxVQUFNLEVBQUVEO0FBRm9DLEdBQUQsQ0FIcEI7QUFBQSxNQUdqQkUsVUFIaUI7QUFBQSxNQUdMQyxhQUhLOztBQU94QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2Y7QUFDQSxjQUFtQztBQUNsQztBQURrQyxVQUV6QkMsWUFGeUIsR0FFbEMsU0FBU0EsWUFBVCxHQUF3QjtBQUN2QjtBQUNBRixxQkFBYSxDQUFDO0FBQ2JWLGVBQUssRUFBRWEsTUFBTSxDQUFDQyxVQUREO0FBRWJOLGdCQUFNLEVBQUVLLE1BQU0sQ0FBQ0U7QUFGRixTQUFELENBQWI7QUFJQSxPQVJpQyxFQVNsQzs7O0FBQ0FGLFlBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NKLFlBQWxDLEVBVmtDLENBV2xDOztBQUNBQSxrQkFBWSxHQVpzQixDQWFsQzs7QUFDQSxhQUFPO0FBQUEsZUFBTUMsTUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0wsWUFBckMsQ0FBTjtBQUFBLE9BQVA7QUFDQTtBQUNELEdBbEJRLEVBa0JOLEVBbEJNLENBQVQsQ0FQd0IsQ0F5QmhCOztBQUNSLFNBQU9ILFVBQVA7QUFDQTs7SUEzQlFWLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ28udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICB2aXNpYmxlOiBCb29sZWFuO1xufVxuXG5jb25zdCByZW5kZXJMb2dvID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGlmIChzaXplLndpZHRoIDwgMTI4MCkge1xuICAgIFx0Y29uc29sZS5sb2coXCJIRVJFXCIpXG4gICAgfVxuICAgIGlmIChwcm9wcy52aXNpYmxlID09PSBmYWxzZSkge1xuICAgIFx0cmV0dXJuO1xuICAgIH0gZWxzZSB7XG5cdFx0cmV0dXJuIChcblx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckJ1ZmZlckxvZ299PlxuXHQgICAgICAgICAgPGltZyBzcmM9e1wibG9nby5wbmdcIn0gYWx0PXtcImxvZ29cIn0vPlxuXHQgICAgICAgIDwvZGl2PlxuXHRcdCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTG9nbztcblxuXG4vLyBIb29rXG5mdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xuXHQvLyBJbml0aWFsaXplIHN0YXRlIHdpdGggdW5kZWZpbmVkIHdpZHRoL2hlaWdodCBzbyBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzIG1hdGNoXG5cdC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cblx0Y29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xuXHRcdHdpZHRoOiB1bmRlZmluZWQsXG5cdFx0aGVpZ2h0OiB1bmRlZmluZWQsXG5cdH0pO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIG9ubHkgZXhlY3V0ZSBhbGwgdGhlIGNvZGUgYmVsb3cgaW4gY2xpZW50IHNpZGVcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXG5cdFx0XHRmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG5cdFx0XHRcdC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXG5cdFx0XHRcdHNldFdpbmRvd1NpemUoe1xuXHRcdFx0XHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBBZGQgZXZlbnQgbGlzdGVuZXJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cdFx0XHQvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXG5cdFx0XHRoYW5kbGVSZXNpemUoKTtcblx0XHRcdC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXG5cdFx0XHRyZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblx0XHR9XG5cdH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxuXHRyZXR1cm4gd2luZG93U2l6ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/logo.tsx\n");

/***/ })

})