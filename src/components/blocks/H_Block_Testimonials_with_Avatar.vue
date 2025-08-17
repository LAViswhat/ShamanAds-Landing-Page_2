<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Avatar from 'primevue/avatar';

const { t } = useI18n();

const testimonialsData = [
  {
    name: t('testimonials.0.name'),
    title: t('testimonials.0.title'),
    content: t('testimonials.0.content'),
    weight: t('testimonials.0.weight'),
    imageName: 'rev1',
    avatarName: 'avatar1',
  },
  {
    name: t('testimonials.1.name'),
    title: t('testimonials.1.title'),
    content: t('testimonials.1.content'),
    weight: t('testimonials.1.weight'),
    imageName: 'rev2',
    avatarName: 'avatar2',
  },
  {
    name: t('testimonials.2.name'),
    title: t('testimonials.2.title'),
    content: t('testimonials.2.content'),
    weight: t('testimonials.2.weight'),
    imageName: 'rev3',
    avatarName: 'avatar3',
  },
];

const testimonialImages = import.meta.glob(
  '@/assets/images/testimonials/*.{jpg,png,jpeg,gif,webp}',
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
    imageSrc: imageMap.get(testimonial.imageName),
    avatarSrc: imageMap.get(testimonial.avatarName),
  }));
});
</script>
<template>
  <section class="py-20 bg-gradient-to-br from-white via-[#b3ffcc]/10 to-white">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-8 relative">
        <div
          class="absolute -top-10 left-1/3 w-32 h-32 md:w-54 md:h-54 bg-success opacity-10 rounded-full blur-xl animate-float"
        />
        <h2 class="text-4xl lg:text-5xl font-bold text-primary mb-6">
          {{ t('testimonials.title') }}
        </h2>
        <p class="text-xl font-bold text-gray-500/80 max-w-3xl mx-auto">
          {{ t('testimonials.subtitle') }}
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white/50 backdrop-blur-sm border border-[#b3ffcc]/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group animate-fade-in"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <!-- Avatar -->
          <div class="flex justify-center mb-6">
            <Avatar :image="testimonial.avatarSrc" class="!w-24 !h-24" shape="circle" />
          </div>

          <!-- Stars -->
          <div class="flex justify-center mb-4">
            <font-awesome-icon
              :icon="['fas', 'star']"
              v-for="i in 5"
              :key="i"
              class="text-secondary"
            />
          </div>

          <!-- Title -->
          <div class="flex flex-row justify-center items-center gap-4 mb-4">
            <div class="bg-[#1f9346]/10 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                <g fill="#377C53">
                  <path
                    d="M2.678 11.894a1 1 0 0 1 .287.801a11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6s-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7s-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"
                  />
                  <path
                    d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"
                  />
                </g>
              </svg>
            </div>
            <h3 class="normal-case text-primary text-pretty flex-1">
              &quot;{{ testimonial.title }}&quot;
            </h3>
          </div>

          <!-- Weight Loss Badge -->
          <div class="flex justify-center mb-6">
            <div class="bg-[#1dc956]/20 border border-[#1dc956]/30 rounded-full px-4 py-2">
              <span class="text-success font-bold text-lg">-{{ testimonial.weight }}</span>
            </div>
          </div>

          <!-- Content -->
          <p class="text-gray-500/80 leading-relaxed mb-6 text-sm">
            {{ testimonial.content }}
          </p>

          <!-- Product Image -->
          <div class="flex justify-center mb-6">
            <div class="relative group-hover:scale-105 transition-transform duration-300">
              <img
                src="@/assets/images/product.jpg"
                :alt="t('testimonials.image_alt', { name: testimonial.name })"
                class="w-36 h-36 md:w-48 md:h-48 object-cover rounded-xl shadow-lg"
              />
              <div
                class="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
          </div>

          <!-- Name -->
          <div class="text-center">
            <p class="font-semibold text-gray-500/80">{{ testimonial.name }}</p>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-12 text-center">
        <div class="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="animate-fade-in" :style="{ animationDelay: '1s' }">
            <div class="text-3xl font-bold text-primary mb-2">
              {{ t('testimonials.success_rate') }}
            </div>
            <div class="text-gray-700/80">{{ t('testimonials.success_rate_label') }}</div>
          </div>
          <div class="animate-fade-in" :style="{ animationDelay: '1.2s' }">
            <div class="text-3xl font-bold text-secondary mb-2">
              {{ t('testimonials.average_rating') }}
            </div>
            <div class="text-gray-700/80">{{ t('testimonials.rating_label') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
