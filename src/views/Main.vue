<script setup>
import Hero from '@/components/layout/Hero.vue';
import B_Block_Reviews_Video from '@/components/blocks/B_Block_Reviews_Video.vue';
import Promo from '@/components/layout/Promo.vue';
import H_Block_Testimonials_with_Avatar from '@/components/blocks/H_Block_Testimonials_with_Avatar.vue';
import B_Block_Results_Accordion from '@/components/blocks/B_Block_Results_Accordion.vue';
import C_Block_Benefits from '@/components/blocks/C_Block_Benefits.vue';
import I_Block_Ingredients from '@/components/blocks/I_Block_Ingredients.vue';
import D_Block_DrRecomendations from '@/components/blocks/D_Block_DrRecomendations.vue';
import E_Block_FAQ from '@/components/blocks/E_Block_FAQ.vue';
import F_Block_Guarantee from '@/components/blocks/F_Block_Guarantee.vue';
import G_Block_Order from '@/components/blocks/G_Block_Order.vue';
import UiScrollDialog from '@/components/ui/UiScrollDialog.vue';
import Footer from '@/components/layout/Footer.vue';
</script>

<template>
  <Hero />
  <Promo id="promo_top" />
  <B_Block_Reviews_Video />
  <H_Block_Testimonials_with_Avatar />
  <B_Block_Results_Accordion />
  <C_Block_Benefits class="md:flex-row md:gap-2 md:max-w-5xl md:mx-auto" />
  <I_Block_Ingredients />
  <D_Block_DrRecomendations />
  <E_Block_FAQ class="md:max-w-5xl md:mx-auto" />
  <F_Block_Guarantee class="md:max-w-5xl md:mx-auto" />
  <G_Block_Order class="md:max-w-5xl md:mx-auto" />
  <UiScrollDialog />
  <Promo id="promo" class="my-12" />
  <Footer />
</template>
