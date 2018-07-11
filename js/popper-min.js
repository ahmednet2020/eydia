!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function e(e){return e&&"[object Function]"==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var n=window.getComputedStyle(e,null);return t?n[t]:n}function n(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function o(e){if(!e)return window.document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var r=t(e),i=r.overflow,a=r.overflowX,f=r.overflowY;return/(auto|scroll)/.test(i+f+a)?e:o(n(e))}function r(e){var n=e&&e.offsetParent,o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===t(n,"position")?r(n):n:e?e.ownerDocument.documentElement:window.document.documentElement}function i(e){return null!==e.parentNode?i(e.parentNode):e}function a(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,f=n?t:e,s=document.createRange();s.setStart(o,0),s.setEnd(f,0);var p,l,u=s.commonAncestorContainer;if(e!==u&&t!==u||o.contains(f))return p=u,l=p.nodeName,"BODY"===l||"HTML"!==l&&r(p.firstElementChild)!==p?r(u):u;var c=i(e);return c.host?a(c.host,t):a(e,i(t).host)}function f(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var o=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||o)[t]}return e[t]}function s(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return+e["border"+n+"Width"].split("px")[0]+ +e["border"+o+"Width"].split("px")[0]}function p(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],I()?n["offset"+e]+o["margin"+("Height"===e?"Top":"Left")]+o["margin"+("Height"===e?"Bottom":"Right")]:0)}function l(){var e=window.document.body,t=window.document.documentElement,n=I()&&window.getComputedStyle(t);return{height:p("Height",e,t,n),width:p("Width",e,t,n)}}function u(e){return Y({},e,{right:e.left+e.width,bottom:e.top+e.height})}function c(e){var n={};if(I())try{n=e.getBoundingClientRect();var o=f(e,"top"),r=f(e,"left");n.top+=o,n.left+=r,n.bottom+=o,n.right+=r}catch(e){}else n=e.getBoundingClientRect();var i={left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top},a="HTML"===e.nodeName?l():{},p=a.width||e.clientWidth||i.right-i.left,c=a.height||e.clientHeight||i.bottom-i.top,d=e.offsetWidth-p,h=e.offsetHeight-c;if(d||h){var m=t(e);d-=s(m,"x"),h-=s(m,"y"),i.width-=d,i.height-=h}return u(i)}function d(e,n){var r=I(),i="HTML"===n.nodeName,a=c(e),s=c(n),p=o(e),l=t(n),d=+l.borderTopWidth.split("px")[0],h=+l.borderLeftWidth.split("px")[0],m=u({top:a.top-s.top-d,left:a.left-s.left-h,width:a.width,height:a.height});if(m.marginTop=0,m.marginLeft=0,!r&&i){var g=+l.marginTop.split("px")[0],v=+l.marginLeft.split("px")[0];m.top-=d-g,m.bottom-=d-g,m.left-=h-v,m.right-=h-v,m.marginTop=g,m.marginLeft=v}return(r?n.contains(p):n===p&&"BODY"!==p.nodeName)&&(m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=f(t,"top"),r=f(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}(m,n)),m}function h(e,r,i,s){var p,c,h,m,g,v,b,w={top:0,left:0},y=a(e,r);if("viewport"===s)p=y,c=p.ownerDocument.documentElement,h=d(p,c),m=Math.max(c.clientWidth,window.innerWidth||0),g=Math.max(c.clientHeight,window.innerHeight||0),v=f(c),b=f(c,"left"),w=u({top:v-h.top+h.marginTop,left:b-h.left+h.marginLeft,width:m,height:g});else{var E=void 0;"scrollParent"===s?"BODY"===(E=o(n(e))).nodeName&&(E=e.ownerDocument.documentElement):E="window"===s?e.ownerDocument.documentElement:s;var O=d(E,y);if("HTML"!==E.nodeName||function e(o){var r=o.nodeName;return"BODY"!==r&&"HTML"!==r&&("fixed"===t(o,"position")||e(n(o)))}(y))w=O;else{var x=l(),L=x.height,T=x.width;w.top+=O.top-O.marginTop,w.bottom=L+O.top,w.left+=O.left-O.marginLeft,w.right=T+O.left}}return w.left+=i,w.top+=i,w.right-=i,w.bottom-=i,w}function m(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=h(n,o,i,r),f={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},s=Object.keys(f).map(function(e){return Y({key:e},f[e],{area:(t=f[e],t.width*t.height)});var t}).sort(function(e,t){return t.area-e.area}),p=s.filter(function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight}),l=p.length>0?p[0].key:s[0].key,u=e.split("-")[1];return l+(u?"-"+u:"")}function g(e,t,n){return d(n,a(t,n))}function v(e){var t=window.getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function b(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function w(e,t,n){n=n.split("-")[0];var o=v(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",f=i?"left":"top",s=i?"height":"width",p=i?"width":"height";return r[a]=t[a]+t[s]/2-o[s]/2,r[f]=n===f?t[f]-o[p]:t[b(f)],r}function y(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function E(t,n,o){return(void 0===o?t:t.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=y(e,function(e){return e[t]===n});return e.indexOf(o)}(t,"name",o))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=t.function||t.fn;t.enabled&&e(o)&&(n.offsets.popper=u(n.offsets.popper),n.offsets.reference=u(n.offsets.reference),n=o(n,t))}),n}function O(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function x(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length-1;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==window.document.body.style[i])return i}return null}function L(e){var t=e.ownerDocument;return t?t.defaultView:window}function T(e,t,n,r){n.updateBound=r,L(e).addEventListener("resize",n.updateBound,{passive:!0});var i=o(e);return function e(t,n,r,i){var a="BODY"===t.nodeName,f=a?t.ownerDocument.defaultView:t;f.addEventListener(n,r,{passive:!0}),a||e(o(f.parentNode),n,r,i),i.push(f)}(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function N(){var e,t;this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,L(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function C(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function D(e,t){Object.keys(t).forEach(function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&C(t[n])&&(o="px"),e.style[n]=t[n]+o})}function M(e,t,n){var o=y(e,function(e){return e.name===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}function k(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=K.indexOf(e),o=K.slice(n+1).concat(K.slice(0,n));return t?o.reverse():o}function W(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),f=a.indexOf(y(a,function(e){return-1!==e.search(/,|\s/)}));a[f]&&-1===a[f].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,p=-1!==f?[a.slice(0,f).concat([a[f].split(s)[0]]),[a[f].split(s)[1]].concat(a.slice(f+1))]:[a];return(p=p.map(function(e,o){var r=(1===o?!i:i)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],a=r[2];if(!i)return e;if(0===a.indexOf("%")){var f=void 0;switch(a){case"%p":f=n;break;case"%":case"%r":default:f=o}return u(f)[t]/100*i}if("vh"===a||"vw"===a)return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i;return i}(e,r,t,n)})})).forEach(function(e,t){e.forEach(function(n,o){C(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))})}),r}for(var S="undefined"!=typeof window&&void 0!==window.document,P=["Edge","Trident","Firefox"],B=0,H=0;H<P.length;H+=1)if(S&&navigator.userAgent.indexOf(P[H])>=0){B=1;break}var A=S&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},B))}},j=void 0,I=function(){return void 0===j&&(j=-1!==navigator.appVersion.indexOf("MSIE 10")),j},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),U=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},q=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],K=q.slice(3),V={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},z={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,a=r.popper,f=-1!==["bottom","top"].indexOf(n),s=f?"left":"top",p=f?"width":"height",l={start:U({},s,i[s]),end:U({},s,i[s]+i[p]-a[p])};e.offsets.popper=Y({},a,l[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,o=t.offset,r=e.placement,i=e.offsets,a=i.popper,f=i.reference,s=r.split("-")[0];return n=C(+o)?[+o,0]:W(o,a,f,s),"left"===s?(a.top+=n[0],a.left-=n[1]):"right"===s?(a.top+=n[0],a.left+=n[1]):"top"===s?(a.left+=n[0],a.top-=n[1]):"bottom"===s&&(a.left+=n[0],a.top+=n[1]),e.popper=a,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||r(e.instance.popper);e.instance.reference===n&&(n=r(n));var o=h(e.instance.popper,e.instance.reference,t.padding,n);t.boundaries=o;var i=t.priority,a=e.offsets.popper,f={primary:function(e){var n=a[e];return a[e]<o[e]&&!t.escapeWithReference&&(n=Math.max(a[e],o[e])),U({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=a[n];return a[e]>o[e]&&!t.escapeWithReference&&(r=Math.min(a[n],o[e]-("right"===e?a.width:a.height))),U({},n,r)}};return i.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";a=Y({},a,f[t](e))}),e.offsets.popper=a,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(r),f=a?"right":"bottom",s=a?"left":"top",p=a?"width":"height";return n[f]<i(o[s])&&(e.offsets.popper[s]=i(o[s])-n[p]),n[s]>i(o[f])&&(e.offsets.popper[s]=i(o[f])),e}},arrow:{order:500,enabled:!0,fn:function(e,n){if(!M(e.instance.modifiers,"arrow","keepTogether"))return e;var o=n.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,a=i.popper,f=i.reference,s=-1!==["left","right"].indexOf(r),p=s?"height":"width",l=s?"Top":"Left",c=l.toLowerCase(),d=s?"left":"top",h=s?"bottom":"right",m=v(o)[p];f[h]-m<a[c]&&(e.offsets.popper[c]-=a[c]-(f[h]-m)),f[c]+m>a[h]&&(e.offsets.popper[c]+=f[c]+m-a[h]);var g=f[c]+f[p]/2-m/2,b=t(e.instance.popper,"margin"+l).replace("px",""),w=g-u(e.offsets.popper)[c]-b;return w=Math.max(Math.min(a[p]-m,w),0),e.arrowElement=o,e.offsets.arrow={},e.offsets.arrow[c]=Math.round(w),e.offsets.arrow[d]="",e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(O(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=h(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),o=e.placement.split("-")[0],r=b(o),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case V.FLIP:a=[o,r];break;case V.CLOCKWISE:a=k(o);break;case V.COUNTERCLOCKWISE:a=k(o,!0);break;default:a=t.behavior}return a.forEach(function(f,s){if(o!==f||a.length===s+1)return e;o=e.placement.split("-")[0],r=b(o);var p,l=e.offsets.popper,u=e.offsets.reference,c=Math.floor,d="left"===o&&c(l.right)>c(u.left)||"right"===o&&c(l.left)<c(u.right)||"top"===o&&c(l.bottom)>c(u.top)||"bottom"===o&&c(l.top)<c(u.bottom),h=c(l.left)<c(n.left),m=c(l.right)>c(n.right),g=c(l.top)<c(n.top),v=c(l.bottom)>c(n.bottom),y="left"===o&&h||"right"===o&&m||"top"===o&&g||"bottom"===o&&v,O=-1!==["top","bottom"].indexOf(o),x=!!t.flipVariations&&(O&&"start"===i&&h||O&&"end"===i&&m||!O&&"start"===i&&g||!O&&"end"===i&&v);(d||y||x)&&(e.flipped=!0,(d||y)&&(o=a[s+1]),x&&(i="end"===(p=i)?"start":"start"===p?"end":p),e.placement=o+(i?"-"+i:""),e.offsets.popper=Y({},e.offsets.popper,w(e.instance.popper,e.offsets.reference,e.placement)),e=E(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,a=-1!==["left","right"].indexOf(n),f=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=i[n]-(f?r[a?"width":"height"]:0),e.placement=b(t),e.offsets.popper=u(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!M(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=y(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,i=e.offsets.popper,a=y(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==a&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var f,s,p=void 0!==a?a:t.gpuAcceleration,l=c(r(e.instance.popper)),u={position:i.position},d={left:Math.floor(i.left),top:Math.floor(i.top),bottom:Math.floor(i.bottom),right:Math.floor(i.right)},h="bottom"===n?"top":"bottom",m="right"===o?"left":"right",g=x("transform");if(s="bottom"===h?-l.height+d.bottom:d.top,f="right"===m?-l.width+d.right:d.left,p&&g)u[g]="translate3d("+f+"px, "+s+"px, 0)",u[h]=0,u[m]=0,u.willChange="transform";else{var v="bottom"===h?-1:1,b="right"===m?-1:1;u[h]=s*v,u[m]=f*b,u.willChange=h+", "+m}var w={"x-placement":e.placement};return e.attributes=Y({},w,e.attributes),e.styles=Y({},u,e.styles),e.arrowStyles=Y({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return D(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&D(e.arrowElement,e.arrowStyles),e;var t,n},onLoad:function(e,t,n,o,r){var i=g(0,t,e),a=m(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),D(t,{position:"absolute"}),n},gpuAcceleration:void 0}}},G=function(){function t(n,o){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};F(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=A(this.update.bind(this)),this.options=Y({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n&&n.jquery?n[0]:n,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(Y({},t.Defaults.modifiers,i.modifiers)).forEach(function(e){r.options.modifiers[e]=Y({},t.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return Y({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)}),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return R(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=g(this.state,this.popper,this.reference),e.placement=m(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=w(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=E(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,O(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[x("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=T(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return N.call(this)}}]),t}();return G.Utils=("undefined"!=typeof window?window:global).PopperUtils,G.placements=q,G.Defaults=z,G});