(function(t){function e(e){for(var n,i,s=e[0],u=e[1],a=e[2],d=0,b=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(b.length)b.shift()();return r.push.apply(r,a||[]),c()}function c(){for(var t,e=0;e<r.length;e++){for(var c=r[e],n=!0,s=1;s<c.length;s++){var u=c[s];0!==o[u]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=c[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=t,i.c=n,i.d=function(t,e,c){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(c,n,function(e){return t[e]}.bind(null,n));return c},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-vuex-map/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var l=u;r.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"0451":function(t,e,c){"use strict";c("d1d5")},"08e9":function(t,e,c){"use strict";c("7b14")},"216f":function(t,e,c){"use strict";c("8d90")},"32d0":function(t,e,c){"use strict";c("5c21")},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),o={id:"app"},r=Object(n["g"])("div",{class:"mask-map",id:"mask-map"},null,-1);function i(t,e,c,i,s,u){var a=Object(n["n"])("aside-menu"),l=Object(n["n"])("light-box");return Object(n["i"])(),Object(n["d"])("div",o,[Object(n["g"])(a),r,Object(n["g"])(l)])}var s=c("5530"),u=(c("b0c0"),{class:"aside-menu"}),a={class:"wraps"},l=Object(n["f"])(" 縣市： "),d=Object(n["f"])(" 行政區： "),b={class:"wraps"},f=Object(n["g"])("i",{class:"fas fa-search-location"},null,-1),j=Object(n["f"])(" 關鍵字搜尋： "),O={class:"store-lists"},h={class:"mask-info"},m=Object(n["g"])("i",{class:"fas fa-head-side-mask"},null,-1),g={class:"mask-info"},p=Object(n["g"])("i",{class:"fas fa-baby"},null,-1),v={class:"mask-info"},y=Object(n["g"])("i",{class:"fas fa-info-circle"},null,-1),w=Object(n["f"])(" 看詳細資訊 ");function k(t,e,c,o,r,i){return Object(n["i"])(),Object(n["d"])("div",u,[Object(n["g"])("div",a,[Object(n["g"])("label",null,[l,Object(n["t"])(Object(n["g"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return i.currCity=t})},[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(t.cityList,(function(t,e){return Object(n["i"])(),Object(n["d"])("option",{key:e},Object(n["o"])(t),1)})),128))],512),[[n["p"],i.currCity]])]),Object(n["g"])("label",null,[d,Object(n["t"])(Object(n["g"])("select",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return i.currDistrict=t})},[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(t.districtList,(function(t){return Object(n["i"])(),Object(n["d"])("option",{key:t.id},Object(n["o"])(t.name),1)})),128))],512),[[n["p"],i.currDistrict]])])]),Object(n["g"])("div",b,[Object(n["g"])("label",null,[f,j,Object(n["t"])(Object(n["g"])("input",{type:"text",placeholder:"請輸入關鍵字","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.keywords=t})},null,512),[[n["q"],i.keywords]])])]),Object(n["g"])("ul",O,[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(t.filteredStores,(function(t){return Object(n["i"])(),Object(n["d"])("li",{class:"store-info wraps",key:t.id},[Object(n["g"])("h1",{innerHTML:i.keywordHighlight(t.name)},null,8,["innerHTML"]),Object(n["g"])("div",h,[m,Object(n["g"])("span",null,"大人口罩: "+Object(n["o"])(t.mask_adult)+" 個",1)]),Object(n["g"])("div",g,[p,Object(n["g"])("span",null,"兒童口罩: "+Object(n["o"])(t.mask_child)+" 個",1)]),Object(n["g"])("div",v," 最後更新時間: "+Object(n["o"])(t.updated),1),Object(n["g"])("button",{class:"btn-store-detail",onClick:function(e){return i.openInfoBox(t.id)}},[y,w],8,["onClick"])])})),128))])])}var S=c("3835"),x=(c("ac1f"),c("5319"),c("4d63"),c("25f0"),c("5502")),M={name:"asideMenu",methods:{keywordHighlight:function(t){return t.replace(new RegExp(this.keywords,"g"),'<span class="highlight">'.concat(this.keywords,"</span>"))},openInfoBox:function(t){this.$store.commit("setShowModal",!0),this.$store.commit("setInfoBoxSid",t)}},computed:Object(s["a"])(Object(s["a"])({currCity:{get:function(){return this.$store.state.currCity},set:function(t){this.$store.commit("setCurrCity",t)}},currDistrict:{get:function(){return this.$store.state.currDistrict},set:function(t){this.$store.commit("setCurrDistrict",t)}},keywords:{get:function(){return this.$store.state.keywords},set:function(t){this.$store.commit("setKeywords",t)}},showModal:{get:function(){return this.$store.state.showModal},set:function(t){this.$store.commit("setShowModal",t)}},infoBoxSid:{get:function(){return this.$store.state.infoBoxSid},set:function(t){this.$store.commit("setInfoBoxSid",t)}}},Object(x["c"])(["cityList","districtList","filteredStores"])),Object(x["d"])(["stores"])),watch:{districtList:function(t){var e=Object(S["a"])(t,1),c=e[0];this.$store.commit("setCurrDistrict",c.name)}}};c("216f");M.render=k;var $=M,C=Object(n["v"])("data-v-22c64d14");Object(n["k"])("data-v-22c64d14");var L={class:"modal-mask"},B={class:"modal-container"},_={key:0,class:"modal-body"},P={class:"store-name"},D=Object(n["g"])("hr",null,null,-1),I=Object(n["g"])("h2",{class:"title"},"營業時間",-1),H=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th"),Object(n["g"])("th",null,"ㄧ"),Object(n["g"])("th",null,"二"),Object(n["g"])("th",null,"三"),Object(n["g"])("th",null,"四"),Object(n["g"])("th",null,"五"),Object(n["g"])("th",null,"六"),Object(n["g"])("th",null,"日")])],-1),T=Object(n["g"])("th",null,"早上",-1),U=Object(n["g"])("th",null,"中午",-1),V=Object(n["g"])("th",null,"晚上",-1),A={class:"title"},J=Object(n["f"])("地址： "),K={class:"title"},q={class:"title"};Object(n["j"])();var E=C((function(t,e,c,o,r,i){return Object(n["i"])(),Object(n["d"])(n["b"],{name:"modal"},{default:C((function(){return[Object(n["t"])(Object(n["g"])("div",L,[Object(n["g"])("div",{class:"modal-wrapper",onClick:e[1]||(e[1]=Object(n["u"])((function(){return i.close&&i.close.apply(i,arguments)}),["self"]))},[Object(n["g"])("div",B,[i.currStore?(Object(n["i"])(),Object(n["d"])("div",_,[Object(n["g"])("h1",P,Object(n["o"])(i.currStore.name),1),D,I,Object(n["g"])("table",null,[H,Object(n["g"])("tbody",null,[Object(n["g"])("tr",null,[T,(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(i.servicePeriods[0],(function(t,e){return Object(n["i"])(),Object(n["d"])("td",{key:e},Object(n["o"])(t),1)})),128))]),Object(n["g"])("tr",null,[U,(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(i.servicePeriods[1],(function(t,e){return Object(n["i"])(),Object(n["d"])("td",{key:e},Object(n["o"])(t),1)})),128))]),Object(n["g"])("tr",null,[V,(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(i.servicePeriods[2],(function(t,e){return Object(n["i"])(),Object(n["d"])("td",{key:e},Object(n["o"])(t),1)})),128))])])]),Object(n["g"])("h2",A,[J,Object(n["g"])("a",{href:"https://www.google.com.tw/maps/place/".concat(i.currStore.address)},Object(n["o"])(i.currStore.address),9,["href"])]),Object(n["g"])("h2",K,"電話 "+Object(n["o"])(i.currStore.phone),1),Object(n["g"])("h2",q,"備註 "+Object(n["o"])(i.currStore.custom_note),1)])):Object(n["e"])("",!0)])])],512),[[n["r"],i.showModal]])]})),_:1})})),N=(c("4de4"),c("1276"),c("fb6a"),{name:"LightBox",computed:{showModal:{get:function(){return this.$store.state.showModal},set:function(t){this.$store.commit("setShowModal",t)}},infoBoxSid:{get:function(){return this.$store.state.infoBoxSid},set:function(t){this.$store.commit("setInfoBoxSid",t)}},currStore:function(){var t=this;return this.$store.state.stores.filter((function(e){return e.id===t.$store.state.infoBoxSid}))[0]},servicePeriods:function(){var t,e=(null===this||void 0===this||null===(t=this.currStore)||void 0===t?void 0:t.service_periods)||"";return e=e.replace(/N/g,"O").replace(/Y/g,"X"),e?[e.slice(0,7).split(""),e.slice(7,14).split(""),e.slice(14,21).split("")]:e}},methods:{close:function(){this.$store.commit("setShowModal",!1)}}});c("08e9"),c("d9a0"),c("32d0");N.render=E,N.__scopeId="data-v-22c64d14";var R=N,X={name:"App",components:{AsideMenu:$,LightBox:R},methods:Object(s["a"])({},Object(x["b"])(["fetchLocations","fetchStores"])),mounted:function(){this.fetchLocations(),this.fetchStores()}};c("0451");X.render=i;var Y=X,z=(c("d81d"),c("7db0"),c("caad"),c("2532"),c("bc3a")),F=c.n(z),G=Object(x["a"])({state:{currCity:"臺北市",currDistrict:"北投區",location:[],stores:[],keywords:"",showModal:!1,infoBoxSid:null},mutations:{setCurrCity:function(t,e){t.currCity=e},setCurrDistrict:function(t,e){t.currDistrict=e},setLocations:function(t,e){t.location=e},setStores:function(t,e){t.stores=e},setKeywords:function(t,e){t.keywords=e},setShowModal:function(t,e){t.showModal=e},setInfoBoxSid:function(t,e){t.infoBoxSid=e}},actions:{fetchLocations:function(t){var e="https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json";F.a.get(e).then((function(e){t.commit("setLocations",e.data)})).catch((function(t){console.log(t)}))},fetchStores:function(t){var e="https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";F.a.get(e).then((function(e){var c=e.data.features,n=c.map((function(t){return Object(s["a"])(Object(s["a"])({},t.properties),{},{latitude:t.geometry.coordinates[0],longitude:t.geometry.coordinates[0]})}));t.commit("setStores",n)})).catch((function(t){console.log(t)}))}},modules:{},getters:{cityList:function(t){return t.location.map((function(t){return t.name}))},districtList:function(t){var e,c=(null===(e=t.location.find((function(e){return e.name===t.currCity})))||void 0===e?void 0:e.districts)||[];return c},filteredStores:function(t){var e=t.stores,c=t.keywords?e.filter((function(e){return e.name.includes(t.keywords)})):e.filter((function(e){return e.county===t.currCity&&e.town===t.currDistrict}));return c}}}),Q=Object(n["c"])(Y);Q.use(G).mount("#app")},"5c21":function(t,e,c){},"6db0":function(t,e,c){},"7b14":function(t,e,c){},"8d90":function(t,e,c){},d1d5:function(t,e,c){},d9a0:function(t,e,c){"use strict";c("6db0")}});
//# sourceMappingURL=app.7adc4d3d.js.map