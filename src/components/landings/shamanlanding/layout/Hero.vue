<script setup>
import { useI18n } from 'vue-i18n';
import ScrollToSectionButton from '../shared/ScrollToSectionButton.vue';

const { t } = useI18n();

const date = new Date().toLocaleDateString('ro-RO', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
</script>
<template>
  <div class="min-h-screen bg-gradient-hero relative overflow-hidden">
    <!-- Background decorations -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-[#a7f3d0]/10 via-transparent to-[#10b981]/10"
    />
    <div
      class="absolute top-20 left-10 w-32 h-32 md:w-54 md:h-54 bg-primary opacity-10 rounded-full blur-xl animate-float"
    />
    <div
      class="absolute bottom-20 right-10 w-64 h-64 bg-success opacity-10 rounded-full blur-xl animate-float"
      :style="{ animationDelay: '1s' }"
    />

    <div class="container mx-auto px-4 pt-8 pb-12 relative z-10">
      <!-- Urgent offer badge -->
      <div class="text-center mb-8 animate-fade-in">
        <div
          class="text-lg px-6 py-2 bg-destructive hover:opacity-80 transition-colors rounded-4xl animate-pulse-glow flex flex-row items-center justify-center max-w-xl mx-auto"
        >
          <font-awesome-icon :icon="['fa', 'clock']" class="text-white w-8 h-8 mr-2" />
          <h4 class="text-lg text-white">
            {{ t('topline.offer_today') }} <span>{{ date }}</span>
          </h4>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
        <!-- Left content -->
        <div class="space-y-8 animate-fade-in" :style="{ animationDelay: '0.2s' }">
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
              <span class="bg-gradient-primary bg-clip-text text-transparent">
                {{ t('hero.title') }}
              </span>
              <br />
              <span class="text-foreground"> {{ t('hero.subtitle') }} </span>
            </h1>

            <p class="text-xl lg:text-2xl text-gray-500/80">
              {{ t('hero.subtitle') }}
            </p>
            <div
              class="bg-gradient-promo border border-gray-200/10 rounded-lg p-6 text-center shadow-glow"
            >
              <div class="text-4xl lg:text-5xl font-bold text-white">
                {{ t('hero.info.1') }}
                <span class="line-through text-primary">485asd</span> {{ t('hero.info.3') }}
                <span class="text-5xl lg:text-6xl">111asd!</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right content - Product image with benefits -->
        <div class="animate-fade-in pt-16" :style="{ animationDelay: '0.4s' }">
          <div class="relative animate-float">
            <!-- Main product image -->
            <div class="relative">
              <img
                src="@/assets/landings/shamanlanding/images/product_1.png"
                alt="t('hero.product_alt')"
                class="w-2/3 max-w-xs mx-auto drop-shadow-2xl"
              />
            </div>

            <!-- Floating benefits -->
            <div
              class="absolute -top-16 left-38 lg:left-54 bg-white py-2 px-1 rounded-lg shadow-lg border border-gray-200/20 animate-fade-in max-w-40"
            >
              <div class="text-center">
                <div class="text-base font-bold text-success">🍽️ {{ t('hero.info.1') }}</div>
                <div class="text-xs font-medium">{{ t('hero.info.3') }}</div>
              </div>
            </div>

            <div
              class="absolute -top-4 left-1 bg-white py-2 px-1 rounded-lg shadow-lg border border-gray-200/20 animate-fade-in max-w-48"
            >
              <div class="text-center">
                <div class="text-base font-bold text-primary">⚡ 7x</div>
                <div class="text-xs font-medium">{{ t('hero.info.3') }}</div>
              </div>
            </div>

            <div
              class="absolute top-22 -left-3 bg-white py-2 px-1 rounded-lg shadow-lg border border-gray-200/20 animate-fade-in max-w-40"
            >
              <div class="text-center">
                <div class="text-base font-bold text-secondary">💪 {{ t('hero.info.1') }}</div>
                <div class="text-xs font-medium">{{ t('hero.info.3') }}</div>
              </div>
            </div>

            <div
              class="absolute top-33 -right-2 lg:right-2 bg-white py-2 px-1 rounded-lg shadow-lg border border-gray-200/20 animate-fade-in max-w-40"
            >
              <div class="text-center">
                <div class="text-base font-bold text-success">🌿 100%</div>
                <div class="text-xs font-medium">{{ t('hero.info.3') }}</div>
              </div>
            </div>

            <div
              class="absolute -bottom-10 -right-3 lg:right-15 bg-white py-2 px-1 rounded-lg shadow-lg border border-gray-200/20 animate-fade-in max-w-44"
            >
              <div class="text-center">
                <div class="text-base font-bold text-primary">⏱️ {{ t('hero.info.1') }}</div>
                <div class="text-xs font-medium">{{ t('hero.info.3') }}</div>
              </div>
            </div>

            <div
              class="absolute top-0 -right-3 lg:right-0 bg-white py-2 px-1 rounded-lg shadow-lg border border-gray-200/20 animate-fade-in max-w-44"
            >
              <div class="text-center">
                <div class="text-base font-bold text-secondary">🚫 {{ t('hero.info.1') }}</div>
                <div class="text-xs font-medium">{{ t('hero.info.3') }}</div>
              </div>
            </div>

            <div
              class="absolute -bottom-8 left-2 bg-white py-2 px-1 rounded-lg shadow-lg border border-gray-200/20 animate-fade-in max-w-40"
            >
              <div class="text-center">
                <div class="text-base font-bold text-success">📅 {{ t('hero.info.1') }}</div>
                <div class="text-xs font-medium">{{ t('hero.info.3') }}</div>
              </div>
            </div>

            <div
              class="absolute -bottom-18 left-38 bg-white py-2 px-2 rounded-lg shadow-lg border border-gray-200/20 animate-fade-in max-w-40"
            >
              <div class="text-center">
                <div class="text-base font-bold text-secondary">🛡️ {{ t('hero.info.1') }}</div>
                <div class="text-xs font-medium">{{ t('hero.info.3') }}</div>
              </div>
            </div>
          </div>

          <!-- Key benefits -->
          <div class="space-y-3 pt-24">
            <div
              class="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200/20"
            >
              <div
                class="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center"
              >
                <font-awesome-icon :icon="['fas', 'bolt']" class="text-white" />
              </div>
              <p class="text-lg font-medium">
                {{ t('hero.benefits.1') }}
              </p>
            </div>

            <div
              class="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200/20"
            >
              <div
                class="flex-shrink-0 w-10 h-10 bg-success rounded-full flex items-center justify-center"
              >
                <font-awesome-icon :icon="['fas', 'star']" class="text-white" />
              </div>
              <div>
                <p class="font-semibold text-primary mb-1">
                  {{ t('hero.benefits.2') }}
                </p>
                <p class="text-lg">{{ t('hero.benefits.3') }}</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex items-center space-x-2 text-secondary justify-center">
              <font-awesome-icon :icon="['fas', 'moon']" />
              <span class="font-semibold text-lg">{{ t('hero.benefits.4') }}</span>
            </div>

            <ScrollToSectionButton
              severity="success"
              size="lg"
              icon="pi pi-check"
              section-id="#promo"
              :label="t('buttons.order_now')"
              className="w-full sm:w-auto text-xl px-12 animate-pulse-glow"
            />

            <div class="flex items-center space-x-2 text-sm">
              <div class="flex space-x-1">
                <font-awesome-icon
                  :icon="['fas', 'star']"
                  v-for="i in 5"
                  :key="i"
                  class="text-secondary"
                />
              </div>
              <span>{{ t('hero.info.1', { count: 94577 }) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
