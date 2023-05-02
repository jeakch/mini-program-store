<template>
  <view class="index-container">
    <!--todo: 搜索组件 S-->
    <mySearch></mySearch>
    <!-- 搜索组件 E-->

    <!-- todo: 轮播图 -->
    <u-swiper :list="swiperList" @click="click"></u-swiper>

    <!-- todo: 通知-->
    <u-notice-bar :text="noticeList" mode="closable"></u-notice-bar>
    <!--todo: 菜单区域 S -->
    <u-grid :border="false" col="5">
      <u-grid-item>
        <image
          class="menuImg"
          mode="widthFix"
          src="http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png"
        ></image>
        <text class="menuText">标题</text>
      </u-grid-item>
      <u-grid-item>
        <image
          class="menuImg"
          mode="widthFix"
          src="http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png"
        ></image>
        <text class="menuText">标题</text>
      </u-grid-item>
      <u-grid-item>
        <image
          class="menuImg"
          mode="widthFix"
          src="http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png"
        ></image>
        <text class="menuText">标题</text>
      </u-grid-item>
      <u-grid-item>
        <image
          class="menuImg"
          mode="widthFix"
          src="http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png"
        ></image>
        <text class="menuText">标题</text>
      </u-grid-item>
      <u-grid-item>
        <image
          class="menuImg"
          mode="widthFix"
          src="http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png"
        ></image>
        <text class="menuText">标题</text>
      </u-grid-item>
    </u-grid>
    <!-- 菜单区域 E -->

    <!-- todo: 商品区-->
    <!-- 商品分类 S -->
    <view class="goodContainer">
      <view class="titleBox">
        <text>分类名</text>
      </view>
      <!-- 商品列表 S-->
      <goodList></goodList>
      <!-- 商品列表 E-->
    </view>
    <!-- 商品分类 E -->
  </view>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      title: 'Hello',
      swiperList: [
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper3.png'
      ],
      noticeList:
        'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用'
    }
  },
  onLoad () {},
  methods: {
    click (name) {
      this.$refs.uToast.success(`点击了第${name}个`)
    }
  }
}
</script>

<style lang="scss" scoped>
.menuImg {
  width: 80rpx;
}
.menuText {
  color: #888;
}

.grid-text {
  font-size: 14px;
  color: #909399;
  padding: 10rpx;
  /* #ifndef APP-PLUS */
  box-sizing: border-box;
  /* #endif */
}

.titleBox {
  margin: 10rpx 0;
  background-color: #fafafa;
  padding: 20rpx 0;
  box-sizing: border-box;
  text-align: center;
  text {
    display: inline-block;
    border-bottom: 4rpx solid #409eff;
    color: #333;
    font-size: 28rpx;
  }
}
.goodContainer {
  padding: 0 20rpx;
}
</style>
