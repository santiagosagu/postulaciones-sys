webpackHotUpdate_N_E("pages/ver-programacion-admin",{

/***/ "./hooks/useVerProgramacion.js":
/*!*************************************!*\
  !*** ./hooks/useVerProgramacion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



var useVerProgramacion = function useVerProgramacion() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      mostrarProgramacion = _useState[0],
      guardarMostrarProgramacion = _useState[1];

  var ver = false;

  var cambiarEstado = function cambiarEstado() {
    if (mostrarProgramacion) {
      ver = true;
      console.log(ver);
    } else {
      ver = false;
      console.log(ver);
    }
  };

  cambiarEstado();
  return {
    mostrarProgramacion: mostrarProgramacion,
    guardarMostrarProgramacion: guardarMostrarProgramacion
  };
};

_s(useVerProgramacion, "JXLecDyzyPjjtORVGYroERMVK/k=");

/* harmony default export */ __webpack_exports__["default"] = (useVerProgramacion);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVmVyUHJvZ3JhbWFjaW9uLmpzIl0sIm5hbWVzIjpbInVzZVZlclByb2dyYW1hY2lvbiIsInVzZVN0YXRlIiwibW9zdHJhclByb2dyYW1hY2lvbiIsImd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uIiwidmVyIiwiY2FtYmlhckVzdGFkbyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUFBLGtCQUU2QkMsc0RBQVEsQ0FBQyxLQUFELENBRnJDO0FBQUEsTUFFdEJDLG1CQUZzQjtBQUFBLE1BRURDLDBCQUZDOztBQUk3QixNQUFJQyxHQUFHLEdBQUcsS0FBVjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDekIsUUFBSUgsbUJBQUosRUFBeUI7QUFDckJFLFNBQUcsR0FBRyxJQUFOO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0gsS0FIRCxNQUdNO0FBQ0ZBLFNBQUcsR0FBRyxLQUFOO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0g7QUFDSCxHQVJEOztBQVVBQyxlQUFhO0FBRWIsU0FBTztBQUNISCx1QkFBbUIsRUFBbkJBLG1CQURHO0FBRUhDLDhCQUEwQixFQUExQkE7QUFGRyxHQUFQO0FBS0gsQ0F2QkQ7O0dBQU1ILGtCOztBQXlCU0EsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVyLXByb2dyYW1hY2lvbi1hZG1pbi4zZDMzNWUyYzc4MTZiYzNhMmNmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VWZXJQcm9ncmFtYWNpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21vc3RyYXJQcm9ncmFtYWNpb24sIGd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGxldCB2ZXIgPSBmYWxzZVxyXG5cclxuICAgIGNvbnN0IGNhbWJpYXJFc3RhZG8gPSAoKSA9PiB7XHJcbiAgICAgICBpZiAobW9zdHJhclByb2dyYW1hY2lvbikge1xyXG4gICAgICAgICAgIHZlciA9IHRydWVcclxuICAgICAgICAgICBjb25zb2xlLmxvZyh2ZXIpXHJcbiAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgdmVyID0gZmFsc2VcclxuICAgICAgICAgICBjb25zb2xlLmxvZyh2ZXIpXHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FtYmlhckVzdGFkbygpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtb3N0cmFyUHJvZ3JhbWFjaW9uLFxyXG4gICAgICAgIGd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uLFxyXG4gICAgICAgIFxyXG4gICAgfTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVZlclByb2dyYW1hY2lvbjsiXSwic291cmNlUm9vdCI6IiJ9