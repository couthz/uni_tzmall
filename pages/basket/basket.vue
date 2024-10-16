<template>
  <!--pages/basket/basket.wxml-->
  <view class="container">
    <view class="head-title">
      <image class="head-logo" src="../../static/images/logo/image.png"></image>
      <view class="head-text">红丽外贸服装 </view>
      <text class="head-more"></text>
      <view class="head-edit" @tap="toggleEdit">{{
        isEdit ? "完成" : "编辑"
      }}</view>
    </view>
    <view class="prod-list" v-if="shopcartItems.length > 0">
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
        <view class="item" :data-prodid="prod.prodId">
          <view class="btn">
            <label>
              <checkbox
                @tap="onSelectedItem"
                :data-index="index"
                :value="toString(prod.prodId)"
                :checked="prod.isChecked"
                color="#105c3e"
              ></checkbox>
            </label>
          </view>
          <view class="prodinfo">
            <view class="pic">
              <view
                class="prod-pic"
                :style="{
                  backgroundImage: `url(${fullImagePath(prod.sku.pic)})`,
                }"
              ></view>
            </view>
            <view class="opt">
              <view class="prod-name">{{ prod.sku.prodName }}</view>
              <text
                @tap="updateSku"
                :data-categoryid="prod.sku.categoryId"
                :data-attr="prod.sku.attr"
                :data-prodid="prod.prodId"
                :data-shopcartitemid="prod.shopcartItemId"
                :data-index="index"
                :data-selectnum="prod.itemCount"
                :class="'prod-info-text ' + (prod.sku.skuName ? '' : 'empty-n')"
                >{{ prod.sku.skuName }}</text
              >
              <view class="price-count">
                <view class="price">
                  <text class="symbol">￥</text>
                  <text class="big-num">{{ prod.sku.price }}</text>
                </view>
                <view v-if="!isEdit" class="m-numSelector">
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
                <view v-else @tap="onDelItem" :data-index="index" class="m-icon"
                  ><uni-icons
                    type="minus-filled"
                    size="25"
                    color="#EC6817"
                  ></uni-icons
                ></view>
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

      <view class="btn total">
        <view v-show="!isEdit" class="finally">
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
      <view v-if="!isEdit" class="btn settle" @tap="toFirmOrder">
        <text>结算</text>
      </view>
      <view v-else class="btn settle" @tap="onDelChosedItems">
        <text>删除</text>
      </view>
    </view>
    <!-- end 底部按钮 -->
    <!-- 底部弹出 -->
    <uni-popup
      ref="skuselect"
      @touchmove.stop.prevent="moveHandle"
      type="bottom"
      :animation="false"
      @change="onPopupChange"
    >
      <skuSelect
        :skuSelectData="skuSelectData"
        :prodId="prodid"
        :selectNum="selectNum"
        :shopcartItemId="shopcartItemId"
        :hasBottom="false"
        :attr="attr"
        :updateSku="true"
        @close-popup="closeSkuselect"
      >
      </skuSelect>
    </uni-popup>
  </view>
</template>

<script module="wxs" lang="wxs" src="../../wxs/number.wxs"></script>

<script>
// pages/basket/basket.js
var http = require("../../utils/http.js"); // var config = require("../../utils/config.js");
var config = require("../../utils/config.js");
const Big = require("../../utils/big.min.js");
import skuSelect from "@/components/sku-select/sku-select.vue";

export default {
  data() {
    return {
      // picDomain: config.picDomain,
      //shopcartItemDiscounts: [],
      shopcartItems: [],
      checkedItems: [],
      subtractMoney: 0,
      totalMoney: 0,

      prodid: 0,
      shopcartItemId: 0,

      skuSelectData: {},
      selectNum: 1,
      isEdit: false,
      attr: "",
    };
  },

  components: { skuSelect },
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

  onHide: function () {
    this.setData({
      isEdit: false,
    });
    this.onPopupClose();
  },
  computed: {
    allChecked() {
      return this.shopcartItems.every((item) => item.isChecked);
    },
    fullImagePath() {
      return (path) => config.staticUrl + path;
    },
  },
  methods: {
    //4.28 修改,规整接口,重后端
    //基本思路就是,每当修改前端修改购物车数据时,后端更新购物车数据并计算总价返回,前端根据总价渲染页面,其余渲染逻辑由前端自行完成,不通过后端数据修改

    //1.初始化购物车数据: 后端返回购物车所有数据用于渲染页面（包括总价）
    //2. 修改sku: 后端只更新对应购物车项的数据(或者和其他购物车项合并), 然后只返回总价用于渲染页面,前端自行根据选择的sku渲染页面(后端不会返回新的购物车数据)
    //3.增加、减少数量
    //4.删除: 后端更新购物车数据, 返回总价用于渲染页面, 数量自行渲染(后端不会返回新的购物车数据)
    //5. 选择(全选): 后端更新购物车数据, 然后返回总价

    loadBasketData() {
      uni.showLoading(); //加载购物车

      var params = {
        url: "/shopcart/shopcartItem/info",
        method: "POST",
        data: {},
        callBack: (res) => {
          if (res.shopcartItems.length > 0) {
            //渲染购物车商品
            console.log(res.shopcartItems[0].sku);
            this.setData({
              shopcartItems: res.shopcartItems,
              totalMoney: res.totalPay,
            });
          } else {
            this.setData({
              shopcartItems: [],
            });
          }
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
        if (shopcartItem.isChecked) {
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

    toggleEdit: function () {
      this.setData({
        isEdit: !this.isEdit,
      });
    },

    /**
     * 全选
     */
    onSelAll: function () {
      var allChecked = this.allChecked;
      allChecked = !allChecked; //改变状态

      var shopcartItems = this.shopcartItems;
      var shopcartItemIds = [];

      for (var i = 0; i < shopcartItems.length; i++) {
        var shopcartItem = shopcartItems[i];
        shopcartItem.isChecked = allChecked;
        shopcartItemIds.push(shopcartItem.shopcartItemId);
      }

      var ths = this;
      uni.showLoading();
      var params = {
        url: "/shopcart/shopcartItem/changeItemChecked",
        method: "POST",
        data: {
          shopcartItemIds: shopcartItemIds, //
          isChecked: allChecked,
        },
        callBack: function (res) {
          ths.setData({
            shopcartItems: shopcartItems,

            totalMoney: res,
          });
          uni.hideLoading();
        },
      };
      http.request(params);

      this.calTotalPrice(); //计算总价
    },

    /**
     * 每一项的选择事件
     */
    onSelectedItem: function (e) {
      var index = e.currentTarget.dataset.index; // 获取data- 传进来的index

      var shopcartItems = this.shopcartItems; // 获取购物车列表

      var isChecked = shopcartItems[index].isChecked; // 获取当前商品的选中状态
      var shopcartItemId = shopcartItems[index].shopcartItemId;

      var ths = this;
      uni.showLoading();
      var params = {
        url: "/shopcart/shopcartItem/changeItemChecked",
        method: "POST",
        data: {
          shopcartItemIds: [shopcartItemId], //
          isChecked: !isChecked,
        },
        callBack: function (res) {
          shopcartItems[index].isChecked = !isChecked; // 改变状态
          ths.setData({
            shopcartItems: shopcartItems,

            totalMoney: res,
          });
          uni.hideLoading();
        },
      };
      http.request(params);
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

      if (shopcartIds.length === 0) {
        return;
      }

      var ths = this;
      uni.showLoading();
      var params = {
        url: "/shopcart/shopcartItem/totalPay",
        method: "POST",
        data: { shopcartItemIds: shopcartIds },
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
      } else if (prodCount === 1) {
        //弹出toast提示框
        uni.showToast({
          title: "宝贝数量不能再减少了",
          icon: "none",
        });
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
          itemCount: prodCount,
          shopcartItemId: shopcartItems[index].shopcartItemId,
          prodId: shopcartItems[index].prodId,
          skuId: shopcartItems[index].skuId,
        },
        callBack: function (res) {
          shopcartItems[index].itemCount += prodCount;
          ths.setData({
            shopcartItems: shopcartItems,
            totalMoney: res,
          });
          uni.hideLoading();
          http.getCartCount(); //重新计算购物车总数量
        },
      };
      http.request(params);
    },

    /**
     * 删除购物车商品
     */
    onDelBasket: function (shopcartItemIds) {
      var ths = this;
      var shopcartItems = this.shopcartItems;

      if (shopcartItemIds.length == 0) {
        uni.showToast({
          title: "请选择商品",
          icon: "none",
        });
      } else {
        uni.showModal({
          title: "",
          content: "确认要删除选中的商品吗？",
          confirmColor: "#EC6817",

          success(res) {
            if (res.confirm) {
              uni.showLoading({
                mask: true,
              });
              var params = {
                url: "/shopcart/shopcartItem/deleteItems",
                method: "DELETE",
                data: { shopcartItemIds },
                callBack: function (res) {
                  //后端删除选中商品后,前端对应删除
                  shopcartItems = shopcartItems.filter(
                    (item) => !shopcartItemIds.includes(item.shopcartItemId)
                  );
                  ths.setData({
                    shopcartItems: shopcartItems,
                    totalMoney: res,
                  });
                  uni.hideLoading();
                },
              };
              http.request(params);
            }
          },
        });
      }
    },

    onDelItem: function (e) {
      var index = e.currentTarget.dataset.index;
      var shopcartItems = this.shopcartItems;
      var shopcartItemIds = [];
      shopcartItemIds.push(shopcartItems[index].shopcartItemId);
      this.onDelBasket(shopcartItemIds);
    },

    onDelChosedItems: function () {
      var shopcartItems = this.shopcartItems;

      var shopcartItemIds = [];

      for (var i = 0; i < shopcartItems.length; i++) {
        var shopcartItem = shopcartItems[i];

        if (shopcartItem.isChecked) {
          shopcartItemIds.push(shopcartItem.shopcartItemId);
        }
      }
      this.onDelBasket(shopcartItemIds);
    },

    toProdPage: function (e) {
      var prodid = e.currentTarget.dataset.prodid;

      if (prodid) {
        uni.navigateTo({
          url: "/pages/prod/prod?prodid=" + prodid,
        });
      }
    },

    //修改购物车中选择的sku
    updateSku: function (e) {
      e.stopPropagation();
      var categoryid = e.currentTarget.dataset.categoryid;
      var prodid = e.currentTarget.dataset.prodid;
      var shopcartItemId = e.currentTarget.dataset.shopcartitemid;
      var attr = e.currentTarget.dataset.attr;

      var index = e.currentTarget.dataset.index;
      var selectNum = e.currentTarget.dataset.selectnum;
      var params = {
        url: "/prod/prod/skuSelect/" + categoryid + "/" + prodid,
        method: "GET",

        callBack: (res) => {
          console.log(res.attrSkuMap);
          this.setData({
            skuSelectData: res,
            prodid: prodid,
            shopcartItemId: shopcartItemId,
            selectNum: selectNum,
            attr: attr,
          });

          this.$refs.skuselect.open("bottom");
        },
      };
      http.request(params);
    },

    moveHandle() {
      //禁止父元素滑动
    },
    closeSkuselect(isUpdate, sku, shopcartItemId, itemCount, totalPay) {
      if (isUpdate) {
        var shopcartItems = this.shopcartItems;
        this.setData({ totalMoney: totalPay });
        //更新UI
        //更新购物车项的sku或者合并已有sku
        //1.在this.shopcartItems中每一项,寻找是否有已经存在的sku,如果有则合并,并删除以前的项
        let hasSku = false;
        let itemIndex = -1;
        for (var i = 0; i < shopcartItems.length; i++) {
          var shopcartItem = shopcartItems[i];
          //其他的购物车项中存在sku
          if (
            shopcartItem.skuId === sku.skuId &&
            shopcartItem.shopcartItemId != shopcartItemId
          ) {
            hasSku = true;
            //合并库存数量
            shopcartItem.itemCount += itemCount;
            shopcartItems[i] = shopcartItem;
          }
          if (shopcartItem.shopcartItemId === shopcartItemId) {
            itemIndex = i;
          }
        }

        if (hasSku && itemIndex >= 0) {
          //删除shopcartItems数组中itemIndex的对应项
          shopcartItems.splice(itemIndex, 1);
        }
        //2.不存在sku,不合并,而是修改当前的购物车项
        else if (!hasSku && itemIndex >= 0) {
          var shopcartItem = shopcartItems[itemIndex];
          shopcartItem.skuId = sku.skuId;
          shopcartItem.prodId = sku.prodId;
          shopcartItem.sku = sku;
          shopcartItems[itemIndex] = shopcartItem;
        }
        this.setData({ shopcartItems });
      }
      this.onPopupClose();
    },
    onPopupClose() {
      this.$refs.skuselect.close();
    },

    onPopupChange(e) {
      if (!e.show) {
        this.setData({
          skuSelectData: {},
        });
      }
    },
  },
};
</script>
<style>
@import "./basket.css";
</style>
