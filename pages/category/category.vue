<template>
  <view class="container">
    <!-- 头部搜索区 -->

    <view class="search-bar">
      <view class="search-box" @tap="toSearchPage">
        <image src="/static/images/icon/search.png" class="search-img"></image>
        <text class="sear-input">搜索您想要的商品</text>
      </view>
    </view>
    <!-- 滚动内容区 -->

    <view class="main">
      <!-- 头部菜单start -->
      <scroll-view scroll-x="true" class="headmenu">
        <view
          v-for="(item, index) in categoryList"
          :key="index"
          class="menu-view"
        >
          <view
            :class="'menu-item ' + (selIndex == index ? 'active' : '') + ' '"
            :data-index="index"
            :data-id="item.categoryId"
            @tap="onMenuTab"
          >
            {{ item.categoryName }}
          </view>
        </view>
      </scroll-view>
      <!-- 头部菜单end -->

      <!-- 商品列表 -->
      <view class="hot-sale">
        <block v-for="(prod, index2) in productList" :key="index2">
          <view class="prod-items" @tap="toProdPage" :data-prodid="prod.prodId">
            <prodCard
              :prod="prod"
              :width="'100%'"
              :height="'500rpx'"
              :type="'category'"
              @quickAddShopCart="quickAddShopCart"
            ></prodCard>
            <!-- <image
                    src="/static/images/tabbar/basket-sel.png"
                    @tap.stop="quickAddShopCart"
                    class="basket-img"
                    :data-prodid="prod.prodId"
                    :data-categoryid="prod.categoryId"
                  ></image> -->
          </view>
        </block>
      </view>

      <view v-if="productList.length === 0" class="cont-item empty"
        >该分类下暂无商品</view
      >

      <view v-if="isBottom" class="end-tip">已经到底了~</view>

      <!-- 右侧内容end -->
      <!-- </block> -->
    </view>

    <!-- 底部弹出 -->
    <uni-popup
      ref="skuselect"
      @touchmove.stop.prevent="moveHandle"
      type="bottom"
      @change="onPopupChange"
    >
      <skuSelect
        :skuSelectData="skuSelectData"
        :prodId="prodid"
        :hasBottom="false"
        @close-popup="closeSkuselect"
      >
      </skuSelect>
    </uni-popup>
  </view>
</template>

<script module="wxs" lang="wxs" src="../../wxs/number.wxs"></script>

<script>
import skuSelect from "@/components/sku-select/sku-select.vue";
import prodCard from "@/components/prod-card/prod-card.vue";

// pages/category/category.js
var http = require("../../utils/http.js");
var config = require("../../utils/config.js");

export default {
  data() {
    return {
      isBottom: false,
      selIndex: 0,
      categoryList: [],
      productList: [],
      prodid: 0,
      current: 1,
      pages: 0,
      //包含specifications和shopItemInfo
      skuSelectData: {},
      //sku选择框所有可能的规格
      // specifications: [],
      //key:所有可能的子路径 value:sku(只有全路径是才不为null)
      // shopItemInfo: {},
    };
  },
  computed: {
    fullImagePath() {
      return (path) => config.staticUrl + path;
    },
  },

  components: {
    skuSelect,
    prodCard,
  },
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var ths = this; //加载分类列表
    uni.showLoading({
      mask: true,
    });
    var params = {
      url: "/prod/prodCategory/category",
      method: "GET",
      data: {
        parentId: "",
      },
      callBack: function (res) {
        uni.hideLoading();

        var index = uni.getStorageSync("categoryIndex");
        if (index != null && index != undefined && index != "") {
          ths.setData({
            selIndex: index,
          });
        }
        uni.removeStorageSync("categoryIndex");
        ths.setData({
          categoryList: res,
        });
        ths.getProdList(res[ths.selIndex].categoryId, 1);
      },
    };
    http.request(params);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (uni.getStorageSync("categoryIndex") !== "") {
      var index = uni.getStorageSync("categoryIndex");
      if (index != this.selIndex) {
        this.getProdList(this.categoryList[index].categoryId, 1);
        this.setData({
          selIndex: index,
        });
      }
    }
    uni.removeStorageSync("categoryIndex");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.$refs.skuselect.close();
  },

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
  onReachBottom: function () {
    if (this.current < this.pages) {
      this.getProdList(
        this.categoryList[this.selIndex].categoryId,
        this.current + 1
      );
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    moveHandle() {
      //禁止父元素滑动
    },
    /**
     * 分类点击事件
     */
    onMenuTab: function (e) {
      var id = e.currentTarget.dataset.id;
      var index = e.currentTarget.dataset.index;
      this.setData({
        productList: [],
        current: 1,
        pages: 0,
        selIndex: index,
      });

      // this.getProdList(id);

      this.getProdList(this.categoryList[index].categoryId, 1);
    },
    // 跳转搜索页
    toSearchPage: function () {
      uni.navigateTo({
        url: "/pages/search-page/search-page",
      });
    },

    getProdList(categoryId, current) {
      var ths = this;

      //加载分类列表
      uni.showLoading();
      var params = {
        url: "/prod/prod/categoryProdPage",
        method: "POST",
        data: {
          current: current,
          size: 10,
          // 定义你的请求参数
          categoryId: categoryId,
        },
        callBack: (res) => {
          var productList = ths.productList;

          productList = productList.concat(res.items);
          var isBottom = false;
          if (res.meta.currentPage >= res.meta.totalPages) {
            var isBottom = true;
          }
          ths.setData({
            //todo 拼接 不是替换
            productList: productList,
            pages: res.meta.totalPages,
            current: res.meta.currentPage,
            isBottom: isBottom,
          });
          uni.hideLoading();
        },
      };
      http.request(params);
    },

    //跳转商品详情页
    toProdPage: function (e) {
      var prodid = e.currentTarget.dataset.prodid;
      uni.navigateTo({
        url: "/pages/prod/prod?prodid=" + prodid,
      });
    },

    quickAddShopCart: function (e) {
      var ths = this;
      var categoryid = e.prod.categoryId;
      var prodid = e.prod.prodId;
      var params = {
        url: "/prod/prod/skuSelect/" + categoryid + "/" + prodid,
        method: "GET",

        callBack: (res) => {
          ths.setData({
            skuSelectData: res,
            prodid: prodid,
          });
          ths.$refs.skuselect.open("bottom");
        },
      };
      http.request(params);
    },

    closeSkuselect() {
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
@import "./category.css";
</style>
