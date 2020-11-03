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
    console.log(id);
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
        lineNumber: 473,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 154
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "button",
        className: "btn btn-dark my-2",
        children: "Buscar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 474,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 472,
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
          lineNumber: 482,
          columnNumber: 31
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Publicar, {
          onClick: function onClick() {
            return mostrarProgramacionFn();
          },
          children: "Publicar Programacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 31
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 23
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
        children: "Programacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 490,
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
                lineNumber: 496,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 495,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
                className: "card-title",
                children: sede.institucion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 499,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: "Zona: Castilla"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 500,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["Supervisor: ", sede.supervisor[0].nombre]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 502,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cupos: ", sede.cupos]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 503,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 504,
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
                    lineNumber: 511,
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
                    lineNumber: 514,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 510,
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
                            lineNumber: 523,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarAsignada(asignacion.idAsignacionesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 525,
                              columnNumber: 69
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 524,
                            columnNumber: 65
                          }, _this)]
                        }, asignacion.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 522,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 520,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 519,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 518,
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
                            lineNumber: 539,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: asignar,
                              children: "asignar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 541,
                              columnNumber: 69
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: eliminarPendiente,
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 542,
                              columnNumber: 69
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 540,
                            columnNumber: 65
                          }, _this)]
                        }, pendiente.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 538,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 536,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 535,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 534,
                  columnNumber: 45
                }, _this)]
              }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(EliminarP, {
                onClick: function onClick() {
                  return eliminarProgramacion(sede.idProgramacionDB);
                },
                children: "Eliminar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 553,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 498,
              columnNumber: 33
            }, _this)]
          }, sede.idProgramacionDB, true, {
            fileName: _jsxFileName,
            lineNumber: 494,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 492,
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
                lineNumber: 566,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 565,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
                className: "card-title",
                children: sede.institucion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 569,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: "Zona: Castilla"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 570,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["Supervisor: ", sede.supervisor[0].nombre]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 572,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cupos: ", sede.cupos]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 573,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "card-text",
                children: ["cantidad Distribuidoras: ", sede.cantidaddistribuidoras]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 574,
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
                    lineNumber: 581,
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
                    lineNumber: 584,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 580,
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
                            lineNumber: 593,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarAsignada(asignacion.idAsignacionesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 595,
                              columnNumber: 69
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 594,
                            columnNumber: 65
                          }, _this)]
                        }, asignacion.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 592,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 590,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 589,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 588,
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
                            lineNumber: 608,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return asignar(pendiente.idPendientesDB);
                              },
                              children: "asignar"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 610,
                              columnNumber: 69
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                              onClick: function onClick() {
                                return eliminarPendiente(pendiente.idPendientesDB);
                              },
                              children: "X"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 611,
                              columnNumber: 69
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 609,
                            columnNumber: 65
                          }, _this)]
                        }, pendiente.datos.idUsuario, true, {
                          fileName: _jsxFileName,
                          lineNumber: 607,
                          columnNumber: 61
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 605,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 604,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 603,
                  columnNumber: 45
                }, _this)]
              }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(EliminarP, {
                onClick: function onClick() {
                  return eliminarProgramacion(sede.idProgramacionDB);
                },
                children: "Eliminar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 622,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 568,
              columnNumber: 33
            }, _this)]
          }, sede.idProgramacionDB, true, {
            fileName: _jsxFileName,
            lineNumber: 564,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 562,
        columnNumber: 23
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 471,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVyLXByb2dyYW1hY2lvbi1hZG1pbi5qcyJdLCJuYW1lcyI6WyJCdXNjYXIiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW5lZG9yIiwiUHVibGljYXIiLCJwIiwiTGlzdGFGbGV4IiwibGkiLCJMaXN0YUZsZXhQZW5kaWVudGUiLCJFbGltaW5hclAiLCJWZXJwcm9ncmFtYWNpb25BZG1pbiIsInVzZVN0YXRlIiwicHJvZ3JhbWFjaW9uREIiLCJndWFyZGFyUHJvZ3JhbWFjaW9uREIiLCJ0ZXh0b2J1c3F1ZWRhIiwidGV4dG9CdXNxdWVkYSIsImd1YXJkYXJUZXh0b0J1c3F1ZWRhIiwiYXNpZ25hY2lvbmVzIiwiZ3VhcmRhckFzaWduYWNpb25lcyIsInBlbmRpZW50ZXMiLCJndWFyZGFyUGVuZGllbnRlcyIsInJlc3VsdGFkb0J1c3F1ZWRhIiwiZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhIiwiYWN0aXZhckJ1c3F1ZWRhIiwiZ3VhcmRhckFjdGl2YXJCdXNxdWVkYSIsIm1vc3RyYXJQcm9ncmFtYWNpb24iLCJndWFyZGFyTW9zdHJhclByb2dyYW1hY2lvbiIsInVzZUVmZmVjdCIsImJ1c2NhciIsInRvTG93ZXJDYXNlIiwicmVzdWx0YWRvIiwiZmlsdGVyIiwiYnVzcXVlZGEiLCJjdXBvcyIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJzdXBlcnZpc29yIiwibm9tYnJlIiwiem9uYSIsImluc3RpdHVjaW9uIiwiZmVjaGEiLCJjb21wYXJhcklkIiwiY29tcGFyYXJUb2RvcyIsImZvckVhY2giLCJzZWRlIiwiY29tcGFyYXJUb2RvSWRzIiwiaWRQcm9ncmFtYWNpb25EQiIsImNvbXBhcmFyVG9kb3NDYW50aWRhZCIsImNhbnRpZGFkZGlzdHJpYnVpZG9yYXMiLCJjb21wYXJhciIsImFzaWduYWNpb24iLCJpZFNlZGUiLCJndWFyZGFyUHJvZ3JhbWFjaW9uIiwiZWRpdGFyUHJvZHVjdG8iLCJmaXJlYmFzZSIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsInVwZGF0ZSIsInBlbmRpZW50ZSIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJ1c3VhcmlvIiwib2J0ZW5lclByb2dyYW1hY2lvbmVzIiwib3JkZXJCeSIsIm9uU25hcHNob3QiLCJtYW5lamFyU25hcHNob3QiLCJzbmFwc2hvdCIsInRyYWVyUHJvZ3JhbWFjaW9uIiwiZG9jcyIsIm1hcCIsImlkIiwiZGF0YSIsImlkQXNpZ25hY2lvbmVzREIiLCJpZFBlbmRpZW50ZXNEQiIsIm9idGVuZXJDb2xlZ2lvcyIsInRyYWVyTW9zdHJhciIsImlkTW9zdHJhckRCIiwiZWxpbWluYXJBc2lnbmFkYSIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiY29uc29sZSIsImxvZyIsImVsaW1pbmFyQXNpZ25hY2lvbiIsImVsaW1pbmFyRm4iLCJhc2lnbmFyIiwiZ3VhcmRhckFzaWduYWRhcyIsImRhdG9zIiwiYXNpZ25hckZuIiwiYWRkIiwiZWxpbWluYXJQZW5kaWVudGVzIiwiZWxpbWluYXJQZW5kaWVudGUiLCJtb3N0cmFyUHJvZ3JhbWFjaW9uRm4iLCJ2ZXJQcm9ncmFtYWNpb24iLCJjYW1iaWFyIiwiZWxpbWluYXJQcm9ncmFtYWNpb24iLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiaWRVc3VhcmlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsdURBQU0s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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUZKO0FBQUEsMkJBQTJEZixTQUFTLENBQUNzQyxLQUFWLENBQWdCZSxTQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUQwQjtBQUFBLHVCQUE3QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF4Qko7QUFBQSw4QkFYUixlQXNESSxxRUFBQyxTQUFEO0FBQVcsdUJBQU8sRUFBRTtBQUFBLHlCQUFNUCxvQkFBb0IsQ0FBQzdELElBQUksQ0FBQ0UsZ0JBQU4sQ0FBMUI7QUFBQSxpQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBdERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBLGFBQWdDRixJQUFJLENBQUNFLGdCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURvQjtBQUFBLFNBQXZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURMLEdBa0VLLElBdEpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0tILENBdGhCRDs7R0FBTXBDLG9COztNQUFBQSxvQjtBQXdoQlNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zlci1wcm9ncmFtYWNpb24tYWRtaW4uZWI1Y2E5NmExMmQzZDU2YmEwMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgRmlyZWJhc2VDb250ZXh0IGZyb20gJy4uL2ZpcmViYXNlL2NvbnRleHQnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuaW1wb3J0IHVzZVZlclByb2dyYW1hY2lvbiBmcm9tICcuLi9ob29rcy91c2VWZXJQcm9ncmFtYWNpb24nXHJcblxyXG5jb25zdCBCdXNjYXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgICNkNmQ4ZGI7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogNTVyZW07XHJcbiAgICAgICAgbWFyZ2luOiA1cmVtIGF1dG8gMnJlbSAzMCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbmVkb3IgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2UxZTFlMTtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiA1NXJlbTtcclxuICAgICAgICBtYXJnaW46IDJyZW0gYXV0byAycmVtIDMwJTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgUHVibGljYXIgPSBzdHlsZWQucGBcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5cclxuY29uc3QgTGlzdGFGbGV4ID0gc3R5bGVkLmxpYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgY29sb3I6ICMwYzU0NjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlY2YxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6MC41cmVtO1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDFyZW0gMC41cmVtIDAgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBMaXN0YUZsZXhQZW5kaWVudGUgPSBzdHlsZWQubGlgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZjNjZDtcclxuICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlZWJhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6MC41cmVtO1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDFyZW0gMC41cmVtIDAgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbmBcclxuY29uc3QgRWxpbWluYXJQID0gc3R5bGVkLnBgXHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbmBcclxuXHJcbmNvbnN0IFZlcnByb2dyYW1hY2lvbkFkbWluID0gKCkgPT4ge1xyXG5cclxuICAgIC8vc3RhdGVcclxuICAgIGNvbnN0IFtwcm9ncmFtYWNpb25EQiwgZ3VhcmRhclByb2dyYW1hY2lvbkRCXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vc3RhdGUgZGUgbGEgYnVzcXVlZGFcclxuICAgIGNvbnN0IFt0ZXh0b0J1c3F1ZWRhLCBndWFyZGFyVGV4dG9CdXNxdWVkYV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdGV4dG9idXNxdWVkYTogJydcclxuICAgIH0pXHJcblxyXG4gICAgLy9zdGF0ZSBhc2lnbmFjaW5lcyBjb21wbGV0YXNcclxuICAgIGNvbnN0IFthc2lnbmFjaW9uZXMsIGd1YXJkYXJBc2lnbmFjaW9uZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9zdGF0ZSBwZW5kaWVudGVzXHJcbiAgICBjb25zdCBbcGVuZGllbnRlcywgZ3VhcmRhclBlbmRpZW50ZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy9yZXN1bHRhZG8gYnVzcXVlZGFcclxuICAgIGNvbnN0IFtyZXN1bHRhZG9CdXNxdWVkYSwgZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vYWN0aXZhciB5IGRlc2FjdGl2YXIgYnVzcXVlZGFcclxuICAgIGNvbnN0IFthY3RpdmFyQnVzcXVlZGEsIGd1YXJkYXJBY3RpdmFyQnVzcXVlZGFdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW21vc3RyYXJQcm9ncmFtYWNpb24sIGd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICAgIC8qIC8vIHRyYWVtb3MgdXNlIHZlciBwcm9ncmFtYWNpb25cclxuICAgIGNvbnN0IHsgbW9zdHJhclByb2dyYW1hY2lvbiwgZ3VhcmRhck1vc3RyYXJQcm9ncmFtYWNpb24sIGNhbWJpYXJFc3RhZG8gfSA9IHVzZVZlclByb2dyYW1hY2lvbigpICovXHJcblxyXG5cclxuICAgIC8vZWZmZWN0IGRlIGxhcyBidXNxdWVkYXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnVzY2FyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidXNjYXIgPSB0ZXh0b0J1c3F1ZWRhLnRleHRvYnVzcXVlZGEudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBwcm9ncmFtYWNpb25EQi5maWx0ZXIoYnVzcXVlZGEgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLyogYnVzcXVlZGEuY2FudGlkYWRkaXN0cmlidWlkb3Jhcy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c2NhcikgfHwgKi9cclxuICAgICAgICAgICAgICAgICAgICBidXNxdWVkYS5jdXBvcy50b1N0cmluZygpLmluY2x1ZGVzKGJ1c2NhcikgfHxcclxuICAgICAgICAgICAgICAgICAgICBidXNxdWVkYS5zdXBlcnZpc29yWzBdLm5vbWJyZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJ1c2NhcikgfHxcclxuICAgICAgICAgICAgICAgICAgICBidXNxdWVkYS56b25hLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzY2FyKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c3F1ZWRhLmluc3RpdHVjaW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzY2FyKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c3F1ZWRhLmZlY2hhLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYnVzY2FyKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZ3VhcmRhclJlc3VsdGFkb0J1c3F1ZWRhKHJlc3VsdGFkbylcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0b0J1c3F1ZWRhLnRleHRvYnVzcXVlZGEgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBndWFyZGFyQWN0aXZhckJ1c3F1ZWRhKGZhbHNlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3VhcmRhckFjdGl2YXJCdXNxdWVkYSh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXNjYXIoKVxyXG5cclxuXHJcbiAgICB9LCBbdGV4dG9CdXNxdWVkYV0pXHJcblxyXG4gICAgLy8gZWZmZWN0IHF1ZSBndWFyZGEgbGFzIHBvc3R1bGFjaW9uZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tcGFyYXJJZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmFyVG9kb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmFtYWNpb25EQi5mb3JFYWNoKHNlZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBhcmFyVG9kb0lkcyA9IHNlZGUuaWRQcm9ncmFtYWNpb25EQlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBhcmFyVG9kb3NDYW50aWRhZCA9IHNlZGUuY2FudGlkYWRkaXN0cmlidWlkb3Jhc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBhcmFyID0gYXNpZ25hY2lvbmVzLmZpbHRlcihhc2lnbmFjaW9uID0+IGFzaWduYWNpb24uaWRTZWRlID09PSBjb21wYXJhclRvZG9JZHMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHNpIHNlIHF1aWVyZSBxdWUgc2UgbGltaXRlIGd1YXJkYXIgbGEgY2FudGlkYWQgZGUgZGlzdHJpYnVpZG9yYXMgYWN0aXZhciBlbCBjb2RpZ28gY29tZW50YWRvIGRlIGFiYWpvICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGd1YXJkYXJQcm9ncmFtYWNpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlZGl0YXJQcm9kdWN0byA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9ncmFtYWNpb25cIikuZG9jKGNvbXBhcmFyVG9kb0lkcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZWRpdGFyUHJvZHVjdG8udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaWduYWNpb246IGNvbXBhcmFyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhclByb2dyYW1hY2lvbigpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogaWYgKGNvbXBhcmFyLmxlbmd0aCA8PSBjb21wYXJhclRvZG9zQ2FudGlkYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3VhcmRhclByb2dyYW1hY2lvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlZGl0YXJQcm9kdWN0byA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oXCJwcm9ncmFtYWNpb25cIikuZG9jKGNvbXBhcmFyVG9kb0lkcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBlZGl0YXJQcm9kdWN0by51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaWduYWNpb246IGNvbXBhcmFyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1YXJkYXJQcm9ncmFtYWNpb24oKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9ICovXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29tcGFyYXJUb2RvcygpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcGFyYXJJZCgpXHJcbiAgICB9LCBbYXNpZ25hY2lvbmVzXSlcclxuXHJcbiAgICAvLyBlZmZlY3QgcXVlIGd1YXJkYSBsb3MgcGVuZGllbnRlc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjb21wYXJhcklkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29tcGFyYXJUb2RvcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2dyYW1hY2lvbkRCLmZvckVhY2goc2VkZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGFyYXJUb2RvSWRzID0gc2VkZS5pZFByb2dyYW1hY2lvbkRCXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBhcmFyID0gcGVuZGllbnRlcy5maWx0ZXIocGVuZGllbnRlID0+IHBlbmRpZW50ZS5pZFNlZGUgPT09IGNvbXBhcmFyVG9kb0lkcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3VhcmRhclByb2dyYW1hY2lvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVkaXRhclByb2R1Y3RvID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcInByb2dyYW1hY2lvblwiKS5kb2MoY29tcGFyYXJUb2RvSWRzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZWRpdGFyUHJvZHVjdG8udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpZW50ZXM6IGNvbXBhcmFyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhclByb2dyYW1hY2lvbigpXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29tcGFyYXJUb2RvcygpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcGFyYXJJZCgpXHJcbiAgICB9LCBbcGVuZGllbnRlc10pXHJcblxyXG4gICAgLy8gdHJhZW1vcyBsYXMgZnVuY2lvbmVzIGRlIGZpcmViYXNlXHJcbiAgICBjb25zdCB7IGZpcmViYXNlLCB1c3VhcmlvIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dClcclxuXHJcbiAgICAvL3RyYWVyIHRvZG9zIGxhcyBQcm9ncmFtYWNpb25lc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3Byb2dyYW1hY2lvbicpLm9yZGVyQnkoJ2ZlY2hhJywgJ2FzYycpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2dyYW1hY2lvbmVzKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFuZWphclNuYXBzaG90KHNuYXBzaG90KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWVyUHJvZ3JhbWFjaW9uID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRQcm9ncmFtYWNpb25EQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhclByb2dyYW1hY2lvbkRCKHRyYWVyUHJvZ3JhbWFjaW9uKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvL3RyYWVyIHRvZGFzIGxhcyBhc2lnbmFjaW9uZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lclByb2dyYW1hY2lvbmVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdhc2lnbmFjaW9uJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhZXJQcm9ncmFtYWNpb24gPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZEFzaWduYWNpb25lc0RCOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBndWFyZGFyQXNpZ25hY2lvbmVzKHRyYWVyUHJvZ3JhbWFjaW9uKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvL3RyYWVyIHRvZG9zIGxvcyBwZW5kaWVudGVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9ncmFtYWNpb25lcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncGVuZGllbnRlJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyUHJvZ3JhbWFjaW9uZXMoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhZXJQcm9ncmFtYWNpb24gPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFBlbmRpZW50ZXNEQjogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZ3VhcmRhclBlbmRpZW50ZXModHJhZXJQcm9ncmFtYWNpb24pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vdHJhZXIgdG9kb3MgbG9zIG1vc3RyYXJQcm9ncmFtYWNpb25cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2J0ZW5lckNvbGVnaW9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdtb3N0cmFycHJvZ3JhbWFjaW9uJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyQ29sZWdpb3MoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhZXJNb3N0cmFyID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRNb3N0cmFyREI6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGd1YXJkYXJNb3N0cmFyUHJvZ3JhbWFjaW9uKHRyYWVyTW9zdHJhcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy9lbGltaW5hciBhc2lnbmFkYVxyXG4gICAgY29uc3QgZWxpbWluYXJBc2lnbmFkYSA9IChpZCkgPT4ge1xyXG5cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1JlYWxtZW50ZSBkZXNlYSBlbGltaW5hciBlc3RlIHVzdWFyaW8/JyxcclxuICAgICAgICAgICAgdGV4dDogXCJVbiB1c3VhcmlvIHF1ZSBzZSBlbGltaW5lIG5vIHNlIHB1ZWRlIFJlY3VwZXJhciFcIixcclxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdTaSwgRWxpbWluYXIhJ1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxpbWluYXJBc2lnbmFjaW9uID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbignYXNpZ25hY2lvbicpLmRvYyhpZClcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGltaW5hckZuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGltaW5hckFzaWduYWNpb24uZGVsZXRlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJGbigpXHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VsaW1pbmFkbyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZSBoYSBFbGltaW5hZG8gY29uIGV4aXRvJ1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9wYXNhciBkZSBwZW5kaWVudGUgYSBhc2lnbmFkYVxyXG4gICAgY29uc3QgYXNpZ25hciA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IHBlbmRpZW50ZXMuZmlsdGVyKHBlbmRpZW50ZSA9PiBwZW5kaWVudGUuaWRQZW5kaWVudGVzREIgPT09IGlkKVxyXG5cclxuICAgICAgICBsZXQgZ3VhcmRhckFzaWduYWRhcyA9IHt9XHJcblxyXG4gICAgICAgIGd1YXJkYXJBc2lnbmFkYXMuZGF0b3MgPSByZXN1bHRhZG9bMF0uZGF0b3NcclxuICAgICAgICBndWFyZGFyQXNpZ25hZGFzLmlkU2VkZSA9IHJlc3VsdGFkb1swXS5pZFNlZGVcclxuXHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdSZWFsbWVudGUgZGVzZWEgQXNpZ25hciBFc3RlIFVzdWFyaW8/JyxcclxuICAgICAgICAgICAgdGV4dDogXCJBbCBhc2lnbmFyIGVzdGUgdXN1YXJpbyBzZSBlbGltaW5hcmEgZGUgcGVuZGllbnRlcyFcIixcclxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdTaSwgQXNpZ25hciEnXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhc2lnbmFyRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGIuY29sbGVjdGlvbihcImFzaWduYWNpb25cIikuYWRkKGd1YXJkYXJBc2lnbmFkYXMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGltaW5hclBlbmRpZW50ZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGltaW5hclBlbmRpZW50ZSA9IGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3BlbmRpZW50ZScpLmRvYyhpZClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxpbWluYXJQZW5kaWVudGUuZGVsZXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxpbWluYXJQZW5kaWVudGVzKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYXNpZ25hckZuKClcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICAgICAgICAgICAnQXNpZ25hZGEhJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2UgaGEgYXNpZ25hZG8gY29uIGV4aXRvJ1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0VsaW1pbmFyIGRlIHBlbmRpZW50ZXNcclxuICAgIGNvbnN0IGVsaW1pbmFyUGVuZGllbnRlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdSZWFsbWVudGUgZGVzZWEgZWxpbWluYXIgZXN0ZSB1c3VhcmlvPycsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVW4gdXN1YXJpbyBxdWUgc2UgZWxpbWluZSBubyBzZSBwdWVkZSBSZWN1cGVyYXIhXCIsXHJcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnU2ksIEVsaW1pbmFyISdcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyUGVuZGllbnRlID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbigncGVuZGllbnRlJykuZG9jKGlkKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsaW1pbmFyRm4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsaW1pbmFyUGVuZGllbnRlLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyRm4oKVxyXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICdFbGltaW5hZG8hJyxcclxuICAgICAgICAgICAgICAgICAgICAnU2UgaGEgRWxpbWluYWRvIGNvbiBleGl0bydcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9tb3N0cmFyIGxhIHByb2dyYW1hY2lvbiBhIGxhcyBkaXN0cmlidWlkb3Jhc1xyXG4gICAgY29uc3QgbW9zdHJhclByb2dyYW1hY2lvbkZuID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtb3N0cmFyUHJvZ3JhbWFjaW9uWzBdLnZlclByb2dyYW1hY2lvbikge1xyXG4gICAgICAgICAgICBjb25zdCBjYW1iaWFyID0gZmlyZWJhc2UuZGIuY29sbGVjdGlvbignbW9zdHJhcnByb2dyYW1hY2lvbicpLmRvYyhtb3N0cmFyUHJvZ3JhbWFjaW9uWzBdLmlkTW9zdHJhckRCKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNhbWJpYXIudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHZlclByb2dyYW1hY2lvbjogZmFsc2VcclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWJpYXIgPSBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCdtb3N0cmFycHJvZ3JhbWFjaW9uJykuZG9jKG1vc3RyYXJQcm9ncmFtYWNpb25bMF0uaWRNb3N0cmFyREIpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2FtYmlhci51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmVyUHJvZ3JhbWFjaW9uOiB0cnVlXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWxpbWluYXJQcm9ncmFtYWNpb24gPSBpZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8QnVzY2FyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCdXNjYXJcIiBuYW1lPVwidGV4dG9idXNxdWVkYVwiIG9uQ2hhbmdlPXtlID0+IGd1YXJkYXJUZXh0b0J1c3F1ZWRhKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBteS0yXCI+QnVzY2FyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvQnVzY2FyPlxyXG5cclxuICAgICAgICAgICAgPENvbnRlbmVkb3I+XHJcbiAgICAgICAgICAgICAgICB7bW9zdHJhclByb2dyYW1hY2lvblswXSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgOiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9zdHJhclByb2dyYW1hY2lvblswXS52ZXJQcm9ncmFtYWNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPFB1YmxpY2FyIG9uQ2xpY2s9eygpID0+IG1vc3RyYXJQcm9ncmFtYWNpb25GbigpfT5EZWphciBkZSBQdWJsaWNhciBQcm9ncmFtYWNpb248L1B1YmxpY2FyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8UHVibGljYXIgb25DbGljaz17KCkgPT4gbW9zdHJhclByb2dyYW1hY2lvbkZuKCl9PlB1YmxpY2FyIFByb2dyYW1hY2lvbjwvUHVibGljYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxoMj5Qcm9ncmFtYWNpb248L2gyPlxyXG4gICAgICAgICAgICAgICAge2FjdGl2YXJCdXNxdWVkYVxyXG4gICAgICAgICAgICAgICAgICAgID8gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdGFkb0J1c3F1ZWRhLm1hcChzZWRlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBteS0zXCIga2V5PXtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+RmVjaGEgZGVzcGFjaG86IHtzZWRlLmZlY2hhfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57c2VkZS5pbnN0aXR1Y2lvbn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5ab25hOiBDYXN0aWxsYTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlN1cGVydmlzb3I6IHtzZWRlLnN1cGVydmlzb3JbMF0ubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Y3Vwb3M6IHtzZWRlLmN1cG9zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Y2FudGlkYWQgRGlzdHJpYnVpZG9yYXM6IHtzZWRlLmNhbnRpZGFkZGlzdHJpYnVpZG9yYXN9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzZWRlLmFzaWduYWNpb24gfHwgc2VkZS5hc2lnbmFjaW9uLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXgtMVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtgIyR7c2VkZS5pZFByb2dyYW1hY2lvbkRCfWB9IHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBc2lnbmFkYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj17YCMke3NlZGUuaWRQcm9ncmFtYWNpb25EQn0xYH0gcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlbmRpZW50ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9e3NlZGUuaWRQcm9ncmFtYWNpb25EQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VkZS5hc2lnbmFjaW9uLm1hcChhc2lnbmFjaW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RhRmxleCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2FzaWduYWNpb24uZGF0b3MuaWRVc3VhcmlvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthc2lnbmFjaW9uLmRhdG9zLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IGVsaW1pbmFyQXNpZ25hZGEoYXNpZ25hY2lvbi5pZEFzaWduYWNpb25lc0RCKX0+WDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RhRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPXtgJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9MWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlZGUucGVuZGllbnRlcy5tYXAocGVuZGllbnRlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RhRmxleFBlbmRpZW50ZSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gYWxlcnRcIiBrZXk9e3BlbmRpZW50ZS5kYXRvcy5pZFVzdWFyaW99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BlbmRpZW50ZS5kYXRvcy5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXthc2lnbmFyfT5hc2lnbmFyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2VsaW1pbmFyUGVuZGllbnRlfT5YPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdGFGbGV4UGVuZGllbnRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbGltaW5hclAgb25DbGljaz17KCkgPT4gZWxpbWluYXJQcm9ncmFtYWNpb24oc2VkZS5pZFByb2dyYW1hY2lvbkRCKX0+RWxpbWluYXI8L0VsaW1pbmFyUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsvKiBjdWFuZG8gbm8gc2UgZXN0YSBidXNjYW5kbyAqL31cclxuICAgICAgICAgICAgICAgIHshYWN0aXZhckJ1c3F1ZWRhXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZ3JhbWFjaW9uREIubWFwKHNlZGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG15LTNcIiBrZXk9e3NlZGUuaWRQcm9ncmFtYWNpb25EQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5GZWNoYSBkZXNwYWNobzoge3NlZGUuZmVjaGF9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntzZWRlLmluc3RpdHVjaW9ufTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlpvbmE6IENhc3RpbGxhPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+U3VwZXJ2aXNvcjoge3NlZGUuc3VwZXJ2aXNvclswXS5ub21icmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5jdXBvczoge3NlZGUuY3Vwb3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5jYW50aWRhZCBEaXN0cmlidWlkb3Jhczoge3NlZGUuY2FudGlkYWRkaXN0cmlidWlkb3Jhc308L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXNlZGUuYXNpZ25hY2lvbiB8fCBzZWRlLmFzaWduYWNpb24ubGVuZ3RoID09PSAwICYmIHNlZGUucGVuZGllbnRlcy5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG14LTFcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj17YCMke3NlZGUuaWRQcm9ncmFtYWNpb25EQn1gfSByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXNpZ25hZGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e2AjJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9YWB9IHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZW5kaWVudGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPXtgJHtzZWRlLmlkUHJvZ3JhbWFjaW9uREJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VkZS5hc2lnbmFjaW9uLm1hcChhc2lnbmFjaW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RhRmxleCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2FzaWduYWNpb24uZGF0b3MuaWRVc3VhcmlvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthc2lnbmFjaW9uLmRhdG9zLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IGVsaW1pbmFyQXNpZ25hZGEoYXNpZ25hY2lvbi5pZEFzaWduYWNpb25lc0RCKX0+WDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RhRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9e2Ake3NlZGUuaWRQcm9ncmFtYWNpb25EQn1hYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VkZS5wZW5kaWVudGVzLm1hcChwZW5kaWVudGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGFGbGV4UGVuZGllbnRlIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBhbGVydFwiIGtleT17cGVuZGllbnRlLmRhdG9zLmlkVXN1YXJpb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGVuZGllbnRlLmRhdG9zLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IGFzaWduYXIocGVuZGllbnRlLmlkUGVuZGllbnRlc0RCKX0+YXNpZ25hcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBlbGltaW5hclBlbmRpZW50ZShwZW5kaWVudGUuaWRQZW5kaWVudGVzREIpfT5YPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdGFGbGV4UGVuZGllbnRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbGltaW5hclAgb25DbGljaz17KCkgPT4gZWxpbWluYXJQcm9ncmFtYWNpb24oc2VkZS5pZFByb2dyYW1hY2lvbkRCKX0+RWxpbWluYXI8L0VsaW1pbmFyUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvQ29udGVuZWRvcj5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJwcm9ncmFtYWNpb25BZG1pbjsiXSwic291cmNlUm9vdCI6IiJ9