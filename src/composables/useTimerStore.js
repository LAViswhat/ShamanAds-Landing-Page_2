import { ref } from 'vue';

const LS_KEY = 'promo-timer-state';
const LS_KEY_INITIAL_DECREMENT_DONE = 'initial-stock-decrement-done';

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
  } catch (e) {
    console.error('Failed to load timer state from sessionStorage:', e);
  }
  return { minutes: 9, seconds: 30, stock: 17 };
}

function saveState(minutes, seconds, stock) {
  sessionStorage.setItem(LS_KEY, JSON.stringify({ minutes, seconds, stock }));
}

// Проверяем, был ли уже выполнен начальный декремент stock
function getInitialDecrementDone() {
  return sessionStorage.getItem(LS_KEY_INITIAL_DECREMENT_DONE) === 'true';
}

function setInitialDecrementDone(done) {
  sessionStorage.setItem(LS_KEY_INITIAL_DECREMENT_DONE, done ? 'true' : 'false');
}

const state = loadState();
const minutes = ref(state.minutes);
const seconds = ref(state.seconds);
const stock = ref(state.stock);
const initialDecrementDone = ref(getInitialDecrementDone()); // Состояние выполнения начального декремента

let timerInterval = null;
let quickDecrementInterval = null;

export function useTimerStore() {
  // Общая функция для безопасного уменьшения stock
  const decreaseStock = () => {
    if (stock.value > 7) {
      stock.value--;
    }
  };

  // Функция для запуска таймера
  const startTimer = () => {
    if (timerInterval) return; // Предотвращаем запуск нескольких таймеров

    timerInterval = setInterval(() => {
      if (seconds.value === 0) {
        if (minutes.value === 0) {
          clearInterval(timerInterval);
          timerInterval = null; // Очищаем ссылку на интервал
          return;
        }
        minutes.value--;
        seconds.value = 59;
      } else {
        seconds.value--;
      }

      updateStockBasedOnTime();

      saveState(minutes.value, seconds.value, stock.value);
    }, 1000);
  };

  const updateStockBasedOnTime = () => {
    if (minutes.value === 9 && seconds.value === 15) {
      decreaseStock();
    } else if (minutes.value === 8 && seconds.value === 57) {
      decreaseStock();
    } else if (minutes.value === 8 && seconds.value === 38) {
      decreaseStock();
    } else if (minutes.value === 8 && seconds.value === 11) {
      decreaseStock();
    } else if (minutes.value === 7 && seconds.value === 50) {
      //12
      decreaseStock();
    } else if (minutes.value === 7 && seconds.value === 25) {
      decreaseStock();
    } else if (minutes.value === 6 && seconds.value === 53) {
      decreaseStock();
    } else if (minutes.value === 6 && seconds.value === 17) {
      decreaseStock();
    } else if (minutes.value === 5 && seconds.value === 34) {
      decreaseStock();
    } else if (minutes.value === 3 && seconds.value === 59) {
      if (stock.value > 7) stock.value = 7;
    }
  };

  // Функция для быстрого отсчета stock до 7
  const startQuickDecrement = () => {
    if (initialDecrementDone.value) return; // Если уже выполнялось, не запускаем

    if (stock.value > 7) {
      // Устанавливаем флаг, что начальный декремент начат
      setInitialDecrementDone(true);
      initialDecrementDone.value = true; // Обновляем реактивный ref

      quickDecrementInterval = setInterval(() => {
        if (stock.value > 7) {
          stock.value--;
          saveState(minutes.value, seconds.value, stock.value); // Сохраняем состояние
        } else {
          clearInterval(quickDecrementInterval);
          quickDecrementInterval = null;
        }
      }, 100); // Быстрое уменьшение каждые 100 мс
    } else {
      // Если stock уже 7 или меньше, просто помечаем как выполненный
      setInitialDecrementDone(true);
      initialDecrementDone.value = true;
    }
  };

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  };

  return {
    minutes,
    seconds,
    stock,
    initialDecrementDone,
    startQuickDecrement,
    startTimer,
    stopTimer,
  };
}
