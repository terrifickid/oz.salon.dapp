"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[147],{170:function(e,o,t){t.d(o,{Z:function(){return h}});var n=t(6252),s=t(9963);const r={class:"section"};function i(e,o,t,i,l,a){const c=(0,n.up)("AppLoader"),d=(0,n.up)("FormIntro"),u=(0,n.up)("FormField"),p=(0,n.up)("full-page");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n.Wm)(c,null,null,512),[[s.F8,l.processing]]),l.ready?(0,n.wy)(((0,n.wg)(),(0,n.j4)(p,{key:0,ref:"fullpage",options:l.options,class:"pr-16"},{default:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n.Wm)(d,{name:l.name,description:l.description,onReady:a.next},null,8,["name","description","onReady"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.fields,((e,o)=>((0,n.wg)(),(0,n.iD)("div",{key:o,class:"section"},[(0,n.Wm)(u,{field:e,onReady:a.next,index:o,modelValue:l.form[e.id],"onUpdate:modelValue":o=>l.form[e.id]=o},null,8,["field","onReady","index","modelValue","onUpdate:modelValue"])])))),128))])),_:1},8,["options"])),[[s.F8,!l.processing]]):(0,n.kq)("",!0)],64)}var l=t(9669),a=t.n(l),c=t(9233),d=t(4342),u=t(1245),p={components:{FormField:c.Z,AppLoader:u.Z,FormIntro:d.Z},props:["url"],data(){return{name:"",description:"",ready:!1,processing:!0,btnTxt:"Submit",fields:[],form:{},sending:!1,options:{licenseKey:"K9EP6-N164H-2BKM8-MJLGI-KSURM",controlArrows:!0,scrollBar:!1,scrollingSpeed:500,navigation:!0,navigationPosition:"right"}}},methods:{async next(){await this.validate()?this.submitForm():console.log("next")},async validate(){console.log("validate form!");var e=0,o=!1;for(let t of this.fields){if(""==this.form[t.id]&&(o=!0),[t.id]in this.form||(o=!0),o){this.$refs.fullpage.api.moveTo(e+2);break}e++}return console.log("error is",o),!o},async submitForm(){this.processing=!0,console.log("Ran Submit!");try{const e=await a().post(this.url,this.form);e.data.result?(console.log("success",e.data),this.$emit("success")):(alert("Error, Please try again."),this.processing=!1,console.log("error",e.data))}catch(e){this.processing=!1,console.log("error",e)}},async resize(){console.log("resize!")}},mounted(){console.log("mounted!")},async beforeMount(){try{const e=await a().get(this.url);console.log("form",e.data),this.name=e.data.name,this.description=e.data.description,this.fields=e.data.fields.filter((function(e){var o=["votes"];return!o.includes(e.id)})),this.$emit("ready"),this.ready=!0,this.processing=!1}catch(e){console.log("error",e)}}},f=t(3744);const m=(0,f.Z)(p,[["render",i]]);var h=m},7222:function(e,o,t){t.r(o),t.d(o,{default:function(){return g}});var n=t(6252),s=t(9963);const r={key:0},i={class:"pt-32 px-3"},l=(0,n._)("p",null,"Thank You",-1),a=(0,n._)("p",null,"Invest proposal has been submitted.",-1),c=[l,a];function d(e,o,t,l,a,d){const u=(0,n.up)("AppForm"),p=(0,n.up)("AppShell");return(0,n.wg)(),(0,n.j4)(p,{colors:a.colors,isLoaded:!0,protected:!0},{default:(0,n.w5)((()=>[a.isDone?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(u,{url:"https://salontest-terrifickid.cloud.okteto.net/form/transfer",onSuccess:o[0]||(o[0]=e=>a.isDone=!0)})])),(0,n.wy)((0,n._)("div",i,c,512),[[s.F8,a.isDone]])])),_:1},8,["colors"])}var u=t(542),p=t(170),f={components:{AppShell:u.Z,AppForm:p.Z},data(){return{colors:["white","black"],isDone:!1}},computed:{}},m=t(3744);const h=(0,m.Z)(f,[["render",d]]);var g=h},2994:function(e,o,t){t.r(o),t.d(o,{default:function(){return u}});var n=t(6252);const s=(0,n._)("div",{class:"text-center"},null,-1);function r(e,o,t,r,i,l){const a=(0,n.up)("AppContent"),c=(0,n.up)("AppShell");return(0,n.wg)(),(0,n.j4)(c,{colors:i.colors,isLoaded:!0,protected:!0},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{class:"items-center justify-center font-haffer"},{default:(0,n.w5)((()=>[s])),_:1})])),_:1},8,["colors"])}var i=t(542),l=t(5820),a={components:{AppShell:i.Z,AppContent:l.Z},data(){return{colors:["white","black"]}}},c=t(3744);const d=(0,c.Z)(a,[["render",r]]);var u=d}}]);
//# sourceMappingURL=ViewTransfer.f38c0757.js.map