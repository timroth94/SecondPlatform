<template>
	<view class="Title">
		<template v-for="(item ,index) in title" :key="index">
			<Title :titleIndex="index" :activeValue="active_value" @click.native="changeactive(index)">{{item}}</Title>
		</template>
	</view>
	<view class="main">
		<view class="main-top">
			<text>买卖类别</text>
			<text>产品名称</text>
			<text>委托价/委托数/成交数</text>
			<text>操作</text>
		</view>
	</view>


</template>

<script setup>
	import {
		ref
	} from "vue";

	const title = ['委托订单', '历史委托', '历史成交']

	const active_value = ref(0)
	const changeactive = (index) => active_value.value = index
</script>

<style scoped>
	
	.Title {
		display: flex;
		justify-content: space-around;
		padding: 32rpx 0 18rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.main {
		margin: 30rpx 32rpx 0;
	}

	.main> :nth-child(1) {
		font-size: 24rpx;
		color: rgb(102, 102, 102);
	}

	.main-top> :nth-child(2) {
		margin: 0 126rpx 0 32rpx;
	}

	.main-top> :nth-child(3) {
		margin-right: 48rpx;
	}

</style>
