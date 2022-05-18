import{S as L,i as F,s as V,e as M,k as T,c as C,a as w,m as O,d as x,U as ce,b as g,g as b,P as $,n as E,t as H,h as K,X as fe,Y as ne,w as se,Z as re,R as B,T as N,x as z,y as P,z as D,r as j,p as X,C as Y,_ as me,u as de}from"../../chunks/index-a0b1badf.js";import{I as A}from"../../chunks/Icon-33be8165.js";const R=Symbol();function J(y,n,i){const l=y.slice();return l[3]=n[i],l}function Q(y){let n,i,l,o,p;return{c(){n=M("div"),i=M("img"),p=T(),this.h()},l(m){n=C(m,"DIV",{class:!0});var u=w(n);i=C(u,"IMG",{src:!0,alt:!0,class:!0}),p=O(u),u.forEach(x),this.h()},h(){ce(i.src,l=y[3].logo)||g(i,"src",l),g(i,"alt",o=y[3].name),g(i,"class","w-full svelte-1swrunp"),g(n,"class","slide svelte-1swrunp")},m(m,u){b(m,n,u),$(n,i),$(n,p)},p:E,d(m){m&&x(n)}}}function he(y){let n,i,l,o,p,m=y[1],u=[];for(let d=0;d<m.length;d+=1)u[d]=Q(J(y,m,d));return{c(){n=M("div"),i=M("div");for(let d=0;d<u.length;d+=1)u[d].c();l=T(),o=M("div"),p=H("Description"),this.h()},l(d){n=C(d,"DIV",{class:!0});var f=w(n);i=C(f,"DIV",{class:!0});var h=w(i);for(let t=0;t<u.length;t+=1)u[t].l(h);h.forEach(x),l=O(f),o=C(f,"DIV",{class:!0});var s=w(o);p=K(s,"Description"),s.forEach(x),f.forEach(x),this.h()},h(){g(i,"class","slides svelte-1swrunp"),g(o,"class","description svelte-1swrunp"),g(n,"class","slider svelte-1swrunp")},m(d,f){b(d,n,f),$(n,i);for(let h=0;h<u.length;h+=1)u[h].m(i,null);y[2](i),$(n,l),$(n,o),$(o,p)},p(d,[f]){if(f&2){m=d[1];let h;for(h=0;h<m.length;h+=1){const s=J(d,m,h);u[h]?u[h].p(s,f):(u[h]=Q(s),u[h].c(),u[h].m(i,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=m.length}},i:E,o:E,d(d){d&&x(n),fe(u,d),y[2](null)}}}function pe(y,n,i){const l=ne(R);let o;se(()=>{const m=()=>{o&&(i(0,o.scrollLeft+=2,o),o.scrollWidth-o.clientWidth===o.scrollLeft&&i(0,o.scrollLeft=0,o)),requestAnimationFrame(m)};m()});function p(m){re[m?"unshift":"push"](()=>{o=m,i(0,o)})}return[o,l,p]}class ve extends L{constructor(n){super(),F(this,n,pe,he,V,{})}}var ge=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ae={exports:{}};/*!
 * TagCloud.js v2.2.0
 * Copyright (c) 2016-2021 @ Cong Min
 * MIT License - https://github.com/mcc108/TagCloud
 */(function(y,n){(function(i,l){y.exports=l()})(ge,function(){function i(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}function l(s,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(s,r.key,r)}}function o(s,t,e){return t&&l(s.prototype,t),e&&l(s,e),s}function p(s,t,e){return t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function m(){return m=Object.assign||function(s){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(s[r]=e[r])}return s},m.apply(this,arguments)}function u(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),e.push.apply(e,r)}return e}function d(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?u(Object(e),!0).forEach(function(r){p(s,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(e,r))})}return s}var f=function(){function s(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.body,e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;i(this,s);var a=this;if(!t||t.nodeType!==1)return new Error("Incorrect element type");a.$container=t,a.texts=e||[],a.config=d(d({},s._defaultConfig),r||{}),a.radius=a.config.radius,a.depth=2*a.radius,a.size=1.5*a.radius,a.maxSpeed=s._getMaxSpeed(a.config.maxSpeed),a.initSpeed=s._getInitSpeed(a.config.initSpeed),a.direction=a.config.direction,a.keep=a.config.keep,a.paused=!1,a._createElment(),a._init(),s.list.push({el:a.$el,container:t,instance:a})}return o(s,[{key:"_createElment",value:function(){var e=this,r=document.createElement("div");r.className=e.config.containerClass,e.config.useContainerInlineStyles&&(r.style.position="relative",r.style.width="".concat(2*e.radius,"px"),r.style.height="".concat(2*e.radius,"px")),e.items=[],e.texts.forEach(function(a,c){var _=e._createTextItem(a,c);r.appendChild(_.el),e.items.push(_)}),e.$container.appendChild(r),e.$el=r}},{key:"_createTextItem",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=this,c=document.createElement("span");if(c.className=a.config.itemClass,a.config.useItemInlineStyles){c.style.willChange="transform, opacity, filter",c.style.position="absolute",c.style.top="50%",c.style.left="50%",c.style.zIndex=r+1,c.style.filter="alpha(opacity=0)",c.style.opacity=0;var _="50% 50%";c.style.WebkitTransformOrigin=_,c.style.MozTransformOrigin=_,c.style.OTransformOrigin=_,c.style.transformOrigin=_;var v="translate3d(-50%, -50%, 0) scale(1)";c.style.WebkitTransform=v,c.style.MozTransform=v,c.style.OTransform=v,c.style.transform=v}return c.innerText=e,d({el:c},a._computePosition(r))}},{key:"_computePosition",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=this,c=a.texts.length;r&&(e=Math.floor(Math.random()*(c+1)));var _=Math.acos(-1+(2*e+1)/c),v=Math.sqrt((c+1)*Math.PI)*_;return{x:a.size*Math.cos(v)*Math.sin(_)/2,y:a.size*Math.sin(v)*Math.sin(_)/2,z:a.size*Math.cos(_)/2}}},{key:"_requestInterval",value:function(e,r){var a=function(){return window.requestAnimationFrame}(),c=new Date().getTime(),_={};function v(){_.value=a(v);var I=new Date().getTime(),k=I-c;k>=r&&(e.call(),c=new Date().getTime())}return _.value=a(v),_}},{key:"_init",value:function(){var e=this;e.active=!1,e.mouseX0=e.initSpeed*Math.sin(e.direction*(Math.PI/180)),e.mouseY0=-e.initSpeed*Math.cos(e.direction*(Math.PI/180)),e.mouseX=e.mouseX0,e.mouseY=e.mouseY0,s._on(e.$el,"mouseover",function(){e.active=!0}),s._on(e.$el,"mouseout",function(){e.active=!1}),s._on(e.keep?window:e.$el,"mousemove",function(r){r=r||window.event;var a=e.$el.getBoundingClientRect();e.mouseX=(r.clientX-(a.left+a.width/2))/5,e.mouseY=(r.clientY-(a.top+a.height/2))/5}),e._next(),e.interval=e._requestInterval(function(){e._next.call(e)},10)}},{key:"_next",value:function(){var e=this;if(!e.paused){!e.keep&&!e.active&&(e.mouseX=Math.abs(e.mouseX-e.mouseX0)<1?e.mouseX0:(e.mouseX+e.mouseX0)/2,e.mouseY=Math.abs(e.mouseY-e.mouseY0)<1?e.mouseY0:(e.mouseY+e.mouseY0)/2);var r=-(Math.min(Math.max(-e.mouseY,-e.size),e.size)/e.radius)*e.maxSpeed,a=Math.min(Math.max(-e.mouseX,-e.size),e.size)/e.radius*e.maxSpeed;if(!(Math.abs(r)<=.01&&Math.abs(a)<=.01)){var c=Math.PI/180,_=[Math.sin(r*c),Math.cos(r*c),Math.sin(a*c),Math.cos(a*c)];e.items.forEach(function(v){var I=v.x,k=v.y*_[1]+v.z*-_[0],U=v.y*_[0]+v.z*_[1],ie=I*_[3]+U*_[2],le=k,Z=U*_[3]-I*_[2],G=2*e.depth/(2*e.depth+Z);v.x=ie,v.y=le,v.z=Z,v.scale=G.toFixed(3);var q=G*G-.25;q=(q>1?1:q).toFixed(3);var S=v.el,oe=(v.x-S.offsetWidth/2).toFixed(2),ue=(v.y-S.offsetHeight/2).toFixed(2),W="translate3d(".concat(oe,"px, ").concat(ue,"px, 0) scale(").concat(v.scale,")");S.style.WebkitTransform=W,S.style.MozTransform=W,S.style.OTransform=W,S.style.transform=W,S.style.filter="alpha(opacity=".concat(100*q,")"),S.style.opacity=q})}}}},{key:"update",value:function(e){var r=this;r.texts=e||[],r.texts.forEach(function(v,I){var k=r.items[I];k||(k=r._createTextItem(v,I),m(k,r._computePosition(I,!0)),r.$el.appendChild(k.el),r.items.push(k)),k.el.innerText=v});var a=r.texts.length,c=r.items.length;if(a<c){var _=r.items.splice(a,c-a);_.forEach(function(v){r.$el.removeChild(v.el)})}}},{key:"destroy",value:function(){var e=this;e.interval=null;var r=s.list.findIndex(function(a){return a.el===e.$el});r!==-1&&s.list.splice(r,1),e.$container&&e.$el&&e.$container.removeChild(e.$el)}},{key:"pause",value:function(){var e=this;e.paused=!0}},{key:"resume",value:function(){var e=this;e.paused=!1}}],[{key:"_on",value:function(e,r,a,c){e.addEventListener?e.addEventListener(r,a,c):e.attachEvent?e.attachEvent("on".concat(r),a):e["on".concat(r)]=a}}]),s}();f.list=[],f._defaultConfig={radius:100,maxSpeed:"normal",initSpeed:"normal",direction:135,keep:!0,useContainerInlineStyles:!0,useItemInlineStyles:!0,containerClass:"tagcloud",itemClass:"tagcloud--item"},f._getMaxSpeed=function(s){return{slow:.5,normal:1,fast:2}[s]||1},f._getInitSpeed=function(s){return{slow:16,normal:32,fast:80}[s]||32};var h=function(s,t,e){typeof s=="string"&&(s=document.querySelectorAll(s)),s.forEach||(s=[s]);var r=[];return s.forEach(function(a){a&&r.push(new f(a,t,e))}),r.length<=1?r[0]:r};return h})})(ae);var _e=ae.exports;function ye(y){let n,i;return{c(){n=B("svg"),i=B("path"),this.h()},l(l){n=N(l,"svg",{xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var o=w(n);i=N(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),w(i).forEach(x),o.forEach(x),this.h()},h(){g(i,"stroke-linecap","round"),g(i,"stroke-linejoin","round"),g(i,"d","M19 9l-7 7-7-7"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"fill","none"),g(n,"viewBox","0 0 24 24"),g(n,"stroke","currentColor"),g(n,"stroke-width","1")},m(l,o){b(l,n,o),$(n,i)},p:E,i:E,o:E,d(l){l&&x(n)}}}class ee extends L{constructor(n){super(),F(this,n,null,ye,V,{})}}function xe(y){let n,i;return{c(){n=B("svg"),i=B("path"),this.h()},l(l){n=N(l,"svg",{xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0});var o=w(n);i=N(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),w(i).forEach(x),o.forEach(x),this.h()},h(){g(i,"stroke-linecap","round"),g(i,"stroke-linejoin","round"),g(i,"d","M5 15l7-7 7 7"),g(n,"xmlns","http://www.w3.org/2000/svg"),g(n,"fill","none"),g(n,"viewBox","0 0 24 24"),g(n,"stroke","currentColor"),g(n,"stroke-width","1")},m(l,o){b(l,n,o),$(n,i)},p:E,i:E,o:E,d(l){l&&x(n)}}}class te extends L{constructor(n){super(),F(this,n,null,xe,V,{})}}function $e(y){let n,i,l,o,p,m,u,d,f,h;return l=new A({props:{icon:te,size:"l",class:"-rotate-45 translate-y-1 translate-x-1 left-0 top-0 icon"}}),p=new A({props:{icon:te,size:"l",class:"rotate-45 translate-y-1 -translate-x-1 right-0 top-0 icon"}}),u=new A({props:{icon:ee,size:"l",class:"rotate-45 -translate-y-1 translate-x-1 left-0 bottom-0 icon"}}),f=new A({props:{icon:ee,size:"l",class:"-rotate-45 -translate-y-1 -translate-x-1 right-0 bottom-0 icon"}}),{c(){n=M("div"),i=M("div"),z(l.$$.fragment),o=T(),z(p.$$.fragment),m=T(),z(u.$$.fragment),d=T(),z(f.$$.fragment),this.h()},l(s){n=C(s,"DIV",{class:!0,tabindex:!0});var t=w(n);i=C(t,"DIV",{class:!0});var e=w(i);P(l.$$.fragment,e),o=O(e),P(p.$$.fragment,e),m=O(e),P(u.$$.fragment,e),d=O(e),P(f.$$.fragment,e),e.forEach(x),t.forEach(x),this.h()},h(){g(i,"class","overlay svelte-1svzjf9"),g(n,"class","tagcloud max-w-[500px] mx-auto my-5 relative overflow-hidden md:overflow-visible"),g(n,"tabindex","0")},m(s,t){b(s,n,t),$(n,i),D(l,i,null),$(i,o),D(p,i,null),$(i,m),D(u,i,null),$(i,d),D(f,i,null),y[1](n),h=!0},p:E,i(s){h||(j(l.$$.fragment,s),j(p.$$.fragment,s),j(u.$$.fragment,s),j(f.$$.fragment,s),h=!0)},o(s){X(l.$$.fragment,s),X(p.$$.fragment,s),X(u.$$.fragment,s),X(f.$$.fragment,s),h=!1},d(s){s&&x(n),Y(l),Y(p),Y(u),Y(f),y[1](null)}}}function we(y,n,i){let l;const o=u=>{u.target.className==="tagcloud--item"&&alert(u.target.innerText)},p=ne(R);se(()=>{const u=p.map(f=>f.name),d={radius:l.clientWidth/2,keep:!1,initSpeed:"fast",maxSpeed:"fast"};_e(l,u,d),document.addEventListener("click",o)}),me(()=>{document.removeEventListener("click",o)});function m(u){re[u?"unshift":"push"](()=>{l=u,i(0,l)})}return[l,m]}class ke extends L{constructor(n){super(),F(this,n,we,$e,V,{})}}function be(y){let n,i,l,o,p,m,u,d,f,h,s;return p=new ke({}),u=new ve({}),{c(){n=M("h1"),i=H("Skills"),l=T(),o=M("div"),z(p.$$.fragment),m=T(),z(u.$$.fragment),d=T(),f=M("a"),h=H("next"),this.h()},l(t){n=C(t,"H1",{});var e=w(n);i=K(e,"Skills"),e.forEach(x),l=O(t),o=C(t,"DIV",{class:!0});var r=w(o);P(p.$$.fragment,r),r.forEach(x),m=O(t),P(u.$$.fragment,t),d=O(t),f=C(t,"A",{"sveltekit:prefetch":!0,href:!0});var a=w(f);h=K(a,"next"),a.forEach(x),this.h()},h(){g(o,"class","w-full mt-5"),g(f,"sveltekit:prefetch",""),g(f,"href","/private")},m(t,e){b(t,n,e),$(n,i),b(t,l,e),b(t,o,e),D(p,o,null),b(t,m,e),D(u,t,e),b(t,d,e),b(t,f,e),$(f,h),s=!0},p:E,i(t){s||(j(p.$$.fragment,t),j(u.$$.fragment,t),s=!0)},o(t){X(p.$$.fragment,t),X(u.$$.fragment,t),s=!1},d(t){t&&x(n),t&&x(l),t&&x(o),Y(p),t&&x(m),Y(u,t),t&&x(d),t&&x(f)}}}function Ee(y,n,i){let{skills:l}=n;return de(R,l),y.$$set=o=>{"skills"in o&&i(0,l=o.skills)},[l]}class Ie extends L{constructor(n){super(),F(this,n,Ee,be,V,{skills:0})}}export{Ie as default};