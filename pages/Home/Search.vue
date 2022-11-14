<template>
	<view>
		<Search v-model="input" placeholder="请输入藏品名称/序列号" @reset='reset' @addhistory='addhistory'></Search>
	</view>
	<view v-if="History.length">
		<view class="search-history">
			<view class="search-history-top">
				<text>历史记录</text>
				<text @click="resetHistoy">清空</text>
			</view>
			<view class="search-history-buttom">
				<template v-for="(item,index) in History" :key="index">
					<text class="search-history-text">{{item}}</text>
				</template>
			</view>
		</view>
		<Depart></Depart>
	</view>
	<view class="Hot" v-if="!input">
		<view class="Hot-top">
			<text>大家都在搜</text>
		</view>
		<view class="Hot-list">
			<template v-for="(item,index) in hotList" :key="index">
				<text class="Hot-item">{{item}}</text>
			</template>
		</view>
	</view>
	<view v-if="input">
	<view class="billboard">
		<template v-for="(item,index) in search_title" :key="index">
			<Title :titleIndex="index" :activeValue="billboard_index" @click.native="changebillboardindex(index)">
				{{item}}</Title>
		</template>
	</view>
	<view class="category">
		<text>藏品</text>
	</view>
	<view class="goods">
		<template v-for="(item,index) in goods" :key="index">
			<view class="goods-list">
				<view>
					<text class="goods-title">{{item.name}}</text>
					<text class="goods-number">{{item.no}}</text>
				</view>
				<view class="goods-button">按钮</view>
			</view>
		</template>
	</view>
	<view>
		<button plain="true" class="more-button">查看更多 ></button>
	</view>
	<Depart></Depart>
	<view class="category">
		<text>板块</text>
	</view>
	<view class="goods">
		<template v-for="(item,index) in series" :key="index">
			<view class="goods-list">
				<view>
					<text class="goods-title">{{item.name}}</text>
					<text class="goods-number">{{item.no}}</text>
				</view>
				<view class="goods-button">按钮</view>
			</view>
		</template>
	</view>
	</view>


</template>

<script setup>
	import {
		ref
	} from "vue";

	const hotList = ['莎士比亚', '王尔德', '麦克白', '王晓波', '路遥', 'unkown']
	const search_title = ['全部', '藏品', '板块']
	

	const billboard_index = ref(0)
	const changebillboardindex = (index) => billboard_index.value = index
	const input = ref('藏')
	const reset = () => input.value = ''
	const History = ref([])
	const resetHistoy = () => History.value = []
	const addhistory = () => {
		History.value.push(input.value)
	}

	const goods = [{
			name: '藏品1号',
			no: '000021'
		},
		{
			name: '藏品2号',
			no: '000051'
		},
		{
			name: '藏品3号',
			no: '0000311'
		},
		{
			name: '藏品155号',
			no: '0000213'
		},
		{
			name: '藏品1684号',
			no: '00002131'
		},
		{
			name: '藏品14号',
			no: '0000211'
		}
	]
	
	const series = [
		{
			name: '作家系列',
			no: '000231'
		},
		{
			name: '画家系列',
			no: '0002351'
		}
	]
</script>

<style scoped>
	.search-history {
		margin: 32rpx 32rpx 38rpx;
	}

	.search-history-top {
		display: flex;
		justify-content: space-between;
		color: rgb(102, 102, 102);
	}

	.search-history-buttom {
		display: flex;
		flex-wrap: wrap;
	}

	.search-history-text {
		border-radius: 28rpx;
		font-size: 28rpx;
		background-color: rgb(250, 250, 250);
		padding: 8rpx 24rpx;
		margin: 32rpx 32rpx 0 0;
	}


	.Hot-top {
		display: flex;
	}

	.Hot-top text {
		font-size: 26rpx;
		color: rgb(102, 102, 102);
		margin: 32rpx 8rpx 8rpx 32rpx;
	}

	.Hot-list {
		display: flex;
		flex-wrap: wrap;
	}

	.Hot-item {
		font-size: 28rpx;
		padding: 24rpx 226rpx 24rpx 32rpx;
	}

	.billboard {
		display: flex;
		padding: 32rpx 32rpx 16rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.category {
		margin: 30rpx 0 0 32rpx;
		color: rgb(102, 102, 102);
		font-size: 26rpx;
	}

	.goods {
		margin: 0 32rpx;
	}

	.goods-list {
		padding: 26rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.goods-button {
		padding: 4rpx;
		color: rgb(239, 117, 10);
	}

	.goods-title {
		font-size: 28rpx;
		margin-right: 16rpx;
	}

	.goods-number {
		font-size: 28rpx;
		color: rgb(102, 102, 102);
	}

	.more-button {
		padding: 16rpx 0;
		font-size: 28rpx;
		border: none;
		color: rgb(153, 153, 153);
		display: flex;
		justify-content: space-around;
	}
</style>
