var Bh=Object.defineProperty;var al=Object.getOwnPropertySymbols;var zh=Object.prototype.hasOwnProperty,Uh=Object.prototype.propertyIsEnumerable;var ll=(i,e,t)=>e in i?Bh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,$s=(i,e)=>{for(var t in e||(e={}))zh.call(e,t)&&ll(i,t,e[t]);if(al)for(var t of al(e))Uh.call(e,t)&&ll(i,t,e[t]);return i};function lt(){}const Ni=i=>i;function Kc(i,e){for(const t in e)i[t]=e[t];return i}function Qc(i){return i&&typeof i=="object"&&typeof i.then=="function"}function kh(i,e,t,n,r){i.__svelte_meta={loc:{file:e,line:t,column:n,char:r}}}function Ss(i){return i()}function fs(){return Object.create(null)}function Ot(i){i.forEach(Ss)}function An(i){return typeof i=="function"}function Cn(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let Lr;function Hh(i,e){return Lr||(Lr=document.createElement("a")),Lr.href=e,i===Lr.href}function Vh(i,e){return i!=i?e==e:i!==e}function fa(i){return Object.keys(i).length===0}function Gh(i,e){if(i!=null&&typeof i.subscribe!="function")throw new Error(`'${e}' is not a store with a 'subscribe' method`)}function Es(i,...e){if(i==null)return lt;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function $c(i){let e;return Es(i,t=>e=t)(),e}function Wh(i,e,t){i.$$.on_destroy.push(Es(e,t))}function pa(i,e,t,n){if(i){const r=eu(i,e,t,n);return i[0](r)}}function eu(i,e,t,n){return i[1]&&n?Kc(t.ctx.slice(),i[1](n(e))):t.ctx}function Ts(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function As(i,e,t,n,r,s){if(r){const o=eu(e,t,n,s);i.p(o,r)}}function qh(i,e,t,n,r,s,o){const a=Ts(e,n,r,s);As(i,e,t,n,a,o)}function ma(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function jh(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function Xh(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function Yh(i){const e={};for(const t in i)e[t]=!0;return e}function Zh(i){let e=!1;return function(...t){e||(e=!0,i.call(this,...t))}}function Jh(i){return i==null?"":i}function Kh(i,e,t){return i.set(t),e}const tu=(i,e)=>Object.prototype.hasOwnProperty.call(i,e);function Qh(i){return i&&An(i.destroy)?i.destroy:lt}const ga=typeof window!="undefined";let Oi=ga?()=>window.performance.now():()=>Date.now(),vr=ga?i=>requestAnimationFrame(i):lt;function $h(i){Oi=i}function ed(i){vr=i}const kn=new Set;function nu(i){kn.forEach(e=>{e.c(i)||(kn.delete(e),e.f())}),kn.size!==0&&vr(nu)}function td(){kn.clear()}function br(i){let e;return kn.size===0&&vr(nu),{promise:new Promise(t=>{kn.add(e={c:i,f:t})}),abort(){kn.delete(e)}}}let Cs=!1;function iu(){Cs=!0}function ru(){Cs=!1}function nd(i,e,t,n){for(;i<e;){const r=i+(e-i>>1);t(r)<=n?i=r+1:e=r}return i}function id(i){if(i.hydrate_init)return;i.hydrate_init=!0;let e=i.childNodes;if(i.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const u=e[l];u.claim_order!==void 0&&c.push(u)}e=c}const t=new Int32Array(e.length+1),n=new Int32Array(e.length);t[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,u=(r>0&&e[t[r]].claim_order<=l?r+1:nd(1,r,d=>e[t[d]].claim_order,l))-1;n[c]=t[u]+1;const h=u+1;t[h]=c,r=Math.max(h,r)}const s=[],o=[];let a=e.length-1;for(let c=t[r]+1;c!=0;c=n[c-1]){for(s.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<s.length&&o[c].claim_order>=s[l].claim_order;)l++;const u=l<s.length?s[l]:null;i.insertBefore(o[c],u)}}function Ls(i,e){i.appendChild(e)}function rd(i,e,t){const n=Rs(i);if(!n.getElementById(e)){const r=Mn("style");r.id=e,r.textContent=t,ou(n,r)}}function Rs(i){if(!i)return document;const e=i.getRootNode?i.getRootNode():i.ownerDocument;return e&&e.host?e:i.ownerDocument}function su(i){const e=Mn("style");return ou(Rs(i),e),e.sheet}function ou(i,e){Ls(i.head||i,e)}function ar(i,e){if(Cs){for(id(i),(i.actual_end_child===void 0||i.actual_end_child!==null&&i.actual_end_child.parentElement!==i)&&(i.actual_end_child=i.firstChild);i.actual_end_child!==null&&i.actual_end_child.claim_order===void 0;)i.actual_end_child=i.actual_end_child.nextSibling;e!==i.actual_end_child?(e.claim_order!==void 0||e.parentNode!==i)&&i.insertBefore(e,i.actual_end_child):i.actual_end_child=e.nextSibling}else(e.parentNode!==i||e.nextSibling!==null)&&i.appendChild(e)}function _a(i,e,t){i.insertBefore(e,t||null)}function Ps(i,e,t){Cs&&!t?ar(i,e):(e.parentNode!==i||e.nextSibling!=t)&&i.insertBefore(e,t||null)}function jt(i){i.parentNode.removeChild(i)}function sd(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function Mn(i){return document.createElement(i)}function od(i,e){return document.createElement(i,{is:e})}function ad(i,e){const t={};for(const n in i)tu(i,n)&&e.indexOf(n)===-1&&(t[n]=i[n]);return t}function au(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Ds(i){return document.createTextNode(i)}function lu(){return Ds(" ")}function ld(){return Ds("")}function lr(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function cd(i){return function(e){return e.preventDefault(),i.call(this,e)}}function ud(i){return function(e){return e.stopPropagation(),i.call(this,e)}}function hd(i){return function(e){e.target===this&&i.call(this,e)}}function dd(i){return function(e){e.isTrusted&&i.call(this,e)}}function Gn(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function fd(i,e){const t=Object.getOwnPropertyDescriptors(i.__proto__);for(const n in e)e[n]==null?i.removeAttribute(n):n==="style"?i.style.cssText=e[n]:n==="__value"?i.value=i[n]=e[n]:t[n]&&t[n].set?i[n]=e[n]:Gn(i,n,e[n])}function pd(i,e){for(const t in e)Gn(i,t,e[t])}function md(i,e,t){e in i?i[e]=typeof i[e]=="boolean"&&t===""?!0:t:Gn(i,e,t)}function gd(i,e,t){i.setAttributeNS("http://www.w3.org/1999/xlink",e,t)}function _d(i,e,t){const n=new Set;for(let r=0;r<i.length;r+=1)i[r].checked&&n.add(i[r].__value);return t||n.delete(e),Array.from(n)}function xd(i){return i===""?null:+i}function yd(i){const e=[];for(let t=0;t<i.length;t+=1)e.push({start:i.start(t),end:i.end(t)});return e}function ps(i){return Array.from(i.childNodes)}function cu(i){i.claim_info===void 0&&(i.claim_info={last_index:0,total_claimed:0})}function uu(i,e,t,n,r=!1){cu(i);const s=(()=>{for(let o=i.claim_info.last_index;o<i.length;o++){const a=i[o];if(e(a)){const c=t(a);return c===void 0?i.splice(o,1):i[o]=c,r||(i.claim_info.last_index=o),a}}for(let o=i.claim_info.last_index-1;o>=0;o--){const a=i[o];if(e(a)){const c=t(a);return c===void 0?i.splice(o,1):i[o]=c,r?c===void 0&&i.claim_info.last_index--:i.claim_info.last_index=o,a}}return n()})();return s.claim_order=i.claim_info.total_claimed,i.claim_info.total_claimed+=1,s}function hu(i,e,t,n){return uu(i,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const a=r.attributes[o];t[a.name]||s.push(a.name)}s.forEach(o=>r.removeAttribute(o))},()=>n(e))}function jo(i,e,t){return hu(i,e,t,Mn)}function vd(i,e,t){return hu(i,e,t,au)}function du(i,e){return uu(i,t=>t.nodeType===3,t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n},()=>Ds(e),!0)}function fu(i){return du(i," ")}function cl(i,e,t){for(let n=t;n<i.length;n+=1){const r=i[n];if(r.nodeType===8&&r.textContent.trim()===e)return n}return i.length}function bd(i){const e=cl(i,"HTML_TAG_START",0),t=cl(i,"HTML_TAG_END",e);if(e===t)return new Xo;cu(i);const n=i.splice(e,t-e+1);jt(n[0]),jt(n[n.length-1]);const r=n.slice(1,n.length-1);for(const s of r)s.claim_order=i.claim_info.total_claimed,i.claim_info.total_claimed+=1;return new Xo(r)}function Md(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function wd(i,e){i.value=e==null?"":e}function Sd(i,e){try{i.type=e}catch{}}function Ed(i,e,t,n){t===null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function Td(i,e){for(let t=0;t<i.options.length;t+=1){const n=i.options[t];if(n.__value===e){n.selected=!0;return}}i.selectedIndex=-1}function Ad(i,e){for(let t=0;t<i.options.length;t+=1){const n=i.options[t];n.selected=~e.indexOf(n.__value)}}function Cd(i){const e=i.querySelector(":checked")||i.options[0];return e&&e.__value}function Ld(i){return[].map.call(i.querySelectorAll(":checked"),e=>e.__value)}let Rr;function pu(){if(Rr===void 0){Rr=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{Rr=!0}}return Rr}function Rd(i,e){getComputedStyle(i).position==="static"&&(i.style.position="relative");const n=Mn("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=pu();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=lr(window,"message",o=>{o.source===n.contentWindow&&e()})):(n.src="about:blank",n.onload=()=>{s=lr(n.contentWindow,"resize",e)}),Ls(i,n),()=>{(r||s&&n.contentWindow)&&s(),jt(n)}}function Pd(i,e,t){i.classList[t?"add":"remove"](e)}function Is(i,e,t=!1){const n=document.createEvent("CustomEvent");return n.initCustomEvent(i,t,!1,e),n}function Dd(i,e=document.body){return Array.from(e.querySelectorAll(i))}class mu{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=Mn(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)_a(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(jt)}}class Xo extends mu{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)Ps(this.t,this.n[t],e)}}function Id(i){const e={};for(const t of i)e[t.name]=t.value;return e}function Fd(i){const e={};return i.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}const ms=new Map;let gs=0;function Nd(i){let e=5381,t=i.length;for(;t--;)e=(e<<5)-e^i.charCodeAt(t);return e>>>0}function Od(i,e){const t={stylesheet:su(e),rules:{}};return ms.set(i,t),t}function cr(i,e,t,n,r,s,o,a=0){const c=16.666/n;let l=`{
`;for(let x=0;x<=1;x+=c){const m=e+(t-e)*s(x);l+=x*100+`%{${o(m,1-m)}}
`}const u=l+`100% {${o(t,1-t)}}
}`,h=`__svelte_${Nd(u)}_${a}`,d=Rs(i),{stylesheet:f,rules:g}=ms.get(d)||Od(d,i);g[h]||(g[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const _=i.style.animation||"";return i.style.animation=`${_?`${_}, `:""}${h} ${n}ms linear ${r}ms 1 both`,gs+=1,h}function ur(i,e){const t=(i.style.animation||"").split(", "),n=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=t.length-n.length;r&&(i.style.animation=n.join(", "),gs-=r,gs||Bd())}function Bd(){vr(()=>{gs||(ms.forEach(i=>{const{stylesheet:e}=i;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);i.rules={}}),ms.clear())})}function zd(i,e,t,n){if(!e)return lt;const r=i.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return lt;const{delay:s=0,duration:o=300,easing:a=Ni,start:c=Oi()+s,end:l=c+o,tick:u=lt,css:h}=t(i,{from:e,to:r},n);let d=!0,f=!1,g;function _(){h&&(g=cr(i,0,1,o,s,a,h)),s||(f=!0)}function x(){h&&ur(i,g),d=!1}return br(m=>{if(!f&&m>=c&&(f=!0),f&&m>=l&&(u(1,0),x()),!d)return!1;if(f){const p=m-c,T=0+1*a(p/o);u(T,1-T)}return!0}),_(),u(0,1),x}function Ud(i){const e=getComputedStyle(i);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:n}=e,r=i.getBoundingClientRect();i.style.position="absolute",i.style.width=t,i.style.height=n,gu(i,r)}}function gu(i,e){const t=i.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const n=getComputedStyle(i),r=n.transform==="none"?"":n.transform;i.style.transform=`${r} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Wn;function Ct(i){Wn=i}function Bt(){if(!Wn)throw new Error("Function called outside component initialization");return Wn}function kd(i){Bt().$$.before_update.push(i)}function xa(i){Bt().$$.on_mount.push(i)}function Hd(i){Bt().$$.after_update.push(i)}function ya(i){Bt().$$.on_destroy.push(i)}function _u(){const i=Bt();return(e,t)=>{const n=i.$$.callbacks[e];if(n){const r=Is(e,t);n.slice().forEach(s=>{s.call(i,r)})}}}function va(i,e){Bt().$$.context.set(i,e)}function Yo(i){return Bt().$$.context.get(i)}function Vd(){return Bt().$$.context}function Gd(i){return Bt().$$.context.has(i)}function Wd(i,e){const t=i.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const vi=[],qd={enabled:!1},hr=[],us=[],Zo=[],xu=Promise.resolve();let Jo=!1;function ba(){Jo||(Jo=!0,xu.then(Fs))}function jd(){return ba(),xu}function qn(i){us.push(i)}function Xd(i){Zo.push(i)}const eo=new Set;let Pr=0;function Fs(){const i=Wn;do{for(;Pr<vi.length;){const e=vi[Pr];Pr++,Ct(e),Yd(e.$$)}for(Ct(null),vi.length=0,Pr=0;hr.length;)hr.pop()();for(let e=0;e<us.length;e+=1){const t=us[e];eo.has(t)||(eo.add(t),t())}us.length=0}while(vi.length);for(;Zo.length;)Zo.pop()();Jo=!1,eo.clear(),Ct(i)}function Yd(i){if(i.fragment!==null){i.update(),Ot(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(qn)}}let Xi;function Ma(){return Xi||(Xi=Promise.resolve(),Xi.then(()=>{Xi=null})),Xi}function Hn(i,e,t){i.dispatchEvent(Is(`${e?"intro":"outro"}${t}`))}const hs=new Set;let Wt;function wa(){Wt={r:0,c:[],p:Wt}}function Sa(){Wt.r||Ot(Wt.c),Wt=Wt.p}function on(i,e){i&&i.i&&(hs.delete(i),i.i(e))}function jn(i,e,t,n){if(i&&i.o){if(hs.has(i))return;hs.add(i),Wt.c.push(()=>{hs.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}}const Ea={duration:0};function Zd(i,e,t){let n=e(i,t),r=!1,s,o,a=0;function c(){s&&ur(i,s)}function l(){const{delay:h=0,duration:d=300,easing:f=Ni,tick:g=lt,css:_}=n||Ea;_&&(s=cr(i,0,1,d,h,f,_,a++)),g(0,1);const x=Oi()+h,m=x+d;o&&o.abort(),r=!0,qn(()=>Hn(i,!0,"start")),o=br(p=>{if(r){if(p>=m)return g(1,0),Hn(i,!0,"end"),c(),r=!1;if(p>=x){const T=f((p-x)/d);g(T,1-T)}}return r})}let u=!1;return{start(){u||(u=!0,ur(i),An(n)?(n=n(),Ma().then(l)):l())},invalidate(){u=!1},end(){r&&(c(),r=!1)}}}function Jd(i,e,t){let n=e(i,t),r=!0,s;const o=Wt;o.r+=1;function a(){const{delay:c=0,duration:l=300,easing:u=Ni,tick:h=lt,css:d}=n||Ea;d&&(s=cr(i,1,0,l,c,u,d));const f=Oi()+c,g=f+l;qn(()=>Hn(i,!1,"start")),br(_=>{if(r){if(_>=g)return h(0,1),Hn(i,!1,"end"),--o.r||Ot(o.c),!1;if(_>=f){const x=u((_-f)/l);h(1-x,x)}}return r})}return An(n)?Ma().then(()=>{n=n(),a()}):a(),{end(c){c&&n.tick&&n.tick(1,0),r&&(s&&ur(i,s),r=!1)}}}function Kd(i,e,t,n){let r=e(i,t),s=n?0:1,o=null,a=null,c=null;function l(){c&&ur(i,c)}function u(d,f){const g=d.b-s;return f*=Math.abs(g),{a:s,b:d.b,d:g,duration:f,start:d.start,end:d.start+f,group:d.group}}function h(d){const{delay:f=0,duration:g=300,easing:_=Ni,tick:x=lt,css:m}=r||Ea,p={start:Oi()+f,b:d};d||(p.group=Wt,Wt.r+=1),o||a?a=p:(m&&(l(),c=cr(i,s,d,g,f,_,m)),d&&x(0,1),o=u(p,g),qn(()=>Hn(i,d,"start")),br(T=>{if(a&&T>a.start&&(o=u(a,g),a=null,Hn(i,o.b,"start"),m&&(l(),c=cr(i,s,o.b,o.duration,0,_,r.css))),o){if(T>=o.end)x(s=o.b,1-s),Hn(i,o.b,"end"),a||(o.b?l():--o.group.r||Ot(o.group.c)),o=null;else if(T>=o.start){const M=T-o.start;s=o.a+o.d*_(M/o.duration),x(s,1-s)}}return!!(o||a)}))}return{run(d){An(r)?Ma().then(()=>{r=r(),h(d)}):h(d)},end(){l(),o=a=null}}}function Qd(i,e){const t=e.token={};function n(r,s,o,a){if(e.token!==t)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==s&&h&&(wa(),jn(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),Sa())}):e.block.d(1),l.c(),on(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[s]=l),u&&Fs()}if(Qc(i)){const r=Bt();if(i.then(s=>{Ct(r),n(e.then,1,e.value,s),Ct(null)},s=>{if(Ct(r),n(e.catch,2,e.error,s),Ct(null),!e.hasCatch)throw s}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,i),!0;e.resolved=i}}function $d(i,e,t){const n=e.slice(),{resolved:r}=i;i.current===i.then&&(n[i.value]=r),i.current===i.catch&&(n[i.error]=r),i.block.p(n,t)}const ef=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function yu(i,e){i.d(1),e.delete(i.key)}function vu(i,e){jn(i,1,1,()=>{e.delete(i.key)})}function tf(i,e){i.f(),yu(i,e)}function nf(i,e){i.f(),vu(i,e)}function rf(i,e,t,n,r,s,o,a,c,l,u,h){let d=i.length,f=s.length,g=d;const _={};for(;g--;)_[i[g].key]=g;const x=[],m=new Map,p=new Map;for(g=f;g--;){const D=h(r,s,g),I=t(D);let G=o.get(I);G?n&&G.p(D,e):(G=l(I,D),G.c()),m.set(I,x[g]=G),I in _&&p.set(I,Math.abs(g-_[I]))}const T=new Set,M=new Set;function v(D){on(D,1),D.m(a,u),o.set(D.key,D),u=D.first,f--}for(;d&&f;){const D=x[f-1],I=i[d-1],G=D.key,se=I.key;D===I?(u=D.first,d--,f--):m.has(se)?!o.has(G)||T.has(G)?v(D):M.has(se)?d--:p.get(G)>p.get(se)?(M.add(G),v(D)):(T.add(se),d--):(c(I,o),d--)}for(;d--;){const D=i[d];m.has(D.key)||c(D,o)}for(;f;)v(x[f-1]);return x}function sf(i,e,t,n){const r=new Set;for(let s=0;s<e.length;s++){const o=n(t(i,e,s));if(r.has(o))throw new Error("Cannot have duplicate keys in a keyed each");r.add(o)}}function of(i,e){const t={},n={},r={$$scope:1};let s=i.length;for(;s--;){const o=i[s],a=e[s];if(a){for(const c in o)c in a||(n[c]=1);for(const c in a)r[c]||(t[c]=a[c],r[c]=1);i[s]=a}else for(const c in o)r[c]=1}for(const o in n)o in t||(t[o]=void 0);return t}function af(i){return typeof i=="object"&&i!==null?i:{}}const bu=new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),Mu=/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;function lf(i,e){const t=Object.assign({},...i);if(e){const r=e.classes,s=e.styles;r&&(t.class==null?t.class=r:t.class+=" "+r),s&&(t.style==null?t.style=Ko(s):t.style=Ko(wu(t.style,s)))}let n="";return Object.keys(t).forEach(r=>{if(Mu.test(r))return;const s=t[r];s===!0?n+=" "+r:bu.has(r.toLowerCase())?s&&(n+=" "+r):s!=null&&(n+=` ${r}="${s}"`)}),n}function wu(i,e){const t={};for(const n of i.split(";")){const r=n.indexOf(":"),s=n.slice(0,r).trim(),o=n.slice(r+1).trim();!s||(t[s]=o)}for(const n in e){const r=e[n];r?t[n]=r:delete t[n]}return t}const Su={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function Ta(i){return String(i).replace(/["'&<>]/g,e=>Su[e])}function Eu(i){return typeof i=="string"?Ta(i):i}function cf(i){const e={};for(const t in i)e[t]=Eu(i[t]);return e}function uf(i,e){let t="";for(let n=0;n<i.length;n+=1)t+=e(i[n],n);return t}const hf={$$render:()=>""};function df(i,e){if(!i||!i.$$render)throw e==="svelte:component"&&(e+=" this={...}"),new Error(`<${e}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);return i}function ff(i,e,t,n){return console.log(`{@debug} ${i?i+" ":""}(${e}:${t})`),console.log(n),""}let to;function pf(i){function e(t,n,r,s,o){const a=Wn,c={on_destroy:to,context:new Map(o||(a?a.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:fs()};Ct({$$:c});const l=i(t,n,r,s);return Ct(a),l}return{render:(t={},{$$slots:n={},context:r=new Map}={})=>{to=[];const s={title:"",head:"",css:new Set},o=e(s,t,{},n,r);return Ot(to),{html:o,css:{code:Array.from(s.css).map(a=>a.code).join(`
`),map:null},head:s.title+s.head}},$$render:e}}function mf(i,e,t){return e==null||t&&!e?"":` ${i}${e===!0&&bu.has(i)?"":`=${typeof e=="string"?JSON.stringify(Ta(e)):`"${e}"`}`}`}function gf(i){return i?` class="${i}"`:""}function Ko(i){return Object.keys(i).filter(e=>i[e]).map(e=>`${e}: ${i[e]};`).join(" ")}function _f(i){const e=Ko(i);return e?` style="${e}"`:""}function xf(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function yf(i){i&&i.c()}function vf(i,e){i&&i.l(e)}function Tu(i,e,t,n){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=i.$$;r&&r.m(e,t),n||qn(()=>{const c=s.map(Ss).filter(An);o?o.push(...c):Ot(c),i.$$.on_mount=[]}),a.forEach(qn)}function Aa(i,e){const t=i.$$;t.fragment!==null&&(Ot(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function bf(i,e){i.$$.dirty[0]===-1&&(vi.push(i),ba(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function Yn(i,e,t,n,r,s,o,a=[-1]){const c=Wn;Ct(i);const l=i.$$={fragment:null,ctx:null,props:s,update:lt,not_equal:r,bound:fs(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:fs(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=t?t(i,e.props||{},(h,d,...f)=>{const g=f.length?f[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=g)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](g),u&&bf(i,h)),d}):[],l.update(),u=!0,Ot(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){iu();const h=ps(e.target);l.fragment&&l.fragment.l(h),h.forEach(jt)}else l.fragment&&l.fragment.c();e.intro&&on(i.$$.fragment),Tu(i,e.target,e.anchor,e.customElement),ru(),Fs()}Ct(c)}let Au;typeof HTMLElement=="function"&&(Au=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:i}=this.$$;this.$$.on_disconnect=i.map(Ss).filter(An);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(i,e,t){this[i]=t}disconnectedCallback(){Ot(this.$$.on_disconnect)}$destroy(){Aa(this,1),this.$destroy=lt}$on(i,e){const t=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return t.push(e),()=>{const n=t.indexOf(e);n!==-1&&t.splice(n,1)}}$set(i){this.$$set&&!fa(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}});class Ln{$destroy(){Aa(this,1),this.$destroy=lt}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!fa(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Tt(i,e){document.dispatchEvent(Is(i,Object.assign({version:"3.46.4"},e),!0))}function Mf(i,e){Tt("SvelteDOMInsert",{target:i,node:e}),Ls(i,e)}function wf(i,e){Tt("SvelteDOMInsert",{target:i,node:e}),ar(i,e)}function Sf(i,e,t){Tt("SvelteDOMInsert",{target:i,node:e,anchor:t}),_a(i,e,t)}function Ef(i,e,t){Tt("SvelteDOMInsert",{target:i,node:e,anchor:t}),Ps(i,e,t)}function Ns(i){Tt("SvelteDOMRemove",{node:i}),jt(i)}function Tf(i,e){for(;i.nextSibling&&i.nextSibling!==e;)Ns(i.nextSibling)}function Af(i){for(;i.previousSibling;)Ns(i.previousSibling)}function Cf(i){for(;i.nextSibling;)Ns(i.nextSibling)}function Lf(i,e,t,n,r,s){const o=n===!0?["capture"]:n?Array.from(Object.keys(n)):[];r&&o.push("preventDefault"),s&&o.push("stopPropagation"),Tt("SvelteDOMAddEventListener",{node:i,event:e,handler:t,modifiers:o});const a=lr(i,e,t,n);return()=>{Tt("SvelteDOMRemoveEventListener",{node:i,event:e,handler:t,modifiers:o}),a()}}function Rf(i,e,t){Gn(i,e,t),t==null?Tt("SvelteDOMRemoveAttribute",{node:i,attribute:e}):Tt("SvelteDOMSetAttribute",{node:i,attribute:e,value:t})}function Pf(i,e,t){i[e]=t,Tt("SvelteDOMSetProperty",{node:i,property:e,value:t})}function Df(i,e,t){i.dataset[e]=t,Tt("SvelteDOMSetDataset",{node:i,property:e,value:t})}function If(i,e){e=""+e,i.wholeText!==e&&(Tt("SvelteDOMSetData",{node:i,data:e}),i.data=e)}function Ff(i){if(typeof i!="string"&&!(i&&typeof i=="object"&&"length"in i)){let e="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&i&&Symbol.iterator in i&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function Nf(i,e,t){for(const n of Object.keys(e))~t.indexOf(n)||console.warn(`<${i}> received an unexpected slot "${n}".`)}class Cu extends Ln{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}class Of extends Cu{constructor(e){super(e)}}function Bf(i){const e=Date.now();return()=>{if(Date.now()-e>i)throw new Error("Infinite loop detected")}}var zf=Object.freeze(Object.defineProperty({__proto__:null,HtmlTag:mu,HtmlTagHydration:Xo,SvelteComponent:Ln,SvelteComponentDev:Cu,SvelteComponentTyped:Of,get SvelteElement(){return Au},action_destroyer:Qh,add_attribute:mf,add_classes:gf,add_flush_callback:Xd,add_location:kh,add_render_callback:qn,add_resize_listener:Rd,add_styles:_f,add_transform:gu,afterUpdate:Hd,append:Ls,append_dev:Mf,append_empty_stylesheet:su,append_hydration:ar,append_hydration_dev:wf,append_styles:rd,assign:Kc,attr:Gn,attr_dev:Rf,attribute_to_object:Id,beforeUpdate:kd,bind:xf,binding_callbacks:hr,blank_object:fs,bubble:Wd,check_outros:Sa,children:ps,claim_component:vf,claim_element:jo,claim_html_tag:bd,claim_space:fu,claim_svg_element:vd,claim_text:du,clear_loops:td,component_subscribe:Wh,compute_rest_props:Xh,compute_slots:Yh,createEventDispatcher:_u,create_animation:zd,create_bidirectional_transition:Kd,create_component:yf,create_in_transition:Zd,create_out_transition:Jd,create_slot:pa,create_ssr_component:pf,get current_component(){return Wn},custom_event:Is,dataset_dev:Df,debug:ff,destroy_block:yu,destroy_component:Aa,destroy_each:sd,detach:jt,detach_after_dev:Cf,detach_before_dev:Af,detach_between_dev:Tf,detach_dev:Ns,dirty_components:vi,dispatch_dev:Tt,each:uf,element:Mn,element_is:od,empty:ld,end_hydrating:ru,escape:Ta,escape_attribute_value:Eu,escape_object:cf,escaped:Su,exclude_internal_props:jh,fix_and_destroy_block:tf,fix_and_outro_and_destroy_block:nf,fix_position:Ud,flush:Fs,getAllContexts:Vd,getContext:Yo,get_all_dirty_from_scope:ma,get_binding_group_value:_d,get_current_component:Bt,get_custom_elements_slots:Fd,get_root_for_style:Rs,get_slot_changes:Ts,get_spread_object:af,get_spread_update:of,get_store_value:$c,globals:ef,group_outros:wa,handle_promise:Qd,hasContext:Gd,has_prop:tu,identity:Ni,init:Yn,insert:_a,insert_dev:Sf,insert_hydration:Ps,insert_hydration_dev:Ef,intros:qd,invalid_attribute_name_character:Mu,is_client:ga,is_crossorigin:pu,is_empty:fa,is_function:An,is_promise:Qc,listen:lr,listen_dev:Lf,loop:br,loop_guard:Bf,merge_ssr_styles:wu,missing_component:hf,mount_component:Tu,noop:lt,not_equal:Vh,get now(){return Oi},null_to_empty:Jh,object_without_properties:ad,onDestroy:ya,onMount:xa,once:Zh,outro_and_destroy_block:vu,prevent_default:cd,prop_dev:Pf,query_selector_all:Dd,get raf(){return vr},run:Ss,run_all:Ot,safe_not_equal:Cn,schedule_update:ba,select_multiple_value:Ld,select_option:Td,select_options:Ad,select_value:Cd,self:hd,setContext:va,set_attributes:fd,set_current_component:Ct,set_custom_element_data:md,set_data:Md,set_data_dev:If,set_input_type:Sd,set_input_value:wd,set_now:$h,set_raf:ed,set_store_value:Kh,set_style:Ed,set_svg_attributes:pd,space:lu,spread:lf,src_url_equal:Hh,start_hydrating:iu,stop_propagation:ud,subscribe:Es,svg_element:au,text:Ds,tick:jd,time_ranges_to_array:yd,to_number:xd,toggle_class:Pd,transition_in:on,transition_out:jn,trusted:dd,update_await_block_branch:$d,update_keyed_each:rf,update_slot:qh,update_slot_base:As,validate_component:df,validate_each_argument:Ff,validate_each_keys:sf,validate_slots:Nf,validate_store:Gh,xlink_attr:gd},Symbol.toStringTag,{value:"Module"}));const ei=[];function Lu(i,e){return{subscribe:Ru(i,e).subscribe}}function Ru(i,e=lt){let t;const n=new Set;function r(a){if(Cn(i,a)&&(i=a,t)){const c=!ei.length;for(const l of n)l[1](),ei.push(l,i);if(c){for(let l=0;l<ei.length;l+=2)ei[l][0](ei[l+1]);ei.length=0}}}function s(a){r(a(i))}function o(a,c=lt){const l=[a,c];return n.add(l),n.size===1&&(t=e(r)||lt),a(i),()=>{n.delete(l),n.size===0&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function Uf(i,e,t){const n=!Array.isArray(i),r=n?[i]:i,s=e.length<2;return Lu(t,o=>{let a=!1;const c=[];let l=0,u=lt;const h=()=>{if(l)return;u();const f=e(n?c[0]:c,o);s?o(f):u=An(f)?f:lt},d=r.map((f,g)=>Es(f,_=>{c[g]=_,l&=~(1<<g),a&&h()},()=>{l|=1<<g}));return a=!0,h(),function(){Ot(d),u()}})}var kf=Object.freeze(Object.defineProperty({__proto__:null,derived:Uf,readable:Lu,writable:Ru,get:$c},Symbol.toStringTag,{value:"Module"})),wn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ca(i){if(i.__esModule)return i;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(i).forEach(function(t){var n=Object.getOwnPropertyDescriptor(i,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return i[t]}})}),e}var Hf={},La={},Mr=Ca(kf),ln={};function Vf(i){const e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}function Gf(i){return i*i*((1.70158+1)*i-1.70158)}function Wf(i){return--i*i*((1.70158+1)*i+1.70158)+1}function _s(i){const e=.36363636363636365,t=8/11,n=9/10,r=4356/361,s=35442/1805,o=16061/1805,a=i*i;return i<e?7.5625*a:i<t?9.075*a-9.9*i+3.4:i<n?r*a-s*i+o:10.8*i*i-20.52*i+10.72}function qf(i){return i<.5?.5*(1-_s(1-i*2)):.5*_s(i*2-1)+.5}function jf(i){return 1-_s(1-i)}function Xf(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}function Yf(i){return 1-Math.sqrt(1-i*i)}function Zf(i){return Math.sqrt(1- --i*i)}function Jf(i){return i<.5?4*i*i*i:.5*Math.pow(2*i-2,3)+1}function Kf(i){return i*i*i}function Qf(i){const e=i-1;return e*e*e+1}function $f(i){return i<.5?.5*Math.sin(13*Math.PI/2*2*i)*Math.pow(2,10*(2*i-1)):.5*Math.sin(-13*Math.PI/2*(2*i-1+1))*Math.pow(2,-10*(2*i-1))+1}function ep(i){return Math.sin(13*i*Math.PI/2)*Math.pow(2,10*(i-1))}function tp(i){return Math.sin(-13*(i+1)*Math.PI/2)*Math.pow(2,-10*i)+1}function np(i){return i===0||i===1?i:i<.5?.5*Math.pow(2,20*i-10):-.5*Math.pow(2,10-i*20)+1}function ip(i){return i===0?i:Math.pow(2,10*(i-1))}function rp(i){return i===1?i:1-Math.pow(2,-10*i)}function sp(i){return i/=.5,i<1?.5*i*i:(i--,-.5*(i*(i-2)-1))}function op(i){return i*i}function ap(i){return-i*(i-2)}function lp(i){return i<.5?8*Math.pow(i,4):-8*Math.pow(i-1,4)+1}function cp(i){return Math.pow(i,4)}function up(i){return Math.pow(i-1,3)*(1-i)+1}function hp(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}function dp(i){return i*i*i*i*i}function fp(i){return--i*i*i*i*i+1}function pp(i){return-.5*(Math.cos(Math.PI*i)-1)}function mp(i){const e=Math.cos(i*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}function gp(i){return Math.sin(i*Math.PI/2)}var _p=Object.freeze(Object.defineProperty({__proto__:null,backIn:Gf,backInOut:Vf,backOut:Wf,bounceIn:jf,bounceInOut:qf,bounceOut:_s,circIn:Yf,circInOut:Xf,circOut:Zf,cubicIn:Kf,cubicInOut:Jf,cubicOut:Qf,elasticIn:ep,elasticInOut:$f,elasticOut:tp,expoIn:ip,expoInOut:np,expoOut:rp,quadIn:op,quadInOut:sp,quadOut:ap,quartIn:cp,quartInOut:lp,quartOut:up,quintIn:dp,quintInOut:hp,quintOut:fp,sineIn:mp,sineInOut:pp,sineOut:gp,linear:Ni},Symbol.toStringTag,{value:"Module"})),xp=Ca(_p);Object.defineProperty(ln,"__esModule",{value:!0});ln.globalOptions=ln.elements=void 0;const Pu=Mr,yp=xp;ln.elements=(0,Pu.writable)([]);ln.globalOptions=(0,Pu.writable)({offset:0,duration:500,easing:yp.cubicInOut});var Rn={};Object.defineProperty(Rn,"__esModule",{value:!0});Rn.getGlobalOptions=void 0;const vp=Mr,Du=ln,Iu=(0,vp.get)(Du.globalOptions),bp=()=>Iu;Rn.getGlobalOptions=bp;const Mp=i=>{Du.globalOptions.update(()=>Object.assign(Iu,i))};Rn.default=Mp;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0});Xt.getPosition=Xt.getElement=Xt.sanitize=void 0;const wp=i=>i.replace(/[^A-Z0-9]/gi,"").toLowerCase();Xt.sanitize=wp;const Sp=(i,e)=>{const t=i.filter(n=>n.reference===e);return t.length?t[0].node:null};Xt.getElement=Sp;const Ep=i=>i.offsetTop;Xt.getPosition=Ep;var Os={},Ra={},Tp=Ca(zf);Object.defineProperty(Ra,"__esModule",{value:!0});const ul=Tp,Ap=(i,e,t,n,r)=>t>n?e:i+(e-i)*r(t/n),Cp=(i,e)=>{const{start:t,end:n,duration:r,easing:s}=i,o=(0,ul.now)(),a=()=>{const c=(0,ul.now)()-o,l=Ap(t,n,c,r,s);e(l),!(c>r)&&window.requestAnimationFrame(a)};window.requestAnimationFrame(a)};Ra.default=Cp;var Lp=wn&&wn.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Os,"__esModule",{value:!0});const Rp=Lp(Ra),Pp=Rn,Dp=(0,Pp.getGlobalOptions)(),Ip=(i,e)=>{const t=Object.assign(Dp,e),n=window.pageYOffset,r=i+t.offset;(0,Rp.default)($s({start:n,end:r},t),s=>{window.scroll(0,s)})};Os.default=Ip;var Fp=wn&&wn.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(La,"__esModule",{value:!0});const Np=Mr,Op=ln,Bp=Rn,Qo=Xt,zp=Fp(Os),Up=(0,Np.get)(Op.elements),kp=(0,Bp.getGlobalOptions)(),Dr=(i,e)=>{i.preventDefault();const{ref:t,offset:n,duration:r,easing:s}=e,o=(0,Qo.getElement)(Up,t);if(!o)throw new Error(`Element reference '${t}' not found`);(0,zp.default)((0,Qo.getPosition)(o),{duration:r,offset:n,easing:s})},Hp=(i,e)=>{if(!e)throw new Error("scrollTo require a options");let t=$s({ref:""},kp);typeof e=="string"?t.ref=e:t=Object.assign(e,t);const n=(0,Qo.sanitize)(t.ref);if(!n)throw new Error("scrollTo require a reference");return t.ref=n,i instanceof HTMLAnchorElement&&(i.href=`#${n}`),i instanceof HTMLAnchorElement||(i.style.cursor="pointer"),i.addEventListener("click",r=>Dr(r,t)),i.addEventListener("touchstart",r=>Dr(r,t)),{destroy(){i.removeEventListener("click",r=>Dr(r,t)),i.removeEventListener("touchstart",r=>Dr(r,t))}}};La.default=Hp;var Pa={};Object.defineProperty(Pa,"__esModule",{value:!0});const Vp=Mr,Gp=Xt,Wp=ln,hl=(0,Vp.get)(Wp.elements),qp=(i,e)=>{if(!e)throw new Error("scrollRef require a hash");return hl.push({node:i,reference:(0,Gp.sanitize)(e)}),{destroy(){hl.length=0}}};Pa.default=qp;var qt={},jp=wn&&wn.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(qt,"__esModule",{value:!0});qt.scrollPosition=qt.scrollElement=qt.scrollBottom=qt.scrollTop=void 0;const Xp=Mr,Yp=ln,Zp=Rn,no=Xt,Bs=jp(Os),zs=(0,Zp.getGlobalOptions)(),Jp=i=>{const e=Object.assign(zs,i);(0,Bs.default)(0,e)};qt.scrollTop=Jp;const Kp=i=>{const e=Object.assign(zs,i),t=document.body,n=document.documentElement,r=Math.max(t.scrollHeight,t.offsetHeight,n.scrollHeight,n.clientHeight,n.offsetHeight);(0,Bs.default)(r,e)};qt.scrollBottom=Kp;const Qp=(i,e)=>{if(!i||typeof i!="string")throw new Error("scrollElement require a reference valid");const t=Object.assign(zs,e),n=(0,no.sanitize)(i),r=(0,Xp.get)(Yp.elements),s=(0,no.getElement)(r,n);if(!s)throw new Error(`Element reference '${n}' not found`);(0,Bs.default)((0,no.getPosition)(s),t)};qt.scrollElement=Qp;const $p=(i,e)=>{if(!i||typeof i!="number")throw new Error("scrollPosition require a position value valid");const t=Object.assign(zs,e);(0,Bs.default)(i,t)};qt.scrollPosition=$p;(function(i){var e=wn&&wn.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(i,"__esModule",{value:!0}),i.scrollPosition=i.scrollElement=i.scrollBottom=i.scrollTop=i.setGlobalOptions=i.scrollRef=i.scrollTo=void 0;var t=La;Object.defineProperty(i,"scrollTo",{enumerable:!0,get:function(){return e(t).default}});var n=Pa;Object.defineProperty(i,"scrollRef",{enumerable:!0,get:function(){return e(n).default}});var r=Rn;Object.defineProperty(i,"setGlobalOptions",{enumerable:!0,get:function(){return e(r).default}});var s=qt;Object.defineProperty(i,"scrollTop",{enumerable:!0,get:function(){return s.scrollTop}}),Object.defineProperty(i,"scrollBottom",{enumerable:!0,get:function(){return s.scrollBottom}}),Object.defineProperty(i,"scrollElement",{enumerable:!0,get:function(){return s.scrollElement}}),Object.defineProperty(i,"scrollPosition",{enumerable:!0,get:function(){return s.scrollPosition}})})(Hf);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="138",rn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},em=0,dl=1,tm=2,Ia=1,nm=2,nr=3,dr=0,nt=1,Li=2,Fu=1,yn=0,Ei=1,fl=2,pl=3,ml=4,im=5,yi=100,rm=101,sm=102,gl=103,_l=104,om=200,am=201,lm=202,cm=203,Nu=204,Ou=205,um=206,hm=207,dm=208,fm=209,pm=210,mm=0,gm=1,_m=2,$o=3,xm=4,ym=5,vm=6,bm=7,Us=0,Mm=1,wm=2,an=0,Sm=1,Em=2,Tm=3,Am=4,Cm=5,Bu=300,Ri=301,Pi=302,ea=303,ta=304,ks=306,Fa=307,na=1e3,Ft=1001,ia=1002,ot=1003,xl=1004,yl=1005,pt=1006,Lm=1007,Hs=1008,Xn=1009,Rm=1010,Pm=1011,fr=1012,Dm=1013,ds=1014,Un=1015,Ti=1016,Im=1017,Fm=1018,Ai=1020,Nm=1021,Om=1022,Mt=1023,Bm=1024,zm=1025,Vn=1026,Di=1027,Um=1028,km=1029,Hm=1030,Vm=1031,Gm=1033,io=33776,ro=33777,so=33778,oo=33779,vl=35840,bl=35841,Ml=35842,wl=35843,Wm=36196,Sl=37492,El=37496,Tl=37808,Al=37809,Cl=37810,Ll=37811,Rl=37812,Pl=37813,Dl=37814,Il=37815,Fl=37816,Nl=37817,Ol=37818,Bl=37819,zl=37820,Ul=37821,kl=36492,qm=2200,jm=2201,Xm=2202,xs=2300,ys=2301,ao=2302,bi=2400,Mi=2401,vs=2402,Na=2500,zu=2501,Ym=0,Sn=3e3,Ze=3001,Zm=3200,Jm=3201,Bi=0,Km=1,lo=7680,Qm=519,pr=35044,bs=35048,Hl="300 es",ra=1035;class Pn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ht=[];for(let i=0;i<256;i++)ht[i]=(i<16?"0":"")+i.toString(16);const co=Math.PI/180,sa=180/Math.PI;function Yt(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toUpperCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function $m(i,e){return(i%e+e)%e}function uo(i,e,t){return(1-t)*i+t*e}function Vl(i){return(i&i-1)===0&&i!==0}function oa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class Q{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Q.prototype.isVector2=!0;class at{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=r[0],x=r[3],m=r[6],p=r[1],T=r[4],M=r[7],v=r[2],D=r[5],I=r[8];return s[0]=o*_+a*p+c*v,s[3]=o*x+a*T+c*D,s[6]=o*m+a*M+c*I,s[1]=l*_+u*p+h*v,s[4]=l*x+u*T+h*D,s[7]=l*m+u*M+h*I,s[2]=d*_+f*p+g*v,s[5]=d*x+f*T+g*D,s[8]=d*m+f*M+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,g=t*h+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+n*c,r[3]=t*o+n*l,r[6]=t*a+n*u,r[1]=-n*s+t*c,r[4]=-n*o+t*l,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}at.prototype.isMatrix3=!0;function Uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pt={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}class be{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=$m(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=ho(s,r,e+1/3),this.g=ho(s,r,e),this.b=ho(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=ku[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,r=this.b,s=Math.max(t,n,r),o=Math.min(t,n,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-r)/u+(n<r?6:0);break;case n:a=(r-t)/u+2;break;case r:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Pt),Pt.h+=e,Pt.s+=t,Pt.l+=n,this.setHSL(Pt.h,Pt.s,Pt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pt),e.getHSL(Ir);const n=uo(Pt.h,Ir.h,t),r=uo(Pt.s,Ir.s,t),s=uo(Pt.l,Ir.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}be.NAMES=ku;be.prototype.isColor=!0;be.prototype.r=1;be.prototype.g=1;be.prototype.b=1;let ti;class Zn{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=mr("canvas")),ti.width=e.width,ti.height=e.height;const n=ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ci(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Hu{constructor(e=null){this.uuid=Yt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(po(r[o].image)):s.push(po(r[o]))}else s=po(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function po(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Zn.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Hu.prototype.isSource=!0;let eg=0;class ut extends Pn{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,n=Ft,r=Ft,s=pt,o=Hs,a=Mt,c=Xn,l=1,u=Sn){super();Object.defineProperty(this,"id",{value:eg++}),this.uuid=Yt(),this.name="",this.source=new Hu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ut.DEFAULT_IMAGE=null;ut.DEFAULT_MAPPING=Bu;ut.prototype.isTexture=!0;class We{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],x=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+x)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,M=(f+1)/2,v=(m+1)/2,D=(u+d)/4,I=(h+_)/4,G=(g+x)/4;return T>M&&T>v?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=D/n,s=I/n):M>v?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=D/r,s=G/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=I/s,r=G/s),this.set(n,r,s,t),this}let p=Math.sqrt((x-g)*(x-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(p)<.001&&(p=1),this.x=(x-g)/p,this.y=(h-_)/p,this.z=(d-u)/p,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}We.prototype.isVector4=!0;class Et extends Pn{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new ut(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Et.prototype.isWebGLRenderTarget=!0;class Vs extends ut{constructor(e=null,t=1,n=1,r=1){super(null);this.image={data:e,width:t,height:n,depth:r},this.magFilter=ot,this.minFilter=ot,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Vs.prototype.isDataArrayTexture=!0;class tg extends Et{constructor(e,t,n){super(e,t);this.depth=n,this.texture=new Vs(null,e,t,n),this.texture.isRenderTargetTexture=!0}}tg.prototype.isWebGLArrayRenderTarget=!0;class Oa extends ut{constructor(e=null,t=1,n=1,r=1){super(null);this.image={data:e,width:t,height:n,depth:r},this.magFilter=ot,this.minFilter=ot,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Oa.prototype.isData3DTexture=!0;class ng extends Et{constructor(e,t,n){super(e,t);this.depth=n,this.texture=new Oa(null,e,t,n),this.texture.isRenderTargetTexture=!0}}ng.prototype.isWebGL3DRenderTarget=!0;class ig extends Et{constructor(e,t,n,r={}){super(e,t,r);const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}ig.prototype.isWebGLMultipleRenderTargets=!0;class mt{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let x=1-a;const m=c*d+l*f+u*g+h*_,p=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const v=Math.sqrt(T),D=Math.atan2(v,m*p);x=Math.sin(x*D)/v,a=Math.sin(a*D)/v}const M=a*p;if(c=c*x+d*M,l=l*x+f*M,u=u*x+g*M,h=h*x+_*M,x===1-a){const v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),d=c(n/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}mt.prototype.isQuaternion=!0;class E{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*n,u=c*n+a*t-s*r,h=c*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}E.prototype.isVector3=!0;const mo=new E,Gl=new mt;class zt{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Fn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fn)}else n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox),go.applyMatrix4(e.matrixWorld),this.union(go);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),Fr.subVectors(this.max,Yi),ni.subVectors(e.a,Yi),ii.subVectors(e.b,Yi),ri.subVectors(e.c,Yi),un.subVectors(ii,ni),hn.subVectors(ri,ii),Nn.subVectors(ni,ri);let t=[0,-un.z,un.y,0,-hn.z,hn.y,0,-Nn.z,Nn.y,un.z,0,-un.x,hn.z,0,-hn.x,Nn.z,0,-Nn.x,-un.y,un.x,0,-hn.y,hn.x,0,-Nn.y,Nn.x,0];return!_o(t,ni,ii,ri,Fr)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,ni,ii,ri,Fr))?!1:(Nr.crossVectors(un,hn),t=[Nr.x,Nr.y,Nr.z],_o(t,ni,ii,ri,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Fn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}zt.prototype.isBox3=!0;const Kt=[new E,new E,new E,new E,new E,new E,new E,new E],Fn=new E,go=new zt,ni=new E,ii=new E,ri=new E,un=new E,hn=new E,Nn=new E,Yi=new E,Fr=new E,Nr=new E,On=new E;function _o(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){On.fromArray(i,s);const a=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),c=e.dot(On),l=t.dot(On),u=n.dot(On);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const rg=new zt,Wl=new E,Or=new E,xo=new E;class zi{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){xo.subVectors(e,this.center);const t=xo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(xo.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Or.set(0,0,1).multiplyScalar(e.radius):Or.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Wl.copy(e.center).add(Or)),this.expandByPoint(Wl.copy(e.center).sub(Or)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qt=new E,yo=new E,Br=new E,dn=new E,vo=new E,zr=new E,bo=new E;class Ui{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.direction).multiplyScalar(t).add(this.origin),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yo.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(yo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Br),a=dn.dot(this.direction),c=-dn.dot(Br),l=dn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Br).multiplyScalar(d).add(yo),f}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const n=Qt.dot(this.direction),r=Qt.dot(Qt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,n,r,s){vo.subVectors(t,e),zr.subVectors(n,e),bo.crossVectors(vo,zr);let o=this.direction.dot(bo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,e);const c=a*this.direction.dot(zr.crossVectors(dn,zr));if(c<0)return null;const l=a*this.direction.dot(vo.cross(dn));if(l<0||c+l>o)return null;const u=-a*dn.dot(bo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,c,l,u,h,d,f,g,_,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/si.setFromMatrixColumn(e,0).length(),s=1/si.setFromMatrixColumn(e,1).length(),o=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sg,e,og)}lookAt(e,t,n){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),fn.crossVectors(n,wt),fn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),fn.crossVectors(n,wt)),fn.normalize(),Ur.crossVectors(wt,fn),r[0]=fn.x,r[4]=Ur.x,r[8]=wt.x,r[1]=fn.y,r[5]=Ur.y,r[9]=wt.y,r[2]=fn.z,r[6]=Ur.z,r[10]=wt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],x=n[10],m=n[14],p=n[3],T=n[7],M=n[11],v=n[15],D=r[0],I=r[4],G=r[8],se=r[12],H=r[1],y=r[5],L=r[9],F=r[13],A=r[2],P=r[6],B=r[10],U=r[14],N=r[3],Y=r[7],te=r[11],$=r[15];return s[0]=o*D+a*H+c*A+l*N,s[4]=o*I+a*y+c*P+l*Y,s[8]=o*G+a*L+c*B+l*te,s[12]=o*se+a*F+c*U+l*$,s[1]=u*D+h*H+d*A+f*N,s[5]=u*I+h*y+d*P+f*Y,s[9]=u*G+h*L+d*B+f*te,s[13]=u*se+h*F+d*U+f*$,s[2]=g*D+_*H+x*A+m*N,s[6]=g*I+_*y+x*P+m*Y,s[10]=g*G+_*L+x*B+m*te,s[14]=g*se+_*F+x*U+m*$,s[3]=p*D+T*H+M*A+v*N,s[7]=p*I+T*y+M*P+v*Y,s[11]=p*G+T*L+M*B+v*te,s[15]=p*se+T*F+M*U+v*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],x=e[11],m=e[15];return g*(+s*c*h-r*l*h-s*a*d+n*l*d+r*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+x*(+t*l*h-t*a*f-s*o*h+n*o*f+s*a*u-n*l*u)+m*(-r*a*u-t*c*h+t*a*d+r*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],x=e[14],m=e[15],p=h*x*l-_*d*l+_*c*f-a*x*f-h*c*m+a*d*m,T=g*d*l-u*x*l-g*c*f+o*x*f+u*c*m-o*d*m,M=u*_*l-g*h*l+g*a*f-o*_*f-u*a*m+o*h*m,v=g*h*c-u*_*c-g*a*d+o*_*d+u*a*x-o*h*x,D=t*p+n*T+r*M+s*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=p*I,e[1]=(_*d*s-h*x*s-_*r*f+n*x*f+h*r*m-n*d*m)*I,e[2]=(a*x*s-_*c*s+_*r*l-n*x*l-a*r*m+n*c*m)*I,e[3]=(h*c*s-a*d*s-h*r*l+n*d*l+a*r*f-n*c*f)*I,e[4]=T*I,e[5]=(u*x*s-g*d*s+g*r*f-t*x*f-u*r*m+t*d*m)*I,e[6]=(g*c*s-o*x*s-g*r*l+t*x*l+o*r*m-t*c*m)*I,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*I,e[8]=M*I,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*m-t*h*m)*I,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*m+t*a*m)*I,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*f-t*a*f)*I,e[12]=v*I,e[13]=(u*_*r-g*h*r+g*n*d-t*_*d-u*n*x+t*h*x)*I,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*x-t*a*x)*I,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*d+t*a*d)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,g=s*h,_=o*u,x=o*h,m=a*h,p=c*l,T=c*u,M=c*h,v=n.x,D=n.y,I=n.z;return r[0]=(1-(_+m))*v,r[1]=(f+M)*v,r[2]=(g-T)*v,r[3]=0,r[4]=(f-M)*D,r[5]=(1-(d+m))*D,r[6]=(x+p)*D,r[7]=0,r[8]=(g+T)*I,r[9]=(x-p)*I,r[10]=(1-(d+_))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=si.set(r[0],r[1],r[2]).length();const o=si.set(r[4],r[5],r[6]).length(),a=si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dt.copy(this);const l=1/s,u=1/o,h=1/a;return Dt.elements[0]*=l,Dt.elements[1]*=l,Dt.elements[2]*=l,Dt.elements[4]*=u,Dt.elements[5]*=u,Dt.elements[6]*=u,Dt.elements[8]*=h,Dt.elements[9]*=h,Dt.elements[10]*=h,t.setFromRotationMatrix(Dt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,c=1/(t-e),l=1/(n-r),u=1/(o-s),h=(t+e)*c,d=(n+r)*l,f=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Se.prototype.isMatrix4=!0;const si=new E,Dt=new Se,sg=new E(0,0,0),og=new E(1,1,1),fn=new E,Ur=new E,wt=new E,ql=new Se,jl=new mt;class Jn{constructor(e=0,t=0,n=0,r=Jn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Jn.prototype.isEuler=!0;Jn.DefaultOrder="XYZ";Jn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Vu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ag=0;const Xl=new E,oi=new mt,$t=new Se,kr=new E,Zi=new E,lg=new E,cg=new mt,Yl=new E(1,0,0),Zl=new E(0,1,0),Jl=new E(0,0,1),ug={type:"added"},Kl={type:"removed"};class Ve extends Pn{constructor(){super();Object.defineProperty(this,"id",{value:ag++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DefaultUp.clone();const e=new E,t=new Jn,n=new mt,r=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new at}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ve.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(Zi,kr,this.up):$t.lookAt(kr,Zi,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),oi.setFromRotationMatrix($t),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ug)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Kl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ve.DefaultUp=new E(0,1,0);Ve.DefaultMatrixAutoUpdate=!0;Ve.prototype.isObject3D=!0;const It=new E,en=new E,Mo=new E,tn=new E,ai=new E,li=new E,Ql=new E,wo=new E,So=new E,Eo=new E;class tt{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),It.subVectors(e,t),r.cross(It);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){It.subVectors(r,t),en.subVectors(n,t),Mo.subVectors(e,t);const o=It.dot(It),a=It.dot(en),c=It.dot(Mo),l=en.dot(en),u=en.dot(Mo),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,tn),tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,tn),c.set(0,0),c.addScaledVector(s,tn.x),c.addScaledVector(o,tn.y),c.addScaledVector(a,tn.z),c}static isFrontFacing(e,t,n,r){return It.subVectors(n,t),en.subVectors(e,t),It.cross(en).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),en.subVectors(this.a,this.b),It.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return tt.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return tt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ai.subVectors(r,n),li.subVectors(s,n),wo.subVectors(e,n);const c=ai.dot(wo),l=li.dot(wo);if(c<=0&&l<=0)return t.copy(n);So.subVectors(e,r);const u=ai.dot(So),h=li.dot(So);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ai,o);Eo.subVectors(e,s);const f=ai.dot(Eo),g=li.dot(Eo);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(li,a);const x=u*g-f*h;if(x<=0&&h-u>=0&&f-g>=0)return Ql.subVectors(s,r),a=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Ql,a);const m=1/(x+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(ai,o).addScaledVector(li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hg=0;class rt extends Pn{constructor(){super();Object.defineProperty(this,"id",{value:hg++}),this.uuid=Yt(),this.name="",this.type="Material",this.fog=!0,this.blending=Ei,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Nu,this.blendDst=Ou,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Fu;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==dr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}rt.prototype.isMaterial=!0;rt.fromType=function(){return null};class Gs extends rt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Gs.prototype.isMeshBasicMaterial=!0;const Xe=new E,Hr=new Q;class it{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=pr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new be),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Q),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new E),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new We),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}it.prototype.isBufferAttribute=!0;class Gu extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wu extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dg extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}}dg.prototype.isFloat16BufferAttribute=!0;class ct extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fg=0;const At=new Se,To=new Ve,ci=new E,St=new zt,Ji=new zt,st=new E;class Ye extends Pn{constructor(){super();Object.defineProperty(this,"id",{value:fg++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?Wu:Gu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return At.makeRotationFromQuaternion(e),this.applyMatrix4(At),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,n){return At.makeTranslation(e,t,n),this.applyMatrix4(At),this}scale(e,t,n){return At.makeScale(e,t,n),this.applyMatrix4(At),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];St.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(st.addVectors(St.min,Ji.min),St.expandByPoint(st),st.addVectors(St.max,Ji.max),St.expandByPoint(st)):(St.expandByPoint(Ji.min),St.expandByPoint(Ji.max))}St.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)st.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(st));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)st.fromBufferAttribute(a,l),c&&(ci.fromBufferAttribute(e,l),st.add(ci)),r=Math.max(r,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let H=0;H<a;H++)l[H]=new E,u[H]=new E;const h=new E,d=new E,f=new E,g=new Q,_=new Q,x=new Q,m=new E,p=new E;function T(H,y,L){h.fromArray(r,H*3),d.fromArray(r,y*3),f.fromArray(r,L*3),g.fromArray(o,H*2),_.fromArray(o,y*2),x.fromArray(o,L*2),d.sub(h),f.sub(h),_.sub(g),x.sub(g);const F=1/(_.x*x.y-x.x*_.y);!isFinite(F)||(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-_.y).multiplyScalar(F),p.copy(f).multiplyScalar(_.x).addScaledVector(d,-x.x).multiplyScalar(F),l[H].add(m),l[y].add(m),l[L].add(m),u[H].add(p),u[y].add(p),u[L].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let H=0,y=M.length;H<y;++H){const L=M[H],F=L.start,A=L.count;for(let P=F,B=F+A;P<B;P+=3)T(n[P+0],n[P+1],n[P+2])}const v=new E,D=new E,I=new E,G=new E;function se(H){I.fromArray(s,H*3),G.copy(I);const y=l[H];v.copy(y),v.sub(I.multiplyScalar(I.dot(y))).normalize(),D.crossVectors(G,y);const F=D.dot(u[H])<0?-1:1;c[H*4]=v.x,c[H*4+1]=v.y,c[H*4+2]=v.z,c[H*4+3]=F}for(let H=0,y=M.length;H<y;++H){const L=M[H],F=L.start,A=L.count;for(let P=F,B=F+A;P<B;P+=3)se(n[P+0]),se(n[P+1]),se(n[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new E,s=new E,o=new E,a=new E,c=new E,l=new E,u=new E,h=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,x),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],c=a.array,l=a.itemSize*t,u=Math.min(c.length,o.length-l);for(let h=0,d=l;h<u;h++,d++)o[d]=c[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,x=c.length;_<x;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new it(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ye,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ye.prototype.isBufferGeometry=!0;const $l=new Se,ui=new Ui,Ao=new zi,pn=new E,mn=new E,gn=new E,Co=new E,Lo=new E,Ro=new E,Vr=new E,Gr=new E,Wr=new E,qr=new Q,jr=new Q,Xr=new Q,Po=new E,Yr=new E;class yt extends Ve{constructor(e=new Ye,t=new Gs){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),e.ray.intersectsSphere(Ao)===!1)||($l.copy(s).invert(),ui.copy(e.ray).applyMatrix4($l),n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=r[m.materialIndex],T=Math.max(m.start,g.start),M=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let v=T,D=M;v<D;v+=3){const I=a.getX(v),G=a.getX(v+1),se=a.getX(v+2);o=Zr(this,p,e,ui,c,l,u,h,d,I,G,se),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);o=Zr(this,r,e,ui,c,l,u,h,d,T,M,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=r[m.materialIndex],T=Math.max(m.start,g.start),M=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let v=T,D=M;v<D;v+=3){const I=v,G=v+1,se=v+2;o=Zr(this,p,e,ui,c,l,u,h,d,I,G,se),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,g.start),x=Math.min(c.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){const T=m,M=m+1,v=m+2;o=Zr(this,r,e,ui,c,l,u,h,d,T,M,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}yt.prototype.isMesh=!0;function pg(i,e,t,n,r,s,o,a){let c;if(e.side===nt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side!==Li,a),c===null)return null;Yr.copy(a),Yr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Yr);return l<t.near||l>t.far?null:{distance:l,point:Yr.clone(),object:i}}function Zr(i,e,t,n,r,s,o,a,c,l,u,h){pn.fromBufferAttribute(r,l),mn.fromBufferAttribute(r,u),gn.fromBufferAttribute(r,h);const d=i.morphTargetInfluences;if(s&&d){Vr.set(0,0,0),Gr.set(0,0,0),Wr.set(0,0,0);for(let g=0,_=s.length;g<_;g++){const x=d[g],m=s[g];x!==0&&(Co.fromBufferAttribute(m,l),Lo.fromBufferAttribute(m,u),Ro.fromBufferAttribute(m,h),o?(Vr.addScaledVector(Co,x),Gr.addScaledVector(Lo,x),Wr.addScaledVector(Ro,x)):(Vr.addScaledVector(Co.sub(pn),x),Gr.addScaledVector(Lo.sub(mn),x),Wr.addScaledVector(Ro.sub(gn),x)))}pn.add(Vr),mn.add(Gr),gn.add(Wr)}i.isSkinnedMesh&&(i.boneTransform(l,pn),i.boneTransform(u,mn),i.boneTransform(h,gn));const f=pg(i,e,t,n,pn,mn,gn,Po);if(f){a&&(qr.fromBufferAttribute(a,l),jr.fromBufferAttribute(a,u),Xr.fromBufferAttribute(a,h),f.uv=tt.getUV(Po,pn,mn,gn,qr,jr,Xr,new Q)),c&&(qr.fromBufferAttribute(c,l),jr.fromBufferAttribute(c,u),Xr.fromBufferAttribute(c,h),f.uv2=tt.getUV(Po,pn,mn,gn,qr,jr,Xr,new Q));const g={a:l,b:u,c:h,normal:new E,materialIndex:0};tt.getNormal(pn,mn,gn,g.normal),f.face=g}return f}class wr extends Ye{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(_,x,m,p,T,M,v,D,I,G,se){const H=M/I,y=v/G,L=M/2,F=v/2,A=D/2,P=I+1,B=G+1;let U=0,N=0;const Y=new E;for(let te=0;te<B;te++){const $=te*y-F;for(let ne=0;ne<P;ne++){const ye=ne*H-L;Y[_]=ye*p,Y[x]=$*T,Y[m]=A,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[x]=0,Y[m]=D>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(ne/I),h.push(1-te/G),U+=1}}for(let te=0;te<G;te++)for(let $=0;$<I;$++){const ne=d+$+P*te,ye=d+$+P*(te+1),Ne=d+($+1)+P*(te+1),Me=d+($+1)+P*te;c.push(ne,ye,Me),c.push(ye,Ne,Me),N+=6}a.addGroup(f,N,se),f+=N,d+=U}}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ft(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const r in n)e[r]=n[r]}return e}const mg={clone:Ii,merge:ft};var gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nt extends rt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=gg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Nt.prototype.isShaderMaterial=!0;class Ba extends Ve{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Ba.prototype.isCamera=!0;class xt extends Ba{constructor(e=50,t=1,n=.1,r=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}xt.prototype.isPerspectiveCamera=!0;const hi=90,di=1;class za extends Ve{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new xt(hi,di,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new E(1,0,0)),this.add(r);const s=new xt(hi,di,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new E(-1,0,0)),this.add(s);const o=new xt(hi,di,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new E(0,1,0)),this.add(o);const a=new xt(hi,di,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new E(0,-1,0)),this.add(a);const c=new xt(hi,di,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new E(0,0,1)),this.add(c);const l=new xt(hi,di,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new E(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ws extends ut{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ri;super(e,t,n,r,s,o,a,c,l,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Ws.prototype.isCubeTexture=!0;class qu extends Et{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ws(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Mt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wr(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nt,blending:yn});s.uniforms.tEquirect.value=t;const o=new yt(r,s),a=t.minFilter;return t.minFilter===Hs&&(t.minFilter=pt),new za(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}qu.prototype.isWebGLCubeRenderTarget=!0;const Do=new E,xg=new E,yg=new at;class sn{constructor(e=new E(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Do.subVectors(n,t).cross(xg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Do),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yg.getNormalMatrix(e),r=this.coplanarPoint(Do).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}sn.prototype.isPlane=!0;const fi=new zi,Jr=new E;class qs{constructor(e=new sn,t=new sn,n=new sn,r=new sn,s=new sn,o=new sn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],f=n[9],g=n[10],_=n[11],x=n[12],m=n[13],p=n[14],T=n[15];return t[0].setComponents(a-r,h-c,_-d,T-x).normalize(),t[1].setComponents(a+r,h+c,_+d,T+x).normalize(),t[2].setComponents(a+s,h+l,_+f,T+m).normalize(),t[3].setComponents(a-s,h-l,_-f,T-m).normalize(),t[4].setComponents(a-o,h-u,_-g,T-p).normalize(),t[5].setComponents(a+o,h+u,_+g,T+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Jr.x=r.normal.x>0?e.max.x:e.min.x,Jr.y=r.normal.y>0?e.max.y:e.min.y,Jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ju(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function vg(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const h=l.array,d=l.usage,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,f=u.updateRange;i.bindBuffer(h,l),f.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Ua extends Ye{constructor(e=1,t=1,n=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],x=[];for(let m=0;m<u;m++){const p=m*d-o;for(let T=0;T<l;T++){const M=T*h-s;g.push(M,-p,0),_.push(0,0,1),x.push(T/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let p=0;p<a;p++){const T=p+l*m,M=p+l*(m+1),v=p+1+l*(m+1),D=p+1+l*m;f.push(T,M,D),f.push(M,v,D)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(x,2))}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag="vec3 transformed = vec3( position );",Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ug=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,kg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$g=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,r_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,s_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,a_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l_=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,c_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,f_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,p_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,__=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,x_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,b_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ]
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,R_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			float texelIndex = float( vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,P_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,D_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,I_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,k_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,G_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,J_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Q_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,cx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ux=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,hx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,dx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,fx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,px=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ix=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ux=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:bg,alphamap_pars_fragment:Mg,alphatest_fragment:wg,alphatest_pars_fragment:Sg,aomap_fragment:Eg,aomap_pars_fragment:Tg,begin_vertex:Ag,beginnormal_vertex:Cg,bsdfs:Lg,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Fg,color_fragment:Ng,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:zg,common:Ug,cube_uv_reflection_fragment:kg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Vg,displacementmap_vertex:Gg,emissivemap_fragment:Wg,emissivemap_pars_fragment:qg,encodings_fragment:jg,encodings_pars_fragment:Xg,envmap_fragment:Yg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:Jg,envmap_pars_vertex:Kg,envmap_physical_pars_fragment:l_,envmap_vertex:Qg,fog_vertex:$g,fog_pars_vertex:e_,fog_fragment:t_,fog_pars_fragment:n_,gradientmap_pars_fragment:i_,lightmap_fragment:r_,lightmap_pars_fragment:s_,lights_lambert_vertex:o_,lights_pars_begin:a_,lights_toon_fragment:c_,lights_toon_pars_fragment:u_,lights_phong_fragment:h_,lights_phong_pars_fragment:d_,lights_physical_fragment:f_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:__,logdepthbuf_fragment:x_,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:b_,map_fragment:M_,map_pars_fragment:w_,map_particle_fragment:S_,map_particle_pars_fragment:E_,metalnessmap_fragment:T_,metalnessmap_pars_fragment:A_,morphcolor_vertex:C_,morphnormal_vertex:L_,morphtarget_pars_vertex:R_,morphtarget_vertex:P_,normal_fragment_begin:D_,normal_fragment_maps:I_,normal_pars_fragment:F_,normal_pars_vertex:N_,normal_vertex:O_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:z_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:k_,output_fragment:H_,packing:V_,premultiplied_alpha_fragment:G_,project_vertex:W_,dithering_fragment:q_,dithering_pars_fragment:j_,roughnessmap_fragment:X_,roughnessmap_pars_fragment:Y_,shadowmap_pars_fragment:Z_,shadowmap_pars_vertex:J_,shadowmap_vertex:K_,shadowmask_pars_fragment:Q_,skinbase_vertex:$_,skinning_pars_vertex:ex,skinning_vertex:tx,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:rx,tonemapping_fragment:sx,tonemapping_pars_fragment:ox,transmission_fragment:ax,transmission_pars_fragment:lx,uv_pars_fragment:cx,uv_pars_vertex:ux,uv_vertex:hx,uv2_pars_fragment:dx,uv2_pars_vertex:fx,uv2_vertex:px,worldpos_vertex:mx,background_vert:gx,background_frag:_x,cube_vert:xx,cube_frag:yx,depth_vert:vx,depth_frag:bx,distanceRGBA_vert:Mx,distanceRGBA_frag:wx,equirect_vert:Sx,equirect_frag:Ex,linedashed_vert:Tx,linedashed_frag:Ax,meshbasic_vert:Cx,meshbasic_frag:Lx,meshlambert_vert:Rx,meshlambert_frag:Px,meshmatcap_vert:Dx,meshmatcap_frag:Ix,meshnormal_vert:Fx,meshnormal_frag:Nx,meshphong_vert:Ox,meshphong_frag:Bx,meshphysical_vert:zx,meshphysical_frag:Ux,meshtoon_vert:kx,meshtoon_frag:Hx,points_vert:Vx,points_frag:Gx,shadow_vert:Wx,shadow_frag:qx,sprite_vert:jx,sprite_frag:Xx},ue={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new at},uv2Transform:{value:new at},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}}},Gt={basic:{uniforms:ft([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:ft([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.fog,ue.lights,{emissive:{value:new be(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:ft([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:ft([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:ft([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new be(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:ft([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:ft([ue.points,ue.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:ft([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:ft([ue.common,ue.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:ft([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:ft([ue.sprite,ue.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:ft([ue.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:ft([ue.common,ue.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:ft([ue.lights,ue.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Gt.physical={uniforms:ft([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Q(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function Yx(i,e,t,n,r,s){const o=new be(0);let a=r===!0?0:1,c,l,u=null,h=0,d=null;function f(_,x){let m=!1,p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=e.get(p));const T=i.xr,M=T.getSession&&T.getSession();M&&M.environmentBlendMode==="additive"&&(p=null),p===null?g(o,a):p&&p.isColor&&(g(p,1),m=!0),(i.autoClear||m)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ks)?(l===void 0&&(l=new yt(new wr(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Ii(Gt.cube.uniforms),vertexShader:Gt.cube.vertexShader,fragmentShader:Gt.cube.fragmentShader,side:nt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(u!==p||h!==p.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=p,h=p.version,d=i.toneMapping),_.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new yt(new Ua(2,2),new Nt({name:"BackgroundMaterial",uniforms:Ii(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(u!==p||h!==p.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=p,h=p.version,d=i.toneMapping),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,x){t.buffers.color.setClear(_.r,_.g,_.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),a=x,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:f}}function Zx(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=_(null);let l=c;function u(F,A,P,B,U){let N=!1;if(o){const Y=g(B,P,A);l!==Y&&(l=Y,d(l.object)),N=x(B,U),N&&m(B,U)}else{const Y=A.wireframe===!0;(l.geometry!==B.id||l.program!==P.id||l.wireframe!==Y)&&(l.geometry=B.id,l.program=P.id,l.wireframe=Y,N=!0)}F.isInstancedMesh===!0&&(N=!0),U!==null&&t.update(U,34963),N&&(I(F,A,P,B),U!==null&&i.bindBuffer(34963,t.get(U).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function f(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function g(F,A,P){const B=P.wireframe===!0;let U=a[F.id];U===void 0&&(U={},a[F.id]=U);let N=U[A.id];N===void 0&&(N={},U[A.id]=N);let Y=N[B];return Y===void 0&&(Y=_(h()),N[B]=Y),Y}function _(F){const A=[],P=[],B=[];for(let U=0;U<r;U++)A[U]=0,P[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:P,attributeDivisors:B,object:F,attributes:{},index:null}}function x(F,A){const P=l.attributes,B=F.attributes;let U=0;for(const N in B){const Y=P[N],te=B[N];if(Y===void 0||Y.attribute!==te||Y.data!==te.data)return!0;U++}return l.attributesNum!==U||l.index!==A}function m(F,A){const P={},B=F.attributes;let U=0;for(const N in B){const Y=B[N],te={};te.attribute=Y,Y.data&&(te.data=Y.data),P[N]=te,U++}l.attributes=P,l.attributesNum=U,l.index=A}function p(){const F=l.newAttributes;for(let A=0,P=F.length;A<P;A++)F[A]=0}function T(F){M(F,0)}function M(F,A){const P=l.newAttributes,B=l.enabledAttributes,U=l.attributeDivisors;P[F]=1,B[F]===0&&(i.enableVertexAttribArray(F),B[F]=1),U[F]!==A&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,A),U[F]=A)}function v(){const F=l.newAttributes,A=l.enabledAttributes;for(let P=0,B=A.length;P<B;P++)A[P]!==F[P]&&(i.disableVertexAttribArray(P),A[P]=0)}function D(F,A,P,B,U,N){n.isWebGL2===!0&&(P===5124||P===5125)?i.vertexAttribIPointer(F,A,P,U,N):i.vertexAttribPointer(F,A,P,B,U,N)}function I(F,A,P,B){if(n.isWebGL2===!1&&(F.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const U=B.attributes,N=P.getAttributes(),Y=A.defaultAttributeValues;for(const te in N){const $=N[te];if($.location>=0){let ne=U[te];if(ne===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),ne!==void 0){const ye=ne.normalized,Ne=ne.itemSize,Me=t.get(ne);if(Me===void 0)continue;const j=Me.buffer,Z=Me.type,Te=Me.bytesPerElement;if(ne.isInterleavedBufferAttribute){const ge=ne.data,_e=ge.stride,W=ne.offset;if(ge.isInstancedInterleavedBuffer){for(let k=0;k<$.locationSize;k++)M($.location+k,ge.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let k=0;k<$.locationSize;k++)T($.location+k);i.bindBuffer(34962,j);for(let k=0;k<$.locationSize;k++)D($.location+k,Ne/$.locationSize,Z,ye,_e*Te,(W+Ne/$.locationSize*k)*Te)}else{if(ne.isInstancedBufferAttribute){for(let ge=0;ge<$.locationSize;ge++)M($.location+ge,ne.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ge=0;ge<$.locationSize;ge++)T($.location+ge);i.bindBuffer(34962,j);for(let ge=0;ge<$.locationSize;ge++)D($.location+ge,Ne/$.locationSize,Z,ye,Ne*Te,Ne/$.locationSize*ge*Te)}}else if(Y!==void 0){const ye=Y[te];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv($.location,ye);break;case 3:i.vertexAttrib3fv($.location,ye);break;case 4:i.vertexAttrib4fv($.location,ye);break;default:i.vertexAttrib1fv($.location,ye)}}}}v()}function G(){y();for(const F in a){const A=a[F];for(const P in A){const B=A[P];for(const U in B)f(B[U].object),delete B[U];delete A[P]}delete a[F]}}function se(F){if(a[F.id]===void 0)return;const A=a[F.id];for(const P in A){const B=A[P];for(const U in B)f(B[U].object),delete B[U];delete A[P]}delete a[F.id]}function H(F){for(const A in a){const P=a[A];if(P[F.id]===void 0)continue;const B=P[F.id];for(const U in B)f(B[U].object),delete B[U];delete P[F.id]}}function y(){L(),l!==c&&(l=c,d(l.object))}function L(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:y,resetDefaultState:L,dispose:G,releaseStatesOfGeometry:se,releaseStatesOfProgram:H,initAttributes:p,enableAttribute:T,disableUnusedAttributes:v}}function Jx(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,f;if(r)d=i,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Kx(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),d=i.getParameter(35660),f=i.getParameter(3379),g=i.getParameter(34076),_=i.getParameter(34921),x=i.getParameter(36347),m=i.getParameter(36348),p=i.getParameter(36349),T=d>0,M=o||e.has("OES_texture_float"),v=T&&M,D=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:x,maxVaryings:m,maxFragmentUniforms:p,vertexTextures:T,floatFragmentTextures:M,floatVertexTextures:v,maxSamples:D}}function Qx(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new sn,a=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const g=h.length!==0||d||n!==0||r;return r=d,t=u(h,f,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,x=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!x)s?u(null):l();else{const p=s?0:n,T=p*4;let M=m.clippingState||null;c.value=M,M=u(g,d,T,f);for(let v=0;v!==T;++v)M[v]=t[v];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=p}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let x=null;if(_!==0){if(x=c.value,g!==!0||x===null){const m=f+_*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(x===null||x.length<m)&&(x=new Float32Array(m));for(let T=0,M=f;T!==_;++T,M+=4)o.copy(h[T]).applyMatrix4(p,a),o.normal.toArray(x,M),x[M+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}}function $x(i){let e=new WeakMap;function t(o,a){return a===ea?o.mapping=Ri:a===ta&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ea||a===ta)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new qu(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ka extends Ba{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}ka.prototype.isOrthographicCamera=!0;const wi=4,ec=[.125,.215,.35,.446,.526,.582],zn=20,Io=new ka,tc=new be;let Fo=null;const Bn=(1+Math.sqrt(5))/2,pi=1/Bn,nc=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,Bn,pi),new E(0,Bn,-pi),new E(pi,0,Bn),new E(-pi,0,Bn),new E(Bn,pi,0),new E(-Bn,pi,0)];class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Fo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo),e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:Ti,format:Mt,encoding:Sn,depthBuffer:!1},r=rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(s)),this._blurMaterial=t0(s,e,t)}return r}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,r){const a=new xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(tc),u.toneMapping=an,u.autoClear=!1;const f=new Gs({name:"PMREM.Background",side:nt,depthWrite:!1,depthTest:!1}),g=new yt(new wr,f);let _=!1;const x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,_=!0):(f.color.copy(tc),_=!0);for(let m=0;m<6;m++){const p=m%3;p===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):p===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const T=this._cubeSize;Kr(r,p*T,m>2?T:0,T,T),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ri||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Kr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nc[(r-1)%nc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yt(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zn-1),_=s/g,x=isFinite(s)?1+Math.floor(u*_):zn;x>zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zn}`);const m=[];let p=0;for(let I=0;I<zn;++I){const G=I/_,se=Math.exp(-G*G/2);m.push(se),I===0?p+=se:I<x&&(p+=2*se)}for(let I=0;I<m.length;I++)m[I]=m[I]/p;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const M=this._sizeLods[r],v=3*M*(r>T-wi?r-T+wi:0),D=4*(this._cubeSize-M);Kr(t,v,D,3*M,2*M),c.setRenderTarget(t),c.render(h,Io)}}function e0(i){const e=[],t=[],n=[];let r=i;const s=i-wi+1+ec.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-wi?c=ec[o-i+wi-1]:o===0&&(c=0),n.push(c);const l=1/(a-1),u=-l/2,h=1+l/2,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,x=2,m=1,p=new Float32Array(_*g*f),T=new Float32Array(x*g*f),M=new Float32Array(m*g*f);for(let D=0;D<f;D++){const I=D%3*2/3-1,G=D>2?0:-1,se=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];p.set(se,_*g*D),T.set(d,x*g*D);const H=[D,D,D,D,D,D];M.set(H,m*g*D)}const v=new Ye;v.setAttribute("position",new it(p,_)),v.setAttribute("uv",new it(T,x)),v.setAttribute("faceIndex",new it(M,m)),e.push(v),r>wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rc(i,e,t){const n=new Et(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function t0(i,e,t){const n=new Float32Array(zn),r=new E(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function sc(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function oc(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ea||c===ta,u=c===Ri||c===Pi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ic(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new ic(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function i0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function r0(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let x=0,m=_.length;x<m;x++)e.update(_[x],34962)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const p=f.array;_=f.version;for(let T=0,M=p.length;T<M;T+=3){const v=p[T+0],D=p[T+1],I=p[T+2];d.push(v,D,D,I,I,v)}}else{const p=g.array;_=g.version;for(let T=0,M=p.length/3-1;T<M;T+=3){const v=T+0,D=T+1,I=T+2;d.push(v,D,D,I,I,v)}}const x=new(Uu(d)?Wu:Gu)(d,1);x.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,x)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function s0(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){i.drawElements(s,f,a,d*c),t.update(f,s,1)}function h(d,f,g){if(g===0)return;let _,x;if(r)_=i,x="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](s,f,a,d*c,g),t.update(f,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function o0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function a0(i,e){return i[0]-e[0]}function l0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function No(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function c0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new We,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(u);if(x===void 0||x.count!==_){let P=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const T=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],G=u.morphAttributes.color||[];let se=0;T===!0&&(se=1),M===!0&&(se=2),v===!0&&(se=3);let H=u.attributes.position.count*se,y=1;H>e.maxTextureSize&&(y=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const L=new Float32Array(H*y*4*_),F=new Vs(L,H,y,_);F.format=Mt,F.type=Un,F.needsUpdate=!0;const A=se*4;for(let B=0;B<_;B++){const U=D[B],N=I[B],Y=G[B],te=H*y*4*B;for(let $=0;$<U.count;$++){const ne=$*A;T===!0&&(o.fromBufferAttribute(U,$),U.normalized===!0&&No(o,U),L[te+ne+0]=o.x,L[te+ne+1]=o.y,L[te+ne+2]=o.z,L[te+ne+3]=0),M===!0&&(o.fromBufferAttribute(N,$),N.normalized===!0&&No(o,N),L[te+ne+4]=o.x,L[te+ne+5]=o.y,L[te+ne+6]=o.z,L[te+ne+7]=0),v===!0&&(o.fromBufferAttribute(Y,$),Y.normalized===!0&&No(o,N),L[te+ne+8]=o.x,L[te+ne+9]=o.y,L[te+ne+10]=o.z,L[te+ne+11]=Y.itemSize===4?o.w:1)}}x={count:_,texture:F,size:new Q(H,y)},s.set(u,x),u.addEventListener("dispose",P)}let m=0;for(let T=0;T<f.length;T++)m+=f[T];const p=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",p),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const v=_[M];v[0]=M,v[1]=f[M]}_.sort(l0);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(a0);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let M=0;M<8;M++){const v=a[M],D=v[0],I=v[1];D!==Number.MAX_SAFE_INTEGER&&I?(x&&u.getAttribute("morphTarget"+M)!==x[D]&&u.setAttribute("morphTarget"+M,x[D]),m&&u.getAttribute("morphNormal"+M)!==m[D]&&u.setAttribute("morphNormal"+M,m[D]),r[M]=I,p+=I):(x&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),m&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const T=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function u0(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Xu=new ut,Yu=new Vs,Zu=new Oa,Ju=new Ws,ac=[],lc=[],cc=new Float32Array(16),uc=new Float32Array(9),hc=new Float32Array(4);function ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ac[r];if(s===void 0&&(s=new Float32Array(r),ac[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function js(i,e){let t=lc[e];t===void 0&&(t=new Int32Array(e),lc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function m0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(vt(t,n))return;hc.set(n),i.uniformMatrix2fv(this.addr,!1,hc),gt(t,n)}}function g0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(vt(t,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),gt(t,n)}}function _0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(vt(t,n))return;cc.set(n),i.uniformMatrix4fv(this.addr,!1,cc),gt(t,n)}}function x0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function y0(i,e){const t=this.cache;vt(t,e)||(i.uniform2iv(this.addr,e),gt(t,e))}function v0(i,e){const t=this.cache;vt(t,e)||(i.uniform3iv(this.addr,e),gt(t,e))}function b0(i,e){const t=this.cache;vt(t,e)||(i.uniform4iv(this.addr,e),gt(t,e))}function M0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function w0(i,e){const t=this.cache;vt(t,e)||(i.uniform2uiv(this.addr,e),gt(t,e))}function S0(i,e){const t=this.cache;vt(t,e)||(i.uniform3uiv(this.addr,e),gt(t,e))}function E0(i,e){const t=this.cache;vt(t,e)||(i.uniform4uiv(this.addr,e),gt(t,e))}function T0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Xu,r)}function A0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Zu,r)}function C0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ju,r)}function L0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Yu,r)}function R0(i){switch(i){case 5126:return h0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return v0;case 35669:case 35673:return b0;case 5125:return M0;case 36294:return w0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return L0}}function P0(i,e){i.uniform1fv(this.addr,e)}function D0(i,e){const t=ki(e,this.size,2);i.uniform2fv(this.addr,t)}function I0(i,e){const t=ki(e,this.size,3);i.uniform3fv(this.addr,t)}function F0(i,e){const t=ki(e,this.size,4);i.uniform4fv(this.addr,t)}function N0(i,e){const t=ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function O0(i,e){const t=ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function B0(i,e){const t=ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function z0(i,e){i.uniform1iv(this.addr,e)}function U0(i,e){i.uniform2iv(this.addr,e)}function k0(i,e){i.uniform3iv(this.addr,e)}function H0(i,e){i.uniform4iv(this.addr,e)}function V0(i,e){i.uniform1uiv(this.addr,e)}function G0(i,e){i.uniform2uiv(this.addr,e)}function W0(i,e){i.uniform3uiv(this.addr,e)}function q0(i,e){i.uniform4uiv(this.addr,e)}function j0(i,e,t){const n=e.length,r=js(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Xu,r[s])}function X0(i,e,t){const n=e.length,r=js(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Zu,r[s])}function Y0(i,e,t){const n=e.length,r=js(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Ju,r[s])}function Z0(i,e,t){const n=e.length,r=js(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Yu,r[s])}function J0(i){switch(i){case 5126:return P0;case 35664:return D0;case 35665:return I0;case 35666:return F0;case 35674:return N0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return z0;case 35667:case 35671:return U0;case 35668:case 35672:return k0;case 35669:case 35673:return H0;case 5125:return V0;case 36294:return G0;case 36295:return W0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}function K0(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=R0(e.type)}function Ku(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=J0(e.type)}Ku.prototype.updateCache=function(i){const e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),gt(e,i)};function Qu(i){this.id=i,this.seq=[],this.map={}}Qu.prototype.setValue=function(i,e,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(i,e[o.id],t)}};const Oo=/(\w+)(\])?(\[|\.)?/g;function dc(i,e){i.seq.push(e),i.map[e.id]=e}function Q0(i,e,t){const n=i.name,r=n.length;for(Oo.lastIndex=0;;){const s=Oo.exec(n),o=Oo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){dc(t,l===void 0?new K0(a,i,e):new Ku(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Qu(a),dc(t,h)),t=h}}}function vn(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);Q0(r,s,this)}}vn.prototype.setValue=function(i,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(i,t,n)};vn.prototype.setOptional=function(i,e,t){const n=e[t];n!==void 0&&this.setValue(i,t,n)};vn.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};vn.seqWithValue=function(i,e){const t=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in e&&t.push(s)}return t};function fc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let $0=0;function ey(i){const e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function ty(i){switch(i){case Sn:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function pc(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();return n&&r===""?"":t.toUpperCase()+`

`+r+`

`+ey(i.getShaderSource(e))}function ny(i,e){const t=ty(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function iy(i,e){let t;switch(e){case Sm:t="Linear";break;case Em:t="Reinhard";break;case Tm:t="OptimizedCineon";break;case Am:t="ACESFilmic";break;case Cm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ry(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ir).join(`
`)}function sy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oy(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ir(i){return i!==""}function mc(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(i){return i.replace(ay,ly)}function ly(i,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return aa(t)}const cy=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(i){return i.replace(uy,$u).replace(cy,hy)}function hy(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),$u(i,e,t,n)}function $u(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ia?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function fy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Pi:e="ENVMAP_TYPE_CUBE";break;case ks:case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function py(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:case Fa:e="ENVMAP_MODE_REFRACTION";break}return e}function my(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Us:e="ENVMAP_BLENDING_MULTIPLY";break;case Mm:e="ENVMAP_BLENDING_MIX";break;case wm:e="ENVMAP_BLENDING_ADD";break}return e}function gy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e/32+1)+3,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _y(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=dy(t),l=fy(t),u=py(t),h=my(t),d=gy(t),f=t.isWebGL2?"":ry(t),g=sy(s),_=r.createProgram();let x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[g].filter(ir).join(`
`),x.length>0&&(x+=`
`),m=[f,g].filter(ir).join(`
`),m.length>0&&(m+=`
`)):(x=[xc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),m=[f,xc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Fe.tonemapping_pars_fragment:"",t.toneMapping!==an?iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,ny("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=aa(o),o=mc(o,t),o=gc(o,t),a=aa(a),a=mc(a,t),a=gc(a,t),o=_c(o),a=_c(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=p+x+o,M=p+m+a,v=fc(r,35633,T),D=fc(r,35632,M);if(r.attachShader(_,v),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const se=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(v).trim(),y=r.getShaderInfoLog(D).trim();let L=!0,F=!0;if(r.getProgramParameter(_,35714)===!1){L=!1;const A=pc(r,v,"vertex"),P=pc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,35715)+`

Program Info Log: `+se+`
`+A+`
`+P)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(H===""||y==="")&&(F=!1);F&&(this.diagnostics={runnable:L,programLog:se,vertexShader:{log:H,prefix:x},fragmentShader:{log:y,prefix:m}})}r.deleteShader(v),r.deleteShader(D);let I;this.getUniforms=function(){return I===void 0&&(I=new vn(r,_)),I};let G;return this.getAttributes=function(){return G===void 0&&(G=oy(r,_)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=$0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=D,this}let xy=0;class yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new vy;t.set(e,n)}return t.get(e)}}class vy{constructor(){this.id=xy++,this.usedTimes=0}}function by(i,e,t,n,r,s,o){const a=new Vu,c=new yy,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.floatVertexTextures,f=r.maxVertexUniforms,g=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){const F=y.skeleton.bones;if(d)return 1024;{const P=Math.floor((f-20)/4),B=Math.min(P,F.length);return B<F.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+F.length+" bones. This GPU supports "+B+"."),0):B}}function p(y,L,F,A,P){const B=A.fog,U=P.geometry,N=y.isMeshStandardMaterial?A.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||N),te=!!Y&&(Y.mapping===ks||Y.mapping===Fa)?Y.image.height:null,$=x[y.type],ne=P.isSkinnedMesh?m(P):0;y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const ye=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ne=ye!==void 0?ye.length:0;let Me=0;U.morphAttributes.position!==void 0&&(Me=1),U.morphAttributes.normal!==void 0&&(Me=2),U.morphAttributes.color!==void 0&&(Me=3);let j,Z,Te,ge;if($){const oe=Gt[$];j=oe.vertexShader,Z=oe.fragmentShader}else j=y.vertexShader,Z=y.fragmentShader,c.update(y),Te=c.getVertexShaderID(y),ge=c.getFragmentShaderID(y);const _e=i.getRenderTarget(),W=y.alphaTest>0,k=y.clearcoat>0;return{isWebGL2:u,shaderID:$,shaderName:y.type,vertexShader:j,fragmentShader:Z,defines:y.defines,customVertexShaderID:Te,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,instancing:P.isInstancedMesh===!0,instancingColor:P.isInstancedMesh===!0&&P.instanceColor!==null,supportsVertexTextures:g,outputEncoding:_e===null?i.outputEncoding:_e.isXRRenderTarget===!0?_e.texture.encoding:Sn,map:!!y.map,matcap:!!y.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:te,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Km,tangentSpaceNormalMap:y.normalMapType===Bi,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ze,clearcoat:k,clearcoatMap:k&&!!y.clearcoatMap,clearcoatRoughnessMap:k&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:k&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ei,alphaMap:!!y.alphaMap,alphaTest:W,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!U.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!B,useFog:y.fog,fogExp2:B&&B.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0&&ne>0,maxBones:ne,useVertexTexture:d,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Me,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:y.toneMapped?i.toneMapping:an,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Li,flipSided:y.side===nt,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function T(y){const L=[];if(y.shaderID?L.push(y.shaderID):(L.push(y.customVertexShaderID),L.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)L.push(F),L.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(M(L,y),v(L,y),L.push(i.outputEncoding)),L.push(y.customProgramCacheKey),L.join()}function M(y,L){y.push(L.precision),y.push(L.outputEncoding),y.push(L.envMapMode),y.push(L.envMapCubeUVHeight),y.push(L.combine),y.push(L.vertexUvs),y.push(L.fogExp2),y.push(L.sizeAttenuation),y.push(L.maxBones),y.push(L.morphTargetsCount),y.push(L.morphAttributeCount),y.push(L.numDirLights),y.push(L.numPointLights),y.push(L.numSpotLights),y.push(L.numHemiLights),y.push(L.numRectAreaLights),y.push(L.numDirLightShadows),y.push(L.numPointLightShadows),y.push(L.numSpotLightShadows),y.push(L.shadowMapType),y.push(L.toneMapping),y.push(L.numClippingPlanes),y.push(L.numClipIntersection)}function v(y,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.displacementMap&&a.enable(18),L.specularMap&&a.enable(19),L.roughnessMap&&a.enable(20),L.metalnessMap&&a.enable(21),L.gradientMap&&a.enable(22),L.alphaMap&&a.enable(23),L.alphaTest&&a.enable(24),L.vertexColors&&a.enable(25),L.vertexAlphas&&a.enable(26),L.vertexUvs&&a.enable(27),L.vertexTangents&&a.enable(28),L.uvsVertexOnly&&a.enable(29),L.fog&&a.enable(30),y.push(a.mask),a.disableAll(),L.useFog&&a.enable(0),L.flatShading&&a.enable(1),L.logarithmicDepthBuffer&&a.enable(2),L.skinning&&a.enable(3),L.useVertexTexture&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.physicallyCorrectLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.depthPacking&&a.enable(13),L.dithering&&a.enable(14),L.specularIntensityMap&&a.enable(15),L.specularColorMap&&a.enable(16),L.transmission&&a.enable(17),L.transmissionMap&&a.enable(18),L.thicknessMap&&a.enable(19),L.sheen&&a.enable(20),L.sheenColorMap&&a.enable(21),L.sheenRoughnessMap&&a.enable(22),L.decodeVideoTexture&&a.enable(23),L.opaque&&a.enable(24),y.push(a.mask)}function D(y){const L=x[y.type];let F;if(L){const A=Gt[L];F=mg.clone(A.uniforms)}else F=y.uniforms;return F}function I(y,L){let F;for(let A=0,P=l.length;A<P;A++){const B=l[A];if(B.cacheKey===L){F=B,++F.usedTimes;break}}return F===void 0&&(F=new _y(i,L,y,s),l.push(F)),F}function G(y){if(--y.usedTimes===0){const L=l.indexOf(y);l[L]=l[l.length-1],l.pop(),y.destroy()}}function se(y){c.remove(y)}function H(){c.dispose()}return{getParameters:p,getProgramCacheKey:T,getUniforms:D,acquireProgram:I,releaseProgram:G,releaseShaderCache:se,programs:l,dispose:H}}function My(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function wy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,f,g,_,x){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:x},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=x),e++,m}function a(h,d,f,g,_,x){const m=o(h,d,f,g,_,x);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(h,d,f,g,_,x){const m=o(h,d,f,g,_,x);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||wy),n.length>1&&n.sort(d||yc),r.length>1&&r.sort(d||yc)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Sy(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new vc,i.set(n,[s])):r>=i.get(n).length?(s=new vc,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ey(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new be};break;case"SpotLight":t={position:new E,direction:new E,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function Ty(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ay=0;function Cy(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function Ly(i,e){const t=new Ey,n=Ty(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new E);const s=new E,o=new Se,a=new Se;function c(u,h){let d=0,f=0,g=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let _=0,x=0,m=0,p=0,T=0,M=0,v=0,D=0;u.sort(Cy);const I=h!==!0?Math.PI:1;for(let se=0,H=u.length;se<H;se++){const y=u[se],L=y.color,F=y.intensity,A=y.distance,P=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)d+=L.r*F*I,f+=L.g*F*I,g+=L.b*F*I;else if(y.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(y.sh.coefficients[B],F);else if(y.isDirectionalLight){const B=t.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity*I),y.castShadow){const U=y.shadow,N=n.get(y);N.shadowBias=U.bias,N.shadowNormalBias=U.normalBias,N.shadowRadius=U.radius,N.shadowMapSize=U.mapSize,r.directionalShadow[_]=N,r.directionalShadowMap[_]=P,r.directionalShadowMatrix[_]=y.shadow.matrix,M++}r.directional[_]=B,_++}else if(y.isSpotLight){const B=t.get(y);if(B.position.setFromMatrixPosition(y.matrixWorld),B.color.copy(L).multiplyScalar(F*I),B.distance=A,B.coneCos=Math.cos(y.angle),B.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),B.decay=y.decay,y.castShadow){const U=y.shadow,N=n.get(y);N.shadowBias=U.bias,N.shadowNormalBias=U.normalBias,N.shadowRadius=U.radius,N.shadowMapSize=U.mapSize,r.spotShadow[m]=N,r.spotShadowMap[m]=P,r.spotShadowMatrix[m]=y.shadow.matrix,D++}r.spot[m]=B,m++}else if(y.isRectAreaLight){const B=t.get(y);B.color.copy(L).multiplyScalar(F),B.halfWidth.set(y.width*.5,0,0),B.halfHeight.set(0,y.height*.5,0),r.rectArea[p]=B,p++}else if(y.isPointLight){const B=t.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity*I),B.distance=y.distance,B.decay=y.decay,y.castShadow){const U=y.shadow,N=n.get(y);N.shadowBias=U.bias,N.shadowNormalBias=U.normalBias,N.shadowRadius=U.radius,N.shadowMapSize=U.mapSize,N.shadowCameraNear=U.camera.near,N.shadowCameraFar=U.camera.far,r.pointShadow[x]=N,r.pointShadowMap[x]=P,r.pointShadowMatrix[x]=y.shadow.matrix,v++}r.point[x]=B,x++}else if(y.isHemisphereLight){const B=t.get(y);B.skyColor.copy(y.color).multiplyScalar(F*I),B.groundColor.copy(y.groundColor).multiplyScalar(F*I),r.hemi[T]=B,T++}}p>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=g;const G=r.hash;(G.directionalLength!==_||G.pointLength!==x||G.spotLength!==m||G.rectAreaLength!==p||G.hemiLength!==T||G.numDirectionalShadows!==M||G.numPointShadows!==v||G.numSpotShadows!==D)&&(r.directional.length=_,r.spot.length=m,r.rectArea.length=p,r.point.length=x,r.hemi.length=T,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=v,r.spotShadowMatrix.length=D,G.directionalLength=_,G.pointLength=x,G.spotLength=m,G.rectAreaLength=p,G.hemiLength=T,G.numDirectionalShadows=M,G.numPointShadows=v,G.numSpotShadows=D,r.version=Ay++)}function l(u,h){let d=0,f=0,g=0,_=0,x=0;const m=h.matrixWorldInverse;for(let p=0,T=u.length;p<T;p++){const M=u[p];if(M.isDirectionalLight){const v=r.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isSpotLight){const v=r.spot[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const v=r.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const v=r.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=r.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),v.direction.normalize(),x++}}}return{setup:c,setupView:l,state:r}}function bc(i,e){const t=new Ly(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Ry(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new bc(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new bc(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class Va extends rt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Va.prototype.isMeshDepthMaterial=!0;class Ga extends rt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Ga.prototype.isMeshDistanceMaterial=!0;const Py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eh(i,e,t){let n=new qs;const r=new Q,s=new Q,o=new We,a=new Va({depthPacking:Jm}),c=new Ga,l={},u=t.maxTextureSize,h={0:nt,1:dr,2:Li},d=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:Py,fragmentShader:Dy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new yt(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia,this.render=function(M,v,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;const I=i.getRenderTarget(),G=i.getActiveCubeFace(),se=i.getActiveMipmapLevel(),H=i.state;H.setBlending(yn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let y=0,L=M.length;y<L;y++){const F=M[y],A=F.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;r.copy(A.mapSize);const P=A.getFrameExtents();if(r.multiply(P),s.copy(A.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/P.x),r.x=s.x*P.x,A.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/P.y),r.y=s.y*P.y,A.mapSize.y=s.y)),A.map===null&&!A.isPointLightShadow&&this.type===nr){const U={minFilter:pt,magFilter:pt,format:Mt};A.map=new Et(r.x,r.y,U),A.map.texture.name=F.name+".shadowMap",A.mapPass=new Et(r.x,r.y,U),A.camera.updateProjectionMatrix()}if(A.map===null){const U={minFilter:ot,magFilter:ot,format:Mt};A.map=new Et(r.x,r.y,U),A.map.texture.name=F.name+".shadowMap",A.camera.updateProjectionMatrix()}i.setRenderTarget(A.map),i.clear();const B=A.getViewportCount();for(let U=0;U<B;U++){const N=A.getViewport(U);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),H.viewport(o),A.updateMatrices(F,U),n=A.getFrustum(),T(v,D,A.camera,F,this.type)}!A.isPointLightShadow&&this.type===nr&&m(A,D),A.needsUpdate=!1}x.needsUpdate=!1,i.setRenderTarget(I,G,se)};function m(M,v){const D=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(v,null,D,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(v,null,D,f,_,null)}function p(M,v,D,I,G,se){let H=null;const y=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(y!==void 0?H=y:H=D.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const L=H.uuid,F=v.uuid;let A=l[L];A===void 0&&(A={},l[L]=A);let P=A[F];P===void 0&&(P=H.clone(),A[F]=P),H=P}return H.visible=v.visible,H.wireframe=v.wireframe,se===nr?H.side=v.shadowSide!==null?v.shadowSide:v.side:H.side=v.shadowSide!==null?v.shadowSide:h[v.side],H.alphaMap=v.alphaMap,H.alphaTest=v.alphaTest,H.clipShadows=v.clipShadows,H.clippingPlanes=v.clippingPlanes,H.clipIntersection=v.clipIntersection,H.displacementMap=v.displacementMap,H.displacementScale=v.displacementScale,H.displacementBias=v.displacementBias,H.wireframeLinewidth=v.wireframeLinewidth,H.linewidth=v.linewidth,D.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(H.referencePosition.setFromMatrixPosition(D.matrixWorld),H.nearDistance=I,H.farDistance=G),H}function T(M,v,D,I,G){if(M.visible===!1)return;if(M.layers.test(v.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&G===nr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const y=e.update(M),L=M.material;if(Array.isArray(L)){const F=y.groups;for(let A=0,P=F.length;A<P;A++){const B=F[A],U=L[B.materialIndex];if(U&&U.visible){const N=p(M,U,I,D.near,D.far,G);i.renderBufferDirect(D,null,y,N,M,B)}}}else if(L.visible){const F=p(M,L,I,D.near,D.far,G);i.renderBufferDirect(D,null,y,F,M,null)}}const H=M.children;for(let y=0,L=H.length;y<L;y++)T(H[y],v,D,I,G)}}function Iy(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const fe=new We;let he=null;const Ae=new We(0,0,0,0);return{setMask:function(le){he!==le&&!C&&(i.colorMask(le,le,le,le),he=le)},setLocked:function(le){C=le},setClear:function(le,ee,Le,Oe,_t){_t===!0&&(le*=Oe,ee*=Oe,Le*=Oe),fe.set(le,ee,Le,Oe),Ae.equals(fe)===!1&&(i.clearColor(le,ee,Le,Oe),Ae.copy(fe))},reset:function(){C=!1,he=null,Ae.set(-1,0,0,0)}}}function s(){let C=!1,fe=null,he=null,Ae=null;return{setTest:function(le){le?Me(2929):j(2929)},setMask:function(le){fe!==le&&!C&&(i.depthMask(le),fe=le)},setFunc:function(le){if(he!==le){if(le)switch(le){case mm:i.depthFunc(512);break;case gm:i.depthFunc(519);break;case _m:i.depthFunc(513);break;case $o:i.depthFunc(515);break;case xm:i.depthFunc(514);break;case ym:i.depthFunc(518);break;case vm:i.depthFunc(516);break;case bm:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);he=le}},setLocked:function(le){C=le},setClear:function(le){Ae!==le&&(i.clearDepth(le),Ae=le)},reset:function(){C=!1,fe=null,he=null,Ae=null}}}function o(){let C=!1,fe=null,he=null,Ae=null,le=null,ee=null,Le=null,Oe=null,_t=null;return{setTest:function(je){C||(je?Me(2960):j(2960))},setMask:function(je){fe!==je&&!C&&(i.stencilMask(je),fe=je)},setFunc:function(je,Ut,kt){(he!==je||Ae!==Ut||le!==kt)&&(i.stencilFunc(je,Ut,kt),he=je,Ae=Ut,le=kt)},setOp:function(je,Ut,kt){(ee!==je||Le!==Ut||Oe!==kt)&&(i.stencilOp(je,Ut,kt),ee=je,Le=Ut,Oe=kt)},setLocked:function(je){C=je},setClear:function(je){_t!==je&&(i.clearStencil(je),_t=je)},reset:function(){C=!1,fe=null,he=null,Ae=null,le=null,ee=null,Le=null,Oe=null,_t=null}}}const a=new r,c=new s,l=new o;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,x=null,m=null,p=null,T=null,M=null,v=null,D=null,I=!1,G=null,se=null,H=null,y=null,L=null;const F=i.getParameter(35661);let A=!1,P=0;const B=i.getParameter(7938);B.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(B)[1]),A=P>=1):B.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),A=P>=2);let U=null,N={};const Y=i.getParameter(3088),te=i.getParameter(2978),$=new We().fromArray(Y),ne=new We().fromArray(te);function ye(C,fe,he){const Ae=new Uint8Array(4),le=i.createTexture();i.bindTexture(C,le),i.texParameteri(C,10241,9728),i.texParameteri(C,10240,9728);for(let ee=0;ee<he;ee++)i.texImage2D(fe+ee,0,6408,1,1,0,6408,5121,Ae);return le}const Ne={};Ne[3553]=ye(3553,3553,1),Ne[34067]=ye(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Me(2929),c.setFunc($o),oe(!1),xe(dl),Me(2884),k(yn);function Me(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function j(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Z(C,fe){return h[C]!==fe?(i.bindFramebuffer(C,fe),h[C]=fe,n&&(C===36009&&(h[36160]=fe),C===36160&&(h[36009]=fe)),!0):!1}function Te(C,fe){let he=f,Ae=!1;if(C)if(he=d.get(fe),he===void 0&&(he=[],d.set(fe,he)),C.isWebGLMultipleRenderTargets){const le=C.texture;if(he.length!==le.length||he[0]!==36064){for(let ee=0,Le=le.length;ee<Le;ee++)he[ee]=36064+ee;he.length=le.length,Ae=!0}}else he[0]!==36064&&(he[0]=36064,Ae=!0);else he[0]!==1029&&(he[0]=1029,Ae=!0);Ae&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function ge(C){return g!==C?(i.useProgram(C),g=C,!0):!1}const _e={[yi]:32774,[rm]:32778,[sm]:32779};if(n)_e[gl]=32775,_e[_l]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(_e[gl]=C.MIN_EXT,_e[_l]=C.MAX_EXT)}const W={[om]:0,[am]:1,[lm]:768,[Nu]:770,[pm]:776,[dm]:774,[um]:772,[cm]:769,[Ou]:771,[fm]:775,[hm]:773};function k(C,fe,he,Ae,le,ee,Le,Oe){if(C===yn){_===!0&&(j(3042),_=!1);return}if(_===!1&&(Me(3042),_=!0),C!==im){if(C!==x||Oe!==I){if((m!==yi||M!==yi)&&(i.blendEquation(32774),m=yi,M=yi),Oe)switch(C){case Ei:i.blendFuncSeparate(1,771,1,771);break;case fl:i.blendFunc(1,1);break;case pl:i.blendFuncSeparate(0,769,0,1);break;case ml:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ei:i.blendFuncSeparate(770,771,1,771);break;case fl:i.blendFunc(770,1);break;case pl:i.blendFuncSeparate(0,769,0,1);break;case ml:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}p=null,T=null,v=null,D=null,x=C,I=Oe}return}le=le||fe,ee=ee||he,Le=Le||Ae,(fe!==m||le!==M)&&(i.blendEquationSeparate(_e[fe],_e[le]),m=fe,M=le),(he!==p||Ae!==T||ee!==v||Le!==D)&&(i.blendFuncSeparate(W[he],W[Ae],W[ee],W[Le]),p=he,T=Ae,v=ee,D=Le),x=C,I=null}function ie(C,fe){C.side===Li?j(2884):Me(2884);let he=C.side===nt;fe&&(he=!he),oe(he),C.blending===Ei&&C.transparent===!1?k(yn):k(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const Ae=C.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ee(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Me(32926):j(32926)}function oe(C){G!==C&&(C?i.frontFace(2304):i.frontFace(2305),G=C)}function xe(C){C!==em?(Me(2884),C!==se&&(C===dl?i.cullFace(1029):C===tm?i.cullFace(1028):i.cullFace(1032))):j(2884),se=C}function de(C){C!==H&&(A&&i.lineWidth(C),H=C)}function Ee(C,fe,he){C?(Me(32823),(y!==fe||L!==he)&&(i.polygonOffset(fe,he),y=fe,L=he)):j(32823)}function ve(C){C?Me(3089):j(3089)}function Re(C){C===void 0&&(C=33984+F-1),U!==C&&(i.activeTexture(C),U=C)}function qe(C,fe){U===null&&Re();let he=N[U];he===void 0&&(he={type:void 0,texture:void 0},N[U]=he),(he.type!==C||he.texture!==fe)&&(i.bindTexture(C,fe||Ne[C]),he.type=C,he.texture=fe)}function S(){const C=N[U];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function b(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function R(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(C){$.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),$.copy(C))}function pe(C){ne.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ne.copy(C))}function ce(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},U=null,N={},h={},d=new WeakMap,f=[],g=null,_=!1,x=null,m=null,p=null,T=null,M=null,v=null,D=null,I=!1,G=null,se=null,H=null,y=null,L=null,$.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Me,disable:j,bindFramebuffer:Z,drawBuffers:Te,useProgram:ge,setBlending:k,setMaterial:ie,setFlipSided:oe,setCullFace:xe,setLineWidth:de,setPolygonOffset:Ee,setScissorTest:ve,activeTexture:Re,bindTexture:qe,unbindTexture:S,compressedTexImage2D:b,texImage2D:X,texImage3D:R,texStorage2D:me,texStorage3D:we,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:ae,scissor:re,viewport:pe,reset:ce}}function Fy(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,b){return x?new OffscreenCanvas(S,b):mr("canvas")}function p(S,b,q,K){let ae=1;if((S.width>K||S.height>K)&&(ae=K/Math.max(S.width,S.height)),ae<1||b===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){const me=b?oa:Math.floor,we=me(ae*S.width),X=me(ae*S.height);g===void 0&&(g=m(we,X));const R=q?m(we,X):g;return R.width=we,R.height=X,R.getContext("2d").drawImage(S,0,0,we,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+we+"x"+X+")."),R}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function T(S){return Vl(S.width)&&Vl(S.height)}function M(S){return a?!1:S.wrapS!==Ft||S.wrapT!==Ft||S.minFilter!==ot&&S.minFilter!==pt}function v(S,b){return S.generateMipmaps&&b&&S.minFilter!==ot&&S.minFilter!==pt}function D(S){i.generateMipmap(S)}function I(S,b,q,K,ae=!1){if(a===!1)return b;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let me=b;return b===6403&&(q===5126&&(me=33326),q===5131&&(me=33325),q===5121&&(me=33321)),b===33319&&(q===5126&&(me=33328),q===5131&&(me=33327),q===5121&&(me=33323)),b===6408&&(q===5126&&(me=34836),q===5131&&(me=34842),q===5121&&(me=K===Ze&&ae===!1?35907:32856),q===32819&&(me=32854),q===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function G(S,b,q){return v(S,q)===!0||S.isFramebufferTexture&&S.minFilter!==ot&&S.minFilter!==pt?Math.log2(Math.max(b.width,b.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?b.mipmaps.length:1}function se(S){return S===ot||S===xl||S===yl?9728:9729}function H(S){const b=S.target;b.removeEventListener("dispose",H),L(b),b.isVideoTexture&&f.delete(b)}function y(S){const b=S.target;b.removeEventListener("dispose",y),A(b)}function L(S){const b=n.get(S);if(b.__webglInit===void 0)return;const q=S.source,K=_.get(q);if(K){const ae=K[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&F(S),Object.keys(K).length===0&&_.delete(q)}n.remove(S)}function F(S){const b=n.get(S);i.deleteTexture(b.__webglTexture);const q=S.source,K=_.get(q);delete K[b.__cacheKey],o.memory.textures--}function A(S){const b=S.texture,q=n.get(S),K=n.get(b);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)i.deleteFramebuffer(q.__webglFramebuffer[ae]),q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[ae]);else i.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer&&i.deleteRenderbuffer(q.__webglColorRenderbuffer),q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer);if(S.isWebGLMultipleRenderTargets)for(let ae=0,me=b.length;ae<me;ae++){const we=n.get(b[ae]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(b[ae])}n.remove(b),n.remove(S)}let P=0;function B(){P=0}function U(){const S=P;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),P+=1,S}function N(S){const b=[];return b.push(S.wrapS),b.push(S.wrapT),b.push(S.magFilter),b.push(S.minFilter),b.push(S.anisotropy),b.push(S.internalFormat),b.push(S.format),b.push(S.type),b.push(S.generateMipmaps),b.push(S.premultiplyAlpha),b.push(S.flipY),b.push(S.unpackAlignment),b.push(S.encoding),b.join()}function Y(S,b){const q=n.get(S);if(S.isVideoTexture&&Re(S),S.isRenderTargetTexture===!1&&S.version>0&&q.__version!==S.version){const K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(q,S,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,q.__webglTexture)}function te(S,b){const q=n.get(S);if(S.version>0&&q.__version!==S.version){Z(q,S,b);return}t.activeTexture(33984+b),t.bindTexture(35866,q.__webglTexture)}function $(S,b){const q=n.get(S);if(S.version>0&&q.__version!==S.version){Z(q,S,b);return}t.activeTexture(33984+b),t.bindTexture(32879,q.__webglTexture)}function ne(S,b){const q=n.get(S);if(S.version>0&&q.__version!==S.version){Te(q,S,b);return}t.activeTexture(33984+b),t.bindTexture(34067,q.__webglTexture)}const ye={[na]:10497,[Ft]:33071,[ia]:33648},Ne={[ot]:9728,[xl]:9984,[yl]:9986,[pt]:9729,[Lm]:9985,[Hs]:9987};function Me(S,b,q){if(q?(i.texParameteri(S,10242,ye[b.wrapS]),i.texParameteri(S,10243,ye[b.wrapT]),(S===32879||S===35866)&&i.texParameteri(S,32882,ye[b.wrapR]),i.texParameteri(S,10240,Ne[b.magFilter]),i.texParameteri(S,10241,Ne[b.minFilter])):(i.texParameteri(S,10242,33071),i.texParameteri(S,10243,33071),(S===32879||S===35866)&&i.texParameteri(S,32882,33071),(b.wrapS!==Ft||b.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,10240,se(b.magFilter)),i.texParameteri(S,10241,se(b.minFilter)),b.minFilter!==ot&&b.minFilter!==pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(b.type===Un&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(S,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function j(S,b){let q=!1;S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",H));const K=b.source;let ae=_.get(K);ae===void 0&&(ae={},_.set(K,ae));const me=N(b);if(me!==S.__cacheKey){ae[me]===void 0&&(ae[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ae[me].usedTimes++;const we=ae[S.__cacheKey];we!==void 0&&(ae[S.__cacheKey].usedTimes--,we.usedTimes===0&&F(b)),S.__cacheKey=me,S.__webglTexture=ae[me].texture}return q}function Z(S,b,q){let K=3553;b.isDataArrayTexture&&(K=35866),b.isData3DTexture&&(K=32879);const ae=j(S,b),me=b.source;if(t.activeTexture(33984+q),t.bindTexture(K,S.__webglTexture),me.version!==me.__currentVersion||ae===!0){i.pixelStorei(37440,b.flipY),i.pixelStorei(37441,b.premultiplyAlpha),i.pixelStorei(3317,b.unpackAlignment),i.pixelStorei(37443,0);const we=M(b)&&T(b.image)===!1;let X=p(b.image,we,!1,u);X=qe(b,X);const R=T(X)||a,re=s.convert(b.format,b.encoding);let pe=s.convert(b.type),ce=I(b.internalFormat,re,pe,b.encoding,b.isVideoTexture);Me(K,b,R);let C;const fe=b.mipmaps,he=a&&b.isVideoTexture!==!0,Ae=S.__version===void 0,le=G(b,X,R);if(b.isDepthTexture)ce=6402,a?b.type===Un?ce=36012:b.type===ds?ce=33190:b.type===Ai?ce=35056:ce=33189:b.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Vn&&ce===6402&&b.type!==fr&&b.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=fr,pe=s.convert(b.type)),b.format===Di&&ce===6402&&(ce=34041,b.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ai,pe=s.convert(b.type))),he&&Ae?t.texStorage2D(3553,1,ce,X.width,X.height):t.texImage2D(3553,0,ce,X.width,X.height,0,re,pe,null);else if(b.isDataTexture)if(fe.length>0&&R){he&&Ae&&t.texStorage2D(3553,le,ce,fe[0].width,fe[0].height);for(let ee=0,Le=fe.length;ee<Le;ee++)C=fe[ee],he?t.texSubImage2D(3553,ee,0,0,C.width,C.height,re,pe,C.data):t.texImage2D(3553,ee,ce,C.width,C.height,0,re,pe,C.data);b.generateMipmaps=!1}else he?(Ae&&t.texStorage2D(3553,le,ce,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,re,pe,X.data)):t.texImage2D(3553,0,ce,X.width,X.height,0,re,pe,X.data);else if(b.isCompressedTexture){he&&Ae&&t.texStorage2D(3553,le,ce,fe[0].width,fe[0].height);for(let ee=0,Le=fe.length;ee<Le;ee++)C=fe[ee],b.format!==Mt?re!==null?he?t.compressedTexSubImage2D(3553,ee,0,0,C.width,C.height,re,C.data):t.compressedTexImage2D(3553,ee,ce,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?t.texSubImage2D(3553,ee,0,0,C.width,C.height,re,pe,C.data):t.texImage2D(3553,ee,ce,C.width,C.height,0,re,pe,C.data)}else if(b.isDataArrayTexture)he?(Ae&&t.texStorage3D(35866,le,ce,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,re,pe,X.data)):t.texImage3D(35866,0,ce,X.width,X.height,X.depth,0,re,pe,X.data);else if(b.isData3DTexture)he?(Ae&&t.texStorage3D(32879,le,ce,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,re,pe,X.data)):t.texImage3D(32879,0,ce,X.width,X.height,X.depth,0,re,pe,X.data);else if(b.isFramebufferTexture)he&&Ae?t.texStorage2D(3553,le,ce,X.width,X.height):t.texImage2D(3553,0,ce,X.width,X.height,0,re,pe,null);else if(fe.length>0&&R){he&&Ae&&t.texStorage2D(3553,le,ce,fe[0].width,fe[0].height);for(let ee=0,Le=fe.length;ee<Le;ee++)C=fe[ee],he?t.texSubImage2D(3553,ee,0,0,re,pe,C):t.texImage2D(3553,ee,ce,re,pe,C);b.generateMipmaps=!1}else he?(Ae&&t.texStorage2D(3553,le,ce,X.width,X.height),t.texSubImage2D(3553,0,0,0,re,pe,X)):t.texImage2D(3553,0,ce,re,pe,X);v(b,R)&&D(K),me.__currentVersion=me.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function Te(S,b,q){if(b.image.length!==6)return;const K=j(S,b),ae=b.source;if(t.activeTexture(33984+q),t.bindTexture(34067,S.__webglTexture),ae.version!==ae.__currentVersion||K===!0){i.pixelStorei(37440,b.flipY),i.pixelStorei(37441,b.premultiplyAlpha),i.pixelStorei(3317,b.unpackAlignment),i.pixelStorei(37443,0);const me=b.isCompressedTexture||b.image[0].isCompressedTexture,we=b.image[0]&&b.image[0].isDataTexture,X=[];for(let ee=0;ee<6;ee++)!me&&!we?X[ee]=p(b.image[ee],!1,!0,l):X[ee]=we?b.image[ee].image:b.image[ee],X[ee]=qe(b,X[ee]);const R=X[0],re=T(R)||a,pe=s.convert(b.format,b.encoding),ce=s.convert(b.type),C=I(b.internalFormat,pe,ce,b.encoding),fe=a&&b.isVideoTexture!==!0,he=S.__version===void 0;let Ae=G(b,R,re);Me(34067,b,re);let le;if(me){fe&&he&&t.texStorage2D(34067,Ae,C,R.width,R.height);for(let ee=0;ee<6;ee++){le=X[ee].mipmaps;for(let Le=0;Le<le.length;Le++){const Oe=le[Le];b.format!==Mt?pe!==null?fe?t.compressedTexSubImage2D(34069+ee,Le,0,0,Oe.width,Oe.height,pe,Oe.data):t.compressedTexImage2D(34069+ee,Le,C,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?t.texSubImage2D(34069+ee,Le,0,0,Oe.width,Oe.height,pe,ce,Oe.data):t.texImage2D(34069+ee,Le,C,Oe.width,Oe.height,0,pe,ce,Oe.data)}}}else{le=b.mipmaps,fe&&he&&(le.length>0&&Ae++,t.texStorage2D(34067,Ae,C,X[0].width,X[0].height));for(let ee=0;ee<6;ee++)if(we){fe?t.texSubImage2D(34069+ee,0,0,0,X[ee].width,X[ee].height,pe,ce,X[ee].data):t.texImage2D(34069+ee,0,C,X[ee].width,X[ee].height,0,pe,ce,X[ee].data);for(let Le=0;Le<le.length;Le++){const _t=le[Le].image[ee].image;fe?t.texSubImage2D(34069+ee,Le+1,0,0,_t.width,_t.height,pe,ce,_t.data):t.texImage2D(34069+ee,Le+1,C,_t.width,_t.height,0,pe,ce,_t.data)}}else{fe?t.texSubImage2D(34069+ee,0,0,0,pe,ce,X[ee]):t.texImage2D(34069+ee,0,C,pe,ce,X[ee]);for(let Le=0;Le<le.length;Le++){const Oe=le[Le];fe?t.texSubImage2D(34069+ee,Le+1,0,0,pe,ce,Oe.image[ee]):t.texImage2D(34069+ee,Le+1,C,pe,ce,Oe.image[ee])}}}v(b,re)&&D(34067),ae.__currentVersion=ae.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function ge(S,b,q,K,ae){const me=s.convert(q.format,q.encoding),we=s.convert(q.type),X=I(q.internalFormat,me,we,q.encoding);n.get(b).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,X,b.width,b.height,b.depth,0,me,we,null):t.texImage2D(ae,0,X,b.width,b.height,0,me,we,null)),t.bindFramebuffer(36160,S),ve(b)?d.framebufferTexture2DMultisampleEXT(36160,K,ae,n.get(q).__webglTexture,0,Ee(b)):i.framebufferTexture2D(36160,K,ae,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function _e(S,b,q){if(i.bindRenderbuffer(36161,S),b.depthBuffer&&!b.stencilBuffer){let K=33189;if(q||ve(b)){const ae=b.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Un?K=36012:ae.type===ds&&(K=33190));const me=Ee(b);ve(b)?d.renderbufferStorageMultisampleEXT(36161,me,K,b.width,b.height):i.renderbufferStorageMultisample(36161,me,K,b.width,b.height)}else i.renderbufferStorage(36161,K,b.width,b.height);i.framebufferRenderbuffer(36160,36096,36161,S)}else if(b.depthBuffer&&b.stencilBuffer){const K=Ee(b);q&&ve(b)===!1?i.renderbufferStorageMultisample(36161,K,35056,b.width,b.height):ve(b)?d.renderbufferStorageMultisampleEXT(36161,K,35056,b.width,b.height):i.renderbufferStorage(36161,34041,b.width,b.height),i.framebufferRenderbuffer(36160,33306,36161,S)}else{const K=b.isWebGLMultipleRenderTargets===!0?b.texture[0]:b.texture,ae=s.convert(K.format,K.encoding),me=s.convert(K.type),we=I(K.internalFormat,ae,me,K.encoding),X=Ee(b);q&&ve(b)===!1?i.renderbufferStorageMultisample(36161,X,we,b.width,b.height):ve(b)?d.renderbufferStorageMultisampleEXT(36161,X,we,b.width,b.height):i.renderbufferStorage(36161,we,b.width,b.height)}i.bindRenderbuffer(36161,null)}function W(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,ae=Ee(b);if(b.depthTexture.format===Vn)ve(b)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ae):i.framebufferTexture2D(36160,36096,3553,K,0);else if(b.depthTexture.format===Di)ve(b)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ae):i.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function k(S){const b=n.get(S),q=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");W(b.__webglFramebuffer,S)}else if(q){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]=i.createRenderbuffer(),_e(b.__webglDepthbuffer[K],S,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),_e(b.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function ie(S,b,q){const K=n.get(S);b!==void 0&&ge(K.__webglFramebuffer,S,S.texture,36064,3553),q!==void 0&&k(S)}function oe(S){const b=S.texture,q=n.get(S),K=n.get(b);S.addEventListener("dispose",y),S.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++);const ae=S.isWebGLCubeRenderTarget===!0,me=S.isWebGLMultipleRenderTargets===!0,we=T(S)||a;if(ae){q.__webglFramebuffer=[];for(let X=0;X<6;X++)q.__webglFramebuffer[X]=i.createFramebuffer()}else if(q.__webglFramebuffer=i.createFramebuffer(),me)if(r.drawBuffers){const X=S.texture;for(let R=0,re=X.length;R<re;R++){const pe=n.get(X[R]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&S.samples>0&&ve(S)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,q.__webglColorRenderbuffer);const X=s.convert(b.format,b.encoding),R=s.convert(b.type),re=I(b.internalFormat,X,R,b.encoding),pe=Ee(S);i.renderbufferStorageMultisample(36161,pe,re,S.width,S.height),t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,q.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),S.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(q.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}if(ae){t.bindTexture(34067,K.__webglTexture),Me(34067,b,we);for(let X=0;X<6;X++)ge(q.__webglFramebuffer[X],S,b,36064,34069+X);v(b,we)&&D(34067),t.unbindTexture()}else if(me){const X=S.texture;for(let R=0,re=X.length;R<re;R++){const pe=X[R],ce=n.get(pe);t.bindTexture(3553,ce.__webglTexture),Me(3553,pe,we),ge(q.__webglFramebuffer,S,pe,36064+R,3553),v(pe,we)&&D(3553)}t.unbindTexture()}else{let X=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?X=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(X,K.__webglTexture),Me(X,b,we),ge(q.__webglFramebuffer,S,b,36064,X),v(b,we)&&D(X),t.unbindTexture()}S.depthBuffer&&k(S)}function xe(S){const b=T(S)||a,q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0,ae=q.length;K<ae;K++){const me=q[K];if(v(me,b)){const we=S.isWebGLCubeRenderTarget?34067:3553,X=n.get(me).__webglTexture;t.bindTexture(we,X),D(we),t.unbindTexture()}}}function de(S){if(a&&S.samples>0&&ve(S)===!1){const b=S.width,q=S.height;let K=16384;const ae=[36064],me=S.stencilBuffer?33306:36096;S.depthBuffer&&ae.push(me);const we=n.get(S),X=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;X===!1&&(S.depthBuffer&&(K|=256),S.stencilBuffer&&(K|=1024)),t.bindFramebuffer(36008,we.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,we.__webglFramebuffer),X===!0&&(i.invalidateFramebuffer(36008,[me]),i.invalidateFramebuffer(36009,[me])),i.blitFramebuffer(0,0,b,q,0,0,b,q,K,9728),i.invalidateFramebuffer(36008,ae),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,we.__webglMultisampledFramebuffer)}}function Ee(S){return Math.min(h,S.samples)}function ve(S){const b=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Re(S){const b=o.render.frame;f.get(S)!==b&&(f.set(S,b),S.update())}function qe(S,b){const q=S.encoding,K=S.format,ae=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===ra||q!==Sn&&(q===Ze?a===!1?e.has("EXT_sRGB")===!0&&K===Mt?(S.format=ra,S.minFilter=pt,S.generateMipmaps=!1):b=Zn.sRGBToLinear(b):(K!==Mt||ae!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),b}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=te,this.setTexture3D=$,this.setTextureCube=ne,this.rebindTextures=ie,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ve}function Ny(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Xn)return 5121;if(s===Im)return 32819;if(s===Fm)return 32820;if(s===Rm)return 5120;if(s===Pm)return 5122;if(s===fr)return 5123;if(s===Dm)return 5124;if(s===ds)return 5125;if(s===Un)return 5126;if(s===Ti)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Nm)return 6406;if(s===Mt)return 6408;if(s===Bm)return 6409;if(s===zm)return 6410;if(s===Vn)return 6402;if(s===Di)return 34041;if(s===Um)return 6403;if(s===Om)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ra)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===km)return 36244;if(s===Hm)return 33319;if(s===Vm)return 33320;if(s===Gm)return 36249;if(s===io||s===ro||s===so||s===oo)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===io)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===so)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===io)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ro)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===so)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===oo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vl||s===bl||s===Ml||s===wl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ml)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sl||s===El)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sl)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===El)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Tl||s===Al||s===Cl||s===Ll||s===Rl||s===Pl||s===Dl||s===Il||s===Fl||s===Nl||s===Ol||s===Bl||s===zl||s===Ul)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Tl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Al)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ll)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Il)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ol)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ul)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===kl)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ai)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class th extends xt{constructor(e=[]){super();this.cameras=e}}th.prototype.isArrayCamera=!0;class rr extends Ve{constructor(){super();this.type="Group"}}rr.prototype.isGroup=!0;const Oy={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Oy))),l&&e.hand){o=!0;for(const _ of e.hand.values()){const x=t.getJointPose(_,n);if(l.joints[_.jointName]===void 0){const p=new rr;p.matrixAutoUpdate=!1,p.visible=!1,l.joints[_.jointName]=p,l.add(p)}const m=l.joints[_.jointName];x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=x.radius),m.visible=x!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class nh extends ut{constructor(e,t,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:Vn,u!==Vn&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vn&&(n=fr),n===void 0&&u===Di&&(n=Ai);super(null,r,s,o,a,c,u,n,l);this.image={width:e,height:t},this.magFilter=a!==void 0?a:ot,this.minFilter=c!==void 0?c:ot,this.flipY=!1,this.generateMipmaps=!1}}nh.prototype.isDepthTexture=!0;class By extends Pn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,h=null,d=null;const f=t.getContextAttributes();let g=null,_=null;const x=[],m=new Map,p=new xt;p.layers.enable(1),p.viewport=new We;const T=new xt;T.layers.enable(2),T.viewport=new We;const M=[p,T],v=new th;v.layers.enable(1),v.layers.enable(2);let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Y=x[N];return Y===void 0&&(Y=new Bo,x[N]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(N){let Y=x[N];return Y===void 0&&(Y=new Bo,x[N]=Y),Y.getGripSpace()},this.getHand=function(N){let Y=x[N];return Y===void 0&&(Y=new Bo,x[N]=Y),Y.getHandSpace()};function G(N){const Y=m.get(N.inputSource);Y&&Y.dispatchEvent({type:N.type,data:N.inputSource})}function se(){m.forEach(function(N,Y){N.disconnect(Y)}),m.clear(),D=null,I=null,e.setRenderTarget(g),h=null,u=null,l=null,r=null,_=null,U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return l},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",se),r.addEventListener("inputsourceschange",H),f.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:h}),_=new Et(h.framebufferWidth,h.framebufferHeight,{format:Mt,type:Xn,encoding:e.outputEncoding})}else{let Y=null,te=null,$=null;f.depth&&($=f.stencil?35056:33190,Y=f.stencil?Di:Vn,te=f.stencil?Ai:fr);const ne={colorFormat:e.outputEncoding===Ze?35907:32856,depthFormat:$,scaleFactor:s};l=new XRWebGLBinding(r,t),u=l.createProjectionLayer(ne),r.updateRenderState({layers:[u]}),_=new Et(u.textureWidth,u.textureHeight,{format:Mt,type:Xn,depthTexture:new nh(u.textureWidth,u.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const ye=e.properties.get(_);ye.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(1),o=await r.requestReferenceSpace(a),U.setContext(r),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H(N){const Y=r.inputSources;for(let te=0;te<x.length;te++)m.set(Y[te],x[te]);for(let te=0;te<N.removed.length;te++){const $=N.removed[te],ne=m.get($);ne&&(ne.dispatchEvent({type:"disconnected",data:$}),m.delete($))}for(let te=0;te<N.added.length;te++){const $=N.added[te],ne=m.get($);ne&&ne.dispatchEvent({type:"connected",data:$})}}const y=new E,L=new E;function F(N,Y,te){y.setFromMatrixPosition(Y.matrixWorld),L.setFromMatrixPosition(te.matrixWorld);const $=y.distanceTo(L),ne=Y.projectionMatrix.elements,ye=te.projectionMatrix.elements,Ne=ne[14]/(ne[10]-1),Me=ne[14]/(ne[10]+1),j=(ne[9]+1)/ne[5],Z=(ne[9]-1)/ne[5],Te=(ne[8]-1)/ne[0],ge=(ye[8]+1)/ye[0],_e=Ne*Te,W=Ne*ge,k=$/(-Te+ge),ie=k*-Te;Y.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(ie),N.translateZ(k),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const oe=Ne+k,xe=Me+k,de=_e-ie,Ee=W+($-ie),ve=j*Me/xe*oe,Re=Z*Me/xe*oe;N.projectionMatrix.makePerspective(de,Ee,ve,Re,oe,xe)}function A(N,Y){Y===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Y.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;v.near=T.near=p.near=N.near,v.far=T.far=p.far=N.far,(D!==v.near||I!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,I=v.far);const Y=N.parent,te=v.cameras;A(v,Y);for(let ne=0;ne<te.length;ne++)A(te[ne],Y);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),N.position.copy(v.position),N.quaternion.copy(v.quaternion),N.scale.copy(v.scale),N.matrix.copy(v.matrix),N.matrixWorld.copy(v.matrixWorld);const $=N.children;for(let ne=0,ye=$.length;ne<ye;ne++)$[ne].updateMatrixWorld(!0);te.length===2?F(v,p,T):v.projectionMatrix.copy(p.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(N){u!==null&&(u.fixedFoveation=N),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=N)};let P=null;function B(N,Y){if(c=Y.getViewerPose(o),d=Y,c!==null){const $=c.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let ne=!1;$.length!==v.cameras.length&&(v.cameras.length=0,ne=!0);for(let ye=0;ye<$.length;ye++){const Ne=$[ye];let Me=null;if(h!==null)Me=h.getViewport(Ne);else{const Z=l.getViewSubImage(u,Ne);Me=Z.viewport,ye===0&&(e.setRenderTargetTextures(_,Z.colorTexture,u.ignoreDepthValues?void 0:Z.depthStencilTexture),e.setRenderTarget(_))}const j=M[ye];j.matrix.fromArray(Ne.transform.matrix),j.projectionMatrix.fromArray(Ne.projectionMatrix),j.viewport.set(Me.x,Me.y,Me.width,Me.height),ye===0&&v.matrix.copy(j.matrix),ne===!0&&v.cameras.push(j)}}const te=r.inputSources;for(let $=0;$<x.length;$++){const ne=x[$],ye=te[$];ne.update(ye,Y,o)}P&&P(N,Y),d=null}const U=new ju;U.setAnimationLoop(B),this.setAnimationLoop=function(N){P=N},this.dispose=function(){}}}function zy(i){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function t(m,p,T,M,v){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),c(m,p)):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),l(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?d(m,p,v):h(m,p)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?(n(m,p),g(m,p)):p.isMeshDistanceMaterial?(n(m,p),_(m,p)):p.isMeshNormalMaterial?(n(m,p),x(m,p)):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?o(m,p,T,M):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=i.get(p).envMap;T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix))}function c(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),i.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){h(m,p),m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===nt&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function _(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function x(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Uy(){const i=mr("canvas");return i.style.display="block",i}function Ge(i={}){const e=i.canvas!==void 0?i.canvas:Uy(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;i.context!==void 0?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Sn,this.physicallyCorrectLights=!1,this.toneMapping=an,this.toneMappingExposure=1;const _=this;let x=!1,m=0,p=0,T=null,M=-1,v=null;const D=new We,I=new We;let G=null,se=e.width,H=e.height,y=1,L=null,F=null;const A=new We(0,0,se,H),P=new We(0,0,se,H);let B=!1;const U=new qs;let N=!1,Y=!1,te=null;const $=new Se,ne=new Q,ye=new E,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return T===null?y:1}let j=t;function Z(w,O){for(let V=0;V<w.length;V++){const z=w[V],J=e.getContext(z,O);if(J!==null)return J}return null}try{const w={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Da}`),e.addEventListener("webglcontextlost",C,!1),e.addEventListener("webglcontextrestored",fe,!1),j===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),j=Z(O,w),j===null)throw Z(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,ge,_e,W,k,ie,oe,xe,de,Ee,ve,Re,qe,S,b,q,K,ae,me,we,X,R,re;function pe(){Te=new i0(j),ge=new Kx(j,Te,i),Te.init(ge),R=new Ny(j,Te,ge),_e=new Iy(j,Te,ge),W=new o0(j),k=new My,ie=new Fy(j,Te,_e,k,ge,R,W),oe=new $x(_),xe=new n0(_),de=new vg(j,ge),re=new Zx(j,Te,de,ge),Ee=new r0(j,de,W,re),ve=new u0(j,Ee,de,W),me=new c0(j,ge,ie),q=new Qx(k),Re=new by(_,oe,xe,Te,ge,re,q),qe=new zy(k),S=new Sy,b=new Ry(Te,ge),ae=new Yx(_,oe,_e,ve,u,o),K=new eh(_,ve,ge),we=new Jx(j,Te,W,ge),X=new s0(j,Te,W,ge),W.programs=Re.programs,_.capabilities=ge,_.extensions=Te,_.properties=k,_.renderLists=S,_.shadowMap=K,_.state=_e,_.info=W}pe();const ce=new By(_,j);this.xr=ce,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(w){w!==void 0&&(y=w,this.setSize(se,H,!1))},this.getSize=function(w){return w.set(se,H)},this.setSize=function(w,O,V){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,H=O,e.width=Math.floor(w*y),e.height=Math.floor(O*y),V!==!1&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(se*y,H*y).floor()},this.setDrawingBufferSize=function(w,O,V){se=w,H=O,y=V,e.width=Math.floor(w*V),e.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(A)},this.setViewport=function(w,O,V,z){w.isVector4?A.set(w.x,w.y,w.z,w.w):A.set(w,O,V,z),_e.viewport(D.copy(A).multiplyScalar(y).floor())},this.getScissor=function(w){return w.copy(P)},this.setScissor=function(w,O,V,z){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,O,V,z),_e.scissor(I.copy(P).multiplyScalar(y).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(w){_e.setScissorTest(B=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(w=!0,O=!0,V=!0){let z=0;w&&(z|=16384),O&&(z|=256),V&&(z|=1024),j.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",C,!1),e.removeEventListener("webglcontextrestored",fe,!1),S.dispose(),b.dispose(),k.dispose(),oe.dispose(),xe.dispose(),ve.dispose(),re.dispose(),Re.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Oe),ce.removeEventListener("sessionend",_t),te&&(te.dispose(),te=null),je.stop()};function C(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=W.autoReset,O=K.enabled,V=K.autoUpdate,z=K.needsUpdate,J=K.type;pe(),W.autoReset=w,K.enabled=O,K.autoUpdate=V,K.needsUpdate=z,K.type=J}function he(w){const O=w.target;O.removeEventListener("dispose",he),Ae(O)}function Ae(w){le(w),k.remove(w)}function le(w){const O=k.get(w).programs;O!==void 0&&(O.forEach(function(V){Re.releaseProgram(V)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,z,J,Ce){O===null&&(O=Ne);const Pe=J.isMesh&&J.matrixWorld.determinant()<0,Ie=Fh(w,O,V,z,J);_e.setMaterial(z,Pe);let De=V.index;const ke=V.attributes.position;if(De===null){if(ke===void 0||ke.count===0)return}else if(De.count===0)return;let Be=1;z.wireframe===!0&&(De=Ee.getWireframeAttribute(V),Be=2),re.setup(J,z,Ie,V,De);let ze,Qe=we;De!==null&&(ze=de.get(De),Qe=X,Qe.setIndex(ze));const In=De!==null?De.count:ke.count,Kn=V.drawRange.start*Be,Qn=V.drawRange.count*Be,Ht=Ce!==null?Ce.start*Be:0,Ue=Ce!==null?Ce.count*Be:1/0,$n=Math.max(Kn,Ht),et=Math.min(In,Kn+Qn,Ht+Ue)-1,Vt=Math.max(0,et-$n+1);if(Vt!==0){if(J.isMesh)z.wireframe===!0?(_e.setLineWidth(z.wireframeLinewidth*Me()),Qe.setMode(1)):Qe.setMode(4);else if(J.isLine){let cn=z.linewidth;cn===void 0&&(cn=1),_e.setLineWidth(cn*Me()),J.isLineSegments?Qe.setMode(1):J.isLineLoop?Qe.setMode(2):Qe.setMode(3)}else J.isPoints?Qe.setMode(0):J.isSprite&&Qe.setMode(4);if(J.isInstancedMesh)Qe.renderInstances($n,Vt,J.count);else if(V.isInstancedBufferGeometry){const cn=Math.min(V.instanceCount,V._maxInstanceCount);Qe.renderInstances($n,Vt,cn)}else Qe.render($n,Vt)}},this.compile=function(w,O){d=b.get(w),d.init(),g.push(d),w.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights(_.physicallyCorrectLights),w.traverse(function(V){const z=V.material;if(z)if(Array.isArray(z))for(let J=0;J<z.length;J++){const Ce=z[J];Js(Ce,w,V)}else Js(z,w,V)}),g.pop(),d=null};let ee=null;function Le(w){ee&&ee(w)}function Oe(){je.stop()}function _t(){je.start()}const je=new ju;je.setAnimationLoop(Le),typeof window!="undefined"&&je.setContext(window),this.setAnimationLoop=function(w){ee=w,ce.setAnimationLoop(w),w===null?je.stop():je.start()},ce.addEventListener("sessionstart",Oe),ce.addEventListener("sessionend",_t),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,T),d=b.get(w,g.length),d.init(),g.push(d),$.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),U.setFromProjectionMatrix($),Y=this.localClippingEnabled,N=q.init(this.clippingPlanes,Y,O),h=S.get(w,f.length),h.init(),f.push(h),Ut(w,O,0,_.sortObjects),h.finish(),_.sortObjects===!0&&h.sort(L,F),N===!0&&q.beginShadows();const V=d.state.shadowsArray;if(K.render(V,w,O),N===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(h,w),d.setupLights(_.physicallyCorrectLights),O.isArrayCamera){const z=O.cameras;for(let J=0,Ce=z.length;J<Ce;J++){const Pe=z[J];kt(h,w,Pe,Pe.viewport)}}else kt(h,w,O);T!==null&&(ie.updateMultisampleRenderTarget(T),ie.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(_,w,O),re.resetDefaultState(),M=-1,v=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function Ut(w,O,V,z){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||U.intersectsSprite(w)){z&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);const Pe=ve.update(w),Ie=w.material;Ie.visible&&h.push(w,Pe,Ie,V,ye.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==W.render.frame&&(w.skeleton.update(),w.skeleton.frame=W.render.frame),!w.frustumCulled||U.intersectsObject(w))){z&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);const Pe=ve.update(w),Ie=w.material;if(Array.isArray(Ie)){const De=Pe.groups;for(let ke=0,Be=De.length;ke<Be;ke++){const ze=De[ke],Qe=Ie[ze.materialIndex];Qe&&Qe.visible&&h.push(w,Pe,Qe,V,ye.z,ze)}}else Ie.visible&&h.push(w,Pe,Ie,V,ye.z,null)}}const Ce=w.children;for(let Pe=0,Ie=Ce.length;Pe<Ie;Pe++)Ut(Ce[Pe],O,V,z)}function kt(w,O,V,z){const J=w.opaque,Ce=w.transmissive,Pe=w.transparent;d.setupLightsView(V),Ce.length>0&&Dh(J,O,V),z&&_e.viewport(D.copy(z)),J.length>0&&Cr(J,O,V),Ce.length>0&&Cr(Ce,O,V),Pe.length>0&&Cr(Pe,O,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Dh(w,O,V){const z=ge.isWebGL2;te===null&&(te=new Et(1,1,{generateMipmaps:!0,type:R.convert(Ti)!==null?Ti:Xn,minFilter:Hs,samples:z&&s===!0?4:0})),_.getDrawingBufferSize(ne),z?te.setSize(ne.x,ne.y):te.setSize(oa(ne.x),oa(ne.y));const J=_.getRenderTarget();_.setRenderTarget(te),_.clear();const Ce=_.toneMapping;_.toneMapping=an,Cr(w,O,V),_.toneMapping=Ce,ie.updateMultisampleRenderTarget(te),ie.updateRenderTargetMipmap(te),_.setRenderTarget(J)}function Cr(w,O,V){const z=O.isScene===!0?O.overrideMaterial:null;for(let J=0,Ce=w.length;J<Ce;J++){const Pe=w[J],Ie=Pe.object,De=Pe.geometry,ke=z===null?Pe.material:z,Be=Pe.group;Ie.layers.test(V.layers)&&Ih(Ie,O,V,De,ke,Be)}}function Ih(w,O,V,z,J,Ce){w.onBeforeRender(_,O,V,z,J,Ce),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(_,O,V,z,w,Ce),J.transparent===!0&&J.side===Li?(J.side=nt,J.needsUpdate=!0,_.renderBufferDirect(V,O,z,J,w,Ce),J.side=dr,J.needsUpdate=!0,_.renderBufferDirect(V,O,z,J,w,Ce),J.side=Li):_.renderBufferDirect(V,O,z,J,w,Ce),w.onAfterRender(_,O,V,z,J,Ce)}function Js(w,O,V){O.isScene!==!0&&(O=Ne);const z=k.get(w),J=d.state.lights,Ce=d.state.shadowsArray,Pe=J.state.version,Ie=Re.getParameters(w,J.state,Ce,O,V),De=Re.getProgramCacheKey(Ie);let ke=z.programs;z.environment=w.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(w.isMeshStandardMaterial?xe:oe).get(w.envMap||z.environment),ke===void 0&&(w.addEventListener("dispose",he),ke=new Map,z.programs=ke);let Be=ke.get(De);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===Pe)return ol(w,Ie),Be}else Ie.uniforms=Re.getUniforms(w),w.onBuild(V,Ie,_),w.onBeforeCompile(Ie,_),Be=Re.acquireProgram(Ie,De),ke.set(De,Be),z.uniforms=Ie.uniforms;const ze=z.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=q.uniform),ol(w,Ie),z.needsLights=Oh(w),z.lightsStateVersion=Pe,z.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.directionalShadowMap.value=J.state.directionalShadowMap,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotShadowMap.value=J.state.spotShadowMap,ze.spotShadowMatrix.value=J.state.spotShadowMatrix,ze.pointShadowMap.value=J.state.pointShadowMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix);const Qe=Be.getUniforms(),In=vn.seqWithValue(Qe.seq,ze);return z.currentProgram=Be,z.uniformsList=In,Be}function ol(w,O){const V=k.get(w);V.outputEncoding=O.outputEncoding,V.instancing=O.instancing,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Fh(w,O,V,z,J){O.isScene!==!0&&(O=Ne),ie.resetTextureUnits();const Ce=O.fog,Pe=z.isMeshStandardMaterial?O.environment:null,Ie=T===null?_.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:Sn,De=(z.isMeshStandardMaterial?xe:oe).get(z.envMap||Pe),ke=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!z.normalMap&&!!V.attributes.tangent,ze=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,In=!!V.morphAttributes.color,Kn=z.toneMapped?_.toneMapping:an,Qn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ht=Qn!==void 0?Qn.length:0,Ue=k.get(z),$n=d.state.lights;if(N===!0&&(Y===!0||w!==v)){const Rt=w===v&&z.id===M;q.setState(z,w,Rt)}let et=!1;z.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==$n.state.version||Ue.outputEncoding!==Ie||J.isInstancedMesh&&Ue.instancing===!1||!J.isInstancedMesh&&Ue.instancing===!0||J.isSkinnedMesh&&Ue.skinning===!1||!J.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==De||z.fog&&Ue.fog!==Ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==q.numPlanes||Ue.numIntersection!==q.numIntersection)||Ue.vertexAlphas!==ke||Ue.vertexTangents!==Be||Ue.morphTargets!==ze||Ue.morphNormals!==Qe||Ue.morphColors!==In||Ue.toneMapping!==Kn||ge.isWebGL2===!0&&Ue.morphTargetsCount!==Ht)&&(et=!0):(et=!0,Ue.__version=z.version);let Vt=Ue.currentProgram;et===!0&&(Vt=Js(z,O,J));let cn=!1,qi=!1,Ks=!1;const dt=Vt.getUniforms(),ji=Ue.uniforms;if(_e.useProgram(Vt.program)&&(cn=!0,qi=!0,Ks=!0),z.id!==M&&(M=z.id,qi=!0),cn||v!==w){if(dt.setValue(j,"projectionMatrix",w.projectionMatrix),ge.logarithmicDepthBuffer&&dt.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),v!==w&&(v=w,qi=!0,Ks=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Rt=dt.map.cameraPosition;Rt!==void 0&&Rt.setValue(j,ye.setFromMatrixPosition(w.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||J.isSkinnedMesh)&&dt.setValue(j,"viewMatrix",w.matrixWorldInverse)}if(J.isSkinnedMesh){dt.setOptional(j,J,"bindMatrix"),dt.setOptional(j,J,"bindMatrixInverse");const Rt=J.skeleton;Rt&&(ge.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(j,"boneTexture",Rt.boneTexture,ie),dt.setValue(j,"boneTextureSize",Rt.boneTextureSize)):dt.setOptional(j,Rt,"boneMatrices"))}const Qs=V.morphAttributes;return(Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0&&ge.isWebGL2===!0)&&me.update(J,V,z,Vt),(qi||Ue.receiveShadow!==J.receiveShadow)&&(Ue.receiveShadow=J.receiveShadow,dt.setValue(j,"receiveShadow",J.receiveShadow)),qi&&(dt.setValue(j,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&Nh(ji,Ks),Ce&&z.fog&&qe.refreshFogUniforms(ji,Ce),qe.refreshMaterialUniforms(ji,z,y,H,te),vn.upload(j,Ue.uniformsList,ji,ie)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vn.upload(j,Ue.uniformsList,ji,ie),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(j,"center",J.center),dt.setValue(j,"modelViewMatrix",J.modelViewMatrix),dt.setValue(j,"normalMatrix",J.normalMatrix),dt.setValue(j,"modelMatrix",J.matrixWorld),Vt}function Nh(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Oh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,O,V){k.get(w.texture).__webglTexture=O,k.get(w.depthTexture).__webglTexture=V;const z=k.get(w);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const V=k.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){T=w,m=O,p=V;let z=!0;if(w){const De=k.get(w);De.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),z=!1):De.__webglFramebuffer===void 0?ie.setupRenderTarget(w):De.__hasExternalTextures&&ie.rebindTextures(w,k.get(w.texture).__webglTexture,k.get(w.depthTexture).__webglTexture)}let J=null,Ce=!1,Pe=!1;if(w){const De=w.texture;(De.isData3DTexture||De.isDataArrayTexture)&&(Pe=!0);const ke=k.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(J=ke[O],Ce=!0):ge.isWebGL2&&w.samples>0&&ie.useMultisampledRTT(w)===!1?J=k.get(w).__webglMultisampledFramebuffer:J=ke,D.copy(w.viewport),I.copy(w.scissor),G=w.scissorTest}else D.copy(A).multiplyScalar(y).floor(),I.copy(P).multiplyScalar(y).floor(),G=B;if(_e.bindFramebuffer(36160,J)&&ge.drawBuffers&&z&&_e.drawBuffers(w,J),_e.viewport(D),_e.scissor(I),_e.setScissorTest(G),Ce){const De=k.get(w.texture);j.framebufferTexture2D(36160,36064,34069+O,De.__webglTexture,V)}else if(Pe){const De=k.get(w.texture),ke=O||0;j.framebufferTextureLayer(36160,36064,De.__webglTexture,V||0,ke)}M=-1},this.readRenderTargetPixels=function(w,O,V,z,J,Ce,Pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=k.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){_e.bindFramebuffer(36160,Ie);try{const De=w.texture,ke=De.format,Be=De.type;if(ke!==Mt&&R.convert(ke)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Be===Ti&&(Te.has("EXT_color_buffer_half_float")||ge.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Be!==Xn&&R.convert(Be)!==j.getParameter(35738)&&!(Be===Un&&(ge.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j.checkFramebufferStatus(36160)===36053?O>=0&&O<=w.width-z&&V>=0&&V<=w.height-J&&j.readPixels(O,V,z,J,R.convert(ke),R.convert(Be),Ce):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const De=T!==null?k.get(T).__webglFramebuffer:null;_e.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(w,O,V=0){if(O.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const z=Math.pow(2,-V),J=Math.floor(O.image.width*z),Ce=Math.floor(O.image.height*z);ie.setTexture2D(O,0),j.copyTexSubImage2D(3553,V,0,0,w.x,w.y,J,Ce),_e.unbindTexture()},this.copyTextureToTexture=function(w,O,V,z=0){const J=O.image.width,Ce=O.image.height,Pe=R.convert(V.format),Ie=R.convert(V.type);ie.setTexture2D(V,0),j.pixelStorei(37440,V.flipY),j.pixelStorei(37441,V.premultiplyAlpha),j.pixelStorei(3317,V.unpackAlignment),O.isDataTexture?j.texSubImage2D(3553,z,w.x,w.y,J,Ce,Pe,Ie,O.image.data):O.isCompressedTexture?j.compressedTexSubImage2D(3553,z,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Pe,O.mipmaps[0].data):j.texSubImage2D(3553,z,w.x,w.y,Pe,Ie,O.image),z===0&&V.generateMipmaps&&j.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V,z,J=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=w.max.x-w.min.x+1,Pe=w.max.y-w.min.y+1,Ie=w.max.z-w.min.z+1,De=R.convert(z.format),ke=R.convert(z.type);let Be;if(z.isData3DTexture)ie.setTexture3D(z,0),Be=32879;else if(z.isDataArrayTexture)ie.setTexture2DArray(z,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,z.flipY),j.pixelStorei(37441,z.premultiplyAlpha),j.pixelStorei(3317,z.unpackAlignment);const ze=j.getParameter(3314),Qe=j.getParameter(32878),In=j.getParameter(3316),Kn=j.getParameter(3315),Qn=j.getParameter(32877),Ht=V.isCompressedTexture?V.mipmaps[0]:V.image;j.pixelStorei(3314,Ht.width),j.pixelStorei(32878,Ht.height),j.pixelStorei(3316,w.min.x),j.pixelStorei(3315,w.min.y),j.pixelStorei(32877,w.min.z),V.isDataTexture||V.isData3DTexture?j.texSubImage3D(Be,J,O.x,O.y,O.z,Ce,Pe,Ie,De,ke,Ht.data):V.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Be,J,O.x,O.y,O.z,Ce,Pe,Ie,De,Ht.data)):j.texSubImage3D(Be,J,O.x,O.y,O.z,Ce,Pe,Ie,De,ke,Ht),j.pixelStorei(3314,ze),j.pixelStorei(32878,Qe),j.pixelStorei(3316,In),j.pixelStorei(3315,Kn),j.pixelStorei(32877,Qn),J===0&&z.generateMipmaps&&j.generateMipmap(Be),_e.unbindTexture()},this.initTexture=function(w){ie.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){m=0,p=0,T=null,_e.reset(),re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ge.prototype.isWebGLRenderer=!0;class ky extends Ge{}ky.prototype.isWebGL1Renderer=!0;class Wa extends Ve{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Wa.prototype.isScene=!0;class Sr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Sr.prototype.isInterleavedBuffer=!0;const $e=new E;class gr{constructor(e,t,n,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$e.x=this.getX(t),$e.y=this.getY(t),$e.z=this.getZ(t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.x=this.getX(t),$e.y=this.getY(t),$e.z=this.getZ(t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.x=this.getX(t),$e.y=this.getY(t),$e.z=this.getZ(t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}gr.prototype.isInterleavedBufferAttribute=!0;class qa extends rt{constructor(e){super();this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}qa.prototype.isSpriteMaterial=!0;let mi;const Ki=new E,gi=new E,_i=new E,xi=new Q,Qi=new Q,ih=new Se,Qr=new E,$i=new E,$r=new E,Mc=new Q,zo=new Q,wc=new Q;class Hy extends Ve{constructor(e){super();if(this.type="Sprite",mi===void 0){mi=new Ye;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sr(t,5);mi.setIndex([0,1,2,0,2,3]),mi.setAttribute("position",new gr(n,3,0,!1)),mi.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=mi,this.material=e!==void 0?e:new qa,this.center=new Q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gi.setFromMatrixScale(this.matrixWorld),ih.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gi.multiplyScalar(-_i.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;es(Qr.set(-.5,-.5,0),_i,o,gi,r,s),es($i.set(.5,-.5,0),_i,o,gi,r,s),es($r.set(.5,.5,0),_i,o,gi,r,s),Mc.set(0,0),zo.set(1,0),wc.set(1,1);let a=e.ray.intersectTriangle(Qr,$i,$r,!1,Ki);if(a===null&&(es($i.set(-.5,.5,0),_i,o,gi,r,s),zo.set(0,1),a=e.ray.intersectTriangle(Qr,$r,$i,!1,Ki),a===null))return;const c=e.ray.origin.distanceTo(Ki);c<e.near||c>e.far||t.push({distance:c,point:Ki.clone(),uv:tt.getUV(Ki,Qr,$i,$r,Mc,zo,wc,new Q),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Hy.prototype.isSprite=!0;function es(i,e,t,n,r,s){xi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Qi.x=s*xi.x-r*xi.y,Qi.y=r*xi.x+s*xi.y):Qi.copy(xi),i.copy(e),i.x+=Qi.x,i.y+=Qi.y,i.applyMatrix4(ih)}const Sc=new E,Ec=new We,Tc=new We,Vy=new E,Ac=new Se;class rh extends yt{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Se,this.bindMatrixInverse=new Se}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;Ec.fromBufferAttribute(r.attributes.skinIndex,e),Tc.fromBufferAttribute(r.attributes.skinWeight,e),Sc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Tc.getComponent(s);if(o!==0){const a=Ec.getComponent(s);Ac.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Vy.copy(Sc).applyMatrix4(Ac),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}rh.prototype.isSkinnedMesh=!0;class Gy extends Ve{constructor(){super();this.type="Bone"}}Gy.prototype.isBone=!0;class Wy extends ut{constructor(e=null,t=1,n=1,r,s,o,a,c,l=ot,u=ot,h,d){super(null,o,a,c,l,u,r,s,h,d);this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Wy.prototype.isDataTexture=!0;class la extends it{constructor(e,t,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}la.prototype.isInstancedBufferAttribute=!0;const Cc=new Se,Lc=new Se,ts=[],er=new yt;class qy extends yt{constructor(e,t,n){super(e,t);this.instanceMatrix=new la(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Cc),Lc.multiplyMatrices(n,Cc),er.matrixWorld=Lc,er.raycast(e,ts);for(let o=0,a=ts.length;o<a;o++){const c=ts[o];c.instanceId=s,c.object=this,t.push(c)}ts.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new la(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}qy.prototype.isInstancedMesh=!0;class Hi extends rt{constructor(e){super();this.type="LineBasicMaterial",this.color=new be(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Hi.prototype.isLineBasicMaterial=!0;const Rc=new E,Pc=new E,Dc=new Se,Uo=new Ui,ns=new zi;class ja extends Ve{constructor(e=new Ye,t=new Hi){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Rc.fromBufferAttribute(t,r-1),Pc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Rc.distanceTo(Pc);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),ns.radius+=s,e.ray.intersectsSphere(ns)===!1)return;Dc.copy(r).invert(),Uo.copy(e.ray).applyMatrix4(Dc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new E,u=new E,h=new E,d=new E,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,x=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),p=Math.min(g.count,o.start+o.count);for(let T=m,M=p-1;T<M;T+=f){const v=g.getX(T),D=g.getX(T+1);if(l.fromBufferAttribute(x,v),u.fromBufferAttribute(x,D),Uo.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(d);G<e.near||G>e.far||t.push({distance:G,point:h.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),p=Math.min(x.count,o.start+o.count);for(let T=m,M=p-1;T<M;T+=f){if(l.fromBufferAttribute(x,T),u.fromBufferAttribute(x,T+1),Uo.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ja.prototype.isLine=!0;const Ic=new E,Fc=new E;class Xa extends ja{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ic.fromBufferAttribute(t,r),Fc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ic.distanceTo(Fc);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Xa.prototype.isLineSegments=!0;class jy extends ja{constructor(e,t){super(e,t);this.type="LineLoop"}}jy.prototype.isLineLoop=!0;class Ya extends rt{constructor(e){super();this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Ya.prototype.isPointsMaterial=!0;const Nc=new Se,ca=new Ui,is=new zi,rs=new E;class Xy extends Ve{constructor(e=new Ye,t=new Ya){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),is.radius+=s,e.ray.intersectsSphere(is)===!1)return;Nc.copy(r).invert(),ca.copy(e.ray).applyMatrix4(Nc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a;if(n.isBufferGeometry){const l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const x=l.getX(g);rs.fromBufferAttribute(h,x),Oc(rs,x,c,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)rs.fromBufferAttribute(h,g),Oc(rs,g,c,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Xy.prototype.isPoints=!0;function Oc(i,e,t,n,r,s,o){const a=ca.distanceSqToPoint(i);if(a<t){const c=new E;ca.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Yy extends ut{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l);this.minFilter=o!==void 0?o:pt,this.magFilter=s!==void 0?s:pt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Yy.prototype.isVideoTexture=!0;class Zy extends ut{constructor(e,t,n){super({width:e,height:t});this.format=n,this.magFilter=ot,this.minFilter=ot,this.generateMipmaps=!1,this.needsUpdate=!0}}Zy.prototype.isFramebufferTexture=!0;class Jy extends ut{constructor(e,t,n,r,s,o,a,c,l,u,h,d){super(null,o,a,c,l,u,r,s,h,d);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Jy.prototype.isCompressedTexture=!0;class Ky extends ut{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l);this.needsUpdate=!0}}Ky.prototype.isCanvasTexture=!0;new E;new E;new E;new tt;class Lt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Q:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,r=[],s=[],o=[],a=new E,c=new Se;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new E)}s[0]=new E,o[0]=new E;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(bt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(bt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xs extends Lt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new Q,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Xs.prototype.isEllipseCurve=!0;class sh extends Xs{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o);this.type="ArcCurve"}}sh.prototype.isArcCurve=!0;function Za(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const ss=new E,ko=new Za,Ho=new Za,Vo=new Za;class oh extends Lt{constructor(e=[],t=!1,n="centripetal",r=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new E){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(ss.subVectors(r[0],r[1]).add(r[0]),l=ss);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ss.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ss),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),x<1e-4&&(x=_),ko.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,x),Ho.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,x),Vo.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,x)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Ho.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Vo.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(ko.calc(c),Ho.calc(c),Vo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}oh.prototype.isCatmullRomCurve3=!0;function Bc(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function Qy(i,e){const t=1-i;return t*t*e}function $y(i,e){return 2*(1-i)*i*e}function ev(i,e){return i*i*e}function sr(i,e,t,n){return Qy(i,e)+$y(i,t)+ev(i,n)}function tv(i,e){const t=1-i;return t*t*t*e}function nv(i,e){const t=1-i;return 3*t*t*i*e}function iv(i,e){return 3*(1-i)*i*i*e}function rv(i,e){return i*i*i*e}function or(i,e,t,n,r){return tv(i,e)+nv(i,t)+iv(i,n)+rv(i,r)}class Ja extends Lt{constructor(e=new Q,t=new Q,n=new Q,r=new Q){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Q){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(or(e,r.x,s.x,o.x,a.x),or(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Ja.prototype.isCubicBezierCurve=!0;class ah extends Lt{constructor(e=new E,t=new E,n=new E,r=new E){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new E){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(or(e,r.x,s.x,o.x,a.x),or(e,r.y,s.y,o.y,a.y),or(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ah.prototype.isCubicBezierCurve3=!0;class Ys extends Lt{constructor(e=new Q,t=new Q){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Q;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ys.prototype.isLineCurve=!0;class sv extends Lt{constructor(e=new E,t=new E){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ka extends Lt{constructor(e=new Q,t=new Q,n=new Q){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(sr(e,r.x,s.x,o.x),sr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ka.prototype.isQuadraticBezierCurve=!0;class lh extends Lt{constructor(e=new E,t=new E,n=new E){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(sr(e,r.x,s.x,o.x),sr(e,r.y,s.y,o.y),sr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}lh.prototype.isQuadraticBezierCurve3=!0;class Qa extends Lt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Bc(a,c.x,l.x,u.x,h.x),Bc(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Q().fromArray(r))}return this}}Qa.prototype.isSplineCurve=!0;var ch=Object.freeze({__proto__:null,ArcCurve:sh,CatmullRomCurve3:oh,CubicBezierCurve:Ja,CubicBezierCurve3:ah,EllipseCurve:Xs,LineCurve:Ys,LineCurve3:sv,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:lh,SplineCurve:Qa});class ov extends Lt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ys(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new ch[r.type]().fromJSON(r))}return this}}class ua extends ov{constructor(e){super();this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ys(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Ka(this.currentPoint.clone(),new Q(e,t),new Q(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Ja(this.currentPoint.clone(),new Q(e,t),new Q(n,r),new Q(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){const l=new Xs(e,t,n,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Er extends ua{constructor(e){super(e);this.uuid=Yt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ua().fromJSON(r))}return this}}const av={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=uh(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,f;if(n&&(s=dv(i,e,s,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<r;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?1/f:0}return _r(s,o,t,a,c,f),o}};function uh(i,e,t,n,r){let s,o;if(r===wv(i,e,t,n)>0)for(s=e;s<t;s+=n)o=zc(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=zc(s,i[s],i[s+1],o);return o&&Zs(o,o.next)&&(yr(o),o=o.next),o}function En(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Zs(t,t.next)||Ke(t.prev,t,t.next)===0)){if(yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _r(i,e,t,n,r,s,o){if(!i)return;!o&&s&&_v(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?cv(i,n,r,s):lv(i)){e.push(c.i/t),e.push(i.i/t),e.push(l.i/t),yr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=uv(En(i),e,t),_r(i,e,t,n,r,s,2)):o===2&&hv(i,e,t,n,r,s):_r(En(i),e,t,n,r,s,1);break}}}function lv(i){const e=i.prev,t=i,n=i.next;if(Ke(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(Si(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&Ke(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function cv(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Ke(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=ha(a,c,e,t,n),d=ha(l,u,e,t,n);let f=i.prevZ,g=i.nextZ;for(;f&&f.z>=h&&g&&g.z<=d;){if(f!==i.prev&&f!==i.next&&Si(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Ke(f.prev,f,f.next)>=0||(f=f.prevZ,g!==i.prev&&g!==i.next&&Si(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Ke(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=h;){if(f!==i.prev&&f!==i.next&&Si(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Ke(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==i.prev&&g!==i.next&&Si(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Ke(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function uv(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Zs(r,s)&&hh(r,n,n.next,s)&&xr(r,s)&&xr(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),yr(n),yr(n.next),n=i=s),n=n.next}while(n!==i);return En(n)}function hv(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vv(o,a)){let c=dh(o,a);o=En(o,o.next),c=En(c,c.next),_r(o,e,t,n,r,s),_r(c,e,t,n,r,s);return}a=a.next}o=o.next}while(o!==i)}function dv(i,e,t,n){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=uh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(yv(l));for(r.sort(fv),s=0;s<r.length;s++)pv(r[s],t),t=En(t,t.next);return t}function fv(i,e){return i.x-e.x}function pv(i,e){if(e=mv(i,e),e){const t=dh(e,i);En(e,e.next),En(t,t.next)}}function mv(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,c=o.x,l=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=c&&n!==t.x&&Si(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(n-t.x),xr(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&gv(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function gv(i,e){return Ke(i.prev,i,e.prev)<0&&Ke(e.next,i,i.next)<0}function _v(i,e,t,n){let r=i;do r.z===null&&(r.z=ha(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,xv(r)}function xv(i){let e,t,n,r,s,o,a,c,l=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(o>1);return i}function ha(i,e,t,n,r){return i=32767*(i-t)*r,e=32767*(e-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Si(i,e,t,n,r,s,o,a){return(r-o)*(e-a)-(i-o)*(s-a)>=0&&(i-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(n-a)>=0}function vv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!bv(i,e)&&(xr(i,e)&&xr(e,i)&&Mv(i,e)&&(Ke(i.prev,i,e.prev)||Ke(i,e.prev,e))||Zs(i,e)&&Ke(i.prev,i,i.next)>0&&Ke(e.prev,e,e.next)>0)}function Ke(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zs(i,e){return i.x===e.x&&i.y===e.y}function hh(i,e,t,n){const r=as(Ke(i,e,t)),s=as(Ke(i,e,n)),o=as(Ke(t,n,i)),a=as(Ke(t,n,e));return!!(r!==s&&o!==a||r===0&&os(i,t,e)||s===0&&os(i,n,e)||o===0&&os(t,i,n)||a===0&&os(t,e,n))}function os(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function as(i){return i>0?1:i<0?-1:0}function bv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&hh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xr(i,e){return Ke(i.prev,i,i.next)<0?Ke(i,e,i.next)>=0&&Ke(i,i.prev,e)>=0:Ke(i,e,i.prev)<0||Ke(i,i.next,e)<0}function Mv(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dh(i,e){const t=new da(i.i,i.x,i.y),n=new da(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function zc(i,e,t,n){const r=new da(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function da(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wv(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class bn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return bn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Uc(e),kc(n,e);let o=e.length;t.forEach(Uc);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,kc(n,t[c]);const a=av.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Uc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function kc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Vi extends Ye{constructor(e=new Er([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ct(r,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:Sv;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let T,M=!1,v,D,I,G;m&&(T=m.getSpacedPoints(u),M=!0,d=!1,v=m.computeFrenetFrames(u,!1),D=new E,I=new E,G=new E),d||(x=0,f=0,g=0,_=0);const se=a.extractPoints(l);let H=se.shape;const y=se.holes;if(!bn.isClockWise(H)){H=H.reverse();for(let k=0,ie=y.length;k<ie;k++){const oe=y[k];bn.isClockWise(oe)&&(y[k]=oe.reverse())}}const F=bn.triangulateShape(H,y),A=H;for(let k=0,ie=y.length;k<ie;k++){const oe=y[k];H=H.concat(oe)}function P(k,ie,oe){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().multiplyScalar(oe).add(k)}const B=H.length,U=F.length;function N(k,ie,oe){let xe,de,Ee;const ve=k.x-ie.x,Re=k.y-ie.y,qe=oe.x-k.x,S=oe.y-k.y,b=ve*ve+Re*Re,q=ve*S-Re*qe;if(Math.abs(q)>Number.EPSILON){const K=Math.sqrt(b),ae=Math.sqrt(qe*qe+S*S),me=ie.x-Re/K,we=ie.y+ve/K,X=oe.x-S/ae,R=oe.y+qe/ae,re=((X-me)*S-(R-we)*qe)/(ve*S-Re*qe);xe=me+ve*re-k.x,de=we+Re*re-k.y;const pe=xe*xe+de*de;if(pe<=2)return new Q(xe,de);Ee=Math.sqrt(pe/2)}else{let K=!1;ve>Number.EPSILON?qe>Number.EPSILON&&(K=!0):ve<-Number.EPSILON?qe<-Number.EPSILON&&(K=!0):Math.sign(Re)===Math.sign(S)&&(K=!0),K?(xe=-Re,de=ve,Ee=Math.sqrt(b)):(xe=ve,de=Re,Ee=Math.sqrt(b/2))}return new Q(xe/Ee,de/Ee)}const Y=[];for(let k=0,ie=A.length,oe=ie-1,xe=k+1;k<ie;k++,oe++,xe++)oe===ie&&(oe=0),xe===ie&&(xe=0),Y[k]=N(A[k],A[oe],A[xe]);const te=[];let $,ne=Y.concat();for(let k=0,ie=y.length;k<ie;k++){const oe=y[k];$=[];for(let xe=0,de=oe.length,Ee=de-1,ve=xe+1;xe<de;xe++,Ee++,ve++)Ee===de&&(Ee=0),ve===de&&(ve=0),$[xe]=N(oe[xe],oe[Ee],oe[ve]);te.push($),ne=ne.concat($)}for(let k=0;k<x;k++){const ie=k/x,oe=f*Math.cos(ie*Math.PI/2),xe=g*Math.sin(ie*Math.PI/2)+_;for(let de=0,Ee=A.length;de<Ee;de++){const ve=P(A[de],Y[de],xe);Z(ve.x,ve.y,-oe)}for(let de=0,Ee=y.length;de<Ee;de++){const ve=y[de];$=te[de];for(let Re=0,qe=ve.length;Re<qe;Re++){const S=P(ve[Re],$[Re],xe);Z(S.x,S.y,-oe)}}}const ye=g+_;for(let k=0;k<B;k++){const ie=d?P(H[k],ne[k],ye):H[k];M?(I.copy(v.normals[0]).multiplyScalar(ie.x),D.copy(v.binormals[0]).multiplyScalar(ie.y),G.copy(T[0]).add(I).add(D),Z(G.x,G.y,G.z)):Z(ie.x,ie.y,0)}for(let k=1;k<=u;k++)for(let ie=0;ie<B;ie++){const oe=d?P(H[ie],ne[ie],ye):H[ie];M?(I.copy(v.normals[k]).multiplyScalar(oe.x),D.copy(v.binormals[k]).multiplyScalar(oe.y),G.copy(T[k]).add(I).add(D),Z(G.x,G.y,G.z)):Z(oe.x,oe.y,h/u*k)}for(let k=x-1;k>=0;k--){const ie=k/x,oe=f*Math.cos(ie*Math.PI/2),xe=g*Math.sin(ie*Math.PI/2)+_;for(let de=0,Ee=A.length;de<Ee;de++){const ve=P(A[de],Y[de],xe);Z(ve.x,ve.y,h+oe)}for(let de=0,Ee=y.length;de<Ee;de++){const ve=y[de];$=te[de];for(let Re=0,qe=ve.length;Re<qe;Re++){const S=P(ve[Re],$[Re],xe);M?Z(S.x,S.y+T[u-1].y,T[u-1].x+oe):Z(S.x,S.y,h+oe)}}}Ne(),Me();function Ne(){const k=r.length/3;if(d){let ie=0,oe=B*ie;for(let xe=0;xe<U;xe++){const de=F[xe];Te(de[2]+oe,de[1]+oe,de[0]+oe)}ie=u+x*2,oe=B*ie;for(let xe=0;xe<U;xe++){const de=F[xe];Te(de[0]+oe,de[1]+oe,de[2]+oe)}}else{for(let ie=0;ie<U;ie++){const oe=F[ie];Te(oe[2],oe[1],oe[0])}for(let ie=0;ie<U;ie++){const oe=F[ie];Te(oe[0]+B*u,oe[1]+B*u,oe[2]+B*u)}}n.addGroup(k,r.length/3-k,0)}function Me(){const k=r.length/3;let ie=0;j(A,ie),ie+=A.length;for(let oe=0,xe=y.length;oe<xe;oe++){const de=y[oe];j(de,ie),ie+=de.length}n.addGroup(k,r.length/3-k,1)}function j(k,ie){let oe=k.length;for(;--oe>=0;){const xe=oe;let de=oe-1;de<0&&(de=k.length-1);for(let Ee=0,ve=u+x*2;Ee<ve;Ee++){const Re=B*Ee,qe=B*(Ee+1),S=ie+xe+Re,b=ie+de+Re,q=ie+de+qe,K=ie+xe+qe;ge(S,b,q,K)}}}function Z(k,ie,oe){c.push(k),c.push(ie),c.push(oe)}function Te(k,ie,oe){_e(k),_e(ie),_e(oe);const xe=r.length/3,de=p.generateTopUV(n,r,xe-3,xe-2,xe-1);W(de[0]),W(de[1]),W(de[2])}function ge(k,ie,oe,xe){_e(k),_e(ie),_e(xe),_e(ie),_e(oe),_e(xe);const de=r.length/3,Ee=p.generateSideWallUV(n,r,de-6,de-3,de-2,de-1);W(Ee[0]),W(Ee[1]),W(Ee[3]),W(Ee[1]),W(Ee[2]),W(Ee[3])}function _e(k){r.push(c[k*3+0]),r.push(c[k*3+1]),r.push(c[k*3+2])}function W(k){s.push(k.x),s.push(k.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ev(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ch[r.type]().fromJSON(r)),new Vi(n,e.options)}}const Sv={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new Q(s,o),new Q(a,c),new Q(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],_=e[s*3],x=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Q(o,1-c),new Q(l,1-h),new Q(d,1-g),new Q(_,1-m)]:[new Q(a,1-c),new Q(u,1-h),new Q(f,1-g),new Q(x,1-m)]}};function Ev(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class $a extends Ye{constructor(e=new Er([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(s,3)),this.setAttribute("uv",new ct(o,2));function l(u){const h=r.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;bn.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,m=g.length;x<m;x++){const p=g[x];bn.isClockWise(p)===!0&&(g[x]=p.reverse())}const _=bn.triangulateShape(f,g);for(let x=0,m=g.length;x<m;x++){const p=g[x];f=f.concat(p)}for(let x=0,m=f.length;x<m;x++){const p=f[x];r.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let x=0,m=_.length;x<m;x++){const p=_[x],T=p[0]+h,M=p[1]+h,v=p[2]+h;n.push(T,M,v),c+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Tv(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new $a(n,e.curveSegments)}}function Tv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class fh extends rt{constructor(e){super();this.type="ShadowMaterial",this.color=new be(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}fh.prototype.isShadowMaterial=!0;class ph extends Nt{constructor(e){super(e);this.type="RawShaderMaterial"}}ph.prototype.isRawShaderMaterial=!0;class el extends rt{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}el.prototype.isMeshStandardMaterial=!0;class mh extends el{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}mh.prototype.isMeshPhysicalMaterial=!0;class gh extends rt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}gh.prototype.isMeshPhongMaterial=!0;class _h extends rt{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}_h.prototype.isMeshToonMaterial=!0;class tl extends rt{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}tl.prototype.isMeshNormalMaterial=!0;class xh extends rt{constructor(e){super();this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}xh.prototype.isMeshLambertMaterial=!0;class yh extends rt{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new be(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}yh.prototype.isMeshMatcapMaterial=!0;class vh extends Hi{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}vh.prototype.isLineDashedMaterial=!0;const Av={ShadowMaterial:fh,SpriteMaterial:qa,RawShaderMaterial:ph,ShaderMaterial:Nt,PointsMaterial:Ya,MeshPhysicalMaterial:mh,MeshStandardMaterial:el,MeshPhongMaterial:gh,MeshToonMaterial:_h,MeshNormalMaterial:tl,MeshLambertMaterial:xh,MeshDepthMaterial:Va,MeshDistanceMaterial:Ga,MeshBasicMaterial:Gs,MeshMatcapMaterial:yh,LineDashedMaterial:vh,LineBasicMaterial:Hi,Material:rt};rt.fromType=function(i){return new Av[i]};const Je={arraySlice:function(i,e,t){return Je.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r},flattenJSON:function(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)},subclip:function(i,e,t,n,r=30){const s=i.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){const g=l.times[f]*r;if(!(g<t||g>=n)){h.push(l.times[f]);for(let _=0;_<u;++_)d.push(l.values[f*u+_])}}h.length!==0&&(l.times=Je.convertArray(h,l.times.constructor),l.values=Je.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=i.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=a.times.length-1;let _;if(s<=a.times[0]){const m=u,p=h-u;_=Je.arraySlice(a.values,m,p)}else if(s>=a.times[g]){const m=g*h+u,p=m+h-u;_=Je.arraySlice(a.values,m,p)}else{const m=a.createInterpolant(),p=u,T=h-u;m.evaluate(s),_=Je.arraySlice(m.resultBuffer,p,T)}c==="quaternion"&&new mt().fromArray(_).normalize().conjugate().toArray(_);const x=l.times.length;for(let m=0;m<x;++m){const p=m*f+d;if(c==="quaternion")mt.multiplyQuaternionsFlat(l.values,p,_,0,l.values,p);else{const T=f-d*2;for(let M=0;M<T;++M)l.values[p+M]-=_[M]}}}return i.blendMode=zu,i}};class Tn{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Tn.prototype.beforeStart_=Tn.prototype.copySampleValue_;Tn.prototype.afterEnd_=Tn.prototype.copySampleValue_;class Cv extends Tn{constructor(e,t,n,r){super(e,t,n,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bi,endingEnd:bi}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mi:s=e,a=2*t-n;break;case vs:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mi:o=e,c=2*n-t;break;case vs:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),_=g*g,x=_*g,m=-d*x+2*d*_-d*g,p=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*g+1,T=(-1-f)*x+(1.5+f)*_+.5*g,M=f*x-f*_;for(let v=0;v!==a;++v)s[v]=m*o[u+v]+p*o[l+v]+T*o[c+v]+M*o[h+v];return s}}class bh extends Tn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*h+o[c+d]*u;return s}}class Lv extends Tn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jt{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Je.convertArray(t,this.TimeBufferType),this.values=Je.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Je.convertArray(e.times,Array),values:Je.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case ys:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return ys;case this.InterpolantFactoryMethodSmooth:return ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Je.arraySlice(n,s,o),this.values=Je.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Je.isTypedArray(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=Je.arraySlice(this.times),t=Je.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===ao,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=Je.arraySlice(e,0,o),this.values=Je.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Je.arraySlice(this.times,0),t=Je.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=ys;class Gi extends Jt{}Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=xs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Mh extends Jt{}Mh.prototype.ValueTypeName="color";class Ms extends Jt{}Ms.prototype.ValueTypeName="number";class Rv extends Tn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)mt.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Tr extends Jt{InterpolantFactoryMethodLinear(e){return new Rv(this.times,this.values,this.getValueSize(),e)}}Tr.prototype.ValueTypeName="quaternion";Tr.prototype.DefaultInterpolation=ys;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends Jt{}Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=xs;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends Jt{}ws.prototype.ValueTypeName="vector";class Hc{constructor(e,t=-1,n,r=Na){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Yt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Dv(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Jt.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Je.getKeyframeOrder(c);c=Je.sortedArray(c,1,u),l=Je.sortedArray(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ms(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const x=[],m=[];Je.flattenJSON(f,x,m,g),x.length!==0&&_.push(new h(d,x,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const x=[],m=[];for(let p=0;p!==d[g].morphTargets.length;++p){const T=d[g];x.push(T.time),m.push(T.morphTarget===_?1:0)}r.push(new Ms(".morphTargetInfluence["+_+"]",x,m))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(ws,f+".position",d,"pos",r),n(Tr,f+".quaternion",d,"rot",r),n(ws,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Pv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return Mh;case"quaternion":return Tr;case"bool":case"boolean":return Gi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Dv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Pv(i.type);if(i.times===void 0){const t=[],n=[];Je.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Fi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Iv{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Fv=new Iv;class Dn{constructor(e){this.manager=e!==void 0?e:Fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const nn={};class Nv extends Dn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(nn[e]!==void 0){nn[e].push({onLoad:t,onProgress:n,onError:r});return}nn[e]=[],nn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;const u=nn[e],h=l.body.getReader(),d=l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const x=new ReadableStream({start(m){p();function p(){h.read().then(({done:T,value:M})=>{if(T)m.close();else{_+=M.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let D=0,I=u.length;D<I;D++){const G=u[D];G.onProgress&&G.onProgress(v)}m.enqueue(M),p()}})}}});return new Response(x)}else throw Error(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Fi.add(e,l);const u=nn[e];delete nn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=nn[e];if(u===void 0)throw this.manager.itemError(e),l;delete nn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wh extends Dn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=mr("img");function c(){u(),Fi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ov extends Dn{constructor(e){super(e)}load(e,t,n,r){const s=new Ws,o=new wh(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}}class Bv extends Dn{constructor(e){super(e)}load(e,t,n,r){const s=new ut,o=new wh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Zt extends Ve{constructor(e,t=1){super();this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Zt.prototype.isLight=!0;class zv extends Zt{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.groundColor=new be(t)}copy(e){return Zt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}zv.prototype.isHemisphereLight=!0;const Vc=new Se,Gc=new E,Wc=new E;class nl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wc),t.updateMatrixWorld(),Vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sh extends nl{constructor(){super(new xt(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=sa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Sh.prototype.isSpotLightShadow=!0;class Uv extends Zt{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Sh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Uv.prototype.isSpotLight=!0;const qc=new Se,tr=new E,Go=new E;class Eh extends nl{constructor(){super(new xt(90,1,.5,500));this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(tr),Go.copy(n.position),Go.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Go),n.updateMatrixWorld(),r.makeTranslation(-tr.x,-tr.y,-tr.z),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc)}}Eh.prototype.isPointLightShadow=!0;class kv extends Zt{constructor(e,t,n=0,r=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Eh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}kv.prototype.isPointLight=!0;class Th extends nl{constructor(){super(new ka(-5,5,5,-5,.5,500))}}Th.prototype.isDirectionalLightShadow=!0;class Ah extends Zt{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.target=new Ve,this.shadow=new Th}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Ah.prototype.isDirectionalLight=!0;class Ch extends Zt{constructor(e,t){super(e,t);this.type="AmbientLight"}}Ch.prototype.isAmbientLight=!0;class Hv extends Zt{constructor(e,t,n=10,r=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Hv.prototype.isRectAreaLight=!0;class Lh{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}Lh.prototype.isSphericalHarmonics3=!0;class il extends Zt{constructor(e=new Lh,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}il.prototype.isLightProbe=!0;class Vv{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Gv extends Ye{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Gv.prototype.isInstancedBufferGeometry=!0;class Wv extends Dn{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Fi.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}Wv.prototype.isImageBitmapLoader=!0;let ls;const qv={getContext:function(){return ls===void 0&&(ls=new(window.AudioContext||window.webkitAudioContext)),ls},setContext:function(i){ls=i}};class jv extends Dn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Nv(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const c=a.slice(0);qv.getContext().decodeAudioData(c,function(u){t(u)})}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}}class Xv extends il{constructor(e,t,n=1){super(void 0,n);const r=new be().set(e),s=new be().set(t),o=new E(r.r,r.g,r.b),a=new E(s.r,s.g,s.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}}Xv.prototype.isHemisphereLightProbe=!0;class Yv extends il{constructor(e,t=1){super(void 0,t);const n=new be().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Yv.prototype.isAmbientLightProbe=!0;class Zv extends Ve{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Jv{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){mt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;mt.multiplyQuaternionsFlat(e,o,e,t,e,n),mt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const rl="\\[\\]\\.:\\/",Kv=new RegExp("["+rl+"]","g"),sl="[^"+rl+"]",Qv="[^"+rl.replace("\\.","")+"]",$v=/((?:WC+[\/:])*)/.source.replace("WC",sl),eb=/(WCOD+)?/.source.replace("WCOD",Qv),tb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sl),nb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sl),ib=new RegExp("^"+$v+eb+tb+nb+"$"),rb=["material","materials","bones"];class sb{constructor(e,t,n){const r=n||He.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class He{constructor(e,t,n){this.path=t,this.parsedPath=n||He.parseTrackName(t),this.node=He.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new He.Composite(e,t,n):new He(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kv,"")}static parseTrackName(e){const t=ib.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);rb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=He.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}He.Composite=sb;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ob{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:bi,endingEnd:bi};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=jm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;if(c<0||n===0)return;this._startTime=null,t=n*c}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case zu:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Na:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===Xm;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===qm){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Mi,r.endingEnd=Mi):(e?r.endingStart=this.zeroSlopeAtStart?Mi:bi:r.endingStart=vs,t?r.endingEnd=this.zeroSlopeAtEnd?Mi:bi:r.endingEnd=vs)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}class ab extends Pn{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const d=r[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new Jv(He.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new bh(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Hc.findByName(r,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Na),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new ob(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Hc.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(r,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}ab.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class lb extends Sr{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}lb.prototype.isInstancedInterleavedBuffer=!0;class jc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _n=new E,cs=new Se,Wo=new Se;class cb extends Xa{constructor(e){const t=Rh(e),n=new Ye,r=[],s=[],o=new be(0,0,1),a=new be(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new ct(r,3)),n.setAttribute("color",new ct(s,3));const c=new Hi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");Wo.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(cs.multiplyMatrices(Wo,a.matrixWorld),_n.setFromMatrixPosition(cs),r.setXYZ(o,_n.x,_n.y,_n.z),cs.multiplyMatrices(Wo,a.parent.matrixWorld),_n.setFromMatrixPosition(cs),r.setXYZ(o+1,_n.x,_n.y,_n.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Rh(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,Rh(i.children[t]));return e}class ub extends Xa{constructor(e=10,t=10,n=4473924,r=8947848){n=new be(n),r=new be(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===s?n:r;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new Ye;u.setAttribute("position",new ct(c,3)),u.setAttribute("color",new ct(l,3));const h=new Hi({vertexColors:!0,toneMapped:!1});super(u,h);this.type="GridHelper"}}const hb=new Float32Array(1);new Int32Array(hb.buffer);Lt.create=function(i,e){return console.log("THREE.Curve.create() has been deprecated"),i.prototype=Object.create(Lt.prototype),i.prototype.constructor=i,i.prototype.getPoint=e,i};ua.prototype.fromPoints=function(i){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(i)};ub.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};cb.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Dn.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Vv.extractUrlBase(i)};Dn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};zt.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};zt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};zt.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};zt.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};zt.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};Jn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};zi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};qs.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};at.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};at.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};at.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};at.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};at.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};at.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Se.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};Se.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Se.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new E().setFromMatrixColumn(this,3)};Se.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};Se.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Se.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Se.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Se.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Se.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};Se.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Se.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Se.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Se.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Se.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Se.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Se.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Se.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Se.prototype.makeFrustum=function(i,e,t,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,n,t,r,s)};Se.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};sn.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};mt.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};mt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Ui.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Ui.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};Ui.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};tt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};tt.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};tt.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};tt.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};tt.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};tt.barycoordFromPoint=function(i,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),tt.getBarycoord(i,e,t,n,r)};tt.normal=function(i,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),tt.getNormal(i,e,t,n)};Er.prototype.extractAllPoints=function(i){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(i)};Er.prototype.extrude=function(i){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Vi(this,i)};Er.prototype.makeGeometry=function(i){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new $a(this,i)};Q.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};Q.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};Q.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};E.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};E.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};E.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};E.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};E.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};E.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};E.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};E.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};E.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};We.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ve.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};Ve.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ve.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};Ve.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ve.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Ve.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});yt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(yt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Ym},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});rh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};xt.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(Zt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(it.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===bs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(bs)}}});it.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?bs:pr),this};it.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},it.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ye.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};Ye.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new it(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};Ye.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};Ye.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ye.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ye.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};Ye.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Ye.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Sr.prototype.setDynamic=function(i){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?bs:pr),this};Sr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Vi.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Vi.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Vi.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Wa.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(rt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new be}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Fu}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Nt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});Ge.prototype.clearTarget=function(i,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,n)};Ge.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};Ge.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ge.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ge.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ge.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ge.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ge.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ge.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ge.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ge.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ge.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ge.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ge.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ge.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};Ge.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ge.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ge.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ge.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ge.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ge.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ge.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ge.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ge.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ge.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ge.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?Ze:Sn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(eh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Et.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});Zv.prototype.load=function(i){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new jv().load(i,function(n){e.setBuffer(n)}),this};za.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};za.prototype.clear=function(i,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,n)};Zn.crossOrigin=void 0;Zn.loadTexture=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Bv;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Zn.loadTextureCube=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Ov;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Zn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Zn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);const Ph={},Xc={};function Ar(i){const e=Yo(Ph),t=Yo(Xc)||e.scene;return i&&(va(Xc,i),t.add(i),ya(()=>{t.remove(i),e.invalidate()})),{root:e,parent:t,self:i}}function db(i){return va(Ph,i),i}function Yc(i){let e;const t=i[37].default,n=pa(t,i,i[36],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s[1]&32)&&As(n,t,r,r[36],e?Ts(t,r[36],s,null):ma(r[36]),null)},i(r){e||(on(n,r),e=!0)},o(r){jn(n,r),e=!1},d(r){n&&n.d(r)}}}function fb(i){let e,t,n,r,s,o,a=i[0].scene&&Yc(i);return{c(){e=Mn("div"),t=Mn("canvas"),n=lu(),a&&a.c(),this.h()},l(c){e=jo(c,"DIV",{class:!0});var l=ps(e);t=jo(l,"CANVAS",{class:!0}),ps(t).forEach(jt),n=fu(l),a&&a.l(l),l.forEach(jt),this.h()},h(){Gn(t,"class","svelte-1uqz219"),Gn(e,"class","container svelte-1uqz219")},m(c,l){Ps(c,e,l),ar(e,t),i[38](t),ar(e,n),a&&a.m(e,null),i[39](e),r=!0,s||(o=lr(window,"resize",i[2]),s=!0)},p(c,l){c[0].scene?a?(a.p(c,l),l[0]&1&&on(a,1)):(a=Yc(c),a.c(),on(a,1),a.m(e,null)):a&&(wa(),jn(a,1,1,()=>{a=null}),Sa())},i(c){r||(on(a),r=!0)},o(c){jn(a),r=!1},d(c){c&&jt(e),i[38](null),a&&a.d(),i[39](null),s=!1,o()}}}function pb(i,e,t){let{$$slots:n={},$$scope:r}=e,{background:s=null}=e,{environment:o=null}=e,{fog:a=null}=e,{overrideMaterial:c=null}=e,{precision:l="highp"}=e,{powerPreference:u="default"}=e,{alpha:h=!1}=e,{premultipliedAlpha:d=!0}=e,{antialias:f=!1}=e,{stencil:g=!0}=e,{preserveDrawingBuffer:_=!1}=e,{failIfMajorPerformanceCaveat:x=!1}=e,{depth:m=!0}=e,{logarithmicDepthBuffer:p=!1}=e,{autoClear:T=!0}=e,{autoClearColor:M=!0}=e,{autoClearDepth:v=!0}=e,{autoClearStencil:D=!0}=e,{checkShaderErrors:I=!0}=e,{gammaFactor:G=2}=e,{localClippingEnabled:se=!1}=e,{physicallyCorrectLights:H=!1}=e,{outputEncoding:y=void 0}=e,{clippingPlanes:L=[]}=e,{shadows:F=void 0}=e,{toneMapping:A=an}=e,{toneMappingExposure:P=1}=e,{width:B=void 0}=e,{height:U=void 0}=e,{pixelRatio:N=typeof devicePixelRatio!="undefined"?devicePixelRatio:1}=e;function Y(){return Z.renderer.info}let te,$,ne,ye=null;const Ne=W=>W(),Me=()=>{ye||(ye=requestAnimationFrame(()=>{ye=null,j.forEach(Ne),Z.renderer.render(Z.scene,Z.camera.object)}))},j=[],Z=db({canvas:null,scene:null,renderer:null,camera:{object:null,callback:()=>{console.warn("no camera is set")},set:(W,k)=>{t(0,Z.camera.object=W,Z),t(0,Z.camera.callback=k,Z),Z.controls.callback&&Z.controls.callback(Z.camera.object,Z.canvas),Me()}},controls:{object:null,callback:null,set:W=>{t(0,Z.controls.callback=W,Z),Z.camera.object&&t(0,Z.controls.object=W(Z.camera.object,Z.canvas),Z)}},before_render(W){j.push(W),ya(()=>{const k=j.indexOf(W);j.splice(k,1)})},invalidate:Me});xa(()=>(t(0,Z.renderer=new Ge({canvas:Z.canvas,precision:l,powerPreference:u,alpha:h,premultipliedAlpha:d,antialias:f,stencil:g,preserveDrawingBuffer:_,failIfMajorPerformanceCaveat:x,depth:m,logarithmicDepthBuffer:p}),Z),t(0,Z.scene=new Wa,Z),Te(),()=>{console.log("disposing of renderer"),Z.renderer.forceContextLoss(),Z.renderer.dispose()}));const Te=()=>{B===void 0&&t(34,te=ne.clientWidth/N),U===void 0&&t(35,$=ne.clientHeight/N)};function ge(W){hr[W?"unshift":"push"](()=>{Z.canvas=W,t(0,Z),t(3,s),t(4,o),t(5,a),t(6,c),t(17,T),t(18,M),t(19,v),t(20,D),t(21,I),t(22,G),t(23,se),t(24,H),t(25,y),t(26,L),t(28,A),t(29,P),t(27,F)})}function _e(W){hr[W?"unshift":"push"](()=>{ne=W,t(1,ne)})}return i.$$set=W=>{"background"in W&&t(3,s=W.background),"environment"in W&&t(4,o=W.environment),"fog"in W&&t(5,a=W.fog),"overrideMaterial"in W&&t(6,c=W.overrideMaterial),"precision"in W&&t(7,l=W.precision),"powerPreference"in W&&t(8,u=W.powerPreference),"alpha"in W&&t(9,h=W.alpha),"premultipliedAlpha"in W&&t(10,d=W.premultipliedAlpha),"antialias"in W&&t(11,f=W.antialias),"stencil"in W&&t(12,g=W.stencil),"preserveDrawingBuffer"in W&&t(13,_=W.preserveDrawingBuffer),"failIfMajorPerformanceCaveat"in W&&t(14,x=W.failIfMajorPerformanceCaveat),"depth"in W&&t(15,m=W.depth),"logarithmicDepthBuffer"in W&&t(16,p=W.logarithmicDepthBuffer),"autoClear"in W&&t(17,T=W.autoClear),"autoClearColor"in W&&t(18,M=W.autoClearColor),"autoClearDepth"in W&&t(19,v=W.autoClearDepth),"autoClearStencil"in W&&t(20,D=W.autoClearStencil),"checkShaderErrors"in W&&t(21,I=W.checkShaderErrors),"gammaFactor"in W&&t(22,G=W.gammaFactor),"localClippingEnabled"in W&&t(23,se=W.localClippingEnabled),"physicallyCorrectLights"in W&&t(24,H=W.physicallyCorrectLights),"outputEncoding"in W&&t(25,y=W.outputEncoding),"clippingPlanes"in W&&t(26,L=W.clippingPlanes),"shadows"in W&&t(27,F=W.shadows),"toneMapping"in W&&t(28,A=W.toneMapping),"toneMappingExposure"in W&&t(29,P=W.toneMappingExposure),"width"in W&&t(30,B=W.width),"height"in W&&t(31,U=W.height),"pixelRatio"in W&&t(32,N=W.pixelRatio),"$$scope"in W&&t(36,r=W.$$scope)},i.$$.update=()=>{if(i.$$.dirty[0]&121&&Z.scene&&(t(0,Z.scene.background=s,Z),t(0,Z.scene.environment=o,Z),t(0,Z.scene.fog=a,Z),t(0,Z.scene.overrideMaterial=c,Z)),i.$$.dirty[0]&1073610753&&Z.renderer&&(t(0,Z.renderer.autoClear=T,Z),t(0,Z.renderer.autoClearColor=M,Z),t(0,Z.renderer.autoClearDepth=v,Z),t(0,Z.renderer.autoClearStencil=D,Z),t(0,Z.renderer.debug.checkShaderErrors=I,Z),t(0,Z.renderer.gammaFactor=G,Z),t(0,Z.renderer.localClippingEnabled=se,Z),t(0,Z.renderer.physicallyCorrectLights=H,Z),y!=null&&t(0,Z.renderer.outputEncoding=y,Z),t(0,Z.renderer.clippingPlanes=L,Z),t(0,Z.renderer.toneMapping=A,Z),t(0,Z.renderer.toneMappingExposure=P,Z),F?(t(0,Z.renderer.shadowMap.enabled=!0,Z),t(0,Z.renderer.shadowMap.autoUpdate=!0,Z),t(0,Z.renderer.shadowMap.type=F===!0?Ia:F,Z)):t(0,Z.renderer.shadowMap.enabled=!1,Z),Me()),i.$$.dirty[0]&1073741825|i.$$.dirty[1]&27&&Z.renderer){const W=B!==void 0?B:te,k=U!==void 0?U:$;Z.renderer.setSize(W,k,!1),Z.camera.callback(W,k),Z.renderer.setPixelRatio(N),Me()}},[Z,ne,Te,s,o,a,c,l,u,h,d,f,g,_,x,m,p,T,M,v,D,I,G,se,H,y,L,F,A,P,B,U,N,Y,te,$,r,n,ge,_e]}class Rb extends Ln{constructor(e){super();Yn(this,e,pb,fb,Cn,{background:3,environment:4,fog:5,overrideMaterial:6,precision:7,powerPreference:8,alpha:9,premultipliedAlpha:10,antialias:11,stencil:12,preserveDrawingBuffer:13,failIfMajorPerformanceCaveat:14,depth:15,logarithmicDepthBuffer:16,autoClear:17,autoClearColor:18,autoClearDepth:19,autoClearStencil:20,checkShaderErrors:21,gammaFactor:22,localClippingEnabled:23,physicallyCorrectLights:24,outputEncoding:25,clippingPlanes:26,shadows:27,toneMapping:28,toneMappingExposure:29,width:30,height:31,pixelRatio:32,info:33},null,[-1,-1])}get info(){return this.$$.ctx[33]}}function mb(i,e,t,n){i.position.set(e[0],e[1],e[2]),i.rotation.set(t[0],t[1],t[2],t[3]),typeof n=="number"?i.scale.set(n,n,n):i.scale.set(n[0],n[1],n[2])}let gb=[0,0,0],_b=[0,0,0],xb=[1,1,1],yb=new Ye,vb=new tl;function bb(i){let e;const t=i[11].default,n=pa(t,i,i[10],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&1024)&&As(n,t,r,r[10],e?Ts(t,r[10],s,null):ma(r[10]),null)},i(r){e||(on(n,r),e=!0)},o(r){jn(n,r),e=!1},d(r){n&&n.d(r)}}}function Mb(i,e,t){let{$$slots:n={},$$scope:r}=e,{geometry:s=yb}=e,{material:o=vb}=e,{position:a=gb}=e,{rotation:c=_b}=e,{scale:l=xb}=e,{castShadow:u=!1}=e,{receiveShadow:h=!1}=e,{frustumCulled:d=!0}=e,{renderOrder:f=0}=e;const{root:g,self:_}=Ar(new yt(s,o));return i.$$set=x=>{"geometry"in x&&t(0,s=x.geometry),"material"in x&&t(1,o=x.material),"position"in x&&t(2,a=x.position),"rotation"in x&&t(3,c=x.rotation),"scale"in x&&t(4,l=x.scale),"castShadow"in x&&t(5,u=x.castShadow),"receiveShadow"in x&&t(6,h=x.receiveShadow),"frustumCulled"in x&&t(7,d=x.frustumCulled),"renderOrder"in x&&t(8,f=x.renderOrder),"$$scope"in x&&t(10,r=x.$$scope)},i.$$.update=()=>{i.$$.dirty&1023&&(_.geometry&&s!==_.geometry&&_.geometry.dispose(),t(9,_.geometry=s,_),t(9,_.material=o,_),t(9,_.castShadow=u,_),t(9,_.receiveShadow=h,_),t(9,_.frustumCulled=d,_),t(9,_.renderOrder=f,_),mb(_,a,c,l),g.invalidate())},[s,o,a,c,l,u,h,d,f,_,r,n]}class Pb extends Ln{constructor(e){super();Yn(this,e,Mb,bb,Cn,{geometry:0,material:1,position:2,rotation:3,scale:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8})}}function wb(i,e,t){let{fov:n=45}=e,{near:r=.1}=e,{far:s=2e3}=e,{zoom:o=1}=e,{viewOffset:a=void 0}=e,{position:c=[0,0,5]}=e,{target:l=[0,0,0]}=e;const{root:u,self:h}=Ar(new xt),d=new E;return u.camera.set(h,(f,g)=>{t(7,h.aspect=f/g,h),h.updateProjectionMatrix()}),i.$$set=f=>{"fov"in f&&t(0,n=f.fov),"near"in f&&t(1,r=f.near),"far"in f&&t(2,s=f.far),"zoom"in f&&t(3,o=f.zoom),"viewOffset"in f&&t(4,a=f.viewOffset),"position"in f&&t(5,c=f.position),"target"in f&&t(6,l=f.target)},i.$$.update=()=>{i.$$.dirty&255&&(t(7,h.fov=n,h),t(7,h.near=r,h),t(7,h.far=s,h),t(7,h.zoom=o,h),a&&h.setViewOffset(a.fullWidth,a.fullHeight,a.x,a.y,a.width,a.height),h.position.set(c[0],c[1],c[2]),d.set(l[0],l[1],l[2]),h.lookAt(d),h.updateProjectionMatrix(),u.invalidate())},[n,r,s,o,a,c,l,h]}class Db extends Ln{constructor(e){super();Yn(this,e,wb,null,Cn,{fov:0,near:1,far:2,zoom:3,viewOffset:4,position:5,target:6})}}const Zc={type:"change"},qo={type:"start"},Jc={type:"end"};class Sb extends Pn{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rn.ROTATE,MIDDLE:rn.DOLLY,RIGHT:rn.PAN},this.touches={ONE:xn.ROTATE,TWO:xn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",S),this._domElementKeyEvents=R},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zc),n.update(),s=r.NONE},this.update=function(){const R=new E,re=new mt().setFromUnitVectors(e.up,new E(0,1,0)),pe=re.clone().invert(),ce=new E,C=new mt,fe=2*Math.PI;return function(){const Ae=n.object.position;R.copy(Ae).sub(n.target),R.applyQuaternion(re),a.setFromVector3(R),n.autoRotate&&s===r.NONE&&se(I()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let le=n.minAzimuthAngle,ee=n.maxAzimuthAngle;return isFinite(le)&&isFinite(ee)&&(le<-Math.PI?le+=fe:le>Math.PI&&(le-=fe),ee<-Math.PI?ee+=fe:ee>Math.PI&&(ee-=fe),le<=ee?a.theta=Math.max(le,Math.min(ee,a.theta)):a.theta=a.theta>(le+ee)/2?Math.max(le,a.theta):Math.min(ee,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(a),R.applyQuaternion(pe),Ae.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||ce.distanceToSquared(n.object.position)>o||8*(1-C.dot(n.object.quaternion))>o?(n.dispatchEvent(Zc),ce.copy(n.object.position),C.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",K),n.domElement.removeEventListener("pointerdown",oe),n.domElement.removeEventListener("pointercancel",Ee),n.domElement.removeEventListener("wheel",qe),n.domElement.removeEventListener("pointermove",xe),n.domElement.removeEventListener("pointerup",de),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",S)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new jc,c=new jc;let l=1;const u=new E;let h=!1;const d=new Q,f=new Q,g=new Q,_=new Q,x=new Q,m=new Q,p=new Q,T=new Q,M=new Q,v=[],D={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function G(){return Math.pow(.95,n.zoomSpeed)}function se(R){c.theta-=R}function H(R){c.phi-=R}const y=function(){const R=new E;return function(pe,ce){R.setFromMatrixColumn(ce,0),R.multiplyScalar(-pe),u.add(R)}}(),L=function(){const R=new E;return function(pe,ce){n.screenSpacePanning===!0?R.setFromMatrixColumn(ce,1):(R.setFromMatrixColumn(ce,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(pe),u.add(R)}}(),F=function(){const R=new E;return function(pe,ce){const C=n.domElement;if(n.object.isPerspectiveCamera){const fe=n.object.position;R.copy(fe).sub(n.target);let he=R.length();he*=Math.tan(n.object.fov/2*Math.PI/180),y(2*pe*he/C.clientHeight,n.object.matrix),L(2*ce*he/C.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(y(pe*(n.object.right-n.object.left)/n.object.zoom/C.clientWidth,n.object.matrix),L(ce*(n.object.top-n.object.bottom)/n.object.zoom/C.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function A(R){n.object.isPerspectiveCamera?l/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(R){n.object.isPerspectiveCamera?l*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(R){d.set(R.clientX,R.clientY)}function U(R){p.set(R.clientX,R.clientY)}function N(R){_.set(R.clientX,R.clientY)}function Y(R){f.set(R.clientX,R.clientY),g.subVectors(f,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;se(2*Math.PI*g.x/re.clientHeight),H(2*Math.PI*g.y/re.clientHeight),d.copy(f),n.update()}function te(R){T.set(R.clientX,R.clientY),M.subVectors(T,p),M.y>0?A(G()):M.y<0&&P(G()),p.copy(T),n.update()}function $(R){x.set(R.clientX,R.clientY),m.subVectors(x,_).multiplyScalar(n.panSpeed),F(m.x,m.y),_.copy(x),n.update()}function ne(R){R.deltaY<0?P(G()):R.deltaY>0&&A(G()),n.update()}function ye(R){let re=!1;switch(R.code){case n.keys.UP:F(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:F(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:F(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:F(-n.keyPanSpeed,0),re=!0;break}re&&(R.preventDefault(),n.update())}function Ne(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const R=.5*(v[0].pageX+v[1].pageX),re=.5*(v[0].pageY+v[1].pageY);d.set(R,re)}}function Me(){if(v.length===1)_.set(v[0].pageX,v[0].pageY);else{const R=.5*(v[0].pageX+v[1].pageX),re=.5*(v[0].pageY+v[1].pageY);_.set(R,re)}}function j(){const R=v[0].pageX-v[1].pageX,re=v[0].pageY-v[1].pageY,pe=Math.sqrt(R*R+re*re);p.set(0,pe)}function Z(){n.enableZoom&&j(),n.enablePan&&Me()}function Te(){n.enableZoom&&j(),n.enableRotate&&Ne()}function ge(R){if(v.length==1)f.set(R.pageX,R.pageY);else{const pe=X(R),ce=.5*(R.pageX+pe.x),C=.5*(R.pageY+pe.y);f.set(ce,C)}g.subVectors(f,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;se(2*Math.PI*g.x/re.clientHeight),H(2*Math.PI*g.y/re.clientHeight),d.copy(f)}function _e(R){if(v.length===1)x.set(R.pageX,R.pageY);else{const re=X(R),pe=.5*(R.pageX+re.x),ce=.5*(R.pageY+re.y);x.set(pe,ce)}m.subVectors(x,_).multiplyScalar(n.panSpeed),F(m.x,m.y),_.copy(x)}function W(R){const re=X(R),pe=R.pageX-re.x,ce=R.pageY-re.y,C=Math.sqrt(pe*pe+ce*ce);T.set(0,C),M.set(0,Math.pow(T.y/p.y,n.zoomSpeed)),A(M.y),p.copy(T)}function k(R){n.enableZoom&&W(R),n.enablePan&&_e(R)}function ie(R){n.enableZoom&&W(R),n.enableRotate&&ge(R)}function oe(R){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",xe),n.domElement.addEventListener("pointerup",de)),ae(R),R.pointerType==="touch"?b(R):ve(R))}function xe(R){n.enabled!==!1&&(R.pointerType==="touch"?q(R):Re(R))}function de(R){me(R),v.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",xe),n.domElement.removeEventListener("pointerup",de)),n.dispatchEvent(Jc),s=r.NONE}function Ee(R){me(R)}function ve(R){let re;switch(R.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case rn.DOLLY:if(n.enableZoom===!1)return;U(R),s=r.DOLLY;break;case rn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;N(R),s=r.PAN}else{if(n.enableRotate===!1)return;B(R),s=r.ROTATE}break;case rn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;B(R),s=r.ROTATE}else{if(n.enablePan===!1)return;N(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(qo)}function Re(R){if(n.enabled!==!1)switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Y(R);break;case r.DOLLY:if(n.enableZoom===!1)return;te(R);break;case r.PAN:if(n.enablePan===!1)return;$(R);break}}function qe(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(qo),ne(R),n.dispatchEvent(Jc))}function S(R){n.enabled===!1||n.enablePan===!1||ye(R)}function b(R){switch(we(R),v.length){case 1:switch(n.touches.ONE){case xn.ROTATE:if(n.enableRotate===!1)return;Ne(),s=r.TOUCH_ROTATE;break;case xn.PAN:if(n.enablePan===!1)return;Me(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case xn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Z(),s=r.TOUCH_DOLLY_PAN;break;case xn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(qo)}function q(R){switch(we(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;_e(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(R),n.update();break;default:s=r.NONE}}function K(R){n.enabled!==!1&&R.preventDefault()}function ae(R){v.push(R)}function me(R){delete D[R.pointerId];for(let re=0;re<v.length;re++)if(v[re].pointerId==R.pointerId){v.splice(re,1);return}}function we(R){let re=D[R.pointerId];re===void 0&&(re=new Q,D[R.pointerId]=re),re.set(R.pageX,R.pageY)}function X(R){const re=R.pointerId===v[0].pointerId?v[1]:v[0];return D[re.pointerId]}n.domElement.addEventListener("contextmenu",K),n.domElement.addEventListener("pointerdown",oe),n.domElement.addEventListener("pointercancel",Ee),n.domElement.addEventListener("wheel",qe,{passive:!1}),this.update()}}function Eb(i){xa(()=>{let e;return requestAnimationFrame(function t(){e=requestAnimationFrame(t),i()}),()=>{cancelAnimationFrame(e)}})}function Tb(i,e,t){let{autoRotate:n=!1}=e,{autoRotateSpeed:r=2}=e,{dampingFactor:s=.05}=e,{enableDamping:o=!1}=e,{enabled:a=!0}=e,{enablePan:c=!0}=e,{enableRotate:l=!0}=e,{enableZoom:u=!0}=e,{keyPanSpeed:h=7}=e,{keys:d={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}}=e,{maxAzimuthAngle:f=1/0}=e,{maxDistance:g=1/0}=e,{maxPolarAngle:_=Math.PI}=e,{maxZoom:x=1/0}=e,{minAzimuthAngle:m=1/0}=e,{minDistance:p=0}=e,{minPolarAngle:T=0}=e,{minZoom:M=0}=e,{mouseButtons:v={LEFT:rn.ROTATE,MIDDLE:rn.DOLLY,RIGHT:rn.PAN}}=e,{panSpeed:D=1}=e,{rotateSpeed:I=1}=e,{screenSpacePanning:G=!0}=e,{touches:se={ONE:xn.ROTATE,TWO:xn.DOLLY_PAN}}=e,{zoomSpeed:H=1}=e,{target:y=[0,0,0]}=e;const{root:L}=Ar(),F=_u();let A;return L.controls.set((P,B)=>(t(25,A=new Sb(P,B)),A.addEventListener("start",U=>{F("start",U)}),A.addEventListener("end",U=>{F("end",U)}),A.addEventListener("change",U=>{F("change",U),(!y||A.target.x!==y[0]||A.target.y!==y[1]||A.target.z!==y[2])&&t(0,y=[A.target.x,A.target.y,A.target.z]),L.invalidate()}),A)),Eb(()=>{A&&(n||o)&&A.update()}),i.$$set=P=>{"autoRotate"in P&&t(1,n=P.autoRotate),"autoRotateSpeed"in P&&t(2,r=P.autoRotateSpeed),"dampingFactor"in P&&t(3,s=P.dampingFactor),"enableDamping"in P&&t(4,o=P.enableDamping),"enabled"in P&&t(5,a=P.enabled),"enablePan"in P&&t(6,c=P.enablePan),"enableRotate"in P&&t(7,l=P.enableRotate),"enableZoom"in P&&t(8,u=P.enableZoom),"keyPanSpeed"in P&&t(9,h=P.keyPanSpeed),"keys"in P&&t(10,d=P.keys),"maxAzimuthAngle"in P&&t(11,f=P.maxAzimuthAngle),"maxDistance"in P&&t(12,g=P.maxDistance),"maxPolarAngle"in P&&t(13,_=P.maxPolarAngle),"maxZoom"in P&&t(14,x=P.maxZoom),"minAzimuthAngle"in P&&t(15,m=P.minAzimuthAngle),"minDistance"in P&&t(16,p=P.minDistance),"minPolarAngle"in P&&t(17,T=P.minPolarAngle),"minZoom"in P&&t(18,M=P.minZoom),"mouseButtons"in P&&t(19,v=P.mouseButtons),"panSpeed"in P&&t(20,D=P.panSpeed),"rotateSpeed"in P&&t(21,I=P.rotateSpeed),"screenSpacePanning"in P&&t(22,G=P.screenSpacePanning),"touches"in P&&t(23,se=P.touches),"zoomSpeed"in P&&t(24,H=P.zoomSpeed),"target"in P&&t(0,y=P.target)},i.$$.update=()=>{i.$$.dirty&67108862&&A&&(t(25,A.autoRotate=n,A),t(25,A.autoRotateSpeed=r,A),t(25,A.dampingFactor=s,A),t(25,A.enableDamping=o,A),t(25,A.enabled=a,A),t(25,A.enablePan=c,A),t(25,A.enableRotate=l,A),t(25,A.enableZoom=u,A),t(25,A.keyPanSpeed=h,A),t(25,A.keys=d,A),t(25,A.maxAzimuthAngle=f,A),t(25,A.maxDistance=g,A),t(25,A.maxPolarAngle=_,A),t(25,A.maxZoom=x,A),t(25,A.minAzimuthAngle=m,A),t(25,A.minDistance=p,A),t(25,A.minPolarAngle=T,A),t(25,A.minZoom=M,A),t(25,A.mouseButtons=v,A),t(25,A.panSpeed=D,A),t(25,A.rotateSpeed=I,A),t(25,A.screenSpacePanning=G,A),t(25,A.touches=se,A),t(25,A.zoomSpeed=H,A),A.update()),i.$$.dirty&33554433&&y&&(A.target.x!==y[0]||A.target.y!==y[1]||A.target.z!==y[2])&&(A.target.set(y[0],y[1],y[2]),A.update())},[y,n,r,s,o,a,c,l,u,h,d,f,g,_,x,m,p,T,M,v,D,I,G,se,H,A]}class Ib extends Ln{constructor(e){super();Yn(this,e,Tb,null,Cn,{autoRotate:1,autoRotateSpeed:2,dampingFactor:3,enableDamping:4,enabled:5,enablePan:6,enableRotate:7,enableZoom:8,keyPanSpeed:9,keys:10,maxAzimuthAngle:11,maxDistance:12,maxPolarAngle:13,maxZoom:14,minAzimuthAngle:15,minDistance:16,minPolarAngle:17,minZoom:18,mouseButtons:19,panSpeed:20,rotateSpeed:21,screenSpacePanning:22,touches:23,zoomSpeed:24,target:0})}}function Ab(i,e,t){let{color:n=16777215}=e,{intensity:r=1}=e;const{root:s,self:o}=Ar(new Ch(n,r));return i.$$set=a=>{"color"in a&&t(0,n=a.color),"intensity"in a&&t(1,r=a.intensity)},i.$$.update=()=>{i.$$.dirty&7&&(o.color.set(n),t(2,o.intensity=r,o),s.invalidate())},[n,r,o]}class Fb extends Ln{constructor(e){super();Yn(this,e,Ab,null,Cn,{color:0,intensity:1})}}function Cb(i,e,t){let{color:n=16777215}=e,{intensity:r=1}=e,{position:s=[0,1,0]}=e,{target:o=[0,0,0]}=e,{shadow:a=null}=e;const{root:c,self:l}=Ar(new Ah);return i.$$set=u=>{"color"in u&&t(0,n=u.color),"intensity"in u&&t(1,r=u.intensity),"position"in u&&t(2,s=u.position),"target"in u&&t(3,o=u.target),"shadow"in u&&t(4,a=u.shadow)},i.$$.update=()=>{if(i.$$.dirty&47&&(l.color.set(n),t(5,l.intensity=r,l),l.position.set(s[0],s[1],s[2]),l.target.position.set(o[0],o[1],o[2]),c.invalidate()),i.$$.dirty&48){if(a){const{mapSize:u=[512,512],camera:{left:h=-5,bottom:d=-5,right:f=5,top:g=5,near:_=.5,far:x=500}={},bias:m=0,radius:p=1}=a===!0?{}:a;l.shadow.mapSize.set(u[0],u[1]),t(5,l.shadow.camera.left=h,l),t(5,l.shadow.camera.top=g,l),t(5,l.shadow.camera.right=f,l),t(5,l.shadow.camera.bottom=d,l),t(5,l.shadow.camera.near=_,l),t(5,l.shadow.camera.far=x,l),t(5,l.shadow.bias=m,l),t(5,l.shadow.radius=p,l),t(5,l.castShadow=!0,l)}else t(5,l.castShadow=!1,l);c.invalidate()}},[n,r,s,o,a,l]}class Nb extends Ln{constructor(e){super();Yn(this,e,Cb,null,Cn,{color:0,intensity:1,position:2,target:3,shadow:4})}}const Ob=new E,Bb=new E,zb=new at;export{af as A,Aa as B,Kc as C,Ru as D,jd as E,pa as F,As as G,ma as H,Ts as I,Hf as J,rp as K,ar as L,lt as M,Rb as N,Eb as O,Pb as P,wr as Q,el as R,Ln as S,Db as T,Ib as U,Fb as V,Nb as W,Qh as X,rf as Y,vu as Z,ps as a,Gn as b,jo as c,jt as d,Mn as e,Ed as f,Ps as g,du as h,Yn as i,Md as j,lu as k,ld as l,fu as m,wa as n,jn as o,Sa as p,on as q,va as r,Cn as s,Ds as t,Hd as u,xa as v,yf as w,vf as x,Tu as y,of as z};
