"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[873],{7975:function(e,s,l){l.d(s,{Z:function(){return _}});var a=l(6252);const o={id:"links",class:"grid grid-cols-12"},t={class:"col-span-6 md:col-span-12"},n={class:"mb-10"},i=(0,a.Uk)("Start"),c=(0,a.Uk)("Treasury"),r=(0,a.Uk)("Proposals"),d={class:"col-span-6 md:col-span-12"},m={class:"mb-10"},u=(0,a.Uk)("Profile"),p=(0,a.Uk)("Members");function f(e,s){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",t,[(0,a._)("ul",n,[(0,a._)("li",null,[(0,a.Wm)(l,{to:"/manage/start"},{default:(0,a.w5)((()=>[i])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:"/manage/treasury"},{default:(0,a.w5)((()=>[c])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:"/manage/proposals"},{default:(0,a.w5)((()=>[r])),_:1})])])]),(0,a._)("div",d,[(0,a._)("ul",m,[(0,a._)("li",null,[(0,a.Wm)(l,{to:"/manage/profile"},{default:(0,a.w5)((()=>[u])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:"/manage/members"},{default:(0,a.w5)((()=>[p])),_:1})])])])])}var v=l(3744);const g={},w=(0,v.Z)(g,[["render",f],["__scopeId","data-v-687eb406"]]);var _=w},7091:function(e,s,l){l.r(s),l.d(s,{default:function(){return D}});var a=l(6252),o=l(3577),t=l(9963);const n={class:"container-fluid px-5"},i={class:"grid grid-cols-12"},c={class:"col-span-12 md:col-span-3"},r={class:"col-span-12 md:col-span-9"},d=["onClick"],m={class:"col-span-12 md:col-span-4"},u={class:"col-span-12 md:col-span-4"},p={class:"hidden md:block col-span-4"},f={class:"grid grid-cols-12 gap-5 w-full pt-10 pb-10"},v=(0,a._)("div",{class:"col-span-3 opacity-50"},"Wallet ID",-1),g={class:"col-span-9"},w=(0,a._)("div",{class:"col-span-3 opacity-50"},"Biography",-1),_=(0,a._)("div",{class:"col-span-9"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),k={class:"col-span-12 opacity-50 hover:opacity-100 pt-4"},b=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3 mr-2"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})],-1);function h(e,s,l,h,y,x){const W=(0,a.up)("ManageNav"),z=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",i,[(0,a._)("div",c,[(0,a.Wm)(W)]),(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.members,((e,s)=>((0,a.wg)(),(0,a.iD)("div",{key:s,class:"pb-5 text-left block w-full"},[(0,a._)("div",{class:(0,o.C_)(["opacity-50 grid grid-cols-12 gap-x-5 w-full text-left hover:opacity-100 cursor-pointer",{"opacity-100":y.selectedIndex==s}]),onClick:e=>y.selectedIndex=s},[(0,a._)("div",m,(0,o.zw)(e.fields.firstName)+" "+(0,o.zw)(e.fields.lastName),1),(0,a._)("div",u," Since "+(0,o.zw)(x.dateFormated(e.sys.createdAt)),1),(0,a._)("div",p,(0,o.zw)(e.fields.emailAddress),1)],10,d),(0,a.wy)((0,a._)("div",f,[v,(0,a._)("div",g,(0,o.zw)(e.fields.walletAddress),1),w,_,(0,a._)("div",k,[(0,a.Wm)(z,{to:"/manage/proposals",class:"flex items-center"},{default:(0,a.w5)((()=>[b,(0,a.Uk)(" View "+(0,o.zw)(e.fields.firstName)+" "+(0,o.zw)(e.fields.lastName)+"'s (00) Proposals ",1)])),_:2},1024)])],512),[[t.F8,y.selectedIndex==s]])])))),128))])])])}var y=l(9669),x=l.n(y),W=l(7975),z={components:{ManageNav:W.Z},data(){return{members:[],selectedIndex:null}},methods:{dateFormated(e){var s=new Date(e);return s.toLocaleString("default",{month:"long",year:"numeric"})}},computed:{},async mounted(){console.log("members load!");try{const e=await x().get("https://salonnode-salondev-terrifickid.cloud.okteto.net/members");this.members=e.data,console.log(this.members)}catch(e){console.log("error",e)}}},U=l(3744);const C=(0,U.Z)(z,[["render",h]]);var D=C}}]);
//# sourceMappingURL=ViewMembers.f7d400b7.js.map