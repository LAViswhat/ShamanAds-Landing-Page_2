<script setup>
import { useI18n } from 'vue-i18n';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

const { t } = useI18n();

const questions = [
  /* {
    title: 'faq.0.question',
    description: 'faq.0.answer',
  },
  {
    title: 'faq.1.question',
    description: 'faq.1.answer',
  }, */
  {
    title: 'faq.2.question',
    description: 'faq.2.answer',
  },
  {
    title: 'faq.3.question',
    description: 'faq.3.answer',
  },
  {
    title: 'faq.4.question',
    description: 'faq.4.answer',
  },
  {
    title: 'faq.5.question',
    description: 'faq.5.answer',
  },
  {
    title: 'faq.6.question',
    description: 'faq.6.answer',
  },
];
</script>
<template>
  <section id="faq" class="py-12 bg-gradient-secondary">
    <div class="container mx-auto px-4 z-20">
      <div class="text-center mb-8">
        <h2 class="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-pretty">
          {{ t('faq.title') }}
          <span class="bg-gradient-primary bg-clip-text text-transparent">{{
            t('faq.title')
          }}</span>
        </h2>
      </div>

      <div class="flex justify-center flex-col gap-6">
        <div v-for="question in questions" class="flex-1 mb-2k">
          <Accordion value="0" class="shadow-lg">
            <AccordionPanel>
              <AccordionHeader class="text-muted-foreground">{{
                t(question.title)
              }}</AccordionHeader>
              <AccordionContent class="text-pretty">
                <p class="text-foreground opacity-60 pt-2">{{ t(question.description) }}</p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </div>
  </section>
</template>
