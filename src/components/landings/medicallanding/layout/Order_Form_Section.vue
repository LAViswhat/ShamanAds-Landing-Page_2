<script setup>
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTimerStore } from '@/composables/useTimerStore';
import { Message, Button, InputText } from 'primevue';
import { VueTelInput } from 'vue-tel-input'; // Import vue-tel-input
import 'vue-tel-input/vue-tel-input.css'; // Import the CSS for vue-tel-input
import ShieldIco from '@/assets/landings/medicallanding/images/icons/shield-user.svg';

const { t } = useI18n();

const { stock } = useTimerStore();

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
});
</script>
<template>
  <section class="py-12 relative overflow-hidden">
    <div class="container mx-auto px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-medical mb-6 leading-snug">
            {{ t('form.title') }}
            <span class="text-primary animate-pulse">{{ t('form.title_offer') }}</span>
          </h2>
          <div class="flex flex-col gap-2 items-center justify-center mx-auto mb-8">
            <div class="text-center">
              <div class="text-normal font-semibold text-danger">
                {{ t('form.without_discount') }}
              </div>
              <div
                class="text-xl font-semibold text-danger relative before:absolute before:top-1/2 before:left-1/4 before:w-20 before:h-0.5 before:bg-[#ef4444] before:-rotate-[20deg]"
              >
                485 ara
              </div>
            </div>
            <img
              src="@/assets/landings/medicallanding/images/product_1.png"
              alt="Insuvit"
              class="w-1/2 max-w-[200px] mx-auto drop-shadow-2xl"
            />
            <div
              class="relative flex-1 max-w-64 lg:max-w-96 bg-gradient-hero text-white p-3 lg:p-4 mt-1 rounded-2xl shadow-2xl"
            >
              <div class="text-3xl lg:text-6xl font-bold">111 ara</div>
              <div class="text-xl lg:text-2xl font-semibold">{{ t('form.exclusiv') }}</div>
            </div>
          </div>
        </div>

        <div class="animate-fade-in-right">
          <h3 class="normal-case text-slate-500 mb-0">
            {{ t('form.info_1') }}
            <p class="mt-1">{{ t('form.info_2') }}</p>
          </h3>
          <form :action="formAction" method="post" class="flex flex-col gap-4 w-full">
            <div class="flex flex-col gap-1 mt-6">
              <label for="name" class="text-left text-sm text-slate-500 font-medium">{{
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
              <label for="phone" class="text-left text-sm text-slate-500 font-medium">{{
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
              severity="primary"
              :label="processing ? t('form.processing') : t('form.submit')"
              size="large"
              :disabled="processing"
              class="uppercase mt-4"
            />
          </form>
        </div>
        <div class="flex flex-row justify-center items-center gap-2 mt-6 max-w-64 mx-auto">
          <img :src="ShieldIco" alt="Clock" class="w-8 h-8" />
          <span class="text-slate-500 text-sm">{{ t('form.privacy') }}</span>
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
