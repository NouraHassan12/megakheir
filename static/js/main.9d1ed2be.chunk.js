(this.webpackJsonpmegakheir=this.webpackJsonpmegakheir||[]).push([[0],{18:function(e,a,t){},30:function(e,a,t){e.exports=t.p+"static/media/Vector.b1ddbca6.svg"},31:function(e,a,t){e.exports=t.p+"static/media/MEGAKHEIR-Logo 1.0ed5f72a.svg"},32:function(e,a,t){e.exports=t.p+"static/media/Powered-by.9c26d8b5.svg"},33:function(e,a,t){e.exports=t.p+"static/media/Facebook.967c61a5.svg"},34:function(e,a,t){e.exports=t.p+"static/media/instagram.12cfaa8c.svg"},37:function(e,a,t){e.exports=t(65)},42:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),l=(t(42),t(18),t(6)),i=t(11),s=t(29),m=t.n(s),d=function(){return{type:"FETCH_CARDS_REQUEST"}};var u=Object(i.b)((function(e){return{cardData:e.card}}),(function(e){return{fetchCards:function(){return e((function(e){e(d),m.a.get("http://62.68.253.183:8000/ngos/",{headers:{"Content-Type":"application/json"}}).then((function(a){console.log(a.data.data,"cardss");var t=a.data.data;e(function(e){return{type:"FETCH_CARDS_SUCCESS",payload:e}}(t))})).catch((function(a){var t=a.message;e(function(e){return{type:"FETCH_CARDS_FAILURE",payload:e}}(t))}))}))}}}))((function(e){var a=e.cardData,t=e.fetchCards;return Object(n.useEffect)((function(){t()}),[]),a.loading?r.a.createElement("h2",null,"Loading"):a.error?r.a.createElement("h2",null,a.error):r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"title",style:{color:"white"}},"\u0627\u0644\u062c\u0645\u0639\u064a\u0627\u062a \u0627\u0644\u062e\u064a\u0631\u064a\u0629"),r.a.createElement("div",{className:"row"},a&&a.cards&&a.cards.map((function(e){return r.a.createElement("div",{className:" content col-md-4",key:e.pkID},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:e.Logo,className:" img card-img-top",alt:"...",style:{height:"35vh"}}),r.a.createElement("div",{className:"card-title"},r.a.createElement("h5",null,e.Name)),r.a.createElement("div",{className:"card-content"},r.a.createElement("button",{className:"card-btn"},r.a.createElement(l.b,{to:""},"\u062a\u0628\u0631\u0639 \u0627\u0644\u0627\u0646"))))))}))))})),E=t(30),g=t.n(E),p=t(31),f=t.n(p),h=t(32),v=t.n(h),b=t(33),y=t.n(b),C=t(34),S=t.n(C);var w=function(){return r.a.createElement("div",{className:""},r.a.createElement("nav",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:g.a,alt:"user"})),r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:f.a,alt:"logo"}))),r.a.createElement(u,null),r.a.createElement("footer",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:v.a,alt:"PoweredBy"})),r.a.createElement("div",null,r.a.createElement("img",{src:y.a,alt:"facebook",style:{marginRight:"10px"}}),r.a.createElement("img",{src:S.a,alt:"instagram"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=t(5),N=t(35),_=t(36),k=t(16),D={loading:!1,cards:[],error:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_CARDS_REQUEST":return Object(k.a)(Object(k.a)({},e),{},{loading:!0});case"FETCH_CARDS_SUCCESS":return{loading:!1,cards:a.payload,error:""};case"FETCH_CARDS_FAILURE":return{loading:!1,cards:[],error:a.payload};default:return e}},j=Object(R.combineReducers)({card:T}),A=Object(R.createStore)(j,Object(N.composeWithDevTools)(Object(R.applyMiddleware)(_.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{store:A},r.a.createElement(w,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.9d1ed2be.chunk.js.map