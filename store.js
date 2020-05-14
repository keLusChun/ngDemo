import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    version: '1.7.1',
    familyState: 'continue',
    localBaseUserInfo: JSON.parse(localStorage.localBaseUserInfo || JSON.stringify({})),  // 基础用户数据
    sessUserInfo: JSON.parse(sessionStorage.sessUserInfo || JSON.stringify({})),  // 用户数据
  },
  mutations: {
    localBaseUserInfo(state, val) {
      state.localBaseUserInfo = val
      localStorage.localBaseUserInfo = JSON.stringify(val)
    },
    sessUserInfo(state, val) {
      state.sessUserInfo = val
      sessionStorage.sessUserInfo = JSON.stringify(val)
    },
    familyListState(state, val){
      state.familyState = val
    }
  },
  actions: {
    
  }
})
