(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],{51:function(t,e,c){},77:function(t,e,c){"use strict";c.r(e);var i=c(0),n=c.n(i),s=c(22),a=c.n(s),r=c(10),o=c(6),l=c(15),d=c(41),j=c(2),b={category:null,sortBy:{type:"popular",order:"desc"}},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;return"SET_SORT_BY"===e.type?Object(j.a)(Object(j.a)({},t),{},{sortBy:e.payload}):"SET_CATEGORY"===e.type?Object(j.a)(Object(j.a)({},t),{},{category:e.payload}):t},h={items:[],isLoaded:!1},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_PIZZAS":return Object(j.a)(Object(j.a)({},t),{},{items:e.payload,isLoaded:!0});case"SET_LOADED":return Object(j.a)(Object(j.a)({},t),{},{isLoaded:e.payload});default:return t}},p=c(14),m=c(30),x=c(40),C={items:{},totalPrice:0,totalCount:0},v=function(t){return t.reduce((function(t,e){return e.price+t}),0)},f=function(t,e){return Object.values(t).reduce((function(t,c){var i=function(t,e){var c=e.split("."),i=Object(x.a)(c),n=i[0];return i.slice(1).reduce((function(t,e){return t[e]}),t[n])}(c,e);return t+i}),0)},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_PIZZA_CART":var c=t.items[e.payload.id]?[].concat(Object(m.a)(t.items[e.payload.id].items),[e.payload]):[e.payload],i=Object(j.a)(Object(j.a)({},t.items),{},Object(p.a)({},e.payload.id,{items:c,totalPrice:v(c)})),n=f(i,"items.length"),s=f(i,"totalPrice");return Object(j.a)(Object(j.a)({},t),{},{items:i,totalCount:n,totalPrice:s});case"REMOVE_CART_ITEM":var a=Object(j.a)({},t.items),r=a[e.payload].totalPrice,o=a[e.payload].items.length;return delete a[e.payload],Object(j.a)(Object(j.a)({},t),{},{items:a,totalPrice:t.totalPrice-r,totalCount:t.totalCount-o});case"CLEAR_CART":return{items:{},totalPrice:0,totalCount:0};case"PLUS_CART_ITEM":var l=[].concat(Object(m.a)(t.items[e.payload].items),[t.items[e.payload].items[0]]),d=Object(j.a)(Object(j.a)({},t.items),{},Object(p.a)({},e.payload,{items:l,totalPrice:v(l)})),b=f(d,"items.length"),u=f(d,"totalPrice");return Object(j.a)(Object(j.a)({},t),{},{items:d,totalCount:b,totalPrice:u});case"MINUS_CART_ITEM":var h=t.items[e.payload].items,O=h.length>1?t.items[e.payload].items.slice(1):h,x=Object(j.a)(Object(j.a)({},t.items),{},Object(p.a)({},e.payload,{items:O,totalPrice:v(O)})),_=f(x,"items.length"),y=f(x,"totalPrice");return Object(j.a)(Object(j.a)({},t),{},{items:x,totalPrice:y,totalCount:_});default:return t}},y=Object(l.b)({filters:u,pizzas:O,cart:_}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,k=Object(l.d)(y,g(Object(l.a)(d.a))),w=(c(51),c(3)),L=c(18),N=c.n(L),z=c(1),E=function(t){var e=t.onClick,c=t.className,i=t.outline,n=t.children;return Object(z.jsx)("button",{onClick:e,className:N()("button",c,{"button--outline":i}),children:n})},P=c.p+"static/media/pizza-logo.56ac8703.svg";var B=function(){var t=Object(o.c)((function(t){return t.cart})),e=t.totalPrice,c=t.totalCount;return Object(z.jsx)("div",{className:"header",children:Object(z.jsxs)("div",{className:"container",children:[Object(z.jsx)("div",{children:Object(z.jsx)(r.b,{to:"/",children:Object(z.jsxs)("div",{className:"header__logo",children:[Object(z.jsx)("img",{width:"38",src:P,alt:"Pizza logo"}),Object(z.jsxs)("div",{children:[Object(z.jsx)("h1",{children:"React Pizza"}),Object(z.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})})}),Object(z.jsx)("div",{className:"header__cart",children:Object(z.jsx)(r.b,{to:"/cart",children:Object(z.jsxs)(E,{className:"button--cart",children:[Object(z.jsxs)("span",{children:[e," \u20bd"]}),Object(z.jsx)("div",{className:"button__delimiter"}),Object(z.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(z.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(z.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(z.jsx)("span",{children:c})]})})})]})})},T=n.a.memo((function(t){var e=t.activeCategory,c=t.items,i=t.onClickCategory;return Object(z.jsx)("div",{className:"categories",children:Object(z.jsxs)("ul",{children:[Object(z.jsx)("li",{className:null===e?"active":"",onClick:function(){return i(null)},children:"\u0412\u0441\u0435"}),c&&c.map((function(t,c){return Object(z.jsx)("li",{className:e===c?"active":"",onClick:function(){return i(c)},children:t},"".concat(t,"_").concat(c))}))]})})}));T.defaultProps={activeCategory:null,items:[]};var M=T,A=c(19),S=n.a.memo((function(t){var e=t.items,c=t.activeSortType,i=t.onClickSortType,s=n.a.useState(!1),a=Object(A.a)(s,2),r=a[0],o=a[1],l=n.a.useRef(),d=e.find((function(t){return t.type===c})).name,j=function(t){t.path||t.composedPath&&t.composedPath(),t.path.includes(l.current)||o(!1)};return n.a.useEffect((function(){document.body.addEventListener("click",j)}),[]),Object(z.jsxs)("div",{ref:l,className:"sort",children:[Object(z.jsxs)("div",{className:"sort__label",children:[Object(z.jsx)("svg",{className:r?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(z.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(z.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(z.jsx)("span",{onClick:function(){o(!r)},children:d})]}),r&&Object(z.jsx)("div",{className:"sort__popup",children:Object(z.jsx)("ul",{children:e&&e.map((function(t,e){return Object(z.jsx)("li",{onClick:function(){return function(t){i&&i(t),o(!1)}(t)},className:c===t.type?"active":"",children:t.name},"".concat(t.type,"_").concat(e))}))})})]})}));S.defaultProps={items:[]};var V=S;var R=function(t){var e=t.id,c=t.name,i=t.type,n=t.size,s=t.totalPrice,a=t.totalCount,r=t.onRemove,o=t.onMinus,l=t.onPlus;return Object(z.jsxs)("div",{className:"cart__item",children:[Object(z.jsx)("div",{className:"cart__item-img",children:Object(z.jsx)("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})}),Object(z.jsxs)("div",{className:"cart__item-info",children:[Object(z.jsx)("h3",{children:c}),Object(z.jsxs)("p",{children:[i," \u0442\u0435\u0441\u0442\u043e, ",n," \u0441\u043c."]})]}),Object(z.jsxs)("div",{className:"cart__item-count",children:[Object(z.jsx)("div",{onClick:function(){o(e)},className:"button button--outline button--circle cart__item-count-minus",children:Object(z.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(z.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(z.jsx)("b",{children:a}),Object(z.jsx)("div",{onClick:function(){l(e)},className:"button button--outline button--circle cart__item-count-plus",children:Object(z.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(z.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(z.jsx)("div",{className:"cart__item-price",children:Object(z.jsxs)("b",{children:[s," \u20bd"]})}),Object(z.jsx)("div",{className:"cart__item-remove",children:Object(z.jsx)(E,{onClick:function(){r(e)},className:"button--circle",outline:!0,children:Object(z.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(z.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})};function Z(t){var e=t.id,c=t.name,i=t.imageUrl,s=t.price,a=t.types,r=t.sizes,o=t.onClickAddPizza,l=t.addedCount,d=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],j=[26,30,40],b=n.a.useState(a[0]),u=Object(A.a)(b,2),h=u[0],O=u[1],p=n.a.useState(0),m=Object(A.a)(p,2),x=m[0],C=m[1];return Object(z.jsxs)("div",{className:"pizza-block",children:[Object(z.jsx)("img",{className:"pizza-block__image",src:i,alt:"Pizza"}),Object(z.jsx)("h4",{className:"pizza-block__title",children:c}),Object(z.jsxs)("div",{className:"pizza-block__selector",children:[Object(z.jsx)("ul",{children:d.map((function(t,e){return Object(z.jsx)("li",{onClick:function(){return function(t){O(t)}(e)},className:N()({active:h===e,disabled:!a.includes(e)}),children:t},t)}))}),Object(z.jsx)("ul",{children:j.map((function(t,e){return Object(z.jsxs)("li",{onClick:function(){return function(t){C(t)}(e)},className:N()({active:x===e,disabled:!r.includes(t)}),children:[t," \u0441\u043c."]},t)}))})]}),Object(z.jsxs)("div",{className:"pizza-block__bottom",children:[Object(z.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",s," \u20bd"]}),Object(z.jsxs)(E,{onClick:function(){var t={id:e,name:c,imageUrl:i,price:s,size:j[x],type:d[h]};o(t)},className:"button--add",outline:!0,children:[Object(z.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(z.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(z.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),l&&Object(z.jsx)("i",{children:l})]})]})]})}Z.defaultProps={name:"...",price:0,types:[],sizes:[]};var H=Z,I=c(42);var D=function(){return Object(z.jsxs)(I.a,{className:"pizza-block",speed:2,width:280,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(z.jsx)("circle",{cx:"132",cy:"142",r:"115"}),Object(z.jsx)("rect",{x:"0",y:"273",rx:"6",ry:"6",width:"280",height:"26"}),Object(z.jsx)("rect",{x:"0",y:"310",rx:"6",ry:"6",width:"280",height:"84"}),Object(z.jsx)("rect",{x:"0",y:"418",rx:"6",ry:"6",width:"91",height:"31"}),Object(z.jsx)("rect",{x:"137",y:"408",rx:"25",ry:"25",width:"140",height:"46"})]})},W=c(43),U=c.n(W),Y=function(t){return{type:"SET_PIZZAS",payload:t}},G=["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],J=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"popular",order:"desc"},{name:"\u0446\u0435\u043d\u0435",type:"price",order:"desc"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"name",order:"asc"}];var X=function(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.pizzas.items})),c=Object(o.c)((function(t){return t.cart.items})),i=Object(o.c)((function(t){return t.pizzas.isLoaded})),s=Object(o.c)((function(t){return t.filters})),a=s.category,r=s.sortBy;n.a.useEffect((function(){t(function(t,e){return function(c){c({type:"SET_LOADED",payload:!1}),U.a.get("/pizzas?".concat(null!==e?"category=".concat(e):"","&_sort=").concat(t.type,"&_order=").concat(t.order)).then((function(t){var e=t.data;c(Y(e))}))}}(r,a))}),[a,t,r]);var l=n.a.useCallback((function(e){t({type:"SET_CATEGORY",payload:e})}),[t]),d=n.a.useCallback((function(e){var c;t({type:"SET_SORT_BY",payload:{type:(c=e).type,order:c.order}})}),[t]),b=function(e){t({type:"ADD_PIZZA_CART",payload:e})};return Object(z.jsxs)("div",{className:"container",children:[Object(z.jsxs)("div",{className:"content__top",children:[Object(z.jsx)(M,{activeCategory:a,onClickCategory:l,items:G}),Object(z.jsx)(V,{activeSortType:r.type,items:J,onClickSortType:d})]}),Object(z.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(z.jsx)("div",{className:"content__items",children:i?e.map((function(t){return Object(z.jsx)(H,Object(j.a)({onClickAddPizza:b,addedCount:c[t.id]&&c[t.id].items.length},t),t.id)})):Array(12).fill(0).map((function(t,e){return Object(z.jsx)(D,{},e)}))})]})},q=c.p+"static/media/empty-cart.db905d1f.png";var F=function(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.cart})),c=e.totalPrice,i=e.totalCount,n=e.items,s=Object.keys(n).map((function(t){return n[t].items[0]})),a=function(e){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0438\u0432\u0435\u0442\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?")&&t(function(t){return{type:"REMOVE_CART_ITEM",payload:t}}(e))},l=function(e){t(function(t){return{type:"PLUS_CART_ITEM",payload:t}}(e))},d=function(e){t(function(t){return{type:"MINUS_CART_ITEM",payload:t}}(e))};return Object(z.jsx)("div",{className:"content",children:Object(z.jsx)("div",{className:"container container--cart",children:i?Object(z.jsxs)("div",{className:"cart",children:[Object(z.jsxs)("div",{className:"cart__top",children:[Object(z.jsxs)("h2",{className:"content__title",children:[Object(z.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(z.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(z.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(z.jsxs)("div",{className:"cart__clear",children:[Object(z.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(z.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(z.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(z.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(z.jsx)("span",{onClick:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?")&&t({type:"CLEAR_CART"})},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(z.jsx)("div",{className:"content__items",children:s.map((function(t){return Object(z.jsx)(R,{id:t.id,name:t.name,type:t.type,size:t.size,totalPrice:n[t.id].totalPrice,totalCount:n[t.id].items.length,onRemove:a,onMinus:d,onPlus:l},t.id)}))}),Object(z.jsxs)("div",{className:"cart__bottom",children:[Object(z.jsxs)("div",{className:"cart__bottom-details",children:[Object(z.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(z.jsxs)("b",{children:[i," \u0448\u0442."]})]}),Object(z.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(z.jsxs)("b",{children:[c," \u20bd"]})]})]}),Object(z.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(z.jsxs)("a",{href:"/",className:"button button--outline button--add go-back-btn",children:[Object(z.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(z.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(z.jsx)(r.b,{to:"/",children:Object(z.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]}),Object(z.jsx)(E,{onClick:function(){console.log("\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437",n)},className:"pay-btn",children:Object(z.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]}):Object(z.jsxs)("div",{className:"cart cart--empty",children:[Object(z.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",Object(z.jsx)("i",{children:"\ud83d\ude15"})]}),Object(z.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(z.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(z.jsx)("img",{src:q,alt:"Empty cart"}),Object(z.jsx)(r.b,{to:"/",className:"button button--black",children:Object(z.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})})})};var K=function(){return Object(z.jsxs)("div",{className:"wrapper",children:[Object(z.jsx)(B,{}),Object(z.jsxs)("div",{className:"content",children:[Object(z.jsx)(w.a,{path:"/",component:X,exact:!0}),Object(z.jsx)(w.a,{path:"/cart",component:F,exact:!0})]})]})};a.a.render(Object(z.jsx)(r.a,{children:Object(z.jsx)(o.a,{store:k,children:Object(z.jsx)(K,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.c0c4e135.chunk.js.map