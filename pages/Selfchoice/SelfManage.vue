<template>
	<view class="title">
		<template v-for="(item,index) in title" :key="index">
			<Title :titleIndex="index" :activeValue="activevalue" @click.native="changevalue(index)">{{item}}</Title>		
		</template>
	</view>
	<view class="title-small">
				<text>名称</text>
				<text>置顶</text>
				<text>排序</text>
	</view>
	<view class="Self">
		<template v-for="(item, index) in selflist" :key="index + 'ui'">
			<view class="selfitem">
				<view class="selfitem-radio">
					<label class="radio">
						<radio :value="'index'" :checked="item.isactive" color="rgba(255, 94, 59, 1)"
							@click="changestatu(index)" />
					</label>
				</view>
				<view class="selfitem-info">
					<view class="">{{item.name}}</view>
					<view class="">{{item.number}}</view>
				</view>
				<view class="selfitem-switch">
					<switch :checked="item.istop" color="rgba(255, 94, 59, 1)" style="transform:scale(0.8)"
						@click="changeswitch(index,item)" />
				</view>
				<view class="selfitem-move">
					<view class="" v-if="index == 0">下移</view>
					<view class="" v-else @click="changeposition(index)">上移</view>
				</view>
			</view>
		</template>
	</view>
	<button type="default" @click="deleteitem">删除</button>
	<button type="default" @click="selectall">全选</button>

</template>

<script setup>
	import {
		ref
	} from "vue";

	const selflist = ref([{
			name: '藏品1号',
			number: '0000001',
			istop: true,
			isactive: false
		},
		{
			name: '藏品2号',
			number: '0000002',
			istop: false,
			isactive: false
		},
		{
			name: '藏品3号',
			number: '0000003',
			istop: true,
			isactive: false
		}
	])
	const title = ['编辑自选', '管理分组', '偏好设置']
	const activevalue = ref(0)
	const changevalue = (index) => {
		activevalue.value = index
	}
		//上移和下移
		const changeposition = (index) => {
			let oldvalue = selflist.value[index]
			let newvalue = selflist.value[index - 1]
			selflist.value[index - 1] = oldvalue
			selflist.value[index] = newvalue
		}
	//切换是否top
	const changeswitch = (index, item) => {
		selflist.value[index].istop = !selflist.value[index].istop
	}

	//是否需要让单选按钮和上移功能同时存在？
	const activeindex = ref([])
	const changestatu = (index) => {
		selflist.value[index].isactive = !selflist.value[index].isactive
	}

	const selectall = () => {
		selflist.value.forEach((item) => {
			item.isactive = true
		})
	}
	const deleteitem = () => {
		for (let i = 0; i < selflist.value.length;) {
			if (selflist.value[i].isactive == true) {
				selflist.value.splice(selflist.value.indexOf(selflist.value[i]), 1)
			} else {
				i++
			}
		}
	}
</script>

<style scoped>
	.title {
		display: flex;
		justify-content: space-between;
		padding: 32rpx 64rpx 18rpx;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.title-small {
		margin: ;
		font-size: 24rpx;
		color: rgba(102, 102, 102, 1);
		padding: 32rpx 0 16rpx;
	}

	.title-small> :nth-child(1) {
		margin: 0 264rpx 0 112rpx;
	}

	.title-small> :nth-child(3) {
		margin: 0 32rpx 0 198rpx;
	}

	.selfitem {
		display: flex;
		align-items: center;
		padding: 16rpx 0;
		border-bottom: 1rpx rgb(242, 242, 242) solid;
	}

	.Self {
		padding: 16rpx 32rpx;
	}

	.selfitem-radio {
		margin-right: 32rpx;
	}

	.selfitem-info {
		width: 192rpx;
		padding-right: 102rpx;
	}

	.selfitem-info> :nth-child(1) {
		font-size: 32rpx;
	}

	.selfitem-info> :nth-child(2) {
		font-size: 24rpx;
		color: rgba(102, 102, 102, 1);
	}

	.selfitem-move {
		padding-left: 160rpx;
		width: 68rpx;
		font-size: 28rpx;
		color: rgba(102, 102, 102, 1);
	}
</style>
