<template>
	<!--pages/category/category.wxml-->

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
				<view v-for="(item, index) in categoryList" :key="index" class="menu-view">
					<view :class="'menu-item ' + (selIndex == index ? 'active' : '') + ' '" :data-index="index"
						:data-id="item.categoryId" @tap="onMenuTab">
						{{ item.categoryName }}
					</view>
				</view>
				<view v-if="!categoryList || !categoryList.length" class="ca-empty">{{
          categoryList && categoryList.length ? "该分类下暂无商品" : "暂无商品"
        }}</view>
			</scroll-view>
			<!-- 头部菜单end -->

			<!-- 商品列表 -->
			<view class="hot-sale" v-if="productList.length">
				<view class="hotsale-item-cont">
					<block v-for="(prod, index2) in productList" :key="index2">
						<view class="prod-items" @tap="toProdPage" :data-prodid="prod.prodId">
							<view class="hot-imagecont">
								<image :src="prod.pic" class="hotsaleimg"></image>
							</view>
							<view class="hot-text">
								<view class="hotprod-text">{{ prod.prodName }}</view>
								<view class="prod-info">{{ prod.brief }}</view>
								<view class="prod-text-info">
									<view class="price">
										<text class="symbol">￥</text>
										<text class="big-num">{{ prod.price }}</text>
										<!-- 	              <text class="small-num">.{{wxs.parsePrice(prod.price)[1]}}</text>
 -->
									</view>
									<!-- <view class='singal-price'>
	              <text>￥</text>
	              <text>{{prod.oriPrice}}</text>
	            </view> -->
									<image src="/static/images/tabbar/basket-sel.png" @tap.stop="quickAddShopCart"
										class="basket-img" :data-prodid="prod.prodId"></image>
								</view>
							</view>
						</view>
					</block>
				</view>
			</view>
			<view v-if="!productList.length" class="cont-item empty">该分类下暂无商品</view>
			<!-- 右侧内容end -->
			<!-- </block> -->
		</view>

		<!-- 底部弹出 -->
		<uni-popup ref="skuselect" @touchmove.stop.prevent="moveHandle">

			<skuSelect :specifications="specifications" :shopItemInfo="shopItemInfo" :prodId="prodid" :hasBottom=true>
			</skuSelect>

		</uni-popup>
	</view>
</template>

<script module="wxs" lang="wxs" src="../../wxs/number.wxs"></script>

<script>
	import skuSelect from "@/components/sku-select/sku-select.vue";

	// pages/category/category.js
	var http = require("../../utils/http.js");
	var config = require("../../utils/config.js");

	export default {
		data() {
			return {
				selIndex: 0,
				categoryList: [],
				productList: [],
				categoryImg: "",
				prodid: 0,
				//sku选择框所有可能的规格
				specifications: [],
				//key:所有可能的子路径 value:sku(只有全路径是才不为null)
				shopItemInfo: {},
			};
		},

		components: {
			skuSelect
		},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			var ths = this; //加载分类列表
			var params = {
				url: "/prod/prodCategory/category",
				method: "GET",
				data: {
					parentId: "",
				},
				callBack: function(res) {
					// console.log(res);
					ths.setData({
						categoryImg: res[0].pic,
						categoryList: res,
					});
					ths.getProdList(res[0].categoryId);
				},
			};
			http.request(params);
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {},

		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			moveHandle() {
				//禁止父元素滑动
			},
			/**
			 * 分类点击事件
			 */
			onMenuTab: function(e) {
				console.log(e);
				var id = e.currentTarget.dataset.id;
				var index = e.currentTarget.dataset.index; // this.getProdList(id);

				this.getProdList(this.categoryList[index].categoryId);
				this.setData({
					categoryImg: this.categoryList[index].pic,
					selIndex: index,
				});
			},
			// 跳转搜索页
			toSearchPage: function() {
				uni.navigateTo({
					url: "/pages/search-page/search-page",
				});
			},

			getProdList(categoryId) {
				//加载分类列表
				var params = {
					url: "/prod/prod/categotyProdPage",
					method: "POST",
					data: {
						categoryId: categoryId,
					},
					callBack: (res) => {
						// console.log(res);
						this.setData({
							productList: res.items,
						});
					},
				};
				http.request(params);
			},

			//跳转商品详情页
			toProdPage: function(e) {
				var prodid = e.currentTarget.dataset.prodid;
				uni.navigateTo({
					url: "/pages/prod/prod?prodid=" + prodid,
				});
			},

			quickAddShopCart: function(e) {

				var prodid = e.currentTarget.dataset.prodid;
				var params = {
					url: "/prod/prod/skuSelect/" + prodid,
					method: "GET",

					callBack: (res) => {
						this.setData({
							specifications: res.attrvalueMap,
							shopItemInfo: res.attrSkuMap,
							prodid: prodid,
						});

						this.$refs.skuselect.open("bottom");
					},
				};
				http.request(params);
			},
		},
	};
</script>
<style>
	@import "./category.css";
</style>