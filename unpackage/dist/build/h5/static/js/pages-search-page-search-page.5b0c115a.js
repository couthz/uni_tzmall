(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-page-search-page"],{"2e03":function(t,e,a){"use strict";a.r(e);var i=a("bef7"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},5249:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"search-bar"},[a("v-uni-view",{staticClass:"search-box"},[a("v-uni-input",{staticClass:"sear-input",attrs:{placeholder:"输入关键字搜索","confirm-type":"search",value:t.prodName},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearchProdPage.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.getSearchContent.apply(void 0,arguments)}}}),a("v-uni-image",{staticClass:"search-img",attrs:{src:"/static/images/icon/search.png"}})],1),a("v-uni-text",{staticClass:"search-hint",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBackIndex.apply(void 0,arguments)}}},[t._v("取消")])],1),a("v-uni-view",{staticClass:"search-display"},[a("v-uni-view",{staticClass:"hot-search"},[a("v-uni-view",{staticClass:"title-text"},[t._v("热门搜索")]),t.hotSearchList&&t.hotSearchList.length?a("v-uni-view",{staticClass:"hot-search-tags"},[t._l(t.hotSearchList,(function(e,i){return[a("v-uni-text",{key:i+"_0",staticClass:"tags",attrs:{"data-name":e.content},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onHistSearch.apply(void 0,arguments)}}},[t._v(t._s(e.title))])]}))],2):a("v-uni-view",{staticClass:"search-tit-empty"},[t._v("暂无数据")])],1),t.recentSearch&&t.recentSearch.length?a("v-uni-view",{staticClass:"history-search"},[a("v-uni-view",{staticClass:"title-text history-line"},[t._v("搜索历史"),a("v-uni-view",{staticClass:"clear-history"},[a("v-uni-image",{attrs:{src:"/static/images/icon/clear-his.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearSearch.apply(void 0,arguments)}}})],1)],1),t._l(t.recentSearch,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"his-search-tags"},[a("v-uni-text",{staticClass:"tags",attrs:{"data-name":e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onHistSearch.apply(void 0,arguments)}}},[t._v(t._s(e))])],1)]}))],2):t._e()],1)],1)},n=[]},6117:function(t,e,a){"use strict";a.r(e);var i=a("5249"),n=a("2e03");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("e60e");var o=a("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"180896e2",null,!1,i["a"],void 0);e["default"]=s.exports},aacf:function(t,e,a){var i=a("c66a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("02f93da9",i,!0,{sourceMap:!1,shadowMode:!1})},bef7:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("498a"),a("4de4"),a("d3b7"),a("3c65");var i=a("ef65"),n={data:function(){return{hotSearchList:[],prodName:"",recentSearch:[]}},components:{},props:{},onLoad:function(t){},onReady:function(){},onShow:function(){var t=this,e={url:"/search/hotSearchByShopId",method:"GET",data:{number:10,shopId:1,sort:1},callBack:function(e){t.setData({hotSearchList:e})}};i.request(e),this.getRecentSearch()},onHide:function(){this.prodName=""},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getRecentSearch:function(){var t=uni.getStorageSync("recentSearch");this.setData({recentSearch:t})},toSearchProdPage:function(){var t=this;if(this.prodName.trim()){var e=uni.getStorageSync("recentSearch")||[];e=e.filter((function(e){return e!==t.prodName})),e.unshift(this.prodName),e.length>10&&e.pop(),uni.setStorageSync("recentSearch",e),uni.navigateTo({url:"/pages/search-prod-show/search-prod-show?prodName="+this.prodName})}},clearSearch:function(){uni.removeStorageSync("recentSearch"),this.getRecentSearch()},goBackIndex:function(){uni.navigateBack({})},getSearchContent:function(t){this.setData({prodName:t.detail.value})},onHistSearch:function(t){var e=t.currentTarget.dataset.name;this.setData({prodName:e}),this.toSearchProdPage()}}};e.default=n},c66a:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"/* pages/search-page/search-page.wxss */\n\n/* 搜索栏 */.search-bar[data-v-180896e2]{width:100%;position:fixed;top:0;left:0;color:#777;background:#fff;box-shadow:0 %?2?% %?6?% rgba(0,0,0,.07);z-index:3}.search-bar .search-box[data-v-180896e2]{position:relative;height:%?60?%;background:#f7f7f7;z-index:999;width:80%;margin-left:%?70?%;border-radius:%?50?%;margin:%?20?% 0 %?20?% %?20?%}.sear-input[data-v-180896e2]{height:%?60?%;border-radius:%?50?%;border:0;margin:0 %?30?% 0 %?64?%;line-height:%?48?%;vertical-align:top;background:#f7f7f7;font-size:%?28?%}.search-bar .search-hint[data-v-180896e2]{font-size:%?28?%;position:absolute;right:%?30?%;top:%?31?%;color:#ec6817}.search-bar .search-box .search-img[data-v-180896e2]{width:%?32?%;height:%?32?%;position:absolute;left:%?20?%;top:%?14?%;display:block}\n\n/* 热门搜索&搜索历史 */.search-display[data-v-180896e2]{background:#fff;padding:%?20?%;margin-top:%?100?%}.search-display .title-text[data-v-180896e2]{padding:%?30?% 0;font-size:%?30?%;color:#666}.hot-search .hot-search-tags[data-v-180896e2]{overflow:hidden;font-size:%?26?%;text-align:center;padding-bottom:%?30?%}.hot-search .hot-search-tags .tags[data-v-180896e2]{display:block;max-width:100%;overflow:hidden;float:left;border-radius:%?50?%;white-space:nowrap;text-overflow:ellipsis;background-color:#f2f2f2;box-sizing:border-box;margin-right:%?20?%;margin-bottom:%?20?%;padding:%?10?% %?30?%}\n\n/* 搜索历史 */.history-search .title-text.history-line[data-v-180896e2]{position:relative;border-top:%?2?% solid #e1e1e1}.history-search .his-search-tags[data-v-180896e2]{overflow:hidden;font-size:%?26?%;text-align:center;display:inline-block}.history-search .his-search-tags .tags[data-v-180896e2]{max-width:%?300?%;overflow:hidden;float:left;border-radius:%?50?%;white-space:nowrap;text-overflow:ellipsis;background-color:#f2f2f2;box-sizing:border-box;margin-right:%?20?%;margin-bottom:%?20?%;padding:%?10?% %?30?%}.clear-history uni-image[data-v-180896e2]{width:%?32?%;height:%?32?%;position:absolute;right:%?10?%;top:%?30?%}.search-tit-empty[data-v-180896e2]{display:block;margin:0 auto;text-align:center;width:100%;font-size:%?24?%;color:#aaa}",""]),t.exports=e},e60e:function(t,e,a){"use strict";var i=a("aacf"),n=a.n(i);n.a}}]);