"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[491],{791:function(e,s,t){t.d(s,{Z:function(){return x}});var o=t(6252),a=t(3577);const l=e=>((0,o.dD)("data-v-27aaa3e6"),e=e(),(0,o.Cn)(),e),r={id:"links",class:"grid grid-cols-12"},n={class:"col-span-6 md:col-span-12"},i={class:"mb-10"},d=(0,o.Uk)("Start"),p=(0,o.Uk)("Treasury"),c={class:"dot inline-block"},m=(0,o.Uk)(" Proposals "),u=l((()=>(0,o._)("span",{style:{"margin-right":"1px"}},"(",-1))),g=l((()=>(0,o._)("span",{style:{"margin-left":"1px"}},")",-1))),f={class:"col-span-6 md:col-span-12"},_={class:"mb-10"},v=(0,o.Uk)("Profile"),y=(0,o.Uk)("Members "),h=l((()=>(0,o._)("span",{style:{"margin-right":"1px"}},"(",-1))),b=l((()=>(0,o._)("span",{style:{"margin-left":"1px"}},")",-1)));function k(e,s,t,l,k,w){const P=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",n,[(0,o._)("ul",i,[(0,o._)("li",null,[(0,o.Wm)(P,{to:"/manage/start"},{default:(0,o.w5)((()=>[d])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(P,{to:"/manage/treasury"},{default:(0,o.w5)((()=>[p])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(P,{class:"flex items-center",to:"/manage/proposals"},{default:(0,o.w5)((()=>[(0,o._)("p",c,[m,(0,o._)("span",{class:(0,a.C_)([{hidden:!w.activeProposalsCount},"text-green-500"])},[u,(0,o.Uk)((0,a.zw)(w.activeProposalsCount),1),g],2)])])),_:1})])])]),(0,o._)("div",f,[(0,o._)("ul",_,[(0,o._)("li",null,[(0,o.Wm)(P,{to:"/manage/profile"},{default:(0,o.w5)((()=>[v])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(P,{to:"/manage/members"},{default:(0,o.w5)((()=>[y,(0,o._)("p",{class:(0,a.C_)(["inline-block",{hidden:!w.membersCount}])},[h,(0,o.Uk)((0,a.zw)(w.membersCount),1),b],2)])),_:1})])])])])}var w={computed:{activeProposalsCount(){return this.$store.getters.activeProposalsCount},membersCount(){return this.$store.getters.membersCount}}},P=t(3744);const C=(0,P.Z)(w,[["render",k],["__scopeId","data-v-27aaa3e6"]]);var x=C},6070:function(e,s,t){t.r(s),t.d(s,{default:function(){return N}});var o=t(6252),a=t(3577);const l=e=>((0,o.dD)("data-v-71fdaa9e"),e=e(),(0,o.Cn)(),e),r={class:"container-fluid px-5"},n={class:"grid grid-cols-12 gap-5"},i={class:"col-span-12 md:col-span-3"},d={class:"md:fixed"},p={class:"hidden md:block"},c=l((()=>(0,o._)("span",{class:"opacity-50"},"Filters",-1))),m={class:"col-span-12 md:col-span-9"},u={key:0},g=l((()=>(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mr-1"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v12m6-6H6"})],-1))),f=(0,o.Uk)(" Load More "),_=[g,f];function v(e,s,t,l,g,f){const v=(0,o.up)("AppLoaderFull"),y=(0,o.up)("ManageNav"),h=(0,o.up)("ListProposalItem");return(0,o.wg)(),(0,o.iD)(o.HY,null,[g.loaded?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:0})),(0,o._)("div",r,[(0,o._)("div",n,[(0,o._)("div",i,[(0,o._)("div",d,[(0,o.Wm)(y),(0,o._)("div",p,[c,(0,o._)("ul",null,[(0,o._)("li",{class:(0,a.C_)({"opacity-50":"all"!=g.filter,"opacity-100":"all"==g.filter})},[(0,o._)("button",{onClick:s[0]||(s[0]=e=>g.filter="all")},"All")],2),(0,o._)("li",{class:(0,a.C_)({"opacity-50":"pending"!=g.filter,"opacity-100":"pending"==g.filter})},[(0,o._)("button",{onClick:s[1]||(s[1]=e=>g.filter="pending")},"Pending")],2),(0,o._)("li",{class:(0,a.C_)({"opacity-50":"closed"!=g.filter,"opacity-100":"closed"==g.filter})},[(0,o._)("button",{onClick:s[2]||(s[2]=e=>g.filter="closed")},"Closed")],2),(0,o._)("li",{class:(0,a.C_)({"opacity-50":"my"!=g.filter,"opacity-100":"my"==g.filter})},[(0,o._)("button",{onClick:s[3]||(s[3]=e=>g.filter="my")},"My Proposals")],2)])])])]),(0,o._)("div",m,[f.filteredProposals.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",u,"No proposals.")),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.filteredProposals.slice(0,g.perPage),((e,s)=>((0,o.wg)(),(0,o.j4)(h,{key:s,item:e,members:g.members},null,8,["item","members"])))),128)),g.perPage<=f.filteredProposals.length?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"flex opacity-50 mt-12 mb-32 cursor-pointer",onClick:s[4]||(s[4]=e=>g.perPage+=10)},_)):(0,o.kq)("",!0)])])])],64)}var y=t(9669),h=t.n(y),b=t(791),k=t(7216);const w={class:"capitalize"},P={class:"hidden col-start-2 col-span-10 lg:block xl:col-span-5"},C={class:"col-start-3 md:col-start-2 col-span-8 xl:col-span-2 truncate"},x={class:"hidden xl:block xl:col-span-2 md:text-right"};function A(e,s,t,l,r,n){const i=(0,o.up)("AppCountdown"),d=(0,o.up)("CounterVote"),p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(p,{to:"/manage/"+t.item.sys.id,class:"group"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,a.C_)(["grid grid-cols-12 flex items-center gap-x-5",{"mb-10":!n.hasPassed,"mb-5":n.hasPassed}])},[(0,o._)("div",{class:(0,a.C_)(["col-span-2 md:col-span-1",{"text-green-500":!n.hasPassed}])},[(0,o._)("span",{class:(0,a.C_)(["",{"text-green-500 dot":!n.hasPassed}])},(0,a.zw)(n.prettyId),3)],2),(0,o._)("div",{class:(0,a.C_)(["col-span-2",{"text-green-500":!n.hasPassed}])},[(0,o._)("b",w,(0,a.zw)(t.item.sys.contentType.sys.id),1)],2),(0,o._)("div",P,[n.hasPassed?((0,o.wg)(),(0,o.j4)(i,{key:0,start:0,type:t.item.sys.contentType.sys.id},null,8,["type"])):((0,o.wg)(),(0,o.j4)(i,{key:1,start:t.item.sys.createdAt,type:t.item.sys.contentType.sys.id},null,8,["start","type"]))]),(0,o._)("div",C,(0,a.zw)(t.item.fields.profile.firstName)+" "+(0,a.zw)(t.item.fields.profile.lastName),1),(0,o._)("div",x,[(0,o.Wm)(d,{votes:t.item.fields.votes,members:t.members,mode:1},null,8,["votes","members"])])],2)])),_:1},8,["to"])}var z=t(6486),M=t.n(z),D=t(7334),U=t(4982),Z={components:{AppCountdown:U.Z,CounterVote:D.Z},props:["item","members"],computed:{prettyId(){var e=this.item.fields.prettyId;e||(e=0);var s=new Array(4).join("0");return(s+e.toString().replace(/\D/g,"")).slice(-3)},hasPassed(){return"boolean"==typeof M().get(this.item,"fields.votes.passed")}},mounted(){console.log()}},j=t(3744);const I=(0,j.Z)(Z,[["render",A]]);var W=I,$={components:{ManageNav:b.Z,ListProposalItem:W,AppLoaderFull:k.Z},data(){return{members:[],loaded:!1,filter:"all",perPage:10}},computed:{filteredProposals(){var e;switch(this.filter){case"my":e=this.myProposals;break;case"pending":e=this.activeProposals;break;case"voted":e=this.votedProposals;break;case"closed":e=this.closedProposals;break;default:e=this.proposals}var s=M().get(this.$route,"params.address");return s&&(e=e.filter((e=>{var t=M().get(e,"fields.profile.walletAddress");return s==t}))),e.sort((function(e,s){var t="boolean"==typeof M().get(e,"fields.votes.passed"),o="boolean"==typeof M().get(s,"fields.votes.passed");return t&&!o?1:!t&&o?-1:0}))},proposals(){return this.$store.state.proposals},walletAddress(){return this.$store.state.walletAddress},myProposals(){return this.proposals.filter((e=>M().get(e,"fields.profile.walletAddress")==this.walletAddress))},votedProposals(){return this.activeProposals.filter((e=>M().get(e,"fields.votes.votes.length")>0))},activeProposals(){return this.proposals.filter((e=>"boolean"!=typeof M().get(e,"fields.votes.passed")))},closedProposals(){return this.proposals.filter((e=>"boolean"==typeof M().get(e,"fields.votes.passed")))},uri(){return"https://salon-node.salondao.xyz/types/"}},methods:{async getMembers(){try{const e=await h().get("https://salon-node.salondao.xyz/members");return e.data}catch(e){console.log("error",e)}}},async beforeMount(){console.log("proposals load!");const e=await h().post(this.uri,{types:"exchange,acquire,invest,propose,sell,onboard,kick"});this.$store.state.proposals=M().get(e,"data.message"),this.members=await this.getMembers(),this.loaded=!0,console.log("loaded!")}};const L=(0,j.Z)($,[["render",v],["__scopeId","data-v-71fdaa9e"]]);var N=L}}]);
//# sourceMappingURL=ViewProposals.322842a3.js.map