"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[309],{6748:function(e,s,o){o.d(s,{Z:function(){return B}});var l=o(6252),t=o(3577);const a={class:"font-haffer pb-64"},r=(0,l._)("div",{class:"grid grid-cols-12 pb-8"},[(0,l._)("div",{class:"col-span-12"},"Profile")],-1),n=(0,l._)("div",{class:"grid grid-cols-12 pb-4"},[(0,l._)("div",{class:"col-span-12"},"Contact")],-1),c={class:"grid grid-cols-12 pb-4"},i=(0,l._)("div",{class:"col-span-6 md:col-span-3 opacity-50"},"Name",-1),d={class:"col-span-6 md:col-span-3"},p={class:"grid grid-cols-12"},u=(0,l._)("div",{class:"col-span-6 md:col-span-3 opacity-50"},"Email Address",-1),f={class:"col-span-6 md:col-span-3"},m=(0,l._)("p",{class:"pt-16 pb-4"},"Delegation",-1),g={class:"grid grid-cols-12"},w=(0,l._)("div",{class:"col-span-6 md:col-span-3 opacity-50"},"Your Delegate",-1),v={class:"col-span-6 md:col-span-3"},h=(0,l._)("p",{class:"pt-16 pb-4"},"Financial",-1),_={class:"grid grid-cols-12 pb-4"},A=(0,l._)("div",{class:"col-span-12 md:col-span-3 opacity-50"},"Wallet Address",-1),k={class:"col-span-12 md:col-span-3"},b={class:"grid grid-cols-12 pb-8"},y=(0,l._)("div",{class:"col-span-12 md:col-span-3 opacity-50"},"Current Units",-1),C={class:"col-span-12 md:col-span-3"},D=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2"},[(0,l._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})],-1),Z=(0,l.Uk)(" View My Proposals ");function S(e,s,o,S,z,N){const j=(0,l.up)("AppDelegateSelect"),M=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",a,[r,n,(0,l._)("div",c,[i,(0,l._)("div",d,(0,t.zw)(o.profile.firstName)+" "+(0,t.zw)(o.profile.lastName),1)]),(0,l._)("div",p,[u,(0,l._)("div",f,(0,t.zw)(o.profile.emailAddress),1)]),m,(0,l._)("div",g,[w,(0,l._)("div",v,[o.profile.walletAddress==this.walletAddress?((0,l.wg)(),(0,l.j4)(j,{key:0})):(0,l.kq)("",!0)])]),h,(0,l._)("div",_,[A,(0,l._)("div",k,(0,t.zw)(o.profile.walletAddress),1)]),(0,l._)("div",b,[y,(0,l._)("div",C,(0,t.zw)(o.profile.units),1)]),(0,l.Wm)(M,{to:"/manage/proposals",class:"pt-16 flex items-center"},{default:(0,l.w5)((()=>[D,Z])),_:1})])}var z=o(9963);const N=(0,l._)("option",{value:"0"},"No Delegate",-1),j=["value"];function M(e,s,o,a,r,n){return(0,l.wy)(((0,l.wg)(),(0,l.iD)("select",{class:"focus:outline-none","onUpdate:modelValue":s[0]||(s[0]=e=>r.selected=e),onChange:s[1]||(s[1]=(...e)=>n.onChange&&n.onChange(...e))},[N,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.members,((e,s)=>((0,l.wg)(),(0,l.iD)("option",{key:s,value:e.fields.walletAddress},(0,t.zw)(e.fields.firstName)+" "+(0,t.zw)(e.fields.lastName),9,j)))),128))],544)),[[z.bM,r.selected]])}var P=o(6486),W=o.n(P),x=o(9669),L=o.n(x),U={data(){return{selected:"",members:[]}},computed:{profile(){return this.$store.state.profile}},methods:{async onChange(){try{const e=await L().post("https://salonnode-salondev-terrifickid.cloud.okteto.net/delegate/"+this.profile.id+"/"+this.selected);console.log(e)}catch(e){console.error(e)}}},async beforeMount(){this.selected=W().get(this.profile,"delegate"),console.log("members load!");try{const e=await L().get("https://salonnode-salondev-terrifickid.cloud.okteto.net/members?cache=true");this.members=e.data,console.log(this.members)}catch(e){console.log("error",e)}}},$=o(3744);const q=(0,$.Z)(U,[["render",M]]);var H=q,V={components:{AppDelegateSelect:H},props:["profile"],computed:{walletAddress(){return this.$store.state.walletAddress}}};const Y=(0,$.Z)(V,[["render",S]]);var B=Y},9968:function(e,s,o){o.r(s),o.d(s,{default:function(){return p}});var l=o(6252);const t=(0,l._)("div",{class:"text-center"},[(0,l._)("p",null,"Page not found")],-1);function a(e,s,o,a,r,n){const c=(0,l.up)("AppContent"),i=(0,l.up)("AppShell");return(0,l.wg)(),(0,l.j4)(i,{colors:r.colors,isLoaded:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"items-center justify-center font-haffer"},{default:(0,l.w5)((()=>[t])),_:1})])),_:1},8,["colors"])}var r=o(9122),n=o(5820),c={components:{AppShell:r.Z,AppContent:n.Z},data(){return{colors:["white","black"]}}},i=o(3744);const d=(0,i.Z)(c,[["render",a]]);var p=d},8865:function(e,s,o){o.r(s),o.d(s,{default:function(){return f}});var l=o(6252);const t={key:0,class:"grid grid-cols-12 w-full pt-32 font-haffer"},a={class:"app-frame"};function r(e,s,o,r,n,c){const i=(0,l.up)("AppProfile"),d=(0,l.up)("AppContent"),p=(0,l.up)("AppShell");return(0,l.wg)(),(0,l.j4)(p,{colors:n.colors,isLoaded:c.loaded,protected:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"items-center"},{default:(0,l.w5)((()=>["walletAddress"in c.profile?((0,l.wg)(),(0,l.iD)("div",t,[(0,l._)("div",a,[(0,l.Wm)(i,{profile:c.profile},null,8,["profile"])])])):(0,l.kq)("",!0)])),_:1})])),_:1},8,["colors","isLoaded"])}var n=o(9122),c=o(5820),i=o(6748),d={components:{AppShell:n.Z,AppContent:c.Z,AppProfile:i.Z},data(){return{colors:["white","black"]}},computed:{loaded(){return this.profile},profile(){return this.$store.state.profile}}},p=o(3744);const u=(0,p.Z)(d,[["render",r]]);var f=u}}]);
//# sourceMappingURL=ViewProfile.8820ae4f.js.map