webpackHotUpdate_N_E("pages/mi-programacion-dis",{

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
/* harmony import */ var _firebase_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase/context */ "./firebase/context.js");
var _s = $RefreshSig$();




var useVerProgramacion = function useVerProgramacion() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    verProgramacion: false
  }),
      mostrarProgramacion = _useState[0],
      guardarMostrarProgramacion = _useState[1]; // traemos las funciones de firebase


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_firebase_context__WEBPACK_IMPORTED_MODULE_1__["default"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario;

  var cambiarEstado = function cambiarEstado() {
    if (mostrarProgramacion.verProgramacion) {
      firebase.db.colletion('mostrarprogramacion').add(mostrarProgramacion.verProgramacion);
    } else {
      return;
    }
  };

  cambiarEstado();
  return {
    mostrarProgramacion: mostrarProgramacion,
    guardarMostrarProgramacion: guardarMostrarProgramacion
  };
};

_s(useVerProgramacion, "r1kgiTWBSUnFE6PpQ8ZtH1/HZog=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVmVyUHJvZ3JhbWFjaW9uLmpzIl0sIm5hbWVzIjpbInVzZVZlclByb2dyYW1hY2lvbiIsInVzZVN0YXRlIiwidmVyUHJvZ3JhbWFjaW9uIiwibW9zdHJhclByb2dyYW1hY2lvbiIsImd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uIiwidXNlQ29udGV4dCIsIkZpcmViYXNlQ29udGV4dCIsImZpcmViYXNlIiwidXN1YXJpbyIsImNhbWJpYXJFc3RhZG8iLCJkYiIsImNvbGxldGlvbiIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQUE7O0FBQUEsa0JBRTZCQyxzREFBUSxDQUFDO0FBQy9EQyxtQkFBZSxFQUFFO0FBRDhDLEdBQUQsQ0FGckM7QUFBQSxNQUV0QkMsbUJBRnNCO0FBQUEsTUFFREMsMEJBRkMsaUJBTTdCOzs7QUFONkIsb0JBT0NDLHdEQUFVLENBQUNDLHlEQUFELENBUFg7QUFBQSxNQU9yQkMsUUFQcUIsZUFPckJBLFFBUHFCO0FBQUEsTUFPWEMsT0FQVyxlQU9YQSxPQVBXOztBQVU3QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsUUFBSU4sbUJBQW1CLENBQUNELGVBQXhCLEVBQXlDO0FBQ3JDSyxjQUFRLENBQUNHLEVBQVQsQ0FBWUMsU0FBWixDQUFzQixxQkFBdEIsRUFBNkNDLEdBQTdDLENBQWlEVCxtQkFBbUIsQ0FBQ0QsZUFBckU7QUFFSCxLQUhELE1BR087QUFDSDtBQUVIO0FBQ0osR0FSRDs7QUFVQU8sZUFBYTtBQUViLFNBQU87QUFDSE4sdUJBQW1CLEVBQW5CQSxtQkFERztBQUVIQyw4QkFBMEIsRUFBMUJBO0FBRkcsR0FBUDtBQUtILENBM0JEOztHQUFNSixrQjs7QUE2QlNBLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21pLXByb2dyYW1hY2lvbi1kaXMuZTQyMTZiNDUwZDYzMTMxODA4MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlyZWJhc2VDb250ZXh0IGZyb20gJy4uL2ZpcmViYXNlL2NvbnRleHQnXHJcblxyXG5jb25zdCB1c2VWZXJQcm9ncmFtYWNpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21vc3RyYXJQcm9ncmFtYWNpb24sIGd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB2ZXJQcm9ncmFtYWNpb246IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHRyYWVtb3MgbGFzIGZ1bmNpb25lcyBkZSBmaXJlYmFzZVxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpXHJcblxyXG5cclxuICAgIGNvbnN0IGNhbWJpYXJFc3RhZG8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vc3RyYXJQcm9ncmFtYWNpb24udmVyUHJvZ3JhbWFjaW9uKSB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxldGlvbignbW9zdHJhcnByb2dyYW1hY2lvbicpLmFkZChtb3N0cmFyUHJvZ3JhbWFjaW9uLnZlclByb2dyYW1hY2lvbilcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYW1iaWFyRXN0YWRvKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1vc3RyYXJQcm9ncmFtYWNpb24sXHJcbiAgICAgICAgZ3VhcmRhck1vc3RyYXJQcm9ncmFtYWNpb24sXHJcblxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVmVyUHJvZ3JhbWFjaW9uOyJdLCJzb3VyY2VSb290IjoiIn0=