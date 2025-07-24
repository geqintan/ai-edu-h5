import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/enrollment',
      name: 'enrollment',
      component: () => import('../views/Enrollment.vue'), // 页面组件已更名为 Enrollment.vue
      meta: { requiresAuth: true } // 添加 meta 字段，表示需要登录
    },
    {
      path: '/customer-service',
      name: 'customerService',
      component: () => import('../views/CustomerService.vue'),
      meta: { requiresAuth: true } // 添加 meta 字段，表示需要登录
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/Payment.vue'),
      meta: { requiresAuth: true } // 添加 meta 字段，表示需要登录
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('../views/My.vue'),
      meta: { requiresAuth: true } // 添加 meta 字段，表示需要登录
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
  ],
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // 检查登录状态
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isLoggedIn) {
    // 如果需要登录但未登录，则重定向到登录页面，并带上 redirect 参数
    next({
      name: 'login',
      query: { redirect: to.fullPath },
    });
  } else {
    next(); // 继续导航
  }
});

export default router
