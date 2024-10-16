<template>
  <view class="prod-item" :style="{ width: width, height: height }">
    <view
      class="imagecont"
      :style="{ backgroundImage: `url(${fullImagePath(prod.pic)})` }"
    >
    </view>
    <view class="prod-text">{{ prod.prodName }}</view>
    <view class="prod-brief" v-if="type == 'category'">{{ prod.brief }}</view>

    <view class="prod-price">
      <text class="symbol">￥</text>
      <text class="big-num">{{ prod.price }}</text>
    </view>
    <image
      src="/static/images/tabbar/basket-sel.png"
      class="basket-img"
      v-if="type == 'category'"
      :data-prodid="prod.prodId"
      @tap.stop="quickAddShopCart"
      :data-categoryid="prod.categoryId"
    ></image>
  </view>
</template>

<script>
var config = require("../../utils/config.js");
export default {
  props: {
    prod: {
      type: Object,
      required: true,
      default: {},
    },
    width: {
      type: String,
      default: "320rpx",
    },
    height: {
      type: String,
      default: "520rpx",
    },
    type: {
      type: String,
      default: "index",
    },
  },
  computed: {
    fullImagePath() {
      return (path) => config.staticUrl + path;
    },
  },
  methods: {
    quickAddShopCart(e) {
      // this.triggerEvent('checkCoupon', this.data.index);
      this.$emit("quickAddShopCart", {
        prod: {
          prodId: e.currentTarget.dataset.prodid,
          categoryId: e.currentTarget.dataset.categoryid,
        },
      });
    },
  },
};
</script>

<style>
@import "./prod-card.css";
</style>
