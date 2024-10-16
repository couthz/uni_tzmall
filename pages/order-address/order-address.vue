<template>
  <!--pages/delivery-address/delivery-address.wxml-->
  <view class="container">
    <view class="origin-addr">
      <view class="origin-addr-title">当前收货地址</view>
      <view class="address">
        <view class="personal">
          <view class="info-tit">
            <text class="name">{{ curAddress.receiver }}</text>
            <text class="tel">{{ curAddress.mobile }}</text>
          </view>
          <view class="addr">
            <text class="addr-get">
              {{ curAddress.province }}{{ curAddress.city }}{{ curAddress.area
              }}{{ curAddress.addr }}</text
            >
          </view>
        </view>
      </view>
    </view>
    <view class="main">
      <view class="main-header">
        <text class="header-title">选择新的收货地址</text>
        <view class="header-btn" @tap="onAddAddr">+新增地址</view>
      </view>
      <radio-group class="radio-group">
        <block v-for="(item, index) in addressList" :key="index">
          <view class="address">
            <view class="personal" @tap="selAddrToOrder(item)">
              <view class="info-tit">
                <text class="name">{{ item.receiver }}</text>
                <text class="tel">{{ item.mobile }}</text>
                <image
                  src="/static/images/icon/revise.png"
                  @tap.stop="toEditAddress"
                  :data-addr="item"
                ></image>
              </view>
              <view class="addr">
                <text class="addr-get">
                  {{ item.province }}{{ item.city }}{{ item.area
                  }}{{ item.addr }}</text
                >
              </view>
            </view>
          </view>
        </block>
      </radio-group>
    </view>
  </view>
</template>

<script>
// pages/delivery-address/delivery-address.js
var http = require("../../utils/http.js"); // var config = require("../../utils/config.js");

export default {
  data() {
    return {
      addressList: [],
      curAddress: {},
      addrId: "",
      orderId: "",
    };
  },

  components: {},
  props: {},
  onLoad: function (option) {
    if (option.addrId && option.orderId) {
      this.setData({
        addrId: option.addrId,
        orderId: option.orderId,
      });
    }
  },
  //加载地址列表
  onShow: function () {
    var ths = this;
    uni.showLoading();
    var params = {
      url: "/user/userAddr/list",
      method: "GET",
      data: {},
      callBack: function (res) {
        //console.log(res)
        var addressList = res;
        var curAddress = {};
        //过滤allAddressList中所有对象,取出addrId为ths.addrId的对象并去掉
        for (var i = 0; i < addressList.length; i++) {
          if (addressList[i].addrId == ths.addrId) {
            curAddress = addressList[i];
            addressList.splice(i, 1);
            break;
          }
        }
        ths.setData({
          addressList: addressList,
          curAddress: curAddress,
        });
        uni.hideLoading();
      },
    };
    http.request(params);
  },
  methods: {
    //新增收货地址
    onAddAddr: function (e) {
      uni.removeStorageSync("userAddr");
      uni.navigateTo({
        url: "/pages/editAddress/editAddress",
      });
    },
    // 修改地址
    toEditAddress: function (e) {
      uni.setStorageSync(
        "userAddr",
        JSON.stringify(e.currentTarget.dataset.addr)
      );
      uni.navigateTo({
        url: "/pages/editAddress/editAddress",
      });
    },

    /**
     * 选择地址 跳转回提交订单页
     */
    selAddrToOrder: function (item) {},
  },
};
</script>
<style>
@import "./order-address.css";
</style>
