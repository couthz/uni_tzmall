(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-address-order-address"],{"0f10":function(e,t,a){"use strict";a.r(t);var d=a("11a0"),i=a.n(d);for(var s in d)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return d[e]}))}(s);t["default"]=i.a},"11a0":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a434"),a("e9c4");var d=a("ef65"),i={data:function(){return{addressList:[],curAddress:{},addrId:"",orderId:""}},components:{},props:{},onLoad:function(e){e.addrId&&e.orderId&&this.setData({addrId:e.addrId,orderId:e.orderId})},onShow:function(){var e=this;uni.showLoading();var t={url:"/user/userAddr/list",method:"GET",data:{},callBack:function(t){for(var a=t,d={},i=0;i<a.length;i++)if(a[i].addrId==e.addrId){d=a[i],a.splice(i,1);break}e.setData({addressList:a,curAddress:d}),uni.hideLoading()}};d.request(t)},methods:{onAddAddr:function(e){uni.removeStorageSync("userAddr"),uni.navigateTo({url:"/pages/editAddress/editAddress"})},toEditAddress:function(e){uni.setStorageSync("userAddr",JSON.stringify(e.currentTarget.dataset.addr)),uni.navigateTo({url:"/pages/editAddress/editAddress"})},selAddrToOrder:function(e){}}};t.default=i},"19b2":function(e,t,a){var d=a("bdbd");d.__esModule&&(d=d.default),"string"===typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);var i=a("4f06").default;i("7feae4f1",d,!0,{sourceMap:!1,shadowMode:!1})},"26ed":function(e,t,a){"use strict";var d=a("19b2"),i=a.n(d);i.a},a739:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"origin-addr"},[a("v-uni-view",{staticClass:"origin-addr-title"},[e._v("当前收货地址")]),a("v-uni-view",{staticClass:"address"},[a("v-uni-view",{staticClass:"personal"},[a("v-uni-view",{staticClass:"info-tit"},[a("v-uni-text",{staticClass:"name"},[e._v(e._s(e.curAddress.receiver))]),a("v-uni-text",{staticClass:"tel"},[e._v(e._s(e.curAddress.mobile))])],1),a("v-uni-view",{staticClass:"addr"},[a("v-uni-text",{staticClass:"addr-get"},[e._v(e._s(e.curAddress.province)+e._s(e.curAddress.city)+e._s(e.curAddress.area)+e._s(e.curAddress.addr))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"main-header"},[a("v-uni-text",{staticClass:"header-title"},[e._v("选择新的收货地址")]),a("v-uni-view",{staticClass:"header-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAddAddr.apply(void 0,arguments)}}},[e._v("+新增地址")])],1),a("v-uni-radio-group",{staticClass:"radio-group"},[e._l(e.addressList,(function(t,d){return[a("v-uni-view",{key:d+"_0",staticClass:"address"},[a("v-uni-view",{staticClass:"personal",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.selAddrToOrder(t)}}},[a("v-uni-view",{staticClass:"info-tit"},[a("v-uni-text",{staticClass:"name"},[e._v(e._s(t.receiver))]),a("v-uni-text",{staticClass:"tel"},[e._v(e._s(t.mobile))]),a("v-uni-image",{attrs:{src:"/static/images/icon/revise.png","data-addr":t},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.toEditAddress.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"addr"},[a("v-uni-text",{staticClass:"addr-get"},[e._v(e._s(t.province)+e._s(t.city)+e._s(t.area)+e._s(t.addr))])],1)],1)],1)]}))],2)],1)],1)},i=[]},b30a:function(e,t,a){"use strict";a.r(t);var d=a("a739"),i=a("0f10");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("26ed");var r=a("f0c5"),n=Object(r["a"])(i["default"],d["b"],d["c"],!1,null,"17de2b96",null,!1,d["a"],void 0);t["default"]=n.exports},bdbd:function(e,t,a){var d=a("24fb");t=d(!1),t.push([e.i,"/* pages/delivery-address/delivery-address.wxss */uni-page-body[data-v-17de2b96]{background-color:#f4f4f4;border-top:%?2?% solid #e9eaec;padding-bottom:%?150?%}body.?%PAGE?%[data-v-17de2b96]{background-color:#f4f4f4}.origin-addr-title[data-v-17de2b96]{background-color:#fff;font-size:%?28?%;padding:%?20?% %?30?%;font-weight:600}.main[data-v-17de2b96]{margin-top:%?20?%}.main .main-header[data-v-17de2b96]{display:flex;background-color:#fff;font-size:%?28?%;padding:%?20?% %?30?%;font-weight:600}.main .main-header .header-btn[data-v-17de2b96]{margin-left:auto;color:#ec6817}.address[data-v-17de2b96]{width:100%;background-color:#fff;border-bottom:%?2?% solid #e9eaec}.address .personal[data-v-17de2b96]{position:relative;padding:%?20?% %?30?%}.address .personal .info-tit .name[data-v-17de2b96]{margin-right:%?30?%;font-size:%?30?%;display:inline-block}.address .personal .info-tit .tel[data-v-17de2b96]{font-size:%?28?%}.address .personal .info-tit uni-image[data-v-17de2b96]{position:absolute;right:%?30?%;top:%?46?%;width:%?40?%;height:%?40?%;margin-left:%?50?%;vertical-align:middle}.personal .addr[data-v-17de2b96]{font-size:%?26?%;margin:%?10?% 0;margin-top:%?20?%}.personal .addr .addr-get[data-v-17de2b96]{display:inline-block;color:#999;width:100%;word-break:break-word}.address .select-btn[data-v-17de2b96]{padding:%?15?% %?30?%;display:flex;align-items:center;justify-content:space-between}.address .select-btn .box[data-v-17de2b96]{font-size:%?26?%}.footer[data-v-17de2b96]{position:fixed;bottom:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center;background-color:#fff;box-shadow:0 %?-1?% %?8?% rgba(0,0,0,.05)}.footer uni-text[data-v-17de2b96]{font-size:%?32?%;color:#ec6817}.empty .img[data-v-17de2b96]{text-align:center;margin-top:%?130?%}.empty .img uni-image[data-v-17de2b96]{width:%?100?%;height:%?100?%;display:block;margin:auto}.empty .txt[data-v-17de2b96]{margin-top:%?30?%;font-size:%?24?%;text-align:center;color:#999}",""]),e.exports=t}}]);