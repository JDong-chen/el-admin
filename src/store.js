import Vue from "vue"
import Vuex from "vuex"

const Storage = sessionStorage //存储在sessionStorage
Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    // 获取登录状态
    getisLogin(state) {
      return state.SS_ISLOGIN
    },
    // 获取面包屑导航数组
    getbreadCrumbArr(state) {
      return state.breadCrumbArr
    },
    // 获取标签导航数组
    gettagsArr(state) {
      return state.tagsArr
    },
    // 获取userInfo
    getuserInfo(state) {
      return state.userInfo
    }
  },

  state: {
    SS_ISLOGIN: Storage.SS_ISLOGIN, // 登录状态
    breadCrumbArr: [], // 面包屑导航数组
    tagsArr: Storage.tagsArr ? JSON.parse(Storage.tagsArr) : [], // 标签导航数组
    userInfo: Storage.userInfo ? JSON.parse(Storage.userInfo) : {} //用户信息
  },

  mutations: {
    // 变更登录状态
    changeLineState(state, lineState) {
      state.SS_ISLOGIN = lineState
    },
    // 变更面包屑导航
    changebreadCrumbArr(state, value = []) {
      state.breadCrumbArr = value
    },
    // 往标签导航数组添加一个导航
    pushtagsArr(state, value = []) {
      value.forEach(item => {
        let t = 0
        state.tagsArr.forEach(e => {
          if (e.name === item.name || item.name === "login") {
            t = 1
          }
        });
        if (t === 0) {
          state.tagsArr.push(item);
          Storage.setItem("tagsArr", JSON.stringify(state.tagsArr))
        }
      })
    },
    // 删除一个标签导航
    deletetagsArr(state, index) {
      if (index !== 0) state.tagsArr.splice(index, 1)
    },
    // 注销时将标签导航清空
    cleartagsArr(state) {
      state.tagsArr.splice(1)
    },
    //添加用户信息
    adduserInfo(state, value) {
      state.userInfo = value
    },
    // 删除用户信息
    clearuserInfo(state) {
      state.userInfo = {}
    }
  },

  // 同mutations
  actions: {
    changeLineState(context, lineState) {
      Storage.setItem("SS_ISLOGIN", lineState)
      context.commit("changeLineState", lineState)
    },
    changebreadCrumbArr(context, value = []) {
      context.commit("changebreadCrumbArr", value)
    },
    pushtagsArr(context, value = []) {
      context.commit("pushtagsArr", value)
    },
    deletetagsArr(context, value) {
      context.commit("deletetagsArr", value)
    },
    cleartagsArr(context) {
      Storage.removeItem("tagsArr")
      context.commit("cleartagsArr")
    },
    adduserInfo(context, value) {
      Storage.setItem("userInfo", JSON.stringify(value))
      context.commit("adduserInfo", value)
    },
    clearuserInfo(context) {
      Storage.removeItem("userInfo")
      context.commit("clearuserInfo")
    }
  }
})
