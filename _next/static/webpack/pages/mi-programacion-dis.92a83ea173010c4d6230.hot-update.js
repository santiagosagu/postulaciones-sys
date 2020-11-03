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
      var traerColegios = snapshot.docs.map(function (doc) {
        return _objectSpread({
          idColegiosDB: doc.id
        }, doc.data());
      });
      guardarColegiosDB(traerColegios);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVmVyUHJvZ3JhbWFjaW9uLmpzIl0sIm5hbWVzIjpbInVzZVZlclByb2dyYW1hY2lvbiIsInVzZVN0YXRlIiwidmVyUHJvZ3JhbWFjaW9uIiwibW9zdHJhclByb2dyYW1hY2lvbiIsImd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uIiwidXNlQ29udGV4dCIsIkZpcmViYXNlQ29udGV4dCIsImZpcmViYXNlIiwidXN1YXJpbyIsInVzZUVmZmVjdCIsIm9idGVuZXJDb2xlZ2lvcyIsImRiIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsInRyYWVyQ29sZWdpb3MiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWRDb2xlZ2lvc0RCIiwiaWQiLCJkYXRhIiwiZ3VhcmRhckNvbGVnaW9zREIiLCJjYW1iaWFyRXN0YWRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQUE7O0FBQUEsa0JBRTZCQyxzREFBUSxDQUFDO0FBQy9EQyxtQkFBZSxFQUFFO0FBRDhDLEdBQUQsQ0FGckM7QUFBQSxNQUV0QkMsbUJBRnNCO0FBQUEsTUFFREMsMEJBRkMsaUJBTTdCOzs7QUFONkIsb0JBT0NDLHdEQUFVLENBQUNDLHlEQUFELENBUFg7QUFBQSxNQU9yQkMsUUFQcUIsZUFPckJBLFFBUHFCO0FBQUEsTUFPWEMsT0FQVyxlQU9YQSxPQVBXLEVBUzdCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCSCxjQUFRLENBQUNJLEVBQVQsQ0FBWUMsVUFBWixDQUF1QixxQkFBdkIsRUFBOENDLFVBQTlDLENBQXlEQyxlQUF6RDtBQUNILEtBRkQ7O0FBSUFKLG1CQUFlOztBQUVmLGFBQVNJLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQy9CLFVBQU1DLGFBQWEsR0FBR0QsUUFBUSxDQUFDRSxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO0FBQzNDO0FBQ0lDLHNCQUFZLEVBQUVELEdBQUcsQ0FBQ0U7QUFEdEIsV0FFT0YsR0FBRyxDQUFDRyxJQUFKLEVBRlA7QUFJSCxPQUxxQixDQUF0QjtBQU1BQyx1QkFBaUIsQ0FBQ1AsYUFBRCxDQUFqQjtBQUVIO0FBQ0osR0FqQlEsRUFpQk4sRUFqQk0sQ0FBVDs7QUFvQkEsTUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLFFBQUlyQixtQkFBbUIsQ0FBQ0QsZUFBeEIsRUFBeUMsQ0FHeEMsQ0FIRCxNQUdPO0FBQ0g7QUFFSDtBQUNKLEdBUkQ7O0FBVUFzQixlQUFhO0FBRWIsU0FBTztBQUNIckIsdUJBQW1CLEVBQW5CQSxtQkFERztBQUVIQyw4QkFBMEIsRUFBMUJBO0FBRkcsR0FBUDtBQUtILENBL0NEOztHQUFNSixrQjs7QUFpRFNBLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21pLXByb2dyYW1hY2lvbi1kaXMuOTJhODNlYTE3MzAxMGM0ZDYyMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlyZWJhc2VDb250ZXh0IGZyb20gJy4uL2ZpcmViYXNlL2NvbnRleHQnXHJcblxyXG5jb25zdCB1c2VWZXJQcm9ncmFtYWNpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21vc3RyYXJQcm9ncmFtYWNpb24sIGd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB2ZXJQcm9ncmFtYWNpb246IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHRyYWVtb3MgbGFzIGZ1bmNpb25lcyBkZSBmaXJlYmFzZVxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgQ29sZWdpb3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lckNvbGVnaW9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdtb3N0cmFycHJvZ3JhbWFjaW9uJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyQ29sZWdpb3MoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhZXJDb2xlZ2lvcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkQ29sZWdpb3NEQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhckNvbGVnaW9zREIodHJhZXJDb2xlZ2lvcylcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIGNvbnN0IGNhbWJpYXJFc3RhZG8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vc3RyYXJQcm9ncmFtYWNpb24udmVyUHJvZ3JhbWFjaW9uKSB7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbWJpYXJFc3RhZG8oKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbW9zdHJhclByb2dyYW1hY2lvbixcclxuICAgICAgICBndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbixcclxuXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VWZXJQcm9ncmFtYWNpb247Il0sInNvdXJjZVJvb3QiOiIifQ==