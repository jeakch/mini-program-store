import { mapState } from 'vuex'
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
  actions: {
    // 微信登录
    wxLoginAction (context) {
      //todo: 调用 uni.login
      //* 前端调用 wx.login 方法获取登录code提交给后端
      uni.login({
        success: async res => {
          // console.log('点击登录：res', res.code)
          // res.code 就是登录凭证，只需要将code提交给服务端即可

          let result = await uni.$http.post('/auth/loginByWeixin', {
            code: res.code
          })
          console.log('result', result)

          // 存储token
          context.commit('setToken', result.token)

          //* // 获取一下用户的资料 (需要携带token的，但是我们的请求拦截器已经写好了配置)
          // let result2 = await uni.$http.get('user/profile')
          // console.log('result2 -----> ', result2)

          // 存储用户资料
          context.commit('setUserInfo', result2)

          // 提示一下
          uni.showToast({
            title: '登陆成功'
          })

          // 获取用户资料
          await context.dispatch('getUserInfo')
        },
        fail: err => {
          console.log('err', err)
        }
      })
    },
    // 获取用户资料
    async getUserInfo (context) {
      let res = await uni.$http.get('/user/profile')
      context.commit('setUserInfo', res)
    }
  },
  computed: {
    ...mapState('user', ['token', 'userInfo'])
  }
}
