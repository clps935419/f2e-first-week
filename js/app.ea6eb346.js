(function(e){function t(t){for(var a,o,u=t[0],i=t[1],s=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/f2e-first-week/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0381":function(e,t,n){},"10e6":function(e,t,n){"use strict";n("3ae5")},"26f3":function(e,t,n){},2845:function(e,t,n){"use strict";n("4ee3")},"2e2c":function(e,t,n){"use strict";n("99da")},"386f":function(e,t,n){},"3ae5":function(e,t,n){},"3ce1":function(e,t,n){"use strict";n("e4c1")},"4bfa":function(e,t,n){},"4da5":function(e,t,n){},"4ee2":function(e,t,n){},"4ee3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"wrapper"},r={class:"content"};function o(e,t,n,o,u,i){var s=Object(a["y"])("Header"),l=Object(a["y"])("Banner"),d=Object(a["y"])("Loading"),f=Object(a["y"])("SearchResult"),g=Object(a["y"])("Page"),b=Object(a["y"])("router-view"),O=Object(a["y"])("Footer"),h=Object(a["y"])("Dialog");return Object(a["r"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",c,[Object(a["g"])(s),Object(a["g"])(l),Object(a["f"])("div",r,[Object(a["g"])(d),Object(a["g"])(f),Object(a["g"])(g),Object(a["g"])(b)]),Object(a["g"])(O)]),Object(a["f"])("div",{class:Object(a["m"])(["shade",{show:o.getShade}]),onClick:t[0]||(t[0]=function(){return o.closeShade&&o.closeShade.apply(o,arguments)})},null,2),Object(a["g"])(h)],64)}var u=function(e){return Object(a["u"])("data-v-5e631dc4"),e=e(),Object(a["s"])(),e},i={class:"header"},s={class:"header_left"},l=u((function(){return Object(a["f"])("div",{class:"header_logo"},null,-1)})),d={class:"header_right"},f=u((function(){return Object(a["f"])("i",null,null,-1)})),g=u((function(){return Object(a["f"])("span",null,"台灣景點",-1)})),b=u((function(){return Object(a["f"])("i",null,null,-1)})),O=u((function(){return Object(a["f"])("span",null,"美食住宿",-1)}));function h(e,t,n,c,r,o){var u=Object(a["y"])("router-link");return Object(a["r"])(),Object(a["e"])("div",i,[Object(a["f"])("div",s,[Object(a["g"])(u,{to:"/"},{default:Object(a["F"])((function(){return[l]})),_:1})]),Object(a["f"])("div",d,[Object(a["g"])(u,{class:"spot",to:"/spot"},{default:Object(a["F"])((function(){return[f,g]})),_:1}),Object(a["g"])(u,{class:"live",to:"/restaurant"},{default:Object(a["F"])((function(){return[b,O]})),_:1})])])}var p={setup:function(){return{}}},j=(n("e947"),n("6b0d")),v=n.n(j);const m=v()(p,[["render",h],["__scopeId","data-v-5e631dc4"]]);var S=m,P=(n("b0c0"),function(e){return Object(a["u"])("data-v-46ebcd70"),e=e(),Object(a["s"])(),e}),y={class:"banner-area"},I=P((function(){return Object(a["f"])("div",{class:"banner-area_img"},null,-1)})),w={class:"banner-area_center-item"},x=P((function(){return Object(a["f"])("div",{class:"title-img"},null,-1)})),C=P((function(){return Object(a["f"])("div",{class:"sub-text"}," 台北、台中、台南、屏東、宜蘭……遊遍台灣 ",-1)})),_={class:"input-area"},R={class:"select-area-2"},D=P((function(){return Object(a["f"])("option",{value:""},"請選擇類別",-1)})),N=["value"],A=P((function(){return Object(a["f"])("option",{value:"",disabled:""},"請選擇縣市",-1)})),T=["value"];function k(e,t,n,c,r,o){return Object(a["r"])(),Object(a["e"])("div",y,[I,Object(a["f"])("div",w,[x,C,Object(a["f"])("div",_,[Object(a["G"])(Object(a["f"])("input",{type:"text",placeholder:"請輸入關鍵字","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.searchText=e})},null,512),[[a["D"],c.searchText]]),Object(a["f"])("i",{onClick:t[1]||(t[1]=function(){return c.handleSearch&&c.handleSearch.apply(c,arguments)})})]),Object(a["f"])("div",R,[Object(a["G"])(Object(a["f"])("select",{name:"",id:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.searchGroup=e})},[D,(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(c.groupListArr,(function(e){return Object(a["r"])(),Object(a["e"])("option",{key:e.name,value:e.val},Object(a["A"])(e.text),9,N)})),128))],512),[[a["C"],c.searchGroup]]),Object(a["G"])(Object(a["f"])("select",{name:"",id:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.searchLocate=e})},[A,(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(c.cityArr,(function(e){return Object(a["r"])(),Object(a["e"])("option",{value:e,key:e},Object(a["A"])(e),9,T)})),128))],512),[[a["C"],c.searchLocate]])])])])}n("d3b7"),n("159b");var L=n("a1e9"),U=n("5502"),$={components:{},setup:function(){var e=Object(U["b"])(),t=Object(L["k"])([{text:"美食",val:"restaurant"},{text:"景點",val:"spot"},{text:"住宿",val:"hotel"},{text:"活動",val:"activity"}]),n=Object(L["k"])(["基隆市","台北市","新北市","宜蘭縣","桃園市","新竹市","新竹縣","苗栗縣","台中市","彰化縣","南投縣","雲林縣","嘉義市","嘉義縣","台南市","高雄市","屏東縣","花蓮縣","台東縣","澎湖縣","連江縣","金門縣"]),a=Object(L["l"])(""),c=Object(L["l"])(""),r=Object(L["l"])(""),o=function(){var t={searchText:a.value,searchGroup:c.value,searchLocate:r.value};e.dispatch("handleIsSearch",!0),e.dispatch("handleSearch",t).then((function(e){u(e)}))},u=function(t){var n=0;t.forEach((function(a){var c=new Image;c.src=a.Picture.PictureUrl1,c.onload=function(){var a=!1;n++,a=n!==t.length,e.dispatch("handleLoading",a)},c.onerror=function(){console.error("i**",a.Name,"圖片讀取失敗"),e.dispatch("handleLoading",!1)}}))};return{groupListArr:t,cityArr:n,searchText:a,searchGroup:c,searchLocate:r,handleSearch:o}}};n("9330");const M=v()($,[["render",k],["__scopeId","data-v-46ebcd70"]]);var H=M,F=function(e){return Object(a["u"])("data-v-fa08716a"),e=e(),Object(a["s"])(),e},G={class:"footer"},J=F((function(){return Object(a["f"])("span",null,"Taiwan Tourguide © Code: Leonard / Design: KT",-1)})),E=[J];function X(e,t){return Object(a["r"])(),Object(a["e"])("div",G,E)}n("2845");const B={},V=v()(B,[["render",X],["__scopeId","data-v-fa08716a"]]);var K=V,q=function(e){return Object(a["u"])("data-v-3daf9fb6"),e=e(),Object(a["s"])(),e},z={key:0,class:"loading-bg"},W=q((function(){return Object(a["f"])("div",{class:"laoding-bar"},[Object(a["f"])("div",{class:"laoding-bar_img"}),Object(a["f"])("div",{class:"laoding-bar_text"},"Loading....")],-1)})),Z=[W];function Q(e,t,n,c,r,o){return c.isLoading?(Object(a["r"])(),Object(a["e"])("div",z,Z)):Object(a["d"])("",!0)}var Y={setup:function(){var e=Object(U["b"])(),t=Object(a["b"])((function(){return e.getters["getIsLoading"]}));return{isLoading:t}}};n("dbb2");const ee=v()(Y,[["render",Q],["__scopeId","data-v-3daf9fb6"]]);var te=ee,ne=function(e){return Object(a["u"])("data-v-4cbcd08a"),e=e(),Object(a["s"])(),e},ae={key:0,class:"result-wrapper"},ce={class:"result"},re=ne((function(){return Object(a["f"])("div",{class:"result_title"},[Object(a["f"])("i"),Object(a["f"])("span",null,"搜尋結果")],-1)})),oe={key:0,class:"result_not-found"},ue={key:1,class:"result_content"},ie=["onClick"],se=["src"],le={class:"result_content-item-title"},de={class:"result_content-item-location"},fe=ne((function(){return Object(a["f"])("i",null,null,-1)}));function ge(e,t,n,c,r,o){return c.handleIsSearch&&!c.handleIsLoading?(Object(a["r"])(),Object(a["e"])("div",ae,[Object(a["f"])("div",ce,[re,0===c.getSearchResult.length?(Object(a["r"])(),Object(a["e"])("div",oe," not found result ")):(Object(a["r"])(),Object(a["e"])("div",ue,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(c.handlePageSearchResult,(function(e){return Object(a["r"])(),Object(a["e"])("div",{class:"result_content-item",key:e.ID,onClick:function(t){return c.openDialog(e)}},[Object(a["f"])("img",{src:e.Picture.PictureUrl1,alt:""},null,8,se),Object(a["f"])("div",le,Object(a["A"])(e.RestaurantName||e.HotelName||e.ActivityName||e.ScenicSpotName),1),Object(a["f"])("div",de,[fe,Object(a["f"])("span",null,Object(a["A"])(e.City),1)])],8,ie)})),128))]))])])):Object(a["d"])("",!0)}var be=n("5c40"),Oe=n("6c2d");function he(){var e="fcb1331f951a48edb6ce7d80e2b7a001",t="gwqVwmt8XiZ71aOMWU9JXoB16Os",n=(new Date).toGMTString(),a=new Oe["a"]("SHA-1","TEXT");a.setHMACKey(t,"TEXT"),a.update("x-date: "+n);var c=a.getHMAC("B64"),r='hmac username="'+e+'", algorithm="hmac-sha1", headers="x-date", signature="'+c+'"';return{Authorization:r,"X-Date":n}}function pe(){var e=Object(U["b"])(),t=Object(L["c"])((function(){return e.getters["getSearchResult"]})),n=Object(L["c"])((function(){return e.getters["getSearchResult"].length})),a=Object(L["c"])((function(){return e.getters["getShowPageNum"]})),c=Object(L["c"])((function(){return e.getters["getIsSearch"]})),r=Object(L["c"])((function(){return e.getters["getIsLoading"]})),o=Object(L["c"])((function(){return e.getters["getIsShowPage"]})),u=Object(L["c"])((function(){return e.getters["getTotalShowPageNum"]})),i=Object(L["c"])((function(){return e.getters["getPageSearchResult"]})),s=Object(L["c"])((function(){return parseInt(e.getters["getCurrentPageIndex"])}));return{getSearchResult:t,handleIsSearch:c,handleIsLoading:r,getSearchResultLength:n,getShowPageNum:a,handleTotalShowPageNum:u,handleIsShowPage:o,handlePageSearchResult:i,getCurrentPageIndex:s}}function je(){var e=Object(U["b"])(),t=Object(L["c"])((function(){return e.getters["getOpenShade"]})),n=Object(L["c"])((function(){return e.getters["getIsOpenDialog"]})),a=Object(L["c"])((function(){return e.getters["getDialogContent"]})),c=function(t){console.log("dat",t),e.dispatch("handleShadeOpen",t)},r=function(t){e.dispatch("handleDialogOpen",t)};return{getShade:t,getIsOpenDialog:n,getDialogContent:a,handleShadeOpen:c,handleDialogOpen:r}}var ve=he,me=pe,Se=je,Pe={setup:function(){var e=me(),t=e.getSearchResult,n=e.handleIsLoading,a=e.handlePageSearchResult,c=Object(U["b"])(),r=Object(L["c"])((function(){return c.getters["getIsSearch"]})),o=function(e){c.dispatch("handleSetDialogContent",e)};return Object(be["P"])(t,(function(e){})),{getSearchResult:t,handleIsSearch:r,handleIsLoading:n,handlePageSearchResult:a,openDialog:o}}};n("91d3");const ye=v()(Pe,[["render",ge],["__scopeId","data-v-4cbcd08a"]]);var Ie=ye,we={key:0,class:"page"},xe={class:"page_item-box"};function Ce(e,t,n,c,r,o){return c.handleIsSearch&&c.handleIsShowPage&&!c.handleIsLoading?(Object(a["r"])(),Object(a["e"])("div",we,[Object(a["f"])("div",{class:"page_prev",onClick:t[0]||(t[0]=function(e){return c.getCurrentPageNum(1)})},"<<"),Object(a["f"])("ul",xe,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(c.handleTotalShowPageNum,(function(e){return Object(a["r"])(),Object(a["e"])("li",{key:e,onClick:t[1]||(t[1]=function(e){return c.getCurrentPageNum(e.target.textContent)}),class:Object(a["m"])({active:e==c.getCurrentPageIndex})},Object(a["A"])(e),3)})),128))]),Object(a["f"])("div",{class:"page_end",onClick:t[2]||(t[2]=function(e){return c.getCurrentPageNum(c.handleTotalShowPageNum)})},">>")])):Object(a["d"])("",!0)}var _e={setup:function(){var e=Object(U["b"])(),t=me(),n=t.handleTotalShowPageNum,a=t.handleIsShowPage,c=t.handleIsSearch,r=t.handleIsLoading,o=t.getCurrentPageIndex,u=function(t){e.dispatch("handlePageIndex",parseInt(t))};return{handleIsSearch:c,getCurrentPageNum:u,handleTotalShowPageNum:n,handleIsShowPage:a,handleIsLoading:r,getCurrentPageIndex:o}}};n("3ce1");const Re=v()(_e,[["render",Ce],["__scopeId","data-v-42996468"]]);var De=Re,Ne=function(e){return Object(a["u"])("data-v-84dd614a"),e=e(),Object(a["s"])(),e},Ae={class:"dialog-item"},Te={class:"dialog-itme_content"},ke=Ne((function(){return Object(a["f"])("div",null,null,-1)}));function Le(e,t,n,c,r,o){return c.getIsOpenDialog&&c.getShade?(Object(a["r"])(),Object(a["e"])("div",{key:0,class:"dialog-wrapper",onClick:t[0]||(t[0]=function(){return c.closeDialogEvent&&c.closeDialogEvent.apply(c,arguments)})},[Object(a["f"])("div",Ae,[Object(a["f"])("div",{class:"dialog-item_img",style:Object(a["n"])({backgroundImage:"url('".concat(c.getDialogContent.Picture.PictureUrl1,"')")})},null,4),Object(a["f"])("div",Te,[Object(a["f"])("div",null,Object(a["A"])(c.getDialogContent.RestaurantName||c.getDialogContent.HotelName||c.getDialogContent.ActivityName||c.getDialogContent.ScenicSpotName),1),Object(a["f"])("div",null,Object(a["A"])(c.getDialogContent.Description),1),ke])])])):Object(a["d"])("",!0)}var Ue={setup:function(){Object(U["b"])();var e=Se(),t=e.getIsOpenDialog,n=e.getDialogContent,a=e.getShade,c=e.handleShadeOpen,r=e.handleDialogOpen,o=function(e){-1===e.target.className.indexOf("dialog-item")&&(c(!1),r(!1))};return Object(be["P"])(n,(function(e){console.log("igetDialogContent",e)})),{getIsOpenDialog:t,getDialogContent:n,getShade:a,closeDialogEvent:o}}};n("10e6");const $e=v()(Ue,[["render",Le],["__scopeId","data-v-84dd614a"]]);var Me=$e,He={components:{Header:S,Banner:H,Footer:K,Loading:te,SearchResult:Ie,Page:De,Dialog:Me},setup:function(){var e=Se(),t=e.getShade,n=e.handleShadeOpen,a=e.handleDialogOpen,c=function(){console.log("點--"),n(!1),a(!1)};return{getShade:t,closeShade:c}}};n("cfa4");const Fe=v()(He,[["render",o]]);var Ge=Fe,Je=n("6c02"),Ee={key:0,class:"homepage"};function Xe(e,t,n,c,r,o){var u=Object(a["y"])("Activity"),i=Object(a["y"])("Restaurant");return c.handleIsSearch?Object(a["d"])("",!0):(Object(a["r"])(),Object(a["e"])("div",Ee,[Object(a["g"])(u),Object(a["g"])(i)]))}var Be=function(e){return Object(a["u"])("data-v-0f2396ea"),e=e(),Object(a["s"])(),e},Ve={class:"activity"},Ke=Be((function(){return Object(a["f"])("div",{class:"activity_title"},[Object(a["f"])("i"),Object(a["f"])("span",null,"熱門活動")],-1)})),qe={class:"activity_content"},ze=["onClick"],We=["src"],Ze={class:"activity_content-item-right"},Qe={class:"activity_content-item-title"},Ye={class:"activity_content-item-content"},et={class:"activity_content-item-footer"},tt={class:"left"},nt=Be((function(){return Object(a["f"])("i",null,null,-1)})),at=Be((function(){return Object(a["f"])("a",{href:"#"},"活動詳情",-1)}));function ct(e,t,n,c,r,o){return Object(a["r"])(),Object(a["e"])("div",Ve,[Ke,Object(a["f"])("div",qe,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(c.popularActive,(function(e){return Object(a["r"])(),Object(a["e"])("div",{class:"activity_content-item",key:e.id,onClick:function(t){return c.openDialog(e)}},[Object(a["f"])("img",{src:e.Picture.PictureUrl1,alt:""},null,8,We),Object(a["f"])("div",Ze,[Object(a["f"])("div",Qe,Object(a["A"])(e.ActivityName),1),Object(a["f"])("div",Ye,Object(a["A"])(e.Description),1),Object(a["f"])("div",et,[Object(a["f"])("div",tt,[nt,Object(a["f"])("span",null,Object(a["A"])(e.Location),1)]),at])])],8,ze)})),128))])])}var rt={setup:function(){var e=Object(U["b"])(),t=Object(L["c"])((function(){return e.getters["Homepage/getPopularActivity"]})),n=function(t){e.dispatch("handleSetDialogContent",t)};return{popularActive:t,openDialog:n}}};n("6dbd");const ot=v()(rt,[["render",ct],["__scopeId","data-v-0f2396ea"]]);var ut=ot,it=function(e){return Object(a["u"])("data-v-27ea3bd2"),e=e(),Object(a["s"])(),e},st={class:"Restaurant"},lt=it((function(){return Object(a["f"])("div",{class:"Restaurant_title"},[Object(a["f"])("i"),Object(a["f"])("span",null,"熱門餐飲")],-1)})),dt={class:"Restaurant_content"},ft=["onClick"],gt=["src"],bt={class:"Restaurant_content-item-title"},Ot={class:"Restaurant_content-item-location"},ht=it((function(){return Object(a["f"])("i",null,null,-1)}));function pt(e,t,n,c,r,o){return Object(a["r"])(),Object(a["e"])("div",st,[lt,Object(a["f"])("div",dt,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(c.popularRestaurant,(function(e){return Object(a["r"])(),Object(a["e"])("div",{class:"Restaurant_content-item",key:e.ID,onClick:function(t){return c.openDialog(e)}},[Object(a["f"])("img",{src:e.Picture.PictureUrl1,alt:""},null,8,gt),Object(a["f"])("div",bt,Object(a["A"])(e.RestaurantName),1),Object(a["f"])("div",Ot,[ht,Object(a["f"])("span",null,Object(a["A"])(e.City),1)])],8,ft)})),128))])])}var jt={setup:function(){var e=Object(U["b"])(),t=Object(L["c"])((function(){return e.getters["Homepage/getPopularRestaurant"]})),n=function(t){e.dispatch("handleSetDialogContent",t)};return{popularRestaurant:t,openDialog:n}}};n("7c70");const vt=v()(jt,[["render",pt],["__scopeId","data-v-27ea3bd2"]]);var mt=vt,St={components:{Activity:ut,Restaurant:mt},setup:function(){var e=Object(U["b"])(),t=function(){console.log("ini"),e.dispatch("handleIsSearch",!1),e.dispatch("Homepage/handleInit").then((function(e){n(e)}))},n=function(t){var n=0;t.forEach((function(a){var c=new Image;c.src=a.Picture.PictureUrl1,c.onload=function(){var a=!1;n++,a=n!==t.length,e.dispatch("handleLoading",a)}}))},a=Object(L["c"])((function(){return e.getters["getIsSearch"]}));return Object(be["x"])((function(){t()})),{handleIsSearch:a}}};n("a955");const Pt=v()(St,[["render",Xe],["__scopeId","data-v-382e2066"]]);var yt=Pt,It={class:"spot"};function wt(e,t,n,c,r,o){var u=Object(a["y"])("Activity");return Object(a["r"])(),Object(a["e"])("div",It,[Object(a["g"])(u)])}var xt={components:{Activity:ut},setup:function(){var e=Object(U["b"])(),t=function(){e.dispatch("handleIsSearch",!1)};return Object(be["x"])((function(){t()})),{}}};n("e242");const Ct=v()(xt,[["render",wt],["__scopeId","data-v-480b0044"]]);var _t=Ct,Rt={class:"restaurant"};function Dt(e,t,n,c,r,o){var u=Object(a["y"])("Restaurant");return Object(a["r"])(),Object(a["e"])("div",Rt,[Object(a["g"])(u)])}var Nt={components:{Restaurant:mt},setup:function(){var e=Object(U["b"])(),t=function(){e.dispatch("handleIsSearch",!1)};return Object(be["x"])((function(){t()})),{}}};n("2e2c");const At=v()(Nt,[["render",Dt],["__scopeId","data-v-59430785"]]);var Tt=At,kt={class:""},Lt=Object(a["f"])("h1",null,"trnasport",-1),Ut=[Lt];function $t(e,t){return Object(a["r"])(),Object(a["e"])("div",kt,Ut)}const Mt={},Ht=v()(Mt,[["render",$t]]);var Ft=Ht,Gt=[{path:"/",name:"Home",component:yt},{path:"/spot",name:"spot",component:_t},{path:"/restaurant",name:"restaurant",component:Tt},{path:"/transport",name:"transport",component:Ft}],Jt=Object(Je["a"])({history:Object(Je["b"])("/f2e-first-week/"),routes:Gt}),Et=Jt,Xt=n("1da1"),Bt=(n("96cf"),n("4de4"),n("99af"),n("bc3a")),Vt=n.n(Bt),Kt=Vt.a.create({baseURL:"https://ptx.transportdata.tw/"}),qt=function(){return Kt.get("/MOTC/v2/Tourism/Activity?$filter=Picture%2FPictureUrl1%20ne%20null&$top=4&$format=JSON",{header:ve()})},zt=function(){return Kt.get("/MOTC/v2/Tourism/Restaurant?$filter=Picture%2FPictureUrl1%20ne%20null%20and%20City%20ne%20null&$top=10&$format=JSON",{header:ve()})},Wt=Vt.a.create({baseURL:"https://ptx.transportdata.tw/"}),Zt=function(e){return Wt.get("/MOTC/v2/Tourism/ScenicSpot?$filter=contains(ScenicSpotName%2C'".concat(e.searchText,"')%20and%20contains(Address%2C'").concat(e.searchLocate,"')and%20Picture%2FPictureUrl1%20ne%20null&$top=30&$format=JSON"),{header:ve()})},Qt=function(e){return Wt.get("/MOTC/v2/Tourism/Restaurant?$filter=contains(RestaurantName%2C'".concat(e.searchText,"')%20and%20contains(Address%2C'").concat(e.searchLocate,"')and%20Picture%2FPictureUrl1%20ne%20null&$top=30&$format=JSON"),{header:ve()})},Yt=function(e){return Wt.get("/MOTC/v2/Tourism/Hotel?$filter=contains(HotelName%2C'".concat(e.searchText,"')%20and%20contains(Address%2C'").concat(e.searchLocate,"')and%20Picture%2FPictureUrl1%20ne%20null&$top=30&$format=JSON"),{header:ve()})},en=function(e){return Wt.get("/MOTC/v2/Tourism/Activity?$filter=contains(ActivityName%2C'".concat(e.searchText,"')%20and%20contains(Address%2C'").concat(e.searchLocate,"')and%20Picture%2FPictureUrl1%20ne%20null&$top=30&$format=JSON"),{header:ve()})},tn=qt,nn=zt,an=Zt,cn=Qt,rn=Yt,on=en,un={namespaced:!0,state:{popularActivity:[],popularRestaurant:[]},mutations:{init:function(e,t){e.popularActivity=t.popularActivity,e.popularRestaurant=t.popularRestaurant}},actions:{handleInit:function(e,t){return Object(Xt["a"])(regeneratorRuntime.mark((function t(){var n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={},t.next=4,tn();case 4:return a=t.sent,console.log("res",a),t.next=8,nn();case 8:return c=t.sent,n.popularActivity=a.data,n.popularRestaurant=c.data,e.commit("init",n),t.abrupt("return",a.data);case 15:t.prev=15,t.t0=t["catch"](0),console.log("error",t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}},getters:{getPopularActivity:function(e){return e.popularActivity},getPopularRestaurant:function(e){return e.popularRestaurant}}},sn=Object(U["a"])({state:{isLoading:!1,isOpenShade:!1,isOpenDialog:!1,searchResult:[],finalSearchResult:[],isSearch:!1,showPageNum:20,isShowPage:!1,currentPageIndex:1,currentTotalShowPageNum:0,dialogContent:{}},mutations:{setLoading:function(e,t){e.isLoading=t},setSearch:function(e,t){if(console.log("setSearch",t),e.searchResult=t,e.currentPageIndex=1,e.isShowPage=!1,e.currentTotalShowPageNum=0,t.length>e.showPageNum){console.log("目前第幾",e.currentTotalShowPageNum),e.currentTotalShowPageNum=Math.ceil(t.length/e.showPageNum),e.isShowPage=!0;var n=e.currentPageIndex*e.showPageNum,a=e.currentPageIndex*e.showPageNum-e.showPageNum+1,c=e.searchResult.filter((function(e,t){var c=t+1;return c>=a&&c<=n}));e.finalSearchResult=c}else e.currentTotalShowPageNum=0,e.isShowPage=!1,e.finalSearchResult=t},setIsSearch:function(e,t){e.isSearch=t},setPageIndex:function(e,t){e.currentPageIndex=t},setPageShow:function(e,t){e.isShowPage=t},setDialogContent:function(e,t){e.dialogContent=t,e.isOpenShade=!0,e.isOpenDialog=!0},setShadeOpen:function(e,t){e.isOpenShade=t},setDialogOpen:function(e,t){e.isOpenDialog=t}},actions:{handleLoading:function(e,t){e.commit("setLoading",t)},handleIsSearch:function(e,t){e.commit("setIsSearch",t)},handlePageIndex:function(e,t){e.commit("setPageIndex",t)},handlePageShow:function(e,t){e.commit("setPageShow",t)},handleSetDialogContent:function(e,t){e.commit("setDialogContent",t)},handleShadeOpen:function(e,t){e.commit("setShadeOpen",t)},handleDialogOpen:function(e,t){e.commit("setDialogOpen",t)},handleSearch:function(e,t){return Object(Xt["a"])(regeneratorRuntime.mark((function n(){var a,c,r,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("data",t),n.prev=1,a=[],n.t0=t.searchGroup,n.next="restaurant"===n.t0?6:"spot"===n.t0?13:"hotel"===n.t0?19:"activity"===n.t0?25:""===n.t0?31:49;break;case 6:return console.log("restaur"),n.next=9,cn(t);case 9:return a=n.sent,e.commit("setSearch",a.data),n.abrupt("return",a.data);case 13:return n.next=15,an(t);case 15:return a=n.sent,e.commit("setSearch",a.data),n.abrupt("return",a.data);case 19:return n.next=21,rn(t);case 21:return a=n.sent,e.commit("setSearch",a.data),n.abrupt("return",a.data);case 25:return n.next=27,on(t);case 27:return a=n.sent,e.commit("setSearch",a.data),n.abrupt("return",a.data);case 31:return n.next=33,cn(t);case 33:return a=n.sent,n.next=36,an(t);case 36:return c=n.sent,n.next=39,rn(t);case 39:return r=n.sent,n.next=42,rn(t);case 42:return o=n.sent,n.next=45,a.data.concat(c.data,r.data,o.data);case 45:return u=n.sent,e.commit("setSearch",u),n.abrupt("return",u);case 49:return n.abrupt("break",50);case 50:n.next=55;break;case 52:n.prev=52,n.t1=n["catch"](1),console.log("err",n.t1);case 55:case"end":return n.stop()}}),n,null,[[1,52]])})))()}},getters:{getIsLoading:function(e){return e.isLoading},getSearchResult:function(e){return e.searchResult},getIsSearch:function(e){return e.isSearch},getShowPageNum:function(e){return e.showPageNum},getTotalShowPageNum:function(e){return e.currentTotalShowPageNum},getIsShowPage:function(e){return e.isShowPage},getPageSearchResult:function(e){var t=e.currentPageIndex*e.showPageNum,n=e.currentPageIndex*e.showPageNum-e.showPageNum+1,a=e.searchResult.filter((function(e,a){var c=a+1;return c>=n&&c<=t}));return a},getCurrentPageIndex:function(e){return console.log("--*---",e.currentPageIndex),e.currentPageIndex},getOpenShade:function(e){return e.isOpenShade},getIsOpenDialog:function(e){return e.isOpenDialog},getDialogContent:function(e){return e.dialogContent}},modules:{Homepage:un}});n("4ee2");Object(a["c"])(Ge).use(sn).use(Et).mount("#app")},"62b1":function(e,t,n){},"6dbd":function(e,t,n){"use strict";n("8155")},7576:function(e,t,n){},"7c70":function(e,t,n){"use strict";n("386f")},8155:function(e,t,n){},"8e81":function(e,t,n){},"91d3":function(e,t,n){"use strict";n("8e81")},9330:function(e,t,n){"use strict";n("4bfa")},"99da":function(e,t,n){},a955:function(e,t,n){"use strict";n("0381")},cfa4:function(e,t,n){"use strict";n("4da5")},dbb2:function(e,t,n){"use strict";n("62b1")},e242:function(e,t,n){"use strict";n("26f3")},e4c1:function(e,t,n){},e947:function(e,t,n){"use strict";n("7576")}});
//# sourceMappingURL=app.ea6eb346.js.map