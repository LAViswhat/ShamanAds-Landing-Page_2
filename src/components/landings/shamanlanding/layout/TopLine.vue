<script setup>
import { useI18n } from 'vue-i18n';
import Logo from '../shared/Logo.vue';

const { t } = useI18n();

const date = new Date().toLocaleDateString('ro-RO', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
</script>
<template>
  <div class="bg-radial-gradient text-center w-full mx-auto py-2 relative">
    <div class="absolute top-0 left-0 bottom-0 right-0 bg-white opacity-30 z-0"></div>
    <div class="z-10 relative flex items-center justify-around">
      <Logo class="w-1/4 text-white" />
      <h2 class="text-white w-3/4">
        {{ t('topline.offer_today') }} <br />
        <span>{{ date }}</span>
      </h2>
    </div>
  </div>
</template>

<style scoped></style>
