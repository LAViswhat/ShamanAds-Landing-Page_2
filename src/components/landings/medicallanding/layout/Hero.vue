<script setup>
import { useI18n } from 'vue-i18n';

import ScrollToSectionButton from '../shared/ScrollToSectionButton.vue';
import heroMedicalBg from '@/assets/landings/medicallanding/images/hero_bg-min.jpg';
import heroProductImg from '@/assets/landings/medicallanding/images/product_1.png';
import TrustIco from '@/assets/landings/medicallanding/images/top.png';

const { t } = useI18n();
</script>
<template>
  <!-- Hero Section -->
  <section
    class="min-h-screen py-12 flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${heroMedicalBg})` }"
  >
    <div class="absolute inset-0 bg-gradient-hero opacity-25"></div>

    <div class="relative container mx-auto px-4 mt-4 pb-4">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h1 class="text-5xl md:text-7xl font-bold mb-2 leading-tight">
          {{ t('hero.title') }}
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed text-pretty">
          {{ t('hero.subtitle') }}
        </p>
        <div class="relative flex flex-col gap-4 justify-center items-center mt-64">
          <img
            :src="heroProductImg"
            alt="Insuvit"
            class="absolute bottom-6 -right-4 rounded-3xl transform hover:scale-105 transition-transform duration-500 mx-auto w-2/3 sm:w-1/3"
          />
          <img :src="TrustIco" alt="Insuvit" class="absolute -top-64 right-0 w-20 h-20" />
          <ScrollToSectionButton
            severity="primary"
            :label="t('hero.cta_button')"
            className="!text-xl px-8 !py-4 animate-float "
            sectionId="#promo"
          />
        </div>
      </div>
    </div>
  </section>
</template>
