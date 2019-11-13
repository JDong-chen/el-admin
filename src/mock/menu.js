export const menu = [{
  type: "dmenu",
  title: "D管理中心",
  path: null,
  children: [
    {
      type: "ditem",
      title: "首页",
      path: "/home",
      children: null
    },
    {
      type: "ditem",
      title: "权限管理",
      path: "/authoritymanage",
      children: null
    }
  ]
}]


export const dmenu = [{
  type: "dmenu",
  title: "D管理中心",
  path: null,
  auth: 50,
  children: [
    {
      type: "dsubMenu",
      title: "第一组",
      path: null,
      auth: 50,
      children: [
        {
          type: "ditem",
          title: "首页",
          path: "/home",
          auth: 50,
          children: null
        },
        {
          type: "ditem",
          title: "首页",
          path: "/home",
          auth: 50,
          children: null
        },
        {
          type: "ditem",
          title: "首页",
          path: "/home",
          auth: 50,
          children: null
        }
      ]
    },
    {
      type: "dsubMenu",
      title: "subMenu",
      path: "dsubMenu",
      auth: 50,
      children: [
        {
          type: "ditem",
          title: "权限管理",
          path: "/authoritymanage",
          auth: 50,
          children: null
        },
        {
          type: "ditem",
          title: "权限管理",
          path: "/authoritymanage",
          auth: 50,
          children: null
        },
        {
          type: "ditem",
          title: "权限管理",
          path: "/authoritymanage",
          auth: 50,
          children: null
        },
        {
          type: "dgroup",
          title: "第一组",
          path: null,
          auth: 50,
          children: [
            {
              type: "ditem",
              title: "首页",
              path: "/home",
              auth: 50,
              children: null
            },
            {
              type: "ditem",
              title: "首页",
              path: "/home",
              auth: 50,
              children: null
            },
            {
              type: "ditem",
              title: "首页",
              path: "/home",
              auth: 50,
              children: null
            }
          ]
        },
      ]
    }
  ]
}]
