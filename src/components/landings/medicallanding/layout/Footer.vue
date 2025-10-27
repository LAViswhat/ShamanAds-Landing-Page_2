<script setup>
import LogoIco from '@/assets/landings/medicallanding/images/icons/trophy.svg';
import FBIco from '@/assets/landings/medicallanding/images/icons/fb.svg';
import IGIco from '@/assets/landings/medicallanding/images/icons/ig.svg';
import XIco from '@/assets/landings/medicallanding/images/icons/x.svg';
import YTIco from '@/assets/landings/medicallanding/images/icons/yt.svg';
</script>

<template>
  <footer class="w-full flex justify-center items-center p-3 bg-gradient-darkest text-xs z-10">
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2"
    >
      <img :src="LogoIco" alt="" class="max-w-24" />
      <div>
        <img :src="FBIco" alt="Facebook" class="inline-block mx-2" />
        <img :src="IGIco" alt="Instagram" class="inline-block mx-2" />
        <img :src="XIco" alt="X" class="inline-block mx-2" />
        <img :src="YTIco" alt="YouTube" class="inline-block mx-2" />
      </div>
      <p class="text-white">
        &copy; {{ new Date().getFullYear() }} Lorem.
        <span class="uppercase">ALL RIGHT RESERVED</span>
      </p>
    </div>
  </footer>
</template>
