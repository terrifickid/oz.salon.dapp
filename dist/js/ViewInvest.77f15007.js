"use strict";(self["webpackChunkSalonDAO"]=self["webpackChunkSalonDAO"]||[]).push([[930],{9404:function(o,e,n){n.d(e,{Z:function(){return g}});var s=n(6252),t=n(9963);const i={class:"section"};function r(o,e,n,r,l,a){const c=(0,s.up)("AppLoader"),d=(0,s.up)("FormIntro"),u=(0,s.up)("FormField"),p=(0,s.up)("full-page");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.wy)((0,s.Wm)(c,null,null,512),[[t.F8,l.processing]]),l.ready?(0,s.wy)(((0,s.wg)(),(0,s.j4)(p,{key:0,ref:"fullpage",options:l.options,class:"pr-16"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s.Wm)(d,{name:l.name,description:l.description,onReady:a.next},null,8,["name","description","onReady"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.fields,((o,e)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"section"},[(0,s.Wm)(u,{field:o,onReady:a.next,index:e,modelValue:l.form[o.id],"onUpdate:modelValue":e=>l.form[o.id]=e},null,8,["field","onReady","index","modelValue","onUpdate:modelValue"])])))),128))])),_:1},8,["options"])),[[t.F8,!l.processing]]):(0,s.kq)("",!0)],64)}var l=n(9669),a=n.n(l),c=n(5792),d=n(7439),u=n(4482),p={components:{FormField:c.Z,AppLoader:u.Z,FormIntro:d.Z},props:["url"],data(){return{name:"",description:"",ready:!1,processing:!0,btnTxt:"Submit",fields:[],form:{},sending:!1,options:{licenseKey:"K9EP6-N164H-2BKM8-MJLGI-KSURM",controlArrows:!0,scrollBar:!1,scrollingSpeed:500,navigation:!0,navigationPosition:"right"}}},methods:{async next(){await this.validate()?this.submitForm():console.log("next")},async validate(){console.log("validate form!");var o=0,e=!1;for(let n of this.fields){if(""==this.form[n.id]&&(e=!0),[n.id]in this.form||(e=!0),e){this.$refs.fullpage.api.moveTo(o+2);break}o++}return console.log("error is",e),!e},async submitForm(){this.processing=!0,console.log("Ran Submit!");try{const o=await a().post(this.url,this.form);o.data.result?(console.log("success",o.data),this.$emit("success")):(alert("Error, Please try again."),this.processing=!1,console.log("error",o.data))}catch(o){this.processing=!1,console.log("error",o)}}},async beforeMount(){try{const o=await a().get(this.url);console.log("form",o.data),this.name=o.data.name,this.description=o.data.description,this.fields=o.data.fields.filter((function(o){var e=[];return!e.includes(o.id)})),this.$emit("ready"),this.ready=!0,this.processing=!1}catch(o){console.log("error",o)}}},m=n(3744);const f=(0,m.Z)(p,[["render",r]]);var g=f},3211:function(o,e,n){n.r(e),n.d(e,{default:function(){return h}});var s=n(6252),t=n(9963);const i={key:0},r={class:"pt-32 px-3"},l=(0,s._)("p",null,"Thank You",-1),a=(0,s._)("p",null,"Invest proposal has been submitted.",-1),c=[l,a];function d(o,e,n,l,a,d){const u=(0,s.up)("AppForm"),p=(0,s.up)("AppShell");return(0,s.wg)(),(0,s.j4)(p,{colors:a.colors,isLoaded:!0,protected:!0},{default:(0,s.w5)((()=>[a.isDone?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(u,{url:"https://salontest-terrifickid.cloud.okteto.net/form/invest",onSuccess:e[0]||(e[0]=o=>a.isDone=!0)})])),(0,s.wy)((0,s._)("div",r,c,512),[[t.F8,a.isDone]])])),_:1},8,["colors"])}var u=n(8252),p=n(9404),m={components:{AppShell:u.Z,AppForm:p.Z},data(){return{colors:["white","black"],isDone:!1}},computed:{}},f=n(3744);const g=(0,f.Z)(m,[["render",d]]);var h=g}}]);
//# sourceMappingURL=ViewInvest.77f15007.js.map