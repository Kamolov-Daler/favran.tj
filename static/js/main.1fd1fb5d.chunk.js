(this.webpackJsonpfavran=this.webpackJsonpfavran||[]).push([[0],{100:function(e,t,a){},128:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(42),i=a.n(r),o=(a(128),a(21)),s=a(19),l=a(18),d=a(3),p=a(218),j=a(211),u=a(212),b=a(219),m=a(215),h=a(205),x=a(222),f=a(216),g=a(206),O=a(6),v=a(59),y=a(220),w=a(108),C=a.n(w),N=a.p+"static/media/logo.6d8c8c01.svg",A=a(17),T=a(225),k=a(194),S=a(195),I=a(1),_=Object(g.a)((function(e){return{list:{width:250},fullList:{width:"auto"},burgerMenu:{position:"absolute",top:20,left:20},headerContainer:{backgroundColor:"#F4F4F4",borderBottom:"1px solid #707070",borderTop:"none",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column !important"},search:Object(d.a)({width:"90%",display:"flex",justifyContent:"center"},e.breakpoints.up("md"),{width:"40%"}),logo:{paddingTop:5,cursor:"pointer"},navItem:{"& a":{textDecoration:"none",color:"#000"}},buttonGroup:Object(d.a)({display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",width:"80%","& div":Object(d.a)({minWidth:"100%",marginTop:10},e.breakpoints.up("md"),{maxWidth:"90%"}),"& button":Object(d.a)({padding:"5px 0px",marginLeft:"0px",marginTop:"10px",width:"100%"},e.breakpoints.up("md"),{padding:"15px 0",flexDirection:"row",marginTop:"30px",marginLeft:"10px"})},e.breakpoints.up("md"),{flexDirection:"row"}),searchIcon:{position:"absolute",top:20,right:20}}})),E=function(){var e,t=_(),a=Object(A.d)((function(e){return e.mainReducer}),A.b).categories,n=Object(c.useState)(!1),r=Object(l.a)(n,2),i=r[0],g=r[1],w=Object(c.useState)(""),E=Object(l.a)(w,2),P=E[0],R=E[1],D=Object(c.useState)(""),F=Object(l.a)(D,2),V=F[0],z=F[1],G=Object(c.useState)(""),W=Object(l.a)(G,2),B=W[0],L=W[1],X=Object(c.useState)(""),U=Object(l.a)(X,2),Y=U[0],q=U[1],H=Object(c.useState)({top:!1,left:!1,bottom:!1,right:!1}),Q=Object(l.a)(H,2),K=Q[0],M=Q[1],Z=Object(o.f)(),J=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&M(Object(s.a)(Object(s.a)({},K),{},Object(d.a)({},e,t)))}},$=function(){i&&g(!1)};return Object(c.useEffect)((function(){"/search"!==Z.location.pathname&&(R(""),z(""),L(""),q(""))}),[Z.location.pathname]),Object(I.jsxs)(m.a,{container:!0,className:t.headerContainer,children:[Object(I.jsx)("div",{className:t.burgerMenu,children:Object(I.jsx)(y.a,{disabled:!(a.length>1),onClick:J("left",!0),children:Object(I.jsx)(C.a,{color:"primary"})})}),Object(I.jsx)("div",{className:t.logo,onClick:function(){Z.push("/"),R(""),$(),z(""),L(""),q("")},children:Object(I.jsx)("img",{src:N,alt:"logo",width:80,height:80})}),Object(I.jsx)("div",{className:t.searchIcon,children:i?Object(I.jsx)(y.a,{onClick:function(){return g(!1)},children:Object(I.jsx)(k.a,{color:"primary"})}):Object(I.jsx)(y.a,{onClick:function(){return g(!0)},children:Object(I.jsx)(S.a,{color:"primary"})})}),i?Object(I.jsx)("div",{className:t.search,children:Object(I.jsxs)(T.a,{mb:3,className:t.buttonGroup,children:[Object(I.jsxs)(m.a,{children:[Object(I.jsx)(h.a,{fullWidth:!0,id:"standard-basic",value:P,onChange:function(e){return R(e.target.value)},label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",variant:"filled"}),Object(I.jsx)(h.a,{fullWidth:!0,id:"standard-basic",value:V,onChange:function(e){return z(e.target.value)},type:"number",label:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441\u043a\u0438\u0434\u043a\u0438",variant:"filled"}),Object(I.jsx)(h.a,{id:"standard-basic",type:"number",value:B,onChange:function(e){return L(e.target.value)},label:"\u0426\u0435\u043d\u0430 \u043e\u0442",variant:"filled"}),Object(I.jsx)(h.a,{id:"standard-basic",type:"number",value:Y,onChange:function(e){return q(e.target.value)},label:"\u0426\u0435\u043d\u0430 \u0434\u043e",variant:"filled"})]}),Object(I.jsx)(x.a,{variant:"contained",disabled:!(P.trim()||V>0||B>0||Y>0),onClick:function(){var e="?";P.trim()&&(e+="query="+P),V>0&&(e+="&discount_amount="+V),B>0&&(e+="&min_price="+B),Y>0&&(e+="&max_price="+Y),Z.push("/search".concat(e))},children:Object(I.jsx)(S.a,{})})]})}):null,Object(I.jsx)(f.a,{anchor:"left",open:K.left,onClose:J("left",!1),children:(e="left",Object(I.jsx)("div",{className:Object(O.a)(t.list,Object(d.a)({},t.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:J(e,!1),onKeyDown:J(e,!1),children:Object(I.jsxs)(p.a,{children:[Object(I.jsxs)("div",{className:t.navItem,onClick:$,children:[Object(I.jsx)(v.b,{to:"/",exact:!0,children:Object(I.jsx)(j.a,{button:!0,children:Object(I.jsx)(u.a,{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})}),Object(I.jsx)(b.a,{})]}),a.map((function(e,a){return Object(I.jsxs)("div",{className:t.navItem,onClick:$,children:[Object(I.jsx)(v.b,{to:"/".concat(e.name,"/").concat(e.id),exact:!0,children:Object(I.jsx)(j.a,{button:!0,children:Object(I.jsx)(u.a,{children:e.name})})}),Object(I.jsx)(b.a,{})]},a)}))]})}))})]})},P=a(110),R=a(217),D=a(223),F=(a.p,a.p+"static/media/instagramm.0c11158a.svg"),V=a.p+"static/media/telegramm.fd22abfc.svg",z=a(37),G=a.n(z),W=a(55),B="https://favran.herokuapp.com/",L="SET_BANNERS",X="SET_CATEGORIES",U="SET_TOP_CATEGORIES_WITH_GOODS",Y="SET_LOADER",q="SET_SOCIALS_LIST",H=Object(g.a)((function(e){return{footerContainer:{backgroundColor:"#F4F4F4",border:"1px solid #707070",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"auto"},footerContent:{padding:"10px 0",display:"flex",justifyContent:"center",alignItems:"center"},socialGroup:{display:"flex"},socialItem:{marginRight:"10px",cursor:"pointer"},gridItem:Object(d.a)({display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"10px"},e.breakpoints.up("md"),{paddingBottom:"0px"}),copyright:{color:"#707070",fontWeight:"600"},phoneHref:{TextDecoration:"none",color:"#000"}}})),Q=function(){var e=H(),t=Object(A.c)(),a=Object(A.d)((function(e){return e.mainReducer}),A.b).socials;return Object(c.useEffect)((function(){t(function(){var e=Object(W.a)(G.a.mark((function e(t){var a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Y,payload:!0}),e.next=4,fetch("".concat(B,"socials"));case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,t({type:q,payload:c}),t({type:Y,payload:!1}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),t({type:Y,payload:!1});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(I.jsx)("div",{className:e.footerContainer,children:Object(I.jsx)(D.a,{children:Object(I.jsxs)(m.a,{container:!0,className:e.footerContent,children:[Object(I.jsx)(m.a,{item:!0,xs:12,md:4,className:e.gridItem,children:Object(I.jsxs)("div",{children:["\u041d\u0430\u0448\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:",Object(I.jsxs)("a",{href:"tel:".concat(null===a||void 0===a?void 0:a.number),className:e.phoneHref,children:[" ",null===a||void 0===a?void 0:a.number]})]})}),Object(I.jsx)(m.a,{item:!0,xs:12,md:4,className:e.gridItem,children:Object(I.jsx)("div",{className:e.copyright,children:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b @2021"})}),Object(I.jsx)(m.a,{item:!0,xs:12,md:4,className:e.gridItem,children:Object(I.jsxs)("div",{className:e.socialGroup,children:[Object(I.jsx)("div",{className:e.socialItem,style:{marginTop:3},children:Object(I.jsx)("a",{href:"".concat(null===a||void 0===a?void 0:a.instagram),children:Object(I.jsx)("img",{src:F,width:30})})}),Object(I.jsx)("div",{className:e.socialItem,children:Object(I.jsx)("a",{href:"".concat(null===a||void 0===a?void 0:a.whatsapp),children:Object(I.jsx)("img",{src:"data:image/png;base64,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",width:34})})}),Object(I.jsx)("div",{className:e.socialItem,style:{marginTop:3},children:Object(I.jsx)("a",{href:"".concat(null===a||void 0===a?void 0:a.telegram),children:Object(I.jsx)("img",{src:V,width:30})})})]})})]})})})},K=(a(100),a(204)),M=a(198),Z=a(199),J=a(200),$=a(201),ee=a(202),te=a(203),ae=a(207),ce=(a(86),a(87),a(88),a.p+"static/media/eye.db0018b1.svg"),ne=a.p+"static/media/king.8eca71b4.svg",re=a(39),ie=a.n(re),oe="SET_SELECT_ITEM",se="SET_CARDS_LIST",le=function(e){return function(){var t=Object(W.a)(G.a.mark((function t(a){var c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(B,"view/").concat(e),{method:"POST",body:{}});case 3:return c=t.sent,t.next=6,c.json();case 6:t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()};K.a.use([M.a,Z.a,J.a,$.a,ee.a]);var de=Object(g.a)((function(e){return{cardContainer:{height:320,width:220,borderRadius:8,position:"relative",overflow:"hidden",background:"#f5f5f5",padding:"10px"},cardContainerBack:{height:320,width:220,borderRadius:8,position:"relative",overflow:"hidden",background:"#f5f5f5",padding:"10px 15px"},cardImg:{display:"flex",justifyContent:"center",alignItems:"center","& img":{width:"100%",height:"170px",border:"1px solid rgba(81, 81, 81, 0.56)",borderRadius:8}},cardTitle:{textAlign:"center",color:"#515151",marginTop:"5px"},cardPrice:{textAlign:"center",color:"#515151",marginTop:"10px",fontWeight:600},cardDiscount:{position:"absolute",top:"0",left:"0",width:"0",height:"0",borderTop:"80px solid red",borderRight:"80px solid transparent",zIndex:1},cardDiscountPercent:{position:"absolute",top:"10px",left:"10px",color:"#fff",zIndex:2},cardViewed:{color:"#515151",fontSize:"12px",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",bottom:"10px",right:"10px"},cardTop:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",right:"0px",top:"0px",zIndex:3,"& img":{width:60,height:60}},cardTopText:{border:"1px solid #F3EA64",color:"#F3EA64",textAlign:"center",marginTop:"15px",padding:10,borderRadius:"6px"},cardInfo:{textAlign:"center",color:"#707070",fontWeight:700,marginTop:15,marginBottom:15},cardGoods:{color:"#707070",fontWeight:600,marginBottom:5}}})),pe=function(e){var t=e.bool,a=e.item,c=de(),n=Object(A.c)(),r=Object(A.d)((function(e){return e.categoriesReducer}),A.b).itemSelect;return Object(I.jsxs)("div",{className:ie.a.card,onClick:function(e){return function(e){e.preventDefault(),n(r===a.id?{type:oe,payload:0}:{type:oe,payload:a.id}),n(le(a.id))}(e)},children:[Object(I.jsx)("div",{className:t?ie.a.frontActive:ie.a.front,children:Object(I.jsxs)("div",{className:c.cardContainer,children:[Object(I.jsx)("div",{children:Object(I.jsx)("div",{className:c.cardImg,children:a.images?Object(I.jsx)("img",{src:"".concat(a.images[0].replaceAll("PNG","png")),alt:"insta"}):Object(I.jsx)("img",{src:N,alt:"insta"})})}),Object(I.jsx)("div",{className:c.cardTitle,children:a.name.length>30?a.name.slice(1,27)+"...":a.name}),Object(I.jsxs)("div",{className:c.cardPrice,children:[Object(I.jsx)("span",{style:{textDecoration:"line-through"},children:a.old_price})," / ",a.new_price]}),Object(I.jsx)("div",{className:c.cardDiscount}),Object(I.jsxs)("div",{className:c.cardDiscountPercent,children:[a.discount_amount,"%"]}),Object(I.jsxs)("div",{className:c.cardViewed,children:[Object(I.jsx)("img",{src:ce,alt:"eye"}),a.Views]}),a.is_top?Object(I.jsx)("div",{className:c.cardTop,children:Object(I.jsx)("img",{src:ne,alt:"eye"})}):null]})}),Object(I.jsx)("div",{className:t?ie.a.backActive:ie.a.back,children:Object(I.jsxs)("div",{className:c.cardContainerBack,children:[a.is_top?Object(I.jsx)("div",{className:c.cardTopText,children:"\u0442\u043e\u0432\u0430\u0440 \u0432 \u0442\u043e\u043f\u0435"}):null,Object(I.jsx)("div",{className:c.cardInfo,children:"\u0421\u0432\u0435\u0434\u0435\u043d\u044c\u0435:"}),Object(I.jsxs)("div",{className:c.cardGoods,children:["\u0422\u043e\u0432\u0430\u0440: ",a.name]}),Object(I.jsxs)("div",{className:c.cardGoods,children:["\u041c\u0430\u0433\u0430\u0437\u0438\u043d: ",a.shop_name]}),Object(I.jsxs)("div",{className:c.cardGoods,children:["\u0410\u0434\u0440\u0435\u0441 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430: ",a.shop_address]}),Object(I.jsxs)("div",{className:c.cardGoods,children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430:"," ",Object(I.jsx)("a",{href:"tel:".concat(a.shop_phone),onClick:function(e){return e.stopPropagation()},children:a.shop_phone})]})]})})]})};K.a.use([M.a,Z.a,J.a,$.a,ee.a]);var je=Object(g.a)((function(e){return{title:{fontSize:"20px",fontWeight:"600",color:"#707070",textAlign:"center",marginTop:"40px"},slideItem:{width:"100%",boxSizing:"border-box",borderRadius:"10px",overflow:"hidden","& img":{width:"100%",height:"100%"}},categoryBlock:{marginTop:30},categoryBlockTitle:{fontWeight:"600",fontSize:"20px",color:"#707070"},categoryElemList:{display:"flex",flexDirection:"row"},categoryElem:{userSelect:"none",marginRight:"20px",display:"flex",justifyContent:"center",aligntItems:"center",padding:"30px 0"},parentContainer:{paddingBottom:40}}})),ue=function(){var e=je(),t=Object(A.d)((function(e){return e.mainReducer}),A.b),a=t.banners,n=t.topCategories,r=Object(A.d)((function(e){return e.categoriesReducer}),A.b),i=r.itemSelect,o=(r.cardsList,Object(A.c)()),l={autoplay:{delay:5e3},slidesPerView:1,spaceBetween:30,scrollbar:{hide:!0},breakpoints:{993:{slidesPerView:5},750:{slidesPerView:4},500:{slidesPerView:2}}},d=a.map((function(t,a){return Object(I.jsx)(te.a,{children:Object(I.jsx)("div",{className:e.slideItem,children:Object(I.jsx)("img",{src:"".concat(t.image_name.replaceAll("PNG","png")),alt:t.image_name})})},a)}));return Object(c.useEffect)((function(){return function(){o({type:oe,payload:0})}}),[]),Object(I.jsxs)(D.a,{className:e.parentContainer,children:[Object(I.jsx)("h1",{className:e.title,children:"\u0422\u041e\u041f - \u0441\u043a\u0438\u0434\u043e\u043a \u0441\u043e \u0432\u0441\u0435\u0433\u043e \u0422\u0430\u0434\u0436\u0438\u043a\u0438\u0441\u0442\u0430\u043d\u0430"}),Object(I.jsx)(ae.a,Object(s.a)(Object(s.a)({},{autoplay:{delay:5e3},slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},breakpoints:{993:{slidesPerView:2},769:{slidesPerView:1}}}),{},{children:d})),n.map((function(t){if(t.goods.length)return Object(I.jsxs)("div",{className:e.categoryBlock,children:[Object(I.jsx)("h1",{className:e.categoryBlockTitle,children:t.category.name}),Object(I.jsx)("div",{className:"".concat(e.categoryElemList," card-scroll"),children:t.goods.length<5?Object(I.jsx)(ae.a,Object(s.a)(Object(s.a)({},(a=t.goods.length,{autoplay:{delay:5e3},spaceBetween:30,slidesPerView:1,scrollbar:{hide:!0},breakpoints:{993:{slidesPerView:a},750:{slidesPerView:a>1?a-1:a},500:{slidesPerView:a>2?a-2:a}}})),{},{centeredSlides:!1,className:"mySwiper",children:t.goods.map((function(t,a){return Object(I.jsx)(te.a,{className:e.categoryElem,children:Object(I.jsx)(pe,{bool:t.id===i,item:t})},a)}))})):Object(I.jsx)(ae.a,Object(s.a)(Object(s.a)({},l),{},{className:"mySwiper",children:t.goods.map((function(t,a){return Object(I.jsx)(te.a,{className:e.categoryElem,children:Object(I.jsx)(pe,{bool:t.id===i,item:t})},a)}))}))})]},t.category.id);var a}))]})},be=a(210);K.a.use([M.a,Z.a,J.a,$.a,ee.a]);var me=Object(g.a)((function(e){return{cardContainer:{height:320,width:220,borderRadius:8,position:"relative",overflow:"hidden",background:"#f5f5f5",padding:"10px"},cardContainerBack:{height:320,width:220,borderRadius:8,position:"relative",overflow:"hidden",background:"#f5f5f5",padding:"10px 15px"},cardImg:{display:"flex",justifyContent:"center",alignItems:"center","& img":{width:"100%",height:"170px",border:"1px solid rgba(81, 81, 81, 0.56)",borderRadius:8}},cardTitle:{textAlign:"center",color:"#515151",marginTop:"5px"},cardPrice:{textAlign:"center",color:"#515151",marginTop:"10px",fontWeight:600},cardDiscount:{position:"absolute",top:"0",left:"0",width:"0",height:"0",borderTop:"80px solid red",borderRight:"80px solid transparent",zIndex:1},cardDiscountPercent:{position:"absolute",top:"10px",left:"10px",color:"#fff",zIndex:2},cardViewed:{color:"#515151",fontSize:"12px",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",bottom:"10px",right:"10px"},cardTop:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",right:"0px",top:"0px",zIndex:3,"& img":{width:60,height:60}},cardTopText:{border:"1px solid #F3EA64",color:"#F3EA64",textAlign:"center",marginTop:"15px",padding:10,borderRadius:"6px"},cardInfo:{textAlign:"center",color:"#707070",fontWeight:700,marginTop:15,marginBottom:15},cardGoods:{color:"#707070",fontWeight:600,marginBottom:5}}})),he=function(e){var t,a=e.bool,c=e.item,n=me(),r=Object(A.c)(),i=Object(A.d)((function(e){return e.categoriesReducer}),A.b).itemSelect,o={slidesPerView:1,spaceBetween:30,pagination:{clickable:!0}};return Object(I.jsxs)("div",{className:ie.a.card,onClick:function(e){return function(e){e.preventDefault(),r(i===c.id?{type:oe,payload:0}:{type:oe,payload:c.id}),r(le(c.id))}(e)},children:[Object(I.jsx)("div",{className:a?ie.a.frontActive:ie.a.front,children:Object(I.jsxs)("div",{className:n.cardContainer,children:[Object(I.jsx)("div",{children:(null===(t=c.images)||void 0===t?void 0:t.length)?Object(I.jsx)(ae.a,Object(s.a)(Object(s.a)({},o),{},{children:c.images.map((function(e,t){return Object(I.jsx)(te.a,{className:n.cardImg,children:Object(I.jsx)("img",{src:"".concat(e.replaceAll("PNG","png")),alt:"insta"})},t)}))})):Object(I.jsx)(ae.a,Object(s.a)(Object(s.a)({},o),{},{children:Object(I.jsx)(te.a,{className:n.cardImg,children:Object(I.jsx)("img",{src:N,alt:"insta"})})}))}),Object(I.jsx)("div",{className:n.cardTitle,children:c.name.length>30?c.name.slice(1,27)+"...":c.name}),Object(I.jsxs)("div",{className:n.cardPrice,children:[Object(I.jsx)("span",{style:{textDecoration:"line-through"},children:c.old_price})," / ",c.new_price]}),Object(I.jsx)("div",{className:n.cardDiscount}),Object(I.jsxs)("div",{className:n.cardDiscountPercent,children:[c.discount_amount,"%"]}),Object(I.jsxs)("div",{className:n.cardViewed,children:[Object(I.jsx)("img",{src:ce,alt:"eye"}),c.Views]}),c.is_top?Object(I.jsx)("div",{className:n.cardTop,children:Object(I.jsx)("img",{src:ne,alt:"eye"})}):null]})}),Object(I.jsx)("div",{className:a?ie.a.backActive:ie.a.back,children:Object(I.jsxs)("div",{className:n.cardContainerBack,children:[c.is_top?Object(I.jsx)("div",{className:n.cardTopText,children:"\u0442\u043e\u0432\u0430\u0440 \u0432 \u0442\u043e\u043f\u0435"}):null,Object(I.jsx)("div",{className:n.cardInfo,children:"\u0421\u0432\u0435\u0434\u0435\u043d\u044c\u0435:"}),Object(I.jsxs)("div",{className:n.cardGoods,children:["\u0422\u043e\u0432\u0430\u0440: ",c.name]}),Object(I.jsxs)("div",{className:n.cardGoods,children:["\u041c\u0430\u0433\u0430\u0437\u0438\u043d: ",c.shop_name]}),Object(I.jsxs)("div",{className:n.cardGoods,children:["\u0410\u0434\u0440\u0435\u0441 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430: ",c.shop_address]}),Object(I.jsxs)("div",{className:n.cardGoods,children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430: ",Object(I.jsx)("a",{href:"tel:".concat(c.shop_phone),onClick:function(e){return e.stopPropagation()},children:c.shop_phone})]})]})})]})},xe=Object(g.a)((function(e){return{categoryTitle:{color:"#707070",fontSize:"20px",fontWeight:600,textAlign:"center",padding:"20px"},cardElem:Object(d.a)({paddingBottom:"50px",display:"flex",justifyContent:"center"},e.breakpoints.up("md"),{justifyContent:"flex-start"}),parentContainer:{paddingBottom:50}}})),fe=function(){var e=xe(),t=Object(o.h)(),a=t.name,n=t.id,r=Object(A.d)((function(e){return e.categoriesReducer}),A.b),i=r.itemSelect,s=r.cardsList,l=Object(A.d)((function(e){return e.mainReducer}),A.b).loader,d=Object(A.c)();return Object(c.useEffect)((function(){return d(function(e){return function(){var t=Object(W.a)(G.a.mark((function t(a){var c,n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:Y,payload:!0}),t.next=4,fetch("".concat(B,"goods/").concat(e,"?page=1&limit=1000"));case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:se,payload:n.goods}),a({type:Y,payload:!1}),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),a({type:Y,payload:!1}),a({type:se,payload:[]});case 17:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}(n)),function(){d({type:se,payload:[]}),d({type:oe,payload:0})}}),[a,n]),Object(I.jsxs)(D.a,{className:e.parentContainer,children:[Object(I.jsx)("h1",{className:e.categoryTitle,children:a}),s.length?Object(I.jsx)(m.a,{container:!0,children:null===s||void 0===s?void 0:s.map((function(t,a){return Object(I.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:e.cardElem,children:Object(I.jsx)(he,{item:t,bool:t.id===i})},a)}))}):Object(I.jsx)(I.Fragment,{children:l?null:Object(I.jsx)(be.a,{severity:"info",children:"\u041d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"})})]})},ge=a(213),Oe=a(224),ve="SEARCH_GOODS_LIST",ye=Object(g.a)((function(e){return{categoryTitle:{color:"#707070",fontSize:"20px",fontWeight:600,padding:"20px"},cardElem:Object(d.a)({paddingBottom:"50px",display:"flex",justifyContent:"center"},e.breakpoints.up("md"),{justifyContent:"flex-start"}),parentContainer:{paddingTop:50,paddingBottom:50}}}));var we=function(){var e=ye(),t=new URLSearchParams(Object(o.g)().search),a=t.get("query")?t.get("query"):"",n=t.get("discount_amount")?t.get("discount_amount"):0,r=t.get("min_price")?t.get("min_price"):0,i=t.get("max_price")?t.get("max_price"):0,s=Object(A.d)((function(e){return e.categoriesReducer}),A.b).itemSelect,l=Object(A.d)((function(e){return e.searchReducer}),A.b).searchProducts,d=Object(A.d)((function(e){return e.mainReducer}),A.b).loader,p=Object(A.c)();return Object(c.useEffect)((function(){return p(function(e,t,a,c){return console.log(t),console.log(a),console.log(c),function(){var n=Object(W.a)(G.a.mark((function n(r){var i,o;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:Y,payload:!0}),n.next=4,fetch("".concat(B,"search?query=").concat(encodeURI(e),"&discount_amount=").concat(t.toString(),"&price_from=").concat(a.toString(),"&price_to=").concat(c.toString(),"&page=1&limit=1000"));case 4:return i=n.sent,n.next=7,i.json();case 7:o=n.sent,r({type:ve,payload:o.goods}),r({type:Y,payload:!1}),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0),r({type:ve,payload:[]}),r({type:Y,payload:!1});case 17:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}(a,n,r,i)),function(){p({type:ve,payload:[]}),p({type:oe,payload:0})}}),[a,n,r,i]),console.log(l),Object(I.jsx)(D.a,{className:e.parentContainer,children:(null===l||void 0===l?void 0:l.length)?Object(I.jsx)(m.a,{container:!0,children:null===l||void 0===l?void 0:l.map((function(t,a){return Object(I.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:e.cardElem,children:Object(I.jsx)(he,{item:t,bool:t.id===s})},a)}))}):Object(I.jsx)(I.Fragment,{children:d?null:Object(I.jsx)(be.a,{severity:"info",children:"\u041d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"})})})},Ce=Object(g.a)((function(e){return{container:{minHeight:"100vh",position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between"}}}));var Ne=function(){var e=Ce(),t=Object(A.d)((function(e){return e.mainReducer}),A.b),a=t.loader,n=(t.categories,Object(A.c)()),r=Object(P.a)({palette:{primary:{main:"#515151",contrastText:"#fff"},secondary:{main:"#F4F4F4",contrastText:"#fff"},error:{main:"rgb(235,76,66)"}}});return Object(c.useEffect)((function(){return n(function(){var e=Object(W.a)(G.a.mark((function e(t){var a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Y,payload:!0}),e.next=4,fetch(B);case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,t({type:L,payload:c.banners}),t({type:X,payload:c.categories}),t({type:U,payload:c.topCategories}),t({type:Y,payload:!1}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),t({type:Y,payload:!1});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()),function(){n({type:L,payload:[]}),n({type:U,payload:[]})}}),[]),Object(I.jsx)(R.a,{theme:r,children:Object(I.jsxs)("div",{className:e.container,children:[Object(I.jsx)(E,{}),Object(I.jsxs)(o.c,{children:[Object(I.jsx)(o.a,{path:"/",exact:!0,children:Object(I.jsx)(ue,{})}),Object(I.jsx)(o.a,{path:"/:name/:id",exact:!0,children:Object(I.jsx)(fe,{})}),Object(I.jsx)(o.a,{path:"/search",exact:!0,children:Object(I.jsx)(we,{})}),Object(I.jsx)(o.a,{path:"*",children:Object(I.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:50},children:Object(I.jsx)(be.a,{severity:"warning",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})})]}),Object(I.jsx)(Q,{}),Object(I.jsx)(ge.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:a,children:Object(I.jsx)(Oe.a,{color:"inherit"})})]})})},Ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,227)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))},Te=a(71),ke=a(109),Se={itemSelect:0,cardsList:[]},Ie={categories:[],banners:[],topCategories:[],loader:!1,socials:null},_e={searchProducts:[]},Ee=Object(Te.b)({categoriesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(s.a)(Object(s.a)({},e),{},{cardsList:t.payload});case oe:return Object(s.a)(Object(s.a)({},e),{},{itemSelect:t.payload});default:return e}},mainReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(s.a)(Object(s.a)({},e),{},{banners:t.payload});case X:return Object(s.a)(Object(s.a)({},e),{},{categories:t.payload});case U:return Object(s.a)(Object(s.a)({},e),{},{topCategories:t.payload});case Y:return Object(s.a)(Object(s.a)({},e),{},{loader:t.payload});case q:return Object(s.a)(Object(s.a)({},e),{},{socials:t.payload});default:return e}},searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;return t.type===ve?Object(s.a)(Object(s.a)({},e),{},{searchProducts:t.payload}):e}}),Pe=Object(Te.c)(Ee,Object(Te.a)(ke.a));a(145);i.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(v.a,{children:Object(I.jsx)(A.a,{store:Pe,children:Object(I.jsx)(Ne,{})})})}),document.getElementById("root")),Ae()},39:function(e,t,a){e.exports={card:"Card_card__38GdT",front:"Card_front__mYRwO",back:"Card_back__1r7qS",frontActive:"Card_frontActive__2hzCY",backActive:"Card_backActive__2CwKp","swiper-wrapper":"Card_swiper-wrapper__2ud0i","swiper-container-horizontal":"Card_swiper-container-horizontal__28N3D","swiper-pagination-bullets":"Card_swiper-pagination-bullets__2zevN","swiper-pagination-custom":"Card_swiper-pagination-custom__1fcfb","swiper-pagination-fraction":"Card_swiper-pagination-fraction__1w9aM","swiper-pagination-bullet-active":"Card_swiper-pagination-bullet-active__ZVArw"}}},[[146,1,2]]]);
//# sourceMappingURL=main.1fd1fb5d.chunk.js.map