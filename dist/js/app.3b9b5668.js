(function(){"use strict";var e={425:function(e,n,t){var o=t(963),i=t(252);const r={class:"container-fluid mx-auto p-10"},a={class:"grid grid-cols-12"},u=(0,i.uE)('<div class="col-span-4"><ul><li class="mb-2"><a href="/#/about">About Salon</a></li><li class="mb-2"><a href="/#/collection">Collection</a></li><li class="mb-2"><a href="/#/members">Members</a></li></ul></div>',1),c={class:"col-span-8"};function l(e,n,t,l,s,d){const m=(0,i.up)("GlobalHeader"),f=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.wy)((0,i._)("div",null," ",512),[[o.F8,!s.ready]]),(0,i.wy)((0,i._)("div",null,[(0,i.Wm)(m),(0,i._)("div",r,[(0,i._)("div",a,[u,(0,i._)("div",c,[(0,i.Wm)(f)])])])],512),[[o.F8,s.ready]])])}const s={class:"container-fluid mx-auto p-10"},d=(0,i.uE)('<div class="grid grid-cols-12 items-center"><div class="col-span-6"><h1 class="text-4xl font-extrabold"><a href="/">Salon Logotype</a></h1></div><div class="col-span-6 text-right"><a href="https://app.salondao.xyz" class="bg-black text-white p-4">Enter App</a></div></div>',1),m=[d];function f(e,n,t,o,r,a){return(0,i.wg)(),(0,i.iD)("div",s,m)}var p={name:"GlobalHeader",components:{}},v=t(744);const b=(0,v.Z)(p,[["render",f]]);var h=b,g={async mounted(){var e=setInterval((async()=>{document.fonts.check("1rem Haffer XH")&&(this.ready=!0,this.ready&&clearInterval(e))}),10)},data(){return{ready:!1}},components:{GlobalHeader:h}};const y=(0,v.Z)(g,[["render",l]]);var w=y,x=t(119);const O=(0,i._)("h1",{class:"mb-4"},"Home",-1),k=(0,i._)("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),_=(0,i._)("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),j=[O,k,_];function q(e,n,t,o,r,a){return(0,i.wg)(),(0,i.iD)("div",null,j)}var E={name:"HomeView",components:{}};const C=(0,v.Z)(E,[["render",q]]);var T=C;const A=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return t.e(74).then(t.bind(t,210))}},{path:"/collection",name:"collection",component:function(){return t.e(57).then(t.bind(t,321))}},{path:"/members",name:"members",component:function(){return t.e(619).then(t.bind(t,945))}}],H=(0,x.p7)({history:(0,x.PO)("/#"),routes:A});var P=H,S=t(907),D=(0,S.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(w).use(D).use(P).mount("#app")}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,r){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],i=e[s][1],r=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,r<a&&(a=r));if(u){e.splice(s--,1);var l=i();void 0!==l&&(n=l)}}return n}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[o,i,r]}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+{57:"CollectionView",74:"About",619:"MembersView"}[e]+"."+{57:"f652d990",74:"c861709f",619:"0c82ba27"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="oz.salon.dapp:";t.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var u,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+r){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+r),u.src=o),e[o]=[i];var m=function(n,t){u.onerror=u.onload=null,clearTimeout(f);var i=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,o){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(t,o){i=e[n]=[t,o]}));o.push(i[2]=r);var a=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,i[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,r,a=o[0],u=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(i in u)t.o(u,i)&&(t.m[i]=u[i]);if(c)var s=c(t)}for(n&&n(o);l<a.length;l++)r=a[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(s)},o=self["webpackChunkoz_salon_dapp"]=self["webpackChunkoz_salon_dapp"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(425)}));o=t.O(o)})();
//# sourceMappingURL=app.3b9b5668.js.map