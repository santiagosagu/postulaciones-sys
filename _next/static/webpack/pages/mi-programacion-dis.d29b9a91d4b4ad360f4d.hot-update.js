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
      firebase.db.collection('mostrarprogramacion').add(mostrarProgramacion.verProgramacion);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVmVyUHJvZ3JhbWFjaW9uLmpzIl0sIm5hbWVzIjpbInVzZVZlclByb2dyYW1hY2lvbiIsInVzZVN0YXRlIiwidmVyUHJvZ3JhbWFjaW9uIiwibW9zdHJhclByb2dyYW1hY2lvbiIsImd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uIiwidXNlQ29udGV4dCIsIkZpcmViYXNlQ29udGV4dCIsImZpcmViYXNlIiwidXN1YXJpbyIsImNhbWJpYXJFc3RhZG8iLCJkYiIsImNvbGxlY3Rpb24iLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUFBLGtCQUU2QkMsc0RBQVEsQ0FBQztBQUMvREMsbUJBQWUsRUFBRTtBQUQ4QyxHQUFELENBRnJDO0FBQUEsTUFFdEJDLG1CQUZzQjtBQUFBLE1BRURDLDBCQUZDLGlCQU03Qjs7O0FBTjZCLG9CQU9DQyx3REFBVSxDQUFDQyx5REFBRCxDQVBYO0FBQUEsTUFPckJDLFFBUHFCLGVBT3JCQSxRQVBxQjtBQUFBLE1BT1hDLE9BUFcsZUFPWEEsT0FQVzs7QUFVN0IsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLFFBQUlOLG1CQUFtQixDQUFDRCxlQUF4QixFQUF5QztBQUNyQ0ssY0FBUSxDQUFDRyxFQUFULENBQVlDLFVBQVosQ0FBdUIscUJBQXZCLEVBQThDQyxHQUE5QyxDQUFrRFQsbUJBQW1CLENBQUNELGVBQXRFO0FBRUgsS0FIRCxNQUdPO0FBQ0g7QUFFSDtBQUNKLEdBUkQ7O0FBVUFPLGVBQWE7QUFFYixTQUFPO0FBQ0hOLHVCQUFtQixFQUFuQkEsbUJBREc7QUFFSEMsOEJBQTBCLEVBQTFCQTtBQUZHLEdBQVA7QUFLSCxDQTNCRDs7R0FBTUosa0I7O0FBNkJTQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9taS1wcm9ncmFtYWNpb24tZGlzLmQyOWI5YTkxZDRiNGFkMzYwZjRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpcmViYXNlQ29udGV4dCBmcm9tICcuLi9maXJlYmFzZS9jb250ZXh0J1xyXG5cclxuY29uc3QgdXNlVmVyUHJvZ3JhbWFjaW9uID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFttb3N0cmFyUHJvZ3JhbWFjaW9uLCBndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdmVyUHJvZ3JhbWFjaW9uOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyB0cmFlbW9zIGxhcyBmdW5jaW9uZXMgZGUgZmlyZWJhc2VcclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuXHJcbiAgICBjb25zdCBjYW1iaWFyRXN0YWRvID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtb3N0cmFyUHJvZ3JhbWFjaW9uLnZlclByb2dyYW1hY2lvbikge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdtb3N0cmFycHJvZ3JhbWFjaW9uJykuYWRkKG1vc3RyYXJQcm9ncmFtYWNpb24udmVyUHJvZ3JhbWFjaW9uKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbWJpYXJFc3RhZG8oKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbW9zdHJhclByb2dyYW1hY2lvbixcclxuICAgICAgICBndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbixcclxuXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VWZXJQcm9ncmFtYWNpb247Il0sInNvdXJjZVJvb3QiOiIifQ==