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
                console.log(filtrar[0]);
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                  value: filtrar[0].id,
                  children: filtrar[0].nombre
                }, filtrar[0].id, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3JhbWFyLWNvbGVnaW8uanMiXSwibmFtZXMiOlsiQ29udGVuZWRvciIsInN0eWxlZCIsImRpdiIsIlRpdHVsbyIsImgyIiwiVGl0dWxvMiIsIlByb2dyYW1hckNvbGVnaW8iLCJ1c2VTdGF0ZSIsImNvbGVnaW9zREIiLCJndWFyZGFyQ29sZWdpb3NEQiIsInVzdWFyaW9zREIiLCJndWFyZGFyVXN1YXJpb3NEQiIsInN1cGVydmlzb3JlcyIsImd1YXJkYXJTdXBlcnZpc29yZXMiLCJpZFN1cGVydmlzb3IiLCJndWFyZGFySWRTdXBlcnZpc29yIiwiaW5zdGl0dWNpb24iLCJmZWNoYSIsInpvbmEiLCJzdXBlcnZpc29yIiwiY3Vwb3MiLCJjYW50aWRhZGRpc3RyaWJ1aWRvcmFzIiwibnVldmFQcm9ncmFtYWNpb24iLCJndWFyZGFyTnVldmFQcm9ncmFtYWNpb24iLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c3VhcmlvIiwidXNlUm9sZXMiLCJhZG1pbiIsInVzZUVmZmVjdCIsImFzaWduYXJTVXBlcnZpc29yIiwicmVzdWx0YWRvIiwiZmlsdGVyIiwic3VwIiwiaWQiLCJvYnRlbmVyVXN1YXJpb3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwidHJhZXJVc3VhcmlvcyIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZFVzdWFyaW9EQiIsImRhdGEiLCJvYnRlbmVyQ29sZWdpb3MiLCJ0cmFlckNvbGVnaW9zIiwiaWRDb2xlZ2lvc0RCIiwiY29uc3VsdGFyU3VwZXJ2aXNvcmVzIiwicm9sIiwicHJvZ3JhbWFyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbGVnaW8iLCJub21icmUiLCJmaWx0cmFyIiwiY29uc29sZSIsImxvZyIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7S0FBTUYsVTtBQWNOLElBQU1HLE1BQU0sR0FBR0YsdURBQU0sQ0FBQ0csRUFBVixvQkFBWjtNQUFNRCxNO0FBV04sSUFBTUUsT0FBTyxHQUFHSix1REFBTSxDQUFDRyxFQUFWLG9CQUFiO01BQU1DLE87O0FBVU4sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBRTNCO0FBRjJCLGtCQUdhQyxzREFBUSxDQUFDLEVBQUQsQ0FIckI7QUFBQSxNQUdwQkMsVUFIb0I7QUFBQSxNQUdSQyxpQkFIUSxpQkFLM0I7OztBQUwyQixtQkFNYUYsc0RBQVEsQ0FBQyxFQUFELENBTnJCO0FBQUEsTUFNcEJHLFVBTm9CO0FBQUEsTUFNUkMsaUJBTlEsa0JBUTNCOzs7QUFSMkIsbUJBU2lCSixzREFBUSxDQUFDLEVBQUQsQ0FUekI7QUFBQSxNQVNwQkssWUFUb0I7QUFBQSxNQVNOQyxtQkFUTSxrQkFXM0I7OztBQVgyQixtQkFZaUJOLHNEQUFRLENBQUMsRUFBRCxDQVp6QjtBQUFBLE1BWXBCTyxZQVpvQjtBQUFBLE1BWU5DLG1CQVpNLGtCQWMzQjs7O0FBZDJCLG1CQWUyQlIsc0RBQVEsQ0FBQztBQUMzRFMsZUFBVyxFQUFFLEVBRDhDO0FBRTNEQyxTQUFLLEVBQUUsRUFGb0Q7QUFHM0RDLFFBQUksRUFB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QixpQ0FBTUQsaUJBQU4scUdBQTBCaUMsQ0FBQyxDQUFDa0IsTUFBRixDQUFTQyxJQUFuQyxFQUEwQ08sTUFBTSxDQUFDMUIsQ0FBQyxDQUFDa0IsTUFBRixDQUFTRSxLQUFWLENBQWhELEdBQTVCO0FBQUE7QUFBeE07QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUNKLGVBZ0RJO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsa0NBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQSxvQkFGRSxnQkEyREEscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTVEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrRUgsQ0F6TUQ7O0dBQU1yRSxnQjtVQThCNEJzQix1RDs7O01BOUI1QnRCLGdCO0FBMk1TQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9ncmFtYXItY29sZWdpby4xNWJjZWVkMjJjZDkwMTI3MzdlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBGaXJlYmFzZUNvbnRleHQgZnJvbSAnLi4vZmlyZWJhc2UvY29udGV4dCdcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB1c2VSb2xlcyBmcm9tICcuLi9ob29rcy91c2VSb2xlcydcclxuXHJcblxyXG5jb25zdCBDb250ZW5lZG9yID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogNDByZW07XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIGF1dG8gMnJlbSA0MCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IFRpdHVsbyA9IHN0eWxlZC5oMmBcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG5cclxuICAgIH1cclxuICBcclxuYFxyXG5jb25zdCBUaXR1bG8yID0gc3R5bGVkLmgyYFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgXHJcblxyXG59XHJcbmBcclxuXHJcbmNvbnN0IFByb2dyYW1hckNvbGVnaW8gPSAoKSA9PiB7XHJcblxyXG4gICAgLy9zdGF0ZSBjb2xlZ2lvc1xyXG4gICAgY29uc3QgW2NvbGVnaW9zREIsIGd1YXJkYXJDb2xlZ2lvc0RCXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vc3RhdGUgdXN1YXJpb3NcclxuICAgIGNvbnN0IFt1c3Vhcmlvc0RCLCBndWFyZGFyVXN1YXJpb3NEQl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3N0YXRlIHN1cGVydmlzb3Jlc1xyXG4gICAgY29uc3QgW3N1cGVydmlzb3JlcywgZ3VhcmRhclN1cGVydmlzb3Jlc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvLyBzdGF0ZSBxdWUgZ3VhcmRhIGVsIGlkIGRlbCBzdXBlcnZpc29yXHJcbiAgICBjb25zdCBbaWRTdXBlcnZpc29yLCBndWFyZGFySWRTdXBlcnZpc29yXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIC8vc3RhdGUgZGUgY29sZWdpbyBwcm9ncmFtYWNpb25cclxuICAgIGNvbnN0IFtudWV2YVByb2dyYW1hY2lvbiwgZ3VhcmRhck51ZXZhUHJvZ3JhbWFjaW9uXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpbnN0aXR1Y2lvbjogJycsXHJcbiAgICAgICAgZmVjaGE6ICcnLFxyXG4gICAgICAgIHpvbmE6ICcnLFxyXG4gICAgICAgIHN1cGVydmlzb3I6IHt9LFxyXG4gICAgICAgIGN1cG9zOiAnJyxcclxuICAgICAgICBjYW50aWRhZGRpc3RyaWJ1aWRvcmFzOiAnJ1xyXG4gICAgfSlcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyB0cmFlbW9zIGxhcyBmdW5jaW9uZXMgZGUgZmlyZWJhc2VcclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuICAgIC8vY29uc3VsdGFyIGNvbnRleHQgZGUgcm9sZXNcclxuICAgIGNvbnN0IHsgYWRtaW4sIHN1cGVydmlzb3IgfSA9IHVzZVJvbGVzKClcclxuXHJcbiAgICAvLyBlZmZlY3QgcXVlIGFzaWduYSBlbCBzdXBlcnZpc29yXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFzaWduYXJTVXBlcnZpc29yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBzdXBlcnZpc29yZXMuZmlsdGVyKHN1cCA9PiBzdXAuaWQgPT09IGlkU3VwZXJ2aXNvci5zdXBlcnZpc29yKVxyXG5cclxuICAgICAgICAgICAgZ3VhcmRhck51ZXZhUHJvZ3JhbWFjaW9uKHsuLi4gbnVldmFQcm9ncmFtYWNpb24sIHN1cGVydmlzb3I6IHJlc3VsdGFkb30pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc2lnbmFyU1VwZXJ2aXNvcigpXHJcbiAgICB9LCBbaWRTdXBlcnZpc29yXSlcclxuXHJcbiAgICAvL3RyYWVyIHRvZG9zIGxvcyB1c3Vhcmlvc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyVXN1YXJpb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3VzdWFyaW9zJykub3JkZXJCeSgncm9sJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyVXN1YXJpb3MoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhZXJVc3VhcmlvcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkVXN1YXJpb0RCOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBndWFyZGFyVXN1YXJpb3NEQih0cmFlclVzdWFyaW9zKVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICAvL3RyYWVyIHRvZG9zIGxvcyBDb2xlZ2lvc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyQ29sZWdpb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ2NvbGVnaW9zJykub3JkZXJCeSgnbm9tYnJlJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyQ29sZWdpb3MoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhZXJDb2xlZ2lvcyA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkQ29sZWdpb3NEQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhckNvbGVnaW9zREIodHJhZXJDb2xlZ2lvcylcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIC8vIHRyYWVyIGxvcyBzdXBlcnZpc29yZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFyU3VwZXJ2aXNvcmVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSB1c3Vhcmlvc0RCLmZpbHRlcih1c3VhcmlvID0+IHVzdWFyaW8ucm9sID09PSAnc3VwZXJ2aXNvcicpXHJcblxyXG4gICAgICAgICAgICBndWFyZGFyU3VwZXJ2aXNvcmVzKHJlc3VsdGFkbylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3VsdGFyU3VwZXJ2aXNvcmVzKClcclxuICAgIH0sIFt1c3Vhcmlvc0RCXSlcclxuXHJcbiAgICAvLyBndWFyZGFyIHByb2dyYW1hY2lvblxyXG4gICAgY29uc3QgcHJvZ3JhbWFyID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGlmIChudWV2YVByb2dyYW1hY2lvbi5pbnN0aXR1Y2lvbiA9PT0gJycgfHwgbnVldmFQcm9ncmFtYWNpb24uZmVjaGEgPT09ICcnIHx8IG51ZXZhUHJvZ3JhbWFjaW9uLnpvbmEgPT09ICcnIHx8IG51ZXZhUHJvZ3JhbWFjaW9uLnN1cGVydmlzb3IgPT09ICcnIHx8IG51ZXZhUHJvZ3JhbWFjaW9uLmN1cG9zID09PSAnJyB8fCBudWV2YVByb2dyYW1hY2lvbi5jYW50aWRhZGRpc3RyaWJ1aWRvcmFzID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9ncmFtYWNpb24nKS5hZGQobnVldmFQcm9ncmFtYWNpb24pXHJcbiAgICAgICAgICAgIGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbih7XHJcbiAgICAgICAgICAgICAgICBpbnN0aXR1Y2lvbjogJycsXHJcbiAgICAgICAgICAgICAgICBmZWNoYTogJycsXHJcbiAgICAgICAgICAgICAgICB6b25hOiAnJyxcclxuICAgICAgICAgICAgICAgIHN1cGVydmlzb3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgY3Vwb3M6ICcnLFxyXG4gICAgICAgICAgICAgICAgY2FudGlkYWRkaXN0cmlidWlkb3JhczogJydcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgICAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NyZWFkbyBjb24gZXhpdG8nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIHthZG1pblxyXG4gICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0dWxvPlByb2dyYW1hciB1biBOdWV2byBDb2xlZ2lvPC9UaXR1bG8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVuZWRvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtwcm9ncmFtYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5zdGl0dWNpb25cIj5JbnN0aXR1Y2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImluc3RpdHVjaW9uXCIgdmFsdWU9e251ZXZhUHJvZ3JhbWFjaW9uLmluc3RpdHVjaW9ufSBuYW1lPVwiaW5zdGl0dWNpb25cIiBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTnVldmFQcm9ncmFtYWNpb24oeyAuLi5udWV2YVByb2dyYW1hY2lvbiwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+LS1FbGlnZSB1bmEgb3BjaW9uLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbGVnaW9zREIubWFwKGNvbGVnaW8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NvbGVnaW9zREIuaWRDb2xlZ2lvc0RCfSB2YWx1ZT17Y29sZWdpby5ub21icmV9Pntjb2xlZ2lvLm5vbWJyZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZlY2hhXCI+RmVjaGEgZGUgZW50cmVnYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmZWNoYVwiIHZhbHVlPXtudWV2YVByb2dyYW1hY2lvbi5mZWNoYX0gcGxhY2Vob2xkZXI9XCJFeGFtcGxlIGlucHV0IHBsYWNlaG9sZGVyXCIgbmFtZT1cImZlY2hhXCIgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck51ZXZhUHJvZ3JhbWFjaW9uKHsgLi4ubnVldmFQcm9ncmFtYWNpb24sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiem9uYVwiPlpvbmE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtudWV2YVByb2dyYW1hY2lvbi56b25hfSBpZD1cInpvbmFcIiBwbGFjZWhvbGRlcj1cIkFtZXJpY2EsIEJlbGVuLCBDYXN0aWxsYSwgQXJhbmp1ZXosIENhdW5jZXNcIiBuYW1lPVwiem9uYVwiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbih7IC4uLm51ZXZhUHJvZ3JhbWFjaW9uLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1cGVydmlzb3JcIj5TdXBlcnZpc29yIFJlc3BvbnNhYmxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtudWV2YVByb2dyYW1hY2lvbi5zdXBlcnZpc29yLm5vbWJyZX0gaWQ9XCJzdXBlcnZpc29yXCIgbmFtZT1cInN1cGVydmlzb3JcIiBvbkNoYW5nZT17ZSA9PiBndWFyZGFySWRTdXBlcnZpc29yKHtbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4tLUVsaWdlIHVuYSBvcGNpb24tLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VwZXJ2aXNvcmVzLm1hcChzdXBlcnZpc29yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRyYXIgPSBzdXBlcnZpc29yZXMuZmlsdGVyKHN1cCA9PiBzdXBlcnZpc29yLmlkID09PSBzdXAuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0cmFyWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtmaWx0cmFyWzBdLmlkfSB2YWx1ZT17ZmlsdHJhclswXS5pZH0+e2ZpbHRyYXJbMF0ubm9tYnJlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7c3VwZXJ2aXNvcmVzLm1hcChzdXBlcnZpc29yID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3N1cGVydmlzb3J9PntzdXBlcnZpc29yLm5vbWJyZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXBvc1wiPkN1cG9zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtudWV2YVByb2dyYW1hY2lvbi5jdXBvc30gaWQ9XCJjdXBvc1wiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSBsb3MgQ3Vwb3MgZGUgbGEgU2VkZVwiIG5hbWU9XCJjdXBvc1wiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbih7IC4uLm51ZXZhUHJvZ3JhbWFjaW9uLCBbZS50YXJnZXQubmFtZV06IE51bWJlcihlLnRhcmdldC52YWx1ZSkgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlzdHJpYnVpZG9yYXNcIj5DYW50aWRhZCBkZSBEaXN0cmlidWlkb3JhczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bnVldmFQcm9ncmFtYWNpb24uY2FudGlkYWRkaXN0cmlidWlkb3Jhc30gaWQ9XCJkaXN0cmlidWlkb3Jhc1wiIHBsYWNlaG9sZGVyPVwiRXNjcmliZSBsYSBDYW50aWRhZCBSZXF1ZXJpZGFcIiBuYW1lPVwiY2FudGlkYWRkaXN0cmlidWlkb3Jhc1wiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbih7IC4uLm51ZXZhUHJvZ3JhbWFjaW9uLCBbZS50YXJnZXQubmFtZV06IE51bWJlcihlLnRhcmdldC52YWx1ZSkgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGZvcm0tY29udHJvbCBteS0xXCI+Q3JlYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVuZWRvcj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgOiA8VGl0dWxvMj5ObyB0aWVuZXMgUGVybWlzb3MgcGFyYSBlc3RhciBhcXVpPC9UaXR1bG8yPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3JhbWFyQ29sZWdpbzsiXSwic291cmNlUm9vdCI6IiJ9