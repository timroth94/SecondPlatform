<template>
	<view class="">
  <view class="input">
    <view class="input-top">
      <view class="input-top-text" @click="changeWay">
        <b>手机号登录</b>
        <view :class="[login_way ? 'react' : '']"></view>
      </view>
      <view  class="input-choice" @click="changeWay">
        <b>密码登录</b>
        <view :class="[login_way ? '' : 'react']"></view>
      </view>
    </view>
    <text class="hit" v-if="login_way">未注册过的手机号将自动创建账户</text>
    <text class="hit" v-else>请使用登录密码进行登录</text>
    <view class="img">
      <p>img</p>
    </view>
    <view class="input-form">
      <input type="text" class="input-item" placeholder="请输入手机号">
      <input type="text" class="input-item" placeholder="请输入验证码" v-if="login_way">
      <input type="password" class="input-item" placeholder="请输入登录密码" v-else>
      <button class="input-button" @click="gohome">登录</button> 
    </view>

  </view>

  <view class="copyright">
    <view>
      <text>登录即代表阅读并同意《用户协议》 与 《隐私政策》</text>
    </view>
  </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const login_way = ref('true')
const changeWay = () => {
  login_way.value = !login_way.value
}
const gohome = () => uni.switchTab({url: "/pages/Tabbar/Home"})


</script>

<style scoped>

.input {
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-left: 15%;
  position: fixed;
  top: 15%;
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
  height: 6rem;
  display: flex;
  justify-content: center;
}

.input-choice {
  padding-left: 2rem;
}

.input-item {
  margin-top: 2rem;
  border: 2px solid rgb(192, 187, 187);
  border-top: none;
  border-left: none;
  border-right: none;
}

.input-item:focus {
  outline: none;
}

.input-button {
  font-size: 1rem;
  color: aliceblue;
  margin-top: 5rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 2rem;
  border: none;
  background: linear-gradient(to right, rgb(249, 166, 12), rgb(249, 30, 30));
}


.copyright {
  font-size: 0.8rem;
  position: fixed;
  bottom: 5%;
  display: flex;
  width: 100%;
  justify-content: center;
}

.react{
  position: relative;
  top: -8px;
  width: auto;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgb(247, 72, 29);
  z-index: -1;
}
.hit {
  font-size: 0.8rem;
  color: rgb(170, 170, 162);
}
</style>
