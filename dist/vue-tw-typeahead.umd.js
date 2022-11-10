(function(a,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(a=typeof globalThis<"u"?globalThis:a||self,t(a.VueTwTypeahead={},a.Vue))})(this,function(a,t){"use strict";var m={exports:{}};(function(s,n){function c(e){return typeof e.value!="function"?(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1):!0}function u(e,i){if(!e||!i)return!1;for(var r=0,l=i.length;r<l;r++)try{if(e.contains(i[r]))return!0;if(i[r].contains(e))return!1}catch{return!1}return!1}function o(e){return typeof e.componentInstance<"u"&&e.componentInstance.$isServer}s.exports={bind:function(e,i,r){if(!c(i))return;function l(d){if(!!r.context){var h=d.path||d.composedPath&&d.composedPath();h&&h.length>0&&h.unshift(d.target),!(e.contains(d.target)||u(r.context.popupItem,h))&&e.__vueClickOutside__.callback(d)}}e.__vueClickOutside__={handler:l,callback:i.value};const f="ontouchstart"in document.documentElement?"touchstart":"click";!o(r)&&document.addEventListener(f,l)},update:function(e,i){c(i)&&(e.__vueClickOutside__.callback=i.value)},unbind:function(e,i,r){const l="ontouchstart"in document.documentElement?"touchstart":"click";!o(r)&&e.__vueClickOutside__&&document.removeEventListener(l,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}})(m);const p=m.exports,_=(s,n)=>{const c=s.__vccOpts||s;for(const[u,o]of n)c[u]=o;return c},k={name:"VueTwTypeahead",directives:{ClickOutside:p},props:{lists:{type:Array,default:[]},ignoredList:{type:Array,default:[]},clearInputWhenClicked:{type:Boolean,default:!1},placeholder:{type:String,default:"Search here..."},inputClass:{type:Array,default:["w-full","px-5","py-3","border","border-gray-400","rounded-lg","outline-none","focus:shadow-outline"]}},data(){return{search:"",selectedItem:"",showSearchItems:!1,isMouseOverList:!1,searchItemList:this.lists}},computed:{filteredList(){return this.searchItemList.filter(s=>{var n;return s.name.toLowerCase().includes((n=this.search)==null?void 0:n.toLowerCase())&&!this.checkIgnoreListItem(s.id)})},classProps(){return[...this.inputClass]}},methods:{selectSearchItem(s){this.search=s.name,this.selectedItem=s.name,this.showSearchItems=!1,this.$emit("selected",s),this.clearInputWhenClicked&&(this.search="")},checkIgnoreListItem(s){return this.ignoredList.length>0?this.ignoredList.some(c=>c==s):!1},hideMenu(){this.showSearchItems==!0&&(this.showSearchItems=!1)}},created(){var s,n;if(this.selectedData!=0){const c=this.lists.filter(u=>u.id===this.selectedData);console.log("selected",c),this.selectedItem=(s=c[0])==null?void 0:s.name,this.search=(n=c[0])==null?void 0:n.name}}},y={class:"w-full"},w={class:"mt-1 flex rounded-md shadow-sm"},x=["placeholder"],I={key:0,class:"absolute z-10 flex flex-col items-start w-64 bg-white border rounded-md shadow-md mt-1",role:"menu","aria-labelledby":"menu-heading"},g={class:"flex flex-col w-full"},v=["onClick"];function C(s,n,c,u,o,e){const i=t.resolveDirective("click-outside");return t.withDirectives((t.openBlock(),t.createElementBlock("div",y,[t.createElementVNode("div",w,[t.withDirectives(t.createElementVNode("input",{type:"text",class:t.normalizeClass(e.classProps),placeholder:c.placeholder,"aria-label":"Search","onUpdate:modelValue":n[0]||(n[0]=r=>o.search=r),onInput:n[1]||(n[1]=r=>o.showSearchItems=!0),ref:"searchBox"},null,42,x),[[t.vModelText,o.search]])]),e.filteredList.length>0&&o.showSearchItems==!0?(t.openBlock(),t.createElementBlock("aside",I,[t.createElementVNode("ul",g,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.filteredList,(r,l)=>(t.openBlock(),t.createElementBlock("li",{class:"px-2 py-3 space-x-2 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none",key:l,onClick:f=>{e.selectSearchItem(r),o.showSearchItems=!1}},t.toDisplayString(r.name),9,v))),128))])])):t.createCommentVNode("",!0)])),[[i,e.hideMenu]])}const b=_(k,[["render",C]]);a.VueTwTypeahead=b,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
