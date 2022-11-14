<template>
	<view class="title-item">
		<text class="title-top" :class="[(titleIndex == activeValue) ? 'titleActive' : '']">
			<slot></slot>
		</text>
		<view :class="[(titleIndex == activeValue) ? 'decorate' : '']"></view>
	</view>
</template>

<script setup>
	defineProps({
		activeValue: Number,
		titleIndex: Number
	})
</script>

<style scoped>
	.title-top {
		font-size: 32rpx;
	}

	.titleActive {
		color: rgb(255, 94, 59);
	}

	.decorate {
		width: 48rpx;
		height: 4rpx;
		background-color: rgb(255, 94, 59);
		border-radius: 4rpx;
		position: relative;
		bottom: -18rpx;
	}

	.title-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 48rpx;
	}
</style>
