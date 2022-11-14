<template>
	<view class="top">
		<view>
			<b>充值账户</b>
		</view>
		<view>
			<view class="id">
				<text>账户ID：{{userinfo.id}}</text>
			</view>
			<view class="fee">
				<text>账户可用余额：{{userinfo.fee}}元</text>
				<text>余额记录</text>
			</view>
		</view>
	</view>
	<Depart></Depart>
	<view class="card">
		<view class="card-top" @click="whichcard">
			<b>选择银行卡</b>
			<text>></text>
		</view>
		<view class="card-buttom">
			<view class="card-item">银行卡</view>
			<view class="card-info">
				<view>
					<b>中国银行</b>
					<text>（储蓄卡）</text>
				</view>
				<text>6123****1234</text>
			</view>
		</view>
	</view>
	<Depart></Depart>
	<view class="buttom">
		<view>
			<b>充值金额（元）</b>
		</view>
		<view class="buttom-item">
			<view>
				<b>￥</b>
			</view>
			<view>
				<input type="number" placeholder="最低输入金额100元" maxlength="5" placeholder-class="holder"
					v-model="chargeNumber">
			</view>
			<svg width="32" height="32" viewBox="0 0 512 512" v-if="chargeNumber" @click="reset">
				<path fill="rgb(236, 236, 236)"
					d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z" />
			</svg>
		</view>
		<view class="detail">
			<text>单次充值上限为5万元</text>
		</view>
	</view>
	<Button class="button">
		<text>立即充值</text>
	</Button>
	<view class="bankcard" v-if="showbar" @click="hidebar">
	</view>
	<view class="backcard-inside" v-if="showbar">
		<view class="backcard-inside-top">
			<text>请选择提现银行卡</text>
			<text @click="hidebar">X</text>
		</view>

		<scroll-view scroll-y="true" scroll-into-view="" class="scroll">
			<view class="card-buttom">
				<view class="card-item">银行卡</view>
				<view class="card-info">
					<view>
						<b>中国银行</b>
						<text>（储蓄卡）</text>
					</view>
					<text>6123****1234</text>
				</view>
			</view>
			<view class="card-buttom">
				<view class="card-item">银行卡</view>
				<view class="card-info">
					<view>
						<b>中国银行</b>
						<text>（储蓄卡）</text>
					</view>
					<text>6123****1234</text>
				</view>
			</view>
			<view class="card-buttom">
				<view class="card-item">银行卡</view>
				<view class="card-info">
					<view>
						<b>中国银行</b>
						<text>（储蓄卡）</text>
					</view>
					<text>6123****1454</text>
				</view>
			</view>
			<view class="card-buttom">
				<view class="card-item">银行卡</view>
				<view class="card-info">
					<view>
						<b>中国银行</b>
						<text>（储蓄卡）</text>
					</view>
					<text>6123****1894</text>
				</view>
			</view>
			<view class="card-buttom">
				<view class="card-item">银行卡</view>
				<view class="card-info">
					<view>
						<b>中国银行</b>
						<text>（储蓄卡）</text>
					</view>
					<text>6123****4534</text>
				</view>
			</view>
			<view class="card-buttom">
				<view class="card-item">银行卡</view>
				<view class="card-info">
					<view>
						<b>中国银行</b>
						<text>（储蓄卡）</text>
					</view>
					<text>6123****1225</text>
				</view>
			</view>
			<view class="card-buttom">
				<view class="card-item">银行卡</view>
				<view class="card-info">
					<view>
						<b>中国银行</b>
						<text>（储蓄卡）</text>
					</view>
					<text>6123****1694</text>
				</view>
			</view>
		</scroll-view>

		<view class="button2">
			<Button class="button3">
				<text>添加银行卡</text>
			</Button>
		</view>
	</view>

</template>

<script setup>
	import {
		ref
	} from "vue";

	const userinfo = {
		id: 16413246,
		fee: '0.00'
	}
	const chargeNumber = ref(null)
	const reset = () => chargeNumber.value = null

	const showbar = ref(false)
	const whichcard = () => {
		showbar.value = true
	}
	const hidebar = () => showbar.value = false
</script>

<style scoped>
	.top {
		margin: 0 32rpx 32rpx;
		padding-top: 32rpx;
	}

	.top> :nth-child(1) {
		margin-bottom: 32rpx;
		font-size: 32rpx;
	}

	.id {
		margin-bottom: 16rpx;
	}

	.top> :nth-child(2) {
		font-size: 28rpx;
	}

	.fee {
		display: flex;
		justify-content: space-between;
	}

	.fee> :nth-child(2) {
		color: rgb(153, 87, 87);
	}

	.card {
		margin: 0 0 32rpx;
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		padding: 32rpx 32rpx 18rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
		font-size: 32rpx;
	}

	/* .card-top{
		background-color: rgba(102, 102, 102,0.5);
	} */


	.card-top> :nth-child(2) {
		color: rgb(153, 153, 153);
	}

	.card-buttom {
		margin: 30rpx 32rpx 32rpx;
		padding: 16rpx 0 16rpx 32rpx;
		border-radius: 32rpx;
		box-shadow: 0 2rpx 6rpx 2rpx rgba(102, 102, 102, 0.1200);
		display: flex;
		align-items: center;
	}

	.card-item {
		margin-right: 24rpx;
		width: 64rpx;
		height: 64rpx;
	}

	.card-info {
		display: flex;
		flex-direction: column;
	}

	.card-info> :nth-child(1) {
		margin-bottom: 8rpx;
	}

	.card-info> :nth-child(1) b {
		font-size: 28rpx;
	}

	.card-info> :nth-child(1) text {
		color: rgb(55, 46, 44);
		font-size: 22rpx;
	}

	.card-info>text {
		color: rgb(102, 102, 102);
	}

	.buttom {
		margin: 32rpx;
	}

	.buttom> :nth-child(1) {
		font-size: 32rpx;
	}

	.buttom-item {
		margin: 30rpx 0 32rpx;
		padding: 32rpx;
		border-radius: 32rpx;
		box-shadow: 0 2rpx 6rpx 2rpx rgba(102, 102, 102, 0.1200);
		display: flex;
		align-items: center;
	}

	.buttom-item>:nth-child(1) {
		font-size: 48rpx;
		margin-right: 16rpx;
	}

	.holder {
		font-size: 36rpx;
		color: rgb(204, 204, 204);
	}

	.buttom-item>:nth-child(2)>input {
		font-size: 48rpx;
	}

	.detail {
		font-size: 28rpx;
		color: rgb(153, 153, 153);
	}

	.button {
		margin: 112rpx 32rpx 0;
	}

	.bankcard {
		height: 1624rpx;
		width: 751rpx;
		position: fixed;
		bottom: 0;
		background-color: rgba(102, 102, 102, 0.5);
		z-index: 2;
	}

	.backcard-inside {
		position: fixed;
		bottom: 0;
		height: 920rpx;
		width: 750rpx;
		background-color: rgb(255, 255, 255);
		border-radius: 32rpx 32rpx 0 0;
		z-index: 3;
		animation: Bar 0.5s;
	}

	.backcard-inside-top {
		display: flex;
		justify-content: space-between;
		padding: 32rpx 0;
		margin: 0 32rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.backcard-inside-top> :nth-child(1) {
		margin-left: 216rpx;
	}

	.scroll {
		height: 650rpx;
		overflow: hidden;
	}

	.button2 {
		padding-top: 10rpx;
		border-top: 1rpx rgb(242, 242, 242) solid;
	}

	.button3 {
		margin: 0 32rpx;
	}

	@keyframes Bar {
		from {
			bottom: -920rpx;
		}

		to {
			bottom: 0;
		}
	}
</style>
