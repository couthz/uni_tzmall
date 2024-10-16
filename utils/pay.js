var http = require("./http.js");

var normalPay = function (orderNumber, callBackParams) {
  uni.showLoading({
    mask: true,
  });
  var params = {
    url: "/order/pay/normalPay",
    method: "POST",
    data: {
      orderNumber: orderNumber,
    },
    callBack: (res) => {
      uni.hideLoading();
      finishPay(orderNumber, callBackParams);
      uni.showToast({
        title: "模拟支付成功",
      });
      // uni.requestPayment({
      //   timeStamp: res.timeStamp,
      //   nonceStr: res.nonceStr,
      //   package: res.package,
      //   signType: res.signType,
      //   paySign: res.paySign,
      //   success: (e) => {
      //     finishPay(orderNumber, callBackParams);
      //     // console.log("支付成功");
      //   },
      //   fail: () => {
      //     //用户取消支付
      //     callBackParams.fail();
      //   },
      // });
    },
  };
  http.request(params);
};

var finishPay = function (orderNumber, callBackParams) {
  uni.showLoading({
    mask: true,
  });
  var params = {
    url: "/order/pay/orderFinishPay",
    method: "POST",
    data: orderNumber,
    callBack: (res) => {
      uni.hideLoading();
      callBackParams.success();
    },
    errCallBack: () => {
      uni.hideLoading();
      uni.showToast({
        title: "支付状态更新错误,请联系客服",
        icon: "none",
      });
    },
  };
  http.request(params);
};

exports.normalPay = normalPay;
