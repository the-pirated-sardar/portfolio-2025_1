import{r as t,j as a}from"./jsx-runtime-BMrMXMSG.js";import{u as te,b as ne,r as re}from"./image-cK7Yol7S.js";import{W as ae,n as oe,a as se,s as ce,u as ie,h as $,p as ue,l as le,m as me}from"./three-CjGFJPVA.js";import{a as de}from"./style-CdyozSHa.js";import{c as ve,a as pe,t as fe}from"./three-f4FSUuQw.js";import{a as ge}from"./animate-Bt8Sv2Bs.js";import"./components-Dta19ZtI.js";import"./index-C7rQJm6-.js";const xe="_carousel_156nm_2",Ie="_content_156nm_6",he="_imageWrapper_156nm_12",_e="_canvasWrapper_156nm_24",we="_canvas_156nm_24",be="_placeholder_156nm_37",ye="_button_156nm_52",Fe="_nav_156nm_108",Se="_navButton_156nm_115",m={carousel:xe,content:Ie,imageWrapper:he,canvasWrapper:_e,canvas:we,placeholder:be,button:ye,nav:Fe,navButton:Se},Ce=`varying vec2 vUv;
uniform sampler2D currentImage;
uniform sampler2D nextImage;
uniform float dispFactor;
uniform float direction;
uniform bool reduceMotion;

void main() {
  if (reduceMotion) {
    // Simple crossfade
    vec4 _currentImage = texture2D(currentImage, vUv);
    vec4 _nextImage = texture2D(nextImage, vUv);
    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
  } else {
    // Liquid distortion effect
    vec2 uv = vUv;
    vec4 _currentImage;
    vec4 _nextImage;
    float intensity = 0.6;

    vec4 orig1 = texture2D(currentImage, uv);
    vec4 orig2 = texture2D(nextImage, uv);

    vec2 distortedPosition = vec2(
      uv.x + direction * (dispFactor * (orig2.r * intensity)),
      uv.y + direction * (dispFactor * (orig2 * intensity))
    );

    vec2 distortedPosition2 = vec2(
      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),
      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))
    );

    _currentImage = texture2D(currentImage, distortedPosition);
    _nextImage = texture2D(nextImage, distortedPosition2);

    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
  }
}
`,Re=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function X(i,u,d,_){if(u!==null)return u;const w=d.length,b=(i-1+w)%w,C=(i+1)%w;return _>0?C:b}const Be=({width:i,height:u,images:d,placeholder:_,...w})=>{const[b,C]=t.useState(!1),[o,G]=t.useState(0),[y,V]=t.useState(!1),[K,O]=t.useState(!0),[c,J]=t.useState(),[R,H]=t.useState(),P=t.useRef(),E=t.useRef(),D=t.useRef(),f=t.useRef(),g=t.useRef(),F=t.useRef(),s=t.useRef(),x=t.useRef(!1),S=t.useRef(),M=t.useRef(),A=t.useRef(),N=te(),W=ne(P,!0),B=t.useRef(),T=t.useRef(),Q=`Slide ${o+1} of ${d.length}. ${d[o].alt}`;t.useEffect(()=>(b&&(document.body.style.cursor="grabbing"),()=>{document.body.style.cursor=""}),[b]),t.useEffect(()=>{const e=[i/-2,i/2,u/2,u/-2,1,1e3];return s.current=new ae({canvas:P.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),F.current=new oe(...e),g.current=new se,s.current.setPixelRatio(2),s.current.setClearColor(1118481,1),s.current.setSize(i,u),s.current.domElement.style.width="100%",s.current.domElement.style.height="auto",g.current.background=new ce(1118481),F.current.position.z=1,()=>{x.current=!1,ve(g.current),pe(s.current)}},[u,i]),t.useEffect(()=>{let e=!0;return W&&!y&&(async()=>{const r=s.current.capabilities.getMaxAnisotropy(),v=d.map(async p=>{const k=p.srcSet?await re(p):p.src,h=await fe.loadAsync(k);return await s.current.initTexture(h),h.colorSpace=ie,h.minFilter=$,h.magFilter=$,h.anisotropy=r,h.generateMipmaps=!1,h}),I=await Promise.all(v);e&&(f.current=new ue({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:I[0]},nextImage:{type:"t",value:I[1]},reduceMotion:{type:"b",value:N}},vertexShader:Re,fragmentShader:Ce,transparent:!1,opacity:1}),D.current=new le(i,u,1),E.current=new me(D.current,f.current),E.current.position.set(0,0,0),g.current.add(E.current),V(!0),J(I),requestAnimationFrame(()=>{s.current.render(g.current,F.current)}))})(),()=>{e=!1}},[u,d,W,y,N,i]);const U=t.useCallback(({index:e,direction:n=1})=>{if(!c)return;G(e);const{uniforms:r}=f.current;r.nextImage.value=c[e],r.direction.value=n;const v=()=>{r.currentImage.value=c[e],r.dispFactor.value=0,x.current=!1};r.dispFactor.value!==1&&(x.current=!0,ge(r.dispFactor.value,1,{type:"spring",stiffness:100,damping:20,restSpeed:.001,restDelta:.001,onUpdate:I=>{r.dispFactor.value=I},onComplete:v}))},[c]),l=t.useCallback(({direction:e,index:n=null,...r})=>{if(!y)return;if(x.current){cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>l({direction:e,index:n,...r}));return}const v=X(o,n,c,e);U({index:v,direction:e,...r})},[U,o,y,c]),Y=t.useCallback(e=>{if(e===o)return;const n=e>o?1:-1;l({direction:n,index:e})},[o,l]);t.useEffect(()=>{const e=()=>{const n=P.current.getBoundingClientRect();H(n)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),t.useEffect(()=>{let e;const n=()=>{e=requestAnimationFrame(n),x.current&&s.current.render(g.current,F.current)};return e=requestAnimationFrame(n),()=>{cancelAnimationFrame(e)}},[]),t.useEffect(()=>{if(_){const e=()=>{O(!1)},n=B.current;return n.addEventListener("transitionend",e),()=>{n&&n.removeEventListener("transitionend",e)}}},[_]);const z=t.useCallback(e=>{if(x.current||!f.current||!c)return;M.current=e;const n=Math.abs(e),r=R.width;S.current=e>0?-1:1;const v=1-(n-r)/r*-1,I=X(o,null,d,S.current),p=f.current.uniforms,k=Math.min(Math.max(v,0),1);p.currentImage.value=c[o],p.nextImage.value=c[I],p.direction.value=S.current,p.dispFactor.value=k,requestAnimationFrame(()=>{s.current.render(g.current,F.current)})},[R,o,d,c]),q=t.useCallback(()=>{if(!f.current)return;const e=f.current.uniforms,n=(1-e.dispFactor.value)*1e3,r=Math.abs(M.current),v=R.width*.2;M.current=0,!x.current&&(r===0||!r||(r>v?l({duration:n,direction:S.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,l({direction:S.current*-1,index:o}))))},[R,o,l]),j=t.useCallback(e=>{z(e.clientX-T.current)},[z]),L=t.useCallback(()=>{C(!1),q(),document.removeEventListener("pointerup",L),document.removeEventListener("pointermove",j)},[j,q]),Z=t.useCallback(e=>{T.current=e.clientX,C(!0),document.addEventListener("pointermove",j),document.addEventListener("pointerup",L)},[j,L]),ee=e=>{switch(e.key){case"ArrowRight":l({direction:1});break;case"ArrowLeft":l({direction:-1});break}};return a.jsxs("div",{className:m.carousel,onKeyDown:ee,...w,children:[a.jsxs("div",{className:m.content,children:[a.jsxs("div",{className:m.imageWrapper,"data-dragging":b,onPointerDown:Z,style:de({aspectRatio:`${i} / ${u}`}),children:[a.jsx("div",{"aria-atomic":!0,className:m.canvasWrapper,"aria-live":"polite","aria-label":Q,role:"img",children:a.jsx("canvas",{"aria-hidden":!0,className:m.canvas,ref:P})}),K&&_&&a.jsx("img",{"aria-hidden":!0,className:m.placeholder,"data-loaded":y&&!!c,src:_,ref:B,alt:"",role:"presentation"})]}),a.jsx("button",{className:m.button,"data-prev":!0,"aria-label":"Previous slide",onClick:()=>l({direction:-1}),children:a.jsx(Pe,{})}),a.jsx("button",{className:m.button,"data-next":!0,"aria-label":"Next slide",onClick:()=>l({direction:1}),children:a.jsx(je,{})})]}),a.jsx("div",{className:m.nav,children:d.map((e,n)=>a.jsx("button",{className:m.navButton,onClick:()=>Y(n),"aria-label":`Jump to slide ${n+1}`,"aria-pressed":n===o},e.alt))})]})};function Pe(){return a.jsx("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:a.jsx("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"})})}function je(){return a.jsx("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:a.jsx("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"})})}export{Be as Carousel};
