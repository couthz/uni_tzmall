<template>
	<!--pages/order-detail/order-detail.wxml-->

	<view class="container">

		<view class="order-detail">
			<view class="delivery-addr" v-if="orderAddr">
				<view class="user-info">
					<text class="item">{{orderAddr.receiver}}</text>
					<text class="item">{{orderAddr.mobile}}</text>
				</view>
				<view class="addr">
					{{orderAddr.province}}{{orderAddr.city}}{{orderAddr.area}}{{orderAddr.area}}{{orderAddr.addr}}
				</view>
			</view>



			<!-- 商品信息 -->
			<view class="prod-item" v-if="orderItems">

				<block v-for="(item, index) in orderItems" :key="index">
					<view class="item-cont" @tap="toProdPage" :data-prodid="item.prodId">
						<view class="prod-pic">
							<image :src="item.pic"></image>
						</view>
						<view class="prod-info">
							<view class="prodname">
								{{item.prodName}}
							</view>
							<view class="prod-info-cont">
								<text class="number">数量：{{item.itemCount}}</text>
								<text class="info-item">{{item.skuName}}</text>
							</view>
							<view class="price-nums clearfix">
								<text class="prodprice">
									<text class="symbol">￥</text>
									<text class="big-num">{{item.price}}</text>
								</text>
								<view class="btn-box">
									<view class="btn" v-if="status >= 101" @click="" :data-orderItems="orderItems">退款
									</view>
									<!-- <text class="btn">加购物车</text>  -->
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>

			<!-- 订单信息 -->
			<view class="order-msg">
				<view class="msg-item">
					<view class="item">
						<text class="item-tit">订单编号：</text>
						<text class="item-txt">{{orderNumber}}</text>
						<!-- <text class="copy-btn" @tap="copyBtn">复制</text> -->
					</view>
					<view class="item">
						<text class="item-tit">下单时间：</text>
						<text class="item-txt">{{new Date(createTime).toLocaleString()}}</text>
					</view>
				</view>
				<view class="msg-item">
					<view class="item">
						<text class="item-tit">支付方式：</text>
						<text class="item-txt">微信支付</text>
					</view>
					<view class="item">
						<text class="item-tit">配送方式：</text>
						<text class="item-txt">普通配送</text>
					</view>
					<view class="item">
						<text class="item-tit">订单备注：</text>
						<text class="item-txt remarks">{{remarks}}</text>
					</view>
				</view>
			</view>

			<view class="order-msg">
				<view class="msg-item">
					<view class="item">
						<view class="item-tit">订单总额：</view>
						<view class="item-txt price">
							<text class="symbol">￥</text>
							<text class="big-num">{{total}}</text>
						</view>
					</view>
					<view class="item">
						<view class="item-tit">运费：</view>
						<view class="item-txt price">
							<text class="symbol">￥</text>
							<text class="big-num">{{transfee}}</text>
						</view>
					</view>
					<view class="item">
						<view class="item-tit">优惠券：</view>
						<view class="item-txt price">
							<text class="symbol">-￥</text>
							<text class="big-num">{{reduceAmount}}</text>
						</view>
					</view>
					<view class="item payment">
						<view class="item-txt price">
							实付款：
							<text class="symbol">￥</text>
							<text class="big-num">{{actualTotal}}</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 底部栏 -->
			<view class="order-detail-footer" v-if="status==104||status==200">
				<text class="dele-order" v-if="status==104||status==200" @tap="delOrderList">删除订单</text>
				<!-- <view class="footer-box"> -->
				<!-- <text class="apply-service">联系客服</text> -->
				<!-- <text class="buy-again">再次购买</text> -->
				<!-- </view> -->
			</view>

		</view>
	</view>
</template>

<script module="wxs" lang="wxs" src="../../wxs/number.wxs"></script>

<script>
	// pages/order-detail/order-detail.js
	var http = require("../../utils/http.js");

	export default {
		data() {
			return {
				orderItems: [],
				remarks: "",
				actualTotal: 0,
				orderAddr: null,
				orderNumber: "",
				createTime: "",
				status: 0,
				transfee: '',
				reduceAmount: '',
				prodid: '',
				total: 0 // 商品总额
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			this.loadOrderDetail(options.orderNum);
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
			//跳转商品详情页
			toProdPage: function(e) {
				var prodid = e.currentTarget.dataset.prodid;
				uni.navigateTo({
					url: '/pages/prod/prod?prodid=' + prodid
				});
			},

			/**
			 * 加载订单数据
			 */
			loadOrderDetail: function(orderNum) {
				uni.showLoading(); //加载订单详情

				var params = {
					url: "/order/order/orderDetail/" + orderNum,
					method: "GET",
					callBack: res => {
						this.setData({
							orderNumber: orderNum,
							actualTotal: res.totalPay, //TODO 总额暂时=实付款
							orderAddr: res.orderAddr,
							remarks: res.remarks,
							orderItems: res.orderItems,
							createTime: res.createTime,
							status: res.status,
							transfee: res.transfee,
							reduceAmount: res.reduceAmount,
							total: res.totalPay
						});
						uni.hideLoading();
					}
				};
				http.request(params);
			},
			// 一键复制事件
			copyBtn: function(e) {
				var ths = this;
				uni.setClipboardData({
					//准备复制的数据
					data: ths.orderNumber,
					success: function(res) {
						uni.showToast({
							title: '复制成功'
						});
					}
				});
			},

			//删除已完成||已取消的订单
			delOrderList: function() {
				var ths = this;
				uni.showModal({
					title: '',
					content: '确定要删除此订单吗？',
					confirmColor: "#eb2444",
					success(res) {
						if (res.confirm) {
							uni.showLoading();
							var params = {
								url: "/p/myOrder/" + ths.orderNumber,
								method: "DELETE",
								data: {},
								callBack: function(res) {
									uni.hideLoading();
									uni.showToast({
										title: res ? res : '删除成功',
										icon: 'none'
									});
									setTimeout(() => {
										uni.redirectTo({
											url: '/pages/orderList/orderList'
										});
									}, 1000)
								}
							};
							http.request(params);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},

			// 跳转搜索页
			toAftersalePage: function() {
				//TODO 校验是否超过售后有效期
				var orderItems = e.currentTarget.dataset.orderItems;

				uni.navigateTo({

					url: "/pages/aftersale-apply/aftersale-type?orderItems=" + orderItems,
				});
			},
		}
	};
</script>
<style>
	@import "./order-detail.css";
</style>