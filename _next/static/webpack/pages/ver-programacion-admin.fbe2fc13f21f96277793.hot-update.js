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

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    text-align: end;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

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
var EliminarP = _emotion_styled__WEBPACK_IMPORTED_MODULE_8__["default"].p(_templateObject6());
_c6 = EliminarP;

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
      guardarActivarBusqueda = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      mostrarProgramacion = _useState7[0],
      guardarMostrarProgramacion = _useState7[1];
  /* // traemos use ver programacion
  const { mostrarProgramacion, guardarMostrarProgramacion, cambiarEstado } = useVerProgramacion() */
  //effect de las busquedas


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
  }, []); //traer todos los mostrarProgramacion

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var obtenerColegios = function obtenerColegios() {
      firebase.db.collection('mostrarprogramacion').onSnapshot(manejarSnapshot);
    };

    obtenerColegios();

    function manejarSnapshot(snapshot) {
      var traerMostrar = snapshot.docs.map(function (doc) {
        return _objectSpread({
          idMostrarDB: doc.id
        }, doc.data());
      });
      guardarMostrarProgramacion(traerMostrar);
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
    if (mostrarProgramacion[0].verProgramacion) {
      var cambiar = firebase.db.collection('mostrarprogramacion').doc(mostrarProgramacion[0].idMostrarDB);
      return cambiar.update({
        verProgramacion: false
      });
    } else {
      var _cambiar = firebase.db.collection('mostrarprogramacion').doc(mostrarProgramacion[0].idMostrarDB);

      return _cambiar.update({
        verProgramacion: true
      });
    }
  };

  var eliminarProgramacion = function eliminarProgramacion(id) {
    var resultado = programacionDB.filter(function (programacion) {
      return programacion.idProgramacionDB === id;
    });

    if (resultado.length != 0) {
      resultado[0].asignacion.map(function (result) {
        var filtrarId = result.idAsignacionesDB;
        console.log(filtrarId);
        var eliminarAsignadas = firebase.db.collection('asignacion').doc(filtrarId);
        return eliminarAsignadas["delete"]();
      });
    }

    if (resultado.length != 0) {
      resultado[0].pendientes.map(function (result) {
        var filtrarId = result.idPendientesDB;
        console.log(filtrarId);
        var eliminarPendientes = firebase.db.collection('pendiente').doc(filtrarId);
        return eliminarPendientes["delete"]();
      });
    }

    var eliminarProgramacion = firebase.db.collection('programacion').doc(id);
    return eliminarProgramacion["delete"]();
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
        lineNumber: 503,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 154
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "button",
        className: "btn btn-dark my-2",
        children: "Buscar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Contenedor, {
      children: [mostrarProgramacion[0] === undefined ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: mostrarProgramacion[0].verProgramacion ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Publicar, {
          onClick: function onClick() {
            return mostrarProgramacionFn();
          },
          children: "Dejar de Publicar Programacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 31
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Publicar, {
          onClick: function onClick() {
            return mostrarProgramacionFn();
          },
          children: "Publicar Programacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 513,
          columnNumber: 31
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 23
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
        children: "Programacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 520,
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
                lineNumber: 526,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 525,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
                className: "card-title",
                children: sede.institucion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 529,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: "Zona: Castilla"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 530,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["Supervisor: ", sede.supervisor[0].nombre]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 532,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cupos: ", sede.cupos]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 533,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 534,
                columnNumber: 37
              }, _this), !sede.asignacion || sede.asignacion.length === 0 && sede.pendientes.length === 0 || !sede.pendientes ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
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
                    lineNumber: 540,
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
                    lineNumber: 543,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 539,
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
                            lineNumber: 552,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarAsignada(asignacion.idAsignacionesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 554,
                              columnNumber: 69
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 553,
                            columnNumber: 65
                          }, _this)]
                        }, asignacion.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 551,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 549,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 548,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 547,
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
                            lineNumber: 568,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: asignar,
                              children: "asignar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 570,
                              columnNumber: 69
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: eliminarPendiente,
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 571,
                              columnNumber: 69
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 569,
                            columnNumber: 65
                          }, _this)]
                        }, pendiente.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 567,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 565,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 564,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 563,
                  columnNumber: 45
                }, _this)]
              }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(EliminarP, {
                onClick: function onClick() {
                  return eliminarProgramacion(sede.idProgramacionDB);
                },
                children: "Eliminar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 582,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 528,
              columnNumber: 33
            }, _this)]
          }, sede.idProgramacionDB, true, {
            fileName: _jsxFileName,
            lineNumber: 524,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 522,
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
                lineNumber: 595,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 594,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
                className: "card-title",
                children: sede.institucion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 598,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: "Zona: Castilla"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 599,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["Supervisor: ", sede.supervisor[0].nombre]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 601,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cupos: ", sede.cupos]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 602,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 603,
                columnNumber: 37
              }, _this), !sede.asignacion || !sede.pendientes ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
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
                    lineNumber: 610,
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
                    lineNumber: 613,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 609,
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
                            lineNumber: 622,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarAsignada(asignacion.idAsignacionesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 624,
                              columnNumber: 69
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 623,
                            columnNumber: 65
                          }, _this)]
                        }, asignacion.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 621,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 619,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 618,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 617,
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
                            lineNumber: 637,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return asignar(pendiente.idPendientesDB);
                              },
                              children: "asignar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 639,
                              columnNumber: 69
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarPendiente(pendiente.idPendientesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 640,
                              columnNumber: 69
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 638,
                            columnNumber: 65
                          }, _this)]
                        }, pendiente.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 636,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 634,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 633,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 632,
                  columnNumber: 45
                }, _this)]
              }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(EliminarP, {
                onClick: function onClick() {
                  return eliminarProgramacion(sede.idProgramacionDB);
                },
                children: "Eliminar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 651,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 597,
              columnNumber: 33
            }, _this)]
          }, sede.idProgramacionDB, true, {
            fileName: _jsxFileName,
            lineNumber: 593,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 23
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 501,
    columnNumber: 9
  }, _this);
};

_s(VerprogramacionAdmin, "+PFiPNkZPCn1OsQU98Z0eeAJjY8=");

_c7 = VerprogramacionAdmin;
/* harmony default export */ __webpack_exports__["default"] = (VerprogramacionAdmin);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Buscar");
$RefreshReg$(_c2, "Contenedor");
$RefreshReg$(_c3, "Publicar");
$RefreshReg$(_c4, "ListaFlex");
$RefreshReg$(_c5, "ListaFlexPendiente");
$RefreshReg$(_c6, "EliminarP");
$RefreshReg$(_c7, "VerprogramacionAdmin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyLXByb2dyYW1hY2lvbi1hZG1pbi5qcyJdLCJuYW1lcyI6WyJCdXNjYXIiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW5lZG9yIiwiUHVibGljYXIiLCJwIiwiTGlzdGFGbGV4IiwibGkiLCJMaXN0YUZsZXhQZW5kaWVudGUiLCJFbGltaW5hclAiLCJWZXJwcm9ncmFtYWNpb25BZG1pbiIsInVzZVN0YXRlIiwicHJvZ3JhbWFjaW9uREIiLCJndWFyZGFyUHJvZ3JhbWFjaW9uREIiLCJ0ZXh0b2J1c3F1ZWRhIiwidGV4dG9CdXNxdWVkYSIsImd1YXJkYXJUZXh0b0J1c3F1ZWRhIiwiYXNpZ25hY2lvbmVzIiwiZ3VhcmRhckFzaWduYWNpb25lcyIsInBlbmRpZW50ZXMiLCJndWFyZGFyUGVuZGllbnRlcyIsInJlc3VsdGFkb0J1c3F1ZWRhIiwiZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhIiwiYWN0aXZhckJ1c3F1ZWRhIiwiZ3VhcmRhckFjdGl2YXJCdXNxdWVkYSIsIm1vc3RyYXJQcm9ncmFtYWNpb24iLCJndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbiIsInVzZUVmZmVjdCIsImJ1c2NhciIsInRvTG93ZXJDYXNlIiwicmVzdWx0YWRvIiwiZmlsdGVyIiwiYnVzcXVlZGEiLCJjdXBvcyIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJzdXBlcnZpc29yIiwibm9tYnJlIiwiem9uYSIsImluc3RpdHVjaW9uIiwiZmVjaGEiLCJjb21wYXJhcklkIiwiY29tcGFyYXJUb2RvcyIsImZvckVhY2giLCJzZWRlIiwiY29tcGFyYXJUb2RvSWRzIiwiaWRQcm9ncmFtYWNpb25EQiIsImNvbXBhcmFyVG9kb3NDYW50aWRhZCIsImNhbnRpZGFkZGlzdHJpYnVpZG9yYXMiLCJjb21wYXJhciIsImFzaWduYWNpb24iLCJpZFNlZGUiLCJndWFyZGFyUHJvZ3JhbWFjaW9uIiwiZWRpdGFyUHJvZHVjdG8iLCJmaXJlYmFzZSIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsInVwZGF0ZSIsInBlbmRpZW50ZSIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJ1c3VhcmlvIiwib2J0ZW5lclByb2dyYW1hY2lvbmVzIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsInRyYWVyUHJvZ3JhbWFjaW9uIiwiZG9jcyIsIm1hcCIsImlkIiwiZGF0YSIsImlkQXNpZ25hY2lvbmVzREIiLCJpZFBlbmRpZW50ZXNEQiIsIm9idGVuZXJDb2xlZ2lvcyIsInRyYWVyTW9zdHJhciIsImlkTW9zdHJhckRCIiwiZWxpbWluYXJBc2lnbmFkYSIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiY29uc29sZSIsImxvZyIsImVsaW1pbmFyQXNpZ25hY2lvbiIsImVsaW1pbmFyRm4iLCJhc2lnbmFyIiwiZ3VhcmRhckFzaWduYWRhcyIsImRhdG9zIiwiYXNpZ25hckZuIiwiYWRkIiwiZWxpbWluYXJQZW5kaWVudGVzIiwiZWxpbWluYXJQZW5kaWVudGUiLCJtb3N0cmFyUHJvZ3JhbWFjaW9uRm4iLCJ2ZXJQcm9ncmFtYWNpb24iLCJjYW1iaWFyIiwiZWxpbWluYXJQcm9ncmFtYWNpb24iLCJwcm9ncmFtYWNpb24iLCJsZW5ndGgiLCJmaWx0cmFySWQiLCJlbGltaW5hckFzaWduYWRhcyIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpZFVzdWFyaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtB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O0FBQUEsK0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUZKO0FBQUEsMkJBQTJEZixTQUFTLENBQUNzQyxLQUFWLENBQWdCa0IsU0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FEMEI7QUFBQSx1QkFBN0I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBeEJKO0FBQUEsOEJBWFIsZUFzREkscUVBQUMsU0FBRDtBQUFXLHVCQUFPLEVBQUU7QUFBQSx5QkFBTVYsb0JBQW9CLENBQUM3RCxJQUFJLENBQUNFLGdCQUFOLENBQTFCO0FBQUEsaUJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXRESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQSxhQUFnQ0YsSUFBSSxDQUFDRSxnQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEb0I7QUFBQSxTQUF2QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETCxHQWtFSyxJQXJKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1LSCxDQW5qQkQ7O0dBQU1wQyxvQjs7TUFBQUEsb0I7QUFxakJTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZXItcHJvZ3JhbWFjaW9uLWFkbWluLmZiZTJmYzEzZjIxZjk2Mjc3NzkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEZpcmViYXNlQ29udGV4dCBmcm9tICcuLi9maXJlYmFzZS9jb250ZXh0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB1c2VWZXJQcm9ncmFtYWNpb24gZnJvbSAnLi4vaG9va3MvdXNlVmVyUHJvZ3JhbWFjaW9uJ1xyXG5cclxuY29uc3QgQnVzY2FyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICAjZDZkOGRiO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDU1cmVtO1xyXG4gICAgICAgIG1hcmdpbjogNXJlbSBhdXRvIDJyZW0gMzAlO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBDb250ZW5lZG9yID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogNTVyZW07XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIGF1dG8gMnJlbSAzMCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IFB1YmxpY2FyID0gc3R5bGVkLnBgXHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuXHJcbmNvbnN0IExpc3RhRmxleCA9IHN0eWxlZC5saWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIGNvbG9yOiAjMGM1NDYwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjAuNXJlbTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAxcmVtIDAuNXJlbSAwIDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgTGlzdGFGbGV4UGVuZGllbnRlID0gc3R5bGVkLmxpYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmYzY2Q7XHJcbiAgICBjb2xvcjogIzg1NjQwNDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjAuNXJlbTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAxcmVtIDAuNXJlbSAwIDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5gXHJcbmNvbnN0IEVsaW1pbmFyUCA9IHN0eWxlZC5wYFxyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG5gXHJcblxyXG5jb25zdCBWZXJwcm9ncmFtYWNpb25BZG1pbiA9ICgpID0+IHtcclxuXHJcbiAgICAvL3N0YXRlXHJcbiAgICBjb25zdCBbcHJvZ3JhbWFjaW9uREIsIGd1YXJkYXJQcm9ncmFtYWNpb25EQl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3N0YXRlIGRlIGxhIGJ1c3F1ZWRhXHJcbiAgICBjb25zdCBbdGV4dG9CdXNxdWVkYSwgZ3VhcmRhclRleHRvQnVzcXVlZGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRleHRvYnVzcXVlZGE6ICcnXHJcbiAgICB9KVxyXG5cclxuICAgIC8vc3RhdGUgYXNpZ25hY2luZXMgY29tcGxldGFzXHJcbiAgICBjb25zdCBbYXNpZ25hY2lvbmVzLCBndWFyZGFyQXNpZ25hY2lvbmVzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vc3RhdGUgcGVuZGllbnRlc1xyXG4gICAgY29uc3QgW3BlbmRpZW50ZXMsIGd1YXJkYXJQZW5kaWVudGVzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vcmVzdWx0YWRvIGJ1c3F1ZWRhXHJcbiAgICBjb25zdCBbcmVzdWx0YWRvQnVzcXVlZGEsIGd1YXJkYXJSZXN1bHRhZG9CdXNxdWVkYV0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL2FjdGl2YXIgeSBkZXNhY3RpdmFyIGJ1c3F1ZWRhXHJcbiAgICBjb25zdCBbYWN0aXZhckJ1c3F1ZWRhLCBndWFyZGFyQWN0aXZhckJ1c3F1ZWRhXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFttb3N0cmFyUHJvZ3JhbWFjaW9uLCBndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbl0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgICAvKiAvLyB0cmFlbW9zIHVzZSB2ZXIgcHJvZ3JhbWFjaW9uXHJcbiAgICBjb25zdCB7IG1vc3RyYXJQcm9ncmFtYWNpb24sIGd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uLCBjYW1iaWFyRXN0YWRvIH0gPSB1c2VWZXJQcm9ncmFtYWNpb24oKSAqL1xyXG5cclxuXHJcbiAgICAvL2VmZmVjdCBkZSBsYXMgYnVzcXVlZGFzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1c2NhciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnVzY2FyID0gdGV4dG9CdXNxdWVkYS50ZXh0b2J1c3F1ZWRhLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gcHJvZ3JhbWFjaW9uREIuZmlsdGVyKGJ1c3F1ZWRhID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGJ1c3F1ZWRhLmNhbnRpZGFkZGlzdHJpYnVpZG9yYXMudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNjYXIpIHx8ICovXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzcXVlZGEuY3Vwb3MudG9TdHJpbmcoKS5pbmNsdWRlcyhidXNjYXIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYnVzcXVlZGEuc3VwZXJ2aXNvclswXS5ub21icmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNjYXIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYnVzcXVlZGEuem9uYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c2NhcikgfHxcclxuICAgICAgICAgICAgICAgICAgICBidXNxdWVkYS5pbnN0aXR1Y2lvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c2NhcikgfHxcclxuICAgICAgICAgICAgICAgICAgICBidXNxdWVkYS5mZWNoYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c2NhcilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGd1YXJkYXJSZXN1bHRhZG9CdXNxdWVkYShyZXN1bHRhZG8pXHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dG9CdXNxdWVkYS50ZXh0b2J1c3F1ZWRhID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZ3VhcmRhckFjdGl2YXJCdXNxdWVkYShmYWxzZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGd1YXJkYXJBY3RpdmFyQnVzcXVlZGEodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnVzY2FyKClcclxuXHJcblxyXG4gICAgfSwgW3RleHRvQnVzcXVlZGFdKVxyXG5cclxuICAgIC8vIGVmZmVjdCBxdWUgZ3VhcmRhIGxhcyBwb3N0dWxhY2lvbmVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBhcmFySWQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJhclRvZG9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbWFjaW9uREIuZm9yRWFjaChzZWRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJhclRvZG9JZHMgPSBzZWRlLmlkUHJvZ3JhbWFjaW9uREJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJhclRvZG9zQ2FudGlkYWQgPSBzZWRlLmNhbnRpZGFkZGlzdHJpYnVpZG9yYXNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJhciA9IGFzaWduYWNpb25lcy5maWx0ZXIoYXNpZ25hY2lvbiA9PiBhc2lnbmFjaW9uLmlkU2VkZSA9PT0gY29tcGFyYXJUb2RvSWRzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBzaSBzZSBxdWllcmUgcXVlIHNlIGxpbWl0ZSBndWFyZGFyIGxhIGNhbnRpZGFkIGRlIGRpc3RyaWJ1aWRvcmFzIGFjdGl2YXIgZWwgY29kaWdvIGNvbWVudGFkbyBkZSBhYmFqbyAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBndWFyZGFyUHJvZ3JhbWFjaW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdGFyUHJvZHVjdG8gPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZ3JhbWFjaW9uXCIpLmRvYyhjb21wYXJhclRvZG9JZHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGVkaXRhclByb2R1Y3RvLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2lnbmFjaW9uOiBjb21wYXJhclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb24oKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGlmIChjb21wYXJhci5sZW5ndGggPD0gY29tcGFyYXJUb2Rvc0NhbnRpZGFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1YXJkYXJQcm9ncmFtYWNpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdGFyUHJvZHVjdG8gPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZ3JhbWFjaW9uXCIpLmRvYyhjb21wYXJhclRvZG9JZHMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZWRpdGFyUHJvZHVjdG8udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2lnbmFjaW9uOiBjb21wYXJhclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBndWFyZGFyUHJvZ3JhbWFjaW9uKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbXBhcmFyVG9kb3MoKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBhcmFySWQoKVxyXG4gICAgfSwgW2FzaWduYWNpb25lc10pXHJcblxyXG4gICAgLy8gZWZmZWN0IHF1ZSBndWFyZGEgbG9zIHBlbmRpZW50ZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tcGFyYXJJZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmFyVG9kb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmFtYWNpb25EQi5mb3JFYWNoKHNlZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBhcmFyVG9kb0lkcyA9IHNlZGUuaWRQcm9ncmFtYWNpb25EQlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJhciA9IHBlbmRpZW50ZXMuZmlsdGVyKHBlbmRpZW50ZSA9PiBwZW5kaWVudGUuaWRTZWRlID09PSBjb21wYXJhclRvZG9JZHMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1YXJkYXJQcm9ncmFtYWNpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlZGl0YXJQcm9kdWN0byA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9ncmFtYWNpb25cIikuZG9jKGNvbXBhcmFyVG9kb0lkcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGVkaXRhclByb2R1Y3RvLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaWVudGVzOiBjb21wYXJhclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb24oKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbXBhcmFyVG9kb3MoKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBhcmFySWQoKVxyXG4gICAgfSwgW3BlbmRpZW50ZXNdKVxyXG5cclxuICAgIC8vIHRyYWVtb3MgbGFzIGZ1bmNpb25lcyBkZSBmaXJlYmFzZVxyXG4gICAgY29uc3QgeyBmaXJlYmFzZSwgdXN1YXJpbyB9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsYXMgUHJvZ3JhbWFjaW9uZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2dyYW1hY2lvbmVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwcm9ncmFtYWNpb24nKS5vcmRlckJ5KCdmZWNoYScsICdhc2MnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9idGVuZXJQcm9ncmFtYWNpb25lcygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFlclByb2dyYW1hY2lvbiA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkUHJvZ3JhbWFjaW9uREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb25EQih0cmFlclByb2dyYW1hY2lvbilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy90cmFlciB0b2RhcyBsYXMgYXNpZ25hY2lvbmVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9ncmFtYWNpb25lcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbignYXNpZ25hY2lvbicpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2dyYW1hY2lvbmVzKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyUHJvZ3JhbWFjaW9uID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRBc2lnbmFjaW9uZXNEQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhckFzaWduYWNpb25lcyh0cmFlclByb2dyYW1hY2lvbilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgcGVuZGllbnRlc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3BlbmRpZW50ZScpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2dyYW1hY2lvbmVzKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyUHJvZ3JhbWFjaW9uID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRQZW5kaWVudGVzREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJQZW5kaWVudGVzKHRyYWVyUHJvZ3JhbWFjaW9uKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvL3RyYWVyIHRvZG9zIGxvcyBtb3N0cmFyUHJvZ3JhbWFjaW9uXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJDb2xlZ2lvcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbignbW9zdHJhcnByb2dyYW1hY2lvbicpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lckNvbGVnaW9zKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyTW9zdHJhciA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkTW9zdHJhckRCOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbih0cmFlck1vc3RyYXIpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vZWxpbWluYXIgYXNpZ25hZGFcclxuICAgIGNvbnN0IGVsaW1pbmFyQXNpZ25hZGEgPSAoaWQpID0+IHtcclxuXHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdSZWFsbWVudGUgZGVzZWEgZWxpbWluYXIgZXN0ZSB1c3VhcmlvPycsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVW4gdXN1YXJpbyBxdWUgc2UgZWxpbWluZSBubyBzZSBwdWVkZSBSZWN1cGVyYXIhXCIsXHJcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnU2ksIEVsaW1pbmFyISdcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyQXNpZ25hY2lvbiA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ2FzaWduYWNpb24nKS5kb2MoaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJGbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxpbWluYXJBc2lnbmFjaW9uLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyRm4oKVxyXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICdFbGltaW5hZG8hJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2UgaGEgRWxpbWluYWRvIGNvbiBleGl0bydcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vcGFzYXIgZGUgcGVuZGllbnRlIGEgYXNpZ25hZGFcclxuICAgIGNvbnN0IGFzaWduYXIgPSAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwZW5kaWVudGVzLmZpbHRlcihwZW5kaWVudGUgPT4gcGVuZGllbnRlLmlkUGVuZGllbnRlc0RCID09PSBpZClcclxuXHJcbiAgICAgICAgbGV0IGd1YXJkYXJBc2lnbmFkYXMgPSB7fVxyXG5cclxuICAgICAgICBndWFyZGFyQXNpZ25hZGFzLmRhdG9zID0gcmVzdWx0YWRvWzBdLmRhdG9zXHJcbiAgICAgICAgZ3VhcmRhckFzaWduYWRhcy5pZFNlZGUgPSByZXN1bHRhZG9bMF0uaWRTZWRlXHJcblxyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUmVhbG1lbnRlIGRlc2VhIEFzaWduYXIgRXN0ZSBVc3VhcmlvPycsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiQWwgYXNpZ25hciBlc3RlIHVzdWFyaW8gc2UgZWxpbWluYXJhIGRlIHBlbmRpZW50ZXMhXCIsXHJcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnU2ksIEFzaWduYXIhJ1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNpZ25hckZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJhc2lnbmFjaW9uXCIpLmFkZChndWFyZGFyQXNpZ25hZGFzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJQZW5kaWVudGVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJQZW5kaWVudGUgPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwZW5kaWVudGUnKS5kb2MoaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsaW1pbmFyUGVuZGllbnRlLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsaW1pbmFyUGVuZGllbnRlcygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFzaWduYXJGbigpXHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FzaWduYWRhIScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlIGhhIGFzaWduYWRvIGNvbiBleGl0bydcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9FbGltaW5hciBkZSBwZW5kaWVudGVzXHJcbiAgICBjb25zdCBlbGltaW5hclBlbmRpZW50ZSA9IChpZCkgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUmVhbG1lbnRlIGRlc2VhIGVsaW1pbmFyIGVzdGUgdXN1YXJpbz8nLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlVuIHVzdWFyaW8gcXVlIHNlIGVsaW1pbmUgbm8gc2UgcHVlZGUgUmVjdXBlcmFyIVwiLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1NpLCBFbGltaW5hciEnXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGltaW5hclBlbmRpZW50ZSA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3BlbmRpZW50ZScpLmRvYyhpZClcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGltaW5hckZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGltaW5hclBlbmRpZW50ZS5kZWxldGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hckZuKClcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICAgICAgICAgICAnRWxpbWluYWRvIScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlIGhhIEVsaW1pbmFkbyBjb24gZXhpdG8nXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vbW9zdHJhciBsYSBwcm9ncmFtYWNpb24gYSBsYXMgZGlzdHJpYnVpZG9yYXNcclxuICAgIGNvbnN0IG1vc3RyYXJQcm9ncmFtYWNpb25GbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAobW9zdHJhclByb2dyYW1hY2lvblswXS52ZXJQcm9ncmFtYWNpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgY2FtYmlhciA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ21vc3RyYXJwcm9ncmFtYWNpb24nKS5kb2MobW9zdHJhclByb2dyYW1hY2lvblswXS5pZE1vc3RyYXJEQilcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjYW1iaWFyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2ZXJQcm9ncmFtYWNpb246IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjYW1iaWFyID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbignbW9zdHJhcnByb2dyYW1hY2lvbicpLmRvYyhtb3N0cmFyUHJvZ3JhbWFjaW9uWzBdLmlkTW9zdHJhckRCKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNhbWJpYXIudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHZlclByb2dyYW1hY2lvbjogdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsaW1pbmFyUHJvZ3JhbWFjaW9uID0gaWQgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwcm9ncmFtYWNpb25EQi5maWx0ZXIocHJvZ3JhbWFjaW9uID0+IHByb2dyYW1hY2lvbi5pZFByb2dyYW1hY2lvbkRCID09PSBpZClcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdGFkby5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICByZXN1bHRhZG9bMF0uYXNpZ25hY2lvbi5tYXAocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmaWx0cmFySWQgPSByZXN1bHQuaWRBc2lnbmFjaW9uZXNEQlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0cmFySWQpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJBc2lnbmFkYXMgPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdhc2lnbmFjaW9uJykuZG9jKGZpbHRyYXJJZClcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxpbWluYXJBc2lnbmFkYXMuZGVsZXRlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHRhZG8ubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0YWRvWzBdLnBlbmRpZW50ZXMubWFwKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsdHJhcklkID0gcmVzdWx0LmlkUGVuZGllbnRlc0RCXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRyYXJJZClcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGltaW5hclBlbmRpZW50ZXMgPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwZW5kaWVudGUnKS5kb2MoZmlsdHJhcklkKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGltaW5hclBlbmRpZW50ZXMuZGVsZXRlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVsaW1pbmFyUHJvZ3JhbWFjaW9uID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZ3JhbWFjaW9uJykuZG9jKGlkKVxyXG5cclxuICAgICAgICByZXR1cm4gZWxpbWluYXJQcm9ncmFtYWNpb24uZGVsZXRlKClcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxCdXNjYXI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiIG5hbWU9XCJ0ZXh0b2J1c3F1ZWRhXCIgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhclRleHRvQnVzcXVlZGEoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIG15LTJcIj5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9CdXNjYXI+XHJcblxyXG4gICAgICAgICAgICA8Q29udGVuZWRvcj5cclxuICAgICAgICAgICAgICAgIHttb3N0cmFyUHJvZ3JhbWFjaW9uWzBdID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICA6IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3N0cmFyUHJvZ3JhbWFjaW9uWzBdLnZlclByb2dyYW1hY2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8UHVibGljYXIgb25DbGljaz17KCkgPT4gbW9zdHJhclByb2dyYW1hY2lvbkZuKCl9PkRlamFyIGRlIFB1YmxpY2FyIFByb2dyYW1hY2lvbjwvUHVibGljYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxQdWJsaWNhciBvbkNsaWNrPXsoKSA9PiBtb3N0cmFyUHJvZ3JhbWFjaW9uRm4oKX0+UHVibGljYXIgUHJvZ3JhbWFjaW9uPC9QdWJsaWNhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGgyPlByb2dyYW1hY2lvbjwvaDI+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZhckJ1c3F1ZWRhXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0YWRvQnVzcXVlZGEubWFwKHNlZGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG15LTNcIiBrZXk9e3NlZGUuaWRQcm9ncmFtYWNpb25EQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5GZWNoYSBkZXNwYWNobzoge3NlZGUuZmVjaGF9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntzZWRlLmluc3RpdHVjaW9ufTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlpvbmE6IENhc3RpbGxhPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+U3VwZXJ2aXNvcjoge3NlZGUuc3VwZXJ2aXNvclswXS5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5jdXBvczoge3NlZGUuY3Vwb3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5jYW50aWRhZCBEaXN0cmlidWlkb3Jhczoge3NlZGUuY2FudGlkYWRkaXN0cmlidWlkb3Jhc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2VkZS5hc2lnbmFjaW9uIHx8IHNlZGUuYXNpZ25hY2lvbi5sZW5ndGggPT09IDAgJiYgc2VkZS5wZW5kaWVudGVzLmxlbmd0aCA9PT0gMCB8fCAhc2VkZS5wZW5kaWVudGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBteC0xXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e2AjJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9YH0gcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzaWduYWRhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtgIyR7c2VkZS5pZFByb2dyYW1hY2lvbkRCfTFgfSByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGllbnRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD17c2VkZS5pZFByb2dyYW1hY2lvbkRCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWRlLmFzaWduYWNpb24ubWFwKGFzaWduYWNpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFGbGV4IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIGtleT17YXNpZ25hY2lvbi5kYXRvcy5pZFVzdWFyaW99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FzaWduYWNpb24uZGF0b3Mubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gZWxpbWluYXJBc2lnbmFkYShhc2lnbmFjaW9uLmlkQXNpZ25hY2lvbmVzREIpfT5YPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdGFGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9e2Ake3NlZGUuaWRQcm9ncmFtYWNpb25EQn0xYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VkZS5wZW5kaWVudGVzLm1hcChwZW5kaWVudGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFGbGV4UGVuZGllbnRlIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBhbGVydFwiIGtleT17cGVuZGllbnRlLmRhdG9zLmlkVXN1YXJpb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGVuZGllbnRlLmRhdG9zLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2FzaWduYXJ9PmFzaWduYXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17ZWxpbWluYXJQZW5kaWVudGV9Plg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0YUZsZXhQZW5kaWVudGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVsaW1pbmFyUCBvbkNsaWNrPXsoKSA9PiBlbGltaW5hclByb2dyYW1hY2lvbihzZWRlLmlkUHJvZ3JhbWFjaW9uREIpfT5FbGltaW5hcjwvRWxpbWluYXJQPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgey8qIGN1YW5kbyBubyBzZSBlc3RhIGJ1c2NhbmRvICovfVxyXG4gICAgICAgICAgICAgICAgeyFhY3RpdmFyQnVzcXVlZGFcclxuICAgICAgICAgICAgICAgICAgICA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9ncmFtYWNpb25EQi5tYXAoc2VkZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbXktM1wiIGtleT17c2VkZS5pZFByb2dyYW1hY2lvbkRCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPkZlY2hhIGRlc3BhY2hvOiB7c2VkZS5mZWNoYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3NlZGUuaW5zdGl0dWNpb259PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Wm9uYTogQ2FzdGlsbGE8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5TdXBlcnZpc29yOiB7c2VkZS5zdXBlcnZpc29yWzBdLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPmN1cG9zOiB7c2VkZS5jdXBvc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPmNhbnRpZGFkIERpc3RyaWJ1aWRvcmFzOiB7c2VkZS5jYW50aWRhZGRpc3RyaWJ1aWRvcmFzfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2VkZS5hc2lnbmFjaW9uIHx8ICFzZWRlLnBlbmRpZW50ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG14LTFcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj17YCMke3NlZGUuaWRQcm9ncmFtYWNpb25EQn1gfSByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXNpZ25hZGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e2AjJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9YWB9IHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZW5kaWVudGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPXtgJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VkZS5hc2lnbmFjaW9uLm1hcChhc2lnbmFjaW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RhRmxleCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2FzaWduYWNpb24uZGF0b3MuaWRVc3VhcmlvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthc2lnbmFjaW9uLmRhdG9zLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IGVsaW1pbmFyQXNpZ25hZGEoYXNpZ25hY2lvbi5pZEFzaWduYWNpb25lc0RCKX0+WDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RhRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9e2Ake3NlZGUuaWRQcm9ncmFtYWNpb25EQn1hYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VkZS5wZW5kaWVudGVzLm1hcChwZW5kaWVudGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFGbGV4UGVuZGllbnRlIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBhbGVydFwiIGtleT17cGVuZGllbnRlLmRhdG9zLmlkVXN1YXJpb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGVuZGllbnRlLmRhdG9zLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IGFzaWduYXIocGVuZGllbnRlLmlkUGVuZGllbnRlc0RCKX0+YXNpZ25hcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBlbGltaW5hclBlbmRpZW50ZShwZW5kaWVudGUuaWRQZW5kaWVudGVzREIpfT5YPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdGFGbGV4UGVuZGllbnRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbGltaW5hclAgb25DbGljaz17KCkgPT4gZWxpbWluYXJQcm9ncmFtYWNpb24oc2VkZS5pZFByb2dyYW1hY2lvbkRCKX0+RWxpbWluYXI8L0VsaW1pbmFyUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvQ29udGVuZWRvcj5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJwcm9ncmFtYWNpb25BZG1pbjsiXSwic291cmNlUm9vdCI6IiJ9