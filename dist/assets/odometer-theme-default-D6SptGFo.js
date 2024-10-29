import{r as T,j as d,c as gt,g as bt}from"./index-D6JJyj7V.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=g=>g.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ft=(...g)=>g.filter((f,b,y)=>!!f&&y.indexOf(f)===b).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=T.forwardRef(({color:g="currentColor",size:f=24,strokeWidth:b=2,absoluteStrokeWidth:y,className:x="",children:v,iconNode:M,...E},N)=>T.createElement("svg",{ref:N,...vt,width:f,height:f,stroke:g,strokeWidth:y?Number(b)*24/Number(f):b,className:ft("lucide",x),...E},[...M.map(([c,_])=>T.createElement(c,_)),...Array.isArray(v)?v:[v]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(g,f)=>{const b=T.forwardRef(({className:y,...x},v)=>T.createElement(wt,{ref:v,iconNode:f,className:ft(`lucide-${xt(g)}`,y),...x}));return b.displayName=`${g}`,b};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=tt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=tt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=tt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]),Tt="/assets/testimonial-one-bg-Cy0iYn14.jpg",Et="/assets/testimonial-1-2-BsLYpeBW.jpg",St=()=>{const[g,f]=T.useState(0),[b,y]=T.useState(!0),[x,v]=T.useState(!1),M=[{text:"I recently had a fantastic experience with Bulavo for my home appliance repairs. My dishwasher stopped working, and I was worried about how long it would take to get it fixed. I called Bulavo, and their customer service was impressive right from the start.",name:"Krutik Gabani",role:"Satisfied Customer",image:"/api/placeholder/80/80"},{text:"They scheduled a technician to come out the next day, which was a relief. The technician arrived on time, was professional, and quickly diagnosed the issue. He explained everything clearly and offered me a couple of options for repair.",name:"Mahek Patel",role:"Happy Client",image:"/api/placeholder/80/80"},{text:"What I appreciated most was their transparency about costs and the quick turnaround time. My dishwasher is now running perfectly, and I couldn't be happier! I highly recommend Bulavo for anyone needing reliable appliance service.",name:"Vinit",role:"Regular Customer",image:"/api/placeholder/80/80"},{text:"I had a wonderful experience with Bulavo when my washing machine broke down unexpectedly. I reached out to their customer service, and they were incredibly helpful and attentive. They scheduled a technician to come by within 24 hours.",name:"Sujal",role:"Verified Customer",image:""}],E=T.useCallback(()=>{x||(v(!0),f(c=>c===M.length-1?0:c+1),setTimeout(()=>v(!1),500))},[x,M.length]),N=()=>{x||(v(!0),f(c=>c===0?M.length-1:c-1),setTimeout(()=>v(!1),500))};return T.useEffect(()=>{let c;return b&&(c=setInterval(E,4e3)),()=>clearInterval(c)},[b,E]),d.jsxs("section",{className:"testimonial-section",style:{backgroundImage:`url(${Tt})`},children:[d.jsxs("div",{className:"background-decoration",children:[d.jsx("div",{className:"blob blob1"}),d.jsx("div",{className:"blob blob2"}),d.jsx("div",{className:"blob blob3"})]}),d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{style:{color:"white"},children:"What Our Clients Say"}),d.jsx("div",{className:"underline"})]}),d.jsx("div",{className:"testimonial-container",onMouseEnter:()=>y(!1),onMouseLeave:()=>y(!0),children:d.jsxs("div",{className:"testimonial-card",children:[d.jsx("div",{className:"quote-icon",children:d.jsx(Mt,{})}),d.jsx("div",{className:"testimonial-content",children:M.map((c,_)=>d.jsxs("div",{className:`testimonial-slide ${g===_?"active":""}`,children:[d.jsx("div",{className:"testimonial-text",children:d.jsxs("p",{children:['"',c.text,'"']})}),d.jsxs("div",{className:"testimonial-author",children:[d.jsx("div",{className:"author-image-container",children:d.jsx("img",{src:Et,alt:c.name,className:"author-image"})}),d.jsxs("div",{className:"author-info",children:[d.jsx("h4",{children:c.name}),d.jsx("p",{children:c.role})]})]})]},_))}),d.jsxs("div",{className:"navigation-controls",children:[d.jsx("button",{onClick:N,className:"nav-button",disabled:x,"aria-label":"navigation",children:d.jsx(yt,{})}),d.jsx("div",{className:"slide-dots",children:M.map((c,_)=>d.jsx("button",{onClick:()=>!x&&f(_),className:`dot ${g===_?"active":""}`,"aria-label":"slide"},_))}),d.jsx("button",{onClick:E,className:"nav-button",disabled:x,"aria-label":"nextslide",children:d.jsx(_t,{})})]})]})})]}),d.jsx("style",{jsx:"true",children:`
        .testimonial-section {
          position: relative;
          padding: 80px 0;
          background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 50%, #f0f7ff 100%);
          overflow: hidden;
          
        }

        .background-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.7;
          mix-blend-mode: multiply;
          animation: blob 7s infinite;
        }

        .blob1 {
          top: 0;
          left: 0;
          background: #e6efff;
          animation-delay: 0s;
        }

        .blob2 {
          top: 0;
          right: 0;
          background: #f5e6ff;
          animation-delay: 2s;
        }

        .blob3 {
          bottom: 0;
          left: 50%;
          background: #ffe6f0;
          animation-delay: 4s;
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 36px;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .underline {
          width: 80px;
          height: 4px;
          background: #3b82f6;
          margin: 0 auto;
          border-radius: 2px;
        }

        .testimonial-container {
          max-width: 800px;
          margin: 0 auto;
          
        }

        .testimonial-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .quote-icon {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(50%, -50%);
          background: #3b82f6;
          color: white;
          padding: 16px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .testimonial-content {
          position: relative;
          height: 320px;
        }

        .testimonial-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          transform: translateX(100%) scale(0.95);
          transition: all 0.5s ease-out;
        }

        .testimonial-slide.active {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .testimonial-text {
          margin-bottom: 32px;
        }

        .testimonial-text p {
          font-size: 18px;
          line-height: 1.6;
          color: #4a4a4a;
          
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .author-image-container {
          position: relative;
        }

        .author-image {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-image-container::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 4px solid rgba(59, 130, 246, 0.2);
        }

        .author-info h4 {
          font-size: 20px;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .author-info p {
          color: #3b82f6;
          margin: 0;
        }

        .navigation-controls {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
          display: flex;
          align-items: center;
          gap: 16px;
          background: white;
          padding: 8px 20px;
          border-radius: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .nav-button {
          background: none;
          border: none;
          color: #3b82f6;
          padding: 8px;
          cursor: pointer;
          border-radius: 50%;
          transition: background-color 0.3s;
        }

        .nav-button:hover {
          background: #f0f7ff;
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .slide-dots {
          display: flex;
          gap: 12px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 6px;
          background: #e5e5e5;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          width: 24px;
          background: #3b82f6;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 30px;
          }

          .testimonial-content {
            height: 400px;
          }

          .section-header h2 {
            font-size: 28px;
          }

          .testimonial-text p {
            font-size: 16px;
          }
        }
      `})]})};var Z={exports:{}};(function(g,f){(function(){var b,y,x,v,M,E,N,c,_,et,it,H,w,nt,rt,q,ot,k,B,at,L,P,W,$,R,U,z,st,Q,X,lt,dt,ut=[].slice;ot='<span class="odometer-value"></span>',nt='<span class="odometer-ribbon"><span class="odometer-ribbon-inner">'+ot+"</span></span>",v='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">'+nt+"</span></span>",N='<span class="odometer-formatting-mark"></span>',x="(,ddd).dd",c=/^\(?([^)]*)\)?(?:(.)(d+))?$/,_=30,E=2e3,b=20,et=2,M=.5,it=1e3/_,y=1e3/b,rt="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",R=document.createElement("div").style,q=R.transition!=null||R.webkitTransition!=null||R.mozTransition!=null||R.oTransition!=null,W=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,H=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,B=function(i){var t;return t=document.createElement("div"),t.innerHTML=i,t.children[0]},P=function(i,t){return i.className=i.className.replace(new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi")," ")},k=function(i,t){return P(i,t),i.className+=" "+t},U=function(i,t){var e;if(document.createEvent!=null)return e=document.createEvent("HTMLEvents"),e.initEvent(t,!0,!0),i.dispatchEvent(e)},L=function(){var i,t;return(i=(t=window.performance)!=null&&typeof t.now=="function"?t.now():void 0)!=null?i:+new Date},$=function(i,t){return t==null&&(t=0),t?(i*=Math.pow(10,t),i+=.5,i=Math.floor(i),i/=Math.pow(10,t)):Math.round(i)},z=function(i){return i<0?Math.ceil(i):Math.floor(i)},at=function(i){return i-$(i)},Q=!1,(st=function(){var i,t,e,n,o;if(!Q&&window.jQuery!=null){for(Q=!0,n=["html","text"],o=[],t=0,e=n.length;t<e;t++)i=n[t],o.push(function(r){var a;return a=window.jQuery.fn[r],window.jQuery.fn[r]=function(s){var l;return s==null||((l=this[0])!=null?l.odometer:void 0)==null?a.apply(this,arguments):this[0].odometer.update(s)}}(i));return o}})(),setTimeout(st,0),w=function(){function i(t){var e,n,o,r,a,s,l,p,m,u=this;if(this.options=t,this.el=this.options.el,this.el.odometer!=null)return this.el.odometer;this.el.odometer=this,l=i.options;for(e in l)o=l[e],this.options[e]==null&&(this.options[e]=o);(r=this.options).duration==null&&(r.duration=E),this.MAX_VALUES=this.options.duration/it/et|0,this.resetFormat(),this.value=this.cleanValue((p=this.options.value)!=null?p:""),this.renderInside(),this.render();try{for(m=["innerHTML","innerText","textContent"],a=0,s=m.length;a<s;a++)n=m[a],this.el[n]!=null&&function(h){return Object.defineProperty(u.el,h,{get:function(){var j;return h==="innerHTML"?u.inside.outerHTML:(j=u.inside.innerText)!=null?j:u.inside.textContent},set:function(j){return u.update(j)}})}(n)}catch{this.watchForMutations()}}return i.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},i.prototype.watchForMutations=function(){var t=this;if(H!=null)try{return this.observer==null&&(this.observer=new H(function(e){var n;return n=t.el.innerText,t.renderInside(),t.render(t.value),t.update(n)})),this.watchMutations=!0,this.startWatchingMutations()}catch{}},i.prototype.startWatchingMutations=function(){if(this.watchMutations)return this.observer.observe(this.el,{childList:!0})},i.prototype.stopWatchingMutations=function(){var t;return(t=this.observer)!=null?t.disconnect():void 0},i.prototype.cleanValue=function(t){var e;return typeof t=="string"&&(t=t.replace((e=this.format.radix)!=null?e:".","<radix>"),t=t.replace(/[.,]/g,""),t=t.replace("<radix>","."),t=parseFloat(t,10)||0),$(t,this.format.precision)},i.prototype.bindTransitionEnd=function(){var t,e,n,o,r,a,s=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,e=!1,r=rt.split(" "),a=[],n=0,o=r.length;n<o;n++)t=r[n],a.push(this.el.addEventListener(t,function(){return e||(e=!0,setTimeout(function(){return s.render(),e=!1,U(s.el,"odometerdone")},0)),!0},!1));return a}},i.prototype.resetFormat=function(){var t,e,n,o,r,a,s,l;if(t=(s=this.options.format)!=null?s:x,t||(t="d"),n=c.exec(t),!n)throw new Error("Odometer: Unparsable digit format");return l=n.slice(1,4),a=l[0],r=l[1],e=l[2],o=(e!=null?e.length:void 0)||0,this.format={repeating:a,radix:r,precision:o}},i.prototype.render=function(t){var e,n,o,r,a,s,l;for(t==null&&(t=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",a=this.options.theme,e=this.el.className.split(" "),r=[],s=0,l=e.length;s<l;s++)if(n=e[s],!!n.length){if(o=/^odometer-theme-(.+)$/.exec(n)){a=o[1];continue}/^odometer(-|$)/.test(n)||r.push(n)}return r.push("odometer"),q||r.push("odometer-no-transitions"),a?r.push("odometer-theme-"+a):r.push("odometer-auto-theme"),this.el.className=r.join(" "),this.ribbons={},this.formatDigits(t),this.startWatchingMutations()},i.prototype.formatDigits=function(t){var e,n,o,r,a,s,l,p,m,u;if(this.digits=[],this.options.formatFunction)for(o=this.options.formatFunction(t),m=o.split("").reverse(),a=0,l=m.length;a<l;a++)n=m[a],n.match(/0-9/)?(e=this.renderDigit(),e.querySelector(".odometer-value").innerHTML=n,this.digits.push(e),this.insertDigit(e)):this.addSpacer(n);else for(r=!this.format.precision||!at(t)||!1,u=t.toString().split("").reverse(),s=0,p=u.length;s<p;s++)e=u[s],e==="."&&(r=!0),this.addDigit(e,r)},i.prototype.update=function(t){var e,n=this;if(t=this.cleanValue(t),!!(e=t-this.value))return P(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),e>0?k(this.el,"odometer-animating-up"):k(this.el,"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout(function(){return n.el.offsetHeight,k(n.el,"odometer-animating")},0),this.value=t},i.prototype.renderDigit=function(){return B(v)},i.prototype.insertDigit=function(t,e){return e!=null?this.inside.insertBefore(t,e):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)},i.prototype.addSpacer=function(t,e,n){var o;return o=B(N),o.innerHTML=t,n&&k(o,n),this.insertDigit(o,e)},i.prototype.addDigit=function(t,e){var n,o,r,a;if(e==null&&(e=!0),t==="-")return this.addSpacer(t,null,"odometer-negation-mark");if(t===".")return this.addSpacer((a=this.format.radix)!=null?a:".",null,"odometer-radix-mark");if(e)for(r=!1;;){if(!this.format.repeating.length){if(r)throw new Error("Bad odometer format without digits");this.resetFormat(),r=!0}if(n=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),n==="d")break;this.addSpacer(n)}return o=this.renderDigit(),o.querySelector(".odometer-value").innerHTML=t,this.digits.push(o),this.insertDigit(o)},i.prototype.animate=function(t){return!q||this.options.animation==="count"?this.animateCount(t):this.animateSlide(t)},i.prototype.animateCount=function(t){var e,n,o,r,a,s=this;if(n=+t-this.value)return r=o=L(),e=this.value,(a=function(){var l,p,m;if(L()-r>s.options.duration){s.value=t,s.render(),U(s.el,"odometerdone");return}return l=L()-o,l>y&&(o=L(),m=l/s.options.duration,p=n*m,e+=p,s.render(Math.round(e))),W!=null?W(a):setTimeout(a,y)})()},i.prototype.getDigitCount=function(){var t,e,n,o,r,a;for(o=1<=arguments.length?ut.call(arguments,0):[],t=r=0,a=o.length;r<a;t=++r)n=o[t],o[t]=Math.abs(n);return e=Math.max.apply(Math,o),Math.ceil(Math.log(e+1)/Math.log(10))},i.prototype.getFractionalDigitCount=function(){var t,e,n,o,r,a,s;for(r=1<=arguments.length?ut.call(arguments,0):[],e=/^\-?\d*\.(\d*?)0*$/,t=a=0,s=r.length;a<s;t=++a)o=r[t],r[t]=o.toString(),n=e.exec(r[t]),n==null?r[t]=0:r[t]=n[1].length;return Math.max.apply(Math,r)},i.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},i.prototype.animateSlide=function(t){var e,n,o,r,a,s,l,p,m,u,h,j,I,F,A,S,C,ht,O,G,V,ct,pt,mt,K,Y,J;if(S=this.value,p=this.getFractionalDigitCount(S,t),p&&(t=t*Math.pow(10,p),S=S*Math.pow(10,p)),!!(o=t-S)){for(this.bindTransitionEnd(),r=this.getDigitCount(S,t),a=[],e=0,h=O=0;0<=r?O<r:O>r;h=0<=r?++O:--O){if(C=z(S/Math.pow(10,r-h-1)),l=z(t/Math.pow(10,r-h-1)),s=l-C,Math.abs(s)>this.MAX_VALUES){for(u=[],j=s/(this.MAX_VALUES+this.MAX_VALUES*e*M),n=C;s>0&&n<l||s<0&&n>l;)u.push(Math.round(n)),n+=j;u[u.length-1]!==l&&u.push(l),e++}else u=(function(){J=[];for(var D=C;C<=l?D<=l:D>=l;C<=l?D++:D--)J.push(D);return J}).apply(this);for(h=G=0,ct=u.length;G<ct;h=++G)m=u[h],u[h]=Math.abs(m%10);a.push(u)}for(this.resetDigits(),Y=a.reverse(),h=V=0,pt=Y.length;V<pt;h=++V)for(u=Y[h],this.digits[h]||this.addDigit(" ",h>=p),(ht=this.ribbons)[h]==null&&(ht[h]=this.digits[h].querySelector(".odometer-ribbon-inner")),this.ribbons[h].innerHTML="",o<0&&(u=u.reverse()),I=K=0,mt=u.length;K<mt;I=++K)m=u[I],A=document.createElement("div"),A.className="odometer-value",A.innerHTML=m,this.ribbons[h].appendChild(A),I===u.length-1&&k(A,"odometer-last-value"),I===0&&k(A,"odometer-first-value");if(C<0&&this.addDigit("-"),F=this.inside.querySelector(".odometer-radix-mark"),F!=null&&F.parent.removeChild(F),p)return this.addSpacer(this.format.radix,this.digits[p-1],"odometer-radix-mark")}},i}(),w.options=(lt=window.odometerOptions)!=null?lt:{},setTimeout(function(){var i,t,e,n,o;if(window.odometerOptions){n=window.odometerOptions,o=[];for(i in n)t=n[i],o.push((e=w.options)[i]!=null?(e=w.options)[i]:e[i]=t);return o}},0),w.init=function(){var i,t,e,n,o,r;if(document.querySelectorAll!=null){for(t=document.querySelectorAll(w.options.selector||".odometer"),r=[],e=0,n=t.length;e<n;e++)i=t[e],r.push(i.odometer=new w({el:i,value:(o=i.innerText)!=null?o:i.textContent}));return r}},((dt=document.documentElement)!=null?dt.doScroll:void 0)!=null&&document.createEventObject!=null?(X=document.onreadystatechange,document.onreadystatechange=function(){return document.readyState==="complete"&&w.options.auto!==!1&&w.init(),X!=null?X.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){if(w.options.auto!==!1)return w.init()},!1),f!==null?g.exports=w:window.Odometer=w}).call(gt)})(Z,Z.exports);var kt=Z.exports;const Ct=bt(kt);export{Ct as O,St as T};
