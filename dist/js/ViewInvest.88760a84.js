"use strict";(self["webpackChunkoz_salon_dapp"]=self["webpackChunkoz_salon_dapp"]||[]).push([[930],{9404:function(o,e,s){s.d(e,{Z:function(){return g}});var n=s(6252),t=s(9963);const i={class:"section"};function r(o,e,s,r,a,l){const c=(0,n.up)("AppLoader"),d=(0,n.up)("FormIntro"),p=(0,n.up)("FormField"),u=(0,n.up)("full-page");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n.Wm)(c,null,null,512),[[t.F8,a.processing]]),a.ready?(0,n.wy)(((0,n.wg)(),(0,n.j4)(u,{key:0,ref:"fullpage",options:a.options,class:"pr-16"},{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n.Wm)(d,{name:a.name,description:a.description,onReady:l.next},null,8,["name","description","onReady"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.fields,((o,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"section"},[(0,n.Wm)(p,{field:o,onReady:l.next,index:e,modelValue:a.form[o.id],"onUpdate:modelValue":e=>a.form[o.id]=e},null,8,["field","onReady","index","modelValue","onUpdate:modelValue"])])))),128))])),_:1},8,["options"])),[[t.F8,!a.processing]]):(0,n.kq)("",!0)],64)}var a=s(9669),l=s.n(a),c=s(9600),d=s(6181),p=s(4482),u={components:{FormField:c.Z,AppLoader:p.Z,FormIntro:d.Z},props:["url"],data(){return{name:"",description:"",ready:!1,processing:!0,btnTxt:"Submit",fields:[],form:{},sending:!1,options:{licenseKey:"K9EP6-N164H-2BKM8-MJLGI-KSURM",controlArrows:!0,scrollBar:!1,scrollingSpeed:500,navigation:!0,navigationPosition:"right"}}},methods:{async next(){await this.validate()?this.submitForm():console.log("next")},async validate(){console.log("validate form!");var o=0,e=!1;for(let s of this.fields){if(""==this.form[s.id]&&(e=!0),[s.id]in this.form||(e=!0),e){this.$refs.fullpage.api.moveTo(o+2);break}o++}return console.log("error is",e),!e},async submitForm(){this.processing=!0,console.log("Ran Submit!");try{const o=await l().post(this.url,this.form);o.data.result?(console.log("success",o.data),this.$emit("success")):(alert("Error, Please try again."),this.processing=!1,console.log("error",o.data))}catch(o){this.processing=!1,console.log("error",o)}}},async beforeMount(){try{const o=await l().get(this.url);console.log("form",o.data),this.name=o.data.name,this.description=o.data.description,this.fields=o.data.fields.filter((function(o){var e=[];return!e.includes(o.id)})),this.$emit("ready"),this.ready=!0,this.processing=!1}catch(o){console.log("error",o)}}},m=s(3744);const f=(0,m.Z)(u,[["render",r]]);var g=f},3211:function(o,e,s){s.r(e),s.d(e,{default:function(){return h}});var n=s(6252),t=s(9963);const i={key:0},r={class:"pt-32 px-3"},a=(0,n._)("p",null,"Thank You",-1),l=(0,n._)("p",null,"Invest proposal has been submitted.",-1),c=[a,l];function d(o,e,s,a,l,d){const p=(0,n.up)("AppForm"),u=(0,n.up)("AppShell");return(0,n.wg)(),(0,n.j4)(u,{colors:l.colors,isLoaded:!0,protected:!0},{default:(0,n.w5)((()=>[l.isDone?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(p,{url:"https://salontest-terrifickid.cloud.okteto.net/form/invest",onSuccess:e[0]||(e[0]=o=>l.isDone=!0)})])),(0,n.wy)((0,n._)("div",r,c,512),[[t.F8,l.isDone]])])),_:1},8,["colors"])}var p=s(8252),u=s(9404),m={components:{AppShell:p.Z,AppForm:u.Z},data(){return{colors:["white","black"],isDone:!1}},computed:{}},f=s(3744);const g=(0,f.Z)(m,[["render",d]]);var h=g}}]);
//# sourceMappingURL=ViewInvest.88760a84.js.map