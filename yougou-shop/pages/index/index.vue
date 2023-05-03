<template>
  <view class="index-container">
    <!--todo: 搜索组件 S-->
    <mySearch></mySearch>
    <!-- 搜索组件 E-->

    <!-- todo: 轮播图 -->
    <!-- <u-swiper :list="swiperList" @click="click"></u-swiper> -->
    <swiper
      class="banner"
      indicator-dots
      autoplay
      interval="1500"
      circular
      indicator-active-color="#fa805c"
    >
      <swiper-item v-for="item in banner" :key="item.id">
        <navigator url="/pkgGood/detail/detail?id=item.goods_id">
          <image class="img" mode="widthFix" :src="item.image_url"></image>
        </navigator>
      </swiper-item>
    </swiper>

    <!-- todo: 通知-->
    <u-notice-bar :text="noticeList" mode="closable"></u-notice-bar>

    <!--todo: 菜单区域  -->
    <u-grid :border="false" col="5">
      <u-grid-item v-for="item in channel" :key="item.id" @click="goCate">
        <image class="menuImg" mode="widthFix" :src="item.icon_url"></image>

        <text class="menuText">{{ item.name }}</text>
      </u-grid-item>
      <!-- <u-grid-item>
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
      </u-grid-item> -->
    </u-grid>
    <!-- 菜单区域 End -->

    <!-- todo: 商品区-->
    <!-- 商品分类 S -->
    <view class="goodContainer" v-for="item in categoryList" :key="item.id">
      <view class="titleBox" @click="goCate">
        <text>{{ item.name }}</text>
      </view>
      <!-- 商品列表 S-->
      <goodList :list="item.goodsList" :desc="true"></goodList>
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
        'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用',

      // 1. 定义相关数据变量
      banner: [], //轮播图
      categoryList: [], //分类  categorise：分类
      channel: [], //单词是频道的意思，这里是菜单区域，中间的5宫格对应5个频道
      notice: '',

      // 控制搜索组件显示
      searchShow: false
    }
  },
  onLoad () {},
  onShow () {
    this.getIndexData()

    // 搜索组件被创建了
    this.searchShow = true
  },
  onHide () {
    // 搜索组件关闭了
    this.searchShow = false
  },

  // methods定义获取数据方法
  methods: {
    // click (name) {
    //   this.$refs.uToast.success(`点击了第${name}个`)
    // },1.

    // 2. 获取首页数据
    async getIndexData () {
      // 2.1 请求数据
      let res = await uni.$http.get('/index/appInfo')
      console.log('res', res)
      // 2.2 赋值变量
      this.banner = res.banner
      console.log('banner -----> ', this.banner)

      this.categoryList = res.categoryList
      console.log('categoryList -----> ', this.categoryList)

      this.channel = res.channel
      console.log('channel -----> ', this.channel)

      this.notice = res.notice
        .map((item, index) => {
          return index + 1 + '.' + item.content + ' '
        })
        .join('')
    },

    // 频道菜单-跳转到分类界面
    //
    goCate () {
      uni.switchTab({
        url: '/pages/cate/cate'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  .img {
    width: 100%;
  }
}
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
