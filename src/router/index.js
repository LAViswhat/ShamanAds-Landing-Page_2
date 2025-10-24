import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/shaman',
    },
    {
      path: '/shaman',
      name: 'ShamanLanding',
      component: () => import('@/views/ShamanLanding.vue'),
      meta: {
        title: 'Shaman Landing',
        theme: 'shamanlanding',
      },
    },
    // Пример для будущих лендингов:
    // {
    //   path: '/newlanding',
    //   name: 'NewLanding',
    //   component: () => import('@/views/NewLanding.vue'),
    //   meta: {
    //     title: 'New Landing',
    //     theme: 'newlanding'
    //   }
    // }
  ],
});

// Устанавливаем тему при переходе на роут
router.beforeEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title;
  }
  if (to.meta?.theme) {
    document.documentElement.setAttribute('data-theme', to.meta.theme);
  }
});

export default router;
