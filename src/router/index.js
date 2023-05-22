import VueRouter from "vue-router";
// 解决编程路由导航反复点击报错问题
const includPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return includPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
  return includPush.call(this, location).catch((err) => err);
};
// index.js注册路由
const router = new VueRouter({
  routes: [
    {
      // 重定向
      path: "*",
      redirect: "/FindMusic",
    },
    {
      //这个name是编程式路由导航里面使用的name
      name: "FindMusic",
      path: "/FindMusic",
      redirect: "/FindMusic/PersonRec",
      component: () => import("@/pages/find-music"),
      children: [
        {
          name: "PersonRec",
          path: "/FindMusic/PersonRec",
          component: () => import("@/pages/find-music/person-rec"),
        },
        {
          name: "NewMv",
          path: "/FindMusic/NewMv",
          component: () => import("@/pages/find-music/new-mv"),
        },
        {
          name: "SongList",
          path: "/FindMusic/AllList",
          component: () => import("@/pages/find-music/all-list"),
        },
      ],
    },
    {
      //这个name是编程式路由导航里面使用的name
      name: "PersonFm",
      path: "/PersonFm",
      component: () => import("@/pages/person-fm"),
    },
    {
      name: "PlayList",
      path: "/PlayList",
      redirect: "/PlayList/SongList",
      component: () => import("@/pages/play-list"),
      children: [
        {
          name: "SongList",
          path: "/PlayList/SongList",
          component: () => import("@/pages/play-list/songs-list"),
        },
      ],
    },
    {
      name: "SearchList",
      path: "/SearchList",
      component: () => import("@/pages/search-list"),
    },
    {
      name: "MvDetail",
      path: "/FindMusic/MvDetail",
      component: () => import("@/pages/find-music/new-mv/mv-detail"),
    },
  ],
});
export default router;
