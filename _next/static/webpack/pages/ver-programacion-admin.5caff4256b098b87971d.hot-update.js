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
        lineNumber: 469,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 154
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "button",
        className: "btn btn-dark my-2",
        children: "Buscar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 468,
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
          lineNumber: 478,
          columnNumber: 31
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Publicar, {
          onClick: function onClick() {
            return mostrarProgramacionFn();
          },
          children: "Publicar Programacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 31
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 476,
        columnNumber: 23
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
        children: "Programacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 486,
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
                lineNumber: 492,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 491,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
                className: "card-title",
                children: sede.institucion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 495,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: "Zona: Castilla"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 496,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["Supervisor: ", sede.supervisor[0].nombre]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 498,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cupos: ", sede.cupos]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 499,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 500,
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
                    lineNumber: 507,
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
                    lineNumber: 510,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 506,
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
                            lineNumber: 519,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarAsignada(asignacion.idAsignacionesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 521,
                              columnNumber: 69
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 520,
                            columnNumber: 65
                          }, _this)]
                        }, asignacion.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 518,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 516,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 515,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 514,
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
                            lineNumber: 535,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: asignar,
                              children: "asignar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 537,
                              columnNumber: 69
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: eliminarPendiente,
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 538,
                              columnNumber: 69
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 536,
                            columnNumber: 65
                          }, _this)]
                        }, pendiente.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 534,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 532,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 531,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 530,
                  columnNumber: 45
                }, _this)]
              }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                children: "Eliminar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 549,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 494,
              columnNumber: 33
            }, _this)]
          }, sede.idProgramacionDB, true, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 488,
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
                lineNumber: 562,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 561,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
                className: "card-title",
                children: sede.institucion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 565,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: "Zona: Castilla"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 566,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["Supervisor: ", sede.supervisor[0].nombre]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 568,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cupos: ", sede.cupos]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 569,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 570,
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
                    lineNumber: 577,
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
                    lineNumber: 580,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 576,
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
                            lineNumber: 589,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarAsignada(asignacion.idAsignacionesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 591,
                              columnNumber: 69
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 590,
                            columnNumber: 65
                          }, _this)]
                        }, asignacion.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 588,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 586,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 585,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 584,
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
                            lineNumber: 604,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return asignar(pendiente.idPendientesDB);
                              },
                              children: "asignar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 606,
                              columnNumber: 69
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarPendiente(pendiente.idPendientesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 607,
                              columnNumber: 69
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 605,
                            columnNumber: 65
                          }, _this)]
                        }, pendiente.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 603,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 601,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 600,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 599,
                  columnNumber: 45
                }, _this)]
              }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                children: "Eliminar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 618,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 564,
              columnNumber: 33
            }, _this)]
          }, sede.idProgramacionDB, true, {
            fileName: _jsxFileName,
            lineNumber: 560,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 23
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 467,
    columnNumber: 9
  }, _this);
};

_s(VerprogramacionAdmin, "+PFiPNkZPCn1OsQU98Z0eeAJjY8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyLXByb2dyYW1hY2lvbi1hZG1pbi5qcyJdLCJuYW1lcyI6WyJCdXNjYXIiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW5lZG9yIiwiUHVibGljYXIiLCJwIiwiTGlzdGFGbGV4IiwibGkiLCJMaXN0YUZsZXhQZW5kaWVudGUiLCJFbGltaW5hclAiLCJWZXJwcm9ncmFtYWNpb25BZG1pbiIsInVzZVN0YXRlIiwicHJvZ3JhbWFjaW9uREIiLCJndWFyZGFyUHJvZ3JhbWFjaW9uREIiLCJ0ZXh0b2J1c3F1ZWRhIiwidGV4dG9CdXNxdWVkYSIsImd1YXJkYXJUZXh0b0J1c3F1ZWRhIiwiYXNpZ25hY2lvbmVzIiwiZ3VhcmRhckFzaWduYWNpb25lcyIsInBlbmRpZW50ZXMiLCJndWFyZGFyUGVuZGllbnRlcyIsInJlc3VsdGFkb0J1c3F1ZWRhIiwiZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhIiwiYWN0aXZhckJ1c3F1ZWRhIiwiZ3VhcmRhckFjdGl2YXJCdXNxdWVkYSIsIm1vc3RyYXJQcm9ncmFtYWNpb24iLCJndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbiIsInVzZUVmZmVjdCIsImJ1c2NhciIsInRvTG93ZXJDYXNlIiwicmVzdWx0YWRvIiwiZmlsdGVyIiwiYnVzcXVlZGEiLCJjdXBvcyIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJzdXBlcnZpc29yIiwibm9tYnJlIiwiem9uYSIsImluc3RpdHVjaW9uIiwiZmVjaGEiLCJjb21wYXJhcklkIiwiY29tcGFyYXJUb2RvcyIsImZvckVhY2giLCJzZWRlIiwiY29tcGFyYXJUb2RvSWRzIiwiaWRQcm9ncmFtYWNpb25EQiIsImNvbXBhcmFyVG9kb3NDYW50aWRhZCIsImNhbnRpZGFkZGlzdHJpYnVpZG9yYXMiLCJjb21wYXJhciIsImFzaWduYWNpb24iLCJpZFNlZGUiLCJndWFyZGFyUHJvZ3JhbWFjaW9uIiwiZWRpdGFyUHJvZHVjdG8iLCJmaXJlYmFzZSIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsInVwZGF0ZSIsInBlbmRpZW50ZSIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJ1c3VhcmlvIiwib2J0ZW5lclByb2dyYW1hY2lvbmVzIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsInRyYWVyUHJvZ3JhbWFjaW9uIiwiZG9jcyIsIm1hcCIsImlkIiwiZGF0YSIsImlkQXNpZ25hY2lvbmVzREIiLCJpZFBlbmRpZW50ZXNEQiIsIm9idGVuZXJDb2xlZ2lvcyIsInRyYWVyTW9zdHJhciIsImlkTW9zdHJhckRCIiwiZWxpbWluYXJBc2lnbmFkYSIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiY29uc29sZSIsImxvZyIsImVsaW1pbmFyQXNpZ25hY2lvbiIsImVsaW1pbmFyRm4iLCJhc2lnbmFyIiwiZ3VhcmRhckFzaWduYWRhcyIsImRhdG9zIiwiYXNpZ25hckZuIiwiYWRkIiwiZWxpbWluYXJQZW5kaWVudGVzIiwiZWxpbWluYXJQZW5kaWVudGUiLCJtb3N0cmFyUHJvZ3JhbWFjaW9uRm4iLCJ2ZXJQcm9ncmFtYWNpb24iLCJjYW1iaWFyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImxlbmd0aCIsImlkVXN1YXJpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQVo7S0FBTUYs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXRESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQSxhQUFnQ25FLElBQUksQ0FBQ0UsZ0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRG9CO0FBQUEsU0FBdkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREwsR0FrRUssSUF0SlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvS0gsQ0FsaEJEOztHQUFNcEMsb0I7O01BQUFBLG9CO0FBb2hCU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVyLXByb2dyYW1hY2lvbi1hZG1pbi41Y2FmZjQyNTZiMDk4Yjg3OTcxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBGaXJlYmFzZUNvbnRleHQgZnJvbSAnLi4vZmlyZWJhc2UvY29udGV4dCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgdXNlVmVyUHJvZ3JhbWFjaW9uIGZyb20gJy4uL2hvb2tzL3VzZVZlclByb2dyYW1hY2lvbidcclxuXHJcbmNvbnN0IEJ1c2NhciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgI2Q2ZDhkYjtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiA1NXJlbTtcclxuICAgICAgICBtYXJnaW46IDVyZW0gYXV0byAycmVtIDMwJTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQ29udGVuZWRvciA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW07XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDU1cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSBhdXRvIDJyZW0gMzAlO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBQdWJsaWNhciA9IHN0eWxlZC5wYFxyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcblxyXG5jb25zdCBMaXN0YUZsZXggPSBzdHlsZWQubGlgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBjb2xvcjogIzBjNTQ2MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XHJcbiAgICBib3JkZXItY29sb3I6ICNiZWU1ZWI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzowLjVyZW07XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMXJlbSAwLjVyZW0gMCA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IExpc3RhRmxleFBlbmRpZW50ZSA9IHN0eWxlZC5saWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjZmZmM2NkO1xyXG4gICAgY29sb3I6ICM4NTY0MDQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmVlYmE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzowLjVyZW07XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMXJlbSAwLjVyZW0gMCA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAwIDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuYFxyXG5jb25zdCBFbGltaW5hclAgPSBzdHlsZWQucGBcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuYFxyXG5cclxuY29uc3QgVmVycHJvZ3JhbWFjaW9uQWRtaW4gPSAoKSA9PiB7XHJcblxyXG4gICAgLy9zdGF0ZVxyXG4gICAgY29uc3QgW3Byb2dyYW1hY2lvbkRCLCBndWFyZGFyUHJvZ3JhbWFjaW9uREJdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9zdGF0ZSBkZSBsYSBidXNxdWVkYVxyXG4gICAgY29uc3QgW3RleHRvQnVzcXVlZGEsIGd1YXJkYXJUZXh0b0J1c3F1ZWRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0ZXh0b2J1c3F1ZWRhOiAnJ1xyXG4gICAgfSlcclxuXHJcbiAgICAvL3N0YXRlIGFzaWduYWNpbmVzIGNvbXBsZXRhc1xyXG4gICAgY29uc3QgW2FzaWduYWNpb25lcywgZ3VhcmRhckFzaWduYWNpb25lc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3N0YXRlIHBlbmRpZW50ZXNcclxuICAgIGNvbnN0IFtwZW5kaWVudGVzLCBndWFyZGFyUGVuZGllbnRlc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvL3Jlc3VsdGFkbyBidXNxdWVkYVxyXG4gICAgY29uc3QgW3Jlc3VsdGFkb0J1c3F1ZWRhLCBndWFyZGFyUmVzdWx0YWRvQnVzcXVlZGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9hY3RpdmFyIHkgZGVzYWN0aXZhciBidXNxdWVkYVxyXG4gICAgY29uc3QgW2FjdGl2YXJCdXNxdWVkYSwgZ3VhcmRhckFjdGl2YXJCdXNxdWVkYV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbbW9zdHJhclByb2dyYW1hY2lvbiwgZ3VhcmRhck1vc3RyYXJQcm9ncmFtYWNpb25dID0gdXNlU3RhdGUoe30pXHJcblxyXG4gICAgLyogLy8gdHJhZW1vcyB1c2UgdmVyIHByb2dyYW1hY2lvblxyXG4gICAgY29uc3QgeyBtb3N0cmFyUHJvZ3JhbWFjaW9uLCBndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbiwgY2FtYmlhckVzdGFkbyB9ID0gdXNlVmVyUHJvZ3JhbWFjaW9uKCkgKi9cclxuXHJcblxyXG4gICAgLy9lZmZlY3QgZGUgbGFzIGJ1c3F1ZWRhc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBidXNjYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1c2NhciA9IHRleHRvQnVzcXVlZGEudGV4dG9idXNxdWVkYS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IHByb2dyYW1hY2lvbkRCLmZpbHRlcihidXNxdWVkYSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAvKiBidXNxdWVkYS5jYW50aWRhZGRpc3RyaWJ1aWRvcmFzLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzY2FyKSB8fCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1c3F1ZWRhLmN1cG9zLnRvU3RyaW5nKCkuaW5jbHVkZXMoYnVzY2FyKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c3F1ZWRhLnN1cGVydmlzb3JbMF0ubm9tYnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzY2FyKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c3F1ZWRhLnpvbmEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNjYXIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYnVzcXVlZGEuaW5zdGl0dWNpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNjYXIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYnVzcXVlZGEuZmVjaGEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhidXNjYXIpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBndWFyZGFyUmVzdWx0YWRvQnVzcXVlZGEocmVzdWx0YWRvKVxyXG5cclxuICAgICAgICAgICAgaWYgKHRleHRvQnVzcXVlZGEudGV4dG9idXNxdWVkYSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGd1YXJkYXJBY3RpdmFyQnVzcXVlZGEoZmFsc2UpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBndWFyZGFyQWN0aXZhckJ1c3F1ZWRhKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1c2NhcigpXHJcblxyXG5cclxuICAgIH0sIFt0ZXh0b0J1c3F1ZWRhXSlcclxuXHJcbiAgICAvLyBlZmZlY3QgcXVlIGd1YXJkYSBsYXMgcG9zdHVsYWNpb25lc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjb21wYXJhcklkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29tcGFyYXJUb2RvcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2dyYW1hY2lvbkRCLmZvckVhY2goc2VkZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGFyYXJUb2RvSWRzID0gc2VkZS5pZFByb2dyYW1hY2lvbkRCXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGFyYXJUb2Rvc0NhbnRpZGFkID0gc2VkZS5jYW50aWRhZGRpc3RyaWJ1aWRvcmFzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGFyYXIgPSBhc2lnbmFjaW9uZXMuZmlsdGVyKGFzaWduYWNpb24gPT4gYXNpZ25hY2lvbi5pZFNlZGUgPT09IGNvbXBhcmFyVG9kb0lkcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogc2kgc2UgcXVpZXJlIHF1ZSBzZSBsaW1pdGUgZ3VhcmRhciBsYSBjYW50aWRhZCBkZSBkaXN0cmlidWlkb3JhcyBhY3RpdmFyIGVsIGNvZGlnbyBjb21lbnRhZG8gZGUgYWJham8gKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3VhcmRhclByb2dyYW1hY2lvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVkaXRhclByb2R1Y3RvID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInByb2dyYW1hY2lvblwiKS5kb2MoY29tcGFyYXJUb2RvSWRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBlZGl0YXJQcm9kdWN0by51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNpZ25hY2lvbjogY29tcGFyYXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyUHJvZ3JhbWFjaW9uKClcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBpZiAoY29tcGFyYXIubGVuZ3RoIDw9IGNvbXBhcmFyVG9kb3NDYW50aWRhZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBndWFyZGFyUHJvZ3JhbWFjaW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVkaXRhclByb2R1Y3RvID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInByb2dyYW1hY2lvblwiKS5kb2MoY29tcGFyYXJUb2RvSWRzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGVkaXRhclByb2R1Y3RvLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNpZ25hY2lvbjogY29tcGFyYXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmRhclByb2dyYW1hY2lvbigpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb21wYXJhclRvZG9zKClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wYXJhcklkKClcclxuICAgIH0sIFthc2lnbmFjaW9uZXNdKVxyXG5cclxuICAgIC8vIGVmZmVjdCBxdWUgZ3VhcmRhIGxvcyBwZW5kaWVudGVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBhcmFySWQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJhclRvZG9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbWFjaW9uREIuZm9yRWFjaChzZWRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJhclRvZG9JZHMgPSBzZWRlLmlkUHJvZ3JhbWFjaW9uREJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGFyYXIgPSBwZW5kaWVudGVzLmZpbHRlcihwZW5kaWVudGUgPT4gcGVuZGllbnRlLmlkU2VkZSA9PT0gY29tcGFyYXJUb2RvSWRzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBndWFyZGFyUHJvZ3JhbWFjaW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdGFyUHJvZHVjdG8gPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwicHJvZ3JhbWFjaW9uXCIpLmRvYyhjb21wYXJhclRvZG9JZHMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBlZGl0YXJQcm9kdWN0by51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGllbnRlczogY29tcGFyYXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyUHJvZ3JhbWFjaW9uKClcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb21wYXJhclRvZG9zKClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wYXJhcklkKClcclxuICAgIH0sIFtwZW5kaWVudGVzXSlcclxuXHJcbiAgICAvLyB0cmFlbW9zIGxhcyBmdW5jaW9uZXMgZGUgZmlyZWJhc2VcclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuICAgIC8vdHJhZXIgdG9kb3MgbGFzIFByb2dyYW1hY2lvbmVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9ncmFtYWNpb25lcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncHJvZ3JhbWFjaW9uJykub3JkZXJCeSgnZmVjaGEnLCAnYXNjJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhZXJQcm9ncmFtYWNpb24gPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFByb2dyYW1hY2lvbkRCOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBndWFyZGFyUHJvZ3JhbWFjaW9uREIodHJhZXJQcm9ncmFtYWNpb24pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vdHJhZXIgdG9kYXMgbGFzIGFzaWduYWNpb25lc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ2FzaWduYWNpb24nKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9idGVuZXJQcm9ncmFtYWNpb25lcygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFlclByb2dyYW1hY2lvbiA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkQXNpZ25hY2lvbmVzREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJBc2lnbmFjaW9uZXModHJhZXJQcm9ncmFtYWNpb24pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vdHJhZXIgdG9kb3MgbG9zIHBlbmRpZW50ZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2dyYW1hY2lvbmVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwZW5kaWVudGUnKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9idGVuZXJQcm9ncmFtYWNpb25lcygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFlclByb2dyYW1hY2lvbiA9IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkUGVuZGllbnRlc0RCOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBndWFyZGFyUGVuZGllbnRlcyh0cmFlclByb2dyYW1hY2lvbilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy90cmFlciB0b2RvcyBsb3MgbW9zdHJhclByb2dyYW1hY2lvblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyQ29sZWdpb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ21vc3RyYXJwcm9ncmFtYWNpb24nKS5vblNuYXBzaG90KG1hbmVqYXJTbmFwc2hvdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9idGVuZXJDb2xlZ2lvcygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFlck1vc3RyYXIgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZE1vc3RyYXJEQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhck1vc3RyYXJQcm9ncmFtYWNpb24odHJhZXJNb3N0cmFyKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvL2VsaW1pbmFyIGFzaWduYWRhXHJcbiAgICBjb25zdCBlbGltaW5hckFzaWduYWRhID0gKGlkKSA9PiB7XHJcblxyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUmVhbG1lbnRlIGRlc2VhIGVsaW1pbmFyIGVzdGUgdXN1YXJpbz8nLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlVuIHVzdWFyaW8gcXVlIHNlIGVsaW1pbmUgbm8gc2UgcHVlZGUgUmVjdXBlcmFyIVwiLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1NpLCBFbGltaW5hciEnXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGltaW5hckFzaWduYWNpb24gPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdhc2lnbmFjaW9uJykuZG9jKGlkKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsaW1pbmFyQXNpZ25hY2lvbi5kZWxldGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGltaW5hckZuKClcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICAgICAgICAgICAnRWxpbWluYWRvIScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlIGhhIEVsaW1pbmFkbyBjb24gZXhpdG8nXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL3Bhc2FyIGRlIHBlbmRpZW50ZSBhIGFzaWduYWRhXHJcbiAgICBjb25zdCBhc2lnbmFyID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gcGVuZGllbnRlcy5maWx0ZXIocGVuZGllbnRlID0+IHBlbmRpZW50ZS5pZFBlbmRpZW50ZXNEQiA9PT0gaWQpXHJcblxyXG4gICAgICAgIGxldCBndWFyZGFyQXNpZ25hZGFzID0ge31cclxuXHJcbiAgICAgICAgZ3VhcmRhckFzaWduYWRhcy5kYXRvcyA9IHJlc3VsdGFkb1swXS5kYXRvc1xyXG4gICAgICAgIGd1YXJkYXJBc2lnbmFkYXMuaWRTZWRlID0gcmVzdWx0YWRvWzBdLmlkU2VkZVxyXG5cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1JlYWxtZW50ZSBkZXNlYSBBc2lnbmFyIEVzdGUgVXN1YXJpbz8nLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkFsIGFzaWduYXIgZXN0ZSB1c3VhcmlvIHNlIGVsaW1pbmFyYSBkZSBwZW5kaWVudGVzIVwiLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1NpLCBBc2lnbmFyISdcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFzaWduYXJGbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwiYXNpZ25hY2lvblwiKS5hZGQoZ3VhcmRhckFzaWduYWRhcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyUGVuZGllbnRlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyUGVuZGllbnRlID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncGVuZGllbnRlJykuZG9jKGlkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGltaW5hclBlbmRpZW50ZS5kZWxldGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGltaW5hclBlbmRpZW50ZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhc2lnbmFyRm4oKVxyXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICdBc2lnbmFkYSEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZSBoYSBhc2lnbmFkbyBjb24gZXhpdG8nXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vRWxpbWluYXIgZGUgcGVuZGllbnRlc1xyXG4gICAgY29uc3QgZWxpbWluYXJQZW5kaWVudGUgPSAoaWQpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1JlYWxtZW50ZSBkZXNlYSBlbGltaW5hciBlc3RlIHVzdWFyaW8/JyxcclxuICAgICAgICAgICAgdGV4dDogXCJVbiB1c3VhcmlvIHF1ZSBzZSBlbGltaW5lIG5vIHNlIHB1ZWRlIFJlY3VwZXJhciFcIixcclxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdTaSwgRWxpbWluYXIhJ1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJQZW5kaWVudGUgPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdwZW5kaWVudGUnKS5kb2MoaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJGbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxpbWluYXJQZW5kaWVudGUuZGVsZXRlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJGbigpXHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VsaW1pbmFkbyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZSBoYSBFbGltaW5hZG8gY29uIGV4aXRvJ1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL21vc3RyYXIgbGEgcHJvZ3JhbWFjaW9uIGEgbGFzIGRpc3RyaWJ1aWRvcmFzXHJcbiAgICBjb25zdCBtb3N0cmFyUHJvZ3JhbWFjaW9uRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vc3RyYXJQcm9ncmFtYWNpb25bMF0udmVyUHJvZ3JhbWFjaW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWJpYXIgPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdtb3N0cmFycHJvZ3JhbWFjaW9uJykuZG9jKG1vc3RyYXJQcm9ncmFtYWNpb25bMF0uaWRNb3N0cmFyREIpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2FtYmlhci51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmVyUHJvZ3JhbWFjaW9uOiBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY2FtYmlhciA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ21vc3RyYXJwcm9ncmFtYWNpb24nKS5kb2MobW9zdHJhclByb2dyYW1hY2lvblswXS5pZE1vc3RyYXJEQilcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjYW1iaWFyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2ZXJQcm9ncmFtYWNpb246IHRydWVcclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxCdXNjYXI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiIG5hbWU9XCJ0ZXh0b2J1c3F1ZWRhXCIgb25DaGFuZ2U9e2UgPT4gZ3VhcmRhclRleHRvQnVzcXVlZGEoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIG15LTJcIj5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9CdXNjYXI+XHJcblxyXG4gICAgICAgICAgICA8Q29udGVuZWRvcj5cclxuICAgICAgICAgICAgICAgIHttb3N0cmFyUHJvZ3JhbWFjaW9uWzBdID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICA6IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3N0cmFyUHJvZ3JhbWFjaW9uWzBdLnZlclByb2dyYW1hY2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8UHVibGljYXIgb25DbGljaz17KCkgPT4gbW9zdHJhclByb2dyYW1hY2lvbkZuKCl9PkRlamFyIGRlIFB1YmxpY2FyIFByb2dyYW1hY2lvbjwvUHVibGljYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxQdWJsaWNhciBvbkNsaWNrPXsoKSA9PiBtb3N0cmFyUHJvZ3JhbWFjaW9uRm4oKX0+UHVibGljYXIgUHJvZ3JhbWFjaW9uPC9QdWJsaWNhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGgyPlByb2dyYW1hY2lvbjwvaDI+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZhckJ1c3F1ZWRhXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0YWRvQnVzcXVlZGEubWFwKHNlZGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG15LTNcIiBrZXk9e3NlZGUuaWRQcm9ncmFtYWNpb25EQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5GZWNoYSBkZXNwYWNobzoge3NlZGUuZmVjaGF9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntzZWRlLmluc3RpdHVjaW9ufTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlpvbmE6IENhc3RpbGxhPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+U3VwZXJ2aXNvcjoge3NlZGUuc3VwZXJ2aXNvclswXS5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5jdXBvczoge3NlZGUuY3Vwb3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5jYW50aWRhZCBEaXN0cmlidWlkb3Jhczoge3NlZGUuY2FudGlkYWRkaXN0cmlidWlkb3Jhc308L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXNlZGUuYXNpZ25hY2lvbiB8fCBzZWRlLmFzaWduYWNpb24ubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBteC0xXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e2AjJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9YH0gcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzaWduYWRhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtgIyR7c2VkZS5pZFByb2dyYW1hY2lvbkRCfTFgfSByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGllbnRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD17c2VkZS5pZFByb2dyYW1hY2lvbkRCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWRlLmFzaWduYWNpb24ubWFwKGFzaWduYWNpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFGbGV4IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIGtleT17YXNpZ25hY2lvbi5kYXRvcy5pZFVzdWFyaW99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FzaWduYWNpb24uZGF0b3Mubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gZWxpbWluYXJBc2lnbmFkYShhc2lnbmFjaW9uLmlkQXNpZ25hY2lvbmVzREIpfT5YPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdGFGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9e2Ake3NlZGUuaWRQcm9ncmFtYWNpb25EQn0xYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VkZS5wZW5kaWVudGVzLm1hcChwZW5kaWVudGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFGbGV4UGVuZGllbnRlIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBhbGVydFwiIGtleT17cGVuZGllbnRlLmRhdG9zLmlkVXN1YXJpb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGVuZGllbnRlLmRhdG9zLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2FzaWduYXJ9PmFzaWduYXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17ZWxpbWluYXJQZW5kaWVudGV9Plg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0YUZsZXhQZW5kaWVudGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWxpbWluYXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7LyogY3VhbmRvIG5vIHNlIGVzdGEgYnVzY2FuZG8gKi99XHJcbiAgICAgICAgICAgICAgICB7IWFjdGl2YXJCdXNxdWVkYVxyXG4gICAgICAgICAgICAgICAgICAgID8gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2dyYW1hY2lvbkRCLm1hcChzZWRlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBteS0zXCIga2V5PXtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+RmVjaGEgZGVzcGFjaG86IHtzZWRlLmZlY2hhfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57c2VkZS5pbnN0aXR1Y2lvbn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5ab25hOiBDYXN0aWxsYTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlN1cGVydmlzb3I6IHtzZWRlLnN1cGVydmlzb3JbMF0ubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Y3Vwb3M6IHtzZWRlLmN1cG9zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Y2FudGlkYWQgRGlzdHJpYnVpZG9yYXM6IHtzZWRlLmNhbnRpZGFkZGlzdHJpYnVpZG9yYXN9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzZWRlLmFzaWduYWNpb24gfHwgc2VkZS5hc2lnbmFjaW9uLmxlbmd0aCA9PT0gMCAmJiBzZWRlLnBlbmRpZW50ZXMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBteC0xXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e2AjJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9YH0gcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzaWduYWRhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtgIyR7c2VkZS5pZFByb2dyYW1hY2lvbkRCfWFgfSByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGllbnRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD17YCR7c2VkZS5pZFByb2dyYW1hY2lvbkRCfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlZGUuYXNpZ25hY2lvbi5tYXAoYXNpZ25hY2lvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0YUZsZXggY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXthc2lnbmFjaW9uLmRhdG9zLmlkVXN1YXJpb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YXNpZ25hY2lvbi5kYXRvcy5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBlbGltaW5hckFzaWduYWRhKGFzaWduYWNpb24uaWRBc2lnbmFjaW9uZXNEQil9Plg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0YUZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPXtgJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9YWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlZGUucGVuZGllbnRlcy5tYXAocGVuZGllbnRlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RhRmxleFBlbmRpZW50ZSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gYWxlcnRcIiBrZXk9e3BlbmRpZW50ZS5kYXRvcy5pZFVzdWFyaW99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BlbmRpZW50ZS5kYXRvcy5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBhc2lnbmFyKHBlbmRpZW50ZS5pZFBlbmRpZW50ZXNEQil9PmFzaWduYXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gZWxpbWluYXJQZW5kaWVudGUocGVuZGllbnRlLmlkUGVuZGllbnRlc0RCKX0+WDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RhRmxleFBlbmRpZW50ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbGltaW5hcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvQ29udGVuZWRvcj5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJwcm9ncmFtYWNpb25BZG1pbjsiXSwic291cmNlUm9vdCI6IiJ9