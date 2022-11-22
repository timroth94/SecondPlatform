<template>
	<Search></Search>
	<view class="title-top">
		<text :class="[ismanage ? '' : 'active']" @click="isRecommend">推荐</text>
		<text :class="[ismanage ? 'active' : '']" @click="isManage">管理</text>
	</view>
	<view class="series">
		<template v-for="(item,index) in displaylist" :key="index">
			<view class="series-item" @click="changeitem(index)">
				<view><b>{{item.name}}</b></view>
				<view>{{item.price}}</view>
				<view>
					<text>{{item.marketing}}单</text>
					<text>{{item.wave}}%</text>
				</view>
				<view :class="[(index == activeindex) ? 'decorate' : '']"></view>
			</view>
		</template>
		<view class="series-tool">
			<view>
				<text>分析分析</text>
			</view>
			<view>
				<text>设置设置</text>
			</view>
		</view>
	</view>
	<Depart></Depart>
	<view class="title">
		<template v-for="(item,index) in title" :key="index">
			<Title :titleIndex="index" :activeValue="titleindex" @click.native="changetitle(index)" class="selftitle">
				{{item}}</Title>
		</template>
	</view>
	<view class="self">
		<view class="self-title">
			<text>产品名称</text>
			<text>最新价</text>
			<text>24h涨跌幅</text>
			<text>24h成交量</text>
		</view>
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
	<view class="buttom"><b>+ 自选藏品</b></view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	const ismanage = ref(false)
	const isManage = () => ismanage.value = true
	const isRecommend = () => ismanage.value = false
	const displaylist = ref([{
			name: '藏品系列名称',
			price: '315.00',
			marketing: 55,
			wave: '+4.86'
		},
		{
			name: '藏品系列名称',
			price: '548.00',
			marketing: '55',
			wave: '+4.86'
		},
		{
			name: '藏品系列名称',
			price: '29.00',
			marketing: '55',
			wave: '+4.86'
		},
	])
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

	const title = ['自选', '持有']
	const activeindex = ref(0)
	const changeitem = (index) => activeindex.value = index
	const titleindex = ref(0)
	const changetitle = (index) => {
		titleindex.value = index
	}
</script>

<style scoped>
	.title-top {
		display: flex;
		justify-content: space-between;
		padding: 0 32rpx 18rpx;
		margin-top: 32rpx;
		font-size: 30rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.active {
		color: rgba(255, 94, 59, 1);
		font-size: 32rpx;
		font-weight: 700;
	}

	.series {
		margin: 0 32rpx;
		padding: 22rpx 0 14rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.series-tool {
		display: flex;
		flex-direction: column;
		font-size: 22rpx;
		color: rgba(153, 153, 153, 1);
	}

	.series-tool> :nth-child(1) {
		margin-bottom: 56rpx;
	}

	.series-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.series-item> :nth-child(1) {
		font-size: 28rpx;
		margin-bottom: 12rpx;
	}

	.series-item> :nth-child(3) {
		font-size: 24rpx;
		margin-top: 8rpx;
	}

	.series-item> :nth-child(2) {
		font-size: 32rpx;
	}

	.series-item> :nth-child(2),
	.series-item> :nth-child(3) {
		color: rgba(255, 44, 44, 1);
	}

	.series-item> :nth-child(3)> :nth-child(1) {
		margin-right: 36rpx;
	}

	.title {
		display: flex;
		padding: 34rpx 0 18rpx 32rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.self {
		padding: 32rpx;
	}

	.self> :nth-child(1) {
		color: rgba(153, 153, 153, 1);
		font-size: 28rpx;
	}

	.selftitle {
		margin-right: 48rpx;
	}

	.self-title> :nth-child(1) {
		margin-right: 172rpx;
	}

	.self-title> :nth-child(2) {
		margin-right: 26rpx;
	}

	.self-title> :nth-child(3) {
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

	.buttom {
		margin: 32rpx 32rpx 20rpx;
		background-color: rgba(250, 250, 250, 1);
		padding: 22rpx;
		display: flex;
		justify-content: center;
		border-radius: 24rpx;
		color: rgba(255, 94, 59, 1);
	}
</style>
