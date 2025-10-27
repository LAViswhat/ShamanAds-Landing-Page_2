<script setup>
import { useI18n } from 'vue-i18n';
import featureImg1 from '@/assets/landings/medicallanding/images/about/featureImg_1.jpg';
import featureImg2 from '@/assets/landings/medicallanding/images/about/featureImg_2.jpg';
import featureImg3 from '@/assets/landings/medicallanding/images/about/featureImg_3.jpeg';
import featureImg4 from '@/assets/landings/medicallanding/images/about/featureImg_4.jpg';

const { t } = useI18n();
const features = [
  {
    title: 'about.features.0.title',
    description: 'about.features.0.description',
    image: featureImg2,
  },
  {
    title: 'about.features.1.title',
    description: 'about.features.1.description',
    image: featureImg1,
  },
  {
    title: 'about.features.2.title',
    description: 'about.features.2.description',
    image: featureImg4,
  },
  {
    title: 'about.features.3.title',
    description: 'about.features.3.description',
    image: featureImg3,
  },
];
</script>
<template>
  <section id="about" class="py-12 bg-gradient-section">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-4xl lg:text-5xl font-bold text-medical mb-6 text-pretty">
          {{ t('about.title') }}
        </h2>
        <p class="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed text-pretty">
          {{ t('about.subtitle') }}
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-6">
        <div v-for="feature in features" class="flex-1 mb-6">
          <div class="grid gap-2 items-center">
            <div class="relative">
              <div class="relative">
                <img
                  :src="feature.image"
                  :alt="feature.title"
                  class="rounded-2xl shadow-premium w-full lg:max-h-[230px]"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="space-y-8">
              <h3 class="text-xl font-semibold text-medical my-2 text-pretty">
                {{ t(feature.title) }}
              </h3>
              <p class="text-slate-500 text-pretty">{{ t(feature.description) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 bg-white rounded-lg p-8 shadow-xl">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-bold mb-4 text-medical">
              {{ t('about.how_it_works.title') }}
            </h3>
            <p class="text-slate-500 text-xl mb-2">
              <span class="font-semibold">{{ t('about.how_it_works.product_name') }}</span>
              {{ t('about.how_it_works.description') }}
            </p>
            <ul class="space-y-2 text-slate-500 pl-0">
              <li>• {{ t('about.how_it_works.mechanism.0') }}</li>
              <li>• {{ t('about.how_it_works.mechanism.1') }}</li>
              <li>• {{ t('about.how_it_works.mechanism.2') }}</li>
              <li>• {{ t('about.how_it_works.mechanism.3') }}</li>
            </ul>
          </div>
          <div class="bg-medical-light rounded-lg p-6">
            <h4 class="text-lg font-semibold mb-3 text-medical">
              {{ t('about.parameters.title') }}
            </h4>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-slate-500">{{ t('about.parameters.hba1c') }}</span>
                <span class="font-semibold text-medical whitespace-nowrap">1.4–1.7%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">{{ t('about.parameters.stabilization') }}</span>
                <span class="font-semibold text-medical whitespace-nowrap"
                  >17 {{ t('about.parameters.hours') }}</span
                >
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">{{ t('about.parameters.recovery') }}</span>
                <span class="font-semibold text-medical whitespace-nowrap"
                  >30–40 {{ t('about.parameters.days') }}</span
                >
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">{{ t('about.parameters.target_level') }}</span>
                <span class="font-semibold text-medical whitespace-nowrap">80–86 mg/dL</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">{{ t('about.parameters.bioavailability') }}</span>
                <span class="font-semibold text-medical whitespace-nowrap">95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
