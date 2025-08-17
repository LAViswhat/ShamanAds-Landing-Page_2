<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Dialog from 'primevue/dialog';

/* Сохраняю в ЛокалСторедж время создания (открытия лэнда). При следующей загрузке проверям прошло 15 минут или нет. Если прошли, то обновляем таймер.
const LS_KEY = 'promo-timer-state';
const TTL = 15 * 60 * 1000; // 15 минут в миллисекундах

function loadState() {
  try {
    const data = JSON.parse(localStorage.getItem(LS_KEY));
    if (
      data &&
      typeof data.minutes === 'number' &&
      typeof data.seconds === 'number' &&
      typeof data.stock === 'number' &&
      typeof data.timestamp === 'number'
    ) {
      // Проверяем TTL
      if (Date.now() - data.timestamp < TTL) {
        return data;
      } else {
        localStorage.removeItem(LS_KEY);
      }
    }
  } catch (e) {}
  return { minutes: 10, seconds: 0, stock: 12 };
}

function saveState(minutes, seconds, stock) {
  localStorage.setItem(
    LS_KEY,
    JSON.stringify({
      minutes,
      seconds,
      stock,
      timestamp: Date.now(),
    })
  );
}
*/
const { t } = useI18n();

const LS_KEY = 'promo-timer-state';

function loadState() {
  try {
    const data = JSON.parse(sessionStorage.getItem(LS_KEY));
    if (
      data &&
      typeof data.minutes === 'number' &&
      typeof data.seconds === 'number' &&
      typeof data.stock === 'number'
    ) {
      return data;
    }
  } catch (e) {}
  return { minutes: 10, seconds: 0, stock: 12 };
}

function saveState(minutes, seconds, stock) {
  sessionStorage.setItem(LS_KEY, JSON.stringify({ minutes, seconds, stock }));
}

const state = loadState();
const minutes = ref(state.minutes);
const seconds = ref(state.seconds);
const stock = ref(state.stock);

let timer = null;

const visible = ref(true);

const startTimer = () => {
  timer = setInterval(() => {
    if (seconds.value === 0) {
      if (minutes.value === 0) {
        clearInterval(timer);
        return;
      }
      minutes.value--;
      seconds.value = 59;
    } else {
      seconds.value--;
    }

    // Показываем диалоговое окно, когда осталось 5 минут
    if (minutes.value === 5 && seconds.value === 55) {
      visible.value = true;
    }

    // Показываем остаток товара в зависимости от оставшегося времени

    if (minutes.value === 9 && seconds.value === 55) {
      stock.value--;
    } else if (minutes.value === 9 && seconds.value === 37) {
      stock.value = 9;
    } else if (minutes.value === 7 && seconds.value === 49) {
      stock.value = 5;
    } else if (minutes.value === 3) {
      stock.value = 3;
    }

    saveState(minutes.value, seconds.value, stock.value);
  }, 1000);
};

onMounted(startTimer);
onUnmounted(() => clearInterval(timer));
</script>
<template>
  <div class="flex flex-col justify-center items-center pt-4">
    <h3 class="text-headings text-center">{{ t('timer.title') }}</h3>
    <div class="flex flex-row justify-center items-center gap-2">
      <div
        class="bg-primary backdrop-blur-2xl text-white rounded-lg shadow-xl w-[100px] px-4 py-2 text-3xl font-bold flex flex-col justify-center items-center gap-0"
      >
        <p>{{ String(minutes).padStart(2, '0') }}</p>
        <span class="text-base">{{ t('timer.minutes') }}</span>
      </div>
      <span class="text-3xl font-bold">:</span>
      <div
        class="bg-primary backdrop-blur-2xl text-white rounded-lg shadow-xl w-[100px] px-4 py-2 text-3xl font-bold flex flex-col justify-center items-center gap-0"
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
        <span class="text-4xl font-bold text-green-500">{{ t('timer.new_price') }}</span>
      </p>
    </div>
    <div class="mt-4 bg-primary backdrop-blur-2xl text-white text-lg p-4 rounded-lg">
      <p>
        {{ t('timer.left') }}
        <span class="font-bold text-xl">{{ stock }} {{ t('timer.pieces') }}</span>
        {{ t('timer.in_stock') }}
      </p>
    </div>

    <Dialog
      pt:header:class="!p-2 relative"
      pt:headerActions:class="absolute inset-0 -translate-x-[30px] translate-y-[10px]"
      pt:content:class="!pt-2"
      v-model:visible="visible"
      position="topright"
      class="bg-radial-gradient"
    >
      <p class="text-white">
        {{ t('timer.dialog_left') }}
        <b class="text-lg"
          >{{ String(minutes).padStart(2, '0') }} : {{ String(seconds).padStart(2, '0') }}</b
        >
        {{ t('timer.dialog_to_finish') }}
      </p>
      <p class="text-white">
        {{ t('timer.dialog_last') }} <b class="text-lg">{{ stock }} {{ t('timer.pieces') }}</b>
        {{ t('timer.dialog_at_this_price') }}
      </p>
    </Dialog>
  </div>
</template>

<style scoped>
:deep(.p-button) {
  display: block !important;
}
</style>
