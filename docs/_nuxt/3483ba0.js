(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{400:function(t,e,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("90edc222",content,!0,{sourceMap:!1})},405:function(t,e,r){var n=r(12),o=r(29),c=r(76);n({target:"Object",stat:!0},{fromEntries:function(t){var e={};return o(t,(function(t,r){c(e,t,r)}),{AS_ENTRIES:!0}),e}})},406:function(t,e,r){"use strict";r(400)},407:function(t,e,r){var n=r(14)(!1);n.push([t.i,".loading-root[data-p-v-ix]{position:absolute;width:100%;height:calc(100vh - var(--nav-height));display:grid;align-content:center;justify-items:center;grid-row-gap:var(--half-offset);row-gap:var(--half-offset);z-index:10;background:var(--theme-surface)}.md-up .loading-root[data-p-v-ix]{height:calc(100vh - var(--header-height));bottom:0}.loading-title[data-p-v-ix]{color:var(--primary);font-size:1rem;font-weight:400}.root[data-p-v-ix]{padding-bottom:var(--divide-offset);--appear-duration:250ms;min-height:calc(100vh - var(--nav-height))}.sm-down .root[data-p-v-ix]{padding-top:var(--header-height)}.title[data-p-v-ix]{font-size:2.25rem;text-align:center;line-height:1.5rem;padding:var(--divide-offset) var(--half-offset);position:relative}.banner[data-p-v-ix]{height:auto;display:flex;justify-content:center;padding:.25rem var(--half-offset);position:relative}.banner[data-p-v-ix]:before,.title[data-p-v-ix]:before{opacity:var(--t-subtitle)}.banner[data-p-v-ix]>.ui-btn{grid-column-gap:.35rem;-moz-column-gap:.35rem;column-gap:.35rem}.desc[data-p-v-ix]{display:flex;justify-content:space-between;margin:var(--qtr-offset) 0;padding:0 var(--half-offset)}.desc-item[data-p-v-ix]{font-size:.95rem;color:var(--body-c)}.desc-item[data-p-v-ix]:last-of-type{color:var(--subtitle-c);font-style:italic;font-size:.9rem}.items-wrap[data-p-v-ix]{display:grid;grid-template-columns:repeat(auto-fill,minmax(calc(var(--view-port) - var(--half-offset)),1fr));grid-gap:var(--qtr-offset);gap:var(--qtr-offset);padding:var(--half-offset);max-width:1500px;margin:0 auto;margin-bottom:var(--half-offset)}.xs-down .items-wrap[data-p-v-ix]{--view-port:50%}.br-sm .items-wrap[data-p-v-ix]{--view-port:33%}.md-up .items-wrap[data-p-v-ix]{--view-port:33%;max-width:1000px}.items-wrap[data-p-v-ix] .title[data-mcd]{font-size:.9rem;color:var(--body-c);font-weight:400;padding:.25rem 0 .5rem}.sm-up .items-wrap[data-p-v-ix] .title[data-mcd]{text-align:center}.items-shown[data-p-v-ix]{text-align:center;font-weight:500;font-size:min(.875rem,15px);color:var(--subtitle-c);margin:var(--half-offset) .5rem 1.5rem}.light-theme .root[data-p-v-ix] .ui-btn[data-uipn]:not(.primary){background:var(--theme-banner)!important;box-shadow:var(--raise-light)}",""]),t.exports=n},412:function(t,e,r){"use strict";r.r(e);r(9),r(7),r(10),r(5),r(11);var n=r(3),o=r(20),c=r(1),main=(r(18),r(23),r(8),r(118),r(39),r(34),r(37),r(273),r(146),r(58),r(59),r(91),r(405),r(0)),l={formatQuery:function(){var t=this,e=this.$route.query,r=(e["v-a-z"]||"").replace(/:/g,"_").split("_").map((function(t){return"v-".concat(t)})).filter((function(t){return/^v-.+/.test(t)})),n=!e["v-a-z"]||Object.keys(e).filter((function(t){return/^v-/.test(t)&&r.includes(t)})).length==(null==r?void 0:r.length);if(!n)return{error:!0,title:"404",lowerTitle:"404",passedRequired:!1};var o=function(t){return Object(main.j)(t,e["v-cst"]||"")},path=o((e["v-ph"]||"").replace(/:/g,".")),c=o((e["v-tt"]||"").replace(/:/g,".")).replace(/undefined|null/g,"");c||(c=null);var l=o(e["v-f"]),f="re"==l?"recipe":"ee"==l?"explore":l,d=o(e["v-f"]),h="re"==d?"recipe":"ee"==d?"explore":d;return{title:Object(main.d)(o(e["v-t"]||"")),lowerTitle:o(e["v-t"]),showingFor:f,innerShowingFor:h.replace(/undefined|null/,""),isRecipe:"recipe"==f,fetched:function(){var r=e["v-fd"];if(!r||":t"==r)return!0;if(":f"==r)return!1;if(":c"==r){var n=c,o=!n||Object(main.l)({obj:t.$store.state,path:c});return n?"boolean"==typeof o&&o:Array.isArray(Object(main.l)({obj:t.$store.state,path:path}))}return!1}(),path:path,testPath:c,required:r,pageLimit:o(e["v-lim"]||"10"),passedRequired:n,rpc:function(path){var t,r=e[path]||"";if(!r)return[];var n=o(((r.match(/^.+\s+?{/g)||[])[0]||"").replace(/\s+?{/,""));"f_sis"==n&&(n="$similarItems"),"f_bee"==n&&(n="$buildExplore"),"f_ce"==n&&(n="$cuisines"),"f_cy"==n&&(n="$category"),"f_cs"==n&&(n="$cuisinesItems"),"f_cis"==n&&(n="$categoriesItems"),"f_cns"==n&&(n="$collectionItems");return["$similarItems","$buildExplore","$cuisines","$category","$cuisinesItems","$categoriesItems","$collectionItems"].includes(n)?[n,null===(t=Object.fromEntries)||void 0===t?void 0:t.call(Object,[((r.match(/{.+}/g)||["_"])[0]||"").replace(/{|}/g,"").split(":").map((function(t){return o(t)}))||{}])]:[]}("v-gt"),innerGet:e["v-igt"]}}};function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"ViewAllId",scrollToTop:!0,data:function(){return{selfName:"ViewAllId",renderedComponents:["MediumCard"],loading:!1,pageLimit:10,pageChanged:0,selectedSortValue:"",selectedFilters:[],fetching:!1}},head:function(){return{title:"".concat(this.formatQuery.title," ")}},computed:d(d(d(d({},main.v.computed),main.f),l),{},{pageIndex:function(){return parseFloat(this.$route.query.page||1)},items:function(){var t=this,e=function(t){var e=t.array,r=t.sortBy;return Object(main.E)({array:e,sortBy:r})};if("recipe"==this.formatQuery.showingFor&&this.formatQuery.fetched){var path=Object(main.l)({obj:this.$store.state,path:this.formatQuery.path});return Array.isArray(path)||(path=[]),e({array:(path||[]).map((function(e){var r,n=(null===(r=t.$store.state.recipes)||void 0===r?void 0:r[e])||{};return{title:n.title,saves:n.saves,area:n.area,id:n.id||e}})),sortBy:this.selectedSortPath.value}).map((function(t){return t.id}))}if(/area|trending|categories|collection/.test(this.formatQuery.showingFor)&&this.formatQuery.fetched){var r=Object(main.l)({obj:this.$store.state,path:this.formatQuery.path});return Array.isArray(r)||(r=[]),e({array:(r||[]).map((function(t){return{title:t.title,img:t.img}})),sortBy:this.selectedSortPath.value})}return[]},getItems:function(){var t=this;return this.items.filter((function(e,i){return i<t.pageIndex*t.pageLimit&&i>=(t.pageIndex-1)*t.pageLimit}))},pageLength:function(){return Math.ceil((this.items.length||0)/this.pageLimit||0)},showingFor:function(){return this.$route.query.for},sortBy:function(){var t=Object(o.a)(Object(main.D)());return"recipe"==this.showingFor?t:[{title:"Title: A-Z",value:"titledesc"},{title:"Title: Z-A",value:"titleasc"}]},selectedSortPath:function(){var t=this;return this.sortBy.find((function(e){return e.value==t.getSelectedSortValue}))||{}},selectedSort:function(){return this.selectedSortPath.title},getSelectedSortValue:function(){return this.selectedSortValue},showingInfo:function(){var t=this.getItems||[],e=this.items.indexOf(t[0]),r=this.items.indexOf(t[t.length-1])+1;return"Showing ".concat(e||1," to ").concat(r," of ").concat(this.items.length," item").concat(t.length>1?"s":"")}}),watch:d(d({},main.v.watch),{},{pageIndex:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pageChanged++,main.A.call(t,!1),e.next=4,t.$sleep();case 4:case"end":return e.stop()}}),e)})))()},items:function(){this.fetchRecipeGroup()},"$store.state.idb":function(t){t.uid&&(this.fetchRouteRequest(),this.fetchRecipeGroup())},"$store.state.exploreBuilt":function(t){t&&!this.formatQuery.fetched&&(console.log(4949),this.fetchRouteRequest())}}),beforeCreate:function(){this.$commit("UPDATE_",{path:"header",value:{text:Object(main.d)(Object(main.j)(this.$route.query["v-t"],this.$route.query["v-cst"])).replace(/\s+collections$/," collection"),showOnMobile:!0}})},created:function(){this.pageLimit=this.formatQuery.pageLimit,this.fetchRouteRequest(),this.fetchRecipeGroup()},beforeMount:function(){main.A.call(this,!1),this.selectedSortValue=this.$route.query.sort||""},mounted:function(){main.v.mounted.call(this)},methods:d(d({},main.v.methods),{},{fetchRouteRequest:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==t.formatQuery.fetched){e.next=4;break}return r=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=t.formatQuery.rpc)[0]){e.next=3;break}return e.abrupt("return",Object(main.z)());case 3:return e.prev=3,e.next=6,null==t||null===(n=t[r[0]])||void 0===n?void 0:n.call(t,r[1]);case 6:if(o=e.sent,data=o.data,!o.error){e.next=11;break}return e.abrupt("return",Object(main.z)(t.fetching="error"));case 11:return e.abrupt("return",Object(main.z)(data));case 14:e.prev=14,e.t0=e.catch(3),e.t0&&console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}(),e.next=4,r();case 4:case"end":return e.stop()}}),e)})))()},fetchRecipeGroup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,path,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.fetching&&t.formatQuery.fetched){e.next=2;break}return e.abrupt("return",Object(main.z)([]));case 2:return e.next=4,t.$nextTick();case 4:if(t.items.length){e.next=6;break}return e.abrupt("return",Object(main.z)());case 6:if(t.fetching=!0,r=Date.now(),path=(t.formatQuery.lowerTitle||"").replace(/\s+/g,"-"),n=t.$store.state.fetchTimeStamps[path]||0,!(r-Object(main.t)(30)>n&&t.$store.state.idb.uid)){e.next=16;break}return e.next=13,t.$fetchGroup({array:t.items,fn:"f_d",save:function(){return{timeStamp:r}}});case 13:o=e.sent,o.data&&((c=d({},t.$store.state.fetchTimeStamps))[path]=r,t.$commit("UPDATE_",{path:"fetchTimeStamps",value:c}));case 16:t.fetching=!1;case 17:case"end":return e.stop()}}),e)})))()}}),render:function(t){var e,r=this;console.log(this.formatQuery);var o={"data-p-v-ix":""},div=function(e,r){return t("div",e,r)},h2=function(e,r){return t("h2",e,r)},select=function(e,r){return t("ui-select",e,r)};if(!this.items.length)return div({attrs:d(d({},o),{},{title:"loading"}),staticClass:"loading-root"},[div({attrs:d({},o),staticClass:"spinner page"}),h2({attrs:d({},o),staticClass:"loading-title"},"LOADING ITEMS...")]);console.log(this.formatQuery);var c,br=this.breakpoints,l=/xxs/.test(br.is),f=/xs/.test(br.is),h=/sm/.test(br.is),m=/md/.test(br.is),v=/lg/.test(br.is),y=/xl/.test(br.is),x=l||f||h,w=l||f?"148px":h?"172px":m?"212px":v?"224px":y?"232px":"148px";return div({attrs:d({},o),staticClass:"root",class:[{"fade-slide-y-appear":!!this.pageChanged,"theme-primary":this.$theme.light}]},[x?null:h2({attrs:d({},o),staticClass:"title fill-before divide-before"},this.formatQuery.title),div({attrs:d({},o),staticClass:"banner fill-before divide-before"},[{title:"sort ".concat(this.formatQuery.lowerTitle),icon:"sort",text:this.selectedSort||"Sort by",vmodel:this.selectedSortValue}].map((function(e,n){return function(e,r){return t("ui-btn",e,r)}({key:n+"banner-item",props:{background:"transparent",tag:"form"},attrs:{tabindex:"-1"},staticClass:"select-wrap"},[(c={attrs:d({name:e.icon},o)},t("ui-icon",c,l)),e.text,select({ref:"select",props:{multiple:n>0,items:0==n?r.sortBy:r.filters,title:"sort by",vmodel:e.vmodel},on:0==n?{vmodel:function(t){r.$router.replace({query:d(d({},r.$route.query),{},{page:1,sort:r.selectedSortValue||"default"})}),r.selectedSortValue=t,main.A.call(r)}}:void 0})]);var c,l}))),div({attrs:d({},o),staticClass:"desc"},[{title:"total items",text:"".concat((this.items||[]).length," item").concat((null===(e=this.items)||void 0===e?void 0:e.length)>1?"s":""," found")},{title:"page index",text:"page ".concat(this.pageIndex," of ").concat(this.pageLength)}].map((function(e,r){return t("p",{key:r+"desc",attrs:d(d({},o),{},{title:e.title}),staticClass:"desc-item"},e.text)}))),div({attrs:d({},o),staticClass:"items-wrap",class:[{"fade-appear":!!this.pageChanged}],style:{"--card-height":w}},[this.getItems.map((function(e,n){return o={key:n+"card",props:{item:e,type:"2",height:w,to:r.formatQuery.isRecipe?"/recipe/".concat(e):main.p.call(r,{variable:"$c$:".concat(r.formatQuery.lowerTitle||"",",$x$:explore,$f$:").concat(r.formatQuery.innerGet||"",",$a$:").concat(r.formatQuery.showingFor,",$l$:16,$dt$:").concat((e.title||"").toLowerCase()),title:"$dt$ $c$",showingFor:"recipe",fetched:":c",path:"$x$Sections.$c$.".concat((e.title||"").toLowerCase()),get:"$f$ {$a$:".concat("collections"==r.formatQuery.lowerTitle?e.title||"":(e.title||"").toLowerCase(),"}"),limit:"$l$"}),outline:{outlined:!0,outlinedStroke:"1px",outlinedOpacity:".15"}}},t("mediumCard",o);var o}))]),t("p",{attrs:d({},o),staticClass:"items-shown"},[this.showingInfo]),this.pageLength>1?div({attrs:d({},o),staticClass:"pagination-wrap"},[t("uiPagination",{props:{vmodel:parseFloat(this.$route.query.page||1),length:this.pageLength},on:{vmodel:(c=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.$router.push({query:d(d({},r.$router.query),{},{page:e})}),t.next=3,r.$nextAnimFrame();case 3:main.A.call(r,!1);case 4:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)})}})]):null,main.r.call(this,t)])}},m=h,v=(r(406),r(4)),component=Object(v.a)(m,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);