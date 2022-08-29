"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[563],{9917:function(s,e,t){t.r(e),t.d(e,{default:function(){return I}});var o=t(6252);const l=s=>((0,o.dD)("data-v-0292c9ed"),s=s(),(0,o.Cn)(),s),a={class:"pt-32 pb-64"},r={class:"grid grid-cols-12 w-full"},i={class:"app-frame"},n={class:"px-3"},p=l((()=>(0,o._)("p",{class:"text-xl"},"My Proposals",-1))),d={key:0,class:"text-sm mt-3"},c=l((()=>(0,o._)("p",{class:"mt-24 text-xl"},"Active Proposals",-1))),u={class:"mt-3"},m={key:0,class:"text-sm mt-3"},f=l((()=>(0,o._)("p",{class:"mt-24 text-xl"},"Closed Proposals",-1))),g={class:"mt-3"},w={key:0,class:"text-sm mt-3"};function h(s,e,t,l,h,v){const y=(0,o.up)("ListProposalItem"),k=(0,o.up)("AppShell");return(0,o.wg)(),(0,o.j4)(k,{colors:h.colors,isLoaded:h.loaded,protected:!0,class:"font-haffer"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o._)("div",r,[(0,o._)("div",i,[(0,o._)("div",n,[p,v.myProposals.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",d,"No proposals.")),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(v.myProposals,((s,e)=>((0,o.wg)(),(0,o.j4)(y,{key:e,item:s},null,8,["item"])))),128)),c,(0,o._)("div",u,[v.activeProposals.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",m," No proposals. ")),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(v.activeProposals,((s,e)=>((0,o.wg)(),(0,o.j4)(y,{key:e,item:s},null,8,["item"])))),128))]),f,(0,o._)("div",g,[v.closedProposals.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",w," No proposals. ")),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(v.closedProposals,((s,e)=>((0,o.wg)(),(0,o.j4)(y,{key:e,item:s},null,8,["item"])))),128))])])])])])])),_:1},8,["colors","isLoaded"])}var v=t(9669),y=t.n(v),k=t(5207),_=t(3577);const P={class:"border-b border-black py-3 grid grid-cols-12"},A={class:"col-span-8"},b={class:"capitalize"},x={class:"col-span-4 flex items-center justify-end text-sm"},D=(0,o.Uk)("View Proposal ");function Z(s,e,t,l,a,r){const i=(0,o.up)("AppCountdown"),n=(0,o.up)("AppButton"),p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("div",A,[(0,o._)("b",b,(0,_.zw)(t.item.sys.contentType.sys.id),1),(0,o.Uk)(" "+(0,_.zw)(t.item.fields.profile.firstName)+" "+(0,_.zw)(t.item.fields.profile.lastName)+" ",1),(0,o.Wm)(i,{start:t.item.sys.createdAt},null,8,["start"])]),(0,o._)("div",x,[(0,o.Wm)(p,{to:"/governance/"+t.item.sys.id},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{class:"flex items-center"},{default:(0,o.w5)((()=>[D])),_:1})])),_:1},8,["to"])])])}var j=t(7175),C=t(8114),S={components:{AppButton:j.Z,AppCountdown:C.Z},props:["item"],mounted(){console.log()}},W=t(3744);const L=(0,W.Z)(S,[["render",Z]]);var N=L,z=t(6486),R=t.n(z),q={components:{AppShell:k.Z,ListProposalItem:N},data(){return{colors:["white","black"],proposals:[],weights:[],loaded:!1}},computed:{walletAddress(){return this.$store.state.walletAddress},myProposals(){return this.proposals.filter((s=>R().get(s,"fields.profile.walletAddress")==this.walletAddress))},activeProposals(){return this.proposals.filter((s=>!R().get(s,"fields.votes.passed")))},closedProposals(){return this.proposals.filter((s=>R().get(s,"fields.votes.passed")))},uri(){return"https://salonnode-salondev-terrifickid.cloud.okteto.net/types/"}},methods:{async getWeights(){try{const s=await y().get("https://salonnode-salondev-terrifickid.cloud.okteto.net/members?cache=true");this.weights=s.data}catch(s){console.log("error",s)}}},async beforeMount(){console.log("proposals load!");const s=await y().post(this.uri,{types:"collect,invest,propose,sell,onboard,kick"});this.proposals=R().get(s,"data.message"),console.log(this.proposals),await this.getWeights(),this.loaded=!0,console.log("loaded!")}};const H=(0,W.Z)(q,[["render",h],["__scopeId","data-v-0292c9ed"]]);var I=H},6061:function(s,e,t){t.r(e),t.d(e,{default:function(){return d}});var o=t(6252);function l(s,e,t,l,a,r){const i=(0,o.up)("FormProposal"),n=(0,o.up)("AppShell");return(0,o.wg)(),(0,o.j4)(n,{colors:a.colors,isLoaded:!0,protected:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{id:s.$route.params.id,onReady:r.ready},null,8,["id","onReady"])])),_:1},8,["colors"])}var a=t(5207),r=t(6277),i={components:{AppShell:a.Z,FormProposal:r.Z},data(){return{colors:["white","black"],isReady:!1}},methods:{ready(){this.isReady=!0}}},n=t(3744);const p=(0,n.Z)(i,[["render",l]]);var d=p}}]);
//# sourceMappingURL=ViewGovernance.e6963d79.js.map