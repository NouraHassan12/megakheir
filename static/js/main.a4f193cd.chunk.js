(this.webpackJsonpmegakheir=this.webpackJsonpmegakheir||[]).push([[0],{22:function(e,a,t){},33:function(e,a,t){e.exports=t.p+"static/media/Vector.b1ddbca6.svg"},34:function(e,a,t){e.exports=t.p+"static/media/MEGAKHEIR-Logo 1.0ed5f72a.svg"},35:function(e,a,t){e.exports=t.p+"static/media/Powered-by.9c26d8b5.svg"},36:function(e,a,t){e.exports=t.p+"static/media/Facebook.967c61a5.svg"},37:function(e,a,t){e.exports=t.p+"static/media/instagram.12cfaa8c.svg"},40:function(e,a,t){e.exports=t(68)},45:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),o=t.n(c),l=(t(45),t(22),t(8)),i=t(2),s=t(11),d=t(16),m=t.n(d),u=function(){return{type:"FETCH_CARDS_REQUEST"}};var E=Object(s.b)((function(e){return{cardssData:e.card}}),(function(e){return{fetchCards:function(){return e((function(e){e(u),m.a.get("https://megakheir.herokuapp.com/ngos").then((function(a){console.log(a.data.data,"cardss");var t=a.data.data;e(function(e){return{type:"FETCH_CARDS_SUCCESS",payload:e}}(t))})).catch((function(a){var t=a.message;e(function(e){return{type:"FETCH_CARDS_FAILURE",payload:e}}(t))}))}))}}}))((function(e){var a=e.cardssData,t=e.fetchCards;return Object(n.useEffect)((function(){t()}),[]),a.loading?r.a.createElement("h2",null,"Loading"):a.error?r.a.createElement("h2",null,a.error):r.a.createElement("div",{className:"cardContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"title",style:{color:"white"}},"\u0627\u0644\u062c\u0645\u0639\u064a\u0627\u062a \u0627\u0644\u062e\u064a\u0631\u064a\u0629"),r.a.createElement("div",{className:"row"},a&&a.cards&&a.cards.map((function(e){return r.a.createElement("div",{className:" content col-md-4",key:e.pkID},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:e.Logo,className:" img card-img-top",alt:"...",style:{height:"35vh"}}),r.a.createElement("div",{className:"card-title"},r.a.createElement("h5",null,e.Name)),r.a.createElement("div",{className:"card-content"},r.a.createElement("button",{className:"card-btn"},r.a.createElement(l.b,{to:"/card/".concat(e.pkID)},"...\u0627\u0644\u0645\u0632\u064a\u062f"))))))})))))})),g=function(){return{type:"FETCH_CARDS_DETAILS_REQUEST"}};var p=Object(s.b)((function(e){return{cardDetailss:e.Details}}),(function(e){return{fetchCard:function(a){return e((t=a,function(e){e(g),m.a.get("http://62.68.253.183:8000/ngos/".concat(t)).then((function(a){console.log(a.data.data,"details");var t=a.data.data;e(function(e){return{type:"FETCH_CARD_DETAILS_SUCCESS",payload:e}}(t))})).catch((function(a){var t=a.message;e(function(e){return{type:"FETCH_CARD_DETAILS_FAILURE",payload:e}}(t))}))}));var t}}}))((function(e){var a=e.cardDetailss,t=e.fetchCard,c=e.match.params.pkID;return Object(n.useEffect)((function(){t(c)}),[]),a.loading?r.a.createElement("h2",null,"Loading"):a.error?r.a.createElement("h2",null,a.error):r.a.createElement("div",null,a&&a.cardData&&a.cardData.map((function(e){return r.a.createElement("div",{className:"card mb-2",key:e.Name,style:{textAlign:"center"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.Name),r.a.createElement("p",{className:"card-text"},e.Description_AR),r.a.createElement("img",{src:e.ImageUrl,alt:"img",style:{width:"50%",height:"50%"}}),r.a.createElement("div",{className:"card-content"},r.a.createElement("button",{className:"card-btn"},r.a.createElement(l.b,{to:"/"},"\u062a\u0628\u0631\u0639 \u0627\u0644\u0627\u0646")))))})))})),f=t(33),h=t.n(f),v=t(34),b=t.n(v),C=t(35),D=t.n(C),S=t(36),y=t.n(S),_=t(37),A=t.n(_);var R=function(){return r.a.createElement("div",{className:""},r.a.createElement("nav",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:h.a,alt:"user"})),r.a.createElement(l.b,{to:"/"},r.a.createElement("h3",{style:{color:"black"}},"Orgoanizations")),r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:b.a,alt:"logo"}))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:E}),r.a.createElement(i.a,{exact:!0,path:"/card/:pkID",component:p})),r.a.createElement("footer",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:D.a,alt:"PoweredBy"})),r.a.createElement("div",null,r.a.createElement("img",{src:y.a,alt:"facebook",style:{marginRight:"10px"}}),r.a.createElement("img",{src:A.a,alt:"instagram"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=t(9),N=t(38),k=t(39),F=t(12),I={loading:!1,cards:[],error:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_CARDS_REQUEST":return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case"FETCH_CARDS_SUCCESS":return{loading:!1,cards:a.payload,error:""};case"FETCH_CARDS_FAILURE":return{loading:!1,cards:[],error:a.payload};default:return e}},L={loading:!1,cardData:[],error:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_CARDS_DETAILS_REQUEST":return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case"FETCH_CARD_DETAILS_SUCCESS":return{loading:!1,cardData:a.payload,error:""};case"FETCH_CARD_DETAILS_FAILURE":return{loading:!1,cardData:[],error:a.payload};default:return e}},O=Object(T.combineReducers)({card:w,Details:H}),U=Object(T.createStore)(O,Object(N.composeWithDevTools)(Object(T.applyMiddleware)(k.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{store:U},r.a.createElement(R,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.a4f193cd.chunk.js.map