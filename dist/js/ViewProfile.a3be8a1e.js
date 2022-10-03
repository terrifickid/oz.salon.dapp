"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[309],{9264:function(e,s,o){o.d(s,{Z:function(){return B}});var t=o(6252),l=o(3577);const r={class:"font-haffer"},a=(0,t._)("div",{class:"grid grid-cols-12 pb-8"},[(0,t._)("div",{class:"col-span-2"},"Profile")],-1),n=(0,t._)("div",{class:"grid grid-cols-12 pb-4"},[(0,t._)("div",{class:"col-span-3"},"Contact")],-1),i={class:"grid grid-cols-12 pb-4"},c=(0,t._)("div",{class:"col-span-3 opacity-50"},"Name",-1),d={class:"col-span-3"},p={class:"grid grid-cols-12"},u=(0,t._)("div",{class:"col-span-3 opacity-50"},"Email Address",-1),f={class:"col-span-3"},g=(0,t._)("p",{class:"pt-16 pb-4"},"Delegation",-1),w={class:"grid grid-cols-12"},v=(0,t._)("div",{class:"col-span-3 opacity-50"},"Your Delegate",-1),m={class:"col-span-3"},h=(0,t._)("p",{class:"pt-16 pb-4"},"Financial",-1),_={class:"grid grid-cols-12 pb-4"},A=(0,t._)("div",{class:"col-span-3 opacity-50"},"Wallet Address",-1),k={class:"col-span-3"},b={class:"grid grid-cols-12"},y=(0,t._)("div",{class:"pb-8 col-span-3 opacity-50"},"Current Units",-1),C={class:"pb-8 col-span-3"},D=(0,t._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2"},[(0,t._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})],-1),Z=(0,t.Uk)(" View My Proposals ");function S(e,s,o,S,z,N){const j=(0,t.up)("AppDelegateSelect"),M=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",r,[a,n,(0,t._)("div",i,[c,(0,t._)("div",d,(0,l.zw)(o.profile.firstName)+" "+(0,l.zw)(o.profile.lastName),1)]),(0,t._)("div",p,[u,(0,t._)("div",f,(0,l.zw)(o.profile.emailAddress),1)]),g,(0,t._)("div",w,[v,(0,t._)("div",m,[o.profile.walletAddress==this.walletAddress?((0,t.wg)(),(0,t.j4)(j,{key:0})):(0,t.kq)("",!0)])]),h,(0,t._)("div",_,[A,(0,t._)("div",k,(0,l.zw)(o.profile.walletAddress),1)]),(0,t._)("div",b,[y,(0,t._)("div",C,(0,l.zw)(o.profile.units),1)]),(0,t.Wm)(M,{to:"/manage/proposals",class:"pt-16 flex items-center"},{default:(0,t.w5)((()=>[D,Z])),_:1})])}var z=o(9963);const N=(0,t._)("option",{value:"0"},"No Delegate",-1),j=["value"];function M(e,s,o,r,a,n){return(0,t.wy)(((0,t.wg)(),(0,t.iD)("select",{class:"focus:outline-none","onUpdate:modelValue":s[0]||(s[0]=e=>a.selected=e),onChange:s[1]||(s[1]=(...e)=>n.onChange&&n.onChange(...e))},[N,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.members,((e,s)=>((0,t.wg)(),(0,t.iD)("option",{key:s,value:e.fields.walletAddress},(0,l.zw)(e.fields.firstName)+" "+(0,l.zw)(e.fields.lastName),9,j)))),128))],544)),[[z.bM,a.selected]])}var P=o(6486),W=o.n(P),x=o(9669),L=o.n(x),U={data(){return{selected:"",members:[]}},computed:{profile(){return this.$store.state.profile}},methods:{async onChange(){try{const e=await L().post("https://salonnode-salondev-terrifickid.cloud.okteto.net/delegate/"+this.profile.id+"/"+this.selected);console.log(e)}catch(e){console.error(e)}}},async beforeMount(){this.selected=W().get(this.profile,"delegate"),console.log("members load!");try{const e=await L().get("https://salonnode-salondev-terrifickid.cloud.okteto.net/members?cache=true");this.members=e.data,console.log(this.members)}catch(e){console.log("error",e)}}},$=o(3744);const q=(0,$.Z)(U,[["render",M]]);var H=q,V={components:{AppDelegateSelect:H},props:["profile"],computed:{walletAddress(){return this.$store.state.walletAddress}}};const Y=(0,$.Z)(V,[["render",S]]);var B=Y},9968:function(e,s,o){o.r(s),o.d(s,{default:function(){return p}});var t=o(6252);const l=(0,t._)("div",{class:"text-center"},[(0,t._)("p",null,"Page not found")],-1);function r(e,s,o,r,a,n){const i=(0,t.up)("AppContent"),c=(0,t.up)("AppShell");return(0,t.wg)(),(0,t.j4)(c,{colors:a.colors,isLoaded:!0},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"items-center justify-center font-haffer"},{default:(0,t.w5)((()=>[l])),_:1})])),_:1},8,["colors"])}var a=o(9122),n=o(5820),i={components:{AppShell:a.Z,AppContent:n.Z},data(){return{colors:["white","black"]}}},c=o(3744);const d=(0,c.Z)(i,[["render",r]]);var p=d},8865:function(e,s,o){o.r(s),o.d(s,{default:function(){return f}});var t=o(6252);const l={key:0,class:"grid grid-cols-12 w-full pt-32 font-haffer"},r={class:"app-frame"};function a(e,s,o,a,n,i){const c=(0,t.up)("AppProfile"),d=(0,t.up)("AppContent"),p=(0,t.up)("AppShell");return(0,t.wg)(),(0,t.j4)(p,{colors:n.colors,isLoaded:i.loaded,protected:!0},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"items-center"},{default:(0,t.w5)((()=>["walletAddress"in i.profile?((0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",r,[(0,t.Wm)(c,{profile:i.profile},null,8,["profile"])])])):(0,t.kq)("",!0)])),_:1})])),_:1},8,["colors","isLoaded"])}var n=o(9122),i=o(5820),c=o(9264),d={components:{AppShell:n.Z,AppContent:i.Z,AppProfile:c.Z},data(){return{colors:["white","black"]}},computed:{loaded(){return this.profile},profile(){return this.$store.state.profile}}},p=o(3744);const u=(0,p.Z)(d,[["render",a]]);var f=u}}]);
//# sourceMappingURL=ViewProfile.a3be8a1e.js.map