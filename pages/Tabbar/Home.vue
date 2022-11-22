<template>
	<Search class="what" placeholder="请输入藏品名称/序列号" @gotosearch="gotosearch"></Search>
	<view class="banner">
		<swiper indicator-dots circular autoplay="" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in Image_Banner" :key="index">
				<view>
					<img :src="`/static/Image/${item}.jpg`" :alt="item" height="150" width="373">
				</view>
			</swiper-item>
		</swiper>
	</view>
	<view class="business">
		<template v-for="(item,index) in Image_Business" :key="index">
			<view class="business-item">
				<img :src="item.url" :alt="item.name" width="32" height="32">
				<text>{{item.name}}</text>
			</view>
		</template>
	</view>
	<Depart></Depart>
	<view class="swiper-number">
		<swiper :indicator-dots="true" :autoplay="false" circular>
			<swiper-item>
				<view class="number">
					<template v-for="(item,index) in number_Display" :key="index">
						<view class="number-list">
							<text>{{item.name}}</text>
							<text :class="[(item.wave > 0) ? 'price-up' : 'price-down']">{{item.price}}</text>
							<text :class="[(item.wave > 0) ? 'wave-up' : 'wave-down']">{{item.wave}}%</text>
						</view>
					</template>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="number">
					<template v-for="(item,index) in number_Display" :key="index">
						<view class="number-list">
							<text>{{item.name}}</text>
							<text :class="[(item.wave > 0) ? 'price-up' : 'price-down']">{{item.price}}</text>
							<text :class="[(item.wave > 0) ? 'wave-up' : 'wave-down']">{{item.wave}}</text>
						</view>
					</template>
				</view>
			</swiper-item>
		</swiper>
	</view>
	<Depart></Depart>
	<view class="billboard">
		<template v-for="(item, index) in Billboard" :key="index">
			<Title :titleIndex="index" :activeValue="billboardActiveValue" @click.native="changebillboardindex(index)"
				class="selftitle">
				{{item}}
			</Title>
		</template>
	</view>
	<view class="billboard-categlory">
		<text>产品名称</text>
		<text>最新价</text>
		<text>24h涨跌幅</text>
		<text>24h成交量</text>
	</view>
	<view class="billboard-list">
		<template v-for="(item,index) in Billboard_list" :key="index">
			<view class="billboard-list-item">
				<view class="billboard-list-id">
					<text class="billboard-name">{{item.name}}</text>
					<text class="billboard-number">{{item.number}}</text>
				</view>
				<text class="billboard-price"
					:class="[(item.wave > 0) ? 'price-up' : 'price-down']">{{item.price}}</text>
				<text class="billboard-wave" :class="[(item.wave > 0) ? 'wave-up' : 'wave-down']">{{item.wave}}%</text>
				<text class="billboard-total">{{item.total}}</text>
			</view>
		</template>
	</view>
	<view>
		<button plain="true" class="more-button">查看更多 ></button>
	</view>
	<Depart></Depart>
	<view class="billboard">
		<template v-for="(item, index) in News" :key="index">
			<Title :titleIndex="index" :activeValue="newsActiveValue" @click.native="changenewsindex(index)"
				class="selftitle">
				{{item}}
			</Title>
		</template>
	</view>
	<view class="News">
		<template v-for="(item,index) in News_item" :key="index">
			<view class="News-item">
				<text class="News-title">{{item.title}}</text>
				<view class="News-meta">
					<text>{{item.author}}</text>
					<text>{{item.date}}</text>
				</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	const Image_Banner = ["spyfamily1", "spyfamily2", "spyfamily3"]
	const Image_Business = [{
			name: '充值',
			url: '/static/Image/spyfamily1.jpg'
		},
		{
			name: '提现',
			url: '/static/Image/spyfamily2.jpg'
		},
		{
			name: '订单',
			url: '/static/Image/spyfamily3.jpg'
		},
		{
			name: '拍卖',
			url: '/static/Image/spyfamily1.jpg'
		}
	]
	const number_Display = [{
			name: '藏品名称',
			price: '200.00',
			wave: '+0.5',
		},
		{
			name: '藏品名称',
			price: '205.00',
			wave: '-0.5',
		},
		{
			name: '藏品名称',
			price: '210.00',
			wave: '+0.5',
		}
	]
	const Billboard_list = [{
			name: '藏品名称',
			number: '0001',
			price: '200.00',
			wave: '+1.11',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: '200.00',
			number: '0001',
			wave: '+1.11',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: '200.00',
			number: '0001',
			wave: '+1.11',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: '200.00',
			number: '0001',
			wave: '-1.11',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: '200.00',
			number: '0001',
			wave: '+1.11',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: '200.00',
			number: '0001',
			wave: '-1.11',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: '200.00',
			number: '0001',
			wave: '+1.11',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: '200.00',
			number: '0001',
			wave: '+1.11',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: '200.00',
			number: '0001',
			wave: '-1.11',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: '200.00',
			number: '0001',
			wave: '+1.11',
			total: '55555'
		}
	]
	const News_item = [{
			title: '这是标题这是标题这是标题这是标题这是标题这是标题这是标题',
			author: 'admin',
			date: '1分钟前'
		},
		{
			title: '这是标题',
			author: 'admin',
			date: '昨天'
		},
		{
			title: '这是标题',
			author: 'admin',
			date: '2022/8/9 15:21'
		},
		{
			title: '这是标题',
			author: 'admin',
			date: '2022/8/9 15:21'
		}
	]

	const Billboard = ['热门', '涨幅榜', '跌幅榜', '24h成交量']
	const News = ['动态', '要闻', '热门', '自选']
	const newsActiveValue = ref(0)
	const changenewsindex = (index) => newsActiveValue.value = index
	const billboardActiveValue = ref(0)
	const changebillboardindex = (index) => billboardActiveValue.value = index
	const gotosearch = () => uni.navigateTo({
		url: '../Home/Search',
	});
</script>

<style scoped>
	.banner {
		width: 90%;
		margin-left: 5%;
		margin-top: 32rpx;
		border-radius: 32rpx;
		overflow: hidden;
	}

	.business {
		width: 100%;
		display: flex;
		margin-top: 32rpx;
		justify-content: space-around;
	}

	.business-item {
		display: flex;
		flex-direction: column;
		line-height: 96rpx;
	}

	.number-list {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.number {
		display: flex;
		justify-content: space-around;
		margin-top: 16rpx;
	}

	.swiper-number {
		height: 206rpx;
		overflow: hidden;
	}

	.selftitle {
		margin-right: 48rpx;
	}

	.billboard {
		display: flex;
		padding: 32rpx 32rpx 16rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}


	.billboard-categlory {
		font-size: 28rpx;
		color: rgb(102, 102, 102);
		margin: 30rpx 32rpx 16rpx;
	}

	.billboard-categlory text:nth-child(1) {
		margin-right: 172rpx;
	}

	.billboard-categlory text:nth-child(2) {
		margin-right: 26rpx;
	}

	.billboard-categlory text:nth-child(3) {
		margin-right: 24rpx;
	}

	.billboard-list {
		display: flex;
		flex-direction: column;
	}

	.billboard-name {
		font-size: 30rpx;
	}

	.billboard-number {
		font-size: 24rpx;
		color: rgb(102, 102, 102);
		margin-top: 4rpx;
	}

	.billboard-list-item {
		display: flex;
		padding: 16rpx 0;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
		margin: 0 32rpx;
	}

	.billboard-list-id {
		display: flex;
		flex-direction: column;
		width: 192rpx;
		margin-right: 32rpx;
	}


	/* 可以用伪类改写 */
	.billboard-price,
	.billboard-wave,
	.billboard-total {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 32rpx;
	}


	.billboard-price,
	.billboard-wave {
		margin: 0 24rpx 0 0;

	}

	.billboard-price {
		width: 144rpx;
	}

	.billboard-wave {
		width: 136rpx;
	}

	.billboard-total {
		width: 134rpx;
	}

	.price-up,
	.price-down {
		font-size: 32rpx;
	}

	.price-down {
		color: rgba(62, 179, 30, 1);
	}

	.price-up {
		color: red;
	}

	.wave-up {
		color: red;
	}

	.wave-down {
		color: rgba(62, 179, 30, 1);
	}

	.more-button {
		padding: 16rpx 0;
		font-size: 28rpx;
		border: none;
		color: rgb(153, 153, 153);
		display: flex;
		justify-content: space-around;
	}

	.News {
		margin: 6rpx 32rpx 0;
	}

	.News-item {
		display: flex;
		flex-direction: column;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
		padding: 24rpx 0;
	}

	.News-title {
		margin-bottom: 24rpx;
	}

	.News-meta {
		font-size: 26rpx;
		color: rgb(153, 153, 153);
		display: flex;
		justify-content: space-between;
	}
</style>
