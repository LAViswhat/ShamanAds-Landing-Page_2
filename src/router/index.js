import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '@/views/Main.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});

export default router;
