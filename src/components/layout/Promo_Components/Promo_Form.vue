<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { Message, Button, InputText } from 'primevue';
import { VueTelInput } from 'vue-tel-input'; // Import vue-tel-input
import 'vue-tel-input/vue-tel-input.css'; // Import the CSS for vue-tel-input
import LogoTitle from '@/components/shared/LogoTitle.vue';

const { t } = useI18n();

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

const formAction = ref(''); // Переменная для хранения action формы

onMounted(() => {
  const hiddenInput = document.querySelector('input[name="order_url"]');

  // Если input найден и у него есть значение, то используем это значение
  if (hiddenInput && hiddenInput.value) {
    formAction.value = hiddenInput.value;
    console.log('Form action установлен.');
  } else {
    console.log('input "order_url" не найден.');
  }
});
</script>
<template>
  <div
    class="text-center mt-4 pt-4 border-t border-t-gray-500/60 md:border-t-0 md:border-l md:border-l-gray-500/60"
  >
    <h3 class="text-headings">{{ t('form.title') }}</h3>
    <p>
      {{ t('form.subtitle') }} <LogoTitle class="text-2xl" /> {{ t('form.with_discount') }}
      <span class="text-2xl font-bold text-secondary">{{ t('form.discount') }}</span>
    </p>
    <div>
      <form :action="formAction" method="post" class="flex flex-col gap-4 w-full">
        <div class="flex flex-col gap-1 mt-6">
          <label for="name" class="text-left text-sm font-medium">{{ t('form.name_label') }}</label>
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
          <label for="phone" class="text-left text-sm font-medium">{{
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
            :dropdownOptions="{ disabled: true, showFlags: true, showDialCodeInSelection: true }"
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
          severity="secondary"
          :label="processing ? t('form.processing') : t('form.submit')"
          size="large"
          :disabled="processing"
        />
      </form>
      <div class="flex flex-row justify-center items-center gap-2 mt-6 max-w-64 mx-auto">
        <font-awesome-icon :icon="['fas', 'user-shield']" class="text-gray-800/50" size="lg" />
        <span class="text-gray-800/50 text-xs">{{ t('form.privacy') }}</span>
      </div>
    </div>
  </div>
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
</style>
