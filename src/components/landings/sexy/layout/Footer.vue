<script setup>
import { useI18n } from 'vue-i18n';
import LogoIco from '@/assets/landings/sexy/images/product_logo.png';
import FBIco from '@/assets/landings/sexy/images/icons/fb.svg';
import IGIco from '@/assets/landings/sexy/images/icons/ig.svg';
import XIco from '@/assets/landings/sexy/images/icons/x.svg';
import YTIco from '@/assets/landings/sexy/images/icons/yt.svg';

const { t } = useI18n();
</script>

<template>
  <footer class="w-full flex justify-center items-center p-3 bg-gradient-darkest text-xs z-10">
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2"
    >
      <div class="flex items-center gap-1 text-white font-bold">
        <img :src="LogoIco" :alt="t('product_name')" class="w-12" />
        <span class="text-lg">{{ t('topline.offer_today') }}</span>
      </div>
      <div>
        <img :src="FBIco" alt="Facebook" class="inline-block mx-2" />
        <img :src="IGIco" alt="Instagram" class="inline-block mx-2" />
        <img :src="XIco" alt="X" class="inline-block mx-2" />
        <img :src="YTIco" alt="YouTube" class="inline-block mx-2" />
      </div>
      <p class="text-white">
        &copy; {{ new Date().getFullYear() }} {{ t('topline.offer_today') }}
        <span class="uppercase">ALL RIGHT RESERVED</span>
      </p>
    </div>
  </footer>
</template>
