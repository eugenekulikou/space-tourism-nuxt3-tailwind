<template>
  <main
    id="main"
    class="bg-bottom-center bg-bottom-left grid h-dvh w-full gap-8 place-self-end
      bg-[url('/images/pages/crew/background-crew-mobile.jpg')] bg-cover py-24
      text-center grid-areas-crew-mobile
      sm:bg-[url('/images/pages/crew/background-crew-tablet.jpg')]
      sm:grid-areas-crew-tablet lg:grid-cols-default lg:items-stretch lg:justify-start
      lg:gap-x-32 lg:gap-y-8
      lg:bg-[url('/images/pages/crew/background-crew-desktop.jpg')] lg:pb-0 lg:pt-36
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
      <NuxtImg
        :src="image.webp"
        :alt="image.alt"
        :sizes="image.sizes"
        preload
      />
    </figure>

    <article
      class="mx-auto space-y-4 self-end text-center [grid-area:content] lg:mx-0
        lg:self-center lg:text-start"
    >
      <header>
        <h2 class="font-serif text-base uppercase opacity-50 sm:text-4xl">
          {{ role }}
        </h2>
        <p class="text-nowrap font-serif text-2xl uppercase sm:text-6xl">
          {{ name }}
        </p>
      </header>

      <p
        class="mx-auto px-8 text-xl leading-8 sm:w-[45ch] md:px-0 lg:mx-0 lg:text-left"
      >
        {{ bio }}
      </p>
    </article>

    <PageCrewNav class="[grid-area:nav]" :links="childrenLinks" />
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
const { bio, image, role, heading } = content;
</script>
