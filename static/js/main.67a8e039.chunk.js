(this.webpackJsonpcarfrontbite=this.webpackJsonpcarfrontbite||[]).push([[0],{59:function(e,a,n){e.exports=n(70)},64:function(e,a,n){},65:function(e,a,n){},70:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(10),c=n.n(l),o=(n(64),n(65),n(17)),i=n(46),u=(n(68),n(113)),d=n(115),m=n(26),s=n(32),f=n(112),b=n(116),h=n(109),E=n(107),g=n(106);function p(e){var a=Object(t.useState)(!1),n=Object(o.a)(a,2),l=n[0],c=n[1],i=Object(t.useState)({brand:"",model:"",color:"",year:"",fuel:"",price:""}),d=Object(o.a)(i,2),p=d[0],C=d[1],v=function(){e.addCar(p),c(!1)},y=function(e){C(Object(s.a)({},p,Object(m.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(u.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){c(!0)}},"Add car"),r.a.createElement(b.a,{open:l,disableBackdropClick:!0,disableEscapeKeyDown:!0,onClose:v,"aria-labelledby":"form-dialog-title"},r.a.createElement(g.a,{id:"form-dialog-title"},"New car"),r.a.createElement(E.a,null,r.a.createElement(f.a,{autoFocus:!0,margin:"dense",id:"brand",name:"brand",value:p.brand,onChange:y,label:"Brand",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"model",name:"model",value:p.model,onChange:y,label:"Model",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"color",name:"color",value:p.color,onChange:y,label:"Color",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"fuel",name:"fuel",value:p.fuel,onChange:y,label:"Fuel",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"year",name:"year",value:p.year,onChange:y,label:"Year",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"price",name:"price",value:p.price,onChange:y,label:"Price (\u20ac)",fullWidth:!0})),r.a.createElement(h.a,null,r.a.createElement(u.a,{onClick:function(){c(!1)},color:"primary"},"Cancel"),r.a.createElement(u.a,{onClick:v,color:"primary"},"Save"))))}function C(e){var a=Object(t.useState)(!1),n=Object(o.a)(a,2),l=n[0],c=n[1],i=Object(t.useState)({brand:"",model:"",color:"",year:"",fuel:"",price:""}),d=Object(o.a)(i,2),p=d[0],C=d[1],v=function(){e.updateCar(e.car._links.self.href,p),c(!1)},y=function(e){C(Object(s.a)({},p,Object(m.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(u.a,{size:"small",color:"primary",onClick:function(){console.log(e.car),C({brand:e.car.brand,model:e.car.model,color:e.car.color,fuel:e.car.fuel,year:e.car.year,price:e.car.price}),c(!0)}},"Edit"),r.a.createElement(b.a,{open:l,disableBackdropClick:!0,disableEscapeKeyDown:!0,onClose:v,"aria-labelledby":"form-dialog-title"},r.a.createElement(g.a,{id:"form-dialog-title"},"Edit existing car"),r.a.createElement(E.a,null,r.a.createElement(f.a,{autoFocus:!0,margin:"dense",id:"brand",name:"brand",value:p.brand,onChange:y,label:"Brand",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"model",name:"model",value:p.model,onChange:y,label:"Model",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"color",name:"color",value:p.color,onChange:y,label:"Color",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"fuel",name:"fuel",value:p.fuel,onChange:y,label:"Fuel",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"year",name:"year",value:p.year,onChange:y,label:"Year",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"price",name:"price",value:p.price,onChange:y,label:"Price (\u20ac)",fullWidth:!0})),r.a.createElement(h.a,null,r.a.createElement(u.a,{onClick:function(){c(!1)},color:"primary"},"Cancel"),r.a.createElement(u.a,{onClick:v,color:"primary"},"Save"))))}function v(){var e=Object(t.useState)([]),a=Object(o.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)(!1),m=Object(o.a)(c,2),s=m[0],f=m[1],b=Object(t.useState)(""),h=Object(o.a)(b,2),E=h[0],g=h[1];Object(t.useEffect)((function(){v()}),[]);var v=function(){fetch("https://carstock-1587682296736.azurewebsites.net/cars").then((function(e){return e.json()})).then((function(e){return l(e._embedded.cars)})).catch((function(e){return console.error(e)}))},y=function(e,a){fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return v()})).then((function(e){g("Car updated"),f(!0)})).catch((function(e){return console.error(e)}))},j=[{Header:"Brand",accessor:"brand"},{Header:"Model",accessor:"model"},{Header:"Color",accessor:"color"},{Header:"Year",accessor:"year"},{Header:"Fuel",accessor:"fuel"},{Header:"Price (\u20ac)",accessor:"price"},{Cell:function(e){return r.a.createElement(C,{car:e.original,updateCar:y})}},{accessor:"_links.self.href",filterable:!1,sortable:!1,minWidth:60,Cell:function(e){return r.a.createElement(u.a,{color:"secondary",size:"small",onClick:function(){return a=e.value,void(window.confirm("Are you sure?")&&fetch(a,{method:"DELETE"}).then((function(e){return v()})).then((function(e){g("Car deleted"),f(!0)})).catch((function(e){return console.error(e)})));var a}},"Delete")}}];return r.a.createElement("div",null,r.a.createElement(p,{addCar:function(e){fetch("https://carstock-1587682296736.azurewebsites.net/cars",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return v()})).then((function(e){g("New car added"),f(!0)})).catch((function(e){return console.error(e)}))}}),r.a.createElement(i.a,{filterable:!0,defaultPageSize:10,data:n,columns:j}),r.a.createElement(d.a,{open:s,autoHideDuration:3e3,onClose:function(){f(!1)},message:E}))}var y=n(110),j=n(111),O=n(72);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y.a,{position:"static"},r.a.createElement(j.a,null,r.a.createElement(O.a,{variant:"h6"},"CarShop"))),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.67a8e039.chunk.js.map