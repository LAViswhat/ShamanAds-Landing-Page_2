<script setup>
import ScrollToSectionButton from '../shared/ScrollToSectionButton.vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const list = [
  {
    value: '0',
    header: t('faq.delivery_terms.question'),
    content: t('faq.delivery_terms.answer'),
  },
  {
    value: '1',
    header: t('faq.cod.question'),
    content: t('faq.cod.answer'),
  },
  {
    value: '2',
    header: t('faq.data_security.question'),
    content: t('faq.data_security.answer'),
  },
  {
    value: '3',
    header: t('faq.more_info.question'),
    content: t('faq.more_info.answer'),
  },
];
</script>
<template>
  <section
    class="mx-2 mt-12 bg-primary shadow-2xl/55 rounded-lg flex flex-col justify-center items-center relative"
  >
    <div class="absolute inset-0 bg-white/20 z-10"></div>
    <div class="p-4 z-20 flex flex-col justify-center items-center">
      <h2 class="text-white text-center pb-4">{{ t('faq.title') }}</h2>
      <Accordion value="0" class="min-w-62 w-84 shadow-2xl">
        <AccordionPanel class="" v-for="item in list" :key="item.header" :value="item.value">
          <AccordionHeader class="text-primary">{{ item.header }}</AccordionHeader>
          <AccordionContent class="text-pretty">
            <p class="text-sm pt-2">{{ item.content }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <ScrollToSectionButton
        section-id="#promo"
        :label="t('buttons.want_to_order')"
        className="mt-4"
      />
    </div>
  </section>
</template>
