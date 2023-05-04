import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
Vue.use(Vuex)
// 创建实例，并且暴露出去
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user
  }
})
