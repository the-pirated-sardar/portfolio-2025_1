import{j as p,r as s}from"./jsx-runtime-BMrMXMSG.js";import{p as d,c as _,d as A,a as W,n as U}from"./style-CdyozSHa.js";import{L as fe}from"./components-Dta19ZtI.js";const de="/assets/gotham-bold-italic-C_msAlmW.woff2",me="/assets/gotham-bold-D1kvQ7KV.woff2",pe="/assets/gotham-book-italic-Bm2IEtSK.woff2",he="/assets/gotham-book-Bnaws0Ef.woff2",xe="/assets/gotham-medium-italic-Dok430ou.woff2",ge="/assets/gotham-medium-0VT3RO8I.woff2",ye="/assets/ipa-gothic-DimHCOud.woff2",Se={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"Gotham, var(--systemFontStack)",monoFontStack:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",japaneseFontStack:"IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:d(140),fontSizeH1:d(100),fontSizeH2:d(58),fontSizeH3:d(38),fontSizeH4:d(28),fontSizeH5:d(24),fontSizeBodyXL:d(22),fontSizeBodyL:d(20),fontSizeBodyM:d(18),fontSizeBodyS:d(16),fontSizeBodyXS:d(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},be={fontSizeH0:d(120),fontSizeH1:d(80)},ve={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:d(100),fontSizeH1:d(70),fontSizeH2:d(50),fontSizeH3:d(36),fontSizeH4:d(26),fontSizeH5:d(22)},ke={fontSizeH0:d(80),fontSizeH1:d(60),fontSizeH2:d(48),fontSizeH3:d(32),fontSizeH4:d(24),fontSizeH5:d(20)},we={spaceOuter:"24px",fontSizeH0:d(56),fontSizeH1:d(40),fontSizeH2:d(34),fontSizeH3:d(28),fontSizeH4:d(22),fontSizeH5:d(18),fontSizeBodyL:d(17),fontSizeBodyM:d(16),fontSizeBodyS:d(14)},ze={spaceOuter:"16px",fontSizeH0:d(42),fontSizeH1:d(38),fontSizeH2:d(28),fontSizeH3:d(24),fontSizeH4:d(20)},Re={background:"oklch(17.76% 0 0)",backgroundLight:"oklch(21.78% 0 0)",primary:"oklch(84.42% 0.19 202.24)",accent:"oklch(84.42% 0.19 202.24)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},Me={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(84.42% 0.19 202.24)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},Y={base:Se,desktop:be,laptop:ve,tablet:ke,mobile:we,mobileS:ze},q={dark:Re,light:Me},Z=s.createContext({}),_t=({theme:e="dark",children:t,className:n,as:o="div",toggleTheme:c,...r})=>{const a=ee(),i=!a.theme;return p.jsxs(Z.Provider,{value:{theme:e,toggleTheme:c||a.toggleTheme},children:[i&&t,!i&&p.jsx(o,{className:_(n),"data-theme":e,...r,children:t})]})};function ee(){return s.useContext(Z)}function $(e){return e.replace(/\s\s+/g," ")}function G(e){return $(Object.keys(e).map(t=>`--${t}: ${e[t]};`).join(`

`))}function _e(){return $(Object.keys(A).map(e=>`
        @media (max-width: ${A[e]}px) {
          :root {
            ${G(Y[e])}
          }
        }
      `).join(`
`))}const Ce=$(`
  @layer theme, base, components, layout;
`),He=$(`
  :root {
    ${G(Y.base)}
  }

  ${_e()}

  [data-theme='dark'] {
    ${G(q.dark)}
  }

  [data-theme='light'] {
    ${G(q.light)}
  }
`),Le=$(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${he}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${pe}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${ge}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${xe}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${me}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${de}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${ye}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),Ct=$(`
  ${Ce}

  @layer theme {
    ${He}
    ${Le}
  }
`),$e="_icon_1tdl1_2",je={icon:$e},Ie="/assets/icons-DGlJMztt.svg",V=s.forwardRef(({icon:e,className:t,size:n,...o},c)=>p.jsx("svg",{"aria-hidden":!0,ref:c,className:_(je.icon,t),width:n||24,height:n||24,...o,children:p.jsx("use",{href:`${Ie}#${e}`})})),Te="_text_13dm1_2",Pe={text:Te},Ee=({children:e,size:t="m",as:n="span",align:o="auto",weight:c="auto",secondary:r,className:a,...i})=>p.jsx(n,{className:_(Pe.text,a),"data-align":o,"data-size":t,"data-weight":c,"data-secondary":r,...i,children:e}),te=s.createContext(null),ne=typeof document<"u",se=ne?s.useLayoutEffect:s.useEffect;class Q{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function Be(e){let t=new Q,n=new Q,o=0,c=!1,r=!1;const a=new WeakSet,i={schedule:(f,m=!1,u=!1)=>{const l=u&&c,h=l?t:n;return m&&a.add(f),h.add(f)&&l&&c&&(o=t.order.length),f},cancel:f=>{n.remove(f),a.delete(f)},process:f=>{if(c){r=!0;return}if(c=!0,[t,n]=[n,t],n.clear(),o=t.order.length,o)for(let m=0;m<o;m++){const u=t.order[m];a.has(u)&&(i.schedule(u),e()),u(f)}c=!1,r&&(r=!1,i.process(f))}};return i}const N=["prepare","read","update","preRender","render","postRender"],Fe=40;function Ne(e,t){let n=!1,o=!0;const c={delta:0,timestamp:0,isProcessing:!1},r=N.reduce((l,h)=>(l[h]=Be(()=>n=!0),l),{}),a=l=>{r[l].process(c)},i=()=>{const l=performance.now();n=!1,c.delta=o?1e3/60:Math.max(Math.min(l-c.timestamp,Fe),1),c.timestamp=l,c.isProcessing=!0,N.forEach(a),c.isProcessing=!1,n&&t&&(o=!1,e(i))},f=()=>{n=!0,o=!0,c.isProcessing||e(i)};return{schedule:N.reduce((l,h)=>{const y=r[h];return l[h]=(S,b=!1,k=!1)=>(n||f(),y.schedule(S,b,k)),l},{}),cancel:l=>N.forEach(h=>r[h].cancel(l)),state:c,steps:r}}const Ge=s.createContext({});function We(e){const t=s.useRef(null);return t.current===null&&(t.current=e()),t.current}const Oe=e=>e,{schedule:Xe,cancel:Ht,state:Lt}=Ne(typeof requestAnimationFrame<"u"?requestAnimationFrame:Oe,!0);function Ue(){const e=s.useContext(te);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:o}=e,c=s.useId();return s.useEffect(()=>o(c),[]),!t&&n?[!1,()=>n&&n(c)]:[!0]}const K={current:null},oe={current:!1};function Ve(){if(oe.current=!0,!!ne)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>K.current=e.matches;e.addListener(t),t()}else K.current=!1}function re(){const e=s.useRef(!1);return se(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Ke(){const e=re(),[t,n]=s.useState(0),o=s.useCallback(()=>{e.current&&n(t+1)},[t]);return[s.useCallback(()=>Xe.postRender(o),[o]),t]}class De extends s.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ae({children:e,isPresent:t}){const n=s.useId(),o=s.useRef(null),c=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:r,height:a,top:i,left:f}=c.current;if(t||!o.current||!r||!a)return;o.current.dataset.motionPopId=n;const m=document.createElement("style");return document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${a}px !important;
            top: ${i}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[t]),s.createElement(De,{isPresent:t,childRef:o,sizeRef:c},s.cloneElement(e,{ref:o}))}const O=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:c,presenceAffectsLayout:r,mode:a})=>{const i=We(qe),f=s.useId(),m=s.useMemo(()=>({id:f,initial:t,isPresent:n,custom:c,onExitComplete:u=>{i.set(u,!0);for(const l of i.values())if(!l)return;o&&o()},register:u=>(i.set(u,!1),()=>i.delete(u))}),r?void 0:[n]);return s.useMemo(()=>{i.forEach((u,l)=>i.set(l,!1))},[n]),s.useEffect(()=>{!n&&!i.size&&o&&o()},[n]),a==="popLayout"&&(e=s.createElement(Ae,{isPresent:n},e)),s.createElement(te.Provider,{value:m},e)};function qe(){return new Map}function Qe(e){return s.useEffect(()=>()=>e(),[])}const H=e=>e.key||"";function Je(e,t){e.forEach(n=>{const o=H(n);t.set(o,n)})}function Ye(e){const t=[];return s.Children.forEach(e,n=>{s.isValidElement(n)&&t.push(n)}),t}const Ze=({children:e,custom:t,initial:n=!0,onExitComplete:o,exitBeforeEnter:c,presenceAffectsLayout:r=!0,mode:a="sync"})=>{const i=s.useContext(Ge).forceRender||Ke()[0],f=re(),m=Ye(e);let u=m;const l=s.useRef(new Map).current,h=s.useRef(u),y=s.useRef(new Map).current,S=s.useRef(!0);if(se(()=>{S.current=!1,Je(m,y),h.current=u}),Qe(()=>{S.current=!0,y.clear(),l.clear()}),S.current)return s.createElement(s.Fragment,null,u.map(x=>s.createElement(O,{key:H(x),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:r,mode:a},x)));u=[...u];const b=h.current.map(H),k=m.map(H),w=b.length;for(let x=0;x<w;x++){const g=b[x];k.indexOf(g)===-1&&!l.has(g)&&l.set(g,void 0)}return a==="wait"&&l.size&&(u=[]),l.forEach((x,g)=>{if(k.indexOf(g)!==-1)return;const z=y.get(g);if(!z)return;const R=b.indexOf(g);let v=x;if(!v){const P=()=>{l.delete(g);const j=Array.from(y.keys()).filter(C=>!k.includes(C));if(j.forEach(C=>y.delete(C)),h.current=m.filter(C=>{const E=H(C);return E===g||j.includes(E)}),!l.size){if(f.current===!1)return;i(),o&&o()}};v=s.createElement(O,{key:H(z),isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:r,mode:a},z),l.set(g,v)}u.splice(R,0,v)}),u=u.map(x=>{const g=x.key;return l.has(g)?x:s.createElement(O,{key:H(x),isPresent:!0,presenceAffectsLayout:r,mode:a},x)}),s.createElement(s.Fragment,null,l.size?u:u.map(x=>s.cloneElement(x)))};function ae(){!oe.current&&Ve();const[e]=s.useState(K.current);return e}const et="_loader_1o1zt_2",tt="_text_1o1zt_17",nt="_span_1o1zt_43",X={loader:et,text:tt,span:nt},st=s.forwardRef(({className:e,style:t,width:n=32,height:o=4,text:c="Loading...",center:r,...a},i)=>ae()?p.jsx(Ee,{className:_(X.text,e),weight:"medium",...a,children:c}):p.jsx("div",{ref:i,className:_(X.loader,e),"data-center":r,style:W({width:n,height:o},t),...a,children:p.jsx("div",{className:X.span})})),ot=({children:e,in:t,unmount:n,initial:o=!0,...c})=>{const r=s.useRef(),a=s.useRef();return s.useEffect(()=>{clearTimeout(t?a.current:r.current)},[t]),p.jsx(Ze,{children:(t||!n)&&p.jsx(rt,{enterTimeout:r,exitTimeout:a,in:t,initial:o,...c,children:e})})},rt=({children:e,timeout:t=0,enterTimeout:n,exitTimeout:o,onEnter:c,onEntered:r,onExit:a,onExited:i,initial:f,nodeRef:m,in:u})=>{const[l,h]=s.useState(f?"exited":"entered"),[y,S]=Ue(),[b,k]=s.useState(!f),w=typeof t=="object",x=s.useRef(null),g=m||x,z=b&&u?y:!1;return s.useEffect(()=>{var v;if(b||!u)return;const R=w?t.enter:t;clearTimeout(n.current),clearTimeout(o.current),k(!0),h("entering"),c==null||c(),(v=g.current)==null||v.offsetHeight,n.current=setTimeout(()=>{h("entered"),r==null||r()},R)},[c,r,t,l,u]),s.useEffect(()=>{var v;if(y&&u)return;const R=w?t.exit:t;clearTimeout(n.current),clearTimeout(o.current),h("exiting"),a==null||a(),(v=g.current)==null||v.offsetHeight,o.current=setTimeout(()=>{h("exited"),S==null||S(),i==null||i()},R)},[y,a,S,t,i,u]),e({visible:z,status:l,nodeRef:g})},at="_button_1l2e3_2",ct="_text_1l2e3_132",it="_loader_1l2e3_145",lt="_icon_1l2e3_158",T={button:at,text:ct,loader:it,icon:lt};function ce(e){return e==null?void 0:e.includes("://")}const ut=s.forwardRef(({href:e,...t},n)=>ce(e)||!e?p.jsx(J,{href:e,ref:n,...t}):p.jsx(J,{unstable_viewTransition:!0,as:fe,prefetch:"intent",to:e,ref:n,...t})),J=s.forwardRef(({className:e,as:t,secondary:n,loading:o,loadingText:c="loading",icon:r,iconEnd:a,iconHoverShift:i,iconOnly:f,children:m,rel:u,target:l,href:h,disabled:y,...S},b)=>{const k=ce(h),x=t||(h?"a":"button");return p.jsxs(x,{className:_(T.button,e),"data-loading":o,"data-icon-only":f,"data-secondary":n,"data-icon":r,href:h,rel:u||k?"noopener noreferrer":void 0,target:l||k?"_blank":void 0,disabled:y,ref:b,...S,children:[!!r&&p.jsx(V,{className:T.icon,"data-start":!f,"data-shift":i,icon:r}),!!m&&p.jsx("span",{className:T.text,children:m}),!!a&&p.jsx(V,{className:T.icon,"data-end":!f,"data-shift":i,icon:a}),p.jsx(ot,{unmount:!0,in:o,children:({visible:g,nodeRef:z})=>p.jsx(st,{ref:z,className:T.loader,size:32,text:c,"data-visible":g})})]})}),ft="_heading_e2qtd_2",dt={heading:ft},$t=({children:e,level:t=1,as:n,align:o="auto",weight:c="medium",className:r,...a})=>{const i=Math.min(Math.max(t,0),5),f=n||`h${Math.max(i,1)}`;return p.jsx(s.Fragment,{children:p.jsx(f,{className:_(dt.heading,r),"data-align":o,"data-weight":c,"data-level":i,...a,children:e})})};function mt(){const[e,t]=s.useState(!1);return s.useEffect(()=>{t(!0)},[]),e}function pt(e,t,n={},o=!0){const[c,r]=s.useState(!1),[a,i]=s.useState(!1);return s.useEffect(()=>{if(!(e!=null&&e.current))return;const f=new IntersectionObserver(([m])=>{const{isIntersecting:u,target:l}=m;r(u),u&&t&&(f.unobserve(l),i(!0))},n);return!a&&o&&f.observe(e.current),()=>f.disconnect()},[e,t,n,a,o]),c}async function ht({src:e,srcSet:t,sizes:n}){return new Promise((o,c)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");let r=new Image;e&&(r.src=e),t&&(r.srcset=t),n&&(r.sizes=n);const a=()=>{r.removeEventListener("load",a);const i=r.currentSrc;r=null,o(i)};r.addEventListener("load",a)}catch(r){c(`Error loading ${t}: ${r}`)}})}async function xt(e=1,t=1){return new Promise(n=>{const o=document.createElement("canvas"),c=o.getContext("2d");o.width=e,o.height=t,c.fillStyle="rgba(0, 0, 0, 0)",c.fillRect(0,0,e,t),o.toBlob(async r=>{if(!r)throw new Error("Video thumbnail failed to load");const a=URL.createObjectURL(r);o.remove(),n(a)})})}async function gt({srcSet:e,sizes:t}){const n=await Promise.all(e.split(", ").map(async a=>{const[i,f]=a.split(" "),m=Number(f.replace("w","")),u=await xt(m);return{src:i,image:u,width:f}})),o=n.map(({image:a,width:i})=>`${a} ${i}`).join(", "),c=await ht({srcSet:o,sizes:t});return n.find(a=>a.image===c).src}const yt="_image_4szht_2",St="_elementWrapper_4szht_49",bt="_placeholder_4szht_71",vt="_element_4szht_49",kt="_button_4szht_104",L={image:yt,elementWrapper:St,placeholder:bt,element:vt,button:kt},jt=({className:e,style:t,reveal:n,delay:o=0,raised:c,src:r,srcSet:a,placeholder:i,...f})=>{const[m,u]=s.useState(!1),{theme:l}=ee(),h=s.useRef(),y=r||a.split(" ")[0],S=pt(h,!ie(y)),b=s.useCallback(()=>{u(!0)},[]);return p.jsx("div",{className:_(L.image,e),"data-visible":S||m,"data-reveal":n,"data-raised":c,"data-theme":l,style:W({delay:U(o)},t),ref:h,children:p.jsx(wt,{delay:o,onLoad:b,loaded:m,inViewport:S,reveal:n,src:y,srcSet:a,placeholder:i,...f})})},wt=({onLoad:e,loaded:t,inViewport:n,srcSet:o,placeholder:c,delay:r,src:a,alt:i,play:f=!0,restartOnPause:m,reveal:u,sizes:l,width:h,height:y,noPauseButton:S,cover:b,...k})=>{const w=ae(),[x,g]=s.useState(!0),[z,R]=s.useState(!w),[v,P]=s.useState(),[j,C]=s.useState(!1),E=s.useRef(),M=s.useRef(),I=ie(a),D=n,le=mt();s.useEffect(()=>{I&&o?(async()=>{const F=await gt({srcSet:o,sizes:l});P(F)})():I&&P(a)},[I,l,a,o]),s.useEffect(()=>{if(!M.current||!v)return;const B=()=>{R(!0),M.current.play()},F=()=>{R(!1),M.current.pause()};f||(F(),m&&(M.current.currentTime=0)),!j&&(n?n&&!w&&f&&B():F())},[n,f,w,m,j,v]);const ue=B=>{B.preventDefault(),C(!0),M.current.paused?(R(!0),M.current.play()):(R(!1),M.current.pause())};return p.jsxs("div",{className:L.elementWrapper,"data-reveal":u,"data-visible":n||t,style:W({delay:U(r+1e3)}),children:[I&&le&&p.jsxs(s.Fragment,{children:[p.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:L.element,"data-loaded":t,"data-cover":b,autoPlay:!w,onLoadStart:e,src:v,"aria-label":i,ref:M,...k}),!S&&p.jsxs(ut,{className:L.button,onClick:ue,children:[p.jsx(V,{icon:z?"pause":"play"}),z?"Pause":"Play"]})]}),!I&&p.jsx("img",{className:L.element,"data-loaded":t,"data-cover":b,onLoad:e,decoding:"async",src:D?a:void 0,srcSet:D?o:void 0,width:h,height:y,alt:i,sizes:l,...k}),x&&p.jsx("img",{"aria-hidden":!0,className:L.placeholder,"data-loaded":t,"data-cover":b,style:W({delay:U(r)}),ref:E,src:c,width:h,height:y,onTransitionEnd:()=>g(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function ie(e){return typeof e=="string"&&e.includes(".mp4")}export{ut as B,ge as G,$t as H,jt as I,st as L,ot as T,Ee as a,pt as b,ee as c,We as d,se as e,Lt as f,V as g,he as h,Ct as i,_t as j,Ht as k,Xe as l,ne as m,Oe as n,oe as o,Ve as p,K as q,gt as r,Y as t,ae as u};
