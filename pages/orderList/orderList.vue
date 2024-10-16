<template>
  <!--pages/orderList/orderList.wxml-->

  <view class="container">
    <!-- 头部菜单 -->
    <view class="order-tit">
      <text @tap="onStsTap" data-sts="0" :class="sts == 0 ? 'on' : ''"
        >全部</text
      >
      <text @tap="onStsTap" data-sts="100" :class="sts == 100 ? 'on' : ''"
        >待支付</text
      >
      <text @tap="onStsTap" data-sts="101" :class="sts == 101 ? 'on' : ''"
        >待发货</text
      >
      <text @tap="onStsTap" data-sts="102" :class="sts == 102 ? 'on' : ''"
        >待收货</text
      >
      <text @tap="onStsTap" data-sts="103" :class="sts == 103 ? 'on' : ''"
        >待评价</text
      >
    </view>
    <!-- end 头部菜单 -->
    <view class="main">
      <view class="empty" v-if="list.length === 0"> 还没有任何相关订单 </view>
      <!-- 订单列表 -->
      <block v-for="(item, index) in list" :key="index">
        <view v-if="item.deleteStatus === 0" class="prod-item">
          <view class="order-num">
            <text class="order-num-title"
              >订单编号：{{ item.orderNumber }}</text
            >
            <view class="order-state">
              <text class="order-sts red">{{
                item.status == 100
                  ? "待支付"
                  : item.status == 101
                  ? "待发货"
                  : item.status == 102
                  ? "待收货"
                  : item.status == 105
                  ? "部分发货"
                  : item.status == 106
                  ? "支付处理中"
                  : item.status == 200
                  ? "交易关闭"
                  : "交易成功"
              }}</text>

              <view
                class="clear-btn"
                v-if="item.status == 104 || item.status == 200"
              >
                <image
                  src="/static/images/icon/clear-his.png"
                  class="clear-list-btn"
                  @tap="delOrderList"
                  :data-ordernum="item.orderNumber"
                ></image>
              </view>
            </view>
          </view>

          <!-- 商品列表 -->
          <!-- 一个订单单个商品的显示 -->
          <block v-if="item.orderItems.length == 1">
            <block v-for="(prod, index2) in item.orderItems" :key="index2">
              <view>
                <view
                  class="item-cont"
                  @tap="toOrderDetailPage"
                  :data-ordernum="item.orderNumber"
                  :data-listindex="index"
                >
                  <view class="prod-pic">
                    <image :src="prod.pic"></image>
                  </view>
                  <view class="prod-info">
                    <view class="prodname">
                      {{ prod.prodName }}
                    </view>
                    <view class="prod-info-cont">{{ prod.skuName }}</view>
                    <view class="price-nums">
                      <text class="prodprice"
                        ><text class="symbol">￥</text>
                        <text class="big-num">{{ prod.price }}</text>
                      </text>
                      <text class="prodcount">x{{ prod.itemCount }}</text>
                    </view>
                  </view>
                </view>
              </view>
            </block>
          </block>
          <!-- 一个订单多个商品时的显示 -->
          <block v-else>
            <view
              class="item-cont"
              @tap="toOrderDetailPage"
              :data-ordernum="item.orderNumber"
            >
              <scroll-view
                scroll-x="true"
                scroll-left="0"
                scroll-with-animation="false"
                class="categories"
              >
                <block v-for="(prod, index2) in item.orderItems" :key="index2">
                  <view class="prod-pic">
                    <image :src="prod.pic"></image>
                  </view>
                </block>
              </scroll-view>
            </view>
          </block>

          <view class="total-num">
            <text class="prodcount">共1件商品</text>
            <view class="prodprice"
              >合计：
              <text class="symbol">￥</text>
              <text class="big-num">{{ item.totalPay }}</text>
            </view>
          </view>
          <!-- end 商品列表 -->
          <view class="prod-foot">
            <view class="btn">
              <text
                v-if="item.status == 100"
                class="button"
                @tap="onCancelOrder"
                :data-ordernum="item.orderNumber"
                :data-index="index"
                hover-class="none"
                >取消订单</text
              >
              <!-- <text class="button warn" @tap :data-ordernum="item.orderNumber" hover-class="none">再次购买</text> -->
              <text
                v-if="item.status == 100"
                class="button warn"
                @tap="normalPay"
                :data-ordernum="item.orderNumber"
                :data-index="index"
                hover-class="none"
                >付款</text
              >
              <!-- <text
                v-if="item.status == 101"
                class="button warn"
                @tap="changeAddress"
                :data-addrid="item.orderAddr.addrId"
                :data-orderid="item.orderId"
                hover-class="none"
                >修改地址</text
              > -->
              <text
                v-if="item.status >= 102 && item.status <= 104"
                class="button"
                @tap="toDeliveryPage"
                :data-ordernum="item.orderNumber"
                hover-class="none"
                >查看物流</text
              >
              <text
                v-if="item.status == 102"
                class="button warn"
                @tap="onConfirmReceive"
                :data-ordernum="item.orderNumber"
                hover-class="none"
                >确认收货</text
              >
            </view>
          </view>
        </view>
      </block>
    </view>
  </view>
  <!-- end 订单列表 -->
</template>

<script module="wxs" lang="wxs" src="../../wxs/number.wxs"></script>

<script>
var http = require("../../utils/http.js");
var config = require("../../utils/config.js");
var pay = require("../../utils/pay.js");

export default {
  data() {
    return {
      list: [],
      current: 1,
      pages: 0,
      sts: 0,
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.sts) {
      this.setData({
        sts: options.sts,
      });
      this.loadOrderData(options.sts, 1);
    } else {
      this.loadOrderData(0, 1);
    }

    var ths = this;

    uni.$on("onChangeOrderStatus", function (data) {
      ths.onChangeOrderStatus(data.index);
    });
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
  onUnload: function () {
    uni.$off("onChangeOrderStatus", function (data) {});
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.current < this.pages) {
      this.loadOrderData(this.sts, this.current + 1);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    /**
     * 加载订单数据
     */
    loadOrderData: function (sts, current) {
      var ths = this;
      uni.showLoading(); //加载订单列表

      var params = {
        url: "/order/order/orderPage",
        method: "POST",
        data: {
          page: {
            current: current,
            size: 10,
          },
          params: {
            // 定义你的请求参数
            status: sts,
          },
        },
        callBack: function (res) {
          var list = ths.list;

          list = list.concat(res.items);

          ths.setData({
            list: list,
            pages: res.meta.totalPages,
            current: res.meta.currentPage,
          });
          uni.hideLoading();
        },
      };
      http.request(params);
    },

    /**
     * 状态点击事件
     */
    onStsTap: function (e) {
      var sts = e.currentTarget.dataset.sts;
      if (this.sts === sts) {
        return;
      }

      this.setData({
        sts: sts,
        list: [],
        current: 1,
        pages: 0,
      });
      this.loadOrderData(sts, 1);
    },

    /**
     * 查看物流
     */
    toDeliveryPage: function (e) {
      uni.navigateTo({
        url:
          "/pages/express-delivery/express-delivery?orderNum=" +
          e.currentTarget.dataset.ordernum,
      });
    },

    /**
     * 取消订单
     */
    onCancelOrder: function (e) {
      var index = e.currentTarget.dataset.index;
      var ordernum = e.currentTarget.dataset.ordernum;
      var ths = this;
      uni.showModal({
        title: "",
        content: "要取消此订单？",
        confirmColor: "#3e62ad",
        cancelColor: "#3e62ad",
        cancelText: "否",
        confirmText: "是",

        success(res) {
          if (res.confirm) {
            uni.showLoading({
              mask: true,
            });
            //更新ui
            ths.onChangeOrderStatus(index);
            uni.hideLoading();
            // var params = {
            //   url: "/p/myOrder/cancel/" + ordernum,
            //   method: "PUT",
            //   data: {},
            //   callBack: function (res) {
            //     //console.log(res);
            //     ths.loadOrderData(ths.sts, 1);
            //     uni.hideLoading();
            //   },
            // };
            // http.request(params);
          } else if (res.cancel) {
            //console.log('用户点击取消')
          }
        },
      });
    },

    /**
     * 付款
     */
    onPayAgain: function (e) {
      uni.showLoading({
        mask: true,
      });
      var params = {
        url: "/p/order/pay",
        method: "POST",
        data: {
          payType: 1,
          orderNumbers: e.currentTarget.dataset.ordernum,
        },
        callBack: (res) => {
          //console.log(res);
          uni.hideLoading();
          uni.requestPayment({
            timeStamp: res.timeStamp,
            nonceStr: res.nonceStr,
            package: res.packageValue,
            signType: res.signType,
            paySign: res.paySign,
            success: function () {
              uni.navigateTo({
                url:
                  "/pages/pay-result/pay-result?sts=1&orderNumbers=" +
                  e.currentTarget.dataset.ordernum,
              });
            },
            fail: function (err) {
              //console.log("支付失败");
            },
          });
        },
      };
      http.request(params);
    },

    //模拟支付，直接提交成功
    normalPay: function (e) {
      var ths = this;
      var index = e.currentTarget.dataset.index;
      var orderNumber = e.currentTarget.dataset.ordernum;
      var callBackParams = {
        success: () => {
          uni.showToast({
            title: "支付成功",
            icon: "none",
          });
          //支付成功,且后台成功修改状态
          uni.navigateTo({
            url:
              "/pages/pay-result/pay-result?sts=1&orderNumber=" + orderNumber,
          });
          //更新ui
          ths.onChangeOrderStatus(index);
        },
        fail: () => {
          //用户取消支付
          uni.showToast({
            title: "支付取消",
            icon: "none",
          });
        },
      };
      pay.normalPay(orderNumber, callBackParams);
    },

    onChangeOrderStatus: function (index) {
      console.log("删除列表项", index);
      var list = this.list;
      list.splice(index, 1);
      this.setData({
        list: list,
      });
    },

    /**
     * 查看订单详情
     */
    toOrderDetailPage: function (e) {
      var listIndex = e.currentTarget.dataset.listindex;
      uni.navigateTo({
        url:
          "/pages/order-detail/order-detail?orderNumber=" +
          e.currentTarget.dataset.ordernum +
          "&listIndex=" +
          listIndex,
      });
    },

    /**
     * 确认收货
     */
    onConfirmReceive: function (e) {
      var ths = this;
      uni.showModal({
        title: "",
        content: "我已收到货？",
        confirmColor: "#EC6817",

        success(res) {
          if (res.confirm) {
            uni.showLoading({
              mask: true,
            });
            var params = {
              url: "/p/myOrder/receipt/" + e.currentTarget.dataset.ordernum,
              method: "PUT",
              data: {},
              callBack: function (res) {
                //console.log(res);
                ths.loadOrderData(ths.sts, 1);
                uni.hideLoading();
              },
            };
            http.request(params);
          } else if (res.cancel) {
            //console.log('用户点击取消')
          }
        },
      });
    },
    //删除已完成||已取消的订单
    delOrderList: function (e) {
      var ths = this;
      uni.showModal({
        title: "",
        content: "确定要删除此订单吗？",
        confirmColor: "#EC6817",

        success(res) {
          if (res.confirm) {
            var ordernum = e.currentTarget.dataset.ordernum;
            uni.showLoading();
            var params = {
              url: "/p/myOrder/" + ordernum,
              method: "DELETE",
              data: {},
              callBack: function (res) {
                ths.loadOrderData(ths.sts, 1);
                uni.hideLoading();
              },
            };
            http.request(params);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },

    changeAddress: function (e) {
      var addrId = e.currentTarget.dataset.addrid;
      var orderId = e.currentTarget.dataset.orderid;

      uni.navigateTo({
        url:
          "/pages/order-address/order-address?addrId=" +
          addrId +
          "&orderId=" +
          orderId,
      });
    },
  },
};
</script>
<style>
@import "./orderList.css";
</style>
