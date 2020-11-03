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
    } else {
      console.log('El nombre del colegio es obligatorio');
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
      lineNumber: 145,
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
            lineNumber: 153,
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
            lineNumber: 154,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            type: "submit",
            className: "btn btn-danger form-control my-1",
            children: "Crear"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Titulo2, {
      children: "Lista de Colegios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
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
              lineNumber: 166,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
              scope: "col",
              children: "Eliminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tbody", {
          children: colegiosDB.map(function (colegio) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                scope: "row",
                children: colegio.nombre
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(EditarBtn, {
                onClick: function onClick() {
                  return eliminar(colegio.idColegiosDB);
                },
                children: "X"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 33
              }, _this)]
            }, colegio.idColegiosDB, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5ncmVzYXItbnVldm8tY29sZWdpby5qcyJdLCJuYW1lcyI6WyJDb250ZW5lZG9yIiwic3R5bGVkIiwiZGl2IiwiVGl0dWxvIiwiaDIiLCJUaXR1bG8yIiwiQ29udGVuZWRvcjIiLCJFZGl0YXJCdG4iLCJ0ZCIsIkluZ3Jlc2FyQ29sZWdpbyIsInVzZVN0YXRlIiwibm9tYnJlIiwibnVldm9Db2xlZ2lvIiwiZ3VhcmRhck51ZXZvQ29sZWdpbyIsImNvbGVnaW9zREIiLCJndWFyZGFyQ29sZWdpb3NEQiIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJmaXJlYmFzZSIsInVzdWFyaW8iLCJndWFyZGFyQ29sZWdpbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRiIiwiY29sbGVjdGlvbiIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJvYnRlbmVyQ29sZWdpb3MiLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwidHJhZXJVc3VhcmlvcyIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZENvbGVnaW9zREIiLCJpZCIsImRhdGEiLCJlbGltaW5hciIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiZWxpbWluYXJCRCIsImVsaW1pbmFyRm4iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb2xlZ2lvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE2Q0gsQ0FoSUQ7O0dBQU03QixlOztNQUFBQSxlO0FBa0lTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmdyZXNhci1udWV2by1jb2xlZ2lvLjM1YTEyYTEyYTcxODYzZjAwM2I2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEZpcmViYXNlQ29udGV4dCBmcm9tICcuLi9maXJlYmFzZS9jb250ZXh0J1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuXHJcblxyXG5jb25zdCBDb250ZW5lZG9yID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogNDByZW07XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIGF1dG8gMnJlbSA0MCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IFRpdHVsbyA9IHN0eWxlZC5oMmBcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG5cclxuICAgIH1cclxuICBcclxuYFxyXG5jb25zdCBUaXR1bG8yID0gc3R5bGVkLmgyYFxyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcblxyXG4gICAgfVxyXG4gIFxyXG5gXHJcbmNvbnN0IENvbnRlbmVkb3IyID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIGF1dG8gMnJlbSAyMHJlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5gXHJcbmNvbnN0IEVkaXRhckJ0biA9IHN0eWxlZC50ZGBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IEluZ3Jlc2FyQ29sZWdpbyA9ICgpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlXHJcbiAgICBjb25zdCBbbnVldm9Db2xlZ2lvLCBndWFyZGFyTnVldm9Db2xlZ2lvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBub21icmU6ICcnXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtjb2xlZ2lvc0RCLCBndWFyZGFyQ29sZWdpb3NEQl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvLyB0cmFlbW9zIGxhcyBmdW5jaW9uZXMgZGUgZmlyZWJhc2VcclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuXHJcbiAgICAvL0Z1bmNpb24gcXVlIGd1YXJkYWQgZWwgY29sZWdpbyBlbiBsYSBiYXNlIGRlIGRhdG9zXHJcbiAgICBjb25zdCBndWFyZGFyQ29sZWdpbyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKG51ZXZvQ29sZWdpby5ub21icmUgIT0gJycpIHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbignY29sZWdpb3MnKS5hZGQobnVldm9Db2xlZ2lvKVxyXG4gICAgICAgICAgICBndWFyZGFyTnVldm9Db2xlZ2lvKHsgbm9tYnJlOiAnJyB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbCBub21icmUgZGVsIGNvbGVnaW8gZXMgb2JsaWdhdG9yaW8nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgQ29sZWdpb3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lckNvbGVnaW9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdjb2xlZ2lvcycpLm9yZGVyQnkoJ25vbWJyZScpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lckNvbGVnaW9zKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgIGNvbnN0IHRyYWVyVXN1YXJpb3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWRDb2xlZ2lvc0RCOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1YXJkYXJDb2xlZ2lvc0RCKHRyYWVyVXN1YXJpb3MpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL3N3ZWV0YWxlcnQyXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBlbGltaW5hciA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUmVhbG1lbnRlIGRlc2VhIGVsaW1pbmFyIGVzdGUgQ29sZWdpbz8nLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlVuIENvbGVnaW8gcXVlIHNlIGVsaW1pbmUgbm8gc2UgcHVlZGUgUmVjdXBlcmFyIVwiLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1NpLCBFbGltaW5hciEnXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGltaW5hckJEID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcImNvbGVnaW9zXCIpLmRvYyhpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJGbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxpbWluYXJCRC5kZWxldGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hckZuKClcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICAgICAgICAgICAnRWxpbWluYWRvIScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbiBleGl0bydcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFRpdHVsbz5JbmdyZXNhciBOdWV2byBDb2xlZ2lvPC9UaXR1bG8+XHJcblxyXG5cclxuICAgICAgICAgICAgPENvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtndWFyZGFyQ29sZWdpb31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb3JtR3JvdXBFeGFtcGxlSW5wdXQyXCI+Tm9tYnJlIERlbCBDb2xlZ2lvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e251ZXZvQ29sZWdpby5ub21icmV9IGlkPVwiZm9ybUdyb3VwRXhhbXBsZUlucHV0MlwiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSBlbCBOb21icmVcIiBuYW1lPVwibm9tYnJlXCIgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck51ZXZvQ29sZWdpbyh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGZvcm0tY29udHJvbCBteS0xXCI+Q3JlYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Db250ZW5lZG9yPlxyXG4gICAgICAgICAgICA8VGl0dWxvMj5MaXN0YSBkZSBDb2xlZ2lvczwvVGl0dWxvMj5cclxuXHJcbiAgICAgICAgICAgIDxDb250ZW5lZG9yMiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Ob21icmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RWxpbWluYXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sZWdpb3NEQi5tYXAoY29sZWdpbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtjb2xlZ2lvLmlkQ29sZWdpb3NEQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2NvbGVnaW8ubm9tYnJlfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRhckJ0biBvbkNsaWNrPXsoKSA9PiBlbGltaW5hcihjb2xlZ2lvLmlkQ29sZWdpb3NEQil9Plg8L0VkaXRhckJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvQ29udGVuZWRvcjI+XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5ncmVzYXJDb2xlZ2lvOyJdLCJzb3VyY2VSb290IjoiIn0=