import { createRouter, createWebHashHistory } from "vue-router";
export default createRouter({
  // 路由的模式的设置
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: () => {
        return { path: '/home' }
      }
    },
    {
      path: '/home',
      component: () => import('@/pages/home/index.vue'),
    },
    {
      path: '/hospital',
      component: () => import('@/pages/hospital/index.vue'),
      children: [
        {
          path: 'register',
          component: () => import('@/pages/hospital/register/index.vue')
        },
        {
          path: 'detail',
          component: () => import('@/pages/hospital/detail/index.vue')
        },
        {
          path: 'notice',
          component: () => import('@/pages/hospital/notice/index.vue')
        },
        {
          path: 'search',
          component: () => import('@/pages/hospital/search/index.vue')
        },
        {
          path: 'close',
          component: () => import('@/pages/hospital/close/index.vue')
        },
        {
          path: 'register',
          component: () => import('@/pages/hospital/register/index.vue')
        }
      ]
    }
  ],
  //滚动行为：控制滚动条的位置
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
});