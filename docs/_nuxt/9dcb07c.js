(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{401:function(t,e,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("170aadd4",content,!0,{sourceMap:!1})},408:function(t,e,r){"use strict";r(401)},409:function(t,e,r){var n=r(14)(!1);n.push([t.i,".loading-root[data-p-r-id]{padding:var(--divide-offset) var(--half-offset);display:grid;align-items:center;justify-items:center;place-items:center;grid-row-gap:var(--half-offset);row-gap:var(--half-offset)}.loading-title[data-p-r-id]{font-size:1rem;font-weight:400;color:var(--subtitle-c)}.recipe-id{position:relative;max-height:100vh;overflow-x:hidden;overflow-y:auto;overflow:hidden auto;--scrollbar-size:1px}.recipe-id .root[data-sbn]{bottom:0;right:0;margin:var(--qtr-offset);background:var(--tertiary)!important;color:#fff!important;position:absolute}.row-1[data-p-r-id]{display:flex;padding:var(--qtr-offset) var(--half-offset);max-width:660px;margin:0 auto;justify-content:space-between}.area[data-p-r-id]{font-weight:600;font-size:1.15rem;letter-spacing:.3px;line-height:1.5;color:var(--subtitle-c);justify-self:flex-start}.likes[data-p-r-id]{font-weight:400;font-size:1.05rem;letter-spacing:.3px;line-height:1.5;color:var(--caption-c);font-style:italic;justify-self:flex-end}.title[data-p-r-id]{font-weight:800;font-size:1.75rem;padding:0 var(--half-offset);max-width:660px;margin:0 auto}.md-up .title[data-p-r-id]{text-align:center;margin-top:var(--half-offset);font-size:2.25rem}.ingredient-section .root[data-uite]{margin-top:var(--qtr-offset)}.instructions[data-p-r-id]{padding:calc(var(--qtr-offset)/2) var(--half-offset) 0;line-height:1.75;color:var(--body-c);letter-spacing:.2px;word-spacing:1.5px;max-width:860px;margin:0 auto}.md-up .instructions[data-p-r-id]{font-size:1.15rem;font-weight:400;line-height:2;letter-spacing:.4px;word-spacing:2px}.video-wrap[data-p-r-id]{display:grid;align-items:center;justify-items:center;place-items:center;padding:var(--half-offset)}.iframe[data-p-r-id]{width:100%;max-width:660px;height:350px;border-radius:.5rem}.can-hover .recipe-id-trending:hover .view-all:not(.Active):not(:hover):not(:focus):before{opacity:.1}.recipe-id .scroll-wrap[data-e-tg]{-ms-scroll-snap-type:none;scroll-snap-type:none;--item-width:calc(min(75%, 380px) - 1.5rem);grid-template-columns:repeat(var(--length),var(--item-width)) var(--half-offset);margin-top:var(--qtr-offset)}.recipe-id .title[data-mcd].type-2{font-size:1rem;letter-spacing:.4px;text-transform:capitalize;font-weight:400;padding:.25rem 0 0 .5rem;transition:transform .2s;color:var(--body-c);text-align:left;cursor:pointer}",""]),t.exports=n},416:function(t,e,r){"use strict";r.r(e);r(9),r(7),r(10),r(5),r(11);var n=r(3),o=r(1),main=(r(8),r(23),r(34),r(37),r(39),r(18),r(0));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"RecipeId",data:function(){return{selfName:"RecipeId",renderedComponents:["ParallaxPage","UiTable","SimilarItems","Trending"],loading:!1,selfRecipe:{}}},head:function(){return{title:this.pageTitle}},computed:l(l(l({},main.v.computed),main.f),{},{params:function(){return this.$route.params.id},recipe:function(){var t;return(null===(t=this.$store.state.recipes)||void 0===t?void 0:t[this.params])||{}},pageTitle:function(){var title=this.recipe.title||"loading recipe title...";return"View recipe - ".concat(title," ")}}),watch:l(l({},main.v.watch),{},{recipe:function(t,e){(null==t?void 0:t.timeStamp)>(null==e?void 0:e.timeStamp)&&this.fetchGroup()},"$store.state.idb":function(t){t.uid&&this.fetchGroup()}}),beforeCreate:function(){this.$commit("UPDATE_",{path:"text",value:"Recipe",innerPath:"header"})},created:function(){this.fetchGroup()},mounted:function(){main.v.mounted.call(this)},methods:l(l({},main.v.methods),{},{fetchGroup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,data,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$nextTick();case 3:if(t.params){e.next=5;break}return e.abrupt("return");case 5:if(r=Date.now(),n=t.$store.state.fetchTimeStamps["fetchAll-".concat(t.params)]||0,!(r-Object(main.t)(30)>n&&t.$store.state.idb.uid)){e.next=13;break}return e.next=10,t.$fetchGroup({array:[t.params],fn:"fetch_all",save:function(){return{timeStamp:r,forRecipeId:!0}},replace:!0});case 10:o=e.sent,(data=o.data)?(t.loading=!1,t.selfRecipe=data[0],(c=l({},t.$store.state.fetchTimeStamps))["fetchAll-".concat(t.params)]=r,t.$commit("UPDATE_",{path:"fetchTimeStamps",value:l({},c)})):t.loading="error";case 13:t.loading=!1;case 14:case"end":return e.stop()}}),e)})))()}}),render:function(t){var e,r,n=this,div=function(e,r){return t("div",e,r)},o=this.recipe;if(!this.$store.state.appLoaded||!o.img)return div({staticClass:"sr-only"},["Loading recipe please wait..."]);var c=[null===(e=o)||void 0===e||null===(r=e.media)||void 0===r?void 0:r.youtube].filter(Boolean);!o.instructions&&this.selfRecipe.instructions&&(o=this.selfRecipe);var d,f={"data-p-r-id":""},h2=function(e,r){return t("h2",e,r)},h3=function(e,r){return t("h3",e,r)},h4=function(e,r){return t("h4",e,r)},h=function(e,r){return t("appSection",e,r)},table=function(e){return t("ui-table",e)},m=function(e){return t("similarItems",e)},v=function(e){return t("trending",e)},br=this.breakpoints,w=/xxs|xs|sm/.test(br.is);return d={props:{img:o.img,hideFooter:this.loading},attrs:{id:"scrolling-element"},staticClass:"recipe-id fade-appear",class:[{"overflow-hidden":!this.$store.getters.pageEntered}],scopedSlots:{header:function(){return[(e={props:{item:n.params}},t("savedBtn",e,r))];var e,r},default:function(){var e,r,d;return n.loading?[div({attrs:l(l({},f),{},{"aria-label":"loading please wait..."}),staticClass:"loading-root"},["error"===n.loading?(r={attrs:{clickable:!0,name:"refresh",size:"lg",tag:"button"},on:{"!click":n.fetchGroup}},t("ui-icon",r,d)):div({attrs:l({},f),staticClass:"spinner"},[["dot1","dot2"].map((function(t){return div({class:t})}))]),h2({attrs:l({},f),staticClass:"loading-title"},"error"===n.loading?"Error fetching":"LOADING RECIPE ...")])]:div({key:n.recipe.forRecipeId,attrs:l({},f),staticClass:"body-wrap"},[[div({attrs:l({},f),staticClass:"row-1"},[h3({attrs:l({},f),staticClass:"area"},[(o.area||"Unknown").replace(/^unknown$/i,"Unknown area")]),o.saves?h4({attrs:l({},f),staticClass:"likes"},["".concat(o.saves," like").concat(o.saves>1?"s":"")]):null]),t(w?"mobileShowHeaderText":"h2",{props:{tag:"h2"},attrs:l({},f),staticClass:"title line-clamp-3"},[o.title]),h({attrs:{title:"Ingredients"},staticClass:"ingredient-section"},[table({props:{header:["Title","Qty"],body:((null===(e=o)||void 0===e?void 0:e.ingredients)||[]).filter((function(t){return 2==(null==t?void 0:t.length)})),describe:"list of ingredients used for ".concat(o.title," in no particular order"),id:"ingredients-table",row:"42px",column:"1fr 25%"}})]),h({attrs:{title:"Instructions"}},[div({attrs:l({},f),staticClass:"instructions"},[o.instructions])]),[c.length?h({attrs:{title:"Watch"}},[div({attrs:l({},f),staticClass:"video video-wrap"},[c.map((function(e,r){var n=function(t){return e.replace(/watch\?v=/,t||"embed/")};return t("iframe",{key:r+"video",attrs:l(l({},f),{},{src:n(),srcdoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{background:#FF0000;height:78px;width:96px;display:grid;place-items:center;border-radius:16px;left:50%;transform:translateX(-50%);text-align:center;cursor:pointer;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}a,img,html{background:#000;}</style><a title='click to watch' href=".concat(n(),"><img src='").concat(n("vi/").replace(/\/www/,"/img"),"/hqdefault.jpg' alt='").concat(o.title,' youtube video\'><span><svg style="width:72px;height:72px" viewBox="0 0 24 24"><path fill="#fff" d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg></span></a>'),crossorigin:!0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,title:o.title}),staticClass:"iframe"})}))])]):null],[m({props:{item:o.id}})],v({props:{showDescription:!1,type:"2",height:"180px"},staticClass:"recipe-id-trending"})]])}}},t("parallaxPage",d)}},f=(r(408),r(4)),component=Object(f.a)(d,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);