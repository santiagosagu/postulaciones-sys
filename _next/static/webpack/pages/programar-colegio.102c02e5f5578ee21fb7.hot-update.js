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
                console.log(filtrar[0].idUsuarioDB);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3JhbWFyLWNvbGVnaW8uanMiXSwibmFtZXMiOlsiQ29udGVuZWRvciIsInN0eWxlZCIsImRpdiIsIlRpdHVsbyIsImgyIiwiVGl0dWxvMiIsIlByb2dyYW1hckNvbGVnaW8iLCJ1c2VTdGF0ZSIsImNvbGVnaW9zREIiLCJndWFyZGFyQ29sZWdpb3NEQiIsInVzdWFyaW9zREIiLCJndWFyZGFyVXN1YXJpb3NEQiIsInN1cGVydmlzb3JlcyIsImd1YXJkYXJTdXBlcnZpc29yZXMiLCJpZFN1cGVydmlzb3IiLCJndWFyZGFySWRTdXBlcnZpc29yIiwiaW5zdGl0dWNpb24iLCJmZWNoYSIsInpvbmEiLCJzdXBlcnZpc29yIiwiY3Vwb3MiLCJjYW50aWRhZGRpc3RyaWJ1aWRvcmFzIiwibnVldmFQcm9ncmFtYWNpb24iLCJndWFyZGFyTnVldmFQcm9ncmFtYWNpb24iLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwiZmlyZWJhc2UiLCJ1c3VhcmlvIiwidXNlUm9sZXMiLCJhZG1pbiIsInVzZUVmZmVjdCIsImFzaWduYXJTVXBlcnZpc29yIiwicmVzdWx0YWRvIiwiZmlsdGVyIiwic3VwIiwiaWQiLCJvYnRlbmVyVXN1YXJpb3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsIm1hbmVqYXJTbmFwc2hvdCIsInNuYXBzaG90IiwidHJhZXJVc3VhcmlvcyIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZFVzdWFyaW9EQiIsImRhdGEiLCJvYnRlbmVyQ29sZWdpb3MiLCJ0cmFlckNvbGVnaW9zIiwiaWRDb2xlZ2lvc0RCIiwiY29uc3VsdGFyU3VwZXJ2aXNvcmVzIiwicm9sIiwicHJvZ3JhbWFyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbGVnaW8iLCJub21icmUiLCJmaWx0cmFyIiwiY29uc29sZSIsImxvZyIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7S0FBTUYsVTtBQWNOLElBQU1HLE1BQU0sR0FBR0YsdURBQU0sQ0FBQ0csRUFBVixvQkFBWjtNQUFNRCxNO0FBV04sSUFBTUUsT0FBTyxHQUFHSix1REFBTSxDQUFDRyxFQUFWLG9CQUFiO01BQU1DLE87O0FBVU4sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBRTNCO0FBRjJCLGtCQUdhQyxzREFBUSxDQUFDLEVBQUQsQ0FIckI7QUFBQSxNQUdwQkMsVUFIb0I7QUFBQSxNQUdSQyxpQkFIUSxpQkFLM0I7OztBQUwyQixtQkFNYUYsc0RBQVEsQ0FBQyxFQUFELENBTnJCO0FBQUEsTUFNcEJHLFVBTm9CO0FBQUEsTUFNUkMsaUJBTlEsa0JBUTNCOzs7QUFSMkIsbUJBU2lCSixzREFBUSxDQUFDLEVBQUQsQ0FUekI7QUFBQSxNQVNwQkssWUFUb0I7QUFBQSxNQVNOQyxtQkFUTSxrQkFXM0I7OztBQVgyQixtQkFZaUJOLHNEQUFRLENBQUMsRUFBRCxDQVp6QjtBQUFBLE1BWXBCTyxZQVpvQjtBQUFBLE1BWU5DLG1CQVpNLGtCQWMzQjs7O0FBZDJCLG1CQWUyQlIsc0RBQVEsQ0FBQztBQUMzRFMsZUFBVyxFQUFFLEVBRDhDO0FBRTNEQyxTQUFLLEVBQUUsRUFGb0Q7QUFHM0RDLFFBQUksRUFB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dUJBQUloQyx3QkFBd0IsaUNBQU1ELGlCQUFOLHFHQUEwQmlDLENBQUMsQ0FBQ2tCLE1BQUYsQ0FBU0MsSUFBbkMsRUFBMENPLE1BQU0sQ0FBQzFCLENBQUMsQ0FBQ2tCLE1BQUYsQ0FBU0UsS0FBVixDQUFoRCxHQUE1QjtBQUFBO0FBQXhNO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVDSixlQWdESTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBUyxFQUFDLGtDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUEsb0JBRkUsZ0JBMkRBLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE1RFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0VILENBek1EOztHQUFNckUsZ0I7VUE4QjRCc0IsdUQ7OztNQTlCNUJ0QixnQjtBQTJNU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZ3JhbWFyLWNvbGVnaW8uMTAyYzAyZTVmNTU3OGVlMjFmYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgRmlyZWJhc2VDb250ZXh0IGZyb20gJy4uL2ZpcmViYXNlL2NvbnRleHQnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgdXNlUm9sZXMgZnJvbSAnLi4vaG9va3MvdXNlUm9sZXMnXHJcblxyXG5cclxuY29uc3QgQ29udGVuZWRvciA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW07XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSBhdXRvIDJyZW0gNDAlO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBUaXR1bG8gPSBzdHlsZWQuaDJgXHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuXHJcbiAgICB9XHJcbiAgXHJcbmBcclxuY29uc3QgVGl0dWxvMiA9IHN0eWxlZC5oMmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIFxyXG5cclxufVxyXG5gXHJcblxyXG5jb25zdCBQcm9ncmFtYXJDb2xlZ2lvID0gKCkgPT4ge1xyXG5cclxuICAgIC8vc3RhdGUgY29sZWdpb3NcclxuICAgIGNvbnN0IFtjb2xlZ2lvc0RCLCBndWFyZGFyQ29sZWdpb3NEQl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3N0YXRlIHVzdWFyaW9zXHJcbiAgICBjb25zdCBbdXN1YXJpb3NEQiwgZ3VhcmRhclVzdWFyaW9zREJdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9zdGF0ZSBzdXBlcnZpc29yZXNcclxuICAgIGNvbnN0IFtzdXBlcnZpc29yZXMsIGd1YXJkYXJTdXBlcnZpc29yZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy8gc3RhdGUgcXVlIGd1YXJkYSBlbCBpZCBkZWwgc3VwZXJ2aXNvclxyXG4gICAgY29uc3QgW2lkU3VwZXJ2aXNvciwgZ3VhcmRhcklkU3VwZXJ2aXNvcl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICAvL3N0YXRlIGRlIGNvbGVnaW8gcHJvZ3JhbWFjaW9uXHJcbiAgICBjb25zdCBbbnVldmFQcm9ncmFtYWNpb24sIGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaW5zdGl0dWNpb246ICcnLFxyXG4gICAgICAgIGZlY2hhOiAnJyxcclxuICAgICAgICB6b25hOiAnJyxcclxuICAgICAgICBzdXBlcnZpc29yOiB7fSxcclxuICAgICAgICBjdXBvczogJycsXHJcbiAgICAgICAgY2FudGlkYWRkaXN0cmlidWlkb3JhczogJydcclxuICAgIH0pXHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gdHJhZW1vcyBsYXMgZnVuY2lvbmVzIGRlIGZpcmViYXNlXHJcbiAgICBjb25zdCB7IGZpcmViYXNlLCB1c3VhcmlvIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dClcclxuXHJcbiAgICAvL2NvbnN1bHRhciBjb250ZXh0IGRlIHJvbGVzXHJcbiAgICBjb25zdCB7IGFkbWluLCBzdXBlcnZpc29yIH0gPSB1c2VSb2xlcygpXHJcblxyXG4gICAgLy8gZWZmZWN0IHF1ZSBhc2lnbmEgZWwgc3VwZXJ2aXNvclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhc2lnbmFyU1VwZXJ2aXNvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gc3VwZXJ2aXNvcmVzLmZpbHRlcihzdXAgPT4gc3VwLmlkID09PSBpZFN1cGVydmlzb3Iuc3VwZXJ2aXNvcilcclxuXHJcbiAgICAgICAgICAgIGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbih7Li4uIG51ZXZhUHJvZ3JhbWFjaW9uLCBzdXBlcnZpc29yOiByZXN1bHRhZG99KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXNpZ25hclNVcGVydmlzb3IoKVxyXG4gICAgfSwgW2lkU3VwZXJ2aXNvcl0pXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgdXN1YXJpb3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclVzdWFyaW9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCd1c3VhcmlvcycpLm9yZGVyQnkoJ3JvbCcpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclVzdWFyaW9zKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyVXN1YXJpb3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFVzdWFyaW9EQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhclVzdWFyaW9zREIodHJhZXJVc3VhcmlvcylcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgQ29sZWdpb3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lckNvbGVnaW9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdjb2xlZ2lvcycpLm9yZGVyQnkoJ25vbWJyZScpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lckNvbGVnaW9zKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyQ29sZWdpb3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZENvbGVnaW9zREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJDb2xlZ2lvc0RCKHRyYWVyQ29sZWdpb3MpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICAvLyB0cmFlciBsb3Mgc3VwZXJ2aXNvcmVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhclN1cGVydmlzb3JlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gdXN1YXJpb3NEQi5maWx0ZXIodXN1YXJpbyA9PiB1c3VhcmlvLnJvbCA9PT0gJ3N1cGVydmlzb3InKVxyXG5cclxuICAgICAgICAgICAgZ3VhcmRhclN1cGVydmlzb3JlcyhyZXN1bHRhZG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN1bHRhclN1cGVydmlzb3JlcygpXHJcbiAgICB9LCBbdXN1YXJpb3NEQl0pXHJcblxyXG4gICAgLy8gZ3VhcmRhciBwcm9ncmFtYWNpb25cclxuICAgIGNvbnN0IHByb2dyYW1hciA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBpZiAobnVldmFQcm9ncmFtYWNpb24uaW5zdGl0dWNpb24gPT09ICcnIHx8IG51ZXZhUHJvZ3JhbWFjaW9uLmZlY2hhID09PSAnJyB8fCBudWV2YVByb2dyYW1hY2lvbi56b25hID09PSAnJyB8fCBudWV2YVByb2dyYW1hY2lvbi5zdXBlcnZpc29yID09PSAnJyB8fCBudWV2YVByb2dyYW1hY2lvbi5jdXBvcyA9PT0gJycgfHwgbnVldmFQcm9ncmFtYWNpb24uY2FudGlkYWRkaXN0cmlidWlkb3JhcyA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZ3JhbWFjaW9uJykuYWRkKG51ZXZhUHJvZ3JhbWFjaW9uKVxyXG4gICAgICAgICAgICBndWFyZGFyTnVldmFQcm9ncmFtYWNpb24oe1xyXG4gICAgICAgICAgICAgICAgaW5zdGl0dWNpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgZmVjaGE6ICcnLFxyXG4gICAgICAgICAgICAgICAgem9uYTogJycsXHJcbiAgICAgICAgICAgICAgICBzdXBlcnZpc29yOiAnJyxcclxuICAgICAgICAgICAgICAgIGN1cG9zOiAnJyxcclxuICAgICAgICAgICAgICAgIGNhbnRpZGFkZGlzdHJpYnVpZG9yYXM6ICcnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICAgICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDcmVhZG8gY29uIGV4aXRvJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICB7YWRtaW5cclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdHVsbz5Qcm9ncmFtYXIgdW4gTnVldm8gQ29sZWdpbzwvVGl0dWxvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17cHJvZ3JhbWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImluc3RpdHVjaW9uXCI+SW5zdGl0dWNpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbnN0aXR1Y2lvblwiIHZhbHVlPXtudWV2YVByb2dyYW1hY2lvbi5pbnN0aXR1Y2lvbn0gbmFtZT1cImluc3RpdHVjaW9uXCIgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhck51ZXZhUHJvZ3JhbWFjaW9uKHsgLi4ubnVldmFQcm9ncmFtYWNpb24sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPi0tRWxpZ2UgdW5hIG9wY2lvbi0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xlZ2lvc0RCLm1hcChjb2xlZ2lvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjb2xlZ2lvc0RCLmlkQ29sZWdpb3NEQn0gdmFsdWU9e2NvbGVnaW8ubm9tYnJlfT57Y29sZWdpby5ub21icmV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmZWNoYVwiPkZlY2hhIGRlIGVudHJlZ2E8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZmVjaGFcIiB2YWx1ZT17bnVldmFQcm9ncmFtYWNpb24uZmVjaGF9IHBsYWNlaG9sZGVyPVwiRXhhbXBsZSBpbnB1dCBwbGFjZWhvbGRlclwiIG5hbWU9XCJmZWNoYVwiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJOdWV2YVByb2dyYW1hY2lvbih7IC4uLm51ZXZhUHJvZ3JhbWFjaW9uLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInpvbmFcIj5ab25hPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bnVldmFQcm9ncmFtYWNpb24uem9uYX0gaWQ9XCJ6b25hXCIgcGxhY2Vob2xkZXI9XCJBbWVyaWNhLCBCZWxlbiwgQ2FzdGlsbGEsIEFyYW5qdWV6LCBDYXVuY2VzXCIgbmFtZT1cInpvbmFcIiBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTnVldmFQcm9ncmFtYWNpb24oeyAuLi5udWV2YVByb2dyYW1hY2lvbiwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXBlcnZpc29yXCI+U3VwZXJ2aXNvciBSZXNwb25zYWJsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bnVldmFQcm9ncmFtYWNpb24uc3VwZXJ2aXNvci5ub21icmV9IGlkPVwic3VwZXJ2aXNvclwiIG5hbWU9XCJzdXBlcnZpc29yXCIgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhcklkU3VwZXJ2aXNvcih7W2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+LS1FbGlnZSB1bmEgb3BjaW9uLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1cGVydmlzb3Jlcy5tYXAoc3VwZXJ2aXNvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0cmFyID0gc3VwZXJ2aXNvcmVzLmZpbHRlcihzdXAgPT4gc3VwZXJ2aXNvci5pZCA9PT0gc3VwLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdHJhclswXS5pZFVzdWFyaW9EQilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZmlsdHJhclswXS5pZH0gdmFsdWU9e2ZpbHRyYXJbMF0uaWR9PntmaWx0cmFyWzBdLm5vbWJyZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3N1cGVydmlzb3Jlcy5tYXAoc3VwZXJ2aXNvciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtzdXBlcnZpc29yfT57c3VwZXJ2aXNvci5ub21icmV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3Vwb3NcIj5DdXBvczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bnVldmFQcm9ncmFtYWNpb24uY3Vwb3N9IGlkPVwiY3Vwb3NcIiBwbGFjZWhvbGRlcj1cIkVzY3JpYmUgbG9zIEN1cG9zIGRlIGxhIFNlZGVcIiBuYW1lPVwiY3Vwb3NcIiBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTnVldmFQcm9ncmFtYWNpb24oeyAuLi5udWV2YVByb2dyYW1hY2lvbiwgW2UudGFyZ2V0Lm5hbWVdOiBOdW1iZXIoZS50YXJnZXQudmFsdWUpIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpc3RyaWJ1aWRvcmFzXCI+Q2FudGlkYWQgZGUgRGlzdHJpYnVpZG9yYXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e251ZXZhUHJvZ3JhbWFjaW9uLmNhbnRpZGFkZGlzdHJpYnVpZG9yYXN9IGlkPVwiZGlzdHJpYnVpZG9yYXNcIiBwbGFjZWhvbGRlcj1cIkVzY3JpYmUgbGEgQ2FudGlkYWQgUmVxdWVyaWRhXCIgbmFtZT1cImNhbnRpZGFkZGlzdHJpYnVpZG9yYXNcIiBvbkNoYW5nZT17ZSA9PiBndWFyZGFyTnVldmFQcm9ncmFtYWNpb24oeyAuLi5udWV2YVByb2dyYW1hY2lvbiwgW2UudGFyZ2V0Lm5hbWVdOiBOdW1iZXIoZS50YXJnZXQudmFsdWUpIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBmb3JtLWNvbnRyb2wgbXktMVwiPkNyZWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDogPFRpdHVsbzI+Tm8gdGllbmVzIFBlcm1pc29zIHBhcmEgZXN0YXIgYXF1aTwvVGl0dWxvMj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyYW1hckNvbGVnaW87Il0sInNvdXJjZVJvb3QiOiIifQ==