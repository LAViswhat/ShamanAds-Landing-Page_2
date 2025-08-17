<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const ingredientsData = [
  {
    name: t('ingredients.0'),
    position: { top: '-28%', left: '58%' },
    imageName: 'ingredient1',
  },
  {
    name: t('ingredients.1'),
    position: { top: '108%', left: '31%' },
    imageName: 'ingredient2',
  },
  {
    name: t('ingredients.2'),
    position: { top: '119%', left: '53%' },
    imageName: 'ingredient3',
  },
  {
    name: t('ingredients.3'),
    position: { top: '70%', left: '69%' },
    imageName: 'ingredient4',
  },
  {
    name: t('ingredients.4'),
    position: { top: '25%', left: '69.99%' },
    imageName: 'ingredient5',
  },
  {
    name: t('ingredients.5'),
    position: { top: '-17%', left: '31%' },
    imageName: 'ingredient6',
  },
  {
    name: t('ingredients.6'),
    position: { top: '45%', left: '27%' },
    imageName: 'ingredient7',
  },
];

const ingredientImages = import.meta.glob(
  '@/assets/images/ingredients/*.{jpg,png,jpeg,gif,webp,svg}',
  {
    eager: true,
    import: 'default',
  },
);

const imageMap = new Map();
for (const path in ingredientImages) {
  const fileName = path.split('/').pop().split('.')[0];
  imageMap.set(fileName, ingredientImages[path]);
}

const ingredients = computed(() => {
  return ingredientsData.map((ingredient) => ({
    ...ingredient,
    imageSrc: imageMap.get(ingredient.imageName),
  }));
});
</script>

<template>
  <section class="py-16 bg-card/50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-24 lg:mb-36 relative">
        <div
          class="absolute -top-10 right-1/3 w-32 h-32 md:w-54 md:h-54 bg-success opacity-10 rounded-full blur-xl animate-float"
        />
        <h2 class="text-3xl lg:text-4xl mb-4">{{ t('ingredients.title') }}</h2>
        <p class="text-lg text-gray-800/70 max-w-2xl mx-auto text-pretty">
          {{ t('ingredients.subtitle') }}
        </p>
      </div>

      <!-- Interactive Bottle Diagram -->
      <div class="relative max-w-xl mx-auto mb-24">
        <div class="relative flex justify-center animate-float">
          <!-- Central Product Image -->
          <img
            src="/src/assets/images/product.jpg"
            :alt="t('ingredients.product_alt')"
            class="w-2/6 h-auto drop-shadow-2xl"
          />

          <!-- Ingredient Points-->
          <div
            v-for="(ingredient, index) in ingredients"
            :key="ingredient.name"
            class="absolute animate-fade-in"
            :style="{
              top: ingredient.position.top,
              left: ingredient.position.left,
              animationDelay: `${index * 0.2}s`,
            }"
          >
            <!-- Ingredient Point -->
            <div class="relative group cursor-pointer">
              <div
                class="w-4 h-4 bg-primary rounded-full shadow-lg animate-pulse border-4 border-background group-hover:scale-125 transition-transform duration-300"
                :style="{
                  animationDelay: `${index * 0.5}s`,
                }"
              >
                <div class="w-full h-full bg-primary rounded-full animate-ping opacity-75"></div>
              </div>

              <!-- Ingredients -->
              <div
                class="absolute z-10 animate-scale-in"
                :style="{
                  left:
                    ingredient.position.left.includes('1') || ingredient.position.left.includes('7')
                      ? '-6rem'
                      : '1rem',
                  top: '-2.5rem',
                }"
              >
                <div class="flex flex-col items-center justify-center gap-0.5">
                  <div
                    class="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shadow-glow"
                  >
                    <img
                      :src="ingredient.imageSrc"
                      :alt="ingredient.name"
                      class="w-8 h-8 object-cover"
                    />
                  </div>

                  <h3 class="font-bold text-sm text-center text-gray-800/80 capitalize mb-0 flex-1">
                    {{ ingredient.name }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4">
        <div class="p-4 bg-gray-200/30 shadow-sm rounded-full justify-center text-center">
          <div>
            <div class="font-bold">🔥</div>
            <p class="text-sm">
              {{ t('ingredients.benefits.0') }}
            </p>
          </div>
        </div>
        <div class="p-4 bg-gray-200/30 shadow-sm rounded-full justify-center text-center">
          <div>
            <div class="font-bold">💎</div>
            <p class="text-sm">
              {{ t('ingredients.benefits.1') }}
            </p>
          </div>
        </div>
        <div class="p-4 bg-gray-200/30 shadow-sm rounded-full justify-center text-center">
          <div>
            <div class="font-bold">🦠</div>
            <p class="text-sm">
              {{ t('ingredients.benefits.2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
