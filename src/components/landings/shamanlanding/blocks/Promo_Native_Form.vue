<script setup>
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTimerStore } from '@/composables/useTimerStore';
import { Message, Button, InputText } from 'primevue';
import { VueTelInput } from 'vue-tel-input'; // Import vue-tel-input
import 'vue-tel-input/vue-tel-input.css'; // Import the CSS for vue-tel-input
import ShieldIco from '@/assets/landings/shamanlanding/images/icons/shield-user.svg';

const { t } = useI18n();

const { stock } = useTimerStore();

const stockKey = ref(0);

watch(stock, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    stockKey.value++;
  }
});

const isHighlighted = ref(false);

const highlightStock = () => {
  isHighlighted.value = true;
  setTimeout(() => {
    isHighlighted.value = false;
  }, 500);
};

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
  <section
    id="order"
    class="py-8 bg-gradient-to-br from-[#ecc6d2]/10 via-[#e2f3e8]/10 to-[#ffd966]/5 relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_50%)] opacity-5"
    ></div>

    <div class="container mx-auto px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8 animate-fade-in">
          <h2 class="text-4xl capitalize lg:text-5xl font-bold text-headings mb-6">
            Lorem <span class="normal-case">de </span>
            <span class="text-primary">ipsum <span class="normal-case">lor </span> 99%</span>
            wasd
          </h2>
          <p class="text-xl text-slate-500">
            Lorem ipsum dolor sit.
            <Transition name="stock-change" mode="out-in" @after-enter="highlightStock">
              <span
                :key="stockKey"
                class="text-danger text-3xl font-bold animate-pulse inline-block"
                :class="{ highlight: isHighlighted }"
                >{{ stock }} {{ t('timer.pieces') }}</span
              >
            </Transition>
            orem ipsum dolor sit amet.
          </p>
        </div>

        <div class="animate-fade-in-right">
          <h3 class="normal-case text-slate-500 mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo.
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
