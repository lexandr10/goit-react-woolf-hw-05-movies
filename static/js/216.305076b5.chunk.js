"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[216],{619:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(689),a=r(87),s="PopularMovies_item__MD+Js",i="PopularMovies_link__Rbxon",o="PopularMovies_title__p74Hn",c=r(184),u=function(e){var t=e.movies,r=(0,n.TH)();return null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.title,u=e.poster_path,l=e.release_date,m=e.vote_average;return(0,c.jsx)(a.Link,{className:i,to:"/movies/".concat(t),state:r,children:(0,c.jsxs)("li",{className:s,children:[(0,c.jsx)("img",{src:u?"https://image.tmdb.org/t/p/w200".concat(u):"http://placehold.it/200x300",alt:n}),(0,c.jsx)("h2",{className:o,children:n}),(0,c.jsx)("p",{children:l}),(0,c.jsx)("p",{children:m})]},t)})}))},l="ListMovies_list__jtcUy",m=function(e){var t=e.movies;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{className:l,children:t&&(0,c.jsx)(u,{movies:t})})})}},854:function(e,t,r){r.d(t,{a:function(){return s}});var n=r(154),a=r(184),s=function(){return(0,a.jsx)(n.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})}},216:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(439),s=r(757),i=r.n(s),o=r(913),c=r(791),u="Form_search__2Vt7m",l="Form_btnSearch__Via2J",m="Form_form__e1yzW",h="Form_labelInput__JT6ru",v=r(184),_=function(e){var t=e.onSubmit,r=(0,c.useState)(""),n=(0,a.Z)(r,2),s=n[0],i=n[1];return(0,v.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault(),t(s),i("")},children:[(0,v.jsx)("label",{className:h,htmlFor:"search",children:"Find movie by name"}),(0,v.jsx)("input",{className:u,placeholder:"Search movie...",name:"search",value:s,onChange:function(e){i(e.target.value)},type:"text"}),(0,v.jsx)("button",{className:l,type:"submit",children:"Search"})]})},p=r(619),f=r(854),d=r(87),x=function(){var e,t,r=(0,c.useState)([]),s=(0,a.Z)(r,2),u=s[0],l=s[1],m=(0,d.useSearchParams)(),h=(0,a.Z)(m,2),x=h[0],g=h[1],j=(0,c.useState)(""),b=(0,a.Z)(j,2),w=(b[0],b[1]),S=(0,c.useState)(!1),k=(0,a.Z)(S,2),F=k[0],N=k[1],Z=null!==(e=x.get("search"))&&void 0!==e?e:"",y=null!==(t=x.get("page"))&&void 0!==t?t:1;(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(""),N(!0),e.next=5,(0,o.V0)(Z,y);case 5:t=e.sent,l(t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),w(e.t0.message),console.log(e.t0);case 13:return e.prev=13,N(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();Z||l([]),e()}),[Z,y]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_,{onSubmit:function(e){g({search:e,page:1})}}),F&&(0,v.jsx)(f.a,{}),(0,v.jsx)(p.Z,{movies:u})]})}}}]);
//# sourceMappingURL=216.305076b5.chunk.js.map