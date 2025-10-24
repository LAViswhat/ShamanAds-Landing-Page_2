<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{ targetValue: number }>();

const currentValue = ref(0);
const observer = ref<IntersectionObserver | null>(null);
const counterElement = ref<HTMLDivElement | null>(null);

const animateCounter = (start: number, end: number, duration: number) => {
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    currentValue.value = Math.floor(progress * (end - start) + start);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

onMounted(() => {
  if (counterElement.value) {
    observer.value = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounter(0, props.targetValue, 1500); // Анимация 2 секунды
          observer.value?.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.value.observe(counterElement.value);
  }
});
</script>

<template>
  <span ref="counterElement" class="font-bold">{{ currentValue }}</span>
</template>
