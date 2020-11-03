webpackHotUpdate_N_E("pages/mi-programacion-dis",{

/***/ "./pages/mi-programacion-dis.js":
/*!**************************************!*\
  !*** ./pages/mi-programacion-dis.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _firebase_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/context */ "./firebase/context.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _hooks_useVerProgramacion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useVerProgramacion */ "./hooks/useVerProgramacion.js");




var _jsxFileName = "D:\\PROYECTOS\\postulaciones\\pages\\mi-programacion-dis.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\n    padding: 1rem;\n\n    @media (min-width: 768px ) {\n        margin: 5rem 8rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Contenedor = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c = Contenedor;

var MiProgramacionDis = function MiProgramacionDis() {
  _s();

  //state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      programacionDB = _useState[0],
      guardarProgramacionDB = _useState[1]; //state asignacines completas


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      asignaciones = _useState2[0],
      guardarAsignaciones = _useState2[1]; //state que trae las programaciones por usuario.uid


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      miProgramacion = _useState3[0],
      guardarMiProgramacion = _useState3[1]; //prueba


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      prueba = _useState4[0],
      guardarPrueba = _useState4[1]; //state mostrar


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      mostrar = _useState5[0],
      guardarMostrar = _useState5[1]; // traemos las funciones de firebase


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_firebase_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario; // traemos use ver programacion


  var _useVerProgramacion = Object(_hooks_useVerProgramacion__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      mostrarProgramacion = _useVerProgramacion.mostrarProgramacion; // effect que guarda cuando se pueda mostrar la programacion


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var mostrarFn = function mostrarFn() {
      if (mostrarProgramacion) {
        guardarMostrar(true);
        console.log('Se muestra');
      } else {
        guardarMostrar(false);
        console.log('No se Muestra');
      }
    };

    mostrarFn();
  }, [mostrarProgramacion]); //effect que verifica la programacion por id

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (usuario) {
      var funcionPrueba = function funcionPrueba() {
        var resultado = asignaciones.filter(function (asignacion) {
          return asignacion.datos.idUsuario === usuario.uid;
        });
        guardarPrueba(resultado);
        resultado.map(function (result) {
          var idResutado = result.idSede;
          var resultado2 = programacionDB.filter(function (programacion) {
            return programacion.idProgramacionDB === idResutado;
          });
          guardarMiProgramacion(resultado2);
          console.log(resultado2);
        });
      };

      funcionPrueba();
    }
  }, [programacionDB, asignaciones]); //traer todas las Programaciones

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var obtenerProgramaciones = function obtenerProgramaciones() {
      firebase.db.collection('programacion').orderBy('fecha', 'asc').onSnapshot(manejarSnapshot);
    };

    obtenerProgramaciones();

    function manejarSnapshot(snapshot) {
      var traerProgramacion = snapshot.docs.map(function (doc) {
        return _objectSpread({
          idProgramacionDB: doc.id
        }, doc.data());
      });
      guardarProgramacionDB(traerProgramacion);
    }
  }, []); //traer todas las asignaciones

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var obtenerProgramaciones = function obtenerProgramaciones() {
      firebase.db.collection('asignacion').onSnapshot(manejarSnapshot);
    };

    obtenerProgramaciones();

    function manejarSnapshot(snapshot) {
      var traerProgramacion = snapshot.docs.map(function (doc) {
        return _objectSpread({
          idAsignacionesDB: doc.id
        }, doc.data());
      });
      guardarAsignaciones(traerProgramacion);
    }
  }, []);
  console.log(miProgramacion);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Contenedor, {
      className: "row row-cols-1 row-cols-md-3",
      children: mostrarProgramacion[0] === undefined ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "row row-cols-1 row-cols-md-3",
        children: mostrarProgramacion[0].verProgramacion === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
          children: "Aun No se ha Publicado la Programacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 27
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: prueba.map(function (result) {
            var idResutado = result.idSede;
            var resultado2 = programacionDB.filter(function (programacion) {
              return programacion.idProgramacionDB === idResutado;
            });

            if (resultado2.length === 0) {
              return;
            }

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "col mb-4 ",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  "class": "card-header  border-primary alert-secondary",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
                    className: "card-title",
                    children: resultado2[0].institucion
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 106
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 49
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "card h-100 alert-primary",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "card-body",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                      className: "card-text",
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "alert-link",
                        children: "fecha de Recibo:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 83
                      }, _this), "  ", resultado2[0].fecha]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 57
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                      className: "card-text",
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "alert-link",
                        children: "Zona:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 83
                      }, _this), "  ", resultado2[0].zona]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 57
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                      className: "card-text",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "alert-link",
                        children: "Cupos:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 82
                      }, _this), "  ", resultado2[0].cupos]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 57
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                      className: "card-text",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "alert-link",
                        children: "Supervisor:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 162,
                        columnNumber: 82
                      }, _this), " ", resultado2[0].supervisor[0].nombre]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 57
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 53
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 49
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 41
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 27
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 25
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 9
  }, _this);
};

_s(MiProgramacionDis, "4eU6q7W6PdQXp821kymiCf/EwQ4=", false, function () {
  return [_hooks_useVerProgramacion__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c2 = MiProgramacionDis;
/* harmony default export */ __webpack_exports__["default"] = (MiProgramacionDis);

var _c, _c2;

$RefreshReg$(_c, "Contenedor");
$RefreshReg$(_c2, "MiProgramacionDis");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWktcHJvZ3JhbWFjaW9uLWRpcy5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yIiwic3R5bGVkIiwiZGl2IiwiTWlQcm9ncmFtYWNpb25EaXMiLCJ1c2VTdGF0ZSIsInByb2dyYW1hY2lvbkRCIiwiZ3VhcmRhclByb2dyYW1hY2lvbkRCIiwiYXNpZ25hY2lvbmVzIiwiZ3VhcmRhckFzaWduYWNpb25lcyIsIm1pUHJvZ3JhbWFjaW9uIiwiZ3VhcmRhck1pUHJvZ3JhbWFjaW9uIiwicHJ1ZWJhIiwiZ3VhcmRhclBydWViYSIsIm1vc3RyYXIiLCJndWFyZGFyTW9zdHJhciIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJ1c2VWZXJQcm9ncmFtYWNpb24iLCJtb3N0cmFyUHJvZ3JhbWFjaW9uIiwidXNlRWZmZWN0IiwibW9zdHJhckZuIiwiY29uc29sZSIsImxvZyIsImZ1bmNpb25QcnVlYmEiLCJyZXN1bHRhZG8iLCJmaWx0ZXIiLCJhc2lnbmFjaW9uIiwiZGF0b3MiLCJpZFVzdWFyaW8iLCJ1aWQiLCJtYXAiLCJyZXN1bHQiLCJpZFJlc3V0YWRvIiwiaWRTZWRlIiwicmVzdWx0YWRvMiIsInByb2dyYW1hY2lvbiIsImlkUHJvZ3JhbWFjaW9uREIiLCJvYnRlbmVyUHJvZ3JhbWFjaW9uZXMiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwidHJhZXJQcm9ncmFtYWNpb24iLCJkb2NzIiwiZG9jIiwiaWQiLCJkYXRhIiwiaWRBc2lnbmFjaW9uZXNEQiIsInVuZGVmaW5lZCIsInZlclByb2dyYW1hY2lvbiIsImxlbmd0aCIsImluc3RpdHVjaW9uIiwiZmVjaGEiLCJ6b25hIiwiY3Vwb3MiLCJzdXBlcnZpc29yIiwibm9tYnJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBLG1EQUEwQjtBQUFNLGlDQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQTFCLFFBQXNFcEIsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjcUIsSUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKLGVBR0k7QUFBRywrQkFBUyxFQUFDLFdBQWI7QUFBQSw4Q0FBeUI7QUFBTSxpQ0FBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUF6QixRQUFzRXJCLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY3NCLEtBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFISixlQUlJO0FBQUcsK0JBQVMsRUFBQyxXQUFiO0FBQUEsOENBQXlCO0FBQU0saUNBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBekIsT0FBMEV0QixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWN1QixVQUFkLENBQXlCLENBQXpCLEVBQTRCQyxNQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBb0JILFdBN0JEO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0RILENBMUtEOztHQUFNekQsaUI7VUFxQjhCZ0IsaUU7OztNQXJCOUJoQixpQjtBQTRLU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWktcHJvZ3JhbWFjaW9uLWRpcy4wNjQ3NmM1YzRmMGNjZDlhYzI3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBGaXJlYmFzZUNvbnRleHQgZnJvbSAnLi4vZmlyZWJhc2UvY29udGV4dCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCB1c2VWZXJQcm9ncmFtYWNpb24gZnJvbSAnLi4vaG9va3MvdXNlVmVyUHJvZ3JhbWFjaW9uJ1xyXG5cclxuY29uc3QgQ29udGVuZWRvciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHggKSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cmVtIDhyZW07XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IE1pUHJvZ3JhbWFjaW9uRGlzID0gKCkgPT4ge1xyXG5cclxuICAgIC8vc3RhdGVcclxuICAgIGNvbnN0IFtwcm9ncmFtYWNpb25EQiwgZ3VhcmRhclByb2dyYW1hY2lvbkRCXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vc3RhdGUgYXNpZ25hY2luZXMgY29tcGxldGFzXHJcbiAgICBjb25zdCBbYXNpZ25hY2lvbmVzLCBndWFyZGFyQXNpZ25hY2lvbmVzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vc3RhdGUgcXVlIHRyYWUgbGFzIHByb2dyYW1hY2lvbmVzIHBvciB1c3VhcmlvLnVpZFxyXG4gICAgY29uc3QgW21pUHJvZ3JhbWFjaW9uLCBndWFyZGFyTWlQcm9ncmFtYWNpb25dID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9wcnVlYmFcclxuICAgIGNvbnN0IFtwcnVlYmEsIGd1YXJkYXJQcnVlYmFdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9zdGF0ZSBtb3N0cmFyXHJcbiAgICBjb25zdCBbbW9zdHJhciwgZ3VhcmRhck1vc3RyYXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gdHJhZW1vcyBsYXMgZnVuY2lvbmVzIGRlIGZpcmViYXNlXHJcbiAgICBjb25zdCB7IGZpcmViYXNlLCB1c3VhcmlvIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dClcclxuXHJcbiAgICAvLyB0cmFlbW9zIHVzZSB2ZXIgcHJvZ3JhbWFjaW9uXHJcbiAgICBjb25zdCB7IG1vc3RyYXJQcm9ncmFtYWNpb24gfSA9IHVzZVZlclByb2dyYW1hY2lvbigpXHJcblxyXG5cclxuICAgIC8vIGVmZmVjdCBxdWUgZ3VhcmRhIGN1YW5kbyBzZSBwdWVkYSBtb3N0cmFyIGxhIHByb2dyYW1hY2lvblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBtb3N0cmFyRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtb3N0cmFyUHJvZ3JhbWFjaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBndWFyZGFyTW9zdHJhcih0cnVlKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlIG11ZXN0cmEnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3VhcmRhck1vc3RyYXIoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc2UgTXVlc3RyYScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1vc3RyYXJGbigpXHJcbiAgICB9LCBbbW9zdHJhclByb2dyYW1hY2lvbl0pXHJcblxyXG5cclxuICAgIC8vZWZmZWN0IHF1ZSB2ZXJpZmljYSBsYSBwcm9ncmFtYWNpb24gcG9yIGlkXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c3VhcmlvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bmNpb25QcnVlYmEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhc2lnbmFjaW9uZXMuZmlsdGVyKGFzaWduYWNpb24gPT4gYXNpZ25hY2lvbi5kYXRvcy5pZFVzdWFyaW8gPT09IHVzdWFyaW8udWlkKVxyXG5cclxuICAgICAgICAgICAgICAgIGd1YXJkYXJQcnVlYmEocmVzdWx0YWRvKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0YWRvLm1hcChyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkUmVzdXRhZG8gPSByZXN1bHQuaWRTZWRlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbzIgPSBwcm9ncmFtYWNpb25EQi5maWx0ZXIocHJvZ3JhbWFjaW9uID0+IHByb2dyYW1hY2lvbi5pZFByb2dyYW1hY2lvbkRCID09PSBpZFJlc3V0YWRvKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJNaVByb2dyYW1hY2lvbihyZXN1bHRhZG8yKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRhZG8yKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jaW9uUHJ1ZWJhKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW3Byb2dyYW1hY2lvbkRCLCBhc2lnbmFjaW9uZXNdKVxyXG5cclxuXHJcblxyXG4gICAgLy90cmFlciB0b2RhcyBsYXMgUHJvZ3JhbWFjaW9uZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2dyYW1hY2lvbmVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9ncmFtYWNpb24nKS5vcmRlckJ5KCdmZWNoYScsICdhc2MnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9idGVuZXJQcm9ncmFtYWNpb25lcygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFlclByb2dyYW1hY2lvbiA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkUHJvZ3JhbWFjaW9uREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb25EQih0cmFlclByb2dyYW1hY2lvbilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy90cmFlciB0b2RhcyBsYXMgYXNpZ25hY2lvbmVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9ncmFtYWNpb25lcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbignYXNpZ25hY2lvbicpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2dyYW1hY2lvbmVzKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyUHJvZ3JhbWFjaW9uID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRBc2lnbmFjaW9uZXNEQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhckFzaWduYWNpb25lcyh0cmFlclByb2dyYW1hY2lvbilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc29sZS5sb2cobWlQcm9ncmFtYWNpb24pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q29udGVuZWRvciBjbGFzc05hbWU9XCJyb3cgcm93LWNvbHMtMSByb3ctY29scy1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICB7bW9zdHJhclByb2dyYW1hY2lvbi5bMF0gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIDogICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctY29scy0xIHJvdy1jb2xzLW1kLTNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge21vc3RyYXJQcm9ncmFtYWNpb25bMF0udmVyUHJvZ3JhbWFjaW9uID09PSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxoMj5BdW4gTm8gc2UgaGEgUHVibGljYWRvIGxhIFByb2dyYW1hY2lvbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJ1ZWJhLm1hcChyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZFJlc3V0YWRvID0gcmVzdWx0LmlkU2VkZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvMiA9IHByb2dyYW1hY2lvbkRCLmZpbHRlcihwcm9ncmFtYWNpb24gPT4gcHJvZ3JhbWFjaW9uLmlkUHJvZ3JhbWFjaW9uREIgPT09IGlkUmVzdXRhZG8pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0YWRvMi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1iLTQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciAgYm9yZGVyLXByaW1hcnkgYWxlcnQtc2Vjb25kYXJ5XCI+PGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cmVzdWx0YWRvMlswXS5pbnN0aXR1Y2lvbn08L2g1PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDAgYWxlcnQtcHJpbWFyeVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+IDxzcGFuIGNsYXNzTmFtZT1cImFsZXJ0LWxpbmtcIj5mZWNoYSBkZSBSZWNpYm86PC9zcGFuPiAge3Jlc3VsdGFkbzJbMF0uZmVjaGF9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPiA8c3BhbiBjbGFzc05hbWU9XCJhbGVydC1saW5rXCI+Wm9uYTo8L3NwYW4+ICB7cmVzdWx0YWRvMlswXS56b25hfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj48c3BhbiBjbGFzc05hbWU9XCJhbGVydC1saW5rXCI+Q3Vwb3M6PC9zcGFuPiAge3Jlc3VsdGFkbzJbMF0uY3Vwb3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxzcGFuIGNsYXNzTmFtZT1cImFsZXJ0LWxpbmtcIj5TdXBlcnZpc29yOjwvc3Bhbj4ge3Jlc3VsdGFkbzJbMF0uc3VwZXJ2aXNvclswXS5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8L0NvbnRlbmVkb3I+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaVByb2dyYW1hY2lvbkRpczsiXSwic291cmNlUm9vdCI6IiJ9