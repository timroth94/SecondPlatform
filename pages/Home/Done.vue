<template>
	<scroll-view scroll-y="true" class="scroll">
		<!-- 		<view class="order">
			<template v-for="(item,index) in order" :key="index">
				<view class="order-list">
					<view class="order-name">{{item.name}}</view>
					<view class="order-value">{{item.value}}</view>
				</view>
			</template>
		</view> -->
		<view class="order">
			<template v-for="(item,index) in name" :key="index">
				<view class="order-list">
					<view class="order-name">{{item}}</view>
					<view class="order-value">{{order_data[index]}}</view>
				</view>
			</template>
		</view>
	</scroll-view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from "vue";


	const name = ['藏品预览', '藏品名称', '藏品序列号', '买卖类别', '委托状态', '委托价格', '成交数量', '成交金额', '手续费', '交易抵扣金', '撤单数量', '成交时间',
		'委托日期', '委托类型', '委托序列号'
	]
	const order_data = ref(['url', '爱与和平', '000001', '买入', '已成交', '1000.00', '520', '520000', '--', '--', '100',
		'10:52:10',
		'08-15', '限价委托', 'GJ5186123165', '--'
	])
	//两种数据定义方式
	// 	const order = ref([{
	// 			name: '藏品预览',
	// 			value: 'url'
	// 		},
	// 		{
	// 			name: '藏品名称',
	// 			value: '爱与和平'
	// 		},
	// 		{
	// 			name: '藏品序列号',
	// 			value: '000001'
	// 		},
	// 		{
	// 			name: '买卖类别',
	// 			value: '买入'
	// 		},
	// 		{
	// 			name: '委托状态',
	// 			value: '委托中'
	// 		},
	// 		{
	// 			name: '委托价格',
	// 			value: '1000.00'
	// 		},
	// 		{
	// 			name: '委托数量',
	// 			value: '1000'
	// 		},
	// 		{
	// 			name: '成交数量',
	// 			value: '520'
	// 		},
	// 		{
	// 			name: '手续费',
	// 			value: '--'
	// 		},
	// 		{
	// 			name: '交易抵扣金',
	// 			value: '--'
	// 		},
	// 		{
	// 			name: '撤单数量',
	// 			value: '--'
	// 		},
	// 		{
	// 			name: '委托时间',
	// 			value: '10:52:10'
	// 		},
	// 		{
	// 			name: '委托日期',
	// 			value: '08-15'
	// 		},
	// 		{
	// 			name: '委托类型',
	// 			value: '限价委托'
	// 		},
	// 		{
	// 			name: '委托序列号',
	// 			value: 'GJ5186123165'
	// 		},
	// 		{
	// 			name: '废单原因',
	// 			value: '--'
	// 		},
	// 	])
</script>

<style scoped>
	.order {
		margin: 0 32rpx;
	}

	.order-list {
		display: flex;
		justify-content: space-between;
		padding: 24rpx 0;
		font-size: 28rpx;
		color: rgba(102, 102, 102, 1);
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.order> :nth-child(4) .order-value,
	.order> :nth-child(8) .order-value,
	.order> :nth-child(6) .order-value {
		color: rgba(255, 94, 59, 1);
	}
</style>
