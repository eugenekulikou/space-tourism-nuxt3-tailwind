<template>
  <main id="main" class="h-full">
    <div
      class="bg-bottom-center bg-bottom-left grid h-full place-items-center
        bg-[url('@/assets/images/pages/home/background-home-mobile.jpg')] bg-cover px-4
        pb-[max(4rem,_5vh)] pt-[max(4rem,_20vh)] text-center
        sm:bg-[url('@/assets/images/pages/home/background-home-tablet.jpg')]
        lg:grid-cols-default lg:items-end lg:gap-[var(--container-gap,_2rem)]
        lg:bg-[url('@/assets/images/pages/home/background-home-desktop.jpg')]
        lg:pb-[max(6rem,_20vh)] lg:text-left [&_>_*]:max-w-[50ch]
        lg:[&_>_:first-child]:col-start-2 lg:[&_>_:first-child]:col-end-2
        lg:[&_>_:last-child]:col-start-3 lg:[&_>_:last-child]:col-end-3"
    >
      <div>
        <h1 class="font-sans-cond text-2xl uppercase tracking-widest">
          {{ leadHeading }}<br />
          <span
            class="font-serif text-8xl uppercase leading-tight lg:text-9xl"
            >{{ accentHeading }}</span
          >
        </h1>
        <p class="leading-8">
          {{ description }}
        </p>
      </div>

      <div>
        <UiCTAButton :to="button.to" :label="button.label" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { THomePageResponse } from '@/types';

interface Props {
  pageData: THomePageResponse;
}
const props = defineProps<Props>();

const { pageData } = props;
const { heading, button, description } = pageData.content;

const { usePostfixHeading } = usePageHeading();
const [leadHeading, accentHeading] = usePostfixHeading(heading);
</script>
