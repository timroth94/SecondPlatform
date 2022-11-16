<template>
	<view class="main">
		<view class="main-top">
			<text>买卖类别</text>
			<text>产品名称</text>
			<text>委托价/委托数/成交数</text>
			<text>操作</text>
		</view>
	</view>
	<view class="Test">
	<view class="test1">
		<view class="top0">
		<text class="top">买入</text>
		</view>
		<view class="hello">
		<text class="buttom">09:56:03</text>
		</view>
	</view>
	<view class="test2">
		<text class="top2">春夏秋冬-春</text>
		<view class="hello2">
		<text class="buttom">000002</text>
		</view>
	</view>

</view>
</template>

<script setup>

</script>

<style scoped>
	
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

	.test1{
		width: 100rpx;		
		padding: 32rpx 0;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
		margin-right: 28rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		
	}
	
	
	.Test{
		display: flex;
		margin: 0 32rpx;
	}
	
	.test2{
		width: 192rpx;
		padding: 32rpx 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		
	}
	
	.top{
		background-color: rgba(255, 94, 59, 1);
		padding: 0 12rpx;
		font-size: 22rpx;
		border-radius: 12rpx;
		
	}
	
	.buttom{
		font-size: 24rpx;
		color: rgba(102, 102, 102, 1);
	}
	
	
	.top2{
		font-size: 30rpx;
		line-height: 42rpx
	}
	.top0{
		line-height: 42rpx;
		
	}
/* 	.hello{
		margin-top: 14rpx;
	}
	.hello2{
		margin-top: 8rpx;
	} */
</style>
