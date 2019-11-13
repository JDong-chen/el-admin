import Login from "@/views/Login.vue"
import Home from "@/views/Home.vue"
import AuthorityManage from "@/views/homeChild/AuthorityManage.vue"
import PersonCenter from "@/views/homeChild/PersonCenter.vue"

export const routes = [
  {
    path: "/home",
    component: Home,
    meta: { title: "管理中心", path: "/home" },
    children: [
      {
        path: "/",
        name: "首页",
        component: () => import("@/views/homeChild/DataShow.vue"),
        meta: { title: "首页", path: "/home" }
      },
      {
        path: "/authoritymanage",
        name: "权限管理",
        component: AuthorityManage,
        meta: { title: "权限管理", path: "/authoritymanage" }
      },
      {
        path: "/personcenter",
        name: "个人中心",
        component: PersonCenter,
        meta: { title: "个人中心", path: "/personcenter" }
      },
      {
        path: "/error404",
        name: "error404",
        component: () => import("@/views/homeChild/Error404.vue")
      },
    ]
  },
  {
    path: "/",
    name: "login",
    component: Login,
    meta: { title: "登录", path: "/login" }
  }
]
