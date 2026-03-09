(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const iu="modulepreload",ou=function(e,t){return new URL(e,t).href},La={},On=function(t,n,s){let i=Promise.resolve();if(n&&n.length>0){let d=function(g){return Promise.all(g.map(u=>Promise.resolve(u).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),r=l?.nonce||l?.getAttribute("nonce");i=d(n.map(g=>{if(g=ou(g,s),g in La)return;La[g]=!0;const u=g.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(s)for(let b=a.length-1;b>=0;b--){const k=a[b];if(k.href===g&&(!u||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${m}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":iu,u||(h.as="script"),h.crossOrigin="",h.href=g,r&&h.setAttribute("nonce",r),document.head.appendChild(h),u)return new Promise((b,k)=>{h.addEventListener("load",b),h.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${g}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};const As=globalThis,$o=As.ShadowRoot&&(As.ShadyCSS===void 0||As.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wo=Symbol(),Ma=new WeakMap;let Tl=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==wo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if($o&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Ma.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ma.set(n,t))}return t}toString(){return this.cssText}};const au=e=>new Tl(typeof e=="string"?e:e+"",void 0,wo),_l=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,i,o)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Tl(n,e,wo)},ru=(e,t)=>{if($o)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),i=As.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,e.appendChild(s)}},Da=$o?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return au(n)})(e):e;const{is:lu,defineProperty:cu,getOwnPropertyDescriptor:du,getOwnPropertyNames:uu,getOwnPropertySymbols:gu,getPrototypeOf:pu}=Object,Ws=globalThis,Pa=Ws.trustedTypes,fu=Pa?Pa.emptyScript:"",hu=Ws.reactiveElementPolyfillSupport,Hn=(e,t)=>e,Ls={toAttribute(e,t){switch(t){case Boolean:e=e?fu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ko=(e,t)=>!lu(e,t),Fa={attribute:!0,type:String,converter:Ls,reflect:!1,useDefault:!1,hasChanged:ko};Symbol.metadata??=Symbol("metadata"),Ws.litPropertyMetadata??=new WeakMap;let gn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Fa){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,n);i!==void 0&&cu(this.prototype,t,i)}}static getPropertyDescriptor(t,n,s){const{get:i,set:o}=du(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get:i,set(a){const l=i?.call(this);o?.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fa}static _$Ei(){if(this.hasOwnProperty(Hn("elementProperties")))return;const t=pu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Hn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Hn("properties"))){const n=this.properties,s=[...uu(n),...gu(n)];for(const i of s)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,i]of n)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const i=this._$Eu(n,s);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)n.unshift(Da(i))}else t!==void 0&&n.push(Da(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ru(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:Ls).toAttribute(n,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ls;this._$Em=i;const l=a.fromAttribute(n,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,n,s,i=!1,o){if(t!==void 0){const a=this.constructor;if(i===!1&&(o=this[t]),s??=a.getPropertyOptions(t),!((s.hasChanged??ko)(o,n)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:i,wrapped:o},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??n??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:a}=o,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};gn.elementStyles=[],gn.shadowRootOptions={mode:"open"},gn[Hn("elementProperties")]=new Map,gn[Hn("finalized")]=new Map,hu?.({ReactiveElement:gn}),(Ws.reactiveElementVersions??=[]).push("2.1.2");const So=globalThis,Na=e=>e,Ms=So.trustedTypes,Oa=Ms?Ms.createPolicy("lit-html",{createHTML:e=>e}):void 0,El="$lit$",mt=`lit$${Math.random().toFixed(9).slice(2)}$`,Rl="?"+mt,mu=`<${Rl}>`,Jt=document,Gn=()=>Jt.createComment(""),Jn=e=>e===null||typeof e!="object"&&typeof e!="function",Ao=Array.isArray,vu=e=>Ao(e)||typeof e?.[Symbol.iterator]=="function",mi=`[ 	
\f\r]`,Tn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ua=/-->/g,Ba=/>/g,Lt=RegExp(`>|${mi}(?:([^\\s"'>=/]+)(${mi}*=${mi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ha=/'/g,za=/"/g,Il=/^(?:script|style|textarea|title)$/i,Ll=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),c=Ll(1),Mt=Ll(2),kt=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ja=new WeakMap,Kt=Jt.createTreeWalker(Jt,129);function Ml(e,t){if(!Ao(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oa!==void 0?Oa.createHTML(t):t}const bu=(e,t)=>{const n=e.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",a=Tn;for(let l=0;l<n;l++){const r=e[l];let d,g,u=-1,m=0;for(;m<r.length&&(a.lastIndex=m,g=a.exec(r),g!==null);)m=a.lastIndex,a===Tn?g[1]==="!--"?a=Ua:g[1]!==void 0?a=Ba:g[2]!==void 0?(Il.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=Lt):g[3]!==void 0&&(a=Lt):a===Lt?g[0]===">"?(a=i??Tn,u=-1):g[1]===void 0?u=-2:(u=a.lastIndex-g[2].length,d=g[1],a=g[3]===void 0?Lt:g[3]==='"'?za:Ha):a===za||a===Ha?a=Lt:a===Ua||a===Ba?a=Tn:(a=Lt,i=void 0);const h=a===Lt&&e[l+1].startsWith("/>")?" ":"";o+=a===Tn?r+mu:u>=0?(s.push(d),r.slice(0,u)+El+r.slice(u)+mt+h):r+mt+(u===-2?l:h)}return[Ml(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class Vn{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let o=0,a=0;const l=t.length-1,r=this.parts,[d,g]=bu(t,n);if(this.el=Vn.createElement(d,s),Kt.currentNode=this.el.content,n===2||n===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Kt.nextNode())!==null&&r.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(El)){const m=g[a++],h=i.getAttribute(u).split(mt),b=/([.?@])?(.*)/.exec(m);r.push({type:1,index:o,name:b[2],strings:h,ctor:b[1]==="."?xu:b[1]==="?"?$u:b[1]==="@"?wu:Js}),i.removeAttribute(u)}else u.startsWith(mt)&&(r.push({type:6,index:o}),i.removeAttribute(u));if(Il.test(i.tagName)){const u=i.textContent.split(mt),m=u.length-1;if(m>0){i.textContent=Ms?Ms.emptyScript:"";for(let h=0;h<m;h++)i.append(u[h],Gn()),Kt.nextNode(),r.push({type:2,index:++o});i.append(u[m],Gn())}}}else if(i.nodeType===8)if(i.data===Rl)r.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(mt,u+1))!==-1;)r.push({type:7,index:o}),u+=mt.length-1}o++}}static createElement(t,n){const s=Jt.createElement("template");return s.innerHTML=t,s}}function vn(e,t,n=e,s){if(t===kt)return t;let i=s!==void 0?n._$Co?.[s]:n._$Cl;const o=Jn(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=i:n._$Cl=i),i!==void 0&&(t=vn(e,i._$AS(e,t.values),i,s)),t}class yu{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,i=(t?.creationScope??Jt).importNode(n,!0);Kt.currentNode=i;let o=Kt.nextNode(),a=0,l=0,r=s[0];for(;r!==void 0;){if(a===r.index){let d;r.type===2?d=new Gs(o,o.nextSibling,this,t):r.type===1?d=new r.ctor(o,r.name,r.strings,this,t):r.type===6&&(d=new ku(o,this,t)),this._$AV.push(d),r=s[++l]}a!==r?.index&&(o=Kt.nextNode(),a++)}return Kt.currentNode=Jt,i}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let Gs=class Dl{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=vn(this,t,n),Jn(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==kt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):vu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&Jn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Jt.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Vn.createElement(Ml(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(n);else{const o=new yu(i,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(t){let n=ja.get(t.strings);return n===void 0&&ja.set(t.strings,n=new Vn(t)),n}k(t){Ao(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const o of t)i===n.length?n.push(s=new Dl(this.O(Gn()),this.O(Gn()),this,this.options)):s=n[i],s._$AI(o),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=Na(t).nextSibling;Na(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Js=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,n=this,s,i){const o=this.strings;let a=!1;if(o===void 0)t=vn(this,t,n,0),a=!Jn(t)||t!==this._$AH&&t!==kt,a&&(this._$AH=t);else{const l=t;let r,d;for(t=o[0],r=0;r<o.length-1;r++)d=vn(this,l[s+r],n,r),d===kt&&(d=this._$AH[r]),a||=!Jn(d)||d!==this._$AH[r],d===f?t=f:t!==f&&(t+=(d??"")+o[r+1]),this._$AH[r]=d}a&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},xu=class extends Js{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},$u=class extends Js{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},wu=class extends Js{constructor(t,n,s,i,o){super(t,n,s,i,o),this.type=5}_$AI(t,n=this){if((t=vn(this,t,n,0)??f)===kt)return;const s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ku=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){vn(this,t)}};const Su={I:Gs},Au=So.litHtmlPolyfillSupport;Au?.(Vn,Gs),(So.litHtmlVersions??=[]).push("3.3.2");const Cu=(e,t,n)=>{const s=n?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=n?.renderBefore??null;s._$litPart$=i=new Gs(t.insertBefore(Gn(),o),o,void 0,n??{})}return i._$AI(e),i};const Co=globalThis;let Wt=class extends gn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Cu(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return kt}};Wt._$litElement$=!0,Wt.finalized=!0,Co.litElementHydrateSupport?.({LitElement:Wt});const Tu=Co.litElementPolyfillSupport;Tu?.({LitElement:Wt});(Co.litElementVersions??=[]).push("4.2.2");const To=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const _u={attribute:!0,type:String,converter:Ls,reflect:!1,hasChanged:ko},Eu=(e=_u,t,n)=>{const{kind:s,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),s==="accessor"){const{name:a}=n;return{set(l){const r=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,r,e,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,e,l),l}}}if(s==="setter"){const{name:a}=n;return function(l){const r=this[a];t.call(this,l),this.requestUpdate(a,r,e,!0,l)}}throw Error("Unsupported decorator location: "+s)};function ss(e){return(t,n)=>typeof n=="object"?Eu(e,t,n):((s,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),a?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}function y(e){return ss({...e,state:!0,attribute:!1})}const Ru={common:{version:"Version",health:"Health",ok:"OK",offline:"Offline",connect:"Connect",refresh:"Refresh",enabled:"Enabled",disabled:"Disabled",na:"n/a",docs:"Docs",resources:"Resources"},nav:{chat:"Chat",control:"Control",agent:"Agent",settings:"Settings",expand:"Expand sidebar",collapse:"Collapse sidebar"},tabs:{agents:"Agents",overview:"Overview",channels:"Channels",instances:"Instances",sessions:"Sessions",usage:"Usage",cron:"Cron Jobs",skills:"Skills",nodes:"Nodes",chat:"Chat",config:"Config",debug:"Debug",logs:"Logs"},subtitles:{agents:"Manage agent workspaces, tools, and identities.",overview:"Gateway status, entry points, and a fast health read.",channels:"Manage channels and settings.",instances:"Presence beacons from connected clients and nodes.",sessions:"Inspect active sessions and adjust per-session defaults.",usage:"Monitor API usage and costs.",cron:"Schedule wakeups and recurring agent runs.",skills:"Manage skill availability and API key injection.",nodes:"Paired devices, capabilities, and command exposure.",chat:"Direct gateway chat session for quick interventions.",config:"Edit ~/.openclaw/openclaw.json safely.",debug:"Gateway snapshots, events, and manual RPC calls.",logs:"Live tail of the gateway file logs."},overview:{access:{title:"Gateway Access",subtitle:"Where the dashboard connects and how it authenticates.",wsUrl:"WebSocket URL",token:"Gateway Token",password:"Password (not stored)",sessionKey:"Default Session Key",language:"Language",connectHint:"Click Connect to apply connection changes.",trustedProxy:"Authenticated via trusted proxy."},snapshot:{title:"Snapshot",subtitle:"Latest gateway handshake information.",status:"Status",uptime:"Uptime",tickInterval:"Tick Interval",lastChannelsRefresh:"Last Channels Refresh",channelsHint:"Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage."},stats:{instances:"Instances",instancesHint:"Presence beacons in the last 5 minutes.",sessions:"Sessions",sessionsHint:"Recent session keys tracked by the gateway.",cron:"Cron",cronNext:"Next wake {time}"},notes:{title:"Notes",subtitle:"Quick reminders for remote control setups.",tailscaleTitle:"Tailscale serve",tailscaleText:"Prefer serve mode to keep the gateway on loopback with tailnet auth.",sessionTitle:"Session hygiene",sessionText:"Use /new or sessions.patch to reset context.",cronTitle:"Cron reminders",cronText:"Use isolated sessions for recurring runs."},auth:{required:"This gateway requires auth. Add a token or password, then click Connect.",failed:"Auth failed. Re-copy a tokenized URL with {command}, or update the token, then click Connect."},pairing:{hint:"This device needs pairing approval from the gateway host.",mobileHint:"On mobile? Copy the full URL (including #token=...) from openclaw dashboard --no-open on your desktop."},insecure:{hint:"This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open {url} on the gateway host.",stayHttp:"If you must stay on HTTP, set {config} (token-only)."}},chat:{disconnected:"Disconnected from gateway.",refreshTitle:"Refresh chat data",thinkingToggle:"Toggle assistant thinking/working output",focusToggle:"Toggle focus mode (hide sidebar + page header)",hideCronSessions:"Hide cron sessions",showCronSessions:"Show cron sessions",showCronSessionsHidden:"Show cron sessions ({count} hidden)",onboardingDisabled:"Disabled during onboarding"},languages:{en:"English",zhCN:"简体中文 (Simplified Chinese)",zhTW:"繁體中文 (Traditional Chinese)",ptBR:"Português (Brazilian Portuguese)",de:"Deutsch (German)"},cron:{summary:{enabled:"Enabled",yes:"Yes",no:"No",jobs:"Jobs",nextWake:"Next wake",refreshing:"Refreshing...",refresh:"Refresh"},jobs:{title:"Jobs",subtitle:"All scheduled jobs stored in the gateway.",shownOf:"{shown} shown of {total}",searchJobs:"Search jobs",searchPlaceholder:"Name, description, or agent",enabled:"Enabled",schedule:"Schedule",lastRun:"Last run",all:"All",sort:"Sort",nextRun:"Next run",recentlyUpdated:"Recently updated",name:"Name",direction:"Direction",ascending:"Ascending",descending:"Descending",reset:"Reset",noMatching:"No matching jobs.",loading:"Loading...",loadMore:"Load more jobs"},runs:{title:"Run history",subtitleAll:"Latest runs across all jobs.",subtitleJob:"Latest runs for {title}.",scope:"Scope",allJobs:"All jobs",selectedJob:"Selected job",searchRuns:"Search runs",searchPlaceholder:"Summary, error, or job",newestFirst:"Newest first",oldestFirst:"Oldest first",status:"Status",delivery:"Delivery",clear:"Clear",allStatuses:"All statuses",allDelivery:"All delivery",selectJobHint:"Select a job to inspect run history.",noMatching:"No matching runs.",loadMore:"Load more runs",runStatusOk:"OK",runStatusError:"Error",runStatusSkipped:"Skipped",runStatusUnknown:"Unknown",deliveryDelivered:"Delivered",deliveryNotDelivered:"Not delivered",deliveryUnknown:"Unknown",deliveryNotRequested:"Not requested"},form:{editJob:"Edit Job",newJob:"New Job",updateSubtitle:"Update the selected scheduled job.",createSubtitle:"Create a scheduled wakeup or agent run.",required:"Required",requiredSr:"required",basics:"Basics",basicsSub:"Name it, choose the assistant, and set enabled state.",fieldName:"Name",description:"Description",agentId:"Agent ID",namePlaceholder:"Morning brief",descriptionPlaceholder:"Optional context for this job",agentPlaceholder:"main or ops",agentHelp:"Start typing to pick a known agent, or enter a custom one.",schedule:"Schedule",scheduleSub:"Control when this job runs.",every:"Every",at:"At",cronOption:"Cron",runAt:"Run at",unit:"Unit",minutes:"Minutes",hours:"Hours",days:"Days",expression:"Expression",expressionPlaceholder:"0 7 * * *",everyAmountPlaceholder:"30",timezoneOptional:"Timezone (optional)",timezonePlaceholder:"America/Los_Angeles",timezoneHelp:"Pick a common timezone or enter any valid IANA timezone.",jitterHelp:"Need jitter? Use Advanced → Stagger window / Stagger unit.",execution:"Execution",executionSub:"Choose when to wake, and what this job should do.",session:"Session",main:"Main",isolated:"Isolated",sessionHelp:"Main posts a system event. Isolated runs a dedicated agent turn.",wakeMode:"Wake mode",now:"Now",nextHeartbeat:"Next heartbeat",wakeModeHelp:"Now triggers immediately. Next heartbeat waits for the next cycle.",payloadKind:"What should run?",systemEvent:"Post message to main timeline",agentTurn:"Run assistant task (isolated)",systemEventHelp:"Sends your text to the gateway main timeline (good for reminders/triggers).",agentTurnHelp:"Starts an assistant run in its own session using your prompt.",timeoutSeconds:"Timeout (seconds)",timeoutPlaceholder:"Optional, e.g. 90",timeoutHelp:"Optional. Leave blank to use the gateway default timeout behavior for this run.",mainTimelineMessage:"Main timeline message",assistantTaskPrompt:"Assistant task prompt",deliverySection:"Delivery",deliverySub:"Choose where run summaries are sent.",resultDelivery:"Result delivery",announceDefault:"Announce summary (default)",webhookPost:"Webhook POST",noneInternal:"None (internal)",deliveryHelp:"Announce posts a summary to chat. None keeps execution internal.",webhookUrl:"Webhook URL",channel:"Channel",webhookPlaceholder:"https://example.com/cron",channelHelp:"Choose which connected channel receives the summary.",webhookHelp:"Send run summaries to a webhook endpoint.",to:"To",toPlaceholder:"+1555... or chat id",toHelp:"Optional recipient override (chat id, phone, or user id).",advanced:"Advanced",advancedHelp:"Optional overrides for delivery guarantees, schedule jitter, and model controls.",deleteAfterRun:"Delete after run",deleteAfterRunHelp:"Best for one-shot reminders that should auto-clean up.",clearAgentOverride:"Clear agent override",clearAgentHelp:"Force this job to use the gateway default assistant.",exactTiming:"Exact timing (no stagger)",exactTimingHelp:"Run on exact cron boundaries with no spread.",staggerWindow:"Stagger window",staggerUnit:"Stagger unit",staggerPlaceholder:"30",seconds:"Seconds",model:"Model",modelPlaceholder:"openai/gpt-5.2",modelHelp:"Start typing to pick a known model, or enter a custom one.",thinking:"Thinking",thinkingPlaceholder:"low",thinkingHelp:"Use a suggested level or enter a provider-specific value.",bestEffortDelivery:"Best effort delivery",bestEffortHelp:"Do not fail the job if delivery itself fails.",cantAddYet:"Can't add job yet",fillRequired:"Fill the required fields below to enable submit.",fixFields:"Fix {count} field to continue.",fixFieldsPlural:"Fix {count} fields to continue.",saving:"Saving...",saveChanges:"Save changes",addJob:"Add job",cancel:"Cancel"},jobList:{allJobs:"all jobs",selectJob:"(select a job)",enabled:"enabled",disabled:"disabled",edit:"Edit",clone:"Clone",disable:"Disable",enable:"Enable",run:"Run",history:"History",remove:"Remove"},jobDetail:{system:"System",prompt:"Prompt",delivery:"Delivery",agent:"Agent"},jobState:{status:"Status",next:"Next",last:"Last"},runEntry:{noSummary:"No summary.",runAt:"Run at",openRunChat:"Open run chat",next:"Next {rel}",due:"Due {rel}"},errors:{nameRequired:"Name is required.",scheduleAtInvalid:"Enter a valid date/time.",everyAmountInvalid:"Interval must be greater than 0.",cronExprRequired:"Cron expression is required.",staggerAmountInvalid:"Stagger must be greater than 0.",systemTextRequired:"System text is required.",agentMessageRequired:"Agent message is required.",timeoutInvalid:"If set, timeout must be greater than 0 seconds.",webhookUrlRequired:"Webhook URL is required.",webhookUrlInvalid:"Webhook URL must start with http:// or https://.",invalidRunTime:"Invalid run time.",invalidIntervalAmount:"Invalid interval amount.",cronExprRequiredShort:"Cron expression required.",invalidStaggerAmount:"Invalid stagger amount.",systemEventTextRequired:"System event text required.",agentMessageRequiredShort:"Agent message required.",nameRequiredShort:"Name required."}}},Ve="en",Pl=["zh-CN","zh-TW","pt-BR","de"],Iu={"zh-CN":{exportName:"zh_CN",loader:()=>On(()=>import("./zh-CN-CqPGpAps.js"),[],import.meta.url)},"zh-TW":{exportName:"zh_TW",loader:()=>On(()=>import("./zh-TW-Cyl5GDQh.js"),[],import.meta.url)},"pt-BR":{exportName:"pt_BR",loader:()=>On(()=>import("./pt-BR-C2uaHesk.js"),[],import.meta.url)},de:{exportName:"de",loader:()=>On(()=>import("./de-Bm0iuKxz.js"),[],import.meta.url)}},Fl=[Ve,...Pl];function _o(e){return e!=null&&Fl.includes(e)}function Lu(e){return Pl.includes(e)}function Mu(e){return e.startsWith("zh")?e==="zh-TW"||e==="zh-HK"?"zh-TW":"zh-CN":e.startsWith("pt")?"pt-BR":e.startsWith("de")?"de":Ve}async function Du(e){if(!Lu(e))return null;const t=Iu[e];return(await t.loader())[t.exportName]??null}class Pu{constructor(){this.locale=Ve,this.translations={[Ve]:Ru},this.subscribers=new Set,this.loadLocale()}resolveInitialLocale(){const t=localStorage.getItem("openclaw.i18n.locale");return _o(t)?t:Mu(navigator.language)}loadLocale(){const t=this.resolveInitialLocale();if(t===Ve){this.locale=Ve;return}this.setLocale(t)}getLocale(){return this.locale}async setLocale(t){const n=t!==Ve&&!this.translations[t];if(!(this.locale===t&&!n)){if(n)try{const s=await Du(t);if(!s)return;this.translations[t]=s}catch(s){console.error(`Failed to load locale: ${t}`,s);return}this.locale=t,localStorage.setItem("openclaw.i18n.locale",t),this.notify()}}registerTranslation(t,n){this.translations[t]=n}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}notify(){this.subscribers.forEach(t=>t(this.locale))}t(t,n){const s=t.split(".");let i=this.translations[this.locale]||this.translations[Ve];for(const o of s)if(i&&typeof i=="object")i=i[o];else{i=void 0;break}if(i===void 0&&this.locale!==Ve){i=this.translations[Ve];for(const o of s)if(i&&typeof i=="object")i=i[o];else{i=void 0;break}}return typeof i!="string"?t:n?i.replace(/\{(\w+)\}/g,(o,a)=>n[a]||`{${a}}`):i}}const Qn=new Pu,v=(e,t)=>Qn.t(e,t);class Fu{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){this.unsubscribe=Qn.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe?.()}}const Nu={authServiceUrl:"http://localhost:3002"},vi="openclaw_auth_token",bi="openclaw_user";class Ou{constructor(){this.baseUrl=Nu.authServiceUrl}async login(t){try{const s=await(await fetch(`${this.baseUrl}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();return s.success&&s.token&&s.user?(this.setToken(s.token),this.setUser(s.user),s):{success:!1,error:s.error||"Login failed"}}catch{return{success:!1,error:"Network error"}}}async register(t){try{const s=await(await fetch(`${this.baseUrl}/api/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();return s.success&&s.token&&s.user?(this.setToken(s.token),this.setUser(s.user),s):{success:!1,error:s.error||"Registration failed"}}catch{return{success:!1,error:"Network error"}}}async getCurrentUser(){const t=this.getToken();if(!t)return{success:!1,error:"Not authenticated"};try{const s=await(await fetch(`${this.baseUrl}/api/auth/me`,{headers:{Authorization:`Bearer ${t}`}})).json();return s.success&&s.user?(this.setUser(s.user),s):{success:!1,error:s.error||"Failed to get user"}}catch{return{success:!1,error:"Network error"}}}async forgotPassword(t){try{return await(await fetch(`${this.baseUrl}/api/auth/forgot-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})})).json()}catch{return{success:!1,error:"Network error"}}}logout(){localStorage.removeItem(vi),localStorage.removeItem(bi)}setToken(t){localStorage.setItem(vi,t)}getToken(){return localStorage.getItem(vi)}setUser(t){localStorage.setItem(bi,JSON.stringify(t))}getUser(){const t=localStorage.getItem(bi);if(t)try{return JSON.parse(t)}catch{return null}return null}isAuthenticated(){return!!this.getToken()}getGatewayToken(){return this.getUser()?.gatewayToken||null}}const bn=new Ou,Uu="update.available";function Eo(e){const t=(e??"").trim().toLowerCase();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),i=n.slice(2).join(":");return!s||!i?null:{agentId:s,rest:i}}const qi=450;function is(e,t=!1,n=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const s=()=>{const i=e.querySelector(".chat-thread");if(i){const o=getComputedStyle(i).overflowY;if(o==="auto"||o==="scroll"||i.scrollHeight-i.clientHeight>1)return i}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const i=s();if(!i)return;const o=i.scrollHeight-i.scrollTop-i.clientHeight,a=t&&!e.chatHasAutoScrolled;if(!(a||e.chatUserNearBottom||o<qi)){e.chatNewMessagesBelow=!0;return}a&&(e.chatHasAutoScrolled=!0);const r=n&&(typeof window>"u"||typeof window.matchMedia!="function"||!window.matchMedia("(prefers-reduced-motion: reduce)").matches),d=i.scrollHeight;typeof i.scrollTo=="function"?i.scrollTo({top:d,behavior:r?"smooth":"auto"}):i.scrollTop=d,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const g=a?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const u=s();if(!u)return;const m=u.scrollHeight-u.scrollTop-u.clientHeight;(a||e.chatUserNearBottom||m<qi)&&(u.scrollTop=u.scrollHeight,e.chatUserNearBottom=!0)},g)})})}function Nl(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function Bu(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<qi,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function Hu(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function Ka(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function zu(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),i=document.createElement("a"),o=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");i.href=s,i.download=`openclaw-logs-${t}-${o}.log`,i.click(),URL.revokeObjectURL(s)}function ju(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}async function Vs(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,i]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const o=s;e.debugModels=Array.isArray(o?.models)?o?.models:[],e.debugHeartbeat=i}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function Ku(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const qu=2e3,Wu=new Set(["trace","debug","info","warn","error","fatal"]);function Gu(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function Ju(e){if(typeof e!="string")return null;const t=e.toLowerCase();return Wu.has(t)?t:null}function Vu(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,i=Ju(n?.logLevelName??n?.level),o=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,a=Gu(o);let l=null;a&&(typeof a.subsystem=="string"?l=a.subsystem:typeof a.module=="string"&&(l=a.module)),!l&&o&&o.length<120&&(l=o);let r=null;return typeof t[1]=="string"?r=t[1]:!a&&typeof t[0]=="string"?r=t[0]:typeof t.message=="string"&&(r=t.message),{raw:e,time:s,level:i,subsystem:l,message:r??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Ro(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),o=(Array.isArray(s.lines)?s.lines.filter(l=>typeof l=="string"):[]).map(Vu),a=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=a?o:[...e.logsEntries,...o].slice(-qu),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function Qs(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function Qu(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{Qs(e,{quiet:!0})},5e3))}function Yu(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Ol(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Ro(e,{quiet:!0})},2e3))}function Ul(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function Bl(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&Vs(e)},3e3))}function Hl(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function zl(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function jl(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(s=>!e.agentIdentityById[s]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const s of n){const i=await e.client.request("agent.identity.get",{agentId:s});i&&(e.agentIdentityById={...e.agentIdentityById,[s]:i})}}catch(s){e.agentIdentityError=String(s)}finally{e.agentIdentityLoading=!1}}}async function Un(e,t,n=!1){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const s={agentId:t};n&&(s._t=Date.now());const i=await e.client.request("skills.status",s);i&&(e.agentSkillsReport=i,e.agentSkillsAgentId=t)}catch(s){e.agentSkillsError=String(s)}finally{e.agentSkillsLoading=!1}}}async function Io(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,s=t.agents.some(i=>i.id===n);(!n||!s)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}async function zn(e,t){if(!(!e.client||!e.connected)&&!e.toolsCatalogLoading){e.toolsCatalogLoading=!0,e.toolsCatalogError=null;try{const n=await e.client.request("tools.catalog",{agentId:t??e.agentsSelectedId??void 0,includePlugins:!0});n&&(e.toolsCatalogResult=n)}catch(n){e.toolsCatalogError=String(n)}finally{e.toolsCatalogLoading=!1}}}async function Re(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function Xu(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Zu(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function eg(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function me(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function Kl(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(me(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function Lo(e){return e.filter(t=>typeof t=="string").join(".")}function yt(e,t){const n=Lo(e),s=t[n];if(s)return s;const i=n.split(".");for(const[o,a]of Object.entries(t)){if(!o.includes("*"))continue;const l=o.split(".");if(l.length!==i.length)continue;let r=!0;for(let d=0;d<i.length;d+=1)if(l[d]!=="*"&&l[d]!==i[d]){r=!1;break}if(r)return a}}function Ys(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function qa(e,t){const n=e.trim();if(n==="")return;const s=Number(n);return!Number.isFinite(s)||t&&!Number.isInteger(s)?e:s}function Wa(e){const t=e.trim();return t==="true"?!0:t==="false"?!1:e}function ht(e,t){if(e==null)return e;if(t.allOf&&t.allOf.length>0){let s=e;for(const i of t.allOf)s=ht(s,i);return s}const n=me(t);if(t.anyOf||t.oneOf){const s=(t.anyOf??t.oneOf??[]).filter(i=>!(i.type==="null"||Array.isArray(i.type)&&i.type.includes("null")));if(s.length===1)return ht(e,s[0]);if(typeof e=="string")for(const i of s){const o=me(i);if(o==="number"||o==="integer"){const a=qa(e,o==="integer");if(a===void 0||typeof a=="number")return a}if(o==="boolean"){const a=Wa(e);if(typeof a=="boolean")return a}}for(const i of s){const o=me(i);if(o==="object"&&typeof e=="object"&&!Array.isArray(e)||o==="array"&&Array.isArray(e))return ht(e,i)}return e}if(n==="number"||n==="integer"){if(typeof e=="string"){const s=qa(e,n==="integer");if(s===void 0||typeof s=="number")return s}return e}if(n==="boolean"){if(typeof e=="string"){const s=Wa(e);if(typeof s=="boolean")return s}return e}if(n==="object"){if(typeof e!="object"||Array.isArray(e))return e;const s=e,i=t.properties??{},o=t.additionalProperties&&typeof t.additionalProperties=="object"?t.additionalProperties:null,a={};for(const[l,r]of Object.entries(s)){const d=i[l]??o,g=d?ht(r,d):r;g!==void 0&&(a[l]=g)}return a}if(n==="array"){if(!Array.isArray(e))return e;if(Array.isArray(t.items)){const i=t.items;return e.map((o,a)=>{const l=a<i.length?i[a]:void 0;return l?ht(o,l):o})}const s=t.items;return s?e.map(i=>ht(i,s)).filter(i=>i!==void 0):e}return e}function Vt(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Yn(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function ql(e,t,n){if(t.length===0)return;let s=e;for(let o=0;o<t.length-1;o+=1){const a=t[o],l=t[o+1];if(typeof a=="number"){if(!Array.isArray(s))return;s[a]==null&&(s[a]=typeof l=="number"?[]:{}),s=s[a]}else{if(typeof s!="object"||s==null)return;const r=s;r[a]==null&&(r[a]=typeof l=="number"?[]:{}),s=r[a]}}const i=t[t.length-1];if(typeof i=="number"){Array.isArray(s)&&(s[i]=n);return}typeof s=="object"&&s!=null&&(s[i]=n)}function Wl(e,t){if(t.length===0)return;let n=e;for(let i=0;i<t.length-1;i+=1){const o=t[i];if(typeof o=="number"){if(!Array.isArray(n))return;n=n[o]}else{if(typeof n!="object"||n==null)return;n=n[o]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function ze(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});ng(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function Gl(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});tg(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function tg(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function ng(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?Yn(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=Yn(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=Vt(t.config??{}),e.configFormOriginal=Vt(t.config??{}),e.configRawOriginal=n)}function sg(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}function Jl(e){if(e.configFormMode!=="form"||!e.configForm)return e.configRaw;const t=sg(e.configSchema),n=t?ht(e.configForm,t):e.configForm;return Yn(n)}async function Cs(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=Jl(e),n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await ze(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function ig(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=Jl(e),n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await ze(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function Ga(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function Le(e,t,n){const s=Vt(e.configForm??e.configSnapshot?.config??{});ql(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Yn(s))}function ot(e,t){const n=Vt(e.configForm??e.configSnapshot?.config??{});Wl(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Yn(n))}const og={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},Ds={name:"",description:"",agentId:"",sessionKey:"",clearAgent:!1,enabled:!0,deleteAfterRun:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",scheduleExact:!1,staggerAmount:"",staggerUnit:"seconds",sessionTarget:"isolated",wakeMode:"now",payloadKind:"agentTurn",payloadText:"",payloadModel:"",payloadThinking:"",payloadLightContext:!1,deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",deliveryAccountId:"",deliveryBestEffort:!1,failureAlertMode:"inherit",failureAlertAfter:"2",failureAlertCooldownSeconds:"3600",failureAlertChannel:"last",failureAlertTo:"",failureAlertDeliveryMode:"announce",failureAlertAccountId:"",timeoutSeconds:""};function Mo(e,t){if(e==null||!Number.isFinite(e)||e<=0)return;if(e<1e3)return`${Math.round(e)}ms`;const n=t?.spaced?" ":"",s=Math.round(e/1e3),i=Math.floor(s/3600),o=Math.floor(s%3600/60),a=s%60;if(i>=24){const l=Math.floor(i/24),r=i%24;return r>0?`${l}d${n}${r}h`:`${l}d`}return i>0?o>0?`${i}h${n}${o}m`:`${i}h`:o>0?a>0?`${o}m${n}${a}s`:`${o}m`:`${a}s`}function Do(e,t="n/a"){if(e==null||!Number.isFinite(e)||e<0)return t;if(e<1e3)return`${Math.round(e)}ms`;const n=Math.round(e/1e3);if(n<60)return`${n}s`;const s=Math.round(n/60);if(s<60)return`${s}m`;const i=Math.round(s/60);return i<24?`${i}h`:`${Math.round(i/24)}d`}function se(e,t){const n=t?.fallback??"n/a";if(e==null||!Number.isFinite(e))return n;const s=Date.now()-e,i=Math.abs(s),o=s>=0,a=Math.round(i/1e3);if(a<60)return o?"just now":"in <1m";const l=Math.round(a/60);if(l<60)return o?`${l}m ago`:`in ${l}m`;const r=Math.round(l/60);if(r<48)return o?`${r}h ago`:`in ${r}h`;const d=Math.round(r/24);return o?`${d}d ago`:`in ${d}d`}function Wi(e){const t=[],n=/(^|\n)(```|~~~)[^\n]*\n[\s\S]*?(?:\n\2(?:\n|$)|$)/g;for(const i of e.matchAll(n)){const o=(i.index??0)+i[1].length;t.push({start:o,end:o+i[0].length-i[1].length})}const s=/`+[^`]+`+/g;for(const i of e.matchAll(s)){const o=i.index??0,a=o+i[0].length;t.some(r=>o>=r.start&&a<=r.end)||t.push({start:o,end:a})}return t.sort((i,o)=>i.start-o.start),t}function Gi(e,t){return t.some(n=>e>=n.start&&e<n.end)}const ag=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,ps=/<\s*\/?\s*final\b[^<>]*>/gi,Ja=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;function rg(e,t){return e.trimStart()}function lg(e,t){if(!e||!ag.test(e))return e;let n=e;if(ps.test(n)){ps.lastIndex=0;const l=[],r=Wi(n);for(const d of n.matchAll(ps)){const g=d.index??0;l.push({start:g,length:d[0].length,inCode:Gi(g,r)})}for(let d=l.length-1;d>=0;d--){const g=l[d];g.inCode||(n=n.slice(0,g.start)+n.slice(g.start+g.length))}}else ps.lastIndex=0;const s=Wi(n);Ja.lastIndex=0;let i="",o=0,a=!1;for(const l of n.matchAll(Ja)){const r=l.index??0,d=l[1]==="/";Gi(r,s)||(a?d&&(a=!1):(i+=n.slice(o,r),d||(a=!0)),o=r+l[0].length)}return i+=n.slice(o),rg(i)}const Va=/<\s*(\/?)\s*relevant[-_]memories\b[^<>]*>/gi,cg=/<\s*\/?\s*relevant[-_]memories\b/i;function dg(e){if(!e||!cg.test(e))return e;Va.lastIndex=0;const t=Wi(e);let n="",s=0,i=!1;for(const o of e.matchAll(Va)){const a=o.index??0;if(Gi(a,t))continue;const l=o[1]==="/";i?l&&(i=!1):(n+=e.slice(s,a),l||(i=!0)),s=a+o[0].length}return i||(n+=e.slice(s)),n}function ug(e){const t=lg(e);return dg(t).trimStart()}function St(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function Ji(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function Vi(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function Vl(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function Pe(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function gg(e){return ug(e)}const Ts="last";function pg(e){return e.sessionTarget==="isolated"&&e.payloadKind==="agentTurn"}function Po(e){return e.deliveryMode!=="announce"||pg(e)?e:{...e,deliveryMode:"none"}}function os(e){const t={};if(e.name.trim()||(t.name="cron.errors.nameRequired"),e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);Number.isFinite(n)||(t.scheduleAt="cron.errors.scheduleAtInvalid")}else if(e.scheduleKind==="every")Pe(e.everyAmount,0)<=0&&(t.everyAmount="cron.errors.everyAmountInvalid");else if(e.cronExpr.trim()||(t.cronExpr="cron.errors.cronExprRequired"),!e.scheduleExact){const n=e.staggerAmount.trim();n&&Pe(n,0)<=0&&(t.staggerAmount="cron.errors.staggerAmountInvalid")}if(e.payloadText.trim()||(t.payloadText=e.payloadKind==="systemEvent"?"cron.errors.systemTextRequired":"cron.errors.agentMessageRequired"),e.payloadKind==="agentTurn"){const n=e.timeoutSeconds.trim();n&&Pe(n,0)<=0&&(t.timeoutSeconds="cron.errors.timeoutInvalid")}if(e.deliveryMode==="webhook"){const n=e.deliveryTo.trim();n?/^https?:\/\//i.test(n)||(t.deliveryTo="cron.errors.webhookUrlInvalid"):t.deliveryTo="cron.errors.webhookUrlRequired"}if(e.failureAlertMode==="custom"){const n=e.failureAlertAfter.trim();if(n){const i=Pe(n,0);(!Number.isFinite(i)||i<=0)&&(t.failureAlertAfter="Failure alert threshold must be greater than 0.")}const s=e.failureAlertCooldownSeconds.trim();if(s){const i=Pe(s,-1);(!Number.isFinite(i)||i<0)&&(t.failureAlertCooldownSeconds="Cooldown must be 0 or greater.")}}return t}function Ql(e){return Object.keys(e).length>0}async function as(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function fg(e){if(!(!e.client||!e.connected))try{const n=(await e.client.request("models.list",{}))?.models;if(!Array.isArray(n)){e.cronModelSuggestions=[];return}const s=n.map(i=>{if(!i||typeof i!="object")return"";const o=i.id;return typeof o=="string"?o.trim():""}).filter(Boolean);e.cronModelSuggestions=Array.from(new Set(s)).toSorted((i,o)=>i.localeCompare(o))}catch{e.cronModelSuggestions=[]}}async function Xs(e){return await Fo(e,{append:!1})}function Yl(e){const t=typeof e.totalRaw=="number"&&Number.isFinite(e.totalRaw)?Math.max(0,Math.floor(e.totalRaw)):e.pageCount,n=typeof e.limitRaw=="number"&&Number.isFinite(e.limitRaw)?Math.max(1,Math.floor(e.limitRaw)):Math.max(1,e.pageCount),s=typeof e.offsetRaw=="number"&&Number.isFinite(e.offsetRaw)?Math.max(0,Math.floor(e.offsetRaw)):0,i=typeof e.hasMoreRaw=="boolean"?e.hasMoreRaw:s+e.pageCount<Math.max(t,s+e.pageCount),o=typeof e.nextOffsetRaw=="number"&&Number.isFinite(e.nextOffsetRaw)?Math.max(0,Math.floor(e.nextOffsetRaw)):i?s+e.pageCount:null;return{total:t,limit:n,offset:s,hasMore:i,nextOffset:o}}async function Fo(e,t){if(!e.client||!e.connected||e.cronLoading||e.cronJobsLoadingMore)return;const n=t?.append===!0;if(n){if(!e.cronJobsHasMore)return;e.cronJobsLoadingMore=!0}else e.cronLoading=!0;e.cronError=null;try{const s=n?Math.max(0,e.cronJobsNextOffset??e.cronJobs.length):0,i=await e.client.request("cron.list",{includeDisabled:e.cronJobsEnabledFilter==="all",limit:e.cronJobsLimit,offset:s,query:e.cronJobsQuery.trim()||void 0,enabled:e.cronJobsEnabledFilter,sortBy:e.cronJobsSortBy,sortDir:e.cronJobsSortDir}),o=Array.isArray(i.jobs)?i.jobs:[];e.cronJobs=n?[...e.cronJobs,...o]:o;const a=Yl({totalRaw:i.total,limitRaw:i.limit,offsetRaw:i.offset,nextOffsetRaw:i.nextOffset,hasMoreRaw:i.hasMore,pageCount:o.length});e.cronJobsTotal=Math.max(a.total,e.cronJobs.length),e.cronJobsHasMore=a.hasMore,e.cronJobsNextOffset=a.nextOffset,e.cronEditingJobId&&!e.cronJobs.some(l=>l.id===e.cronEditingJobId)&&rs(e)}catch(s){e.cronError=String(s)}finally{n?e.cronJobsLoadingMore=!1:e.cronLoading=!1}}async function hg(e){await Fo(e,{append:!0})}async function Qa(e){await Fo(e,{append:!1})}function Ya(e,t){typeof t.cronJobsQuery=="string"&&(e.cronJobsQuery=t.cronJobsQuery),t.cronJobsEnabledFilter&&(e.cronJobsEnabledFilter=t.cronJobsEnabledFilter),t.cronJobsScheduleKindFilter&&(e.cronJobsScheduleKindFilter=t.cronJobsScheduleKindFilter),t.cronJobsLastStatusFilter&&(e.cronJobsLastStatusFilter=t.cronJobsLastStatusFilter),t.cronJobsSortBy&&(e.cronJobsSortBy=t.cronJobsSortBy),t.cronJobsSortDir&&(e.cronJobsSortDir=t.cronJobsSortDir)}function mg(e){return e.cronJobs.filter(t=>!(e.cronJobsScheduleKindFilter!=="all"&&t.schedule.kind!==e.cronJobsScheduleKindFilter||e.cronJobsLastStatusFilter!=="all"&&t.state?.lastStatus!==e.cronJobsLastStatusFilter))}function rs(e){e.cronEditingJobId=null}function Xl(e){e.cronForm={...Ds},e.cronFieldErrors=os(e.cronForm)}function vg(e){const t=Date.parse(e);if(!Number.isFinite(t))return"";const n=new Date(t),s=n.getFullYear(),i=String(n.getMonth()+1).padStart(2,"0"),o=String(n.getDate()).padStart(2,"0"),a=String(n.getHours()).padStart(2,"0"),l=String(n.getMinutes()).padStart(2,"0");return`${s}-${i}-${o}T${a}:${l}`}function bg(e){if(e%864e5===0)return{everyAmount:String(Math.max(1,e/864e5)),everyUnit:"days"};if(e%36e5===0)return{everyAmount:String(Math.max(1,e/36e5)),everyUnit:"hours"};const t=Math.max(1,Math.ceil(e/6e4));return{everyAmount:String(t),everyUnit:"minutes"}}function yg(e){return e===0?{scheduleExact:!0,staggerAmount:"",staggerUnit:"seconds"}:typeof e!="number"||!Number.isFinite(e)||e<0?{scheduleExact:!1,staggerAmount:"",staggerUnit:"seconds"}:e%6e4===0?{scheduleExact:!1,staggerAmount:String(Math.max(1,e/6e4)),staggerUnit:"minutes"}:{scheduleExact:!1,staggerAmount:String(Math.max(1,Math.ceil(e/1e3))),staggerUnit:"seconds"}}function Zl(e,t){const n=e.failureAlert,s={...t,name:e.name,description:e.description??"",agentId:e.agentId??"",sessionKey:e.sessionKey??"",clearAgent:!1,enabled:e.enabled,deleteAfterRun:e.deleteAfterRun??!1,scheduleKind:e.schedule.kind,scheduleAt:"",everyAmount:t.everyAmount,everyUnit:t.everyUnit,cronExpr:t.cronExpr,cronTz:"",scheduleExact:!1,staggerAmount:"",staggerUnit:"seconds",sessionTarget:e.sessionTarget,wakeMode:e.wakeMode,payloadKind:e.payload.kind,payloadText:e.payload.kind==="systemEvent"?e.payload.text:e.payload.message,payloadModel:e.payload.kind==="agentTurn"?e.payload.model??"":"",payloadThinking:e.payload.kind==="agentTurn"?e.payload.thinking??"":"",payloadLightContext:e.payload.kind==="agentTurn"?e.payload.lightContext===!0:!1,deliveryMode:e.delivery?.mode??"none",deliveryChannel:e.delivery?.channel??Ts,deliveryTo:e.delivery?.to??"",deliveryAccountId:e.delivery?.accountId??"",deliveryBestEffort:e.delivery?.bestEffort??!1,failureAlertMode:n===!1?"disabled":n&&typeof n=="object"?"custom":"inherit",failureAlertAfter:n&&typeof n=="object"&&typeof n.after=="number"?String(n.after):Ds.failureAlertAfter,failureAlertCooldownSeconds:n&&typeof n=="object"&&typeof n.cooldownMs=="number"?String(Math.floor(n.cooldownMs/1e3)):Ds.failureAlertCooldownSeconds,failureAlertChannel:n&&typeof n=="object"?n.channel??Ts:Ts,failureAlertTo:n&&typeof n=="object"?n.to??"":"",failureAlertDeliveryMode:n&&typeof n=="object"?n.mode??"announce":"announce",failureAlertAccountId:n&&typeof n=="object"?n.accountId??"":"",timeoutSeconds:e.payload.kind==="agentTurn"&&typeof e.payload.timeoutSeconds=="number"?String(e.payload.timeoutSeconds):""};if(e.schedule.kind==="at")s.scheduleAt=vg(e.schedule.at);else if(e.schedule.kind==="every"){const i=bg(e.schedule.everyMs);s.everyAmount=i.everyAmount,s.everyUnit=i.everyUnit}else{s.cronExpr=e.schedule.expr,s.cronTz=e.schedule.tz??"";const i=yg(e.schedule.staggerMs);s.scheduleExact=i.scheduleExact,s.staggerAmount=i.staggerAmount,s.staggerUnit=i.staggerUnit}return Po(s)}function xg(e){if(e.scheduleKind==="at"){const o=Date.parse(e.scheduleAt);if(!Number.isFinite(o))throw new Error(v("cron.errors.invalidRunTime"));return{kind:"at",at:new Date(o).toISOString()}}if(e.scheduleKind==="every"){const o=Pe(e.everyAmount,0);if(o<=0)throw new Error(v("cron.errors.invalidIntervalAmount"));const a=e.everyUnit;return{kind:"every",everyMs:o*(a==="minutes"?6e4:a==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error(v("cron.errors.cronExprRequiredShort"));if(e.scheduleExact)return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0,staggerMs:0};const n=e.staggerAmount.trim();if(!n)return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0};const s=Pe(n,0);if(s<=0)throw new Error(v("cron.errors.invalidStaggerAmount"));const i=e.staggerUnit==="minutes"?s*6e4:s*1e3;return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0,staggerMs:i}}function $g(e){if(e.payloadKind==="systemEvent"){const a=e.payloadText.trim();if(!a)throw new Error(v("cron.errors.systemEventTextRequired"));return{kind:"systemEvent",text:a}}const t=e.payloadText.trim();if(!t)throw new Error(v("cron.errors.agentMessageRequiredShort"));const n={kind:"agentTurn",message:t},s=e.payloadModel.trim();s&&(n.model=s);const i=e.payloadThinking.trim();i&&(n.thinking=i);const o=Pe(e.timeoutSeconds,0);return o>0&&(n.timeoutSeconds=o),e.payloadLightContext&&(n.lightContext=!0),n}function wg(e){if(e.failureAlertMode==="disabled")return!1;if(e.failureAlertMode!=="custom")return;const t=Pe(e.failureAlertAfter.trim(),0),n=e.failureAlertCooldownSeconds.trim(),s=n.length>0?Pe(n,0):void 0,i=s!==void 0&&Number.isFinite(s)&&s>=0?Math.floor(s*1e3):void 0,o=e.failureAlertDeliveryMode,a=e.failureAlertAccountId.trim(),l={after:t>0?Math.floor(t):void 0,channel:e.failureAlertChannel.trim()||Ts,to:e.failureAlertTo.trim()||void 0,...i!==void 0?{cooldownMs:i}:{}};return o&&(l.mode=o),l.accountId=a||void 0,l}async function kg(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=Po(e.cronForm);t!==e.cronForm&&(e.cronForm=t);const n=os(t);if(e.cronFieldErrors=n,Ql(n))return;const s=xg(t),i=$g(t),o=e.cronEditingJobId?e.cronJobs.find(h=>h.id===e.cronEditingJobId):void 0;if(i.kind==="agentTurn"){const h=o?.payload.kind==="agentTurn"?o.payload.lightContext:void 0;!t.payloadLightContext&&e.cronEditingJobId&&h!==void 0&&(i.lightContext=!1)}const a=t.deliveryMode,l=a&&a!=="none"?{mode:a,channel:a==="announce"?t.deliveryChannel.trim()||"last":void 0,to:t.deliveryTo.trim()||void 0,accountId:a==="announce"?t.deliveryAccountId.trim():void 0,bestEffort:t.deliveryBestEffort}:a==="none"?{mode:"none"}:void 0,r=wg(t),d=t.clearAgent?null:t.agentId.trim(),u=t.sessionKey.trim()||(o?.sessionKey?null:void 0),m={name:t.name.trim(),description:t.description.trim(),agentId:d===null?null:d||void 0,sessionKey:u,enabled:t.enabled,deleteAfterRun:t.deleteAfterRun,schedule:s,sessionTarget:t.sessionTarget,wakeMode:t.wakeMode,payload:i,delivery:l,failureAlert:r};if(!m.name)throw new Error(v("cron.errors.nameRequiredShort"));e.cronEditingJobId?(await e.client.request("cron.update",{id:e.cronEditingJobId,patch:m}),rs(e)):(await e.client.request("cron.add",m),Xl(e)),await Xs(e),await as(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function Sg(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await Xs(e),await as(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function Ag(e,t,n="force"){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:n}),e.cronRunsScope==="all"?await xt(e,null):await xt(e,t.id)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function Cg(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronEditingJobId===t.id&&rs(e),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[],e.cronRunsTotal=0,e.cronRunsHasMore=!1,e.cronRunsNextOffset=null),await Xs(e),await as(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function xt(e,t,n){if(!e.client||!e.connected)return;const s=e.cronRunsScope,i=t??e.cronRunsJobId;if(s==="job"&&!i){e.cronRuns=[],e.cronRunsTotal=0,e.cronRunsHasMore=!1,e.cronRunsNextOffset=null;return}const o=n?.append===!0;if(!(o&&!e.cronRunsHasMore))try{o&&(e.cronRunsLoadingMore=!0);const a=o?Math.max(0,e.cronRunsNextOffset??e.cronRuns.length):0,l=await e.client.request("cron.runs",{scope:s,id:s==="job"?i??void 0:void 0,limit:e.cronRunsLimit,offset:a,statuses:e.cronRunsStatuses.length>0?e.cronRunsStatuses:void 0,status:e.cronRunsStatusFilter,deliveryStatuses:e.cronRunsDeliveryStatuses.length>0?e.cronRunsDeliveryStatuses:void 0,query:e.cronRunsQuery.trim()||void 0,sortDir:e.cronRunsSortDir}),r=Array.isArray(l.entries)?l.entries:[];e.cronRuns=o&&(s==="all"||e.cronRunsJobId===i)?[...e.cronRuns,...r]:r,s==="job"&&(e.cronRunsJobId=i??null);const d=Yl({totalRaw:l.total,limitRaw:l.limit,offsetRaw:l.offset,nextOffsetRaw:l.nextOffset,hasMoreRaw:l.hasMore,pageCount:r.length});e.cronRunsTotal=Math.max(d.total,e.cronRuns.length),e.cronRunsHasMore=d.hasMore,e.cronRunsNextOffset=d.nextOffset}catch(a){e.cronError=String(a)}finally{o&&(e.cronRunsLoadingMore=!1)}}async function Tg(e){e.cronRunsScope==="job"&&!e.cronRunsJobId||await xt(e,e.cronRunsJobId,{append:!0})}function Xa(e,t){t.cronRunsScope&&(e.cronRunsScope=t.cronRunsScope),Array.isArray(t.cronRunsStatuses)&&(e.cronRunsStatuses=t.cronRunsStatuses,e.cronRunsStatusFilter=t.cronRunsStatuses.length===1?t.cronRunsStatuses[0]:"all"),Array.isArray(t.cronRunsDeliveryStatuses)&&(e.cronRunsDeliveryStatuses=t.cronRunsDeliveryStatuses),t.cronRunsStatusFilter&&(e.cronRunsStatusFilter=t.cronRunsStatusFilter,e.cronRunsStatuses=t.cronRunsStatusFilter==="all"?[]:[t.cronRunsStatusFilter]),typeof t.cronRunsQuery=="string"&&(e.cronRunsQuery=t.cronRunsQuery),t.cronRunsSortDir&&(e.cronRunsSortDir=t.cronRunsSortDir)}function _g(e,t){e.cronEditingJobId=t.id,e.cronRunsJobId=t.id,e.cronForm=Zl(t,e.cronForm),e.cronFieldErrors=os(e.cronForm)}function Eg(e,t){const n=e.trim()||"Job",s=`${n} copy`;if(!t.has(s.toLowerCase()))return s;let i=2;for(;i<1e3;){const o=`${n} copy ${i}`;if(!t.has(o.toLowerCase()))return o;i+=1}return`${n} copy ${Date.now()}`}function Rg(e,t){rs(e),e.cronRunsJobId=t.id;const n=new Set(e.cronJobs.map(i=>i.name.trim().toLowerCase())),s=Zl(t,e.cronForm);s.name=Eg(t.name,n),e.cronForm=s,e.cronFieldErrors=os(e.cronForm)}function Ig(e){rs(e),Xl(e)}function No(e){return e.trim()}function Lg(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].toSorted()}function Mg(e){const t=e.adapter.readStore();if(!t||t.deviceId!==e.deviceId)return null;const n=No(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function Dg(e){const t=No(e.role),n=e.adapter.readStore(),s={version:1,deviceId:e.deviceId,tokens:n&&n.deviceId===e.deviceId&&n.tokens?{...n.tokens}:{}},i={token:e.token,role:t,scopes:Lg(e.scopes),updatedAtMs:Date.now()};return s.tokens[t]=i,e.adapter.writeStore(s),i}function Pg(e){const t=e.adapter.readStore();if(!t||t.deviceId!==e.deviceId)return;const n=No(e.role);if(!t.tokens[n])return;const s={version:1,deviceId:t.deviceId,tokens:{...t.tokens}};delete s.tokens[n],e.adapter.writeStore(s)}const ec="openclaw.device.auth.v1";function Oo(){try{const e=window.localStorage.getItem(ec);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function Uo(e){try{window.localStorage.setItem(ec,JSON.stringify(e))}catch{}}function Fg(e){return Mg({adapter:{readStore:Oo,writeStore:Uo},deviceId:e.deviceId,role:e.role})}function tc(e){return Dg({adapter:{readStore:Oo,writeStore:Uo},deviceId:e.deviceId,role:e.role,token:e.token,scopes:e.scopes})}function nc(e){Pg({adapter:{readStore:Oo,writeStore:Uo},deviceId:e.deviceId,role:e.role})}const sc={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:ke,n:_s,Gx:Za,Gy:er,a:yi,d:xi,h:Ng}=sc,Qt=32,Bo=64,Og=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},he=(e="")=>{const t=new Error(e);throw Og(t,he),t},Ug=e=>typeof e=="bigint",Bg=e=>typeof e=="string",Hg=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",_t=(e,t,n="")=>{const s=Hg(e),i=e?.length,o=t!==void 0;if(!s||o&&i!==t){const a=n&&`"${n}" `,l=o?` of length ${t}`:"",r=s?`length=${i}`:`type=${typeof e}`;he(a+"expected Uint8Array"+l+", got "+r)}return e},Zs=e=>new Uint8Array(e),ic=e=>Uint8Array.from(e),oc=(e,t)=>e.toString(16).padStart(t,"0"),ac=e=>Array.from(_t(e)).map(t=>oc(t,2)).join(""),at={_0:48,_9:57,A:65,F:70,a:97,f:102},tr=e=>{if(e>=at._0&&e<=at._9)return e-at._0;if(e>=at.A&&e<=at.F)return e-(at.A-10);if(e>=at.a&&e<=at.f)return e-(at.a-10)},rc=e=>{const t="hex invalid";if(!Bg(e))return he(t);const n=e.length,s=n/2;if(n%2)return he(t);const i=Zs(s);for(let o=0,a=0;o<s;o++,a+=2){const l=tr(e.charCodeAt(a)),r=tr(e.charCodeAt(a+1));if(l===void 0||r===void 0)return he(t);i[o]=l*16+r}return i},lc=()=>globalThis?.crypto,zg=()=>lc()?.subtle??he("crypto.subtle must be defined, consider polyfill"),Xn=(...e)=>{const t=Zs(e.reduce((s,i)=>s+_t(i).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},jg=(e=Qt)=>lc().getRandomValues(Zs(e)),Ps=BigInt,Ot=(e,t,n,s="bad number: out of range")=>Ug(e)&&t<=e&&e<n?e:he(s),N=(e,t=ke)=>{const n=e%t;return n>=0n?n:t+n},cc=e=>N(e,_s),Kg=(e,t)=>{(e===0n||t<=0n)&&he("no inverse n="+e+" mod="+t);let n=N(e,t),s=t,i=0n,o=1n;for(;n!==0n;){const a=s/n,l=s%n,r=i-o*a;s=n,n=l,i=o,o=r}return s===1n?N(i,t):he("no inverse")},qg=e=>{const t=pc[e];return typeof t!="function"&&he("hashes."+e+" not set"),t},$i=e=>e instanceof De?e:he("Point expected"),Qi=2n**256n;class De{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,i){const o=Qi;this.X=Ot(t,0n,o),this.Y=Ot(n,0n,o),this.Z=Ot(s,1n,o),this.T=Ot(i,0n,o),Object.freeze(this)}static CURVE(){return sc}static fromAffine(t){return new De(t.x,t.y,1n,N(t.x*t.y))}static fromBytes(t,n=!1){const s=xi,i=ic(_t(t,Qt)),o=t[31];i[31]=o&-129;const a=uc(i);Ot(a,0n,n?Qi:ke);const r=N(a*a),d=N(r-1n),g=N(s*r+1n);let{isValid:u,value:m}=Gg(d,g);u||he("bad point: y not sqrt");const h=(m&1n)===1n,b=(o&128)!==0;return!n&&m===0n&&b&&he("bad point: x==0, isLastByteOdd"),b!==h&&(m=N(-m)),new De(m,a,1n,N(m*a))}static fromHex(t,n){return De.fromBytes(rc(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=yi,n=xi,s=this;if(s.is0())return he("bad point: ZERO");const{X:i,Y:o,Z:a,T:l}=s,r=N(i*i),d=N(o*o),g=N(a*a),u=N(g*g),m=N(r*t),h=N(g*N(m+d)),b=N(u+N(n*N(r*d)));if(h!==b)return he("bad point: equation left != right (1)");const k=N(i*o),T=N(a*l);return k!==T?he("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:i}=this,{X:o,Y:a,Z:l}=$i(t),r=N(n*l),d=N(o*i),g=N(s*l),u=N(a*i);return r===d&&g===u}is0(){return this.equals(fn)}negate(){return new De(N(-this.X),this.Y,this.Z,N(-this.T))}double(){const{X:t,Y:n,Z:s}=this,i=yi,o=N(t*t),a=N(n*n),l=N(2n*N(s*s)),r=N(i*o),d=t+n,g=N(N(d*d)-o-a),u=r+a,m=u-l,h=r-a,b=N(g*m),k=N(u*h),T=N(g*h),I=N(m*u);return new De(b,k,I,T)}add(t){const{X:n,Y:s,Z:i,T:o}=this,{X:a,Y:l,Z:r,T:d}=$i(t),g=yi,u=xi,m=N(n*a),h=N(s*l),b=N(o*u*d),k=N(i*r),T=N((n+s)*(a+l)-m-h),I=N(k-b),R=N(k+b),A=N(h-g*m),w=N(T*I),L=N(R*A),C=N(T*A),p=N(I*R);return new De(w,L,p,C)}subtract(t){return this.add($i(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return fn;if(Ot(t,1n,_s),t===1n)return this;if(this.equals(Yt))return ip(t).p;let s=fn,i=Yt;for(let o=this;t>0n;o=o.double(),t>>=1n)t&1n?s=s.add(o):n&&(i=i.add(o));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(fn))return{x:0n,y:1n};const i=Kg(s,ke);N(s*i)!==1n&&he("invalid inverse");const o=N(t*i),a=N(n*i);return{x:o,y:a}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=dc(n);return s[31]|=t&1n?128:0,s}toHex(){return ac(this.toBytes())}clearCofactor(){return this.multiply(Ps(Ng),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(_s/2n,!1).double();return _s%2n&&(t=t.add(this)),t.is0()}}const Yt=new De(Za,er,1n,N(Za*er)),fn=new De(0n,1n,1n,0n);De.BASE=Yt;De.ZERO=fn;const dc=e=>rc(oc(Ot(e,0n,Qi),Bo)).reverse(),uc=e=>Ps("0x"+ac(ic(_t(e)).reverse())),We=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=ke;return n},Wg=e=>{const n=e*e%ke*e%ke,s=We(n,2n)*n%ke,i=We(s,1n)*e%ke,o=We(i,5n)*i%ke,a=We(o,10n)*o%ke,l=We(a,20n)*a%ke,r=We(l,40n)*l%ke,d=We(r,80n)*r%ke,g=We(d,80n)*r%ke,u=We(g,10n)*o%ke;return{pow_p_5_8:We(u,2n)*e%ke,b2:n}},nr=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,Gg=(e,t)=>{const n=N(t*t*t),s=N(n*n*t),i=Wg(e*s).pow_p_5_8;let o=N(e*n*i);const a=N(t*o*o),l=o,r=N(o*nr),d=a===e,g=a===N(-e),u=a===N(-e*nr);return d&&(o=l),(g||u)&&(o=r),(N(o)&1n)===1n&&(o=N(-o)),{isValid:d||g,value:o}},Yi=e=>cc(uc(e)),Ho=(...e)=>pc.sha512Async(Xn(...e)),Jg=(...e)=>qg("sha512")(Xn(...e)),gc=e=>{const t=e.slice(0,Qt);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(Qt,Bo),s=Yi(t),i=Yt.multiply(s),o=i.toBytes();return{head:t,prefix:n,scalar:s,point:i,pointBytes:o}},zo=e=>Ho(_t(e,Qt)).then(gc),Vg=e=>gc(Jg(_t(e,Qt))),Qg=e=>zo(e).then(t=>t.pointBytes),Yg=e=>Ho(e.hashable).then(e.finish),Xg=(e,t,n)=>{const{pointBytes:s,scalar:i}=e,o=Yi(t),a=Yt.multiply(o).toBytes();return{hashable:Xn(a,s,n),finish:d=>{const g=cc(o+Yi(d)*i);return _t(Xn(a,dc(g)),Bo)}}},Zg=async(e,t)=>{const n=_t(e),s=await zo(t),i=await Ho(s.prefix,n);return Yg(Xg(s,i,n))},pc={sha512Async:async e=>{const t=zg(),n=Xn(e);return Zs(await t.digest("SHA-512",n.buffer))},sha512:void 0},ep=(e=jg(Qt))=>e,tp={getExtendedPublicKeyAsync:zo,getExtendedPublicKey:Vg,randomSecretKey:ep},Fs=8,np=256,fc=Math.ceil(np/Fs)+1,Xi=2**(Fs-1),sp=()=>{const e=[];let t=Yt,n=t;for(let s=0;s<fc;s++){n=t,e.push(n);for(let i=1;i<Xi;i++)n=n.add(t),e.push(n);t=n.double()}return e};let sr;const ir=(e,t)=>{const n=t.negate();return e?n:t},ip=e=>{const t=sr||(sr=sp());let n=fn,s=Yt;const i=2**Fs,o=i,a=Ps(i-1),l=Ps(Fs);for(let r=0;r<fc;r++){let d=Number(e&a);e>>=l,d>Xi&&(d-=o,e+=1n);const g=r*Xi,u=g,m=g+Math.abs(d)-1,h=r%2!==0,b=d<0;d===0?s=s.add(ir(h,t[u])):n=n.add(ir(b,t[m]))}return e!==0n&&he("invalid wnaf"),{p:n,f:s}},wi="openclaw-device-identity-v1";function Zi(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function hc(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),i=new Uint8Array(s.length);for(let o=0;o<s.length;o+=1)i[o]=s.charCodeAt(o);return i}function op(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function mc(e){const t=await crypto.subtle.digest("SHA-256",e.slice().buffer);return op(new Uint8Array(t))}async function ap(){const e=tp.randomSecretKey(),t=await Qg(e);return{deviceId:await mc(t),publicKey:Zi(t),privateKey:Zi(e)}}async function jo(){try{const n=localStorage.getItem(wi);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const i=await mc(hc(s.publicKey));if(i!==s.deviceId){const o={...s,deviceId:i};return localStorage.setItem(wi,JSON.stringify(o)),{deviceId:i,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await ap(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(wi,JSON.stringify(t)),e}async function rp(e,t){const n=hc(e),s=new TextEncoder().encode(t),i=await Zg(s,n);return Zi(i)}async function Et(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function lp(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await Et(e)}catch(n){e.devicesError=String(n)}}async function cp(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await Et(e)}catch(s){e.devicesError=String(s)}}async function dp(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await jo(),i=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&tc({deviceId:s.deviceId,role:i,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await Et(e)}catch(n){e.devicesError=String(n)}}async function up(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await jo();t.deviceId===s.deviceId&&nc({deviceId:s.deviceId,role:t.role}),await Et(e)}catch(s){e.devicesError=String(s)}}function gp(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function pp(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function Ko(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=gp(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);fp(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function fp(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=Vt(t.file??{}))}async function hp(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},i=pp(t,{file:s,baseHash:n});if(!i){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(i.method,i.params),e.execApprovalsDirty=!1,await Ko(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function mp(e,t,n){const s=Vt(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});ql(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function vp(e,t){const n=Vt(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});Wl(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function qo(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function en(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const n=t?.includeGlobal??e.sessionsIncludeGlobal,s=t?.includeUnknown??e.sessionsIncludeUnknown,i=t?.activeMinutes??Pe(e.sessionsFilterActive,0),o=t?.limit??Pe(e.sessionsFilterLimit,0),a={includeGlobal:n,includeUnknown:s};i>0&&(a.activeMinutes=i),o>0&&(a.limit=o);const l=await e.client.request("sessions.list",a);l&&(e.sessionsResult=l)}catch(n){e.sessionsError=String(n)}finally{e.sessionsLoading=!1}}}async function bp(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await en(e)}catch(i){e.sessionsError=String(i)}}async function yp(e,t){if(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))return!1;e.sessionsLoading=!0,e.sessionsError=null;try{return await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),!0}catch(s){return e.sessionsError=String(s),!1}finally{e.sessionsLoading=!1}}async function xp(e,t){return await yp(e,t)?(await en(e),!0):!1}function yn(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function ei(e){return e instanceof Error?e.message:String(e)}async function Xt(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=e.sessionKey;let s;if(n){const o=n.split(":");o.length>=2&&(s=o[1])}const i=await e.client.request("skills.status",{agentId:s});i&&(e.skillsReport=i)}catch(n){e.skillsError=ei(n)}finally{e.skillsLoading=!1}}}function $p(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function wp(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await Xt(e),yn(e,t,{kind:"success",message:n?"技能已启用":"技能已禁用"})}catch(s){const i=ei(s);e.skillsError=i,yn(e,t,{kind:"error",message:i})}finally{e.skillsBusyKey=null}}}async function kp(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const n=e.skillEdits[t]??"";await e.client.request("skills.update",{skillKey:t,apiKey:n}),await Xt(e),yn(e,t,{kind:"success",message:"API 密钥已保存"})}catch(n){const s=ei(n);e.skillsError=s,yn(e,t,{kind:"error",message:s})}finally{e.skillsBusyKey=null}}}async function Sp(e,t,n,s){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const i=await e.client.request("skills.install",{name:n,installId:s,timeoutMs:12e4});await Xt(e),yn(e,t,{kind:"success",message:i?.message??"Installed"})}catch(i){const o=ei(i);e.skillsError=o,yn(e,t,{kind:"error",message:o})}finally{e.skillsBusyKey=null}}}const vc={agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",nodes:"/nodes",chat:"/chat",config:"/config",debug:"/debug",logs:"/logs"},bc=new Map(Object.entries(vc).map(([e,t])=>[t,e]));function tn(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function Zn(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function Wo(e,t=""){const n=tn(t),s=vc[e];return n?`${n}${s}`:s}function yc(e,t=""){const n=tn(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let i=Zn(s).toLowerCase();return i.endsWith("/index.html")&&(i="/"),i==="/"?"chat":bc.get(i)??null}function xc(e){let t=Zn(e);if(t.endsWith("/index.html")&&(t=Zn(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const i=`/${n.slice(s).join("/")}`.toLowerCase();if(bc.has(i)){const o=n.slice(0,s);return o.length?`/${o.join("/")}`:""}}return`/${n.join("/")}`}const $c="openclaw.control.settings.v1";function Ap(){const t={gatewayUrl:(()=>{const n=location.protocol==="https:"?"wss":"ws",s=typeof window<"u"&&typeof window.__OPENCLAW_CONTROL_UI_BASE_PATH__=="string"&&window.__OPENCLAW_CONTROL_UI_BASE_PATH__.trim(),i=s?tn(s):xc(location.pathname);return`${n}://${location.host}${i}`})(),token:"",sessionKey:"main",lastActiveSessionKey:"main",theme:"system",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem($c);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?s.gatewayUrl.trim():t.gatewayUrl,token:typeof s.token=="string"?s.token:t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed,locale:_o(s.locale)?s.locale:void 0}}catch{return t}}function Cp(e){localStorage.setItem($c,JSON.stringify(e))}const fs=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,Tp=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,hs=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},_p=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const i=globalThis.document??null;if(!i){t();return}const o=i.documentElement,a=i,l=Tp();if(!!a.startViewTransition&&!l){let d=.5,g=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")d=fs(n.pointerClientX/window.innerWidth),g=fs(n.pointerClientY/window.innerHeight);else if(n?.element){const u=n.element.getBoundingClientRect();u.width>0&&u.height>0&&typeof window<"u"&&(d=fs((u.left+u.width/2)/window.innerWidth),g=fs((u.top+u.height/2)/window.innerHeight))}o.style.setProperty("--theme-switch-x",`${d*100}%`),o.style.setProperty("--theme-switch-y",`${g*100}%`),o.classList.add("theme-transition");try{const u=a.startViewTransition?.(()=>{t()});u?.finished?u.finished.finally(()=>hs(o)):hs(o)}catch{hs(o),t()}return}t(),hs(o)};function Ep(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Go(e){return e==="system"?Ep():e}function At(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,Cp(n),t.theme!==e.theme&&(e.theme=t.theme,ti(e,Go(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey,e.sessionKey=n.sessionKey}function wc(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&At(e,{...e.settings,lastActiveSessionKey:n})}function Rp(e){if(!window.location.search&&!window.location.hash)return;const t=new URL(window.location.href),n=new URLSearchParams(t.search),s=new URLSearchParams(t.hash.startsWith("#")?t.hash.slice(1):t.hash),i=n.get("token")??s.get("token"),o=n.get("password")??s.get("password"),a=n.get("session")??s.get("session"),l=n.get("gatewayUrl")??s.get("gatewayUrl");let r=!1;if(i!=null){const g=i.trim();g&&g!==e.settings.token&&At(e,{...e.settings,token:g}),n.delete("token"),s.delete("token"),r=!0}if(o!=null&&(n.delete("password"),s.delete("password"),r=!0),a!=null){const g=a.trim();g&&(e.sessionKey=g,At(e,{...e.settings,sessionKey:g,lastActiveSessionKey:g}))}if(l!=null){const g=l.trim();g&&g!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=g),n.delete("gatewayUrl"),s.delete("gatewayUrl"),r=!0}if(!r)return;t.search=n.toString();const d=s.toString();t.hash=d?`#${d}`:"",window.history.replaceState({},"",t.toString())}function Ip(e,t){Ac(e,t,{refreshPolicy:"always",syncUrl:!0})}function Lp(e,t,n){_p({nextTheme:t,applyTheme:()=>{e.theme=t,At(e,{...e.settings,theme:t}),ti(e,Go(t))},context:n,currentTheme:e.theme})}async function kc(e){if(e.tab==="overview"&&await Tc(e),e.tab==="channels"&&await Up(e),e.tab==="instances"&&await qo(e),e.tab==="sessions"&&await en(e),e.tab==="cron"&&await Ns(e),e.tab==="skills"&&await Xt(e),e.tab==="agents"){await Io(e),await zn(e),await ze(e);const t=e.agentsList?.agents?.map(s=>s.id)??[];t.length>0&&jl(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(zl(e,n),e.agentsPanel==="skills"&&Un(e,n),e.agentsPanel==="channels"&&Re(e,!1),e.agentsPanel==="cron"&&Ns(e))}e.tab==="nodes"&&(await Qs(e),await Et(e),await ze(e),await Ko(e)),e.tab==="chat"&&(await kf(e),Xt(e),is(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await Gl(e),await ze(e)),e.tab==="debug"&&(await Vs(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Ro(e,{reset:!0}),Nl(e,!0))}function Mp(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?tn(e):xc(window.location.pathname)}function Dp(e){e.theme=e.settings.theme??"system",ti(e,Go(e.theme))}function ti(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function Pp(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&ti(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function Fp(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function Np(e,t){if(typeof window>"u")return;const n=yc(window.location.pathname,e.basePath)??"chat";Sc(e,n),Cc(e,n,t)}function Op(e){if(typeof window>"u")return;const t=yc(window.location.pathname,e.basePath);if(!t)return;const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,At(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),Sc(e,t)}function Sc(e,t){Ac(e,t,{refreshPolicy:"connected"})}function Ac(e,t,n){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ol(e):Ul(e),t==="debug"?Bl(e):Hl(e),(n.refreshPolicy==="always"||e.connected)&&kc(e),n.syncUrl&&Cc(e,t,!1)}function Cc(e,t,n){if(typeof window>"u")return;const s=Zn(Wo(t,e.basePath)),i=Zn(window.location.pathname),o=new URL(window.location.href);t==="chat"&&e.sessionKey?o.searchParams.set("session",e.sessionKey):o.searchParams.delete("session"),i!==s&&(o.pathname=s),n?window.history.replaceState({},"",o.toString()):window.history.pushState({},"",o.toString())}async function Tc(e){await Promise.all([Re(e,!1),qo(e),en(e),as(e),Vs(e)])}async function Up(e){await Promise.all([Re(e,!0),Gl(e),ze(e)])}async function Ns(e){const t=e;if(await Promise.all([Re(e,!1),as(t),Xs(t),fg(t)]),t.cronRunsScope==="all"){await xt(t,null);return}t.cronRunsJobId&&await xt(t,t.cronRunsJobId)}const or=50,Bp=80,Hp=12e4;function Fe(e){if(typeof e!="string")return null;const t=e.trim();return t||null}function dn(e,t){const n=Fe(t);if(!n)return null;const s=Fe(e);if(s){const o=`${s}/`;if(n.toLowerCase().startsWith(o.toLowerCase())){const a=n.slice(o.length).trim();if(a)return`${s}/${a}`}return`${s}/${n}`}const i=n.indexOf("/");if(i>0){const o=n.slice(0,i).trim(),a=n.slice(i+1).trim();if(o&&a)return`${o}/${a}`}return n}function zp(e){return Array.isArray(e)?e.map(t=>Fe(t)).filter(t=>!!t):[]}function jp(e){if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,i=Fe(s.provider),o=Fe(s.model);if(!i||!o)continue;const a=Fe(s.reason)?.replace(/_/g," ")??Fe(s.code)??(typeof s.status=="number"?`HTTP ${s.status}`:null)??Fe(s.error)??"error";t.push({provider:i,model:o,reason:a})}return t}function Kp(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(i=>{if(!i||typeof i!="object")return null;const o=i;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(i=>!!i);return s.length===0?null:s.join(`
`)}function ar(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=Kp(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=Vl(n,Hp);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function qp(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function Wp(e){if(e.toolStreamOrder.length<=or)return;const t=e.toolStreamOrder.length-or,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function Gp(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function eo(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),Gp(e)}function Jp(e,t=!1){if(t){eo(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>eo(e),Bp))}function ni(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],eo(e)}const Vp=5e3,Qp=8e3;function Yp(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},Vp))}function _c(e,t,n){const s=typeof t.sessionKey=="string"?t.sessionKey:void 0;return s&&s!==e.sessionKey?{accepted:!1}:!e.chatRunId&&n?.allowSessionScopedWhenIdle&&s?{accepted:!0,sessionKey:s}:!s&&e.chatRunId&&t.runId!==e.chatRunId?{accepted:!1}:e.chatRunId&&t.runId!==e.chatRunId?{accepted:!1}:e.chatRunId?{accepted:!0,sessionKey:s}:{accepted:!1}}function Xp(e,t){const n=t.data??{},s=t.stream==="fallback"?"fallback":Fe(n.phase);if(t.stream==="lifecycle"&&s!=="fallback"&&s!=="fallback_cleared"||!_c(e,t,{allowSessionScopedWhenIdle:!0}).accepted)return;const o=dn(n.selectedProvider,n.selectedModel)??dn(n.fromProvider,n.fromModel),a=dn(n.activeProvider,n.activeModel)??dn(n.toProvider,n.toModel),l=dn(n.previousActiveProvider,n.previousActiveModel)??Fe(n.previousActiveModel);if(!o||!a||s==="fallback"&&o===a)return;const r=Fe(n.reasonSummary)??Fe(n.reason),d=(()=>{const g=zp(n.attemptSummaries);return g.length>0?g:jp(n.attempts).map(u=>`${dn(u.provider,u.model)??`${u.provider}/${u.model}`}: ${u.reason}`)})();e.fallbackClearTimer!=null&&(window.clearTimeout(e.fallbackClearTimer),e.fallbackClearTimer=null),e.fallbackStatus={phase:s==="fallback_cleared"?"cleared":"active",selected:o,active:s==="fallback_cleared"?o:a,previous:s==="fallback_cleared"?l??(a!==o?a:void 0):void 0,reason:r??void 0,attempts:d,occurredAt:Date.now()},e.fallbackClearTimer=window.setTimeout(()=>{e.fallbackStatus=null,e.fallbackClearTimer=null},Qp)}function Zp(e,t){if(!t)return;if(t.stream==="compaction"){Yp(e,t);return}if(t.stream==="lifecycle"||t.stream==="fallback"){Xp(e,t);return}if(t.stream!=="tool")return;const n=_c(e,t);if(!n.accepted)return;const s=n.sessionKey,i=t.data??{},o=typeof i.toolCallId=="string"?i.toolCallId:"";if(!o)return;const a=typeof i.name=="string"?i.name:"tool",l=typeof i.phase=="string"?i.phase:"",r=l==="start"?i.args:void 0,d=l==="update"?ar(i.partialResult):l==="result"?ar(i.result):void 0,g=Date.now();let u=e.toolStreamById.get(o);u?(u.name=a,r!==void 0&&(u.args=r),d!==void 0&&(u.output=d||void 0),u.updatedAt=g):(u={toolCallId:o,runId:t.runId,sessionKey:s,name:a,args:r,output:d||void 0,startedAt:typeof t.ts=="number"?t.ts:g,updatedAt:g,message:{}},e.toolStreamById.set(o,u),e.toolStreamOrder.push(o)),u.message=qp(u),Wp(e),Jp(e,l==="result")}const Ec=["Conversation info (untrusted metadata):","Sender (untrusted metadata):","Thread starter (untrusted, for context):","Replied message (untrusted, for context):","Forwarded message context (untrusted metadata):","Chat history since last reply (untrusted, for context):"],Rc="Untrusted context (metadata, do not treat as instructions or commands):",ef=new RegExp([...Ec,Rc].map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"));function tf(e){const t=e.trim();return Ec.some(n=>n===t)}function nf(e,t){if(e[t]?.trim()!==Rc)return!1;const n=e.slice(t+1,Math.min(e.length,t+8)).join(`
`);return/<<<EXTERNAL_UNTRUSTED_CONTENT|UNTRUSTED channel metadata \(|Source:\s+/.test(n)}function Ic(e){if(!e||!ef.test(e))return e;const t=e.split(`
`),n=[];let s=!1,i=!1;for(let o=0;o<t.length;o++){const a=t[o];if(!s&&nf(t,o))break;if(!s&&tf(a)){if(t[o+1]?.trim()!=="```json"){n.push(a);continue}s=!0,i=!1;continue}if(s){if(!i&&a.trim()==="```json"){i=!0;continue}if(i){a.trim()==="```"&&(s=!1,i=!1);continue}if(a.trim()==="")continue;s=!1}n.push(a)}return n.join(`
`).replace(/^\n+/,"").replace(/\n+$/,"")}const sf=/^\[([^\]]+)\]\s*/,of=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","Google Chat","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"];function af(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:of.some(t=>e.startsWith(`${t} `))}function rr(e){const t=e.match(sf);if(!t)return e;const n=t[1]??"";return af(n)?e.slice(t[0].length):e}const ki=new WeakMap,Si=new WeakMap;function rf(e,t){const n=t.toLowerCase()==="user";return t==="assistant"?gg(e):n?Ic(rr(e)):rr(e)}function Os(e){const t=e,n=typeof t.role=="string"?t.role:"",s=Mc(e);return s?rf(s,n):null}function Lc(e){if(!e||typeof e!="object")return Os(e);const t=e;if(ki.has(t))return ki.get(t)??null;const n=Os(e);return ki.set(t,n),n}function lr(e){const n=e.content,s=[];if(Array.isArray(n))for(const l of n){const r=l;if(r.type==="thinking"&&typeof r.thinking=="string"){const d=r.thinking.trim();d&&s.push(d)}}if(s.length>0)return s.join(`
`);const i=Mc(e);if(!i)return null;const a=[...i.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(l=>(l[1]??"").trim()).filter(Boolean);return a.length>0?a.join(`
`):null}function lf(e){if(!e||typeof e!="object")return lr(e);const t=e;if(Si.has(t))return Si.get(t)??null;const n=lr(e);return Si.set(t,n),n}function Mc(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(i=>{const o=i;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(i=>typeof i=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function cf(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}let cr=!1;function dr(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function df(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function uf(){cr||(cr=!0,console.warn("[uuid] crypto API missing; falling back to weak randomness"))}function si(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),dr(t)}return uf(),dr(df())}const gf=/^\s*NO_REPLY\s*$/;function jn(e){return gf.test(e)}function Es(e){if(!e||typeof e!="object")return!1;const t=e;if((typeof t.role=="string"?t.role.toLowerCase():"")!=="assistant")return!1;if(typeof t.text=="string")return jn(t.text);const s=Os(e);return typeof s=="string"&&jn(s)}async function Us(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200}),n=Array.isArray(t.messages)?t.messages:[];e.chatMessages=n.filter(s=>!Es(s)),e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function pf(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}function Dc(e,t){if(!e||typeof e!="object")return null;const n=e,s=n.role;if(typeof s=="string"){if((t.roleCaseSensitive?s:s.toLowerCase())!=="assistant")return null}else if(t.roleRequirement==="required")return null;return t.requireContentArray?Array.isArray(n.content)?n:null:!("content"in n)&&!(t.allowTextField&&"text"in n)?null:n}function ff(e){return Dc(e,{roleRequirement:"required",roleCaseSensitive:!0,requireContentArray:!0})}function ur(e){return Dc(e,{roleRequirement:"optional",allowTextField:!0})}async function hf(e,t,n){if(!e.client||!e.connected)return null;const s=t.trim(),i=n&&n.length>0;if(!s&&!i)return null;const o=Date.now(),a=[];if(s&&a.push({type:"text",text:s}),i)for(const d of n)a.push({type:"image",source:{type:"base64",media_type:d.mimeType,data:d.dataUrl}});e.chatMessages=[...e.chatMessages,{role:"user",content:a,timestamp:o}],e.chatSending=!0,e.lastError=null;const l=si();e.chatRunId=l,e.chatStream="",e.chatStreamStartedAt=o;const r=i?n.map(d=>{const g=pf(d.dataUrl);return g?{type:"image",mimeType:g.mimeType,content:g.content}:null}).filter(d=>d!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:s,deliver:!1,idempotencyKey:l,attachments:r}),l}catch(d){const g=String(d);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=g,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+g}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function mf(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function vf(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId){if(t.state==="final"){const n=ur(t.message);return n&&!Es(n)?(e.chatMessages=[...e.chatMessages,n],null):"final"}return null}if(t.state==="delta"){const n=Os(t.message);if(typeof n=="string"&&!jn(n)){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else if(t.state==="final"){const n=ur(t.message);n&&!Es(n)?e.chatMessages=[...e.chatMessages,n]:e.chatStream?.trim()&&!jn(e.chatStream)&&(e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:e.chatStream}],timestamp:Date.now()}]),e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null}else if(t.state==="aborted"){const n=ff(t.message);if(n&&!Es(n))e.chatMessages=[...e.chatMessages,n];else{const s=e.chatStream??"";s.trim()&&!jn(s)&&(e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:s}],timestamp:Date.now()}])}e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null}else t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}const Pc=120;function Fc(e){return e.chatSending||!!e.chatRunId}function bf(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}function yf(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/new"||n==="/reset"?!0:n.startsWith("/new ")||n.startsWith("/reset ")}async function Nc(e){e.connected&&(e.chatMessage="",await mf(e))}function xf(e,t,n,s){const i=t.trim(),o=!!(n&&n.length>0);!i&&!o||(e.chatQueue=[...e.chatQueue,{id:si(),text:i,createdAt:Date.now(),attachments:o?n?.map(a=>({...a})):void 0,refreshSessions:s}])}async function Oc(e,t,n){ni(e);const s=await hf(e,t,n?.attachments),i=!!s;return!i&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!i&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),i&&wc(e,e.sessionKey),i&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),i&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),is(e),i&&!e.chatRunId&&Uc(e),i&&n?.refreshSessions&&s&&e.refreshSessionsAfterChat.add(s),i}async function Uc(e){if(!e.connected||Fc(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await Oc(e,t.text,{attachments:t.attachments,refreshSessions:t.refreshSessions})||(e.chatQueue=[t,...e.chatQueue])}function $f(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function wf(e,t,n){if(!e.connected)return;const s=e.chatMessage,i=(t??e.chatMessage).trim(),o=e.chatAttachments??[],a=t==null?o:[],l=a.length>0;if(!i&&!l)return;if(bf(i)){await Nc(e);return}const r=yf(i);if(t==null&&(e.chatMessage="",e.chatAttachments=[]),Fc(e)){xf(e,i,a,r);return}await Oc(e,i,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:l?a:void 0,previousAttachments:t==null?o:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:r})}async function kf(e,t){await Promise.all([Us(e),en(e,{activeMinutes:Pc}),to(e)]),is(e)}const Sf=Uc;function Af(e){const t=Eo(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function Cf(e,t){const n=tn(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function to(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=Af(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=Cf(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const i=await s.json(),o=typeof i.avatarUrl=="string"?i.avatarUrl.trim():"";e.chatAvatarUrl=o||null}catch{e.chatAvatarUrl=null}}function Tf(e){if(!e||e.state!=="final")return!1;if(!e.message||typeof e.message!="object")return!0;const t=e.message,n=typeof t.role=="string"?t.role.toLowerCase():"";return!!(n&&n!=="assistant")}function gr(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}const _f=50,Ef=200,Rf="Assistant";function Jo(e){const t=gr(e?.name,_f)??Rf,n=gr(e?.avatar??void 0,Ef)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}async function Bc(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const i=await e.client.request("agent.identity.get",s);if(!i)return;const o=Jo(i);e.assistantName=o.name,e.assistantAvatar=o.avatar,e.assistantAgentId=o.agentId??null}catch{}}function no(e){return typeof e=="object"&&e!==null}function If(e){if(!no(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!no(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const i=typeof e.createdAtMs=="number"?e.createdAtMs:0,o=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!i||!o?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:i,expiresAtMs:o}}function Lf(e){if(!no(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function Hc(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function Mf(e,t){const n=Hc(e).filter(s=>s.id!==t.id);return n.push(t),n}function pr(e,t){return Hc(e).filter(n=>n.id!==t)}function Df(e){const t=e.scopes.join(","),n=e.token??"";return["v2",e.deviceId,e.clientId,e.clientMode,e.role,t,String(e.signedAtMs),n,e.nonce].join("|")}const zc={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"openclaw-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"openclaw-macos",IOS_APP:"openclaw-ios",ANDROID_APP:"openclaw-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"openclaw-probe"},fr=zc,so={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(zc));new Set(Object.values(so));const xe={AUTH_REQUIRED:"AUTH_REQUIRED",AUTH_UNAUTHORIZED:"AUTH_UNAUTHORIZED",AUTH_TOKEN_MISSING:"AUTH_TOKEN_MISSING",AUTH_TOKEN_MISMATCH:"AUTH_TOKEN_MISMATCH",AUTH_TOKEN_NOT_CONFIGURED:"AUTH_TOKEN_NOT_CONFIGURED",AUTH_PASSWORD_MISSING:"AUTH_PASSWORD_MISSING",AUTH_PASSWORD_MISMATCH:"AUTH_PASSWORD_MISMATCH",AUTH_PASSWORD_NOT_CONFIGURED:"AUTH_PASSWORD_NOT_CONFIGURED",AUTH_DEVICE_TOKEN_MISMATCH:"AUTH_DEVICE_TOKEN_MISMATCH",AUTH_RATE_LIMITED:"AUTH_RATE_LIMITED",AUTH_TAILSCALE_IDENTITY_MISSING:"AUTH_TAILSCALE_IDENTITY_MISSING",AUTH_TAILSCALE_PROXY_MISSING:"AUTH_TAILSCALE_PROXY_MISSING",AUTH_TAILSCALE_WHOIS_FAILED:"AUTH_TAILSCALE_WHOIS_FAILED",AUTH_TAILSCALE_IDENTITY_MISMATCH:"AUTH_TAILSCALE_IDENTITY_MISMATCH",CONTROL_UI_DEVICE_IDENTITY_REQUIRED:"CONTROL_UI_DEVICE_IDENTITY_REQUIRED",DEVICE_IDENTITY_REQUIRED:"DEVICE_IDENTITY_REQUIRED",PAIRING_REQUIRED:"PAIRING_REQUIRED"};function Pf(e){if(!e||typeof e!="object"||Array.isArray(e))return null;const t=e.code;return typeof t=="string"&&t.trim().length>0?t:null}class hr extends Error{constructor(t){super(t.message),this.name="GatewayRequestError",this.gatewayCode=t.code,this.details=t.details}}function Ff(e){return Pf(e?.details)}const Nf=4008;class Of{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.pendingConnectError=void 0,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener("open",()=>this.queueConnect()),this.ws.addEventListener("message",t=>this.handleMessage(String(t.data??""))),this.ws.addEventListener("close",t=>{const n=String(t.reason??""),s=this.pendingConnectError;this.pendingConnectError=void 0,this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n,error:s}),this.scheduleReconnect()}),this.ws.addEventListener("error",()=>{}))}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let i=null,o=!1,a=this.opts.token;if(t){i=await jo();const g=Fg({deviceId:i.deviceId,role:s})?.token;a=g??this.opts.token,o=!!(g&&this.opts.token)}const l=a||this.opts.password?{token:a,password:this.opts.password}:void 0;let r;if(t&&i){const g=Date.now(),u=this.connectNonce??"",m=Df({deviceId:i.deviceId,clientId:this.opts.clientName??fr.CONTROL_UI,clientMode:this.opts.mode??so.WEBCHAT,role:s,scopes:n,signedAtMs:g,token:a??null,nonce:u}),h=await rp(i.privateKey,m);r={id:i.deviceId,publicKey:i.publicKey,signature:h,signedAt:g,nonce:u}}const d={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??fr.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??so.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:r,caps:[],auth:l,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",d).then(g=>{g?.auth?.deviceToken&&i&&tc({deviceId:i.deviceId,role:g.auth.role??s,token:g.auth.deviceToken,scopes:g.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(g)}).catch(g=>{g instanceof hr?this.pendingConnectError={code:g.gatewayCode,message:g.message,details:g.details}:this.pendingConnectError=void 0,o&&i&&nc({deviceId:i.deviceId,role:s}),this.ws?.close(Nf,"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const i=n;if(i.event==="connect.challenge"){const a=i.payload,l=a&&typeof a.nonce=="string"?a.nonce:null;l&&(this.connectNonce=l,this.sendConnect());return}const o=typeof i.seq=="number"?i.seq:null;o!==null&&(this.lastSeq!==null&&o>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:o}),this.lastSeq=o);try{this.opts.onEvent?.(i)}catch(a){console.error("[gateway] event handler error:",a)}return}if(s.type==="res"){const i=n,o=this.pending.get(i.id);if(!o)return;this.pending.delete(i.id),i.ok?o.resolve(i.payload):o.reject(new hr({code:i.error?.code??"UNAVAILABLE",message:i.error?.message??"request failed",details:i.error?.details}));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=si(),i={type:"req",id:s,method:t,params:n},o=new Promise((a,l)=>{this.pending.set(s,{resolve:r=>a(r),reject:l})});return this.ws.send(JSON.stringify(i)),o}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function Ai(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const i=t.mainKey?.trim()||"main",o=t.defaultAgentId?.trim();return n==="main"||n===i||o&&(n===`agent:${o}:main`||n===`agent:${o}:${i}`)?s:n}function Uf(e,t){if(!t?.mainSessionKey)return;const n=Ai(e.sessionKey,t),s=Ai(e.settings.sessionKey,t),i=Ai(e.settings.lastActiveSessionKey,t),o=n||s||e.sessionKey,a={...e.settings,sessionKey:s||o,lastActiveSessionKey:i||o},l=a.sessionKey!==e.settings.sessionKey||a.lastActiveSessionKey!==e.settings.lastActiveSessionKey;o!==e.sessionKey&&(e.sessionKey=o),l&&At(e,a)}function es(e){e.lastError=null,e.lastErrorCode=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null;const t=e.client;t&&(t.stop(),e.client=null);const n=new Of({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"openclaw-control-ui",mode:"webchat",instanceId:e.clientInstanceId,onHello:s=>{e.client===n&&(e.connected=!0,e.lastError=null,e.lastErrorCode=null,e.hello=s,Kf(e,s),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,ni(e),Bc(e),Io(e),zn(e),Qs(e,{quiet:!0}),Et(e,{quiet:!0}),kc(e))},onClose:({code:s,reason:i,error:o})=>{if(e.client===n)if(e.connected=!1,e.lastErrorCode=Ff(o)??(typeof o?.code=="string"?o.code:null),s!==1012){if(o?.message){e.lastError=o.message;return}e.lastError=`disconnected (${s}): ${i||"no reason"}`}else e.lastError=null,e.lastErrorCode=null},onEvent:s=>{e.client===n&&Bf(e,s)},onGap:({expected:s,received:i})=>{e.client===n&&(e.lastError=`event gap detected (expected seq ${s}, got ${i}); refresh recommended`,e.lastErrorCode=null)}});e.client=n,n.start()}function Bf(e,t){try{jf(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function Hf(e,t,n){if(n!=="final"&&n!=="error"&&n!=="aborted")return;ni(e),Sf(e);const s=t?.runId;!s||!e.refreshSessionsAfterChat.has(s)||(e.refreshSessionsAfterChat.delete(s),n==="final"&&en(e,{activeMinutes:Pc}))}function zf(e,t){t?.sessionKey&&wc(e,t.sessionKey);const n=vf(e,t);Hf(e,t,n),n==="final"&&Tf(t)&&Us(e)}function jf(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;Zp(e,t.payload);return}if(t.event==="chat"){zf(e,t.payload);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&Ns(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&Et(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=If(t.payload);if(n){e.execApprovalQueue=Mf(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=pr(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=Lf(t.payload);n&&(e.execApprovalQueue=pr(e.execApprovalQueue,n.id));return}if(t.event===Uu){const n=t.payload;e.updateAvailable=n?.updateAvailable??null}}function Kf(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&Uf(e,n.sessionDefaults),e.updateAvailable=n?.updateAvailable??null}async function jc(e,t){e.authLoading=!0,e.authError=null;try{(e.isAuthenticated||e.currentUser)&&Vo(e);const n=await bn.login(t);return n.success&&n.user&&n.token?(e.isAuthenticated=!0,e.currentUser=n.user,await Wc(e,n.user,n.token),!0):(e.authError=n.error||"登录失败",!1)}catch{return e.authError="网络错误",!1}finally{e.authLoading=!1}}async function Kc(e,t){e.authLoading=!0,e.authError=null;try{const n=await bn.register(t);return n.success&&n.user&&n.token?(e.isAuthenticated=!0,e.currentUser=n.user,await Wc(e,n.user,n.token),!0):(e.authError=n.error||"注册失败",!1)}catch{return e.authError="网络错误",!1}finally{e.authLoading=!1}}async function qc(e,t){e.authLoading=!0,e.authError=null;try{const n=await bn.forgotPassword(t);return n.success?(e.authError="如果该邮箱存在，重置链接已发送。",!0):(e.authError=n.error||"发送重置邮件失败",!1)}catch{return e.authError="网络错误",!1}finally{e.authLoading=!1}}function Vo(e){bn.logout(),e.isAuthenticated=!1,e.currentUser=null,e.authView="login",e.client&&(e.client.close(),e.client=null),e.connected=!1;const t=new URL(window.location.href);t.searchParams.delete("session"),window.history.replaceState({},"",t.toString())}async function Wc(e,t,n){if(!t)return;await new Promise(a=>setTimeout(a,500));const s=`${t.agentId}:${t.gatewayToken}`,i=`agent:${t.agentId.toLowerCase()}:main`;e.applySettings({...e.settings,token:s,sessionKey:i,lastActiveSessionKey:i});const o=new URL(window.location.href);o.searchParams.set("session",i),window.history.replaceState({},"",o.toString());try{es(e)}catch(a){console.error("Failed to connect to gateway:",a),e.applySettings({...e.settings,token:"",sessionKey:i,lastActiveSessionKey:i}),es(e)}}async function qf(e){if(!bn.isAuthenticated())return!1;try{const t=await bn.getCurrentUser();if(t.success&&t.user){e.isAuthenticated=!0,e.currentUser=t.user;const n=`${t.user.agentId}:${t.user.gatewayToken}`,s=`agent:${t.user.agentId.toLowerCase()}:main`;e.applySettings({...e.settings,token:n,sessionKey:s,lastActiveSessionKey:s});const i=new URL(window.location.href);return i.searchParams.set("session",s),window.history.replaceState({},"",i.toString()),es(e),!0}return!1}catch{return!1}}const Wf=Object.freeze(Object.defineProperty({__proto__:null,handleForgotPassword:qc,handleLogin:jc,handleLogout:Vo,handleRegister:Kc,tryRestoreSession:qf},Symbol.toStringTag,{value:"Module"}));var Gf=Object.defineProperty,Jf=Object.getOwnPropertyDescriptor,$n=(e,t,n,s)=>{for(var i=s>1?void 0:s?Jf(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,n,i):a(i))||i);return s&&i&&Gf(t,n,i),i};let Ct=class extends Wt{constructor(){super(...arguments),this.email="",this.password="",this.confirmPassword="",this.name=""}handleSubmit(e){if(e.preventDefault(),this.app.authView==="login"){const t={email:this.email,password:this.password};jc(this.app,t)}else if(this.app.authView==="register"){if(this.password!==this.confirmPassword){this.app.authError="两次输入的密码不一致";return}const t={email:this.email,password:this.password,name:this.name||void 0};Kc(this.app,t)}else this.app.authView==="forgot-password"&&qc(this.app,this.email)}switchView(e){this.app.authView=e,this.app.authError=null,this.email="",this.password="",this.confirmPassword="",this.name=""}render(){const e=this.app.authView==="login",t=this.app.authView==="register",n=this.app.authView==="forgot-password";return c`
      <div class="auth-container">
        <div class="logo">
          <div class="logo-icon">算</div>
          <h1>算力作战Skill中心</h1>
          <p>${e?"欢迎回来":t?"创建新账户":"重置您的密码"}</p>
        </div>

        ${this.app.authError?c`<div class="error-message">${this.app.authError}</div>`:null}

        <form @submit=${this.handleSubmit}>
          ${t?c`
                <div class="form-group">
                  <label for="name">姓名（可选）</label>
                  <input
                    type="text"
                    id="name"
                    .value=${this.name}
                    @input=${s=>this.name=s.target.value}
                    placeholder="您的姓名"
                    ?disabled=${this.app.authLoading}
                  />
                </div>
              `:null}

          <div class="form-group">
            <label for="email">邮箱</label>
            <input
              type="email"
              id="email"
              .value=${this.email}
              @input=${s=>this.email=s.target.value}
              placeholder="your@email.com"
              required
              ?disabled=${this.app.authLoading}
            />
          </div>

          ${n?null:c`
                <div class="form-group">
                  <label for="password">密码</label>
                  <input
                    type="password"
                    id="password"
                    .value=${this.password}
                    @input=${s=>this.password=s.target.value}
                    placeholder="请输入密码"
                    required
                    ?disabled=${this.app.authLoading}
                  />
                </div>
              `}

          ${t?c`
                <div class="form-group">
                  <label for="confirmPassword">确认密码</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    .value=${this.confirmPassword}
                    @input=${s=>this.confirmPassword=s.target.value}
                    placeholder="请再次输入密码"
                    required
                    ?disabled=${this.app.authLoading}
                  />
                </div>
              `:null}

          <button type="submit" class="btn btn-primary" ?disabled=${this.app.authLoading}>
            ${this.app.authLoading?c`<span class="loading-spinner"></span> 加载中...`:e?"登录":t?"创建账户":"发送重置链接"}
          </button>
        </form>

        <div class="auth-links">
          ${e?c`
                <a @click=${()=>this.switchView("forgot-password")}>忘记密码？</a>
                <span>|</span>
                <a @click=${()=>this.switchView("register")}>创建账户</a>
              `:c`
                <a @click=${()=>this.switchView("login")}>返回登录</a>
              `}
        </div>
      </div>
    `}};Ct.styles=_l`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #1e3a5f 100%);
      padding: 20px;
      font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
    }

    .auth-container {
      width: 100%;
      max-width: 440px;
      background: #ffffff;
      border-radius: 12px;
      padding: 48px 40px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
    }

    .logo {
      text-align: center;
      margin-bottom: 36px;
    }

    .logo-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 16px;
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      font-weight: 700;
      color: white;
      box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
    }

    .logo h1 {
      color: #1e293b;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin: 0 0 6px 0;
    }

    .logo p {
      color: #64748b;
      font-size: 14px;
      font-weight: 400;
      margin: 0;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      color: #374151;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .form-group input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background: #ffffff;
      color: #1e293b;
      font-size: 15px;
      box-sizing: border-box;
      transition: all 0.2s ease;
    }

    .form-group input:hover {
      border-color: #cbd5e1;
    }

    .form-group input:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .form-group input::placeholder {
      color: #94a3b8;
    }

    .btn {
      width: 100%;
      padding: 14px 20px;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .btn-primary {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: white;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
    }

    .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-secondary {
      background: transparent;
      color: #475569;
      border: 1px solid #e2e8f0;
    }

    .btn-secondary:hover {
      color: #1e293b;
      border-color: #cbd5e1;
      background: #f8fafc;
    }

    .error-message {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: #dc2626;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 500;
    }

    .success-message {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #16a34a;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 500;
    }

    .auth-links {
      text-align: center;
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid #e2e8f0;
    }

    .auth-links a {
      color: #2563eb;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.2s;
    }

    .auth-links a:hover {
      color: #1d4ed8;
      text-decoration: none;
    }

    .auth-links span {
      color: #94a3b8;
      margin: 0 12px;
      font-size: 13px;
    }

    .loading-spinner {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.4);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-right: 8px;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;$n([ss({type:Object})],Ct.prototype,"app",2);$n([y()],Ct.prototype,"email",2);$n([y()],Ct.prototype,"password",2);$n([y()],Ct.prototype,"confirmPassword",2);$n([y()],Ct.prototype,"name",2);Ct=$n([To("auth-view")],Ct);function Vf(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function Qf(e){const{state:t,callbacks:n,accountId:s}=e,i=Vf(t),o=(l,r,d={})=>{const{type:g="text",placeholder:u,maxLength:m,help:h}=d,b=t.values[l]??"",k=t.fieldErrors[l],T=`nostr-profile-${l}`;return g==="textarea"?c`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${T}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${r}
          </label>
          <textarea
            id="${T}"
            .value=${b}
            placeholder=${u??""}
            maxlength=${m??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${I=>{const R=I.target;n.onFieldChange(l,R.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${h?c`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${h}</div>`:f}
          ${k?c`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${k}</div>`:f}
        </div>
      `:c`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${T}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${r}
        </label>
        <input
          id="${T}"
          type=${g}
          .value=${b}
          placeholder=${u??""}
          maxlength=${m??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${I=>{const R=I.target;n.onFieldChange(l,R.value)}}
          ?disabled=${t.saving}
        />
        ${h?c`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${h}</div>`:f}
        ${k?c`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${k}</div>`:f}
      </div>
    `},a=()=>{const l=t.values.picture;return l?c`
      <div style="margin-bottom: 12px;">
        <img
          src=${l}
          alt="Profile picture preview"
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${r=>{const d=r.target;d.style.display="none"}}
          @load=${r=>{const d=r.target;d.style.display="block"}}
        />
      </div>
    `:f};return c`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">Edit Profile</div>
        <div style="font-size: 12px; color: var(--text-muted);">Account: ${s}</div>
      </div>

      ${t.error?c`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:f}

      ${t.success?c`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:f}

      ${a()}

      ${o("name","Username",{placeholder:"satoshi",maxLength:256,help:"Short username (e.g., satoshi)"})}

      ${o("displayName","Display Name",{placeholder:"Satoshi Nakamoto",maxLength:256,help:"Your full display name"})}

      ${o("about","Bio",{type:"textarea",placeholder:"Tell people about yourself...",maxLength:2e3,help:"A brief bio or description"})}

      ${o("picture","Avatar URL",{type:"url",placeholder:"https://example.com/avatar.jpg",help:"HTTPS URL to your profile picture"})}

      ${t.showAdvanced?c`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">Advanced</div>

              ${o("banner","Banner URL",{type:"url",placeholder:"https://example.com/banner.jpg",help:"HTTPS URL to a banner image"})}

              ${o("website","Website",{type:"url",placeholder:"https://example.com",help:"Your personal website"})}

              ${o("nip05","NIP-05 Identifier",{placeholder:"you@example.com",help:"Verifiable identifier (e.g., you@domain.com)"})}

              ${o("lud16","Lightning Address",{placeholder:"you@getalby.com",help:"Lightning address for tips (LUD-16)"})}
            </div>
          `:f}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!i}
        >
          ${t.saving?"Saving...":"Save & Publish"}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?"Importing...":"Import from Relays"}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?"Hide Advanced":"Show Advanced"}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          Cancel
        </button>
      </div>

      ${i?c`
              <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
                You have unsaved changes
              </div>
            `:f}
    </div>
  `}function Yf(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}async function Xf(e,t){await Xu(e,t),await Re(e,!0)}async function Zf(e){await Zu(e),await Re(e,!0)}async function eh(e){await eg(e),await Re(e,!0)}async function th(e){await Cs(e),await ze(e),await Re(e,!0)}async function nh(e){await ze(e),await Re(e,!0)}function sh(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...i]=n.split(":");if(!s||i.length===0)continue;const o=s.trim(),a=i.join(":").trim();o&&a&&(t[o]=a)}return t}function Gc(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function Jc(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function ih(e){const t=e.hello?.auth?.deviceToken?.trim();if(t)return`Bearer ${t}`;const n=e.settings.token.trim();if(n)return`Bearer ${n}`;const s=e.password.trim();return s?`Bearer ${s}`:null}function Vc(e){const t=ih(e);return t?{Authorization:t}:{}}function oh(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=Yf(n??void 0)}function ah(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function rh(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function lh(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function ch(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=Gc(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(Jc(n),{method:"PUT",headers:{"Content-Type":"application/json",...Vc(e)},body:JSON.stringify(t.values)}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const o=i?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:o,success:null,fieldErrors:sh(i?.details)};return}if(!i.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await Re(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function dh(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=Gc(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(Jc(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json",...Vc(e)},body:JSON.stringify({autoMerge:!0})}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const r=i?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:r,success:null};return}const o=i.merged??i.imported??null,a=o?{...t.values,...o}:t.values,l=!!(a.banner||a.website||a.nip05||a.lud16);e.nostrProfileFormState={...t,importing:!1,values:a,error:null,success:i.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:l},i.saved&&await Re(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}const mr="/__openclaw/control-ui-config.json";async function uh(e){if(typeof window>"u"||typeof fetch!="function")return;const t=tn(e.basePath??""),n=t?`${t}${mr}`:mr;try{const s=await fetch(n,{method:"GET",headers:{Accept:"application/json"},credentials:"same-origin"});if(!s.ok)return;const i=await s.json(),o=Jo({agentId:i.assistantAgentId??null,name:i.assistantName,avatar:i.assistantAvatar??null});e.assistantName=o.name,e.assistantAvatar=o.avatar,e.assistantAgentId=o.agentId??null}catch{}}function gh(e){e.basePath=Mp(),uh(e),Rp(e),Np(e,!0),Dp(e),Pp(e),window.addEventListener("popstate",e.popStateHandler),es(e),Qu(e),e.tab==="logs"&&Ol(e),e.tab==="debug"&&Bl(e)}function ph(e){ju(e)}function fh(e){window.removeEventListener("popstate",e.popStateHandler),Yu(e),Ul(e),Hl(e),e.client?.stop(),e.client=null,e.connected=!1,Fp(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function hh(e,t){if(!(e.tab==="chat"&&e.chatManualRefreshInFlight)){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&!e.chatLoading;is(e,n||s||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&Nl(e,t.has("tab")||t.has("logsAutoFollow"))}}const Qc="openclaw.control.usage.date-params.v1",mh="__default__",vh=/unexpected property ['"]mode['"]/i,bh=/unexpected property ['"]utcoffset['"]/i,yh=/invalid sessions\.usage params/i;let Ci=null;function Yc(){return typeof window<"u"&&window.localStorage?window.localStorage:typeof localStorage<"u"?localStorage:null}function xh(){const e=Yc();if(!e)return new Set;try{const t=e.getItem(Qc);if(!t)return new Set;const n=JSON.parse(t);return!n||!Array.isArray(n.unsupportedGatewayKeys)?new Set:new Set(n.unsupportedGatewayKeys.filter(s=>typeof s=="string").map(s=>s.trim()).filter(Boolean))}catch{return new Set}}function $h(e){const t=Yc();if(t)try{t.setItem(Qc,JSON.stringify({unsupportedGatewayKeys:Array.from(e)}))}catch{}}function Xc(){return Ci||(Ci=xh()),Ci}function wh(e){const t=e?.trim();if(!t)return mh;try{const n=new URL(t),s=n.pathname==="/"?"":n.pathname;return`${n.protocol}//${n.host}${s}`.toLowerCase()}catch{return t.toLowerCase()}}function Zc(e){return wh(e.settings?.gatewayUrl)}function kh(e){return!Xc().has(Zc(e))}function Sh(e){const t=Xc();t.add(Zc(e)),$h(t)}function Ah(e){const t=ed(e);return yh.test(t)&&(vh.test(t)||bh.test(t))}const Ch=e=>{const t=-e,n=t>=0?"+":"-",s=Math.abs(t),i=Math.floor(s/60),o=s%60;return o===0?`UTC${n}${i}`:`UTC${n}${i}:${o.toString().padStart(2,"0")}`},Th=(e,t)=>{if(t)return e==="utc"?{mode:"utc"}:{mode:"specific",utcOffset:Ch(new Date().getTimezoneOffset())}};function ed(e){if(typeof e=="string")return e;if(e instanceof Error&&typeof e.message=="string"&&e.message.trim())return e.message;if(e&&typeof e=="object")try{const t=JSON.stringify(e);if(t)return t}catch{}return"request failed"}async function io(e,t){const n=e.client;if(!(!n||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{const s=t?.startDate??e.usageStartDate,i=t?.endDate??e.usageEndDate,o=async r=>{const d=Th(e.usageTimeZone,r);return await Promise.all([n.request("sessions.usage",{startDate:s,endDate:i,...d,limit:1e3,includeContextWeight:!0}),n.request("usage.cost",{startDate:s,endDate:i,...d})])},a=(r,d)=>{r&&(e.usageResult=r),d&&(e.usageCostSummary=d)},l=kh(e);try{const[r,d]=await o(l);a(r,d)}catch(r){if(l&&Ah(r)){Sh(e);const[d,g]=await o(!1);a(d,g)}else throw r}}catch(s){e.usageError=ed(s)}finally{e.usageLoading=!1}}}async function _h(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{const n=await e.client.request("sessions.usage.timeseries",{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function Eh(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{const n=await e.client.request("sessions.usage.logs",{key:t,limit:1e3});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}const Rh=new Set(["agent","channel","chat","provider","model","tool","label","key","session","id","has","mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"]),Bs=e=>e.trim().toLowerCase(),Ih=e=>{const t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`,"i")},Ut=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith("$")&&(t=t.slice(1));let n=1;t.endsWith("k")?(n=1e3,t=t.slice(0,-1)):t.endsWith("m")&&(n=1e6,t=t.slice(0,-1));const s=Number(t);return Number.isFinite(s)?s*n:null},Qo=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(n=>{const s=n.replace(/^"|"$/g,""),i=s.indexOf(":");if(i>0){const o=s.slice(0,i),a=s.slice(i+1);return{key:o,value:a,raw:s}}return{value:s,raw:s}}),Lh=e=>[e.label,e.key,e.sessionId].filter(n=>!!n).map(n=>n.toLowerCase()),vr=e=>{const t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(const n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},br=e=>{const t=new Set;e.model&&t.add(e.model.toLowerCase());for(const n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},Mh=e=>(e.usage?.toolUsage?.tools??[]).map(t=>t.name.toLowerCase()),Dh=(e,t)=>{const n=Bs(t.value??"");if(!n)return!0;if(!t.key)return Lh(e).some(i=>i.includes(n));switch(Bs(t.key)){case"agent":return e.agentId?.toLowerCase().includes(n)??!1;case"channel":return e.channel?.toLowerCase().includes(n)??!1;case"chat":return e.chatType?.toLowerCase().includes(n)??!1;case"provider":return vr(e).some(i=>i.includes(n));case"model":return br(e).some(i=>i.includes(n));case"tool":return Mh(e).some(i=>i.includes(n));case"label":return e.label?.toLowerCase().includes(n)??!1;case"key":case"session":case"id":if(n.includes("*")||n.includes("?")){const i=Ih(n);return i.test(e.key)||(e.sessionId?i.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case"has":switch(n){case"tools":return(e.usage?.toolUsage?.totalCalls??0)>0;case"errors":return(e.usage?.messageCounts?.errors??0)>0;case"context":return!!e.contextWeight;case"usage":return!!e.usage;case"model":return br(e).length>0;case"provider":return vr(e).length>0;default:return!0}case"mintokens":{const i=Ut(n);return i===null?!0:(e.usage?.totalTokens??0)>=i}case"maxtokens":{const i=Ut(n);return i===null?!0:(e.usage?.totalTokens??0)<=i}case"mincost":{const i=Ut(n);return i===null?!0:(e.usage?.totalCost??0)>=i}case"maxcost":{const i=Ut(n);return i===null?!0:(e.usage?.totalCost??0)<=i}case"minmessages":{const i=Ut(n);return i===null?!0:(e.usage?.messageCounts?.total??0)>=i}case"maxmessages":{const i=Ut(n);return i===null?!0:(e.usage?.messageCounts?.total??0)<=i}default:return!0}},Ph=(e,t)=>{const n=Qo(t);if(n.length===0)return{sessions:e,warnings:[]};const s=[];for(const o of n){if(!o.key)continue;const a=Bs(o.key);if(!Rh.has(a)){s.push(`Unknown filter: ${o.key}`);continue}if(o.value===""&&s.push(`Missing value for ${o.key}`),a==="has"){const l=new Set(["tools","errors","context","usage","model","provider"]);o.value&&!l.has(Bs(o.value))&&s.push(`Unknown has:${o.value}`)}["mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"].includes(a)&&o.value&&Ut(o.value)===null&&s.push(`Invalid number for ${o.key}`)}return{sessions:e.filter(o=>n.every(a=>Dh(o,a))),warnings:s}};function td(e){const t=e.split(`
`),n=new Map,s=[];for(const l of t){const r=/^\[Tool:\s*([^\]]+)\]/.exec(l.trim());if(r){const d=r[1];n.set(d,(n.get(d)??0)+1);continue}l.trim().startsWith("[Tool Result]")||s.push(l)}const i=Array.from(n.entries()).toSorted((l,r)=>r[1]-l[1]),o=i.reduce((l,[,r])=>l+r,0),a=i.length>0?`Tools: ${i.map(([l,r])=>`${l}×${r}`).join(", ")} (${o} calls)`:"";return{tools:i,summary:a,cleanContent:s.join(`
`).trim()}}function Fh(e,t){!t||t.count<=0||(e.count+=t.count,e.sum+=t.avgMs*t.count,e.min=Math.min(e.min,t.minMs),e.max=Math.max(e.max,t.maxMs),e.p95Max=Math.max(e.p95Max,t.p95Ms))}function Nh(e,t){for(const n of t??[]){const s=e.get(n.date)??{date:n.date,count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};s.count+=n.count,s.sum+=n.avgMs*n.count,s.min=Math.min(s.min,n.minMs),s.max=Math.max(s.max,n.maxMs),s.p95Max=Math.max(s.p95Max,n.p95Ms),e.set(n.date,s)}}function Oh(e){return{byChannel:Array.from(e.byChannelMap.entries()).map(([t,n])=>({channel:t,totals:n})).toSorted((t,n)=>n.totals.totalCost-t.totals.totalCost),latency:e.latencyTotals.count>0?{count:e.latencyTotals.count,avgMs:e.latencyTotals.sum/e.latencyTotals.count,minMs:e.latencyTotals.min===Number.POSITIVE_INFINITY?0:e.latencyTotals.min,maxMs:e.latencyTotals.max,p95Ms:e.latencyTotals.p95Max}:void 0,dailyLatency:Array.from(e.dailyLatencyMap.values()).map(t=>({date:t.date,count:t.count,avgMs:t.count?t.sum/t.count:0,minMs:t.min===Number.POSITIVE_INFINITY?0:t.min,maxMs:t.max,p95Ms:t.p95Max})).toSorted((t,n)=>t.date.localeCompare(n.date)),modelDaily:Array.from(e.modelDailyMap.values()).toSorted((t,n)=>t.date.localeCompare(n.date)||n.cost-t.cost),daily:Array.from(e.dailyMap.values()).toSorted((t,n)=>t.date.localeCompare(n.date))}}const Uh=4;function Dt(e){return Math.round(e/Uh)}function B(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function Bh(e){const t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:"numeric"})}function Hh(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:24},()=>0);for(const i of e){const o=i.usage;if(!o?.messageCounts||o.messageCounts.total===0)continue;const a=o.firstActivity??i.updatedAt,l=o.lastActivity??i.updatedAt;if(!a||!l)continue;const r=Math.min(a,l),d=Math.max(a,l),u=Math.max(d-r,1)/6e4;let m=r;for(;m<d;){const h=new Date(m),b=Yo(h,t),k=Xo(h,t),T=Math.min(k.getTime(),d),R=Math.max((T-m)/6e4,0)/u;n[b]+=o.messageCounts.errors*R,s[b]+=o.messageCounts.total*R,m=T+1}}return s.map((i,o)=>{const a=n[o],l=i>0?a/i:0;return{hour:o,rate:l,errors:a,msgs:i}}).filter(i=>i.msgs>0&&i.errors>0).toSorted((i,o)=>o.rate-i.rate).slice(0,5).map(i=>({label:Bh(i.hour),value:`${(i.rate*100).toFixed(2)}%`,sub:`${Math.round(i.errors)} errors · ${Math.round(i.msgs)} msgs`}))}const zh=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Yo(e,t){return t==="utc"?e.getUTCHours():e.getHours()}function jh(e,t){return t==="utc"?e.getUTCDay():e.getDay()}function Xo(e,t){const n=new Date(e);return t==="utc"?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function Kh(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:7},()=>0);let i=0,o=!1;for(const l of e){const r=l.usage;if(!r||!r.totalTokens||r.totalTokens<=0)continue;i+=r.totalTokens;const d=r.firstActivity??l.updatedAt,g=r.lastActivity??l.updatedAt;if(!d||!g)continue;o=!0;const u=Math.min(d,g),m=Math.max(d,g),b=Math.max(m-u,1)/6e4;let k=u;for(;k<m;){const T=new Date(k),I=Yo(T,t),R=jh(T,t),A=Xo(T,t),w=Math.min(A.getTime(),m),C=Math.max((w-k)/6e4,0)/b;n[I]+=r.totalTokens*C,s[R]+=r.totalTokens*C,k=w+1}}const a=zh.map((l,r)=>({label:l,tokens:s[r]}));return{hasData:o,totalTokens:i,hourTotals:n,weekdayTotals:a}}function qh(e,t,n,s){const i=Kh(e,t);if(!i.hasData)return c`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">Activity by Time</div>
            <div class="usage-mosaic-sub">Estimates require session timestamps.</div>
          </div>
          <div class="usage-mosaic-total">${B(0)} tokens</div>
        </div>
        <div class="muted" style="padding: 12px; text-align: center;">No timeline data yet.</div>
      </div>
    `;const o=Math.max(...i.hourTotals,1),a=Math.max(...i.weekdayTotals.map(l=>l.tokens),1);return c`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">Activity by Time</div>
          <div class="usage-mosaic-sub">
            Estimated from session spans (first/last activity). Time zone: ${t==="utc"?"UTC":"Local"}.
          </div>
        </div>
        <div class="usage-mosaic-total">${B(i.totalTokens)} tokens</div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">Day of Week</div>
          <div class="usage-daypart-grid">
            ${i.weekdayTotals.map(l=>{const r=Math.min(l.tokens/a,1),d=l.tokens>0?`rgba(255, 77, 77, ${.12+r*.6})`:"transparent";return c`
                <div class="usage-daypart-cell" style="background: ${d};">
                  <div class="usage-daypart-label">${l.label}</div>
                  <div class="usage-daypart-value">${B(l.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>Hours</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${i.hourTotals.map((l,r)=>{const d=Math.min(l/o,1),g=l>0?`rgba(255, 77, 77, ${.08+d*.7})`:"transparent",u=`${r}:00 · ${B(l)} tokens`,m=d>.7?"rgba(255, 77, 77, 0.6)":"rgba(255, 77, 77, 0.2)",h=n.includes(r);return c`
                <div
                  class="usage-hour-cell ${h?"selected":""}"
                  style="background: ${g}; border-color: ${m};"
                  title="${u}"
                  @click=${b=>s(r,b.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>Midnight</span>
            <span>4am</span>
            <span>8am</span>
            <span>Noon</span>
            <span>4pm</span>
            <span>8pm</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            Low → High token density
          </div>
        </div>
      </div>
    </div>
  `}function ie(e,t=2){return`$${e.toFixed(t)}`}function Ti(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function nd(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const[,n,s,i]=t,o=new Date(Date.UTC(Number(n),Number(s)-1,Number(i)));return Number.isNaN(o.valueOf())?null:o}function sd(e){const t=nd(e);return t?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e}function Wh(e){const t=nd(e);return t?t.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):e}const ms=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),vs=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},Gh=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};const n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},s=new Map,i=new Map,o=new Map,a=new Map,l=new Map,r=new Map,d=new Map,g=new Map,u={count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};for(const h of e){const b=h.usage;if(b){if(b.messageCounts&&(n.total+=b.messageCounts.total,n.user+=b.messageCounts.user,n.assistant+=b.messageCounts.assistant,n.toolCalls+=b.messageCounts.toolCalls,n.toolResults+=b.messageCounts.toolResults,n.errors+=b.messageCounts.errors),b.toolUsage)for(const k of b.toolUsage.tools)s.set(k.name,(s.get(k.name)??0)+k.count);if(b.modelUsage)for(const k of b.modelUsage){const T=`${k.provider??"unknown"}::${k.model??"unknown"}`,I=i.get(T)??{provider:k.provider,model:k.model,count:0,totals:ms()};I.count+=k.count,vs(I.totals,k.totals),i.set(T,I);const R=k.provider??"unknown",A=o.get(R)??{provider:k.provider,model:void 0,count:0,totals:ms()};A.count+=k.count,vs(A.totals,k.totals),o.set(R,A)}if(Fh(u,b.latency),h.agentId){const k=a.get(h.agentId)??ms();vs(k,b),a.set(h.agentId,k)}if(h.channel){const k=l.get(h.channel)??ms();vs(k,b),l.set(h.channel,k)}for(const k of b.dailyBreakdown??[]){const T=r.get(k.date)??{date:k.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};T.tokens+=k.tokens,T.cost+=k.cost,r.set(k.date,T)}for(const k of b.dailyMessageCounts??[]){const T=r.get(k.date)??{date:k.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};T.messages+=k.total,T.toolCalls+=k.toolCalls,T.errors+=k.errors,r.set(k.date,T)}Nh(d,b.dailyLatency);for(const k of b.dailyModelUsage??[]){const T=`${k.date}::${k.provider??"unknown"}::${k.model??"unknown"}`,I=g.get(T)??{date:k.date,provider:k.provider,model:k.model,tokens:0,cost:0,count:0};I.tokens+=k.tokens,I.cost+=k.cost,I.count+=k.count,g.set(T,I)}}}const m=Oh({byChannelMap:l,latencyTotals:u,dailyLatencyMap:d,modelDailyMap:g,dailyMap:r});return{messages:n,tools:{totalCalls:Array.from(s.values()).reduce((h,b)=>h+b,0),uniqueTools:s.size,tools:Array.from(s.entries()).map(([h,b])=>({name:h,count:b})).toSorted((h,b)=>b.count-h.count)},byModel:Array.from(i.values()).toSorted((h,b)=>b.totals.totalCost-h.totals.totalCost),byProvider:Array.from(o.values()).toSorted((h,b)=>b.totals.totalCost-h.totals.totalCost),byAgent:Array.from(a.entries()).map(([h,b])=>({agentId:h,totals:b})).toSorted((h,b)=>b.totals.totalCost-h.totals.totalCost),...m}},Jh=(e,t,n)=>{let s=0,i=0;for(const g of e){const u=g.usage?.durationMs??0;u>0&&(s+=u,i+=1)}const o=i?s/i:0,a=t&&s>0?t.totalTokens/(s/6e4):void 0,l=t&&s>0?t.totalCost/(s/6e4):void 0,r=n.messages.total?n.messages.errors/n.messages.total:0,d=n.daily.filter(g=>g.messages>0&&g.errors>0).map(g=>({date:g.date,errors:g.errors,messages:g.messages,rate:g.errors/g.messages})).toSorted((g,u)=>u.rate-g.rate||u.errors-g.errors)[0];return{durationSumMs:s,durationCount:i,avgDurationMs:o,throughputTokensPerMin:a,throughputCostPerMin:l,errorRate:r,peakErrorDay:d}};function _i(e,t,n="text/plain"){const s=new Blob([t],{type:`${n};charset=utf-8`}),i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.download=e,o.click(),URL.revokeObjectURL(i)}function Vh(e){return/[",\n]/.test(e)?`"${e.replaceAll('"','""')}"`:e}function Hs(e){return e.map(t=>t==null?"":Vh(String(t))).join(",")}const Qh=e=>{const t=[Hs(["key","label","agentId","channel","provider","model","updatedAt","durationMs","messages","errors","toolCalls","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","totalCost"])];for(const n of e){const s=n.usage;t.push(Hs([n.key,n.label??"",n.agentId??"",n.channel??"",n.modelProvider??n.providerOverride??"",n.model??n.modelOverride??"",n.updatedAt?new Date(n.updatedAt).toISOString():"",s?.durationMs??"",s?.messageCounts?.total??"",s?.messageCounts?.errors??"",s?.messageCounts?.toolCalls??"",s?.input??"",s?.output??"",s?.cacheRead??"",s?.cacheWrite??"",s?.totalTokens??"",s?.totalCost??""]))}return t.join(`
`)},Yh=e=>{const t=[Hs(["date","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","inputCost","outputCost","cacheReadCost","cacheWriteCost","totalCost"])];for(const n of e)t.push(Hs([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??"",n.outputCost??"",n.cacheReadCost??"",n.cacheWriteCost??"",n.totalCost]));return t.join(`
`)},Xh=(e,t,n)=>{const s=e.trim();if(!s)return[];const i=s.length?s.split(/\s+/):[],o=i.length?i[i.length-1]:"",[a,l]=o.includes(":")?[o.slice(0,o.indexOf(":")),o.slice(o.indexOf(":")+1)]:["",""],r=a.toLowerCase(),d=l.toLowerCase(),g=R=>{const A=new Set;for(const w of R)w&&A.add(w);return Array.from(A)},u=g(t.map(R=>R.agentId)).slice(0,6),m=g(t.map(R=>R.channel)).slice(0,6),h=g([...t.map(R=>R.modelProvider),...t.map(R=>R.providerOverride),...n?.byProvider.map(R=>R.provider)??[]]).slice(0,6),b=g([...t.map(R=>R.model),...n?.byModel.map(R=>R.model)??[]]).slice(0,6),k=g(n?.tools.tools.map(R=>R.name)??[]).slice(0,6);if(!r)return[{label:"agent:",value:"agent:"},{label:"channel:",value:"channel:"},{label:"provider:",value:"provider:"},{label:"model:",value:"model:"},{label:"tool:",value:"tool:"},{label:"has:errors",value:"has:errors"},{label:"has:tools",value:"has:tools"},{label:"minTokens:",value:"minTokens:"},{label:"maxCost:",value:"maxCost:"}];const T=[],I=(R,A)=>{for(const w of A)(!d||w.toLowerCase().includes(d))&&T.push({label:`${R}:${w}`,value:`${R}:${w}`})};switch(r){case"agent":I("agent",u);break;case"channel":I("channel",m);break;case"provider":I("provider",h);break;case"model":I("model",b);break;case"tool":I("tool",k);break;case"has":["errors","tools","context","usage","model","provider"].forEach(R=>{(!d||R.includes(d))&&T.push({label:`has:${R}`,value:`has:${R}`})});break}return T},Zh=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/);return s[s.length-1]=t,`${s.join(" ")} `},Ht=e=>e.trim().toLowerCase(),em=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/),i=s[s.length-1]??"",o=t.includes(":")?t.split(":")[0]:null,a=i.includes(":")?i.split(":")[0]:null;return i.endsWith(":")&&o&&a===o?(s[s.length-1]=t,`${s.join(" ")} `):s.includes(t)?`${s.join(" ")} `:`${s.join(" ")} ${t} `},yr=(e,t)=>{const s=e.trim().split(/\s+/).filter(Boolean).filter(i=>i!==t);return s.length?`${s.join(" ")} `:""},xr=(e,t,n)=>{const s=Ht(t),o=[...Qo(e).filter(a=>Ht(a.key??"")!==s).map(a=>a.raw),...n.map(a=>`${t}:${a}`)];return o.length?`${o.join(" ")} `:""};function vt(e,t){return t===0?0:e/t*100}function tm(e){const t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:vt(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:vt(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:vt(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:vt(e.cacheWriteCost||0,t)},totalCost:t}}function nm(e,t,n,s,i,o,a,l){if(!(e.length>0||t.length>0||n.length>0))return f;const d=n.length===1?s.find(b=>b.key===n[0]):null,g=d?(d.label||d.key).slice(0,20)+((d.label||d.key).length>20?"…":""):n.length===1?n[0].slice(0,8)+"…":`${n.length} sessions`,u=d?d.label||d.key:n.length===1?n[0]:n.join(", "),m=e.length===1?e[0]:`${e.length} days`,h=t.length===1?`${t[0]}:00`:`${t.length} hours`;return c`
    <div class="active-filters">
      ${e.length>0?c`
            <div class="filter-chip">
              <span class="filter-chip-label">Days: ${m}</span>
              <button class="filter-chip-remove" @click=${i} title="Remove filter">×</button>
            </div>
          `:f}
      ${t.length>0?c`
            <div class="filter-chip">
              <span class="filter-chip-label">Hours: ${h}</span>
              <button class="filter-chip-remove" @click=${o} title="Remove filter">×</button>
            </div>
          `:f}
      ${n.length>0?c`
            <div class="filter-chip" title="${u}">
              <span class="filter-chip-label">Session: ${g}</span>
              <button class="filter-chip-remove" @click=${a} title="Remove filter">×</button>
            </div>
          `:f}
      ${(e.length>0||t.length>0)&&n.length>0?c`
            <button class="btn btn-sm filter-clear-btn" @click=${l}>
              Clear All
            </button>
          `:f}
    </div>
  `}function sm(e,t,n,s,i,o){if(!e.length)return c`
      <div class="daily-chart-compact">
        <div class="sessions-panel-title">Daily Usage</div>
        <div class="muted" style="padding: 20px; text-align: center">No data</div>
      </div>
    `;const a=n==="tokens",l=e.map(u=>a?u.totalTokens:u.totalCost),r=Math.max(...l,a?1:1e-4),d=e.length>30?12:e.length>20?18:e.length>14?24:32,g=e.length<=14;return c`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="toggle-btn ${s==="total"?"active":""}"
            @click=${()=>i("total")}
          >
            Total
          </button>
          <button
            class="toggle-btn ${s==="by-type"?"active":""}"
            @click=${()=>i("by-type")}
          >
            By Type
          </button>
        </div>
        <div class="card-title">Daily ${a?"Token":"Cost"} Usage</div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${d}px">
          ${e.map((u,m)=>{const b=l[m]/r*100,k=t.includes(u.date),T=sd(u.date),I=e.length>20?String(parseInt(u.date.slice(8),10)):T,R=e.length>20?"font-size: 8px":"",A=s==="by-type"?a?[{value:u.output,class:"output"},{value:u.input,class:"input"},{value:u.cacheWrite,class:"cache-write"},{value:u.cacheRead,class:"cache-read"}]:[{value:u.outputCost??0,class:"output"},{value:u.inputCost??0,class:"input"},{value:u.cacheWriteCost??0,class:"cache-write"},{value:u.cacheReadCost??0,class:"cache-read"}]:[],w=s==="by-type"?a?[`Output ${B(u.output)}`,`Input ${B(u.input)}`,`Cache write ${B(u.cacheWrite)}`,`Cache read ${B(u.cacheRead)}`]:[`Output ${ie(u.outputCost??0)}`,`Input ${ie(u.inputCost??0)}`,`Cache write ${ie(u.cacheWriteCost??0)}`,`Cache read ${ie(u.cacheReadCost??0)}`]:[],L=a?B(u.totalTokens):ie(u.totalCost);return c`
              <div
                class="daily-bar-wrapper ${k?"selected":""}"
                @click=${C=>o(u.date,C.shiftKey)}
              >
                ${s==="by-type"?c`
                        <div
                          class="daily-bar"
                          style="height: ${b.toFixed(1)}%; display: flex; flex-direction: column;"
                        >
                          ${(()=>{const C=A.reduce((p,_)=>p+_.value,0)||1;return A.map(p=>c`
                                <div
                                  class="cost-segment ${p.class}"
                                  style="height: ${p.value/C*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:c`
                        <div class="daily-bar" style="height: ${b.toFixed(1)}%"></div>
                      `}
                ${g?c`<div class="daily-bar-total">${L}</div>`:f}
                <div class="daily-bar-label" style="${R}">${I}</div>
                <div class="daily-bar-tooltip">
                  <strong>${Wh(u.date)}</strong><br />
                  ${B(u.totalTokens)} tokens<br />
                  ${ie(u.totalCost)}
                  ${w.length?c`${w.map(C=>c`<div>${C}</div>`)}`:f}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function im(e,t){const n=tm(e),s=t==="tokens",i=e.totalTokens||1,o={output:vt(e.output,i),input:vt(e.input,i),cacheWrite:vt(e.cacheWrite,i),cacheRead:vt(e.cacheRead,i)};return c`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">${s?"Tokens":"Cost"} by Type</div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(s?o.output:n.output.pct).toFixed(1)}%"
          title="Output: ${s?B(e.output):ie(n.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(s?o.input:n.input.pct).toFixed(1)}%"
          title="Input: ${s?B(e.input):ie(n.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(s?o.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="Cache Write: ${s?B(e.cacheWrite):ie(n.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(s?o.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="Cache Read: ${s?B(e.cacheRead):ie(n.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>Output ${s?B(e.output):ie(n.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>Input ${s?B(e.input):ie(n.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>Cache Write ${s?B(e.cacheWrite):ie(n.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>Cache Read ${s?B(e.cacheRead):ie(n.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        Total: ${s?B(e.totalTokens):ie(e.totalCost)}
      </div>
    </div>
  `}function zt(e,t,n){return c`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?c`<div class="muted">${n}</div>`:c`
              <div class="usage-list">
                ${t.map(s=>c`
                    <div class="usage-list-item">
                      <span>${s.label}</span>
                      <span class="usage-list-value">
                        <span>${s.value}</span>
                        ${s.sub?c`<span class="usage-list-sub">${s.sub}</span>`:f}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function $r(e,t,n){return c`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?c`<div class="muted">${n}</div>`:c`
              <div class="usage-error-list">
                ${t.map(s=>c`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${s.label}</div>
                      <div class="usage-error-rate">${s.value}</div>
                      ${s.sub?c`<div class="usage-error-sub">${s.sub}</div>`:f}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function om(e,t,n,s,i,o,a){if(!e)return f;const l=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,r=t.messages.total?e.totalCost/t.messages.total:0,d=e.input+e.cacheRead,g=d>0?e.cacheRead/d:0,u=d>0?`${(g*100).toFixed(1)}%`:"—",m=n.errorRate*100,h=n.throughputTokensPerMin!==void 0?`${B(Math.round(n.throughputTokensPerMin))} tok/min`:"—",b=n.throughputCostPerMin!==void 0?`${ie(n.throughputCostPerMin,4)} / min`:"—",k=n.durationCount>0?Mo(n.avgDurationMs,{spaced:!0})??"—":"—",T="Cache hit rate = cache read / (input + cache read). Higher is better.",I="Error rate = errors / total messages. Lower is better.",R="Throughput shows tokens per minute over active time. Higher is better.",A="Average tokens per message in this range.",w=s?"Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.":"Average cost per message when providers report costs.",L=t.daily.filter(M=>M.messages>0&&M.errors>0).map(M=>{const q=M.errors/M.messages;return{label:sd(M.date),value:`${(q*100).toFixed(2)}%`,sub:`${M.errors} errors · ${M.messages} msgs · ${B(M.tokens)}`,rate:q}}).toSorted((M,q)=>q.rate-M.rate).slice(0,5).map(({rate:M,...q})=>q),C=t.byModel.slice(0,5).map(M=>({label:M.model??"unknown",value:ie(M.totals.totalCost),sub:`${B(M.totals.totalTokens)} · ${M.count} msgs`})),p=t.byProvider.slice(0,5).map(M=>({label:M.provider??"unknown",value:ie(M.totals.totalCost),sub:`${B(M.totals.totalTokens)} · ${M.count} msgs`})),_=t.tools.tools.slice(0,6).map(M=>({label:M.name,value:`${M.count}`,sub:"calls"})),F=t.byAgent.slice(0,5).map(M=>({label:M.agentId,value:ie(M.totals.totalCost),sub:B(M.totals.totalTokens)})),U=t.byChannel.slice(0,5).map(M=>({label:M.channel,value:ie(M.totals.totalCost),sub:B(M.totals.totalTokens)}));return c`
    <section class="card" style="margin-top: 16px;">
      <div class="card-title">Usage Overview</div>
      <div class="usage-summary-grid">
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Messages
            <span class="usage-summary-hint" title="Total user + assistant messages in range.">?</span>
          </div>
          <div class="usage-summary-value">${t.messages.total}</div>
          <div class="usage-summary-sub">
            ${t.messages.user} user · ${t.messages.assistant} assistant
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Tool Calls
            <span class="usage-summary-hint" title="Total tool call count across sessions.">?</span>
          </div>
          <div class="usage-summary-value">${t.tools.totalCalls}</div>
          <div class="usage-summary-sub">${t.tools.uniqueTools} tools used</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Errors
            <span class="usage-summary-hint" title="Total message/tool errors in range.">?</span>
          </div>
          <div class="usage-summary-value">${t.messages.errors}</div>
          <div class="usage-summary-sub">${t.messages.toolResults} tool results</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Avg Tokens / Msg
            <span class="usage-summary-hint" title=${A}>?</span>
          </div>
          <div class="usage-summary-value">${B(l)}</div>
          <div class="usage-summary-sub">Across ${t.messages.total||0} messages</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Avg Cost / Msg
            <span class="usage-summary-hint" title=${w}>?</span>
          </div>
          <div class="usage-summary-value">${ie(r,4)}</div>
          <div class="usage-summary-sub">${ie(e.totalCost)} total</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Sessions
            <span class="usage-summary-hint" title="Distinct sessions in the range.">?</span>
          </div>
          <div class="usage-summary-value">${o}</div>
          <div class="usage-summary-sub">of ${a} in range</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Throughput
            <span class="usage-summary-hint" title=${R}>?</span>
          </div>
          <div class="usage-summary-value">${h}</div>
          <div class="usage-summary-sub">${b}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Error Rate
            <span class="usage-summary-hint" title=${I}>?</span>
          </div>
          <div class="usage-summary-value ${m>5?"bad":m>1?"warn":"good"}">${m.toFixed(2)}%</div>
          <div class="usage-summary-sub">
            ${t.messages.errors} errors · ${k} avg session
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Cache Hit Rate
            <span class="usage-summary-hint" title=${T}>?</span>
          </div>
          <div class="usage-summary-value ${g>.6?"good":g>.3?"warn":"bad"}">${u}</div>
          <div class="usage-summary-sub">
            ${B(e.cacheRead)} cached · ${B(d)} prompt
          </div>
        </div>
      </div>
      <div class="usage-insights-grid">
        ${zt("Top Models",C,"No model data")}
        ${zt("Top Providers",p,"No provider data")}
        ${zt("Top Tools",_,"No tool calls")}
        ${zt("Top Agents",F,"No agent data")}
        ${zt("Top Channels",U,"No channel data")}
        ${$r("Peak Error Days",L,"No error data")}
        ${$r("Peak Error Hours",i,"No error data")}
      </div>
    </section>
  `}function am(e,t,n,s,i,o,a,l,r,d,g,u,m,h,b){const k=E=>m.includes(E),T=E=>{const j=E.label||E.key;return j.startsWith("agent:")&&j.includes("?token=")?j.slice(0,j.indexOf("?token=")):j},I=async E=>{const j=T(E);try{await navigator.clipboard.writeText(j)}catch{}},R=E=>{const j=[];return k("channel")&&E.channel&&j.push(`channel:${E.channel}`),k("agent")&&E.agentId&&j.push(`agent:${E.agentId}`),k("provider")&&(E.modelProvider||E.providerOverride)&&j.push(`provider:${E.modelProvider??E.providerOverride}`),k("model")&&E.model&&j.push(`model:${E.model}`),k("messages")&&E.usage?.messageCounts&&j.push(`msgs:${E.usage.messageCounts.total}`),k("tools")&&E.usage?.toolUsage&&j.push(`tools:${E.usage.toolUsage.totalCalls}`),k("errors")&&E.usage?.messageCounts&&j.push(`errors:${E.usage.messageCounts.errors}`),k("duration")&&E.usage?.durationMs&&j.push(`dur:${Mo(E.usage.durationMs,{spaced:!0})??"—"}`),j},A=E=>{const j=E.usage;if(!j)return 0;if(n.length>0&&j.dailyBreakdown&&j.dailyBreakdown.length>0){const Y=j.dailyBreakdown.filter(J=>n.includes(J.date));return s?Y.reduce((J,fe)=>J+fe.tokens,0):Y.reduce((J,fe)=>J+fe.cost,0)}return s?j.totalTokens??0:j.totalCost??0},w=[...e].toSorted((E,j)=>{switch(i){case"recent":return(j.updatedAt??0)-(E.updatedAt??0);case"messages":return(j.usage?.messageCounts?.total??0)-(E.usage?.messageCounts?.total??0);case"errors":return(j.usage?.messageCounts?.errors??0)-(E.usage?.messageCounts?.errors??0);case"cost":return A(j)-A(E);default:return A(j)-A(E)}}),L=o==="asc"?w.toReversed():w,C=L.reduce((E,j)=>E+A(j),0),p=L.length?C/L.length:0,_=L.reduce((E,j)=>E+(j.usage?.messageCounts?.errors??0),0),F=(E,j)=>{const Y=A(E),J=T(E),fe=R(E);return c`
      <div
        class="session-bar-row ${j?"selected":""}"
        @click=${P=>r(E.key,P.shiftKey)}
        title="${E.key}"
      >
        <div class="session-bar-label">
          <div class="session-bar-title">${J}</div>
          ${fe.length>0?c`<div class="session-bar-meta">${fe.join(" · ")}</div>`:f}
        </div>
        <div class="session-bar-track" style="display: none;"></div>
        <div class="session-bar-actions">
          <button
            class="session-copy-btn"
            title="Copy session name"
            @click=${P=>{P.stopPropagation(),I(E)}}
          >
            Copy
          </button>
          <div class="session-bar-value">${s?B(Y):ie(Y)}</div>
        </div>
      </div>
    `},U=new Set(t),M=L.filter(E=>U.has(E.key)),q=M.length,W=new Map(L.map(E=>[E.key,E])),V=a.map(E=>W.get(E)).filter(E=>!!E);return c`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">Sessions</div>
        <div class="sessions-card-count">
          ${e.length} shown${h!==e.length?` · ${h} total`:""}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>${s?B(p):ie(p)} avg</span>
          <span>${_} errors</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="toggle-btn ${l==="all"?"active":""}"
            @click=${()=>u("all")}
          >
            All
          </button>
          <button
            class="toggle-btn ${l==="recent"?"active":""}"
            @click=${()=>u("recent")}
          >
            Recently viewed
          </button>
        </div>
        <label class="sessions-sort">
          <span>Sort</span>
          <select
            @change=${E=>d(E.target.value)}
          >
            <option value="cost" ?selected=${i==="cost"}>Cost</option>
            <option value="errors" ?selected=${i==="errors"}>Errors</option>
            <option value="messages" ?selected=${i==="messages"}>Messages</option>
            <option value="recent" ?selected=${i==="recent"}>Recent</option>
            <option value="tokens" ?selected=${i==="tokens"}>Tokens</option>
          </select>
        </label>
        <button
          class="btn btn-sm sessions-action-btn icon"
          @click=${()=>g(o==="desc"?"asc":"desc")}
          title=${o==="desc"?"Descending":"Ascending"}
        >
          ${o==="desc"?"↓":"↑"}
        </button>
        ${q>0?c`
                <button class="btn btn-sm sessions-action-btn sessions-clear-btn" @click=${b}>
                  Clear Selection
                </button>
              `:f}
      </div>
      ${l==="recent"?V.length===0?c`
                <div class="muted" style="padding: 20px; text-align: center">No recent sessions</div>
              `:c`
	                <div class="session-bars" style="max-height: 220px; margin-top: 6px;">
	                  ${V.map(E=>F(E,U.has(E.key)))}
	                </div>
	              `:e.length===0?c`
                <div class="muted" style="padding: 20px; text-align: center">No sessions in range</div>
              `:c`
	                <div class="session-bars">
	                  ${L.slice(0,50).map(E=>F(E,U.has(E.key)))}
	                  ${e.length>50?c`<div class="muted" style="padding: 8px; text-align: center; font-size: 11px;">+${e.length-50} more</div>`:f}
	                </div>
	              `}
      ${q>1?c`
              <div style="margin-top: 10px;">
                <div class="sessions-card-count">Selected (${q})</div>
                <div class="session-bars" style="max-height: 160px; margin-top: 6px;">
                  ${M.map(E=>F(E,!0))}
                </div>
              </div>
            `:f}
    </div>
  `}const rm=.75,lm=8,cm=.06,bs=5,Me=12,ft=.7;function bt(e,t){return!t||t<=0?0:e/t*100}function dm(){return f}function id(e){return e<1e12?e*1e3:e}function um(e,t,n){const s=Math.min(t,n),i=Math.max(t,n);return e.filter(o=>{if(o.timestamp<=0)return!0;const a=id(o.timestamp);return a>=s&&a<=i})}function gm(e,t,n){const s=t||e.usage;if(!s)return c`
      <div class="muted">No usage data for this session.</div>
    `;const i=u=>u?new Date(u).toLocaleString():"—",o=[];e.channel&&o.push(`channel:${e.channel}`),e.agentId&&o.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&o.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&o.push(`model:${e.model}`);const a=s.toolUsage?.tools.slice(0,6)??[];let l,r,d;if(n){const u=new Map;for(const m of n){const{tools:h}=td(m.content);for(const[b]of h)u.set(b,(u.get(b)||0)+1)}d=a.map(m=>({label:m.name,value:`${u.get(m.name)??0}`,sub:"calls"})),l=[...u.values()].reduce((m,h)=>m+h,0),r=u.size}else d=a.map(u=>({label:u.name,value:`${u.count}`,sub:"calls"})),l=s.toolUsage?.totalCalls??0,r=s.toolUsage?.uniqueTools??0;const g=s.modelUsage?.slice(0,6).map(u=>({label:u.model??"unknown",value:ie(u.totals.totalCost),sub:B(u.totals.totalTokens)}))??[];return c`
    ${o.length>0?c`<div class="usage-badges">${o.map(u=>c`<span class="usage-badge">${u}</span>`)}</div>`:f}
    <div class="session-summary-grid">
      <div class="session-summary-card">
        <div class="session-summary-title">Messages</div>
        <div class="session-summary-value">${s.messageCounts?.total??0}</div>
        <div class="session-summary-meta">${s.messageCounts?.user??0} user · ${s.messageCounts?.assistant??0} assistant</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Tool Calls</div>
        <div class="session-summary-value">${l}</div>
        <div class="session-summary-meta">${r} tools</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Errors</div>
        <div class="session-summary-value">${s.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">${s.messageCounts?.toolResults??0} tool results</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Duration</div>
        <div class="session-summary-value">${Mo(s.durationMs,{spaced:!0})??"—"}</div>
        <div class="session-summary-meta">${i(s.firstActivity)} → ${i(s.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid" style="margin-top: 12px;">
      ${zt("Top Tools",d,"No tool calls")}
      ${zt("Model Mix",g,"No model data")}
    </div>
  `}function pm(e,t,n,s){const i=Math.min(n,s),o=Math.max(n,s),a=t.filter(k=>k.timestamp>=i&&k.timestamp<=o);if(a.length===0)return;let l=0,r=0,d=0,g=0,u=0,m=0,h=0,b=0;for(const k of a)l+=k.totalTokens||0,r+=k.cost||0,u+=k.input||0,m+=k.output||0,h+=k.cacheRead||0,b+=k.cacheWrite||0,k.output>0&&g++,k.input>0&&d++;return{...e,totalTokens:l,totalCost:r,input:u,output:m,cacheRead:h,cacheWrite:b,durationMs:a[a.length-1].timestamp-a[0].timestamp,firstActivity:a[0].timestamp,lastActivity:a[a.length-1].timestamp,messageCounts:{total:a.length,user:d,assistant:g,toolCalls:0,toolResults:0,errors:0}}}function fm(e,t,n,s,i,o,a,l,r,d,g,u,m,h,b,k,T,I,R,A,w,L,C,p,_,F){const U=e.label||e.key,M=U.length>50?U.slice(0,50)+"…":U,q=e.usage,W=l!==null&&r!==null,V=l!==null&&r!==null&&t?.points&&q?pm(q,t.points,l,r):void 0,E=V?{totalTokens:V.totalTokens,totalCost:V.totalCost}:{totalTokens:q?.totalTokens??0,totalCost:q?.totalCost??0},j=V?" (filtered)":"";return c`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">
            ${M}
            ${j?c`<span style="font-size: 11px; color: var(--muted); margin-left: 8px;">${j}</span>`:f}
          </div>
        </div>
        <div class="session-detail-stats">
          ${q?c`
            <span><strong>${B(E.totalTokens)}</strong> tokens${j}</span>
            <span><strong>${ie(E.totalCost)}</strong>${j}</span>
          `:f}
        </div>
        <button class="session-close-btn" @click=${F} title="Close session details">×</button>
      </div>
      <div class="session-detail-content">
        ${gm(e,V,l!=null&&r!=null&&h?um(h,l,r):void 0)}
        <div class="session-detail-row">
          ${hm(t,n,s,i,o,a,g,u,m,l,r,d)}
        </div>
        <div class="session-detail-bottom">
          ${vm(h,b,k,T,I,R,A,w,L,C,W?l:null,W?r:null)}
          ${mm(e.contextWeight,q,p,_)}
        </div>
      </div>
    </div>
  `}function hm(e,t,n,s,i,o,a,l,r,d,g,u){if(t)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">Loading...</div>
      </div>
    `;if(!e||e.points.length<2)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">No timeline data</div>
      </div>
    `;let m=e.points;if(a||l||r&&r.length>0){const K=a?new Date(a+"T00:00:00").getTime():0,re=l?new Date(l+"T23:59:59").getTime():1/0;m=e.points.filter(ce=>{if(ce.timestamp<K||ce.timestamp>re)return!1;if(r&&r.length>0){const ve=new Date(ce.timestamp),Ie=`${ve.getFullYear()}-${String(ve.getMonth()+1).padStart(2,"0")}-${String(ve.getDate()).padStart(2,"0")}`;return r.includes(Ie)}return!0})}if(m.length<2)return c`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">No data in range</div>
      </div>
    `;let h=0,b=0,k=0,T=0,I=0,R=0;m=m.map(K=>(h+=K.totalTokens,b+=K.cost,k+=K.output,T+=K.input,I+=K.cacheRead,R+=K.cacheWrite,{...K,cumulativeTokens:h,cumulativeCost:b}));const A=d!=null&&g!=null,w=A?Math.min(d,g):0,L=A?Math.max(d,g):1/0;let C=0,p=m.length;if(A){C=m.findIndex(re=>re.timestamp>=w),C===-1&&(C=m.length);const K=m.findIndex(re=>re.timestamp>L);p=K===-1?m.length:K}const _=A?m.slice(C,p):m;let F=0,U=0,M=0,q=0;for(const K of _)F+=K.output,U+=K.input,M+=K.cacheRead,q+=K.cacheWrite;const W=400,V=100,E={top:8,right:4,bottom:14,left:30},j=W-E.left-E.right,Y=V-E.top-E.bottom,J=n==="cumulative",fe=n==="per-turn"&&i==="by-type",P=F+U+M+q,H=m.map(K=>J?K.cumulativeTokens:fe?K.input+K.output+K.cacheRead+K.cacheWrite:K.totalTokens),G=Math.max(...H,1),X=j/m.length,de=Math.min(lm,Math.max(1,X*rm)),te=X-de,ae=E.left+C*(de+te),Z=p>=m.length?E.left+(m.length-1)*(de+te)+de:E.left+(p-1)*(de+te)+de;return c`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title" style="font-size: 12px; color: var(--text);">Usage Over Time</div>
        <div class="timeseries-controls">
          ${A?c`
            <div class="chart-toggle small">
              <button class="toggle-btn active" @click=${()=>u?.(null,null)}>Reset</button>
            </div>
          `:f}
          <div class="chart-toggle small">
            <button
              class="toggle-btn ${J?"":"active"}"
              @click=${()=>s("per-turn")}
            >
              Per Turn
            </button>
            <button
              class="toggle-btn ${J?"active":""}"
              @click=${()=>s("cumulative")}
            >
              Cumulative
            </button>
          </div>
          ${J?f:c`
                  <div class="chart-toggle small">
                    <button
                      class="toggle-btn ${i==="total"?"active":""}"
                      @click=${()=>o("total")}
                    >
                      Total
                    </button>
                    <button
                      class="toggle-btn ${i==="by-type"?"active":""}"
                      @click=${()=>o("by-type")}
                    >
                      By Type
                    </button>
                  </div>
                `}
        </div>
      </div>
      <div class="timeseries-chart-wrapper" style="position: relative; cursor: crosshair;">
        <svg 
          viewBox="0 0 ${W} ${V+18}" 
          class="timeseries-svg" 
          style="width: 100%; height: auto; display: block;"
        >
          <!-- Y axis -->
          <line x1="${E.left}" y1="${E.top}" x2="${E.left}" y2="${E.top+Y}" stroke="var(--border)" />
          <!-- X axis -->
          <line x1="${E.left}" y1="${E.top+Y}" x2="${W-E.right}" y2="${E.top+Y}" stroke="var(--border)" />
          <!-- Y axis labels -->
          <text x="${E.left-4}" y="${E.top+5}" text-anchor="end" class="ts-axis-label">${B(G)}</text>
          <text x="${E.left-4}" y="${E.top+Y}" text-anchor="end" class="ts-axis-label">0</text>
          <!-- X axis labels (first and last) -->
          ${m.length>0?Mt`
            <text x="${E.left}" y="${E.top+Y+10}" text-anchor="start" class="ts-axis-label">${new Date(m[0].timestamp).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}</text>
            <text x="${W-E.right}" y="${E.top+Y+10}" text-anchor="end" class="ts-axis-label">${new Date(m[m.length-1].timestamp).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}</text>
          `:f}
          <!-- Bars -->
          ${m.map((K,re)=>{const ce=H[re],ve=E.left+re*(de+te),Ie=ce/G*Y,Xe=E.top+Y-Ie,be=[new Date(K.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`${B(ce)} tokens`];fe&&(be.push(`Out ${B(K.output)}`),be.push(`In ${B(K.input)}`),be.push(`CW ${B(K.cacheWrite)}`),be.push(`CR ${B(K.cacheRead)}`));const je=be.join(" · "),Ze=A&&(re<C||re>=p);if(!fe)return Mt`<rect x="${ve}" y="${Xe}" width="${de}" height="${Ie}" class="ts-bar${Ze?" dimmed":""}" rx="1"><title>${je}</title></rect>`;const et=[{value:K.output,cls:"output"},{value:K.input,cls:"input"},{value:K.cacheWrite,cls:"cache-write"},{value:K.cacheRead,cls:"cache-read"}];let tt=E.top+Y;const dt=Ze?" dimmed":"";return Mt`
              ${et.map(ut=>{if(ut.value<=0||ce<=0)return f;const Rt=Ie*(ut.value/ce);return tt-=Rt,Mt`<rect x="${ve}" y="${tt}" width="${de}" height="${Rt}" class="ts-bar ${ut.cls}${dt}" rx="1"><title>${je}</title></rect>`})}
            `})}
          <!-- Selection highlight overlay (always visible between handles) -->
          ${Mt`
            <rect 
              x="${ae}" 
              y="${E.top}" 
              width="${Math.max(1,Z-ae)}" 
              height="${Y}" 
              fill="var(--accent)" 
              opacity="${cm}" 
              pointer-events="none"
            />
          `}
          <!-- Left cursor line + handle -->
          ${Mt`
            <line x1="${ae}" y1="${E.top}" x2="${ae}" y2="${E.top+Y}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
            <rect x="${ae-bs/2}" y="${E.top+Y/2-Me/2}" width="${bs}" height="${Me}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
            <line x1="${ae-ft}" y1="${E.top+Y/2-Me/5}" x2="${ae-ft}" y2="${E.top+Y/2+Me/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
            <line x1="${ae+ft}" y1="${E.top+Y/2-Me/5}" x2="${ae+ft}" y2="${E.top+Y/2+Me/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
          `}
          <!-- Right cursor line + handle -->
          ${Mt`
            <line x1="${Z}" y1="${E.top}" x2="${Z}" y2="${E.top+Y}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
            <rect x="${Z-bs/2}" y="${E.top+Y/2-Me/2}" width="${bs}" height="${Me}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
            <line x1="${Z-ft}" y1="${E.top+Y/2-Me/5}" x2="${Z-ft}" y2="${E.top+Y/2+Me/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
            <line x1="${Z+ft}" y1="${E.top+Y/2-Me/5}" x2="${Z+ft}" y2="${E.top+Y/2+Me/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
          `}
        </svg>
        <!-- Handle drag zones (only on handles, not full chart) -->
        ${(()=>{const K=`${(ae/W*100).toFixed(1)}%`,re=`${(Z/W*100).toFixed(1)}%`,ce=ve=>Ie=>{if(!u)return;Ie.preventDefault(),Ie.stopPropagation();const ct=Ie.currentTarget.closest(".timeseries-chart-wrapper")?.querySelector("svg");if(!ct)return;const be=ct.getBoundingClientRect(),je=be.width,Ze=E.left/W*je,tt=(W-E.right)/W*je-Ze,dt=Ke=>{const _e=Math.max(0,Math.min(1,(Ke-be.left-Ze)/tt));return Math.min(Math.floor(_e*m.length),m.length-1)},ut=ve==="left"?ae:Z,Rt=be.left+ut/W*je,ci=Ie.clientX-Rt;document.body.style.cursor="col-resize";const on=Ke=>{const _e=Ke.clientX-ci,An=dt(_e),an=m[An];if(an)if(ve==="left"){const pt=g??m[m.length-1].timestamp;u(Math.min(an.timestamp,pt),pt)}else{const pt=d??m[0].timestamp;u(pt,Math.max(an.timestamp,pt))}},gt=()=>{document.body.style.cursor="",document.removeEventListener("mousemove",on),document.removeEventListener("mouseup",gt)};document.addEventListener("mousemove",on),document.addEventListener("mouseup",gt)};return c`
            <div class="chart-handle-zone chart-handle-left" 
                 style="left: ${K};"
                 @mousedown=${ce("left")}></div>
            <div class="chart-handle-zone chart-handle-right" 
                 style="left: ${re};"
                 @mousedown=${ce("right")}></div>
          `})()}
      </div>
      <div class="timeseries-summary">
        ${A?c`
              <span style="color: var(--accent);">▶ Turns ${C+1}–${p} of ${m.length}</span> · 
              ${new Date(w).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}–${new Date(L).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})} · 
              ${B(F+U+M+q)} · 
              ${ie(_.reduce((K,re)=>K+(re.cost||0),0))}
            `:c`${m.length} msgs · ${B(h)} · ${ie(b)}`}
      </div>
      ${fe?c`
              <div style="margin-top: 8px;">
                <div class="card-title" style="font-size: 12px; margin-bottom: 6px; color: var(--text);">Tokens by Type</div>
                <div class="cost-breakdown-bar" style="height: 18px;">
                  <div class="cost-segment output" style="width: ${bt(F,P).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${bt(U,P).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${bt(q,P).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${bt(M,P).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title="Assistant output tokens">
                    <span class="legend-dot output"></span>Output ${B(F)}
                  </div>
                  <div class="legend-item" title="User + tool input tokens">
                    <span class="legend-dot input"></span>Input ${B(U)}
                  </div>
                  <div class="legend-item" title="Tokens written to cache">
                    <span class="legend-dot cache-write"></span>Cache Write ${B(q)}
                  </div>
                  <div class="legend-item" title="Tokens read from cache">
                    <span class="legend-dot cache-read"></span>Cache Read ${B(M)}
                  </div>
                </div>
                <div class="cost-breakdown-total">Total: ${B(P)}</div>
              </div>
            `:f}
    </div>
  `}function mm(e,t,n,s){if(!e)return c`
      <div class="context-details-panel">
        <div class="muted" style="padding: 20px; text-align: center">No context data</div>
      </div>
    `;const i=Dt(e.systemPrompt.chars),o=Dt(e.skills.promptChars),a=Dt(e.tools.listChars+e.tools.schemaChars),l=Dt(e.injectedWorkspaceFiles.reduce((A,w)=>A+w.injectedChars,0)),r=i+o+a+l;let d="";if(t&&t.totalTokens>0){const A=t.input+t.cacheRead;A>0&&(d=`~${Math.min(r/A*100,100).toFixed(0)}% of input`)}const g=e.skills.entries.toSorted((A,w)=>w.blockChars-A.blockChars),u=e.tools.entries.toSorted((A,w)=>w.summaryChars+w.schemaChars-(A.summaryChars+A.schemaChars)),m=e.injectedWorkspaceFiles.toSorted((A,w)=>w.injectedChars-A.injectedChars),h=4,b=n,k=b?g:g.slice(0,h),T=b?u:u.slice(0,h),I=b?m:m.slice(0,h),R=g.length>h||u.length>h||m.length>h;return c`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title" style="font-size: 12px; color: var(--text);">System Prompt Breakdown</div>
        ${R?c`<button class="context-expand-btn" @click=${s}>
                ${b?"Collapse":"Expand all"}
              </button>`:f}
      </div>
      <p class="context-weight-desc">
        ${d||"Base context per message"}
      </p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${bt(i,r).toFixed(1)}%" title="System: ~${B(i)}"></div>
        <div class="context-segment skills" style="width: ${bt(o,r).toFixed(1)}%" title="Skills: ~${B(o)}"></div>
        <div class="context-segment tools" style="width: ${bt(a,r).toFixed(1)}%" title="Tools: ~${B(a)}"></div>
        <div class="context-segment files" style="width: ${bt(l,r).toFixed(1)}%" title="Files: ~${B(l)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>Sys ~${B(i)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>Skills ~${B(o)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>Tools ~${B(a)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>Files ~${B(l)}</span>
      </div>
      <div class="context-total">Total: ~${B(r)}</div>
      <div class="context-breakdown-grid">
        ${g.length>0?(()=>{const A=g.length-k.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Skills (${g.length})</div>
                    <div class="context-breakdown-list">
                      ${k.map(w=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${w.name}</span>
                            <span class="muted">~${B(Dt(w.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${A>0?c`<div class="context-breakdown-more">+${A} more</div>`:f}
                  </div>
                `})():f}
        ${u.length>0?(()=>{const A=u.length-T.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Tools (${u.length})</div>
                    <div class="context-breakdown-list">
                      ${T.map(w=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${w.name}</span>
                            <span class="muted">~${B(Dt(w.summaryChars+w.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${A>0?c`<div class="context-breakdown-more">+${A} more</div>`:f}
                  </div>
                `})():f}
        ${m.length>0?(()=>{const A=m.length-I.length;return c`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Files (${m.length})</div>
                    <div class="context-breakdown-list">
                      ${I.map(w=>c`
                          <div class="context-breakdown-item">
                            <span class="mono">${w.name}</span>
                            <span class="muted">~${B(Dt(w.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${A>0?c`<div class="context-breakdown-more">+${A} more</div>`:f}
                  </div>
                `})():f}
      </div>
    </div>
  `}function vm(e,t,n,s,i,o,a,l,r,d,g,u){if(t)return c`
      <div class="session-logs-compact">
        <div class="session-logs-header">Conversation</div>
        <div class="muted" style="padding: 20px; text-align: center">Loading...</div>
      </div>
    `;if(!e||e.length===0)return c`
      <div class="session-logs-compact">
        <div class="session-logs-header">Conversation</div>
        <div class="muted" style="padding: 20px; text-align: center">No messages</div>
      </div>
    `;const m=i.query.trim().toLowerCase(),h=e.map(L=>{const C=td(L.content),p=C.cleanContent||L.content;return{log:L,toolInfo:C,cleanContent:p}}),b=Array.from(new Set(h.flatMap(L=>L.toolInfo.tools.map(([C])=>C)))).toSorted((L,C)=>L.localeCompare(C)),k=h.filter(L=>{if(g!=null&&u!=null){const C=L.log.timestamp;if(C>0){const p=Math.min(g,u),_=Math.max(g,u),F=id(C);if(F<p||F>_)return!1}}return!(i.roles.length>0&&!i.roles.includes(L.log.role)||i.hasTools&&L.toolInfo.tools.length===0||i.tools.length>0&&!L.toolInfo.tools.some(([p])=>i.tools.includes(p))||m&&!L.cleanContent.toLowerCase().includes(m))}),T=i.roles.length>0||i.tools.length>0||i.hasTools||m,I=g!=null&&u!=null,R=T||I?`${k.length} of ${e.length} ${I?"(timeline filtered)":""}`:`${e.length}`,A=new Set(i.roles),w=new Set(i.tools);return c`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>Conversation <span style="font-weight: normal; color: var(--muted);">(${R} messages)</span></span>
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${s}>
          ${n?"Collapse All":"Expand All"}
        </button>
      </div>
      <div class="usage-filters-inline" style="margin: 10px 12px;">
        <select
          multiple
          size="4"
          @change=${L=>o(Array.from(L.target.selectedOptions).map(C=>C.value))}
        >
          <option value="user" ?selected=${A.has("user")}>User</option>
          <option value="assistant" ?selected=${A.has("assistant")}>Assistant</option>
          <option value="tool" ?selected=${A.has("tool")}>Tool</option>
          <option value="toolResult" ?selected=${A.has("toolResult")}>Tool result</option>
        </select>
        <select
          multiple
          size="4"
          @change=${L=>a(Array.from(L.target.selectedOptions).map(C=>C.value))}
        >
          ${b.map(L=>c`<option value=${L} ?selected=${w.has(L)}>${L}</option>`)}
        </select>
        <label class="usage-filters-inline" style="gap: 6px;">
          <input
            type="checkbox"
            .checked=${i.hasTools}
            @change=${L=>l(L.target.checked)}
          />
          Has tools
        </label>
        <input
          type="text"
          placeholder="Search conversation"
          .value=${i.query}
          @input=${L=>r(L.target.value)}
        />
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${d}>
          Clear
        </button>
      </div>
      <div class="session-logs-list">
        ${k.map(L=>{const{log:C,toolInfo:p,cleanContent:_}=L,F=C.role==="user"?"user":"assistant",U=C.role==="user"?"You":C.role==="assistant"?"Assistant":"Tool";return c`
          <div class="session-log-entry ${F}">
            <div class="session-log-meta">
              <span class="session-log-role">${U}</span>
              <span>${new Date(C.timestamp).toLocaleString()}</span>
              ${C.tokens?c`<span>${B(C.tokens)}</span>`:f}
            </div>
            <div class="session-log-content">${_}</div>
            ${p.tools.length>0?c`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${p.summary}</summary>
                      <div class="session-log-tools-list">
                        ${p.tools.map(([M,q])=>c`
                            <span class="session-log-tools-pill">${M} × ${q}</span>
                          `)}
                      </div>
                    </details>
                  `:f}
          </div>
        `})}
        ${k.length===0?c`
                <div class="muted" style="padding: 12px">No messages match the filters.</div>
              `:f}
      </div>
    </div>
  `}const bm=`
  .usage-page-header {
    margin: 4px 0 12px;
  }
  .usage-page-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .usage-page-subtitle {
    font-size: 13px;
    color: var(--muted);
    margin: 0 0 12px;
  }
  /* ===== FILTERS & HEADER ===== */
  .usage-filters-inline {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-filters-inline select {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="date"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="text"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
    min-width: 180px;
  }
  .usage-filters-inline .btn-sm {
    padding: 6px 12px;
    font-size: 14px;
  }
  .usage-refresh-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 77, 77, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: #ff4d4d;
  }
  .usage-refresh-indicator::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #ff4d4d;
    border-top-color: transparent;
    border-radius: 50%;
    animation: usage-spin 0.6s linear infinite;
  }
  @keyframes usage-spin {
    to { transform: rotate(360deg); }
  }
  .active-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .filter-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px 4px 12px;
    background: var(--accent-subtle);
    border: 1px solid var(--accent);
    border-radius: 16px;
    font-size: 12px;
  }
  .filter-chip-label {
    color: var(--accent);
    font-weight: 500;
  }
  .filter-chip-remove {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    padding: 2px 4px;
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.15s;
  }
  .filter-chip-remove:hover {
    opacity: 1;
  }
  .filter-clear-btn {
    padding: 4px 10px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    margin-left: 8px;
  }
  .usage-query-bar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto;
    gap: 10px;
    align-items: center;
    /* Keep the dropdown filter row from visually touching the query row. */
    margin-bottom: 10px;
  }
  .usage-query-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    justify-self: end;
  }
  .usage-query-actions .btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-query-actions .btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-action-btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-action-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-primary-btn {
    background: #ff4d4d;
    color: #fff;
    border-color: #ff4d4d;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  }
  .btn.usage-primary-btn {
    background: #ff4d4d !important;
    border-color: #ff4d4d !important;
    color: #fff !important;
  }
  .usage-primary-btn:hover {
    background: #e64545;
    border-color: #e64545;
  }
  .btn.usage-primary-btn:hover {
    background: #e64545 !important;
    border-color: #e64545 !important;
  }
  .usage-primary-btn:disabled {
    background: rgba(255, 77, 77, 0.18);
    border-color: rgba(255, 77, 77, 0.3);
    color: #ff4d4d;
    box-shadow: none;
    cursor: default;
    opacity: 1;
  }
  .usage-primary-btn[disabled] {
    background: rgba(255, 77, 77, 0.18) !important;
    border-color: rgba(255, 77, 77, 0.3) !important;
    color: #ff4d4d !important;
    opacity: 1 !important;
  }
  .usage-secondary-btn {
    background: var(--bg-secondary);
    color: var(--text);
    border-color: var(--border);
  }
  .usage-query-input {
    width: 100%;
    min-width: 220px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-query-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-suggestion {
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s;
  }
  .usage-query-suggestion:hover {
    background: var(--bg-hover);
  }
  .usage-filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 14px;
  }
  details.usage-filter-select {
    position: relative;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 6px 10px;
    background: var(--bg);
    font-size: 12px;
    min-width: 140px;
  }
  details.usage-filter-select summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-weight: 500;
  }
  details.usage-filter-select summary::-webkit-details-marker {
    display: none;
  }
  .usage-filter-badge {
    font-size: 11px;
    color: var(--muted);
  }
  .usage-filter-popover {
    position: absolute;
    left: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 220px;
    z-index: 20;
  }
  .usage-filter-actions {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-filter-actions button {
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11px;
  }
  .usage-filter-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 200px;
    overflow: auto;
  }
  .usage-filter-option {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
  .usage-query-hint {
    font-size: 11px;
    color: var(--muted);
  }
  .usage-query-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
  }
  .usage-query-chip button {
    background: none;
    border: none;
    color: var(--muted);
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  .usage-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--bg);
  }
  .usage-header.pinned {
    position: sticky;
    top: 12px;
    z-index: 6;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
  .usage-pin-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
  }
  .usage-pin-btn.active {
    background: var(--accent-subtle);
    border-color: var(--accent);
    color: var(--accent);
  }
  .usage-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-header-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .usage-header-metrics {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-metric-badge {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: transparent;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-metric-badge strong {
    font-size: 12px;
    color: var(--text);
  }
  .usage-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .usage-controls .active-filters {
    flex: 1 1 100%;
  }
  .usage-controls input[type="date"] {
    min-width: 140px;
  }
  .usage-presets {
    display: inline-flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .usage-presets .btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .usage-quick-filters {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-select {
    min-width: 120px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .usage-export-menu summary {
    cursor: pointer;
    font-weight: 500;
    color: var(--text);
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-export-menu summary::-webkit-details-marker {
    display: none;
  }
  .usage-export-menu {
    position: relative;
  }
  .usage-export-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 12px;
  }
  .usage-export-popover {
    position: absolute;
    right: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 160px;
    z-index: 10;
  }
  .usage-export-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .usage-export-item {
    text-align: left;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 12px;
  }
  .usage-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }
  .usage-summary-card {
    padding: 12px;
    border-radius: 8px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .usage-mosaic {
    margin-top: 16px;
    padding: 16px;
  }
  .usage-mosaic-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }
  .usage-mosaic-title {
    font-weight: 600;
  }
  .usage-mosaic-sub {
    font-size: 12px;
    color: var(--muted);
  }
  .usage-mosaic-grid {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(260px, 2fr);
    gap: 16px;
    align-items: start;
  }
  .usage-mosaic-section {
    background: var(--bg-subtle);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
  }
  .usage-mosaic-section-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .usage-mosaic-total {
    font-size: 20px;
    font-weight: 700;
  }
  .usage-daypart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
  }
  .usage-daypart-cell {
    border-radius: 8px;
    padding: 10px;
    color: var(--text);
    background: rgba(255, 77, 77, 0.08);
    border: 1px solid rgba(255, 77, 77, 0.2);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .usage-daypart-label {
    font-size: 12px;
    font-weight: 600;
  }
  .usage-daypart-value {
    font-size: 14px;
  }
  .usage-hour-grid {
    display: grid;
    grid-template-columns: repeat(24, minmax(6px, 1fr));
    gap: 4px;
  }
  .usage-hour-cell {
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 77, 77, 0.1);
    border: 1px solid rgba(255, 77, 77, 0.2);
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .usage-hour-cell.selected {
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
  }
  .usage-hour-labels {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
    margin-top: 8px;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-hour-legend {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-hour-legend span {
    display: inline-block;
    width: 14px;
    height: 10px;
    border-radius: 4px;
    background: rgba(255, 77, 77, 0.15);
    border: 1px solid rgba(255, 77, 77, 0.2);
  }
  .usage-calendar-labels {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
    font-size: 10px;
    color: var(--muted);
    margin-bottom: 6px;
  }
  .usage-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
  }
  .usage-calendar-cell {
    height: 18px;
    border-radius: 4px;
    border: 1px solid rgba(255, 77, 77, 0.2);
    background: rgba(255, 77, 77, 0.08);
  }
  .usage-calendar-cell.empty {
    background: transparent;
    border-color: transparent;
  }
  .usage-summary-title {
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-left: 6px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 10px;
    color: var(--muted);
    cursor: help;
  }
  .usage-summary-value {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-strong);
  }
  .usage-summary-value.good {
    color: #1f8f4e;
  }
  .usage-summary-value.warn {
    color: #c57a00;
  }
  .usage-summary-value.bad {
    color: #c9372c;
  }
  .usage-summary-hint {
    font-size: 10px;
    color: var(--muted);
    cursor: help;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0 6px;
    line-height: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .usage-summary-sub {
    font-size: 11px;
    color: var(--muted);
    margin-top: 4px;
  }
  .usage-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .usage-list-item {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 12px;
    color: var(--text);
    align-items: flex-start;
  }
  .usage-list-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    text-align: right;
  }
  .usage-list-sub {
    font-size: 11px;
    color: var(--muted);
  }
  .usage-list-item.button {
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .usage-list-item.button:hover {
    color: var(--text-strong);
  }
`,ym=`
  .usage-list-item .muted {
    font-size: 11px;
  }
  .usage-error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .usage-error-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: center;
    font-size: 12px;
  }
  .usage-error-date {
    font-weight: 600;
  }
  .usage-error-rate {
    font-variant-numeric: tabular-nums;
  }
  .usage-error-sub {
    grid-column: 1 / -1;
    font-size: 11px;
    color: var(--muted);
  }
  .usage-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 11px;
    background: var(--bg);
    color: var(--text);
  }
  .usage-meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
  }
  .usage-meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
  .usage-meta-item span {
    color: var(--muted);
    font-size: 11px;
  }
  .usage-insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 12px;
  }
  .usage-insight-card {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
  }
  .usage-insight-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .usage-insight-subtitle {
    font-size: 11px;
    color: var(--muted);
    margin-top: 6px;
  }
  /* ===== CHART TOGGLE ===== */
  .chart-toggle {
    display: flex;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
  }
  .chart-toggle .toggle-btn {
    padding: 6px 14px;
    font-size: 13px;
    background: transparent;
    border: none;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .chart-toggle .toggle-btn:hover {
    color: var(--text);
  }
  .chart-toggle .toggle-btn.active {
    background: #ff4d4d;
    color: white;
  }
  .chart-toggle.small .toggle-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .sessions-toggle {
    border-radius: 4px;
  }
  .sessions-toggle .toggle-btn {
    border-radius: 4px;
  }
  .daily-chart-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 6px;
  }

  /* ===== DAILY BAR CHART ===== */
  .daily-chart {
    margin-top: 12px;
  }
  .daily-chart-bars {
    display: flex;
    align-items: flex-end;
    height: 200px;
    gap: 4px;
    padding: 8px 4px 36px;
  }
  .daily-bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    border-radius: 4px 4px 0 0;
    transition: background 0.15s;
    min-width: 0;
  }
  .daily-bar-wrapper:hover {
    background: var(--bg-hover);
  }
  .daily-bar-wrapper.selected {
    background: var(--accent-subtle);
  }
  .daily-bar-wrapper.selected .daily-bar {
    background: var(--accent);
  }
  .daily-bar {
    width: 100%;
    max-width: var(--bar-max-width, 32px);
    background: #ff4d4d;
    border-radius: 3px 3px 0 0;
    min-height: 2px;
    transition: all 0.15s;
    overflow: hidden;
  }
  .daily-bar-wrapper:hover .daily-bar {
    background: #cc3d3d;
  }
  .daily-bar-label {
    position: absolute;
    bottom: -28px;
    font-size: 10px;
    color: var(--muted);
    white-space: nowrap;
    text-align: center;
    transform: rotate(-35deg);
    transform-origin: top center;
  }
  .daily-bar-total {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: var(--muted);
    white-space: nowrap;
  }
  .daily-bar-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .daily-bar-wrapper:hover .daily-bar-tooltip {
    opacity: 1;
  }

  /* ===== COST/TOKEN BREAKDOWN BAR ===== */
  .cost-breakdown {
    margin-top: 18px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .cost-breakdown-header {
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--text-strong);
  }
  .cost-breakdown-bar {
    height: 28px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .cost-segment {
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
  }
  .cost-segment.output {
    background: #ef4444;
  }
  .cost-segment.input {
    background: #f59e0b;
  }
  .cost-segment.cache-write {
    background: #10b981;
  }
  .cost-segment.cache-read {
    background: #06b6d4;
  }
  .cost-breakdown-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .cost-breakdown-total {
    margin-top: 10px;
    font-size: 12px;
    color: var(--muted);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text);
    cursor: help;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .legend-dot.output {
    background: #ef4444;
  }
  .legend-dot.input {
    background: #f59e0b;
  }
  .legend-dot.cache-write {
    background: #10b981;
  }
  .legend-dot.cache-read {
    background: #06b6d4;
  }
  .legend-dot.system {
    background: #ff4d4d;
  }
  .legend-dot.skills {
    background: #8b5cf6;
  }
  .legend-dot.tools {
    background: #ec4899;
  }
  .legend-dot.files {
    background: #f59e0b;
  }
  .cost-breakdown-note {
    margin-top: 10px;
    font-size: 11px;
    color: var(--muted);
    line-height: 1.4;
  }

  /* ===== SESSION BARS (scrollable list) ===== */
  .session-bars {
    margin-top: 16px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
  }
  .session-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s;
  }
  .session-bar-row:last-child {
    border-bottom: none;
  }
  .session-bar-row:hover {
    background: var(--bg-hover);
  }
  .session-bar-row.selected {
    background: var(--accent-subtle);
  }
  .session-bar-label {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 13px;
    color: var(--text);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .session-bar-title {
    /* Prefer showing the full name; wrap instead of truncating. */
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .session-bar-meta {
    font-size: 10px;
    color: var(--muted);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .session-bar-track {
    flex: 0 0 90px;
    height: 6px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
    opacity: 0.6;
  }
  .session-bar-fill {
    height: 100%;
    background: rgba(255, 77, 77, 0.7);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
  .session-bar-value {
    flex: 0 0 70px;
    text-align: right;
    font-size: 12px;
    font-family: var(--font-mono);
    color: var(--muted);
  }
  .session-bar-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }
  .session-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .session-copy-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
    color: var(--text);
  }

  /* ===== TIME SERIES CHART ===== */
  .session-timeseries {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .timeseries-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .timeseries-controls {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .timeseries-header {
    font-weight: 600;
    color: var(--text);
  }
  .timeseries-chart {
    width: 100%;
    overflow: hidden;
  }
  .timeseries-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .timeseries-svg .axis-label {
    font-size: 10px;
    fill: var(--muted);
  }
  .timeseries-svg .ts-area {
    fill: #ff4d4d;
    fill-opacity: 0.1;
  }
  .timeseries-svg .ts-line {
    fill: none;
    stroke: #ff4d4d;
    stroke-width: 2;
  }
  .timeseries-svg .ts-dot {
    fill: #ff4d4d;
    transition: r 0.15s, fill 0.15s;
  }
  .timeseries-svg .ts-dot:hover {
    r: 5;
  }
  .timeseries-svg .ts-bar {
    fill: #ff4d4d;
    transition: fill 0.15s;
  }
  .timeseries-svg .ts-bar:hover {
    fill: #cc3d3d;
  }
  .timeseries-svg .ts-bar.output { fill: #ef4444; }
  .timeseries-svg .ts-bar.input { fill: #f59e0b; }
  .timeseries-svg .ts-bar.cache-write { fill: #10b981; }
  .timeseries-svg .ts-bar.cache-read { fill: #06b6d4; }
  .timeseries-summary {
    margin-top: 12px;
    font-size: 13px;
    color: var(--muted);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .timeseries-loading {
    padding: 24px;
    text-align: center;
    color: var(--muted);
  }

  /* ===== SESSION LOGS ===== */
  .session-logs {
    margin-top: 24px;
    background: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }
  .session-logs-header {
    padding: 10px 14px;
    font-weight: 600;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    background: var(--bg-secondary);
  }
  .session-logs-loading {
    padding: 24px;
    text-align: center;
    color: var(--muted);
  }
  .session-logs-list {
    max-height: 400px;
    overflow-y: auto;
  }
  .session-log-entry {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: var(--bg);
  }
  .session-log-entry:last-child {
    border-bottom: none;
  }
  .session-log-entry.user {
    border-left: 3px solid var(--accent);
  }
  .session-log-entry.assistant {
    border-left: 3px solid var(--border-strong);
  }
  .session-log-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 11px;
    color: var(--muted);
    flex-wrap: wrap;
  }
  .session-log-role {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 999px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .session-log-entry.user .session-log-role {
    color: var(--accent);
  }
  .session-log-entry.assistant .session-log-role {
    color: var(--muted);
  }
  .session-log-content {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text);
    white-space: pre-wrap;
    word-break: break-word;
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border);
    max-height: 220px;
    overflow-y: auto;
  }

  /* ===== CONTEXT WEIGHT BREAKDOWN ===== */
  .context-weight-breakdown {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .context-weight-breakdown .context-weight-header {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--text);
  }
  .context-weight-desc {
    font-size: 12px;
    color: var(--muted);
    margin: 0 0 12px 0;
  }
  .context-stacked-bar {
    height: 24px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .context-segment {
    height: 100%;
    transition: width 0.3s ease;
  }
  .context-segment.system {
    background: #ff4d4d;
  }
  .context-segment.skills {
    background: #8b5cf6;
  }
  .context-segment.tools {
    background: #ec4899;
  }
  .context-segment.files {
    background: #f59e0b;
  }
  .context-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .context-total {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: var(--muted);
  }
  .context-details {
    margin-top: 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .context-details summary {
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .context-details[open] summary {
    border-bottom: 1px solid var(--border);
  }
  .context-list {
    max-height: 200px;
    overflow-y: auto;
  }
  .context-list-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--muted);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
  }
  .context-list-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 12px;
    border-bottom: 1px solid var(--border);
  }
  .context-list-item:last-child {
    border-bottom: none;
  }
  .context-list-item .mono {
    font-family: var(--font-mono);
    color: var(--text);
  }
  .context-list-item .muted {
    color: var(--muted);
    font-family: var(--font-mono);
  }

  /* ===== NO CONTEXT NOTE ===== */
  .no-context-note {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 13px;
    color: var(--muted);
    line-height: 1.5;
  }

  /* ===== TWO COLUMN LAYOUT ===== */
  .usage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
    align-items: stretch;
  }
  .usage-grid-left {
    display: flex;
    flex-direction: column;
  }
  .usage-grid-right {
    display: flex;
    flex-direction: column;
  }
  
  /* ===== LEFT CARD (Daily + Breakdown) ===== */
  .usage-left-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .usage-left-card .daily-chart-bars {
    flex: 1;
    min-height: 200px;
  }
  .usage-left-card .sessions-panel-title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;
  }
`,xm=`
  
  /* ===== COMPACT DAILY CHART ===== */
  .daily-chart-compact {
    margin-bottom: 16px;
  }
  .daily-chart-compact .sessions-panel-title {
    margin-bottom: 8px;
  }
  .daily-chart-compact .daily-chart-bars {
    height: 100px;
    padding-bottom: 20px;
  }
  
  /* ===== COMPACT COST BREAKDOWN ===== */
  .cost-breakdown-compact {
    padding: 0;
    margin: 0;
    background: transparent;
    border-top: 1px solid var(--border);
    padding-top: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-header {
    margin-bottom: 8px;
  }
  .cost-breakdown-compact .cost-breakdown-legend {
    gap: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-note {
    display: none;
  }
  
  /* ===== SESSIONS CARD ===== */
  .sessions-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .sessions-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sessions-card-title {
    font-weight: 600;
    font-size: 14px;
  }
  .sessions-card-count {
    font-size: 12px;
    color: var(--muted);
  }
  .sessions-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 8px 0 10px;
    font-size: 12px;
    color: var(--muted);
  }
  .sessions-card-stats {
    display: inline-flex;
    gap: 12px;
  }
  .sessions-sort {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--muted);
  }
  .sessions-sort select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .sessions-action-btn {
    height: 28px;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1;
  }
  .sessions-action-btn.icon {
    width: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sessions-card-hint {
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 8px;
  }
  .sessions-card .session-bars {
    max-height: 280px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    margin: 0;
    overflow-y: auto;
    padding: 8px;
  }
  .sessions-card .session-bar-row {
    padding: 6px 8px;
    border-radius: 6px;
    margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.15s;
  }
  .sessions-card .session-bar-row:hover {
    border-color: var(--border);
    background: var(--bg-hover);
  }
  .sessions-card .session-bar-row.selected {
    border-color: var(--accent);
    background: var(--accent-subtle);
    box-shadow: inset 0 0 0 1px rgba(255, 77, 77, 0.15);
  }
  .sessions-card .session-bar-label {
    flex: 1 1 auto;
    min-width: 140px;
    font-size: 12px;
  }
  .sessions-card .session-bar-value {
    flex: 0 0 60px;
    font-size: 11px;
    font-weight: 600;
  }
  .sessions-card .session-bar-track {
    flex: 0 0 70px;
    height: 5px;
    opacity: 0.5;
  }
  .sessions-card .session-bar-fill {
    background: rgba(255, 77, 77, 0.55);
  }
  .sessions-clear-btn {
    margin-left: auto;
  }
  
  /* ===== EMPTY DETAIL STATE ===== */
  .session-detail-empty {
    margin-top: 18px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 2px dashed var(--border);
    padding: 32px;
    text-align: center;
  }
  .session-detail-empty-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }
  .session-detail-empty-desc {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .session-detail-empty-features {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .session-detail-empty-feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--muted);
  }
  .session-detail-empty-feature .icon {
    font-size: 16px;
  }
  
  /* ===== SESSION DETAIL PANEL ===== */
  .session-detail-panel {
    margin-top: 12px;
    /* inherits background, border-radius, shadow from .card */
    border: 2px solid var(--accent) !important;
  }
  .session-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }
  .session-detail-header:hover {
    background: var(--bg-hover);
  }
  .session-detail-title {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-detail-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-close-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    cursor: pointer;
    padding: 2px 8px;
    font-size: 16px;
    line-height: 1;
    border-radius: 4px;
    transition: background 0.15s, color 0.15s;
  }
  .session-close-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--accent);
  }
  .session-detail-stats {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: var(--muted);
  }
  .session-detail-stats strong {
    color: var(--text);
    font-family: var(--font-mono);
  }
  .session-detail-content {
    padding: 12px;
  }
  .session-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }
  .session-summary-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .session-summary-title {
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 4px;
  }
  .session-summary-value {
    font-size: 14px;
    font-weight: 600;
  }
  .session-summary-meta {
    font-size: 11px;
    color: var(--muted);
    margin-top: 4px;
  }
  .session-detail-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    /* Separate "Usage Over Time" from the summary + Top Tools/Model Mix cards above. */
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .session-detail-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
  }
  .session-detail-bottom .session-logs-compact {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-detail-bottom .session-logs-compact .session-logs-list {
    flex: 1 1 auto;
    max-height: none;
  }
  .context-details-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
  }
  .context-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 8px;
  }
  .context-breakdown-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .context-breakdown-title {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .context-breakdown-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 11px;
  }
  .context-breakdown-item {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .context-breakdown-more {
    font-size: 10px;
    color: var(--muted);
    margin-top: 4px;
  }
  .context-breakdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .context-expand-btn {
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--muted);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .context-expand-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--bg);
  }
  
  /* ===== COMPACT TIMESERIES ===== */
  .session-timeseries-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .session-timeseries-compact .timeseries-header-row {
    margin-bottom: 8px;
  }
  .session-timeseries-compact .timeseries-header {
    font-size: 12px;
  }
  .session-timeseries-compact .timeseries-summary {
    font-size: 11px;
    margin-top: 8px;
  }
  
  /* ===== COMPACT CONTEXT ===== */
  .context-weight-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .context-weight-compact .context-weight-header {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .context-weight-compact .context-weight-desc {
    font-size: 11px;
    margin-bottom: 8px;
  }
  .context-weight-compact .context-stacked-bar {
    height: 16px;
  }
  .context-weight-compact .context-legend {
    font-size: 11px;
    gap: 10px;
    margin-top: 8px;
  }
  .context-weight-compact .context-total {
    font-size: 11px;
    margin-top: 6px;
  }
  .context-weight-compact .context-details {
    margin-top: 8px;
  }
  .context-weight-compact .context-details summary {
    font-size: 12px;
    padding: 6px 10px;
  }
  
  /* ===== COMPACT LOGS ===== */
  .session-logs-compact {
    background: var(--bg);
    border-radius: 10px;
    border: 1px solid var(--border);
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-logs-compact .session-logs-header {
    padding: 10px 12px;
    font-size: 12px;
  }
  .session-logs-compact .session-logs-list {
    max-height: none;
    flex: 1 1 auto;
    overflow: auto;
  }
  .session-logs-compact .session-log-entry {
    padding: 8px 12px;
  }
  .session-logs-compact .session-log-content {
    font-size: 12px;
    max-height: 160px;
  }
  .session-log-tools {
    margin-top: 6px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg-secondary);
    padding: 6px 8px;
    font-size: 11px;
    color: var(--text);
  }
  .session-log-tools summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }
  .session-log-tools summary::-webkit-details-marker {
    display: none;
  }
  .session-log-tools-list {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .session-log-tools-pill {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 10px;
    background: var(--bg);
    color: var(--text);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 900px) {
    .usage-grid {
      grid-template-columns: 1fr;
    }
    .session-detail-row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .session-bar-label {
      flex: 0 0 100px;
    }
    .cost-breakdown-legend {
      gap: 10px;
    }
    .legend-item {
      font-size: 11px;
    }
    .daily-chart-bars {
      height: 170px;
      gap: 6px;
      padding-bottom: 40px;
    }
    .daily-bar-label {
      font-size: 8px;
      bottom: -30px;
      transform: rotate(-45deg);
    }
    .usage-mosaic-grid {
      grid-template-columns: 1fr;
    }
    .usage-hour-grid {
      grid-template-columns: repeat(12, minmax(10px, 1fr));
    }
    .usage-hour-cell {
      height: 22px;
    }
  }

  /* ===== CHART AXIS ===== */
  .ts-axis-label {
    font-size: 5px;
    fill: var(--muted);
  }

  /* ===== RANGE SELECTION HANDLES ===== */
  .chart-handle-zone {
    position: absolute;
    top: 0;
    width: 16px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    transform: translateX(-50%);
  }

  .timeseries-chart-wrapper {
    position: relative;
  }

  .timeseries-reset-btn {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 10px;
    font-size: 11px;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    margin-left: 8px;
  }

  .timeseries-reset-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--border-strong);
  }
`,$m=[bm,ym,xm].join(`
`);function wr(){return{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}}function kr(e,t){return e.input+=t.input,e.output+=t.output,e.cacheRead+=t.cacheRead,e.cacheWrite+=t.cacheWrite,e.totalTokens+=t.totalTokens,e.totalCost+=t.totalCost,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0,e}function wm(e){if(e.loading&&!e.totals)return c`
      <style>
        @keyframes initial-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes initial-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <section class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2px;">
              <div class="card-title" style="margin: 0;">Token Usage</div>
              <span style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: rgba(255, 77, 77, 0.1);
                border-radius: 4px;
                font-size: 12px;
                color: #ff4d4d;
              ">
                <span style="
                  width: 10px;
                  height: 10px;
                  border: 2px solid #ff4d4d;
                  border-top-color: transparent;
                  border-radius: 50%;
                  animation: initial-spin 0.6s linear infinite;
                "></span>
                Loading
              </span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="date" .value=${e.startDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
              <span style="color: var(--muted);">to</span>
              <input type="date" .value=${e.endDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
            </div>
          </div>
        </div>
      </section>
    `;const t=e.chartMode==="tokens",n=e.query.trim().length>0,s=e.queryDraft.trim().length>0,i=[...e.sessions].toSorted((P,H)=>{const G=t?P.usage?.totalTokens??0:P.usage?.totalCost??0;return(t?H.usage?.totalTokens??0:H.usage?.totalCost??0)-G}),o=e.selectedDays.length>0?i.filter(P=>{if(P.usage?.activityDates?.length)return P.usage.activityDates.some(X=>e.selectedDays.includes(X));if(!P.updatedAt)return!1;const H=new Date(P.updatedAt),G=`${H.getFullYear()}-${String(H.getMonth()+1).padStart(2,"0")}-${String(H.getDate()).padStart(2,"0")}`;return e.selectedDays.includes(G)}):i,a=(P,H)=>{if(H.length===0)return!0;const G=P.usage,X=G?.firstActivity??P.updatedAt,de=G?.lastActivity??P.updatedAt;if(!X||!de)return!1;const te=Math.min(X,de),ae=Math.max(X,de);let Z=te;for(;Z<=ae;){const K=new Date(Z),re=Yo(K,e.timeZone);if(H.includes(re))return!0;const ce=Xo(K,e.timeZone);Z=Math.min(ce.getTime(),ae)+1}return!1},l=e.selectedHours.length>0?o.filter(P=>a(P,e.selectedHours)):o,r=Ph(l,e.query),d=r.sessions,g=r.warnings,u=Xh(e.queryDraft,i,e.aggregates),m=Qo(e.query),h=P=>{const H=Ht(P);return m.filter(G=>Ht(G.key??"")===H).map(G=>G.value).filter(Boolean)},b=P=>{const H=new Set;for(const G of P)G&&H.add(G);return Array.from(H)},k=b(i.map(P=>P.agentId)).slice(0,12),T=b(i.map(P=>P.channel)).slice(0,12),I=b([...i.map(P=>P.modelProvider),...i.map(P=>P.providerOverride),...e.aggregates?.byProvider.map(P=>P.provider)??[]]).slice(0,12),R=b([...i.map(P=>P.model),...e.aggregates?.byModel.map(P=>P.model)??[]]).slice(0,12),A=b(e.aggregates?.tools.tools.map(P=>P.name)??[]).slice(0,12),w=e.selectedSessions.length===1?e.sessions.find(P=>P.key===e.selectedSessions[0])??d.find(P=>P.key===e.selectedSessions[0]):null,L=P=>P.reduce((H,G)=>G.usage?kr(H,G.usage):H,wr()),C=P=>e.costDaily.filter(G=>P.includes(G.date)).reduce((G,X)=>kr(G,X),wr());let p,_;const F=i.length;if(e.selectedSessions.length>0){const P=d.filter(H=>e.selectedSessions.includes(H.key));p=L(P),_=P.length}else e.selectedDays.length>0&&e.selectedHours.length===0?(p=C(e.selectedDays),_=d.length):e.selectedHours.length>0||n?(p=L(d),_=d.length):(p=e.totals,_=F);const U=e.selectedSessions.length>0?d.filter(P=>e.selectedSessions.includes(P.key)):n||e.selectedHours.length>0?d:e.selectedDays.length>0?o:i,M=Gh(U,e.aggregates),q=e.selectedSessions.length>0?(()=>{const P=d.filter(G=>e.selectedSessions.includes(G.key)),H=new Set;for(const G of P)for(const X of G.usage?.activityDates??[])H.add(X);return H.size>0?e.costDaily.filter(G=>H.has(G.date)):e.costDaily})():e.costDaily,W=Jh(U,p,M),V=!e.loading&&!e.totals&&e.sessions.length===0,E=(p?.missingCostEntries??0)>0||(p?p.totalTokens>0&&p.totalCost===0&&p.input+p.output+p.cacheRead+p.cacheWrite>0:!1),j=[{label:"Today",days:1},{label:"7d",days:7},{label:"30d",days:30}],Y=P=>{const H=new Date,G=new Date;G.setDate(G.getDate()-(P-1)),e.onStartDateChange(Ti(G)),e.onEndDateChange(Ti(H))},J=(P,H,G)=>{if(G.length===0)return f;const X=h(P),de=new Set(X.map(Z=>Ht(Z))),te=G.length>0&&G.every(Z=>de.has(Ht(Z))),ae=X.length;return c`
      <details
        class="usage-filter-select"
        @toggle=${Z=>{const K=Z.currentTarget;if(!K.open)return;const re=ce=>{ce.composedPath().includes(K)||(K.open=!1,window.removeEventListener("click",re,!0))};window.addEventListener("click",re,!0)}}
      >
        <summary>
          <span>${H}</span>
          ${ae>0?c`<span class="usage-filter-badge">${ae}</span>`:c`
                  <span class="usage-filter-badge">All</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn-sm"
              @click=${Z=>{Z.preventDefault(),Z.stopPropagation(),e.onQueryDraftChange(xr(e.queryDraft,P,G))}}
              ?disabled=${te}
            >
              Select All
            </button>
            <button
              class="btn btn-sm"
              @click=${Z=>{Z.preventDefault(),Z.stopPropagation(),e.onQueryDraftChange(xr(e.queryDraft,P,[]))}}
              ?disabled=${ae===0}
            >
              Clear
            </button>
          </div>
          <div class="usage-filter-options">
            ${G.map(Z=>{const K=de.has(Ht(Z));return c`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${K}
                    @change=${re=>{const ce=re.target,ve=`${P}:${Z}`;e.onQueryDraftChange(ce.checked?em(e.queryDraft,ve):yr(e.queryDraft,ve))}}
                  />
                  <span>${Z}</span>
                </label>
              `})}
          </div>
        </div>
      </details>
    `},fe=Ti(new Date);return c`
    <style>${$m}</style>

    <section class="usage-page-header">
      <div class="usage-page-title">Usage</div>
      <div class="usage-page-subtitle">See where tokens go, when sessions spike, and what drives cost.</div>
    </section>

    <section class="card usage-header ${e.headerPinned?"pinned":""}">
      <div class="usage-header-row">
        <div class="usage-header-title">
          <div class="card-title" style="margin: 0;">Filters</div>
          ${e.loading?c`
                  <span class="usage-refresh-indicator">Loading</span>
                `:f}
          ${V?c`
                  <span class="usage-query-hint">Select a date range and click Refresh to load usage.</span>
                `:f}
        </div>
        <div class="usage-header-metrics">
          ${p?c`
                <span class="usage-metric-badge">
                  <strong>${B(p.totalTokens)}</strong> tokens
                </span>
                <span class="usage-metric-badge">
                  <strong>${ie(p.totalCost)}</strong> cost
                </span>
                <span class="usage-metric-badge">
                  <strong>${_}</strong>
                  session${_!==1?"s":""}
                </span>
              `:f}
          <button
            class="usage-pin-btn ${e.headerPinned?"active":""}"
            title=${e.headerPinned?"Unpin filters":"Pin filters"}
            @click=${e.onToggleHeaderPinned}
          >
            ${e.headerPinned?"Pinned":"Pin"}
          </button>
          <details
            class="usage-export-menu"
            @toggle=${P=>{const H=P.currentTarget;if(!H.open)return;const G=X=>{X.composedPath().includes(H)||(H.open=!1,window.removeEventListener("click",G,!0))};window.addEventListener("click",G,!0)}}
          >
            <summary class="usage-export-button">Export ▾</summary>
            <div class="usage-export-popover">
              <div class="usage-export-list">
                <button
                  class="usage-export-item"
                  @click=${()=>_i(`openclaw-usage-sessions-${fe}.csv`,Qh(d),"text/csv")}
                  ?disabled=${d.length===0}
                >
                  Sessions CSV
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>_i(`openclaw-usage-daily-${fe}.csv`,Yh(q),"text/csv")}
                  ?disabled=${q.length===0}
                >
                  Daily CSV
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>_i(`openclaw-usage-${fe}.json`,JSON.stringify({totals:p,sessions:d,daily:q,aggregates:M},null,2),"application/json")}
                  ?disabled=${d.length===0&&q.length===0}
                >
                  JSON
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="usage-header-row">
        <div class="usage-controls">
          ${nm(e.selectedDays,e.selectedHours,e.selectedSessions,e.sessions,e.onClearDays,e.onClearHours,e.onClearSessions,e.onClearFilters)}
          <div class="usage-presets">
            ${j.map(P=>c`
                <button class="btn btn-sm" @click=${()=>Y(P.days)}>
                  ${P.label}
                </button>
              `)}
          </div>
          <input
            type="date"
            .value=${e.startDate}
            title="Start Date"
            @change=${P=>e.onStartDateChange(P.target.value)}
          />
          <span style="color: var(--muted);">to</span>
          <input
            type="date"
            .value=${e.endDate}
            title="End Date"
            @change=${P=>e.onEndDateChange(P.target.value)}
          />
          <select
            title="Time zone"
            .value=${e.timeZone}
            @change=${P=>e.onTimeZoneChange(P.target.value)}
          >
            <option value="local">Local</option>
            <option value="utc">UTC</option>
          </select>
          <div class="chart-toggle">
            <button
              class="toggle-btn ${t?"active":""}"
              @click=${()=>e.onChartModeChange("tokens")}
            >
              Tokens
            </button>
            <button
              class="toggle-btn ${t?"":"active"}"
              @click=${()=>e.onChartModeChange("cost")}
            >
              Cost
            </button>
          </div>
          <button
            class="btn btn-sm usage-action-btn usage-primary-btn"
            @click=${e.onRefresh}
            ?disabled=${e.loading}
          >
            Refresh
          </button>
        </div>
        
      </div>

      <div style="margin-top: 12px;">
          <div class="usage-query-bar">
          <input
            class="usage-query-input"
            type="text"
            .value=${e.queryDraft}
            placeholder="Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)"
            @input=${P=>e.onQueryDraftChange(P.target.value)}
            @keydown=${P=>{P.key==="Enter"&&(P.preventDefault(),e.onApplyQuery())}}
          />
          <div class="usage-query-actions">
            <button
              class="btn btn-sm usage-action-btn usage-secondary-btn"
              @click=${e.onApplyQuery}
              ?disabled=${e.loading||!s&&!n}
            >
              Filter (client-side)
            </button>
            ${s||n?c`<button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${e.onClearQuery}>Clear</button>`:f}
            <span class="usage-query-hint">
              ${n?`${d.length} of ${F} sessions match`:`${F} sessions in range`}
            </span>
          </div>
        </div>
        <div class="usage-filter-row">
          ${J("agent","Agent",k)}
          ${J("channel","Channel",T)}
          ${J("provider","Provider",I)}
          ${J("model","Model",R)}
          ${J("tool","Tool",A)}
          <span class="usage-query-hint">
            Tip: use filters or click bars to filter days.
          </span>
        </div>
        ${m.length>0?c`
                <div class="usage-query-chips">
                  ${m.map(P=>{const H=P.raw;return c`
                      <span class="usage-query-chip">
                        ${H}
                        <button
                          title="Remove filter"
                          @click=${()=>e.onQueryDraftChange(yr(e.queryDraft,H))}
                        >
                          ×
                        </button>
                      </span>
                    `})}
                </div>
              `:f}
        ${u.length>0?c`
                <div class="usage-query-suggestions">
                  ${u.map(P=>c`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>e.onQueryDraftChange(Zh(e.queryDraft,P.value))}
                      >
                        ${P.label}
                      </button>
                    `)}
                </div>
              `:f}
        ${g.length>0?c`
                <div class="callout warning" style="margin-top: 8px;">
                  ${g.join(" · ")}
                </div>
              `:f}
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}

      ${e.sessionsLimitReached?c`
              <div class="callout warning" style="margin-top: 12px">
                Showing first 1,000 sessions. Narrow date range for complete results.
              </div>
            `:f}
    </section>

    ${om(p,M,W,E,Hh(U,e.timeZone),_,F)}

    ${qh(U,e.timeZone,e.selectedHours,e.onSelectHour)}

    <!-- Two-column layout: Daily+Breakdown on left, Sessions on right -->
    <div class="usage-grid">
      <div class="usage-grid-left">
        <div class="card usage-left-card">
          ${sm(q,e.selectedDays,e.chartMode,e.dailyChartMode,e.onDailyChartModeChange,e.onSelectDay)}
          ${p?im(p,e.chartMode):f}
        </div>
      </div>
      <div class="usage-grid-right">
        ${am(d,e.selectedSessions,e.selectedDays,t,e.sessionSort,e.sessionSortDir,e.recentSessions,e.sessionsTab,e.onSelectSession,e.onSessionSortChange,e.onSessionSortDirChange,e.onSessionsTabChange,e.visibleColumns,F,e.onClearSessions)}
      </div>
    </div>

    <!-- Session Detail Panel (when selected) or Empty State -->
    ${w?fm(w,e.timeSeries,e.timeSeriesLoading,e.timeSeriesMode,e.onTimeSeriesModeChange,e.timeSeriesBreakdownMode,e.onTimeSeriesBreakdownChange,e.timeSeriesCursorStart,e.timeSeriesCursorEnd,e.onTimeSeriesCursorRangeChange,e.startDate,e.endDate,e.selectedDays,e.sessionLogs,e.sessionLogsLoading,e.sessionLogsExpanded,e.onToggleSessionLogsExpanded,{roles:e.logFilterRoles,tools:e.logFilterTools,hasTools:e.logFilterHasTools,query:e.logFilterQuery},e.onLogFilterRolesChange,e.onLogFilterToolsChange,e.onLogFilterHasToolsChange,e.onLogFilterQueryChange,e.onLogFilterClear,e.contextExpanded,e.onToggleContextExpanded,e.onClearSessions):dm()}
  `}let Ei=null;const Sr=e=>{Ei&&clearTimeout(Ei),Ei=window.setTimeout(()=>{io(e)},400)};function km(e){return e.tab!=="usage"?f:wm({loading:e.usageLoading,error:e.usageError,startDate:e.usageStartDate,endDate:e.usageEndDate,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[],selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,timeSeriesCursorStart:e.usageTimeSeriesCursorStart,timeSeriesCursorEnd:e.usageTimeSeriesCursorEnd,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilterRoles:e.usageLogFilterRoles,logFilterTools:e.usageLogFilterTools,logFilterHasTools:e.usageLogFilterHasTools,logFilterQuery:e.usageLogFilterQuery,query:e.usageQuery,queryDraft:e.usageQueryDraft,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,timeZone:e.usageTimeZone,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned,onStartDateChange:t=>{e.usageStartDate=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Sr(e)},onEndDateChange:t=>{e.usageEndDate=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Sr(e)},onRefresh:()=>io(e),onTimeZoneChange:t=>{e.usageTimeZone=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],io(e)},onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:t=>{e.usageLogFilterRoles=t},onLogFilterToolsChange:t=>{e.usageLogFilterTools=t},onLogFilterHasToolsChange:t=>{e.usageLogFilterHasTools=t},onLogFilterQueryChange:t=>{e.usageLogFilterQuery=t},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=""},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(t,n)=>{if(n&&e.usageSelectedHours.length>0){const s=Array.from({length:24},(l,r)=>r),i=e.usageSelectedHours[e.usageSelectedHours.length-1],o=s.indexOf(i),a=s.indexOf(t);if(o!==-1&&a!==-1){const[l,r]=o<a?[o,a]:[a,o],d=s.slice(l,r+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...d])]}}else e.usageSelectedHours.includes(t)?e.usageSelectedHours=e.usageSelectedHours.filter(s=>s!==t):e.usageSelectedHours=[...e.usageSelectedHours,t]},onQueryDraftChange:t=>{e.usageQueryDraft=t,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQueryDraft="",e.usageQuery=""},onSessionSortChange:t=>{e.usageSessionSort=t},onSessionSortDirChange:t=>{e.usageSessionSortDir=t},onSessionsTabChange:t=>{e.usageSessionsTab=t},onToggleColumn:t=>{e.usageVisibleColumns.includes(t)?e.usageVisibleColumns=e.usageVisibleColumns.filter(n=>n!==t):e.usageVisibleColumns=[...e.usageVisibleColumns,t]},onSelectSession:(t,n)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[t,...e.usageRecentSessions.filter(s=>s!==t)].slice(0,8),n&&e.usageSelectedSessions.length>0){const s=e.usageChartMode==="tokens",o=[...e.usageResult?.sessions??[]].toSorted((d,g)=>{const u=s?d.usage?.totalTokens??0:d.usage?.totalCost??0;return(s?g.usage?.totalTokens??0:g.usage?.totalCost??0)-u}).map(d=>d.key),a=e.usageSelectedSessions[e.usageSelectedSessions.length-1],l=o.indexOf(a),r=o.indexOf(t);if(l!==-1&&r!==-1){const[d,g]=l<r?[l,r]:[r,l],u=o.slice(d,g+1),m=[...new Set([...e.usageSelectedSessions,...u])];e.usageSelectedSessions=m}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===t?e.usageSelectedSessions=[]:e.usageSelectedSessions=[t];e.usageTimeSeriesCursorStart=null,e.usageTimeSeriesCursorEnd=null,e.usageSelectedSessions.length===1&&(_h(e,e.usageSelectedSessions[0]),Eh(e,e.usageSelectedSessions[0]))},onSelectDay:(t,n)=>{if(n&&e.usageSelectedDays.length>0){const s=(e.usageCostSummary?.daily??[]).map(l=>l.date),i=e.usageSelectedDays[e.usageSelectedDays.length-1],o=s.indexOf(i),a=s.indexOf(t);if(o!==-1&&a!==-1){const[l,r]=o<a?[o,a]:[a,o],d=s.slice(l,r+1),g=[...new Set([...e.usageSelectedDays,...d])];e.usageSelectedDays=g}}else e.usageSelectedDays.includes(t)?e.usageSelectedDays=e.usageSelectedDays.filter(s=>s!==t):e.usageSelectedDays=[t]},onChartModeChange:t=>{e.usageChartMode=t},onDailyChartModeChange:t=>{e.usageDailyChartMode=t},onTimeSeriesModeChange:t=>{e.usageTimeSeriesMode=t},onTimeSeriesBreakdownChange:t=>{e.usageTimeSeriesBreakdownMode=t},onTimeSeriesCursorRangeChange:(t,n)=>{e.usageTimeSeriesCursorStart=t,e.usageTimeSeriesCursorEnd=n},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}})}const Zo={CHILD:2},ea=e=>(...t)=>({_$litDirective$:e,values:t});let ta=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const{I:Sm}=Su,Ar=e=>e,Am=e=>e.strings===void 0,Cr=()=>document.createComment(""),_n=(e,t,n)=>{const s=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=s.insertBefore(Cr(),i),a=s.insertBefore(Cr(),i);n=new Sm(o,a,e,e.options)}else{const o=n._$AB.nextSibling,a=n._$AM,l=a!==e;if(l){let r;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(r=e._$AU)!==a._$AU&&n._$AP(r)}if(o!==i||l){let r=n._$AA;for(;r!==o;){const d=Ar(r).nextSibling;Ar(s).insertBefore(r,i),r=d}}}return n},Pt=(e,t,n=e)=>(e._$AI(t,n),e),Cm={},Tm=(e,t=Cm)=>e._$AH=t,_m=e=>e._$AH,Ri=e=>{e._$AR(),e._$AA.remove()};const Tr=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},Em=ea(class extends ta{constructor(e){if(super(e),e.type!==Zo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const i=[],o=[];let a=0;for(const l of e)i[a]=s?s(l,a):a,o[a]=n(l,a),a++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const i=_m(e),{values:o,keys:a}=this.dt(t,n,s);if(!Array.isArray(i))return this.ut=a,o;const l=this.ut??=[],r=[];let d,g,u=0,m=i.length-1,h=0,b=o.length-1;for(;u<=m&&h<=b;)if(i[u]===null)u++;else if(i[m]===null)m--;else if(l[u]===a[h])r[h]=Pt(i[u],o[h]),u++,h++;else if(l[m]===a[b])r[b]=Pt(i[m],o[b]),m--,b--;else if(l[u]===a[b])r[b]=Pt(i[u],o[b]),_n(e,r[b+1],i[u]),u++,b--;else if(l[m]===a[h])r[h]=Pt(i[m],o[h]),_n(e,i[u],i[m]),m--,h++;else if(d===void 0&&(d=Tr(a,h,b),g=Tr(l,u,m)),d.has(l[u]))if(d.has(l[m])){const k=g.get(a[h]),T=k!==void 0?i[k]:null;if(T===null){const I=_n(e,i[u]);Pt(I,o[h]),r[h]=I}else r[h]=Pt(T,o[h]),_n(e,i[u],T),i[k]=null;h++}else Ri(i[m]),m--;else Ri(i[u]),u++;for(;h<=b;){const k=_n(e,r[b+1]);Pt(k,o[h]),r[h++]=k}for(;u<=m;){const k=i[u++];k!==null&&Ri(k)}return this.ut=a,Tm(e,r),kt}}),$e={messageSquare:c`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:c`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:c`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:c`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:c`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:c`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:c`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:c`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,menu:c`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:c`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:c`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:c`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:c`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:c`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,wrench:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:c`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:c`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:c`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:c`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,image:c`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:c`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:c`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:c`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,puzzle:c`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `,refresh:c`
    <svg viewBox="0 0 24 24">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  `},Rm=["system","light","dark"];function Im(e){const t=Math.max(0,Rm.indexOf(e.theme)),n=s=>i=>{const a={element:i.currentTarget};(i.clientX||i.clientY)&&(a.pointerClientX=i.clientX,a.pointerClientY=i.clientY),e.setTheme(s,a)};return c`
    <div class="theme-toggle" style="--theme-index: ${t};">
      <div class="theme-toggle__track" role="group" aria-label="Theme">
        <span class="theme-toggle__indicator"></span>
        <button
          class="theme-toggle__button ${e.theme==="system"?"active":""}"
          @click=${n("system")}
          aria-pressed=${e.theme==="system"}
          aria-label="System theme"
          title="System"
        >
          ${Dm()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="light"?"active":""}"
          @click=${n("light")}
          aria-pressed=${e.theme==="light"}
          aria-label="Light theme"
          title="Light"
        >
          ${Lm()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="dark"?"active":""}"
          @click=${n("dark")}
          aria-pressed=${e.theme==="dark"}
          aria-label="Dark theme"
          title="Dark"
        >
          ${Mm()}
        </button>
      </div>
    </div>
  `}function Lm(){return c`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  `}function Mm(){return c`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      ></path>
    </svg>
  `}function Dm(){return c`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  `}function od(e,t){if(!e)return e;const s=e.files.some(i=>i.name===t.name)?e.files.map(i=>i.name===t.name?t:i):[...e.files,t];return{...e,files:s}}async function Ii(e,t){if(!(!e.client||!e.connected||e.agentFilesLoading)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const n=await e.client.request("agents.files.list",{agentId:t});n&&(e.agentFilesList=n,e.agentFileActive&&!n.files.some(s=>s.name===e.agentFileActive)&&(e.agentFileActive=null))}catch(n){e.agentFilesError=String(n)}finally{e.agentFilesLoading=!1}}}async function Pm(e,t,n,s){if(!(!e.client||!e.connected||e.agentFilesLoading)&&!Object.hasOwn(e.agentFileContents,n)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.get",{agentId:t,name:n});if(i?.file){const o=i.file.content??"",a=e.agentFileContents[n]??"",l=e.agentFileDrafts[n],r=s?.preserveDraft??!0;e.agentFilesList=od(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:o},(!r||!Object.hasOwn(e.agentFileDrafts,n)||l===a)&&(e.agentFileDrafts={...e.agentFileDrafts,[n]:o})}}catch(i){e.agentFilesError=String(i)}finally{e.agentFilesLoading=!1}}}async function Fm(e,t,n,s){if(!(!e.client||!e.connected||e.agentFileSaving)){e.agentFileSaving=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.set",{agentId:t,name:n,content:s});i?.file&&(e.agentFilesList=od(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:s},e.agentFileDrafts={...e.agentFileDrafts,[n]:s})}catch(i){e.agentFilesError=String(i)}finally{e.agentFileSaving=!1}}}const Nm=[{id:"fs",label:"Files"},{id:"runtime",label:"Runtime"},{id:"web",label:"Web"},{id:"memory",label:"Memory"},{id:"sessions",label:"Sessions"},{id:"ui",label:"UI"},{id:"messaging",label:"Messaging"},{id:"automation",label:"Automation"},{id:"nodes",label:"Nodes"},{id:"agents",label:"Agents"},{id:"media",label:"Media"}],ts=[{id:"read",label:"read",description:"Read file contents",sectionId:"fs",profiles:["coding"]},{id:"write",label:"write",description:"Create or overwrite files",sectionId:"fs",profiles:["coding"]},{id:"edit",label:"edit",description:"Make precise edits",sectionId:"fs",profiles:["coding"]},{id:"apply_patch",label:"apply_patch",description:"Patch files (OpenAI)",sectionId:"fs",profiles:["coding"]},{id:"exec",label:"exec",description:"Run shell commands",sectionId:"runtime",profiles:["coding"]},{id:"process",label:"process",description:"Manage background processes",sectionId:"runtime",profiles:["coding"]},{id:"web_search",label:"web_search",description:"Search the web",sectionId:"web",profiles:[],includeInOpenClawGroup:!0},{id:"web_fetch",label:"web_fetch",description:"Fetch web content",sectionId:"web",profiles:[],includeInOpenClawGroup:!0},{id:"memory_search",label:"memory_search",description:"Semantic search",sectionId:"memory",profiles:["coding"],includeInOpenClawGroup:!0},{id:"memory_get",label:"memory_get",description:"Read memory files",sectionId:"memory",profiles:["coding"],includeInOpenClawGroup:!0},{id:"sessions_list",label:"sessions_list",description:"List sessions",sectionId:"sessions",profiles:["coding","messaging"],includeInOpenClawGroup:!0},{id:"sessions_history",label:"sessions_history",description:"Session history",sectionId:"sessions",profiles:["coding","messaging"],includeInOpenClawGroup:!0},{id:"sessions_send",label:"sessions_send",description:"Send to session",sectionId:"sessions",profiles:["coding","messaging"],includeInOpenClawGroup:!0},{id:"sessions_spawn",label:"sessions_spawn",description:"Spawn sub-agent",sectionId:"sessions",profiles:["coding"],includeInOpenClawGroup:!0},{id:"subagents",label:"subagents",description:"Manage sub-agents",sectionId:"sessions",profiles:["coding"],includeInOpenClawGroup:!0},{id:"session_status",label:"session_status",description:"Session status",sectionId:"sessions",profiles:["minimal","coding","messaging"],includeInOpenClawGroup:!0},{id:"browser",label:"browser",description:"Control web browser",sectionId:"ui",profiles:[],includeInOpenClawGroup:!0},{id:"canvas",label:"canvas",description:"Control canvases",sectionId:"ui",profiles:[],includeInOpenClawGroup:!0},{id:"message",label:"message",description:"Send messages",sectionId:"messaging",profiles:["messaging"],includeInOpenClawGroup:!0},{id:"cron",label:"cron",description:"Schedule tasks",sectionId:"automation",profiles:["coding"],includeInOpenClawGroup:!0},{id:"gateway",label:"gateway",description:"Gateway control",sectionId:"automation",profiles:[],includeInOpenClawGroup:!0},{id:"nodes",label:"nodes",description:"Nodes + devices",sectionId:"nodes",profiles:[],includeInOpenClawGroup:!0},{id:"agents_list",label:"agents_list",description:"List agents",sectionId:"agents",profiles:[],includeInOpenClawGroup:!0},{id:"image",label:"image",description:"Image understanding",sectionId:"media",profiles:["coding"],includeInOpenClawGroup:!0},{id:"tts",label:"tts",description:"Text-to-speech conversion",sectionId:"media",profiles:[],includeInOpenClawGroup:!0}];new Map(ts.map(e=>[e.id,e]));function Li(e){return ts.filter(t=>t.profiles.includes(e)).map(t=>t.id)}const Om={minimal:{allow:Li("minimal")},coding:{allow:Li("coding")},messaging:{allow:Li("messaging")},full:{}};function Um(){const e=new Map;for(const n of ts){const s=`group:${n.sectionId}`,i=e.get(s)??[];i.push(n.id),e.set(s,i)}return{"group:openclaw":ts.filter(n=>n.includeInOpenClawGroup).map(n=>n.id),...Object.fromEntries(e.entries())}}const Bm=Um(),Hm=[{id:"minimal",label:"Minimal"},{id:"coding",label:"Coding"},{id:"messaging",label:"Messaging"},{id:"full",label:"Full"}];function zm(e){if(!e)return;const t=Om[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}function jm(){return Nm.map(e=>({id:e.id,label:e.label,tools:ts.filter(t=>t.sectionId===e.id).map(t=>({id:t.id,label:t.label,description:t.description}))})).filter(e=>e.tools.length>0)}const Km={bash:"exec","apply-patch":"apply_patch"},qm={...Bm};function Ye(e){const t=e.trim().toLowerCase();return Km[t]??t}function Wm(e){return e?e.map(Ye).filter(Boolean):[]}function Gm(e){const t=Wm(e),n=[];for(const s of t){const i=qm[s];if(i){n.push(...i);continue}n.push(s)}return Array.from(new Set(n))}function Jm(e){return zm(e)}const Vm=jm(),Qm=Hm;function oo(e){return e.name?.trim()||e.identity?.name?.trim()||e.id}function ys(e){const t=e.trim();if(!t||t.length>16)return!1;let n=!1;for(let s=0;s<t.length;s+=1)if(t.charCodeAt(s)>127){n=!0;break}return!(!n||t.includes("://")||t.includes("/")||t.includes("."))}function ii(e,t){const n=t?.emoji?.trim();if(n&&ys(n))return n;const s=e.identity?.emoji?.trim();if(s&&ys(s))return s;const i=t?.avatar?.trim();if(i&&ys(i))return i;const o=e.identity?.avatar?.trim();return o&&ys(o)?o:""}function ad(e,t){return t&&e===t?"default":null}function Ym(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s+=1;return`${n.toFixed(n<10?1:0)} ${t[s]}`}function oi(e,t){const n=e;return{entry:(n?.agents?.list??[]).find(o=>o?.id===t),defaults:n?.agents?.defaults,globalTools:n?.tools}}function _r(e,t,n,s,i){const o=oi(t,e.id),l=(n&&n.agentId===e.id?n.workspace:null)||o.entry?.workspace||o.defaults?.workspace||"default",r=o.entry?.model?Kn(o.entry?.model):Kn(o.defaults?.model),d=i?.name?.trim()||e.identity?.name?.trim()||e.name?.trim()||o.entry?.name||e.id,g=ii(e,i)||"-",u=Array.isArray(o.entry?.skills)?o.entry?.skills:null,m=u?.length??null;return{workspace:l,model:r,identityName:d,identityEmoji:g,skillsLabel:u?`${m} selected`:"all skills",isDefault:!!(s&&e.id===s)}}function Kn(e){if(!e)return"-";if(typeof e=="string")return e.trim()||"-";if(typeof e=="object"&&e){const t=e,n=t.primary?.trim();if(n){const s=Array.isArray(t.fallbacks)?t.fallbacks.length:0;return s>0?`${n} (+${s} fallback)`:n}}return"-"}function Er(e){const t=e.match(/^(.+) \(\+\d+ fallback\)$/);return t?t[1]:e}function Rr(e){if(!e)return null;if(typeof e=="string")return e.trim()||null;if(typeof e=="object"&&e){const t=e;return(typeof t.primary=="string"?t.primary:typeof t.model=="string"?t.model:typeof t.id=="string"?t.id:typeof t.value=="string"?t.value:null)?.trim()||null}return null}function Ir(e){if(!e||typeof e=="string")return null;if(typeof e=="object"&&e){const t=e,n=Array.isArray(t.fallbacks)?t.fallbacks:Array.isArray(t.fallback)?t.fallback:null;return n?n.filter(s=>typeof s=="string"):null}return null}function Xm(e,t){return Ir(e)??Ir(t)}function Bt(e,t){if(typeof t!="string")return;const n=t.trim();n&&e.add(n)}function Lr(e,t){if(!t)return;if(typeof t=="string"){Bt(e,t);return}if(typeof t!="object")return;const n=t;Bt(e,n.primary),Bt(e,n.model),Bt(e,n.id),Bt(e,n.value);const s=Array.isArray(n.fallbacks)?n.fallbacks:Array.isArray(n.fallback)?n.fallback:[];for(const i of s)Bt(e,i)}function ao(e){const t=Array.from(e),n=Array.from({length:t.length},()=>""),s=(o,a,l)=>{let r=o,d=a,g=o;for(;r<a&&d<l;)n[g++]=t[r].localeCompare(t[d])<=0?t[r++]:t[d++];for(;r<a;)n[g++]=t[r++];for(;d<l;)n[g++]=t[d++];for(let u=o;u<l;u+=1)t[u]=n[u]},i=(o,a)=>{if(a-o<=1)return;const l=o+a>>>1;i(o,l),i(l,a),s(o,l,a)};return i(0,t.length),t}function Zm(e){if(!e||typeof e!="object")return[];const t=e.agents;if(!t||typeof t!="object")return[];const n=new Set,s=t.defaults;if(s&&typeof s=="object"){const o=s;Lr(n,o.model);const a=o.models;if(a&&typeof a=="object")for(const l of Object.keys(a))Bt(n,l)}const i=t.list;if(i&&typeof i=="object")for(const o of Object.values(i))!o||typeof o!="object"||Lr(n,o.model);return ao(n)}function ev(e){return e.split(",").map(t=>t.trim()).filter(Boolean)}function tv(e){const n=e?.agents?.defaults?.models;if(!n||typeof n!="object")return[];const s=[];for(const[i,o]of Object.entries(n)){const a=i.trim();if(!a)continue;const l=o&&typeof o=="object"&&"alias"in o&&typeof o.alias=="string"?o.alias?.trim():void 0,r=l&&l!==a?`${l} (${a})`:a;s.push({value:a,label:r})}return s}function nv(e,t){const n=tv(e),s=t?n.some(i=>i.value===t):!1;return t&&!s&&n.unshift({value:t,label:`Current (${t})`}),n.length===0?c`
      <option value="" disabled>No configured models</option>
    `:n.map(i=>c`<option value=${i.value}>${i.label}</option>`)}function sv(e){const t=Ye(e);if(!t)return{kind:"exact",value:""};if(t==="*")return{kind:"all"};if(!t.includes("*"))return{kind:"exact",value:t};const n=t.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&");return{kind:"regex",value:new RegExp(`^${n.replaceAll("\\*",".*")}$`)}}function ro(e){return Array.isArray(e)?Gm(e).map(sv).filter(t=>t.kind!=="exact"||t.value.length>0):[]}function qn(e,t){for(const n of t)if(n.kind==="all"||n.kind==="exact"&&e===n.value||n.kind==="regex"&&n.value.test(e))return!0;return!1}function iv(e,t){if(!t)return!0;const n=Ye(e),s=ro(t.deny);if(qn(n,s))return!1;const i=ro(t.allow);return!!(i.length===0||qn(n,i)||n==="apply_patch"&&qn("exec",i))}function Mr(e,t){if(!Array.isArray(t)||t.length===0)return!1;const n=Ye(e),s=ro(t);return!!(qn(n,s)||n==="apply_patch"&&qn("exec",s))}function ov(e){return Jm(e)??void 0}function av(e){const t=e.host??"unknown",n=e.ip?`(${e.ip})`:"",s=e.mode??"",i=e.version??"";return`${t} ${n} ${s} ${i}`.trim()}function rv(e){const t=e.ts??null;return t?se(t):"n/a"}function na(e){return e?`${new Date(e).toLocaleDateString(void 0,{weekday:"short"})}, ${St(e)} (${se(e)})`:"n/a"}function lv(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function cv(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function dv(e){const t=e.state??{},n=t.nextRunAtMs?St(t.nextRunAtMs):"n/a",s=t.lastRunAtMs?St(t.lastRunAtMs):"n/a";return`${t.lastStatus??"n/a"} · next ${n} · last ${s}`}function rd(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${St(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${Do(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function uv(e){const t=e.payload;if(t.kind==="systemEvent")return`System: ${t.text}`;const n=`Agent: ${t.message}`,s=e.delivery;if(s&&s.mode!=="none"){const i=s.mode==="webhook"?s.to?` (${s.to})`:"":s.channel||s.to?` (${s.channel??"last"}${s.to?` -> ${s.to}`:""})`:"";return`${n} · ${s.mode}${i}`}return n}function ld(e,t){if(!e)return null;const s=(e.channels??{})[t];if(s&&typeof s=="object")return s;const i=e[t];return i&&typeof i=="object"?i:null}function cd(e){if(e==null)return"n/a";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"n/a"}}function gv(e){const t=ld(e.configForm,e.channelId);return t?e.fields.flatMap(n=>n in t?[{label:n,value:cd(t[n])}]:[]):[]}function dd(e,t){return c`
    <section class="card">
      <div class="card-title">Agent Context</div>
      <div class="card-sub">${t}</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${e.workspace}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${e.model}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${e.identityName}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Emoji</div>
          <div>${e.identityEmoji}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${e.skillsLabel}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${e.isDefault?"yes":"no"}</div>
        </div>
      </div>
    </section>
  `}function pv(e,t){const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function fv(e){if(!e)return[];const t=new Set;for(const i of e.channelOrder??[])t.add(i);for(const i of e.channelMeta??[])t.add(i.id);for(const i of Object.keys(e.channelAccounts??{}))t.add(i);const n=[],s=e.channelOrder?.length?e.channelOrder:Array.from(t);for(const i of s)t.has(i)&&(n.push(i),t.delete(i));for(const i of t)n.push(i);return n.map(i=>({id:i,label:pv(e,i),accounts:e.channelAccounts?.[i]??[]}))}const hv=["groupPolicy","streamMode","dmPolicy"];function mv(e){let t=0,n=0,s=0;for(const i of e){const o=i.probe&&typeof i.probe=="object"&&"ok"in i.probe?!!i.probe.ok:!1;(i.connected===!0||i.running===!0||o)&&(t+=1),i.configured&&(n+=1),i.enabled&&(s+=1)}return{total:e.length,connected:t,configured:n,enabled:s}}function vv(e){const t=fv(e.snapshot),n=e.lastSuccess?se(e.lastSuccess):"never";return c`
    <section class="grid grid-cols-2">
      ${dd(e.context,"Workspace, identity, and model configuration.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Channels</div>
            <div class="card-sub">Gateway-wide channel status snapshot.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="muted" style="margin-top: 8px;">
          Last refresh: ${n}
        </div>
        ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}
        ${e.snapshot?f:c`
                <div class="callout info" style="margin-top: 12px">Load channels to see live status.</div>
              `}
        ${t.length===0?c`
                <div class="muted" style="margin-top: 16px">No channels found.</div>
              `:c`
                <div class="list" style="margin-top: 16px;">
                  ${t.map(s=>{const i=mv(s.accounts),o=i.total?`${i.connected}/${i.total} connected`:"no accounts",a=i.configured?`${i.configured} configured`:"not configured",l=i.total?`${i.enabled} enabled`:"disabled",r=gv({configForm:e.configForm,channelId:s.id,fields:hv});return c`
                      <div class="list-item">
                        <div class="list-main">
                          <div class="list-title">${s.label}</div>
                          <div class="list-sub mono">${s.id}</div>
                        </div>
                        <div class="list-meta">
                          <div>${o}</div>
                          <div>${a}</div>
                          <div>${l}</div>
                          ${r.length>0?r.map(d=>c`<div>${d.label}: ${d.value}</div>`):f}
                        </div>
                      </div>
                    `})}
                </div>
              `}
      </section>
    </section>
  `}function bv(e){const t=e.jobs.filter(n=>n.agentId===e.agentId);return c`
    <section class="grid grid-cols-2">
      ${dd(e.context,"Workspace and scheduling targets.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Scheduler</div>
            <div class="card-sub">Gateway cron status.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Enabled</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"Yes":"No":"n/a"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Jobs</div>
            <div class="stat-value">${e.status?.jobs??"n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Next wake</div>
            <div class="stat-value">${na(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}
      </section>
    </section>
    <section class="card">
      <div class="card-title">Agent Cron Jobs</div>
      <div class="card-sub">Scheduled jobs targeting this agent.</div>
      ${t.length===0?c`
              <div class="muted" style="margin-top: 16px">No jobs assigned.</div>
            `:c`
              <div class="list" style="margin-top: 16px;">
                ${t.map(n=>c`
                    <div class="list-item">
                      <div class="list-main">
                        <div class="list-title">${n.name}</div>
                        ${n.description?c`<div class="list-sub">${n.description}</div>`:f}
                        <div class="chip-row" style="margin-top: 6px;">
                          <span class="chip">${rd(n)}</span>
                          <span class="chip ${n.enabled?"chip-ok":"chip-warn"}">
                            ${n.enabled?"enabled":"disabled"}
                          </span>
                          <span class="chip">${n.sessionTarget}</span>
                        </div>
                      </div>
                      <div class="list-meta">
                        <div class="mono">${dv(n)}</div>
                        <div class="muted">${uv(n)}</div>
                      </div>
                    </div>
                  `)}
              </div>
            `}
    </section>
  `}function yv(e){const t=e.agentFilesList?.agentId===e.agentId?e.agentFilesList:null,n=t?.files??[],s=e.agentFileActive??null,i=s?n.find(r=>r.name===s)??null:null,o=s?e.agentFileContents[s]??"":"",a=s?e.agentFileDrafts[s]??o:"",l=s?a!==o:!1;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Core Files</div>
          <div class="card-sub">Bootstrap persona, identity, and tool guidance.</div>
        </div>
        <button
          class="btn btn--sm"
          ?disabled=${e.agentFilesLoading}
          @click=${()=>e.onLoadFiles(e.agentId)}
        >
          ${e.agentFilesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${t?c`<div class="muted mono" style="margin-top: 8px;">Workspace: ${t.workspace}</div>`:f}
      ${e.agentFilesError?c`<div class="callout danger" style="margin-top: 12px;">${e.agentFilesError}</div>`:f}
      ${t?c`
              <div class="agent-files-grid" style="margin-top: 16px;">
                <div class="agent-files-list">
                  ${n.length===0?c`
                          <div class="muted">No files found.</div>
                        `:n.map(r=>xv(r,s,()=>e.onSelectFile(r.name)))}
                </div>
                <div class="agent-files-editor">
                  ${i?c`
                          <div class="agent-file-header">
                            <div>
                              <div class="agent-file-title mono">${i.name}</div>
                              <div class="agent-file-sub mono">${i.path}</div>
                            </div>
                            <div class="agent-file-actions">
                              <button
                                class="btn btn--sm"
                                ?disabled=${!l}
                                @click=${()=>e.onFileReset(i.name)}
                              >
                                Reset
                              </button>
                              <button
                                class="btn btn--sm primary"
                                ?disabled=${e.agentFileSaving||!l}
                                @click=${()=>e.onFileSave(i.name)}
                              >
                                ${e.agentFileSaving?"Saving…":"Save"}
                              </button>
                            </div>
                          </div>
                          ${i.missing?c`
                                  <div class="callout info" style="margin-top: 10px">
                                    This file is missing. Saving will create it in the agent workspace.
                                  </div>
                                `:f}
                          <label class="field" style="margin-top: 12px;">
                            <span>Content</span>
                            <textarea
                              .value=${a}
                              @input=${r=>e.onFileDraftChange(i.name,r.target.value)}
                            ></textarea>
                          </label>
                        `:c`
                          <div class="muted">Select a file to edit.</div>
                        `}
                </div>
              </div>
            `:c`
              <div class="callout info" style="margin-top: 12px">
                Load the agent workspace files to edit core instructions.
              </div>
            `}
    </section>
  `}function xv(e,t,n){const s=e.missing?"Missing":`${Ym(e.size)} · ${se(e.updatedAtMs??null)}`;return c`
    <button
      type="button"
      class="agent-file-row ${t===e.name?"active":""}"
      @click=${n}
    >
      <div>
        <div class="agent-file-name mono">${e.name}</div>
        <div class="agent-file-meta">${s}</div>
      </div>
      ${e.missing?c`
              <span class="agent-pill warn">missing</span>
            `:f}
    </button>
  `}const xs=[{id:"workspace",label:"我的技能",sources:["openclaw-workspace"]},{id:"built-in",label:"内置技能",sources:["openclaw-bundled"]},{id:"installed",label:"已安装技能",sources:["openclaw-managed"]},{id:"extra",label:"额外技能",sources:["openclaw-extra"]}];function $v(e){const t=new Map;for(const o of xs)t.set(o.id,{id:o.id,label:o.label,skills:[]});const n=xs.find(o=>o.id==="built-in"),s={id:"other",label:"Other Skills",skills:[]};for(const o of e){const a=o.bundled?n:xs.find(l=>l.sources.includes(o.source));a?t.get(a.id)?.skills.push(o):s.skills.push(o)}const i=xs.map(o=>t.get(o.id)).filter(o=>!!(o&&o.skills.length>0));return s.skills.length>0&&i.push(s),i}function sa(e){return[...e.missing.bins.map(t=>`bin:${t}`),...e.missing.env.map(t=>`env:${t}`),...e.missing.config.map(t=>`config:${t}`),...e.missing.os.map(t=>`os:${t}`)]}function ud(e){const t=[];return e.disabled&&t.push("disabled"),e.blockedByAllowlist&&t.push("blocked by allowlist"),t}function gd(e){const t=e.skill,n=!!e.showBundledBadge;return c`
    <div class="chip-row" style="margin-top: 6px;">
      <span class="chip">${t.source}</span>
      ${n?c`
              <span class="chip">bundled</span>
            `:f}
      <span class="chip ${t.eligible?"chip-ok":"chip-warn"}">
        ${t.eligible?"eligible":"blocked"}
      </span>
      ${t.disabled?c`
              <span class="chip chip-warn">disabled</span>
            `:f}
    </div>
  `}function wv(e){const t=oi(e.configForm,e.agentId),n=t.entry?.tools??{},s=t.globalTools??{},i=n.profile??s.profile??"full",o=n.profile?"agent override":s.profile?"global default":"default",a=Array.isArray(n.allow)&&n.allow.length>0,l=Array.isArray(s.allow)&&s.allow.length>0,r=!!e.configForm&&!e.configLoading&&!e.configSaving&&!a,d=a?[]:Array.isArray(n.alsoAllow)?n.alsoAllow:[],g=a?[]:Array.isArray(n.deny)?n.deny:[],u=a?{allow:n.allow??[],deny:n.deny??[]}:ov(i)??void 0,m=e.toolsCatalogResult?.groups?.length&&e.toolsCatalogResult.agentId===e.agentId?e.toolsCatalogResult.groups:Vm,h=e.toolsCatalogResult?.profiles?.length&&e.toolsCatalogResult.agentId===e.agentId?e.toolsCatalogResult.profiles:Qm,b=m.flatMap(A=>A.tools.map(w=>w.id)),k=A=>{const w=iv(A,u),L=Mr(A,d),C=Mr(A,g);return{allowed:(w||L)&&!C,baseAllowed:w,denied:C}},T=b.filter(A=>k(A).allowed).length,I=(A,w)=>{const L=new Set(d.map(F=>Ye(F)).filter(F=>F.length>0)),C=new Set(g.map(F=>Ye(F)).filter(F=>F.length>0)),p=k(A).baseAllowed,_=Ye(A);w?(C.delete(_),p||L.add(_)):(L.delete(_),C.add(_)),e.onOverridesChange(e.agentId,[...L],[...C])},R=A=>{const w=new Set(d.map(C=>Ye(C)).filter(C=>C.length>0)),L=new Set(g.map(C=>Ye(C)).filter(C=>C.length>0));for(const C of b){const p=k(C).baseAllowed,_=Ye(C);A?(L.delete(_),p||w.add(_)):(w.delete(_),L.add(_))}e.onOverridesChange(e.agentId,[...w],[...L])};return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Tool Access</div>
          <div class="card-sub">
            Profile + per-tool overrides for this agent.
            <span class="mono">${T}/${b.length}</span> enabled.
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn btn--sm" ?disabled=${!r} @click=${()=>R(!0)}>
            Enable All
          </button>
          <button class="btn btn--sm" ?disabled=${!r} @click=${()=>R(!1)}>
            Disable All
          </button>
          <button class="btn btn--sm" ?disabled=${e.configLoading} @click=${e.onConfigReload}>
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.toolsCatalogError?c`
              <div class="callout warn" style="margin-top: 12px">
                Could not load runtime tool catalog. Showing fallback list.
              </div>
            `:f}
      ${e.configForm?f:c`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to adjust tool profiles.
              </div>
            `}
      ${a?c`
              <div class="callout info" style="margin-top: 12px">
                This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.
              </div>
            `:f}
      ${l?c`
              <div class="callout info" style="margin-top: 12px">
                Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.
              </div>
            `:f}

      <div class="agent-tools-meta" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Profile</div>
          <div class="mono">${i}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Source</div>
          <div>${o}</div>
        </div>
        ${e.configDirty?c`
                <div class="agent-kv">
                  <div class="label">Status</div>
                  <div class="mono">unsaved</div>
                </div>
              `:f}
      </div>

      <div class="agent-tools-presets" style="margin-top: 16px;">
        <div class="label">Quick Presets</div>
        <div class="agent-tools-buttons">
          ${h.map(A=>c`
              <button
                class="btn btn--sm ${i===A.id?"active":""}"
                ?disabled=${!r}
                @click=${()=>e.onProfileChange(e.agentId,A.id,!0)}
              >
                ${A.label}
              </button>
            `)}
          <button
            class="btn btn--sm"
            ?disabled=${!r}
            @click=${()=>e.onProfileChange(e.agentId,null,!1)}
          >
            Inherit
          </button>
        </div>
      </div>

      <div class="agent-tools-grid" style="margin-top: 20px;">
        ${m.map(A=>c`
              <div class="agent-tools-section">
                <div class="agent-tools-header">
                  ${A.label}
                  ${"source"in A&&A.source==="plugin"?c`
                          <span class="mono" style="margin-left: 6px">plugin</span>
                        `:f}
                </div>
                <div class="agent-tools-list">
                  ${A.tools.map(w=>{const{allowed:L}=k(w.id),C=w,p=C.source==="plugin"?C.pluginId?`plugin:${C.pluginId}`:"plugin":"core",_=C.optional===!0;return c`
                      <div class="agent-tool-row">
                        <div>
                          <div class="agent-tool-title mono">
                            ${w.label}
                            <span class="mono" style="margin-left: 8px; opacity: 0.8;">${p}</span>
                            ${_?c`
                                    <span class="mono" style="margin-left: 6px; opacity: 0.8">optional</span>
                                  `:f}
                          </div>
                          <div class="agent-tool-sub">${w.description}</div>
                        </div>
                        <label class="cfg-toggle">
                          <input
                            type="checkbox"
                            .checked=${L}
                            ?disabled=${!r}
                            @change=${F=>I(w.id,F.target.checked)}
                          />
                          <span class="cfg-toggle__track"></span>
                        </label>
                      </div>
                    `})}
                </div>
              </div>
            `)}
      </div>
      ${e.toolsCatalogLoading?c`
              <div class="card-sub" style="margin-top: 10px">Refreshing tool catalog…</div>
            `:f}
    </section>
  `}function kv(e){const t=!!e.configForm&&!e.configLoading&&!e.configSaving,n=oi(e.configForm,e.agentId),s=Array.isArray(n.entry?.skills)?n.entry?.skills:void 0,i=new Set((s??[]).map(h=>h.trim()).filter(Boolean)),o=s!==void 0,a=!!(e.report&&e.activeAgentId===e.agentId),l=a?e.report?.skills??[]:[],r=e.filter.trim().toLowerCase(),d=r?l.filter(h=>[h.name,h.description,h.source].join(" ").toLowerCase().includes(r)):l,g=$v(d),u=o?l.filter(h=>i.has(h.name)).length:l.length,m=l.length;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">
            Per-agent skill allowlist and workspace skills.
            ${m>0?c`<span class="mono">${u}/${m}</span>`:f}
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onClear(e.agentId)}>
            Use All
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${!t}
            @click=${()=>e.onDisableAll(e.agentId)}
          >
            Disable All
          </button>
          <button class="btn btn--sm" ?disabled=${e.configLoading} @click=${e.onConfigReload}>
            Reload Config
          </button>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.configForm?f:c`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to set per-agent skills.
              </div>
            `}
      ${o?c`
              <div class="callout info" style="margin-top: 12px">This agent uses a custom skill allowlist.</div>
            `:c`
              <div class="callout info" style="margin-top: 12px">
                All skills are enabled. Disabling any skill will create a per-agent allowlist.
              </div>
            `}
      ${!a&&!e.loading?c`
              <div class="callout info" style="margin-top: 12px">
                Load skills for this agent to view workspace-specific entries.
              </div>
            `:f}
      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${e.filter}
            @input=${h=>e.onFilterChange(h.target.value)}
            placeholder="Search skills"
          />
        </label>
        <div class="muted">${d.length} shown</div>
      </div>

      ${d.length===0?c`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:c`
              <div class="agent-skills-groups" style="margin-top: 16px;">
                ${g.map(h=>Sv(h,{agentId:e.agentId,allowSet:i,usingAllowlist:o,editable:t,onToggle:e.onToggle}))}
              </div>
            `}
    </section>
  `}function Sv(e,t){const n=e.id==="workspace"||e.id==="built-in";return c`
    <details class="agent-skills-group" ?open=${!n}>
      <summary class="agent-skills-header">
        <span>${e.label}</span>
        <span class="muted">${e.skills.length}</span>
      </summary>
      <div class="list skills-grid">
        ${e.skills.map(s=>Av(s,{agentId:t.agentId,allowSet:t.allowSet,usingAllowlist:t.usingAllowlist,editable:t.editable,onToggle:t.onToggle}))}
      </div>
    </details>
  `}function Av(e,t){const n=t.usingAllowlist?t.allowSet.has(e.name):!0,s=sa(e),i=ud(e);return c`
    <div class="list-item agent-skill-row">
      <div class="list-main">
        <div class="list-title">${e.emoji?`${e.emoji} `:""}${e.name}</div>
        <div class="list-sub">${e.description}</div>
        ${gd({skill:e})}
        ${s.length>0?c`<div class="muted" style="margin-top: 6px;">Missing: ${s.join(", ")}</div>`:f}
        ${i.length>0?c`<div class="muted" style="margin-top: 6px;">Reason: ${i.join(", ")}</div>`:f}
      </div>
      <div class="list-meta">
        <label class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${n}
            ?disabled=${!t.editable}
            @change=${o=>t.onToggle(t.agentId,e.name,o.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </label>
      </div>
    </div>
  `}function Cv(e){const t=e.agentsList?.agents??[],n=e.agentsList?.defaultId??null,s=e.selectedAgentId??n??t[0]?.id??null,i=s?t.find(o=>o.id===s)??null:null;return c`
    <div class="agents-layout">
      <section class="card agents-sidebar">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Agents</div>
            <div class="card-sub">${t.length} configured.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
        </div>
        ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}
        <div class="agent-list" style="margin-top: 12px;">
          ${t.length===0?c`
                  <div class="muted">No agents found.</div>
                `:t.map(o=>{const a=ad(o.id,n),l=ii(o,e.agentIdentityById[o.id]??null);return c`
                    <button
                      type="button"
                      class="agent-row ${s===o.id?"active":""}"
                      @click=${()=>e.onSelectAgent(o.id)}
                    >
                      <div class="agent-avatar">${l||oo(o).slice(0,1)}</div>
                      <div class="agent-info">
                        <div class="agent-title">${oo(o)}</div>
                        <div class="agent-sub mono">${o.id}</div>
                      </div>
                      ${a?c`<span class="agent-pill">${a}</span>`:f}
                    </button>
                  `})}
        </div>
      </section>
      <section class="agents-main">
        ${i?c`
                ${Tv(i,n,e.agentIdentityById[i.id]??null)}
                ${_v(e.activePanel,o=>e.onSelectPanel(o))}
                ${e.activePanel==="overview"?Ev({agent:i,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[i.id]??null,agentIdentityError:e.agentIdentityError,agentIdentityLoading:e.agentIdentityLoading,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave,onModelChange:e.onModelChange,onModelFallbacksChange:e.onModelFallbacksChange}):f}
                ${e.activePanel==="files"?yv({agentId:i.id,agentFilesList:e.agentFilesList,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,onLoadFiles:e.onLoadFiles,onSelectFile:e.onSelectFile,onFileDraftChange:e.onFileDraftChange,onFileReset:e.onFileReset,onFileSave:e.onFileSave}):f}
                ${e.activePanel==="tools"?wv({agentId:i.id,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,toolsCatalogLoading:e.toolsCatalogLoading,toolsCatalogError:e.toolsCatalogError,toolsCatalogResult:e.toolsCatalogResult,onProfileChange:e.onToolsProfileChange,onOverridesChange:e.onToolsOverridesChange,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):f}
                ${e.activePanel==="skills"?kv({agentId:i.id,report:e.agentSkillsReport,loading:e.agentSkillsLoading,error:e.agentSkillsError,activeAgentId:e.agentSkillsAgentId,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,filter:e.skillsFilter,onFilterChange:e.onSkillsFilterChange,onRefresh:e.onSkillsRefresh,onToggle:e.onAgentSkillToggle,onClear:e.onAgentSkillsClear,onDisableAll:e.onAgentSkillsDisableAll,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):f}
                ${e.activePanel==="channels"?vv({context:_r(i,e.configForm,e.agentFilesList,n,e.agentIdentityById[i.id]??null),configForm:e.configForm,snapshot:e.channelsSnapshot,loading:e.channelsLoading,error:e.channelsError,lastSuccess:e.channelsLastSuccess,onRefresh:e.onChannelsRefresh}):f}
                ${e.activePanel==="cron"?bv({context:_r(i,e.configForm,e.agentFilesList,n,e.agentIdentityById[i.id]??null),agentId:i.id,jobs:e.cronJobs,status:e.cronStatus,loading:e.cronLoading,error:e.cronError,onRefresh:e.onCronRefresh}):f}
              `:c`
                <div class="card">
                  <div class="card-title">Select an agent</div>
                  <div class="card-sub">Pick an agent to inspect its workspace and tools.</div>
                </div>
              `}
      </section>
    </div>
  `}function Tv(e,t,n){const s=ad(e.id,t),i=oo(e),o=e.identity?.theme?.trim()||"Agent workspace and routing.",a=ii(e,n);return c`
    <section class="card agent-header">
      <div class="agent-header-main">
        <div class="agent-avatar agent-avatar--lg">${a||i.slice(0,1)}</div>
        <div>
          <div class="card-title">${i}</div>
          <div class="card-sub">${o}</div>
        </div>
      </div>
      <div class="agent-header-meta">
        <div class="mono">${e.id}</div>
        ${s?c`<span class="agent-pill">${s}</span>`:f}
      </div>
    </section>
  `}function _v(e,t){return c`
    <div class="agent-tabs">
      ${[{id:"overview",label:"Overview"},{id:"files",label:"Files"},{id:"tools",label:"Tools"},{id:"skills",label:"Skills"},{id:"channels",label:"Channels"},{id:"cron",label:"Cron Jobs"}].map(s=>c`
          <button
            class="agent-tab ${e===s.id?"active":""}"
            type="button"
            @click=${()=>t(s.id)}
          >
            ${s.label}
          </button>
        `)}
    </div>
  `}function Ev(e){const{agent:t,configForm:n,agentFilesList:s,agentIdentity:i,agentIdentityLoading:o,agentIdentityError:a,configLoading:l,configSaving:r,configDirty:d,onConfigReload:g,onConfigSave:u,onModelChange:m,onModelFallbacksChange:h}=e,b=oi(n,t.id),T=(s&&s.agentId===t.id?s.workspace:null)||b.entry?.workspace||b.defaults?.workspace||"default",I=b.entry?.model?Kn(b.entry?.model):Kn(b.defaults?.model),R=Kn(b.defaults?.model),A=Rr(b.entry?.model)||(I!=="-"?Er(I):null),w=Rr(b.defaults?.model)||(R!=="-"?Er(R):null),L=A??w??null,C=Xm(b.entry?.model,b.defaults?.model),p=C?C.join(", "):"",_=i?.name?.trim()||t.identity?.name?.trim()||t.name?.trim()||b.entry?.name||"-",U=ii(t,i)||"-",M=Array.isArray(b.entry?.skills)?b.entry?.skills:null,q=M?.length??null,W=o?"Loading…":a?"Unavailable":"",V=!!(e.defaultId&&t.id===e.defaultId);return c`
    <section class="card">
      <div class="card-title">Overview</div>
      <div class="card-sub">Workspace paths and identity metadata.</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${T}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${I}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${_}</div>
          ${W?c`<div class="agent-kv-sub muted">${W}</div>`:f}
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${V?"yes":"no"}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Emoji</div>
          <div>${U}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${M?`${q} selected`:"all skills"}</div>
        </div>
      </div>

      <div class="agent-model-select" style="margin-top: 20px;">
        <div class="label">Model Selection</div>
        <div class="row" style="gap: 12px; flex-wrap: wrap;">
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>Primary model${V?" (default)":""}</span>
            <select
              .value=${L??""}
              ?disabled=${!n||l||r}
              @change=${E=>m(t.id,E.target.value||null)}
            >
              ${V?f:c`
                      <option value="">
                        ${w?`Inherit default (${w})`:"Inherit default"}
                      </option>
                    `}
              ${nv(n,L??void 0)}
            </select>
          </label>
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>Fallbacks (comma-separated)</span>
            <input
              .value=${p}
              ?disabled=${!n||l||r}
              placeholder="provider/model, provider/model"
              @input=${E=>h(t.id,ev(E.target.value))}
            />
          </label>
        </div>
        <div class="row" style="justify-content: flex-end; gap: 8px;">
          <button class="btn btn--sm" ?disabled=${l} @click=${g}>
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${r||!d}
            @click=${u}
          >
            ${r?"Saving…":"Save"}
          </button>
        </div>
      </div>
    </section>
  `}const Rv=new Set(["title","description","default","nullable","tags","x-tags"]);function Iv(e){return Object.keys(e??{}).filter(n=>!Rv.has(n)).length===0}function Lv(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const ns={chevronDown:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:c`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function wn(e){return!!(e&&(e.text.length>0||e.tags.length>0))}function pd(e){const t=[],n=new Set;return{text:e.trim().replace(/(^|\s)tag:([^\s]+)/gi,(o,a,l)=>{const r=l.trim().toLowerCase();return r&&!n.has(r)&&(n.add(r),t.push(r)),a}).trim().toLowerCase(),tags:t}}function Dr(e){if(!Array.isArray(e))return[];const t=new Set,n=[];for(const s of e){if(typeof s!="string")continue;const i=s.trim();if(!i)continue;const o=i.toLowerCase();t.has(o)||(t.add(o),n.push(i))}return n}function nn(e,t,n){const s=yt(e,n),i=s?.label??t.title??Ys(String(e.at(-1))),o=s?.help??t.description,a=Dr(t["x-tags"]??t.tags),l=Dr(s?.tags);return{label:i,help:o,tags:l.length>0?l:a}}function Mv(e,t){if(!e)return!0;for(const n of t)if(n&&n.toLowerCase().includes(e))return!0;return!1}function Dv(e,t){if(e.length===0)return!0;const n=new Set(t.map(s=>s.toLowerCase()));return e.every(s=>n.has(s))}function ia(e){const{schema:t,path:n,hints:s,criteria:i}=e;if(!wn(i))return!0;const{label:o,help:a,tags:l}=nn(n,t,s);if(!Dv(i.tags,l))return!1;if(!i.text)return!0;const r=n.filter(g=>typeof g=="string").join("."),d=t.enum&&t.enum.length>0?t.enum.map(g=>String(g)).join(" "):"";return Mv(i.text,[o,a,t.title,t.description,r,d])}function hn(e){const{schema:t,value:n,path:s,hints:i,criteria:o}=e;if(!wn(o)||ia({schema:t,path:s,hints:i,criteria:o}))return!0;const a=me(t);if(a==="object"){const l=n??t.default,r=l&&typeof l=="object"&&!Array.isArray(l)?l:{},d=t.properties??{};for(const[u,m]of Object.entries(d))if(hn({schema:m,value:r[u],path:[...s,u],hints:i,criteria:o}))return!0;const g=t.additionalProperties;if(g&&typeof g=="object"){const u=new Set(Object.keys(d));for(const[m,h]of Object.entries(r))if(!u.has(m)&&hn({schema:g,value:h,path:[...s,m],hints:i,criteria:o}))return!0}return!1}if(a==="array"){const l=Array.isArray(t.items)?t.items[0]:t.items;if(!l)return!1;const r=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];if(r.length===0)return!1;for(let d=0;d<r.length;d+=1)if(hn({schema:l,value:r[d],path:[...s,d],hints:i,criteria:o}))return!0}return!1}function $t(e){return e.length===0?f:c`
    <div class="cfg-tags">
      ${e.map(t=>c`<span class="cfg-tag">${t}</span>`)}
    </div>
  `}function Tt(e){const{schema:t,value:n,path:s,hints:i,unsupported:o,disabled:a,onPatch:l}=e,r=e.showLabel??!0,d=me(t),{label:g,help:u,tags:m}=nn(s,t,i),h=Lo(s),b=e.searchCriteria;if(o.has(h))return c`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">Unsupported schema node. Use Raw mode.</div>
    </div>`;if(b&&wn(b)&&!hn({schema:t,value:n,path:s,hints:i,criteria:b}))return f;if(t.anyOf||t.oneOf){const T=(t.anyOf??t.oneOf??[]).filter(C=>!(C.type==="null"||Array.isArray(C.type)&&C.type.includes("null")));if(T.length===1)return Tt({...e,schema:T[0]});const I=C=>{if(C.const!==void 0)return C.const;if(C.enum&&C.enum.length===1)return C.enum[0]},R=T.map(I),A=R.every(C=>C!==void 0);if(A&&R.length>0&&R.length<=5){const C=n??t.default;return c`
        <div class="cfg-field">
          ${r?c`<label class="cfg-field__label">${g}</label>`:f}
          ${u?c`<div class="cfg-field__help">${u}</div>`:f}
          ${$t(m)}
          <div class="cfg-segmented">
            ${R.map(p=>c`
              <button
                type="button"
                class="cfg-segmented__btn ${p===C||String(p)===String(C)?"active":""}"
                ?disabled=${a}
                @click=${()=>l(s,p)}
              >
                ${String(p)}
              </button>
            `)}
          </div>
        </div>
      `}if(A&&R.length>5)return Fr({...e,options:R,value:n??t.default});const w=new Set(T.map(C=>me(C)).filter(Boolean)),L=new Set([...w].map(C=>C==="integer"?"number":C));if([...L].every(C=>["string","number","boolean"].includes(C))){const C=L.has("string"),p=L.has("number");if(L.has("boolean")&&L.size===1)return Tt({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(C||p)return Pr({...e,inputType:p&&!C?"number":"text"})}}if(t.enum){const k=t.enum;if(k.length<=5){const T=n??t.default;return c`
        <div class="cfg-field">
          ${r?c`<label class="cfg-field__label">${g}</label>`:f}
          ${u?c`<div class="cfg-field__help">${u}</div>`:f}
          ${$t(m)}
          <div class="cfg-segmented">
            ${k.map(I=>c`
              <button
                type="button"
                class="cfg-segmented__btn ${I===T||String(I)===String(T)?"active":""}"
                ?disabled=${a}
                @click=${()=>l(s,I)}
              >
                ${String(I)}
              </button>
            `)}
          </div>
        </div>
      `}return Fr({...e,options:k,value:n??t.default})}if(d==="object")return Fv(e);if(d==="array")return Nv(e);if(d==="boolean"){const k=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return c`
      <label class="cfg-toggle-row ${a?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${g}</span>
          ${u?c`<span class="cfg-toggle-row__help">${u}</span>`:f}
          ${$t(m)}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${k}
            ?disabled=${a}
            @change=${T=>l(s,T.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return d==="number"||d==="integer"?Pv(e):d==="string"?Pr({...e,inputType:"text"}):c`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">Unsupported type: ${d}. Use Raw mode.</div>
    </div>
  `}function Pr(e){const{schema:t,value:n,path:s,hints:i,disabled:o,onPatch:a,inputType:l}=e,r=e.showLabel??!0,d=yt(s,i),{label:g,help:u,tags:m}=nn(s,t,i),h=(d?.sensitive??!1)&&!/^\$\{[^}]*\}$/.test(String(n??"").trim()),b=d?.placeholder??(h?"••••":t.default!==void 0?`Default: ${String(t.default)}`:""),k=n??"";return c`
    <div class="cfg-field">
      ${r?c`<label class="cfg-field__label">${g}</label>`:f}
      ${u?c`<div class="cfg-field__help">${u}</div>`:f}
      ${$t(m)}
      <div class="cfg-input-wrap">
        <input
          type=${h?"password":l}
          class="cfg-input"
          placeholder=${b}
          .value=${k==null?"":String(k)}
          ?disabled=${o}
          @input=${T=>{const I=T.target.value;if(l==="number"){if(I.trim()===""){a(s,void 0);return}const R=Number(I);a(s,Number.isNaN(R)?I:R);return}a(s,I)}}
          @change=${T=>{if(l==="number")return;const I=T.target.value;a(s,I.trim())}}
        />
        ${t.default!==void 0?c`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${o}
            @click=${()=>a(s,t.default)}
          >↺</button>
        `:f}
      </div>
    </div>
  `}function Pv(e){const{schema:t,value:n,path:s,hints:i,disabled:o,onPatch:a}=e,l=e.showLabel??!0,{label:r,help:d,tags:g}=nn(s,t,i),u=n??t.default??"",m=typeof u=="number"?u:0;return c`
    <div class="cfg-field">
      ${l?c`<label class="cfg-field__label">${r}</label>`:f}
      ${d?c`<div class="cfg-field__help">${d}</div>`:f}
      ${$t(g)}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${o}
          @click=${()=>a(s,m-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${u==null?"":String(u)}
          ?disabled=${o}
          @input=${h=>{const b=h.target.value,k=b===""?void 0:Number(b);a(s,k)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${o}
          @click=${()=>a(s,m+1)}
        >+</button>
      </div>
    </div>
  `}function Fr(e){const{schema:t,value:n,path:s,hints:i,disabled:o,options:a,onPatch:l}=e,r=e.showLabel??!0,{label:d,help:g,tags:u}=nn(s,t,i),m=n??t.default,h=a.findIndex(k=>k===m||String(k)===String(m)),b="__unset__";return c`
    <div class="cfg-field">
      ${r?c`<label class="cfg-field__label">${d}</label>`:f}
      ${g?c`<div class="cfg-field__help">${g}</div>`:f}
      ${$t(u)}
      <select
        class="cfg-select"
        ?disabled=${o}
        .value=${h>=0?String(h):b}
        @change=${k=>{const T=k.target.value;l(s,T===b?void 0:a[Number(T)])}}
      >
        <option value=${b}>Select...</option>
        ${a.map((k,T)=>c`
          <option value=${String(T)}>${String(k)}</option>
        `)}
      </select>
    </div>
  `}function Fv(e){const{schema:t,value:n,path:s,hints:i,unsupported:o,disabled:a,onPatch:l,searchCriteria:r}=e,d=e.showLabel??!0,{label:g,help:u,tags:m}=nn(s,t,i),b=(r&&wn(r)?ia({schema:t,path:s,hints:i,criteria:r}):!1)?void 0:r,k=n??t.default,T=k&&typeof k=="object"&&!Array.isArray(k)?k:{},I=t.properties??{},A=Object.entries(I).toSorted((_,F)=>{const U=yt([...s,_[0]],i)?.order??0,M=yt([...s,F[0]],i)?.order??0;return U!==M?U-M:_[0].localeCompare(F[0])}),w=new Set(Object.keys(I)),L=t.additionalProperties,C=!!L&&typeof L=="object",p=c`
    ${A.map(([_,F])=>Tt({schema:F,value:T[_],path:[...s,_],hints:i,unsupported:o,disabled:a,searchCriteria:b,onPatch:l}))}
    ${C?Ov({schema:L,value:T,path:s,hints:i,unsupported:o,disabled:a,reservedKeys:w,searchCriteria:b,onPatch:l}):f}
  `;return s.length===1?c`
      <div class="cfg-fields">
        ${p}
      </div>
    `:d?c`
    <details class="cfg-object" ?open=${s.length<=2}>
      <summary class="cfg-object__header">
        <span class="cfg-object__title-wrap">
          <span class="cfg-object__title">${g}</span>
          ${$t(m)}
        </span>
        <span class="cfg-object__chevron">${ns.chevronDown}</span>
      </summary>
      ${u?c`<div class="cfg-object__help">${u}</div>`:f}
      <div class="cfg-object__content">
        ${p}
      </div>
    </details>
  `:c`
      <div class="cfg-fields cfg-fields--inline">
        ${p}
      </div>
    `}function Nv(e){const{schema:t,value:n,path:s,hints:i,unsupported:o,disabled:a,onPatch:l,searchCriteria:r}=e,d=e.showLabel??!0,{label:g,help:u,tags:m}=nn(s,t,i),b=(r&&wn(r)?ia({schema:t,path:s,hints:i,criteria:r}):!1)?void 0:r,k=Array.isArray(t.items)?t.items[0]:t.items;if(!k)return c`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${g}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;const T=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return c`
    <div class="cfg-array">
      <div class="cfg-array__header">
        <div class="cfg-array__title">
          ${d?c`<span class="cfg-array__label">${g}</span>`:f}
          ${$t(m)}
        </div>
        <span class="cfg-array__count">${T.length} item${T.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${a}
          @click=${()=>{const I=[...T,Kl(k)];l(s,I)}}
        >
          <span class="cfg-array__add-icon">${ns.plus}</span>
          Add
        </button>
      </div>
      ${u?c`<div class="cfg-array__help">${u}</div>`:f}

      ${T.length===0?c`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:c`
        <div class="cfg-array__items">
          ${T.map((I,R)=>c`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${R+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${a}
                  @click=${()=>{const A=[...T];A.splice(R,1),l(s,A)}}
                >
                  ${ns.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${Tt({schema:k,value:I,path:[...s,R],hints:i,unsupported:o,disabled:a,searchCriteria:b,showLabel:!1,onPatch:l})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function Ov(e){const{schema:t,value:n,path:s,hints:i,unsupported:o,disabled:a,reservedKeys:l,onPatch:r,searchCriteria:d}=e,g=Iv(t),u=Object.entries(n??{}).filter(([h])=>!l.has(h)),m=d&&wn(d)?u.filter(([h,b])=>hn({schema:t,value:b,path:[...s,h],hints:i,criteria:d})):u;return c`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${a}
          @click=${()=>{const h={...n};let b=1,k=`custom-${b}`;for(;k in h;)b+=1,k=`custom-${b}`;h[k]=g?{}:Kl(t),r(s,h)}}
        >
          <span class="cfg-map__add-icon">${ns.plus}</span>
          Add Entry
        </button>
      </div>

      ${m.length===0?c`
              <div class="cfg-map__empty">No custom entries.</div>
            `:c`
        <div class="cfg-map__items">
          ${m.map(([h,b])=>{const k=[...s,h],T=Lv(b);return c`
              <div class="cfg-map__item">
                <div class="cfg-map__item-header">
                  <div class="cfg-map__item-key">
                    <input
                      type="text"
                      class="cfg-input cfg-input--sm"
                      placeholder="Key"
                      .value=${h}
                      ?disabled=${a}
                      @change=${I=>{const R=I.target.value.trim();if(!R||R===h)return;const A={...n};R in A||(A[R]=A[h],delete A[h],r(s,A))}}
                    />
                  </div>
                  <button
                    type="button"
                    class="cfg-map__item-remove"
                    title="Remove entry"
                    ?disabled=${a}
                    @click=${()=>{const I={...n};delete I[h],r(s,I)}}
                  >
                    ${ns.trash}
                  </button>
                </div>
                <div class="cfg-map__item-value">
                  ${g?c`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${T}
                          ?disabled=${a}
                          @change=${I=>{const R=I.target,A=R.value.trim();if(!A){r(k,void 0);return}try{r(k,JSON.parse(A))}catch{R.value=T}}}
                        ></textarea>
                      `:Tt({schema:t,value:b,path:k,hints:i,unsupported:o,disabled:a,searchCriteria:d,showLabel:!1,onPatch:r})}
                </div>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const Nr={env:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},oa={env:{label:"Environment Variables",description:"Environment variables passed to the gateway process"},update:{label:"Updates",description:"Auto-update settings and release channel"},agents:{label:"Agents",description:"Agent configurations, models, and identities"},auth:{label:"Authentication",description:"API keys and authentication profiles"},channels:{label:"Channels",description:"Messaging channels (Telegram, Discord, Slack, etc.)"},messages:{label:"Messages",description:"Message handling and routing settings"},commands:{label:"Commands",description:"Custom slash commands"},hooks:{label:"Hooks",description:"Webhooks and event hooks"},skills:{label:"Skills",description:"Skill packs and capabilities"},tools:{label:"Tools",description:"Tool configurations (browser, search, etc.)"},gateway:{label:"Gateway",description:"Gateway server settings (port, auth, binding)"},wizard:{label:"Setup Wizard",description:"Setup wizard state and history"},meta:{label:"Metadata",description:"Gateway metadata and version information"},logging:{label:"Logging",description:"Log levels and output configuration"},browser:{label:"Browser",description:"Browser automation settings"},ui:{label:"UI",description:"User interface preferences"},models:{label:"Models",description:"AI model configurations and providers"},bindings:{label:"Bindings",description:"Key bindings and shortcuts"},broadcast:{label:"Broadcast",description:"Broadcast and notification settings"},audio:{label:"Audio",description:"Audio input/output settings"},session:{label:"Session",description:"Session management and persistence"},cron:{label:"Cron",description:"Scheduled tasks and automation"},web:{label:"Web",description:"Web server and API settings"},discovery:{label:"Discovery",description:"Service discovery and networking"},canvasHost:{label:"Canvas Host",description:"Canvas rendering and display"},talk:{label:"Talk",description:"Voice and speech settings"},plugins:{label:"Plugins",description:"Plugin management and extensions"}};function Or(e){return Nr[e]??Nr.default}function Uv(e){if(!e.query)return!0;const t=pd(e.query),n=t.text,s=oa[e.key];return n&&e.key.toLowerCase().includes(n)||n&&s&&(s.label.toLowerCase().includes(n)||s.description.toLowerCase().includes(n))?!0:hn({schema:e.schema,value:e.sectionValue,path:[e.key],hints:e.uiHints,criteria:t})}function Bv(e){if(!e.schema)return c`
      <div class="muted">Schema unavailable.</div>
    `;const t=e.schema,n=e.value??{};if(me(t)!=="object"||!t.properties)return c`
      <div class="callout danger">Unsupported schema. Use Raw.</div>
    `;const s=new Set(e.unsupportedPaths??[]),i=t.properties,o=e.searchQuery??"",a=pd(o),l=e.activeSection,r=e.activeSubsection??null,g=Object.entries(i).toSorted((m,h)=>{const b=yt([m[0]],e.uiHints)?.order??50,k=yt([h[0]],e.uiHints)?.order??50;return b!==k?b-k:m[0].localeCompare(h[0])}).filter(([m,h])=>!(l&&m!==l||o&&!Uv({key:m,schema:h,sectionValue:n[m],uiHints:e.uiHints,query:o})));let u=null;if(l&&r&&g.length===1){const m=g[0]?.[1];m&&me(m)==="object"&&m.properties&&m.properties[r]&&(u={sectionKey:l,subsectionKey:r,schema:m.properties[r]})}return g.length===0?c`
      <div class="config-empty">
        <div class="config-empty__icon">${$e.search}</div>
        <div class="config-empty__text">
          ${o?`No settings match "${o}"`:"No settings in this section"}
        </div>
      </div>
    `:c`
    <div class="config-form config-form--modern">
      ${u?(()=>{const{sectionKey:m,subsectionKey:h,schema:b}=u,k=yt([m,h],e.uiHints),T=k?.label??b.title??Ys(h),I=k?.help??b.description??"",R=n[m],A=R&&typeof R=="object"?R[h]:void 0,w=`config-section-${m}-${h}`;return c`
              <section class="config-section-card" id=${w}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Or(m)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${T}</h3>
                    ${I?c`<p class="config-section-card__desc">${I}</p>`:f}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${Tt({schema:b,value:A,path:[m,h],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,searchCriteria:a,onPatch:e.onPatch})}
                </div>
              </section>
            `})():g.map(([m,h])=>{const b=oa[m]??{label:m.charAt(0).toUpperCase()+m.slice(1),description:h.description??""};return c`
              <section class="config-section-card" id="config-section-${m}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${Or(m)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${b.label}</h3>
                    ${b.description?c`<p class="config-section-card__desc">${b.description}</p>`:f}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${Tt({schema:h,value:n[m],path:[m],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,searchCriteria:a,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const Hv=new Set(["title","description","default","nullable"]);function zv(e){return Object.keys(e??{}).filter(n=>!Hv.has(n)).length===0}function fd(e){const t=e.filter(i=>i!=null),n=t.length!==e.length,s=[];for(const i of t)s.some(o=>Object.is(o,i))||s.push(i);return{enumValues:s,nullable:n}}function hd(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:mn(e,[])}function mn(e,t){const n=new Set,s={...e},i=Lo(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const l=Wv(e,t);return l||{schema:e,unsupportedPaths:[i]}}const o=Array.isArray(e.type)&&e.type.includes("null"),a=me(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=a??e.type,s.nullable=o||e.nullable,s.enum){const{enumValues:l,nullable:r}=fd(s.enum);s.enum=l,r&&(s.nullable=!0),l.length===0&&n.add(i)}if(a==="object"){const l=e.properties??{},r={};for(const[d,g]of Object.entries(l)){const u=mn(g,[...t,d]);u.schema&&(r[d]=u.schema);for(const m of u.unsupportedPaths)n.add(m)}if(s.properties=r,e.additionalProperties===!0)n.add(i);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!zv(e.additionalProperties)){const d=mn(e.additionalProperties,[...t,"*"]);s.additionalProperties=d.schema??e.additionalProperties,d.unsupportedPaths.length>0&&n.add(i)}}else if(a==="array"){const l=Array.isArray(e.items)?e.items[0]:e.items;if(!l)n.add(i);else{const r=mn(l,[...t,"*"]);s.items=r.schema??l,r.unsupportedPaths.length>0&&n.add(i)}}else a!=="string"&&a!=="number"&&a!=="integer"&&a!=="boolean"&&!s.enum&&n.add(i);return{schema:s,unsupportedPaths:Array.from(n)}}function jv(e){if(me(e)!=="object")return!1;const t=e.properties?.source,n=e.properties?.provider,s=e.properties?.id;return!t||!n||!s?!1:typeof t.const=="string"&&me(n)==="string"&&me(s)==="string"}function Kv(e){const t=e.oneOf??e.anyOf;return!t||t.length===0?!1:t.every(n=>jv(n))}function qv(e,t,n,s){const i=n.findIndex(a=>me(a)==="string");if(i<0)return null;const o=n.filter((a,l)=>l!==i);return o.length!==1||!Kv(o[0])?null:mn({...e,...n[i],nullable:s,anyOf:void 0,oneOf:void 0,allOf:void 0},t)}function Wv(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],i=[];let o=!1;for(const r of n){if(!r||typeof r!="object")return null;if(Array.isArray(r.enum)){const{enumValues:d,nullable:g}=fd(r.enum);s.push(...d),g&&(o=!0);continue}if("const"in r){if(r.const==null){o=!0;continue}s.push(r.const);continue}if(me(r)==="null"){o=!0;continue}i.push(r)}const a=qv(e,t,i,o);if(a)return a;if(s.length>0&&i.length===0){const r=[];for(const d of s)r.some(g=>Object.is(g,d))||r.push(d);return{schema:{...e,enum:r,nullable:o,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(i.length===1){const r=mn(i[0],t);return r.schema&&(r.schema.nullable=o||r.schema.nullable),r}const l=new Set(["string","number","integer","boolean"]);return i.length>0&&s.length===0&&i.every(r=>r.type&&l.has(String(r.type)))?{schema:{...e,nullable:o},unsupportedPaths:[]}:null}function Gv(e,t){let n=e;for(const s of t){if(!n)return null;const i=me(n);if(i==="object"){const o=n.properties??{};if(typeof s=="string"&&o[s]){n=o[s];continue}const a=n.additionalProperties;if(typeof s=="string"&&a&&typeof a=="object"){n=a;continue}return null}if(i==="array"){if(typeof s!="number")return null;n=(Array.isArray(n.items)?n.items[0]:n.items)??null;continue}return null}return n}function Jv(e,t){return ld(e,t)??{}}const Vv=["groupPolicy","streamMode","dmPolicy"];function Qv(e){const t=Vv.flatMap(n=>n in e?[[n,e[n]]]:[]);return t.length===0?null:c`
    <div class="status-list" style="margin-top: 12px;">
      ${t.map(([n,s])=>c`
          <div>
            <span class="label">${n}</span>
            <span>${cd(s)}</span>
          </div>
        `)}
    </div>
  `}function Yv(e){const t=hd(e.schema),n=t.schema;if(!n)return c`
      <div class="callout danger">Schema unavailable. Use Raw.</div>
    `;const s=Gv(n,["channels",e.channelId]);if(!s)return c`
      <div class="callout danger">Channel config schema unavailable.</div>
    `;const i=e.configValue??{},o=Jv(i,e.channelId);return c`
    <div class="config-form">
      ${Tt({schema:s,value:o,path:["channels",e.channelId],hints:e.uiHints,unsupported:new Set(t.unsupportedPaths),disabled:e.disabled,showLabel:!1,onPatch:e.onPatch})}
    </div>
    ${Qv(o)}
  `}function lt(e){const{channelId:t,props:n}=e,s=n.configSaving||n.configSchemaLoading;return c`
    <div style="margin-top: 16px;">
      ${n.configSchemaLoading?c`
              <div class="muted">Loading config schema…</div>
            `:Yv({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?"Saving…":"Save"}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          Reload
        </button>
      </div>
    </div>
  `}function Xv(e){const{props:t,discord:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Discord</div>
      <div class="card-sub">Bot status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:f}

      ${lt({channelId:"discord",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function Zv(e){const{props:t,googleChat:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Google Chat</div>
      <div class="card-sub">Chat API webhook status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?n.configured?"Yes":"No":"n/a"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?n.running?"Yes":"No":"n/a"}</span>
        </div>
        <div>
          <span class="label">Credential</span>
          <span>${n?.credentialSource??"n/a"}</span>
        </div>
        <div>
          <span class="label">Audience</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:f}

      ${lt({channelId:"googlechat",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function eb(e){const{props:t,imessage:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">iMessage</div>
      <div class="card-sub">macOS bridge status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.error??""}
          </div>`:f}

      ${lt({channelId:"imessage",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function Ur(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:"n/a"}function tb(e){const{props:t,nostr:n,nostrAccounts:s,accountCountLabel:i,profileFormState:o,profileFormCallbacks:a,onEditProfile:l}=e,r=s[0],d=n?.configured??r?.configured??!1,g=n?.running??r?.running??!1,u=n?.publicKey??r?.publicKey,m=n?.lastStartAt??r?.lastStartAt??null,h=n?.lastError??r?.lastError??null,b=s.length>1,k=o!=null,T=R=>{const A=R.publicKey,w=R.profile,L=w?.displayName??w?.name??R.name??R.accountId;return c`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${L}</div>
          <div class="account-card-id">${R.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${R.running?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${R.configured?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Public Key</span>
            <span class="monospace" title="${A??""}">${Ur(A)}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span>${R.lastInboundAt?se(R.lastInboundAt):"n/a"}</span>
          </div>
          ${R.lastError?c`
                <div class="account-card-error">${R.lastError}</div>
              `:f}
        </div>
      </div>
    `},I=()=>{if(k&&a)return Qf({state:o,callbacks:a,accountId:s[0]?.accountId??"default"});const R=r?.profile??n?.profile,{name:A,displayName:w,about:L,picture:C,nip05:p}=R??{},_=A||w||L||C||p;return c`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">Profile</div>
          ${d?c`
                <button
                  class="btn btn-sm"
                  @click=${l}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  Edit Profile
                </button>
              `:f}
        </div>
        ${_?c`
              <div class="status-list">
                ${C?c`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${C}
                          alt="Profile picture"
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${F=>{F.target.style.display="none"}}
                        />
                      </div>
                    `:f}
                ${A?c`<div><span class="label">Name</span><span>${A}</span></div>`:f}
                ${w?c`<div><span class="label">Display Name</span><span>${w}</span></div>`:f}
                ${L?c`<div><span class="label">About</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${L}</span></div>`:f}
                ${p?c`<div><span class="label">NIP-05</span><span>${p}</span></div>`:f}
              </div>
            `:c`
                <div style="color: var(--text-muted); font-size: 13px">
                  No profile set. Click "Edit Profile" to add your name, bio, and avatar.
                </div>
              `}
      </div>
    `};return c`
    <div class="card">
      <div class="card-title">Nostr</div>
      <div class="card-sub">Decentralized DMs via Nostr relays (NIP-04).</div>
      ${i}

      ${b?c`
            <div class="account-card-list">
              ${s.map(R=>T(R))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${d?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${g?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Public Key</span>
                <span class="monospace" title="${u??""}"
                  >${Ur(u)}</span
                >
              </div>
              <div>
                <span class="label">Last start</span>
                <span>${m?se(m):"n/a"}</span>
              </div>
            </div>
          `}

      ${h?c`<div class="callout danger" style="margin-top: 12px;">${h}</div>`:f}

      ${I()}

      ${lt({channelId:"nostr",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>Refresh</button>
      </div>
    </div>
  `}function nb(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const i=s[e],o=typeof i?.configured=="boolean"&&i.configured,a=typeof i?.running=="boolean"&&i.running,l=typeof i?.connected=="boolean"&&i.connected,d=(n.channelAccounts?.[e]??[]).some(g=>g.configured||g.running||g.connected);return o||a||l||d}function sb(e,t){return t?.[e]?.length??0}function md(e,t){const n=sb(e,t);return n<2?f:c`<div class="account-count">Accounts (${n})</div>`}function ib(e){const{props:t,signal:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Signal</div>
      <div class="card-sub">signal-cli status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Base URL</span>
          <span>${n?.baseUrl??"n/a"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:f}

      ${lt({channelId:"signal",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function ob(e){const{props:t,slack:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">Slack</div>
      <div class="card-sub">Socket mode status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:f}

      ${lt({channelId:"slack",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function ab(e){const{props:t,telegram:n,telegramAccounts:s,accountCountLabel:i}=e,o=s.length>1,a=l=>{const d=l.probe?.bot?.username,g=l.name||l.accountId;return c`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${d?`@${d}`:g}
          </div>
          <div class="account-card-id">${l.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${l.running?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${l.configured?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span>${l.lastInboundAt?se(l.lastInboundAt):"n/a"}</span>
          </div>
          ${l.lastError?c`
                <div class="account-card-error">
                  ${l.lastError}
                </div>
              `:f}
        </div>
      </div>
    `};return c`
    <div class="card">
      <div class="card-title">Telegram</div>
      <div class="card-sub">Bot status and channel configuration.</div>
      ${i}

      ${o?c`
            <div class="account-card-list">
              ${s.map(l=>a(l))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${n?.configured?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${n?.running?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Mode</span>
                <span>${n?.mode??"n/a"}</span>
              </div>
              <div>
                <span class="label">Last start</span>
                <span>${n?.lastStartAt?se(n.lastStartAt):"n/a"}</span>
              </div>
              <div>
                <span class="label">Last probe</span>
                <span>${n?.lastProbeAt?se(n.lastProbeAt):"n/a"}</span>
              </div>
            </div>
          `}

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${n?.probe?c`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:f}

      ${lt({channelId:"telegram",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function rb(e){const{props:t,whatsapp:n,accountCountLabel:s}=e;return c`
    <div class="card">
      <div class="card-title">WhatsApp</div>
      <div class="card-sub">Link WhatsApp Web and monitor connection health.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Linked</span>
          <span>${n?.linked?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n?.connected?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last connect</span>
          <span>
            ${n?.lastConnectedAt?se(n.lastConnectedAt):"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Last message</span>
          <span>
            ${n?.lastMessageAt?se(n.lastMessageAt):"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Auth age</span>
          <span>
            ${n?.authAgeMs!=null?Do(n.authAgeMs):"n/a"}
          </span>
        </div>
      </div>

      ${n?.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:f}

      ${t.whatsappMessage?c`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:f}

      ${t.whatsappQrDataUrl?c`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:f}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?"Working…":"Show QR"}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          Relink
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          Wait for scan
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          Logout
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Refresh
        </button>
      </div>

      ${lt({channelId:"whatsapp",props:t})}
    </div>
  `}function lb(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,s=t?.telegram??void 0,i=t?.discord??null,o=t?.googlechat??null,a=t?.slack??null,l=t?.signal??null,r=t?.imessage??null,d=t?.nostr??null,u=cb(e.snapshot).map((m,h)=>({key:m,enabled:nb(m,e),order:h})).toSorted((m,h)=>m.enabled!==h.enabled?m.enabled?-1:1:m.order-h.order);return c`
    <section class="grid grid-cols-2">
      ${u.map(m=>db(m.key,e,{whatsapp:n,telegram:s,discord:i,googlechat:o,slack:a,signal:l,imessage:r,nostr:d,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Channel health</div>
          <div class="card-sub">Channel status snapshots from the gateway.</div>
        </div>
        <div class="muted">${e.lastSuccessAt?se(e.lastSuccessAt):"n/a"}</div>
      </div>
      ${e.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:f}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):"No snapshot yet."}
      </pre>
    </section>
  `}function cb(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr"]}function db(e,t,n){const s=md(e,n.channelAccounts);switch(e){case"whatsapp":return rb({props:t,whatsapp:n.whatsapp,accountCountLabel:s});case"telegram":return ab({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:s});case"discord":return Xv({props:t,discord:n.discord,accountCountLabel:s});case"googlechat":return Zv({props:t,googleChat:n.googlechat,accountCountLabel:s});case"slack":return ob({props:t,slack:n.slack,accountCountLabel:s});case"signal":return ib({props:t,signal:n.signal,accountCountLabel:s});case"imessage":return eb({props:t,imessage:n.imessage,accountCountLabel:s});case"nostr":{const i=n.channelAccounts?.nostr??[],o=i[0],a=o?.accountId??"default",l=o?.profile??null,r=t.nostrProfileAccountId===a?t.nostrProfileFormState:null,d=r?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return tb({props:t,nostr:n.nostr,nostrAccounts:i,accountCountLabel:s,profileFormState:r,profileFormCallbacks:d,onEditProfile:()=>t.onNostrProfileEdit(a,l)})}default:return ub(e,t,n.channelAccounts??{})}}function ub(e,t,n){const s=pb(t.snapshot,e),i=t.snapshot?.channels?.[e],o=typeof i?.configured=="boolean"?i.configured:void 0,a=typeof i?.running=="boolean"?i.running:void 0,l=typeof i?.connected=="boolean"?i.connected:void 0,r=typeof i?.lastError=="string"?i.lastError:void 0,d=n[e]??[],g=md(e,n);return c`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">Channel status and configuration.</div>
      ${g}

      ${d.length>0?c`
            <div class="account-card-list">
              ${d.map(u=>vb(u))}
            </div>
          `:c`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${o==null?"n/a":o?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${a==null?"n/a":a?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Connected</span>
                <span>${l==null?"n/a":l?"Yes":"No"}</span>
              </div>
            </div>
          `}

      ${r?c`<div class="callout danger" style="margin-top: 12px;">
            ${r}
          </div>`:f}

      ${lt({channelId:e,props:t})}
    </div>
  `}function gb(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function pb(e,t){return gb(e)[t]?.label??e?.channelLabels?.[t]??t}const fb=600*1e3;function vd(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<fb:!1}function hb(e){return e.running?"Yes":vd(e)?"Active":"No"}function mb(e){return e.connected===!0?"Yes":e.connected===!1?"No":vd(e)?"Active":"n/a"}function vb(e){const t=hb(e),n=mb(e);return c`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">Running</span>
          <span>${t}</span>
        </div>
        <div>
          <span class="label">Configured</span>
          <span>${e.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n}</span>
        </div>
        <div>
          <span class="label">Last inbound</span>
          <span>${e.lastInboundAt?se(e.lastInboundAt):"n/a"}</span>
        </div>
        ${e.lastError?c`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:f}
      </div>
    </div>
  `}const Wn=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),Wn(s,t);return!0},zs=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},bd=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),xb(t)}};function bb(e){this._$AN!==void 0?(zs(this),this._$AM=e,bd(this)):this._$AM=e}function yb(e,t=!1,n=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let o=n;o<s.length;o++)Wn(s[o],!1),zs(s[o]);else s!=null&&(Wn(s,!1),zs(s));else Wn(this,e)}const xb=e=>{e.type==Zo.CHILD&&(e._$AP??=yb,e._$AQ??=bb)};class $b extends ta{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),bd(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(Wn(this,t),zs(this))}setValue(t){if(Am(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const Mi=new WeakMap,wb=ea(class extends $b{render(e){return f}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),f}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Mi.get(t);n===void 0&&(n=new WeakMap,Mi.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Mi.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class lo extends ta{constructor(t){if(super(t),this.it=f,t.type!==Zo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===f||t==null)return this._t=void 0,this.it=t;if(t===kt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}lo.directiveName="unsafeHTML",lo.resultType=1;const co=ea(lo);const{entries:yd,setPrototypeOf:Br,isFrozen:kb,getPrototypeOf:Sb,getOwnPropertyDescriptor:Ab}=Object;let{freeze:Ce,seal:Ne,create:uo}=Object,{apply:go,construct:po}=typeof Reflect<"u"&&Reflect;Ce||(Ce=function(t){return t});Ne||(Ne=function(t){return t});go||(go=function(t,n){for(var s=arguments.length,i=new Array(s>2?s-2:0),o=2;o<s;o++)i[o-2]=arguments[o];return t.apply(n,i)});po||(po=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return new t(...s)});const $s=Te(Array.prototype.forEach),Cb=Te(Array.prototype.lastIndexOf),Hr=Te(Array.prototype.pop),En=Te(Array.prototype.push),Tb=Te(Array.prototype.splice),Rs=Te(String.prototype.toLowerCase),Di=Te(String.prototype.toString),Pi=Te(String.prototype.match),Rn=Te(String.prototype.replace),_b=Te(String.prototype.indexOf),Eb=Te(String.prototype.trim),Oe=Te(Object.prototype.hasOwnProperty),Se=Te(RegExp.prototype.test),In=Rb(TypeError);function Te(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return go(e,t,s)}}function Rb(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return po(e,n)}}function Q(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Rs;Br&&Br(e,null);let s=t.length;for(;s--;){let i=t[s];if(typeof i=="string"){const o=n(i);o!==i&&(kb(t)||(t[s]=o),i=o)}e[i]=!0}return e}function Ib(e){for(let t=0;t<e.length;t++)Oe(e,t)||(e[t]=null);return e}function Ge(e){const t=uo(null);for(const[n,s]of yd(e))Oe(e,n)&&(Array.isArray(s)?t[n]=Ib(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=Ge(s):t[n]=s);return t}function Ln(e,t){for(;e!==null;){const s=Ab(e,t);if(s){if(s.get)return Te(s.get);if(typeof s.value=="function")return Te(s.value)}e=Sb(e)}function n(){return null}return n}const zr=Ce(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Fi=Ce(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ni=Ce(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Lb=Ce(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Oi=Ce(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Mb=Ce(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),jr=Ce(["#text"]),Kr=Ce(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ui=Ce(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),qr=Ce(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ws=Ce(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Db=Ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Pb=Ne(/<%[\w\W]*|[\w\W]*%>/gm),Fb=Ne(/\$\{[\w\W]*/gm),Nb=Ne(/^data-[\-\w.\u00B7-\uFFFF]+$/),Ob=Ne(/^aria-[\-\w]+$/),xd=Ne(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ub=Ne(/^(?:\w+script|data):/i),Bb=Ne(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$d=Ne(/^html$/i),Hb=Ne(/^[a-z][.\w]*(-[.\w]+)+$/i);var Wr=Object.freeze({__proto__:null,ARIA_ATTR:Ob,ATTR_WHITESPACE:Bb,CUSTOM_ELEMENT:Hb,DATA_ATTR:Nb,DOCTYPE_NAME:$d,ERB_EXPR:Pb,IS_ALLOWED_URI:xd,IS_SCRIPT_OR_DATA:Ub,MUSTACHE_EXPR:Db,TMPLIT_EXPR:Fb});const Mn={element:1,text:3,progressingInstruction:7,comment:8,document:9},zb=function(){return typeof window>"u"?null:window},jb=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(s=n.getAttribute(i));const o="dompurify"+(s?"#"+s:"");try{return t.createPolicy(o,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Gr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function wd(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:zb();const t=z=>wd(z);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==Mn.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,i=s.currentScript,{DocumentFragment:o,HTMLTemplateElement:a,Node:l,Element:r,NodeFilter:d,NamedNodeMap:g=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:u,DOMParser:m,trustedTypes:h}=e,b=r.prototype,k=Ln(b,"cloneNode"),T=Ln(b,"remove"),I=Ln(b,"nextSibling"),R=Ln(b,"childNodes"),A=Ln(b,"parentNode");if(typeof a=="function"){const z=n.createElement("template");z.content&&z.content.ownerDocument&&(n=z.content.ownerDocument)}let w,L="";const{implementation:C,createNodeIterator:p,createDocumentFragment:_,getElementsByTagName:F}=n,{importNode:U}=s;let M=Gr();t.isSupported=typeof yd=="function"&&typeof A=="function"&&C&&C.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:q,ERB_EXPR:W,TMPLIT_EXPR:V,DATA_ATTR:E,ARIA_ATTR:j,IS_SCRIPT_OR_DATA:Y,ATTR_WHITESPACE:J,CUSTOM_ELEMENT:fe}=Wr;let{IS_ALLOWED_URI:P}=Wr,H=null;const G=Q({},[...zr,...Fi,...Ni,...Oi,...jr]);let X=null;const de=Q({},[...Kr,...Ui,...qr,...ws]);let te=Object.seal(uo(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ae=null,Z=null;const K=Object.seal(uo(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let re=!0,ce=!0,ve=!1,Ie=!0,Xe=!1,ct=!0,be=!1,je=!1,Ze=!1,et=!1,tt=!1,dt=!1,ut=!0,Rt=!1;const ci="user-content-";let on=!0,gt=!1,Ke={},_e=null;const An=Q({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let an=null;const pt=Q({},["audio","video","img","source","image","track"]);let di=null;const ya=Q({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),cs="http://www.w3.org/1998/Math/MathML",ds="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml";let rn=nt,ui=!1,gi=null;const Yd=Q({},[cs,ds,nt],Di);let us=Q({},["mi","mo","mn","ms","mtext"]),gs=Q({},["annotation-xml"]);const Xd=Q({},["title","style","font","a","script"]);let Cn=null;const Zd=["application/xhtml+xml","text/html"],eu="text/html";let pe=null,ln=null;const tu=n.createElement("form"),xa=function(S){return S instanceof RegExp||S instanceof Function},pi=function(){let S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ln&&ln===S)){if((!S||typeof S!="object")&&(S={}),S=Ge(S),Cn=Zd.indexOf(S.PARSER_MEDIA_TYPE)===-1?eu:S.PARSER_MEDIA_TYPE,pe=Cn==="application/xhtml+xml"?Di:Rs,H=Oe(S,"ALLOWED_TAGS")?Q({},S.ALLOWED_TAGS,pe):G,X=Oe(S,"ALLOWED_ATTR")?Q({},S.ALLOWED_ATTR,pe):de,gi=Oe(S,"ALLOWED_NAMESPACES")?Q({},S.ALLOWED_NAMESPACES,Di):Yd,di=Oe(S,"ADD_URI_SAFE_ATTR")?Q(Ge(ya),S.ADD_URI_SAFE_ATTR,pe):ya,an=Oe(S,"ADD_DATA_URI_TAGS")?Q(Ge(pt),S.ADD_DATA_URI_TAGS,pe):pt,_e=Oe(S,"FORBID_CONTENTS")?Q({},S.FORBID_CONTENTS,pe):An,ae=Oe(S,"FORBID_TAGS")?Q({},S.FORBID_TAGS,pe):Ge({}),Z=Oe(S,"FORBID_ATTR")?Q({},S.FORBID_ATTR,pe):Ge({}),Ke=Oe(S,"USE_PROFILES")?S.USE_PROFILES:!1,re=S.ALLOW_ARIA_ATTR!==!1,ce=S.ALLOW_DATA_ATTR!==!1,ve=S.ALLOW_UNKNOWN_PROTOCOLS||!1,Ie=S.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Xe=S.SAFE_FOR_TEMPLATES||!1,ct=S.SAFE_FOR_XML!==!1,be=S.WHOLE_DOCUMENT||!1,et=S.RETURN_DOM||!1,tt=S.RETURN_DOM_FRAGMENT||!1,dt=S.RETURN_TRUSTED_TYPE||!1,Ze=S.FORCE_BODY||!1,ut=S.SANITIZE_DOM!==!1,Rt=S.SANITIZE_NAMED_PROPS||!1,on=S.KEEP_CONTENT!==!1,gt=S.IN_PLACE||!1,P=S.ALLOWED_URI_REGEXP||xd,rn=S.NAMESPACE||nt,us=S.MATHML_TEXT_INTEGRATION_POINTS||us,gs=S.HTML_INTEGRATION_POINTS||gs,te=S.CUSTOM_ELEMENT_HANDLING||{},S.CUSTOM_ELEMENT_HANDLING&&xa(S.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(te.tagNameCheck=S.CUSTOM_ELEMENT_HANDLING.tagNameCheck),S.CUSTOM_ELEMENT_HANDLING&&xa(S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(te.attributeNameCheck=S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),S.CUSTOM_ELEMENT_HANDLING&&typeof S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(te.allowCustomizedBuiltInElements=S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Xe&&(ce=!1),tt&&(et=!0),Ke&&(H=Q({},jr),X=[],Ke.html===!0&&(Q(H,zr),Q(X,Kr)),Ke.svg===!0&&(Q(H,Fi),Q(X,Ui),Q(X,ws)),Ke.svgFilters===!0&&(Q(H,Ni),Q(X,Ui),Q(X,ws)),Ke.mathMl===!0&&(Q(H,Oi),Q(X,qr),Q(X,ws))),S.ADD_TAGS&&(typeof S.ADD_TAGS=="function"?K.tagCheck=S.ADD_TAGS:(H===G&&(H=Ge(H)),Q(H,S.ADD_TAGS,pe))),S.ADD_ATTR&&(typeof S.ADD_ATTR=="function"?K.attributeCheck=S.ADD_ATTR:(X===de&&(X=Ge(X)),Q(X,S.ADD_ATTR,pe))),S.ADD_URI_SAFE_ATTR&&Q(di,S.ADD_URI_SAFE_ATTR,pe),S.FORBID_CONTENTS&&(_e===An&&(_e=Ge(_e)),Q(_e,S.FORBID_CONTENTS,pe)),S.ADD_FORBID_CONTENTS&&(_e===An&&(_e=Ge(_e)),Q(_e,S.ADD_FORBID_CONTENTS,pe)),on&&(H["#text"]=!0),be&&Q(H,["html","head","body"]),H.table&&(Q(H,["tbody"]),delete ae.tbody),S.TRUSTED_TYPES_POLICY){if(typeof S.TRUSTED_TYPES_POLICY.createHTML!="function")throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof S.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=S.TRUSTED_TYPES_POLICY,L=w.createHTML("")}else w===void 0&&(w=jb(h,i)),w!==null&&typeof L=="string"&&(L=w.createHTML(""));Ce&&Ce(S),ln=S}},$a=Q({},[...Fi,...Ni,...Lb]),wa=Q({},[...Oi,...Mb]),nu=function(S){let D=A(S);(!D||!D.tagName)&&(D={namespaceURI:rn,tagName:"template"});const O=Rs(S.tagName),le=Rs(D.tagName);return gi[S.namespaceURI]?S.namespaceURI===ds?D.namespaceURI===nt?O==="svg":D.namespaceURI===cs?O==="svg"&&(le==="annotation-xml"||us[le]):!!$a[O]:S.namespaceURI===cs?D.namespaceURI===nt?O==="math":D.namespaceURI===ds?O==="math"&&gs[le]:!!wa[O]:S.namespaceURI===nt?D.namespaceURI===ds&&!gs[le]||D.namespaceURI===cs&&!us[le]?!1:!wa[O]&&(Xd[O]||!$a[O]):!!(Cn==="application/xhtml+xml"&&gi[S.namespaceURI]):!1},qe=function(S){En(t.removed,{element:S});try{A(S).removeChild(S)}catch{T(S)}},It=function(S,D){try{En(t.removed,{attribute:D.getAttributeNode(S),from:D})}catch{En(t.removed,{attribute:null,from:D})}if(D.removeAttribute(S),S==="is")if(et||tt)try{qe(D)}catch{}else try{D.setAttribute(S,"")}catch{}},ka=function(S){let D=null,O=null;if(Ze)S="<remove></remove>"+S;else{const ue=Pi(S,/^[\r\n\t ]+/);O=ue&&ue[0]}Cn==="application/xhtml+xml"&&rn===nt&&(S='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+S+"</body></html>");const le=w?w.createHTML(S):S;if(rn===nt)try{D=new m().parseFromString(le,Cn)}catch{}if(!D||!D.documentElement){D=C.createDocument(rn,"template",null);try{D.documentElement.innerHTML=ui?L:le}catch{}}const we=D.body||D.documentElement;return S&&O&&we.insertBefore(n.createTextNode(O),we.childNodes[0]||null),rn===nt?F.call(D,be?"html":"body")[0]:be?D.documentElement:we},Sa=function(S){return p.call(S.ownerDocument||S,S,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},fi=function(S){return S instanceof u&&(typeof S.nodeName!="string"||typeof S.textContent!="string"||typeof S.removeChild!="function"||!(S.attributes instanceof g)||typeof S.removeAttribute!="function"||typeof S.setAttribute!="function"||typeof S.namespaceURI!="string"||typeof S.insertBefore!="function"||typeof S.hasChildNodes!="function")},Aa=function(S){return typeof l=="function"&&S instanceof l};function st(z,S,D){$s(z,O=>{O.call(t,S,D,ln)})}const Ca=function(S){let D=null;if(st(M.beforeSanitizeElements,S,null),fi(S))return qe(S),!0;const O=pe(S.nodeName);if(st(M.uponSanitizeElement,S,{tagName:O,allowedTags:H}),ct&&S.hasChildNodes()&&!Aa(S.firstElementChild)&&Se(/<[/\w!]/g,S.innerHTML)&&Se(/<[/\w!]/g,S.textContent)||S.nodeType===Mn.progressingInstruction||ct&&S.nodeType===Mn.comment&&Se(/<[/\w]/g,S.data))return qe(S),!0;if(!(K.tagCheck instanceof Function&&K.tagCheck(O))&&(!H[O]||ae[O])){if(!ae[O]&&_a(O)&&(te.tagNameCheck instanceof RegExp&&Se(te.tagNameCheck,O)||te.tagNameCheck instanceof Function&&te.tagNameCheck(O)))return!1;if(on&&!_e[O]){const le=A(S)||S.parentNode,we=R(S)||S.childNodes;if(we&&le){const ue=we.length;for(let Ee=ue-1;Ee>=0;--Ee){const it=k(we[Ee],!0);it.__removalCount=(S.__removalCount||0)+1,le.insertBefore(it,I(S))}}}return qe(S),!0}return S instanceof r&&!nu(S)||(O==="noscript"||O==="noembed"||O==="noframes")&&Se(/<\/no(script|embed|frames)/i,S.innerHTML)?(qe(S),!0):(Xe&&S.nodeType===Mn.text&&(D=S.textContent,$s([q,W,V],le=>{D=Rn(D,le," ")}),S.textContent!==D&&(En(t.removed,{element:S.cloneNode()}),S.textContent=D)),st(M.afterSanitizeElements,S,null),!1)},Ta=function(S,D,O){if(ut&&(D==="id"||D==="name")&&(O in n||O in tu))return!1;if(!(ce&&!Z[D]&&Se(E,D))){if(!(re&&Se(j,D))){if(!(K.attributeCheck instanceof Function&&K.attributeCheck(D,S))){if(!X[D]||Z[D]){if(!(_a(S)&&(te.tagNameCheck instanceof RegExp&&Se(te.tagNameCheck,S)||te.tagNameCheck instanceof Function&&te.tagNameCheck(S))&&(te.attributeNameCheck instanceof RegExp&&Se(te.attributeNameCheck,D)||te.attributeNameCheck instanceof Function&&te.attributeNameCheck(D,S))||D==="is"&&te.allowCustomizedBuiltInElements&&(te.tagNameCheck instanceof RegExp&&Se(te.tagNameCheck,O)||te.tagNameCheck instanceof Function&&te.tagNameCheck(O))))return!1}else if(!di[D]){if(!Se(P,Rn(O,J,""))){if(!((D==="src"||D==="xlink:href"||D==="href")&&S!=="script"&&_b(O,"data:")===0&&an[S])){if(!(ve&&!Se(Y,Rn(O,J,"")))){if(O)return!1}}}}}}}return!0},_a=function(S){return S!=="annotation-xml"&&Pi(S,fe)},Ea=function(S){st(M.beforeSanitizeAttributes,S,null);const{attributes:D}=S;if(!D||fi(S))return;const O={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:X,forceKeepAttr:void 0};let le=D.length;for(;le--;){const we=D[le],{name:ue,namespaceURI:Ee,value:it}=we,cn=pe(ue),hi=it;let ye=ue==="value"?hi:Eb(hi);if(O.attrName=cn,O.attrValue=ye,O.keepAttr=!0,O.forceKeepAttr=void 0,st(M.uponSanitizeAttribute,S,O),ye=O.attrValue,Rt&&(cn==="id"||cn==="name")&&(It(ue,S),ye=ci+ye),ct&&Se(/((--!?|])>)|<\/(style|title|textarea)/i,ye)){It(ue,S);continue}if(cn==="attributename"&&Pi(ye,"href")){It(ue,S);continue}if(O.forceKeepAttr)continue;if(!O.keepAttr){It(ue,S);continue}if(!Ie&&Se(/\/>/i,ye)){It(ue,S);continue}Xe&&$s([q,W,V],Ia=>{ye=Rn(ye,Ia," ")});const Ra=pe(S.nodeName);if(!Ta(Ra,cn,ye)){It(ue,S);continue}if(w&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!Ee)switch(h.getAttributeType(Ra,cn)){case"TrustedHTML":{ye=w.createHTML(ye);break}case"TrustedScriptURL":{ye=w.createScriptURL(ye);break}}if(ye!==hi)try{Ee?S.setAttributeNS(Ee,ue,ye):S.setAttribute(ue,ye),fi(S)?qe(S):Hr(t.removed)}catch{It(ue,S)}}st(M.afterSanitizeAttributes,S,null)},su=function z(S){let D=null;const O=Sa(S);for(st(M.beforeSanitizeShadowDOM,S,null);D=O.nextNode();)st(M.uponSanitizeShadowNode,D,null),Ca(D),Ea(D),D.content instanceof o&&z(D.content);st(M.afterSanitizeShadowDOM,S,null)};return t.sanitize=function(z){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},D=null,O=null,le=null,we=null;if(ui=!z,ui&&(z="<!-->"),typeof z!="string"&&!Aa(z))if(typeof z.toString=="function"){if(z=z.toString(),typeof z!="string")throw In("dirty is not a string, aborting")}else throw In("toString is not a function");if(!t.isSupported)return z;if(je||pi(S),t.removed=[],typeof z=="string"&&(gt=!1),gt){if(z.nodeName){const it=pe(z.nodeName);if(!H[it]||ae[it])throw In("root node is forbidden and cannot be sanitized in-place")}}else if(z instanceof l)D=ka("<!---->"),O=D.ownerDocument.importNode(z,!0),O.nodeType===Mn.element&&O.nodeName==="BODY"||O.nodeName==="HTML"?D=O:D.appendChild(O);else{if(!et&&!Xe&&!be&&z.indexOf("<")===-1)return w&&dt?w.createHTML(z):z;if(D=ka(z),!D)return et?null:dt?L:""}D&&Ze&&qe(D.firstChild);const ue=Sa(gt?z:D);for(;le=ue.nextNode();)Ca(le),Ea(le),le.content instanceof o&&su(le.content);if(gt)return z;if(et){if(tt)for(we=_.call(D.ownerDocument);D.firstChild;)we.appendChild(D.firstChild);else we=D;return(X.shadowroot||X.shadowrootmode)&&(we=U.call(s,we,!0)),we}let Ee=be?D.outerHTML:D.innerHTML;return be&&H["!doctype"]&&D.ownerDocument&&D.ownerDocument.doctype&&D.ownerDocument.doctype.name&&Se($d,D.ownerDocument.doctype.name)&&(Ee="<!DOCTYPE "+D.ownerDocument.doctype.name+`>
`+Ee),Xe&&$s([q,W,V],it=>{Ee=Rn(Ee,it," ")}),w&&dt?w.createHTML(Ee):Ee},t.setConfig=function(){let z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};pi(z),je=!0},t.clearConfig=function(){ln=null,je=!1},t.isValidAttribute=function(z,S,D){ln||pi({});const O=pe(z),le=pe(S);return Ta(O,le,D)},t.addHook=function(z,S){typeof S=="function"&&En(M[z],S)},t.removeHook=function(z,S){if(S!==void 0){const D=Cb(M[z],S);return D===-1?void 0:Tb(M[z],D,1)[0]}return Hr(M[z])},t.removeHooks=function(z){M[z]=[]},t.removeAllHooks=function(){M=Gr()},t}var fo=wd();function aa(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var sn=aa();function kd(e){sn=e}var jt={exec:()=>null};function ee(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(Ae.caret,"$1"),n=n.replace(i,a),s},getRegex:()=>new RegExp(n,t)};return s}var Kb=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ae={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},qb=/^(?:[ \t]*(?:\n|$))+/,Wb=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Gb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ls=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Jb=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ra=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Sd=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ad=ee(Sd).replace(/bull/g,ra).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Vb=ee(Sd).replace(/bull/g,ra).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),la=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Qb=/^[^\n]+/,ca=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Yb=ee(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ca).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Xb=ee(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ra).getRegex(),ai="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",da=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Zb=ee("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",da).replace("tag",ai).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Cd=ee(la).replace("hr",ls).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ai).getRegex(),ey=ee(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Cd).getRegex(),ua={blockquote:ey,code:Wb,def:Yb,fences:Gb,heading:Jb,hr:ls,html:Zb,lheading:Ad,list:Xb,newline:qb,paragraph:Cd,table:jt,text:Qb},Jr=ee("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ls).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ai).getRegex(),ty={...ua,lheading:Vb,table:Jr,paragraph:ee(la).replace("hr",ls).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Jr).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ai).getRegex()},ny={...ua,html:ee(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",da).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:jt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ee(la).replace("hr",ls).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ad).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},sy=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,iy=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Td=/^( {2,}|\\)\n(?!\s*$)/,oy=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ri=/[\p{P}\p{S}]/u,ga=/[\s\p{P}\p{S}]/u,_d=/[^\s\p{P}\p{S}]/u,ay=ee(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ga).getRegex(),Ed=/(?!~)[\p{P}\p{S}]/u,ry=/(?!~)[\s\p{P}\p{S}]/u,ly=/(?:[^\s\p{P}\p{S}]|~)/u,Rd=/(?![*_])[\p{P}\p{S}]/u,cy=/(?![*_])[\s\p{P}\p{S}]/u,dy=/(?:[^\s\p{P}\p{S}]|[*_])/u,uy=ee(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Kb?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Id=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,gy=ee(Id,"u").replace(/punct/g,ri).getRegex(),py=ee(Id,"u").replace(/punct/g,Ed).getRegex(),Ld="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",fy=ee(Ld,"gu").replace(/notPunctSpace/g,_d).replace(/punctSpace/g,ga).replace(/punct/g,ri).getRegex(),hy=ee(Ld,"gu").replace(/notPunctSpace/g,ly).replace(/punctSpace/g,ry).replace(/punct/g,Ed).getRegex(),my=ee("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,_d).replace(/punctSpace/g,ga).replace(/punct/g,ri).getRegex(),vy=ee(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Rd).getRegex(),by="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",yy=ee(by,"gu").replace(/notPunctSpace/g,dy).replace(/punctSpace/g,cy).replace(/punct/g,Rd).getRegex(),xy=ee(/\\(punct)/,"gu").replace(/punct/g,ri).getRegex(),$y=ee(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),wy=ee(da).replace("(?:-->|$)","-->").getRegex(),ky=ee("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",wy).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),js=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Sy=ee(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",js).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Md=ee(/^!?\[(label)\]\[(ref)\]/).replace("label",js).replace("ref",ca).getRegex(),Dd=ee(/^!?\[(ref)\](?:\[\])?/).replace("ref",ca).getRegex(),Ay=ee("reflink|nolink(?!\\()","g").replace("reflink",Md).replace("nolink",Dd).getRegex(),Vr=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,pa={_backpedal:jt,anyPunctuation:xy,autolink:$y,blockSkip:uy,br:Td,code:iy,del:jt,delLDelim:jt,delRDelim:jt,emStrongLDelim:gy,emStrongRDelimAst:fy,emStrongRDelimUnd:my,escape:sy,link:Sy,nolink:Dd,punctuation:ay,reflink:Md,reflinkSearch:Ay,tag:ky,text:oy,url:jt},Cy={...pa,link:ee(/^!?\[(label)\]\((.*?)\)/).replace("label",js).getRegex(),reflink:ee(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",js).getRegex()},ho={...pa,emStrongRDelimAst:hy,emStrongLDelim:py,delLDelim:vy,delRDelim:yy,url:ee(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Vr).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ee(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Vr).getRegex()},Ty={...ho,br:ee(Td).replace("{2,}","*").getRegex(),text:ee(ho.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ks={normal:ua,gfm:ty,pedantic:ny},Dn={normal:pa,gfm:ho,breaks:Ty,pedantic:Cy},_y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qr=e=>_y[e];function Je(e,t){if(t){if(Ae.escapeTest.test(e))return e.replace(Ae.escapeReplace,Qr)}else if(Ae.escapeTestNoEncode.test(e))return e.replace(Ae.escapeReplaceNoEncode,Qr);return e}function Yr(e){try{e=encodeURI(e).replace(Ae.percentDecode,"%")}catch{return null}return e}function Xr(e,t){let n=e.replace(Ae.findPipe,(o,a,l)=>{let r=!1,d=a;for(;--d>=0&&l[d]==="\\";)r=!r;return r?"|":" |"}),s=n.split(Ae.splitPipe),i=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(Ae.slashPipe,"|");return s}function Pn(e,t,n){let s=e.length;if(s===0)return"";let i=0;for(;i<s&&e.charAt(s-i-1)===t;)i++;return e.slice(0,s-i)}function Ey(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function Ry(e,t=0){let n=t,s="";for(let i of e)if(i==="	"){let o=4-n%4;s+=" ".repeat(o),n+=o}else s+=i,n++;return s}function Zr(e,t,n,s,i){let o=t.href,a=t.title||null,l=e[1].replace(i.other.outputLinkReplace,"$1");s.state.inLink=!0;let r={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:a,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,r}function Iy(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let i=s[1];return t.split(`
`).map(o=>{let a=o.match(n.other.beginningSpace);if(a===null)return o;let[l]=a;return l.length>=i.length?o.slice(i.length):o}).join(`
`)}var Ks=class{options;rules;lexer;constructor(e){this.options=e||sn}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Pn(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Iy(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=Pn(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Pn(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Pn(t[0],`
`).split(`
`),s="",i="",o=[];for(;n.length>0;){let a=!1,l=[],r;for(r=0;r<n.length;r++)if(this.rules.other.blockquoteStart.test(n[r]))l.push(n[r]),a=!0;else if(!a)l.push(n[r]);else break;n=n.slice(r);let d=l.join(`
`),g=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${d}`:d,i=i?`${i}
${g}`:g;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,o,!0),this.lexer.state.top=u,n.length===0)break;let m=o.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let h=m,b=h.raw+`
`+n.join(`
`),k=this.blockquote(b);o[o.length-1]=k,s=s.substring(0,s.length-h.raw.length)+k.raw,i=i.substring(0,i.length-h.text.length)+k.text;break}else if(m?.type==="list"){let h=m,b=h.raw+`
`+n.join(`
`),k=this.list(b);o[o.length-1]=k,s=s.substring(0,s.length-m.raw.length)+k.raw,i=i.substring(0,i.length-h.raw.length)+k.raw,n=b.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let o=this.rules.other.listItemRegex(n),a=!1;for(;e;){let r=!1,d="",g="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;d=t[0],e=e.substring(d.length);let u=Ry(t[2].split(`
`,1)[0],t[1].length),m=e.split(`
`,1)[0],h=!u.trim(),b=0;if(this.options.pedantic?(b=2,g=u.trimStart()):h?b=t[1].length+1:(b=u.search(this.rules.other.nonSpaceChar),b=b>4?1:b,g=u.slice(b),b+=t[1].length),h&&this.rules.other.blankLine.test(m)&&(d+=m+`
`,e=e.substring(m.length+1),r=!0),!r){let k=this.rules.other.nextBulletRegex(b),T=this.rules.other.hrRegex(b),I=this.rules.other.fencesBeginRegex(b),R=this.rules.other.headingBeginRegex(b),A=this.rules.other.htmlBeginRegex(b),w=this.rules.other.blockquoteBeginRegex(b);for(;e;){let L=e.split(`
`,1)[0],C;if(m=L,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),C=m):C=m.replace(this.rules.other.tabCharGlobal,"    "),I.test(m)||R.test(m)||A.test(m)||w.test(m)||k.test(m)||T.test(m))break;if(C.search(this.rules.other.nonSpaceChar)>=b||!m.trim())g+=`
`+C.slice(b);else{if(h||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||I.test(u)||R.test(u)||T.test(u))break;g+=`
`+m}h=!m.trim(),d+=L+`
`,e=e.substring(L.length+1),u=C.slice(b)}}i.loose||(a?i.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(a=!0)),i.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(g),loose:!1,text:g,tokens:[]}),i.raw+=d}let l=i.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let r of i.items){if(this.lexer.state.top=!1,r.tokens=this.lexer.blockTokens(r.text,[]),r.task){if(r.text=r.text.replace(this.rules.other.listReplaceTask,""),r.tokens[0]?.type==="text"||r.tokens[0]?.type==="paragraph"){r.tokens[0].raw=r.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),r.tokens[0].text=r.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}}let d=this.rules.other.listTaskCheckbox.exec(r.raw);if(d){let g={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};r.checked=g.checked,i.loose?r.tokens[0]&&["paragraph","text"].includes(r.tokens[0].type)&&"tokens"in r.tokens[0]&&r.tokens[0].tokens?(r.tokens[0].raw=g.raw+r.tokens[0].raw,r.tokens[0].text=g.raw+r.tokens[0].text,r.tokens[0].tokens.unshift(g)):r.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):r.tokens.unshift(g)}}if(!i.loose){let d=r.tokens.filter(u=>u.type==="space"),g=d.length>0&&d.some(u=>this.rules.other.anyLine.test(u.raw));i.loose=g}}if(i.loose)for(let r of i.items){r.loose=!0;for(let d of r.tokens)d.type==="text"&&(d.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:i}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Xr(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<n.length;a++)o.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:o.align[a]});for(let a of i)o.rows.push(Xr(a,o.header.length).map((l,r)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:o.align[r]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=Pn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Ey(t[2],"()");if(o===-2)return;if(o>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),Zr(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[s.toLowerCase()];if(!i){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Zr(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,o,a,l=i,r=0,d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(s=d.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(a=[...o].length,s[3]||s[4]){l+=a;continue}else if((s[5]||s[6])&&i%3&&!((i+a)%3)){r+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+r);let g=[...s[0]][0].length,u=e.slice(0,i+s.index+g+a);if(Math.min(i,a)%2){let h=u.slice(1,-1);return{type:"em",raw:u,text:h,tokens:this.lexer.inlineTokens(h)}}let m=u.slice(2,-2);return{type:"strong",raw:u,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,n=""){let s=this.rules.inline.delLDelim.exec(e);if(s&&(!s[1]||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,o,a,l=i,r=this.rules.inline.delRDelim;for(r.lastIndex=0,t=t.slice(-1*e.length+i);(s=r.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o||(a=[...o].length,a!==i))continue;if(s[3]||s[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let d=[...s[0]][0].length,g=e.slice(0,i+s.index+d+a),u=g.slice(i,-i);return{type:"del",raw:g,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Be=class mo{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||sn,this.options.tokenizer=this.options.tokenizer||new Ks,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:Ae,block:ks.normal,inline:Dn.normal};this.options.pedantic?(n.block=ks.pedantic,n.inline=Dn.pedantic):this.options.gfm&&(n.block=ks.gfm,this.options.breaks?n.inline=Dn.breaks:n.inline=Dn.gfm),this.tokenizer.rules=n}static get rules(){return{block:ks,inline:Dn}}static lex(t,n){return new mo(n).lex(t)}static lexInline(t,n){return new mo(n).inlineTokens(t)}lex(t){t=t.replace(Ae.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(Ae.tabCharGlobal,"    ").replace(Ae.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},t,n))?(t=t.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);let a=n.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),n.push(i);continue}let o=t;if(this.options.extensions?.startBlock){let a=1/0,l=t.slice(1),r;this.options.extensions.startBlock.forEach(d=>{r=d.call({lexer:this},l),typeof r=="number"&&r>=0&&(a=Math.min(a,r))}),a<1/0&&a>=0&&(o=t.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(o))){let a=n.at(-1);s&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i),s=o.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);let a=n.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(t){let a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,i=null;if(this.tokens.links){let r=Object.keys(this.tokens.links);if(r.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)r.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,i.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)o=i[2]?i[2].length:0,s=s.slice(0,i.index+o)+"["+"a".repeat(i[0].length-o-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let a=!1,l="";for(;t;){a||(l=""),a=!1;let r;if(this.options.extensions?.inline?.some(g=>(r=g.call({lexer:this},t,n))?(t=t.substring(r.raw.length),n.push(r),!0):!1))continue;if(r=this.tokenizer.escape(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.link(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(r.raw.length);let g=n.at(-1);r.type==="text"&&g?.type==="text"?(g.raw+=r.raw,g.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(t,s,l)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(t)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(t,s,l)){t=t.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(t)){t=t.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(t))){t=t.substring(r.raw.length),n.push(r);continue}let d=t;if(this.options.extensions?.startInline){let g=1/0,u=t.slice(1),m;this.options.extensions.startInline.forEach(h=>{m=h.call({lexer:this},u),typeof m=="number"&&m>=0&&(g=Math.min(g,m))}),g<1/0&&g>=0&&(d=t.substring(0,g+1))}if(r=this.tokenizer.inlineText(d)){t=t.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(l=r.raw.slice(-1)),a=!0;let g=n.at(-1);g?.type==="text"?(g.raw+=r.raw,g.text+=r.text):n.push(r);continue}if(t){let g="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}},qs=class{options;parser;constructor(e){this.options=e||sn}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(Ae.notSpaceStart)?.[0],i=e.replace(Ae.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Je(s)+'">'+(n?i:Je(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:Je(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let a=0;a<e.items.length;a++){let l=e.items[a];s+=this.listitem(l)}let i=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+i+o+`>
`+s+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let s="";for(let i=0;i<e.rows.length;i++){let o=e.rows[i];n="";for(let a=0;a<o.length;a++)n+=this.tablecell(o[a]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Je(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),i=Yr(e);if(i===null)return s;e=i;let o='<a href="'+e+'"';return t&&(o+=' title="'+Je(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let i=Yr(e);if(i===null)return Je(n);e=i;let o=`<img src="${e}" alt="${Je(n)}"`;return t&&(o+=` title="${Je(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Je(e.text)}},fa=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},He=class vo{options;renderer;textRenderer;constructor(t){this.options=t||sn,this.options.renderer=this.options.renderer||new qs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new fa}static parse(t,n){return new vo(n).parse(t)}static parseInline(t,n){return new vo(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let i=t[s];if(this.options.extensions?.renderers?.[i.type]){let a=i,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){n+=l||"";continue}}let o=i;switch(o.type){case"space":{n+=this.renderer.space(o);break}case"hr":{n+=this.renderer.hr(o);break}case"heading":{n+=this.renderer.heading(o);break}case"code":{n+=this.renderer.code(o);break}case"table":{n+=this.renderer.table(o);break}case"blockquote":{n+=this.renderer.blockquote(o);break}case"list":{n+=this.renderer.list(o);break}case"checkbox":{n+=this.renderer.checkbox(o);break}case"html":{n+=this.renderer.html(o);break}case"def":{n+=this.renderer.def(o);break}case"paragraph":{n+=this.renderer.paragraph(o);break}case"text":{n+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(t,n=this.renderer){let s="";for(let i=0;i<t.length;i++){let o=t[i];if(this.options.extensions?.renderers?.[o.type]){let l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=l||"";continue}}let a=o;switch(a.type){case"escape":{s+=n.text(a);break}case"html":{s+=n.html(a);break}case"link":{s+=n.link(a);break}case"image":{s+=n.image(a);break}case"checkbox":{s+=n.checkbox(a);break}case"strong":{s+=n.strong(a);break}case"em":{s+=n.em(a);break}case"codespan":{s+=n.codespan(a);break}case"br":{s+=n.br(a);break}case"del":{s+=n.del(a);break}case"text":{s+=n.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},Bn=class{options;block;constructor(e){this.options=e||sn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Be.lex:Be.lexInline}provideParser(){return this.block?He.parse:He.parseInline}},Ly=class{defaults=aa();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=He;Renderer=qs;TextRenderer=fa;Lexer=Be;Tokenizer=Ks;Hooks=Bn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let i=s;for(let o of i.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of i.rows)for(let a of o)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{let i=s;n=n.concat(this.walkTokens(i.items,t));break}default:{let i=s;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let a=i[o].flat(1/0);n=n.concat(this.walkTokens(a,t))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=t.renderers[i.name];o?t.renderers[i.name]=function(...a){let l=i.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[i.level];o?o.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),n.renderer){let i=this.defaults.renderer||new qs(this.defaults);for(let o in n.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=n.renderer[a],r=i[a];i[a]=(...d)=>{let g=l.apply(i,d);return g===!1&&(g=r.apply(i,d)),g||""}}s.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new Ks(this.defaults);for(let o in n.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=n.tokenizer[a],r=i[a];i[a]=(...d)=>{let g=l.apply(i,d);return g===!1&&(g=r.apply(i,d)),g}}s.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new Bn;for(let o in n.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=n.hooks[a],r=i[a];Bn.passThroughHooks.has(o)?i[a]=d=>{if(this.defaults.async&&Bn.passThroughHooksRespectAsync.has(o))return(async()=>{let u=await l.call(i,d);return r.call(i,u)})();let g=l.call(i,d);return r.call(i,g)}:i[a]=(...d)=>{if(this.defaults.async)return(async()=>{let u=await l.apply(i,d);return u===!1&&(u=await r.apply(i,d)),u})();let g=l.apply(i,d);return g===!1&&(g=r.apply(i,d)),g}}s.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),i&&(l=l.concat(i.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Be.lex(e,t??this.defaults)}parser(e,t){return He.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},i={...this.defaults,...s},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let a=i.hooks?await i.hooks.preprocess(t):t,l=await(i.hooks?await i.hooks.provideLexer():e?Be.lex:Be.lexInline)(a,i),r=i.hooks?await i.hooks.processAllTokens(l):l;i.walkTokens&&await Promise.all(this.walkTokens(r,i.walkTokens));let d=await(i.hooks?await i.hooks.provideParser():e?He.parse:He.parseInline)(r,i);return i.hooks?await i.hooks.postprocess(d):d})().catch(o);try{i.hooks&&(t=i.hooks.preprocess(t));let a=(i.hooks?i.hooks.provideLexer():e?Be.lex:Be.lexInline)(t,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let l=(i.hooks?i.hooks.provideParser():e?He.parse:He.parseInline)(a,i);return i.hooks&&(l=i.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Je(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Zt=new Ly;function ne(e,t){return Zt.parse(e,t)}ne.options=ne.setOptions=function(e){return Zt.setOptions(e),ne.defaults=Zt.defaults,kd(ne.defaults),ne};ne.getDefaults=aa;ne.defaults=sn;ne.use=function(...e){return Zt.use(...e),ne.defaults=Zt.defaults,kd(ne.defaults),ne};ne.walkTokens=function(e,t){return Zt.walkTokens(e,t)};ne.parseInline=Zt.parseInline;ne.Parser=He;ne.parser=He.parse;ne.Renderer=qs;ne.TextRenderer=fa;ne.Lexer=Be;ne.lexer=Be.lex;ne.Tokenizer=Ks;ne.Hooks=Bn;ne.parse=ne;ne.options;ne.setOptions;ne.use;ne.walkTokens;ne.parseInline;He.parse;Be.lex;const My=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul","img"],Dy=["class","href","rel","target","title","start","src","alt"],el={ALLOWED_TAGS:My,ALLOWED_ATTR:Dy,ADD_DATA_URI_TAGS:["img"]};let tl=!1;const Py=14e4,Fy=4e4,Ny=200,Bi=5e4,qt=new Map;function Oy(e){const t=qt.get(e);return t===void 0?null:(qt.delete(e),qt.set(e,t),t)}function nl(e,t){if(qt.set(e,t),qt.size<=Ny)return;const n=qt.keys().next().value;n&&qt.delete(n)}function Uy(){tl||(tl=!0,fo.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function bo(e){const t=e.trim();if(!t)return"";if(Uy(),t.length<=Bi){const a=Oy(t);if(a!==null)return a}const n=Vl(t,Py),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>Fy){const l=`<pre class="code-block">${Fd(`${n.text}${s}`)}</pre>`,r=fo.sanitize(l,el);return t.length<=Bi&&nl(t,r),r}const i=ne.parse(`${n.text}${s}`,{renderer:Pd,gfm:!0,breaks:!0}),o=fo.sanitize(i,el);return t.length<=Bi&&nl(t,o),o}const Pd=new ne.Renderer;Pd.html=({text:e})=>Fd(e);function Fd(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Is="data:",By=new Set(["http:","https:","blob:"]),Hy=new Set(["image/svg+xml"]);function zy(e){if(!e.toLowerCase().startsWith(Is))return!1;const t=e.indexOf(",");if(t<Is.length)return!1;const s=e.slice(Is.length,t).split(";")[0]?.trim().toLowerCase()??"";return s.startsWith("image/")?!Hy.has(s):!1}function jy(e,t,n={}){const s=e.trim();if(!s)return null;if(n.allowDataImage===!0&&zy(s))return s;if(s.toLowerCase().startsWith(Is))return null;try{const i=new URL(s,t);return By.has(i.protocol.toLowerCase())?i.toString():null}catch{return null}}function Ky(e,t={}){const n=t.baseHref??window.location.href,s=jy(e,n,t);if(!s)return null;const i=window.open(s,"_blank","noopener,noreferrer");return i&&(i.opener=null),i}const qy=new RegExp("\\p{Script=Hebrew}|\\p{Script=Arabic}|\\p{Script=Syriac}|\\p{Script=Thaana}|\\p{Script=Nko}|\\p{Script=Samaritan}|\\p{Script=Mandaic}|\\p{Script=Adlam}|\\p{Script=Phoenician}|\\p{Script=Lydian}","u");function Nd(e,t=/[\s\p{P}\p{S}]/u){if(!e)return"ltr";for(const n of e)if(!t.test(n))return qy.test(n)?"rtl":"ltr";return"ltr"}const Wy=1500,Gy=2e3,Od="Copy as markdown",Jy="Copied",Vy="Copy failed";async function Qy(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function Ss(e,t){e.title=t,e.setAttribute("aria-label",t)}function Yy(e){const t=e.label??Od;return c`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const i=await Qy(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!i){s.dataset.error="1",Ss(s,Vy),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,Ss(s,t))},Gy);return}s.dataset.copied="1",Ss(s,Jy),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,Ss(s,t))},Wy)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${$e.copy}</span>
        <span class="chat-copy-btn__icon-check">${$e.check}</span>
      </span>
    </button>
  `}function Xy(e){return Yy({text:()=>e,label:Od})}function Ud(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",i=t.content,o=Array.isArray(i)?i:null,a=Array.isArray(o)&&o.some(u=>{const m=u,h=(typeof m.type=="string"?m.type:"").toLowerCase();return h==="toolresult"||h==="tool_result"}),l=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||a||l)&&(n="toolResult");let r=[];typeof t.content=="string"?r=[{type:"text",text:t.content}]:Array.isArray(t.content)?r=t.content.map(u=>({type:u.type||"text",text:u.text,name:u.name,args:u.args||u.arguments})):typeof t.text=="string"&&(r=[{type:"text",text:t.text}]);const d=typeof t.timestamp=="number"?t.timestamp:Date.now(),g=typeof t.id=="string"?t.id:void 0;return(n==="user"||n==="User")&&(r=r.map(u=>u.type==="text"&&typeof u.text=="string"?{...u,text:Ic(u.text)}:u)),{role:n,content:r,timestamp:d,id:g}}function ha(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function Bd(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}const Zy={emoji:"🧩",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},e0={bash:{emoji:"🛠️",title:"Bash",detailKeys:["command"]},process:{emoji:"🧰",title:"Process",detailKeys:["sessionId"]},read:{emoji:"📖",title:"Read",detailKeys:["path"]},write:{emoji:"✍️",title:"Write",detailKeys:["path"]},edit:{emoji:"📝",title:"Edit",detailKeys:["path"]},attach:{emoji:"📎",title:"Attach",detailKeys:["path","url","fileName"]},browser:{emoji:"🌐",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{emoji:"🖼️",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{emoji:"📱",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{emoji:"⏰",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{emoji:"🔌",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]}}},whatsapp_login:{emoji:"🟢",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{emoji:"💬",title:"Discord",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sticker:{label:"sticker",detailKeys:["to","stickerIds"]},poll:{label:"poll",detailKeys:["question","to"]},permissions:{label:"permissions",detailKeys:["channelId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},threadCreate:{label:"thread create",detailKeys:["channelId","name"]},threadList:{label:"thread list",detailKeys:["guildId","channelId"]},threadReply:{label:"thread reply",detailKeys:["channelId","content"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},searchMessages:{label:"search",detailKeys:["guildId","content"]},memberInfo:{label:"member",detailKeys:["guildId","userId"]},roleInfo:{label:"roles",detailKeys:["guildId"]},emojiList:{label:"emoji list",detailKeys:["guildId"]},roleAdd:{label:"role add",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"role remove",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"channel",detailKeys:["channelId"]},channelList:{label:"channels",detailKeys:["guildId"]},voiceStatus:{label:"voice",detailKeys:["guildId","userId"]},eventList:{label:"events",detailKeys:["guildId"]},eventCreate:{label:"event create",detailKeys:["guildId","name"]},timeout:{label:"timeout",detailKeys:["guildId","userId"]},kick:{label:"kick",detailKeys:["guildId","userId"]},ban:{label:"ban",detailKeys:["guildId","userId"]}}}},t0={fallback:Zy,tools:e0};function kn(e){return e&&typeof e=="object"?e:void 0}function n0(e){return(e??"tool").trim()}function s0(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function i0(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function o0(e){if(!e||typeof e!="object")return;const t=e.action;return typeof t!="string"?void 0:t.trim()||void 0}function a0(e){return S0({toolKey:e.toolKey,args:e.args,meta:e.meta,action:o0(e.args),spec:e.spec,fallbackDetailKeys:e.fallbackDetailKeys,detailMode:e.detailMode,detailCoerce:e.detailCoerce,detailMaxEntries:e.detailMaxEntries,detailFormatKey:e.detailFormatKey})}function yo(e,t={}){const n=t.maxStringChars??160,s=t.maxArrayEntries??3;if(e!=null){if(typeof e=="string"){const i=e.trim();if(!i)return;const o=i.split(/\r?\n/)[0]?.trim()??"";return o?o.length>n?`${o.slice(0,Math.max(0,n-3))}…`:o:void 0}if(typeof e=="boolean")return!e&&!t.includeFalse?void 0:e?"true":"false";if(typeof e=="number")return Number.isFinite(e)?e===0&&!t.includeZero?void 0:String(e):t.includeNonFinite?String(e):void 0;if(Array.isArray(e)){const i=e.map(a=>yo(a,t)).filter(a=>!!a);if(i.length===0)return;const o=i.slice(0,s).join(", ");return i.length>s?`${o}…`:o}}}function sl(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function Hd(e){const t=kn(e);if(t)for(const n of[t.path,t.file_path,t.filePath]){if(typeof n!="string")continue;const s=n.trim();if(s)return s}}function r0(e){const t=kn(e);if(!t)return;const n=Hd(t);if(!n)return;const s=typeof t.offset=="number"&&Number.isFinite(t.offset)?Math.floor(t.offset):void 0,i=typeof t.limit=="number"&&Number.isFinite(t.limit)?Math.floor(t.limit):void 0,o=s!==void 0?Math.max(1,s):void 0,a=i!==void 0?Math.max(1,i):void 0;return o!==void 0&&a!==void 0?`${a===1?"line":"lines"} ${o}-${o+a-1} from ${n}`:o!==void 0?`from line ${o} in ${n}`:a!==void 0?`first ${a} ${a===1?"line":"lines"} of ${n}`:`from ${n}`}function l0(e,t){const n=kn(t);if(!n)return;const s=Hd(n)??(typeof n.url=="string"?n.url.trim():void 0);if(!s)return;if(e==="attach")return`from ${s}`;const i=e==="edit"?"in":"to",o=typeof n.content=="string"?n.content:typeof n.newText=="string"?n.newText:typeof n.new_string=="string"?n.new_string:void 0;return o&&o.length>0?`${i} ${s} (${o.length} chars)`:`${i} ${s}`}function c0(e){const t=kn(e);if(!t)return;const n=typeof t.query=="string"?t.query.trim():void 0,s=typeof t.count=="number"&&Number.isFinite(t.count)&&t.count>0?Math.floor(t.count):void 0;if(n)return s!==void 0?`for "${n}" (top ${s})`:`for "${n}"`}function d0(e){const t=kn(e);if(!t)return;const n=typeof t.url=="string"?t.url.trim():void 0;if(!n)return;const s=typeof t.extractMode=="string"?t.extractMode.trim():void 0,i=typeof t.maxChars=="number"&&Number.isFinite(t.maxChars)&&t.maxChars>0?Math.floor(t.maxChars):void 0,o=[s?`mode ${s}`:void 0,i!==void 0?`max ${i} chars`:void 0].filter(a=>!!a).join(", ");return o?`from ${n} (${o})`:`from ${n}`}function ma(e){if(!e)return e;const t=e.trim();return t.length>=2&&(t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'"))?t.slice(1,-1).trim():t}function Gt(e,t=48){if(!e)return[];const n=[];let s="",i,o=!1;for(let a=0;a<e.length;a+=1){const l=e[a];if(o){s+=l,o=!1;continue}if(l==="\\"){o=!0;continue}if(i){l===i?i=void 0:s+=l;continue}if(l==='"'||l==="'"){i=l;continue}if(/\s/.test(l)){if(!s)continue;if(n.push(s),n.length>=t)return n;s="";continue}s+=l}return s&&n.push(s),n}function Sn(e){if(!e)return;const t=ma(e)??e;return(t.split(/[/]/).at(-1)??t).trim().toLowerCase()}function Ft(e,t){const n=new Set(t);for(let s=0;s<e.length;s+=1){const i=e[s];if(i){if(n.has(i)){const o=e[s+1];if(o&&!o.startsWith("-"))return o;continue}for(const o of t)if(o.startsWith("--")&&i.startsWith(`${o}=`))return i.slice(o.length+1)}}}function pn(e,t=1,n=[]){const s=[],i=new Set(n);for(let o=t;o<e.length;o+=1){const a=e[o];if(a){if(a==="--"){for(let l=o+1;l<e.length;l+=1){const r=e[l];r&&s.push(r)}break}if(a.startsWith("--")){if(a.includes("="))continue;i.has(a)&&(o+=1);continue}if(a.startsWith("-")){i.has(a)&&(o+=1);continue}s.push(a)}}return s}function rt(e,t=1,n=[]){return pn(e,t,n)[0]}function Hi(e){if(e.length===0)return e;let t=0;if(Sn(e[0])==="env"){for(t=1;t<e.length;){const n=e[t];if(!n)break;if(n.startsWith("-")){t+=1;continue}if(/^[A-Za-z_][A-Za-z0-9_]*=/.test(n)){t+=1;continue}break}return e.slice(t)}for(;t<e.length&&/^[A-Za-z_][A-Za-z0-9_]*=/.test(e[t]);)t+=1;return e.slice(t)}function u0(e){const t=Gt(e,10);if(t.length<3)return e;const n=Sn(t[0]);if(!(n==="bash"||n==="sh"||n==="zsh"||n==="fish"))return e;const s=t.findIndex((o,a)=>a>0&&(o==="-c"||o==="-lc"||o==="-ic"));if(s===-1)return e;const i=t.slice(s+1).join(" ").trim();return i?ma(i)??e:e}function va(e,t){let n,s=!1;for(let i=0;i<e.length;i+=1){const o=e[i];if(s){s=!1;continue}if(o==="\\"){s=!0;continue}if(n){o===n&&(n=void 0);continue}if(o==='"'||o==="'"){n=o;continue}if(t(o,i)===!1)return}}function g0(e){const t=[];let n=0;return va(e,(s,i)=>s===";"?(t.push(e.slice(n,i)),n=i+1,!0):((s==="&"||s==="|")&&e[i+1]===s&&(t.push(e.slice(n,i)),n=i+2),!0)),t.push(e.slice(n)),t.map(s=>s.trim()).filter(s=>s.length>0)}function p0(e){const t=[];let n=0;return va(e,(s,i)=>(s==="|"&&e[i-1]!=="|"&&e[i+1]!=="|"&&(t.push(e.slice(n,i)),n=i+1),!0)),t.push(e.slice(n)),t.map(s=>s.trim()).filter(s=>s.length>0)}function f0(e){const t=Gt(e,3),n=Sn(t[0]);if(n==="cd"||n==="pushd")return t[1]||void 0}function h0(e){const t=Sn(Gt(e,2)[0]);return t==="cd"||t==="pushd"||t==="popd"}function m0(e){return Sn(Gt(e,2)[0])==="popd"}function v0(e){let t=e.trim(),n;for(let s=0;s<4;s+=1){let i;va(t,(r,d)=>{if(r==="&"&&t[d+1]==="&")return i={index:d,length:2},!1;if(r==="|"&&t[d+1]==="|")return i={index:d,length:2,isOr:!0},!1;if(r===";"||r===`
`)return i={index:d,length:1},!1});const o=(i?t.slice(0,i.index):t).trim(),a=(i?!i.isOr:s>0)&&h0(o);if(!(o.startsWith("set ")||o.startsWith("export ")||o.startsWith("unset ")||a)||(a&&(m0(o)?n=void 0:n=f0(o)??n),t=i?t.slice(i.index+i.length).trimStart():"",!t))break}return{command:t.trim(),chdirPath:n}}function zi(e){if(e.length===0)return"run command";const t=Sn(e[0])??"command";if(t==="git"){const s=new Set(["-C","-c","--git-dir","--work-tree","--namespace","--config-env"]),i=Ft(e,["-C"]);let o;for(let l=1;l<e.length;l+=1){const r=e[l];if(r){if(r==="--"){o=rt(e,l+1);break}if(r.startsWith("--")){if(r.includes("="))continue;s.has(r)&&(l+=1);continue}if(r.startsWith("-")){s.has(r)&&(l+=1);continue}o=r;break}}const a={status:"check git status",diff:"check git diff",log:"view git history",show:"show git object",branch:"list git branches",checkout:"switch git branch",switch:"switch git branch",commit:"create git commit",pull:"pull git changes",push:"push git changes",fetch:"fetch git changes",merge:"merge git changes",rebase:"rebase git branch",add:"stage git changes",restore:"restore git files",reset:"reset git state",stash:"stash git changes"};return o&&a[o]?a[o]:!o||o.startsWith("/")||o.startsWith("~")||o.includes("/")?i?`run git command in ${i}`:"run git command":`run git ${o}`}if(t==="grep"||t==="rg"||t==="ripgrep"){const s=pn(e,1,["-e","--regexp","-f","--file","-m","--max-count","-A","--after-context","-B","--before-context","-C","--context"]),i=Ft(e,["-e","--regexp"])??s[0],o=s.length>1?s.at(-1):void 0;return i?o?`search "${i}" in ${o}`:`search "${i}"`:"search text"}if(t==="find"){const s=e[1]&&!e[1].startsWith("-")?e[1]:".",i=Ft(e,["-name","-iname"]);return i?`find files named "${i}" in ${s}`:`find files in ${s}`}if(t==="ls"){const s=rt(e,1);return s?`list files in ${s}`:"list files"}if(t==="head"||t==="tail"){const s=Ft(e,["-n","--lines"])??e.slice(1).find(r=>/^-\d+$/.test(r))?.slice(1),i=pn(e,1,["-n","--lines"]);let o=i.at(-1);o&&/^\d+$/.test(o)&&i.length===1&&(o=void 0);const a=t==="head"?"first":"last",l=s==="1"?"line":"lines";return s&&o?`show ${a} ${s} ${l} of ${o}`:s?`show ${a} ${s} ${l}`:o?`show ${o}`:`show ${t} output`}if(t==="cat"){const s=rt(e,1);return s?`show ${s}`:"show output"}if(t==="sed"){const s=Ft(e,["-e","--expression"]),i=pn(e,1,["-e","--expression","-f","--file"]),o=s??i[0],a=s?i[0]:i[1];if(o){const l=(ma(o)??o).replace(/\s+/g,""),r=l.match(/^([0-9]+),([0-9]+)p$/);if(r)return a?`print lines ${r[1]}-${r[2]} from ${a}`:`print lines ${r[1]}-${r[2]}`;const d=l.match(/^([0-9]+)p$/);if(d)return a?`print line ${d[1]} from ${a}`:`print line ${d[1]}`}return a?`run sed on ${a}`:"run sed transform"}if(t==="printf"||t==="echo")return"print text";if(t==="cp"||t==="mv"){const s=pn(e,1,["-t","--target-directory","-S","--suffix"]),i=s[0],o=s[1],a=t==="cp"?"copy":"move";return i&&o?`${a} ${i} to ${o}`:i?`${a} ${i}`:`${a} files`}if(t==="rm"){const s=rt(e,1);return s?`remove ${s}`:"remove files"}if(t==="mkdir"){const s=rt(e,1);return s?`create folder ${s}`:"create folder"}if(t==="touch"){const s=rt(e,1);return s?`create file ${s}`:"create file"}if(t==="curl"||t==="wget"){const s=e.find(i=>/^https?:\/\//i.test(i));return s?`fetch ${s}`:"fetch url"}if(t==="npm"||t==="pnpm"||t==="yarn"||t==="bun"){const s=pn(e,1,["--prefix","-C","--cwd","--config"]),i=s[0]??"command";return{install:"install dependencies",test:"run tests",build:"run build",start:"start app",lint:"run lint",run:s[1]?`run ${s[1]}`:"run script"}[i]??`run ${t} ${i}`}if(t==="node"||t==="python"||t==="python3"||t==="ruby"||t==="php"){if(e.slice(1).find(r=>r.startsWith("<<")))return`run ${t} inline script (heredoc)`;if((t==="node"?Ft(e,["-e","--eval"]):t==="python"||t==="python3"?Ft(e,["-c"]):void 0)!==void 0)return`run ${t} inline script`;const l=rt(e,1,t==="node"?["-e","--eval","-m"]:["-c","-e","--eval","-m"]);return l?t==="node"?`${e.includes("--check")||e.includes("-c")?"check js syntax for":"run node script"} ${l}`:`run ${t} ${l}`:`run ${t}`}if(t==="openclaw"){const s=rt(e,1);return s?`run openclaw ${s}`:"run openclaw"}const n=rt(e,1);return!n||n.length>48?`run ${t}`:/^[A-Za-z0-9._/-]+$/.test(n)?`run ${t} ${n}`:`run ${t}`}function b0(e){const t=p0(e);if(t.length>1){const n=zi(Hi(Gt(t[0]))),s=zi(Hi(Gt(t[t.length-1]))),i=t.length>2?` (+${t.length-2} steps)`:"";return`${n} -> ${s}${i}`}return zi(Hi(Gt(e)))}function il(e){const{command:t,chdirPath:n}=v0(e);if(!t)return n?{text:"",chdirPath:n}:void 0;const s=g0(t);if(s.length===0)return;const i=s.map(l=>b0(l)),o=i.length===1?i[0]:i.join(" → "),a=i.every(l=>zd(l));return{text:o,chdirPath:n,allGeneric:a}}const y0=["check git","view git","show git","list git","switch git","create git","pull git","push git","fetch git","merge git","rebase git","stage git","restore git","reset git","stash git","search ","find files","list files","show first","show last","print line","print text","copy ","move ","remove ","create folder","create file","fetch http","install dependencies","run tests","run build","start app","run lint","run openclaw","run node script","run node ","run python","run ruby","run php","run sed","run git ","run npm ","run pnpm ","run yarn ","run bun ","check js syntax"];function zd(e){return e==="run command"?!0:e.startsWith("run ")?!y0.some(t=>e.startsWith(t)):!1}function x0(e,t=120){const n=e.replace(/\s*\n\s*/g," ").replace(/\s{2,}/g," ").trim();return n.length<=t?n:`${n.slice(0,Math.max(0,t-1))}…`}function $0(e){const t=kn(e);if(!t)return;const n=typeof t.command=="string"?t.command.trim():void 0;if(!n)return;const s=u0(n),i=il(s)??il(n),o=i?.text||"run command",l=(typeof t.workdir=="string"?t.workdir:typeof t.cwd=="string"?t.cwd:void 0)?.trim()||i?.chdirPath||void 0,r=x0(s);if(i?.allGeneric!==!1&&zd(o))return l?`${r} (in ${l})`:r;const d=l?`${o} (in ${l})`:o;return r&&r!==d&&r!==o?`${d}

\`${r}\``:d}function w0(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function k0(e,t,n){if(n.mode==="first"){for(const a of t){const l=sl(e,a),r=yo(l,n.coerce);if(r)return r}return}const s=[];for(const a of t){const l=sl(e,a),r=yo(l,n.coerce);r&&s.push({label:n.formatKey?n.formatKey(a):a,value:r})}if(s.length===0)return;if(s.length===1)return s[0].value;const i=new Set,o=[];for(const a of s){const l=`${a.label}:${a.value}`;i.has(l)||(i.add(l),o.push(a))}if(o.length!==0)return o.slice(0,n.maxEntries??8).map(a=>`${a.label} ${a.value}`).join(" · ")}function S0(e){const t=w0(e.spec,e.action),n=e.toolKey==="web_search"?"search":e.toolKey==="web_fetch"?"fetch":e.toolKey.replace(/_/g," ").replace(/\./g," "),s=i0(t?.label??e.action??n);let i;e.toolKey==="exec"&&(i=$0(e.args)),!i&&e.toolKey==="read"&&(i=r0(e.args)),!i&&(e.toolKey==="write"||e.toolKey==="edit"||e.toolKey==="attach")&&(i=l0(e.toolKey,e.args)),!i&&e.toolKey==="web_search"&&(i=c0(e.args)),!i&&e.toolKey==="web_fetch"&&(i=d0(e.args));const o=t?.detailKeys??e.spec?.detailKeys??e.fallbackDetailKeys??[];return!i&&o.length>0&&(i=k0(e.args,o,{mode:e.detailMode,coerce:e.detailCoerce,maxEntries:e.detailMaxEntries,formatKey:e.detailFormatKey})),!i&&e.meta&&(i=e.meta),{verb:s,detail:i}}function A0(e,t={}){if(!e)return;const n=e.includes(" · ")?e.split(" · ").map(s=>s.trim()).filter(s=>s.length>0).join(", "):e;if(n)return t.prefixWithWith?`with ${n}`:n}const C0={"🧩":"puzzle","🛠️":"wrench","🧰":"wrench","📖":"fileText","✍️":"edit","📝":"penLine","📎":"paperclip","🌐":"globe","📺":"monitor","🧾":"fileText","🔐":"settings","💻":"monitor","🔌":"plug","💬":"messageSquare"},T0={icon:"messageSquare",title:"Slack",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},memberInfo:{label:"member",detailKeys:["userId"]},emojiList:{label:"emoji list"}}};function _0(e){return e?C0[e]??"puzzle":"puzzle"}function jd(e){return{icon:_0(e?.emoji),title:e?.title,label:e?.label,detailKeys:e?.detailKeys,actions:e?.actions}}const Kd=t0,ol=jd(Kd.fallback??{emoji:"🧩"}),qd=Object.fromEntries(Object.entries(Kd.tools??{}).map(([e,t])=>[e,jd(t)]));qd.slack=T0;function E0(e){if(!e)return e;const t=[{re:/^\/Users\/[^/]+(\/|$)/,replacement:"~$1"},{re:/^\/home\/[^/]+(\/|$)/,replacement:"~$1"},{re:/^C:\\Users\\[^\\]+(\\|$)/i,replacement:"~$1"}];for(const n of t)if(n.re.test(e))return e.replace(n.re,n.replacement);return e}function R0(e){const t=n0(e.name),n=t.toLowerCase(),s=qd[n],i=s?.icon??ol.icon??"puzzle",o=s?.title??s0(t),a=s?.label??o;let{verb:l,detail:r}=a0({toolKey:n,args:e.args,meta:e.meta,spec:s,fallbackDetailKeys:ol.detailKeys,detailMode:"first",detailCoerce:{includeFalse:!0,includeZero:!0}});return r&&(r=E0(r)),{name:t,icon:i,title:o,label:a,verb:l,detail:r}}function I0(e){return A0(e.detail,{prefixWithWith:!0})}const L0=80,M0=2,al=100;function D0(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function P0(e){const t=e.split(`
`),n=t.slice(0,M0),s=n.join(`
`);return s.length>al?s.slice(0,al)+"…":n.length<t.length?s+"…":s}function F0(e){const t=e,n=N0(t.content),s=[];for(const i of n){const o=(typeof i.type=="string"?i.type:"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(o)||typeof i.name=="string"&&i.arguments!=null)&&s.push({kind:"call",name:i.name??"tool",args:O0(i.arguments??i.args)})}for(const i of n){const o=(typeof i.type=="string"?i.type:"").toLowerCase();if(o!=="toolresult"&&o!=="tool_result")continue;const a=U0(i),l=typeof i.name=="string"?i.name:"tool";s.push({kind:"result",name:l,text:a})}if(Bd(e)&&!s.some(i=>i.kind==="result")){const i=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",o=Lc(e)??void 0;s.push({kind:"result",name:i,text:o})}return s}function rl(e,t){const n=R0({name:e.name,args:e.args}),s=I0(n),i=!!e.text?.trim(),o=!!t,a=o?()=>{if(i){t(D0(e.text));return}const u=`## ${n.label}

${s?`**Command:** \`${s}\`

`:""}*No output — tool completed successfully.*`;t(u)}:void 0,l=i&&(e.text?.length??0)<=L0,r=i&&!l,d=i&&l,g=!i;return c`
    <div
      class="chat-tool-card ${o?"chat-tool-card--clickable":""}"
      @click=${a}
      role=${o?"button":f}
      tabindex=${o?"0":f}
      @keydown=${o?u=>{u.key!=="Enter"&&u.key!==" "||(u.preventDefault(),a?.())}:f}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${$e[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${o?c`<span class="chat-tool-card__action">${i?"View":""} ${$e.check}</span>`:f}
        ${g&&!o?c`<span class="chat-tool-card__status">${$e.check}</span>`:f}
      </div>
      ${s?c`<div class="chat-tool-card__detail">${s}</div>`:f}
      ${g?c`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:f}
      ${r?c`<div class="chat-tool-card__preview mono">${P0(e.text)}</div>`:f}
      ${d?c`<div class="chat-tool-card__inline mono">${e.text}</div>`:f}
    </div>
  `}function N0(e){return Array.isArray(e)?e.filter(Boolean):[]}function O0(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function U0(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function B0(e){const n=e.content,s=[];if(Array.isArray(n))for(const i of n){if(typeof i!="object"||i===null)continue;const o=i;if(o.type==="image"){const a=o.source;if(a?.type==="base64"&&typeof a.data=="string"){const l=a.data,r=a.media_type||"image/png",d=l.startsWith("data:")?l:`data:${r};base64,${l}`;s.push({url:d})}else typeof o.url=="string"&&s.push({url:o.url})}else if(o.type==="image_url"){const a=o.image_url;typeof a?.url=="string"&&s.push({url:a.url})}}return s}function H0(e){return c`
    <div class="chat-group assistant">
      ${ba("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function z0(e,t,n,s){const i=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),o=s?.name??"Assistant";return c`
    <div class="chat-group assistant">
      ${ba("assistant",s)}
      <div class="chat-group-messages">
        ${Wd({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${o}</span>
          <span class="chat-group-timestamp">${i}</span>
        </div>
      </div>
    </div>
  `}function j0(e,t){const n=ha(e.role),s=t.assistantName??"Assistant",i=n==="user"?"You":n==="assistant"?s:n,o=n==="user"?"user":n==="assistant"?"assistant":"other",a=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return c`
    <div class="chat-group ${o}">
      ${ba(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((l,r)=>Wd(l.message,{isStreaming:e.isStreaming&&r===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${i}</span>
          <span class="chat-group-timestamp">${a}</span>
        </div>
      </div>
    </div>
  `}function ba(e,t){const n=ha(e),s=t?.name?.trim()||"Assistant",i=t?.avatar?.trim()||"",o=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",a=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return i&&n==="assistant"?K0(i)?c`<img
        class="chat-avatar ${a}"
        src="${i}"
        alt="${s}"
      />`:c`<div class="chat-avatar ${a}">${i}</div>`:c`<div class="chat-avatar ${a}">${o}</div>`}function K0(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith("/")}function q0(e){if(e.length===0)return f;const t=n=>{Ky(n,{allowDataImage:!0})};return c`
    <div class="chat-message-images">
      ${e.map(n=>c`
          <img
            src=${n.url}
            alt=${n.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>t(n.url)}
          />
        `)}
    </div>
  `}function Wd(e,t,n){const s=e,i=typeof s.role=="string"?s.role:"unknown",o=Bd(e)||i.toLowerCase()==="toolresult"||i.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",a=F0(e),l=a.length>0,r=B0(e),d=r.length>0,g=Lc(e),u=t.showReasoning&&i==="assistant"?lf(e):null,m=g?.trim()?g:null,h=u?cf(u):null,b=m,k=i==="assistant"&&!!b?.trim(),T=["chat-bubble",k?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!b&&l&&o?c`${a.map(I=>rl(I,n))}`:!b&&!l&&!d?f:c`
    <div class="${T}">
      ${k?Xy(b):f}
      ${q0(r)}
      ${h?c`<div class="chat-thinking">${co(bo(h))}</div>`:f}
      ${b?c`<div class="chat-text" dir="${Nd(b)}">${co(bo(b))}</div>`:f}
      ${a.map(I=>rl(I,n))}
    </div>
  `}function W0(e){return c`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${$e.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?c`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?c`<div class="sidebar-markdown">${co(bo(e.content))}</div>`:c`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}var G0=Object.defineProperty,J0=Object.getOwnPropertyDescriptor,li=(e,t,n,s)=>{for(var i=s>1?void 0:s?J0(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,n,i):a(i))||i);return s&&i&&G0(t,n,i),i};let xn=class extends Wt{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,i=(e.clientX-this.startX)/n;let o=this.startRatio+i;o=Math.max(this.minRatio,Math.min(this.maxRatio,o)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:o},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return f}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};xn.styles=_l`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;li([ss({type:Number})],xn.prototype,"splitRatio",2);li([ss({type:Number})],xn.prototype,"minRatio",2);li([ss({type:Number})],xn.prototype,"maxRatio",2);xn=li([To("resizable-divider")],xn);const V0=5e3,Q0=8e3;function ll(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function Y0(e){return e?e.active?c`
      <div class="compaction-indicator compaction-indicator--active" role="status" aria-live="polite">
        ${$e.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<V0?c`
        <div class="compaction-indicator compaction-indicator--complete" role="status" aria-live="polite">
          ${$e.check} Context compacted
        </div>
      `:f:f}function X0(e){if(!e)return f;const t=e.phase??"active";if(Date.now()-e.occurredAt>=Q0)return f;const s=[`Selected: ${e.selected}`,t==="cleared"?`Active: ${e.selected}`:`Active: ${e.active}`,t==="cleared"&&e.previous?`Previous fallback: ${e.previous}`:null,e.reason?`Reason: ${e.reason}`:null,e.attempts.length>0?`Attempts: ${e.attempts.slice(0,3).join(" | ")}`:null].filter(Boolean).join(" • "),i=t==="cleared"?`Fallback cleared: ${e.selected}`:`Fallback active: ${e.active}`,o=t==="cleared"?"compaction-indicator compaction-indicator--fallback-cleared":"compaction-indicator compaction-indicator--fallback",a=t==="cleared"?$e.check:$e.brain;return c`
    <div
      class=${o}
      role="status"
      aria-live="polite"
      title=${s}
    >
      ${a} ${i}
    </div>
  `}function Z0(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function ex(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let i=0;i<n.length;i++){const o=n[i];o.type.startsWith("image/")&&s.push(o)}if(s.length!==0){e.preventDefault();for(const i of s){const o=i.getAsFile();if(!o)continue;const a=new FileReader;a.addEventListener("load",()=>{const l=a.result,r={id:Z0(),dataUrl:l,mimeType:o.type},d=t.attachments??[];t.onAttachmentsChange?.([...d,r])}),a.readAsDataURL(o)}}}function tx(e){const t=e.attachments??[];return t.length===0?f:c`
    <div class="chat-attachments">
      ${t.map(n=>c`
          <div class="chat-attachment">
            <img
              src=${n.dataUrl}
              alt="Attachment preview"
              class="chat-attachment__img"
            />
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{const s=(e.attachments??[]).filter(i=>i.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${$e.x}
            </button>
          </div>
        `)}
    </div>
  `}function nx(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),o=e.sessions?.sessions?.find(h=>h.key===e.sessionKey)?.reasoningLevel??"off",a=e.showThinking&&o!=="off",l={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},r=(e.attachments?.length??0)>0,d=e.connected?r?"Add a message or paste more images...":"Message (↩ to send, Shift+↩ for line breaks, paste images)":"Connect to the gateway to start chatting…",g=e.splitRatio??.6,u=!!(e.sidebarOpen&&e.onCloseSidebar),m=c`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?c`
              <div class="muted">Loading chat…</div>
            `:f}
      ${Em(ix(e),h=>h.key,h=>h.kind==="divider"?c`
              <div class="chat-divider" role="separator" data-ts=${String(h.timestamp)}>
                <span class="chat-divider__line"></span>
                <span class="chat-divider__label">${h.label}</span>
                <span class="chat-divider__line"></span>
              </div>
            `:h.kind==="reading-indicator"?H0(l):h.kind==="stream"?z0(h.text,h.startedAt,e.onOpenSidebar,l):h.kind==="group"?j0(h,{onOpenSidebar:e.onOpenSidebar,showReasoning:a,assistantName:e.assistantName,assistantAvatar:l.avatar}):f)}
    </div>
  `;return c`
    <section class="card chat">
      ${e.disabledReason?c`<div class="callout">${e.disabledReason}</div>`:f}

      ${e.error?c`<div class="callout danger">${e.error}</div>`:f}

      ${e.focusMode?c`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${$e.x}
            </button>
          `:f}

      <div
        class="chat-split-container ${u?"chat-split-container--open":""} ${e.skillsReport?.skills?.length?"chat-split-container--with-skills":""}"
      >
        <div
          class="chat-main"
          style="flex: ${u?`0 0 ${g*100}%`:"1 1 100%"}"
        >
          ${m}
        </div>

        ${u?c`
              <resizable-divider
                .splitRatio=${g}
                @resize=${h=>e.onSplitRatioChange?.(h.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${W0({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:f}

        ${e.skillsReport?.skills?.length?c`
              <div class="chat-skill-sidebar">
                ${rx(e)}
              </div>
            `:f}
      </div>

      ${e.queue.length?c`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(h=>c`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${h.text||(h.attachments?.length?`Image (${h.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(h.id)}
                      >
                        ${$e.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:f}

      ${X0(e.fallbackStatus)}
      ${Y0(e.compactionStatus)}

      ${e.showNewMessages?c`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              New messages ${$e.arrowDown}
            </button>
          `:f}

      <div class="chat-compose">
        ${tx(e)}
        <div class="chat-compose__row">
          <label class="field chat-compose__field">
            <span>Message</span>
            <textarea
              ${wb(h=>h&&ll(h))}
              .value=${e.draft}
              dir=${Nd(e.draft)}
              ?disabled=${!e.connected}
              @keydown=${h=>{h.key==="Enter"&&(h.isComposing||h.keyCode===229||h.shiftKey||e.connected&&(h.preventDefault(),t&&e.onSend()))}}
              @input=${h=>{const b=h.target;ll(b),e.onDraftChange(b.value)}}
              @paste=${h=>ex(h,e)}
              placeholder=${d}
            ></textarea>
          </label>
          <div class="chat-compose__actions">
            <button
              class="btn"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"Stop":"New session"}
            </button>
            <button
              class="btn primary"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?"Queue":"Send"}<kbd class="btn-kbd">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}const cl=200;function sx(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const i=Ud(s.message),o=ha(i.role),a=i.timestamp||Date.now();!n||n.role!==o?(n&&t.push(n),n={kind:"group",key:`group:${o}:${s.key}`,role:o,messages:[{message:s.message,key:s.key}],timestamp:a,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function ix(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],i=Math.max(0,n.length-cl);i>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${cl} messages (${i} hidden).`,timestamp:Date.now()}});for(let o=i;o<n.length;o++){const a=n[o],l=Ud(a),d=a.__openclaw;if(d&&d.kind==="compaction"){t.push({kind:"divider",key:typeof d.id=="string"?`divider:compaction:${d.id}`:`divider:compaction:${l.timestamp}:${o}`,label:"Compaction",timestamp:l.timestamp??Date.now()});continue}!e.showThinking&&l.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:dl(a,o),message:a})}if(e.showThinking)for(let o=0;o<s.length;o++)t.push({kind:"message",key:dl(s[o],o+n.length),message:s[o]});if(e.stream!==null){const o=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:o,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:o})}return sx(t)}function dl(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const i=typeof n.id=="string"?n.id:"";if(i)return`msg:${i}`;const o=typeof n.messageId=="string"?n.messageId:"";if(o)return`msg:${o}`;const a=typeof n.timestamp=="number"?n.timestamp:null,l=typeof n.role=="string"?n.role:"unknown";return a!=null?`msg:${l}:${a}:${t}`:`msg:${l}:${t}`}const ox={weather:{name:"天气查询",description:"获取当前天气和天气预报。使用场景：用户询问天气、温度或任何地点的预报。不需要 API 密钥。"},github:{name:"GitHub",description:"与 GitHub 仓库交互，查看问题、PR、代码等"},slack:{name:"Slack",description:"发送消息到 Slack 频道"},notion:{name:"Notion",description:"查询和编辑 Notion 页面和数据库"},trello:{name:"Trello",description:"管理 Trello 看板和卡片"},obsidian:{name:"Obsidian",description:"查询和搜索 Obsidian 笔记"},"bear-notes":{name:"Bear 笔记",description:"查询和搜索 Bear 笔记应用"},"apple-notes":{name:"苹果备忘录",description:"查询和搜索苹果备忘录"},"apple-reminders":{name:"苹果提醒事项",description:"管理苹果提醒事项"},"spotify-player":{name:"Spotify",description:"控制 Spotify 播放"},summarize:{name:"文本摘要",description:"总结长文本内容"},canvas:{name:"画布",description:"创建和编辑可视化画布"},"openai-image-gen":{name:"AI 图像生成",description:"使用 OpenAI 生成图像"},"openai-whisper":{name:"语音转文字",description:"使用 OpenAI Whisper 转录音频"},"openai-whisper-api":{name:"语音转文字 API",description:"使用 OpenAI API 转录音频"},"sherpa-onnx-tts":{name:"语音合成",description:"使用 Sherpa ONNX 进行文本转语音"},"nano-banana-pro":{name:"图像生成",description:"使用 Nano Banana Pro 生成图像"},"nano-pdf":{name:"PDF 处理",description:"处理和分析 PDF 文件"},"session-logs":{name:"会话日志",description:"查看和管理会话日志"},healthcheck:{name:"健康检查",description:"检查系统健康状态"},himalaya:{name:"邮件客户端",description:"使用 Himalaya 邮件客户端"},tmux:{name:"Tmux",description:"管理 Tmux 会话"},"video-frames":{name:"视频帧提取",description:"从视频中提取帧"},"voice-call":{name:"语音通话",description:"进行语音通话"},xurl:{name:"URL 处理",description:"获取和解析 URL 内容"},wacli:{name:"WhatsApp CLI",description:"WhatsApp 命令行工具"},"things-mac":{name:"Things",description:"管理 Things 任务"},sonoscli:{name:"Sonos",description:"控制 Sonos 音响"},songsee:{name:"Songsee",description:"音乐搜索和播放"},"skill-creator":{name:"Skill 创建器",description:"创建和管理 Skill"},sag:{name:"SAG",description:"SAG 工具"},peekaboo:{name:"Peekaboo",description:"Peekaboo 工具"},ordercli:{name:"Order CLI",description:"订单管理命令行工具"},oracle:{name:"Oracle",description:"Oracle 数据库工具"},openhue:{name:"Hue",description:"控制 Philips Hue 灯光"},mcporter:{name:"McPorter",description:"McPorter 工具"},imsg:{name:"iMessage",description:"发送和接收 iMessage"},"model-usage":{name:"模型使用",description:"查看模型使用情况"},goplaces:{name:"地点搜索",description:"搜索地点和位置"},gog:{name:"GOG",description:"GOG 游戏平台工具"},gifgrep:{name:"GIF 搜索",description:"搜索 GIF 图片"},"gh-issues":{name:"GitHub Issues",description:"管理 GitHub Issues"},gemini:{name:"Gemini",description:"Google Gemini AI"},eightctl:{name:"Eightctl",description:"Eightctl 工具"},discord:{name:"Discord",description:"Discord 工具"},"coding-agent":{name:"编程助手",description:"辅助编程和代码生成"},clawhub:{name:"ClawHub",description:"ClawHub 工具"},camsnap:{name:"相机快照",description:"拍摄相机快照"},bluebubbles:{name:"BlueBubbles",description:"BlueBubbles 消息工具"},blucli:{name:"BluCLI",description:"BluCLI 工具"},blogwatcher:{name:"博客监控",description:"监控博客更新"},"1password":{name:"1Password",description:"1Password 密码管理"},"unit-economics":{name:"单位经济学",description:"分析单位经济学指标"},"thesis-tracker":{name:"投资论点跟踪",description:"跟踪和管理投资论点"},"sector-overview":{name:"行业概览",description:"分析行业概况和趋势"},"returns-analysis":{name:"回报分析",description:"分析投资回报"},"portfolio-monitoring":{name:"投资组合监控",description:"监控投资组合表现"},"morning-note":{name:"晨会笔记",description:"生成晨会笔记"},"initiating-coverage":{name:"启动覆盖",description:"启动股票覆盖报告"},"idea-generation":{name:"创意生成",description:"生成投资创意"},"ic-memo":{name:"IC 备忘录",description:"生成投资委员会备忘录"},"earnings-preview":{name:"财报预览",description:"预览财报数据"},"earnings-analysis":{name:"财报分析",description:"分析财报数据"},"deal-sourcing":{name:"交易寻源",description:"寻找潜在交易"},"deal-screening":{name:"交易筛选",description:"筛选潜在交易"},"dd-checklist":{name:"尽职调查清单",description:"管理尽职调查清单"},"dcf-model":{name:"DCF 模型",description:"现金流折现模型分析"},"comps-analysis":{name:"可比公司分析",description:"分析可比公司估值"},"competitive-analysis":{name:"竞争分析",description:"分析竞争格局"},"catalyst-calendar":{name:"催化剂日历",description:"跟踪市场催化剂事件"},"bilibili-ai-digest":{name:"Bilibili AI 摘要",description:"生成 Bilibili 视频摘要"},"ai-trend-insights":{name:"AI 趋势洞察",description:"分析 AI 行业趋势"}};function ax(e){const t=e.skillKey||e.name,n=ox[t];return n||{name:e.name,description:e.description}}function rx(e){const t=e.skillsReport,n=(e.skillsFilter??"").trim().toLowerCase();if(!t?.skills?.length)return c`
      <div class="chat-skill-panel">
        <div class="chat-skill-panel__header">
          <span class="chat-skill-panel__title">技能列表</span>
        </div>
        <div class="chat-skill-panel__empty">暂无可用技能</div>
      </div>
    `;const s=[...t.skills].sort((u,m)=>{const h=u.createdAt??0;return(m.createdAt??0)-h}),i=n?s.filter(u=>[u.name,u.description,u.source].join(" ").toLowerCase().includes(n)):s,o=new Set(["agents-skills-personal","agents-skills-project","openclaw-workspace"]),a=i.filter(u=>o.has(u.source)),l=i.filter(u=>!o.has(u.source)),r=u=>{const m=u.enabled===!1,h=u.missingDependencies?.length??0,b=ax(u);return c`
      <div
        class="chat-skill-item ${m?"disabled":""}"
        @click=${()=>e.onSkillSelect?.(u)}
        title="${b.description}"
      >
        <div class="chat-skill-item__header">
          <span class="chat-skill-item__emoji">${u.emoji||"🔧"}</span>
          <span class="chat-skill-item__name">${b.name}</span>
          ${m?c`<span class="chat-skill-item__badge disabled">已禁用</span>`:h>0?c`<span class="chat-skill-item__badge missing">${h} 项缺失</span>`:f}
        </div>
        ${b.description?c`<div class="chat-skill-item__desc">${b.description}</div>`:f}
      </div>
    `},d=e.defaultSkillsExpanded!==!1,g=e.mySkillsExpanded!==!1;return c`
    <div class="chat-skill-panel">
      <div class="chat-skill-panel__header">
        <span class="chat-skill-panel__title">技能列表</span>
      </div>
      <div class="chat-skill-panel__filter">
        <input
          type="text"
          class="chat-skill-panel__filter-input"
          placeholder="搜索技能..."
          .value=${e.skillsFilter??""}
          @input=${u=>e.onSkillsFilterChange?.(u.target.value)}
        />
        <button
          class="chat-skill-panel__refresh-btn ${e.skillsRefreshing?"refreshing":""}"
          @click=${()=>e.onSkillsRefresh?.()}
          title="刷新技能列表"
          ?disabled=${e.skillsRefreshing}
        >
          ${e.skillsRefreshing?$e.loader:$e.refresh}
        </button>
      </div>
      <div class="chat-skill-panel__content">
        ${l.length>0?c`
              <div class="chat-skill-category">
                <div
                  class="chat-skill-category__header chat-skill-category__header--clickable"
                  @click=${()=>e.onToggleDefaultSkills?.()}
                >
                  <span class="chat-skill-category__toggle">
                    ${d?"▼":"▶"}
                  </span>
                  <span class="chat-skill-category__title">默认技能</span>
                  <span class="chat-skill-category__count">${l.length}</span>
                </div>
                ${d?c`
                      <div class="chat-skill-list">
                        ${l.map(r)}
                      </div>
                    `:f}
              </div>
            `:f}
        ${a.length>0?c`
              <div class="chat-skill-category">
                <div
                  class="chat-skill-category__header chat-skill-category__header--clickable"
                  @click=${()=>e.onToggleMySkills?.()}
                >
                  <span class="chat-skill-category__toggle">
                    ${g?"▼":"▶"}
                  </span>
                  <span class="chat-skill-category__title">我的技能</span>
                  <span class="chat-skill-category__count">${a.length}</span>
                </div>
                ${g?c`
                      <div class="chat-skill-list">
                        ${a.map(r)}
                      </div>
                    `:f}
              </div>
            `:f}
        ${i.length===0?c`<div class="chat-skill-panel__empty">未找到匹配的技能</div>`:f}
      </div>
    </div>
  `}function Gd(e){return e.trim().toLowerCase()}function lx(e){const t=new Set,n=[],s=/(^|\s)tag:([^\s]+)/gi,i=e.trim();let o=s.exec(i);for(;o;){const a=Gd(o[2]??"");a&&!t.has(a)&&(t.add(a),n.push(a)),o=s.exec(i)}return n}function cx(e,t){const n=[],s=new Set;for(const l of t){const r=Gd(l);!r||s.has(r)||(s.add(r),n.push(r))}const o=e.trim().replace(/(^|\s)tag:([^\s]+)/gi," ").replace(/\s+/g," ").trim(),a=n.map(l=>`tag:${l}`).join(" ");return o&&a?`${o} ${a}`:o||a}const dx=["security","auth","network","access","privacy","observability","performance","reliability","storage","models","media","automation","channels","tools","advanced"],xo={all:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:c`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},ul=[{key:"env",label:"Environment"},{key:"update",label:"Updates"},{key:"agents",label:"Agents"},{key:"auth",label:"Authentication"},{key:"channels",label:"Channels"},{key:"messages",label:"Messages"},{key:"commands",label:"Commands"},{key:"hooks",label:"Hooks"},{key:"skills",label:"Skills"},{key:"tools",label:"Tools"},{key:"gateway",label:"Gateway"},{key:"wizard",label:"Setup Wizard"}],gl="__all__";function pl(e){return xo[e]??xo.default}function ux(e,t){const n=oa[e];return n||{label:t?.title??Ys(e),description:t?.description??""}}function gx(e){const{key:t,schema:n,uiHints:s}=e;if(!n||me(n)!=="object"||!n.properties)return[];const i=Object.entries(n.properties).map(([o,a])=>{const l=yt([t,o],s),r=l?.label??a.title??Ys(o),d=l?.help??a.description??"",g=l?.order??50;return{key:o,label:r,description:d,order:g}});return i.sort((o,a)=>o.order!==a.order?o.order-a.order:o.key.localeCompare(a.key)),i}function px(e,t){if(!e||!t)return[];const n=[];function s(i,o,a){if(i===o)return;if(typeof i!=typeof o){n.push({path:a,from:i,to:o});return}if(typeof i!="object"||i===null||o===null){i!==o&&n.push({path:a,from:i,to:o});return}if(Array.isArray(i)&&Array.isArray(o)){JSON.stringify(i)!==JSON.stringify(o)&&n.push({path:a,from:i,to:o});return}const l=i,r=o,d=new Set([...Object.keys(l),...Object.keys(r)]);for(const g of d)s(l[g],r[g],a?`${a}.${g}`:g)}return s(e,t,""),n}function fl(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function fx(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=hd(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,i=n.schema?.properties??{},o=ul.filter(p=>p.key in i),a=new Set(ul.map(p=>p.key)),l=Object.keys(i).filter(p=>!a.has(p)).map(p=>({key:p,label:p.charAt(0).toUpperCase()+p.slice(1)})),r=[...o,...l],d=e.activeSection&&n.schema&&me(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,g=e.activeSection?ux(e.activeSection,d):null,u=e.activeSection?gx({key:e.activeSection,schema:d,uiHints:e.uiHints}):[],m=e.formMode==="form"&&!!e.activeSection&&u.length>0,h=e.activeSubsection===gl,b=e.searchQuery||h?null:e.activeSubsection??u[0]?.key??null,k=e.formMode==="form"?px(e.originalValue,e.formValue):[],T=e.formMode==="raw"&&e.raw!==e.originalRaw,I=e.formMode==="form"?k.length>0:T,R=!!e.formValue&&!e.loading&&!!n.schema,A=e.connected&&!e.saving&&I&&(e.formMode==="raw"?!0:R),w=e.connected&&!e.applying&&!e.updating&&I&&(e.formMode==="raw"?!0:R),L=e.connected&&!e.applying&&!e.updating,C=new Set(lx(e.searchQuery));return c`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">Settings</div>
          <span
            class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}"
            >${t}</span
          >
        </div>

        <!-- Search -->
        <div class="config-search">
          <div class="config-search__input-row">
            <svg
              class="config-search__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              class="config-search__input"
              placeholder="Search settings..."
              .value=${e.searchQuery}
              @input=${p=>e.onSearchChange(p.target.value)}
            />
            ${e.searchQuery?c`
                  <button
                    class="config-search__clear"
                    @click=${()=>e.onSearchChange("")}
                  >
                    ×
                  </button>
                `:f}
          </div>
          <div class="config-search__hint">
            <span class="config-search__hint-label" id="config-tag-filter-label">Tag filters:</span>
            <details class="config-search__tag-picker">
              <summary class="config-search__tag-trigger" aria-labelledby="config-tag-filter-label">
                ${C.size===0?c`
                        <span class="config-search__tag-placeholder">Add tags</span>
                      `:c`
                        <div class="config-search__tag-chips">
                          ${Array.from(C).slice(0,2).map(p=>c`<span class="config-search__tag-chip">tag:${p}</span>`)}
                          ${C.size>2?c`
                                  <span class="config-search__tag-chip config-search__tag-chip--count"
                                    >+${C.size-2}</span
                                  >
                                `:f}
                        </div>
                      `}
                <span class="config-search__tag-caret" aria-hidden="true">▾</span>
              </summary>
              <div class="config-search__tag-menu">
                ${dx.map(p=>{const _=C.has(p);return c`
                    <button
                      type="button"
                      class="config-search__tag-option ${_?"active":""}"
                      data-tag="${p}"
                      aria-pressed=${_?"true":"false"}
                      @click=${()=>{const F=_?Array.from(C).filter(U=>U!==p):[...C,p];e.onSearchChange(cx(e.searchQuery,F))}}
                    >
                      tag:${p}
                    </button>
                  `})}
              </div>
            </details>
          </div>
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${xo.all}</span>
            <span class="config-nav__label">All Settings</span>
          </button>
          ${r.map(p=>c`
              <button
                class="config-nav__item ${e.activeSection===p.key?"active":""}"
                @click=${()=>e.onSectionChange(p.key)}
              >
                <span class="config-nav__icon"
                  >${pl(p.key)}</span
                >
                <span class="config-nav__label">${p.label}</span>
              </button>
            `)}
        </nav>

        <!-- Mode toggle at bottom -->
        <div class="config-sidebar__footer">
          <div class="config-mode-toggle">
            <button
              class="config-mode-toggle__btn ${e.formMode==="form"?"active":""}"
              ?disabled=${e.schemaLoading||!e.schema}
              @click=${()=>e.onFormModeChange("form")}
            >
              Form
            </button>
            <button
              class="config-mode-toggle__btn ${e.formMode==="raw"?"active":""}"
              @click=${()=>e.onFormModeChange("raw")}
            >
              Raw
            </button>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${I?c`
                  <span class="config-changes-badge"
                    >${e.formMode==="raw"?"Unsaved changes":`${k.length} unsaved change${k.length!==1?"s":""}`}</span
                  >
                `:c`
                    <span class="config-status muted">No changes</span>
                  `}
          </div>
          <div class="config-actions__right">
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?"Loading…":"Reload"}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!A}
              @click=${e.onSave}
            >
              ${e.saving?"Saving…":"Save"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!w}
              @click=${e.onApply}
            >
              ${e.applying?"Applying…":"Apply"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!L}
              @click=${e.onUpdate}
            >
              ${e.updating?"Updating…":"Update"}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${I&&e.formMode==="form"?c`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >View ${k.length} pending
                    change${k.length!==1?"s":""}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${k.map(p=>c`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${p.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${fl(p.from)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${fl(p.to)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:f}
        ${g&&e.formMode==="form"?c`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${pl(e.activeSection??"")}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${g.label}
                  </div>
                  ${g.description?c`<div class="config-section-hero__desc">
                        ${g.description}
                      </div>`:f}
                </div>
              </div>
            `:f}
        ${m?c`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${b===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(gl)}
                >
                  All
                </button>
                ${u.map(p=>c`
                    <button
                      class="config-subnav__item ${b===p.key?"active":""}"
                      title=${p.description||p.label}
                      @click=${()=>e.onSubsectionChange(p.key)}
                    >
                      ${p.label}
                    </button>
                  `)}
              </div>
            `:f}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?c`
                ${e.schemaLoading?c`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>Loading schema…</span>
                        </div>
                      `:Bv({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:b})}
                ${s?c`
                        <div class="callout danger" style="margin-top: 12px">
                          Form view can't safely edit some fields. Use Raw to avoid losing config entries.
                        </div>
                      `:f}
              `:c`
                <label class="field config-raw-field">
                  <span>Raw JSON5</span>
                  <textarea
                    .value=${e.raw}
                    @input=${p=>e.onRawChange(p.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?c`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:f}
      </main>
    </div>
  `}const Ue=e=>e??f;function hx(){return[{value:"ok",label:v("cron.runs.runStatusOk")},{value:"error",label:v("cron.runs.runStatusError")},{value:"skipped",label:v("cron.runs.runStatusSkipped")}]}function mx(){return[{value:"delivered",label:v("cron.runs.deliveryDelivered")},{value:"not-delivered",label:v("cron.runs.deliveryNotDelivered")},{value:"unknown",label:v("cron.runs.deliveryUnknown")},{value:"not-requested",label:v("cron.runs.deliveryNotRequested")}]}function hl(e,t,n){const s=new Set(e);return n?s.add(t):s.delete(t),Array.from(s)}function ml(e,t){return e.length===0?t:e.length<=2?e.join(", "):`${e[0]} +${e.length-1}`}function vx(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(i=>s.has(i)?!1:(s.add(i),!0))}function vl(e,t){if(t==="last")return"last";const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function bl(e){return c`
    <div class="field cron-filter-dropdown" data-filter=${e.id}>
      <span>${e.title}</span>
      <details class="cron-filter-dropdown__details">
        <summary class="btn cron-filter-dropdown__trigger">
          <span>${e.summary}</span>
        </summary>
        <div class="cron-filter-dropdown__panel">
          <div class="cron-filter-dropdown__list">
            ${e.options.map(t=>c`
                <label class="cron-filter-dropdown__option">
                  <input
                    type="checkbox"
                    value=${t.value}
                    .checked=${e.selected.includes(t.value)}
                    @change=${n=>{const s=n.target;e.onToggle(t.value,s.checked)}}
                  />
                  <span>${t.label}</span>
                </label>
              `)}
          </div>
          <div class="row">
            <button class="btn" type="button" @click=${e.onClear}>${v("cron.runs.clear")}</button>
          </div>
        </div>
      </details>
    </div>
  `}function un(e,t){const n=Array.from(new Set(t.map(s=>s.trim()).filter(Boolean)));return n.length===0?f:c`<datalist id=${e}>
    ${n.map(s=>c`<option value=${s}></option> `)}
  </datalist>`}function ge(e){return`cron-error-${e}`}function bx(e){return e==="name"?"cron-name":e==="scheduleAt"?"cron-schedule-at":e==="everyAmount"?"cron-every-amount":e==="cronExpr"?"cron-cron-expr":e==="staggerAmount"?"cron-stagger-amount":e==="payloadText"?"cron-payload-text":e==="payloadModel"?"cron-payload-model":e==="payloadThinking"?"cron-payload-thinking":e==="timeoutSeconds"?"cron-timeout-seconds":e==="failureAlertAfter"?"cron-failure-alert-after":e==="failureAlertCooldownSeconds"?"cron-failure-alert-cooldown-seconds":"cron-delivery-to"}function yx(e,t,n){return e==="payloadText"?t.payloadKind==="systemEvent"?v("cron.form.mainTimelineMessage"):v("cron.form.assistantTaskPrompt"):e==="deliveryTo"?v(n==="webhook"?"cron.form.webhookUrl":"cron.form.to"):{name:v("cron.form.fieldName"),scheduleAt:v("cron.form.runAt"),everyAmount:v("cron.form.every"),cronExpr:v("cron.form.expression"),staggerAmount:v("cron.form.staggerWindow"),payloadText:v("cron.form.assistantTaskPrompt"),payloadModel:v("cron.form.model"),payloadThinking:v("cron.form.thinking"),timeoutSeconds:v("cron.form.timeoutSeconds"),deliveryTo:v("cron.form.to"),failureAlertAfter:"Failure alert after",failureAlertCooldownSeconds:"Failure alert cooldown"}[e]}function xx(e,t,n){const s=["name","scheduleAt","everyAmount","cronExpr","staggerAmount","payloadText","payloadModel","payloadThinking","timeoutSeconds","deliveryTo","failureAlertAfter","failureAlertCooldownSeconds"],i=[];for(const o of s){const a=e[o];a&&i.push({key:o,label:yx(o,t,n),message:a,inputId:bx(o)})}return i}function $x(e){const t=document.getElementById(e);t instanceof HTMLElement&&(typeof t.scrollIntoView=="function"&&t.scrollIntoView({block:"center",behavior:"smooth"}),t.focus())}function oe(e,t=!1){return c`<span>
    ${e}
    ${t?c`
            <span class="cron-required-marker" aria-hidden="true">*</span>
            <span class="cron-required-sr">${v("cron.form.requiredSr")}</span>
          `:f}
  </span>`}function wx(e){const t=!!e.editingJobId,n=e.form.payloadKind==="agentTurn",s=e.form.scheduleKind==="cron",i=vx(e),o=e.runsJobId==null?void 0:e.jobs.find(w=>w.id===e.runsJobId),a=e.runsScope==="all"?v("cron.jobList.allJobs"):o?.name??e.runsJobId??v("cron.jobList.selectJob"),l=e.runs,r=hx(),d=mx(),g=r.filter(w=>e.runsStatuses.includes(w.value)).map(w=>w.label),u=d.filter(w=>e.runsDeliveryStatuses.includes(w.value)).map(w=>w.label),m=ml(g,v("cron.runs.allStatuses")),h=ml(u,v("cron.runs.allDelivery")),b=e.form.sessionTarget==="isolated"&&e.form.payloadKind==="agentTurn",k=e.form.deliveryMode==="announce"&&!b?"none":e.form.deliveryMode,T=xx(e.fieldErrors,e.form,k),I=!e.busy&&T.length>0,R=e.jobsQuery.trim().length>0||e.jobsEnabledFilter!=="all"||e.jobsScheduleKindFilter!=="all"||e.jobsLastStatusFilter!=="all"||e.jobsSortBy!=="nextRunAtMs"||e.jobsSortDir!=="asc",A=I&&!e.canSubmit?T.length===1?v("cron.form.fixFields",{count:String(T.length)}):v("cron.form.fixFieldsPlural",{count:String(T.length)}):"";return c`
    <section class="card cron-summary-strip">
      <div class="cron-summary-strip__left">
        <div class="cron-summary-item">
          <div class="cron-summary-label">${v("cron.summary.enabled")}</div>
          <div class="cron-summary-value">
            <span class=${`chip ${e.status?.enabled?"chip-ok":"chip-danger"}`}>
              ${e.status?e.status.enabled?v("cron.summary.yes"):v("cron.summary.no"):v("common.na")}
            </span>
          </div>
        </div>
        <div class="cron-summary-item">
          <div class="cron-summary-label">${v("cron.summary.jobs")}</div>
          <div class="cron-summary-value">${e.status?.jobs??v("common.na")}</div>
        </div>
        <div class="cron-summary-item cron-summary-item--wide">
          <div class="cron-summary-label">${v("cron.summary.nextWake")}</div>
          <div class="cron-summary-value">${na(e.status?.nextWakeAtMs??null)}</div>
        </div>
      </div>
      <div class="cron-summary-strip__actions">
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?v("cron.summary.refreshing"):v("cron.summary.refresh")}
        </button>
        ${e.error?c`<span class="muted">${e.error}</span>`:f}
      </div>
    </section>

    <section class="cron-workspace">
      <div class="cron-workspace-main">
        <section class="card">
          <div class="row" style="justify-content: space-between; align-items: flex-start; gap: 12px;">
            <div>
              <div class="card-title">${v("cron.jobs.title")}</div>
              <div class="card-sub">${v("cron.jobs.subtitle")}</div>
            </div>
            <div class="muted">${v("cron.jobs.shownOf",{shown:String(e.jobs.length),total:String(e.jobsTotal)})}</div>
          </div>
          <div class="filters" style="margin-top: 12px;">
            <label class="field cron-filter-search">
              <span>${v("cron.jobs.searchJobs")}</span>
              <input
                .value=${e.jobsQuery}
                placeholder=${v("cron.jobs.searchPlaceholder")}
                @input=${w=>e.onJobsFiltersChange({cronJobsQuery:w.target.value})}
              />
            </label>
            <label class="field">
              <span>${v("cron.jobs.enabled")}</span>
              <select
                .value=${e.jobsEnabledFilter}
                @change=${w=>e.onJobsFiltersChange({cronJobsEnabledFilter:w.target.value})}
              >
                <option value="all">${v("cron.jobs.all")}</option>
                <option value="enabled">${v("common.enabled")}</option>
                <option value="disabled">${v("common.disabled")}</option>
              </select>
            </label>
            <label class="field">
              <span>${v("cron.jobs.schedule")}</span>
              <select
                data-test-id="cron-jobs-schedule-filter"
                .value=${e.jobsScheduleKindFilter}
                @change=${w=>e.onJobsFiltersChange({cronJobsScheduleKindFilter:w.target.value})}
              >
                <option value="all">${v("cron.jobs.all")}</option>
                <option value="at">${v("cron.form.at")}</option>
                <option value="every">${v("cron.form.every")}</option>
                <option value="cron">${v("cron.form.cronOption")}</option>
              </select>
            </label>
            <label class="field">
              <span>${v("cron.jobs.lastRun")}</span>
              <select
                data-test-id="cron-jobs-last-status-filter"
                .value=${e.jobsLastStatusFilter}
                @change=${w=>e.onJobsFiltersChange({cronJobsLastStatusFilter:w.target.value})}
              >
                <option value="all">${v("cron.jobs.all")}</option>
                <option value="ok">${v("cron.runs.runStatusOk")}</option>
                <option value="error">${v("cron.runs.runStatusError")}</option>
                <option value="skipped">${v("cron.runs.runStatusSkipped")}</option>
              </select>
            </label>
            <label class="field">
              <span>${v("cron.jobs.sort")}</span>
              <select
                .value=${e.jobsSortBy}
                @change=${w=>e.onJobsFiltersChange({cronJobsSortBy:w.target.value})}
              >
                <option value="nextRunAtMs">${v("cron.jobs.nextRun")}</option>
                <option value="updatedAtMs">${v("cron.jobs.recentlyUpdated")}</option>
                <option value="name">${v("cron.jobs.name")}</option>
              </select>
            </label>
            <label class="field">
              <span>${v("cron.jobs.direction")}</span>
              <select
                .value=${e.jobsSortDir}
                @change=${w=>e.onJobsFiltersChange({cronJobsSortDir:w.target.value})}
              >
                <option value="asc">${v("cron.jobs.ascending")}</option>
                <option value="desc">${v("cron.jobs.descending")}</option>
              </select>
            </label>
            <label class="field">
              <span>${v("cron.jobs.reset")}</span>
              <button
                class="btn"
                data-test-id="cron-jobs-filters-reset"
                ?disabled=${!R}
                @click=${e.onJobsFiltersReset}
              >
                ${v("cron.jobs.reset")}
              </button>
            </label>
          </div>
          ${e.jobs.length===0?c`
                  <div class="muted" style="margin-top: 12px">${v("cron.jobs.noMatching")}</div>
                `:c`
                  <div class="list" style="margin-top: 12px;">
                    ${e.jobs.map(w=>Sx(w,e))}
                  </div>
                `}
          ${e.jobsHasMore?c`
                  <div class="row" style="margin-top: 12px">
                    <button
                      class="btn"
                      ?disabled=${e.loading||e.jobsLoadingMore}
                      @click=${e.onLoadMoreJobs}
                    >
                      ${e.jobsLoadingMore?v("cron.jobs.loading"):v("cron.jobs.loadMore")}
                    </button>
                  </div>
                `:f}
        </section>

        <section class="card">
          <div class="row" style="justify-content: space-between; align-items: flex-start; gap: 12px;">
            <div>
              <div class="card-title">${v("cron.runs.title")}</div>
              <div class="card-sub">
                ${e.runsScope==="all"?v("cron.runs.subtitleAll"):v("cron.runs.subtitleJob",{title:a})}
              </div>
            </div>
            <div class="muted">${v("cron.jobs.shownOf",{shown:String(l.length),total:String(e.runsTotal)})}</div>
          </div>
          <div class="cron-run-filters">
            <div class="cron-run-filters__row cron-run-filters__row--primary">
              <label class="field">
                <span>${v("cron.runs.scope")}</span>
                <select
                  .value=${e.runsScope}
                  @change=${w=>e.onRunsFiltersChange({cronRunsScope:w.target.value})}
                >
                  <option value="all">${v("cron.runs.allJobs")}</option>
                  <option value="job" ?disabled=${e.runsJobId==null}>${v("cron.runs.selectedJob")}</option>
                </select>
              </label>
              <label class="field cron-run-filter-search">
                <span>${v("cron.runs.searchRuns")}</span>
                <input
                  .value=${e.runsQuery}
                  placeholder=${v("cron.runs.searchPlaceholder")}
                  @input=${w=>e.onRunsFiltersChange({cronRunsQuery:w.target.value})}
                />
              </label>
              <label class="field">
                <span>${v("cron.jobs.sort")}</span>
                <select
                  .value=${e.runsSortDir}
                  @change=${w=>e.onRunsFiltersChange({cronRunsSortDir:w.target.value})}
                >
                  <option value="desc">${v("cron.runs.newestFirst")}</option>
                  <option value="asc">${v("cron.runs.oldestFirst")}</option>
                </select>
              </label>
            </div>
            <div class="cron-run-filters__row cron-run-filters__row--secondary">
              ${bl({id:"status",title:v("cron.runs.status"),summary:m,options:r,selected:e.runsStatuses,onToggle:(w,L)=>{const C=hl(e.runsStatuses,w,L);e.onRunsFiltersChange({cronRunsStatuses:C})},onClear:()=>{e.onRunsFiltersChange({cronRunsStatuses:[]})}})}
              ${bl({id:"delivery",title:v("cron.runs.delivery"),summary:h,options:d,selected:e.runsDeliveryStatuses,onToggle:(w,L)=>{const C=hl(e.runsDeliveryStatuses,w,L);e.onRunsFiltersChange({cronRunsDeliveryStatuses:C})},onClear:()=>{e.onRunsFiltersChange({cronRunsDeliveryStatuses:[]})}})}
            </div>
          </div>
          ${e.runsScope==="job"&&e.runsJobId==null?c`
                  <div class="muted" style="margin-top: 12px">${v("cron.runs.selectJobHint")}</div>
                `:l.length===0?c`
                    <div class="muted" style="margin-top: 12px">${v("cron.runs.noMatching")}</div>
                  `:c`
                    <div class="list" style="margin-top: 12px;">
                      ${l.map(w=>Rx(w,e.basePath))}
                    </div>
                  `}
          ${(e.runsScope==="all"||e.runsJobId!=null)&&e.runsHasMore?c`
                  <div class="row" style="margin-top: 12px">
                    <button
                      class="btn"
                      ?disabled=${e.runsLoadingMore}
                      @click=${e.onLoadMoreRuns}
                    >
                      ${e.runsLoadingMore?v("cron.jobs.loading"):v("cron.runs.loadMore")}
                    </button>
                  </div>
                `:f}
        </section>
      </div>

      <section class="card cron-workspace-form">
        <div class="card-title">${v(t?"cron.form.editJob":"cron.form.newJob")}</div>
        <div class="card-sub">
          ${v(t?"cron.form.updateSubtitle":"cron.form.createSubtitle")}
        </div>
        <div class="cron-form">
          <div class="cron-required-legend">
            <span class="cron-required-marker" aria-hidden="true">*</span> ${v("cron.form.required")}
          </div>
          <section class="cron-form-section">
            <div class="cron-form-section__title">${v("cron.form.basics")}</div>
            <div class="cron-form-section__sub">${v("cron.form.basicsSub")}</div>
            <div class="form-grid cron-form-grid">
              <label class="field">
                ${oe(v("cron.form.fieldName"),!0)}
                <input
                  id="cron-name"
                  .value=${e.form.name}
                  placeholder=${v("cron.form.namePlaceholder")}
                  aria-invalid=${e.fieldErrors.name?"true":"false"}
                  aria-describedby=${Ue(e.fieldErrors.name?ge("name"):void 0)}
                  @input=${w=>e.onFormChange({name:w.target.value})}
                />
                ${Qe(e.fieldErrors.name,ge("name"))}
              </label>
              <label class="field">
                <span>${v("cron.form.description")}</span>
                <input
                  .value=${e.form.description}
                  placeholder=${v("cron.form.descriptionPlaceholder")}
                  @input=${w=>e.onFormChange({description:w.target.value})}
                />
              </label>
              <label class="field">
                ${oe(v("cron.form.agentId"))}
                <input
                  id="cron-agent-id"
                  .value=${e.form.agentId}
                  list="cron-agent-suggestions"
                  ?disabled=${e.form.clearAgent}
                  @input=${w=>e.onFormChange({agentId:w.target.value})}
                  placeholder=${v("cron.form.agentPlaceholder")}
                />
                <div class="cron-help">${v("cron.form.agentHelp")}</div>
              </label>
              <label class="field checkbox cron-checkbox cron-checkbox-inline">
                <input
                  type="checkbox"
                  .checked=${e.form.enabled}
                  @change=${w=>e.onFormChange({enabled:w.target.checked})}
                />
                <span class="field-checkbox__label">${v("cron.summary.enabled")}</span>
              </label>
            </div>
          </section>

          <section class="cron-form-section">
            <div class="cron-form-section__title">${v("cron.form.schedule")}</div>
            <div class="cron-form-section__sub">${v("cron.form.scheduleSub")}</div>
            <div class="form-grid cron-form-grid">
              <label class="field cron-span-2">
                ${oe(v("cron.form.schedule"))}
                <select
                  id="cron-schedule-kind"
                  .value=${e.form.scheduleKind}
                  @change=${w=>e.onFormChange({scheduleKind:w.target.value})}
                >
                  <option value="every">${v("cron.form.every")}</option>
                  <option value="at">${v("cron.form.at")}</option>
                  <option value="cron">${v("cron.form.cronOption")}</option>
                </select>
              </label>
            </div>
            ${kx(e)}
          </section>

          <section class="cron-form-section">
            <div class="cron-form-section__title">${v("cron.form.execution")}</div>
            <div class="cron-form-section__sub">${v("cron.form.executionSub")}</div>
            <div class="form-grid cron-form-grid">
              <label class="field">
                ${oe(v("cron.form.session"))}
                <select
                  id="cron-session-target"
                  .value=${e.form.sessionTarget}
                  @change=${w=>e.onFormChange({sessionTarget:w.target.value})}
                >
                  <option value="main">${v("cron.form.main")}</option>
                  <option value="isolated">${v("cron.form.isolated")}</option>
                </select>
                <div class="cron-help">${v("cron.form.sessionHelp")}</div>
              </label>
              <label class="field">
                ${oe(v("cron.form.wakeMode"))}
                <select
                  id="cron-wake-mode"
                  .value=${e.form.wakeMode}
                  @change=${w=>e.onFormChange({wakeMode:w.target.value})}
                >
                  <option value="now">${v("cron.form.now")}</option>
                  <option value="next-heartbeat">${v("cron.form.nextHeartbeat")}</option>
                </select>
                <div class="cron-help">${v("cron.form.wakeModeHelp")}</div>
              </label>
              <label class="field ${n?"":"cron-span-2"}">
                ${oe(v("cron.form.payloadKind"))}
                <select
                  id="cron-payload-kind"
                  .value=${e.form.payloadKind}
                  @change=${w=>e.onFormChange({payloadKind:w.target.value})}
                >
                  <option value="systemEvent">${v("cron.form.systemEvent")}</option>
                  <option value="agentTurn">${v("cron.form.agentTurn")}</option>
                </select>
                <div class="cron-help">
                  ${e.form.payloadKind==="systemEvent"?v("cron.form.systemEventHelp"):v("cron.form.agentTurnHelp")}
                </div>
              </label>
              ${n?c`
                      <label class="field">
                        ${oe(v("cron.form.timeoutSeconds"))}
                        <input
                          id="cron-timeout-seconds"
                          .value=${e.form.timeoutSeconds}
                          placeholder=${v("cron.form.timeoutPlaceholder")}
                          aria-invalid=${e.fieldErrors.timeoutSeconds?"true":"false"}
                          aria-describedby=${Ue(e.fieldErrors.timeoutSeconds?ge("timeoutSeconds"):void 0)}
                          @input=${w=>e.onFormChange({timeoutSeconds:w.target.value})}
                        />
                        <div class="cron-help">${v("cron.form.timeoutHelp")}</div>
                        ${Qe(e.fieldErrors.timeoutSeconds,ge("timeoutSeconds"))}
                      </label>
                    `:f}
            </div>
            <label class="field cron-span-2">
              ${oe(e.form.payloadKind==="systemEvent"?v("cron.form.mainTimelineMessage"):v("cron.form.assistantTaskPrompt"),!0)}
              <textarea
                id="cron-payload-text"
                .value=${e.form.payloadText}
                aria-invalid=${e.fieldErrors.payloadText?"true":"false"}
                aria-describedby=${Ue(e.fieldErrors.payloadText?ge("payloadText"):void 0)}
                @input=${w=>e.onFormChange({payloadText:w.target.value})}
                rows="4"
              ></textarea>
              ${Qe(e.fieldErrors.payloadText,ge("payloadText"))}
            </label>
          </section>

          <section class="cron-form-section">
            <div class="cron-form-section__title">${v("cron.form.deliverySection")}</div>
            <div class="cron-form-section__sub">${v("cron.form.deliverySub")}</div>
            <div class="form-grid cron-form-grid">
              <label class="field ${k==="none"?"cron-span-2":""}">
                ${oe(v("cron.form.resultDelivery"))}
                <select
                  id="cron-delivery-mode"
                  .value=${k}
                  @change=${w=>e.onFormChange({deliveryMode:w.target.value})}
                >
                  ${b?c`
                          <option value="announce">${v("cron.form.announceDefault")}</option>
                        `:f}
                  <option value="webhook">${v("cron.form.webhookPost")}</option>
                  <option value="none">${v("cron.form.noneInternal")}</option>
                </select>
                <div class="cron-help">${v("cron.form.deliveryHelp")}</div>
              </label>
              ${k!=="none"?c`
                      <label class="field ${k==="webhook"?"cron-span-2":""}">
                        ${oe(v(k==="webhook"?"cron.form.webhookUrl":"cron.form.channel"),k==="webhook")}
                        ${k==="webhook"?c`
                                <input
                                  id="cron-delivery-to"
                                  .value=${e.form.deliveryTo}
                                  list="cron-delivery-to-suggestions"
                                  aria-invalid=${e.fieldErrors.deliveryTo?"true":"false"}
                                  aria-describedby=${Ue(e.fieldErrors.deliveryTo?ge("deliveryTo"):void 0)}
                                  @input=${w=>e.onFormChange({deliveryTo:w.target.value})}
                                  placeholder=${v("cron.form.webhookPlaceholder")}
                                />
                              `:c`
                                <select
                                  id="cron-delivery-channel"
                                  .value=${e.form.deliveryChannel||"last"}
                                  @change=${w=>e.onFormChange({deliveryChannel:w.target.value})}
                                >
                                  ${i.map(w=>c`<option value=${w}>
                                        ${vl(e,w)}
                                      </option>`)}
                                </select>
                              `}
                        ${k==="announce"?c`
                                <div class="cron-help">${v("cron.form.channelHelp")}</div>
                              `:c`
                                <div class="cron-help">${v("cron.form.webhookHelp")}</div>
                              `}
                      </label>
                      ${k==="announce"?c`
                              <label class="field cron-span-2">
                                ${oe(v("cron.form.to"))}
                                <input
                                  id="cron-delivery-to"
                                  .value=${e.form.deliveryTo}
                                  list="cron-delivery-to-suggestions"
                                  @input=${w=>e.onFormChange({deliveryTo:w.target.value})}
                                  placeholder=${v("cron.form.toPlaceholder")}
                                />
                                <div class="cron-help">${v("cron.form.toHelp")}</div>
                              </label>
                            `:f}
                      ${k==="webhook"?Qe(e.fieldErrors.deliveryTo,ge("deliveryTo")):f}
                    `:f}
            </div>
          </section>

          <details class="cron-advanced">
            <summary class="cron-advanced__summary">${v("cron.form.advanced")}</summary>
            <div class="cron-help">${v("cron.form.advancedHelp")}</div>
            <div class="form-grid cron-form-grid">
              <label class="field checkbox cron-checkbox">
                <input
                  type="checkbox"
                  .checked=${e.form.deleteAfterRun}
                  @change=${w=>e.onFormChange({deleteAfterRun:w.target.checked})}
                />
                <span class="field-checkbox__label">${v("cron.form.deleteAfterRun")}</span>
                <div class="cron-help">${v("cron.form.deleteAfterRunHelp")}</div>
              </label>
              <label class="field checkbox cron-checkbox">
                <input
                  type="checkbox"
                  .checked=${e.form.clearAgent}
                  @change=${w=>e.onFormChange({clearAgent:w.target.checked})}
                />
                <span class="field-checkbox__label">${v("cron.form.clearAgentOverride")}</span>
                <div class="cron-help">${v("cron.form.clearAgentHelp")}</div>
              </label>
              <label class="field cron-span-2">
                ${oe("Session key")}
                <input
                  id="cron-session-key"
                  .value=${e.form.sessionKey}
                  @input=${w=>e.onFormChange({sessionKey:w.target.value})}
                  placeholder="agent:main:main"
                />
                <div class="cron-help">
                  Optional routing key for job delivery and wake routing.
                </div>
              </label>
              ${s?c`
                      <label class="field checkbox cron-checkbox cron-span-2">
                        <input
                          type="checkbox"
                          .checked=${e.form.scheduleExact}
                          @change=${w=>e.onFormChange({scheduleExact:w.target.checked})}
                        />
                        <span class="field-checkbox__label">${v("cron.form.exactTiming")}</span>
                        <div class="cron-help">${v("cron.form.exactTimingHelp")}</div>
                      </label>
                      <div class="cron-stagger-group cron-span-2">
                        <label class="field">
                          ${oe(v("cron.form.staggerWindow"))}
                          <input
                            id="cron-stagger-amount"
                            .value=${e.form.staggerAmount}
                            ?disabled=${e.form.scheduleExact}
                            aria-invalid=${e.fieldErrors.staggerAmount?"true":"false"}
                            aria-describedby=${Ue(e.fieldErrors.staggerAmount?ge("staggerAmount"):void 0)}
                            @input=${w=>e.onFormChange({staggerAmount:w.target.value})}
                            placeholder=${v("cron.form.staggerPlaceholder")}
                          />
                          ${Qe(e.fieldErrors.staggerAmount,ge("staggerAmount"))}
                        </label>
                        <label class="field">
                          <span>${v("cron.form.staggerUnit")}</span>
                          <select
                            .value=${e.form.staggerUnit}
                            ?disabled=${e.form.scheduleExact}
                            @change=${w=>e.onFormChange({staggerUnit:w.target.value})}
                          >
                            <option value="seconds">${v("cron.form.seconds")}</option>
                            <option value="minutes">${v("cron.form.minutes")}</option>
                          </select>
                        </label>
                      </div>
                    `:f}
              ${n?c`
                      <label class="field cron-span-2">
                        ${oe("Account ID")}
                        <input
                          id="cron-delivery-account-id"
                          .value=${e.form.deliveryAccountId}
                          list="cron-delivery-account-suggestions"
                          ?disabled=${k!=="announce"}
                          @input=${w=>e.onFormChange({deliveryAccountId:w.target.value})}
                          placeholder="default"
                        />
                        <div class="cron-help">
                          Optional channel account ID for multi-account setups.
                        </div>
                      </label>
                      <label class="field checkbox cron-checkbox cron-span-2">
                        <input
                          type="checkbox"
                          .checked=${e.form.payloadLightContext}
                          @change=${w=>e.onFormChange({payloadLightContext:w.target.checked})}
                        />
                        <span class="field-checkbox__label">Light context</span>
                        <div class="cron-help">
                          Use lightweight bootstrap context for this agent job.
                        </div>
                      </label>
                      <label class="field">
                        ${oe(v("cron.form.model"))}
                        <input
                          id="cron-payload-model"
                          .value=${e.form.payloadModel}
                          list="cron-model-suggestions"
                          @input=${w=>e.onFormChange({payloadModel:w.target.value})}
                          placeholder=${v("cron.form.modelPlaceholder")}
                        />
                        <div class="cron-help">${v("cron.form.modelHelp")}</div>
                      </label>
                      <label class="field">
                        ${oe(v("cron.form.thinking"))}
                        <input
                          id="cron-payload-thinking"
                          .value=${e.form.payloadThinking}
                          list="cron-thinking-suggestions"
                          @input=${w=>e.onFormChange({payloadThinking:w.target.value})}
                          placeholder=${v("cron.form.thinkingPlaceholder")}
                        />
                        <div class="cron-help">${v("cron.form.thinkingHelp")}</div>
                      </label>
                    `:f}
              ${n?c`
                      <label class="field cron-span-2">
                        ${oe("Failure alerts")}
                        <select
                          .value=${e.form.failureAlertMode}
                          @change=${w=>e.onFormChange({failureAlertMode:w.target.value})}
                        >
                          <option value="inherit">Inherit global setting</option>
                          <option value="disabled">Disable for this job</option>
                          <option value="custom">Custom per-job settings</option>
                        </select>
                        <div class="cron-help">
                          Control when this job sends repeated-failure alerts.
                        </div>
                      </label>
                      ${e.form.failureAlertMode==="custom"?c`
                              <label class="field">
                                ${oe("Alert after")}
                                <input
                                  id="cron-failure-alert-after"
                                  .value=${e.form.failureAlertAfter}
                                  aria-invalid=${e.fieldErrors.failureAlertAfter?"true":"false"}
                                  aria-describedby=${Ue(e.fieldErrors.failureAlertAfter?ge("failureAlertAfter"):void 0)}
                                  @input=${w=>e.onFormChange({failureAlertAfter:w.target.value})}
                                  placeholder="2"
                                />
                                <div class="cron-help">Consecutive errors before alerting.</div>
                                ${Qe(e.fieldErrors.failureAlertAfter,ge("failureAlertAfter"))}
                              </label>
                              <label class="field">
                                ${oe("Cooldown (seconds)")}
                                <input
                                  id="cron-failure-alert-cooldown-seconds"
                                  .value=${e.form.failureAlertCooldownSeconds}
                                  aria-invalid=${e.fieldErrors.failureAlertCooldownSeconds?"true":"false"}
                                  aria-describedby=${Ue(e.fieldErrors.failureAlertCooldownSeconds?ge("failureAlertCooldownSeconds"):void 0)}
                                  @input=${w=>e.onFormChange({failureAlertCooldownSeconds:w.target.value})}
                                  placeholder="3600"
                                />
                                <div class="cron-help">Minimum seconds between alerts.</div>
                                ${Qe(e.fieldErrors.failureAlertCooldownSeconds,ge("failureAlertCooldownSeconds"))}
                              </label>
                              <label class="field">
                                ${oe("Alert channel")}
                                <select
                                  .value=${e.form.failureAlertChannel||"last"}
                                  @change=${w=>e.onFormChange({failureAlertChannel:w.target.value})}
                                >
                                  ${i.map(w=>c`<option value=${w}>
                                        ${vl(e,w)}
                                      </option>`)}
                                </select>
                              </label>
                              <label class="field">
                                ${oe("Alert to")}
                                <input
                                  .value=${e.form.failureAlertTo}
                                  list="cron-delivery-to-suggestions"
                                  @input=${w=>e.onFormChange({failureAlertTo:w.target.value})}
                                  placeholder="+1555... or chat id"
                                />
                                <div class="cron-help">
                                  Optional recipient override for failure alerts.
                                </div>
                              </label>
                              <label class="field">
                                ${oe("Alert mode")}
                                <select
                                  .value=${e.form.failureAlertDeliveryMode||"announce"}
                                  @change=${w=>e.onFormChange({failureAlertDeliveryMode:w.target.value})}
                                >
                                  <option value="announce">Announce (via channel)</option>
                                  <option value="webhook">Webhook (HTTP POST)</option>
                                </select>
                              </label>
                              <label class="field">
                                ${oe("Alert account ID")}
                                <input
                                  .value=${e.form.failureAlertAccountId}
                                  @input=${w=>e.onFormChange({failureAlertAccountId:w.target.value})}
                                  placeholder="Account ID for multi-account setups"
                                />
                              </label>
                            `:f}
                    `:f}
              ${k!=="none"?c`
                      <label class="field checkbox cron-checkbox cron-span-2">
                        <input
                          type="checkbox"
                          .checked=${e.form.deliveryBestEffort}
                          @change=${w=>e.onFormChange({deliveryBestEffort:w.target.checked})}
                        />
                        <span class="field-checkbox__label">${v("cron.form.bestEffortDelivery")}</span>
                        <div class="cron-help">${v("cron.form.bestEffortHelp")}</div>
                      </label>
                    `:f}
            </div>
          </details>
        </div>
        ${I?c`
                <div class="cron-form-status" role="status" aria-live="polite">
                  <div class="cron-form-status__title">${v("cron.form.cantAddYet")}</div>
                  <div class="cron-help">${v("cron.form.fillRequired")}</div>
                  <ul class="cron-form-status__list">
                    ${T.map(w=>c`
                        <li>
                          <button
                            type="button"
                            class="cron-form-status__link"
                            @click=${()=>$x(w.inputId)}
                          >
                            ${w.label}: ${v(w.message)}
                          </button>
                        </li>
                      `)}
                  </ul>
                </div>
              `:f}
        <div class="row cron-form-actions">
          <button class="btn primary" ?disabled=${e.busy||!e.canSubmit} @click=${e.onAdd}>
            ${e.busy?v("cron.form.saving"):v(t?"cron.form.saveChanges":"cron.form.addJob")}
          </button>
          ${A?c`<div class="cron-submit-reason" aria-live="polite">${A}</div>`:f}
          ${t?c`
                  <button class="btn" ?disabled=${e.busy} @click=${e.onCancelEdit}>
                    ${v("cron.form.cancel")}
                  </button>
                `:f}
        </div>
      </section>
    </section>

    ${un("cron-agent-suggestions",e.agentSuggestions)}
    ${un("cron-model-suggestions",e.modelSuggestions)}
    ${un("cron-thinking-suggestions",e.thinkingSuggestions)}
    ${un("cron-tz-suggestions",e.timezoneSuggestions)}
    ${un("cron-delivery-to-suggestions",e.deliveryToSuggestions)}
    ${un("cron-delivery-account-suggestions",e.accountSuggestions)}
  `}function kx(e){const t=e.form;return t.scheduleKind==="at"?c`
      <label class="field cron-span-2" style="margin-top: 12px;">
        ${oe(v("cron.form.runAt"),!0)}
        <input
          id="cron-schedule-at"
          type="datetime-local"
          .value=${t.scheduleAt}
          aria-invalid=${e.fieldErrors.scheduleAt?"true":"false"}
          aria-describedby=${Ue(e.fieldErrors.scheduleAt?ge("scheduleAt"):void 0)}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
        ${Qe(e.fieldErrors.scheduleAt,ge("scheduleAt"))}
      </label>
    `:t.scheduleKind==="every"?c`
      <div class="form-grid cron-form-grid" style="margin-top: 12px;">
        <label class="field">
          ${oe(v("cron.form.every"),!0)}
          <input
            id="cron-every-amount"
            .value=${t.everyAmount}
            aria-invalid=${e.fieldErrors.everyAmount?"true":"false"}
            aria-describedby=${Ue(e.fieldErrors.everyAmount?ge("everyAmount"):void 0)}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
            placeholder=${v("cron.form.everyAmountPlaceholder")}
          />
          ${Qe(e.fieldErrors.everyAmount,ge("everyAmount"))}
        </label>
        <label class="field">
          <span>${v("cron.form.unit")}</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">${v("cron.form.minutes")}</option>
            <option value="hours">${v("cron.form.hours")}</option>
            <option value="days">${v("cron.form.days")}</option>
          </select>
        </label>
      </div>
    `:c`
    <div class="form-grid cron-form-grid" style="margin-top: 12px;">
      <label class="field">
        ${oe(v("cron.form.expression"),!0)}
        <input
          id="cron-cron-expr"
          .value=${t.cronExpr}
          aria-invalid=${e.fieldErrors.cronExpr?"true":"false"}
          aria-describedby=${Ue(e.fieldErrors.cronExpr?ge("cronExpr"):void 0)}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
          placeholder=${v("cron.form.expressionPlaceholder")}
        />
        ${Qe(e.fieldErrors.cronExpr,ge("cronExpr"))}
      </label>
      <label class="field">
        <span>${v("cron.form.timezoneOptional")}</span>
        <input
          .value=${t.cronTz}
          list="cron-tz-suggestions"
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
          placeholder=${v("cron.form.timezonePlaceholder")}
        />
        <div class="cron-help">${v("cron.form.timezoneHelp")}</div>
      </label>
      <div class="cron-help cron-span-2">${v("cron.form.jitterHelp")}</div>
    </div>
  `}function Qe(e,t){return e?c`<div id=${Ue(t)} class="cron-help cron-error">${v(e)}</div>`:f}function Sx(e,t){const s=`list-item list-item-clickable cron-job${t.runsJobId===e.id?" list-item-selected":""}`,i=o=>{t.onLoadRuns(e.id),o()};return c`
    <div class=${s} @click=${()=>t.onLoadRuns(e.id)}>
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${rd(e)}</div>
        ${Ax(e)}
        ${e.agentId?c`<div class="muted cron-job-agent">${v("cron.jobDetail.agent")}: ${e.agentId}</div>`:f}
      </div>
      <div class="list-meta">
        ${Tx(e)}
      </div>
      <div class="cron-job-footer">
        <div class="chip-row cron-job-chips">
          <span class=${`chip ${e.enabled?"chip-ok":"chip-danger"}`}>
            ${e.enabled?v("cron.jobList.enabled"):v("cron.jobList.disabled")}
          </span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
        <div class="row cron-job-actions">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onEdit(e))}}
          >
            ${v("cron.jobList.edit")}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onClone(e))}}
          >
            ${v("cron.jobList.clone")}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onToggle(e,!e.enabled))}}
          >
            ${e.enabled?v("cron.jobList.disable"):v("cron.jobList.enable")}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onRun(e,"force"))}}
          >
            ${v("cron.jobList.run")}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onRun(e,"due"))}}
          >
            Run if due
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onLoadRuns(e.id))}}
          >
            ${v("cron.jobList.history")}
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),i(()=>t.onRemove(e))}}
          >
            ${v("cron.jobList.remove")}
          </button>
        </div>
      </div>
    </div>
  `}function Ax(e){if(e.payload.kind==="systemEvent")return c`<div class="cron-job-detail">
      <span class="cron-job-detail-label">${v("cron.jobDetail.system")}</span>
      <span class="muted cron-job-detail-value">${e.payload.text}</span>
    </div>`;const t=e.delivery,n=t?.mode==="webhook"?t.to?` (${t.to})`:"":t?.channel||t?.to?` (${t.channel??"last"}${t.to?` -> ${t.to}`:""})`:"";return c`
    <div class="cron-job-detail">
      <span class="cron-job-detail-label">${v("cron.jobDetail.prompt")}</span>
      <span class="muted cron-job-detail-value">${e.payload.message}</span>
    </div>
    ${t?c`<div class="cron-job-detail">
            <span class="cron-job-detail-label">${v("cron.jobDetail.delivery")}</span>
            <span class="muted cron-job-detail-value">${t.mode}${n}</span>
          </div>`:f}
  `}function yl(e){return typeof e!="number"||!Number.isFinite(e)?v("common.na"):se(e)}function Cx(e,t=Date.now()){const n=se(e);return e>t?v("cron.runEntry.next",{rel:n}):v("cron.runEntry.due",{rel:n})}function Tx(e){const t=e.state?.lastStatus,n=t==="ok"?"cron-job-status-ok":t==="error"?"cron-job-status-error":t==="skipped"?"cron-job-status-skipped":"cron-job-status-na",s=v(t==="ok"?"cron.runs.runStatusOk":t==="error"?"cron.runs.runStatusError":t==="skipped"?"cron.runs.runStatusSkipped":"common.na"),i=e.state?.nextRunAtMs,o=e.state?.lastRunAtMs;return c`
    <div class="cron-job-state">
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">${v("cron.jobState.status")}</span>
        <span class=${`cron-job-status-pill ${n}`}>${s}</span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">${v("cron.jobState.next")}</span>
        <span class="cron-job-state-value" title=${St(i)}>
          ${yl(i)}
        </span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">${v("cron.jobState.last")}</span>
        <span class="cron-job-state-value" title=${St(o)}>
          ${yl(o)}
        </span>
      </div>
    </div>
  `}function _x(e){switch(e){case"ok":return v("cron.runs.runStatusOk");case"error":return v("cron.runs.runStatusError");case"skipped":return v("cron.runs.runStatusSkipped");default:return v("cron.runs.runStatusUnknown")}}function Ex(e){switch(e){case"delivered":return v("cron.runs.deliveryDelivered");case"not-delivered":return v("cron.runs.deliveryNotDelivered");case"not-requested":return v("cron.runs.deliveryNotRequested");case"unknown":return v("cron.runs.deliveryUnknown");default:return v("cron.runs.deliveryUnknown")}}function Rx(e,t){const n=typeof e.sessionKey=="string"&&e.sessionKey.trim().length>0?`${Wo("chat",t)}?session=${encodeURIComponent(e.sessionKey)}`:null,s=_x(e.status??"unknown"),i=Ex(e.deliveryStatus??"not-requested"),o=e.usage,a=o&&typeof o.total_tokens=="number"?`${o.total_tokens} tokens`:o&&typeof o.input_tokens=="number"&&typeof o.output_tokens=="number"?`${o.input_tokens} in / ${o.output_tokens} out`:null;return c`
    <div class="list-item cron-run-entry">
      <div class="list-main cron-run-entry__main">
        <div class="list-title cron-run-entry__title">
          ${e.jobName??e.jobId}
          <span class="muted"> · ${s}</span>
        </div>
        <div class="list-sub cron-run-entry__summary">${e.summary??e.error??v("cron.runEntry.noSummary")}</div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${i}</span>
          ${e.model?c`<span class="chip">${e.model}</span>`:f}
          ${e.provider?c`<span class="chip">${e.provider}</span>`:f}
          ${a?c`<span class="chip">${a}</span>`:f}
        </div>
      </div>
      <div class="list-meta cron-run-entry__meta">
        <div>${St(e.ts)}</div>
        ${typeof e.runAtMs=="number"?c`<div class="muted">${v("cron.runEntry.runAt")} ${St(e.runAtMs)}</div>`:f}
        <div class="muted">${e.durationMs??0}ms</div>
        ${typeof e.nextRunAtMs=="number"?c`<div class="muted">${Cx(e.nextRunAtMs)}</div>`:f}
        ${n?c`<div><a class="session-link" href=${n}>${v("cron.runEntry.openRunChat")}</a></div>`:f}
        ${e.error?c`<div class="muted">${e.error}</div>`:f}
        ${e.deliveryError?c`<div class="muted">${e.deliveryError}</div>`:f}
      </div>
    </div>
  `}function Ix(e){const n=(e.status&&typeof e.status=="object"?e.status.securityAudit:null)?.summary??null,s=n?.critical??0,i=n?.warn??0,o=n?.info??0,a=s>0?"danger":i>0?"warn":"success",l=s>0?`${s} critical`:i>0?`${i} warnings`:"No critical issues";return c`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Snapshots</div>
            <div class="card-sub">Status, health, and heartbeat data.</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">Status</div>
            ${n?c`<div class="callout ${a}" style="margin-top: 8px;">
                  Security audit: ${l}${o>0?` · ${o} info`:""}. Run
                  <span class="mono">openclaw security audit --deep</span> for details.
                </div>`:f}
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">Health</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">Last heartbeat</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Manual RPC</div>
        <div class="card-sub">Send a raw gateway method with JSON params.</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>Method</span>
            <input
              .value=${e.callMethod}
              @input=${r=>e.onCallMethodChange(r.target.value)}
              placeholder="system-presence"
            />
          </label>
          <label class="field">
            <span>Params (JSON)</span>
            <textarea
              .value=${e.callParams}
              @input=${r=>e.onCallParamsChange(r.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>Call</button>
        </div>
        ${e.callError?c`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:f}
        ${e.callResult?c`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:f}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Models</div>
      <div class="card-sub">Catalog from models.list.</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Event Log</div>
      <div class="card-sub">Latest gateway events.</div>
      ${e.eventLog.length===0?c`
              <div class="muted" style="margin-top: 12px">No events yet.</div>
            `:c`
            <div class="list debug-event-log" style="margin-top: 12px;">
              ${e.eventLog.map(r=>c`
                  <div class="list-item debug-event-log__item">
                    <div class="list-main">
                      <div class="list-title">${r.event}</div>
                      <div class="list-sub">${new Date(r.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta debug-event-log__meta">
                      <pre class="code-block debug-event-log__payload">${cv(r.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function Lx(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function Nt(e,t){return t?c`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:f}function Mx(e){const t=e.execApprovalQueue[0];if(!t)return f;const n=t.request,s=t.expiresAtMs-Date.now(),i=s>0?`expires in ${Lx(s)}`:"expired",o=e.execApprovalQueue.length;return c`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${i}</div>
          </div>
          ${o>1?c`<div class="exec-approval-queue">${o} pending</div>`:f}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${Nt("Host",n.host)}
          ${Nt("Agent",n.agentId)}
          ${Nt("Session",n.sessionKey)}
          ${Nt("CWD",n.cwd)}
          ${Nt("Resolved",n.resolvedPath)}
          ${Nt("Security",n.security)}
          ${Nt("Ask",n.ask)}
        </div>
        ${e.execApprovalError?c`<div class="exec-approval-error">${e.execApprovalError}</div>`:f}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function Dx(e){const{pendingGatewayUrl:t}=e;return t?c`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:f}function Px(e){return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Connected Instances</div>
          <div class="card-sub">Presence beacons from the gateway and clients.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>
      ${e.lastError?c`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:f}
      ${e.statusMessage?c`<div class="callout" style="margin-top: 12px;">
            ${e.statusMessage}
          </div>`:f}
      <div class="list" style="margin-top: 16px;">
        ${e.entries.length===0?c`
                <div class="muted">No instances reported yet.</div>
              `:e.entries.map(t=>Fx(t))}
      </div>
    </section>
  `}function Fx(e){const t=e.lastInputSeconds!=null?`${e.lastInputSeconds}s ago`:"n/a",n=e.mode??"unknown",s=Array.isArray(e.roles)?e.roles.filter(Boolean):[],i=Array.isArray(e.scopes)?e.scopes.filter(Boolean):[],o=i.length>0?i.length>3?`${i.length} scopes`:`scopes: ${i.join(", ")}`:null;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.host??"unknown host"}</div>
        <div class="list-sub">${av(e)}</div>
        <div class="chip-row">
          <span class="chip">${n}</span>
          ${s.map(a=>c`<span class="chip">${a}</span>`)}
          ${o?c`<span class="chip">${o}</span>`:f}
          ${e.platform?c`<span class="chip">${e.platform}</span>`:f}
          ${e.deviceFamily?c`<span class="chip">${e.deviceFamily}</span>`:f}
          ${e.modelIdentifier?c`<span class="chip">${e.modelIdentifier}</span>`:f}
          ${e.version?c`<span class="chip">${e.version}</span>`:f}
        </div>
      </div>
      <div class="list-meta">
        <div>${rv(e)}</div>
        <div class="muted">Last input ${t}</div>
        <div class="muted">Reason ${e.reason??""}</div>
      </div>
    </div>
  `}const xl=["trace","debug","info","warn","error","fatal"];function Nx(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function Ox(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function Ux(e){const t=e.filterText.trim().toLowerCase(),n=xl.some(o=>!e.levelFilters[o]),s=e.entries.filter(o=>o.level&&!e.levelFilters[o.level]?!1:Ox(o,t)),i=t||n?"filtered":"visible";return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Logs</div>
          <div class="card-sub">Gateway file logs (JSONL).</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(o=>o.raw),i)}
          >
            Export ${i}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>Filter</span>
          <input
            .value=${e.filterText}
            @input=${o=>e.onFilterTextChange(o.target.value)}
            placeholder="Search logs"
          />
        </label>
        <label class="field checkbox">
          <span>Auto-follow</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${o=>e.onToggleAutoFollow(o.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${xl.map(o=>c`
            <label class="chip log-chip ${o}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[o]}
                @change=${a=>e.onLevelToggle(o,a.target.checked)}
              />
              <span>${o}</span>
            </label>
          `)}
      </div>

      ${e.file?c`<div class="muted" style="margin-top: 10px;">File: ${e.file}</div>`:f}
      ${e.truncated?c`
              <div class="callout" style="margin-top: 10px">Log output truncated; showing latest chunk.</div>
            `:f}
      ${e.error?c`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:f}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?c`
                <div class="muted" style="padding: 12px">No log entries.</div>
              `:s.map(o=>c`
                <div class="log-row">
                  <div class="log-time mono">${Nx(o.time)}</div>
                  <div class="log-level ${o.level??""}">${o.level??""}</div>
                  <div class="log-subsystem mono">${o.subsystem??""}</div>
                  <div class="log-message mono">${o.message??o.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function Jd(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach((i,o)=>{if(!i||typeof i!="object")return;const a=i,l=typeof a.id=="string"?a.id.trim():"";if(!l)return;const r=typeof a.name=="string"?a.name.trim():void 0,d=a.default===!0;s.push({id:l,name:r||void 0,isDefault:d,index:o,record:a})}),s}function Vd(e,t){const n=new Set(t),s=[];for(const i of e){if(!(Array.isArray(i.commands)?i.commands:[]).some(d=>n.has(String(d))))continue;const l=typeof i.nodeId=="string"?i.nodeId.trim():"";if(!l)continue;const r=typeof i.displayName=="string"&&i.displayName.trim()?i.displayName.trim():l;s.push({id:l,label:r===l?l:`${r} · ${l}`})}return s.sort((i,o)=>i.label.localeCompare(o.label)),s}const wt="__defaults__",$l=[{value:"deny",label:"Deny"},{value:"allowlist",label:"Allowlist"},{value:"full",label:"Full"}],Bx=[{value:"off",label:"Off"},{value:"on-miss",label:"On miss"},{value:"always",label:"Always"}];function wl(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function Hx(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function zx(e){const t=e?.defaults??{};return{security:wl(t.security),ask:Hx(t.ask),askFallback:wl(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function jx(e){return Jd(e).map(t=>({id:t.id,name:t.name,isDefault:t.isDefault}))}function Kx(e,t){const n=jx(e),s=Object.keys(t?.agents??{}),i=new Map;n.forEach(a=>i.set(a.id,a)),s.forEach(a=>{i.has(a)||i.set(a,{id:a})});const o=Array.from(i.values());return o.length===0&&o.push({id:"main",isDefault:!0}),o.sort((a,l)=>{if(a.isDefault&&!l.isDefault)return-1;if(!a.isDefault&&l.isDefault)return 1;const r=a.name?.trim()?a.name:a.id,d=l.name?.trim()?l.name:l.id;return r.localeCompare(d)}),o}function qx(e,t){return e===wt?wt:e&&t.some(n=>n.id===e)?e:wt}function Wx(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=zx(t),i=Kx(e.configForm,t),o=Zx(e.nodes),a=e.execApprovalsTarget;let l=a==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;a==="node"&&l&&!o.some(u=>u.id===l)&&(l=null);const r=qx(e.execApprovalsSelectedAgent,i),d=r!==wt?(t?.agents??{})[r]??null:null,g=Array.isArray(d?.allowlist)?d.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:r,selectedAgent:d,agents:i,allowlist:g,target:a,targetNodeId:l,targetNodes:o,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function Gx(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Exec approvals</div>
          <div class="card-sub">
            Allowlist and approval policy for <span class="mono">exec host=gateway/node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?"Saving…":"Save"}
        </button>
      </div>

      ${Jx(e)}

      ${t?c`
            ${Vx(e)}
            ${Qx(e)}
            ${e.selectedScope===wt?f:Yx(e)}
          `:c`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">Load exec approvals to edit allowlists.</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?"Loading…":"Load approvals"}
            </button>
          </div>`}
    </section>
  `}function Jx(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return c`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Target</div>
          <div class="list-sub">
            Gateway edits local approvals; node edits the selected node.
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Host</span>
            <select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const a=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||a)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>Gateway</option>
              <option value="node" ?selected=${e.target==="node"}>Node</option>
            </select>
          </label>
          ${e.target==="node"?c`
                <label class="field">
                  <span>Node</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const o=s.target.value.trim();e.onSelectTarget("node",o||null)}}
                  >
                    <option value="" ?selected=${n===""}>Select node</option>
                    ${e.targetNodes.map(s=>c`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select>
                </label>
              `:f}
        </div>
      </div>
      ${e.target==="node"&&!t?c`
              <div class="muted">No nodes advertise exec approvals yet.</div>
            `:f}
    </div>
  `}function Vx(e){return c`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">Scope</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===wt?"active":""}"
          @click=${()=>e.onSelectScope(wt)}
        >
          Defaults
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return c`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function Qx(e){const t=e.selectedScope===wt,n=e.defaults,s=e.selectedAgent??{},i=t?["defaults"]:["agents",e.selectedScope],o=typeof s.security=="string"?s.security:void 0,a=typeof s.ask=="string"?s.ask:void 0,l=typeof s.askFallback=="string"?s.askFallback:void 0,r=t?n.security:o??"__default__",d=t?n.ask:a??"__default__",g=t?n.askFallback:l??"__default__",u=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,m=u??n.autoAllowSkills,h=u==null;return c`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Security</div>
          <div class="list-sub">
            ${t?"Default security mode.":`Default: ${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Mode</span>
            <select
              ?disabled=${e.disabled}
              @change=${b=>{const T=b.target.value;!t&&T==="__default__"?e.onRemove([...i,"security"]):e.onPatch([...i,"security"],T)}}
            >
              ${t?f:c`<option value="__default__" ?selected=${r==="__default__"}>
                    Use default (${n.security})
                  </option>`}
              ${$l.map(b=>c`<option
                    value=${b.value}
                    ?selected=${r===b.value}
                  >
                    ${b.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Ask</div>
          <div class="list-sub">
            ${t?"Default prompt policy.":`Default: ${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Mode</span>
            <select
              ?disabled=${e.disabled}
              @change=${b=>{const T=b.target.value;!t&&T==="__default__"?e.onRemove([...i,"ask"]):e.onPatch([...i,"ask"],T)}}
            >
              ${t?f:c`<option value="__default__" ?selected=${d==="__default__"}>
                    Use default (${n.ask})
                  </option>`}
              ${Bx.map(b=>c`<option
                    value=${b.value}
                    ?selected=${d===b.value}
                  >
                    ${b.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Ask fallback</div>
          <div class="list-sub">
            ${t?"Applied when the UI prompt is unavailable.":`Default: ${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Fallback</span>
            <select
              ?disabled=${e.disabled}
              @change=${b=>{const T=b.target.value;!t&&T==="__default__"?e.onRemove([...i,"askFallback"]):e.onPatch([...i,"askFallback"],T)}}
            >
              ${t?f:c`<option value="__default__" ?selected=${g==="__default__"}>
                    Use default (${n.askFallback})
                  </option>`}
              ${$l.map(b=>c`<option
                    value=${b.value}
                    ?selected=${g===b.value}
                  >
                    ${b.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Auto-allow skill CLIs</div>
          <div class="list-sub">
            ${t?"Allow skill executables listed by the Gateway.":h?`Using default (${n.autoAllowSkills?"on":"off"}).`:`Override (${m?"on":"off"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Enabled</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${m}
              @change=${b=>{const k=b.target;e.onPatch([...i,"autoAllowSkills"],k.checked)}}
            />
          </label>
          ${!t&&!h?c`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...i,"autoAllowSkills"])}
              >
                Use default
              </button>`:f}
        </div>
      </div>
    </div>
  `}function Yx(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return c`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">Allowlist</div>
        <div class="card-sub">Case-insensitive glob patterns.</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        Add pattern
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?c`
              <div class="muted">No allowlist entries yet.</div>
            `:n.map((s,i)=>Xx(e,s,i))}
    </div>
  `}function Xx(e,t,n){const s=t.lastUsedAt?se(t.lastUsedAt):"never",i=t.lastUsedCommand?Vi(t.lastUsedCommand,120):null,o=t.lastResolvedPath?Vi(t.lastResolvedPath,120):null;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:"New pattern"}</div>
        <div class="list-sub">Last used: ${s}</div>
        ${i?c`<div class="list-sub mono">${i}</div>`:f}
        ${o?c`<div class="list-sub mono">${o}</div>`:f}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>Pattern</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${a=>{const l=a.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],l.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          Remove
        </button>
      </div>
    </div>
  `}function Zx(e){return Vd(e,["system.execApprovals.get","system.execApprovals.set"])}function e$(e){const t=o$(e),n=Wx(e);return c`
    ${Gx(n)}
    ${a$(t)}
    ${t$(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Nodes</div>
          <div class="card-sub">Paired devices and live links.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?c`
                <div class="muted">No nodes found.</div>
              `:e.nodes.map(s=>d$(s))}
      </div>
    </section>
  `}function t$(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Devices</div>
          <div class="card-sub">Pairing requests + role tokens.</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${e.devicesError?c`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:f}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?c`
              <div class="muted" style="margin-bottom: 8px;">Pending</div>
              ${n.map(i=>n$(i,e))}
            `:f}
        ${s.length>0?c`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">Paired</div>
              ${s.map(i=>s$(i,e))}
            `:f}
        ${n.length===0&&s.length===0?c`
                <div class="muted">No paired devices.</div>
              `:f}
      </div>
    </section>
  `}function n$(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?se(e.ts):"n/a",i=e.role?.trim()?`role: ${e.role}`:"role: -",o=e.isRepair?" · repair":"",a=e.remoteIp?` · ${e.remoteIp}`:"";return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${a}</div>
        <div class="muted" style="margin-top: 6px;">
          ${i} · requested ${s}${o}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            Approve
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            Reject
          </button>
        </div>
      </div>
    </div>
  `}function s$(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",i=`roles: ${Ji(e.roles)}`,o=`scopes: ${Ji(e.scopes)}`,a=Array.isArray(e.tokens)?e.tokens:[];return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${i} · ${o}</div>
        ${a.length===0?c`
                <div class="muted" style="margin-top: 6px">Tokens: none</div>
              `:c`
              <div class="muted" style="margin-top: 10px;">Tokens</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${a.map(l=>i$(e.deviceId,l,t))}
              </div>
            `}
      </div>
    </div>
  `}function i$(e,t,n){const s=t.revokedAtMs?"revoked":"active",i=`scopes: ${Ji(t.scopes)}`,o=se(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return c`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${i} · ${o}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          Rotate
        </button>
        ${t.revokedAtMs?f:c`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}
              >
                Revoke
              </button>
            `}
      </div>
    </div>
  `}function o$(e){const t=e.configForm,n=l$(e.nodes),{defaultBinding:s,agents:i}=c$(t),o=!!t,a=e.configSaving||e.configFormMode==="raw";return{ready:o,disabled:a,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:i,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function a$(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return c`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Exec node binding</div>
          <div class="card-sub">
            Pin agents to a specific node when using <span class="mono">exec host=node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?"Saving…":"Save"}
        </button>
      </div>

      ${e.formMode==="raw"?c`
              <div class="callout warn" style="margin-top: 12px">
                Switch the Config tab to <strong>Form</strong> mode to edit bindings here.
              </div>
            `:f}

      ${e.ready?c`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">Default binding</div>
                  <div class="list-sub">Used when agents do not override a node binding.</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>Node</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const o=s.target.value.trim();e.onBindDefault(o||null)}}
                    >
                      <option value="" ?selected=${n===""}>Any node</option>
                      ${e.nodes.map(s=>c`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?f:c`
                          <div class="muted">No nodes with system.run available.</div>
                        `}
                </div>
              </div>

              ${e.agents.length===0?c`
                      <div class="muted">No agents found.</div>
                    `:e.agents.map(s=>r$(s,e))}
            </div>
          `:c`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">Load config to edit bindings.</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?"Loading…":"Load config"}
            </button>
          </div>`}
    </section>
  `}function r$(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,i=t.nodes.length>0;return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?"default agent":"agent"} ·
          ${n==="__default__"?`uses default (${t.defaultBinding??"any"})`:`override: ${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>Binding</span>
          <select
            ?disabled=${t.disabled||!i}
            @change=${o=>{const l=o.target.value.trim();t.onBindAgent(e.index,l==="__default__"?null:l)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              Use default
            </option>
            ${t.nodes.map(o=>c`<option
                  value=${o.id}
                  ?selected=${n===o.id}
                >
                  ${o.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function l$(e){return Vd(e,["system.run"])}function c$(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},i=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,o=e.agents??{};if(!Array.isArray(o.list)||o.list.length===0)return{defaultBinding:i,agents:[t]};const a=Jd(e).map(l=>{const d=(l.record.tools??{}).exec??{},g=typeof d.node=="string"&&d.node.trim()?d.node.trim():null;return{id:l.id,name:l.name,index:l.index,isDefault:l.isDefault,binding:g}});return a.length===0&&a.push(t),{defaultBinding:i,agents:a}}function d$(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"unknown"),i=Array.isArray(e.caps)?e.caps:[],o=Array.isArray(e.commands)?e.commands:[];return c`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${n?"paired":"unpaired"}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${t?"connected":"offline"}
          </span>
          ${i.slice(0,12).map(a=>c`<span class="chip">${String(a)}</span>`)}
          ${o.slice(0,8).map(a=>c`<span class="chip">${String(a)}</span>`)}
        </div>
      </div>
    </div>
  `}const kl=["noopener","noreferrer"],Fn="_blank";function Nn(e){const t=[],n=new Set(kl);for(const s of"".split(/\s+/)){const i=s.trim().toLowerCase();!i||n.has(i)||(n.add(i),t.push(i))}return[...kl,...t].join(" ")}function u$(e,t,n){return e||!t?!1:n===xe.PAIRING_REQUIRED?!0:t.toLowerCase().includes("pairing required")}function g$(e){const t=e.hello?.snapshot,n=t?.uptimeMs?Do(t.uptimeMs):v("common.na"),s=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:v("common.na"),o=t?.authMode==="trusted-proxy",a=u$(e.connected,e.lastError,e.lastErrorCode)?c`
      <div class="muted" style="margin-top: 8px">
        ${v("overview.pairing.hint")}
        <div style="margin-top: 6px">
          <span class="mono">openclaw devices list</span><br />
          <span class="mono">openclaw devices approve &lt;requestId&gt;</span>
        </div>
        <div style="margin-top: 6px; font-size: 12px;">
          ${v("overview.pairing.mobileHint")}
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#device-pairing-first-connection"
            target=${Fn}
            rel=${Nn()}
            title="Device pairing docs (opens in new tab)"
            >Docs: Device pairing</a
          >
        </div>
      </div>
    `:null,l=(()=>{if(e.connected||!e.lastError)return null;const g=e.lastError.toLowerCase(),u=new Set([xe.AUTH_REQUIRED,xe.AUTH_TOKEN_MISSING,xe.AUTH_PASSWORD_MISSING,xe.AUTH_TOKEN_NOT_CONFIGURED,xe.AUTH_PASSWORD_NOT_CONFIGURED]),m=new Set([...u,xe.AUTH_UNAUTHORIZED,xe.AUTH_TOKEN_MISMATCH,xe.AUTH_PASSWORD_MISMATCH,xe.AUTH_DEVICE_TOKEN_MISMATCH,xe.AUTH_RATE_LIMITED,xe.AUTH_TAILSCALE_IDENTITY_MISSING,xe.AUTH_TAILSCALE_PROXY_MISSING,xe.AUTH_TAILSCALE_WHOIS_FAILED,xe.AUTH_TAILSCALE_IDENTITY_MISMATCH]);if(!(e.lastErrorCode?m.has(e.lastErrorCode):g.includes("unauthorized")||g.includes("connect failed")))return null;const b=!!e.settings.token.trim(),k=!!e.password.trim();return(e.lastErrorCode?u.has(e.lastErrorCode):!b&&!k)?c`
        <div class="muted" style="margin-top: 8px">
          ${v("overview.auth.required")}
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> → tokenized URL<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target=${Fn}
              rel=${Nn()}
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:c`
      <div class="muted" style="margin-top: 8px">
        ${v("overview.auth.failed",{command:"openclaw dashboard --no-open"})}
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target=${Fn}
            rel=${Nn()}
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),r=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0))return null;const u=e.lastError.toLowerCase();return!(e.lastErrorCode===xe.CONTROL_UI_DEVICE_IDENTITY_REQUIRED||e.lastErrorCode===xe.DEVICE_IDENTITY_REQUIRED)&&!u.includes("secure context")&&!u.includes("device identity required")?null:c`
      <div class="muted" style="margin-top: 8px">
        ${v("overview.insecure.hint",{url:"http://127.0.0.1:18789"})}
        <div style="margin-top: 6px">
          ${v("overview.insecure.stayHttp",{config:"gateway.controlUi.allowInsecureAuth: true"})}
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target=${Fn}
            rel=${Nn()}
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target=${Fn}
            rel=${Nn()}
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `})(),d=Qn.getLocale();return c`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${v("overview.access.title")}</div>
        <div class="card-sub">${v("overview.access.subtitle")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${v("overview.access.wsUrl")}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${g=>{const u=g.target.value;e.onSettingsChange({...e.settings,gatewayUrl:u})}}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          ${o?"":c`
                <label class="field">
                  <span>${v("overview.access.token")}</span>
                  <input
                    .value=${e.settings.token}
                    @input=${g=>{const u=g.target.value;e.onSettingsChange({...e.settings,token:u})}}
                    placeholder="OPENCLAW_GATEWAY_TOKEN"
                  />
                </label>
                <label class="field">
                  <span>${v("overview.access.password")}</span>
                  <input
                    type="password"
                    .value=${e.password}
                    @input=${g=>{const u=g.target.value;e.onPasswordChange(u)}}
                    placeholder="system or shared password"
                  />
                </label>
              `}
          <label class="field">
            <span>${v("overview.access.sessionKey")}</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${g=>{const u=g.target.value;e.onSessionKeyChange(u)}}
            />
          </label>
          <label class="field">
            <span>${v("overview.access.language")}</span>
            <select
              .value=${d}
              @change=${g=>{const u=g.target.value;Qn.setLocale(u),e.onSettingsChange({...e.settings,locale:u})}}
            >
              ${Fl.map(g=>{const u=g.replace(/-([a-zA-Z])/g,(m,h)=>h.toUpperCase());return c`<option value=${g}>${v(`languages.${u}`)}</option>`})}
            </select>
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>${v("common.connect")}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${v("common.refresh")}</button>
          <span class="muted">${v(o?"overview.access.trustedProxy":"overview.access.connectHint")}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${v("overview.snapshot.title")}</div>
        <div class="card-sub">${v("overview.snapshot.subtitle")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${v("overview.snapshot.status")}</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?v("common.ok"):v("common.offline")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${v("overview.snapshot.uptime")}</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${v("overview.snapshot.tickInterval")}</div>
            <div class="stat-value">${s}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${v("overview.snapshot.lastChannelsRefresh")}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?se(e.lastChannelsRefresh):v("common.na")}
            </div>
          </div>
        </div>
        ${e.lastError?c`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${a??""}
              ${l??""}
              ${r??""}
            </div>`:c`
                <div class="callout" style="margin-top: 14px">
                  ${v("overview.snapshot.channelsHint")}
                </div>
              `}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">${v("overview.stats.instances")}</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">${v("overview.stats.instancesHint")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${v("overview.stats.sessions")}</div>
        <div class="stat-value">${e.sessionsCount??v("common.na")}</div>
        <div class="muted">${v("overview.stats.sessionsHint")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${v("overview.stats.cron")}</div>
        <div class="stat-value">
          ${e.cronEnabled==null?v("common.na"):e.cronEnabled?v("common.enabled"):v("common.disabled")}
        </div>
        <div class="muted">${v("overview.stats.cronNext",{time:na(e.cronNext)})}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${v("overview.notes.title")}</div>
      <div class="card-sub">${v("overview.notes.subtitle")}</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">${v("overview.notes.tailscaleTitle")}</div>
          <div class="muted">
            ${v("overview.notes.tailscaleText")}
          </div>
        </div>
        <div>
          <div class="note-title">${v("overview.notes.sessionTitle")}</div>
          <div class="muted">${v("overview.notes.sessionText")}</div>
        </div>
        <div>
          <div class="note-title">${v("overview.notes.cronTitle")}</div>
          <div class="muted">${v("overview.notes.cronText")}</div>
        </div>
      </div>
    </section>
  `}const p$=["","off","minimal","low","medium","high","xhigh"],f$=["","off","on"],h$=[{value:"",label:"inherit"},{value:"off",label:"off (explicit)"},{value:"on",label:"on"},{value:"full",label:"full"}],m$=["","off","on","stream"];function v$(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function Qd(e){return v$(e)==="zai"}function b$(e){return Qd(e)?f$:p$}function Sl(e,t){return t?e.includes(t)?[...e]:[...e,t]:[...e]}function y$(e,t){return t?e.some(n=>n.value===t)?[...e]:[...e,{value:t,label:`${t} (custom)`}]:[...e]}function x$(e,t){return!t||!e||e==="off"?e:"on"}function $$(e,t){return e?t&&e==="on"?"low":e:null}function w$(e){const t=e.result?.sessions??[];return c`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Sessions</div>
          <div class="card-sub">Active session keys and per-session overrides.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>Active within (minutes)</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>Limit</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>Include global</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>Include unknown</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.error?c`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:f}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`Store: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          <div>Key</div>
          <div>Label</div>
          <div>Kind</div>
          <div>Updated</div>
          <div>Tokens</div>
          <div>Thinking</div>
          <div>Verbose</div>
          <div>Reasoning</div>
          <div>Actions</div>
        </div>
        ${t.length===0?c`
                <div class="muted">No sessions found.</div>
              `:t.map(n=>k$(n,e.basePath,e.onPatch,e.onDelete,e.loading))}
      </div>
    </section>
  `}function k$(e,t,n,s,i){const o=e.updatedAt?se(e.updatedAt):"n/a",a=e.thinkingLevel??"",l=Qd(e.modelProvider),r=x$(a,l),d=Sl(b$(e.modelProvider),r),g=e.verboseLevel??"",u=y$(h$,g),m=e.reasoningLevel??"",h=Sl(m$,m),b=typeof e.displayName=="string"&&e.displayName.trim().length>0?e.displayName.trim():null,k=typeof e.label=="string"?e.label.trim():"",T=!!(b&&b!==e.key&&b!==k),I=e.kind!=="global",R=I?`${Wo("chat",t)}?session=${encodeURIComponent(e.key)}`:null;return c`
    <div class="table-row">
      <div class="mono session-key-cell">
        ${I?c`<a href=${R} class="session-link">${e.key}</a>`:e.key}
        ${T?c`<span class="muted session-key-display-name">${b}</span>`:f}
      </div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${i}
          placeholder="(optional)"
          @change=${A=>{const w=A.target.value.trim();n(e.key,{label:w||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${o}</div>
      <div>${lv(e)}</div>
      <div>
        <select
          ?disabled=${i}
          @change=${A=>{const w=A.target.value;n(e.key,{thinkingLevel:$$(w,l)})}}
        >
          ${d.map(A=>c`<option value=${A} ?selected=${r===A}>
                ${A||"inherit"}
              </option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${i}
          @change=${A=>{const w=A.target.value;n(e.key,{verboseLevel:w||null})}}
        >
          ${u.map(A=>c`<option value=${A.value} ?selected=${g===A.value}>
                ${A.label}
              </option>`)}
        </select>
      </div>
      <div>
        <select
          ?disabled=${i}
          @change=${A=>{const w=A.target.value;n(e.key,{reasoningLevel:w||null})}}
        >
          ${h.map(A=>c`<option value=${A} ?selected=${m===A}>
                ${A||"inherit"}
              </option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${i} @click=${()=>s(e.key)}>
          Delete
        </button>
      </div>
    </div>
  `}function S$(e){const t=e.report?.skills??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(a=>[a.name,a.description,a.source].join(" ").toLowerCase().includes(n)):t,i=s.filter(a=>a.bundled||a.source==="openclaw-bundled"),o=s.filter(a=>!a.bundled&&a.source!=="openclaw-bundled");return c`
    <div class="skill-center-layout">
      <!-- 左侧主区域 -->
      <div class="skill-center-main">
        ${e.selectedSkill?C$(e):A$()}
      </div>

      <!-- 右侧Skill列表 -->
      <aside class="skill-center-sidebar">
        <div class="skill-sidebar-header">
          <div class="skill-sidebar-title">Skill 列表</div>
          <button 
            class="btn btn--sm" 
            ?disabled=${e.loading} 
            @click=${e.onRefresh}
            title="刷新"
          >
            ${e.loading?"⟳":"↻"}
          </button>
        </div>

        <div class="skill-sidebar-filter">
          <input
            class="skill-filter-input"
            .value=${e.filter}
            @input=${a=>e.onFilterChange(a.target.value)}
            placeholder="搜索 Skill..."
          />
        </div>

        ${e.error?c`<div class="callout danger" style="margin: 12px;">${e.error}</div>`:f}

        <div class="skill-sidebar-content">
          <!-- 默认 Skill -->
          ${i.length>0?c`
                <div class="skill-category">
                  <div class="skill-category-header">
                    <span class="skill-category-title">默认 Skill</span>
                    <span class="skill-category-count">${i.length}</span>
                  </div>
                  <div class="skill-list">
                    ${i.map(a=>Al(a,e))}
                  </div>
                </div>
              `:f}

          <!-- 我的 Skill -->
          ${o.length>0?c`
                <div class="skill-category">
                  <div class="skill-category-header">
                    <span class="skill-category-title">我的 Skill</span>
                    <span class="skill-category-count">${o.length}</span>
                  </div>
                  <div class="skill-list">
                    ${o.map(a=>Al(a,e))}
                  </div>
                </div>
              `:f}

          ${s.length===0?c`<div class="skill-empty">未找到 Skill</div>`:f}
        </div>
      </aside>
    </div>
  `}function A$(){return c`
    <div class="skill-center-welcome">
      <div class="skill-welcome-icon">🎯</div>
      <div class="skill-welcome-title">开始你的技能分析</div>
      <div class="skill-welcome-desc">
        从右侧选择一个或多个 Skill，系统将按照对应的专业分析框架为你生成报告
      </div>
      <div class="skill-welcome-hint">
        选择 Skill，然后输入问题 →
      </div>
    </div>
  `}function C$(e){const t=e.selectedSkill,n=e.busyKey===t.skillKey,s=sa(t),i=ud(t);return c`
    <div class="skill-execution-panel">
      <div class="skill-execution-header">
        <button 
          class="btn btn--ghost btn--sm" 
          @click=${()=>e.onSkillSelect(null)}
        >
          ← 返回
        </button>
        <div class="skill-execution-title">
          ${t.emoji?`${t.emoji} `:""}${t.name}
        </div>
        <div class="skill-execution-badge ${t.disabled?"disabled":"enabled"}">
          ${t.disabled?"已禁用":"已启用"}
        </div>
      </div>

      <div class="skill-execution-body">
        <div class="skill-info-card">
          <div class="skill-info-desc">${t.description}</div>
          ${gd({skill:t,showBundledBadge:!1})}
          ${s.length>0?c`
                <div class="skill-info-missing">
                  <strong>缺少依赖:</strong> ${s.join(", ")}
                </div>
              `:f}
          ${i.length>0?c`
                <div class="skill-info-reasons">
                  <strong>状态:</strong> ${i.join(", ")}
                </div>
              `:f}
        </div>

        <div class="skill-query-section">
          <div class="skill-query-label">输入你的问题</div>
          <textarea
            class="skill-query-input"
            .value=${e.queryText}
            @input=${o=>e.onQueryChange(o.target.value)}
            placeholder="请输入你想让 Skill 分析的问题..."
            rows="4"
            ?disabled=${n||t.disabled}
          ></textarea>
          <button
            class="btn btn--primary skill-query-submit"
            ?disabled=${n||t.disabled||!e.queryText.trim()}
            @click=${e.onQuerySubmit}
          >
            ${n?"执行中...":"执行 Skill"}
          </button>
        </div>

        ${e.messages[t.skillKey]?c`
              <div class="skill-message ${e.messages[t.skillKey].kind}">
                ${e.messages[t.skillKey].message}
              </div>
            `:f}
      </div>
    </div>
  `}function Al(e,t){const n=t.selectedSkill?.skillKey===e.skillKey,s=sa(e);return c`
    <div 
      class="skill-list-item ${n?"selected":""} ${e.disabled?"disabled":""}"
      @click=${()=>t.onSkillSelect(e)}
    >
      <div class="skill-item-header">
        <span class="skill-item-emoji">${e.emoji||"🔧"}</span>
        <span class="skill-item-name">${e.name}</span>
        ${e.disabled?c`<span class="skill-item-badge disabled">禁用</span>`:f}
        ${s.length>0?c`<span class="skill-item-badge missing">缺依赖</span>`:f}
      </div>
      <div class="skill-item-desc">${Vi(e.description,60)}</div>
    </div>
  `}const T$=/^data:/i,_$=/^https?:\/\//i,E$=["off","minimal","low","medium","high"],R$=["UTC","America/Los_Angeles","America/Denver","America/Chicago","America/New_York","Europe/London","Europe/Berlin","Asia/Tokyo"];function I$(e){return/^https?:\/\//i.test(e.trim())}function ji(e){return typeof e=="string"?e.trim():""}function Cl(e){const t=new Set,n=[];for(const s of e){const i=s.trim();if(!i)continue;const o=i.toLowerCase();t.has(o)||(t.add(o),n.push(i))}return n}function L$(e){const t=e.agentsList?.agents??[],s=Eo(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",o=t.find(l=>l.id===s)?.identity,a=o?.avatarUrl??o?.avatar;if(a)return T$.test(a)||_$.test(a)?a:o?.avatarUrl}function M$(e){typeof e.hello?.server?.version=="string"&&e.hello.server.version.trim()||e.updateAvailable?.currentVersion||v("common.na");const t=e.updateAvailable&&e.updateAvailable.latestVersion!==e.updateAvailable.currentVersion?e.updateAvailable:null,n=e.presenceEntries.length,s=e.sessionsResult?.count??null,i=e.cronStatus?.nextWakeAtMs??null,o=e.connected?null:v("chat.disconnected"),a=e.tab==="chat",l=a&&(e.settings.chatFocusMode||e.onboarding),r=e.onboarding?!1:e.settings.chatShowThinking,d=L$(e),g=e.chatAvatarUrl??d??null,u=e.configForm??e.configSnapshot?.config,m=tn(e.basePath??""),h=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null,b=ao(new Set([...e.agentsList?.agents?.map(p=>p.id.trim())??[],...e.cronJobs.map(p=>typeof p.agentId=="string"?p.agentId.trim():"").filter(Boolean)].filter(Boolean))),k=ao(new Set([...e.cronModelSuggestions,...Zm(u),...e.cronJobs.map(p=>p.payload.kind!=="agentTurn"||typeof p.payload.model!="string"?"":p.payload.model.trim()).filter(Boolean)].filter(Boolean))),T=mg(e),I=e.cronForm.deliveryChannel&&e.cronForm.deliveryChannel.trim()?e.cronForm.deliveryChannel.trim():"last",R=e.cronJobs.map(p=>ji(p.delivery?.to)).filter(Boolean),A=(I==="last"?Object.values(e.channelsSnapshot?.channelAccounts??{}).flat():e.channelsSnapshot?.channelAccounts?.[I]??[]).flatMap(p=>[ji(p.accountId),ji(p.name)]).filter(Boolean),w=Cl([...R,...A]),L=Cl(A),C=e.cronForm.deliveryMode==="webhook"?w.filter(p=>I$(p)):w;return c`
    <div class="shell ${a?"shell--chat":""} ${l?"shell--chat-focus":""} shell--nav-collapsed ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <div class="brand">
            <div class="brand-logo">
              <img src=${m?`${m}/logo.png`:"/logo.png"} alt="算力作战" />
            </div>
            <div class="brand-text">
              <div class="brand-title">算力作战Skill中心</div>
              <div class="brand-sub">智能技能调度平台</div>
            </div>
          </div>
        </div>
        <div class="topbar-status">
          ${D$(e)}
          ${Im(e)}
        </div>
      </header>
      <main class="content ${a?"content--chat":""}">
        ${t?c`<div class="update-banner callout danger" role="alert">
              <strong>Update available:</strong> v${t.latestVersion}
              (running v${t.currentVersion}).
              <button
                class="btn btn--sm update-banner__btn"
                ?disabled=${e.updateRunning||!e.connected}
                @click=${()=>Ga(e)}
              >${e.updateRunning?"Updating…":"Update now"}</button>
            </div>`:f}
        ${e.tab==="overview"?g$({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,lastErrorCode:e.lastErrorCode,presenceCount:n,sessionsCount:s,cronEnabled:e.cronStatus?.enabled??null,cronNext:i,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:p=>e.applySettings(p),onPasswordChange:p=>e.password=p,onSessionKeyChange:p=>{e.sessionKey=p,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:p,lastActiveSessionKey:p}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):f}

        ${e.tab==="channels"?lb({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:p=>Re(e,p),onWhatsAppStart:p=>e.handleWhatsAppStart(p),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(p,_)=>Le(e,p,_),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(p,_)=>e.handleNostrProfileEdit(p,_),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(p,_)=>e.handleNostrProfileFieldChange(p,_),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):f}

        ${e.tab==="instances"?Px({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>qo(e)}):f}

        ${e.tab==="sessions"?w$({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,onFiltersChange:p=>{e.sessionsFilterActive=p.activeMinutes,e.sessionsFilterLimit=p.limit,e.sessionsIncludeGlobal=p.includeGlobal,e.sessionsIncludeUnknown=p.includeUnknown},onRefresh:()=>en(e),onPatch:(p,_)=>bp(e,p,_),onDelete:p=>xp(e,p)}):f}

        ${km(e)}

        ${e.tab==="cron"?wx({basePath:e.basePath,loading:e.cronLoading,jobsLoadingMore:e.cronJobsLoadingMore,status:e.cronStatus,jobs:T,jobsTotal:e.cronJobsTotal,jobsHasMore:e.cronJobsHasMore,jobsQuery:e.cronJobsQuery,jobsEnabledFilter:e.cronJobsEnabledFilter,jobsScheduleKindFilter:e.cronJobsScheduleKindFilter,jobsLastStatusFilter:e.cronJobsLastStatusFilter,jobsSortBy:e.cronJobsSortBy,jobsSortDir:e.cronJobsSortDir,error:e.cronError,busy:e.cronBusy,form:e.cronForm,fieldErrors:e.cronFieldErrors,canSubmit:!Ql(e.cronFieldErrors),editingJobId:e.cronEditingJobId,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(p=>p.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,runsTotal:e.cronRunsTotal,runsHasMore:e.cronRunsHasMore,runsLoadingMore:e.cronRunsLoadingMore,runsScope:e.cronRunsScope,runsStatuses:e.cronRunsStatuses,runsDeliveryStatuses:e.cronRunsDeliveryStatuses,runsStatusFilter:e.cronRunsStatusFilter,runsQuery:e.cronRunsQuery,runsSortDir:e.cronRunsSortDir,agentSuggestions:b,modelSuggestions:k,thinkingSuggestions:E$,timezoneSuggestions:R$,deliveryToSuggestions:C,accountSuggestions:L,onFormChange:p=>{e.cronForm=Po({...e.cronForm,...p}),e.cronFieldErrors=os(e.cronForm)},onRefresh:()=>e.loadCron(),onAdd:()=>kg(e),onEdit:p=>_g(e,p),onClone:p=>Rg(e,p),onCancelEdit:()=>Ig(e),onToggle:(p,_)=>Sg(e,p,_),onRun:(p,_)=>Ag(e,p,_??"force"),onRemove:p=>Cg(e,p),onLoadRuns:async p=>{Xa(e,{cronRunsScope:"job"}),await xt(e,p)},onLoadMoreJobs:()=>hg(e),onJobsFiltersChange:async p=>{Ya(e,p),(typeof p.cronJobsQuery=="string"||p.cronJobsEnabledFilter||p.cronJobsSortBy||p.cronJobsSortDir)&&await Qa(e)},onJobsFiltersReset:async()=>{Ya(e,{cronJobsQuery:"",cronJobsEnabledFilter:"all",cronJobsScheduleKindFilter:"all",cronJobsLastStatusFilter:"all",cronJobsSortBy:"nextRunAtMs",cronJobsSortDir:"asc"}),await Qa(e)},onLoadMoreRuns:()=>Tg(e),onRunsFiltersChange:async p=>{if(Xa(e,p),e.cronRunsScope==="all"){await xt(e,null);return}await xt(e,e.cronRunsJobId)}}):f}

        ${e.tab==="agents"?Cv({loading:e.agentsLoading,error:e.agentsError,agentsList:e.agentsList,selectedAgentId:h,activePanel:e.agentsPanel,configForm:u,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,channelsLoading:e.channelsLoading,channelsError:e.channelsError,channelsSnapshot:e.channelsSnapshot,channelsLastSuccess:e.channelsLastSuccess,cronLoading:e.cronLoading,cronStatus:e.cronStatus,cronJobs:e.cronJobs,cronError:e.cronError,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFilesList:e.agentFilesList,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,agentIdentityLoading:e.agentIdentityLoading,agentIdentityError:e.agentIdentityError,agentIdentityById:e.agentIdentityById,agentSkillsLoading:e.agentSkillsLoading,agentSkillsReport:e.agentSkillsReport,agentSkillsError:e.agentSkillsError,agentSkillsAgentId:e.agentSkillsAgentId,toolsCatalogLoading:e.toolsCatalogLoading,toolsCatalogError:e.toolsCatalogError,toolsCatalogResult:e.toolsCatalogResult,skillsFilter:e.skillsFilter,onRefresh:async()=>{await Io(e);const p=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null;await zn(e,p);const _=e.agentsList?.agents?.map(F=>F.id)??[];_.length>0&&jl(e,_)},onSelectAgent:p=>{e.agentsSelectedId!==p&&(e.agentsSelectedId=p,e.agentFilesList=null,e.agentFilesError=null,e.agentFilesLoading=!1,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},e.agentSkillsReport=null,e.agentSkillsError=null,e.agentSkillsAgentId=null,zl(e,p),e.agentsPanel==="tools"&&zn(e,p),e.agentsPanel==="files"&&Ii(e,p),e.agentsPanel==="skills"&&Un(e,p))},onSelectPanel:p=>{e.agentsPanel=p,p==="files"&&h&&e.agentFilesList?.agentId!==h&&(e.agentFilesList=null,e.agentFilesError=null,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},Ii(e,h)),p==="tools"&&zn(e,h),p==="skills"&&h&&Un(e,h),p==="channels"&&Re(e,!1),p==="cron"&&e.loadCron()},onLoadFiles:p=>Ii(e,p),onSelectFile:p=>{e.agentFileActive=p,h&&Pm(e,h,p)},onFileDraftChange:(p,_)=>{e.agentFileDrafts={...e.agentFileDrafts,[p]:_}},onFileReset:p=>{const _=e.agentFileContents[p]??"";e.agentFileDrafts={...e.agentFileDrafts,[p]:_}},onFileSave:p=>{if(!h)return;const _=e.agentFileDrafts[p]??e.agentFileContents[p]??"";Fm(e,h,p,_)},onToolsProfileChange:(p,_,F)=>{if(!u)return;const U=u.agents?.list;if(!Array.isArray(U))return;const M=U.findIndex(W=>W&&typeof W=="object"&&"id"in W&&W.id===p);if(M<0)return;const q=["agents","list",M,"tools"];_?Le(e,[...q,"profile"],_):ot(e,[...q,"profile"]),F&&ot(e,[...q,"allow"])},onToolsOverridesChange:(p,_,F)=>{if(!u)return;const U=u.agents?.list;if(!Array.isArray(U))return;const M=U.findIndex(W=>W&&typeof W=="object"&&"id"in W&&W.id===p);if(M<0)return;const q=["agents","list",M,"tools"];_.length>0?Le(e,[...q,"alsoAllow"],_):ot(e,[...q,"alsoAllow"]),F.length>0?Le(e,[...q,"deny"],F):ot(e,[...q,"deny"])},onConfigReload:()=>ze(e),onConfigSave:()=>Cs(e),onChannelsRefresh:()=>Re(e,!1),onCronRefresh:()=>e.loadCron(),onSkillsFilterChange:p=>e.skillsFilter=p,onSkillsRefresh:()=>{h&&Un(e,h)},onAgentSkillToggle:(p,_,F)=>{if(!u)return;const U=u.agents?.list;if(!Array.isArray(U))return;const M=U.findIndex(J=>J&&typeof J=="object"&&"id"in J&&J.id===p);if(M<0)return;const q=U[M],W=_.trim();if(!W)return;const V=e.agentSkillsReport?.skills?.map(J=>J.name).filter(Boolean)??[],j=(Array.isArray(q.skills)?q.skills.map(J=>String(J).trim()).filter(Boolean):void 0)??V,Y=new Set(j);F?Y.add(W):Y.delete(W),Le(e,["agents","list",M,"skills"],[...Y])},onAgentSkillsClear:p=>{if(!u)return;const _=u.agents?.list;if(!Array.isArray(_))return;const F=_.findIndex(U=>U&&typeof U=="object"&&"id"in U&&U.id===p);F<0||ot(e,["agents","list",F,"skills"])},onAgentSkillsDisableAll:p=>{if(!u)return;const _=u.agents?.list;if(!Array.isArray(_))return;const F=_.findIndex(U=>U&&typeof U=="object"&&"id"in U&&U.id===p);F<0||Le(e,["agents","list",F,"skills"],[])},onModelChange:(p,_)=>{if(!u)return;const F=u.agents?.list;if(!Array.isArray(F))return;const U=F.findIndex(V=>V&&typeof V=="object"&&"id"in V&&V.id===p);if(U<0)return;const M=["agents","list",U,"model"];if(!_){ot(e,M);return}const W=F[U]?.model;if(W&&typeof W=="object"&&!Array.isArray(W)){const V=W.fallbacks,E={primary:_,...Array.isArray(V)?{fallbacks:V}:{}};Le(e,M,E)}else Le(e,M,_)},onModelFallbacksChange:(p,_)=>{if(!u)return;const F=u.agents?.list;if(!Array.isArray(F))return;const U=F.findIndex(J=>J&&typeof J=="object"&&"id"in J&&J.id===p);if(U<0)return;const M=["agents","list",U,"model"],q=F[U],W=_.map(J=>J.trim()).filter(Boolean),V=q.model,j=(()=>{if(typeof V=="string")return V.trim()||null;if(V&&typeof V=="object"&&!Array.isArray(V)){const J=V.primary;if(typeof J=="string")return J.trim()||null}return null})();if(W.length===0){j?Le(e,M,j):ot(e,M);return}Le(e,M,j?{primary:j,fallbacks:W}:{fallbacks:W})}}):f}

        ${e.tab==="skills"?S$({loading:e.skillsLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,selectedSkill:e.selectedSkill,queryText:e.skillQueryText,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,onFilterChange:p=>e.skillsFilter=p,onRefresh:()=>Xt(e,{clearMessages:!0}),onSkillSelect:p=>e.selectedSkill=p,onQueryChange:p=>e.skillQueryText=p,onQuerySubmit:()=>{e.selectedSkill&&e.skillQueryText.trim()&&console.log("执行Skill:",e.selectedSkill.name,"查询:",e.skillQueryText)},onToggle:(p,_)=>wp(e,p,_),onEdit:(p,_)=>$p(e,p,_),onSaveKey:p=>kp(e,p),onInstall:(p,_,F)=>Sp(e,p,_,F)}):f}

        ${e.tab==="nodes"?e$({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>Qs(e),onDevicesRefresh:()=>Et(e),onDeviceApprove:p=>lp(e,p),onDeviceReject:p=>cp(e,p),onDeviceRotate:(p,_,F)=>dp(e,{deviceId:p,role:_,scopes:F}),onDeviceRevoke:(p,_)=>up(e,{deviceId:p,role:_}),onLoadConfig:()=>ze(e),onLoadExecApprovals:()=>{const p=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Ko(e,p)},onBindDefault:p=>{p?Le(e,["tools","exec","node"],p):ot(e,["tools","exec","node"])},onBindAgent:(p,_)=>{const F=["agents","list",p,"tools","exec","node"];_?Le(e,F,_):ot(e,F)},onSaveBindings:()=>Cs(e),onExecApprovalsTargetChange:(p,_)=>{e.execApprovalsTarget=p,e.execApprovalsTargetNodeId=_,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:p=>{e.execApprovalsSelectedAgent=p},onExecApprovalsPatch:(p,_)=>mp(e,p,_),onExecApprovalsRemove:p=>vp(e,p),onSaveExecApprovals:()=>{const p=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return hp(e,p)}}):f}

        ${e.tab==="chat"?nx({sessionKey:e.sessionKey,onSessionKeyChange:p=>{e.sessionKey=p,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:p,lastActiveSessionKey:p}),e.loadAssistantIdentity(),Us(e),to(e)},thinkingLevel:e.chatThinkingLevel,showThinking:r,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,fallbackStatus:e.fallbackStatus,assistantAvatarUrl:g,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:o,error:e.lastError,sessions:e.sessionsResult,focusMode:l,onRefresh:()=>(e.resetToolStream(),Xt(e,{clearMessages:!0}),Promise.all([Us(e),to(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:p=>e.handleChatScroll(p),onDraftChange:p=>e.chatMessage=p,attachments:e.chatAttachments,onAttachmentsChange:p=>e.chatAttachments=p,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:p=>e.removeQueuedMessage(p),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow&&!e.chatManualRefreshInFlight,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:p=>e.handleOpenSidebar(p),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:p=>e.handleSplitRatioChange(p),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar,skillsReport:e.skillsReport,skillsFilter:e.skillsFilter,onSkillsFilterChange:p=>e.skillsFilter=p,onSkillSelect:p=>{const _=`@${p.name} `;e.chatMessage=e.chatMessage+_},defaultSkillsExpanded:e.defaultSkillsExpanded,mySkillsExpanded:e.mySkillsExpanded,onToggleDefaultSkills:()=>e.defaultSkillsExpanded=!e.defaultSkillsExpanded,onToggleMySkills:()=>e.mySkillsExpanded=!e.mySkillsExpanded,onSkillsRefresh:async()=>{e.skillsRefreshing=!0,e.skillsReport=null;const p=e.sessionKey;if(p){const _=Eo(p);_?.agentId&&await Un(e,_.agentId,!0)}e.skillsRefreshing=!1},skillsRefreshing:e.skillsRefreshing}):f}

        ${e.tab==="config"?fx({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:p=>{e.configRaw=p},onFormModeChange:p=>e.configFormMode=p,onFormPatch:(p,_)=>Le(e,p,_),onSearchChange:p=>e.configSearchQuery=p,onSectionChange:p=>{e.configActiveSection=p,e.configActiveSubsection=null},onSubsectionChange:p=>e.configActiveSubsection=p,onReload:()=>ze(e),onSave:()=>Cs(e),onApply:()=>ig(e),onUpdate:()=>Ga(e)}):f}

        ${e.tab==="debug"?Ix({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:p=>e.debugCallMethod=p,onCallParamsChange:p=>e.debugCallParams=p,onRefresh:()=>Vs(e),onCall:()=>Ku(e)}):f}

        ${e.tab==="logs"?Ux({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:p=>e.logsFilterText=p,onLevelToggle:(p,_)=>{e.logsLevelFilters={...e.logsLevelFilters,[p]:_}},onToggleAutoFollow:p=>e.logsAutoFollow=p,onRefresh:()=>Ro(e,{reset:!0}),onExport:(p,_)=>e.exportLogs(p,_),onScroll:p=>e.handleLogsScroll(p)}):f}
      </main>
      ${Mx(e)}
      ${Dx(e)}
    </div>
  `}function D$(e){const t=e.currentUser;return t?c`
    <div class="user-info">
      <div class="user-info__avatar">
        ${t.name?.charAt(0).toUpperCase()||t.email.charAt(0).toUpperCase()}
      </div>
      <div class="user-info__details">
        <div class="user-info__name">${t.name||t.email}</div>
        <div class="user-info__email">${t.email}</div>
      </div>
      <button
        class="user-info__logout"
        @click=${()=>Vo(e)}
        title="退出登录"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </button>
    </div>
  `:f}var P$=Object.defineProperty,F$=Object.getOwnPropertyDescriptor,$=(e,t,n,s)=>{for(var i=s>1?void 0:s?F$(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(s?a(t,n,i):a(i))||i);return s&&i&&P$(t,n,i),i};const Ki=Jo({});function N$(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let x=class extends Wt{constructor(){super(),this.i18nController=new Fu(this),this.clientInstanceId=si(),this.settings=Ap(),this.isAuthenticated=!1,this.currentUser=null,this.authError=null,this.authLoading=!1,this.authView="login",this.password="",this.tab="chat",this.onboarding=N$(),this.connected=!1,this.theme=this.settings.theme??"system",this.themeResolved="dark",this.hello=null,this.lastError=null,this.lastErrorCode=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=Ki.name,this.assistantAvatar=Ki.avatar,this.assistantAgentId=Ki.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.fallbackStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatQueue=[],this.chatAttachments=[],this.chatManualRefreshInFlight=!1,this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="form",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.toolsCatalogLoading=!1,this.toolsCatalogError=null,this.toolsCatalogResult=null,this.agentsPanel="overview",this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.sessionsHideCron=!0,this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageEndDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode="tokens",this.usageDailyChartMode="by-type",this.usageTimeSeriesMode="per-turn",this.usageTimeSeriesBreakdownMode="by-type",this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageTimeSeriesCursorStart=null,this.usageTimeSeriesCursorEnd=null,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery="",this.usageQueryDraft="",this.usageSessionSort="recent",this.usageSessionSortDir="desc",this.usageRecentSessions=[],this.usageTimeZone="local",this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab="all",this.usageVisibleColumns=["channel","agent","provider","model","messages","tools","errors","duration"],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery="",this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobsLoadingMore=!1,this.cronJobs=[],this.cronJobsTotal=0,this.cronJobsHasMore=!1,this.cronJobsNextOffset=null,this.cronJobsLimit=50,this.cronJobsQuery="",this.cronJobsEnabledFilter="all",this.cronJobsScheduleKindFilter="all",this.cronJobsLastStatusFilter="all",this.cronJobsSortBy="nextRunAtMs",this.cronJobsSortDir="asc",this.cronStatus=null,this.cronError=null,this.cronForm={...Ds},this.cronFieldErrors={},this.cronEditingJobId=null,this.cronRunsJobId=null,this.cronRunsLoadingMore=!1,this.cronRuns=[],this.cronRunsTotal=0,this.cronRunsHasMore=!1,this.cronRunsNextOffset=null,this.cronRunsLimit=50,this.cronRunsScope="all",this.cronRunsStatuses=[],this.cronRunsDeliveryStatuses=[],this.cronRunsStatusFilter="all",this.cronRunsQuery="",this.cronRunsSortDir="desc",this.cronModelSuggestions=[],this.cronBusy=!1,this.updateAvailable=null,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.selectedSkill=null,this.skillQueryText="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.defaultSkillsExpanded=!0,this.mySkillsExpanded=!0,this.skillsRefreshing=!1,this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...og},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>Op(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null,_o(this.settings.locale)&&Qn.setLocale(this.settings.locale)}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),gh(this)}async firstUpdated(){const{tryRestoreSession:e}=await On(async()=>{const{tryRestoreSession:n}=await Promise.resolve().then(()=>Wf);return{tryRestoreSession:n}},void 0,import.meta.url);await e(this)||(this.isAuthenticated=!1),ph(this)}disconnectedCallback(){fh(this),super.disconnectedCallback()}updated(e){hh(this,e)}connect(){es(this)}handleChatScroll(e){Bu(this,e)}handleLogsScroll(e){Hu(this,e)}exportLogs(e,t){zu(e,t)}resetToolStream(){ni(this)}resetChatScroll(){Ka(this)}scrollToBottom(e){Ka(this),is(this,!0,!!e?.smooth)}async loadAssistantIdentity(){await Bc(this)}applySettings(e){At(this,e)}setTab(e){Ip(this,e)}setTheme(e,t){Lp(this,e,t)}async loadOverview(){await Tc(this)}async loadCron(){await Ns(this)}async handleAbortChat(){await Nc(this)}removeQueuedMessage(e){$f(this,e)}async handleSendChat(e,t){await wf(this,e,t)}async handleWhatsAppStart(e){await Xf(this,e)}async handleWhatsAppWait(){await Zf(this)}async handleWhatsAppLogout(){await eh(this)}async handleChannelConfigSave(){await th(this)}async handleChannelConfigReload(){await nh(this)}handleNostrProfileEdit(e,t){oh(this,e,t)}handleNostrProfileCancel(){ah(this)}handleNostrProfileFieldChange(e,t){rh(this,e,t)}async handleNostrProfileSave(){await ch(this)}async handleNostrProfileImport(){await dh(this)}handleNostrProfileToggleAdvanced(){lh(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,At(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return this.isAuthenticated?M$(this):c`<auth-view .app=${this}></auth-view>`}};$([y()],x.prototype,"settings",2);$([y()],x.prototype,"isAuthenticated",2);$([y()],x.prototype,"currentUser",2);$([y()],x.prototype,"authError",2);$([y()],x.prototype,"authLoading",2);$([y()],x.prototype,"authView",2);$([y()],x.prototype,"password",2);$([y()],x.prototype,"tab",2);$([y()],x.prototype,"onboarding",2);$([y()],x.prototype,"connected",2);$([y()],x.prototype,"theme",2);$([y()],x.prototype,"themeResolved",2);$([y()],x.prototype,"hello",2);$([y()],x.prototype,"lastError",2);$([y()],x.prototype,"lastErrorCode",2);$([y()],x.prototype,"eventLog",2);$([y()],x.prototype,"assistantName",2);$([y()],x.prototype,"assistantAvatar",2);$([y()],x.prototype,"assistantAgentId",2);$([y()],x.prototype,"sessionKey",2);$([y()],x.prototype,"chatLoading",2);$([y()],x.prototype,"chatSending",2);$([y()],x.prototype,"chatMessage",2);$([y()],x.prototype,"chatMessages",2);$([y()],x.prototype,"chatToolMessages",2);$([y()],x.prototype,"chatStream",2);$([y()],x.prototype,"chatStreamStartedAt",2);$([y()],x.prototype,"chatRunId",2);$([y()],x.prototype,"compactionStatus",2);$([y()],x.prototype,"fallbackStatus",2);$([y()],x.prototype,"chatAvatarUrl",2);$([y()],x.prototype,"chatThinkingLevel",2);$([y()],x.prototype,"chatQueue",2);$([y()],x.prototype,"chatAttachments",2);$([y()],x.prototype,"chatManualRefreshInFlight",2);$([y()],x.prototype,"sidebarOpen",2);$([y()],x.prototype,"sidebarContent",2);$([y()],x.prototype,"sidebarError",2);$([y()],x.prototype,"splitRatio",2);$([y()],x.prototype,"nodesLoading",2);$([y()],x.prototype,"nodes",2);$([y()],x.prototype,"devicesLoading",2);$([y()],x.prototype,"devicesError",2);$([y()],x.prototype,"devicesList",2);$([y()],x.prototype,"execApprovalsLoading",2);$([y()],x.prototype,"execApprovalsSaving",2);$([y()],x.prototype,"execApprovalsDirty",2);$([y()],x.prototype,"execApprovalsSnapshot",2);$([y()],x.prototype,"execApprovalsForm",2);$([y()],x.prototype,"execApprovalsSelectedAgent",2);$([y()],x.prototype,"execApprovalsTarget",2);$([y()],x.prototype,"execApprovalsTargetNodeId",2);$([y()],x.prototype,"execApprovalQueue",2);$([y()],x.prototype,"execApprovalBusy",2);$([y()],x.prototype,"execApprovalError",2);$([y()],x.prototype,"pendingGatewayUrl",2);$([y()],x.prototype,"configLoading",2);$([y()],x.prototype,"configRaw",2);$([y()],x.prototype,"configRawOriginal",2);$([y()],x.prototype,"configValid",2);$([y()],x.prototype,"configIssues",2);$([y()],x.prototype,"configSaving",2);$([y()],x.prototype,"configApplying",2);$([y()],x.prototype,"updateRunning",2);$([y()],x.prototype,"applySessionKey",2);$([y()],x.prototype,"configSnapshot",2);$([y()],x.prototype,"configSchema",2);$([y()],x.prototype,"configSchemaVersion",2);$([y()],x.prototype,"configSchemaLoading",2);$([y()],x.prototype,"configUiHints",2);$([y()],x.prototype,"configForm",2);$([y()],x.prototype,"configFormOriginal",2);$([y()],x.prototype,"configFormDirty",2);$([y()],x.prototype,"configFormMode",2);$([y()],x.prototype,"configSearchQuery",2);$([y()],x.prototype,"configActiveSection",2);$([y()],x.prototype,"configActiveSubsection",2);$([y()],x.prototype,"channelsLoading",2);$([y()],x.prototype,"channelsSnapshot",2);$([y()],x.prototype,"channelsError",2);$([y()],x.prototype,"channelsLastSuccess",2);$([y()],x.prototype,"whatsappLoginMessage",2);$([y()],x.prototype,"whatsappLoginQrDataUrl",2);$([y()],x.prototype,"whatsappLoginConnected",2);$([y()],x.prototype,"whatsappBusy",2);$([y()],x.prototype,"nostrProfileFormState",2);$([y()],x.prototype,"nostrProfileAccountId",2);$([y()],x.prototype,"presenceLoading",2);$([y()],x.prototype,"presenceEntries",2);$([y()],x.prototype,"presenceError",2);$([y()],x.prototype,"presenceStatus",2);$([y()],x.prototype,"agentsLoading",2);$([y()],x.prototype,"agentsList",2);$([y()],x.prototype,"agentsError",2);$([y()],x.prototype,"agentsSelectedId",2);$([y()],x.prototype,"toolsCatalogLoading",2);$([y()],x.prototype,"toolsCatalogError",2);$([y()],x.prototype,"toolsCatalogResult",2);$([y()],x.prototype,"agentsPanel",2);$([y()],x.prototype,"agentFilesLoading",2);$([y()],x.prototype,"agentFilesError",2);$([y()],x.prototype,"agentFilesList",2);$([y()],x.prototype,"agentFileContents",2);$([y()],x.prototype,"agentFileDrafts",2);$([y()],x.prototype,"agentFileActive",2);$([y()],x.prototype,"agentFileSaving",2);$([y()],x.prototype,"agentIdentityLoading",2);$([y()],x.prototype,"agentIdentityError",2);$([y()],x.prototype,"agentIdentityById",2);$([y()],x.prototype,"agentSkillsLoading",2);$([y()],x.prototype,"agentSkillsError",2);$([y()],x.prototype,"agentSkillsReport",2);$([y()],x.prototype,"agentSkillsAgentId",2);$([y()],x.prototype,"sessionsLoading",2);$([y()],x.prototype,"sessionsResult",2);$([y()],x.prototype,"sessionsError",2);$([y()],x.prototype,"sessionsFilterActive",2);$([y()],x.prototype,"sessionsFilterLimit",2);$([y()],x.prototype,"sessionsIncludeGlobal",2);$([y()],x.prototype,"sessionsIncludeUnknown",2);$([y()],x.prototype,"sessionsHideCron",2);$([y()],x.prototype,"usageLoading",2);$([y()],x.prototype,"usageResult",2);$([y()],x.prototype,"usageCostSummary",2);$([y()],x.prototype,"usageError",2);$([y()],x.prototype,"usageStartDate",2);$([y()],x.prototype,"usageEndDate",2);$([y()],x.prototype,"usageSelectedSessions",2);$([y()],x.prototype,"usageSelectedDays",2);$([y()],x.prototype,"usageSelectedHours",2);$([y()],x.prototype,"usageChartMode",2);$([y()],x.prototype,"usageDailyChartMode",2);$([y()],x.prototype,"usageTimeSeriesMode",2);$([y()],x.prototype,"usageTimeSeriesBreakdownMode",2);$([y()],x.prototype,"usageTimeSeries",2);$([y()],x.prototype,"usageTimeSeriesLoading",2);$([y()],x.prototype,"usageTimeSeriesCursorStart",2);$([y()],x.prototype,"usageTimeSeriesCursorEnd",2);$([y()],x.prototype,"usageSessionLogs",2);$([y()],x.prototype,"usageSessionLogsLoading",2);$([y()],x.prototype,"usageSessionLogsExpanded",2);$([y()],x.prototype,"usageQuery",2);$([y()],x.prototype,"usageQueryDraft",2);$([y()],x.prototype,"usageSessionSort",2);$([y()],x.prototype,"usageSessionSortDir",2);$([y()],x.prototype,"usageRecentSessions",2);$([y()],x.prototype,"usageTimeZone",2);$([y()],x.prototype,"usageContextExpanded",2);$([y()],x.prototype,"usageHeaderPinned",2);$([y()],x.prototype,"usageSessionsTab",2);$([y()],x.prototype,"usageVisibleColumns",2);$([y()],x.prototype,"usageLogFilterRoles",2);$([y()],x.prototype,"usageLogFilterTools",2);$([y()],x.prototype,"usageLogFilterHasTools",2);$([y()],x.prototype,"usageLogFilterQuery",2);$([y()],x.prototype,"cronLoading",2);$([y()],x.prototype,"cronJobsLoadingMore",2);$([y()],x.prototype,"cronJobs",2);$([y()],x.prototype,"cronJobsTotal",2);$([y()],x.prototype,"cronJobsHasMore",2);$([y()],x.prototype,"cronJobsNextOffset",2);$([y()],x.prototype,"cronJobsLimit",2);$([y()],x.prototype,"cronJobsQuery",2);$([y()],x.prototype,"cronJobsEnabledFilter",2);$([y()],x.prototype,"cronJobsScheduleKindFilter",2);$([y()],x.prototype,"cronJobsLastStatusFilter",2);$([y()],x.prototype,"cronJobsSortBy",2);$([y()],x.prototype,"cronJobsSortDir",2);$([y()],x.prototype,"cronStatus",2);$([y()],x.prototype,"cronError",2);$([y()],x.prototype,"cronForm",2);$([y()],x.prototype,"cronFieldErrors",2);$([y()],x.prototype,"cronEditingJobId",2);$([y()],x.prototype,"cronRunsJobId",2);$([y()],x.prototype,"cronRunsLoadingMore",2);$([y()],x.prototype,"cronRuns",2);$([y()],x.prototype,"cronRunsTotal",2);$([y()],x.prototype,"cronRunsHasMore",2);$([y()],x.prototype,"cronRunsNextOffset",2);$([y()],x.prototype,"cronRunsLimit",2);$([y()],x.prototype,"cronRunsScope",2);$([y()],x.prototype,"cronRunsStatuses",2);$([y()],x.prototype,"cronRunsDeliveryStatuses",2);$([y()],x.prototype,"cronRunsStatusFilter",2);$([y()],x.prototype,"cronRunsQuery",2);$([y()],x.prototype,"cronRunsSortDir",2);$([y()],x.prototype,"cronModelSuggestions",2);$([y()],x.prototype,"cronBusy",2);$([y()],x.prototype,"updateAvailable",2);$([y()],x.prototype,"skillsLoading",2);$([y()],x.prototype,"skillsReport",2);$([y()],x.prototype,"skillsError",2);$([y()],x.prototype,"skillsFilter",2);$([y()],x.prototype,"selectedSkill",2);$([y()],x.prototype,"skillQueryText",2);$([y()],x.prototype,"skillEdits",2);$([y()],x.prototype,"skillsBusyKey",2);$([y()],x.prototype,"skillMessages",2);$([y()],x.prototype,"defaultSkillsExpanded",2);$([y()],x.prototype,"mySkillsExpanded",2);$([y()],x.prototype,"skillsRefreshing",2);$([y()],x.prototype,"debugLoading",2);$([y()],x.prototype,"debugStatus",2);$([y()],x.prototype,"debugHealth",2);$([y()],x.prototype,"debugModels",2);$([y()],x.prototype,"debugHeartbeat",2);$([y()],x.prototype,"debugCallMethod",2);$([y()],x.prototype,"debugCallParams",2);$([y()],x.prototype,"debugCallResult",2);$([y()],x.prototype,"debugCallError",2);$([y()],x.prototype,"logsLoading",2);$([y()],x.prototype,"logsError",2);$([y()],x.prototype,"logsFile",2);$([y()],x.prototype,"logsEntries",2);$([y()],x.prototype,"logsFilterText",2);$([y()],x.prototype,"logsLevelFilters",2);$([y()],x.prototype,"logsAutoFollow",2);$([y()],x.prototype,"logsTruncated",2);$([y()],x.prototype,"logsCursor",2);$([y()],x.prototype,"logsLastFetchAt",2);$([y()],x.prototype,"logsLimit",2);$([y()],x.prototype,"logsMaxBytes",2);$([y()],x.prototype,"logsAtBottom",2);$([y()],x.prototype,"chatNewMessagesBelow",2);x=$([To("openclaw-app")],x);
//# sourceMappingURL=index-1xAUjGt6.js.map
