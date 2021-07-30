(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,n){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__317A8","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__240FV"}},13:function(e,t,n){e.exports={"Button-wrapper":"Button_Button-wrapper__3rtjO",Button:"Button_Button__cLW2Y"}},14:function(e,t,n){e.exports={Overlay:"Modal_Overlay__3ApqJ",Modal:"Modal_Modal__2DN28"}},26:function(e,t,n){e.exports={Searchbar:"Searchbar_Searchbar__Y6vl5"}},27:function(e,t,n){e.exports={ImageGallery:"ImageGallery_ImageGallery__3zBw7"}},29:function(e,t,n){e.exports={Loader:"Loader_Loader__1jGQ_"}},30:function(e,t,n){e.exports={Message:"Message_Message__dBvQM"}},31:function(e,t,n){e.exports={IconButton:"IconButton_IconButton__2W3IW"}},7:function(e,t,n){e.exports={SearchForm:"SearchForm_SearchForm__3QQ57","SearchForm-button":"SearchForm_SearchForm-button__3F0ep","SearchForm-button-label":"SearchForm_SearchForm-button-label__2GCfE","SearchForm-input":"SearchForm_SearchForm-input__1Mlc6"}},78:function(e,t,n){e.exports={App:"App_App__1iN9a"}},79:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(8),o=n.n(c),l=n(5),i=n.n(l),s=n(16),u=n(10),b=n(4),h=n(7),j=n.n(h),m=n(0),p=function(e){var t=e.onSearch,n=Object(r.useState)(""),a=Object(b.a)(n,2),c=a[0],o=a[1],l=function(){return o("")};return Object(m.jsxs)("form",{className:j.a.SearchForm,onSubmit:function(e){e.preventDefault(),c.trim()&&(t(c),l())},children:[Object(m.jsx)("button",{type:"submit",className:j.a["SearchForm-button"],children:Object(m.jsx)("span",{className:j.a["SearchForm-button-label"],children:"Search"})}),Object(m.jsx)("input",{className:j.a["SearchForm-input"],type:"text",name:"query",value:c,onChange:function(e){var t=e.currentTarget.value;o(t)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})},d=n(26),f=n.n(d),O=function(e){var t=e.onSearch;return Object(m.jsx)("header",{className:f.a.Searchbar,children:Object(m.jsx)(p,{onSearch:t})})},g=n(12),x=n.n(g),v=function(e){var t=e.image,n=e.onImageClick;return Object(m.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(m.jsx)("img",{src:t.webformatURL,alt:t.tags,className:x.a["ImageGalleryItem-image"],onClick:function(){return n(t.largeImageURL)}})})};v.defaultProps={tags:""};var _=v,y=n(27),S=n.n(y),w=function(e){var t=e.images,n=e.onImageClick;return Object(m.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e){return Object(m.jsx)(_,{image:e,onImageClick:n},e.id)}))})},I=n(13),k=n.n(I),C=function(e){var t=e.onClick;return Object(m.jsx)("div",{className:k.a["Button-wrapper"],children:Object(m.jsx)("button",{type:"button",className:k.a.Button,onClick:t,children:"Load more"})})},F=n(28),N=n.n(F),B=n(29),L=n.n(B),G=function(){return Object(m.jsx)("div",{className:L.a.Loader,children:Object(m.jsx)(N.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100})})},M=n(30),E=n.n(M),P=function(e){var t=e.children;return Object(m.jsx)("div",{className:E.a.Message,children:t})};P.defaultProps={children:[]};var A=P,T=n(14),q=n.n(T),Q=document.querySelector("#modal-root"),R=function(e){var t=e.children,n=e.onClose;Object(r.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}));var a=function(e){"Escape"===e.code&&n()};return Object(c.createPortal)(Object(m.jsx)("div",{className:q.a.Overlay,onClick:function(e){e.currentTarget===e.target&&n()},children:Object(m.jsx)("div",{className:q.a.Modal,children:t})}),Q)};R.defaultProps={children:null};var U=R,z=n(17),D=n(32),J=n(31),W=n.n(J),Y=function(e){var t=e.children,n=e.onClick,r=Object(D.a)(e,["children","onClick"]);return Object(m.jsx)("button",Object(z.a)(Object(z.a)({type:"button",className:W.a.IconButton,onClick:n},r),{},{children:t}))};Y.defaultProps={onClick:function(){return null},children:null};var H,V=Y;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Z(e,t){var n=e.title,a=e.titleId,c=X(e,["title","titleId"]);return r.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 41.756 41.756",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,H||(H=r.createElement("path",{d:"M27.948 20.878L40.291 8.536a5 5 0 10-7.07-7.071L20.878 13.809 8.535 1.465a5 5 0 00-7.07 7.071l12.342 12.342L1.465 33.22a5 5 0 107.07 7.071l12.343-12.342 12.343 12.343c.976.977 2.256 1.464 3.535 1.464s2.56-.487 3.535-1.464a5 5 0 000-7.071L27.948 20.878z"})))}var $=r.forwardRef(Z),ee=(n.p,n(15)),te=n.n(ee);te.a.defaults.baseURL="https://pixabay.com/api";var ne=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.a.get("/?q=".concat(t,"&page=").concat(n,"&key=").concat("21255854-31bcf5c415a33cbe729d04b4b","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),re=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(1),o=Object(b.a)(c,2),l=o[0],h=o[1],j=Object(r.useState)(""),p=Object(b.a)(j,2),d=p[0],f=p[1],g=Object(r.useState)(!1),x=Object(b.a)(g,2),v=x[0],_=x[1],y=Object(r.useState)(!1),S=Object(b.a)(y,2),I=S[0],k=S[1],F=Object(r.useState)(""),N=Object(b.a)(F,2),B=N[0],L=N[1],M=Object(r.useState)(null),E=Object(b.a)(M,2),P=E[0],T=E[1];Object(r.useEffect)((function(){d&&q()}),[d]);var q=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,ne(d,l);case 4:t=e.sent,n=t.hits,a((function(e){return[].concat(Object(s.a)(e),Object(s.a)(n))})),h((function(e){return e+1})),1!==l&&R(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Smth wrong with App fetch",e.t0),T({error:e.t0});case 15:return e.prev=15,_(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,11,15,18]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){k((function(e){return!e}))},R=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},z=n.length>0&&n.length>=12;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{onSearch:function(e){a([]),h(1),f(e),_(!1),k(!1),L(""),T(null)}}),n.length<1&&!v&&!P&&Object(m.jsxs)(A,{children:[Object(m.jsx)("h2",{children:"The gallery is empty \ud83d\ude41"}),Object(m.jsx)("p",{children:"Use search field!"})]}),Object(m.jsx)(w,{images:n,onImageClick:function(e){L(e),k(!0)}}),z&&Object(m.jsx)(C,{onClick:q}),I&&Object(m.jsxs)(U,{onClose:Q,children:[Object(m.jsx)("div",{className:"Close-box",children:Object(m.jsx)(V,{onClick:Q,"aria-label":"Close modal",children:Object(m.jsx)($,{width:"20px",height:"20px",fill:"#7e7b7b"})})}),Object(m.jsx)("img",{src:B,alt:"",className:"Modal-image"})]}),v&&Object(m.jsx)(G,{}),P&&Object(m.jsxs)(A,{children:[Object(m.jsx)("h2",{children:"Oops!"}),Object(m.jsxs)("p",{children:["Something go wrong. Please try again, or"," ",Object(m.jsx)("a",{href:"/",children:"refresh the page"}),"."]})]})]})};n(77),n(78);o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(re,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.13042e50.chunk.js.map