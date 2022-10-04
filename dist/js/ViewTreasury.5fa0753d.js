"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[699],{7975:function(a,l,s){s.d(l,{Z:function(){return g}});var t=s(6252);const e={id:"links",class:"grid grid-cols-12"},n={class:"col-span-6 md:col-span-12"},r={class:"mb-10"},o=(0,t.Uk)("Start"),u=(0,t.Uk)("Treasury"),c=(0,t.Uk)("Proposals"),i={class:"col-span-6 md:col-span-12"},p={class:"mb-10"},_=(0,t.Uk)("Profile"),d=(0,t.Uk)("Members");function m(a,l){const s=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",e,[(0,t._)("div",n,[(0,t._)("ul",r,[(0,t._)("li",null,[(0,t.Wm)(s,{to:"/manage/start"},{default:(0,t.w5)((()=>[o])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(s,{to:"/manage/treasury"},{default:(0,t.w5)((()=>[u])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(s,{to:"/manage/proposals"},{default:(0,t.w5)((()=>[c])),_:1})])])]),(0,t._)("div",i,[(0,t._)("ul",p,[(0,t._)("li",null,[(0,t.Wm)(s,{to:"/manage/profile"},{default:(0,t.w5)((()=>[_])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(s,{to:"/manage/members"},{default:(0,t.w5)((()=>[d])),_:1})])])])])}var f=s(3744);const b={},y=(0,f.Z)(b,[["render",m],["__scopeId","data-v-687eb406"]]);var g=y},1246:function(a,l,s){s.r(l),s.d(l,{default:function(){return E}});var t=s(6252),e=s(3577);const n={class:"container-fluid px-5"},r={class:"grid grid-cols-12"},o={class:"col-span-12 md:col-span-3"},u={class:"col-span-12 md:col-span-9"},c=(0,t._)("p",null,[(0,t._)("b",null,"Treasury"),(0,t._)("br"),(0,t._)("span",{class:"opacity-50"},"Financial summary cras ac mi id mauris posuere vulputate eget a leo. Suspendisse et consequat neque.")],-1),i={class:"pt-10"},p={class:"pb-5"},_=(0,t._)("span",{class:"opacity-50"},"Appraised Collection Value",-1),d=(0,t._)("br",null,null,-1),m={class:"text-2xl"},f={class:"pb-5"},b=(0,t._)("span",{class:"opacity-50"},"Cash Assets Available",-1),y=(0,t._)("br",null,null,-1),g={class:"text-2xl"},v={class:"pb-5"},w=(0,t._)("span",{class:"opacity-50"},"Total Book Value",-1),k=(0,t._)("br",null,null,-1),x={class:"text-2xl"},U={class:"pb-5"},h=(0,t._)("span",{class:"opacity-50"},"Total Units Issued",-1),V=(0,t._)("br",null,null,-1),z={class:"text-2xl"},S={class:"grid grid-cols-2"},T=(0,t._)("span",null,"Book Value (per unit)",-1),W=(0,t._)("br",null,null,-1),M=(0,t._)("span",null,"Suggested Trading Value (per unit)",-1),C=(0,t._)("br",null,null,-1),Z={class:"border-t border-black mt-12 pt-1"},A=(0,t._)("span",null,"Most Recent Trade Price (per unit)",-1),D=(0,t._)("br",null,null,-1),I={class:"text-2xl text-green-500"};function N(a,l,s,N,P,q){const B=(0,t.up)("ManageNav");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",r,[(0,t._)("div",o,[(0,t.Wm)(B)]),(0,t._)("div",u,[c,(0,t._)("ul",i,[(0,t._)("li",p,[_,d,(0,t._)("span",m,(0,e.zw)(P.format.format(P.treasury.collectionValue)),1)]),(0,t._)("li",f,[b,y,(0,t._)("span",g,(0,e.zw)(P.format.format(P.treasury.balance)),1)]),(0,t._)("li",v,[w,k,(0,t._)("span",x,(0,e.zw)(P.format.format(P.treasury.balance+P.treasury.collectionValue)),1)]),(0,t._)("li",U,[h,V,(0,t._)("span",z,(0,e.zw)(P.treasury.totalUnits),1)])]),(0,t._)("div",S,[(0,t._)("div",null,[T,W,(0,t.Uk)(" "+(0,e.zw)(P.format.format((P.treasury.collectionValue+P.treasury.balance)/P.treasury.totalUnits)),1)]),(0,t._)("div",null,[M,C,(0,t._)("span",null,(0,e.zw)(P.format.format((P.treasury.collectionValue+P.treasury.balance)/P.treasury.totalUnits*1.25)),1)])]),(0,t._)("div",Z,[A,D,(0,t._)("span",I,(0,e.zw)(P.format.format(0)),1)])])])])}var P=s(9669),q=s.n(P),B=s(7975),F={components:{ManageNav:B.Z},data(){return{treasury:{},format:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}},async beforeMount(){console.log("treasury load!");try{const a=await q().get("https://salonnode-salondev-terrifickid.cloud.okteto.net/treasury?cache=true");this.treasury=a.data.message}catch(a){console.log("error",a)}console.log(this.treasury)}},R=s(3744);const j=(0,R.Z)(F,[["render",N]]);var E=j}}]);
//# sourceMappingURL=ViewTreasury.5fa0753d.js.map