<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTimerStore } from '@/composables/useTimerStore';
import UiAnimatedCounter from '@/components/landings/shamanlanding/ui/UiAnimatedCounter.vue';
import ClockIco from '@/assets/landings/shamanlanding/images/icons/clock.svg';

const { t } = useI18n();

const { minutes, seconds, stock, startTimer, stopTimer } = useTimerStore();

const timerRef = ref(null);
const showSticky = ref(false);
const hideMainTimer = ref(false);

const handleScroll = () => {
  if (!timerRef.value) return;
  const rect = timerRef.value.getBoundingClientRect();
  const shouldShowSticky = rect.top < -300;

  showSticky.value = shouldShowSticky;
  hideMainTimer.value = shouldShowSticky;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  startTimer();
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  stopTimer();
});

const stockKey = ref(0);

watch(stock, (newVal, oldVal) => {
  // Активируем анимацию только если значение stock действительно изменилось
  if (newVal !== oldVal) {
    stockKey.value++; // Изменяем ключ, чтобы Transition/TransitionGroup сработали
  }
});

const isHighlighted = ref(false);

const highlightStock = () => {
  isHighlighted.value = true;
  setTimeout(() => {
    isHighlighted.value = false;
  }, 500); // 0.5 секунды подсветки
};
</script>
<template>
  <div ref="timerRef">
    <section class="py-16 bg-gradient-warn-light relative overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ffd966_0%,_transparent_70%)] opacity-5"
      ></div>
      <div class="container mx-auto px-4 text-center relative">
        <!-- Urgent offer badge -->
        <div class="text-center mb-8 animate-pulse bg-gradient-warn rounded-4xl">
          <div
            class="text-base lg:text-xl px-6 py-2 flex flex-row items-center justify-center gap-2 mx-auto"
          >
            <img :src="ClockIco" alt="Clock" class="w-8 h-8" />
            <h4 class="text-white text-pretty">
              {{ t('timer.limited_time') }}
            </h4>
          </div>
        </div>
        <h2 class="text-4xl lg:text-6xl font-bold normal-case mb-2">
          Lorem, ipsum dolor.
          <Transition name="stock-change" mode="out-in" @after-enter="highlightStock">
            <span
              :key="stockKey"
              class="text-danger animate-pulse inline-block"
              :class="{ highlight: isHighlighted }"
              >{{ stock }} {{ t('timer.pieces') }}</span
            >
          </Transition>
          Lorem, ipsum.
        </h2>
        <p class="text-2xl text-slate-500">
          Lorem <span class="text-headings font-bold">99% lorem</span> - Lorem ipsum dolor sit amet.
        </p>
        <div class="flex flex-row justify-center items-center gap-2 mt-4">
          <div
            class="bg-destructive backdrop-blur-2xl text-white rounded-lg animate-pulse-glow-timer min-w-15 px-3 py-4 text-3xl font-bold flex flex-col justify-center items-center gap-0 transition-transform duration-500"
          >
            <p>{{ String(minutes).padStart(2, '0') }}</p>
          </div>
          <span class="text-3xl font-bold">:</span>
          <div
            class="bg-destructive backdrop-blur-2xl text-white rounded-lg animate-pulse-glow-timer min-w-15 px-3 py-4 text-3xl font-bold flex flex-col justify-center items-center gap-0 transition-transform duration-500"
          >
            <p>{{ String(seconds).padStart(2, '0') }}</p>
          </div>
        </div>
        <div class="grid md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto mt-6">
          <div class="text-center p-4 bg-[#16a249]/5 rounded-xl border border-[#16a249]/20">
            <div class="text-xl text-slate-500">Lorem, ipsum dolor.</div>
            <div
              class="text-3xl font-bold text-danger relative before:absolute before:top-1/2 before:left-1/4 before:w-32 before:h-1 before:bg-[#ef4444] before:-rotate-[17deg]"
            >
              999as
            </div>
          </div>

          <div class="text-center space-y-2 relative">
            <div
              class="absolute -inset-4 bg-gradient-primary rounded-2xl blur-2xl opacity-40 animate-pulse-glow"
            ></div>
            <div class="relative bg-radial-gradient text-white p-6 rounded-2xl shadow-glow">
              <div class="text-2xl font-semibold">LOrem!</div>
              <div class="text-6xl font-bold">111</div>
              <div class="text-2xl font-semibold">LOrem !</div>
            </div>
          </div>

          <div
            class="text-center space-y-2 p-4 bg-[#16a249]/5 rounded-xl border border-[#16a249]/20"
          >
            <div class="text-2xl text-primary font-semibold">Lorem</div>
            <div class="text-4xl font-bold text-primary">374</div>
            <div class="text-lg text-slate-500">
              <span class="font-bold text-2xl">99%</span> Lorem ipsum dolor sit amet!
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-8">
          <div class="inline-flex justify-center gap-1 text-headings">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 15 16">
              <path
                fill="#374151"
                d="M7.5 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m0-4C6.67 3 6 3.67 6 4.5S6.67 6 7.5 6S9 5.33 9 4.5S8.33 3 7.5 3"
              />
              <path
                fill="#374151"
                d="M13.5 11c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5-.22.5-.5A2.5 2.5 0 0 0 11.5 7h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.83 0 1.5-.67 1.5-1.5S11.33 3 10.5 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5A2.5 2.5 0 0 1 13 4.5c0 .62-.22 1.18-.6 1.62c1.49.4 2.6 1.76 2.6 3.38c0 .83-.67 1.5-1.5 1.5m-12 0C.67 11 0 10.33 0 9.5c0-1.62 1.1-2.98 2.6-3.38c-.37-.44-.6-1-.6-1.62A2.5 2.5 0 0 1 4.5 2c.28 0 .5.22.5.5s-.22.5-.5.5C3.67 3 3 3.67 3 4.5S3.67 6 4.5 6c.28 0 .5.22.5.5s-.22.5-.5.5h-1A2.5 2.5 0 0 0 1 9.5c0 .28.22.5.5.5s.5.22.5.5s-.22.5-.5.5m9 3h-6c-.83 0-1.5-.67-1.5-1.5v-1C3 9.57 4.57 8 6.5 8h2c1.93 0 3.5 1.57 3.5 3.5v1c0 .83-.67 1.5-1.5 1.5m-4-5A2.5 2.5 0 0 0 4 11.5v1c0 .28.22.5.5.5h6c.28 0 .5-.22.5-.5v-1A2.5 2.5 0 0 0 8.5 9z"
              />
            </svg>
            <p class="self-start">
              <UiAnimatedCounter :targetValue="95477" /> Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
:deep(.p-button) {
  display: block !important;
}

.translate-y-full {
  transform: translateY(100%);
}
.opacity-0 {
  opacity: 0;
}
.pointer-events-none {
  pointer-events: none;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    transform 0.5s ease-out,
    opacity 0.5s ease-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.stock-change-enter-active,
.stock-change-leave-active {
  transition: all 0.3s ease;
}

.stock-change-enter-from {
  opacity: 0;
  transform: scale(0.6);
  color: #fcd7bb;
}

.stock-change-leave-to {
  opacity: 0;
  transform: scale(1.1);
  color: #fcd7bb;
}

.highlight {
  animation: highlightFlash 0.3s ease;
}

@keyframes highlightFlash {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
