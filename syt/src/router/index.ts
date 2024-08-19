import { createRouter, createWebHashHistory } from "vue-router";
export default createRouter({
  // 路由的模式的设置
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: () => import('@/pages/home/index.vue')
    },
    {
      path: '/hospital',
      component: () => import('@/pages/hospital/index.vue')
    }
  ],
  //滚动行为：控制滚动条的位置
  scrollBehavior () {
    return {
      left: 0,
      top: 0
    }
  }
});