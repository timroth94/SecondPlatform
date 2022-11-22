<template>
	<view class="title">
		<template v-for="(item,index) in title">
			<Title>{{item}}</Title>
		</template>
	</view>
	<view class="setting-top">
		<text>分时副图个数</text>
		<view class="setting-top-bar">
			<template v-for="(item,index) in topbar" :key="index">
				<text :class="[(index == activevalue) ? 'active-class' : 'noactive']" @click="changeactive(index)">
					{{item}}
				</text>
			</template>
		</view>
	</view>
	<Depart></Depart>
	<view class="setting-bottom">
		<text>副图指标参数</text>
		<view>
			<text>指标参数设置</text>
			<text>显示</text>
			<text>操作</text>
		</view>
	</view>
	<view class="setting-outter">
		<template v-for="(item,index) in K_Setting" :key="index">
			<view class="setting-inner">
			<view class="setting-name">
				<text>{{item.name_en}}</text>
				<text>{{item.name_cn}}</text>
			</view>
			<view class="">
				<switch :checked="item.isshow" @change="" style="transform:scale(0.8)" color="rgba(255, 94, 59, 1)"/>
				<text>{{item.action}}</text>
			</view>
			</view>
		</template>
	</view>




</template>

<script setup>
	import {
		ref
	} from "vue";
	
	const K_Setting = ref([
		{
			name_en: 'MACD',
			name_cn: '（平滑异同曲线）',
			isshow: true,
			action: '设参数'
		},
		{
			name_en: 'VOL',
			name_cn: '（成交量）',
			isshow: true,
			action: '设参数'
		},
		{
			name_en: 'KDJ',
			name_cn: '（随机指标）',			
			isshow: false,
			action: '设参数'
		},
		{
			name_en: 'RSI',
			name_cn: '（相对强弱指标）',			
			isshow: true,
			action: '？'
		},
		{
			name_en: 'BOLL',
			name_cn: '（布林线）',			
			isshow: true,
			action: '？'
		}
	])
	const title = ['分时', 'K线']
	const topbar = [1, 2, 3]
	const activevalue = ref(0)
	const changeactive = (index) => {
		activevalue.value = index
	}
</script>

<style scoped>
	.title {
		display: flex;
		padding: 10rpx 160rpx 18rpx;
		justify-content: space-between;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.setting-top {
		padding: 60rpx 34rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
	}

	.setting-top-bar {
		width: 336rpx;
		display: flex;
		border-radius: 16rpx;
	}

	.setting-top-bar> :nth-child(1),
	.setting-top-bar> :nth-child(2),
	.setting-top-bar> :nth-child(3) {
		flex: 1;
		padding: 12rpx 46rpx 10rpx 48rpx;
	}

	.setting-top-bar> :nth-child(1) {
		border-radius: 16rpx 0 0 16rpx;
		border: 2rpx rgba(255, 154, 68, 1) solid;
	}

	.setting-top-bar> :nth-child(2) {
		border-top: 2rpx rgba(255, 154, 68, 1) solid;
		border-bottom: 2rpx rgba(255, 154, 68, 1) solid;
	}

	.setting-top-bar> :nth-child(3) {
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

	.setting-bottom {
		padding: 32rpx 32rpx 0;
	}

	.setting-bottom> :nth-child(1) {
		font-size: 30rpx;
	}

	.setting-bottom> :nth-child(2) {
		margin: 32rpx 0 16rpx;
		font-size: 24rpx;
		color: rgba(102, 102, 102, 1);
	}
	.setting-bottom> :nth-child(2) > :nth-child(1){
		margin-right: 248rpx;
	}
	.setting-bottom> :nth-child(2) > :nth-child(2){
		margin-right: 180rpx;
	}
	
	.setting-outter{
		display: flex;
		flex-direction: column;
		margin: 26rpx 32rpx 0;
	}

	.setting-inner{
		display: flex;
		align-items: center;
		padding: 26rpx 0 24rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}
	
	.setting-name > :nth-child(1){
		font-size: 30rpx;
	}
	.setting-name > :nth-child(2){
		font-size: 28rpx;
		color: rgba(153, 153, 153, 1);
	}
	
	.setting-inner > :nth-child(2){
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 6;
		font-size: 28rpx;
		color: rgba(153, 87, 87, 1);
	}
	.setting-inner > :nth-child(1){
		flex: 7;
	}
	
	.setting-outter > :nth-child(4) > :nth-child(2) text,
	.setting-outter > :nth-child(5) > :nth-child(2) text
	{
		margin-right: 26rpx;
	}
</style>
