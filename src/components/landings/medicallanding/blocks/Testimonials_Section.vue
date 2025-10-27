<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Avatar from 'primevue/avatar';

const { t } = useI18n();

const testimonialsData = [
  {
    name: t('testimonials.0.name'),
    age: t('testimonials.0.age'),
    content: t('testimonials.0.content'),
    avatarName: 'ava1',
  },
  {
    name: t('testimonials.1.name'),
    age: t('testimonials.1.age'),
    content: t('testimonials.1.content'),
    avatarName: 'ava2',
  },
  {
    name: t('testimonials.2.name'),
    age: t('testimonials.2.age'),
    content: t('testimonials.2.content'),
    avatarName: 'ava3',
  },
];

const testimonialImages = import.meta.glob(
  '@/assets/landings/medicallanding/images/testimonials/*.{jpg,png,jpeg,gif,webp}',
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
    avatarSrc: imageMap.get(testimonial.avatarName),
  }));
});
</script>

<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="relative py-12">
    <div className="absolute inset-0 opacity-95 bg-medical"></div>
    <div class="container mx-auto px-4">
      <div class="text-center animate-fade-in relative">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
          {{ t('testimonials.title') }}
        </h2>
        <p class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty mb-8">
          {{ t('testimonials.subtitle') }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20"
          >
            <div class="p-4 pb-2">
              <div class="flex items-center gap-3">
                <Avatar
                  :image="testimonial.avatarSrc"
                  class="!w-14 !h-14 flex-shrink-0"
                  shape="circle"
                />
                <div class="text-left flex-1 min-w-0">
                  <p class="font-semibold text-medical text-md truncate">
                    {{ testimonial.name }}
                  </p>
                  <p class="text-slate-500 text-md truncate">
                    {{ testimonial.age }}
                  </p>
                </div>
              </div>
            </div>

            <div class="p-4">
              <blockquote
                class="text-md text-headings leading-relaxed italic text-left mb-4 text-pretty"
              >
                {{ testimonial.content }}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-card {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.testimonial-card:nth-child(1) {
  animation-delay: 0.1s;
}
.testimonial-card:nth-child(2) {
  animation-delay: 0.2s;
}
.testimonial-card:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover эффекты */
.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-card:hover .shadow-sm {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
