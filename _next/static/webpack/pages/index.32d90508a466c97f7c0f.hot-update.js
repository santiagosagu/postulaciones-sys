webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useRoles.js":
/*!***************************!*\
  !*** ./hooks/useRoles.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/context */ "./firebase/context.js");


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var useRoles = function useRoles() {
  _s();

  //state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      usuariosDB = _useState[0],
      guardarUsuariosDB = _useState[1]; // state usuarios admin


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      usuarioAdmin = _useState2[0],
      guardarUsuarioAdmin = _useState2[1]; // state que verifica si el usuario actual es el admin


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      admin = _useState3[0],
      guardarAdmin = _useState3[1]; // state usuarios supervisor


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      usuarioSupervisor = _useState4[0],
      guardarUsuarioSupervisor = _useState4[1]; // state que verifica si el usuario actual es supervisor


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      supervisor = _useState5[0],
      guardarSupervisor = _useState5[1]; // consultar el context


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_firebase_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      firebase = _useContext.firebase,
      usuario = _useContext.usuario; //traer todos los usuarios


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var obtenerProductos = function obtenerProductos() {
      firebase.db.collection('usuarios').onSnapshot(manejarSnapshot);
    };

    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    var traerUsuarios = snapshot.docs.map(function (doc) {
      return _objectSpread({
        id: doc.id
      }, doc.data());
    });
    guardarUsuariosDB(traerUsuarios);
  } //filtrar rol admin


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var admin = function admin() {
      if (usuario) {
        var resultado = usuariosDB.filter(function (user) {
          return user.rol === 'admin';
        });
        guardarUsuarioAdmin(resultado);
      }
    };

    admin();
  }, [usuariosDB]); // definir si el usuario actual es el admin

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var admin = function admin() {
      if (usuario) {
        var resultado = usuarioAdmin.filter(function (user) {
          return user.id === usuario.uid;
        });

        if (resultado.length > 0) {
          guardarAdmin(true);
        } else {
          guardarAdmin(false);
        }
      } else {
        guardarAdmin(false);
      }
    };

    admin();
  }, [usuariosDB, usuarioAdmin, usuario]); //filtrar rol supervisor

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var admin = function admin() {
      if (usuario) {
        var resultado = usuariosDB.filter(function (user) {
          return user.rol === 'supervisor';
        });
        guardarUsuarioSupervisor(resultado);
      }
    };

    admin();
  }, [usuariosDB]); // definir si el usuario actual es supervisor

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var supervisor = function supervisor() {
      if (usuario) {
        var resultado = usuarioSupervisor.filter(function (user) {
          return user.id === usuario.uid;
        });

        if (resultado.length > 0) {
          guardarSupervisor(true);
        } else {
          guardarSupervisor(false);
        }
      } else {
        guardarSupervisor(false);
      }
    };

    supervisor();
  }, [usuariosDB, usuarioSupervisor, usuario]);
  return {
    admin: admin,
    supervisor: supervisor
  };
};

_s(useRoles, "dnACMOwpViW/B3/iKEWCiEHK7yA=");

/* harmony default export */ __webpack_exports__["default"] = (useRoles);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUm9sZXMuanMiXSwibmFtZXMiOlsidXNlUm9sZXMiLCJ1c2VTdGF0ZSIsInVzdWFyaW9zREIiLCJndWFyZGFyVXN1YXJpb3NEQiIsInVzdWFyaW9BZG1pbiIsImd1YXJkYXJVc3VhcmlvQWRtaW4iLCJhZG1pbiIsImd1YXJkYXJBZG1pbiIsInVzdWFyaW9TdXBlcnZpc29yIiwiZ3VhcmRhclVzdWFyaW9TdXBlcnZpc29yIiwic3VwZXJ2aXNvciIsImd1YXJkYXJTdXBlcnZpc29yIiwidXNlQ29udGV4dCIsIkZpcmViYXNlQ29udGV4dCIsImZpcmViYXNlIiwidXN1YXJpbyIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBzaG90Iiwic25hcHNob3QiLCJ0cmFlclVzdWFyaW9zIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsInJlc3VsdGFkbyIsImZpbHRlciIsInVzZXIiLCJyb2wiLCJ1aWQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CO0FBRm1CLGtCQUdxQkMsc0RBQVEsQ0FBQyxFQUFELENBSDdCO0FBQUEsTUFHWkMsVUFIWTtBQUFBLE1BR0FDLGlCQUhBLGlCQUtuQjs7O0FBTG1CLG1CQU15QkYsc0RBQVEsQ0FBQyxFQUFELENBTmpDO0FBQUEsTUFNWkcsWUFOWTtBQUFBLE1BTUVDLG1CQU5GLGtCQU9uQjs7O0FBUG1CLG1CQVFXSixzREFBUSxDQUFDLEtBQUQsQ0FSbkI7QUFBQSxNQVFaSyxLQVJZO0FBQUEsTUFRTEMsWUFSSyxrQkFVbkI7OztBQVZtQixtQkFXbUNOLHNEQUFRLENBQUMsRUFBRCxDQVgzQztBQUFBLE1BV1pPLGlCQVhZO0FBQUEsTUFXT0Msd0JB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Q1QsWUFBTWMsU0FBUyxHQUFHckIsaUJBQWlCLENBQUNzQixNQUFsQixDQUF5QixVQUFBQyxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ0osRUFBTCxLQUFZWixPQUFPLENBQUNrQixHQUF4QjtBQUFBLFNBQTdCLENBQWxCOztBQUVBLFlBQUlKLFNBQVMsQ0FBQ0ssTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QnZCLDJCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDSCxTQUZELE1BRU87QUFDSEEsMkJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNIO0FBRUosT0FURCxNQVNPO0FBQ0hBLHlCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDSDtBQUNKLEtBYkQ7O0FBZUFELGNBQVU7QUFDYixHQWpCUSxFQWlCTixDQUFDUixVQUFELEVBQWFNLGlCQUFiLEVBQWdDTyxPQUFoQyxDQWpCTSxDQUFUO0FBbUJBLFNBQU87QUFDSFQsU0FBSyxFQUFMQSxLQURHO0FBRUhJLGNBQVUsRUFBVkE7QUFGRyxHQUFQO0FBSUgsQ0FqSEQ7O0dBQU1WLFE7O0FBbUhTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMmQ5MDUwOGE0NjZjOTdmN2MwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZpcmViYXNlQ29udGV4dCBmcm9tICcuLi9maXJlYmFzZS9jb250ZXh0J1xyXG5cclxuY29uc3QgdXNlUm9sZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgLy9zdGF0ZVxyXG4gICAgY29uc3QgW3VzdWFyaW9zREIsIGd1YXJkYXJVc3Vhcmlvc0RCXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vIHN0YXRlIHVzdWFyaW9zIGFkbWluXHJcbiAgICBjb25zdCBbdXN1YXJpb0FkbWluLCBndWFyZGFyVXN1YXJpb0FkbWluXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgLy8gc3RhdGUgcXVlIHZlcmlmaWNhIHNpIGVsIHVzdWFyaW8gYWN0dWFsIGVzIGVsIGFkbWluXHJcbiAgICBjb25zdCBbYWRtaW4sIGd1YXJkYXJBZG1pbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBzdGF0ZSB1c3VhcmlvcyBzdXBlcnZpc29yXHJcbiAgICBjb25zdCBbdXN1YXJpb1N1cGVydmlzb3IsIGd1YXJkYXJVc3VhcmlvU3VwZXJ2aXNvcl0gPSB1c2VTdGF0ZShbXSlcclxuICAgIC8vIHN0YXRlIHF1ZSB2ZXJpZmljYSBzaSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBzdXBlcnZpc29yXHJcbiAgICBjb25zdCBbc3VwZXJ2aXNvciwgZ3VhcmRhclN1cGVydmlzb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gY29uc3VsdGFyIGVsIGNvbnRleHRcclxuICAgIGNvbnN0IHsgZmlyZWJhc2UsIHVzdWFyaW8gfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KVxyXG5cclxuICAgIC8vdHJhZXIgdG9kb3MgbG9zIHVzdWFyaW9zXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJQcm9kdWN0b3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRiLmNvbGxlY3Rpb24oJ3VzdWFyaW9zJykub25TbmFwc2hvdChtYW5lamFyU25hcHNob3QpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYnRlbmVyUHJvZHVjdG9zKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hbmVqYXJTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgICAgIGNvbnN0IHRyYWVyVXN1YXJpb3MgPSBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3VhcmRhclVzdWFyaW9zREIodHJhZXJVc3VhcmlvcylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9maWx0cmFyIHJvbCBhZG1pblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhZG1pbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzdWFyaW8pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IHVzdWFyaW9zREIuZmlsdGVyKHVzZXIgPT4gdXNlci5yb2wgPT09ICdhZG1pbicpXHJcblxyXG4gICAgICAgICAgICAgICAgZ3VhcmRhclVzdWFyaW9BZG1pbihyZXN1bHRhZG8pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZG1pbigpXHJcbiAgICB9LCBbdXN1YXJpb3NEQl0pXHJcblxyXG4gICAgLy8gZGVmaW5pciBzaSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBlbCBhZG1pblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhZG1pbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzdWFyaW8pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IHVzdWFyaW9BZG1pbi5maWx0ZXIodXNlciA9PiB1c2VyLmlkID09PSB1c3VhcmlvLnVpZCApXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdGFkby5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJBZG1pbih0cnVlKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhckFkbWluKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBndWFyZGFyQWRtaW4oZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkbWluKClcclxuICAgIH0sIFt1c3Vhcmlvc0RCLCB1c3VhcmlvQWRtaW4sIHVzdWFyaW9dKVxyXG5cclxuICAgIC8vZmlsdHJhciByb2wgc3VwZXJ2aXNvclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhZG1pbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzdWFyaW8pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IHVzdWFyaW9zREIuZmlsdGVyKHVzZXIgPT4gdXNlci5yb2wgPT09ICdzdXBlcnZpc29yJylcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGd1YXJkYXJVc3VhcmlvU3VwZXJ2aXNvcihyZXN1bHRhZG8pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZG1pbigpXHJcbiAgICB9LCBbdXN1YXJpb3NEQl0pXHJcblxyXG4gICAgLy8gZGVmaW5pciBzaSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBzdXBlcnZpc29yXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN1cGVydmlzb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSB1c3VhcmlvU3VwZXJ2aXNvci5maWx0ZXIodXNlciA9PiB1c2VyLmlkID09PSB1c3VhcmlvLnVpZCApXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdGFkby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhclN1cGVydmlzb3IodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VhcmRhclN1cGVydmlzb3IoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGd1YXJkYXJTdXBlcnZpc29yKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlcnZpc29yKClcclxuICAgIH0sIFt1c3Vhcmlvc0RCLCB1c3VhcmlvU3VwZXJ2aXNvciwgdXN1YXJpb10pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZG1pbixcclxuICAgICAgICBzdXBlcnZpc29yXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSb2xlczsiXSwic291cmNlUm9vdCI6IiJ9