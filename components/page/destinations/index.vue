<template>
  <main
    id="main"
    class="bg-bottom-center bg-bottom-left grid h-full gap-8
      bg-[url('/images/pages/destination/background-destination-mobile.jpg')] bg-cover
      pb-12 pt-28 text-center grid-areas-destinations-mobile
      sm:bg-[url('/images/pages/destination/background-destination-tablet.jpg')]
      lg:grid-cols-default lg:items-stretch lg:justify-start lg:gap-x-32 lg:gap-y-8
      lg:bg-[url('/images/pages/destination/background-destination-desktop.jpg')]
      lg:pt-48 lg:text-start lg:grid-areas-destinations-desktop"
  >
    <PageHeading class="mx-auto [grid-area:title] lg:mx-0" :heading="heading" />

    <figure
      class="flex max-w-[10.625rem] items-center place-self-center [grid-area:image]
        sm:max-w-[18.75rem] lg:max-w-[27.8125rem]"
    >
      <NuxtImg
        class="aspect-square"
        :src="image.webp"
        :alt="image.alt"
        sizes="xs:170px sm:300px lg:445px"
        width="445"
        height="445"
        preload
      />
    </figure>

    <PageDestinationsNav class="[grid-area:tabs]" :links="childrenLinks" />

    <article class="mx-auto pb-12 [grid-area:content] lg:mx-0 lg:pb-0">
      <header>
        <h2 class="font-serif text-8xl uppercase leading-tight">
          {{ name }}
        </h2>

        <p class="w-[50ch] text-center leading-8 lg:text-left">
          {{ description }}
        </p>
      </header>

      <div
        class="mx-12 mt-8 flex flex-col justify-evenly space-y-12 border-t border-white
          border-opacity-25 pt-10 md:flex-row md:space-x-20 md:space-y-0 lg:mx-0
          lg:justify-start"
      >
        <div
          v-for="([title, info], index) in details.map(Object.values)"
          :key="index"
          class="space-y-2"
        >
          <h3 class="font-sans-cond text-sm uppercase tracking-wide">
            {{ title }}
          </h3>
          <p class="font-serif text-2xl uppercase">{{ info }}</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script lang="ts">
defineComponent({
  name: 'DestinationsPage',
});
</script>

<script lang="ts" setup>
import type { TDestinationsPageResponse, TNavigation } from '@/types';

interface Props {
  pageData: TDestinationsPageResponse;
  childrenLinks: TNavigation;
}

const props = defineProps<Props>();
const { content, name } = props.pageData;
const { heading, description, image, info: details } = content;
</script>
