webpackHotUpdate_N_E("pages/administrar-usuarios",{

/***/ "./pages/administrar-usuarios.js":
/*!***************************************!*\
  !*** ./pages/administrar-usuarios.js ***!
  \***************************************/
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
/* harmony import */ var _firebase_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase/context */ "./firebase/context.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _hooks_useRoles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useRoles */ "./hooks/useRoles.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "D:\\PROYECTOS\\postulaciones\\pages\\administrar-usuarios.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n\n    @media (min-width: 768px) {\n        display: block;\n        width: 1000px;\n        margin: 2rem auto 2rem 20rem;\n        \n    }\n    \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n\n    text-align: center;\n\n    @media (min-width: 768px) {\n        margin-top: 5rem;\n        margin-left: 20%;\n\n    }\n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Titulo = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].h2(_templateObject());
_c = Titulo;
var Contenedor = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
_c2 = Contenedor;
var EditarBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].td(_templateObject3());
_c3 = EditarBtn;

var AdministrarUsuarios = function AdministrarUsuarios() {
  _s();

  //state usuarios
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      usuariosDB = _useState[0],
      guardarUsuariosDB = _useState[1]; // consultar el context


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_firebase_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario; //consultar context de roles


  var _useRoles = Object(_hooks_useRoles__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      admin = _useRoles.admin,
      supervisor = _useRoles.supervisor; //prueba


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      prueba = _useState2[0],
      guardarPrueba = _useState2[1]; //traer todos los usuarios


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var obtenerProductos = function obtenerProductos() {
      firebase.db.collection('usuarios').orderBy('rol').onSnapshot(manejarSnapshot);
    };

    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    var traerUsuarios = snapshot.docs.map(function (doc) {
      return _objectSpread({
        idUsuarioDB: doc.id
      }, doc.data());
    });
    guardarUsuariosDB(traerUsuarios);
  } //sweetalert2


  var editar = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      var _yield$Swal$fire, rol, editarRol, editarRolFn;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: 'Select field validation',
                input: 'select',
                inputOptions: {
                  'Roles': {
                    admin: 'Admin',
                    supervisor: 'Supervisor',
                    distribuidor: 'Distribuidor'
                  }
                },
                inputPlaceholder: 'Selecciona un Rol',
                showCancelButton: true,
                inputValidator: function inputValidator(value) {
                  return new Promise(function (resolve) {
                    if (value === '') {
                      resolve('You need to select oranges :)');
                    } else {
                      resolve();
                    }
                  });
                }
              });

            case 2:
              _yield$Swal$fire = _context.sent;
              rol = _yield$Swal$fire.value;

              if (rol) {
                console.log(id);
                guardarPrueba(rol);
                editarRol = firebase.db.collection("usuarios").doc(id);

                editarRolFn = function editarRolFn() {
                  if (rol === '') {
                    return;
                  } else {
                    return editarRol.update({
                      rol: rol
                    });
                  }
                };

                editarRolFn();
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire("Se a Modificado a: ".concat(rol));
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function editar(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var eliminar = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: 'Realmente desea eliminar este usuario?',
                text: "Un usuario que se elimine no se puede Recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminar!'
              }).then(function (result) {
                if (result.isConfirmed) {
                  console.log(id);
                  var eliminarBD = firebase.db.collection("usuarios").doc(id);

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
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function eliminar(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: admin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Titulo, {
        children: "Administra los Usuarios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Contenedor, {
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
                lineNumber: 162,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                scope: "col",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                scope: "col",
                children: "Rol"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                scope: "col",
                children: "Modificar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                scope: "col"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tbody", {
            children: usuariosDB.map(function (user) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("th", {
                  scope: "row",
                  children: user.nombre
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                  children: user.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("td", {
                  children: user.rol
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(EditarBtn, {
                  onClick: function onClick() {
                    return editar(user.idUsuarioDB);
                  },
                  children: "Editar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(EditarBtn, {
                  onClick: function onClick() {
                    return eliminar(user.idUsuarioDB);
                  },
                  children: "X"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 41
                }, _this)]
              }, user.idUsuarioDB, true, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }, _this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Titulo, {
      children: "No puedes estar aqui"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 19
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 9
  }, _this);
};

_s(AdministrarUsuarios, "E1XqnjbnljfnuZ9w5Op5u4ClP24=", false, function () {
  return [_hooks_useRoles__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c4 = AdministrarUsuarios;
/* harmony default export */ __webpack_exports__["default"] = (AdministrarUsuarios);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Titulo");
$RefreshReg$(_c2, "Contenedor");
$RefreshReg$(_c3, "EditarBtn");
$RefreshReg$(_c4, "AdministrarUsuarios");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5pc3RyYXItdXN1YXJpb3MuanMiXSwibmFtZXMiOlsiVGl0dWxvIiwic3R5bGVkIiwiaDIiLCJDb250ZW5lZG9yIiwiZGl2IiwiRWRpdGFyQnRuIiwidGQiLCJBZG1pbmlzdHJhclVzdWFyaW9zIiwidXNlU3RhdGUiLCJ1c3Vhcmlvc0RCIiwiZ3VhcmRhclVzdWFyaW9zREIiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c3VhcmlvIiwidXNlUm9sZXMiLCJhZG1pbiIsInN1cGVydmlzb3IiLCJwcnVlYmEiLCJndWFyZGFyUHJ1ZWJhIiwidXNlRWZmZWN0Iiwib2J0ZW5lclByb2R1Y3RvcyIsImRiIiwiY29sbGVjdGlvbiIsIm9yZGVyQnkiLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBzaG90Iiwic25hcHNob3QiLCJ0cmFlclVzdWFyaW9zIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkVXN1YXJpb0RCIiwiaWQiLCJkYXRhIiwiZWRpdGFyIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImlucHV0IiwiaW5wdXRPcHRpb25zIiwiZGlzdHJpYnVpZG9yIiwiaW5wdXRQbGFjZWhvbGRlciIsInNob3dDYW5jZWxCdXR0b24iLCJpbnB1dFZhbGlkYXRvciIsInZhbHVlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyb2wiLCJjb25zb2xlIiwibG9nIiwiZWRpdGFyUm9sIiwiZWRpdGFyUm9sRm4iLCJ1cGRhdGUiLCJlbGltaW5hciIsInRleHQiLCJpY29uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImVsaW1pbmFyQkQiLCJlbGltaW5hckZuIiwidXNlciIsIm5vbWJyZSIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZUFFSTtBQUFBLDRCQUFLRCxJQUFJLENBQUNFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJO0FBQUEsNEJBQUtGLElBQUksQ0FBQ2pCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISixlQUlJLHFFQUFDLFNBQUQ7QUFBVyx5QkFBTyxFQUFFO0FBQUEsMkJBQU1iLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ2pDLFdBQU4sQ0FBWjtBQUFBLG1CQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSixlQUtJLHFFQUFDLFNBQUQ7QUFBVyx5QkFBTyxFQUFFO0FBQUEsMkJBQU1zQixRQUFRLENBQUNXLElBQUksQ0FBQ2pDLFdBQU4sQ0FBZDtBQUFBLG1CQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMSjtBQUFBLGlCQUFTaUMsSUFBSSxDQUFDakMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURnQjtBQUFBLGFBQW5CO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQSxvQkFGRSxnQkFnQ0EscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpDVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3Q0gsQ0ExSkQ7O0dBQU16QixtQjtVQVM0QlEsdUQ7OztNQVQ1QlIsbUI7QUE0SlNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluaXN0cmFyLXVzdWFyaW9zLjgyMWM2NjQxMzVkMDZmZGY2MDBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRmlyZWJhc2VDb250ZXh0IGZyb20gJy4uL2ZpcmViYXNlL2NvbnRleHQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgdXNlUm9sZXMgZnJvbSAnLi4vaG9va3MvdXNlUm9sZXMnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5cclxuXHJcblxyXG5jb25zdCBUaXR1bG8gPSBzdHlsZWQuaDJgXHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuYFxyXG5cclxuY29uc3QgQ29udGVuZWRvciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBtYXJnaW46IDJyZW0gYXV0byAycmVtIDIwcmVtO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbmBcclxuXHJcbmNvbnN0IEVkaXRhckJ0biA9IHN0eWxlZC50ZGBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuY29uc3QgQWRtaW5pc3RyYXJVc3VhcmlvcyA9ICgpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlIHVzdWFyaW9zXHJcbiAgICBjb25zdCBbdXN1YXJpb3NEQiwgZ3VhcmRhclVzdWFyaW9zREJdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy8gY29uc3VsdGFyIGVsIGNvbnRleHRcclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuICAgIC8vY29uc3VsdGFyIGNvbnRleHQgZGUgcm9sZXNcclxuICAgIGNvbnN0IHsgYWRtaW4sIHN1cGVydmlzb3IgfSA9IHVzZVJvbGVzKClcclxuXHJcbiAgICAvL3BydWViYVxyXG4gICAgY29uc3QgW3BydWViYSwgZ3VhcmRhclBydWViYV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICAvL3RyYWVyIHRvZG9zIGxvcyB1c3Vhcmlvc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCd1c3VhcmlvcycpLm9yZGVyQnkoJ3JvbCcpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2R1Y3RvcygpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBjb25zdCB0cmFlclVzdWFyaW9zID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkVXN1YXJpb0RCOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1YXJkYXJVc3Vhcmlvc0RCKHRyYWVyVXN1YXJpb3MpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vc3dlZXRhbGVydDJcclxuICAgIGNvbnN0IGVkaXRhciA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IHJvbCB9ID0gYXdhaXQgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3QgZmllbGQgdmFsaWRhdGlvbicsXHJcbiAgICAgICAgICAgIGlucHV0OiAnc2VsZWN0JyxcclxuICAgICAgICAgICAgaW5wdXRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAnUm9sZXMnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRtaW46ICdBZG1pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJ2aXNvcjogJ1N1cGVydmlzb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RyaWJ1aWRvcjogJ0Rpc3RyaWJ1aWRvcicsXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnB1dFBsYWNlaG9sZGVyOiAnU2VsZWNjaW9uYSB1biBSb2wnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBpbnB1dFZhbGlkYXRvcjogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ1lvdSBuZWVkIHRvIHNlbGVjdCBvcmFuZ2VzIDopJylcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHJvbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICAgICAgZ3VhcmRhclBydWViYShyb2wpXHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRhclJvbCA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJ1c3Vhcmlvc1wiKS5kb2MoaWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWRpdGFyUm9sRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm9sID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdGFyUm9sLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbDogcm9sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVkaXRhclJvbEZuKClcclxuICAgICAgICAgICAgU3dhbC5maXJlKGBTZSBhIE1vZGlmaWNhZG8gYTogJHtyb2x9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWxpbWluYXIgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1JlYWxtZW50ZSBkZXNlYSBlbGltaW5hciBlc3RlIHVzdWFyaW8/JyxcclxuICAgICAgICAgICAgdGV4dDogXCJVbiB1c3VhcmlvIHF1ZSBzZSBlbGltaW5lIG5vIHNlIHB1ZWRlIFJlY3VwZXJhciFcIixcclxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdTaSwgRWxpbWluYXIhJ1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyQkQgPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwidXN1YXJpb3NcIikuZG9jKGlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGltaW5hckZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGltaW5hckJELmRlbGV0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyRm4oKVxyXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICdFbGltaW5hZG8hJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uIGV4aXRvJ1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIHthZG1pblxyXG4gICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0dWxvPkFkbWluaXN0cmEgbG9zIFVzdWFyaW9zPC9UaXR1bG8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbmVkb3IgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Ob21icmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlJvbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk1vZGlmaWNhcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzdWFyaW9zREIubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyLmlkVXN1YXJpb0RCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPnt1c2VyLm5vbWJyZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIucm9sfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdGFyQnRuIG9uQ2xpY2s9eygpID0+IGVkaXRhcih1c2VyLmlkVXN1YXJpb0RCKX0+RWRpdGFyPC9FZGl0YXJCdG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdGFyQnRuIG9uQ2xpY2s9eygpID0+IGVsaW1pbmFyKHVzZXIuaWRVc3VhcmlvREIpfT5YPC9FZGl0YXJCdG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW5lZG9yPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA6IDxUaXR1bG8+Tm8gcHVlZGVzIGVzdGFyIGFxdWk8L1RpdHVsbz5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbmlzdHJhclVzdWFyaW9zOyJdLCJzb3VyY2VSb290IjoiIn0=