webpackHotUpdate_N_E("pages/mi-programacion-sup",{

/***/ "./pages/mi-programacion-sup.js":
/*!**************************************!*\
  !*** ./pages/mi-programacion-sup.js ***!
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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "D:\\PROYECTOS\\postulaciones\\pages\\mi-programacion-sup.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #e1e1e1;\n    background-color:  #fff3cd;\n    color: #856404;\n    border-color: #ffeeba;\n    margin-bottom: 0.5rem;\n    \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #e1e1e1;\n    color: #0c5460;\n    background-color: #d1ecf1;\n    border-color: #bee5eb;\n    margin-bottom: 0.5rem;\n    \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    background: #e1e1e1;\n    \n    text-align: center;\n    align-items: center;\n    padding: 1rem;\n    margin: 1rem 0.5rem;\n\n    @media (min-width: 768px) {\n        width: 60rem;\n        margin: 5rem auto;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Contenedor = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c = Contenedor;
var ListaFlex = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].li(_templateObject2());
_c2 = ListaFlex;
var ListaFlexPendiente = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].li(_templateObject3());
_c3 = ListaFlexPendiente;

var MiProgramacionSup = function MiProgramacionSup() {
  _s();

  //state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      programacionDB = _useState[0],
      guardarProgramacionDB = _useState[1]; // traemos las funciones de firebase


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_firebase_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario; //traer todas las Programaciones


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
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var filtrarSupervisor = programacionDB.filter(function (programacion) {
      return programacion.supervisor[0].id === usuario.uid;
    });
    console.log(filtrarSupervisor);
  }, [programacionDB]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Contenedor, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Programacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this), programacionDB.map(function (sede) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "card my-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "card-header",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["Fecha despacho: ", sede.fecha, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
              className: "card-title",
              children: sede.institucion
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: "Zona: Castilla"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["Supervisor: ", sede.supervisor[0].nombre]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["cupos: ", sede.cupos]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, _this), !sede.asignacion || sede.asignacion.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  className: "btn btn-success mx-1",
                  "data-toggle": "collapse",
                  href: "#".concat(sede.idProgramacionDB),
                  role: "button",
                  "aria-expanded": "false",
                  "aria-controls": "collapseExample",
                  children: "Asignadas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  className: "btn btn-warning",
                  "data-toggle": "collapse",
                  href: "#".concat(sede.idProgramacionDB, "1"),
                  role: "button",
                  "aria-expanded": "false",
                  "aria-controls": "collapseExample",
                  children: "Pendientes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "collapse",
                id: sede.idProgramacionDB,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "card card-body",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                    className: "list-group list-group-flush",
                    children: sede.asignacion.map(function (asignacion) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ListaFlex, {
                        className: "list-group-item",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                          children: asignacion.datos.nombre
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 110,
                          columnNumber: 125
                        }, _this)
                      }, asignacion.datos.idUsuario, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 53
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "collapse",
                id: "".concat(sede.idProgramacionDB, "1"),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "card card-body",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                    className: "list-group list-group-flush",
                    children: sede.pendientes.map(function (pendiente) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ListaFlexPendiente, {
                        className: "list-group-item alert",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                          children: pendiente.datos.nombre
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 120,
                          columnNumber: 139
                        }, _this)
                      }, pendiente.datos.idUsuario, false, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 53
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 37
              }, _this)]
            }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "btn btn-danger",
              onClick: function onClick() {
                return postular(sede.idProgramacionDB, sede.cantidaddistribuidoras);
              },
              children: "Postularte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this)]
        }, sede.idProgramacionDB, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }, _this);
};

_s(MiProgramacionSup, "OJmuFMRfz5jZsTB4J42e0C18Z7Q=");

_c4 = MiProgramacionSup;
/* harmony default export */ __webpack_exports__["default"] = (MiProgramacionSup);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Contenedor");
$RefreshReg$(_c2, "ListaFlex");
$RefreshReg$(_c3, "ListaFlexPendiente");
$RefreshReg$(_c4, "MiProgramacionSup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWktcHJvZ3JhbWFjaW9uLXN1cC5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yIiwic3R5bGVkIiwiZGl2IiwiTGlzdGFGbGV4IiwibGkiLCJMaXN0YUZsZXhQZW5kaWVudGUiLCJNaVByb2dyYW1hY2lvblN1cCIsInVzZVN0YXRlIiwicHJvZ3JhbWFjaW9uREIiLCJndWFyZGFyUHJvZ3JhbWFjaW9uREIiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c3VhcmlvIiwidXNlRWZmZWN0Iiwib2J0ZW5lclByb2dyYW1hY2lvbmVzIiwiZGIiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsInRyYWVyUHJvZ3JhbWFjaW9uIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkUHJvZ3JhbWFjaW9uREIiLCJpZCIsImRhdGEiLCJmaWx0cmFyU3VwZXJ2aXNvciIsImZpbHRlciIsInByb2dyYW1hY2lvbiIsInN1cGVydmlzb3IiLCJ1aWQiLCJjb25zb2xlIiwibG9nIiwic2VkZSIsImZlY2hhIiwiaW5zdGl0dWNpb24iLCJub21icmUiLCJjdXBvcyIsImNhbnRpZGFkZGlzdHJpYnVpZG9yYXMiLCJhc2lnbmFjaW9uIiwibGVuZ3RoIiwiZGF0b3MiLCJpZFVzdWFyaW8iLCJwZW5kaWVudGVzIiwicGVuZGllbnRlIiwicG9zdHVsYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7S0FBTUYsVTtBQWFOLElBQU1HLFNBQVMsR0FBR0YsdURBQU0sQ0FBQ0csRUFBVixvQkFBZjtNQUFNRCxTO0FBV04sSUFBTUUsa0JBQWtCLEdBQUdKLHVEQUFNLENBQUNHLEVBQVYsb0JBQXhCO01BQU1DLGtCOztBQVdOLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUU1QjtBQUY0QixrQkFHb0JDLHNEQUFRLENBQUMsRUFBRCxDQUg1QjtBQUFBLE1BR3JCQyxjQUhxQjtBQUFBLE1BR0xDLHFCQUhLLGlCQUszQjs7O0FBTDJCLG9CQU1HQyx3REFBVSxDQUFDQyx5REFBRCxDQU5iO0FBQUEsTUFNbkJDLFFBTm1CLGVBTW5CQSxRQU5tQjtBQUFBLE1BTVRDLE9BTlMsZUFNVEEsT0FOUyxFQVEzQjs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNoQ0gsY0FBUSxDQUFDSSxFQUFULENBQVlDLFVBQVosQ0FBdUIsY0FBdkIsRUFBdUNDLE9BQXZDLENBQStDLE9BQS9DLEVBQXdELEtBQXhELEVBQStEQyxVQUEvRCxDQUEwRUMsZUFBMUU7QUFDSCxLQUZEOztBQUlBTCx5QkFBcUI7O0FBRXJCLGFBQVNLLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQy9CLFVBQU1DLGlCQUFpQixHQUFHRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHLEVBQUk7QUFDL0M7QUFDSUMsMEJBQWdCLEVBQUVELEdBQUcsQ0FBQ0U7QUFEMUIsV0FFT0YsR0FBRyxDQUFDRyxJQUFKLEVBRlA7QUFJSCxPQUx5QixDQUExQjtBQU1BbkIsMkJBQXFCLENBQUNhLGlCQUFELENBQXJCO0FBRUg7QUFDSixHQWpCUSxFQWlCTixFQWpCTSxDQUFUO0FBbUJBUix5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNZSxpQkFBaUIsR0FBR3JCLGNBQWMsQ0FBQ3NCLE1BQWYsQ0FBc0IsVUFBQUMsWUFBWTtBQUFBLGFBQUlBLFlBQVksQ0FBQ0MsVUFBYixDQUF3QixDQUF4QixFQUEyQkwsRUFBM0IsS0FBa0NkLE9BQU8sQ0FBQ29CLEdBQTlDO0FBQUEsS0FBbEMsQ0FBMUI7QUFFQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlOLGlCQUFaO0FBQ0gsR0FKUSxFQUlOLENBQUNyQixjQUFELENBSk0sQ0FBVDtBQU1ELHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0kscUVBQUMsVUFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS0EsY0FBYyxDQUFDZ0IsR0FBZixDQUFtQixVQUFBWSxJQUFJO0FBQUEsNEJBQ3BCO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsV0FBYjtBQUFBLDZDQUEwQ0EsSUFBSSxDQUFDQyxLQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUk7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxvQ0FDSTtBQUFJLHVCQUFTLEVBQUMsWUFBZDtBQUFBLHdCQUE0QkQsSUFBSSxDQUFDRTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBRyx1QkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFJSTtBQUFHLHVCQUFTLEVBQUMsV0FBYjtBQUFBLHlDQUFzQ0YsSUFBSSxDQUFDSixVQUFMLENBQWdCLENBQWhCLEVBQW1CTyxNQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFLSTtBQUFHLHVCQUFTLEVBQUMsV0FBYjtBQUFBLG9DQUFpQ0gsSUFBSSxDQUFDSSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEosZUFNSTtBQUFHLHVCQUFTLEVBQUMsV0FBYjtBQUFBLHNEQUFtREosSUFBSSxDQUFDSyxzQkFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KLEVBUUssQ0FBQ0wsSUFBSSxDQUFDTSxVQUFOLElBQW9CTixJQUFJLENBQUNNLFVBQUwsQ0FBZ0JDLE1BQWhCLEtBQTJCLENBQS9DLEdBQ0ssSUFETCxnQkFHRztBQUFBLHNDQUNJO0FBQUEsd0NBQ0k7QUFBRywyQkFBUyxFQUFDLHNCQUFiO0FBQW9DLGlDQUFZLFVBQWhEO0FBQTJELHNCQUFJLGFBQU1QLElBQUksQ0FBQ1YsZ0JBQVgsQ0FBL0Q7QUFBOEYsc0JBQUksRUFBQyxRQUFuRztBQUE0RyxtQ0FBYyxPQUExSDtBQUFrSSxtQ0FBYyxpQkFBaEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFJSTtBQUFHLDJCQUFTLEVBQUMsaUJBQWI7QUFBK0IsaUNBQVksVUFBM0M7QUFBc0Qsc0JBQUksYUFBTVUsSUFBSSxDQUFDVixnQkFBWCxNQUExRDtBQUEwRixzQkFBSSxFQUFDLFFBQS9GO0FBQXdHLG1DQUFjLE9BQXRIO0FBQThILG1DQUFjLGlCQUE1STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFTSTtBQUFLLHlCQUFTLEVBQUMsVUFBZjtBQUEwQixrQkFBRSxFQUFFVSxJQUFJLENBQUNWLGdCQUFuQztBQUFBLHVDQUNJO0FBQUssMkJBQVMsRUFBQyxnQkFBZjtBQUFBLHlDQUNJO0FBQUksNkJBQVMsRUFBQyw2QkFBZDtBQUFBLDhCQUNLVSxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JsQixHQUFoQixDQUFvQixVQUFBa0IsVUFBVTtBQUFBLDBDQUMzQixxRUFBQyxTQUFEO0FBQVcsaUNBQVMsRUFBQyxpQkFBckI7QUFBQSwrQ0FBd0U7QUFBQSxvQ0FBSUEsVUFBVSxDQUFDRSxLQUFYLENBQWlCTDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhFLHlCQUE0Q0csVUFBVSxDQUFDRSxLQUFYLENBQWlCQyxTQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUQyQjtBQUFBLHFCQUE5QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFUSixlQW1CSTtBQUFLLHlCQUFTLEVBQUMsVUFBZjtBQUEwQixrQkFBRSxZQUFLVCxJQUFJLENBQUNWLGdCQUFWLE1BQTVCO0FBQUEsdUNBQ0k7QUFBSywyQkFBUyxFQUFDLGdCQUFmO0FBQUEseUNBQ0k7QUFBSSw2QkFBUyxFQUFDLDZCQUFkO0FBQUEsOEJBQ0tVLElBQUksQ0FBQ1UsVUFBTCxDQUFnQnRCLEdBQWhCLENBQW9CLFVBQUF1QixTQUFTO0FBQUEsMENBQzFCLHFFQUFDLGtCQUFEO0FBQW9CLGlDQUFTLEVBQUMsdUJBQTlCO0FBQUEsK0NBQXNGO0FBQUEsb0NBQUlBLFNBQVMsQ0FBQ0gsS0FBVixDQUFnQkw7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0Rix5QkFBMkRRLFNBQVMsQ0FBQ0gsS0FBVixDQUFnQkMsU0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEMEI7QUFBQSxxQkFBN0I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkJKO0FBQUEsNEJBWFIsZUFrREk7QUFBRyx1QkFBUyxFQUFDLGdCQUFiO0FBQThCLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUcsUUFBUSxDQUFDWixJQUFJLENBQUNWLGdCQUFOLEVBQXdCVSxJQUFJLENBQUNLLHNCQUE3QixDQUFkO0FBQUEsZUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBLFdBQWdDTCxJQUFJLENBQUNWLGdCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURvQjtBQUFBLE9BQXZCLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0VILENBdEdEOztHQUFNcEIsaUI7O01BQUFBLGlCO0FBd0dTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9taS1wcm9ncmFtYWNpb24tc3VwLmExZGZhMzBhZjZkMTQzOTY4MmU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEZpcmViYXNlQ29udGV4dCBmcm9tICcuLi9maXJlYmFzZS9jb250ZXh0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcblxyXG5cclxuY29uc3QgQ29udGVuZWRvciA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW07XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDYwcmVtO1xyXG4gICAgICAgIG1hcmdpbjogNXJlbSBhdXRvO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IExpc3RhRmxleCA9IHN0eWxlZC5saWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIGNvbG9yOiAjMGM1NDYwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIFxyXG5gXHJcblxyXG5jb25zdCBMaXN0YUZsZXhQZW5kaWVudGUgPSBzdHlsZWQubGlgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZjNjZDtcclxuICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlZWJhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgXHJcbmBcclxuXHJcbmNvbnN0IE1pUHJvZ3JhbWFjaW9uU3VwID0gKCkgPT4ge1xyXG5cclxuICAgIC8vc3RhdGVcclxuICAgIGNvbnN0IFtwcm9ncmFtYWNpb25EQiwgZ3VhcmRhclByb2dyYW1hY2lvbkRCXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgICAvLyB0cmFlbW9zIGxhcyBmdW5jaW9uZXMgZGUgZmlyZWJhc2VcclxuICAgICBjb25zdCB7IGZpcmViYXNlLCB1c3VhcmlvIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dClcclxuXHJcbiAgICAgLy90cmFlciB0b2RhcyBsYXMgUHJvZ3JhbWFjaW9uZXNcclxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICBjb25zdCBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9ncmFtYWNpb24nKS5vcmRlckJ5KCdmZWNoYScsICdhc2MnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdClcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgIG9idGVuZXJQcm9ncmFtYWNpb25lcygpXHJcbiBcclxuICAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgICBjb25zdCB0cmFlclByb2dyYW1hY2lvbiA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWRQcm9ncmFtYWNpb25EQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb25EQih0cmFlclByb2dyYW1hY2lvbilcclxuIFxyXG4gICAgICAgICB9XHJcbiAgICAgfSwgW10pXHJcblxyXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgIGNvbnN0IGZpbHRyYXJTdXBlcnZpc29yID0gcHJvZ3JhbWFjaW9uREIuZmlsdGVyKHByb2dyYW1hY2lvbiA9PiBwcm9ncmFtYWNpb24uc3VwZXJ2aXNvclswXS5pZCA9PT0gdXN1YXJpby51aWQpXHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhmaWx0cmFyU3VwZXJ2aXNvcilcclxuICAgICB9LCBbcHJvZ3JhbWFjaW9uREJdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgICAgICA8aDI+UHJvZ3JhbWFjaW9uPC9oMj5cclxuICAgICAgICAgICAgICAgIHtwcm9ncmFtYWNpb25EQi5tYXAoc2VkZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG15LTNcIiBrZXk9e3NlZGUuaWRQcm9ncmFtYWNpb25EQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPkZlY2hhIGRlc3BhY2hvOiB7c2VkZS5mZWNoYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3NlZGUuaW5zdGl0dWNpb259PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlpvbmE6IENhc3RpbGxhPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlN1cGVydmlzb3I6IHtzZWRlLnN1cGVydmlzb3JbMF0ubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPmN1cG9zOiB7c2VkZS5jdXBvc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5jYW50aWRhZCBEaXN0cmlidWlkb3Jhczoge3NlZGUuY2FudGlkYWRkaXN0cmlidWlkb3Jhc308L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzZWRlLmFzaWduYWNpb24gfHwgc2VkZS5hc2lnbmFjaW9uLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBteC0xXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e2AjJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9YH0gcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBc2lnbmFkYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e2AjJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9MWB9IHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGllbnRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPXtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlZGUuYXNpZ25hY2lvbi5tYXAoYXNpZ25hY2lvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFGbGV4IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIGtleT17YXNpZ25hY2lvbi5kYXRvcy5pZFVzdWFyaW99PjxwPnthc2lnbmFjaW9uLmRhdG9zLm5vbWJyZX08L3A+PC9MaXN0YUZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9e2Ake3NlZGUuaWRQcm9ncmFtYWNpb25EQn0xYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VkZS5wZW5kaWVudGVzLm1hcChwZW5kaWVudGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RhRmxleFBlbmRpZW50ZSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gYWxlcnRcIiBrZXk9e3BlbmRpZW50ZS5kYXRvcy5pZFVzdWFyaW99PjxwPntwZW5kaWVudGUuZGF0b3Mubm9tYnJlfTwvcD48L0xpc3RhRmxleFBlbmRpZW50ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gcG9zdHVsYXIoc2VkZS5pZFByb2dyYW1hY2lvbkRCLCBzZWRlLmNhbnRpZGFkZGlzdHJpYnVpZG9yYXMpfT5Qb3N0dWxhcnRlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC9Db250ZW5lZG9yPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pUHJvZ3JhbWFjaW9uU3VwOyJdLCJzb3VyY2VSb290IjoiIn0=