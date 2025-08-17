<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import { Button } from 'primevue';

const props = defineProps({
  sectionId: { type: String, required: true },
  label: { type: String, default: 'Scroll' },
  severity: { type: String, default: 'secondary' },
  size: { type: String, default: 'large' },
  raised: { type: Boolean, default: true },
  className: { type: String, default: '' },
});

const scrollY = ref(0);
const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const scrollToSection = (event) => {
  event.preventDefault();

  const section = document.querySelector(props.sectionId);

  if (section) {
    const offsetTop = section.getBoundingClientRect().top + window.scrollY + 300;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <Button
    :label="label"
    :severity="severity"
    :size="size"
    :raised="raised"
    :class="className"
    @click="scrollToSection"
  />
</template>
