<!-- <template>
  <view class="search">
    <view class="box">
      <image class="icon" src="/static/images/icon/search.png"></image>
      <text class="txt">搜索好物</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'mySearch',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  background-color: #fff;
  padding: 6px 24rpx;
  box-sizing: border-box;
}
.search .box {
  background-color: red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fafafa;
  box-sizing: border-box;
  height: 30px;
  border-radius: 30rpx;
  padding-left: 20rpx;
}
.search .icon {
  width: 30rpx;
  height: 30rpx;
}

.search .txt {
  height: 42rpx;
  line-height: 42rpx;
  color: #666;
  padding-left: 10rpx;
  font-size: 28rpx;
}
</style> -->

<template>
  <view style="padding: 15rpx">
    <u-search
      placeholder="请输入搜索内容"
      :showAction="false"
      v-model="keyword"
    ></u-search>
  </view>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  }
}
</script>
