webpackHotUpdate_N_E("pages/programar-colegio",{

/***/ "./pages/programar-colegio.js":
/*!************************************!*\
  !*** ./pages/programar-colegio.js ***!
  \************************************/
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
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase/context */ "./firebase/context.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useRoles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useRoles */ "./hooks/useRoles.js");





var _jsxFileName = "D:\\PROYECTOS\\postulaciones\\pages\\programar-colegio.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    text-align: center;\n\n@media (min-width: 768px) {\n    margin-top: 5rem;\n    \n\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\n    text-align: center;\n\n    @media (min-width: 768px) {\n        margin-top: 5rem;\n        margin-left: 30%;\n\n    }\n  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    background: #e1e1e1;\n    \n    text-align: center;\n    align-items: center;\n    padding: 1rem;\n    margin: 1rem 0.5rem;\n\n    @media (min-width: 768px) {\n        width: 40rem;\n        margin: 2rem auto 2rem 40%;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Contenedor = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
_c = Contenedor;
var Titulo = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].h2(_templateObject2());
_c2 = Titulo;
var Titulo2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].h2(_templateObject3());
_c3 = Titulo2;

var ProgramarColegio = function ProgramarColegio() {
  _s();

  //state colegios
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      colegiosDB = _useState[0],
      guardarColegiosDB = _useState[1]; //state usuarios


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      usuariosDB = _useState2[0],
      guardarUsuariosDB = _useState2[1]; //state supervisores


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      supervisores = _useState3[0],
      guardarSupervisores = _useState3[1]; // state que guarda el id del supervisor


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      idSupervisor = _useState4[0],
      guardarIdSupervisor = _useState4[1]; //state de colegio programacion


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    institucion: '',
    fecha: '',
    zona: '',
    supervisor: {},
    cupos: '',
    cantidaddistribuidoras: ''
  }),
      nuevaProgramacion = _useState5[0],
      guardarNuevaProgramacion = _useState5[1]; // traemos las funciones de firebase


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_firebase_context__WEBPACK_IMPORTED_MODULE_7__["default"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario; //consultar context de roles


  var _useRoles = Object(_hooks_useRoles__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      admin = _useRoles.admin,
      supervisor = _useRoles.supervisor; // effect que asigna el supervisor


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var asignarSUpervisor = function asignarSUpervisor() {
      var resultado = supervisores.filter(function (sup) {
        return sup.id === idSupervisor.supervisor;
      });
      guardarNuevaProgramacion(_objectSpread(_objectSpread({}, nuevaProgramacion), {}, {
        supervisor: resultado
      }));
    };

    asignarSUpervisor();
  }, [idSupervisor]); //traer todos los usuarios

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var obtenerUsuarios = function obtenerUsuarios() {
      firebase.db.collection('usuarios').orderBy('rol').onSnapshot(manejarSnapshot);
    };

    obtenerUsuarios();

    function manejarSnapshot(snapshot) {
      var traerUsuarios = snapshot.docs.map(function (doc) {
        return _objectSpread({
          idUsuarioDB: doc.id
        }, doc.data());
      });
      guardarUsuariosDB(traerUsuarios);
    }
  }, []); //traer todos los Colegios

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var obtenerColegios = function obtenerColegios() {
      firebase.db.collection('colegios').orderBy('nombre').onSnapshot(manejarSnapshot);
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
  }, []); // traer los supervisores

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var consultarSupervisores = function consultarSupervisores() {
      var resultado = usuariosDB.filter(function (usuario) {
        return usuario.rol === 'supervisor';
      });
      guardarSupervisores(resultado);
    };

    consultarSupervisores();
  }, [usuariosDB]); // guardar programacion

  var programar = function programar(e) {
    e.preventDefault();

    if (nuevaProgramacion.institucion === '' || nuevaProgramacion.fecha === '' || nuevaProgramacion.zona === '' || nuevaProgramacion.supervisor === '' || nuevaProgramacion.cupos === '' || nuevaProgramacion.cantidaddistribuidoras === '') {
      return;
    } else {
      firebase.db.collection('programacion').add(nuevaProgramacion);
      guardarNuevaProgramacion({
        institucion: '',
        fecha: '',
        zona: '',
        supervisor: '',
        cupos: '',
        cantidaddistribuidoras: ''
      });
      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: function didOpen(toast) {
          toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.stopTimer);
          toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.resumeTimer);
        }
      });
      Toast.fire({
        icon: 'success',
        title: 'Creado con exito'
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: admin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Titulo, {
        children: "Programar un Nuevo Colegio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Contenedor, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
          onSubmit: programar,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
              htmlFor: "institucion",
              children: "Institucion"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
              className: "form-control",
              id: "institucion",
              value: nuevaProgramacion.institucion,
              name: "institucion",
              onChange: function onChange(e) {
                return guardarNuevaProgramacion(_objectSpread(_objectSpread({}, nuevaProgramacion), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                children: "--Elige una opcion--"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 37
              }, _this), colegiosDB.map(function (colegio) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: colegio.nombre,
                  children: colegio.nombre
                }, colegiosDB.idColegiosDB, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 41
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
              htmlFor: "fecha",
              children: "Fecha de entrega"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              type: "date",
              className: "form-control",
              id: "fecha",
              value: nuevaProgramacion.fecha,
              placeholder: "Example input placeholder",
              name: "fecha",
              onChange: function onChange(e) {
                return guardarNuevaProgramacion(_objectSpread(_objectSpread({}, nuevaProgramacion), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
              htmlFor: "zona",
              children: "Zona"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              value: nuevaProgramacion.zona,
              id: "zona",
              placeholder: "America, Belen, Castilla, Aranjuez, Caunces",
              name: "zona",
              onChange: function onChange(e) {
                return guardarNuevaProgramacion(_objectSpread(_objectSpread({}, nuevaProgramacion), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
              htmlFor: "supervisor",
              children: "Supervisor Responsable"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
              className: "form-control",
              value: nuevaProgramacion.supervisor.nombre,
              id: "supervisor",
              name: "supervisor",
              onChange: function onChange(e) {
                return guardarIdSupervisor(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                children: "--Elige una opcion--"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 37
              }, _this), supervisores.map(function (supervisor) {
                var filtrar = supervisores.filter(function (sup) {
                  return supervisor.id === sup.id;
                });
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: filtrar[0].id,
                  children: filtrar[0].nombre
                }, filtrar[0].idUsuarioDB, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 45
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
              htmlFor: "cupos",
              children: "Cupos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              type: "number",
              className: "form-control",
              value: nuevaProgramacion.cupos,
              id: "cupos",
              placeholder: "Escribe los Cupos de la Sede",
              name: "cupos",
              onChange: function onChange(e) {
                return guardarNuevaProgramacion(_objectSpread(_objectSpread({}, nuevaProgramacion), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, Number(e.target.value))));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
              htmlFor: "distribuidoras",
              children: "Cantidad de Distribuidoras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              type: "number",
              className: "form-control",
              value: nuevaProgramacion.cantidaddistribuidoras,
              id: "distribuidoras",
              placeholder: "Escribe la Cantidad Requerida",
              name: "cantidaddistribuidoras",
              onChange: function onChange(e) {
                return guardarNuevaProgramacion(_objectSpread(_objectSpread({}, nuevaProgramacion), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, Number(e.target.value))));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            type: "submit",
            className: "btn btn-danger form-control my-1",
            children: "Crear"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 21
      }, _this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Titulo2, {
      children: "No tienes Permisos para estar aqui"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 19
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 9
  }, _this);
};

_s(ProgramarColegio, "ms8942HpQU1NK/sJIz/Xy/U6irc=", false, function () {
  return [_hooks_useRoles__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c4 = ProgramarColegio;
/* harmony default export */ __webpack_exports__["default"] = (ProgramarColegio);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Contenedor");
$RefreshReg$(_c2, "Titulo");
$RefreshReg$(_c3, "Titulo2");
$RefreshReg$(_c4, "ProgramarColegio");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3JhbWFyLWNvbGVnaW8uanMiXSwibmFtZXMiOlsiQ29udGVuZWRvciIsInN0eWxlZCIsImRpdiIsIlRpdHVsbyIsImgyIiwiVGl0dWxvMiIsIlByb2dyYW1hckNvbGVnaW8iLCJ1c2VTdGF0ZSIsImNvbGVnaW9zREIiLCJndWFyZGFyQ29sZWdpb3NEQiIsInVzdWFyaW9zREIiLCJndWFyZGFyVXN1YXJpb3NEQiIsInN1cGVydmlzb3JlcyIsImd1YXJkYXJTdXBlcnZpc29yZXMiLCJpZFN1cGVydmlzb3IiLCJndWFyZGFySWRTdXBlcnZpc29yIiwiaW5zdGl0dWNpb24iLCJmZWNoYSIsInpvbmEiLCJzdXBlcnZpc29yIiwiY3Vwb3MiLCJjYW50aWRhZGRpc3RyaWJ1aWRvcmFzIiwibnVldmFQcm9ncmFtYWNpb24iLCJndWFyZGFyTnVldmFQcm9ncmFtYWNpb24iLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c3VhcmlvIiwidXNlUm9sZXMiLCJhZG1pbiIsInVzZUVmZmVjdCIsImFzaWduYXJTVXBlcnZpc29yIiwicmVzdWx0YWRvIiwiZmlsdGVyIiwic3VwIiwiaWQiLCJvYnRlbmVyVXN1YXJpb3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwidHJhZXJVc3VhcmlvcyIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZFVzdWFyaW9EQiIsImRhdGEiLCJvYnRlbmVyQ29sZWdpb3MiLCJ0cmFlckNvbGVnaW9zIiwiaWRDb2xlZ2lvc0RCIiwiY29uc3VsdGFyU3VwZXJ2aXNvcmVzIiwicm9sIiwicHJvZ3JhbWFyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbGVnaW8iLCJub21icmUiLCJmaWx0cmFyIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG1CQUFoQjtLQUFNRixVO0FBY04sSUFBTUcsTUFBTSxHQUFHRix1REFBTSxDQUFDRyxFQUFWLG9CQUFaO01BQU1ELE07QUFXTixJQUFNRSxPQUFPLEdBQUdKLHVEQUFNLENBQUNHLEVBQVYsb0JBQWI7TUFBTUMsTzs7QUFVTixJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFFM0I7QUFGMkIsa0JBR2FDLHNEQUFRLENBQUMsRUFBRCxDQUhyQjtBQUFBLE1BR3BCQyxVQUhvQjtBQUFBLE1BR1JDLGlCQUhRLGlCQUszQjs7O0FBTDJCLG1CQU1hRixzREFBUSxDQUFDLEVBQUQsQ0FOckI7QUFBQSxNQU1wQkcsVUFOb0I7QUFBQSxNQU1SQyxpQkFOUSxrQkFRM0I7OztBQVIyQixtQkFTaUJKLHNEQUFRLENBQUMsRUFBRCxDQVR6QjtBQUFBLE1BU3BCSyxZQVRvQjtBQUFBLE1BU05DLG1CQVRNLGtCQVczQjs7O0FBWDJCLG1CQVlpQk4sc0RBQVEsQ0FBQyxFQUFELENBWnpCO0FBQUEsTUFZcEJPLFlBWm9CO0FBQUEsTUFZTkMsbUJBWk0sa0JBYzNCOzs7QUFkMkIsbUJBZTJCUixzREFBUSxDQUFDO0FBQzNEUyxlQUFXLEVBQUUsRUFEOEM7QUFFM0RDLFNBQUssRUFBRSxFQUZvRDtBQUczREMsUUFBSSxFQUFFLEVBSHFEO0FBSTNEQyxj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Q0FBQ3hCLENBQUMsQ0FBQ2tCLE1BQUYsQ0FBU0UsS0FBVixDQUFoRCxHQUE1QjtBQUFBO0FBQXhNO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVDSixlQWdESTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBUyxFQUFDLGtDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUEsb0JBRkUsZ0JBMkRBLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE1RFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0VILENBek1EOztHQUFNckUsZ0I7VUE4QjRCc0IsdUQ7OztNQTlCNUJ0QixnQjtBQTJNU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZ3JhbWFyLWNvbGVnaW8uMmJjOWE5ODQ5ZGYyMjNjZmZlOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgRmlyZWJhc2VDb250ZXh0IGZyb20gJy4uL2ZpcmViYXNlL2NvbnRleHQnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgdXNlUm9sZXMgZnJvbSAnLi4vaG9va3MvdXNlUm9sZXMnXHJcblxyXG5cclxuY29uc3QgQ29udGVuZWRvciA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW07XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSBhdXRvIDJyZW0gNDAlO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBUaXR1bG8gPSBzdHlsZWQuaDJgXHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuXHJcbiAgICB9XHJcbiAgXHJcbmBcclxuY29uc3QgVGl0dWxvMiA9IHN0eWxlZC5oMmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIFxyXG5cclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9ncmFtYXJDb2xlZ2lvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vc3RhdGUgY29sZWdpb3NcclxuICAgIGNvbnN0IFtjb2xlZ2lvc0RCLCBndWFyZGFyQ29sZWdpb3NEQl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3N0YXRlIHVzdWFyaW9zXHJcbiAgICBjb25zdCBbdXN1YXJpb3NEQiwgZ3VhcmRhclVzdWFyaW9zREJdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9zdGF0ZSBzdXBlcnZpc29yZXNcclxuICAgIGNvbnN0IFtzdXBlcnZpc29yZXMsIGd1YXJkYXJTdXBlcnZpc29yZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy8gc3RhdGUgcXVlIGd1YXJkYSBlbCBpZCBkZWwgc3VwZXJ2aXNvclxyXG4gICAgY29uc3QgW2lkU3VwZXJ2aXNvciwgZ3VhcmRhcklkU3VwZXJ2aXNvcl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICAvL3N0YXRlIGRlIGNvbGVnaW8gcHJvZ3JhbWFjaW9uXHJcbiAgICBjb25zdCBbbnVldmFQcm9ncmFtYWNpb24sIGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaW5zdGl0dWNpb246ICcnLFxyXG4gICAgICAgIGZlY2hhOiAnJyxcclxuICAgICAgICB6b25hOiAnJyxcclxuICAgICAgICBzdXBlcnZpc29yOiB7fSxcclxuICAgICAgICBjdXBvczogJycsXHJcbiAgICAgICAgY2FudGlkYWRkaXN0cmlidWlkb3JhczogJydcclxuICAgIH0pXHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gdHJhZW1vcyBsYXMgZnVuY2lvbmVzIGRlIGZpcmViYXNlXHJcbiAgICBjb25zdCB7IGZpcmViYXNlLCB1c3VhcmlvIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dClcclxuXHJcbiAgICAvL2NvbnN1bHRhciBjb250ZXh0IGRlIHJvbGVzXHJcbiAgICBjb25zdCB7IGFkbWluLCBzdXBlcnZpc29yIH0gPSB1c2VSb2xlcygpXHJcblxyXG4gICAgLy8gZWZmZWN0IHF1ZSBhc2lnbmEgZWwgc3VwZXJ2aXNvclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhc2lnbmFyU1VwZXJ2aXNvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gc3VwZXJ2aXNvcmVzLmZpbHRlcihzdXAgPT4gc3VwLmlkID09PSBpZFN1cGVydmlzb3Iuc3VwZXJ2aXNvcilcclxuXHJcbiAgICAgICAgICAgIGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbih7Li4uIG51ZXZhUHJvZ3JhbWFjaW9uLCBzdXBlcnZpc29yOiByZXN1bHRhZG99KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXNpZ25hclNVcGVydmlzb3IoKVxyXG4gICAgfSwgW2lkU3VwZXJ2aXNvcl0pXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgdXN1YXJpb3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclVzdWFyaW9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCd1c3VhcmlvcycpLm9yZGVyQnkoJ3JvbCcpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclVzdWFyaW9zKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyVXN1YXJpb3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFVzdWFyaW9EQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhclVzdWFyaW9zREIodHJhZXJVc3VhcmlvcylcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgQ29sZWdpb3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lckNvbGVnaW9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdjb2xlZ2lvcycpLm9yZGVyQnkoJ25vbWJyZScpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lckNvbGVnaW9zKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyQ29sZWdpb3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZENvbGVnaW9zREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJDb2xlZ2lvc0RCKHRyYWVyQ29sZWdpb3MpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICAvLyB0cmFlciBsb3Mgc3VwZXJ2aXNvcmVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhclN1cGVydmlzb3JlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gdXN1YXJpb3NEQi5maWx0ZXIodXN1YXJpbyA9PiB1c3VhcmlvLnJvbCA9PT0gJ3N1cGVydmlzb3InKVxyXG5cclxuICAgICAgICAgICAgZ3VhcmRhclN1cGVydmlzb3JlcyhyZXN1bHRhZG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN1bHRhclN1cGVydmlzb3JlcygpXHJcbiAgICB9LCBbdXN1YXJpb3NEQl0pXHJcblxyXG4gICAgLy8gZ3VhcmRhciBwcm9ncmFtYWNpb25cclxuICAgIGNvbnN0IHByb2dyYW1hciA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBpZiAobnVldmFQcm9ncmFtYWNpb24uaW5zdGl0dWNpb24gPT09ICcnIHx8IG51ZXZhUHJvZ3JhbWFjaW9uLmZlY2hhID09PSAnJyB8fCBudWV2YVByb2dyYW1hY2lvbi56b25hID09PSAnJyB8fCBudWV2YVByb2dyYW1hY2lvbi5zdXBlcnZpc29yID09PSAnJyB8fCBudWV2YVByb2dyYW1hY2lvbi5jdXBvcyA9PT0gJycgfHwgbnVldmFQcm9ncmFtYWNpb24uY2FudGlkYWRkaXN0cmlidWlkb3JhcyA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZ3JhbWFjaW9uJykuYWRkKG51ZXZhUHJvZ3JhbWFjaW9uKVxyXG4gICAgICAgICAgICBndWFyZGFyTnVldmFQcm9ncmFtYWNpb24oe1xyXG4gICAgICAgICAgICAgICAgaW5zdGl0dWNpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgZmVjaGE6ICcnLFxyXG4gICAgICAgICAgICAgICAgem9uYTogJycsXHJcbiAgICAgICAgICAgICAgICBzdXBlcnZpc29yOiAnJyxcclxuICAgICAgICAgICAgICAgIGN1cG9zOiAnJyxcclxuICAgICAgICAgICAgICAgIGNhbnRpZGFkZGlzdHJpYnVpZG9yYXM6ICcnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICAgICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDcmVhZG8gY29uIGV4aXRvJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICB7YWRtaW5cclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdHVsbz5Qcm9ncmFtYXIgdW4gTnVldm8gQ29sZWdpbzwvVGl0dWxvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17cHJvZ3JhbWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImluc3RpdHVjaW9uXCI+SW5zdGl0dWNpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbnN0aXR1Y2lvblwiIHZhbHVlPXtudWV2YVByb2dyYW1hY2lvbi5pbnN0aXR1Y2lvbn0gbmFtZT1cImluc3RpdHVjaW9uXCIgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck51ZXZhUHJvZ3JhbWFjaW9uKHsgLi4ubnVldmFQcm9ncmFtYWNpb24sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPi0tRWxpZ2UgdW5hIG9wY2lvbi0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xlZ2lvc0RCLm1hcChjb2xlZ2lvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjb2xlZ2lvc0RCLmlkQ29sZWdpb3NEQn0gdmFsdWU9e2NvbGVnaW8ubm9tYnJlfT57Y29sZWdpby5ub21icmV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmZWNoYVwiPkZlY2hhIGRlIGVudHJlZ2E8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZmVjaGFcIiB2YWx1ZT17bnVldmFQcm9ncmFtYWNpb24uZmVjaGF9IHBsYWNlaG9sZGVyPVwiRXhhbXBsZSBpbnB1dCBwbGFjZWhvbGRlclwiIG5hbWU9XCJmZWNoYVwiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbih7IC4uLm51ZXZhUHJvZ3JhbWFjaW9uLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInpvbmFcIj5ab25hPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bnVldmFQcm9ncmFtYWNpb24uem9uYX0gaWQ9XCJ6b25hXCIgcGxhY2Vob2xkZXI9XCJBbWVyaWNhLCBCZWxlbiwgQ2FzdGlsbGEsIEFyYW5qdWV6LCBDYXVuY2VzXCIgbmFtZT1cInpvbmFcIiBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTnVldmFQcm9ncmFtYWNpb24oeyAuLi5udWV2YVByb2dyYW1hY2lvbiwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXBlcnZpc29yXCI+U3VwZXJ2aXNvciBSZXNwb25zYWJsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bnVldmFQcm9ncmFtYWNpb24uc3VwZXJ2aXNvci5ub21icmV9IGlkPVwic3VwZXJ2aXNvclwiIG5hbWU9XCJzdXBlcnZpc29yXCIgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhcklkU3VwZXJ2aXNvcih7W2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+LS1FbGlnZSB1bmEgb3BjaW9uLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1cGVydmlzb3Jlcy5tYXAoc3VwZXJ2aXNvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0cmFyID0gc3VwZXJ2aXNvcmVzLmZpbHRlcihzdXAgPT4gc3VwZXJ2aXNvci5pZCA9PT0gc3VwLmlkKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtmaWx0cmFyWzBdLmlkVXN1YXJpb0RCfSB2YWx1ZT17ZmlsdHJhclswXS5pZH0+e2ZpbHRyYXJbMF0ubm9tYnJlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7c3VwZXJ2aXNvcmVzLm1hcChzdXBlcnZpc29yID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3N1cGVydmlzb3J9PntzdXBlcnZpc29yLm5vbWJyZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXBvc1wiPkN1cG9zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtudWV2YVByb2dyYW1hY2lvbi5jdXBvc30gaWQ9XCJjdXBvc1wiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSBsb3MgQ3Vwb3MgZGUgbGEgU2VkZVwiIG5hbWU9XCJjdXBvc1wiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbih7IC4uLm51ZXZhUHJvZ3JhbWFjaW9uLCBbZS50YXJnZXQubmFtZV06IE51bWJlcihlLnRhcmdldC52YWx1ZSkgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlzdHJpYnVpZG9yYXNcIj5DYW50aWRhZCBkZSBEaXN0cmlidWlkb3JhczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bnVldmFQcm9ncmFtYWNpb24uY2FudGlkYWRkaXN0cmlidWlkb3Jhc30gaWQ9XCJkaXN0cmlidWlkb3Jhc1wiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSBsYSBDYW50aWRhZCBSZXF1ZXJpZGFcIiBuYW1lPVwiY2FudGlkYWRkaXN0cmlidWlkb3Jhc1wiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbih7IC4uLm51ZXZhUHJvZ3JhbWFjaW9uLCBbZS50YXJnZXQubmFtZV06IE51bWJlcihlLnRhcmdldC52YWx1ZSkgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGZvcm0tY29udHJvbCBteS0xXCI+Q3JlYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVuZWRvcj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgOiA8VGl0dWxvMj5ObyB0aWVuZXMgUGVybWlzb3MgcGFyYSBlc3RhciBhcXVpPC9UaXR1bG8yPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3JhbWFyQ29sZWdpbzsiXSwic291cmNlUm9vdCI6IiJ9