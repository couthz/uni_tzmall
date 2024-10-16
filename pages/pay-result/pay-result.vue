<template>
  <!--pages/pay-result/pay-result.wxml-->
  <view class="container">
    <!-- <view v-if="sts == 0">
      <view class="pay-sts fail">支付失败</view>
      <view class="tips">请在 <text class="warn">30分钟</text>内完成付款</view>
      <view class="tips">否则订单会被系统取消</view>
      <view class="btns">
        <text class="button checkorder" @tap="toOrderList">查看订单</text>
        <text class="button payagain" @tap="payAgain">重新支付</text>
      </view>
    </view> -->

    <view v-if="sts == 1">
      <view class="pay-sts succ">支付成功</view>
      <view class="tips">感谢您的购买</view>
      <view class="btns">
        <text class="button checkorder" @tap="toOrderList">查看订单</text>
        <text class="button shopcontinue" @tap="toIndex">返回首页</text>
      </view>
    </view>

    <view v-if="sts == 2">
      <view class="pay-sts paying">支付处理中</view>
      <view class="tips">请稍后查看订单支付状态</view>
      <view class="btns">
        <text class="button checkorder" @tap="toOrderList">查看订单</text>
        <text class="button shopcontinue" @tap="toIndex">返回首页</text>
      </view>
    </view>
  </view>
</template>

<script>
var http = require("../../utils/http.js");

export default {
  data() {
    return {
      sts: 0,
      orderNumber: "",
    };
  },

  components: {},
  props: {},

  onInit: function () {},

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    console.log(options.sts);
    if (options.sts == 1) {
      //查询订单状态是否成功,超时时间为10秒
      console.log("查询支付结果");
      this.queryPayStatus(options.orderNumber);
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    queryPayStatus: function (orderNumber) {
      uni.showLoading({
        title: "支付结果查询中",
        mask: true,
      });
      var ths = this;
      var params = {
        url: "/order/pay/queryPayStatus/" + orderNumber,
        method: "GET",
        callBack: (res) => {
          uni.hideLoading();

          if (res) {
            ths.setData({
              sts: 1,
              orderNumber: orderNumber,
            });
          } else {
            ths.setData({
              sts: 2,
              orderNumber: orderNumber,
            });
          }
        },
        errCallBack: () => {
          console.log("错误");
          uni.hideLoading();

          ths.setData({
            sts: 2,
            orderNumber: orderNumber,
          });
        },
      };
      http.request(params);
    },

    toOrderList: function () {
      uni.navigateTo({
        url: "/pages/order-detail/order-detail?orderNumber=" + this.orderNumber,
      });
    },
    toIndex: function () {
      uni.switchTab({
        url: "/pages/index/index",
      });
    },
    payAgain: function () {
      var res = JSON.parse(uni.getStorageSync("payData"));
      uni.requestPayment({
        timeStamp: res.timeStamp,
        nonceStr: res.nonceStr,
        package: res.package,
        signType: res.signType,
        paySign: res.paySign,
        success: (e) => {
          console.log("支付成功");
          uni.redirectTo({
            url:
              "/pages/pay-result/pay-result?sts=1&orderNumber=" +
              this.orderNumber +
              "&orderType=" +
              this.orderType,
          });
        },
        fail: (err) => {
          console.log(err);
        },
      });
      // uni.showLoading({
      //   mask: true,
      // });
      // var params = {
      //   url: "/order/pay/normalPay",
      //   method: "POST",
      //   data: {
      //     orderNumber: this.orderNumbers,
      //   },
      //   callBack: function (res) {
      //     //console.log(res);
      //     uni.hideLoading();
      //     uni.requestPayment({
      //       timeStamp: res.timeStamp,
      //       nonceStr: res.nonceStr,
      //       package: res.packageValue,
      //       signType: res.signType,
      //       paySign: res.paySign,
      //       success: (e) => {
      //         console.log("支付成功");
      //         uni.redirectTo({
      //           url:
      //             "/pages/pay-result/pay-result?sts=1&orderNumbers=" +
      //             this.orderNumbers +
      //             "&orderType=" +
      //             this.orderType,
      //         });
      //       },
      //       fail: (err) => {
      //         console.log("支付失败");
      //       },
      //     });
      //   },
      // };
      // http.request(params);
    },
  },
};
</script>
<style>
@import "./pay-result.css";
</style>
