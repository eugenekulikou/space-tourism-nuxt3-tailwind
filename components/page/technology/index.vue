<template>
  <main
    id="main"
    class="bg-bottom-center bg-bottom-left grid h-full gap-6 space-y-8
      bg-[url('/images/pages/technology/background-technology-mobile.jpg')] bg-cover
      pb-16 pt-28 text-center grid-areas-technology-mobile
      sm:bg-[url('/images/pages/technology/background-technology-tablet.jpg')]
      lg:grid-cols-[minmax(2rem,_1fr)_minmax(40rem,_1fr)_minmax(30,_1fr)]
      lg:justify-end lg:gap-x-32 lg:gap-y-8 lg:space-y-0
      lg:bg-[url('/images/pages/technology/background-technology-desktop.jpg')]
      lg:pt-48 lg:text-start lg:grid-areas-technology-desktop 2xl:justify-evenly"
  >
    <PageHeading
      class="mx-auto [grid-area:title] md:mx-8 lg:mx-0"
      :heading="heading"
    />

    <div
      class="flex flex-col items-center space-y-8 [grid-area:content] lg:flex-row
        lg:space-x-20"
    >
      <PageTechnologyNav :links="childrenLinks" />

      <article class="mx-auto space-y-8 lg:mx-0">
        <header class="space-y-4">
          <p class="font-sans-cond text-base uppercase tracking-wider">
            {{ subheading }}
          </p>
          <h2
            class="text-nowrap font-serif text-2xl uppercase leading-tight sm:text-6xl"
          >
            {{ name }}
          </h2>
        </header>

        <p class="px-8 text-center leading-8 sm:w-[50ch] sm:px-0 lg:text-left">
          {{ description }}
        </p>
      </article>
    </div>

    <figure
      class="flex h-[10.625rem] [grid-area:figure] md:h-[19.375rem] lg:h-full lg:justify-end"
    >
      <NuxtImg
        class="hidden aspect-auto w-fit object-contain lg:block"
        :src="image.portrait"
        :alt="image.alt"
        :sizes="image.sizes"
        :width="image.width"
        :height="image.height"
        preload
      />
      <NuxtImg
        class="w-full lg:hidden"
        :src="image.landscape"
        :alt="image.alt"
        :sizes="image.sizes"
        preload
      />
    </figure>
  </main>
</template>

<script lang="ts" setup>
import type { TNavigation, TTechnologyPageResponse } from '~/types';

interface Props {
  pageData: TTechnologyPageResponse;
  childrenLinks: TNavigation;
}

const props = defineProps<Props>();

const { content, name } = props.pageData;
const { heading, description, image, subheading } = content;
</script>
