(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[154],{154:function(e,t,n){"use strict";n.d(t,{Bb:function(){return un}});var r=n(413);function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var i=n(184),s=n(791);var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};Object.create;function c(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var u=n(613),l=n.n(u),f="-ms-",d="-moz-",p="-webkit-",h="comm",v="rule",g="decl",m="@keyframes",S=Math.abs,y=String.fromCharCode,_=Object.assign;function w(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function E(e,t,n){return e.replace(t,n)}function C(e,t,n){return e.indexOf(t,n)}function O(e,t){return 0|e.charCodeAt(t)}function T(e,t,n){return e.slice(t,n)}function P(e){return e.length}function R(e){return e.length}function x(e,t){return t.push(e),e}function A(e,t){return e.filter((function(e){return!b(e,t)}))}var I=1,k=1,D=0,N=0,j=0,$="";function W(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:I,column:k,length:s,return:"",siblings:a}}function F(e,t){return _(W("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function H(e){for(;e.root;)e=F(e.root,{children:[e]});x(e,e.siblings)}function L(){return j=N>0?O($,--N):0,k--,10===j&&(k=1,I--),j}function K(){return j=N<D?O($,N++):0,k++,10===j&&(k=1,I++),j}function B(){return O($,N)}function U(){return N}function z(e,t){return T($,e,t)}function M(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G(e){return I=k=1,D=P($=e),N=0,[]}function V(e){return $="",e}function Y(e){return w(z(N-1,J(91===e?e+2:40===e?e+1:e)))}function q(e){for(;(j=B())&&j<33;)K();return M(e)>2||M(j)>3?"":" "}function Z(e,t){for(;--t&&K()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return z(e,U()+(t<6&&32==B()&&32==K()))}function J(e){for(;K();)switch(j){case e:return N;case 34:case 39:34!==e&&39!==e&&J(j);break;case 40:41===e&&J(e);break;case 92:K()}return N}function Q(e,t){for(;K()&&e+j!==57&&(e+j!==84||47!==B()););return"/*"+z(t,N-1)+"*"+y(47===e?e:K())}function X(e){for(;!M(B());)K();return z(e,N)}function ee(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function te(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case g:return e.return=e.return||e.value;case h:return"";case m:return e.return=e.value+"{"+ee(e.children,r)+"}";case v:if(!P(e.value=e.props.join(",")))return""}return P(n=ee(e.children,r))?e.return=e.value+"{"+n+"}":""}function ne(e,t,n){switch(function(e,t){return 45^O(e,0)?(((t<<2^O(e,0))<<2^O(e,1))<<2^O(e,2))<<2^O(e,3):0}(e,t)){case 5103:return p+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return p+e+e;case 4789:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return p+e+d+e+f+e+e;case 5936:switch(O(e,t+11)){case 114:return p+e+f+E(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return p+e+f+E(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return p+e+f+E(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return p+e+f+e+e;case 6165:return p+e+f+"flex-"+e+e;case 5187:return p+e+E(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return p+e+f+"flex-item-"+E(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":f+"grid-row-"+E(e,/flex-|-self/g,""))+e;case 4675:return p+e+f+"flex-line-pack"+E(e,/align-content|flex-|-self/g,"")+e;case 5548:return p+e+f+E(e,"shrink","negative")+e;case 5292:return p+e+f+E(e,"basis","preferred-size")+e;case 6060:return p+"box-"+E(e,"-grow","")+p+e+f+E(e,"grow","positive")+e;case 4554:return p+E(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return E(E(E(e,/(zoom-|grab)/,p+"$1"),/(image-set)/,p+"$1"),e,"")+e;case 5495:case 3959:return E(e,/(image-set\([^]*)/,p+"$1$`$1");case 4968:return E(E(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+p+e+e;case 4200:if(!b(e,/flex-|baseline/))return f+"grid-column-align"+T(e,t)+e;break;case 2592:case 3360:return f+E(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,b(e.props,/grid-\w+-end/)}))?~C(e+(n=n[t].value),"span",0)?e:f+E(e,"-start","")+e+f+"grid-row-span:"+(~C(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(e,/\d+/))+";":f+E(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return b(e.props,/grid-\w+-start/)}))?e:f+E(E(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return E(e,/(.+)-inline(.+)/,p+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(O(e,t+1)){case 109:if(45!==O(e,t+4))break;case 102:return E(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+d+(108==O(e,t+3)?"$3":"$2-$3"))+e;case 115:return~C(e,"stretch",0)?ne(E(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return E(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,s,a){return f+n+":"+r+a+(o?f+n+"-span:"+(i?s:+s-+r)+a:"")+e}));case 4949:if(121===O(e,t+6))return E(e,":",":"+p)+e;break;case 6444:switch(O(e,45===O(e,14)?18:11)){case 120:return E(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+p+(45===O(e,14)?"inline-":"")+"box$3$1"+p+"$2$3$1"+f+"$2box$3")+e;case 100:return E(e,":",":"+f)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return E(e,"scroll-","scroll-snap-")+e}return e}function re(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case g:return void(e.return=ne(e.value,e.length,n));case m:return ee([F(e,{value:E(e.value,"@","@"+p)})],r);case v:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(b(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":H(F(e,{props:[E(t,/:(read-\w+)/,":-moz-$1")]})),H(F(e,{props:[t]})),_(e,{props:A(n,r)});break;case"::placeholder":H(F(e,{props:[E(t,/:(plac\w+)/,":-webkit-input-$1")]})),H(F(e,{props:[E(t,/:(plac\w+)/,":-moz-$1")]})),H(F(e,{props:[E(t,/:(plac\w+)/,f+"input-$1")]})),H(F(e,{props:[t]})),_(e,{props:A(n,r)})}return""}))}}function oe(e){return V(ie("",null,null,null,[""],e=G(e),0,[0],e))}function ie(e,t,n,r,o,i,s,a,c){for(var u=0,l=0,f=s,d=0,p=0,h=0,v=1,g=1,m=1,_=0,w="",b=o,T=i,R=r,A=w;g;)switch(h=_,_=K()){case 40:if(108!=h&&58==O(A,f-1)){-1!=C(A+=E(Y(_),"&","&\f"),"&\f",S(u?a[u-1]:0))&&(m=-1);break}case 34:case 39:case 91:A+=Y(_);break;case 9:case 10:case 13:case 32:A+=q(h);break;case 92:A+=Z(U()-1,7);continue;case 47:switch(B()){case 42:case 47:x(ae(Q(K(),U()),t,n,c),c);break;default:A+="/"}break;case 123*v:a[u++]=P(A)*m;case 125*v:case 59:case 0:switch(_){case 0:case 125:g=0;case 59+l:-1==m&&(A=E(A,/\f/g,"")),p>0&&P(A)-f&&x(p>32?ce(A+";",r,n,f-1,c):ce(E(A," ","")+";",r,n,f-2,c),c);break;case 59:A+=";";default:if(x(R=se(A,t,n,u,l,o,a,w,b=[],T=[],f,i),i),123===_)if(0===l)ie(A,t,R,R,b,i,f,a,T);else switch(99===d&&110===O(A,3)?100:d){case 100:case 108:case 109:case 115:ie(e,R,R,r&&x(se(e,R,R,0,0,o,a,w,o,b=[],f,T),T),o,T,f,a,r?b:T);break;default:ie(A,R,R,R,[""],T,0,a,T)}}u=l=p=0,v=m=1,w=A="",f=s;break;case 58:f=1+P(A),p=h;default:if(v<1)if(123==_)--v;else if(125==_&&0==v++&&125==L())continue;switch(A+=y(_),_*v){case 38:m=l>0?1:(A+="\f",-1);break;case 44:a[u++]=(P(A)-1)*m,m=1;break;case 64:45===B()&&(A+=Y(K())),d=B(),l=f=P(w=A+=X(U())),_++;break;case 45:45===h&&2==P(A)&&(v=0)}}return i}function se(e,t,n,r,o,i,s,a,c,u,l,f){for(var d=o-1,p=0===o?i:[""],h=R(p),g=0,m=0,y=0;g<r;++g)for(var _=0,b=T(e,d+1,d=S(m=s[g])),C=e;_<h;++_)(C=w(m>0?p[_]+" "+b:E(b,/&\f/g,p[_])))&&(c[y++]=C);return W(e,t,n,0===o?v:a,c,u,l,f)}function ae(e,t,n,r){return W(e,t,n,h,y(j),T(e,2,-2),0,r)}function ce(e,t,n,r,o){return W(e,t,n,g,T(e,0,r),T(e,r+1,-1),r,o)}var ue={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",fe="active",de="data-styled-version",pe="6.1.8",he="/*!sc*/\n",ve="undefined"!=typeof window&&"HTMLElement"in window,ge=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/goit-react-woolf-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),me=(new Set,Object.freeze([])),Se=Object.freeze({});function ye(e,t,n){return void 0===n&&(n=Se),e.theme!==n.theme&&e.theme||t||n.theme}var _e=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),we=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,be=/(^-|-$)/g;function Ee(e){return e.replace(we,"-").replace(be,"")}var Ce=/(a)(d)/gi,Oe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Te(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Oe(t%52)+n;return(Oe(t%52)+n).replace(Ce,"$1-$2")}var Pe,Re=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},xe=function(e){return Re(5381,e)};function Ae(e){return Te(xe(e)>>>0)}function Ie(e){return e.displayName||e.name||"Component"}function ke(e){return"string"==typeof e&&!0}var De="function"==typeof Symbol&&Symbol.for,Ne=De?Symbol.for("react.memo"):60115,je=De?Symbol.for("react.forward_ref"):60112,$e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},We={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},He=((Pe={})[je]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pe[Ne]=Fe,Pe);function Le(e){return("type"in(t=e)&&t.type.$$typeof)===Ne?Fe:"$$typeof"in e?He[e.$$typeof]:$e;var t}var Ke=Object.defineProperty,Be=Object.getOwnPropertyNames,Ue=Object.getOwnPropertySymbols,ze=Object.getOwnPropertyDescriptor,Me=Object.getPrototypeOf,Ge=Object.prototype;function Ve(e,t,n){if("string"!=typeof t){if(Ge){var r=Me(t);r&&r!==Ge&&Ve(e,r,n)}var o=Be(t);Ue&&(o=o.concat(Ue(t)));for(var i=Le(e),s=Le(t),a=0;a<o.length;++a){var c=o[a];if(!(c in We||n&&n[c]||s&&c in s||i&&c in i)){var u=ze(t,c);try{Ke(e,c,u)}catch(e){}}}}return e}function Ye(e){return"function"==typeof e}function qe(e){return"object"==typeof e&&"styledComponentId"in e}function Ze(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Je(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xe(e,t,n){if(void 0===n&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xe(e[r],t[r]);else if(Qe(t))for(var r in t)e[r]=Xe(e[r],t[r]);return e}function et(e,t){Object.defineProperty(e,"toString",{value:t})}function tt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw tt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=(i=0,t.length);i<a;i++)this.tag.insertRule(s,t[i])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(he);return t},e}(),rt=new Map,ot=new Map,it=1,st=function(e){if(rt.has(e))return rt.get(e);for(;ot.has(it);)it++;var t=it++;return rt.set(e,t),ot.set(t,e),t},at=function(e,t){it=t+1,rt.set(e,t),ot.set(t,e)},ct="style[".concat(le,"][").concat(de,'="').concat(pe,'"]'),ut=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},ft=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(he),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var c=a.match(ut);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(at(l,u),lt(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function dt(){return n.nc}var pt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(le,fe),r.setAttribute(de,pe);var s=dt();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},ht=function(){function e(e){this.element=pt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw tt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),vt=function(){function e(e){this.element=pt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),gt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),mt=ve,St={isServer:!ve,useCSSOMInjection:!ge},yt=function(){function e(e,t,n){void 0===e&&(e=Se),void 0===t&&(t={});var r=this;this.options=a(a({},St),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ve&&mt&&(mt=!1,function(e){for(var t=document.querySelectorAll(ct),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(le)!==fe&&(ft(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),et(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return ot.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),s=t.getGroup(n);if(void 0===i||0===s.length)return"continue";var a="".concat(le,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==i&&i.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),r+="".concat(s).concat(a,'{content:"').concat(c,'"}').concat(he)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return st(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(a(a({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new gt(n):t?new ht(n):new vt(n)}(this.options),new nt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(st(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(st(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(st(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),_t=/&/g,wt=/^\s*\/\/.*$/gm;function bt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=bt(e.children,t)),e}))}function Et(e){var t,n,r,o=void 0===e?Se:e,i=o.options,s=void 0===i?Se:i,a=o.plugins,c=void 0===a?me:a,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===v&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(_t,n).replace(r,u))})),s.prefix&&l.push(re),l.push(te);var f=function(e,o,i,a){void 0===o&&(o=""),void 0===i&&(i=""),void 0===a&&(a="&"),t=a,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(wt,""),u=oe(i||o?"".concat(i," ").concat(o," { ").concat(c," }"):c);s.namespace&&(u=bt(u,s.namespace));var f,d=[];return ee(u,function(e){var t=R(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}(l.concat((f=function(e){return d.push(e)},function(e){e.root||(e=e.return)&&f(e)})))),d};return f.hash=c.length?c.reduce((function(e,t){return t.name||tt(15),Re(e,t.name)}),5381).toString():"",f}var Ct=new yt,Ot=Et(),Tt=s.createContext({shouldForwardProp:void 0,styleSheet:Ct,stylis:Ot}),Pt=(Tt.Consumer,s.createContext(void 0));function Rt(){return(0,s.useContext)(Tt)}function xt(e){var t=(0,s.useState)(e.stylisPlugins),n=t[0],r=t[1],o=Rt().styleSheet,i=(0,s.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),a=(0,s.useMemo)((function(){return Et({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,s.useEffect)((function(){l()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var c=(0,s.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:a}}),[e.shouldForwardProp,i,a]);return s.createElement(Tt.Provider,{value:c},s.createElement(Pt.Provider,{value:a},e.children))}var At=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Ot);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,et(this,(function(){throw tt(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Ot),this.name+e.hash},e}(),It=function(e){return e>="A"&&e<="Z"};function kt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;It(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Dt=function(e){return null==e||!1===e||""===e},Nt=function e(t){var n,r,o=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Dt(s)&&(Array.isArray(s)&&s.isCss||Ye(s)?o.push("".concat(kt(i),":"),s,";"):Qe(s)?o.push.apply(o,c(c(["".concat(i," {")],e(s),!1),["}"],!1)):o.push("".concat(kt(i),": ").concat((n=i,null==(r=s)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in ue||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function jt(e,t,n,r){return Dt(e)?[]:qe(e)?[".".concat(e.styledComponentId)]:Ye(e)?!Ye(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:jt(e(t),t,n,r):e instanceof At?n?(e.inject(n,r),[e.getName(r)]):[e]:Qe(e)?Nt(e):Array.isArray(e)?Array.prototype.concat.apply(me,e.map((function(e){return jt(e,t,n,r)}))):[e.toString()];var o}function $t(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ye(n)&&!qe(n))return!1}return!0}var Wt=xe(pe),Ft=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&$t(e),this.componentId=t,this.baseHash=Re(Wt,t),this.baseStyle=n,yt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ze(r,this.staticRulesId);else{var o=Je(jt(this.rules,e,t,n)),i=Te(Re(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var s=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,s)}r=Ze(r,i),this.staticRulesId=i}else{for(var a=Re(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var f=Je(jt(l,e,t,n));a=Re(a,f+u),c+=f}}if(c){var d=Te(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),r=Ze(r,d)}}return r},e}(),Ht=s.createContext(void 0);Ht.Consumer;var Lt={};new Set;function Kt(e,t,n){var r=qe(e),o=e,i=!ke(e),c=t.attrs,u=void 0===c?me:c,l=t.componentId,f=void 0===l?function(e,t){var n="string"!=typeof e?"sc":Ee(e);Lt[n]=(Lt[n]||0)+1;var r="".concat(n,"-").concat(Ae(pe+n+Lt[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):l,d=t.displayName,p=void 0===d?function(e){return ke(e)?"styled.".concat(e):"Styled(".concat(Ie(e),")")}(e):d,h=t.displayName&&t.componentId?"".concat(Ee(t.displayName),"-").concat(t.componentId):t.componentId||f,v=r&&o.attrs?o.attrs.concat(u).filter(Boolean):u,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var m=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;g=function(e,t){return m(e,t)&&S(e,t)}}else g=m}var y=new Ft(n,h,r?o.componentStyle:void 0);function _(e,t){return function(e,t,n){var r=e.attrs,o=e.componentStyle,i=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,l=e.target,f=s.useContext(Ht),d=Rt(),p=e.shouldForwardProp||d.shouldForwardProp,h=ye(t,f,i)||Se,v=function(e,t,n){for(var r,o=a(a({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var s=Ye(r=e[i])?r(o):r;for(var c in s)o[c]="className"===c?Ze(o[c],s[c]):"style"===c?a(a({},o[c]),s[c]):s[c]}return t.className&&(o.className=Ze(o.className,t.className)),o}(r,t,h),g=v.as||l,m={};for(var S in v)void 0===v[S]||"$"===S[0]||"as"===S||"theme"===S&&v.theme===h||("forwardedAs"===S?m.as=v.forwardedAs:p&&!p(S,g)||(m[S]=v[S]));var y=function(e,t){var n=Rt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,v),_=Ze(c,u);return y&&(_+=" "+y),v.className&&(_+=" "+v.className),m[ke(g)&&!_e.has(g)?"class":"className"]=_,m.ref=n,(0,s.createElement)(g,m)}(w,e,t)}_.displayName=p;var w=s.forwardRef(_);return w.attrs=v,w.componentStyle=y,w.displayName=p,w.shouldForwardProp=g,w.foldedComponentIds=r?Ze(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=h,w.target=r?o.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Xe(e,o[r],!0);return e}({},o.defaultProps,e):e}}),et(w,(function(){return".".concat(w.styledComponentId)})),i&&Ve(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Bt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Ut=function(e){return Object.assign(e,{isCss:!0})};function zt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ye(e)||Qe(e))return Ut(jt(Bt(me,c([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?jt(r):Ut(jt(Bt(r,t)))}function Mt(e,t,n){if(void 0===n&&(n=Se),!t)throw tt(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,zt.apply(void 0,c([r],o,!1)))};return r.attrs=function(r){return Mt(e,t,a(a({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Mt(e,t,a(a({},n),r))},r}var Gt=function(e){return Mt(Kt,e)},Vt=Gt;_e.forEach((function(e){Vt[e]=Gt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=$t(e),yt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(Je(jt(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&yt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function Yt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Je(zt.apply(void 0,c([e],t,!1))),o=Ae(r);return new At(o,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=dt(),r=Je([n&&'nonce="'.concat(n,'"'),"".concat(le,'="true"'),"".concat(de,'="').concat(pe,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw tt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw tt(2);var n=((t={})[le]="",t[de]=pe,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=dt();return r&&(n.nonce=r),[s.createElement("style",a({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new yt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw tt(2);return s.createElement(xt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw tt(3)}})(),"__sc-".concat(le,"__");var qt,Zt,Jt,Qt,Xt,en,tn,nn,rn,on="#4fa94d",sn={"aria-busy":!0,role:"progressbar"},an=Vt.div(qt||(qt=o(["\n  display: ",";\n"])),(function(e){return e.$visible?"flex":"none"})),cn="http://www.w3.org/2000/svg",un=function(e){var t=e.height,n=void 0===t?"100":t,o=e.width,s=void 0===o?"100":o,a=e.color,c=void 0===a?on:a,u=e.ariaLabel,l=void 0===u?"audio-loading":u,f=e.wrapperStyle,d=void 0===f?{}:f,p=e.wrapperClass,h=e.visible,v=void 0===h||h;return(0,i.jsx)(an,(0,r.Z)((0,r.Z)({$visible:v,style:(0,r.Z)({},d),className:p,"data-testid":"audio-loading","aria-label":l},sn),{},{children:(0,i.jsxs)("svg",{height:"".concat(n),width:"".concat(s),fill:c,viewBox:"0 0 55 80",xmlns:cn,"data-testid":"audio-svg",children:[(0,i.jsx)("title",{children:"Audio Visualization"}),(0,i.jsx)("desc",{children:"Animated representation of audio data"}),(0,i.jsxs)("g",{transform:"matrix(1 0 0 -1 0 80)",children:[(0,i.jsx)("rect",{width:"10",height:"20",rx:"3",children:(0,i.jsx)("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})}),(0,i.jsx)("rect",{x:"15",width:"10",height:"80",rx:"3",children:(0,i.jsx)("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})}),(0,i.jsx)("rect",{x:"30",width:"10",height:"50",rx:"3",children:(0,i.jsx)("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})}),(0,i.jsx)("rect",{x:"45",width:"10",height:"30",rx:"3",children:(0,i.jsx)("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})})]})]})}))},ln=242.776657104492,fn=Yt(Zt||(Zt=o(["\n12.5% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n43.75% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n100% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n"])),33.98873199462888,ln,26.70543228149412,84.97182998657219,ln,84.97182998657219,2.42776657104492,ln,240.34889053344708),dn=(Vt.path(Jt||(Jt=o(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),2.42776657104492,ln,fn,1.6),Yt(Qt||(Qt=o(["\nto {\n   transform: rotate(360deg);\n }\n"])))),pn=(Vt.svg(Xt||(Xt=o(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: 0.75s;\n"])),dn),Vt.polyline(en||(en=o(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(e){return e.width})),Yt(tn||(tn=o(["\nto {\n   stroke-dashoffset: 136;\n }\n"]))));Vt.polygon(nn||(nn=o(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),pn),Vt.svg(rn||(rn=o(["\n  transform-origin: 50% 65%;\n"])))},613:function(e){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var u=i[c];if(!a(u))return!1;var l=e[u],f=t[u];if(!1===(o=n?n.call(r,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}}}]);
//# sourceMappingURL=154.78dc0bf2.chunk.js.map