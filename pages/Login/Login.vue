<template>
	<view class="input">
		<view class="input-top">
			<view class="input-top-text" @click="phone">
				<b>手机号登录</b>
				<view :class="[isphone ? 'react' : '']"></view>
			</view>
			<view class="input-choice" @click="password">
				<b>密码登录</b>
				<view :class="[isphone ? '' : 'react' ]"></view>
			</view>
		</view>
		<text class="hit" v-if="isphone">未注册过的手机号将自动创建账户</text>
		<text class="hit" v-else>请使用登录密码进行登录</text>
		<view class="img">
			<p>img</p>
		</view>
		<view class="input-form">
			<input type="number" class="input-item" placeholder="请输入手机号" maxlength="11">
			<input type="number" class="input-item" placeholder="请输入验证码" v-if="isphone" maxlength="6">
			<input type="password" class="input-item" placeholder="请输入登录密码" v-else>
		</view>
	</view>

	<Button @click.native="gohome" class="button">
		<text>登录</text>
	</Button>
	<view class="copyright">
		<view>
			<text>登录即代表阅读并同意《用户协议》 与 《隐私政策》</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const isphone = ref(true)

	const phone = () => {
		isphone.value = true
	}

	const password = () => {
		isphone.value = false
	}

	const gohome = () => uni.switchTab({
		url: "/pages/Tabbar/Home"
	})
</script>

<style scoped>
	.input {
		display: flex;
		flex-direction: column;
		margin: 64rpx 80rpx;
	}

	.input-top {
		display: flex;
		flex-direction: row;
	}

	.input-form {
		display: flex;
		flex-direction: column;
	}

	.img {
		width: 100%;
		height: 192rpx;
		display: flex;
		justify-content: center;
	}

	.input-choice {
		padding-left: 64rpx;
	}

	.input-item {
		margin-top: 64rpx;
		border: 4rpx solid rgb(192, 187, 187);
		border-top: none;
		border-left: none;
		border-right: none;
	}

	.input-item:focus {
		outline: none;
	}

	.input-top-text b,
	.input-choice b {
		font-size: 36rpx;
	}

	.copyright {
		font-size: 24rpx;
		position: fixed;
		bottom: 48rpx;
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.react {
		position: relative;
		top: -16rpx;
		width: auto;
		height: 16rpx;
		border-radius: 16rpx;
		background-color: rgb(247, 72, 29);
		z-index: -1;
	}

	.hit {
		font-size: 24rpx;
		color: rgb(170, 170, 162);
	}

	.button {
		margin: 112rpx 80rpx 0;
	}
</style>
