"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[504],{4478:function(s,e,a){a.r(e),a.d(e,{default:function(){return M}});var t=a(6252),l=a(3577);const i=s=>((0,t.dD)("data-v-75983138"),s=s(),(0,t.Cn)(),s),n={class:"pb-48"},o={key:0,class:"grid grid-cols-12 pt-20 w-full font-haffer px-5"},r={class:"col-span-12 md:col-span-6"},d=i((()=>(0,t._)("p",{class:"text-2xl mb-8"},"Members",-1))),c=["innerHTML"],p=i((()=>(0,t._)("div",{class:"hidden md:block md:col-span-3"},null,-1))),m=i((()=>(0,t._)("div",{class:"hidden md:block md:col-span-3"},[(0,t._)("p",{class:"pb-8"},"Contact"),(0,t._)("p",{class:"opacity-50 pb-4"},[(0,t.Uk)("Jordan Huelskamp"),(0,t._)("br"),(0,t._)("i",null,"Founder")]),(0,t._)("p",{class:"opacity-50"},"hello@salondao.xyz")],-1))),f={class:"grid grid-cols-12 w-full fot-haffer px-5 pt-12",stye:"font-size: 16px;"},u={class:"grid grid-cols-12 pt-12 w-full font-haffer px-5 pt-24 gap-5"},h={class:"col-span-12 md:col-span-6"},b=["innerHTML"],g={class:"grid grid-cols-12 w-full fot-haffer px-5 pt-12 gap-5",stye:"font-size: 16px;"};function y(s,e,a,i,y,k){const w=(0,t.up)("AppShell");return(0,t.wg)(),(0,t.j4)(w,{isLoaded:y.loaded,protected:!1},{default:(0,t.w5)((()=>[(0,t._)("div",n,[y.loaded?((0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",r,[d,(0,t._)("p",{class:"text-2xl opacity-50",innerHTML:y.data.code},null,8,c)]),p,m])):(0,t.kq)("",!0),(0,t._)("div",f,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.data.list1,((s,e)=>((0,t.wg)(),(0,t.iD)("div",{class:"col-span-6 md:col-span-3 pb-4",key:e},[(0,t._)("span",null,(0,l.zw)(s),1)])))),128))]),(0,t._)("div",u,[(0,t._)("div",h,[(0,t._)("p",{class:"text-2xl opacity-50",innerHTML:y.data.code2},null,8,b)])]),(0,t._)("div",g,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.data.list2,((s,e)=>((0,t.wg)(),(0,t.iD)("div",{class:"col-span-6 md:col-span-3 pb-4",key:e},[(0,t._)("span",null,(0,l.zw)(s),1)])))),128))])])])),_:1},8,["isLoaded"])}var k=a(9669),w=a.n(k),_=a(4474),v={components:{AppShell:_.Z},data(){return{loaded:!1,data:{},members:[],allMembers:[],artists:["Kennedy Yanko","José Davila","Jean-Baptiste Bernadet","Günther Förg","Mika Tajima","Yoko Ono","Kennedy Yanko","José Davila","Jean-Baptiste Bernadet","Günther Förg","Mika Tajima","Yoko Ono"]}},computed:{},methods:{filterMembers(){if(this.members=this.allMembers.slice(),""!==this.filters.lastname&&(this.members=this.members.filter((s=>s.fields.lastName===this.filters.lastname))),""!==this.filters.orderby)switch(this.filters.orderby){case"Alphabetical":this.members=this.members.sort(((s,e)=>{const a=s.fields.lastName.toUpperCase(),t=e.fields.lastName.toUpperCase();return a<t?-1:a>t?1:0}));break;case"Date joined":this.members=this.members.sort(((s,e)=>{const a=Date.parse(s.sys.createdAt),t=Date.parse(e.sys.createdAt);return a>t?-1:a<t?1:0}));break;case"Units owned":this.members=this.members.sort(((s,e)=>s.fields.units>e.fields.units?-1:s.fields.units<e.fields.units?1:0));break}}},async mounted(){console.log("members load!");try{const s=await w().get("https://salon2-ymzsucskyq-wl.a.run.app/members");this.allMembers=s.data.filter((s=>s.fields.units>0)),this.members=s.data.filter((s=>s.fields.units>0)),console.log(this.members)}catch(s){console.log("error",s)}console.log("content load!");try{const s=await w().get("https://salon2-ymzsucskyq-wl.a.run.app/entry/2ztUn0TxjPCyXFuox0TDQr");this.data=s.data.fields}catch(s){console.log("error",s)}this.loaded=!0}},x=a(3744);const D=(0,x.Z)(v,[["render",y],["__scopeId","data-v-75983138"]]);var M=D}}]);
//# sourceMappingURL=ViewMemberPub.c2c0dbd0.js.map