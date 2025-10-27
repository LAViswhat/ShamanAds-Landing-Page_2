<script setup>
import { useI18n } from 'vue-i18n';
import ClockIco from '@/assets/landings/sexy/images/icons/clock-sparkle.svg';

const { t } = useI18n();
</script>
<template>
  <section class="py-12 bg-medical-light relative overflow-hidden">
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ecc6d2_0%,_transparent_50%)] opacity-10"
    ></div>

    <div class="container mx-auto px-4 relative">
      <div class="max-w-4xl mx-auto">
        <div class="text-center space-y-8">
          <div class="space-y-6">
            <div class="text-center mb-8 animate-pulse bg-gradient-warn rounded-4xl">
              <div
                class="text-base lg:text-xl px-6 py-2 flex flex-row items-center justify-center gap-2 mx-auto"
              >
                <img :src="ClockIco" alt="Clock" class="w-6 h-6" />
                <h4 class="text-white text-pretty">{{ t('alert.attention') }}</h4>
              </div>
            </div>

            <h2 class="text-3xl lg:text-5xl font-bold text-medical leading-tight">
              {{ t('alert.title_part1') }}
              <span class="text-danger">{{ t('alert.title_part2') }}</span>
            </h2>
          </div>

          <div class="bg-white/50 backdrop-blur-sm border-color rounded-lg p-8 shadow-premium">
            <div class="space-y-6">
              <div class="flex items-center gap-3 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <g fill="hsl(210, 45%, 40%)">
                    <path
                      d="M128 129.09V232a8 8 0 0 1-3.84-1l-88-48.18a8 8 0 0 1-4.16-7V80.18a8 8 0 0 1 .7-3.25Z"
                      opacity="0.2"
                    />
                    <path
                      d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 32l80.34 44l-29.77 16.3l-80.35-44Zm0 88L47.66 76l33.9-18.56l80.34 44ZM40 90l80 43.78v85.79l-80-43.75Zm176 85.78l-80 43.79v-85.75l32-17.51V152a8 8 0 0 0 16 0v-44.45L216 90v85.77Z"
                    />
                  </g>
                </svg>
                <span class="text-xl text-left font-semibold text-medical">{{
                  t('alert.supply_notice')
                }}</span>
              </div>
              <p
                class="text-lg text-left text-slate-500 leading-relaxed max-w-3xl mx-auto text-pretty"
              >
                {{ t('alert.description1') }}
              </p>
              <p class="text-lg text-left text-slate-500 leading-relaxed max-w-3xl mx-auto">
                {{ t('alert.description2') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.gradient-alert {
  background: linear-gradient(
    to right,
    rgba(22, 162, 73, 0.1),
    rgba(255, 217, 102, 0.1),
    rgba(22, 162, 73, 0.1)
  );
}
</style>
