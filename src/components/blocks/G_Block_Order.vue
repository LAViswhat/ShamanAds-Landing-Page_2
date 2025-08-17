<script setup>
import OrderIcon from '@/assets/images/order/order1.svg';
import OperatorIcon from '@/assets/images/order/order2.svg';
import DeliveryIcon from '@/assets/images/order/order3.svg';
import PaymentIcon from '@/assets/images/order/order4.svg';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const list = [
  {
    id: '1',
    icon: OrderIcon,
    description: t('order.steps.application'),
  },
  {
    id: '2',
    icon: OperatorIcon,
    description: t('order.steps.consultation'),
  },
  {
    id: '3',
    icon: DeliveryIcon,
    description: t('order.steps.delivery'),
  },
  {
    id: '4',
    icon: PaymentIcon,
    description: t('order.steps.payment'),
  },
];
</script>
<template>
  <section
    class="mx-2 mt-12 flex flex-col justify-center items-center rounded-lg shadow-2xl/55 bg-radial-gradient"
  >
    <div class="px-4 pt-10 pb-4">
      <h2 class="text-white text-center mb-8 text-pretty">
        {{ t('order.title') }} <span class="text-4xl normal-case">ABslim</span>?
      </h2>
      <div class="flex flex-col md:flex-row md:justify-center md:items-start md:gap-4">
        <div
          v-for="item in list"
          :key="item.id"
          class="flex flex-row md:flex-col md:flex-1 justify-start md:justify-center items-center gap-2 mb-8"
        >
          <div
            :data-id="item.id"
            class="flex-shrink-0 flex items-center justify-center w-22 h-22 bg-white rounded-full shadow relative order-ico"
          >
            <img :src="item.icon" alt="Icon" class="w-16 h-16 object-contain" draggable="false" />
          </div>
          <p class="flex-1 text-left md:text-center md:mt-2 text-white">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.order-ico::before {
  content: attr(data-id);
  position: absolute;
  bottom: -10px;
  left: 38%;
  padding: 6px;
  background-color: #eab308;
  border-radius: 100%;
  font-size: 1.25rem;
  line-height: 0.5;
  font-weight: bold;
  color: #fff;
  z-index: 20;
}
</style>
