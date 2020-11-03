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
      guardarProgramacionDB = _useState[1]; //state programacion por supervisor


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      programacionSUpervisor = _useState2[0],
      guardarProgramacionSupervisor = _useState2[1]; // traemos las funciones de firebase


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
    guardarProgramacionSupervisor(filtrarSupervisor);
  }, [programacionDB]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Contenedor, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Programacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, _this), programacionSUpervisor.map(function (sede) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "card my-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "card-header",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["Fecha despacho: ", sede.fecha, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
              className: "card-title",
              children: sede.institucion
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: "Zona: Castilla"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["Supervisor: ", sede.supervisor[0].nombre]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["cupos: ", sede.cupos]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "card-text",
              children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
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
                  lineNumber: 102,
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
                  lineNumber: 105,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
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
                          lineNumber: 113,
                          columnNumber: 125
                        }, _this)
                      }, asignacion.datos.idUsuario, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 53
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
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
                          lineNumber: 123,
                          columnNumber: 139
                        }, _this)
                      }, pendiente.datos.idUsuario, false, {
                        fileName: _jsxFileName,
                        lineNumber: 123,
                        columnNumber: 53
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 37
              }, _this)]
            }, void 0, true)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, _this)]
        }, sede.idProgramacionDB, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, _this);
};

_s(MiProgramacionSup, "nptVlmqlUCDAIC6KU3Fm95bzxxg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWktcHJvZ3JhbWFjaW9uLXN1cC5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yIiwic3R5bGVkIiwiZGl2IiwiTGlzdGFGbGV4IiwibGkiLCJMaXN0YUZsZXhQZW5kaWVudGUiLCJNaVByb2dyYW1hY2lvblN1cCIsInVzZVN0YXRlIiwicHJvZ3JhbWFjaW9uREIiLCJndWFyZGFyUHJvZ3JhbWFjaW9uREIiLCJwcm9ncmFtYWNpb25TVXBlcnZpc29yIiwiZ3VhcmRhclByb2dyYW1hY2lvblN1cGVydmlzb3IiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c3VhcmlvIiwidXNlRWZmZWN0Iiwib2J0ZW5lclByb2dyYW1hY2lvbmVzIiwiZGIiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsInRyYWVyUHJvZ3JhbWFjaW9uIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkUHJvZ3JhbWFjaW9uREIiLCJpZCIsImRhdGEiLCJmaWx0cmFyU3VwZXJ2aXNvciIsImZpbHRlciIsInByb2dyYW1hY2lvbiIsInN1cGVydmlzb3IiLCJ1aWQiLCJzZWRlIiwiZmVjaGEiLCJpbnN0aXR1Y2lvbiIsIm5vbWJyZSIsImN1cG9zIiwiY2FudGlkYWRkaXN0cmlidWlkb3JhcyIsImFzaWduYWNpb24iLCJsZW5ndGgiLCJkYXRvcyIsImlkVXN1YXJpbyIsInBlbmRpZW50ZXMiLCJwZW5kaWVudGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7S0FBTUYsVTtBQWFOLElBQU1HLFNBQVMsR0FBR0YsdURBQU0sQ0FBQ0csRUFB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ZTdkODAzYmZlMzIxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBGaXJlYmFzZUNvbnRleHQgZnJvbSAnLi4vZmlyZWJhc2UvY29udGV4dCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5cclxuXHJcbmNvbnN0IENvbnRlbmVkb3IgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2UxZTFlMTtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiA2MHJlbTtcclxuICAgICAgICBtYXJnaW46IDVyZW0gYXV0bztcclxuICAgIH1cclxuYFxyXG5jb25zdCBMaXN0YUZsZXggPSBzdHlsZWQubGlgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBjb2xvcjogIzBjNTQ2MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XHJcbiAgICBib3JkZXItY29sb3I6ICNiZWU1ZWI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBcclxuYFxyXG5cclxuY29uc3QgTGlzdGFGbGV4UGVuZGllbnRlID0gc3R5bGVkLmxpYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmYzY2Q7XHJcbiAgICBjb2xvcjogIzg1NjQwNDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIFxyXG5gXHJcblxyXG5jb25zdCBNaVByb2dyYW1hY2lvblN1cCA9ICgpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlXHJcbiAgICBjb25zdCBbcHJvZ3JhbWFjaW9uREIsIGd1YXJkYXJQcm9ncmFtYWNpb25EQl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3N0YXRlIHByb2dyYW1hY2lvbiBwb3Igc3VwZXJ2aXNvclxyXG4gICAgY29uc3QgW3Byb2dyYW1hY2lvblNVcGVydmlzb3IsIGd1YXJkYXJQcm9ncmFtYWNpb25TdXBlcnZpc29yXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vIHRyYWVtb3MgbGFzIGZ1bmNpb25lcyBkZSBmaXJlYmFzZVxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpXHJcblxyXG4gICAgLy90cmFlciB0b2RhcyBsYXMgUHJvZ3JhbWFjaW9uZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2dyYW1hY2lvbmVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9ncmFtYWNpb24nKS5vcmRlckJ5KCdmZWNoYScsICdhc2MnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9idGVuZXJQcm9ncmFtYWNpb25lcygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFlclByb2dyYW1hY2lvbiA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkUHJvZ3JhbWFjaW9uREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb25EQih0cmFlclByb2dyYW1hY2lvbilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0cmFyU3VwZXJ2aXNvciA9IHByb2dyYW1hY2lvbkRCLmZpbHRlcihwcm9ncmFtYWNpb24gPT4gcHJvZ3JhbWFjaW9uLnN1cGVydmlzb3JbMF0uaWQgPT09IHVzdWFyaW8udWlkKVxyXG5cclxuICAgICAgICBndWFyZGFyUHJvZ3JhbWFjaW9uU3VwZXJ2aXNvcihmaWx0cmFyU3VwZXJ2aXNvcilcclxuICAgIH0sIFtwcm9ncmFtYWNpb25EQl0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q29udGVuZWRvcj5cclxuICAgICAgICAgICAgICAgIDxoMj5Qcm9ncmFtYWNpb248L2gyPlxyXG4gICAgICAgICAgICAgICAge3Byb2dyYW1hY2lvblNVcGVydmlzb3IubWFwKHNlZGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBteS0zXCIga2V5PXtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5GZWNoYSBkZXNwYWNobzoge3NlZGUuZmVjaGF9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntzZWRlLmluc3RpdHVjaW9ufTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5ab25hOiBDYXN0aWxsYTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5TdXBlcnZpc29yOiB7c2VkZS5zdXBlcnZpc29yWzBdLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5jdXBvczoge3NlZGUuY3Vwb3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Y2FudGlkYWQgRGlzdHJpYnVpZG9yYXM6IHtzZWRlLmNhbnRpZGFkZGlzdHJpYnVpZG9yYXN9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2VkZS5hc2lnbmFjaW9uIHx8IHNlZGUuYXNpZ25hY2lvbi5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXgtMVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtgIyR7c2VkZS5pZFByb2dyYW1hY2lvbkRCfWB9IHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXNpZ25hZGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtgIyR7c2VkZS5pZFByb2dyYW1hY2lvbkRCfTFgfSByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlbmRpZW50ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD17c2VkZS5pZFByb2dyYW1hY2lvbkRCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWRlLmFzaWduYWNpb24ubWFwKGFzaWduYWNpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RhRmxleCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2FzaWduYWNpb24uZGF0b3MuaWRVc3VhcmlvfT48cD57YXNpZ25hY2lvbi5kYXRvcy5ub21icmV9PC9wPjwvTGlzdGFGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPXtgJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9MWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlZGUucGVuZGllbnRlcy5tYXAocGVuZGllbnRlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0YUZsZXhQZW5kaWVudGUgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGFsZXJ0XCIga2V5PXtwZW5kaWVudGUuZGF0b3MuaWRVc3VhcmlvfT48cD57cGVuZGllbnRlLmRhdG9zLm5vbWJyZX08L3A+PC9MaXN0YUZsZXhQZW5kaWVudGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICA8L0NvbnRlbmVkb3I+XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWlQcm9ncmFtYWNpb25TdXA7Il0sInNvdXJjZVJvb3QiOiIifQ==