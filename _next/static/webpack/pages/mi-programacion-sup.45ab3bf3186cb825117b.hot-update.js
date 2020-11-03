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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Contenedor, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Programacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
              lineNumber: 78,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
              className: "card-title",
              children: sede.institucion
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: "Zona: Castilla"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["Supervisor: ", sede.supervisor[0].nombre]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["cupos: ", sede.cupos]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
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
                  lineNumber: 93,
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
                  lineNumber: 96,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
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
                          lineNumber: 104,
                          columnNumber: 125
                        }, _this)
                      }, asignacion.datos.idUsuario, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 53
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
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
                          lineNumber: 114,
                          columnNumber: 139
                        }, _this)
                      }, pendiente.datos.idUsuario, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 53
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
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
              lineNumber: 130,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, _this)]
        }, sede.idProgramacionDB, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, _this);
};

_s(MiProgramacionSup, "NnAadQf8h9eBQwfgSyDSqCu4yA8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWktcHJvZ3JhbWFjaW9uLXN1cC5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yIiwic3R5bGVkIiwiZGl2IiwiTGlzdGFGbGV4IiwibGkiLCJMaXN0YUZsZXhQZW5kaWVudGUiLCJNaVByb2dyYW1hY2lvblN1cCIsInVzZVN0YXRlIiwicHJvZ3JhbWFjaW9uREIiLCJndWFyZGFyUHJvZ3JhbWFjaW9uREIiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c3VhcmlvIiwidXNlRWZmZWN0Iiwib2J0ZW5lclByb2dyYW1hY2lvbmVzIiwiZGIiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsInRyYWVyUHJvZ3JhbWFjaW9uIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkUHJvZ3JhbWFjaW9uREIiLCJpZCIsImRhdGEiLCJzZWRlIiwiZmVjaGEiLCJpbnN0aXR1Y2lvbiIsInN1cGVydmlzb3IiLCJub21icmUiLCJjdXBvcyIsImNhbnRpZGFkZGlzdHJpYnVpZG9yYXMiLCJhc2lnbmFjaW9uIiwibGVuZ3RoIiwiZGF0b3MiLCJpZFVzdWFyaW8iLCJwZW5kaWVudGVzIiwicGVuZGllbnRlIiwicG9zdHVsYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7S0FBTUYsVTtBQWFOLElBQU1HLFNBQVMsR0FBR0YsdURBQU0sQ0FBQ0csRUFBVixvQkFBZjtNQUFNRCxTO0FBV04sSUFBTUUsa0JBQWtCLEdBQUdKLHVEQUFNLENBQUNHLEVBQVYsb0JBQXhCO01BQU1DLGtCOztBQVdOLElBQU1DLGlCQUFpQixHQUFH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QVYsQ0FBZ0JMO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEYseUJBQTJEUSxTQUFTLENBQUNILEtBQVYsQ0FBZ0JDLFNBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRDBCO0FBQUEscUJBQTdCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQW5CSjtBQUFBLDRCQVhSLGVBa0RJO0FBQUcsdUJBQVMsRUFBQyxnQkFBYjtBQUE4QixxQkFBTyxFQUFFO0FBQUEsdUJBQU1HLFFBQVEsQ0FBQ2IsSUFBSSxDQUFDSCxnQkFBTixFQUF3QkcsSUFBSSxDQUFDTSxzQkFBN0IsQ0FBZDtBQUFBLGVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQSxXQUFnQ04sSUFBSSxDQUFDSCxnQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0I7QUFBQSxPQUF2QixDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9FSCxDQWhHRDs7R0FBTXBCLGlCOztNQUFBQSxpQjtBQWtHU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWktcHJvZ3JhbWFjaW9uLXN1cC40NWFiM2JmMzE4NmNiODI1MTE3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBGaXJlYmFzZUNvbnRleHQgZnJvbSAnLi4vZmlyZWJhc2UvY29udGV4dCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5cclxuXHJcbmNvbnN0IENvbnRlbmVkb3IgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2UxZTFlMTtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiA2MHJlbTtcclxuICAgICAgICBtYXJnaW46IDVyZW0gYXV0bztcclxuICAgIH1cclxuYFxyXG5jb25zdCBMaXN0YUZsZXggPSBzdHlsZWQubGlgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBjb2xvcjogIzBjNTQ2MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XHJcbiAgICBib3JkZXItY29sb3I6ICNiZWU1ZWI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBcclxuYFxyXG5cclxuY29uc3QgTGlzdGFGbGV4UGVuZGllbnRlID0gc3R5bGVkLmxpYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmYzY2Q7XHJcbiAgICBjb2xvcjogIzg1NjQwNDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIFxyXG5gXHJcblxyXG5jb25zdCBNaVByb2dyYW1hY2lvblN1cCA9ICgpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlXHJcbiAgICBjb25zdCBbcHJvZ3JhbWFjaW9uREIsIGd1YXJkYXJQcm9ncmFtYWNpb25EQl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAgLy8gdHJhZW1vcyBsYXMgZnVuY2lvbmVzIGRlIGZpcmViYXNlXHJcbiAgICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpXHJcblxyXG4gICAgIC8vdHJhZXIgdG9kYXMgbGFzIFByb2dyYW1hY2lvbmVzXHJcbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgY29uc3Qgb2J0ZW5lclByb2dyYW1hY2lvbmVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZ3JhbWFjaW9uJykub3JkZXJCeSgnZmVjaGEnLCAnYXNjJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMoKVxyXG4gXHJcbiAgICAgICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgICAgY29uc3QgdHJhZXJQcm9ncmFtYWNpb24gPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlkUHJvZ3JhbWFjaW9uREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICBndWFyZGFyUHJvZ3JhbWFjaW9uREIodHJhZXJQcm9ncmFtYWNpb24pXHJcbiBcclxuICAgICAgICAgfVxyXG4gICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgICAgICA8aDI+UHJvZ3JhbWFjaW9uPC9oMj5cclxuICAgICAgICAgICAgICAgIHtwcm9ncmFtYWNpb25EQi5tYXAoc2VkZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG15LTNcIiBrZXk9e3NlZGUuaWRQcm9ncmFtYWNpb25EQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPkZlY2hhIGRlc3BhY2hvOiB7c2VkZS5mZWNoYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3NlZGUuaW5zdGl0dWNpb259PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlpvbmE6IENhc3RpbGxhPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlN1cGVydmlzb3I6IHtzZWRlLnN1cGVydmlzb3JbMF0ubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPmN1cG9zOiB7c2VkZS5jdXBvc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5jYW50aWRhZCBEaXN0cmlidWlkb3Jhczoge3NlZGUuY2FudGlkYWRkaXN0cmlidWlkb3Jhc308L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzZWRlLmFzaWduYWNpb24gfHwgc2VkZS5hc2lnbmFjaW9uLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBteC0xXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e2AjJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9YH0gcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBc2lnbmFkYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e2AjJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9MWB9IHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGllbnRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPXtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlZGUuYXNpZ25hY2lvbi5tYXAoYXNpZ25hY2lvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFGbGV4IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIGtleT17YXNpZ25hY2lvbi5kYXRvcy5pZFVzdWFyaW99PjxwPnthc2lnbmFjaW9uLmRhdG9zLm5vbWJyZX08L3A+PC9MaXN0YUZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9e2Ake3NlZGUuaWRQcm9ncmFtYWNpb25EQn0xYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VkZS5wZW5kaWVudGVzLm1hcChwZW5kaWVudGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RhRmxleFBlbmRpZW50ZSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gYWxlcnRcIiBrZXk9e3BlbmRpZW50ZS5kYXRvcy5pZFVzdWFyaW99PjxwPntwZW5kaWVudGUuZGF0b3Mubm9tYnJlfTwvcD48L0xpc3RhRmxleFBlbmRpZW50ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gcG9zdHVsYXIoc2VkZS5pZFByb2dyYW1hY2lvbkRCLCBzZWRlLmNhbnRpZGFkZGlzdHJpYnVpZG9yYXMpfT5Qb3N0dWxhcnRlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC9Db250ZW5lZG9yPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pUHJvZ3JhbWFjaW9uU3VwOyJdLCJzb3VyY2VSb290IjoiIn0=