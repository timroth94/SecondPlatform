<template>
	<view class="top">
		<view class="setting-top-bar">
			<template v-for="(item,index) in topbar" :key="index">
				<text :class="[(index == activevalue) ? 'active-class' : 'noactive']" @click="changeactive(index)">
					{{item}}
				</text>
			</template>
		</view>
	</view>
	<view class="action">
		<template v-for="(item,index) in action" :key="index">
			<Title :titleIndex='index' :activeValue='titleactivevalue' @click.native="changetitle(index)">{{item}}
			</Title>
		</template>
	</view>
	<view class="main">
		<view class="main-option1">
			<text>限价委托</text>
			<view class="trangle">
			</view>
		</view>
		<view class="main-option2">
			<input type="text" value="" placeholder="输入名称/序列/编号" />
			<view class="trangle">
			</view>
		</view>
	</view>
	<view class="info">
		<view class="info-price">
			<view class="price-sale">
				<template v-for="(item,index) in sale_info" :key="index">
					<view class="price-item1">
						<text>卖{{5-index}}：<text class="sale">{{item.price}}</text></text>
						<text>{{item.amount}}</text>
					</view>
				</template>
			</view>
			<view class="price-buy">
				<template v-for="(item,index) in buy_info" :key="index">
					<view class="price-item2">
						<text>买{{index+1}}：<text class="buy">{{item.price}}</text></text>
						<text>{{item.amount}}</text>
					</view>
				</template>
			</view>
		</view>
		<view class="info-action">
			<view class="action-top">
				<text>-</text>
				<input type="text" value="" class="input" placeholder="输入买入价格">
				<text>+</text>
			</view>
			<view class="newprice">
				最新价： 
				<text :class="[newprice.wave>0 ? 'price-up' : 'price-down']">{{newprice.price}} {{newprice.wave}}</text>
			</view>
			<view class="action-top">
				<text>-</text>
				<input type="text" value="" class="input" placeholder="输入买入数量">
				<text>+</text>
			</view>
			<view class="newprice">金额约：5555.00</view>
			<view class="button">
				卖出
			</view>
		</view>
	</view>
	<Depart></Depart>
	<view class="">
		
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from "vue";

	const topbar = ['现货', '合约']
	const activevalue = ref(0)
	const changeactive = (index) => {
		activevalue.value = index
	}
	const action = ['买入', '卖出', '撤单', '委托成交', '持仓']
	const titleactivevalue = ref(0)
	const changetitle = (index) => {
		titleactivevalue.value = index
	}
	const newprice = reactive({
		price: '150.00',
		wave: '-1.50%'
	})
	const sale_info = ref([{
			price: '160.00',
			amount: 55
		},
		{
			price: '160.00',
			amount: 55
		},
		{
			price: '160.00',
			amount: 55
		},
		{
			price: '160.00',
			amount: 55
		},
		{
			price: '160.00',
			amount: 55
		}
	])
	const buy_info = ref([{
			price: '160.00',
			amount: 55
		},
		{
			price: '160.00',
			amount: 55
		},
		{
			price: '160.00',
			amount: 55
		},
		{
			price: '160.00',
			amount: 55
		},
		{
			price: '160.00',
			amount: 55
		}
	])
</script>

<style scoped>
	.top {
		display: flex;
		justify-content: center;
		padding: 32rpx 0;
	}

	.setting-top-bar {
		display: flex;
		font-size: 32rpx;
	}

	.setting-top-bar> :nth-child(1),
	.setting-top-bar> :nth-child(2) {
		padding: 10rpx 56rpx;
	}

	.setting-top-bar> :nth-child(1) {
		border-radius: 16rpx 0 0 16rpx;
		border: 2rpx rgba(255, 154, 68, 1) solid;
	}

	.setting-top-bar> :nth-child(2) {
		border-radius: 0 16rpx 16rpx 0;
		border: 2rpx rgba(255, 154, 68, 1) solid;
	}

	.active-class {
		background: linear-gradient(to bottom, rgba(255, 154, 68, 1), rgba(255, 94, 59, 1));
		color: white;
	}

	.noactive {
		color: rgba(255, 154, 68, 1);
	}

	.action {
		display: flex;
		justify-content: space-around;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
		padding-bottom: 16rpx;
	}

	.main {
		margin: 30rpx 24rpx 0;
		font-size: 30rpx;
		display: flex;
	}

	.trangle {
		width: 0;
		border-top: 12rpx black solid;
		border-left: 12rpx transparent solid;
		border-right: 12rpx transparent solid;
		margin-left: 52rpx;
		position: relative;
		top: 4rpx;
	}


	.main-option2,
	.main-option1 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 2rpx rgba(242, 242, 242, 1) solid;
		border-radius: 24rpx;
	}

	.main-option1 {
		padding: 20rpx 24rpx 20rpx 52rpx;
	}

	.main-option1{
		width: 272rpx;
	}
	.main-option2 {
		padding: 20rpx 24rpx 20rpx 30rpx;
		margin-left: 24rpx;
		width: 406rpx;
	}

	.main-option2> :nth-child(2) {
		margin-left: 28rpx;
	}

	.info {
		margin: 32rpx 0 0 24rpx;
		display: flex;
	}

	.info-price {
		font-size: 26rpx;
		width: 272rpx;
		padding-right: 24rpx;
		border-right: 1rpx rgb(242, 242, 242) solid;
	}

	.info-action {
		font-size: 30rpx;
		display: flex;
		flex-direction: column;
		width: 430rpx;
	}

	.price-sale,
	.price-buy {
		display: flex;
		flex-direction: column;
	}

	.price-item1,
	.price-item2 {
		display: flex;
		justify-content: space-between;
	}

	.price-item1 {
		padding-bottom: 8rpx;
	}

	.price-item2 {
		padding-top: 8rpx;
	}

	.price-sale {
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.buy {
		color: rgba(5, 180, 20, 1.0);
	}
	.sale{
		color: red;
	}
	.action-top{
		display: flex;
		justify-content: space-between;
		margin: 0 24rpx;
		border: 2rpx rgba(242, 242, 242, 1) solid;
		border-radius: 24rpx;		
		padding: 20rpx 24rpx;
	}
	
	.input{
		text-align: center;
	}
	.action-top > :nth-child(1){
		margin-right: 36rpx;
	}
	.action-top > :nth-child(3){
		margin-left: 36rpx;
	}
	
	.newprice{
		font-size: 28rpx;
		margin: 24rpx 0 24rpx 24rpx;
	}
	.price-up{
		color: red;
	}
	.price-down{
		color: rgba(5, 180, 20, 1.0);
	}
	.button{
		background-color: rgba(62, 179, 30, 1);
		height: 100%;
		color: rgba(255, 255, 255, 1);
		font-size: 32rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
