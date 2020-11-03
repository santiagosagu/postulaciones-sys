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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWktcHJvZ3JhbWFjaW9uLWRpcy5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yIiwic3R5bGVkIiwiZGl2IiwiTWlQcm9ncmFtYWNpb25EaXMiLCJ1c2VTdGF0ZSIsInByb2dyYW1hY2lvbkRCIiwiZ3VhcmRhclByb2dyYW1hY2lvbkRCIiwiYXNpZ25hY2lvbmVzIiwiZ3VhcmRhckFzaWduYWNpb25lcyIsIm1pUHJvZ3JhbWFjaW9uIiwiZ3VhcmRhck1pUHJvZ3JhbWFjaW9uIiwicHJ1ZWJhIiwiZ3VhcmRhclBydWViYSIsIm1vc3RyYXIiLCJndWFyZGFyTW9zdHJhciIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJ1c2VWZXJQcm9ncmFtYWNpb24iLCJtb3N0cmFyUHJvZ3JhbWFjaW9uIiwidXNlRWZmZWN0IiwibW9zdHJhckZuIiwiY29uc29sZSIsImxvZyIsImZ1bmNpb25QcnVlYmEiLCJyZXN1bHRhZG8iLCJmaWx0ZXIiLCJhc2lnbmFjaW9uIiwiZGF0b3MiLCJpZFVzdWFyaW8iLCJ1aWQiLCJtYXAiLCJyZXN1bHQiLCJpZFJlc3V0YWRvIiwiaWRTZWRlIiwicmVzdWx0YWRvMiIsInByb2dyYW1hY2lvbiIsImlkUHJvZ3JhbWFjaW9uREIiLCJvYnRlbmVyUHJvZ3JhbWFjaW9uZXMiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwidHJhZXJQcm9ncmFtYWNpb24iLCJkb2NzIiwiZG9jIiwiaWQiLCJkYXRhIiwiaWRBc2lnbmFjaW9uZXNEQiIsInVuZGVmaW5lZCIsInZlclByb2dyYW1hY2lvbiIsImxlbmd0aCIsImluc3RpdHVjaW9uIiwiZmVjaGEiLCJ6b25hIiwiY3Vwb3MiLCJzdXBlcnZpc29yIiwibm9tYnJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBMUIsUUFBc0VwQixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNxQixJQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkosZUFHSTtBQUFHLCtCQUFTLEVBQUMsV0FBYjtBQUFBLDhDQUF5QjtBQUFNLGlDQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQXpCLFFBQXNFckIsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjc0IsS0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhKLGVBSUk7QUFBRywrQkFBUyxFQUFDLFdBQWI7QUFBQSw4Q0FBeUI7QUFBTSxpQ0FBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUF6QixPQUEwRXRCLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY3VCLFVBQWQsQ0FBeUIsQ0FBekIsRUFBNEJDLE1BQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFvQkgsV0E3QkQ7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3REgsQ0ExS0Q7O0dBQU16RCxpQjtVQXFCOEJnQixpRTs7O01BckI5QmhCLGlCO0FBNEtTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9taS1wcm9ncmFtYWNpb24tZGlzLjVkM2Y2YWJiN2I5ZDI4NDkyOTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEZpcmViYXNlQ29udGV4dCBmcm9tICcuLi9maXJlYmFzZS9jb250ZXh0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHVzZVZlclByb2dyYW1hY2lvbiBmcm9tICcuLi9ob29rcy91c2VWZXJQcm9ncmFtYWNpb24nXHJcblxyXG5jb25zdCBDb250ZW5lZG9yID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCApIHtcclxuICAgICAgICBtYXJnaW46IDVyZW0gOHJlbTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgTWlQcm9ncmFtYWNpb25EaXMgPSAoKSA9PiB7XHJcblxyXG4gICAgLy9zdGF0ZVxyXG4gICAgY29uc3QgW3Byb2dyYW1hY2lvbkRCLCBndWFyZGFyUHJvZ3JhbWFjaW9uREJdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9zdGF0ZSBhc2lnbmFjaW5lcyBjb21wbGV0YXNcclxuICAgIGNvbnN0IFthc2lnbmFjaW9uZXMsIGd1YXJkYXJBc2lnbmFjaW9uZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9zdGF0ZSBxdWUgdHJhZSBsYXMgcHJvZ3JhbWFjaW9uZXMgcG9yIHVzdWFyaW8udWlkXHJcbiAgICBjb25zdCBbbWlQcm9ncmFtYWNpb24sIGd1YXJkYXJNaVByb2dyYW1hY2lvbl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3BydWViYVxyXG4gICAgY29uc3QgW3BydWViYSwgZ3VhcmRhclBydWViYV0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3N0YXRlIG1vc3RyYXJcclxuICAgIGNvbnN0IFttb3N0cmFyLCBndWFyZGFyTW9zdHJhcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyB0cmFlbW9zIGxhcyBmdW5jaW9uZXMgZGUgZmlyZWJhc2VcclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuICAgIC8vIHRyYWVtb3MgdXNlIHZlciBwcm9ncmFtYWNpb25cclxuICAgIGNvbnN0IHsgbW9zdHJhclByb2dyYW1hY2lvbiB9ID0gdXNlVmVyUHJvZ3JhbWFjaW9uKClcclxuXHJcblxyXG4gICAgLy8gZWZmZWN0IHF1ZSBndWFyZGEgY3VhbmRvIHNlIHB1ZWRhIG1vc3RyYXIgbGEgcHJvZ3JhbWFjaW9uXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vc3RyYXJGbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1vc3RyYXJQcm9ncmFtYWNpb24pIHtcclxuICAgICAgICAgICAgICAgIGd1YXJkYXJNb3N0cmFyKHRydWUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2UgbXVlc3RyYScpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBndWFyZGFyTW9zdHJhcihmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBzZSBNdWVzdHJhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW9zdHJhckZuKClcclxuICAgIH0sIFttb3N0cmFyUHJvZ3JhbWFjaW9uXSlcclxuXHJcblxyXG4gICAgLy9lZmZlY3QgcXVlIHZlcmlmaWNhIGxhIHByb2dyYW1hY2lvbiBwb3IgaWRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzdWFyaW8pIHtcclxuICAgICAgICAgICAgY29uc3QgZnVuY2lvblBydWViYSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGFzaWduYWNpb25lcy5maWx0ZXIoYXNpZ25hY2lvbiA9PiBhc2lnbmFjaW9uLmRhdG9zLmlkVXN1YXJpbyA9PT0gdXN1YXJpby51aWQpXHJcblxyXG4gICAgICAgICAgICAgICAgZ3VhcmRhclBydWViYShyZXN1bHRhZG8pXHJcbiAgICAgICAgICAgICAgICByZXN1bHRhZG8ubWFwKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWRSZXN1dGFkbyA9IHJlc3VsdC5pZFNlZGVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvMiA9IHByb2dyYW1hY2lvbkRCLmZpbHRlcihwcm9ncmFtYWNpb24gPT4gcHJvZ3JhbWFjaW9uLmlkUHJvZ3JhbWFjaW9uREIgPT09IGlkUmVzdXRhZG8pXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhck1pUHJvZ3JhbWFjaW9uKHJlc3VsdGFkbzIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdGFkbzIpXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmNpb25QcnVlYmEoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbcHJvZ3JhbWFjaW9uREIsIGFzaWduYWNpb25lc10pXHJcblxyXG5cclxuXHJcbiAgICAvL3RyYWVyIHRvZGFzIGxhcyBQcm9ncmFtYWNpb25lc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2dyYW1hY2lvbicpLm9yZGVyQnkoJ2ZlY2hhJywgJ2FzYycpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2dyYW1hY2lvbmVzKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyUHJvZ3JhbWFjaW9uID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRQcm9ncmFtYWNpb25EQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhclByb2dyYW1hY2lvbkRCKHRyYWVyUHJvZ3JhbWFjaW9uKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvL3RyYWVyIHRvZGFzIGxhcyBhc2lnbmFjaW9uZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2dyYW1hY2lvbmVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdhc2lnbmFjaW9uJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhZXJQcm9ncmFtYWNpb24gPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZEFzaWduYWNpb25lc0RCOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBndWFyZGFyQXNpZ25hY2lvbmVzKHRyYWVyUHJvZ3JhbWFjaW9uKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhtaVByb2dyYW1hY2lvbilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDb250ZW5lZG9yID5cclxuICAgICAgICAgICAgICAgIHttb3N0cmFyUHJvZ3JhbWFjaW9uLlswXSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgOiAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1jb2xzLTEgcm93LWNvbHMtbWQtM1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7bW9zdHJhclByb2dyYW1hY2lvblswXS52ZXJQcm9ncmFtYWNpb24gPT09IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGgyPkF1biBObyBzZSBoYSBQdWJsaWNhZG8gbGEgUHJvZ3JhbWFjaW9uPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcnVlYmEubWFwKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkUmVzdXRhZG8gPSByZXN1bHQuaWRTZWRlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRhZG8yID0gcHJvZ3JhbWFjaW9uREIuZmlsdGVyKHByb2dyYW1hY2lvbiA9PiBwcm9ncmFtYWNpb24uaWRQcm9ncmFtYWNpb25EQiA9PT0gaWRSZXN1dGFkbylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhZG8yLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWItNCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyICBib3JkZXItcHJpbWFyeSBhbGVydC1zZWNvbmRhcnlcIj48aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntyZXN1bHRhZG8yWzBdLmluc3RpdHVjaW9ufTwvaDU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMCBhbGVydC1wcmltYXJ5XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj4gPHNwYW4gY2xhc3NOYW1lPVwiYWxlcnQtbGlua1wiPmZlY2hhIGRlIFJlY2libzo8L3NwYW4+ICB7cmVzdWx0YWRvMlswXS5mZWNoYX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+IDxzcGFuIGNsYXNzTmFtZT1cImFsZXJ0LWxpbmtcIj5ab25hOjwvc3Bhbj4gIHtyZXN1bHRhZG8yWzBdLnpvbmF9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxzcGFuIGNsYXNzTmFtZT1cImFsZXJ0LWxpbmtcIj5DdXBvczo8L3NwYW4+ICB7cmVzdWx0YWRvMlswXS5jdXBvc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+PHNwYW4gY2xhc3NOYW1lPVwiYWxlcnQtbGlua1wiPlN1cGVydmlzb3I6PC9zcGFuPiB7cmVzdWx0YWRvMlswXS5zdXBlcnZpc29yWzBdLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvQ29udGVuZWRvcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pUHJvZ3JhbWFjaW9uRGlzOyJdLCJzb3VyY2VSb290IjoiIn0=