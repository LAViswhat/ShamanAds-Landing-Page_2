<script setup>
import { useI18n } from 'vue-i18n';
import ScrollToSectionButton from '../shared/ScrollToSectionButton.vue';
import heroBg from '@/assets/landings/sexy/images/hero_bg4.jpg';
import heroProductImg from '@/assets/landings/sexy/images/product_1.png';
import heroWomanImg from '@/assets/landings/sexy/images/hero_woman.png';
import TrustIco from '@/assets/landings/sexy/images/logo.png';

const { t } = useI18n();
</script>
<template>
  <!-- Hero Section -->
  <section
    class="py-8 lg:py-16 flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${heroBg})` }"
  >
    <div class="absolute inset-0 bg-gradient-secondary opacity-70"></div>

    <div class="relative container mx-auto px-4 mt-4">
      <div class="max-w-4xl mx-auto text-white">
        <h1 class="text-5xl md:text-7xl font-bold text-foreground mb-2 leading-tight capitalize">
          {{ t('hero.subtitle') }}
          <span class="bg-gradient-primary bg-clip-text text-transparent">{{
            t('hero.title')
          }}</span>
          <br />
          {{ t('hero.subtitle') }}
          <span class="bg-gradient-primary bg-clip-text text-transparent">{{
            t('hero.title')
          }}</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed text-pretty">
          {{ t('hero.subtitle') }}
        </p>
        <div class="relative flex flex-col gap-4 justify-center items-center mt-68">
          <img
            :src="heroWomanImg"
            alt="Smiling Woman"
            class="absolute bottom-0 left-0 transform translate-y-32 lg:translate-y-64 transition-transform duration-500 mx-auto w-3/5 sm:w-1/3"
          />
          <img
            :src="heroProductImg"
            :alt="t('hero.product_alt')"
            class="absolute bottom-0 right-0 transform translate-y-8 hover:scale-105 transition-transform duration-500 mx-auto w-2/3 sm:w-1/3"
          />
          <img
            :src="TrustIco"
            alt="100% Natural"
            class="absolute bottom-full right-8 -translate-y-48 w-20 h-20"
          />
        </div>
        <div class="flex justify-center">
          <ScrollToSectionButton
            severity="primary"
            :label="t('hero.cta_button')"
            className="!text-xl px-8 !py-4 animate-float mt-22 shadow-coral hover:!text-red-400"
            sectionId="#promo"
          />
        </div>
        <div
          class="flex items-center justify-around lg:justify-center gap-6 text-sm text-muted-foreground pt-4 relative"
        >
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 bg-coral rounded-full" />
            <span class="flex-1"
              >Lorem <br />
              30 ipsum</span
            >
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 bg-coral rounded-full" />
            <span class="flex-1"
              >94.577+ <br />
              Lorem</span
            >
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 bg-coral rounded-full" />
            <span class="flex-1">4.9 ★<br />Lorem ipsum</span>
          </div>
        </div>
      </div>
      <div
        class="absolute top-20 right-2 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-float"
      />
      <div
        class="absolute top-60 left-2 w-28 h-28 bg-gradient-primary rounded-full opacity-15 animate-float"
      />
    </div>
  </section>
</template>
