webpackHotUpdate_N_E("pages/programar-colegio",{

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
        console.log(resultado);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUm9sZXMuanMiXSwibmFtZXMiOlsidXNlUm9sZXMiLCJ1c2VTdGF0ZSIsInVzdWFyaW9zREIiLCJndWFyZGFyVXN1YXJpb3NEQiIsInVzdWFyaW9BZG1pbiIsImd1YXJkYXJVc3VhcmlvQWRtaW4iLCJhZG1pbiIsImd1YXJkYXJBZG1pbiIsInVzdWFyaW9TdXBlcnZpc29yIiwiZ3VhcmRhclVzdWFyaW9TdXBlcnZpc29yIiwic3VwZXJ2aXNvciIsImd1YXJkYXJTdXBlcnZpc29yIiwidXNlQ29udGV4dCIsIkZpcmViYXNlQ29udGV4dCIsImZpcmViYXNlIiwidXN1YXJpbyIsInVzZUVmZmVjdCIsIm9idGVuZXJQcm9kdWN0b3MiLCJkYiIsImNvbGxlY3Rpb24iLCJvblNuYXBzaG90IiwibWFuZWphclNuYXBzaG90Iiwic25hcHNob3QiLCJ0cmFlclVzdWFyaW9zIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsInJlc3VsdGFkbyIsImZpbHRlciIsInVzZXIiLCJyb2wiLCJjb25zb2xlIiwibG9nIiwidWlkIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUVuQjtBQUZtQixrQkFHcUJDLHNEQUFRLENBQUMsRUFBRCxDQUg3QjtBQUFBLE1BR1pDLFVBSFk7QUFBQSxNQUdBQyxpQkFIQSxpQkFLbkI7OztBQUxtQixtQkFNeUJGLHNEQUFRLENBQUMsRUFBRCxDQU5qQztBQUFBLE1BTVpHLFlBTlk7QUFBQSxNQU1FQyxtQkFORixrQkFPbkI7OztBQVBtQixtQkFRV0osc0RBQVEsQ0FBQyxLQUFELENBUm5CO0FBQUEsTUFRWkssS0FSWTtBQUFBLE1BUUxDLFlBUkssa0JBVW5COzs7QUFWbUIsbUJBV21DTixzREFBUSxDQUFDLEVBQUQsQ0FYM0M7QUFBQSxNQVdaTyxpQkFY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QUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFVBQUlLLE9BQUosRUFBYTtBQUNULFlBQU1jLFNBQVMsR0FBR3JCLGlCQUFpQixDQUFDc0IsTUFBbEIsQ0FBeUIsVUFBQUMsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUNKLEVBQUwsS0FBWVosT0FBTyxDQUFDb0IsR0FBeEI7QUFBQSxTQUE3QixDQUFsQjs7QUFFQSxZQUFJTixTQUFTLENBQUNPLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEJ6QiwyQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0gsU0FGRCxNQUVPO0FBQ0hBLDJCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDSDtBQUVKLE9BVEQsTUFTTztBQUNIQSx5QkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0g7QUFDSixLQWJEOztBQWVBRCxjQUFVO0FBQ2IsR0FqQlEsRUFpQk4sQ0FBQ1IsVUFBRCxFQUFhTSxpQkFBYixFQUFnQ08sT0FBaEMsQ0FqQk0sQ0FBVDtBQW1CQSxTQUFPO0FBQ0hULFNBQUssRUFBTEEsS0FERztBQUVISSxjQUFVLEVBQVZBO0FBRkcsR0FBUDtBQUlILENBbEhEOztHQUFNVixROztBQW9IU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZ3JhbWFyLWNvbGVnaW8uMGE3NTVhODY0NGQ3YzBkODJlNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGaXJlYmFzZUNvbnRleHQgZnJvbSAnLi4vZmlyZWJhc2UvY29udGV4dCdcclxuXHJcbmNvbnN0IHVzZVJvbGVzID0gKCkgPT4ge1xyXG5cclxuICAgIC8vc3RhdGVcclxuICAgIGNvbnN0IFt1c3Vhcmlvc0RCLCBndWFyZGFyVXN1YXJpb3NEQl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvLyBzdGF0ZSB1c3VhcmlvcyBhZG1pblxyXG4gICAgY29uc3QgW3VzdWFyaW9BZG1pbiwgZ3VhcmRhclVzdWFyaW9BZG1pbl0gPSB1c2VTdGF0ZShbXSlcclxuICAgIC8vIHN0YXRlIHF1ZSB2ZXJpZmljYSBzaSBlbCB1c3VhcmlvIGFjdHVhbCBlcyBlbCBhZG1pblxyXG4gICAgY29uc3QgW2FkbWluLCBndWFyZGFyQWRtaW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gc3RhdGUgdXN1YXJpb3Mgc3VwZXJ2aXNvclxyXG4gICAgY29uc3QgW3VzdWFyaW9TdXBlcnZpc29yLCBndWFyZGFyVXN1YXJpb1N1cGVydmlzb3JdID0gdXNlU3RhdGUoW10pXHJcbiAgICAvLyBzdGF0ZSBxdWUgdmVyaWZpY2Egc2kgZWwgdXN1YXJpbyBhY3R1YWwgZXMgc3VwZXJ2aXNvclxyXG4gICAgY29uc3QgW3N1cGVydmlzb3IsIGd1YXJkYXJTdXBlcnZpc29yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vIGNvbnN1bHRhciBlbCBjb250ZXh0XHJcbiAgICBjb25zdCB7IGZpcmViYXNlLCB1c3VhcmlvIH0gPSB1c2VDb250ZXh0KEZpcmViYXNlQ29udGV4dClcclxuXHJcbiAgICAvL3RyYWVyIHRvZG9zIGxvcyB1c3Vhcmlvc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyUHJvZHVjdG9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKCd1c3VhcmlvcycpLm9uU25hcHNob3QobWFuZWphclNuYXBzaG90KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2J0ZW5lclByb2R1Y3RvcygpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBtYW5lamFyU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgICAgICBjb25zdCB0cmFlclVzdWFyaW9zID0gc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGd1YXJkYXJVc3Vhcmlvc0RCKHRyYWVyVXN1YXJpb3MpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vZmlsdHJhciByb2wgYWRtaW5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWRtaW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSB1c3Vhcmlvc0RCLmZpbHRlcih1c2VyID0+IHVzZXIucm9sID09PSAnYWRtaW4nKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdGFkbylcclxuICAgICAgICAgICAgICAgIGd1YXJkYXJVc3VhcmlvQWRtaW4ocmVzdWx0YWRvKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRtaW4oKVxyXG4gICAgfSwgW3VzdWFyaW9zREJdKVxyXG5cclxuICAgIC8vIGRlZmluaXIgc2kgZWwgdXN1YXJpbyBhY3R1YWwgZXMgZWwgYWRtaW5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWRtaW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSB1c3VhcmlvQWRtaW4uZmlsdGVyKHVzZXIgPT4gdXNlci5pZCA9PT0gdXN1YXJpby51aWQgKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhZG8ubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBndWFyZGFyQWRtaW4odHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJBZG1pbihmYWxzZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3VhcmRhckFkbWluKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZG1pbigpXHJcbiAgICB9LCBbdXN1YXJpb3NEQiwgdXN1YXJpb0FkbWluLCB1c3VhcmlvXSlcclxuXHJcbiAgICAvL2ZpbHRyYXIgcm9sIHN1cGVydmlzb3JcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWRtaW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSB1c3Vhcmlvc0RCLmZpbHRlcih1c2VyID0+IHVzZXIucm9sID09PSAnc3VwZXJ2aXNvcicpXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBndWFyZGFyVXN1YXJpb1N1cGVydmlzb3IocmVzdWx0YWRvKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRtaW4oKVxyXG4gICAgfSwgW3VzdWFyaW9zREJdKVxyXG5cclxuICAgIC8vIGRlZmluaXIgc2kgZWwgdXN1YXJpbyBhY3R1YWwgZXMgc3VwZXJ2aXNvclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdXBlcnZpc29yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXN1YXJpbykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gdXN1YXJpb1N1cGVydmlzb3IuZmlsdGVyKHVzZXIgPT4gdXNlci5pZCA9PT0gdXN1YXJpby51aWQgKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhZG8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJTdXBlcnZpc29yKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGd1YXJkYXJTdXBlcnZpc29yKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBndWFyZGFyU3VwZXJ2aXNvcihmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXJ2aXNvcigpXHJcbiAgICB9LCBbdXN1YXJpb3NEQiwgdXN1YXJpb1N1cGVydmlzb3IsIHVzdWFyaW9dKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRtaW4sXHJcbiAgICAgICAgc3VwZXJ2aXNvclxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUm9sZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==