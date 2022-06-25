(function(){var e={7175:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var n=o(6252),r=o(3577);function l(e,t,o,l,s,i){return(0,n.wg)(),(0,n.iD)("button",{onMouseover:t[0]||(t[0]=e=>s.hover=!0),onMouseleave:t[1]||(t[1]=e=>s.hover=!1),class:(0,r.C_)([{["bg-"+s.colors[1]]:s.hover,["text-"+s.colors[1]]:!s.hover,["text-"+s.colors[0]]:s.hover,["border-"+s.colors[1]]:!0},"py-2 px-5 rounded-full border inline-block text-xs sm:text-sm font-haffer"])},[(0,n.WI)(e.$slots,"default")],34)}var s={data(){return{hover:!1,colors:["white","black"]}}},i=o(3744);const c=(0,i.Z)(s,[["render",l]]);var a=c},4322:function(e,t,o){"use strict";var n=o(9963),r=o(6252);const l={class:"min-h-screen min-w-full flex items-center justify-center"};function s(e,t,o,s,i,c){const a=(0,r.up)("AppHeader"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.wy)((0,r._)("div",l,null,512),[[n.F8,!c.ready]]),(0,r.wy)((0,r._)("div",null,[(0,r.Wm)(a,{colors:i.colors,class:"keyboard-off"},null,8,["colors"]),(0,r.Wm)(u)],512),[[n.F8,c.ready]])])}var i=o(3577);const c=e=>((0,r.dD)("data-v-790882c9"),e=e(),(0,r.Cn)(),e),a={style:{width:"200rem"}},u=c((()=>(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 8h16M4 16h16"})],-1))),d=[u],f={class:"text-lg font-light pb-16 pt-16"},m=["colors"],p=["colors"],h=["colors"],g=["colors"],w=["colors"],v=["colors"],b=["colors"],_=["colors"],y=["colors"],k=["colors"],C=["colors"],x=["colors"];function A(e,t,o,n,l,s){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["pt-3 px-3 fixed w-screen overflow-scroll bg-white z-50 no-scrollbar transition-all font-haffer",{"h-screen":l.toggle,"h-12":!l.toggle}])},[(0,r._)("div",a,[(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>s.toggler&&s.toggler(...e))},d),(0,r._)("ul",f,[(0,r.Wm)(c,{to:"/",onClick:t[1]||(t[1]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Home",8,m)])),_:1}),(0,r.Wm)(c,{to:"/about",onClick:t[2]||(t[2]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"About",8,p)])),_:1}),(0,r.Wm)(c,{to:"/collection",onClick:t[3]||(t[3]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Collection",8,h)])),_:1}),(0,r.Wm)(c,{to:"/invest",onClick:t[4]||(t[4]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Invest",8,g)])),_:1}),(0,r.Wm)(c,{to:"/transfer",onClick:t[5]||(t[5]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Transfer",8,w)])),_:1}),(0,r.Wm)(c,{to:"/treasury",onClick:t[6]||(t[6]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Treasury",8,v)])),_:1}),(0,r.Wm)(c,{to:"/propose",onClick:t[7]||(t[7]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Propose",8,b)])),_:1}),(0,r.Wm)(c,{to:"/collect",onClick:t[8]||(t[8]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Collect",8,_)])),_:1}),(0,r.Wm)(c,{to:"/sell",onClick:t[9]||(t[9]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Sell",8,y)])),_:1}),(0,r.Wm)(c,{to:"/members",onClick:t[10]||(t[10]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Members",8,k)])),_:1}),(0,r.Wm)(c,{to:"/profile",onClick:t[11]||(t[11]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Profile",8,C)])),_:1}),(0,r.Wm)(c,{to:"/join",onClick:t[12]||(t[12]=e=>s.toggleDown())},{default:(0,r.w5)((()=>[(0,r._)("li",{colors:o.colors,class:"mr-2"},"Join",8,x)])),_:1})])])],2)}var D={components:{},props:["colors"],data(){return{toggle:!1}},computed:{display(){return this.colors?.length},walletAddress(){return this.$store.state.walletAddress}},methods:{toggler(){this.toggle=!this.toggle},toggleDown(){this.toggle=!1},connect(){this.$store.dispatch("connect")},disconnect(){this.$store.dispatch("disconnect")}}},j=o(3744);const P=(0,j.Z)(D,[["render",A],["__scopeId","data-v-790882c9"]]);var S=P,O={data(){return{colors:["white","black"],fontsLoaded:!1}},components:{AppHeader:S},async beforeMount(){var e=localStorage.getItem("salon_login");console.log("connected is:",e),1==e&&(console.log("Reconnecting!"),this.$store.dispatch("connect")),window.ethereum&&window.ethereum.on("accountsChanged",(async()=>{await this.$store.dispatch("disconnect"),await this.$store.dispatch("connect")}))},computed:{ready(){return!0}}};const V=(0,j.Z)(O,[["render",s]]);var W=V,M=o(2119);const T={class:"min-h-screen flex items-center"},E=(0,r._)("div",{class:"px-3 grid grid-cols-12 w-screen"},[(0,r._)("div",{class:"app-frame"},[(0,r._)("img",{src:"Salon_Logotype_RGB_3D.jpg"}),(0,r._)("p",{class:"text-xs mx-4 mt-3 mr-10 sm:text-sm sm:mr-32 sm:mt-5 sm:ml-5 font-haffer"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])],-1),I={class:"bottom-0 right-0 absolute p-3"},N=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-1 -ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})],-1),B=(0,r.Uk)(" Join");function L(e,t,o,n,l,s){const i=(0,r.up)("AppButton"),c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",T,[E,(0,r._)("div",I,[(0,r.Wm)(c,{to:"/join"},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{colors:l.colors,class:"flex items-center"},{default:(0,r.w5)((()=>[N,B])),_:1},8,["colors"])])),_:1})])])])}var Z=o(7175),$={name:"HomeView",components:{AppButton:Z.Z},data(){return{colors:["white","black"]}}};const F=(0,j.Z)($,[["render",L]]);var H=F;const J=[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:function(){return o.e(74).then(o.bind(o,5815))}},{path:"/collection",name:"collection",component:function(){return o.e(57).then(o.bind(o,2328))}},{path:"/invest",name:"invest",component:function(){return Promise.all([o.e(488),o.e(930)]).then(o.bind(o,3211))}},{path:"/transfer",name:"transfer",component:function(){return Promise.all([o.e(488),o.e(147)]).then(o.bind(o,7222))}},{path:"/propose",name:"propose",component:function(){return Promise.all([o.e(488),o.e(41)]).then(o.bind(o,5629))}},{path:"/collect",name:"collect",component:function(){return Promise.all([o.e(488),o.e(342)]).then(o.bind(o,8237))}},{path:"/sell",name:"sell",component:function(){return Promise.all([o.e(488),o.e(342)]).then(o.bind(o,94))}},{path:"/members",name:"members",component:function(){return o.e(487).then(o.bind(o,6930))}},{path:"/join",name:"join",component:function(){return Promise.all([o.e(488),o.e(172)]).then(o.bind(o,7937))}},{path:"/governance",name:"governance",component:function(){return o.e(563).then(o.bind(o,1209))}},{path:"/profile",name:"profile",component:function(){return o.e(309).then(o.bind(o,8865))}},{path:"/:catchAll(.*)",component:function(){return o.e(309).then(o.bind(o,9968))}}],q=(0,M.p7)({history:(0,M.PO)("/#"),routes:J});var G=q,R=o(3907),U=o(715),z=o(9669),K=o.n(z),Q=(0,R.MT)({state:{connecting:!1,walletAddress:null,provider:null,signer:null,members:[],profile:{loading:!0}},getters:{getMembers(e){const t=JSON.stringify(e.members);return JSON.parse(t)}},mutations:{},actions:{async disconnect(){this.state.walletAddress=null,this.state.profile={loading:!0},this.state.provider=null,this.state.signer=null,localStorage.setItem("salon_login",0)},async connect(){console.log("Connecting!"),this.state.connecting=!0,this.state.provider=new U.Q(window.ethereum),await this.state.provider.send("eth_requestAccounts",[]),this.state.signer=this.state.provider.getSigner(),this.state.walletAddress=await this.state.signer.getAddress();try{const e=await K().post("https://salontest-terrifickid.cloud.okteto.net/profile",{walletAddress:this.state.walletAddress});console.log("init profile",e.data),this.state.profile=e.data,localStorage.setItem("salon_login",1)}catch(e){console.log("init profile error",e)}this.state.connecting=!1}},modules:{}}),X=o(1256);(0,n.ri)(W).use(Q).use(G).use(X.Z).mount("#app")},6601:function(){}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.loaded=!0,l.exports}o.m=e,function(){o.amdO={}}(),function(){var e=[];o.O=function(t,n,r,l){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],l=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&l||s>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(i=!1,l<s&&(s=l));if(i){e.splice(u--,1);var a=r();void 0!==a&&(t=a)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,r,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({41:"ViewPropose",57:"CollectionView",74:"About",147:"ViewTransfer",172:"ViewJoin",309:"ViewProfile",342:"ViewCollect",487:"ViewMember",563:"ViewGovernance",930:"ViewInvest"}[e]||e)+"."+{41:"e6185caf",57:"a9085d04",74:"21cab580",147:"1079de7b",172:"af2b45c8",309:"3ea2c2c1",342:"53f01cbf",487:"adf14b53",488:"c9d117cf",563:"fea158e9",930:"b4e8f5e0"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+{41:"ViewPropose",57:"CollectionView",74:"About",147:"ViewTransfer",172:"ViewJoin",309:"ViewProfile",342:"ViewCollect",487:"ViewMember",563:"ViewGovernance",930:"ViewInvest"}[e]+"."+{41:"32b2ff90",57:"20a3c640",74:"8562ed70",147:"32b2ff90",172:"32b2ff90",309:"32b2ff90",342:"32b2ff90",487:"3b13f281",563:"32b2ff90",930:"32b2ff90"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="Salon:";o.l=function(n,r,l,s){if(e[n])e[n].push(r);else{var i,c;if(void 0!==l)for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var d=a[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+l){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+l),i.src=n),e[n]=[r];var f=function(t,o){i.onerror=i.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var l=function(l){if(r.onerror=r.onload=null,"load"===l.type)o();else{var s=l&&("load"===l.type?"missing":l.type),i=l&&l.target&&l.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,r.parentNode.removeChild(r),n(c)}};return r.onerror=r.onload=l,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],l=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===e||l===t))return r}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){r=s[n],l=r.getAttribute("data-href");if(l===e||l===t)return r}},n=function(n){return new Promise((function(r,l){var s=o.miniCssF(n),i=o.p+s;if(t(s,i))return r();e(n,i,r,l)}))},r={143:0};o.f.miniCss=function(e,t){var o={41:1,57:1,74:1,147:1,172:1,309:1,342:1,487:1,563:1,930:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var l=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=l);var s=o.p+o.u(t),i=new Error,c=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var l=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+s+")",i.name="ChunkLoadError",i.type=l,i.request=s,r[1](i)}};o.l(s,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,s=n[0],i=n[1],c=n[2],a=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var u=c(o)}for(t&&t(n);a<s.length;a++)l=s[a],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=self["webpackChunkSalon"]=self["webpackChunkSalon"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4322)}));n=o.O(n)})();
//# sourceMappingURL=app.e4e8ae50.js.map