<script setup>
import { useI18n } from 'vue-i18n';
import ProgressBar from 'primevue/progressbar';

const { t } = useI18n();

const resultsData = [
  {
    value: 95,
    info: t('statistics.results.1'),
  },
  {
    value: 87,
    info: t('statistics.results.2'),
  },
  {
    value: 93,
    info: t('statistics.results.3'),
  },
  {
    value: 97,
    info: t('statistics.results.4'),
  },
];
</script>
<template>
  <section id="statistics" class="pt-8 bg-gradient-to-br from-white to-[#e2f3e8]/10">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-4xl lg:text-5xl font-bold foreground mb-6 text-pretty">
          {{ t('statistics.main_title') }}
          <span class="bg-gradient-primary bg-clip-text text-transparent">
            {{ t('statistics.main_title') }}</span
          >
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {{ t('statistics.description') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 items-center mb-12">
        <div class="space-y-8 animate-fade-in-left">
          <h3 class="text-2xl font-bold text-headings capitalize">
            {{ t('statistics.results.title') }}
          </h3>

          <div class="space-y-6">
            <div v-for="item in resultsData" :key="item.value" class="flex flex-col gap-0.5">
              <span class="text-sm">{{ item.info }}</span>
              <ProgressBar :value="item.value" class="!h-8" />
            </div>
          </div>
        </div>

        <div class="relative animate-fade-in-right">
          <div class="relative">
            <img
              src="@/assets/landings/sexy/images/certf.png"
              alt="ABSlim clinical research"
              class="rounded-2xl w-2/3"
              loading="lazy"
            />

            <div class="absolute bottom-0 left-1/2 transform translate-x-2">
              <img
                src="@/assets/landings/sexy/images/product_1.png"
                :alt="t('product_name')"
                loading="lazy"
              />
            </div>
            <div class="absolute top-6 right-2">
              <img
                src="@/assets/landings/sexy/images/top.png"
                :alt="t('product_name')"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
