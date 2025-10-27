<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Dialog from 'primevue/dialog';
import { Button } from 'primevue';
import { useTimerStore } from '@/composables/useTimerStore';

const { t } = useI18n();

const { stock, initialDecrementDone, startQuickDecrement } = useTimerStore();

const visible = ref(false);
const sectionId = 'promo'; // id секции, до которой нужно доскроллить
let observer = null;

const animateStockChange = ref(false); // Для запуска анимации stock
const animationKey = ref(0); // Для принудительного ререндера в Transition

watch(stock, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    animationKey.value++; // Изменяем ключ для Transition, чтобы она сработала
  }
});

onMounted(() => {
  // Set up IntersectionObserver to show dialog when section is visible
  const section = document.getElementById(sectionId);
  if (section) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true;
          // Когда диалог становится видимым, запускаем быстрый отсчет
          if (!initialDecrementDone.value) {
            // Проверяем, не было ли уже отсчета
            setTimeout(() => {
              startQuickDecrement();
            }, 1000);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(section);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <Dialog
    pt:header:class="!p-2 relative"
    pt:headerActions:class="absolute top-0 right-0 translate-x-[20px]"
    pt:content:class="!pt-2"
    v-model:visible="visible"
    :closable="true"
    :dismissableMask="true"
    class="bg-radial-gradient"
    position="right"
  >
    <h3 class="text-red-500 text-center text-2xl my-2">{{ t('warningDialog.title') }}</h3>
    <ul class="list-disc">
      <li class="text-white mb-2 text-pretty">
        {{ t('warningDialog.delivery_notice.part1') }}
        <span class="text-xl font-bold">ABslim</span>
        {{ t('warningDialog.delivery_notice.part2') }}
        <span class="font-bold">{{ t('warningDialog.delivery_notice.months', { count: 4 }) }}</span>
        {{ t('warningDialog.delivery_notice.part3') }}
      </li>
      <li class="text-white mb-2 text-pretty">
        {{ t('warningDialog.ingredients.part1') }}
        <span class="text-xl font-bold">ABslim</span>
        {{ t('warningDialog.ingredients.part2') }}
      </li>
      <li class="text-white mb-2 text-pretty">
        {{ t('warningDialog.stock.part1') }}
        <Transition name="stock-pulse" mode="out-in">
          <span :key="animationKey" class="text-xl font-bold inline-block">{{
            t('warningDialog.stock.items_left', { count: stock })
          }}</span>
        </Transition>
        {{ t('warningDialog.stock.part2') }}
        <span class="text-xl font-bold">{{
          t('warningDialog.stock.special_price', { price: 111 })
        }}</span>
        {{ t('warningDialog.stock.part3') }}
        <span class="text font-bold">{{ t('warningDialog.stock.old_price', { price: 485 }) }}</span
        >.
      </li>
    </ul>
    <Button
      @click="visible = !visible"
      :label="t('buttons.want_to_order')"
      severity="secondary"
      raised
      class="mt-4 w-full md:w-96"
    />
  </Dialog>
</template>
<style scoped>
.stock-pulse-enter-active,
.stock-pulse-leave-active {
  transition: all 0.3s ease-out; /* Быстрая анимация */
}

.stock-pulse-enter-from {
  opacity: 0;
  transform: scale(1.5); /* Увеличить при появлении */
  color: #ffcc00; /* Подсветка */
}

.stock-pulse-leave-to {
  opacity: 0;
  transform: scale(0.8); /* Уменьшить при исчезновении */
}
</style>
