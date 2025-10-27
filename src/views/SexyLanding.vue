<script setup>
import { defineAsyncComponent } from 'vue';
// Импорт стилей sexy лендинга
import '@/assets/landings/sexy/main.css';
import Hero from '@/components/landings/sexy/layout/Hero.vue';
import Order_Form from '@/components/landings/sexy/layout/Order_Form_Section.vue';
import Footer from '@/components/landings/sexy/layout/Footer.vue';
import LandingSelector from '@/components/shared/LandingSelector.vue';

const AboutSection = defineAsyncComponent(
  () => import('@/components/landings/sexy/blocks/About_Section.vue'),
);
const Statistics = defineAsyncComponent(
  () => import('@/components/landings/sexy/blocks/Statistics_Section.vue'),
);

const Testimonials = defineAsyncComponent(
  () => import('@/components/landings/sexy/blocks/Testimonials_Section.vue'),
);
const Features = defineAsyncComponent(
  () => import('@/components/landings/sexy/blocks/Feature_Section.vue'),
);

const Alert = defineAsyncComponent(
  () => import('@/components/landings/sexy/blocks/Alert_Section.vue'),
);

const FAQ = defineAsyncComponent(() => import('@/components/landings/sexy/blocks/FAQ_Section.vue'));
</script>

<template>
  <main>
    <Hero />
    <AboutSection />
    <Features />
    <Testimonials />

    <Statistics />
    <Alert />
    <Order_Form id="promo" />
    <FAQ />
    <Footer />

    <!-- Landing Selector Component -->
    <LandingSelector />
  </main>
</template>

<style scoped></style>
