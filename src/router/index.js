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
router.beforeEach((to, from) => {
  if (to.meta?.title) {
    document.title = to.meta.title;
  }

  // Очищаем предыдущие CSS классы и атрибуты тем
  if (from.meta?.theme) {
    document.body.classList.remove(`landing-${from.meta.theme}`);
    document.documentElement.removeAttribute('data-theme');
  }

  // Устанавливаем новую тему
  if (to.meta?.theme) {
    document.documentElement.setAttribute('data-theme', to.meta.theme);
    document.body.classList.add(`landing-${to.meta.theme}`);
  }

  // Принудительная очистка всех возможных классов лендингов
  const allThemeClasses = ['landing-shamanlanding', 'landing-medicallanding', 'landing-sexy'];
  allThemeClasses.forEach((className) => {
    if (className !== `landing-${to.meta?.theme}`) {
      document.body.classList.remove(className);
    }
  });
});
export default router;
