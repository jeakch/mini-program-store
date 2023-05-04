<template>
  <view class="cateContainer">
    <!-- todo:搜索组件 S-->
    <mySearch id="mySearch" v-if="searchShow"></mySearch>
    <!-- 搜索组件 E-->

    <!-- todo: 容器区域 S -->
    <view class="boxContainer" :style="'height:' + (wh - searchHeight) + 'px'">
      <!-- 左侧 S-->
      <scroll-view class="nav" scroll-y>
        <!-- <view class="active">分类1</view> -->
        <view
          v-for="item in cateList"
          :class="{ active: activeCate.id === item.id }"
          :key="item.id"
          >{{ item.name }}</view
        >
      </scroll-view>
      <!-- 左侧 E-->

      <!-- 右侧 S-->
      <view class="cate">
        <!-- 图片 -->
        <image class="cateImg" :src="activeCate.img_url"></image>
        <!-- 滚动商品容器 S-->
        <scroll-view
          scroll-y
          class="listBox"
          @scrolltolower="loadMore"
          :style="'height:' + (wh - searchHeight - imgHeight) + 'px'"
        >
          <!-- 商品列表 -->
          <goodList :list="list" v-if="list.length"></goodList>
          <!-- 列表底部的展示 -->
          <u-loadmore v-if="list.length" :status="status"></u-loadmore>
          <!-- 空的状态 -->
          <u-empty
            v-if="list.length === 0"
            mode="list"
            marginTop="200rpx"
          ></u-empty>
        </scroll-view>
        <!-- 滚动商品容器 E-->
      </view>
      <!-- 右侧 E-->
    </view>
    <!-- 容器区域 E -->
  </view>
</template>

<script>
export default {
  data () {
    return {
      // 控制搜索组件显示
      searchShow: false,

      wh: 0, // 窗口高度
      searchHeight: 0, // 搜索框的高度
      imgHeight: 0, // 分类图片高度

      // 1.定义分类数据和激活分类信息
      cateList: [], //左侧分类列表信息
      activeCate: {}, //激活分类信息

      count: 0, // 总数
      currentPage: 1, // 页码
      pageSize: 8, // 每页数量
      list: [], // 商品列表

      status: 'loadmore' // 数据状态
    }
  },
  // 挂载完成
  mounted () {
    //* 通过uni.createSelectorQuery().in(this).select("选择器") 获取节点
    //* 通过调用节点.boundingClientRect 获取相关信息

    // 获取设备高度
    uni.getSystemInfo({
      success: res => {
        this.wh = res.windowHeight
      }
    })
    // 获取搜索组件高度
    const query = uni.createSelectorQuery().in(this)

    query
      .select('#mySearch')
      .boundingClientRect(data => {
        // data就是该节点的位置和高度相关信息
        this.searchHeight = data.height
      })
      .exec()
    // 获取图片高度
    query
      .select('.cateImg')
      .boundingClientRect(data => {
        // data就是该节点的位置和高度相关信息
        this.imgHeight = data.height
      })
      .exec()
  },
  onShow () {
    // 搜索组件被创建了
    this.searchShow = true
    this.getAllCate()
    this.getGoodList()
  },
  onHide () {
    // 搜索组件关闭了
    this.searchShow = false
  },

  methods: {
    //获取全部分类方法
    async getAllCate () {
      let res = await uni.$http.get('/catalog/index')
      console.log('res -----> ', res)
      this.cateList = res.categoryList
      // 只有当有数据才确定激活分类信息
      if (this.cateList.length) {
        this.activeCate = this.cateList[0]
        // 获取商品分类
        this.getGoodList()
      }
    },

    // 获取商品列表的方法
    async getGoodList () {
      this.status = 'loading' // 数据加载中...
      // 请求数据
      let { count, data } = await uni.$http.post('/catalog/currentlist', {
        id: this.activeCate.id,
        page: this.currentPage,
        size: this.pageSize
      })
      // 赋值
      this.list = [...this.list, ...data]
      this.count = count
      // 判断结束
      if (this.list.length === this.count) {
        // 没有了
        this.status = 'nomore'
      } else {
        // 还有
        this.status = 'loadmore'
      }
    },

    // 滚动加载更多数据
    loadMore () {
      console.log('滚动加载更多数据')
      //  loadmore 加载更多，表示还可加载
      //  loading  加载中， 不可以继续加载
      //  nomore   没有了，不可以加载
      if (this.status !== 'loadmore') return
      // 页码变化
      this.currentPage++
      // 重新获取请求
      this.getGoodList()
    }
  }
}
</script>

<style lang="scss">
.cateContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  .boxContainer {
    display: flex;
    flex: 1;
    .nav {
      width: 180rpx;
      border-right: 1rpx solid #fafafa;
      height: 100%;
      view {
        line-height: 100rpx;
        text-align: center;
        color: #333;
        font-size: 30rpx;
      }
      .active {
        color: #fa3445;
        font-size: 32rpx;
      }
    }
    .cate {
      flex: 1;
      padding: 0 20rpx;
      height: 100%;
      flex-direction: column;
      .cateImg {
        width: 100%;
        height: 160rpx;
      }
      .listBox {
        flex: 1;
      }
    }
  }
}
</style>
