import Vue from "vue"
import Router from "vue-router"
import { routes } from "./configs/router.config"
import store from "./store"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const breadCrumbArr = []
  const tagsArr = []
  to.matched.forEach(record => {
    if (!record.meta || record.name === "login") return
    breadCrumbArr.push({
      name: record.meta.title,
      path: record.meta.path,
    });
    if (record.meta.title !== "管理中心") {
      tagsArr.push(breadCrumbArr[breadCrumbArr.length - 1])
    }
  });
  store.dispatch("changebreadCrumbArr", breadCrumbArr)
  store.dispatch("pushtagsArr", tagsArr)
  next()
})

export default router
