export default {
  namespaced: true,
  state: {
    // 从本地读取token
    token: uni.getStorageSync('token'),
    userInfo: uni.getStorageSync('userInfo') || {}
    //!：uni.getStorageSync方法，默认就会帮助你执行 JSON.parse 解析，如果出错就直接返回读取数据
  },
  mutations: {
    // 设置token
    setToken (state, data) {
      // 设置给state
      state.token = data
      // 设置到本地存储
      uni.setStorageSync('token', data)
    },
    // 设置用户资料
    setUserInfo (state, data) {
      // 设置state
      state.userInfo = data
      // 设置给本地
      uni.setStorageSync('userInfo', data)
    }
  },
  actions: {}
}
