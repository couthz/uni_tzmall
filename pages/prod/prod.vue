<template>
  <!-- 商品详情 -->
  <view class="container">
    <!-- 轮播图 -->
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :indicator-color="indicatorColor"
      :interval="interval"
      :duration="duration"
      :indicator-active-color="indicatorActiveColor"
    >
      <block v-for="(item, index) in imgs" :key="index">
        <swiper-item>
          <image :src="item"></image>
        </swiper-item>
      </block>
    </swiper>
    <!-- end  轮播图 -->
    <!-- 商品信息 -->
    <!-- <block wx:for="{{imgs}}" wx:key=''> -->
    <view class="prod-info">
      <!-- 商品名,收藏按钮 -->
      <view class="tit-wrap">
        <view class="prod-tit">{{ prodName }}</view>
        <view class="col" @tap="addOrCannelCollection">
          <image
            v-if="!isCollection"
            src="/static/images/icon/prod-col.png"
          ></image>
          <image
            v-if="isCollection"
            src="/static/images/icon/prod-col-red.png"
          ></image>
          收藏
        </view>
      </view>
      <!-- 商品简介 -->
      <view class="sales-p">{{ brief }}</view>
      <!-- 商品价格 -->
      <view class="prod-price">
        <text class="price"
          >￥
          <text class="price-num"> {{ price }} </text>
          起
        </text>
        <!-- <text v-if="defaultSku && defaultSku.price" class="price"
          >￥<text class="price-num">{{
            wxs.parsePrice(defaultSku.price)[0]
          }}</text
          >.{{ wxs.parsePrice(defaultSku.price)[1] }}</text
        >
        <text v-if="defaultSku && defaultSku.oriPrice" class="ori-price">
          ￥{{ wxs.parsePrice(defaultSku.oriPrice)[0] }}.{{
            wxs.parsePrice(defaultSku.oriPrice)[1]
          }}
        </text> -->
        <text class="sales"></text>
      </view>
      <!-- <button class="share-icon" open-type="share">
        <image src='../../images/icon/share.png'></image>
        <view class="share-text">分享</view>
      </button> -->
    </view>
    <!-- </block> -->
    <!-- end 商品信息 -->
    <!-- 领券 -->
    <!-- <view class="coupon" bindtap='showPopup' wx:if="{{couponList.length}}">
    <view class="coupon-tit">领券</view>
    <view class="coupon-con">
      <text class="item" wx:for="{{couponList}}" wx:key="item.couponId">满{{item.cashCondition}}<block wx:if="{{item.couponType == 1}}">减{{item.reduceAmount}}</block><block wx:if="{{item.couponType == 2}}">打{{item.couponDiscount}}折</block></text>
    </view>
    <view class="num">共{{couponList.length}}张</view>
    <view class="more">...</view>
  </view> -->
    <!-- 已选规格 -->
    <view class="sku" @tap="showSku">
      <view class="sku-tit">已选</view>
      <view class="sku-con"
        >{{ selectedProp.length > 0 ? selectedProp + "，" : ""
        }}{{ prodNum }}件</view
      >
      <view class="more">...</view>
    </view>
    <!-- 评价 -->
    <view class="cmt-wrap">
      <view class="cmt-tit" @tap="showComment">
        <view class="cmt-t"> 评价 </view>
        <view class="cmt-count">
          共{{ prodCommData.number }}条
          <text class="cmt-more"></text>
        </view>
      </view>
      <view class="cmt-cont">
        <view class="cmt-tag" @tap="showComment"> </view>
        <view class="cmt-items">
          <view
            v-for="(item, index) in littleCommPage"
            :key="index"
            class="cmt-item"
          >
            <view class="cmt-user">
              <text class="date">{{ item.recTime }}</text>
              <view class="cmt-user-info">
                <image class="user-img" :src="item.pic"></image>
                <view class="nickname">{{ item.nickName }}</view>
                <!-- <van-rate readonly :value="item.score" @change="onChange" color="#f44"></van-rate> -->
              </view>
            </view>
            <view class="cmt-cnt">{{ item.content }}</view>
            <scroll-view
              class="cmt-attr"
              scroll-x="true"
              v-if="item.pics.length"
            >
              <image
                v-for="(commPic, index2) in item.pics"
                :key="index2"
                :src="commPic"
              ></image>
            </scroll-view>
          </view>
        </view>
        <view class="cmt-more-v" v-if="prodCommPage.records.length > 2">
          <text @tap="showComment">查看全部评价</text>
        </view>
      </view>
    </view>
    <!-- 商品详情 -->
    <view class="prod-detail">
      <view>
        <rich-text :nodes="content"></rich-text>
        <!-- <image src="//img14.360buyimg.com/cms/jfs/t1/25195/1/9487/388554/5c7f80a5E8b8f8f0c/46818404849d6ec6.jpg!q70.dpg" mode="widthFix"></image> -->
      </view>
    </view>
    <!-- end 商品详情 -->
    <!-- 底部按钮 -->
    <view class="cart-footer">
      <view class="btn icon" @tap="toHomePage">
        <image src="/static/images/tabbar/homepage.png"></image>
        首页
      </view>
      <view class="btn icon" @tap="toCartPage">
        <image src="/static/images/tabbar/basket.png"></image>
        购物车
        <view class="badge badge-1" v-if="totalCartNum > 0">{{
          totalCartNum
        }}</view>
      </view>
      <view class="btn cart" @tap="showSku">
        <text>加入购物车</text>
      </view>
      <view class="btn buy" @tap="showSku">
        <text>立即购买</text>
      </view>
    </view>

    <!-- end 底部按钮 -->

    <!-- 优惠券 -->
    <!-- <view class="popup-hide" wx:if="{{popupShow}}">
    <view class="popup-box">
      <view class="popup-tit">
        <text>优惠券</text>
        <text class="close" bindtap='closePopup'></text>
      </view>
      <view class='popup-cnt'>
        <block wx:for="{{couponList}}" wx:key='couponId'>
          <coupon showTimeType="{{1}}" canUse="{{true}}" item="{{item}}"></coupon>
        </block>
      </view>
    </view>
  </view> -->
    <!-- 底部弹出 -->
    <uni-popup
      class="sku-select"
      ref="skuselect"
      @touchmove.stop.prevent="moveHandle"
    >
      <skuSelect
        :specifications="specifications"
        :shopItemInfo="shopItemInfo"
        :prodId="prodId"
        @close-popup="closeSkuselect"
      ></skuSelect>
    </uni-popup>
    <!-- 评价 -->
    <!-- TODO 不要做弹窗,做新的页面 -->
    <view class="cmt-popup" v-if="commentShow">
      <view class="cmt-tit">
        <view class="cmt-t">
          商品评价
          <text class="cmt-good">好评度{{ prodCommData.positiveRating }}%</text>
        </view>
        <text class="close" @tap="closePopup"></text>
      </view>
      <view class="cmt-cont">
        <view class="cmt-tag">
          <text
            @tap="getProdCommPage"
            data-evaluate="-1"
            :class="evaluate == -1 ? 'selected' : ''"
            >全部({{ prodCommData.number }})</text
          >
          <text
            @tap="getProdCommPage"
            data-evaluate="0"
            :class="evaluate == 0 ? 'selected' : ''"
            >好评({{ prodCommData.praiseNumber }})</text
          >
          <text
            @tap="getProdCommPage"
            data-evaluate="1"
            :class="evaluate == 1 ? 'selected' : ''"
            >中评({{ prodCommData.secondaryNumber }})</text
          >
          <text
            @tap="getProdCommPage"
            data-evaluate="2"
            :class="evaluate == 2 ? 'selected' : ''"
            >差评({{ prodCommData.negativeNumber }})</text
          >
          <text
            @tap="getProdCommPage"
            data-evaluate="3"
            :class="evaluate == 3 ? 'selected' : ''"
            >有图({{ prodCommData.picNumber }})</text
          >
        </view>
        <view class="cmt-items">
          <block v-if="prodCommPage.records.length">
            <view
              v-for="(item, index) in prodCommPage.records"
              :key="index"
              class="cmt-item"
            >
              <view class="cmt-user">
                <text class="date">{{ item.recTime }}</text>
                <view class="cmt-user-info">
                  <image class="user-img" :src="item.pic"></image>
                  <view class="nickname">{{ item.nickName }}</view>
                  <!-- <van-rate readonly :value="item.score" @change="onChange" color="#f44"></van-rate> -->
                </view>
              </view>
              <view class="cmt-cnt">{{ item.content }}</view>
              <scroll-view
                class="cmt-attr"
                scroll-x="true"
                v-if="item.pics.length"
              >
                <image
                  v-for="(commPic, index2) in item.pics"
                  :key="index2"
                  :src="commPic"
                ></image>
              </scroll-view>
              <view class="cmt-reply" v-if="item.replyContent">
                <text class="reply-tit">店铺回复：</text>
                {{ item.replyContent }}
              </view>
            </view>
          </block>
          <view v-if="!prodCommPage.records.length" class="empty"
            >暂无评价</view
          >
        </view>
        <view
          class="load-more"
          v-if="prodCommPage.pages > prodCommPage.current"
        >
          <text @tap="getMoreCommPage">点击加载更多</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script module="wxs" lang="wxs" src="../../wxs/number.wxs"></script>

<script>
// pages/prod/prod.js
import skuSelect from "@/components/sku-select/sku-select.vue";

const app = getApp();
var http = require("../../utils/http.js");
var config = require("../../utils/config.js");
var util = require("../../utils/util.js");
import coupon from "../../components/coupon/coupon";
// import vanRate from "../../vant/rate/index";

export default {
  data() {
    return {
      // picDomain: config.picDomain,
      indicatorDots: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#eb2444",
      autoplay: true,
      interval: 3000,
      duration: 1000,
      prodNum: 1,
      totalCartNum: 0,
      pic: "",
      imgs: "",
      prodName: "",
      price: 0,
      content: "",
      prodId: "",
      brief: "",
      popupShow: false,
      // 是否获取过用户领取过的优惠券id
      loadCouponIds: false,
      skuShow: false,
      commentShow: false,
      couponList: [],

      // skuList: [],
      // skuGroup: {},
      defaultSku: undefined,

      //sku选择框所有可能的规格
      specifications: {},
      //key:所有可能的子路径 value:sku(只有全路径是才不为null)
      shopItemInfo: {},

      selectedProp: [],
      selectedPropObj: {},
      propKeys: [],
      allProperties: [],
      prodCommData: {},
      prodCommPage: {
        current: 0,
        pages: 0,
        records: [],
      },
      littleCommPage: [],
      evaluate: -1,
      isCollection: false,
    };
  },

  components: {
    coupon,
    skuSelect,
  },
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      prodId: options.prodid,
    }); // 加载商品信息

    this.getProdInfo(); // 加载商品详情数据

    //this.getProdCommData(); // 加载评论项

    //this.getLittleProdComm(); // 查看用户是否关注

    //this.getCollection();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      totalCartNum: app.globalData.totalCartCount,
    });
  },

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

  /**
   * 分享设置
   */
  onShareAppMessage: function (res) {
    return {
      title: this.prodName,
      path: "/pages/prod/prod?prodid=" + this.prodid,
    };
  },
  methods: {
    /**
     * 获取是否关注信息
     */
    getCollection() {
      uni.showLoading();
      var params = {
        url: "/p/user/collection/isCollection",
        method: "GET",
        data: {
          prodId: this.prodId,
        },
        callBack: (res) => {
          this.setData({
            isCollection: res,
          });
          uni.hideLoading();
        },
      };
      http.request(params);
    },

    /**
     * 添加或者取消收藏商品
     */
    addOrCannelCollection() {
      uni.showLoading();
      var params = {
        url: "/p/user/collection/addOrCancel",
        method: "POST",
        data: this.prodId,
        callBack: (res) => {
          this.setData({
            isCollection: !this.isCollection,
          });
          uni.hideLoading();
        },
      };
      http.request(params);
    },

    // 获取商品信息
    getProdInfo() {
      uni.showLoading();
      var params = {
        url: "/prod/prod/prodDetail/" + this.prodId,
        method: "GET",

        callBack: (res) => {
          uni.hideLoading();
          if (!res) {
            setTimeout(() => {
              uni.navigateBack();
            }, 1000);
            return;
          }
          var imgStrs = res.imgs;
          var imgs = imgStrs.split(",");
          var content = util.formatHtml(res.content);		 

          this.setData({
            imgs: imgs,
            content: content,
            price: res.price,
            prodName: res.prodName,
            prodId: res.prodId,
            brief: res.brief,
            pic: res.pic,
            specifications: res.prodSkuSelectDTO.attrvalueMap,
            shopItemInfo: res.prodSkuSelectDTO.attrSkuMap,
          }); // 获取优惠券
          //this.getCouponList();
          // 组装sku

          uni.hideLoading();
        },
      };
      http.request(params);
    },

    getProdCommData() {
      http.request({
        url: "/prodComm/prodCommData",
        method: "GET",
        data: {
          prodId: this.prodId,
        },
        callBack: (res) => {
          this.setData({
            prodCommData: res,
          });
        },
      });
    },

    // 获取部分评论
    getLittleProdComm() {
      if (this.prodCommPage.records.length) {
        return;
      }

      this.getProdCommPage();
    },

    getMoreCommPage(e) {
      this.getProdCommPage();
    },

    // 获取分页获取评论
    getProdCommPage(e) {
      if (e) {
        if (e.currentTarget.dataset.evaluate === this.evaluate) {
          return;
        }

        this.setData({
          prodCommPage: {
            current: 0,
            pages: 0,
            records: [],
          },
          evaluate: e.currentTarget.dataset.evaluate,
        });
      }

      http.request({
        url: "/prodComm/prodCommPageByProd",
        method: "GET",
        data: {
          prodId: this.prodId,
          size: 10,
          current: this.prodCommPage.current + 1,
          evaluate: this.evaluate,
        },
        callBack: (res) => {
          res.records.forEach((item) => {
            if (item.pics) {
              item.pics = item.pics.split(",");
            }
          });
          let records = this.prodCommPage.records;
          records = records.concat(res.records);
          this.setData({
            prodCommPage: {
              current: res.current,
              pages: res.pages,
              records: records,
            },
          }); // 如果商品详情中没有评论的数据，截取两条到商品详情页商品详情

          if (!this.littleCommPage.length) {
            this.setData({
              littleCommPage: records.slice(0, 2),
            });
          }
        },
      });
    },

    getCouponList() {
      http.request({
        url: "/coupon/listByProdId",
        method: "GET",
        data: {
          prodId: this.prodId,
          shopId: this.shopId,
        },
        callBack: (res) => {
          this.setData({
            couponList: res,
          });
        },
      });
    },

    /**
     * 跳转到首页
     */
    toHomePage: function () {
      uni.switchTab({
        url: "/pages/index/index",
      });
    },

    /**
     * 跳转到购物车
     */
    toCartPage: function () {
      uni.switchTab({
        url: "/pages/basket/basket",
      });
    },

    /**
     * 加入购物车
     */

    /**
     * 立即购买
     */
    buyNow: function () {
      uni.setStorageSync(
        "orderItem",
        JSON.stringify({
          prodId: this.prodId,
          skuId: this.defaultSku.skuId,
          itemCount: this.prodNum,
        })
      );
      uni.navigateTo({
        url: "/pages/submit-order/submit-order?orderEntry=1",
      });
    },

    /**
     * 减数量
     */
    onCountMinus: function () {
      var prodNum = this.prodNum;

      if (prodNum > 1) {
        this.setData({
          prodNum: prodNum - 1,
        });
      }
    },

    /**
     * 加数量
     */
    onCountPlus: function () {
      var prodNum = this.prodNum;

      if (prodNum < 1000) {
        this.setData({
          prodNum: prodNum + 1,
        });
      }
    },
    showPopup: function () {
      if (this.loadCouponIds) {
        this.setData({
          popupShow: true,
        });
        return;
      }

      http.request({
        url: "/p/myCoupon/listCouponIds",
        method: "GET",
        data: {},
        callBack: (couponIds) => {
          var couponList = this.couponList;
          console.log(couponList);
          couponList.forEach((coupon) => {
            if (couponIds && couponIds.length) {
              // 领取该优惠券数量
              var couponLimit = 0;
              couponIds.forEach((couponId) => {
                if (couponId == coupon.couponId) {
                  couponLimit++;
                }
              }); // 小于用户领取优惠券上限，可以领取优惠券

              if (couponLimit < coupon.limitNum) {
                coupon.canReceive = true;
              } else {
                coupon.canReceive = false;
              }
            } else {
              coupon.canReceive = true;
            }
          });
          this.setData({
            couponList: couponList,
            popupShow: true,
            loadCouponIds: true,
          });
        },
      });
    },
    showSku: function () {
      this.$refs.skuselect.open("bottom");
    },
    closeSkuselect: function () {
      this.$refs.skuselect.close();
    },
    showComment: function () {
      this.setData({
        commentShow: true,
      });
    },
    closePopup: function () {
      this.setData({
        popupShow: false,
        skuShow: false,
        commentShow: false,
      });
    },
    moveHandle() {
      //禁止父元素滑动
    },
  },
};
</script>
<style>
@import "./prod.css";
</style>
