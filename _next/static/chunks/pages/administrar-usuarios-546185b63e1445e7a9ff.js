_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"HaE+":function(e,n,t){"use strict";function r(e,n,t,r,i,o,c){try{var a=e[o](c),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,o){var c=e.apply(n,t);function a(e){r(c,i,o,a,u,"next",e)}function u(e){r(c,i,o,a,u,"throw",e)}a(void 0)}))}}t.d(n,"a",(function(){return i}))},glLI:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/administrar-usuarios",function(){return t("zPkj")}])},zPkj:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),i=t.n(r),o=t("HaE+"),c=t("rePB"),a=t("h4VS"),u=t("nKUr"),s=t("q1tI"),l=t("HvpM"),d=t("5Yp1"),f=t("5D9J"),j=t("fEln"),p=t("PSD3"),b=t.n(p);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(){var e=Object(a.a)(["\n    cursor: pointer;\n"]);return O=function(){return e},e}function m(){var e=Object(a.a)(["\n\n    @media (min-width: 768px) {\n        display: block;\n        width: 1000px;\n        margin: 2rem auto 2rem 20rem;\n        \n    }\n    \n"]);return m=function(){return e},e}function v(){var e=Object(a.a)(["\n\n    text-align: center;\n\n    @media (min-width: 768px) {\n        margin-top: 5rem;\n        margin-left: 20%;\n\n    }\n    \n"]);return v=function(){return e},e}var x=f.a.h2(v()),w=f.a.div(m()),g=f.a.td(O());n.default=function(){var e=Object(s.useState)([]),n=e[0],t=e[1],r=Object(s.useContext)(l.a),a=r.firebase,f=(r.usuario,Object(j.a)()),p=f.admin,O=(f.supervisor,Object(s.useState)("")),m=(O[0],O[1]);function v(e){var n=e.docs.map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){Object(c.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({idUsuarioDB:e.id},e.data())}));t(n)}Object(s.useEffect)((function(){a.db.collection("usuarios").orderBy("rol").onSnapshot(v)}),[]);var y=function(){var e=Object(o.a)(i.a.mark((function e(n){var t,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.fire({title:"Select field validation",input:"select",inputOptions:{Roles:{admin:"Admin",supervisor:"Supervisor",distribuidor:"Distribuidor"}},inputPlaceholder:"Selecciona un Rol",showCancelButton:!0,inputValidator:function(e){return new Promise((function(n){""===e?n("You need to select oranges :)"):n()}))}});case 2:t=e.sent,(r=t.value)&&(console.log(n),m(r),o=a.db.collection("usuarios").doc(n),function(){return""===r?void 0:o.update({rol:r})}(),b.a.fire("Se a Modificado a: ".concat(r)));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.fire({title:"Realmente desea eliminar este usuario?",text:"Un usuario que se elimine no se puede Recuperar!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Eliminar!"}).then((function(e){if(e.isConfirmed){console.log(n);var t=a.db.collection("usuarios").doc(n);""===e||t.delete(),b.a.fire("Eliminado!","Con exito")}}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(u.jsx)(d.a,{children:p?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{children:"Administra los Usuarios"}),Object(u.jsx)(w,{className:"table-responsive",children:Object(u.jsxs)("table",{className:"table table-striped ",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Nombre"}),Object(u.jsx)("th",{scope:"col",children:"Email"}),Object(u.jsx)("th",{scope:"col",children:"Rol"}),Object(u.jsx)("th",{scope:"col",children:"Modificar"}),Object(u.jsx)("th",{scope:"col"})]})}),Object(u.jsx)("tbody",{children:n.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:e.nombre}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.rol}),Object(u.jsx)(g,{onClick:function(){return y(e.idUsuarioDB)},children:"Editar"}),Object(u.jsx)(g,{onClick:function(){return P(e.idUsuarioDB)},children:"X"})]},e.idUsuarioDB)}))})]})})]}):Object(u.jsx)(x,{children:"No puedes estar aqui"})})}}},[["glLI",0,2,1,3,4]]]);