var http = require("./http.js");

//两个调用时机
//1. onLauch
//2. 后端返回认证失败之后
var wxLogin = function () {
  return new Promise((resolve, reject) => {
    console.log("自动登录");
    var globalData = getApp().globalData;
    var token = uni.getStorageSync("token");
    if (token) {
      resolve();
    } else if (globalData.isLanding) {
      // 说明有并发登录请求，请求轮询稍后，避免重复调用登录接口,如果前面的成功,后面的也不会再执行了
      setTimeout(() => {
        wxLogin()
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      }, 500);
    } else {
      globalData.isLanding = true;
      uni.login({
        success: (res) => {
          console.log("准备给后台发code");
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          var params = {
            url: "/user/auth/wxLogin",
            method: "post",
            data: {
              code: res.code,
            },
            callBack: (res) => {
              http.loginSuccess(res, () => {
                console.log("登录成功:" + JSON.stringify(res));

                globalData.isLanding = false;
                resolve();
              });
            },
            errCallBack: (res) => {
              console.log("登录失败:" + JSON.stringify(res));

              globalData.isLanding = false;
              reject(res);
            },
          };
          http.request(params);
        },
        fail: (err) => {
          console.log("登录失败:" + err);

          globalData.isLanding = false;
          reject(err);
        },
      });
    }
  });
};
exports.wxLogin = wxLogin;
