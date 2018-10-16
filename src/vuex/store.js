import Vue from 'vue'
import Vuex from 'vuex'

// 基本通用
import base from './modules/base'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base
  },
  strict: true
})
