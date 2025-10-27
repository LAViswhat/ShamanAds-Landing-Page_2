<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTimerStore } from '@/composables/useTimerStore';
import { Message, Button, InputText } from 'primevue';
import { VueTelInput } from 'vue-tel-input'; // Import vue-tel-input
import 'vue-tel-input/vue-tel-input.css'; // Import the CSS for vue-tel-input
import ShieldIco from '@/assets/landings/sexy/images/icons/shield-user.svg';
import SectionBg from '@/assets/landings/sexy/images/featureSectionBg2.jpg';

const { t } = useI18n();

const { stock, minutes, seconds, startTimer, stopTimer } = useTimerStore();

const stockKey = ref(0);

watch(stock, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    stockKey.value++;
  }
});

const htmlLang = document.documentElement.lang.split('-');
const country = htmlLang[0] || 'ro';

const initialValues = ref({
  username: '',
  phone: '',
});

const phoneValid = ref(true);
const phoneErrorMessage = ref('');
const processing = ref(false);

const handlePhoneValidate = (validationResult) => {
  phoneValid.value = validationResult.valid;
  phoneErrorMessage.value = validationResult.valid ? '' : t('form.errors.phone_invalid');
};

const formAction = ref('');

onMounted(() => {
  const hiddenInput = document.querySelector('input[name="order_url"]');

  if (hiddenInput && hiddenInput.value) {
    formAction.value = hiddenInput.value;
  } else {
    console.log('input "order_url" not found.');
  }

  startTimer();
});

onUnmounted(() => {
  stopTimer();
});
</script>
<template>
  <section class="py-12 relative overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${SectionBg})` }"
    >
      <div class="absolute inset-0 bg-gradient-primary opacity-70" />
    </div>
    <div class="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
    <div class="absolute bottom-96 right-10 w-32 h-32 bg-white/15 rounded-full animate-float" />
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" />

    <div class="container mx-auto px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug">
            {{ t('form.title') }}
            <p class="text-white/90">{{ t('form.title') }}</p>
          </h2>
          <p class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty mb-8">
            {{ t('form.subtitle') }}
          </p>
          <div
            class="bg-white/10 backdrop-blur-lg border-white/20 rounded-lg p-8 mb-12 max-w-2xl mx-auto flex flex-col gap-2 items-center justify-center"
          >
            <div class="text-center">
              <h3 class="text-2xl font-bold text-white mb-2">{{ t('form.title') }}</h3>
              <div class="flex flex-row justify-center items-center gap-2 my-4">
                <div
                  class="bg-white/90 backdrop-blur-2xl text-coral rounded-lg min-w-21 px-3 py-2 text-2xl font-bold flex flex-col justify-center items-center gap-0 transition-transform duration-500"
                >
                  <p>{{ String(minutes).padStart(2, '0') }}</p>
                  <span class="text-sm">lorem</span>
                </div>
                <span class="text-3xl font-bold text-white/90">:</span>
                <div
                  class="bg-white/90 backdrop-blur-2xl text-coral rounded-lg min-w-21 px-3 py-2 text-2xl font-bold flex flex-col justify-center items-center gap-0 transition-transform duration-500"
                >
                  <p>{{ String(seconds).padStart(2, '0') }}</p>
                  <span class="text-sm">lorem</span>
                </div>
              </div>
              <div class="flex items-center justify-center gap-4 text-white">
                <span class="whitespace-nowrap text-4xl lg:text-6xl font-bold">lorem ipsum</span>
                <span
                  class="whitespace-nowrap text-xl font-semibold opacity-60 relative before:absolute before:top-1/2 before:left-0 before:w-20 before:h-0.5 before:bg-white before:-rotate-[20deg]"
                >
                  {{ t('form.with_discount') }}
                </span>
              </div>
              <p class="bg-white text-coral px-4 py-2 mt-2 rounded-full font-bold">
                {{ t('form.discount') }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-16 pt-8 border-t border-white/40">
          <h3 class="text-xl font-bold mb-4 text-white">
            {{ t('form.info_1') }}
          </h3>
          <div class="flex items-start gap-2">
            <span class="w-2 h-2 bg-white rounded-full mt-2.5" />
            <span class="text-white text-lg mx-auto flex-1 text-pretty">
              {{ t('form.info_1') }}
            </span>
          </div>
          <div class="flex items-start gap-2">
            <span class="w-2 h-2 bg-white rounded-full mt-2.5" />
            <p class="text-white text-lg mx-auto flex-1 text-pretty">
              {{ t('form.info_1') }}
            </p>
          </div>
          <div class="flex items-start gap-2">
            <span class="w-2 h-2 bg-white rounded-full mt-2.5" />
            <p class="text-white text-lg mx-auto flex-1 text-pretty">
              {{ t('form.info_1') }}
            </p>
          </div>
          <form :action="formAction" method="post" class="flex flex-col gap-4 w-full">
            <div class="flex flex-col gap-1 mt-6">
              <label for="name" class="text-left text-sm text-white font-medium">{{
                t('form.name_label')
              }}</label>
              <InputText
                v-model="initialValues.username"
                name="name"
                id="name"
                type="text"
                :placeholder="t('form.name_placeholder')"
                fluid
                size="large"
                required
              />
            </div>
            <div class="flex flex-col gap-1">
              <label for="phone" class="text-left text-sm text-white font-medium">{{
                t('form.phone_label')
              }}</label>
              <VueTelInput
                v-model="initialValues.phone"
                mode="international"
                :defaultCountry="country.toUpperCase()"
                :autoFormat="true"
                :validCharactersOnly="true"
                :invalidMsg="phoneErrorMessage"
                :utilsScript="'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js'"
                :inputOptions="{
                  placeholder: t('form.phone_placeholder'),
                  id: 'phone',
                  name: 'phone',
                  required: true,
                }"
                :dropdownOptions="{
                  disabled: true,
                  showFlags: true,
                  showDialCodeInSelection: true,
                }"
                @validate="handlePhoneValidate"
                class="w-full"
              />
              <Message
                v-if="!phoneValid && initialValues.phone"
                severity="error"
                size="small"
                variant="simple"
              >
                {{ phoneErrorMessage }}
              </Message>
            </div>
            <Button
              type="submit"
              severity="danger"
              :label="processing ? t('form.processing') : t('form.submit')"
              size="large"
              :disabled="processing"
              class="text-coral !bg-white hover:bg-white/90 shadow-coral !py-4 !border-0 uppercase mt-4 max-w-96 mx-auto"
            />
          </form>
        </div>
        <div class="flex flex-col justify-center items-center gap-1 mt-6">
          <div class="flex items-center gap-1">
            <span class="w-1.5 h-1.5 bg-white rounded-full" />
            <p class="text-white text-sm flex-1 text-pretty">
              {{ t('form.info_1') }}
            </p>
          </div>
          <div class="flex items-center gap-1">
            <span class="w-1.5 h-1.5 bg-white rounded-full" />
            <p class="text-white text-sm flex-1 text-pretty">
              {{ t('form.privacy') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped>
/* Style vue-tel-input to match PrimeVue InputText */
:deep(.vue-tel-input) {
  /* Base container style if needed */
  border: 1px solid #ced4da; /* Default PrimeVue border color */
  border-radius: 6px; /* Default PrimeVue border radius */
  overflow: hidden; /* To ensure border-radius applies correctly to children */
  background: #ffffff; /* Default PrimeVue background color */
  box-shadow: none; /* Remove default shadow if any */
}

:deep(.vue-tel-input .vti__input) {
  /* Input field styles */
  border: none; /* Remove internal border, it's handled by the container */
  outline: none; /* Remove outline */
  padding: 0.75rem 0.75rem; /* Match PrimeVue InputText padding */
  font-family: inherit; /* Inherit font from parent */
  font-size: 1.1rem; /* Match PrimeVue InputText font size */
  font-weight: 500;
  color: #222; /* Match PrimeVue InputText text color */
  flex-grow: 1;
}

:deep(.vue-tel-input:focus-within),
:deep(.p-inputtext:enabled:focus) {
  /* Focus style for the entire component container */
  border-color: transparent;
  box-shadow: 0 0 0 0.2rem rgba(31, 147, 70, 0.25);
}

:deep(.vue-tel-input .vti__dropdown-arrow) {
  /* Hide the arrow if the dropdown is disabled */
  display: none;
}

.stock-change-enter-active,
.stock-change-leave-active {
  transition: all 0.3s ease;
}

.stock-change-enter-from {
  opacity: 0;
  transform: scale(0.6);
  color: #fcd7bb;
}

.stock-change-leave-to {
  opacity: 0;
  transform: scale(1.1);
  color: #fcd7bb;
}

.highlight {
  animation: highlightFlash 0.3s ease;
}

@keyframes highlightFlash {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
