<script setup>
import MoneyIcon from '@/assets/landings/shamanlanding/images/guarantee/guarantee1.png';
import DoubleIcon from '@/assets/landings/shamanlanding/images/guarantee/guarantee2.png';
import FreeIcon from '@/assets/landings/shamanlanding/images/guarantee/guarantee3.png';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const list = [
  {
    id: '1.',
    icon: MoneyIcon,
    title: t('guarantee.weight_loss_title'),
    description: t('guarantee.weight_loss'),
  },
  {
    id: '2.',
    icon: DoubleIcon,
    title: t('guarantee.double_money_title'),
    description: t('guarantee.double_money'),
  },
  {
    id: '3.',
    icon: FreeIcon,
    title: t('guarantee.free_treatment_title'),
    description: t('guarantee.free_treatment'),
  },
];
</script>
<template>
  <section class="py-14 bg-gradient-to-br from-[#fbfbf9] via-[#fcd7bb]/5 to-[#ecc6d2]/5">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-4xl md:text-5xl font-bold capitalize text-headings py-2 mb-4">
          {{ t('guarantee.triple_guarantee') }} <span class="text-primary">AMET!</span>
        </h2>
        <div
          class="inline-flex items-center gap-2 bg-[#61c014]/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#61c014"
              d="M21.438 5.089a1 1 0 0 0-.959.015c-.684.389-1.355.577-2.053.577c-2.035 0-3.952-1.629-5.722-3.39c-.375-.373-1.063-.373-1.438 0C9.592 3.959 7.598 5.663 5.51 5.663c-.69 0-1.351-.184-2.018-.561c-.298-.166-.658-.171-.96-.012s-.501.461-.528.801c-.011.129-.944 12.872 9.683 16.041a1 1 0 0 0 .286.042H12q.145 0 .285-.041c10.657-3.17 9.695-15.916 9.684-16.044a1 1 0 0 0-.531-.8m-9.452 14.842c-6.979-2.255-7.934-9.412-8.014-12.477q.759.21 1.537.209c2.492 0 4.65-1.567 6.476-3.283c1.893 1.788 3.983 3.301 6.442 3.301q.797 0 1.575-.22c-.074 3.065-1.021 10.217-8.016 12.47"
            />
          </svg>
          {{ t('guarantee.triple_guarantee') }}!
        </div>
        <p class="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          {{ t('guarantee.confidence') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div
          v-for="(item, index) in list"
          :key="item"
          class="p-4 text-center border-2 border-[#16a249]/20 hover:border-[#16a249]/40 transition-all duration-300 shadow-glow group rounded-2xl relative"
        >
          <div
            class="w-16 h-16 bg-gradient-icon rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
          >
            <img :src="item.icon" class="w-8 h-8 text-white" />
          </div>
          <div class="text-2xl font-bold text-primary mb-2 absolute top-2 left-2">
            {{ String(index + 1).padStart(1, '0') }}.
          </div>
          <h3 class="text-xl text-headings capitalize font-bold mb-1">{{ item.title }}</h3>
          <p class="text-slate-500 leading-relaxed">{{ item.description }}</p>
        </div>
      </div>

      <div class="text-center">
        <div
          class="gradient-zero-risk border border-[#16a249]/20 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div class="flex items-center justify-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="#16a249"
                d="M21.438 5.089a1 1 0 0 0-.959.015c-.684.389-1.355.577-2.053.577c-2.035 0-3.952-1.629-5.722-3.39c-.375-.373-1.063-.373-1.438 0C9.592 3.959 7.598 5.663 5.51 5.663c-.69 0-1.351-.184-2.018-.561c-.298-.166-.658-.171-.96-.012s-.501.461-.528.801c-.011.129-.944 12.872 9.683 16.041a1 1 0 0 0 .286.042H12q.145 0 .285-.041c10.657-3.17 9.695-15.916 9.684-16.044a1 1 0 0 0-.531-.8m-9.452 14.842c-6.979-2.255-7.934-9.412-8.014-12.477q.759.21 1.537.209c2.492 0 4.65-1.567 6.476-3.283c1.893 1.788 3.983 3.301 6.442 3.301q.797 0 1.575-.22c-.074 3.065-1.021 10.217-8.016 12.47"
              />
            </svg>
            <h3 class="text-2xl text-headings capitalize mb-0 font-bold">
              {{ t('guarantee.risc_title') }}
            </h3>
          </div>
          <p class="text-lg text-slate-500 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolore unde quam nesciunt
            totam a ab iste tempora quisquam, est, corrupti eius sed quos minima animi laboriosam
            quo eligendi accusamus?
          </p>
        </div>
      </div>
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

.gradient-zero-risk {
  background: linear-gradient(
    to right,
    rgba(22, 162, 73, 0.1),
    rgba(236, 198, 210, 0.1),
    rgba(22, 162, 73, 0.1)
  );
}
</style>
