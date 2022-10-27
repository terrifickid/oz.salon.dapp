"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[491],{136:function(s,e,t){t.d(e,{Z:function(){return x}});var a=t(6252),o=t(3577);const l=s=>((0,a.dD)("data-v-6e0d8083"),s=s(),(0,a.Cn)(),s),r={id:"links",class:"grid grid-cols-12"},i={class:"col-span-6 md:col-span-12"},n={class:"mb-10"},c=(0,a.Uk)("Start"),p=(0,a.Uk)("Treasury"),d=(0,a.Uk)("Proposals "),u={class:"text-green-500 dot"},m=l((()=>(0,a._)("span",{style:{"margin-right":"1px"},class:"ml-1"},"(",-1))),g=l((()=>(0,a._)("span",{style:{"margin-left":"-2px"}},")",-1))),f={class:"col-span-6 md:col-span-12"},_={class:"mb-10"},y=(0,a.Uk)("Profile"),h=(0,a.Uk)("Members "),v=l((()=>(0,a._)("span",{style:{"margin-right":"1px"},class:"ml-1"},"(",-1))),w=l((()=>(0,a._)("span",{style:{"margin-left":"1px"}},")",-1)));function k(s,e,t,l,k,P){const b=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",i,[(0,a._)("ul",n,[(0,a._)("li",null,[(0,a.Wm)(b,{to:"/manage/start"},{default:(0,a.w5)((()=>[c])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(b,{to:"/manage/treasury"},{default:(0,a.w5)((()=>[p])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(b,{class:"flex items-center",to:"/manage/proposals"},{default:(0,a.w5)((()=>[d,(0,a._)("p",u,[m,(0,a.Uk)((0,o.zw)(P.activeProposalsCount)+" ",1),g])])),_:1})])])]),(0,a._)("div",f,[(0,a._)("ul",_,[(0,a._)("li",null,[(0,a.Wm)(b,{to:"/manage/profile"},{default:(0,a.w5)((()=>[y])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(b,{to:"/manage/members"},{default:(0,a.w5)((()=>[h,v,(0,a.Uk)((0,o.zw)(P.membersCount),1),w])),_:1})])])])])}var P={computed:{activeProposalsCount(){return this.$store.getters.activeProposalsCount},membersCount(){return this.$store.getters.membersCount}}},b=t(3744);const C=(0,b.Z)(P,[["render",k],["__scopeId","data-v-6e0d8083"]]);var x=C},2426:function(s,e,t){t.r(e),t.d(e,{default:function(){return N}});var a=t(6252),o=t(3577);const l=s=>((0,a.dD)("data-v-5ad4a6cc"),s=s(),(0,a.Cn)(),s),r={class:"container-fluid px-5"},i={class:"grid grid-cols-12"},n={class:"col-span-12 md:col-span-3"},c={class:"hidden md:block"},p=l((()=>(0,a._)("span",{class:"opacity-50"},"Filters",-1))),d={class:"col-span-12 md:col-span-9"},u={key:0},m=l((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mr-1"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v12m6-6H6"})],-1))),g=(0,a.Uk)(" Load More "),f=[m,g];function _(s,e,t,l,m,g){const _=(0,a.up)("ManageNav"),y=(0,a.up)("router-link"),h=(0,a.up)("ListProposalItem");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",i,[(0,a._)("div",n,[(0,a.Wm)(_),(0,a._)("div",c,[p,(0,a._)("ul",null,[(0,a.Wm)(y,{to:"/manage/proposals"},{default:(0,a.w5)((()=>[(0,a._)("li",{class:(0,o.C_)({"opacity-50":"all"!=m.filter,"opacity-100":"all"==m.filter})},[(0,a._)("button",{onClick:e[0]||(e[0]=s=>m.filter="all")},"All")],2)])),_:1}),(0,a.Wm)(y,{to:"/manage/proposals"},{default:(0,a.w5)((()=>[(0,a._)("li",{class:(0,o.C_)({"opacity-50":"pending"!=m.filter,"opacity-100":"pending"==m.filter})},[(0,a._)("button",{onClick:e[1]||(e[1]=s=>m.filter="pending")},"Pending")],2)])),_:1}),(0,a.Wm)(y,{to:"/manage/proposals"},{default:(0,a.w5)((()=>[(0,a._)("li",{class:(0,o.C_)({"opacity-50":"voted"!=m.filter,"opacity-100":"voted"==m.filter})},[(0,a._)("button",{onClick:e[2]||(e[2]=s=>m.filter="voted")},"Voted")],2)])),_:1}),(0,a.Wm)(y,{to:"/manage/proposals"},{default:(0,a.w5)((()=>[(0,a._)("li",{class:(0,o.C_)({"opacity-50":"closed"!=m.filter,"opacity-100":"closed"==m.filter})},[(0,a._)("button",{onClick:e[3]||(e[3]=s=>m.filter="closed")},"Closed")],2)])),_:1}),(0,a.Wm)(y,{to:"/manage/proposals"},{default:(0,a.w5)((()=>[(0,a._)("li",{class:(0,o.C_)({"opacity-50":"my"!=m.filter,"opacity-100":"my"==m.filter})},[(0,a._)("button",{onClick:e[4]||(e[4]=s=>m.filter="my")},"My Proposals")],2)])),_:1})])])]),(0,a._)("div",d,[g.filteredProposals.length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",u,"No proposals.")),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.filteredProposals.slice(0,m.perPage),((s,e)=>((0,a.wg)(),(0,a.j4)(h,{key:e,item:s},null,8,["item"])))),128)),m.perPage<=g.filteredProposals.length?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"flex opacity-50 mt-12 mb-32 cursor-pointer",onClick:e[5]||(e[5]=s=>m.perPage+=10)},f)):(0,a.kq)("",!0)])])])}var y=t(9669),h=t.n(y),v=t(136);const w={class:"capitalize"},k={class:"col-start-2 col-span-10 xl:col-span-7"},P={class:"col-start-2 col-span-10 xl:col-span-2 truncate"},b=(0,a._)("div",{class:"hidden xl:block xl:col-span-1 md:text-right"},"0% / 0%",-1);function C(s,e,t,l,r,i){const n=(0,a.up)("AppCountdown"),c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(c,{to:"/manage/"+t.item.sys.id,class:"opacity-50 hover:opacity-100"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,o.C_)(["grid grid-cols-12 flex items-center gap-x-5",{"mb-10":!i.hasPassed,"mb-5":i.hasPassed}])},[(0,a._)("div",{class:(0,o.C_)(["col-span-1",{"text-green-500":!i.hasPassed}])},[(0,a._)("span",{class:(0,o.C_)(["",{"text-green-500":!i.hasPassed}])},(0,o.zw)(i.lpad),3)],2),(0,a._)("div",{class:(0,o.C_)(["col-span-1 col-start-2",{"text-green-500":!i.hasPassed}])},[(0,a._)("b",w,(0,o.zw)(t.item.sys.contentType.sys.id),1)],2),(0,a._)("div",k,[i.hasPassed?((0,a.wg)(),(0,a.j4)(n,{key:0,start:0,type:t.item.sys.contentType.sys.id},null,8,["type"])):((0,a.wg)(),(0,a.j4)(n,{key:1,start:t.item.sys.createdAt,type:t.item.sys.contentType.sys.id},null,8,["start","type"]))]),(0,a._)("div",P,(0,o.zw)(t.item.fields.profile.firstName)+" "+(0,o.zw)(t.item.fields.profile.lastName),1),b],2)])),_:1},8,["to"])}var x=t(6486),W=t.n(x),A=t(63),D={components:{AppCountdown:A.Z},props:["item"],computed:{lpad(){var s=new Array(4).join("0");return(s+this.item.sys.id.replace(/\D/g,"")).slice(-3)},hasPassed(){return"boolean"==typeof W().get(this.item,"fields.votes.passed")}},mounted(){console.log()}},U=t(3744);const z=(0,U.Z)(D,[["render",C]]);var M=z,j={components:{ManageNav:v.Z,ListProposalItem:M},data(){return{weights:[],loaded:!1,filter:"all",perPage:10}},computed:{filteredProposals(){var s;switch(this.filter){case"my":s=this.myProposals;break;case"pending":s=this.activeProposals;break;case"voted":s=this.votedProposals;break;case"closed":s=this.closedProposals;break;default:s=this.proposals}return s},proposals(){return this.$store.state.proposals},walletAddress(){return this.$store.state.walletAddress},myProposals(){return this.proposals.filter((s=>W().get(s,"fields.profile.walletAddress")==this.walletAddress))},votedProposals(){return this.activeProposals.filter((s=>W().get(s,"fields.votes.votes.length")>0))},activeProposals(){return this.proposals.filter((s=>"boolean"!=typeof W().get(s,"fields.votes.passed")))},closedProposals(){return this.proposals.filter((s=>"boolean"==typeof W().get(s,"fields.votes.passed")))},uri(){return"https://salonnode-salondev-terrifickid.cloud.okteto.net/types/"}},methods:{async getWeights(){try{const s=await h().get("https://salonnode-salondev-terrifickid.cloud.okteto.net/members?cache=true");this.weights=s.data}catch(s){console.log("error",s)}}},async beforeMount(){console.log("proposals load!");const s=await h().post(this.uri,{types:"exchange,acquire,invest,propose,sell,onboard,kick"});this.$store.state.proposals=W().get(s,"data.message"),await this.getWeights(),this.loaded=!0,console.log("loaded!")}};const Z=(0,U.Z)(j,[["render",_],["__scopeId","data-v-5ad4a6cc"]]);var N=Z}}]);
//# sourceMappingURL=ViewProposals.b81728c7.js.map