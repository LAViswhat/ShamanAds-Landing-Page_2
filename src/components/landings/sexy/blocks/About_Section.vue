<script setup>
import ScrollToSectionButton from '../shared/ScrollToSectionButton.vue';
import { useI18n } from 'vue-i18n';
import featureImg1 from '@/assets/landings/sexy/images/about/featureImg_1.jpg';
import featureImg2 from '@/assets/landings/sexy/images/about/featureImg_2.jpg';
const { t } = useI18n();
const features = [
  {
    title: 'about.features.0.title',
    alt: 'Woman frustrated with weight scale',
    list1: 'about.features.0.list.0',
    list2: 'about.features.0.list.1',
    list3: 'about.features.0.list.2',
    list4: 'about.features.0.list.3',
    image: featureImg1,
  },
  {
    title: 'about.features.1.title',
    alt: 'Happy woman showing weight loss success',
    list1: 'about.features.1.list.0',
    list2: 'about.features.1.list.1',
    list3: 'about.features.1.list.2',
    list4: 'about.features.1.list.3',
    image: featureImg2,
  },
];
</script>
<template>
  <section id="about" class="py-12 bg-gradient-secondary">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-pretty">
          {{ t('about.title') }}
          <span class="bg-gradient-primary bg-clip-text text-transparent">
            {{ t('about.title') }}</span
          >
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
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
                  :alt="feature.alt"
                  class="rounded-2xl object-cover object-top shadow-soft w-full h-96 lg:h-screen"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="space-y-8">
              <h3 class="text-xl text-center font-semibold text-medical my-2 text-pretty">
                {{ t(feature.title) }}
              </h3>
              <ul class="space-y-2 text-muted-foreground">
                <li>{{ t(feature.list1) }}</li>
                <li>{{ t(feature.list2) }}</li>
                <li>{{ t(feature.list3) }}</li>
                <li>{{ t(feature.list4) }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <ScrollToSectionButton
          severity="secondary"
          :label="t('hero.cta_button')"
          className="!text-xl px-8 !py-4 !text-white mt-8 shadow-coral"
          sectionId="#promo"
        />
      </div>
    </div>
  </section>
</template>
