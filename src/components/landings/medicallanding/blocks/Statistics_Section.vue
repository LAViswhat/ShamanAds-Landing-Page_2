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
    value: 83,
    info: t('statistics.results.3'),
  },
  {
    value: 97,
    info: t('statistics.results.4'),
  },
];

const studiesData = [
  {
    title: 'statistics.studies.0.title',
    participants: 'statistics.studies.0.participants',
    duration: 'statistics.studies.0.duration',
    results: 'statistics.studies.0.results',
    conclusion: 'statistics.studies.0.conclusion',
  },
  {
    title: 'statistics.studies.1.title',
    participants: 'statistics.studies.1.participants',
    duration: 'statistics.studies.1.duration',
    results: 'statistics.studies.1.results',
    conclusion: 'statistics.studies.1.conclusion',
  },
  {
    title: 'statistics.studies.2.title',
    participants: 'statistics.studies.2.participants',
    duration: 'statistics.studies.2.duration',
    results: 'statistics.studies.2.results',
    conclusion: 'statistics.studies.2.conclusion',
  },
];
</script>
<template>
  <section id="statistics" class="pt-10 bg-gradient-to-br from-white to-[#e2f3e8]/10">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-4xl lg:text-5xl font-bold text-medical mb-6">
          {{ t('statistics.main_title') }}
        </h2>
        <p class="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
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
              src="@/assets/landings/medicallanding/images/certf.png"
              alt="ABSlim clinical research"
              class="rounded-2xl w-2/3"
              loading="lazy"
            />

            <div class="absolute bottom-0 left-1/2 transform translate-x-1/12">
              <img
                src="@/assets/landings/medicallanding/images/product_1.png"
                alt="ABSlim clinical research"
                loading="lazy"
              />
            </div>
            <div class="absolute top-6 right-0">
              <img
                src="@/assets/landings/medicallanding/images/top.png"
                alt="ABSlim clinical research"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div
          v-for="study in studiesData"
          :key="study.title"
          class="bg-medical-light rounded-lg p-6 shadow-xl"
        >
          <h3 class="text-xl text-medical mb-4">{{ t(study.title) }}</h3>
          <div class="space-y-3">
            <div>
              <span class="font-semibold text-medical">{{ t('statistics.labels.sample') }}</span>
              <p class="text-slate-500">{{ t(study.participants) }}</p>
            </div>
            <div>
              <span class="font-semibold text-medical">{{ t('statistics.labels.duration') }}</span>
              <p class="text-slate-500">{{ t(study.duration) }}</p>
            </div>
            <div>
              <span class="font-semibold text-medical">{{
                t('statistics.labels.effectiveness')
              }}</span>
              <p class="text-slate-500">{{ t(study.results) }}</p>
            </div>
            <div>
              <span class="font-semibold text-medical">{{
                t('statistics.labels.conclusion')
              }}</span>
              <p class="text-slate-500">{{ t(study.conclusion) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
