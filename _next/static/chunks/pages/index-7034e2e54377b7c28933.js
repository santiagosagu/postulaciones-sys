_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{RNiq:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var r=t("rePB"),i=t("h4VS"),o=t("nKUr"),c=(t("8Kt/"),t("q1tI")),a=t("HvpM"),u=t("5Yp1"),s=t("5D9J"),l=t("fEln");function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(){var e=Object(i.a)(["\n  background: url('paquetes-alimentarios.jpg');\n  width: 100%;\n  height: 100vh;\n  background-repeat:no-repeat; /* Indicamos que no se repetira */\n\tbackground-size:cover; /* Encajamos la imagen al 100% del ancho */\n\tbackground-attachment: fixed; /* Establecemos una posicion fija para la imagen */\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n\n  @media (max-width: 768px ) {\n    justify-content: center;\n  }\n"]);return b=function(){return e},e}function p(){var e=Object(i.a)(["\n  text-align: center;\n  font-weight: bold;\n  font-size: 3rem;\n  \n  @media (min-width: 768px) {\n    margin-top: 5rem;\n    color: white;\n  }\n"]);return p=function(){return e},e}var j=s.a.h1(p()),O=s.a.div(b());function m(){var e=Object(c.useState)({nombre:"",email:"",id:"",rol:"distribuidor"}),n=e[0],t=e[1],r=Object(c.useState)([]),i=r[0],s=r[1],d=Object(c.useState)(!1),b=d[0],p=d[1],m=Object(c.useContext)(a.a),h=m.firebase,g=m.usuario,w=Object(l.a)(),v=w.admin;w.supervisor;function y(e){var n=e.docs.map((function(e){return f({idUsuarioDB:e.id},e.data())}));s(n)}return Object(c.useEffect)((function(){h.db.collection("usuarios").onSnapshot(y)}),[]),Object(c.useEffect)((function(){if(g){!function(){var e=i.filter((function(e){return e.id===g.uid}));0!==e.length||""===n.id?(p(!1),console.log(e)):p(!0)}()}else p(!1)}),[g,i]),Object(c.useEffect)((function(){g?(console.log("ya hay usuario"),t(f(f({},n),{},{nombre:g.displayName,email:g.email,id:g.uid})),b&&h.db.collection("usuarios").add(n)):t(f(f({},n),{},{nombre:"",email:"",id:""}))}),[g,b]),Object(o.jsx)(u.a,{children:Object(o.jsx)(O,{children:v?null:Object(o.jsx)(j,{children:"Bienvenido al sistema de Postulaciones"})})})}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1,3]]]);