<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Dialog from 'primevue/dialog';
import ShieldIco from '@/assets/landings/shamanlanding/images/icons/shield.svg';
import FlowerIco from '@/assets/landings/shamanlanding/images/icons/flower.svg';
import RecycleIco from '@/assets/landings/shamanlanding/images/icons/recycle.svg';
import EarthIco from '@/assets/landings/shamanlanding/images/icons/earth-leaf.svg';

const { t } = useI18n();

const ingredientsData = [
  {
    name: t('ingredients.0'),
    fullname: t('ingredients.benefits[0]'),
    position: { top: '-28%', left: '58%' },
    imageName: 'ingredient1',
    description: t('ingredients.benefits[0]'),
  },
  {
    name: t('ingredients.1'),
    fullname: t('ingredients.benefits[0]'),
    position: { top: '108%', left: '31%' },
    imageName: 'ingredient2',
    description: t('ingredients.benefits[0]'),
  },
  {
    name: t('ingredients.2'),
    fullname: t('ingredients.benefits[0]'),
    position: { top: '119%', left: '53%' },
    imageName: 'ingredient3',
    description: t('ingredients.benefits[0]'),
  },
  {
    name: t('ingredients.3'),
    fullname: t('ingredients.benefits[0]'),
    position: { top: '70%', left: '69%' },
    imageName: 'ingredient4',
    description: t('ingredients.benefits[0]'),
  },
  {
    name: t('ingredients.4'),
    fullname: t('ingredients.benefits[0]'),
    position: { top: '25%', left: '69.99%' },
    imageName: 'ingredient5',
    description: t('ingredients.benefits[0]'),
  },
  {
    name: t('ingredients.5'),
    fullname: t('ingredients.benefits[0]'),
    position: { top: '-17%', left: '31%' },
    imageName: 'ingredient6',
    description: t('ingredients.benefits[0]'),
  },
  {
    name: t('ingredients.6'),
    fullname: t('ingredients.benefits[0]'),
    position: { top: '45%', left: '27%' },
    imageName: 'ingredient7',
    description: t('ingredients.benefits[0]'),
  },
];

const ingredientImages = import.meta.glob(
  '@/assets/landings/shamanlanding/images/ingredients/*.{jpg,png,jpeg,gif,webp,svg}',
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

const selectedIngredient = ref(null);
const visible = ref(false);

function openDialog(ingredient) {
  selectedIngredient.value = ingredient;
  visible.value = true;
}
</script>

<template>
  <section class="pt-2 pb-16 bg-gradient-to-br from-[#e2f3e8]/10 to-[#ecc6d2]/5">
    <div class="container mx-auto px-4">
      <div class="text-center mb-24 lg:mb-36 relative">
        <div
          class="absolute -top-10 right-1/3 w-32 h-32 md:w-54 md:h-54 bg-success opacity-10 rounded-full blur-xl animate-float"
        />
        <h2 class="text-4xl lg:text-5xl capitalize font-bold text-headingsl mb-4">
          {{ t('ingredients.title') }} <span class="text-primary">100% Lorem</span>
        </h2>
        <p class="text-xl text-slate-500 max-w-3xl mx-auto text-pretty">
          {{ t('ingredients.subtitle') }}
        </p>
      </div>

      <!-- Interactive Bottle Diagram -->
      <div class="relative max-w-xl mx-auto mb-28">
        <div class="relative flex justify-center animate-float">
          <!-- Central Product Image -->
          <img
            src="/src/assets/images/product_1.png"
            :alt="t('ingredients.product_alt')"
            class="w-2/6 h-auto drop-shadow-2xl"
            loading="lazy"
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
            <div class="relative group cursor-pointer" @click="openDialog(ingredient)">
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
                <div class="flex flex-col items-center justify-center gap-0.5 relative">
                  <div
                    class="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shadow-glow"
                  >
                    <img
                      :src="ingredient.imageSrc"
                      :alt="ingredient.name"
                      class="w-8 h-8 object-cover"
                    />
                  </div>
                  <h3
                    class="font-bold !text-sm text-center text-gray-800/80 capitalize mb-0 flex-1"
                  >
                    {{ ingredient.name }}
                  </h3>
                </div>
                <font-awesome-icon
                  :icon="['fas', 'circle-info']"
                  class="absolute top-0 right-0 text-secondary"
                  :style="{
                    right: ingredient.position.left.includes('1') ? '0.75rem' : '0',
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mb-8">
        <div class="inline-block bg-gradient-primary-light-reversed rounded-xl shadow-premium">
          <div class="p-4">
            <div class="flex items-center gap-4">
              <div class="flex-1">
                <h4 class="text-xl capitalize font-bold text-headings">
                  100% {{ t('ingredients.benefits[0]') }}
                </h4>
                <ul class="text-slate-500 text-left py-4 pl-0">
                  <li class="flex items-start lg:items-center gap-2">
                    <div
                      class="w-10 h-10 bg-[#fff]/50 rounded-full flex items-center justify-center"
                    >
                      <img :src="FlowerIco" class="w-6 h-6 text-primary" />
                    </div>
                    <span class="flex-1"> {{ t('ingredients.benefits[0]') }}</span>
                  </li>
                  <li class="flex items-start lg:items-center gap-2">
                    <div
                      class="w-10 h-10 bg-[#fff]/50 rounded-full flex items-center justify-center"
                    >
                      <img :src="RecycleIco" class="w-5 h-5 text-primary" />
                    </div>
                    <span class="flex-1"> {{ t('ingredients.benefits[1]') }}</span>
                  </li>
                  <li class="flex items-start lg:items-center gap-2">
                    <div
                      class="w-10 h-10 bg-[#fff]/50 rounded-full flex items-center justify-center"
                    >
                      <img :src="EarthIco" class="w-6 h-6 text-primary" />
                    </div>
                    <span class="flex-1"> {{ t('ingredients.benefits[2]') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <div class="inline-block bg-gradient-primary-light rounded-xl shadow-premium">
          <div class="p-4">
            <div class="flex items-center gap-4 mb-2">
              <div class="w-12 h-12 bg-[#16a249]/10 rounded-full flex items-center justify-center">
                <img :src="ShieldIco" class="w-6 h-6 text-primary" />
              </div>
              <div class="flex-1">
                <h4 class="text-xl capitalize font-bold text-headings">
                  {{ t('ingredients.benefits[0]') }}
                </h4>
                <p class="text-slate-500">
                  {{ t('ingredients.benefits[2]') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Dialog
      v-model:visible="visible"
      :modal="true"
      :closable="true"
      :dismissable-mask="true"
      position="right"
      :style="{ width: '85%', maxWidth: '400px' }"
      pt:header:class="!p-4 relative bg-gradient-to-br from-white to-[#e2f3e8]/40 rounded-t-xl relative "
      pt:headerActions:class="absolute top-0 right-0 translate-x-[20px]"
      pt:content:class="!pb-4 bg-gradient-to-br from-white to-[#e2f3e8] rounded-b-xl relative overflow-hidden"
    >
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 p-3 rounded-xl bg-[#16a249]/10 transition-transform duration-300">
          <img :src="selectedIngredient.imageSrc" :alt="selectedIngredient.name" class="w-8 h-8" />
        </div>
        <div class="flex-1 space-y-2">
          <h4 class="font-semibold normal-case text-headings">
            {{ selectedIngredient.fullname }}
          </h4>
          <p class="text-sm text-slate-500 leading-relaxed">
            {{ selectedIngredient?.description }}
          </p>
        </div>
      </div>
    </Dialog>
  </section>
</template>
