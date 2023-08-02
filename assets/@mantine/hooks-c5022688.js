import{r as s,a as k}from"../vendor-aedae033.js";const A=["mousedown","touchstart"];function te(e,t,n){const o=s.useRef();return s.useEffect(()=>{const r=u=>{const{target:c}=u??{};if(Array.isArray(n)){const i=(c==null?void 0:c.hasAttribute("data-ignore-outside-clicks"))||!document.body.contains(c)&&c.tagName!=="HTML";n.every(a=>!!a&&!u.composedPath().includes(a))&&!i&&e()}else o.current&&!o.current.contains(c)&&e()};return(t||A).forEach(u=>document.addEventListener(u,r)),()=>{(t||A).forEach(u=>document.removeEventListener(u,r))}},[o,e,n]),o}function x(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch{return e.addListener(t),()=>e.removeListener(t)}}function C(e,t){return typeof t=="boolean"?t:typeof window<"u"&&"matchMedia"in window?window.matchMedia(e).matches:!1}function _(e,t,{getInitialValueInEffect:n}={getInitialValueInEffect:!0}){const[o,r]=s.useState(n?t:C(e,t)),u=s.useRef();return s.useEffect(()=>{if("matchMedia"in window)return u.current=window.matchMedia(e),r(u.current.matches),x(u.current,c=>r(c.matches))},[e]),o}function ne(e,t,n={leading:!1}){const[o,r]=s.useState(e),u=s.useRef(!1),c=s.useRef(null),i=s.useRef(!1),f=()=>window.clearTimeout(c.current);return s.useEffect(()=>{u.current&&(!i.current&&n.leading?(i.current=!0,r(e)):(f(),c.current=window.setTimeout(()=>{i.current=!1,r(e)},t)))},[e,n.leading,t]),s.useEffect(()=>(u.current=!0,f),[]),[o,f]}const F=typeof document<"u"?s.useLayoutEffect:s.useEffect;function U(e,t){const n=s.useRef(!1);s.useEffect(()=>()=>{n.current=!1},[]),s.useEffect(()=>{if(n.current)return e();n.current=!0},t)}function re({opened:e,shouldReturnFocus:t=!0}){const n=s.useRef(),o=()=>{var r;n.current&&"focus"in n.current&&typeof n.current.focus=="function"&&((r=n.current)==null||r.focus({preventScroll:!0}))};return U(()=>{let r=-1;const u=c=>{c.key==="Tab"&&window.clearTimeout(r)};return document.addEventListener("keydown",u),e?n.current=document.activeElement:t&&(r=window.setTimeout(o,10)),()=>{window.clearTimeout(r),document.removeEventListener("keydown",u)}},[e,t]),o}const P=/input|select|textarea|button|object/,T="a, input, select, textarea, button, object, [tabindex]";function V(e){return e.style.display==="none"}function B(e){if(e.getAttribute("aria-hidden")||e.getAttribute("hidden")||e.getAttribute("type")==="hidden")return!1;let n=e;for(;n&&!(n===document.body||n.nodeType===11);){if(V(n))return!1;n=n.parentNode}return!0}function S(e){let t=e.getAttribute("tabindex");return t===null&&(t=void 0),parseInt(t,10)}function w(e){const t=e.nodeName.toLowerCase(),n=!Number.isNaN(S(e));return(P.test(t)&&!e.disabled||e instanceof HTMLAnchorElement&&e.href||n)&&B(e)}function I(e){const t=S(e);return(Number.isNaN(t)||t>=0)&&w(e)}function O(e){return Array.from(e.querySelectorAll(T)).filter(I)}function j(e,t){const n=O(e);if(!n.length){t.preventDefault();return}const o=n[t.shiftKey?0:n.length-1],r=e.getRootNode();if(!(o===r.activeElement||e===r.activeElement))return;t.preventDefault();const c=n[t.shiftKey?n.length-1:0];c&&c.focus()}function N(){return`mantine-${Math.random().toString(36).slice(2,11)}`}function K(e,t="body > :not(script)"){const n=N(),o=Array.from(document.querySelectorAll(t)).map(r=>{var u;if((u=r==null?void 0:r.shadowRoot)!=null&&u.contains(e)||r.contains(e))return;const c=r.getAttribute("aria-hidden"),i=r.getAttribute("data-hidden"),f=r.getAttribute("data-focus-id");return r.setAttribute("data-focus-id",n),c===null||c==="false"?r.setAttribute("aria-hidden","true"):!i&&!f&&r.setAttribute("data-hidden",c),{node:r,ariaHidden:i||null}});return()=>{o.forEach(r=>{!r||n!==r.node.getAttribute("data-focus-id")||(r.ariaHidden===null?r.node.removeAttribute("aria-hidden"):r.node.setAttribute("aria-hidden",r.ariaHidden),r.node.removeAttribute("data-focus-id"),r.node.removeAttribute("data-hidden"))})}}function ue(e=!0){const t=s.useRef(),n=s.useRef(null),o=u=>{let c=u.querySelector("[data-autofocus]");if(!c){const i=Array.from(u.querySelectorAll(T));c=i.find(I)||i.find(w)||null,!c&&w(u)&&(c=u)}c&&c.focus({preventScroll:!0})},r=s.useCallback(u=>{if(e){if(u===null){n.current&&(n.current(),n.current=null);return}n.current=K(u),t.current!==u&&(u?(setTimeout(()=>{u.getRootNode()&&o(u)}),t.current=u):t.current=null)}},[e]);return s.useEffect(()=>{if(!e)return;t.current&&setTimeout(()=>o(t.current));const u=c=>{c.key==="Tab"&&t.current&&j(t.current,c)};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u),n.current&&n.current()}},[e]),r}const W=k["useId".toString()]||(()=>{});function Q(){const e=W();return e?`mantine-${e.replace(/:/g,"")}`:""}function oe(e){const t=Q(),[n,o]=s.useState(t);return F(()=>{o(N())},[]),typeof e=="string"?e:typeof window>"u"?t:n}function R(e,t,n){s.useEffect(()=>(window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)),[e,t])}function $(e,t){typeof e=="function"?e(t):typeof e=="object"&&e!==null&&"current"in e&&(e.current=t)}function q(...e){return t=>{e.forEach(n=>$(n,t))}}function ce(...e){return s.useCallback(q(...e),e)}function se({value:e,defaultValue:t,finalValue:n,onChange:o=()=>{}}){const[r,u]=s.useState(t!==void 0?t:n),c=i=>{u(i),o==null||o(i)};return e!==void 0?[e,o,!0]:[r,c,!1]}function z(e,t){return _("(prefers-reduced-motion: reduce)",e,t)}const G=e=>e<.5?2*e*e:-1+(4-2*e)*e,J=({axis:e,target:t,parent:n,alignment:o,offset:r,isList:u})=>{if(!t||!n&&typeof document>"u")return 0;const c=!!n,f=(n||document.body).getBoundingClientRect(),a=t.getBoundingClientRect(),h=l=>a[l]-f[l];if(e==="y"){const l=h("top");if(l===0)return 0;if(o==="start"){const d=l-r;return d<=a.height*(u?0:1)||!u?d:0}const m=c?f.height:window.innerHeight;if(o==="end"){const d=l+r-m+a.height;return d>=-a.height*(u?0:1)||!u?d:0}return o==="center"?l-m/2+a.height/2:0}if(e==="x"){const l=h("left");if(l===0)return 0;if(o==="start"){const d=l-r;return d<=a.width||!u?d:0}const m=c?f.width:window.innerWidth;if(o==="end"){const d=l+r-m+a.width;return d>=-a.width||!u?d:0}return o==="center"?l-m/2+a.width/2:0}return 0},X=({axis:e,parent:t})=>{if(!t&&typeof document>"u")return 0;const n=e==="y"?"scrollTop":"scrollLeft";if(t)return t[n];const{body:o,documentElement:r}=document;return o[n]+r[n]},Y=({axis:e,parent:t,distance:n})=>{if(!t&&typeof document>"u")return;const o=e==="y"?"scrollTop":"scrollLeft";if(t)t[o]=n;else{const{body:r,documentElement:u}=document;r[o]=n,u[o]=n}};function ie({duration:e=1250,axis:t="y",onScrollFinish:n,easing:o=G,offset:r=0,cancelable:u=!0,isList:c=!1}={}){const i=s.useRef(0),f=s.useRef(0),a=s.useRef(!1),h=s.useRef(null),l=s.useRef(null),m=z(),d=()=>{i.current&&cancelAnimationFrame(i.current)},b=s.useCallback(({alignment:L="start"}={})=>{var E;a.current=!1,i.current&&d();const p=(E=X({parent:h.current,axis:t}))!=null?E:0,M=J({parent:h.current,target:l.current,axis:t,alignment:L,offset:r,isList:c})-(h.current?0:p);function y(){f.current===0&&(f.current=performance.now());const H=performance.now()-f.current,v=m||e===0?1:H/e,D=p+M*o(v);Y({parent:h.current,axis:t,distance:D}),!a.current&&v<1?i.current=requestAnimationFrame(y):(typeof n=="function"&&n(),f.current=0,i.current=0,d())}y()},[t,e,o,c,r,n,m]),g=()=>{u&&(a.current=!0)};return R("wheel",g,{passive:!0}),R("touchmove",g,{passive:!0}),s.useEffect(()=>d,[]),{scrollableRef:h,targetRef:l,scrollIntoView:b,cancel:d}}export{oe as a,U as b,se as c,ce as d,z as e,ue as f,re as g,te as h,ie as i,ne as j,N as r,F as u};
