<template>
  <div class="landing-selector">
    <!-- Floating Toggle Button -->
    <div
      v-if="!isOpen"
      @click="toggleSelector"
      class="floating-toggle"
      :title="t('landingSelector.toggle')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    </div>

    <!-- Landing Selector Panel -->
    <Transition name="slide-up" appear>
      <div v-if="isOpen" class="selector-panel">
        <div class="panel-header">
          <h3 class="panel-title">{{ t('landingSelector.title') }}</h3>
          <button @click="toggleSelector" class="close-btn" :title="t('landingSelector.close')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m18 6-12 12" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div class="landing-options">
          <div
            v-for="landing in landings"
            :key="landing.path"
            @click="switchLanding(landing.path)"
            class="landing-option"
            :class="{ active: isCurrentLanding(landing.path) }"
          >
            <div class="landing-preview" :class="`theme-${landing.theme}`">
              <div class="preview-content">
                <div class="preview-title">{{ t(landing.titleKey) }}</div>
              </div>
            </div>
            <div class="landing-info">
              <h4 class="landing-name">{{ t(landing.titleKey) }}</h4>
            </div>
          </div>
        </div>

        <div class="panel-footer">
          <p class="footer-text">{{ t('landingSelector.switchInfo') }}</p>
        </div>
      </div>
    </Transition>

    <!-- Backdrop -->
    <Transition name="fade">
      <div v-if="isOpen" class="backdrop" @click="toggleSelector"></div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const isOpen = ref(false);

const landings = [
  {
    path: '/landing_1',
    theme: 'shamanlanding',
    nameKey: 'landingSelector.landings.shaman.name',
    titleKey: 'landingSelector.landings.shaman.title',
    shortDescKey: 'landingSelector.landings.shaman.shortDesc',
    descriptionKey: 'landingSelector.landings.shaman.description',
  },
  {
    path: '/landing_2',
    theme: 'medicallanding',
    nameKey: 'landingSelector.landings.medical.name',
    titleKey: 'landingSelector.landings.medical.title',
    shortDescKey: 'landingSelector.landings.medical.shortDesc',
    descriptionKey: 'landingSelector.landings.medical.description',
  },
  {
    path: '/landing_3',
    theme: 'sexy',
    nameKey: 'landingSelector.landings.sexy.name',
    titleKey: 'landingSelector.landings.sexy.title',
    shortDescKey: 'landingSelector.landings.sexy.shortDesc',
    descriptionKey: 'landingSelector.landings.sexy.description',
  },
];

const toggleSelector = () => {
  isOpen.value = !isOpen.value;
};

const switchLanding = (path) => {
  if (route.path !== path) {
    router.push(path);
  }
  isOpen.value = false;
};

const isCurrentLanding = (path) => {
  return route.path === path;
};

// Close on Escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
.landing-selector {
  position: fixed;
  z-index: 9999;
}

/* Floating Toggle Button */
.floating-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 10000;
  animation: pulse 2s infinite;
}

.floating-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  animation: none;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.25);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
}

/* Selector Panel */
.selector-panel {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 800px;
  max-height: 80vh;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 10001;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.panel-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Landing Options */
.landing-options {
  padding: 24px;
  display: grid;
  gap: 16px;
  max-height: 50vh;
  overflow-y: auto;
}

.landing-option {
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.landing-option:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
  transform: translateY(-2px);
}

.landing-option.active {
  border-color: #667eea;
  background: linear-gradient(135deg, #667eea08 0%, #764ba208 100%);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.landing-preview {
  width: 120px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.theme-shamanlanding {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
}

.theme-medicallanding {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
}

.theme-sexy {
  background: linear-gradient(135deg, #ee4962 0%, #ffc2cb 100%);
}

.preview-content {
  padding: 8px;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.preview-title {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.9;
}

.preview-description {
  font-size: 0.625rem;
  opacity: 0.7;
  line-height: 1.2;
}

.landing-info {
  flex: 1;
}

.landing-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #1f2937;
}

.landing-desc {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

/* Panel Footer */
.panel-footer {
  padding: 16px 24px;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
}

.footer-text {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  text-align: center;
}

/* Backdrop */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
}

/* Transitions */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .selector-panel {
    width: 95vw;
    max-height: 90vh;
  }

  .landing-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .landing-option {
    flex-direction: row;
    padding: 12px;
  }

  .landing-preview {
    width: 80px;
    height: 50px;
  }

  .landing-name {
    font-size: 1rem;
  }

  .landing-desc {
    font-size: 0.8rem;
  }

  .floating-toggle {
    width: 48px;
    height: 48px;
    top: 16px;
    right: 16px;
  }

  .panel-header {
    padding: 16px 20px;
  }

  .panel-title {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .landing-option {
    padding: 10px;
  }

  .landing-preview {
    width: 60px;
    height: 40px;
  }

  .preview-title {
    font-size: 0.7rem;
  }

  .preview-description {
    font-size: 0.55rem;
  }

  .landing-name {
    font-size: 0.95rem;
  }

  .landing-desc {
    font-size: 0.75rem;
  }
}
</style>
