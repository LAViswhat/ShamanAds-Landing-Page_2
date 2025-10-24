<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Avatar from 'primevue/avatar';
import Carousel from 'primevue/carousel';
import StarIco from '@/assets/landings/shamanlanding/images/icons/star.svg';

const { t } = useI18n();

const testimonialsData = [
  {
    name: t('testimonials.2.name'),
    title: t('testimonials.2.title'),
    content: t('testimonials.2.content'),
    weight: t('testimonials.2.weight'),
    avatarName: 'avatar1',
    imageNameBefore: '1_before',
    imageNameAfter: '1_after',
  },
  {
    name: t('testimonials.1.name'),
    title: t('testimonials.1.title'),
    content: t('testimonials.1.content'),
    weight: t('testimonials.1.weight'),
    avatarName: 'avatar3',
    imageNameBefore: '3_before',
    imageNameAfter: '3_after',
  },
  {
    name: t('testimonials.3.name'),
    title: t('testimonials.3.title'),
    content: t('testimonials.3.content'),
    weight: t('testimonials.3.weight'),
    avatarName: 'avatar4',
    imageNameBefore: '4_before',
    imageNameAfter: '4_after',
  },
  {
    name: t('testimonials.0.name'),
    title: t('testimonials.0.title'),
    content: t('testimonials.0.content'),
    weight: t('testimonials.0.weight'),
    avatarName: 'avatar2',
    imageNameBefore: '2_before',
    imageNameAfter: '2_after',
  },

  {
    name: t('testimonials.4.name'),
    title: t('testimonials.4.title'),
    content: t('testimonials.4.content'),
    weight: t('testimonials.4.weight'),
    avatarName: 'avatar5',
    imageNameBefore: '5_before',
    imageNameAfter: '5_after',
  },
];

const testimonialImages = import.meta.glob(
  '@/assets/landings/shamanlanding/images/testimonials/*.{jpg,png,jpeg,gif,webp}',
  {
    eager: true,
    import: 'default',
  },
);

const imageMap = new Map();
for (const path in testimonialImages) {
  const fileName = path.split('/').pop().split('.')[0];
  imageMap.set(fileName, testimonialImages[path]);
}

const testimonials = computed(() => {
  return testimonialsData.map((testimonial) => ({
    ...testimonial,
    imageSrcBefore: imageMap.get(testimonial.imageNameBefore),
    imageSrcAfter: imageMap.get(testimonial.imageNameAfter),
    avatarSrc: imageMap.get(testimonial.avatarName),
  }));
});
</script>
<template>
  <!-- Testimonials Section -->
  <section
    id="testimonials"
    class="pt-12 mt-12 bg-gradient-to-br from-white via-[#b3ffcc]/10 to-white"
  >
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 animate-fade-in relative">
        <div
          class="absolute -top-10 left-1/3 w-32 h-32 md:w-54 md:h-54 bg-success opacity-10 rounded-full blur-xl animate-float"
        />
        <h2 class="text-4xl lg:text-5xl normal-case font-bold text-headings mb-6">
          {{ t('testimonials.title') }}
          <span class="text-[#ecc6d2]">- {{ t('testimonials.title') }}</span>
        </h2>
        <p class="text-xl text-slate-500 text-pretty mb-4">
          {{ t('testimonials.subtitle') }}
        </p>

        <div
          class="pt-4 shadow-premium rounded-xl bg-gradient-to-br from-white via-[#e2f3e8]/5 to-[#ecc6d2]/5"
        >
          <Carousel
            :value="testimonials"
            :numVisible="1"
            :numScroll="1"
            :circular="true"
            :autoplayInterval="30000"
          >
            <template #item="slotProps">
              <div class="relative max-w-4xl lg:max-w-6xl mx-auto">
                <div class="relative p-4 overflow-hidden">
                  <div class="flex justify-start items-center gap-6 p-4">
                    <Avatar :image="slotProps.data.avatarSrc" class="!w-16 !h-16" shape="circle" />

                    <div class="text-left flex-1">
                      <p class="font-semibold text-headings pb-0.5">
                        {{ slotProps.data.name }}
                      </p>
                      <img
                        :src="StarIco"
                        v-for="i in 5"
                        :key="i"
                        alt="Stars"
                        class="w-5 h-5 inline"
                      />
                    </div>
                  </div>

                  <div class="flex flex-row justify-center items-center gap-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                      >
                        <g fill="#61c014">
                          <path
                            d="M2.678 11.894a1 1 0 0 1 .287.801a11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6s-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7s-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"
                          />
                          <path
                            d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"
                          />
                        </g>
                      </svg>
                    </div>
                    <h4 class="normal-case text-primary text-pretty text-left">
                      &quot;{{ slotProps.data.title }}&quot;
                    </h4>
                  </div>

                  <div class="py-4 px-2 lg:p-12">
                    <div class="grid lg:grid-cols-3 gap-8 items-center">
                      <div class="lg:col-span-2 space-y-6">
                        <div class="flex justify-center mb-4"></div>

                        <blockquote
                          class="text-lg lg:text-xl text-headings leading-relaxed italic text-pretty"
                        >
                          {{ slotProps.data.content }}
                        </blockquote>
                      </div>

                      <div class="flex flex-nowrap justify-center items-center gap-1 relative">
                        <img
                          :src="slotProps.data.imageSrcBefore"
                          :alt="slotProps.data.imageNameBefore"
                          class="object-center object-contain h-50 rounded-lg shadow-glow"
                          loading="lazy"
                        />
                        <img
                          :src="slotProps.data.imageSrcAfter"
                          :alt="slotProps.data.name"
                          class="object-center object-contain h-50 rounded-lg shadow-glow"
                          loading="lazy"
                        />
                        <div class="absolute top-full -translate-y-3 text-center">
                          <div
                            class="inline-block p-2 bg-[#1dc956] rounded-xl text-white shadow-glow"
                          >
                            <div class="text-xl font-bold">- {{ slotProps.data.weight }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Carousel>
        </div>
        <!-- Trust Indicators -->
        <div class="mt-4 text-center">
          <div class="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div class="animate-fade-in" :style="{ animationDelay: '1s' }">
              <div class="text-3xl font-bold text-primary mb-2">
                {{ t('testimonials.success_rate') }}
              </div>
              <div class="text-slate-500">{{ t('testimonials.success_rate_label') }}</div>
            </div>
            <div class="animate-fade-in" :style="{ animationDelay: '1.2s' }">
              <div class="text-3xl font-bold text-secondary mb-2">
                {{ t('testimonials.average_rating') }}
              </div>
              <div class="text-slate-500">{{ t('testimonials.rating_label') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.shadow-premium {
  box-shadow: 0 20px 60px rgba(1, 83, 31, 0.15) !important;
}

:deep(.p-button-text.p-button-secondary:not(:disabled):active) {
  background-color: transparent !important;
  background: transparent !important;
}

:deep(.p-button-text.p-button-secondary:not(:disabled):hover) {
  background-color: transparent !important;
  background: transparent !important;
}

:deep(.p-button-icon-only.p-button-rounded) {
  border-radius: 100% !important;
}

:deep(.p-carousel-indicator-active .p-carousel-indicator-button) {
  background: var(--color-primary);
}

::v-deep(.p-carousel-content) {
  display: block !important;
  position: relative !important;
}

::v-deep(.p-carousel-prev-button),
::v-deep(.p-carousel-next-button) {
  position: absolute !important;
  top: 3%;
  transform: translateY(-50%);
  color: var(--color-primary) !important;
  z-index: 10;
  min-width: 0 !important;
}
::v-deep(.p-carousel-prev-button) {
  right: 46px;
}
::v-deep(.p-carousel-next-button) {
  right: 10px;
}
::v-deep(.p-carousel-prev-button svg),
::v-deep(.p-carousel-next-button svg) {
  width: 32px;
  height: 32px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  border: 1px solid rgba(255, 217, 102, 0.5);
}
::v-deep(.p-carousel-indicator-button) {
  background-color: #8e8f90;
}
::v-deep(.p-carousel-indicator-active .p-carousel-indicator-button) {
  background-color: var(--color-primary);
}
::v-deep(.p-carousel-indicator-button) {
  width: 14px;
  height: 14px;
}
</style>
