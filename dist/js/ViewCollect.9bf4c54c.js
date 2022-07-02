"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[342],{170:function(o,e,n){n.d(e,{Z:function(){return h}});var t=n(6252),s=n(9963);const r={class:"section"};function i(o,e,n,i,l,a){const c=(0,t.up)("AppLoader"),d=(0,t.up)("FormIntro"),u=(0,t.up)("FormField"),p=(0,t.up)("full-page");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.wy)((0,t.Wm)(c,null,null,512),[[s.F8,l.processing]]),l.ready?(0,t.wy)(((0,t.wg)(),(0,t.j4)(p,{key:0,ref:"fullpage",options:l.options,class:"pr-16"},{default:(0,t.w5)((()=>[(0,t._)("div",r,[(0,t.Wm)(d,{name:l.name,description:l.description,onReady:a.next},null,8,["name","description","onReady"])]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(l.fields,((o,e)=>((0,t.wg)(),(0,t.iD)("div",{key:e,class:"section"},[(0,t.Wm)(u,{field:o,onReady:a.next,index:e,modelValue:l.form[o.id],"onUpdate:modelValue":e=>l.form[o.id]=e},null,8,["field","onReady","index","modelValue","onUpdate:modelValue"])])))),128))])),_:1},8,["options"])),[[s.F8,!l.processing]]):(0,t.kq)("",!0)],64)}var l=n(9669),a=n.n(l),c=n(9233),d=n(4342),u=n(1245),p={components:{FormField:c.Z,AppLoader:u.Z,FormIntro:d.Z},props:["url"],data(){return{name:"",description:"",ready:!1,processing:!0,btnTxt:"Submit",fields:[],form:{},sending:!1,options:{licenseKey:"K9EP6-N164H-2BKM8-MJLGI-KSURM",controlArrows:!0,scrollBar:!1,scrollingSpeed:500,navigation:!0,navigationPosition:"right"}}},methods:{async next(){await this.validate()?this.submitForm():console.log("next")},async validate(){console.log("validate form!");var o=0,e=!1;for(let n of this.fields){if(""==this.form[n.id]&&(e=!0),[n.id]in this.form||(e=!0),e){this.$refs.fullpage.api.moveTo(o+2);break}o++}return console.log("error is",e),!e},async submitForm(){this.processing=!0,console.log("Ran Submit!");try{const o=await a().post(this.url,this.form);o.data.result?(console.log("success",o.data),this.$emit("success")):(alert("Error, Please try again."),this.processing=!1,console.log("error",o.data))}catch(o){this.processing=!1,console.log("error",o)}},async resize(){console.log("resize!")}},mounted(){console.log("mounted!")},async beforeMount(){try{const o=await a().get(this.url);console.log("form",o.data),this.name=o.data.name,this.description=o.data.description,this.fields=o.data.fields.filter((function(o){var e=["votes"];return!e.includes(o.id)})),this.$emit("ready"),this.ready=!0,this.processing=!1}catch(o){console.log("error",o)}}},m=n(3744);const f=(0,m.Z)(p,[["render",i]]);var h=f},8237:function(o,e,n){n.r(e),n.d(e,{default:function(){return g}});var t=n(6252),s=n(9963);const r={key:0},i={class:"pt-32 px-3"},l=(0,t._)("p",null,"Thank You",-1),a=(0,t._)("p",null,"Invest proposal has been submitted.",-1),c=[l,a];function d(o,e,n,l,a,d){const u=(0,t.up)("AppForm"),p=(0,t.up)("AppShell");return(0,t.wg)(),(0,t.j4)(p,{colors:a.colors,isLoaded:!0,protected:!0},{default:(0,t.w5)((()=>[a.isDone?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(u,{url:"https://salontest-terrifickid.cloud.okteto.net/form/collect",onSuccess:e[0]||(e[0]=o=>a.isDone=!0)})])),(0,t.wy)((0,t._)("div",i,c,512),[[s.F8,a.isDone]])])),_:1},8,["colors"])}var u=n(542),p=n(170),m={components:{AppShell:u.Z,AppForm:p.Z},data(){return{colors:["white","black"],isDone:!1}},computed:{}},f=n(3744);const h=(0,f.Z)(m,[["render",d]]);var g=h},94:function(o,e,n){n.r(e),n.d(e,{default:function(){return g}});var t=n(6252),s=n(9963);const r={key:0},i={class:"pt-32 px-3"},l=(0,t._)("p",null,"Thank You",-1),a=(0,t._)("p",null,"Invest proposal has been submitted.",-1),c=[l,a];function d(o,e,n,l,a,d){const u=(0,t.up)("AppForm"),p=(0,t.up)("AppShell");return(0,t.wg)(),(0,t.j4)(p,{colors:a.colors,isLoaded:!0,protected:!0},{default:(0,t.w5)((()=>[a.isDone?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(u,{url:"https://salontest-terrifickid.cloud.okteto.net/form/sell",onSuccess:e[0]||(e[0]=o=>a.isDone=!0)})])),(0,t.wy)((0,t._)("div",i,c,512),[[s.F8,a.isDone]])])),_:1},8,["colors"])}var u=n(542),p=n(170),m={components:{AppShell:u.Z,AppForm:p.Z},data(){return{colors:["white","black"],isDone:!1}},computed:{}},f=n(3744);const h=(0,f.Z)(m,[["render",d]]);var g=h}}]);
//# sourceMappingURL=ViewCollect.9bf4c54c.js.map