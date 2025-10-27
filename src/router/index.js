import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/landing_1',
    },
    {
      path: '/landing_1',
      name: 'Landing_1',
      component: () => import('@/views/ShamanLanding.vue'),
      meta: {
        title: 'Landing_1',
        theme: 'shamanlanding',
      },
    },
    {
      path: '/landing_2',
      name: 'Landing_2',
      component: () => import('@/views/MedicalLanding.vue'),
      meta: {
        title: 'Landing_2',
        theme: 'medicallanding',
      },
    },
    {
      path: '/landing_3',
      name: 'Landing_3',
      component: () => import('@/views/SexyLanding.vue'),
      meta: {
        title: 'Landing_3',
        theme: 'sexy',
      },
    },
  ],
});

// Устанавливаем тему при переходе на роут
router.beforeEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title;
  }
  if (to.meta?.theme) {
    document.documentElement.setAttribute('data-theme', to.meta.theme);
    // Убираем все предыдущие классы тем
    document.body.className = document.body.className.replace(/landing-\w+/g, '');
    // Добавляем класс текущей темы
    document.body.classList.add(`landing-${to.meta.theme}`);
  }
});
export default router;
