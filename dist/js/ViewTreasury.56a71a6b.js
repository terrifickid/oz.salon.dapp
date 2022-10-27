"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[699],{136:function(a,l,t){t.d(l,{Z:function(){return C}});var s=t(6252),e=t(3577);const n=a=>((0,s.dD)("data-v-6e0d8083"),a=a(),(0,s.Cn)(),a),r={id:"links",class:"grid grid-cols-12"},o={class:"col-span-6 md:col-span-12"},c={class:"mb-10"},u=(0,s.Uk)("Start"),i=(0,s.Uk)("Treasury"),d=(0,s.Uk)("Proposals "),p={class:"text-green-500 dot"},m=n((()=>(0,s._)("span",{style:{"margin-right":"1px"},class:"ml-1"},"(",-1))),_=n((()=>(0,s._)("span",{style:{"margin-left":"-2px"}},")",-1))),f={class:"col-span-6 md:col-span-12"},y={class:"mb-10"},g=(0,s.Uk)("Profile"),b=(0,s.Uk)("Members "),v=n((()=>(0,s._)("span",{style:{"margin-right":"1px"},class:"ml-1"},"(",-1))),k=n((()=>(0,s._)("span",{style:{"margin-left":"1px"}},")",-1)));function w(a,l,t,n,w,x){const h=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",o,[(0,s._)("ul",c,[(0,s._)("li",null,[(0,s.Wm)(h,{to:"/manage/start"},{default:(0,s.w5)((()=>[u])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(h,{to:"/manage/treasury"},{default:(0,s.w5)((()=>[i])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(h,{class:"flex items-center",to:"/manage/proposals"},{default:(0,s.w5)((()=>[d,(0,s._)("p",p,[m,(0,s.Uk)((0,e.zw)(x.activeProposalsCount)+" ",1),_])])),_:1})])])]),(0,s._)("div",f,[(0,s._)("ul",y,[(0,s._)("li",null,[(0,s.Wm)(h,{to:"/manage/profile"},{default:(0,s.w5)((()=>[g])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(h,{to:"/manage/members"},{default:(0,s.w5)((()=>[b,v,(0,s.Uk)((0,e.zw)(x.membersCount),1),k])),_:1})])])])])}var x={computed:{activeProposalsCount(){return this.$store.getters.activeProposalsCount},membersCount(){return this.$store.getters.membersCount}}},h=t(3744);const U=(0,h.Z)(x,[["render",w],["__scopeId","data-v-6e0d8083"]]);var C=U},2928:function(a,l,t){t.r(l),t.d(l,{default:function(){return $}});var s=t(6252),e=t(3577);const n={key:0,class:"container-fluid px-5"},r={class:"grid grid-cols-12"},o={class:"col-span-12 md:col-span-3"},c={class:"md:fixed"},u={class:"col-span-12 md:col-span-9"},i=(0,s._)("b",null,"Treasury",-1),d=(0,s._)("br",null,null,-1),p=["innerHTML"],m={class:"pt-10"},_={class:"pb-5"},f=(0,s._)("span",{class:"opacity-50"},"Appraised Collection Value",-1),y=(0,s._)("br",null,null,-1),g={class:"text-2xl"},b={class:"pb-5"},v=(0,s._)("span",{class:"opacity-50"},"Cash Assets Available",-1),k=(0,s._)("br",null,null,-1),w={class:"text-2xl"},x={class:"pb-5"},h=(0,s._)("span",{class:"opacity-50"},"Total Book Value",-1),U=(0,s._)("br",null,null,-1),C={class:"text-2xl"},z={class:"pb-5"},T=(0,s._)("span",{class:"opacity-50"},"Total Units Issued",-1),P=(0,s._)("br",null,null,-1),S={class:"text-2xl"},W={class:"grid grid-cols-2"},M=(0,s._)("span",null,"Book Value (per unit)",-1),V=(0,s._)("br",null,null,-1),I={class:"border-t border-black mt-12 pt-1"},D=(0,s._)("span",null,"Current Trade Price (per unit)",-1),N=(0,s._)("br",null,null,-1),Z={class:"text-2xl text-green-500"};function A(a,l,t,A,F,Y){const q=(0,s.up)("ManageNav");return F.loaded?((0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s._)("div",c,[(0,s.Wm)(q)])]),(0,s._)("div",u,[i,d,(0,s._)("div",{class:"opacity-50",innerHTML:F.data.code},null,8,p),(0,s._)("ul",m,[(0,s._)("li",_,[f,y,(0,s._)("span",g,(0,e.zw)(F.format.format(F.treasury.collectionValue)),1)]),(0,s._)("li",b,[v,k,(0,s._)("span",w,(0,e.zw)(F.format.format(F.treasury.balance)),1)]),(0,s._)("li",x,[h,U,(0,s._)("span",C,(0,e.zw)(F.format.format(F.treasury.balance+F.treasury.collectionValue)),1)]),(0,s._)("li",z,[T,P,(0,s._)("span",S,(0,e.zw)(F.decimal.format(F.treasury.totalUnits)),1)])]),(0,s._)("div",W,[(0,s._)("div",null,[M,V,(0,s.Uk)(" "+(0,e.zw)(F.format.format((F.treasury.collectionValue+F.treasury.balance)/F.treasury.totalUnits)),1)])]),(0,s._)("div",I,[D,N,(0,s._)("span",Z,(0,e.zw)(F.format.format(F.treasury.currentTradePrice)),1)])])])])):(0,s.kq)("",!0)}var F=t(9669),Y=t.n(F),q=t(136),B={components:{ManageNav:q.Z},data(){return{loaded:!1,data:{},treasury:{},decimal:new Intl.NumberFormat("en-US",{style:"decimal"}),format:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}},async mounted(){console.log("content load!");try{const a=await Y().get("https://salonnode-salondev-terrifickid.cloud.okteto.net/entry/5x22MY3IFgYYzSyf9Wq15j");this.data=a.data.fields,this.loaded=!0}catch(a){console.log("error",a)}console.log("treasury load!");try{const a=await Y().get("https://salonnode-salondev-terrifickid.cloud.okteto.net/treasury");this.treasury=a.data.message}catch(a){console.log("error",a)}this.loaded=!0}},H=t(3744);const L=(0,H.Z)(B,[["render",A]]);var $=L}}]);
//# sourceMappingURL=ViewTreasury.56a71a6b.js.map