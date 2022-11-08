<template>
	<scroll-view scroll-y="true">
		<view class="top-search">
			<view class="search">
				<svg width="16" height="16" viewBox="0 0 32 32" class="search-search">
					<g stroke="#ff7b00" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
						<circle cx="14" cy="14" r="12" />
						<path d="m23 23l7 7" />
					</g>
				</svg>
				<input type="text" placeholder="请输入藏品名称/序列号" placeholder-class="placeholder" class="search-input" />
			</view>
			<view class="search-message">
				<svg width="24" height="24" viewBox="0 0 24 24">
					<g stroke="#ff7b00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
						<path
							d="M17 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm-5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm-5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z" />
						<path
							d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0 0 12 22Z" />
					</g>
				</svg>
			</view>
		</view>
		<view class="banner">
			<swiper indicator-dots autoplay circular :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in Image_Banner" :key="index">
					<view class="swiper-item">
						<img :src="`/static/Image/${item}.jpg`" :alt="item" height="150" width="351">
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
		<view class="depart"></view>
		<view class="swiper-number">
			<swiper :indicator-dots="true" :autoplay="false">
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

				<swiper-item>

				</swiper-item>

			</swiper>
		</view>
		<view class="depart"></view>
		<view>
			<view class="billboard">
				<template v-for="(item,index) in Billboard" :key="index">
					<view class="billboard-item">
						<text class="billboard-top" :class="[(Billboard_index == index) ? 'billboard-active' : '']"
							@click="changebillboardindex(index)">{{item}}</text>
						<view :class="[(Billboard_index == index) ? 'decorate' : '']"></view>
					</view>
				</template>
			</view>
		</view>
		<view class="billboard-categlory">
			<text>产品名称</text>
			<text>最新价</text>
			<text>24h涨跌幅</text>
			<text>24h成交量</text>
		</view>
		<!-- 此处样式是否应该固定? -->
		<view class="billboard-list">
			<template v-for="(item,index) in Billboard_list" :key="index">
				<view class="billboard-list-item">
					<view class="billboard-list-id">
						<text class="billboard-name">{{item.name}}</text>
						<text class="billboard-number">{{item.number}}</text>
					</view>
					<text class="billboard-price">{{item.price}}</text>
					<text class="billboard-wave">{{item.wave}}</text>
					<text class="billboard-total">{{item.total}}</text>
				</view>
			</template>
		</view>
		<view>
			<!-- 是否换成text? -->
			<button plain="true" class="more-button">查看更多 ></button>
		</view>
		<view class="depart"></view>
		<view>
			<view class="billboard">
				<template v-for="(item,index) in News" :key="index">
					<view class="billboard-item">
						<text class="billboard-top" :class="[(News_index == index) ? 'billboard-active' : '']"
							@click="changenewsindex(index)">{{item}}</text>
						<view :class="[(News_index == index) ? 'decorate' : '']"></view>
					</view>
				</template>
			</view>
		</view>
		
		
		
		
		
		
		
	</scroll-view>
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
			wave: '+0.5%',
		},
		{
			name: '藏品名称',
			price: '205.00',
			wave: '-0.5%',
		},
		{
			name: '藏品名称',
			price: '210.00',
			wave: '+0.5%',
		}
	]
	const Billboard_list = [{
			name: '藏品名称',
			number: '0001',
			price: 200,
			wave: '+1.11%',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: 200,
			number: '0001',
			wave: '+1.11%',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: 200,
			number: '0001',
			wave: '+1.11%',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: 200,
			number: '0001',
			wave: '+1.11%',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: 200,
			number: '0001',
			wave: '+1.11%',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: 200,
			number: '0001',
			wave: '+1.11%',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: 200,
			number: '0001',
			wave: '+1.11%',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: 200,
			number: '0001',
			wave: '+1.11%',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: 200,
			number: '0001',
			wave: '+1.11%',
			total: '55555'
		},
		{
			name: '藏品名称',
			price: 200,
			number: '0001',
			wave: '+1.11%',
			total: '55555'
		}
	]
	// const Billboard_categlory = ['产品名称', '最新价', '24h涨跌幅', '24h成交量']
	const Billboard = ['热门', '涨幅榜', '跌幅榜', '24h成交量']
	const News = ['动态', '要闻', '热门', '自选']
	// const 

	const Billboard_index = ref(0)
	const News_index = ref(0)
	const changebillboardindex = (index) => Billboard_index.value = index
	const changenewsindex = (index) => News_index.value = index
	
</script>

<style scoped>
	.top-search {
		display: flex;
		align-items: center;
		margin-left: 1rem;
		margin-top: 1rem;
	}

	.search {
		width: 80%;
		display: flex;
		align-items: center;
		background-color: rgb(250, 250, 250);
		border-radius: 1.5rem;
		padding: 0.5rem;
	}

	.search-search {
		margin-right: 0.5rem;
	}

	.search-input {
		width: 100%;
	}

	.search-message {
		display: flex;
		margin-left: 1rem;
	}

	.banner {
		width: 90%;
		margin-left: 5%;
		margin-top: 1rem;
		border-radius: 1rem;
		overflow: hidden;
	}

	.placeholder {
		color: rgb(211, 211, 211);
	}

	.business {
		width: 100%;
		display: flex;
		margin-top: 1rem;
		justify-content: space-around;
	}

	.business-item {
		display: flex;
		flex-direction: column;
		line-height: 3rem;
	}

	.depart {
		width: 100%;
		height: 20rpx;
		background-color: rgb(243, 243, 243);
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

	.price-up {
		color: red;
		font-size: 32rpx;
		margin-top: 12rpx;
	}

	.price-down {
		color: green;
		font-size: 32rpx;
		margin-top: 12rpx;
	}

	.wave-up {
		color: red;
		font-size: 24rpx;
		margin-top: 8rpx;
	}

	.wave-down {
		color: green;
		font-size: 24rpx;
		margin-top: 8rpx;
	}

	.swiper-number {
		height: 206rpx;
		overflow: hidden;
	}

	.billboard-top {
		font-size: 32rpx;
	}

	.billboard-active {
		color: rgb(255, 94, 59);
	}

	.billboard {
		display: flex;
		justify-content: space-between;
		margin: 32rpx 188rpx 0 32rpx;
		padding-bottom: 18rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.decorate {
		width: 32rpx;
		height: 4rpx;
		background-color: rgb(255, 94, 59);
		border-radius: 4rpx;
		position: relative;
		bottom: -18rpx;
	}

	.billboard-item {
		display: flex;
		flex-direction: column;
		align-items: center;
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
	.billboard-price {
		width: 144rpx;
		margin-right: 24rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.billboard-wave {
		width: 136rpx;
		margin-right: 24rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.billboard-total {
		width: 134rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	
	.more-button{
		padding: 16rpx 0;
		font-size: 28rpx;
		border: none;
		color: rgb(153, 153, 153);
		display: flex;
		justify-content: space-around;
	}
</style>
