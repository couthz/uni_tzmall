<template>
	<view class="timelineItem">
		<view class="timeItem">

			<view class="line" :style="isEndNode == true? '': 'width: 1px'">
				<view class="out" :style="{background: outColor == '' ? '' : outColor}">
					<view class="inner" :style="{background: innerColor == '' ? '' : innerColor}"></view>
				</view>
			</view>
			<view class="rightContent">
				<slot></slot>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			isEndNode:{
				type:Boolean,
				default: false
			},
			leftTime:{
				type:String,
				default:''
			},
			innerColor:{
				type:String,
				default:''
			},
			outColor:{
				type:String,
				default:''
			},
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="less">
	.timelineItem {
		.timeItem {
			display: flex;
			.leftTime {
				width: 135rpx;
				padding: 0 10rpx;
				font-size:22rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
				margin-right: 10rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.line {
				background:rgba(204,204,204,1);
				position: relative;
				.out {
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					justify-content: center;
					align-items: center;
					width: 28rpx;
					height: 28rpx;
					background : rgba(236,104,23,0.6);
					border-radius: 50%;
					.inner {
						width: 20rpx;
						height: 20rpx;
						background : rgba(236,104,23,1);
						border-radius: 50%;
					}
				}
			}
			.rightContent {
				flex: 1;
				padding: 0 10rpx 40rpx;
				margin-left: 20rpx;
				min-height: 50rpx;
			}
		}
	}
</style>
