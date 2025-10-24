<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import UiAnimatedCounter from '../ui/UiAnimatedCounter.vue';

const { t } = useI18n();

const counter_one = ref(95477);
const counter_two = ref(107297);
</script>
<template>
  <section class="text-center mt-12 pb-8 px-2">
    <h2 class="text-4xl lg:text-5xl text-headings text-pretty capitalize">
      <UiAnimatedCounter class="text-primary text-5xl" :targetValue="counter_one" />
      {{ t('reviews.title') }} {{ t('reviews.title_suffix') }}
    </h2>
    <div class="flex flex-col justify-center items-center mt-4">
      <p class="text-xl text-slate-500 text-pretty">
        {{ t('reviews.subtitle') }} <br />
        <UiAnimatedCounter class="text-xl" :targetValue="counter_two" />
        {{ t('reviews.subtitle_suffix') }}
      </p>
      <img class="max-w-32" src="@/assets/landings/shamanlanding/images/stars.png" />
    </div>
    <div class="mt-2 mx-auto max-w-96 px-4">
      <video autoplay loop muted playsinline class="rounded-xl shadow-2xl/70" loading="lazy">
        <source src="@/assets/videos/giv1.webm" type="video/webm; codecs=vp8, vorbis" />
        <source src="@/assets/videos/giv1.mp4" type="video/mp4; codecs=avc1.42E01E, mp4a.40.2" />
      </video>
    </div>
  </section>
</template>
