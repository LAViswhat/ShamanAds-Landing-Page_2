<script setup>
import { onMounted, onUnmounted } from 'vue';
import sectionBg from '@/assets/landings/sexy/images/featureSectionBg.jpeg';
import productImg from '@/assets/landings/sexy/images/product_1.png';
import ScrollToSectionButton from '../shared/ScrollToSectionButton.vue';
import { useTimerStore } from '@/composables/useTimerStore';
import { useI18n } from 'vue-i18n';
import featureImg1 from '@/assets/landings/sexy/images/icons/heart.svg';
import featureImg2 from '@/assets/landings/sexy/images/icons/potency.png';
import featureImg3 from '@/assets/landings/sexy/images/icons/renal.png';
import featureImg4 from '@/assets/landings/sexy/images/icons/eye.png';

const { minutes, seconds, startTimer, stopTimer } = useTimerStore();

onMounted(() => {
  startTimer();
});
onUnmounted(() => {
  stopTimer();
});

const { t } = useI18n();

const features = [
  {
    title: 'features.items.0.title',
    description: 'features.items.0.description',
    image: featureImg1,
  },
  {
    title: 'features.items.1.title',
    description: 'features.items.1.description',
    image: featureImg2,
  },
  {
    title: 'features.items.2.title',
    description: 'features.items.2.description',
    image: featureImg3,
  },
  {
    title: 'features.items.3.title',
    description: 'features.items.3.description',
    image: featureImg4,
  },
];
</script>
<template>
  <section id="features" class="py-12 relative overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${sectionBg})` }"
    >
      <div class="absolute inset-0 bg-gradient-secondary opacity-90" />
    </div>
    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-8">
        <h2 class="text-4xl lg:text-5xl font-bold text-foreground mb-2 leading-tight capitalize">
          {{ t('features.title') }}
          <br />
          <span class="bg-gradient-primary bg-clip-text text-transparent">{{
            t('features.title')
          }}</span>
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          {{ t('features.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div class="relative animate-float">
          <div>
            <img
              :src="productImg"
              alt="Premium weight loss supplement bottle"
              class="w-4/5 lg:w-full mx-auto h-auto object-cover"
            />
          </div>
          <div
            class="absolute bottom-4 right-10 bg-gradient-accent text-muted-foreground px-6 py-3 rounded-full font-bold text-lg shadow-soft transform -rotate-32"
          >
            {{ t('features.title') }}
          </div>
        </div>
        <div>
          <div class="space-y-4">
            <h3 class="text-3xl font-bold mb-4 text-foreground">
              {{ t('features.title') }}
            </h3>
            <p class="text-lg text-muted-foreground mb-6">{{ t('features.subtitle') }}</p>
          </div>
          <div class="grid gap-1 mb-4">
            <div
              v-for="feature in features"
              class="mb-6 text-left p-4 bg-[var(--pink-blush)]/50 border-1 border-[var(--coral)]/20 shadow-soft rounded-lg group hover:shadow-xl transition-shadow duration-300"
            >
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 bg-coral rounded-full"></div>
                <span class="font-semibold text-pretty">{{ t(feature.title) }}</span>
              </div>
              <p class="text-sm text-muted-foreground ml-6 mt-1 text-pretty">
                {{ t(feature.description) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-2 items-center justify-center mx-auto">
        <div class="text-center">
          <div class="text-normal font-semibold text-foreground opacity-50">Lorem ipsum</div>
          <div
            class="text-xl font-bold text-foreground opacity-50 relative before:absolute before:top-1/2 before:left-1/4 before:w-20 before:h-1 before:bg-[var(--foreground)] before:-rotate-[20deg]"
          >
            {{ t('timer.old_price') }}
          </div>
        </div>
        <div class="relative text-center text-coral">
          <div class="text-3xl lg:text-6xl font-bold">
            {{ t('timer.new_price') }}
          </div>
          <div class="text-xl lg:text-2xl font-bold">Lorem ipsum</div>
        </div>
      </div>
      <div class="flex flex-row justify-center items-center gap-2 mt-4">
        <div
          class="bg-coral backdrop-blur-2xl text-white rounded-lg min-w-21 px-3 py-2 text-2xl font-bold flex flex-col justify-center items-center gap-0 transition-transform duration-500"
        >
          <p>{{ String(minutes).padStart(2, '0') }}</p>
          <span class="text-sm">Lorem ipsum</span>
        </div>
        <span class="text-3xl font-bold text-foreground">:</span>
        <div
          class="bg-coral backdrop-blur-2xl text-white rounded-lg min-w-21 px-3 py-2 text-2xl font-bold flex flex-col justify-center items-center gap-0 transition-transform duration-500"
        >
          <p>{{ String(seconds).padStart(2, '0') }}</p>
          <span class="text-sm">Lorem ipsum</span>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <ScrollToSectionButton
          severity="primary"
          :label="t('hero.cta_button')"
          className="!text-xl px-8 !py-4 mt-6 shadow-coral hover:!text-red-400"
          sectionId="#promo"
        />
        <p class="text-sm text-center text-muted-foreground mt-4">
          {{ t('buttons.more') }}
        </p>
      </div>
    </div>
  </section>
</template>
