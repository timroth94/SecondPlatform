<template>
	<button class="input-button">
		<slot></slot>
	</button>

</template>

<script setup>

</script>

<style scoped>
	.input-button {
		font-size: 32rpx;
		color: aliceblue;
		padding: 8rpx;
		border-radius: 100rpx;
		border: none;
		background: linear-gradient(to right, rgb(249, 166, 12), rgb(249, 30, 30));
	}
</style>
