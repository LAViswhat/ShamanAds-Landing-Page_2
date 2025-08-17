<script setup>
import ScrollToSectionButton from '../shared/ScrollToSectionButton.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const benefits = [
  {
    item: t('benefits.thyroid'),
  },
  {
    item: t('benefits.efficiency'),
  },
  {
    item: t('benefits.blood_pressure'),
  },
  {
    item: t('benefits.substance'),
  },
  {
    item: t('benefits.menopause'),
  },
];
</script>
<template>
  <section class="flex flex-col justify-center items-center px-2">
    <div class="flex flex-col">
      <img src="@/assets/images/product.jpg" alt="ABslim on the bitch" class="rounded-t-lg" />
      <div class="bg-gradient-primary text-white p-2">
        <h3>{{ t('benefits.title') }}</h3>
        <p class="text-pretty">
          {{ t('benefits.subtitle') }}
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-start w-full mt-4">
      <ul class="relative z-10 w-full">
        <li
          v-for="(item, idx) in benefits"
          :key="item.item"
          class="text-sm md:text-base"
          v-animateonscroll="{ enterClass: 'fade-in-up' }"
          :style="{ animationDelay: `${idx * 0.3}s` }"
        >
          <font-awesome-icon :icon="['fas', 'feather-pointed']" class="text-secondary" size="lg" />
          {{ item.item }}
        </li>
      </ul>
      <ScrollToSectionButton
        section-id="#promo_top"
        :label="t('buttons.want_to_order')"
        className="mt-4"
      />
    </div>
  </section>
</template>
<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
