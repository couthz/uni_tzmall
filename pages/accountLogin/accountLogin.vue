<template>
  <view>
    <!-- 顶部组件 -->
    <u-navbar
      is-back
      :background="{ background: 'transparent' }"
      :border-bottom="false"
      title="授权登录"
      title-size="28"
    ></u-navbar>
    <view class="content">
      <view class="logo u-flex">
        <image
          src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-weitao/0d8c04b0-a59d-11ea-b997-9918a5dda011.png"
        >
        </image>
      </view>
      <view class="name">红丽外贸商城</view>
      <view class="summary u-flex"
        ><text
          >如需正常使用小程序的功能，请点击下方授权登录按钮，打开授权弹窗，并点击允许。</text
        ></view
      >
      <view class="btn"
        ><button type="primary" size="default" shape="circle" @tap="wxLogin">
          授权登录
        </button></view
      >
    </view>
    <mi-toast ref="miToast" />
  </view>
</template>

<script>
var auth = require("../../utils/auth.js");

// 登录流程
// 1.用户点击登录按钮，弹出授权弹窗
// 2.用户确认授权，调用uni.login接口，拿到code
// 3.使用code调用后端接口,接收后端返回的自定义登录态,如token等
// 4.登录状态在本地保存起来,用的时候直接调用
// 5.用户信息由后端解密，统一返回，再存入本地

// 此处简化了流程,没有返回自定义登录态,直接使用openid来判断用户
// 用户信息也没有做特别处理，获取到之后就进行了存储
export default {
  data() {
    return {};
  },

  methods: {
    wxLogin() {
      auth.wxLogin(() => {
        uni.navigateBack();
      });
      // console.log();
      // if (e.detail.errMsg != "getPhoneNumber:ok") {
      //   this.$refs.miToast.show({
      //     title: "取消了授权，请点击允许授权",
      //     type: "warning",
      //     position: "top",
      //   });
      //   return;
      // }
      // uni.showLoading({
      //   title: "登录中...",
      // });
      // uni.login({
      //   provider: "weixin",
      //   success: (login) => {
      //     console.log(e.detail.userInfo);
      //     uni.hideLoading();
      //     // uniCloud.callFunction({
      //     // 	name: 'login',
      //     // 	data: {
      //     // 		userInfo: e.detail.userInfo,
      //     // 		code: login.code
      //     // 	},
      //     // 	success: res => {
      //     // 		console.log(res)
      //     // 		if (res.result.code != 0) {
      //     // 			this.$refs.miToast.show({
      //     // 				title: res.result.msg,
      //     // 				type: 'error',
      //     // 				position: 'top'
      //     // 			})
      //     // 			return
      //     // 		}
      //     // 		this.$u.vuex('isLogin', true)
      //     // 		this.$u.vuex('userInfo', res.result.data)
      //     // 		this.$refs.miToast.show({
      //     // 			title: '登录成功',
      //     // 			type: 'success',
      //     // 			position: 'top',
      //     // 			success: () => {
      //     // 				uni.navigateBack()
      //     // 			}
      //     // 		})
      //     // 	},
      //     // 	complete: () => {
      //     // 		uni.hideLoading()
      //     // 	}
      //     // })
      //   },
      //   fail: () => {
      //     this.$refs.miToast.show({
      //       title: "登录失败，请重试",
      //       type: "warning",
      //       position: "top",
      //     });
      //   },
      // });
    },
  },
};
</script>

<style>
page {
  background: url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-weitao/50c93d50-a594-11ea-b997-9918a5dda011.png")
    no-repeat center / 100% 100%;
}

.content {
  margin-top: 200rpx;
}

.content .logo {
  justify-content: center;
}

.content .logo image {
  width: 128rpx;
  height: 128rpx;
  border-radius: 64rpx;
}

.content .name {
  margin-top: 20rpx;
  font-size: 32rpx;
  color: #333;
  font-weight: bold;
  text-align: center;
}

.content .summary {
  justify-content: center;
  margin-top: 40rpx;
  margin-bottom: 60rpx;
  padding: 0 54rpx;
  color: #999;
  text-align: center;
  line-height: 48rpx;
  font-size: 28rpx;
}

.content .summary text {
  width: 100%;
}

.content .btn {
  padding: 0 150rpx;
}

.content .btn button {
  font-size: 30rpx;
}
</style>
