<script setup>
import LogoTitle from '../shared/LogoTitle.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const list = [
  {
    item: t('recommendations.fast_effect'),
  },
  {
    item: t('recommendations.natural_composition'),
  },
  {
    item: t('recommendations.no_side_effects'),
  },
  {
    item: t('recommendations.development_cost'),
  },
  {
    item: t('recommendations.tests_performed'),
  },
  {
    item: t('recommendations.approved'),
  },
];
</script>
<template>
  <section class="px-2 flex flex-col justify-center items-center">
    <h2 class="normal-case text-center text-headings">
      <LogoTitle class="text-3xl" /> {{ t('recommendations.title') }}
    </h2>
    <div class="flex flex-col justify-center items-center rounded-lg shadow-2xl px-2 py-4">
      <div class="flex flex-row justify-center items-center mb-3">
        <img
          src="@/assets/images/D_block_avatar.png"
          alt="Dr Kowalska"
          class="rounded-full shadow-xl max-w-1/2"
        />
        <div class="px-5">
          <div>
            <p class="normal-case font-bold text-lg leading-2">
              {{ t('recommendations.doctor.last_name') }}
            </p>
            <p class="text-lg">{{ t('recommendations.doctor.full_name') }}</p>
          </div>
          <div class="mt-2 text-sm text-gray-500/80">
            <p>{{ t('recommendations.doctor.specialty') }}</p>
            <p>{{ t('recommendations.doctor.experience') }}</p>
          </div>
        </div>
      </div>
      <div class="px-4 mt-2">
        <p><LogoTitle class="text-lg" /> {{ t('recommendations.advantages') }}</p>
        <ul class="relative mt-4 pl-0">
          <li
            v-for="(item, idx) in list"
            :key="item.item"
            class="text-sm md:text-base"
            v-animateonscroll="{ enterClass: idx % 2 === 0 ? 'fade-in-left' : 'fade-in-right' }"
            :style="{ animationDelay: `${idx * 0.18}s` }"
          >
            <font-awesome-icon :icon="['fas', 'leaf']" class="text-secondary" size="lg" />
            {{ item.item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped>
.fade-in-left {
  opacity: 0;
  transform: translateX(-30px);
  animation: fadeInLeft 0.6s forwards;
}
.fade-in-right {
  opacity: 0;
  transform: translateX(30px);
  animation: fadeInRight 0.6s forwards;
}

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
