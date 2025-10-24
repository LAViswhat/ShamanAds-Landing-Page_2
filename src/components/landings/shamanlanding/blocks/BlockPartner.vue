<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const splideExtensions = {
  AutoScroll,
};

const splideOptions = {
  type: 'loop', // Зацикленная карусель
  drag: 'free', // Свободное перетаскивание (хорошо сочетается с Auto Scroll)
  perPage: 5, // Количество видимых слайдов
  perMove: 1, // Перемещение по одному слайду
  gap: '1rem', // Отступ между слайдами
  pagination: false, // Показывать пагинацию
  arrows: false, // Показывать стрелки
  autoScroll: {
    speed: 1, // Скорость прокрутки (пиксели/кадр)
    autoStart: true, // Начать прокрутку сразу
    pauseOnHover: true, // Пауза при наведении
    pauseOnFocus: false, // Не останавливать при фокусе
  },
  breakpoints: {
    640: {
      perPage: 2, // 2 слайд на экранах <= 640px
    },
  },
};

const images = import.meta.glob(
  '@/assets/landings/shamanlanding/images/partners/*.{jpg,png,jpeg,gif,webp}',
  {
    eager: true,
    import: 'default',
  },
);
</script>

<template>
  <section
    id="partners"
    class="pb-16 bg-gradient-to-br from-nature-[#e2f3e8]/10 to-warm-[#ecc6d2]/5"
  >
    <div class="container mx-auto px-4">
      <div class="text-center mb-4 animate-fade-in">
        <h2 class="text-4xl lg:text-5xl capitalize font-bold text-headings mb-6">
          <span class="text-primary">Standard <span class="normal-case"> de</span> calitate</span>
          recunoscut internațional
        </h2>
        <p class="text-xl text-slate-500 max-w-3xl mx-auto text-pretty">
          Produsul nostru respectă cele mai stricte norme și au atras atenția presei globale
        </p>
      </div>
      <div class="partners-carousel">
        <Splide
          :options="splideOptions"
          :extensions="splideExtensions"
          aria-label="Partners Carousel"
          class="splide"
        >
          <SplideSlide v-for="(image, path) in images" :key="path">
            <div class="p-3 bg-white border border-gray-500/10 rounded-2xl shadow-glow my-8">
              <img
                :src="image"
                :alt="`Partner logo ${path.split('/').pop()}`"
                class="w-44 h-18 object-contain"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<style scoped>
.splide__slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.splide__slide img {
  transition: transform 0.3s ease;
}

.splide__slide img:hover {
  transform: scale(1.05);
}
</style>
