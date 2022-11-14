<template>
	<view class="top-search">
		<view class="search">
			<svg width="16" height="16" viewBox="0 0 32 32" class="search-search">
				<g stroke="#ff7b00" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
					<circle cx="14" cy="14" r="12" />
					<path d="m23 23l7 7" />
				</g>
			</svg>
			<input type="text" :placeholder="placeholder" :value="modelValue" placeholder-class="placeholder"
				class="search-input" @input="$emit('update:modelValue', $event.detail.value)"
				@focus="$emit('gotosearch')" @confirm="$emit('addhistory')" />
			<svg width="20" height="20" viewBox="0 0 512 512" v-if="modelValue" @click="$emit('reset')">
				<path fill="rgb(68, 66, 48)"
					d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z" />
			</svg>
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
</template>

<script setup>
	defineProps({
		placeholder: String,
		modelValue: String
	})
	defineEmits(['gotosearch', 'update:modelValue', 'reset', 'addhistory'])
</script>

<style scoped>
	.top-search {
		display: flex;
		align-items: center;
		margin-left: 32rpx;
		padding-top: 32rpx;
	}

	.search {
		width: 80%;
		display: flex;
		align-items: center;
		background-color: rgb(250, 250, 250);
		border-radius: 48rpx;
		padding: 16rpx;
	}

	.search-search {
		margin-right: 16rpx;
	}

	.search-input {
		width: 100%;
	}

	.search-message {
		display: flex;
		margin-left: 32rpx;
	}

	.placeholder {
		color: rgb(211, 211, 211);
	}
</style>
