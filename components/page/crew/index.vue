<template>
  <main
    id="main"
    class="bg-bottom-center bg-bottom-left grid h-dvh gap-8 place-self-end
      bg-[url('/images/pages/crew/background-crew-mobile.jpg')] bg-cover py-24
      text-center grid-areas-crew-mobile
      sm:bg-[url('/images/pages/crew/background-crew-tablet.jpg')]
      sm:grid-areas-crew-tablet lg:grid-cols-default lg:items-stretch lg:justify-start
      lg:gap-x-32 lg:gap-y-8
      lg:bg-[url('/images/pages/crew/background-crew-desktop.jpg')] lg:pb-0 lg:pt-48
      lg:text-start lg:grid-areas-crew-desktop"
  >
    <PageHeading
      class="mx-auto [grid-area:title] lg:mx-0 lg:self-center"
      :heading="heading"
    />

    <figure
      class="flex aspect-auto max-w-[11.0625rem] place-self-center border-b border-solid
        border-white border-opacity-25 [grid-area:image] md:max-w-[28.5rem]
        lg:max-w-[35.5rem] lg:place-self-end"
    >
      <NuxtImg :src="images.webp" :alt="images.alt" preload />
    </figure>

    <article
      class="mx-auto space-y-4 self-end text-center [grid-area:content] lg:mx-0
        lg:self-center lg:text-start"
    >
      <header class="pt-12">
        <h2 class="font-serif text-4xl uppercase opacity-50">{{ role }}</h2>
        <p class="text-nowrap font-serif text-6xl uppercase">
          {{ name }}
        </p>
      </header>

      <p class="mx-auto w-[45ch] text-xl leading-8 lg:mx-0 lg:text-left">
        {{ bio }}
      </p>
    </article>

    <PageCrewNav class="[grid-area:dots-nav]" :links="childrenLinks" />
  </main>
</template>

<script lang="ts">
defineComponent({
  name: 'CrewPage',
});
</script>

<script lang="ts" setup>
import type { TCrewPageResponse, TNavigation } from '~/types';

interface Props {
  pageData: TCrewPageResponse;
  childrenLinks: TNavigation;
}

const props = defineProps<Props>();
const { pageData } = props;

const { name, content } = pageData;
const { bio, images, role, heading } = content;
</script>
