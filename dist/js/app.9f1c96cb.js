(function(t){function e(e){for(var c,o,s=e[0],a=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(c=!1)}c&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var c={},r={app:0},i=[];function o(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=c,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-vuex-map/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0451":function(t,e,n){"use strict";n("d1d5")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"app"},i=Object(c["e"])("div",{class:"mask-map",id:"mask-map"},null,-1);function o(t,e,n,o,s,a){var u=Object(c["j"])("aside-menu");return Object(c["g"])(),Object(c["c"])("div",r,[Object(c["e"])(u),i])}var s=n("5530"),a=(n("b0c0"),{class:"aside-menu"}),u={class:"wraps"},l=Object(c["d"])(" 縣市： "),d=Object(c["d"])(" 行政區： "),f={class:"wraps"},b=Object(c["e"])("i",{class:"fas fa-search-location"},null,-1),j=Object(c["d"])(" 關鍵字搜尋： "),O={class:"store-lists"},p={class:"mask-info"},m=Object(c["e"])("i",{class:"fas fa-head-side-mask"},null,-1),h={class:"mask-info"},y=Object(c["e"])("i",{class:"fas fa-baby"},null,-1),g={class:"mask-info"},v=Object(c["e"])("button",{class:"btn-store-detail"},[Object(c["e"])("i",{class:"fas fa-info-circle"}),Object(c["d"])(" 看詳細資訊 ")],-1);function k(t,e,n,r,i,o){return Object(c["g"])(),Object(c["c"])("div",a,[Object(c["e"])("div",u,[Object(c["e"])("label",null,[l,Object(c["o"])(Object(c["e"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.currCity=t})},[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(t.cityList,(function(t,e){return Object(c["g"])(),Object(c["c"])("option",{key:e},Object(c["k"])(t),1)})),128))],512),[[c["l"],o.currCity]])]),Object(c["e"])("label",null,[d,Object(c["o"])(Object(c["e"])("select",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return o.currDistrict=t})},[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(t.districtList,(function(t){return Object(c["g"])(),Object(c["c"])("option",{key:t.id},Object(c["k"])(t.name),1)})),128))],512),[[c["l"],o.currDistrict]])])]),Object(c["e"])("div",f,[Object(c["e"])("label",null,[b,j,Object(c["o"])(Object(c["e"])("input",{type:"text",placeholder:"請輸入關鍵字","onUpdate:modelValue":e[3]||(e[3]=function(t){return o.keywords=t})},null,512),[[c["m"],o.keywords]])])]),Object(c["e"])("ul",O,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(t.filteredStores,(function(t){return Object(c["g"])(),Object(c["c"])("li",{class:"store-info wraps",key:t.id},[Object(c["e"])("h1",{innerHTML:o.keywordHighlight(t.name)},null,8,["innerHTML"]),Object(c["e"])("div",p,[m,Object(c["e"])("span",null,"大人口罩: "+Object(c["k"])(t.mask_adult)+" 個",1)]),Object(c["e"])("div",h,[y,Object(c["e"])("span",null,"兒童口罩: "+Object(c["k"])(t.mask_child)+" 個",1)]),Object(c["e"])("div",g," 最後更新時間: "+Object(c["k"])(t.updated),1),v])})),128))])])}var w=n("3835"),C=(n("ac1f"),n("5319"),n("4d63"),n("25f0"),n("5502")),L={name:"asideMenu",methods:{keywordHighlight:function(t){return t.replace(new RegExp(this.keywords,"g"),'<span class="highlight">'.concat(this.keywords,"</span>"))}},computed:Object(s["a"])(Object(s["a"])({currCity:{get:function(){return this.$store.state.currCity},set:function(t){this.$store.commit("setCurrCity",t)}},currDistrict:{get:function(){return this.$store.state.currDistrict},set:function(t){this.$store.commit("setCurrDistrict",t)}},keywords:{get:function(){return this.$store.state.keywords},set:function(t){this.$store.commit("setKeywords",t)}}},Object(C["c"])(["cityList","districtList","filteredStores"])),Object(C["d"])(["stores"])),watch:{districtList:function(t){var e=Object(w["a"])(t,1),n=e[0];this.$store.commit("setCurrDistrict",n.name)}}};n("865e");L.render=k;var S=L,D={name:"App",components:{AsideMenu:S},methods:Object(s["a"])({},Object(C["b"])(["fetchLocations","fetchStores"])),mounted:function(){this.fetchLocations(),this.fetchStores()}};n("0451");D.render=o;var x=D,M=(n("d81d"),n("7db0"),n("4de4"),n("caad"),n("2532"),n("bc3a")),_=n.n(M),P=Object(C["a"])({state:{currCity:"臺北市",currDistrict:"北投區",location:[],stores:[],keywords:""},mutations:{setCurrCity:function(t,e){t.currCity=e},setCurrDistrict:function(t,e){t.currDistrict=e},setLocations:function(t,e){t.location=e},setStores:function(t,e){t.stores=e},setKeywords:function(t,e){t.keywords=e}},actions:{fetchLocations:function(t){var e="https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json";_.a.get(e).then((function(e){t.commit("setLocations",e.data)})).catch((function(t){console.log(t)}))},fetchStores:function(t){var e="https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";_.a.get(e).then((function(e){var n=e.data.features,c=n.map((function(t){return Object(s["a"])(Object(s["a"])({},t.properties),{},{latitude:t.geometry.coordinates[0],longitude:t.geometry.coordinates[0]})}));t.commit("setStores",c)})).catch((function(t){console.log(t)}))}},modules:{},getters:{cityList:function(t){return t.location.map((function(t){return t.name}))},districtList:function(t){var e,n=(null===(e=t.location.find((function(e){return e.name===t.currCity})))||void 0===e?void 0:e.districts)||[];return n},filteredStores:function(t){var e=t.stores,n=t.keywords?e.filter((function(e){return e.name.includes(t.keywords)})):e.filter((function(e){return e.county===t.currCity&&e.town===t.currDistrict}));return n}}}),$=Object(c["b"])(x);$.use(P).mount("#app")},"865e":function(t,e,n){"use strict";n("9afa")},"9afa":function(t,e,n){},d1d5:function(t,e,n){}});
//# sourceMappingURL=app.9f1c96cb.js.map