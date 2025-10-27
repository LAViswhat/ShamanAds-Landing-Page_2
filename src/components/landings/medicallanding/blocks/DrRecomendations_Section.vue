<script setup>
import heroMedicalBg from '@/assets/landings/medicallanding/images/bg_doc1.jpeg';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
  <section
    class="relative pb-12 bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${heroMedicalBg})` }"
  >
    <div class="absolute inset-0 bg-medical opacity-75 z-0"></div>
    <div class="container mx-auto px-4 z-10 relative">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl capitalize font-bold text-white pt-12 mb-6">
            {{ t('recommendations.title') }}
          </h2>
          <p class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty mb-8">
            {{ t('recommendations.subtitle') }}
          </p>
        </div>
        <div
          class="p-8 lg:p-12 gradient-card bg-gradient-to-br from-white via-white/95 to-[#fcd7bb]/10 border border-[#ebe5e0]/20 rounded-lg"
        >
          <div class="flex flex-col lg:flex-row items-center gap-8">
            <div class="flex flex-row justify-between items-center gap-8">
              <img
                src="@/assets/landings/medicallanding/images/expert_ava.jpg"
                :alt="t('recommendations.doctor.full_name')"
                class="w-24 h-24 rounded-full object-cover shadow-premium"
              />
              <div class="space-y-2">
                <h4 class="text-xl font-bold text-headings">
                  {{ t('recommendations.doctor.full_name') }}
                </h4>
                <p class="text-primary font-semibold">
                  {{ t('recommendations.doctor.specialty') }}
                </p>
                <p class="text-slate-500">
                  {{ t('recommendations.doctor.experience') }}
                </p>
              </div>
            </div>

            <div class="flex-1 text-left lg:text-left">
              <blockquote class="text-lg lg:text-xl text-foreground/90 mb-6 italic leading-relaxed">
                "{{ t('recommendations.quote') }}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
// ...existing code...
<style scoped>
.gradient-card {
  /* Fallback цвет */
  background-color: rgba(255, 255, 255, 0.98);

  background: linear-gradient(
    135deg,
    rgba(252, 215, 187, 0.1) 0%,
    rgba(255, 255, 255, 0.95) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  /* Fallback для старых браузеров */
  background: -webkit-linear-gradient(
    135deg,
    rgba(252, 215, 187, 0.1) 0%,
    rgba(255, 255, 255, 0.95) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -moz-linear-gradient(
    135deg,
    rgba(252, 215, 187, 0.1) 0%,
    rgba(255, 255, 255, 0.95) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -o-linear-gradient(
    135deg,
    rgba(252, 215, 187, 0.1) 0%,
    rgba(255, 255, 255, 0.95) 50%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
