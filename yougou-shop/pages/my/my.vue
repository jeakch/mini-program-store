<template>
  <view class="container">
    <view class="userinfo">
      <!-- 未登录状态 -->
      <view class="head-wrap" v-if="!token">
        <view class="no-login-avatar">
          <view class="no-avatar">
            <image
              class="avatar"
              src="../../static/images/default-avatar.png"
            ></image>
          </view>
          <view class="btn-login" @click="$store.dispatch('user/wxLoginAction')"
            >点我登录</view
          >
          <!-- ! $store.dispatch('user/wxLoginAction')  解析 -->
          <!-- todo: 它是一个Vuex Store Action的名称，表示一个名为 wxLoginAction 的 Action，它属于Vuex Store中的 user 模块 -->
          <!-- todo: 在 Vuex 中，Action 是用来执行异步操作或一系列操作的函数。通过 store.dispatch 方法调用 Action，即可触发这个 Action 执行相应的操作。 -->
          <!-- 
            *在上述模板代码中，$store.dispatch('user/wxLoginAction') 表示通过 $store 对象来调用名为 wxLoginAction 的 Vuex Store Action，
            *该 Action 会向服务器发送请求以进行微信登录。
           -->
        </view>
      </view>
      <!-- 登录状态 -->
      <view class="head-wrap" v-else>
        <view class="head-l">
          <view class="l">
            <image class="avatar" :src="userInfo.avatar"></image>
          </view>
          <view class="r">
            <view class="t">
              <view class="name">{{ userInfo.nickname }}</view>
            </view>
          </view>
        </view>
        <view class="head-r">
          <view class="arrow"></view>
        </view>
      </view>
    </view>
    <view class="order-container">
      <view class="header">
        <view class="top-title">
          <view class="left-line"></view>
          <view class="text">我的订单</view>
        </view>
        <view class="see-more">
          <view class="text">查看全部订单</view>
          <view class="arrow"></view>
        </view>
      </view>
      <view class="btn-container">
        <view class="icon-wrap">
          <view class="order-icon-wrap">
            <image
              class="order-icon"
              src="../../static/images/order/status/wait_pay.png"
            >
            </image>
            <view class="blue-point" v-if="token">11</view>
          </view>
          <text class="order-txt">待付款</text>
        </view>
        <view class="icon-wrap">
          <view class="order-icon-wrap">
            <image
              class="order-icon"
              src="../../static/images/order/status/wait_receipt.png"
            >
            </image>
            <view class="blue-point" v-if="token">22</view>
          </view>
          <text class="order-txt">待发货</text>
        </view>
        <view class="icon-wrap">
          <view class="order-icon-wrap">
            <image
              class="order-icon"
              src="../../static/images/order/status/received.png"
            >
            </image>
            <view class="blue-point" v-if="token">22</view>
          </view>
          <text class="order-txt">待收货</text>
        </view>
      </view>
    </view>
    <view class="li-wrap">
      <view class="list">
        <view class="list-l">
          <view class="icon">
            <image class="img" src=""></image>
          </view>
          <view class="text">地址管理</view>
        </view>
        <view class="arrow"></view>
      </view>
    </view>
    <view class="li-wrap">
      <view class="list">
        <view class="list-l">
          <view class="icon">
            <image
              class="img"
              src="/static/images/icon/icon-footprint-r.png"
            ></image>
          </view>
          <view class="text">我的足迹</view>
        </view>
        <view class="arrow"></view>
      </view>
      <button class="contact-btn">
        <view class="list-l">
          <view class="icon">
            <image
              class="img"
              src="/static/images/icon/icon-service-r.png"
            ></image>
          </view>
          <view class="text">联系客服</view>
        </view>
        <view class="arrow"></view>
      </button>
      <view class="list">
        <view class="list-l">
          <view class="icon">
            <image
              class="img"
              src="/static/images/icon/icon-about-r.png"
            ></image>
          </view>
          <view class="text">关于我们</view>
        </view>
        <view class="arrow"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss">
page {
  min-height: 100%;
  background-color: #fafafa;
}

.container {
  min-height: 100%;
  /* align-items: stretch; */
  overflow-x: hidden;
}

.black-mask {
  width: 100%;
  height: 2000rpx;
  position: fixed;
  top: 0;
  left: 0;
  background: #333;
  opacity: 0.5;
  z-index: 99;
}

.contact-btn {
  background: #fff;
  border-radius: 0;
}

.contact-btn:after {
  border: none;
}

.mask {
  width: 100%;
  height: 1000rpx;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.btn-login {
  height: 60rpx;
  line-height: 60rpx;
  font-size: 28rpx;
  color: #fff;
}

.userinfo {
  display: flex;
  width: 100%;
  margin-bottom: 24rpx;
  box-sizing: border-box;
  position: relative;
  background: #fff;
  flex-direction: column;
}

.head-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100rpx 30rpx 30rpx;
  box-sizing: border-box;
  /* border-bottom: 1rpx solid #f1f1f1; */
  background-color: #d3bb8b;
}

.head-wrap .no-login-avatar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.head-wrap .no-login-avatar .no-avatar {
  width: 128rpx;
  height: 128rpx;
  position: relative;
  margin-right: 20rpx;
}

.head-wrap .no-login-avatar .no-avatar .avatar {
  width: 128rpx;
  height: 128rpx;
  border-radius: 90rpx;
}

.head-wrap .head-l {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.head-wrap .head-l .l {
  width: 110rpx;
  height: 110rpx;
  position: relative;
  margin-right: 20rpx;
}

.head-wrap .head-l .l .avatar-wrap {
  width: 110rpx;
  height: 110rpx;
}

.head-wrap .head-l .l .avatar {
  width: 110rpx;
  height: 110rpx;
  border-radius: 90rpx;
}

.head-wrap .head-l .l .crown {
  position: absolute;
  right: -10rpx;
  top: -10rpx;
  width: 30rpx;
  height: 30rpx;
  transform: rotate(45deg);
}

.head-wrap .head-l .l .crown .icon {
  width: 30rpx;
  height: 30rpx;
}

.head-wrap .head-l .r {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.head-wrap .head-l .r .name {
  font-size: 34rpx;
  color: #fff;
  font-weight: 500;
  margin-right: 10rpx;
}

.head-wrap .head-r .arrow {
  width: 10rpx;
  height: 10rpx;
  border-top: 4rpx solid #fff;
  border-right: 4rpx solid #fff;
  transform: rotate(45deg);
}

.order-container {
  width: 100%;
  background: #fff;
  height: auto;
  margin-bottom: 24rpx;
}

.order-container .header {
  height: 90rpx;
  margin: 0 30rpx;
  font-size: 30rpx;
  color: #333;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-title {
  width: 200rpx;
  height: 90rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.top-title .left-line {
  width: 6rpx;
  height: 20rpx;
  margin-right: 20rpx;
  background: #f9f2e4;
}

.see-more {
  /* width: 200rpx; */
  height: 90rpx;
  font-size: 28rpx;
  color: #999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.see-more .text {
  margin-right: 20rpx;
}

.see-more .arrow {
  width: 10rpx;
  height: 10rpx;
  border-top: 4rpx solid #ccc;
  border-right: 4rpx solid #ccc;
  transform: rotate(45deg);
}

.btn-container {
  padding: 30rpx 24rpx;
  display: flex;
  justify-content: space-between;
}

.icon-wrap {
  width: 29%;
  /* height: 110rpx; */
  text-align: center;
  display: inline-block;
}

.order-icon-wrap {
  position: relative;
}

.order-icon {
  width: 60rpx;
  height: 60rpx;
  margin: 0 auto;
  /* margin-top:10rpx;  */
  position: relative;
}

.blue-point {
  position: absolute;
  top: -10rpx;
  right: 56rpx;
  border-radius: 20rpx;
  background: #f43a5c;
  font-size: 20rpx;
  color: #fff;
  padding: 2rpx 12rpx;
}

.order-txt {
  font-size: 26rpx;
  color: #666;
}

.li-wrap {
  display: flex;
  align-items: center;
  margin-bottom: 24rpx;
  background: #fff;
  flex-direction: column;
  padding-left: 30rpx;
}

.li-wrap .list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid #f1f1f1;
  padding-right: 30rpx;
}

.li-wrap .list:last-child {
  border-bottom: none;
}

.li-wrap .list .list-l {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.li-wrap .list .list-l .icon {
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;
  /* background: #f1f1f1; */
}

.li-wrap .list .list-l .icon .img {
  width: 40rpx;
  height: 40rpx;
}

.li-wrap .list .list-l .text {
  font-size: 28rpx;
  color: #333;
}

.li-wrap .list .arrow {
  width: 10rpx;
  height: 10rpx;
  border-top: 4rpx solid #ccc;
  border-right: 4rpx solid #ccc;
  transform: rotate(45deg);
}

.company {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rpx 0 50rpx 0;
}

.company .c-wrap {
  width: 30%;
  position: relative;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  display: flex;
  justify-content: center;
}

.company .c-wrap .line {
  height: 40rpx;
  width: 100%;
  border-bottom: 2rpx solid #999;
  position: absolute;
  top: 0;
}

.company .c-wrap .text {
  background: #fafafa;
  color: #999;
  font-size: 30rpx;
  text-align: center;
  width: 80%;
  z-index: 2;
}

.company .tip {
  font-size: 24rpx;
  color: #b3b3b3;
}

.contact-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  padding: 0 30rpx 0 0;
  height: 90rpx;
  line-height: 90rpx;
  border-bottom: 1rpx solid #f1f1f1;
}

.contact-btn::after {
  border: none;
}

.contact-btn .list-l {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.contact-btn .list-l .icon {
  margin-right: 20rpx;
  /* background: #f1f1f1; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-btn .list-l .icon .img {
  width: 40rpx;
  height: 40rpx;
}

.contact-btn .list-l .text {
  font-size: 28rpx;
  color: #333;
}

.contact-btn .arrow {
  width: 10rpx;
  height: 10rpx;
  border-top: 4rpx solid #ccc;
  border-right: 4rpx solid #ccc;
  transform: rotate(45deg);
}
</style>
