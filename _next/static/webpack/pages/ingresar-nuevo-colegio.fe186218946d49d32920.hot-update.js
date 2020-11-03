webpackHotUpdate_N_E("pages/ingresar-nuevo-colegio",{

/***/ "./pages/ingresar-nuevo-colegio.js":
/*!*****************************************!*\
  !*** ./pages/ingresar-nuevo-colegio.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase/context */ "./firebase/context.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "D:\\PROYECTOS\\postulaciones\\pages\\ingresar-nuevo-colegio.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n\n    @media (min-width: 768px) {\n        display: block;\n        width: 900px;\n        margin: 2rem auto 2rem 20rem;\n        \n    }\n    \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n\n    text-align: center;\n\n    @media (min-width: 768px) {\n        margin-top: 3rem;\n        margin-left: 30%;\n\n    }\n  \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n\n    text-align: center;\n\n    @media (min-width: 768px) {\n        margin-top: 8rem;\n        margin-left: 30%;\n\n    }\n  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    background: #e1e1e1;\n    \n    text-align: center;\n    align-items: center;\n    padding: 1rem;\n    margin: 1rem 0.5rem;\n\n    @media (min-width: 768px) {\n        width: 40rem;\n        margin: 2rem auto 2rem 40%;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Contenedor = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());
_c = Contenedor;
var Titulo = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].h2(_templateObject2());
_c2 = Titulo;
var Titulo2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].h2(_templateObject3());
_c3 = Titulo2;
var Contenedor2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject4());
_c4 = Contenedor2;
var EditarBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].td(_templateObject5());
_c5 = EditarBtn;

var IngresarColegio = function IngresarColegio() {
  _s();

  //state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    nombre: ''
  }),
      nuevoColegio = _useState[0],
      guardarNuevoColegio = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      colegiosDB = _useState2[0],
      guardarColegiosDB = _useState2[1]; // traemos las funciones de firebase


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_firebase_context__WEBPACK_IMPORTED_MODULE_9__["default"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario; //Funcion que guardad el colegio en la base de datos


  var guardarColegio = function guardarColegio(e) {
    e.preventDefault();

    if (nuevoColegio.nombre != '') {
      firebase.db.collection('colegios').add(nuevoColegio);
      guardarNuevoColegio({
        nombre: ''
      });
      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: function didOpen(toast) {
          toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.stopTimer);
          toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.resumeTimer);
        }
      });
      Toast.fire({
        icon: 'success',
        title: 'Creado con Exito!'
      });
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre del colegio es obligatorio!'
      });
      console.log();
    }
  }; //traer todos los Colegios


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var obtenerColegios = function obtenerColegios() {
      firebase.db.collection('colegios').orderBy('nombre').onSnapshot(manejarSnapshot);
    };

    obtenerColegios();
  }, []);

  function manejarSnapshot(snapshot) {
    var traerUsuarios = snapshot.docs.map(function (doc) {
      return _objectSpread({
        idColegiosDB: doc.id
      }, doc.data());
    });
    guardarColegiosDB(traerUsuarios);
  } //sweetalert2


  var eliminar = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: 'Realmente desea eliminar este Colegio?',
                text: "Un Colegio que se elimine no se puede Recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminar!'
              }).then(function (result) {
                if (result.isConfirmed) {
                  console.log(id);
                  var eliminarBD = firebase.db.collection("colegios").doc(id);

                  var eliminarFn = function eliminarFn() {
                    if (result === '') {
                      return;
                    } else {
                      return eliminarBD["delete"]();
                    }
                  };

                  eliminarFn();
                  sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Eliminado!', 'Con exito');
                }
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function eliminar(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Titulo, {
      children: "Ingresar Nuevo Colegio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Contenedor, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
        onSubmit: guardarColegio,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            htmlFor: "formGroupExampleInput2",
            children: "Nombre Del Colegio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            value: nuevoColegio.nombre,
            id: "formGroupExampleInput2",
            placeholder: "Escribe el Nombre",
            name: "nombre",
            onChange: function onChange(e) {
              return guardarNuevoColegio(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            type: "submit",
            className: "btn btn-danger form-control my-1",
            children: "Crear"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Titulo2, {
      children: "Lista de Colegios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Contenedor2, {
      className: "table-responsive",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("table", {
        className: "table table-striped ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
              scope: "col",
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
              scope: "col",
              children: "Eliminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tbody", {
          children: colegiosDB.map(function (colegio) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                scope: "row",
                children: colegio.nombre
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(EditarBtn, {
                onClick: function onClick() {
                  return eliminar(colegio.idColegiosDB);
                },
                children: "X"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 33
              }, _this)]
            }, colegio.idColegiosDB, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 9
  }, _this);
};

_s(IngresarColegio, "5oWAQJtQjr+nZ9wCYxM5F+fh6NQ=");

_c6 = IngresarColegio;
/* harmony default export */ __webpack_exports__["default"] = (IngresarColegio);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Contenedor");
$RefreshReg$(_c2, "Titulo");
$RefreshReg$(_c3, "Titulo2");
$RefreshReg$(_c4, "Contenedor2");
$RefreshReg$(_c5, "EditarBtn");
$RefreshReg$(_c6, "IngresarColegio");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5ncmVzYXItbnVldm8tY29sZWdpby5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yIiwic3R5bGVkIiwiZGl2IiwiVGl0dWxvIiwiaDIiLCJUaXR1bG8yIiwiQ29udGVuZWRvcjIiLCJFZGl0YXJCdG4iLCJ0ZCIsIkluZ3Jlc2FyQ29sZWdpbyIsInVzZVN0YXRlIiwibm9tYnJlIiwibnVldm9Db2xlZ2lvIiwiZ3VhcmRhck51ZXZvQ29sZWdpbyIsImNvbGVnaW9zREIiLCJndWFyZGFyQ29sZWdpb3NEQiIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJndWFyZGFyQ29sZWdpbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRiIiwiY29sbGVjdGlvbiIsImFkZCIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm9idGVuZXJDb2xlZ2lvcyIsIm9yZGVyQnkiLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBzaG90Iiwic25hcHNob3QiLCJ0cmFlclVzdWFyaW9zIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkQ29sZWdpb3NEQiIsImlkIiwiZGF0YSIsImVsaW1pbmFyIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJlbGltaW5hckJEIiwiZWxpbWluYXJGbiIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbGVn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STtBQUFBLGlDQUNJO0FBQUEsb0NBQ0k7QUFBSSxtQkFBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFJLG1CQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBT0k7QUFBQSxvQkFDS3ZELFVBQVUsQ0FBQ3NDLEdBQVgsQ0FBZSxVQUFBa0IsT0FBTztBQUFBLGdDQUNuQjtBQUFBLHNDQUNJO0FBQUkscUJBQUssRUFBQyxLQUFWO0FBQUEsMEJBQWlCQSxPQUFPLENBQUMzRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUkscUVBQUMsU0FBRDtBQUFXLHVCQUFPLEVBQUU7QUFBQSx5QkFBTThDLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDaEIsWUFBVCxDQUFkO0FBQUEsaUJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUEsZUFBU2dCLE9BQU8sQ0FBQ2hCLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRG1CO0FBQUEsV0FBdEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE2Q0gsQ0F2SkQ7O0dBQU03QyxlOztNQUFBQSxlO0FBeUpTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmdyZXNhci1udWV2by1jb2xlZ2lvLmZlMTg2MjE4OTQ2ZDQ5ZDMyOTIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEZpcmViYXNlQ29udGV4dCBmcm9tICcuLi9maXJlYmFzZS9jb250ZXh0J1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuXHJcblxyXG5jb25zdCBDb250ZW5lZG9yID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogNDByZW07XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIGF1dG8gMnJlbSA0MCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IFRpdHVsbyA9IHN0eWxlZC5oMmBcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG5cclxuICAgIH1cclxuICBcclxuYFxyXG5jb25zdCBUaXR1bG8yID0gc3R5bGVkLmgyYFxyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcblxyXG4gICAgfVxyXG4gIFxyXG5gXHJcbmNvbnN0IENvbnRlbmVkb3IyID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIGF1dG8gMnJlbSAyMHJlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5gXHJcbmNvbnN0IEVkaXRhckJ0biA9IHN0eWxlZC50ZGBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IEluZ3Jlc2FyQ29sZWdpbyA9ICgpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlXHJcbiAgICBjb25zdCBbbnVldm9Db2xlZ2lvLCBndWFyZGFyTnVldm9Db2xlZ2lvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBub21icmU6ICcnXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtjb2xlZ2lvc0RCLCBndWFyZGFyQ29sZWdpb3NEQl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvLyB0cmFlbW9zIGxhcyBmdW5jaW9uZXMgZGUgZmlyZWJhc2VcclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuXHJcbiAgICAvL0Z1bmNpb24gcXVlIGd1YXJkYWQgZWwgY29sZWdpbyBlbiBsYSBiYXNlIGRlIGRhdG9zXHJcbiAgICBjb25zdCBndWFyZGFyQ29sZWdpbyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKG51ZXZvQ29sZWdpby5ub21icmUgIT0gJycpIHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbignY29sZWdpb3MnKS5hZGQobnVldm9Db2xlZ2lvKVxyXG4gICAgICAgICAgICBndWFyZGFyTnVldm9Db2xlZ2lvKHsgbm9tYnJlOiAnJyB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICAgICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDcmVhZG8gY29uIEV4aXRvISdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ09vcHMuLi4nLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0VsIG5vbWJyZSBkZWwgY29sZWdpbyBlcyBvYmxpZ2F0b3JpbyEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL3RyYWVyIHRvZG9zIGxvcyBDb2xlZ2lvc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyQ29sZWdpb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ2NvbGVnaW9zJykub3JkZXJCeSgnbm9tYnJlJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyQ29sZWdpb3MoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgY29uc3QgdHJhZXJVc3VhcmlvcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZENvbGVnaW9zREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3VhcmRhckNvbGVnaW9zREIodHJhZXJVc3VhcmlvcylcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vc3dlZXRhbGVydDJcclxuXHJcblxyXG4gICAgY29uc3QgZWxpbWluYXIgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1JlYWxtZW50ZSBkZXNlYSBlbGltaW5hciBlc3RlIENvbGVnaW8/JyxcclxuICAgICAgICAgICAgdGV4dDogXCJVbiBDb2xlZ2lvIHF1ZSBzZSBlbGltaW5lIG5vIHNlIHB1ZWRlIFJlY3VwZXJhciFcIixcclxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdTaSwgRWxpbWluYXIhJ1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJCRCA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJjb2xlZ2lvc1wiKS5kb2MoaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsaW1pbmFyQkQuZGVsZXRlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJGbigpXHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VsaW1pbmFkbyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb24gZXhpdG8nXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxUaXR1bG8+SW5ncmVzYXIgTnVldm8gQ29sZWdpbzwvVGl0dWxvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxDb250ZW5lZG9yPlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17Z3VhcmRhckNvbGVnaW99XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm9ybUdyb3VwRXhhbXBsZUlucHV0MlwiPk5vbWJyZSBEZWwgQ29sZWdpbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtudWV2b0NvbGVnaW8ubm9tYnJlfSBpZD1cImZvcm1Hcm91cEV4YW1wbGVJbnB1dDJcIiBwbGFjZWhvbGRlcj1cIkVzY3JpYmUgZWwgTm9tYnJlXCIgbmFtZT1cIm5vbWJyZVwiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJOdWV2b0NvbGVnaW8oeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBmb3JtLWNvbnRyb2wgbXktMVwiPkNyZWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvQ29udGVuZWRvcj5cclxuICAgICAgICAgICAgPFRpdHVsbzI+TGlzdGEgZGUgQ29sZWdpb3M8L1RpdHVsbzI+XHJcblxyXG4gICAgICAgICAgICA8Q29udGVuZWRvcjIgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Tm9tYnJlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkVsaW1pbmFyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbGVnaW9zREIubWFwKGNvbGVnaW8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Y29sZWdpby5pZENvbGVnaW9zREJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntjb2xlZ2lvLm5vbWJyZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0YXJCdG4gb25DbGljaz17KCkgPT4gZWxpbWluYXIoY29sZWdpby5pZENvbGVnaW9zREIpfT5YPC9FZGl0YXJCdG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L0NvbnRlbmVkb3IyPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZ3Jlc2FyQ29sZWdpbzsiXSwic291cmNlUm9vdCI6IiJ9