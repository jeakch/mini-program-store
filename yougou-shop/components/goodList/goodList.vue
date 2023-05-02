<template>
  <view class="goodList">
    <view class="item" v-for="item in list" :key="item.id">
      <image class="img" :src="item.list_pic_url" mode="widthFix"></image>
      <!-- <block v-if="item.goods_number <= 0">
        <view class="sold-img">
          <image
            class="soldout"
            mode="widthFix"
            src="/static/images/icon/sold-out.png"
          ></image>
        </view>
      </block> -->
      <view class="text">
        <view class="tit">{{ item.name }}</view>
        <view class="desc">{{ item.goods_brief }}</view>
        <view class="price">￥{{ item.min_retail_price }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'goodList',
  props: {
    // 是否需要描述字段
    desc: {
      type: Boolean,
      default: false
    },
    // 列表数据
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.goodList {
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 50%;
    border: 1px solid #fff;
    box-sizing: border-box;
    position: relative;
    .img {
      width: 100%;
      display: block;
      height: 340rpx;
      max-height: 340rpx;
      border-radius: 8rpx;
      background: #f9f9f9;
    }
    .sold-img {
      position: absolute;
      width: 100%;
      height: 340rpx;
      left: 0%;
      top: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      image {
        width: 50%;
      }
    }
    .text {
      padding: 0 20rpx;
      font-style: 24rpx;
    }
    .tit {
      color: #333;
      background-color: #fff;
      line-height: 40rpx;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .desc {
      color: #888;
      background-color: #fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .price {
      color: #f2272d;
      font-size: 32rpx;
      background-color: #fff;
      line-height: 40rpx;
    }
  }
}
</style>
