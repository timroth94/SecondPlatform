<template>
	<view>
		<Search v-model="input" placeholder="请输入藏品名称/序列号" @reset='reset'></Search>
	</view>
	<text>{{input}}</text>
</template>

<script setup>
import { ref } from "vue";
const reset = () => input.value = ''
const input = ref('')

</script>

<style>

</style>
