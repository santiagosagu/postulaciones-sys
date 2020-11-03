webpackHotUpdate_N_E("pages/ver-programacion-admin",{

/***/ "./pages/ver-programacion-admin.js":
/*!*****************************************!*\
  !*** ./pages/ver-programacion-admin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _firebase_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase/context */ "./firebase/context.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useVerProgramacion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useVerProgramacion */ "./hooks/useVerProgramacion.js");







var _jsxFileName = "D:\\PROYECTOS\\postulaciones\\pages\\ver-programacion-admin.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #e1e1e1;\n    background-color:  #fff3cd;\n    color: #856404;\n    border-color: #ffeeba;\n    margin-bottom: 0.5rem;\n    align-items: center;\n    padding:0.5rem;\n\n    p {\n        margin: 0.5rem 1rem 0.5rem 0 ;\n    }\n    \n    div{\n        display: flex;\n        \n        p {\n            margin: 0 1rem 0 0;\n            cursor: pointer;\n        }\n    }\n    \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #e1e1e1;\n    color: #0c5460;\n    background-color: #d1ecf1;\n    border-color: #bee5eb;\n    margin-bottom: 0.5rem;\n    align-items: center;\n    padding:0.5rem;\n\n    p {\n        margin: 0.5rem 1rem 0.5rem 0 ;\n    }\n    \n    div{\n        display: flex;\n        \n        p {\n            margin-right: 1rem;\n            cursor: pointer;\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    text-align: start;\n    cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    background: #e1e1e1;\n    \n    text-align: center;\n    align-items: center;\n    padding: 1rem;\n    margin: 1rem 0.5rem;\n\n    @media (min-width: 768px) {\n        width: 55rem;\n        margin: 2rem auto 2rem 30%;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    margin: 1rem 0.5rem;\n    text-align: center;\n    align-items: center;\n\n    input {\n        border: none;\n        border-bottom: 2px solid  #d6d8db;\n        width: 300px;\n\n    }\n\n    @media (min-width: 768px) {\n        width: 55rem;\n        margin: 5rem auto 2rem 30%;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Buscar = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
_c = Buscar;
var Contenedor = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
_c2 = Contenedor;
var Publicar = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].p(_templateObject3());
_c3 = Publicar;
var ListaFlex = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].li(_templateObject4());
_c4 = ListaFlex;
var ListaFlexPendiente = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].li(_templateObject5());
_c5 = ListaFlexPendiente;

var VerprogramacionAdmin = function VerprogramacionAdmin() {
  _s();

  //state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      programacionDB = _useState[0],
      guardarProgramacionDB = _useState[1]; //state de la busqueda


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    textobusqueda: ''
  }),
      textoBusqueda = _useState2[0],
      guardarTextoBusqueda = _useState2[1]; //state asignacines completas


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      asignaciones = _useState3[0],
      guardarAsignaciones = _useState3[1]; //state pendientes


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      pendientes = _useState4[0],
      guardarPendientes = _useState4[1]; //resultado busqueda


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      resultadoBusqueda = _useState5[0],
      guardarResultadoBusqueda = _useState5[1]; //activar y desactivar busqueda


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      activarBusqueda = _useState6[0],
      guardarActivarBusqueda = _useState6[1]; // traemos use ver programacion


  var _useVerProgramacion = Object(_hooks_useVerProgramacion__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      mostrarProgramacion = _useVerProgramacion.mostrarProgramacion,
      guardarMostrarProgramacion = _useVerProgramacion.guardarMostrarProgramacion,
      cambiarEstado = _useVerProgramacion.cambiarEstado; //effect de las busquedas


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var buscar = function buscar() {
      var buscar = textoBusqueda.textobusqueda.toLowerCase();
      var resultado = programacionDB.filter(function (busqueda) {
        return (
          /* busqueda.cantidaddistribuidoras.toLowerCase().includes(buscar) || */
          busqueda.cupos.toString().includes(buscar) || busqueda.supervisor[0].nombre.toLowerCase().includes(buscar) || busqueda.zona.toLowerCase().includes(buscar) || busqueda.institucion.toLowerCase().includes(buscar) || busqueda.fecha.toLowerCase().includes(buscar)
        );
      });
      guardarResultadoBusqueda(resultado);

      if (textoBusqueda.textobusqueda === '') {
        guardarActivarBusqueda(false);
      } else {
        guardarActivarBusqueda(true);
      }
    };

    buscar();
  }, [textoBusqueda]); // effect que guarda las postulaciones

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var compararId = function compararId() {
      var compararTodos = function compararTodos() {
        programacionDB.forEach(function (sede) {
          var compararTodoIds = sede.idProgramacionDB;
          var compararTodosCantidad = sede.cantidaddistribuidoras;
          var comparar = asignaciones.filter(function (asignacion) {
            return asignacion.idSede === compararTodoIds;
          });
          /* si se quiere que se limite guardar la cantidad de distribuidoras activar el codigo comentado de abajo */

          var guardarProgramacion = /*#__PURE__*/function () {
            var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
              var editarProducto;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      editarProducto = firebase.db.collection("programacion").doc(compararTodoIds);
                      _context.next = 3;
                      return editarProducto.update({
                        asignacion: comparar
                      });

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function guardarProgramacion() {
              return _ref.apply(this, arguments);
            };
          }();

          guardarProgramacion();
          /* if (comparar.length <= compararTodosCantidad) {
              const guardarProgramacion = async () => {
                  var editarProducto = firebase.db.collection("programacion").doc(compararTodoIds);
                      return await editarProducto.update({
                      asignacion: comparar
                    })
              }
                  guardarProgramacion()
            } */
        });
      };

      compararTodos();
    };

    compararId();
  }, [asignaciones]); // effect que guarda los pendientes

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var compararId = function compararId() {
      var compararTodos = function compararTodos() {
        programacionDB.forEach(function (sede) {
          var compararTodoIds = sede.idProgramacionDB;
          var comparar = pendientes.filter(function (pendiente) {
            return pendiente.idSede === compararTodoIds;
          });

          var guardarProgramacion = /*#__PURE__*/function () {
            var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
              var editarProducto;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      editarProducto = firebase.db.collection("programacion").doc(compararTodoIds);
                      _context2.next = 3;
                      return editarProducto.update({
                        pendientes: comparar
                      });

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function guardarProgramacion() {
              return _ref2.apply(this, arguments);
            };
          }();

          guardarProgramacion();
        });
      };

      compararTodos();
    };

    compararId();
  }, [pendientes]); // traemos las funciones de firebase

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_firebase_context__WEBPACK_IMPORTED_MODULE_7__["default"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario; //traer todos las Programaciones


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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
  }, []); //traer todas las asignaciones

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var obtenerProgramaciones = function obtenerProgramaciones() {
      firebase.db.collection('asignacion').onSnapshot(manejarSnapshot);
    };

    obtenerProgramaciones();

    function manejarSnapshot(snapshot) {
      var traerProgramacion = snapshot.docs.map(function (doc) {
        return _objectSpread({
          idAsignacionesDB: doc.id
        }, doc.data());
      });
      guardarAsignaciones(traerProgramacion);
    }
  }, []); //traer todos los pendientes

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var obtenerProgramaciones = function obtenerProgramaciones() {
      firebase.db.collection('pendiente').onSnapshot(manejarSnapshot);
    };

    obtenerProgramaciones();

    function manejarSnapshot(snapshot) {
      var traerProgramacion = snapshot.docs.map(function (doc) {
        return _objectSpread({
          idPendientesDB: doc.id
        }, doc.data());
      });
      guardarPendientes(traerProgramacion);
    }
  }, []); //eliminar asignada

  var eliminarAsignada = function eliminarAsignada(id) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
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
        var eliminarAsignacion = firebase.db.collection('asignacion').doc(id);

        var eliminarFn = function eliminarFn() {
          if (result === '') {
            return;
          } else {
            return eliminarAsignacion["delete"]();
          }
        };

        eliminarFn();
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Eliminado!', 'Se ha Eliminado con exito');
      }
    });
  }; //pasar de pendiente a asignada


  var asignar = function asignar(id) {
    var resultado = pendientes.filter(function (pendiente) {
      return pendiente.idPendientesDB === id;
    });
    var guardarAsignadas = {};
    guardarAsignadas.datos = resultado[0].datos;
    guardarAsignadas.idSede = resultado[0].idSede;
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
      title: 'Realmente desea Asignar Este Usuario?',
      text: "Al asignar este usuario se eliminara de pendientes!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Asignar!'
    }).then(function (result) {
      if (result.isConfirmed) {
        var asignarFn = function asignarFn() {
          if (result === '') {
            return;
          } else {
            firebase.db.collection("asignacion").add(guardarAsignadas);

            var eliminarPendientes = function eliminarPendientes() {
              var eliminarPendiente = firebase.db.collection('pendiente').doc(id);
              return eliminarPendiente["delete"]();
            };

            eliminarPendientes();
          }
        };

        asignarFn();
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Asignada!', 'Se ha asignado con exito');
      }
    });
  }; //Eliminar de pendientes


  var eliminarPendiente = function eliminarPendiente(id) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
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

        var _eliminarPendiente = firebase.db.collection('pendiente').doc(id);

        var eliminarFn = function eliminarFn() {
          if (result === '') {
            return;
          } else {
            return _eliminarPendiente["delete"]();
          }
        };

        eliminarFn();
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Eliminado!', 'Se ha Eliminado con exito');
      }
    });
  }; //mostrar la programacion a las distribuidoras


  var mostrarProgramacionFn = function mostrarProgramacionFn() {
    if (mostrarProgramacion) {
      guardarMostrarProgramacion(false);
    } else {
      guardarMostrarProgramacion(true);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Buscar, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "text",
        placeholder: "Buscar",
        name: "textobusqueda",
        onChange: function onChange(e) {
          return guardarTextoBusqueda(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 154
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "button",
        className: "btn btn-dark my-2",
        children: "Buscar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Contenedor, {
      children: [mostrarProgramacion ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Publicar, {
        onClick:
        /*  mostrarProgramacionFn() */
        cambiarEstado,
        children: "Dejar de Publicar Programacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 23
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Publicar, {
        onClick:
        /* mostrarProgramacionFn() */
        cambiarEstado,
        children: "Publicar Programacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 23
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
        children: "Programacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 17
      }, _this), activarBusqueda ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: resultadoBusqueda.map(function (sede) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "card my-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "card-header",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["Fecha despacho: ", sede.fecha, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 450,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 449,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
                className: "card-title",
                children: sede.institucion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 453,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: "Zona: Castilla"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 454,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["Supervisor: ", sede.supervisor[0].nombre]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 456,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cupos: ", sede.cupos]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 457,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 458,
                columnNumber: 37
              }, _this), !sede.asignacion || sede.asignacion.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                    className: "btn btn-success mx-1",
                    "data-toggle": "collapse",
                    href: "#".concat(sede.idProgramacionDB),
                    role: "button",
                    "aria-expanded": "false",
                    "aria-controls": "collapseExample",
                    children: "Asignadas"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 465,
                    columnNumber: 49
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                    className: "btn btn-warning",
                    "data-toggle": "collapse",
                    href: "#".concat(sede.idProgramacionDB, "1"),
                    role: "button",
                    "aria-expanded": "false",
                    "aria-controls": "collapseExample",
                    children: "Pendientes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 468,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 464,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "collapse",
                  id: sede.idProgramacionDB,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "card card-body",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
                      className: "list-group list-group-flush",
                      children: sede.asignacion.map(function (asignacion) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ListaFlex, {
                          className: "list-group-item",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                            children: asignacion.datos.nombre
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 477,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarAsignada(asignacion.idAsignacionesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 479,
                              columnNumber: 69
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 478,
                            columnNumber: 65
                          }, _this)]
                        }, asignacion.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 476,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 474,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 473,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 472,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "collapse",
                  id: "".concat(sede.idProgramacionDB, "1"),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "card card-body",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
                      className: "list-group list-group-flush",
                      children: sede.pendientes.map(function (pendiente) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ListaFlexPendiente, {
                          className: "list-group-item alert",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                            children: pendiente.datos.nombre
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 492,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: asignar,
                              children: "asignar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 494,
                              columnNumber: 69
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: eliminarPendiente,
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 495,
                              columnNumber: 69
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 493,
                            columnNumber: 65
                          }, _this)]
                        }, pendiente.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 491,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 489,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 488,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 487,
                  columnNumber: 45
                }, _this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 452,
              columnNumber: 33
            }, _this)]
          }, sede.idProgramacionDB, true, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 23
      }, _this) : null, !activarBusqueda ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: programacionDB.map(function (sede) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "card my-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "card-header",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["Fecha despacho: ", sede.fecha, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 519,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
                className: "card-title",
                children: sede.institucion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 522,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: "Zona: Castilla"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 523,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["Supervisor: ", sede.supervisor[0].nombre]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 525,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cupos: ", sede.cupos]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 526,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 527,
                columnNumber: 37
              }, _this), !sede.asignacion || sede.asignacion.length === 0 && sede.pendientes.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                    className: "btn btn-success mx-1",
                    "data-toggle": "collapse",
                    href: "#".concat(sede.idProgramacionDB),
                    role: "button",
                    "aria-expanded": "false",
                    "aria-controls": "collapseExample",
                    children: "Asignadas"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 534,
                    columnNumber: 49
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                    className: "btn btn-warning",
                    "data-toggle": "collapse",
                    href: "#".concat(sede.idProgramacionDB, "a"),
                    role: "button",
                    "aria-expanded": "false",
                    "aria-controls": "collapseExample",
                    children: "Pendientes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 537,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 533,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "collapse",
                  id: "".concat(sede.idProgramacionDB),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "card card-body",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
                      className: "list-group list-group-flush",
                      children: sede.asignacion.map(function (asignacion) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ListaFlex, {
                          className: "list-group-item",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                            children: asignacion.datos.nombre
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 546,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarAsignada(asignacion.idAsignacionesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 548,
                              columnNumber: 69
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 547,
                            columnNumber: 65
                          }, _this)]
                        }, asignacion.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 545,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 543,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 542,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 541,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "collapse",
                  id: "".concat(sede.idProgramacionDB, "a"),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "card card-body",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
                      className: "list-group list-group-flush",
                      children: sede.pendientes.map(function (pendiente) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ListaFlexPendiente, {
                          className: "list-group-item alert",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                            children: pendiente.datos.nombre
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 561,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return asignar(pendiente.idPendientesDB);
                              },
                              children: "asignar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 563,
                              columnNumber: 69
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarPendiente(pendiente.idPendientesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 564,
                              columnNumber: 69
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 562,
                            columnNumber: 65
                          }, _this)]
                        }, pendiente.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 560,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 558,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 557,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 556,
                  columnNumber: 45
                }, _this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 521,
              columnNumber: 33
            }, _this)]
          }, sede.idProgramacionDB, true, {
            fileName: _jsxFileName,
            lineNumber: 517,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 23
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 432,
    columnNumber: 9
  }, _this);
};

_s(VerprogramacionAdmin, "NCQ1SlAAdOI9pDd4gNNT2Vs73gw=", false, function () {
  return [_hooks_useVerProgramacion__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c6 = VerprogramacionAdmin;
/* harmony default export */ __webpack_exports__["default"] = (VerprogramacionAdmin);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Buscar");
$RefreshReg$(_c2, "Contenedor");
$RefreshReg$(_c3, "Publicar");
$RefreshReg$(_c4, "ListaFlex");
$RefreshReg$(_c5, "ListaFlexPendiente");
$RefreshReg$(_c6, "VerprogramacionAdmin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyLXByb2dyYW1hY2lvbi1hZG1pbi5qcyJdLCJuYW1lcyI6WyJCdXNjYXIiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW5lZG9yIiwiUHVibGljYXIiLCJwIiwiTGlzdGFGbGV4IiwibGkiLCJMaXN0YUZsZXhQZW5kaWVudGUiLCJWZXJwcm9ncmFtYWNpb25BZG1pbiIsInVzZVN0YXRlIiwicHJvZ3JhbWFjaW9uREIiLCJndWFyZGFyUHJvZ3JhbWFjaW9uREIiLCJ0ZXh0b2J1c3F1ZWRhIiwidGV4dG9CdXNxdWVkYSIsImd1YXJkYXJUZXh0b0J1c3F1ZWRhIiwiYXNpZ25hY2lvbmVzIiwiZ3VhcmRhckFzaWduYWNpb25lcyIsInBlbmRpZW50ZXMiLCJndWFyZGFyUGVuZGllbnRlcyIsInJlc3VsdGFkb0J1c3F1ZWRhIiwiZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhIiwiYWN0aXZhckJ1c3F1ZWRhIiwiZ3VhcmRhckFjdGl2YXJCdXNxdWVkYSIsInVzZVZlclByb2dyYW1hY2lvbiIsIm1vc3RyYXJQcm9ncmFtYWNpb24iLCJndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbiIsImNhbWJpYXJFc3RhZG8iLCJ1c2VFZmZlY3QiLCJidXNjYXIiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdGFkbyIsImZpbHRlciIsImJ1c3F1ZWRhIiwiY3Vwb3MiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwic3VwZXJ2aXNvciIsIm5vbWJyZSIsInpvbmEiLCJpbnN0aXR1Y2lvbiIsImZlY2hhIiwiY29tcGFyYXJJZCIsImNvbXBhcmFyVG9kb3MiLCJmb3JFYWNoIiwic2VkZSIsImNvbXBhcmFyVG9kb0lkcyIsImlkUHJvZ3JhbWFjaW9uREIiLCJjb21wYXJhclRvZG9zQ2FudGlkYWQiLCJjYW50aWRhZGRpc3RyaWJ1aWRvcmFzIiwiY29tcGFyYXIiLCJhc2lnbmFjaW9uIiwiaWRTZWRlIiwiZ3VhcmRhclByb2dyYW1hY2lvbiIsImVkaXRhclByb2R1Y3RvIiwiZmlyZWJhc2UiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1cGRhdGUiLCJwZW5kaWVudGUiLCJ1c2VDb250ZXh0IiwiRmlyZWJhc2VDb250ZXh0IiwidXN1YXJpbyIsIm9idGVuZXJQcm9ncmFtYWNpb25lcyIsIm9yZGVyQnkiLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBzaG90Iiwic25hcHNob3QiLCJ0cmFlclByb2dyYW1hY2lvbiIsImRvY3MiLCJtYXAiLCJpZCIsImRhdGEiLCJpZEFzaWduYWNpb25lc0RCIiwiaWRQZW5kaWVudGVzREIiLCJlbGltaW5hckFzaWduYWRhIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJjb25zb2xlIiwibG9nIiwiZWxpbWluYXJBc2lnbmFjaW9uIiwiZWxpbWluYXJGbiIsImFzaWduYXIiLCJndWFyZGFyQXNpZ25hZGFzIiwiZGF0b3MiLCJhc2lnbmFyRm4iLCJhZGQiLCJlbGltaW5hclBlbmRpZW50ZXMiLCJlbGltaW5hclBlbmRpZW50ZSIsIm1vc3RyYXJQcm9ncmFtYWNpb25GbiIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsZW5ndGgiLCJpZFVzdWFyaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQVo7S0FBTUYsTTtBQWtCTixJQUFNRyxVQUFVLEdBQUdGLHVEQUFNLENBQUNDLEdBQVYsb0JBQWhCO01BQU1DLFU7QUFjTixJQUFNQyxRQUFR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QTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNEpILENBMWVEOztHQUFNdEMsb0I7VUF1QndFZSxrRTs7O01BdkJ4RWYsb0I7QUE0ZVNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zlci1wcm9ncmFtYWNpb24tYWRtaW4uZDc2YjMxMmQ2MDZlMzYyM2I3NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgRmlyZWJhc2VDb250ZXh0IGZyb20gJy4uL2ZpcmViYXNlL2NvbnRleHQnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuaW1wb3J0IHVzZVZlclByb2dyYW1hY2lvbiBmcm9tICcuLi9ob29rcy91c2VWZXJQcm9ncmFtYWNpb24nXHJcblxyXG5jb25zdCBCdXNjYXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgICNkNmQ4ZGI7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogNTVyZW07XHJcbiAgICAgICAgbWFyZ2luOiA1cmVtIGF1dG8gMnJlbSAzMCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbmVkb3IgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2UxZTFlMTtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiA1NXJlbTtcclxuICAgICAgICBtYXJnaW46IDJyZW0gYXV0byAycmVtIDMwJTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgUHVibGljYXIgPSBzdHlsZWQucGBcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5cclxuY29uc3QgTGlzdGFGbGV4ID0gc3R5bGVkLmxpYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgY29sb3I6ICMwYzU0NjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlY2YxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6MC41cmVtO1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDFyZW0gMC41cmVtIDAgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBMaXN0YUZsZXhQZW5kaWVudGUgPSBzdHlsZWQubGlgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZjNjZDtcclxuICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlZWJhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6MC41cmVtO1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDFyZW0gMC41cmVtIDAgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbmBcclxuXHJcbmNvbnN0IFZlcnByb2dyYW1hY2lvbkFkbWluID0gKCkgPT4ge1xyXG5cclxuICAgIC8vc3RhdGVcclxuICAgIGNvbnN0IFtwcm9ncmFtYWNpb25EQiwgZ3VhcmRhclByb2dyYW1hY2lvbkRCXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vc3RhdGUgZGUgbGEgYnVzcXVlZGFcclxuICAgIGNvbnN0IFt0ZXh0b0J1c3F1ZWRhLCBndWFyZGFyVGV4dG9CdXNxdWVkYV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdGV4dG9idXNxdWVkYTogJydcclxuICAgIH0pXHJcblxyXG4gICAgLy9zdGF0ZSBhc2lnbmFjaW5lcyBjb21wbGV0YXNcclxuICAgIGNvbnN0IFthc2lnbmFjaW9uZXMsIGd1YXJkYXJBc2lnbmFjaW9uZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9zdGF0ZSBwZW5kaWVudGVzXHJcbiAgICBjb25zdCBbcGVuZGllbnRlcywgZ3VhcmRhclBlbmRpZW50ZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9yZXN1bHRhZG8gYnVzcXVlZGFcclxuICAgIGNvbnN0IFtyZXN1bHRhZG9CdXNxdWVkYSwgZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vYWN0aXZhciB5IGRlc2FjdGl2YXIgYnVzcXVlZGFcclxuICAgIGNvbnN0IFthY3RpdmFyQnVzcXVlZGEsIGd1YXJkYXJBY3RpdmFyQnVzcXVlZGFdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gdHJhZW1vcyB1c2UgdmVyIHByb2dyYW1hY2lvblxyXG4gICAgY29uc3QgeyBtb3N0cmFyUHJvZ3JhbWFjaW9uLCBndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbiwgY2FtYmlhckVzdGFkb30gPSB1c2VWZXJQcm9ncmFtYWNpb24oKVxyXG5cclxuXHJcbiAgICAvL2VmZmVjdCBkZSBsYXMgYnVzcXVlZGFzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1c2NhciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnVzY2FyID0gdGV4dG9CdXNxdWVkYS50ZXh0b2J1c3F1ZWRhLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gcHJvZ3JhbWFjaW9uREIuZmlsdGVyKGJ1c3F1ZWRhID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGJ1c3F1ZWRhLmNhbnRpZGFkZGlzdHJpYnVpZG9yYXMudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNjYXIpIHx8ICovXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzcXVlZGEuY3Vwb3MudG9TdHJpbmcoKS5pbmNsdWRlcyhidXNjYXIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYnVzcXVlZGEuc3VwZXJ2aXNvclswXS5ub21icmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNjYXIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYnVzcXVlZGEuem9uYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c2NhcikgfHxcclxuICAgICAgICAgICAgICAgICAgICBidXNxdWVkYS5pbnN0aXR1Y2lvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c2NhcikgfHxcclxuICAgICAgICAgICAgICAgICAgICBidXNxdWVkYS5mZWNoYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c2NhcilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGd1YXJkYXJSZXN1bHRhZG9CdXNxdWVkYShyZXN1bHRhZG8pXHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dG9CdXNxdWVkYS50ZXh0b2J1c3F1ZWRhID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZ3VhcmRhckFjdGl2YXJCdXNxdWVkYShmYWxzZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGd1YXJkYXJBY3RpdmFyQnVzcXVlZGEodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnVzY2FyKClcclxuXHJcblxyXG4gICAgfSwgW3RleHRvQnVzcXVlZGFdKVxyXG5cclxuICAgIC8vIGVmZmVjdCBxdWUgZ3VhcmRhIGxhcyBwb3N0dWxhY2lvbmVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBhcmFySWQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJhclRvZG9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbWFjaW9uREIuZm9yRWFjaChzZWRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJhclRvZG9JZHMgPSBzZWRlLmlkUHJvZ3JhbWFjaW9uREJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJhclRvZG9zQ2FudGlkYWQgPSBzZWRlLmNhbnRpZGFkZGlzdHJpYnVpZG9yYXNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJhciA9IGFzaWduYWNpb25lcy5maWx0ZXIoYXNpZ25hY2lvbiA9PiBhc2lnbmFjaW9uLmlkU2VkZSA9PT0gY29tcGFyYXJUb2RvSWRzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBzaSBzZSBxdWllcmUgcXVlIHNlIGxpbWl0ZSBndWFyZGFyIGxhIGNhbnRpZGFkIGRlIGRpc3RyaWJ1aWRvcmFzIGFjdGl2YXIgZWwgY29kaWdvIGNvbWVudGFkbyBkZSBhYmFqbyAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBndWFyZGFyUHJvZ3JhbWFjaW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdGFyUHJvZHVjdG8gPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZ3JhbWFjaW9uXCIpLmRvYyhjb21wYXJhclRvZG9JZHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGVkaXRhclByb2R1Y3RvLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2lnbmFjaW9uOiBjb21wYXJhclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb24oKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGlmIChjb21wYXJhci5sZW5ndGggPD0gY29tcGFyYXJUb2Rvc0NhbnRpZGFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1YXJkYXJQcm9ncmFtYWNpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdGFyUHJvZHVjdG8gPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZ3JhbWFjaW9uXCIpLmRvYyhjb21wYXJhclRvZG9JZHMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZWRpdGFyUHJvZHVjdG8udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2lnbmFjaW9uOiBjb21wYXJhclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBndWFyZGFyUHJvZ3JhbWFjaW9uKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbXBhcmFyVG9kb3MoKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBhcmFySWQoKVxyXG4gICAgfSwgW2FzaWduYWNpb25lc10pXHJcblxyXG4gICAgLy8gZWZmZWN0IHF1ZSBndWFyZGEgbG9zIHBlbmRpZW50ZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tcGFyYXJJZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmFyVG9kb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmFtYWNpb25EQi5mb3JFYWNoKHNlZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBhcmFyVG9kb0lkcyA9IHNlZGUuaWRQcm9ncmFtYWNpb25EQlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJhciA9IHBlbmRpZW50ZXMuZmlsdGVyKHBlbmRpZW50ZSA9PiBwZW5kaWVudGUuaWRTZWRlID09PSBjb21wYXJhclRvZG9JZHMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1YXJkYXJQcm9ncmFtYWNpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlZGl0YXJQcm9kdWN0byA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9ncmFtYWNpb25cIikuZG9jKGNvbXBhcmFyVG9kb0lkcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGVkaXRhclByb2R1Y3RvLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaWVudGVzOiBjb21wYXJhclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb24oKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbXBhcmFyVG9kb3MoKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBhcmFySWQoKVxyXG4gICAgfSwgW3BlbmRpZW50ZXNdKVxyXG5cclxuICAgIC8vIHRyYWVtb3MgbGFzIGZ1bmNpb25lcyBkZSBmaXJlYmFzZVxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsYXMgUHJvZ3JhbWFjaW9uZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2dyYW1hY2lvbmVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9ncmFtYWNpb24nKS5vcmRlckJ5KCdmZWNoYScsICdhc2MnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9idGVuZXJQcm9ncmFtYWNpb25lcygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFlclByb2dyYW1hY2lvbiA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkUHJvZ3JhbWFjaW9uREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb25EQih0cmFlclByb2dyYW1hY2lvbilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy90cmFlciB0b2RhcyBsYXMgYXNpZ25hY2lvbmVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9ncmFtYWNpb25lcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbignYXNpZ25hY2lvbicpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2dyYW1hY2lvbmVzKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyUHJvZ3JhbWFjaW9uID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRBc2lnbmFjaW9uZXNEQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhckFzaWduYWNpb25lcyh0cmFlclByb2dyYW1hY2lvbilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgcGVuZGllbnRlc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3BlbmRpZW50ZScpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2dyYW1hY2lvbmVzKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyUHJvZ3JhbWFjaW9uID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRQZW5kaWVudGVzREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJQZW5kaWVudGVzKHRyYWVyUHJvZ3JhbWFjaW9uKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvL2VsaW1pbmFyIGFzaWduYWRhXHJcbiAgICBjb25zdCBlbGltaW5hckFzaWduYWRhID0gKGlkKSA9PiB7XHJcblxyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUmVhbG1lbnRlIGRlc2VhIGVsaW1pbmFyIGVzdGUgdXN1YXJpbz8nLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlVuIHVzdWFyaW8gcXVlIHNlIGVsaW1pbmUgbm8gc2UgcHVlZGUgUmVjdXBlcmFyIVwiLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1NpLCBFbGltaW5hciEnXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGltaW5hckFzaWduYWNpb24gPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdhc2lnbmFjaW9uJykuZG9jKGlkKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsaW1pbmFyQXNpZ25hY2lvbi5kZWxldGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hckZuKClcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICAgICAgICAgICAnRWxpbWluYWRvIScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlIGhhIEVsaW1pbmFkbyBjb24gZXhpdG8nXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL3Bhc2FyIGRlIHBlbmRpZW50ZSBhIGFzaWduYWRhXHJcbiAgICBjb25zdCBhc2lnbmFyID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gcGVuZGllbnRlcy5maWx0ZXIocGVuZGllbnRlID0+IHBlbmRpZW50ZS5pZFBlbmRpZW50ZXNEQiA9PT0gaWQpXHJcblxyXG4gICAgICAgIGxldCBndWFyZGFyQXNpZ25hZGFzID0ge31cclxuXHJcbiAgICAgICAgZ3VhcmRhckFzaWduYWRhcy5kYXRvcyA9IHJlc3VsdGFkb1swXS5kYXRvc1xyXG4gICAgICAgIGd1YXJkYXJBc2lnbmFkYXMuaWRTZWRlID0gcmVzdWx0YWRvWzBdLmlkU2VkZVxyXG5cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1JlYWxtZW50ZSBkZXNlYSBBc2lnbmFyIEVzdGUgVXN1YXJpbz8nLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkFsIGFzaWduYXIgZXN0ZSB1c3VhcmlvIHNlIGVsaW1pbmFyYSBkZSBwZW5kaWVudGVzIVwiLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1NpLCBBc2lnbmFyISdcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFzaWduYXJGbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwiYXNpZ25hY2lvblwiKS5hZGQoZ3VhcmRhckFzaWduYWRhcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyUGVuZGllbnRlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyUGVuZGllbnRlID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncGVuZGllbnRlJykuZG9jKGlkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGltaW5hclBlbmRpZW50ZS5kZWxldGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGltaW5hclBlbmRpZW50ZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhc2lnbmFyRm4oKVxyXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICdBc2lnbmFkYSEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZSBoYSBhc2lnbmFkbyBjb24gZXhpdG8nXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vRWxpbWluYXIgZGUgcGVuZGllbnRlc1xyXG4gICAgY29uc3QgZWxpbWluYXJQZW5kaWVudGUgPSAoaWQpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1JlYWxtZW50ZSBkZXNlYSBlbGltaW5hciBlc3RlIHVzdWFyaW8/JyxcclxuICAgICAgICAgICAgdGV4dDogXCJVbiB1c3VhcmlvIHF1ZSBzZSBlbGltaW5lIG5vIHNlIHB1ZWRlIFJlY3VwZXJhciFcIixcclxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdTaSwgRWxpbWluYXIhJ1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJQZW5kaWVudGUgPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwZW5kaWVudGUnKS5kb2MoaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJGbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxpbWluYXJQZW5kaWVudGUuZGVsZXRlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJGbigpXHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VsaW1pbmFkbyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZSBoYSBFbGltaW5hZG8gY29uIGV4aXRvJ1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL21vc3RyYXIgbGEgcHJvZ3JhbWFjaW9uIGEgbGFzIGRpc3RyaWJ1aWRvcmFzXHJcbiAgICBjb25zdCBtb3N0cmFyUHJvZ3JhbWFjaW9uRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vc3RyYXJQcm9ncmFtYWNpb24pIHtcclxuICAgICAgICAgICAgZ3VhcmRhck1vc3RyYXJQcm9ncmFtYWNpb24oZmFsc2UpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uKHRydWUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxCdXNjYXI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiIG5hbWU9XCJ0ZXh0b2J1c3F1ZWRhXCIgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhclRleHRvQnVzcXVlZGEoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIG15LTJcIj5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9CdXNjYXI+XHJcblxyXG4gICAgICAgICAgICA8Q29udGVuZWRvcj5cclxuICAgICAgICAgICAgICAgIHttb3N0cmFyUHJvZ3JhbWFjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8UHVibGljYXIgb25DbGljaz17LyogIG1vc3RyYXJQcm9ncmFtYWNpb25GbigpICovIGNhbWJpYXJFc3RhZG99PkRlamFyIGRlIFB1YmxpY2FyIFByb2dyYW1hY2lvbjwvUHVibGljYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8UHVibGljYXIgb25DbGljaz17LyogbW9zdHJhclByb2dyYW1hY2lvbkZuKCkgKi8gY2FtYmlhckVzdGFkb30+UHVibGljYXIgUHJvZ3JhbWFjaW9uPC9QdWJsaWNhcj5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8aDI+UHJvZ3JhbWFjaW9uPC9oMj5cclxuICAgICAgICAgICAgICAgIHthY3RpdmFyQnVzcXVlZGFcclxuICAgICAgICAgICAgICAgICAgICA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHRhZG9CdXNxdWVkYS5tYXAoc2VkZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbXktM1wiIGtleT17c2VkZS5pZFByb2dyYW1hY2lvbkRCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPkZlY2hhIGRlc3BhY2hvOiB7c2VkZS5mZWNoYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3NlZGUuaW5zdGl0dWNpb259PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Wm9uYTogQ2FzdGlsbGE8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5TdXBlcnZpc29yOiB7c2VkZS5zdXBlcnZpc29yWzBdLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPmN1cG9zOiB7c2VkZS5jdXBvc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPmNhbnRpZGFkIERpc3RyaWJ1aWRvcmFzOiB7c2VkZS5jYW50aWRhZGRpc3RyaWJ1aWRvcmFzfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2VkZS5hc2lnbmFjaW9uIHx8IHNlZGUuYXNpZ25hY2lvbi5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG14LTFcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj17YCMke3NlZGUuaWRQcm9ncmFtYWNpb25EQn1gfSByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXNpZ25hZGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e2AjJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9MWB9IHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZW5kaWVudGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPXtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlZGUuYXNpZ25hY2lvbi5tYXAoYXNpZ25hY2lvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0YUZsZXggY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXthc2lnbmFjaW9uLmRhdG9zLmlkVXN1YXJpb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YXNpZ25hY2lvbi5kYXRvcy5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBlbGltaW5hckFzaWduYWRhKGFzaWduYWNpb24uaWRBc2lnbmFjaW9uZXNEQil9Plg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0YUZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPXtgJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9MWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlZGUucGVuZGllbnRlcy5tYXAocGVuZGllbnRlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RhRmxleFBlbmRpZW50ZSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gYWxlcnRcIiBrZXk9e3BlbmRpZW50ZS5kYXRvcy5pZFVzdWFyaW99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BlbmRpZW50ZS5kYXRvcy5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXthc2lnbmFyfT5hc2lnbmFyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2VsaW1pbmFyUGVuZGllbnRlfT5YPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdGFGbGV4UGVuZGllbnRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey8qIGN1YW5kbyBubyBzZSBlc3RhIGJ1c2NhbmRvICovfVxyXG4gICAgICAgICAgICAgICAgeyFhY3RpdmFyQnVzcXVlZGFcclxuICAgICAgICAgICAgICAgICAgICA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9ncmFtYWNpb25EQi5tYXAoc2VkZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbXktM1wiIGtleT17c2VkZS5pZFByb2dyYW1hY2lvbkRCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPkZlY2hhIGRlc3BhY2hvOiB7c2VkZS5mZWNoYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3NlZGUuaW5zdGl0dWNpb259PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Wm9uYTogQ2FzdGlsbGE8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5TdXBlcnZpc29yOiB7c2VkZS5zdXBlcnZpc29yWzBdLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPmN1cG9zOiB7c2VkZS5jdXBvc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPmNhbnRpZGFkIERpc3RyaWJ1aWRvcmFzOiB7c2VkZS5jYW50aWRhZGRpc3RyaWJ1aWRvcmFzfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2VkZS5hc2lnbmFjaW9uIHx8IHNlZGUuYXNpZ25hY2lvbi5sZW5ndGggPT09IDAgJiYgc2VkZS5wZW5kaWVudGVzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXgtMVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtgIyR7c2VkZS5pZFByb2dyYW1hY2lvbkRCfWB9IHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBc2lnbmFkYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj17YCMke3NlZGUuaWRQcm9ncmFtYWNpb25EQn1hYH0gcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlbmRpZW50ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9e2Ake3NlZGUuaWRQcm9ncmFtYWNpb25EQn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWRlLmFzaWduYWNpb24ubWFwKGFzaWduYWNpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFGbGV4IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIGtleT17YXNpZ25hY2lvbi5kYXRvcy5pZFVzdWFyaW99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FzaWduYWNpb24uZGF0b3Mubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gZWxpbWluYXJBc2lnbmFkYShhc2lnbmFjaW9uLmlkQXNpZ25hY2lvbmVzREIpfT5YPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdGFGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD17YCR7c2VkZS5pZFByb2dyYW1hY2lvbkRCfWFgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWRlLnBlbmRpZW50ZXMubWFwKHBlbmRpZW50ZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0YUZsZXhQZW5kaWVudGUgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGFsZXJ0XCIga2V5PXtwZW5kaWVudGUuZGF0b3MuaWRVc3VhcmlvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwZW5kaWVudGUuZGF0b3Mubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gYXNpZ25hcihwZW5kaWVudGUuaWRQZW5kaWVudGVzREIpfT5hc2lnbmFyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IGVsaW1pbmFyUGVuZGllbnRlKHBlbmRpZW50ZS5pZFBlbmRpZW50ZXNEQil9Plg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0YUZsZXhQZW5kaWVudGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8L0NvbnRlbmVkb3I+XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVycHJvZ3JhbWFjaW9uQWRtaW47Il0sInNvdXJjZVJvb3QiOiIifQ==