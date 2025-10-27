// Импортируем стили shamanlanding по умолчанию (как основные)
import './assets/landings/shamanlanding/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import AnimateOnScroll from 'primevue/animateonscroll';
import VueSplide from '@splidejs/vue-splide';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCircleCheck,
  faSeedling,
  faFeather,
  faFeatherPointed,
  faLeaf,
  faUserShield,
  faClock,
  faBolt,
  faStar,
  faMoon,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import ro from './locales/ro.json';
import pl from './locales/pl.json';

library.add(
  faCircleCheck,
  faSeedling,
  faFeather,
  faFeatherPointed,
  faLeaf,
  faUserShield,
  faClock,
  faBolt,
  faStar,
  faMoon,
  faCircleInfo,
);

const i18n = createI18n({
  legacy: false,
  locale: 'ro',
  fallbackLocale: 'ro',
  messages: {
    ro,
    pl,
  },
});

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app
  .use(router)
  .use(i18n)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: false || 'none',
      },
    },
    pt: {
      button: {
        root: {
          class:
            'font-heading transition-transform !duration-400 transform hover:scale-105 min-w-24',
        },
      },
      message: {
        text: {
          class: 'text-destructive',
        },
      },
    },
    ripple: true,
  })
  .use(VueSplide)
  .directive('animateonscroll', AnimateOnScroll);

app.mount('#app');
