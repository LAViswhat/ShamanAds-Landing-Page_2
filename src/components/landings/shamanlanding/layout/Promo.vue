<script setup>
import Promo_Timer_Sticky_with_Product from './Promo_Components/Promo_Timer_Sticky_with_Product.vue';
import Promo_Form from './Promo_Components/Promo_Form.vue';
</script>

<template>
  <section class="px-4 md:px-0">
    <div
      class="flex flex-col md:flex-row justify-center items-center mt-4 rounded-xl shadow-2xl px-2 py-4"
    >
      <Promo_Timer_Sticky_with_Product class="md:w-1/2" />
      <Promo_Form class="md:w-1/2 md:flex md:flex-col md:justify-center md:items-center" />
    </div>
  </section>
</template>
