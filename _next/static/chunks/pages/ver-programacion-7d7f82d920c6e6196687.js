_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"6B4I":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ver-programacion",function(){return t("vr3f")}])},"HaE+":function(e,n,t){"use strict";function r(e,n,t,r,o,a,c){try{var i=e[a](c),s=i.value}catch(u){return void t(u)}i.done?n(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var c=e.apply(n,t);function i(e){r(c,o,a,i,s,"next",e)}function s(e){r(c,o,a,i,s,"throw",e)}i(void 0)}))}}t.d(n,"a",(function(){return o}))},vr3f:function(e,n,t){"use strict";t.r(n);var r=t("rePB"),o=t("o0o1"),a=t.n(o),c=t("HaE+"),i=t("h4VS"),s=t("nKUr"),u=t("q1tI"),d=t("5Yp1"),l=t("HvpM"),f=t("5D9J"),p=t("PSD3"),b=t.n(p);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #e1e1e1;\n    background-color:  #fff3cd;\n    color: #856404;\n    border-color: #ffeeba;\n    margin-bottom: 0.5rem;\n    \n"]);return j=function(){return e},e}function O(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #e1e1e1;\n    color: #0c5460;\n    background-color: #d1ecf1;\n    border-color: #bee5eb;\n    margin-bottom: 0.5rem;\n    \n"]);return O=function(){return e},e}function v(){var e=Object(i.a)(["\n    background: #e1e1e1;\n    \n    text-align: center;\n    align-items: center;\n    padding: 1rem;\n    margin: 1rem 0.5rem;\n\n    @media (min-width: 768px) {\n        width: 60rem;\n        margin: 5rem auto;\n    }\n"]);return v=function(){return e},e}var g=f.a.div(v());f.a.li(O()),f.a.li(j());n.default=function(){var e=Object(u.useState)([]),n=e[0],t=e[1],r=Object(u.useState)([]),o=r[0],i=r[1],f=Object(u.useState)([]),p=f[0],m=f[1],j=Object(u.useState)({id:"",cantidad:""}),O=j[0],v=j[1],x=Object(u.useState)([]),w=(x[0],x[1]);Object(u.useEffect)((function(){n.forEach((function(e){var n=e.idProgramacionDB,t=e.cantidaddistribuidoras,r=o.filter((function(e){return e.idSede===n}));w(r),r.length<=t&&function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.db.collection("programacion").doc(n),e.next=3,t.update({asignacion:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}))}),[O,o]),Object(u.useEffect)((function(){n.forEach((function(e){var n=e.idProgramacionDB,t=p.filter((function(e){return e.idSede===n}));w(t),function(){var e=Object(c.a)(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.db.collection("programacion").doc(n),e.next=3,r.update({pendientes:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}))}),[O,p]);var y=Object(u.useContext)(l.a),P=y.firebase,S=y.usuario;Object(u.useEffect)((function(){function e(e){var n=e.docs.map((function(e){return h({idProgramacionDB:e.id},e.data())}));t(n)}P.db.collection("programacion").orderBy("fecha","asc").onSnapshot(e)}),[]),Object(u.useEffect)((function(){function e(e){var n=e.docs.map((function(e){return h({idAsignacionesDB:e.id},e.data())}));i(n)}P.db.collection("asignacion").onSnapshot(e)}),[]),Object(u.useEffect)((function(){function e(e){var n=e.docs.map((function(e){return h({idPendientesDB:e.id},e.data())}));m(n)}P.db.collection("pendiente").onSnapshot(e)}),[]);var E=function(){var e=Object(c.a)(a.a.mark((function e(n,t){var r,i,s,u,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r={}).idSede=n,r.datos={idUsuario:S.uid,nombre:S.displayName},i=o.filter((function(e){return e.idSede===n})),s=i.filter((function(e){return e.datos.idUsuario===S.uid})),u=p.filter((function(e){return e.idSede===n})),d=u.filter((function(e){return e.datos.idUsuario===S.uid})),console.log(i),function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.fire({title:"Realmente deseas postularte en esta sede?",text:"Recuerde Tener presente los periodos de entrega de las sedes en que te inscribes",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Postular!"}).then((function(e){if(e.isConfirmed){if(i.length<t&&0===s.length&&P.db.collection("asignacion").add(r),0!=s.length&&console.log("Solo te puedes postular 1 vez"),v({id:n,cantidad:t}),setTimeout((function(){v({id:"",cantidad:""})}),3e3),i.length>=t&&0===s.length){console.log("quedas pendiente");0===d.length&&(P.db.collection("pendiente").add(r),b.a.fire("Quedas Pendiente, Cupos Completos!","Recuerda Estar revisando las postulaciones, ya que estas pueden cambiar")),0!=d.length&&(console.log("Solo te puedes postular 1 vez"),b.a.fire({icon:"error",title:"Oops...",text:"Ya te has postulado en esta sede, Solo se permite una postulacion por usuario!"})),v({id:n,cantidad:t}),setTimeout((function(){v({id:"",cantidad:""})}),3e3)}else 0!=s.length?(console.log("Solo te puedes postular 1 vez"),b.a.fire({icon:"error",title:"Oops...",text:"Ya te has postulado en esta sede, Solo se permite una postulacion por usuario!"})):b.a.fire("Postulado!","Recuerda Estar revisando las postulaciones, ya que estas pueden cambiar")}}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()();case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return Object(s.jsx)(d.a,{children:Object(s.jsxs)(g,{children:[Object(s.jsx)("h2",{children:"Programacion"}),n.map((function(e){return Object(s.jsxs)("div",{className:"card my-3",children:[Object(s.jsx)("div",{className:"card-header",children:Object(s.jsxs)("p",{className:"card-text",children:["Fecha despacho: ",e.fecha," "]})}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:e.institucion}),Object(s.jsx)("p",{className:"card-text",children:"Zona: Castilla"}),Object(s.jsxs)("p",{className:"card-text",children:["Supervisor: ",e.supervisor[0].nombre]}),Object(s.jsxs)("p",{className:"card-text",children:["cupos: ",e.cupos]}),Object(s.jsxs)("p",{className:"card-text",children:["cantidad Distribuidoras: ",e.cantidaddistribuidoras]}),Object(s.jsx)("p",{className:"btn btn-danger",onClick:function(){return E(e.idProgramacionDB,e.cantidaddistribuidoras)},children:"Postularte"})]})]},e.idProgramacionDB)}))]})})}}},[["6B4I",0,2,1,3,4]]]);