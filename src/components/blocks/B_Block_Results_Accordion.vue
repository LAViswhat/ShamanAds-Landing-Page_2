<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';

const { t } = useI18n();

const resultsData = [
  {
    before: t('results.0.before'),
    after: t('results.0.after'),
  },
  {
    before: t('results.1.before'),
    after: t('results.1.after'),
  },
  {
    before: t('results.2.before'),
    after: t('results.2.after'),
  },
  {
    before: t('results.3.before'),
    after: t('results.3.after'),
  },
  {
    before: t('results.4.before'),
    after: t('results.4.after'),
  },
  {
    before: t('results.5.before'),
    after: t('results.5.after'),
  },
];

// Автоматический импорт всех изображений из папки results
const images = import.meta.glob('@/assets/images/results/*.{jpg,png,jpeg,gif,webp}', {
  eager: true,
  import: 'default',
});

// Массив слайдов (можно добавить подписи, даты и т.д.)
const results = ref(
  Object.keys(images).map((path, idx) => ({
    image: images[path],
    name: t('results.name', { number: idx + 1 }),
    before: resultsData[idx] ? resultsData[idx].before : '',
    after: resultsData[idx] ? resultsData[idx].after : '',
    loaded: false,
  })),
);

const showAll = ref(false);
const visibleResults = computed(() => {
  return showAll.value ? results.value : results.value.slice(0, 3);
});

// Функция для обработки загрузки изображения
const onImageLoad = (item) => {
  item.loaded = true;
};
</script>
<template>
  <section class="text-center px-2 pb-16">
    <h2 class="text-3xl lg:text-4xl mb-4">{{ t('results.title') }}</h2>
    <div class="mt-4 flex flex-col justify-center items-center gap-2">
      <TransitionGroup name="fade-slide" tag="div">
        <div
          v-for="item in visibleResults"
          :key="item.name"
          class="p-2 shadow-2xl rounded-lg relative"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="rounded max-w-full"
            @load="onImageLoad(item)"
            v-show="item.loaded"
          />
          <div
            v-if="!item.loaded"
            class="w-full h-auto bg-gray-200 animate-pulse"
            style="aspect-ratio: 1 / 1.1"
          ></div>
          <div>
            <p
              v-if="item.loaded"
              class="text-white bg-gray-950/75 font-bold px-2 py-1 w-36 rounded absolute bottom-4 left-1/4 -translate-x-1/2"
            >
              {{ item.before }}
            </p>
            <p
              class="text-white bg-gray-950/75 font-bold px-2 py-1 w-36 rounded absolute bottom-4 left-3/4 -translate-x-1/2"
            >
              {{ item.after }}
            </p>
          </div>
        </div>
      </TransitionGroup>

      <Button
        v-if="!showAll && results.length > 3"
        :label="t('results.more')"
        @click="showAll = true"
        class="mt-4"
      />
    </div>
  </section>
</template>
<style scoped>
.fade-slide-enter-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}
</style>
