<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTimerStore } from '@/composables/useTimerStore';
import Dialog from 'primevue/dialog';
import ScrollToSectionButton from '../shared/ScrollToSectionButton.vue';

const { t } = useI18n();

const { minutes, seconds } = useTimerStore();

const visible = ref(false);
let scrollListener = null;
let timer = null;
const showDialog = ref(false);

const showPopup = () => {
  if (!visible.value) {
    visible.value = true;
    removeScrollListener();
    clearTimeout(timer);
  }
};

const handleClick = () => {
  visible.value = false;
  showDialog.value = true;
};

const checkScrollToBenefits = () => {
  const section = document.getElementById('partners');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    showPopup();
  }
};

const addScrollListener = () => {
  scrollListener = () => checkScrollToBenefits();
  window.addEventListener('scroll', scrollListener);
};

const removeScrollListener = () => {
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener);
    scrollListener = null;
  }
};

onMounted(() => {
  // Появление через 6 секунд
  timer = setTimeout(() => {
    showPopup();
  }, 11000);

  // Отслеживание скролла
  addScrollListener();
});

onBeforeUnmount(() => {
  clearTimeout(timer);
  removeScrollListener();
});
</script>

<template>
  <transition name="slide-in">
    <div v-if="visible" class="fixed bottom-8 left-0 z-50 cursor-pointer" @click="handleClick">
      <div
        class="inline-flex relative items-start gap-1.5 font-bold text-white px-4 py-2 animate-shimmer bg-[length:200%_100%] bg-shimmer-gradient w-[364px] lg:w-2xl rounded-tr-2xl rounded-br-2xl shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="absolute top-2 left-2"
        >
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09m8.445-7.188L18 9.75l-.259-1.035a3.38 3.38 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.38 3.38 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.38 3.38 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.38 3.38 0 0 0-2.456 2.456m-1.365 11.852L16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183l.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394l-1.183.394a2.25 2.25 0 0 0-1.423 1.423"
          />
        </svg>
        <p class="text-xl text-pretty ml-6">
          Lorem ipsum dolor sit.
          <span class="text-[#fb2c36] text-2xl font-bold">-0%</span>
          Lorem ipsum dolor sit amet.
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="absolute bottom-2 right-16"
        >
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M14.77 21c1.123-4.649 2.486-6.099 6.23-7.364c-3.934-1.328-5.16-2.94-6.23-7.363c-1.124 4.649-2.488 6.098-6.232 7.363c3.93 1.327 5.163 2.95 6.231 7.364m-8.308-9.818c.512-2.42 1.502-3.512 3.461-4.091C7.963 6.512 6.973 5.42 6.462 3C5.972 5.315 5.047 6.485 3 7.09c1.959.58 2.95 1.672 3.462 4.092"
          />
        </svg>
      </div>
    </div>
  </transition>
  <Dialog
    pt:header:class="!p-4 relative bg-gradient-hero rounded-t-xl relative "
    pt:headerActions:class="absolute top-0 right-0 translate-x-[20px]  "
    pt:content:class="!py-2 bg-gradient-hero relative rounded-b-xl overflow-hidden"
    v-model:visible="showDialog"
    :modal="true"
    :closable="true"
    class="lg:max-w-4xl"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ffd966_0%,_transparent_70%)] opacity-5"
    ></div>
    <div class="mx-auto pt-2 text-center relative">
      <h2 class="text-3xl lg:text-6xl font-bold normal-case mb-2 text-pretty">
        Lorem, ipsum.
        <span class="text-danger animate-pulse font-bold"
          >Lorem ipsum dolor sit amet consectetur.</span
        >
        - Lorem ipsum dolor sit amet.
      </h2>
      <div class="flex flex-row justify-center items-center gap-2 mt-4">
        <div
          class="bg-destructive backdrop-blur-2xl text-white rounded-lg min-w-15 px-3 py-4 text-3xl font-bold flex flex-col justify-center items-center gap-0 transition-transform duration-500"
        >
          <p>{{ String(minutes).padStart(2, '0') }}</p>
        </div>
        <span class="text-3xl font-bold">:</span>
        <div
          class="bg-destructive backdrop-blur-2xl text-white rounded-lg min-w-15 px-3 py-4 text-3xl font-bold flex flex-col justify-center items-center gap-0 transition-transform duration-500"
        >
          <p>{{ String(seconds).padStart(2, '0') }}</p>
        </div>
      </div>
      <div class="flex justify-center text-center space-y-2 mt-4 relative">
        <div
          class="absolute inset-4 bg-gradient-promo rounded-2xl blur-2xl opacity-40 animate-pulse-glow"
        ></div>
        <div
          class="relative flex-1 max-w-64 lg:max-w-96 bg-gradient-primary text-white mt-8 p-2 lg:p-4 rounded-2xl shadow-glow"
        >
          <div class="text-xl lg:text-2xl font-semibold">Lorem, ipsum.</div>
          <div class="text-4xl lg:text-6xl font-bold">111</div>
          <div class="text-xl lg:text-2xl font-semibold">Lorem, ipsum!</div>
        </div>
      </div>

      <ScrollToSectionButton
        section-id="#promo"
        :label="t('buttons.order_now')"
        severity="primary"
        className="animate-pulse-glow mt-14 mb-6"
        :style="{ animationDelay: '1s' }"
        @click="showDialog = false"
      />
    </div>
  </Dialog>
</template>

<style scoped>
.slide-in-enter-active {
  transition: all 0.5s ease;
}
.slide-in-leave-active {
  transition: all 0.3s ease;
}
.slide-in-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-in-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
