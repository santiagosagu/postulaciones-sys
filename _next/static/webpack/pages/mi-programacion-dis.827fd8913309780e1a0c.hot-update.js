webpackHotUpdate_N_E("pages/mi-programacion-dis",{

/***/ "./hooks/useVerProgramacion.js":
/*!*************************************!*\
  !*** ./hooks/useVerProgramacion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/context */ "./firebase/context.js");


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var useVerProgramacion = function useVerProgramacion() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    verProgramacion: false
  }),
      mostrarProgramacion = _useState[0],
      guardarMostrarProgramacion = _useState[1]; // traemos las funciones de firebase


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_firebase_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario; //traer todos los Colegios


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var obtenerColegios = function obtenerColegios() {
      firebase.db.collection('mostrarprogramacion').onSnapshot(manejarSnapshot);
    };

    obtenerColegios();

    function manejarSnapshot(snapshot) {
      var traerMostrar = snapshot.docs.map(function (doc) {
        return _objectSpread({
          idMostrarDB: doc.id
        }, doc.data());
      });
      guardarMostrarProgramacion(traerMostrar);
    }
  }, []);

  var cambiarEstado = function cambiarEstado() {
    if (mostrarProgramacion.verProgramacion) {} else {
      return;
    }
  };

  cambiarEstado();
  return {
    mostrarProgramacion: mostrarProgramacion,
    guardarMostrarProgramacion: guardarMostrarProgramacion
  };
};

_s(useVerProgramacion, "zbZs166P+0DZHxR2krXSxNd5YWk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVmVyUHJvZ3JhbWFjaW9uLmpzIl0sIm5hbWVzIjpbInVzZVZlclByb2dyYW1hY2lvbiIsInVzZVN0YXRlIiwidmVyUHJvZ3JhbWFjaW9uIiwibW9zdHJhclByb2dyYW1hY2lvbiIsImd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uIiwidXNlQ29udGV4dCIsIkZpcmViYXNlQ29udGV4dCIsImZpcmViYXNlIiwidXN1YXJpbyIsInVzZUVmZmVjdCIsIm9idGVuZXJDb2xlZ2lvcyIsImRiIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsInRyYWVyTW9zdHJhciIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZE1vc3RyYXJEQiIsImlkIiwiZGF0YSIsImNhbWJpYXJFc3RhZG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFBQSxrQkFFNkJDLHNEQUFRLENBQUM7QUFDL0RDLG1CQUFlLEVBQUU7QUFEOEMsR0FBRCxDQUZyQztBQUFBLE1BRXRCQyxtQkFGc0I7QUFBQSxNQUVEQywwQkFGQyxpQkFNN0I7OztBQU42QixvQkFPQ0Msd0RBQVUsQ0FBQ0MseURBQUQsQ0FQWDtBQUFBLE1BT3JCQyxRQVBxQixlQU9yQkEsUUFQcUI7QUFBQSxNQU9YQyxPQVBXLGVBT1hBLE9BUFcsRUFTN0I7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUJILGNBQVEsQ0FBQ0ksRUFBVCxDQUFZQyxVQUFaLENBQXVCLHFCQUF2QixFQUE4Q0MsVUFBOUMsQ0FBeURDLGVBQXpEO0FBQ0gsS0FGRDs7QUFJQUosbUJBQWU7O0FBRWYsYUFBU0ksZUFBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDL0IsVUFBTUMsWUFBWSxHQUFHRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHLEVBQUk7QUFDMUM7QUFDSUMscUJBQVcsRUFBRUQsR0FBRyxDQUFDRTtBQURyQixXQUVPRixHQUFHLENBQUNHLElBQUosRUFGUDtBQUlILE9BTG9CLENBQXJCO0FBTUFsQixnQ0FBMEIsQ0FBQ1ksWUFBRCxDQUExQjtBQUVIO0FBQ0osR0FqQlEsRUFpQk4sRUFqQk0sQ0FBVDs7QUFvQkEsTUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLFFBQUlwQixtQkFBbUIsQ0FBQ0QsZUFBeEIsRUFBeUMsQ0FHeEMsQ0FIRCxNQUdPO0FBQ0g7QUFFSDtBQUNKLEdBUkQ7O0FBVUFxQixlQUFhO0FBRWIsU0FBTztBQUNIcEIsdUJBQW1CLEVBQW5CQSxtQkFERztBQUVIQyw4QkFBMEIsRUFBMUJBO0FBRkcsR0FBUDtBQUtILENBL0NEOztHQUFNSixrQjs7QUFpRFNBLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21pLXByb2dyYW1hY2lvbi1kaXMuODI3ZmQ4OTEzMzA5NzgwZTFhMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlyZWJhc2VDb250ZXh0IGZyb20gJy4uL2ZpcmViYXNlL2NvbnRleHQnXHJcblxyXG5jb25zdCB1c2VWZXJQcm9ncmFtYWNpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21vc3RyYXJQcm9ncmFtYWNpb24sIGd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB2ZXJQcm9ncmFtYWNpb246IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHRyYWVtb3MgbGFzIGZ1bmNpb25lcyBkZSBmaXJlYmFzZVxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgQ29sZWdpb3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lckNvbGVnaW9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdtb3N0cmFycHJvZ3JhbWFjaW9uJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyQ29sZWdpb3MoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhZXJNb3N0cmFyID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRNb3N0cmFyREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uKHRyYWVyTW9zdHJhcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIGNvbnN0IGNhbWJpYXJFc3RhZG8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vc3RyYXJQcm9ncmFtYWNpb24udmVyUHJvZ3JhbWFjaW9uKSB7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbWJpYXJFc3RhZG8oKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbW9zdHJhclByb2dyYW1hY2lvbixcclxuICAgICAgICBndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbixcclxuXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VWZXJQcm9ncmFtYWNpb247Il0sInNvdXJjZVJvb3QiOiIifQ==