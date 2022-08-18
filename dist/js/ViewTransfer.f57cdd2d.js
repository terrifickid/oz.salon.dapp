"use strict";(self["webpackChunkSalon"]=self["webpackChunkSalon"]||[]).push([[147],{7526:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a=n(6252);const s={key:0,class:"pt-32 pb-32"},r={class:"grid grid-cols-12 w-full"},i={class:"app-frame"},o={class:"px-3"},u=(0,a.Uk)("Create New Transfer"),l=(0,a._)("p",{class:"text-xl mt-10"},"Available Transfers",-1),p={key:0,class:"text-sm mt-3"};function d(e,t,n,d,y,m){const c=(0,a.up)("AppButton"),f=(0,a.up)("router-link"),b=(0,a.up)("ListTransferItem"),h=(0,a.up)("AppShell");return(0,a.wg)(),(0,a.j4)(h,{colors:y.colors,isLoaded:!0,protected:!0},{default:(0,a.w5)((()=>[y.isDone?((0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",r,[(0,a._)("div",i,[(0,a._)("div",o,[(0,a.Wm)(f,{to:"/create-transfer"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[u])),_:1})])),_:1}),l,y.transfers.length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",p,"No transfers.")),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.transfers,((e,t)=>((0,a.wg)(),(0,a.j4)(b,{key:t,item:e},null,8,["item"])))),128))])])])])):(0,a.kq)("",!0)])),_:1},8,["colors"])}var y=n(9669),m=n.n(y),c=n(7175),f=n(7796),b=n(3577);const h={class:"border-b border-black py-3 grid grid-cols-12 flex items-center"},T={class:"col-span-8"},w={class:"text-xs"},v={class:"col-span-4"},g=(0,a.Uk)("Accept Offer");function x(e,t,n,s,r,i){const o=(0,a.up)("AppButton");return(0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("div",T,[(0,a.Uk)((0,b.zw)(n.item.id)+" "+(0,b.zw)(n.item.fields.units0units.units)+" units offered @ "+(0,b.zw)(r.format.format(n.item.fields.units0units.amount))+" ",1),(0,a._)("p",w,(0,b.zw)(n.item.fields.profile.walletAddress),1)]),(0,a._)("div",v,[(0,a.Wm)(o,{class:"float-right",onClick:t[0]||(t[0]=e=>i.sendUSDC(1))},{default:(0,a.w5)((()=>[g])),_:1})])])}var _=n(7294),A=n(715),M={components:{AppButton:c.Z},props:["item"],data(){return{format:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}},methods:{async sendUSDC(e=.001){this.processing=!0;var t={address:"0x07865c6e87b9f70255377e024ace6630c1eaa37f",abi:[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}]};let n=window.ethereum,a=new A.Q(n);await a.send("eth_requestAccounts",[]);const s=a.getSigner(),r=new _.CH(t.address,t.abi,s);try{let t=await r.transfer("0x0617A6771F16F12b39217aC017c15E036A01761A",e);var i=await this.submitExecution(this.item.id,{type:"units",proposal:this.item,to:this.walletAddress,sourceType:"usdc",source:t.hash});console.log(i)}catch(o){this.processing=!1,console.error(o)}},async submitExecution(e,t){console.log("Sending Ex");const n=await m().post(this.uri,{data:t,proposal:e});return n.data}},computed:{walletAddress(){return this.$store.state.walletAddress},uri(){return"https://salon-node.salondao.xyz/form/executions"}}},k=n(3744);const S=(0,k.Z)(M,[["render",x]]);var E=S,U={components:{AppShell:f.Z,AppButton:c.Z,ListTransferItem:E},data(){return{colors:["white","black"],isDone:!1,transfers:[]}},computed:{uri(){return"https://salon-node.salondao.xyz/type/transfer?cache=true"}},async beforeMount(){var e=await m().get(this.uri);console.log("test",e),this.transfers=e.data.message.items,this.isDone=!0}};const F=(0,k.Z)(U,[["render",d]]);var O=F},1117:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(6252),s=n(9963);const r={key:0},i=(0,a._)("p",{class:"app-text p-3"},"Your proposal has been submitted.",-1);function o(e,t,n,o,u,l){const p=(0,a.up)("AppForm"),d=(0,a.up)("AppContent"),y=(0,a.up)("AppShell");return(0,a.wg)(),(0,a.j4)(y,{colors:u.colors,isLoaded:!0,protected:!0},{default:(0,a.w5)((()=>[u.isDone?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(p,{url:l.uri,onSuccess:t[0]||(t[0]=e=>u.isDone=!0)},null,8,["url"])])),(0,a.wy)((0,a.Wm)(d,{class:"items-center justify-center"},{default:(0,a.w5)((()=>[i])),_:1},512),[[s.F8,u.isDone]])])),_:1},8,["colors"])}var u=n(7796),l=n(2793),p=n(5820),d={components:{AppShell:u.Z,AppForm:l.Z,AppContent:p.Z},data(){return{colors:["white","black"],isDone:!1}},computed:{uri(){return"https://salon-node.salondao.xyz/form/transfer?cache=true"}}},y=n(3744);const m=(0,y.Z)(d,[["render",o]]);var c=m},9293:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var a=n(6252),s=n(3577);const r={class:"grid grid-cols-12 w-full font-haffer"},i={class:"app-frame"},o={class:"border-b border-black p-1 text-xs sm:text-base"},u=(0,a._)("span",null,"Appraised Collection Value",-1),l={class:"float-right"},p={class:"border-b border-black p-1 text-xs sm:text-base"},d=(0,a._)("span",null,"Bank Account Funds",-1),y={class:"float-right"},m={class:"border-b border-black p-1 text-xs sm:text-base"},c=(0,a._)("span",null,"Digital Wallet Funds",-1),f={class:"float-right"},b={class:"border-b border-black p-1 text-xs sm:text-base"},h=(0,a._)("span",null,"Total Book Value",-1),T={class:"float-right"},w={class:"border-b border-black p-1 text-xs sm:text-base"},v=(0,a._)("span",null,"Total Units Issued",-1),g={class:"float-right"},x={class:"border-b border-black p-1 text-xs sm:text-base"},_=(0,a._)("span",null,"Book Value Per Unit",-1),A={class:"float-right"},M={class:"border-b border-black p-1 text-xs sm:text-base"},k=(0,a._)("span",null,"Suggested Trading Value Per Unit",-1),S={class:"float-right"};function E(e,t,n,E,U,F){const O=(0,a.up)("AppContent"),z=(0,a.up)("AppShell");return(0,a.wg)(),(0,a.j4)(z,{colors:U.colors,isLoaded:U.isDone,protected:!0},{default:(0,a.w5)((()=>[(0,a.Wm)(O,{class:"items-center justify-center font-haffer"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a._)("div",i,[(0,a._)("div",o,[u,(0,a._)("span",l,(0,s.zw)(U.format.format(U.treasury.collectionValue)),1)]),(0,a._)("div",p,[d,(0,a._)("span",y,(0,s.zw)(U.format.format(U.treasury.balance)),1)]),(0,a._)("div",m,[c,(0,a._)("span",f,(0,s.zw)(U.format.format(U.balanceInUsdc)),1)]),(0,a._)("div",b,[h,(0,a._)("span",T,(0,s.zw)(U.format.format(U.treasury.collectionValue+U.treasury.balance)),1)]),(0,a._)("div",w,[v,(0,a._)("span",g,(0,s.zw)(U.treasury.totalUnits),1)]),(0,a._)("div",x,[_,(0,a._)("span",A,(0,s.zw)(U.format.format((U.treasury.collectionValue+U.treasury.balance)/U.treasury.totalUnits)),1)]),(0,a._)("div",M,[k,(0,a._)("span",S,(0,s.zw)(U.format.format((U.treasury.collectionValue+U.treasury.balance)/U.treasury.totalUnits*1.25)),1)])])])])),_:1})])),_:1},8,["colors","isLoaded"])}var U=n(9669),F=n.n(U),O=n(7796),z=n(5820),I=n(7294),N=n(6441),C=n(1581),D=n(8794),B=n(2593);const R=new C.Yd(D.i),H={},P=B.O$.from(0),V=B.O$.from(-1);function Z(e,t,n,a){const s={fault:t,operation:n};return void 0!==a&&(s.value=a),R.throwError(e,C.Yd.errors.NUMERIC_FAULT,s)}let $="0";while($.length<256)$+=$;function Y(e){if("number"!==typeof e)try{e=B.O$.from(e).toNumber()}catch(t){}return"number"===typeof e&&e>=0&&e<=256&&!(e%1)?"1"+$.substring(0,e):R.throwArgumentError("invalid decimal size","decimals",e)}function W(e,t){null==t&&(t=0);const n=Y(t);e=B.O$.from(e);const a=e.lt(P);a&&(e=e.mul(V));let s=e.mod(n).toString();while(s.length<n.length-1)s="0"+s;s=s.match(/^([0-9]*[1-9]|0)(0*)/)[1];const r=e.div(n).toString();return e=1===n.length?r:r+"."+s,a&&(e="-"+e),e}function L(e,t){null==t&&(t=0);const n=Y(t);"string"===typeof e&&e.match(/^-?[0-9.]+$/)||R.throwArgumentError("invalid decimal value","value",e);const a="-"===e.substring(0,1);a&&(e=e.substring(1)),"."===e&&R.throwArgumentError("missing value","value",e);const s=e.split(".");s.length>2&&R.throwArgumentError("too many decimal points","value",e);let r=s[0],i=s[1];r||(r="0"),i||(i="0");while("0"===i[i.length-1])i=i.substring(0,i.length-1);i.length>n.length-1&&Z("fractional component exceeds decimals","underflow","parseFixed"),""===i&&(i="0");while(i.length<n.length-1)i+="0";const o=B.O$.from(r),u=B.O$.from(i);let l=o.mul(n).add(u);return a&&(l=l.mul(V)),l}class j{constructor(e,t,n,a){e!==H&&R.throwError("cannot use FixedFormat constructor; use FixedFormat.from",C.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=n,this.decimals=a,this.name=(t?"":"u")+"fixed"+String(n)+"x"+String(a),this._multiplier=Y(a),Object.freeze(this)}static from(e){if(e instanceof j)return e;"number"===typeof e&&(e=`fixed128x${e}`);let t=!0,n=128,a=18;if("string"===typeof e)if("fixed"===e);else if("ufixed"===e)t=!1;else{const s=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);s||R.throwArgumentError("invalid fixed format","format",e),t="u"!==s[1],n=parseInt(s[2]),a=parseInt(s[3])}else if(e){const s=(t,n,a)=>null==e[t]?a:(typeof e[t]!==n&&R.throwArgumentError("invalid fixed format ("+t+" not "+n+")","format."+t,e[t]),e[t]);t=s("signed","boolean",t),n=s("width","number",n),a=s("decimals","number",a)}return n%8&&R.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",n),a>80&&R.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",a),new j(H,t,n,a)}}class q{constructor(e,t,n,a){e!==H&&R.throwError("cannot use FixedNumber constructor; use FixedNumber.from",C.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=a,this._hex=t,this._value=n,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&R.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);const t=L(this._value,this.format.decimals),n=L(e._value,e.format.decimals);return q.fromValue(t.add(n),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);const t=L(this._value,this.format.decimals),n=L(e._value,e.format.decimals);return q.fromValue(t.sub(n),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);const t=L(this._value,this.format.decimals),n=L(e._value,e.format.decimals);return q.fromValue(t.mul(n).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);const t=L(this._value,this.format.decimals),n=L(e._value,e.format.decimals);return q.fromValue(t.mul(this.format._multiplier).div(n),this.format.decimals,this.format)}floor(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=q.from(e[0],this.format);const n=!e[1].match(/^(0*)$/);return this.isNegative()&&n&&(t=t.subUnsafe(Q.toFormat(t.format))),t}ceiling(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=q.from(e[0],this.format);const n=!e[1].match(/^(0*)$/);return!this.isNegative()&&n&&(t=t.addUnsafe(Q.toFormat(t.format))),t}round(e){null==e&&(e=0);const t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&R.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;const n=q.from("1"+$.substring(0,e),this.format),a=G.toFormat(this.format);return this.mulUnsafe(n).addUnsafe(a).floor().divUnsafe(n)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&R.throwArgumentError("invalid byte width","width",e);const t=B.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return(0,N.$m)(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return q.fromString(this._value,e)}static fromValue(e,t,n){return null!=n||null==t||(0,B.Zm)(t)||(n=t,t=null),null==t&&(t=0),null==n&&(n="fixed"),q.fromString(W(e,t),j.from(n))}static fromString(e,t){null==t&&(t="fixed");const n=j.from(t),a=L(e,n.decimals);!n.signed&&a.lt(P)&&Z("unsigned value cannot be negative","overflow","value",e);let s=null;n.signed?s=a.toTwos(n.width).toHexString():(s=a.toHexString(),s=(0,N.$m)(s,n.width/8));const r=W(a,n.decimals);return new q(H,s,r,n)}static fromBytes(e,t){null==t&&(t="fixed");const n=j.from(t);if((0,N.lE)(e).length>n.width/8)throw new Error("overflow");let a=B.O$.from(e);n.signed&&(a=a.fromTwos(n.width));const s=a.toTwos((n.signed?0:1)+n.width).toHexString(),r=W(a,n.decimals);return new q(H,s,r,n)}static from(e,t){if("string"===typeof e)return q.fromString(e,t);if((0,N._t)(e))return q.fromBytes(e,t);try{return q.fromValue(e,0,t)}catch(n){if(n.code!==C.Yd.errors.INVALID_ARGUMENT)throw n}return R.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!(!e||!e._isFixedNumber)}}const Q=q.from(1),G=q.from("0.5"),K="units/5.6.1",J=(new C.Yd(K),["wei","kwei","mwei","gwei","szabo","finney","ether"]);function X(e,t){if("string"===typeof t){const e=J.indexOf(t);-1!==e&&(t=3*e)}return W(e,null!=t?t:18)}function ee(e){return X(e,18)}var te=n(715);let ne=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"authorizer",type:"address"},{indexed:!0,internalType:"bytes32",name:"nonce",type:"bytes32"}],name:"AuthorizationCanceled",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"authorizer",type:"address"},{indexed:!0,internalType:"bytes32",name:"nonce",type:"bytes32"}],name:"AuthorizationUsed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_account",type:"address"}],name:"Blacklisted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newBlacklister",type:"address"}],name:"BlacklisterChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"burner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Burn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newMasterMinter",type:"address"}],name:"MasterMinterChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"minter",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"minter",type:"address"},{indexed:!1,internalType:"uint256",name:"minterAllowedAmount",type:"uint256"}],name:"MinterConfigured",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldMinter",type:"address"}],name:"MinterRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"previousOwner",type:"address"},{indexed:!1,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[],name:"Pause",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newAddress",type:"address"}],name:"PauserChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newRescuer",type:"address"}],name:"RescuerChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_account",type:"address"}],name:"UnBlacklisted",type:"event"},{anonymous:!1,inputs:[],name:"Unpause",type:"event"},{inputs:[],name:"CANCEL_AUTHORIZATION_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"PERMIT_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"RECEIVE_WITH_AUTHORIZATION_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"TRANSFER_WITH_AUTHORIZATION_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"authorizer",type:"address"},{internalType:"bytes32",name:"nonce",type:"bytes32"}],name:"authorizationState",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"blacklist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"blacklister",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"authorizer",type:"address"},{internalType:"bytes32",name:"nonce",type:"bytes32"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"cancelAuthorization",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"minter",type:"address"},{internalType:"uint256",name:"minterAllowedAmount",type:"uint256"}],name:"configureMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currency",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"decrement",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"increment",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"tokenName",type:"string"},{internalType:"string",name:"tokenSymbol",type:"string"},{internalType:"string",name:"tokenCurrency",type:"string"},{internalType:"uint8",name:"tokenDecimals",type:"uint8"},{internalType:"address",name:"newMasterMinter",type:"address"},{internalType:"address",name:"newPauser",type:"address"},{internalType:"address",name:"newBlacklister",type:"address"},{internalType:"address",name:"newOwner",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newName",type:"string"}],name:"initializeV2",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"lostAndFound",type:"address"}],name:"initializeV2_1",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"isBlacklisted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"masterMinter",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"minter",type:"address"}],name:"minterAllowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"pauser",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"validAfter",type:"uint256"},{internalType:"uint256",name:"validBefore",type:"uint256"},{internalType:"bytes32",name:"nonce",type:"bytes32"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"receiveWithAuthorization",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"minter",type:"address"}],name:"removeMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IERC20",name:"tokenContract",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"rescueERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rescuer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"validAfter",type:"uint256"},{internalType:"uint256",name:"validBefore",type:"uint256"},{internalType:"bytes32",name:"nonce",type:"bytes32"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"transferWithAuthorization",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"unBlacklist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newBlacklister",type:"address"}],name:"updateBlacklister",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newMasterMinter",type:"address"}],name:"updateMasterMinter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newPauser",type:"address"}],name:"updatePauser",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newRescuer",type:"address"}],name:"updateRescuer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"version",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}];var ae={components:{AppShell:O.Z,AppContent:z.Z},data(){return{colors:["white","black"],treasury:{},balanceInEth:0,balanceInUsdc:0,format:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),isDone:!1}},async beforeMount(){console.log("treasury load!");try{const e=await F().get("https://salon-node.salondao.xyz/treasury?cache=true");this.treasury=e.data.message}catch(o){console.log("error",o)}let e=window.ethereum,t=new te.Q(e);const n=t.getSigner();await t.send("eth_requestAccounts",[]);const a=await t.getBalance("0xc0725b883d23f146f82d49f3ba45a6b4c7ddd7ce");this.balanceInEth=ee(a);var s={address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",abi:ne};const r=new I.CH(s.address,s.abi,n);let i=await r.balanceOf("0xc0725b883d23f146f82d49f3ba45a6b4c7ddd7ce");this.balanceInUsdc=parseInt(i.toString())/10**6,this.isDone=!0}},se=n(3744);const re=(0,se.Z)(ae,[["render",E]]);var ie=re}}]);
//# sourceMappingURL=ViewTransfer.f57cdd2d.js.map