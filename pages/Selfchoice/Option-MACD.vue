<template>
	<view class="title">
		<text>参数设置</text>
	</view>
	<view class="outter">
		<template v-for="(item,index) in arg">
			<view class="inner">
				<view class="inner-left">
					<view>
						<text>{{item.value}}</text>
					</view>
					<text>{{item.text}}</text>
				</view>
				<view class="button">
					<view class="button-minus" @click="minus(index)">
						<view class="button-minus-item"></view>
					</view>
					<view class="button-add" @click="add(index,item.type)">
						<view class="button-minus-item"></view>
						<view class="button-add-item"></view>
					</view>
				</view>
			</view>
		</template>
	</view>
	<Depart></Depart>
	<view class="title">
		<text>参数说明</text>
	</view>
	<view class="classfic">
		<text>这里是均线参数的说明这里是均线参数的说明这里是均线参数的说明这里是均线参数的说明这里是均线参数的说明这里是均线参数的说明这里是均线参数的说明这里是均线参数的说明</text>
	</view>


</template>

<script setup>
	import {
		ref
	} from 'vue'
	const arg = ref([{
			value: 12,
			text: '日快线移动平均(2-60)',
			type: 1
		},
		{
			value: 26,
			text: '日慢线移动平均(2-90)',
			type: 2
		},
		{
			value: 9,
			text: '日均移动线(2-60)',
			type: 1
		}
	])

	const minus = (index) => {
		if (arg.value[index].value < 3) {
			uni.showToast({
				title: '已是最低值',
				icon: 'none'
			})
		} else {
			arg.value[index].value = arg.value[index].value - 1
		}
	}
	const add = (index, type) => {
		if (arg.value[index].value == 60 && type == 1) {
			uni.showToast({
				title: '已是最大值',
				icon: 'none'
			})
		} else if (arg.value[index].value == 90 && type == 2) {
			uni.showToast({
				title: '已是最大值',
				icon: 'none',
			})
		} else {
			arg.value[index].value = arg.value[index].value + 1
		}
	}
</script>

<style scoped>
	.title {
		padding: 16rpx 0 16rpx 32rpx;
		font-size: 28rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.outter {
		display: flex;
		flex-direction: column;
		margin: 0 32rpx 32rpx;
	}

	.inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
		padding: 16rpx 0;
	}

	.inner-left {
		display: flex;
		align-items: center;
	}

	.inner-left> :nth-child(1) {
		margin-right: 16rpx;
		width: 128rpx;
		height: 64rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2rpx black solid;
		border-radius: 16rpx;
	}

	.inner-left> :nth-child(2) {
		font-size: 30rpx;
	}

	.classfic {
		padding: 24rpx 32rpx;
		font-size: 28rpx;
		color: rgba(102, 102, 102, 1);
	}

	.button {
		display: flex;
		align-items: center;
	}

	.button-minus-item {
		width: 21rpx;
		height: 3rpx;
		background-color: rgba(255, 94, 59, 1);
		margin: 20rpx 12rpx;
	}

	.button-add-item {
		width: 3rpx;
		height: 21rpx;
		background-color: rgba(255, 94, 59, 1);
		position: absolute;
		top: 11rpx;
		left: 21rpx;
	}

	.button-minus,
	.button-add {
		border: 2rpx rgba(255, 94, 59, 1) solid;
		border-radius: 16rpx;
	}

	.button-minus {
		margin-right: 28rpx;
	}

	.button-add {
		position: relative;
	}
</style>
