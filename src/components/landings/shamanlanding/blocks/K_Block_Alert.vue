<script setup>
import ClockIco from '@/assets/landings/shamanlanding/images/icons/clock-sparkle.svg';
import PackageIco from '@/assets/landings/shamanlanding/images/icons/package.svg';
import ZapIco from '@/assets/landings/shamanlanding/images/icons/zap.svg';
</script>
<template>
  <section class="pt-12 pb-8 bg-gradient-warn-light relative overflow-hidden">
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ecc6d2_0%,_transparent_50%)] opacity-10"
    ></div>

    <div class="container mx-auto px-4 relative">
      <div class="max-w-4xl mx-auto">
        <div class="text-center space-y-8">
          <div class="space-y-6">
            <div class="text-center mb-8 animate-pulse bg-gradient-warn rounded-4xl">
              <div
                class="text-base lg:text-xl px-6 py-2 flex flex-row items-center justify-center gap-2 mx-auto"
              >
                <img :src="ClockIco" alt="Clock" class="w-6 h-6" />
                <h4 class="text-white text-pretty">Lorem, ipsum dolor.</h4>
              </div>
            </div>

            <h2 class="text-3xl lg:text-5xl capitalize font-bold text-headings leading-tight">
              Lorem ipsum dolor sit.
              <span class="block text-danger">4 sit!</span>
            </h2>
          </div>

          <div class="bg-white/50 backdrop-blur-sm border-color rounded-2xl p-8 shadow-premium">
            <div class="space-y-6">
              <div class="flex items-center justify-center gap-3 mb-6">
                <img :src="PackageIco" alt="Package" class="w-8 h-8" />
                <span class="text-lg font-semibold text-headings">Lorem ipsum dolor sit amet.</span>
              </div>
              <p
                class="text-lg text-left text-slate-500 leading-relaxed max-w-3xl mx-auto text-pretty"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur hic delectus
                magnam nihil nemo maxime dolorum assumenda ea exercitationem perspiciatis nisi
                aperiam consequatur minus voluptatem, distinctio laboriosam cum vero voluptatum.
              </p>
              <p class="text-lg text-left text-slate-500 leading-relaxed max-w-3xl mx-auto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem
                sint suscipit voluptate veritatis aliquid nulla facere aut nihil quo necessitatibus
                tempora, consequuntur dolorum, saepe unde aspernatur modi ipsum! Molestias!
              </p>
            </div>
          </div>

          <div class="gradient-alert rounded-2xl p-6 border border-[#16a249]/20">
            <div class="flex items-center justify-center gap-3 mb-4">
              <img :src="ZapIco" alt="Zap" class="w-6 h-6" />
              <span class="text-xl font-bold text-headings"
                >Lorem ipsum dolor sit amet consectetur adipisicing.</span
              >
            </div>
            <p class="text-lg text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.gradient-alert {
  background: linear-gradient(
    to right,
    rgba(22, 162, 73, 0.1),
    rgba(255, 217, 102, 0.1),
    rgba(22, 162, 73, 0.1)
  );
}
</style>
