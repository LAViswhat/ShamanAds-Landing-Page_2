<script setup>
import MoneyIcon from '@/assets/images/guarantee/guarantee1.svg';
import DoubleIcon from '@/assets/images/guarantee/guarantee2.svg';
import FreeIcon from '@/assets/images/guarantee/guarantee3.svg';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const list = [
  {
    id: '1.',
    icon: MoneyIcon,
    item: t('guarantee.weight_loss'),
  },
  {
    id: '2.',
    icon: DoubleIcon,
    item: t('guarantee.double_money'),
  },
  {
    id: '3.',
    icon: FreeIcon,
    item: t('guarantee.free_treatment'),
  },
];
</script>
<template>
  <section class="mx-2 mt-12 rounded-lg shadow-2xl/55 flex flex-col justify-center items-center">
    <div class="text-center p-4 mt-4">
      <h2 class="text-primary text-3xl mb-2">{{ t('guarantee.triple_guarantee') }}</h2>
      <h3 class="text-gray-500/80 mb-6">
        {{ t('guarantee.confidence') }}
        <span class="text-3xl text-primary font-bold normal-case">AaSDAS</span>
        {{ t('guarantee.offer') }}
      </h3>
      <div
        v-for="(item, idx) in list"
        :key="item.id"
        class="flex flex-col justify-center items-center mb-8"
      >
        <div
          :data-id="item.id"
          class="p-8 border-2 border-white/20 bg-gradient-primary animate-pulse-glow text-white text-left rounded-lg shadow-lg relative max-w-[510px] md:w-2xl md:max-w-2xl guarantee-card"
          v-animateonscroll="{ enterClass: idx % 2 === 0 ? 'fade-in-left' : 'fade-in-right' }"
          :style="{ animationDelay: `${idx * 0.14}s` }"
        >
          <div class="absolute inset-0 bg-white/20 z-10"></div>

          <div class="flex flex-row items-center md:justify-between gap-2">
            <h4 class="normal-case text-pretty">{{ item.item }}</h4>
            <div
              class="flex-shrink-0 flex items-center justify-center w-18 h-18 bg-white rounded-full shadow relative"
            >
              <img :src="item.icon" alt="Icon" class="w-12 h-12 object-contain" draggable="false" />
            </div>
          </div>
        </div>
      </div>
      <h4 class="text-gray-500/80 mt-8">
        {{ t('guarantee.no_risk') }}
        <span class="text-primary text-xl"
          ><b class="normal-case">AaSDAS</b> {{ t('guarantee.works') }}</span
        >
      </h4>
    </div>
  </section>
</template>
<style scoped>
.guarantee-card::before {
  content: attr(data-id);
  position: absolute;
  top: 2px;
  left: 4px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  opacity: 0.6;
  z-index: 20;
}

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
