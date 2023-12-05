<template>
  <!--pages/basket/basket.wxml-->
  <view class="container">
    <view class="prod-list">
      <!-- <block v-for="(item, scIndex) in shopcartItemDiscounts" :key="scIndex"> -->
      <view class="prod-block">
        <view class="discount-tips" v-if="chooseDiscountItemDto">
          <text class="text-block">{{
            wxs.parseDiscount(chooseDiscountItemDto.discountRule)
          }}</text>
          <text class="text-list">{{
            wxs.parseDiscountMsg(
              chooseDiscountItemDto.discountRule,
              chooseDiscountItemDto.needAmount,
              chooseDiscountItemDto.discount
            )
          }}</text>
        </view>
      </view>
      <block v-for="(prod, index) in shopcartItems" :key="index">
        <view class="item">
          <view class="btn">
            <label>
              <checkbox
                @tap="onSelectedItem"
                :data-index="index"
                :value="toString(prod.prodId)"
                :checked="prod.checked"
                color="#105c3e"
              ></checkbox>
            </label>
          </view>
          <view class="prodinfo">
            <view class="pic">
              <image :src="prod.pic"></image>
            </view>
            <view class="opt">
              <view class="prod-name">{{ prod.sku.prodName }}</view>
              <text
                :class="'prod-info-text ' + (prod.sku.skuName ? '' : 'empty-n')"
                >{{ prod.sku.skuName }}</text
              >
              <view class="price-count">
                <view class="price">
                  <text class="symbol">￥</text>
                  <text class="big-num">{{ prod.sku.price }}</text>
                </view>
                <view class="m-numSelector">
                  <view
                    @tap="onCountMinus"
                    class="minus"
                    :data-index="index"
                  ></view>
                  <input type="number" :value="prod.itemCount" disabled />
                  <view
                    @tap="onCountPlus"
                    class="plus"
                    :data-scindex="scIndex"
                    :data-index="index"
                  ></view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </block>
    </view>


    <view class="empty" v-if="shopcartItems.length == 0">
      <view class="img">
        <image src="/static/images/tabbar/basket.png"></image>
      </view>
      <view class="txt"> 您还没有添加任何商品哦~ </view>
    </view>

    <!-- 底部按钮 -->
    <view class="cart-footer" v-if="shopcartItems.length > 0">
      <view class="btn all">
        <label @tap="onSelAll">
          <checkbox :checked="allChecked" color="#f7d731;"></checkbox
          >全选</label
        >
      </view>
      <view class="btn del" @tap="onDelBasket">
        <text>删除</text>
      </view>
      <view class="btn total">
        <view class="finally">
          <text>合计:</text>
          <view class="price">
            <text class="symbol">￥</text>
            <text class="big-num">{{ totalMoney }}</text>
          </view>
        </view>
        <view class="total-msg" v-if="subtractMoney > 0">
          总额:￥{{ wxs.toPrice(totalMoney) }} 立减:￥{{
            wxs.toPrice(subtractMoney)
          }}
        </view>
      </view>
      <view class="btn settle" @tap="toFirmOrder">
        <text>结算</text>
      </view>
    </view>
    <!-- end 底部按钮 -->
  </view>
</template>

<script module="wxs" lang="wxs" src="../../wxs/number.wxs"></script>

<script>
// pages/basket/basket.js
var http = require("../../utils/http.js"); // var config = require("../../utils/config.js");
// var config = require("../../utils/config.js");
const Big = require("../../utils/big.min.js");

export default {
  data() {
    return {
      // picDomain: config.picDomain,
      //shopcartItemDiscounts: [],
      shopcartItems: [],
	  subtractMoney: 0,
      totalMoney: 0,
      allChecked: false,
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.loadBasketData();
    http.getCartCount(); //重新计算购物车总数量
  },
  methods: {
    loadBasketData() {
      uni.showLoading(); //加载购物车

      var params = {
        url: "/shopcart/shopcartItem/info",
        method: "POST",
        data: {},
        callBack: (res) => {
		  console.log(JSON.stringify(res));
          if (res.length > 0) {
            res.forEach((shopcartItem) => {
              shopcartItem.checked = false;
            });
            this.setData({
              shopcartItems: res,
              allChecked: false,
            });
          } else {
            this.setData({
              shopcartItems: [],
            });
          }

          this.calTotalPrice(); //计算总价

          uni.hideLoading();
        },
      };
      http.request(params);
    },
    /**
     * 去结算
     */
    toFirmOrder: function () {
      var shopcartItems = this.shopcartItems;
      var shopcartItemIds = [];
      shopcartItems.forEach((shopcartItem) => {
        if (shopcartItem.checked) {
          shopcartItemIds.push(shopcartItem.shopcartItemId);
        }
      });

      if (!shopcartItemIds.length) {
        uni.showToast({
          title: "请选择商品",
          icon: "none",
        });
        return;
      }

      uni.setStorageSync("shopcartItemIds", JSON.stringify(shopcartItemIds));
      uni.navigateTo({
        url: "/pages/submit-order/submit-order?orderEntry=0",
      });
    },

    /**
     * 全选
     */
    onSelAll: function () {
      var allChecked = this.allChecked;
      allChecked = !allChecked; //改变状态

      var shopcartItems = this.shopcartItems;

      for (var i = 0; i < shopcartItems.length; i++) {
        var shopcartItem = shopcartItems[i];
        shopcartItem.checked = allChecked;
      }

      this.setData({
        allChecked: allChecked,
        shopcartItems: shopcartItems,
      });
      this.calTotalPrice(); //计算总价
    },

    /**
     * 每一项的选择事件
     */
    onSelectedItem: function (e) {
      var index = e.currentTarget.dataset.index; // 获取data- 传进来的index

      var shopcartItems = this.shopcartItems; // 获取购物车列表

      var checked = shopcartItems[index].checked; // 获取当前商品的选中状态

      shopcartItems[index].checked = !checked; // 改变状态

      this.setData({
        shopcartItems: shopcartItems,
      });
      this.checkAllSelected(); //检查全选状态

      this.calTotalPrice(); //计算总价
    },

    /**
     * 检查全选状态
     */
    checkAllSelected: function () {
      var allChecked = true;
      var shopcartItems = this.shopcartItems;

      for (var i = 0; i < shopcartItems.length; i++) {
        var shopcartItem = shopcartItems[i];
        if (!shopcartItem.checked) {
          allChecked = !allChecked;
          break;
        }
      }

      this.setData({
        allChecked: allChecked,
      });
    },

    /**
     * 计算购物车总额
     */
    calTotalPrice: function () {
      var shopcartItems = this.shopcartItems;
      var shopcartIds = [];

      for (var i = 0; i < shopcartItems.length; i++) {
        var shopcartItem = shopcartItems[i];

        if (shopcartItem.checked) {
          shopcartIds.push(shopcartItem.shopcartItemId);
        }
      }
	  
	  if(shopcartIds.length === 0) {
		  return;
	  }

      var ths = this;
      uni.showLoading();
      var params = {
        url: "/shopcart/shopcartItem/totalPay",
        method: "POST",
        data: {shopcartItemIds: shopcartIds},
        callBack: function (res) {
          ths.setData({
            totalMoney: res.totalPay,
          });
          uni.hideLoading();
        },
      };
      http.request(params);
    },

    /**
     * 减少数量
     */
    onCountMinus: function (e) {
      var index = e.currentTarget.dataset.index;
      var shopcartItems = this.shopcartItems;
      var prodCount = shopcartItems[index].itemCount;

      if (prodCount > 1) {
        this.updateCount(shopcartItems, index, -1);
      }
    },

    /**
     * 增加数量
     */
    onCountPlus: function (e) {
      var index = e.currentTarget.dataset.index;
      var shopcartItems = this.shopcartItems;
      this.updateCount(shopcartItems, index, 1);
    },

    /**
     * 改变购物车数量接口
     */
    updateCount: function (shopcartItems, index, prodCount) {
      var ths = this;
      uni.showLoading({
        mask: true,
      });
      var params = {
        url: "/shopcart/shopcartItem/changeItem",
        method: "POST",
        data: {
          itemCount: shopcartItems[index].shopcartItemId,
          prodId: shopcartItems[index].prodId,
          skuId: shopcartItems[index].skuId,
        },
        callBack: function (res) {
          shopcartItems[index].itemCount += prodCount;
          ths.setData({
            shopcartItems: shopcartItems,
          });
          ths.calTotalPrice(); //计算总价

          uni.hideLoading();
          http.getCartCount(); //重新计算购物车总数量
        },
      };
      http.request(params);
    },

    /**
     * 删除购物车商品
     */
    onDelBasket: function () {
      var ths = this;
      var shopcartItems = this.shopcartItems;
      var shopcartItemIds = [];

      for (var i = 0; i < shopcartItems.length; i++) {
        var shopcartItem = shopcartItems[i];

        if (shopcartItem.checked) {
          shopcartItemIds.push(shopcartItem.shopcartItemId);
        }
      }

      if (shopcartItemIds.length == 0) {
        uni.showToast({
          title: "请选择商品",
          icon: "none",
        });
      } else {
        uni.showModal({
          title: "",
          content: "确认要删除选中的商品吗？",
          confirmColor: "#eb2444",

          success(res) {
            if (res.confirm) {
              uni.showLoading({
                mask: true,
              });
              var params = {
                url: "/shopcart/shopcartItem/deleteItems",
                method: "DELETE",
                data: {shopcartItemIds},
                callBack: function (res) {
                  uni.hideLoading();
                  ths.loadBasketData();
                },
              };
              http.request(params);
            }
          },
        });
      }
    },
  },
};
</script>
<style>
@import "./basket.css";
</style>
