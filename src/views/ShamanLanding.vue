<script setup>
import { defineAsyncComponent } from 'vue';
// Импорт стилей shamanlanding
import '@/assets/landings/shamanlanding/main.css';
import Hero from '@/components/landings/shamanlanding/layout/Hero.vue';
import B_Block_Reviews_Video from '@/components/landings/shamanlanding/blocks/B_Block_Reviews_Video.vue';
import H_Block_Testimonials_with_Avatar from '@/components/landings/shamanlanding/blocks/H_Block_Testimonials_with_Avatar.vue';
import I_Block_Ingredients from '@/components/landings/shamanlanding/blocks/I_Block_Ingredients.vue';
import D_Block_DrRecomendations from '@/components/landings/shamanlanding/blocks/D_Block_DrRecomendations.vue';
import Block_Alert from '@/components/landings/shamanlanding/blocks/K_Block_Alert.vue';
import F_Block_Guarantee from '@/components/landings/shamanlanding/blocks/F_Block_Guarantee.vue';
const Block_Promo = defineAsyncComponent(
  () => import('@/components/landings/shamanlanding/blocks/Promo_Timer_Sticky_bottom.vue'),
);
const Block_Form = defineAsyncComponent(
  () => import('@/components/landings/shamanlanding/blocks/Promo_Native_Form.vue'),
);
const Block_OrderFAQ = defineAsyncComponent(
  () => import('@/components/landings/shamanlanding/blocks/G_Block_Order.vue'),
);
import UiScrollDialog from '@/components/landings/shamanlanding/ui/UiScrollDialog.vue';
import Footer from '@/components/landings/shamanlanding/layout/Footer.vue';
import LandingSelector from '@/components/shared/LandingSelector.vue';

const Block_Partners = defineAsyncComponent(
  () => import('@/components/landings/shamanlanding/blocks/BlockPartner.vue'),
);
const TeaserPopup = defineAsyncComponent(
  () => import('@/components/landings/shamanlanding/ui/UiTeaserPopup.vue'),
);
</script>

<template>
  <Hero />
  <B_Block_Reviews_Video />
  <H_Block_Testimonials_with_Avatar />
  <Block_Partners />
  <I_Block_Ingredients />
  <D_Block_DrRecomendations />
  <F_Block_Guarantee class="md:max-w-5xl md:mx-auto" />
  <UiScrollDialog />
  <Block_Alert id="alert" />
  <Block_Promo id="promo" />
  <Block_Form />
  <Block_OrderFAQ class="mb-8" />
  <TeaserPopup />
  <Footer />

  <!-- Landing Selector Component -->
  <LandingSelector />
</template>
