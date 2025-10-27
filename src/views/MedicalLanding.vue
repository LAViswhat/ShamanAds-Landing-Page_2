<script setup>
import { defineAsyncComponent } from 'vue';
// Импорт стилей медицинского лендинга
import '@/assets/landings/medicallanding/main.css';
import Hero from '@/components/landings/medicallanding/layout/Hero.vue';
import Order_Form from '@/components/landings/medicallanding/layout/Order_Form_Section.vue';
import Footer from '@/components/landings/medicallanding/layout/Footer.vue';

const AboutSection = defineAsyncComponent(
  () => import('@/components/landings/medicallanding/blocks/About_Section.vue'),
);
const Statistics = defineAsyncComponent(
  () => import('@/components/landings/medicallanding/blocks/Statistics_Section.vue'),
);

const Testimonials = defineAsyncComponent(
  () => import('@/components/landings/medicallanding/blocks/Testimonials_Section.vue'),
);
const Features = defineAsyncComponent(
  () => import('@/components/landings/medicallanding/blocks/Feature_Section.vue'),
);
const Recomendations = defineAsyncComponent(
  () => import('@/components/landings/medicallanding/blocks/DrRecomendations_Section.vue'),
);

const Alert = defineAsyncComponent(
  () => import('@/components/landings/medicallanding/blocks/Alert_Section.vue'),
);

const FAQ = defineAsyncComponent(
  () => import('@/components/landings/medicallanding/blocks/FAQ_Section.vue'),
);
</script>

<template>
  <main>
    <Hero />
    <AboutSection />
    <Testimonials />
    <Features />
    <Statistics />
    <Recomendations />
    <Alert />
    <Order_Form id="promo" />
    <FAQ />
    <Footer />
  </main>
</template>

<style scoped></style>
