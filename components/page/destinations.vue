<template>
  <main
    id="main"
    class="bg-bottom-center bg-bottom-left grid h-full gap-8
      bg-[url('@/assets/images/pages/destination/background-destination-mobile.jpg')]
      bg-cover pb-12 pt-28 text-center grid-areas-destinations-mobile
      sm:bg-[url('@/assets/images/pages/destination/background-destination-tablet.jpg')]
      lg:grid-cols-default lg:items-stretch lg:justify-start lg:gap-x-32 lg:gap-y-8
      lg:bg-[url('@/assets/images/pages/destination/background-destination-desktop.jpg')]
      lg:pt-48 lg:text-start lg:grid-areas-destinations-desktop"
  >
    <h1
      class="mx-8 text-nowrap text-start font-sans-cond text-2xl uppercase tracking-widest
        text-white [grid-area:title] lg:mx-0"
    >
      <span class="mr-4 font-semibold opacity-25">{{ prefix }}</span>
      {{ heading }}
    </h1>

    <div
      class="flex max-w-[10.625rem] items-center place-self-center [grid-area:image]
        md:max-w-[18.75rem] lg:max-w-[27.8125rem]"
    >
      <img
        class="aspect-square"
        src="@/assets/images/pages/destination/image-moon.png"
      />
    </div>

    <div
      class="underline-indicators flex justify-center space-x-8 [grid-area:tabs]
        lg:justify-start"
    >
      <NuxtLink
        v-for="link in childrenLinks"
        aria-selected="true"
        class="py-[0.5em] font-sans-cond uppercase tracking-wider text-white"
        tag="button"
        :to="link.to"
      >
        {{ link.label }}
      </NuxtLink>
    </div>

    <article class="mx-auto [grid-area:content] lg:mx-0">
      <h2 class="font-serif text-8xl uppercase leading-tight">
        {{ pageData.name }}
      </h2>

      <p class="w-[50ch] text-center leading-8 lg:text-left">
        {{ pageData.description }}
      </p>

      <div
        class="mx-12 mt-8 flex flex-col justify-evenly space-y-12 border-t border-white
          border-opacity-25 pt-10 md:flex-row md:space-x-20 md:space-y-0 lg:mx-0
          lg:justify-start"
      >
        <div
          v-for="([title, content], index) in pageData.meta.map(Object.values)"
          :key="index"
          class="space-y-2"
        >
          <h3 class="font-sans-cond text-sm uppercase tracking-wide">
            {{ title }}
          </h3>
          <p class="font-serif text-2xl uppercase">{{ content }}</p>
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
import type { IDestinationPageProps, TNavigation } from '@/types';

interface Props {
  pageData: IDestinationPageProps;
  childrenLinks: TNavigation;
}

const props = defineProps<Props>();
const { pageData } = props;

const [prefix, heading] = usePageHeading(pageData.heading);
</script>
