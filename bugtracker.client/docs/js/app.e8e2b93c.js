(function(e){function t(t){for(var a,r,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0d3106a1":"06ef6385","chunk-2d0c19e3":"610e01a4","chunk-74a9f4f0":"2ea8d978","chunk-77efaf2e":"41c73a76"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0d3106a1":1,"chunk-74a9f4f0":1,"chunk-77efaf2e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0d3106a1":"1709e2c3","chunk-2d0c19e3":"31d6cfe0","chunk-74a9f4f0":"e030fb2e","chunk-77efaf2e":"cf547745"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f44":function(e,t,n){"use strict";n("339b")},"206d":function(e,t,n){"use strict";n("7955")},"2f3a":function(e,t,n){e.exports=n.p+"img/bugtracker-logo.f613c8c7.png"},"339b":function(e,t,n){},"3f3d":function(e,t,n){},4162:function(e,t,n){},"41cb":function(e,t,n){"use strict";var a=n("6c02"),r=n("8816");function c(e){return()=>n("a2f9")(`./${e}.vue`)}const o=[{path:"/",name:"Home",component:c("HomePage")},{path:"/about",name:"About",component:c("AboutPage")},{path:"/account",name:"Account",component:c("AccountPage"),beforeEnter:r["a"]},{path:"/bugdetails",name:"BugDetails",component:c("BugDetails")}],s=Object(a["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(a["b"])(),routes:o});t["a"]=s},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const r=Object(a["g"])("footer",null,[Object(a["g"])("div",{class:"bg-dark text-light text-center p-4"}," I'm dying on the inside ")],-1);function c(e,t,n,c,o,s){const i=Object(a["v"])("Navbar"),u=Object(a["v"])("router-view");return Object(a["p"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("header",null,[Object(a["g"])(i)]),Object(a["g"])("main",null,[Object(a["g"])(u)]),r],64)}var o=n("83fc"),s={name:"App",setup(){return{appState:Object(a["b"])(()=>o["a"])}}};n("206d");s.render=c;var i=s;function u(e){const t=n("ccc2");t.keys().forEach(n=>{const a=t(n),r=a.default||a,c=r.name||n.substr(n.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(c,r)})}var l=n("41cb"),d=n("4989"),f=n.n(d),p=n("1157"),b=n.n(p),g=n("f0bd");const v=Object(a["c"])(i);u(v),v.use(l["a"],f.a,b.a,g["default"]).mount("#app")},7955:function(e,t,n){},"83fc":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("7a23");const r=Object(a["t"])({user:{},account:{},activeBug:{},bugs:[],notes:[]})},"8ae6":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const r={class:"row side-lines bottom-line2 py-2"},c=Object(a["e"])('<div class="col-3"><span>This is the bug</span></div><div class="col-3"><span>Dean Smith</span></div><div class="col-3"><span class="text-success">Open</span></div><div class="col-3"><span>04/25/2021</span></div>',4);function o(e,t,n,o,s,i){return Object(a["p"])(),Object(a["d"])("div",r,[c])}var s={name:"Bug",props:{bugProp:{type:Object,required:!0}}};n("be4f");s.render=o;t["default"]=s},"9d8d":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r=n("2f3a"),c=n.n(r);const o=Object(a["A"])("data-v-254f0b68");Object(a["s"])("data-v-254f0b68");const s={class:"navbar navbar-expand-lg navbar-dark bg-dark"},i=Object(a["g"])("div",{class:"d-flex flex-column align-items-center"},[Object(a["g"])("img",{alt:"logo",src:c.a,height:"45"})],-1),u=Object(a["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["g"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},d={class:"navbar-nav mr-auto"},f={class:"nav-item"},p=Object(a["f"])(" Home "),b={class:"nav-item"},g=Object(a["f"])(" BugDetails "),v={class:"navbar-text"},m={key:1,class:"dropdown"},h={class:"mx-3"},O=Object(a["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(a["q"])();const j=o((e,t,n,r,c,j)=>{const y=Object(a["v"])("router-link");return Object(a["p"])(),Object(a["d"])("nav",s,[Object(a["g"])(y,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:o(()=>[i]),_:1}),u,Object(a["g"])("div",l,[Object(a["g"])("ul",d,[Object(a["g"])("li",f,[Object(a["g"])(y,{to:{name:"Home"},class:"nav-link"},{default:o(()=>[p]),_:1})]),Object(a["g"])("li",b,[Object(a["g"])(y,{to:{name:"BugDetails"},class:"nav-link"},{default:o(()=>[g]),_:1})])]),Object(a["g"])("span",v,[r.user.isAuthenticated?(Object(a["p"])(),Object(a["d"])("div",m,[Object(a["g"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>r.state.dropOpen=!r.state.dropOpen)},[Object(a["g"])("img",{src:r.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(a["g"])("span",h,Object(a["x"])(r.user.name),1)]),Object(a["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:r.state.dropOpen}],onClick:t[4]||(t[4]=e=>r.state.dropOpen=!1)},[Object(a["g"])(y,{to:{name:"Account"}},{default:o(()=>[O]),_:1}),Object(a["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>r.logout&&r.logout(...e))}," logout ")],2)])):(Object(a["p"])(),Object(a["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>r.login&&r.login(...e))}," Login "))])])])});var y=n("8816"),k=n("83fc");const w=window.location.origin.includes("localhost"),x=w?"http://localhost:3000":"",A="payton49.us.auth0.com",E="https://kanban",T="XMJzjDrM0rhVdfF1XJrf0YWrs3lXvyvt";var P=n("41cb");function _(e,t){if(w)console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const C={log(){_("log",arguments)},error(){_("error",arguments)},warn(){_("warn",arguments)},assert(){_("assert",arguments)},trace(){_("trace",arguments)}};var D=n("bc3a"),S=n.n(D);const N=S.a.create({baseURL:x,timeout:2e4}),L=function(e){N.defaults.headers.authorization=e};class U{async getAccount(){try{const e=await N.get("/account");k["a"].account=e.data}catch(e){C.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const B=new U,H=Object(y["b"])({domain:A,clientId:T,audience:E,onRedirectCallback:e=>{P["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});H.on(H.AUTH_EVENTS.AUTHENTICATED,(async function(){L(H.bearer),k["a"].user=H.user,await B.getAccount()}));var q={name:"Navbar",setup(){const e=Object(a["t"])({dropOpen:!1});return{state:e,user:Object(a["b"])(()=>k["a"].user),async login(){H.loginWithPopup()},async logout(){await H.logout({returnTo:window.location.origin})}}}};n("0f44");q.render=j,q.__scopeId="data-v-254f0b68";t["default"]=q},a2f9:function(e,t,n){var a={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./AccountPage.vue":["e542","chunk-74a9f4f0"],"./BugDetails.vue":["dce4","chunk-77efaf2e"],"./HomePage.vue":["78a7","chunk-0d3106a1"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="a2f9",e.exports=r},aa81:function(e,t,n){"use strict";n.r(t);var a=n("7a23");const r={class:"row border-line py-2"},c=Object(a["g"])("div",{class:"col-2 ml-3 d-flex align-items-center"},[Object(a["g"])("h4",null,"Donnie Marvo")],-1),o=Object(a["g"])("div",{class:"col border-line2 p-3 m-3"},[Object(a["g"])("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia saepe nesciunt quo enim rerum fugiat, voluptatibus asperiores at, laboriosam ad sit facilis minus, explicabo quod repudiandae? Expedita, aliquid suscipit.")],-1),s=Object(a["g"])("div",{class:"col-1 d-flex justify-content-end align-items-center"},[Object(a["g"])("button",{type:"button",class:"btn btn-danger btn-sm px-3 py-2",title:"delete this note"}," x ")],-1);function i(e,t,n,i,u,l){return Object(a["p"])(),Object(a["d"])("div",r,[c,o,s])}var u={name:"Note",props:{noteProp:{type:Object,required:!0}}};n("e2aa");u.render=i;t["default"]=u},be4f:function(e,t,n){"use strict";n("4162")},ccc2:function(e,t,n){var a={"./BugComponent.vue":"8ae6","./NoteComponent.vue":"aa81","./navbar.vue":"9d8d"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="ccc2"},e2aa:function(e,t,n){"use strict";n("3f3d")}});