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
            }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "btn btn-danger",
              onClick: function onClick() {
                return postular(sede.idProgramacionDB, sede.cantidaddistribuidoras);
              },
              children: "Postularte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, _this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWktcHJvZ3JhbWFjaW9uLXN1cC5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yIiwic3R5bGVkIiwiZGl2IiwiTGlzdGFGbGV4IiwibGkiLCJMaXN0YUZsZXhQZW5kaWVudGUiLCJNaVByb2dyYW1hY2lvblN1cCIsInVzZVN0YXRlIiwicHJvZ3JhbWFjaW9uREIiLCJndWFyZGFyUHJvZ3JhbWFjaW9uREIiLCJwcm9ncmFtYWNpb25TVXBlcnZpc29yIiwiZ3VhcmRhclByb2dyYW1hY2lvblN1cGVydmlzb3IiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c3VhcmlvIiwidXNlRWZmZWN0Iiwib2J0ZW5lclByb2dyYW1hY2lvbmVzIiwiZGIiLCJjb2xsZWN0aW9uIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsInRyYWVyUHJvZ3JhbWFjaW9uIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkUHJvZ3JhbWFjaW9uREIiLCJpZCIsImRhdGEiLCJmaWx0cmFyU3VwZXJ2aXNvciIsImZpbHRlciIsInByb2dyYW1hY2lvbiIsInN1cGVydmlzb3IiLCJ1aWQiLCJzZWRlIiwiZmVjaGEiLCJpbnN0aXR1Y2lvbiIsIm5vbWJyZSIsImN1cG9zIiwiY2FudGlkYWRkaXN0cmlidWlkb3JhcyIsImFzaWduYWNpb24iLCJsZW5ndGgiLCJkYXRvcyIsImlkVXN1YXJpbyIsInBlbmRpZW50ZXMiLCJwZW5kaWVudGUiLCJwb3N0dWxhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG1CQUFoQjtLQUFNRixVO0FBYU4sSUFBTUcsU0FBUyxHQUFHRix1REFB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QUFBQSxPQUEvQixDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9FSCxDQXpHRDs7R0FBTXRCLGlCOztNQUFBQSxpQjtBQTJHU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWktcHJvZ3JhbWFjaW9uLXN1cC5mNGMyMWUxZDNmMGRhMGE4YzczNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBGaXJlYmFzZUNvbnRleHQgZnJvbSAnLi4vZmlyZWJhc2UvY29udGV4dCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5cclxuXHJcbmNvbnN0IENvbnRlbmVkb3IgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2UxZTFlMTtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiA2MHJlbTtcclxuICAgICAgICBtYXJnaW46IDVyZW0gYXV0bztcclxuICAgIH1cclxuYFxyXG5jb25zdCBMaXN0YUZsZXggPSBzdHlsZWQubGlgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBjb2xvcjogIzBjNTQ2MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XHJcbiAgICBib3JkZXItY29sb3I6ICNiZWU1ZWI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBcclxuYFxyXG5cclxuY29uc3QgTGlzdGFGbGV4UGVuZGllbnRlID0gc3R5bGVkLmxpYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmYzY2Q7XHJcbiAgICBjb2xvcjogIzg1NjQwNDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIFxyXG5gXHJcblxyXG5jb25zdCBNaVByb2dyYW1hY2lvblN1cCA9ICgpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlXHJcbiAgICBjb25zdCBbcHJvZ3JhbWFjaW9uREIsIGd1YXJkYXJQcm9ncmFtYWNpb25EQl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3N0YXRlIHByb2dyYW1hY2lvbiBwb3Igc3VwZXJ2aXNvclxyXG4gICAgY29uc3QgW3Byb2dyYW1hY2lvblNVcGVydmlzb3IsIGd1YXJkYXJQcm9ncmFtYWNpb25TdXBlcnZpc29yXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgICAvLyB0cmFlbW9zIGxhcyBmdW5jaW9uZXMgZGUgZmlyZWJhc2VcclxuICAgICBjb25zdCB7IGZpcmViYXNlLCB1c3VhcmlvIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dClcclxuXHJcbiAgICAgLy90cmFlciB0b2RhcyBsYXMgUHJvZ3JhbWFjaW9uZXNcclxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICBjb25zdCBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9ncmFtYWNpb24nKS5vcmRlckJ5KCdmZWNoYScsICdhc2MnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdClcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgIG9idGVuZXJQcm9ncmFtYWNpb25lcygpXHJcbiBcclxuICAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgICBjb25zdCB0cmFlclByb2dyYW1hY2lvbiA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWRQcm9ncmFtYWNpb25EQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb25EQih0cmFlclByb2dyYW1hY2lvbilcclxuIFxyXG4gICAgICAgICB9XHJcbiAgICAgfSwgW10pXHJcblxyXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgIGNvbnN0IGZpbHRyYXJTdXBlcnZpc29yID0gcHJvZ3JhbWFjaW9uREIuZmlsdGVyKHByb2dyYW1hY2lvbiA9PiBwcm9ncmFtYWNpb24uc3VwZXJ2aXNvclswXS5pZCA9PT0gdXN1YXJpby51aWQpXHJcblxyXG4gICAgICAgICBndWFyZGFyUHJvZ3JhbWFjaW9uU3VwZXJ2aXNvcihmaWx0cmFyU3VwZXJ2aXNvcilcclxuICAgICB9LCBbcHJvZ3JhbWFjaW9uREJdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgICAgICA8aDI+UHJvZ3JhbWFjaW9uPC9oMj5cclxuICAgICAgICAgICAgICAgIHtwcm9ncmFtYWNpb25TVXBlcnZpc29yLm1hcChzZWRlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbXktM1wiIGtleT17c2VkZS5pZFByb2dyYW1hY2lvbkRCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+RmVjaGEgZGVzcGFjaG86IHtzZWRlLmZlY2hhfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57c2VkZS5pbnN0aXR1Y2lvbn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Wm9uYTogQ2FzdGlsbGE8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+U3VwZXJ2aXNvcjoge3NlZGUuc3VwZXJ2aXNvclswXS5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Y3Vwb3M6IHtzZWRlLmN1cG9zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPmNhbnRpZGFkIERpc3RyaWJ1aWRvcmFzOiB7c2VkZS5jYW50aWRhZGRpc3RyaWJ1aWRvcmFzfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXNlZGUuYXNpZ25hY2lvbiB8fCBzZWRlLmFzaWduYWNpb24ubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG14LTFcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj17YCMke3NlZGUuaWRQcm9ncmFtYWNpb25EQn1gfSByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzaWduYWRhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj17YCMke3NlZGUuaWRQcm9ncmFtYWNpb25EQn0xYH0gcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZW5kaWVudGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9e3NlZGUuaWRQcm9ncmFtYWNpb25EQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VkZS5hc2lnbmFjaW9uLm1hcChhc2lnbmFjaW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0YUZsZXggY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXthc2lnbmFjaW9uLmRhdG9zLmlkVXN1YXJpb30+PHA+e2FzaWduYWNpb24uZGF0b3Mubm9tYnJlfTwvcD48L0xpc3RhRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD17YCR7c2VkZS5pZFByb2dyYW1hY2lvbkRCfTFgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWRlLnBlbmRpZW50ZXMubWFwKHBlbmRpZW50ZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFGbGV4UGVuZGllbnRlIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBhbGVydFwiIGtleT17cGVuZGllbnRlLmRhdG9zLmlkVXN1YXJpb30+PHA+e3BlbmRpZW50ZS5kYXRvcy5ub21icmV9PC9wPjwvTGlzdGFGbGV4UGVuZGllbnRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBwb3N0dWxhcihzZWRlLmlkUHJvZ3JhbWFjaW9uREIsIHNlZGUuY2FudGlkYWRkaXN0cmlidWlkb3Jhcyl9PlBvc3R1bGFydGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICA8L0NvbnRlbmVkb3I+XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWlQcm9ncmFtYWNpb25TdXA7Il0sInNvdXJjZVJvb3QiOiIifQ==