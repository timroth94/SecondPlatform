<template>
	<view class="title">
		<text>参数设置</text>
	</view>
	<view class="outter">
		<template v-for="(item,index) in arg">
			<view class="inner">
				<view :class="[item.active ? '' : 'innner-no']" class="inner-left">
					<view>
						<text>{{item.value}}</text>
					</view>
					<text>周期均线</text>
				</view>
				<view class="">
					<switch :checked="item.active" @change="changestatu(index)" style="transform:scale(0.8)"
						color="rgba(255, 94, 59, 1)" />
				</view>
			</view>
		</template>
	</view>
	<Depart></Depart>
	<view class="title">
		<text>参数说明</text>
	</view>
	<view class="classfic">
		<text>这里是均线参数的说明这里是均线参数的说明这里是均线参数
			的说明这里是均线参数的说明这里是均线参数的说明这里是均线参
			数的说明这里是均线参数的说明这里是均线参数的说明</text>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const arg = ref([{
			value: 5,
			active: true
		},
		{
			value: 10,
			active: true
		},
		{
			value: 20,
			active: true
		},
		{
			value: 30,
			active: false
		},
		{
			value: 60,
			active: false
		},
		{
			value: 90,
			active: false
		},
		{
			value: 120,
			active: false
		},
		{
			value: 250,
			active: false
		}
	])

	const changestatu = (index) => {
		arg.value[index].active = !arg.value[index].active
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
		margin: 16rpx 32rpx 32rpx;
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

	.innner-no {
		color: rgba(153, 153, 153, 1);
	}
</style>
