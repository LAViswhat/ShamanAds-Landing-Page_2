<script setup>
import { useI18n } from 'vue-i18n';
import featureImg1 from '@/assets/landings/medicallanding/images/icons/heart.svg';
import featureImg2 from '@/assets/landings/medicallanding/images/icons/potency.png';
import featureImg3 from '@/assets/landings/medicallanding/images/icons/renal.png';
import featureImg4 from '@/assets/landings/medicallanding/images/icons/eye.png';

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

const benefits = [
  'features.benefits.0',
  'features.benefits.1',
  'features.benefits.2',
  'features.benefits.3',
  'features.benefits.4',
  'features.benefits.5',
  'features.benefits.6',
];
</script>
<template>
  <section id="features" class="py-12 relative">
    <div class="absolute inset-0 bg-medical-light opacity-30"></div>
    <div class="container mx-auto px-4">
      <div class="text-center mb-8 animate-fade-in">
        <div class="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="24"
            viewBox="0 0 576 512"
            class="w-5 h-5"
          >
            <path
              fill="oklch(62.7% 0.194 149.214)"
              d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6c16.4 6.8 35-1.1 41.8-17.3c1.5-3.6 20.9-47.9 71.9-90.6c32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6"
            />
          </svg>
          <span class="text-green-800 font-semibold text-lg">{{
            t('features.natural_composition')
          }}</span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-medical mb-6 text-pretty">
          {{ t('features.title') }}
        </h2>
        <p class="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed text-pretty">
          {{ t('features.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
        <div
          v-for="feature in features"
          class="flex-1 mb-6 text-center shadow-premium p-4 bg-white rounded-lg group hover:shadow-xl transition-shadow duration-300"
        >
          <div class="grid gap-2 items-center">
            <div
              class="w-12 h-12 bg-medical-light rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
            >
              <img :src="feature.image" class="w-8 h-8" />
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-medical text-pretty mb-2">
                {{ t(feature.title) }}
              </h3>
              <p class="text-slate-500 text-pretty">{{ t(feature.description) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-medical-light rounded-lg p-6">
        <h4 class="text-2xl font-bold mb-6 text-center text-medical">
          {{ t('features.complex_effects') }}
        </h4>
        <div class="grid md:grid-cols-2">
          <div v-for="benefit in benefits" :key="benefit" class="mb-4">
            <div class="flex items-center gap-2">
              <span
                ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="oklch(62.7% 0.194 149.214)"
                    d="M18 20.75H6A2.75 2.75 0 0 1 3.25 18V6A2.75 2.75 0 0 1 6 3.25h8.86a.75.75 0 0 1 0 1.5H6A1.25 1.25 0 0 0 4.75 6v12A1.25 1.25 0 0 0 6 19.25h12A1.25 1.25 0 0 0 19.25 18v-7.71a.75.75 0 0 1 1.5 0V18A2.75 2.75 0 0 1 18 20.75"
                  />
                  <path
                    fill="oklch(62.7% 0.194 149.214)"
                    d="M10.5 15.25A.74.74 0 0 1 10 15l-3-3a.75.75 0 0 1 1-1l2.47 2.47L19 5a.75.75 0 0 1 1 1l-9 9a.74.74 0 0 1-.5.25"
                  /></svg
              ></span>
              <span class="text-slate-500">{{ t(benefit) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
