"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[873],{791:function(s,e,a){a.d(e,{Z:function(){return z}});var l=a(6252),t=a(3577);const o=s=>((0,l.dD)("data-v-27aaa3e6"),s=s(),(0,l.Cn)(),s),n={id:"links",class:"grid grid-cols-12"},r={class:"col-span-6 md:col-span-12"},c={class:"mb-10"},i=(0,l.Uk)("Start"),d=(0,l.Uk)("Treasury"),p={class:"dot inline-block"},m=(0,l.Uk)(" Proposals "),u=o((()=>(0,l._)("span",{style:{"margin-right":"1px"}},"(",-1))),_=o((()=>(0,l._)("span",{style:{"margin-left":"1px"}},")",-1))),g={class:"col-span-6 md:col-span-12"},f={class:"mb-10"},v=(0,l.Uk)("Profile"),w=(0,l.Uk)("Members "),k=o((()=>(0,l._)("span",{style:{"margin-right":"1px"}},"(",-1))),h=o((()=>(0,l._)("span",{style:{"margin-left":"1px"}},")",-1)));function b(s,e,a,o,b,y){const x=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",r,[(0,l._)("ul",c,[(0,l._)("li",null,[(0,l.Wm)(x,{to:"/manage/start"},{default:(0,l.w5)((()=>[i])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(x,{to:"/manage/treasury"},{default:(0,l.w5)((()=>[d])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(x,{class:"flex items-center",to:"/manage/proposals"},{default:(0,l.w5)((()=>[(0,l._)("p",p,[m,(0,l._)("span",{class:(0,t.C_)([{hidden:!y.activeProposalsCount},"text-green-500"])},[u,(0,l.Uk)((0,t.zw)(y.activeProposalsCount),1),_],2)])])),_:1})])])]),(0,l._)("div",g,[(0,l._)("ul",f,[(0,l._)("li",null,[(0,l.Wm)(x,{to:"/manage/profile"},{default:(0,l.w5)((()=>[v])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(x,{to:"/manage/members"},{default:(0,l.w5)((()=>[w,(0,l._)("p",{class:(0,t.C_)(["inline-block",{hidden:!y.membersCount}])},[k,(0,l.Uk)((0,t.zw)(y.membersCount),1),h],2)])),_:1})])])])])}var y={computed:{activeProposalsCount(){return this.$store.getters.activeProposalsCount},membersCount(){return this.$store.getters.membersCount}}},x=a(3744);const C=(0,x.Z)(y,[["render",b],["__scopeId","data-v-27aaa3e6"]]);var z=C},4898:function(s,e,a){a.r(e),a.d(e,{default:function(){return P}});var l=a(6252),t=a(3577),o=a(9963);const n={class:"container-fluid px-5"},r={class:"grid grid-cols-12 gap-5"},c={class:"col-span-12 md:col-span-3"},i={class:"md:fixed"},d={class:"col-span-12 md:col-span-9"},p=["onClick"],m={class:"col-span-12 md:col-span-4"},u={class:"col-span-12 md:col-span-4"},_={class:"hidden md:block col-span-12 md:col-span-4"},g={class:"grid grid-cols-12 gap-5 w-full pt-10 pb-10"},f=(0,l._)("div",{class:"col-span-12 md:col-span-3 opacity-50"},"Wallet ID",-1),v={class:"col-span-12 md:col-span-9 truncate"},w=(0,l._)("div",{class:"col-span-12 md:col-span-3 opacity-50"},"Biography",-1),k={class:"col-span-12 md:col-span-9"},h={class:"col-span-12 opacity-50 hover:opacity-100 pt-4"},b=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3 mr-2"},[(0,l._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})],-1);function y(s,e,a,y,x,C){const z=(0,l.up)("ManageNav"),W=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",r,[(0,l._)("div",c,[(0,l._)("div",i,[(0,l.Wm)(z)])]),(0,l._)("div",d,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(C.members,((s,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"pb-5 text-left block w-full"},[(0,l._)("div",{class:(0,t.C_)(["opacity-50 grid grid-cols-12 gap-x-5 w-full text-left hover:opacity-100 cursor-pointer",{"opacity-100":x.selectedIndex==e}]),onClick:s=>x.selectedIndex=e},[(0,l._)("div",m,(0,t.zw)(s.fields.firstName)+" "+(0,t.zw)(s.fields.lastName),1),(0,l._)("div",u," Since "+(0,t.zw)(C.dateFormated(s.sys.createdAt)),1),(0,l._)("div",_,(0,t.zw)(s.fields.emailAddress),1)],10,p),(0,l.wy)((0,l._)("div",g,[f,(0,l._)("div",v,(0,t.zw)(s.fields.walletAddress),1),w,(0,l._)("div",k,(0,t.zw)(s.fields.biography),1),(0,l._)("div",h,[(0,l.Wm)(W,{to:"/manage/proposals",class:"flex items-center"},{default:(0,l.w5)((()=>[b,(0,l.Wm)(W,{to:"/manage/proposals/"+s.fields.walletAddress},{default:(0,l.w5)((()=>[(0,l.Uk)(" View "+(0,t.zw)(s.fields.firstName)+" "+(0,t.zw)(s.fields.lastName)+"'s Proposals",1)])),_:2},1032,["to"])])),_:2},1024)])],512),[[o.F8,x.selectedIndex==e]])])))),128))])])])}var x=a(9669),C=a.n(x),z=a(791),W={components:{ManageNav:z.Z},data(){return{selectedIndex:null}},methods:{dateFormated(s){var e=new Date(s);return e.toLocaleString("default",{month:"long",year:"numeric"})}},computed:{members(){return this.$store.state.members}},async mounted(){console.log("members load!");try{const s=await C().get("https://salon-node-dev-salondev-terrifickid.cloud.okteto.net/members");this.$store.state.members=s.data}catch(s){console.log("error",s)}}},U=a(3744);const D=(0,U.Z)(W,[["render",y]]);var P=D}}]);
//# sourceMappingURL=ViewMembers.310a0ac4.js.map