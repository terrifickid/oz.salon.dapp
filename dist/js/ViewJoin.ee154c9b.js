"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[172],{5860:function(e,t,s){s.d(t,{Z:function(){return W}});var l=s(6252),a=s(3577);const o=e=>((0,l.dD)("data-v-6b730d1a"),e=e(),(0,l.Cn)(),e),n={id:"links",class:"grid grid-cols-12"},r={class:"col-span-6 md:col-span-12"},i={class:"mb-10"},p=(0,l.Uk)("Start"),c=(0,l.Uk)("Treasury"),u=(0,l.Uk)("Proposals "),d={class:"text-green-500"},m=o((()=>(0,l._)("span",{style:{"margin-right":"1px"},class:"ml-1"},"(",-1))),_=o((()=>(0,l._)("span",{style:{"margin-left":"-2px"}},")",-1))),f={class:"col-span-6 md:col-span-12"},g={class:"mb-10"},v=(0,l.Uk)("Profile"),k=(0,l.Uk)("Members "),w=o((()=>(0,l._)("span",{style:{"margin-right":"1px"},class:"ml-1"},"(",-1))),h=o((()=>(0,l._)("span",{style:{"margin-left":"1px"}},")",-1)));function b(e,t,s,o,b,y){const U=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",r,[(0,l._)("ul",i,[(0,l._)("li",null,[(0,l.Wm)(U,{to:"/manage/start"},{default:(0,l.w5)((()=>[p])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(U,{to:"/manage/treasury"},{default:(0,l.w5)((()=>[c])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(U,{class:"flex items-center",to:"/manage/proposals"},{default:(0,l.w5)((()=>[u,(0,l._)("p",d,[m,(0,l.Uk)((0,a.zw)(y.activeProposalsCount)+" ",1),_])])),_:1})])])]),(0,l._)("div",f,[(0,l._)("ul",g,[(0,l._)("li",null,[(0,l.Wm)(U,{to:"/manage/profile"},{default:(0,l.w5)((()=>[v])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(U,{to:"/manage/members"},{default:(0,l.w5)((()=>[k,w,(0,l.Uk)((0,a.zw)(y.membersCount),1),h])),_:1})])])])])}var y={computed:{activeProposalsCount(){return this.$store.getters.activeProposalsCount},membersCount(){return this.$store.getters.membersCount}}},U=s(3744);const A=(0,U.Z)(y,[["render",b],["__scopeId","data-v-6b730d1a"]]);var W=A},7591:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var l=s(6252),a=s(3577);const o=(0,l.Uk)(" Hello,"),n=(0,l._)("br",null,null,-1);function r(e,t,s,r,i,p){const c=(0,l.up)("AppContent"),u=(0,l.up)("AppShell");return(0,l.wg)(),(0,l.j4)(u,{colors:i.colors,isLoaded:p.loaded,protected:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"items-center justify-center"},{default:(0,l.w5)((()=>[o,n,(0,l.Uk)((0,a.zw)(this.profile.firstName["en-US"]),1)])),_:1})])),_:1},8,["colors","isLoaded"])}var i=s(2659),p=s(5820),c={name:"DappHome",components:{AppShell:i.Z,AppContent:p.Z},data(){return{colors:["white","black"]}},computed:{loaded(){return this.profile},isNew(){return!("kycApproved"in this.profile)},isKycApproved(){return!!this.profile.kycApproved&&this.profile.kycApproved["en-US"]},isApplied(){return!(!("onboard"in this.profile)||!this.profile.onboard["en-US"])},isMember(){return"salonUnits"in this.profile&&this.profile.salonUnits["en-US"]},profile(){return this.$store.state.profile}}},u=s(3744);const d=(0,u.Z)(c,[["render",r]]);var m=d},5222:function(e,t,s){s.r(t),s.d(t,{default:function(){return $}});var l=s(6252);const a={class:"container-fluid px-5"},o={class:"grid grid-cols-12"},n={class:"col-span-12 md:col-span-3"},r={class:"col-span-12 md:col-span-9"},i={class:"mb-5"},p=(0,l._)("p",null,"Invest",-1),c=(0,l._)("p",{class:"opacity-50"},"-> Add to your existing investment",-1),u={class:"mb-5"},d=(0,l._)("p",null,"Exchange",-1),m=(0,l._)("p",{class:"opacity-50"},"-> Cash out some or all of your units",-1),_={class:"mb-5"},f=(0,l._)("p",null,"Propose",-1),g=(0,l._)("p",{class:"opacity-50"},"-> Initiate a vote on a proposal",-1),v={class:"mb-5"},k=(0,l._)("p",null,"Acquire",-1),w=(0,l._)("p",{class:"opacity-50"},"-> Propose a work for Salon to collect",-1),h={class:"mb-5"},b=(0,l._)("p",null,"Sell",-1),y=(0,l._)("p",{class:"opacity-50"}," -> Initiate a vote to sell a work from our collection ",-1),U={key:0,class:"mb-5"},A=(0,l._)("p",null,"Kick",-1),W=(0,l._)("p",{class:"opacity-50"},"-> Initiate a vote to kick",-1),C={class:"mb-5"},S=(0,l._)("p",{class:"opacity-50"},"-> View Proposals",-1);function x(e,t,s,x,P,Z){const D=(0,l.up)("ManageNav"),I=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("div",o,[(0,l._)("div",n,[(0,l.Wm)(D)]),(0,l._)("div",r,[(0,l._)("ul",null,[(0,l._)("li",i,[(0,l.Wm)(I,{to:"/manage/invest"},{default:(0,l.w5)((()=>[p,c])),_:1})]),(0,l._)("li",u,[(0,l.Wm)(I,{to:"/manage/exchange"},{default:(0,l.w5)((()=>[d,m])),_:1})]),(0,l._)("li",_,[(0,l.Wm)(I,{to:"/manage/propose"},{default:(0,l.w5)((()=>[f,g])),_:1})]),(0,l._)("li",v,[(0,l.Wm)(I,{to:"/manage/acquire"},{default:(0,l.w5)((()=>[k,w])),_:1})]),(0,l._)("li",h,[(0,l.Wm)(I,{to:"/manage/sell"},{default:(0,l.w5)((()=>[b,y])),_:1})]),Z.isAdmin?((0,l.wg)(),(0,l.iD)("li",U,[(0,l.Wm)(I,{to:"/manage/kick"},{default:(0,l.w5)((()=>[A,W])),_:1})])):(0,l.kq)("",!0),(0,l._)("li",C,[(0,l.Wm)(I,{to:"/manage/proposals"},{default:(0,l.w5)((()=>[S])),_:1})])])])])])}var P=s(6486),Z=s.n(P),D=s(5860),I={components:{ManageNav:D.Z},data(){return{}},computed:{profile(){return this.$store.state.profile},isAdmin(){var e=Z().get(this.profile,"role");return"Admin"==e}}},M=s(3744);const N=(0,M.Z)(I,[["render",x]]);var $=N}}]);
//# sourceMappingURL=ViewJoin.ee154c9b.js.map