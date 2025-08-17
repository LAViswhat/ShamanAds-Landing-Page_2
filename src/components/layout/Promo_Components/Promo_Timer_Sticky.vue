<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTimerStore } from '@/composables/useTimerStore';

const { t } = useI18n();

const { minutes, seconds, stock, startTimer, stopTimer } = useTimerStore();

// Показываем стики таймер

const timerRef = ref(null);
const showSticky = ref(false);
const hideMainTimer = ref(false);

const handleScroll = () => {
  if (!timerRef.value) return;
  const rect = timerRef.value.getBoundingClientRect();
  const shouldShowSticky = rect.top < -100;

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
  <div ref="timerRef" class="flex flex-col justify-center items-center pt-4">
    <h3 class="text-headings text-center">{{ t('timer.title') }}</h3>
    <div class="flex flex-row justify-center items-center gap-2">
      <div
        class="bg-gradient-primary backdrop-blur-2xl text-white rounded-lg shadow-glow w-[100px] px-4 py-2 text-3xl font-bold flex flex-col justify-center items-center gap-0 transition-transform duration-500"
        :class="{ 'translate-y-full opacity-0 pointer-events-none': hideMainTimer }"
      >
        <p>{{ String(minutes).padStart(2, '0') }}</p>
        <span class="text-base">{{ t('timer.minutes') }}</span>
      </div>
      <span class="text-3xl font-bold">:</span>
      <div
        class="bg-gradient-primary backdrop-blur-2xl text-white rounded-lg shadow-glow w-[100px] px-4 py-2 text-3xl font-bold flex flex-col justify-center items-center gap-0 transition-transform duration-500"
        :class="{ 'translate-y-full opacity-0 pointer-events-none': hideMainTimer }"
      >
        <p>{{ String(seconds).padStart(2, '0') }}</p>
        <span class="text-base">{{ t('timer.seconds') }}</span>
      </div>
    </div>
    <div class="mt-4 text-xl text-center">
      <p>
        {{ t('timer.instead_of') }}
        <span
          class="text-2xl relative before:absolute before:top-1/2 before:left-0 before:w-full before:h-1 before:bg-red-500 before:-rotate-[15deg]"
          >{{ t('timer.old_price') }}</span
        >
      </p>
      <p class="mt-2">
        {{ t('timer.only') }}
        <span class="text-4xl font-bold text-secondary">{{ t('timer.new_price') }}</span>
      </p>
    </div>
    <div class="mt-4 bg-gradient-promo text-white animate-pulse-glow text-xl p-4 rounded-lg">
      <p class="">
        {{ t('timer.left') }}
        <Transition name="stock-change" mode="out-in" @after-enter="highlightStock">
          <span
            :key="stockKey"
            class="font-bold text-xl inline-block"
            :class="{ highlight: isHighlighted }"
            >{{ stock }} {{ t('timer.pieces') }}</span
          >
        </Transition>
        {{ t('timer.in_stock') }}
      </p>
    </div>

    <Transition name="slide-up">
      <div
        v-if="showSticky"
        class="fixed bottom-0 left-0 right-0 w-full z-50 bg-gradient-primary text-white px-4 py-2 shadow-lg flex justify-between items-center transition-transform duration-500"
      >
        <div class="flex items-center gap-2 text-xl font-bold">
          ⏳ {{ String(minutes).padStart(2, '0') }}:{{ String(seconds).padStart(2, '0') }}
        </div>
        <div class="text-sm">
          <p class="text-white">
            Ultimele
            <Transition name="stock-change" mode="out-in" @after-enter="highlightStock">
              <span :key="stockKey" class="text-lg font-bold" :class="{ highlight: isHighlighted }"
                >{{ stock }} {{ t('timer.pieces') }}</span
              >
            </Transition>
            {{ t('timer.sticky_at_this_price') }}
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
:deep(.p-button) {
  display: block !important;
}

/* Анимация для основного таймера (съезд вниз и исчезновение) */
.translate-y-full {
  transform: translateY(100%);
}
.opacity-0 {
  opacity: 0;
}
.pointer-events-none {
  pointer-events: none; /* чтобы нельзя было нажать, когда скрыт */
}

/* Анимация для стики-полоски (появление снизу) */
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

/* Анимация для изменения значения stock */
.stock-change-enter-active,
.stock-change-leave-active {
  transition: all 0.3s ease;
}

.stock-change-enter-from {
  opacity: 0;
  transform: scale(0.4);
  color: #ffcc00;
}

.stock-change-leave-to {
  opacity: 0;
  transform: scale(1.5);
  color: #ffcc00;
}

/* Анимация подсветки */
.highlight {
  animation: highlightFlash 0.5s ease;
}

@keyframes highlightFlash {
  0% {
    color: inherit;
    transform: scale(1);
  }
  50% {
    color: #ffcc00; /* Яркий желтый */
    transform: scale(1.05); /* Легкое увеличение */
    text-shadow: 0 0 8px rgba(255, 204, 0, 0.5); /* Свечение */
  }
  100% {
    color: inherit;
    transform: scale(1);
  }
}
</style>
