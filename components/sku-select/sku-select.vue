<template>
  <!-- sku弹出层 -->
  <view class="popup">
    <view class="layer attr-content">
      <view class="specification-wrapper">
        <view class="specification-wrapper-content">
          <view class="specification-header">
            <view class="specification-left">
              <view
                class="product-img"
                :style="{
                  backgroundImage: `url(${fullImagePath(selectPic)})`,
                }"
              ></view>
            </view>
            <view class="specification-right">
              <view class="price-content">
                <text class="sign">¥</text>
                <text class="price">{{ selectshop.price || 0 }}</text>
              </view>
              <view class="inventory"> 库存:{{ selectshop.stocks || 0 }} </view>
              <view class="choose">已选:{{ selectTitleArr.join(" ") }}</view>
            </view>
          </view>
          <view class="specification-content">
            <view
              class="specification-item"
              v-for="(attr, index1) in reactiveSpecifications"
              :key="index1"
            >
              <view class="item-title">{{ attr[0] }}</view>
              <view class="item-wrapper">
                <view
                  class="item-content"
                  @tap="skuClick(attr_value, index1, index2)"
                  v-for="(attr_value, index2) in attr[1]"
                  :key="index2"
                  :class="[
                    attr_value.ishow ? '' : 'noactived',
                    subIndex[index1] == index2 ? 'actived' : '',
                  ]"
                >
                  {{ attr_value.attrValueName }}
                </view>
              </view>
            </view>
            <view v-if="!updateSku" class="sku-number">
              <view class="item-title">数量</view>
              <view class="number-box">
                <uni-number-box
                  :min="1"
                  :max="selectshop.stocks"
                  :value="reactiveSelectNum"
                  :disabled="canCount"
                  @change="changeNum"
                ></uni-number-box>
              </view>
            </view>
          </view>
          <view>
            <view class="close" @tap="closeSf">
              <image class="close-item" src="../../static/close.png"></image>
            </view>
          </view>
          <view class="btn-wrapper" v-if="updateSku" @tap="onUpdateSku"
            ><button class="sure">确定</button></view
          >
          <view class="btn-wrapper" v-else @tap="addToCart"
            ><button class="sure">加入购物车</button></view
          >
          <view v-if="hasBottom" class="popup-space"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
var http = require("../../utils/http.js");
var config = require("../../utils/config.js");

export default {
  data() {
    return {
      //存放已选中的值
      selectArr: [],
      //是否选中 存放的是每种规格的选中的下标 因为不确定是多规格还是但规格，所以这里定义数组来判断
      subIndex: [],
      //存放最后选中的商品
      selectshop: {},
      reactiveSpecifications: [],
      reactiveSelectNum: 1,
      shopItemInfo: {},
      selectTitleArr: [],
      selectPic: "",
    };
  },
  props: {
    selectNum: {
      type: Number,
      required: false,
      default: 1,
    },
    skuSelectData: {
      type: Object,
      required: true,
      default: {},
    },
    // specifications: {
    //   type: Object,
    //   required: true,
    //   default: {},
    // }, //spu规格列表
    // shopItemInfo: {
    //   type: Object,
    //   required: true,
    //   default: {},
    // }, //存放要和选中的值进行匹配的数据
    prodId: {
      type: String,
      required: true,
    },
    hasBottom: {
      type: Boolean,
      default: false,
    },
    shopcartItemId: {
      type: String,
      required: false,
    },
    updateSku: {
      type: Boolean,
      required: false,
      default: false,
    },
    attr: {
      type: String,
      required: false,
    },
  },

  computed: {
    canCount() {
      return this.subIndex.some((item) => item === -1);
    },
    fullImagePath() {
      return (path) => config.staticUrl + path;
    },
  },

  watch: {
    //props中的属性不能直接作为响应式属性,为了更新视图,要使用data中的属性
    skuSelectData(newVal) {
      if (Object.entries(newVal).length === 0) {
        return;
      }
      this.shopItemInfo = newVal.attrSkuMap;
      // 更新响应式的属性
      this.selectTitleArr = [];
      this.selectArr = [];
      this.subIndex = [];
      let specificationArr = [];
      specificationArr = Object.entries(newVal.attrvalueMap);
      specificationArr = specificationArr.map(([attrName, attrValues]) => {
        this.selectArr.push("");
        this.subIndex.push(-1);
        return [
          attrName,
          attrValues.map((attrValue) => {
            if (this.shopItemInfo.hasOwnProperty(attrValue.attrValueId)) {
              return { ...attrValue, ishow: true };
            } else {
              return { ...attrValue, ishow: false };
            }
          }),
        ];
      });

      // Array.from(newVal.keys()).map((item) => {
      // 	this.selectArr.push("");
      // 	this.subIndex.push(-1);
      // });
      this.reactiveSpecifications = specificationArr;

      if (!this.updateSku) {
        //打开选择选择框后模拟点击某一个sku
        let findAttrValueKey = false;
        for (const attrValueKey in this.shopItemInfo) {
          let attrValueArr = attrValueKey.split("|");

          if (findAttrValueKey) {
            break;
          }
          if (
            attrValueArr.length === this.reactiveSpecifications.length &&
            this.shopItemInfo[attrValueKey].stocks > 0
          ) {
            findAttrValueKey = true;
            this.selectshop = this.shopItemInfo[attrValueKey];
            for (let i = 0; i < this.reactiveSpecifications.length; i++) {
              let attrValues = this.reactiveSpecifications[i][1];
              for (let j = 0; j < attrValues.length; j++) {
                if (attrValues[j].attrValueId === attrValueArr[i]) {
                  this.skuClick(attrValues[j], i, j);
                  // this.$set(this.subIndex, i, j);
                  // this.$set(this.selectTitleArr, i, attrValues[j].attrValueName);
                  // this.$set(this.selectArr, i, attrValues[j].attrValueId);
                }
              }
            }
          }
        }
      } else {
        //从购物车打开,选择购物车的对应项
        let attrValueIdArr = JSON.parse(this.attr);
        console.log(attrValueIdArr);
        for (let i = 0; i < this.reactiveSpecifications.length; i++) {
          let attrValues = this.reactiveSpecifications[i][1];
          for (let j = 0; j < attrValues.length; j++) {
            if (attrValues[j].attrValueId === attrValueIdArr[i]) {
              this.skuClick(attrValues[j], i, j);
              // this.$set(this.subIndex, i, j);
              // this.$set(this.selectTitleArr, i, attrValues[j].attrValueName);
              // this.$set(this.selectArr, i, attrValues[j].attrValueId);
            }
          }
        }
      }
    },

    selectNum(newVal) {
      this.reactiveSelectNum = newVal;
    },
  },

  methods: {
    skuClick(attr_value, index1, index2) {
      if (attr_value.ishow) {
        if (this.selectArr[index1] != attr_value.attrValueId) {
          //选中其它
          this.$set(this.selectTitleArr, index1, attr_value.attrValueName);
          this.$set(this.selectArr, index1, attr_value.attrValueId);
          this.$set(this.subIndex, index1, index2);
          if (index1 === 0) {
            //主属性图片
            this.selectPic = attr_value.pic;
          }
        } else {
          //取消选中
          this.$set(this.selectTitleArr, index1, "");
          this.$set(this.selectArr, index1, "");
          this.$set(this.subIndex, index1, -1);
          if (index1 === 0) {
            this.selectPic = this.reactiveSpecifications[0][1][0].pic;
          }
        }
        //更新其它规格的可选状态
        this.checkInpath(index1);
        //如果全部选完
        if (this.selectArr.every((item) => item != "")) {
          let attrKeys = this.selectArr.join("|");
          this.selectshop = this.shopItemInfo[attrKeys];
          this.reactiveSelectNum = 1;
        } else {
          this.selectshop = {};
        }
      }
    },
    checkInpath(clickIndex) {
      // console.time('筛选可选路径需要的时间是');
      //循环所有属性判断哪些属性可选
      //当前选中的兄弟节点和已选中属性不需要循环
      for (let i = 0, len = this.reactiveSpecifications.length; i < len; i++) {
        //i==cliIndex 比如这次选中的尺寸, clickIndex就是0,后续对其它属性进行操作
        //注意有可能是取消选中的clickIndex
        //无论选中还是取消,本行中其它按钮的状态都不影响
        if (i == clickIndex) {
          continue;
        }
        const [attrName, attrValues] = this.reactiveSpecifications[i];
        let len2 = attrValues.length;
        for (let j = 0; j < len2; j++) {
          if (this.subIndex[i] != -1 && j == this.subIndex[i]) {
            //这里表示其它规格, 比如颜色中的白色,已经被选中,白色的可选状态肯定不变
            continue;
          }
          let choosed_copy = [...this.selectArr];

          //已选择的数组中添加数据,比如增加黑色,然后去shopItemInfo看路径是否可行
          this.$set(choosed_copy, i, attrValues[j].attrValueId);
          let choosed_copy_str = choosed_copy
            .filter((item) => item !== "" && typeof item !== "undefined")
            .join("|");

          if (this.shopItemInfo.hasOwnProperty(choosed_copy_str)) {
            this.$set(this.reactiveSpecifications[i][1][j], "ishow", true);
          } else {
            this.$set(this.reactiveSpecifications[i][1][j], "ishow", false);
          }
        }
      }
      // console.log(this.specifications)
      // console.timeEnd('筛选可选路径需要的时间是');
    },
    moveHandle() {
      //禁止父元素滑动
    },
    closeSf() {
      this.$emit("close-popup", false);
    },
    changeNum(val) {
      this.reactiveSelectNum = parseInt(val);
    },

    onUpdateSku: function (event) {
      var ths = this;

      uni.showLoading({
        mask: true,
      });
      var params = {
        url: "/shopcart/shopcartItem/updateSku",
        method: "post",
        data: {
          itemCount: this.selectNum,
          prodId: this.prodId,
          skuId: this.selectshop.skuId,
          shopcartItemId: this.shopcartItemId,
        },
        callBack: (res) => {
          uni.hideLoading();
          this.$emit(
            "close-popup",
            true,
            ths.selectshop,
            ths.shopcartItemId,
            ths.selectNum,
            res
          );
        },
      };
      http.request(params);
    },

    addToCart: function (event) {
      // var ths = this;
      uni.showLoading({
        mask: true,
      });
      var params = {
        url: "/shopcart/shopcartItem/changeItem",
        method: "post",
        data: {
          itemCount: this.reactiveSelectNum,
          prodId: this.prodId,
          skuId: this.selectshop.skuId,
        },
        callBack: (res) => {
          //console.log(res);
          this.setData({
            totalCartNum: this.totalCartNum + this.prodNum,
          });
          uni.hideLoading();
          uni.showToast({
            title: "加入购物车成功",
            icon: "none",
          });
          this.$emit("close-popup");
        },
      };
      http.request(params);
    },
  },
};
</script>

<style lang="less">
page {
  background-color: #f4f4f4;
}

/*  弹出层 */
.popup {
  .layer {
    display: flex;
    width: 100%;
    // height: 1014rpx;
    flex-direction: column;
    // min-height: 40vh;
    // max-height: 1014rpx;
    position: fixed;
    z-index: 999;
    bottom: 0;
    border-radius: 10upx 10upx 0 0;
    background-color: #fff;

    .specification-wrapper {
      width: 100%;
      padding: 30rpx 25rpx;
      box-sizing: border-box;

      .specification-wrapper-content {
        width: 100%;
        max-height: 900rpx;
        min-height: 600rpx;

        &::-webkit-scrollbar {
          /*隐藏滚轮*/
          display: none;
        }

        .specification-header {
          width: 100%;
          display: flex;
          flex-direction: row;
          position: relative;
          margin-bottom: 40rpx;

          .specification-left {
            width: 180rpx;
            height: 180rpx;
            flex: 0 0 180rpx;

            .product-img {
              width: 180rpx;
              height: 180rpx;
              background-color: #999999;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center top;
            }
          }

          .specification-right {
            flex: 1;
            padding: 0 35rpx 0 28rpx;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            font-weight: 500;

            .price-content {
              color: #fe3a3a;
              margin-bottom: 20rpx;

              .sign {
                font-size: 28rpx;
              }

              .price {
                font-size: 48rpx;
              }
            }

            .inventory {
              font-size: 24rpx;
              color: #999999;
              margin-bottom: 14rpx;
            }

            .choose {
              font-size: 28rpx;
              color: #333333;
            }
          }
        }

        .specification-content {
          font-weight: 500;

          .specification-item {
            margin-bottom: 40rpx;

            &:last-child {
              margin-bottom: 0;
            }

            .item-title {
              margin-bottom: 20rpx;
              font-size: 28rpx;
              color: #999999;
            }

            .item-wrapper {
              display: flex;
              flex-direction: row;
              flex-flow: wrap;

              .item-content {
                display: inline-block;
                padding: 15rpx 35rpx;
                border-radius: 10rpx;
                background-color: #ffffff;
                color: #333333;
                font-size: 28rpx;
                margin-right: 20rpx;
                border: 2rpx solid #f4f4f4;
                box-sizing: border-box;

                &.actived {
                  border-color: #fe3a3a;
                  color: #fe3a3a;
                }

                &.noactived {
                  background-color: #f4f4f4;
                  border-color: #f4f4f4;
                }
              }
            }
          }

          .sku-number {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20rpx;
            font-size: 28rpx;
            color: #999999;

            .item-title {
              margin-right: auto;
            }
          }
        }
      }

      .close {
        position: absolute;
        top: 30rpx;
        right: 25rpx;
        width: 50rpx;
        height: 50rpx;
        text-align: center;
        line-height: 50rpx;

        .close-item {
          width: 50rpx;
          height: 50rpx;
        }
      }
    }

    .btn-wrapper {
      display: flex;
      width: 100%;
      height: 120rpx;
      flex: 0 0 120rpx;
      align-items: center;
      justify-content: space-between;
      padding: 0 26rpx;
      box-sizing: border-box;

      .layer-btn {
        width: 335rpx;
        height: 76rpx;
        border-radius: 38rpx;
        color: #fff;
        line-height: 76rpx;
        text-align: center;
        font-weight: 500;
        font-size: 28rpx;

        &.add-cart {
          background: #ffbe46;
        }

        &.buy {
          background: #fe3a3a;
        }
      }

      .sure {
        width: 698rpx;
        height: 76rpx;
        border-radius: 38rpx;
        color: #fff;
        line-height: 76rpx;
        text-align: center;
        font-weight: 500;
        font-size: 28rpx;
        background: #fe3a3a;
      }
    }
  }
  .popup-space {
    height: 80rpx;
  }
}
</style>
