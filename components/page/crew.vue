<template>
  <main
    id="main"
    class="bg-bottom-center bg-bottom-left grid h-dvh gap-8 place-self-end
      bg-[url('@/assets/images/pages/crew/background-crew-mobile.jpg')] bg-cover py-24
      text-center grid-areas-crew-mobile
      sm:bg-[url('@/assets/images/pages/crew/background-crew-tablet.jpg')]
      md:grid-areas-crew-tablet lg:grid-cols-default lg:items-stretch lg:justify-start
      lg:gap-x-32 lg:gap-y-8
      lg:bg-[url('@/assets/images/pages/crew/background-crew-desktop.jpg')] lg:pb-0
      lg:pt-48 lg:text-start lg:grid-areas-crew-desktop"
  >
    <h1
      class="mx-8 text-nowrap text-start font-sans-cond text-2xl uppercase tracking-widest
        text-white [grid-area:title] lg:mx-0 lg:self-center"
    >
      <span class="text mr-4 font-semibold opacity-25">{{ prefix }}</span>
      {{ heading }}
    </h1>

    <figure
      class="flex aspect-auto max-w-[11.0625rem] place-self-center border-b border-solid
        border-white border-opacity-25 [grid-area:image] md:max-w-[28.5rem]
        lg:max-w-[35.5rem] lg:place-self-end"
    >
      <img src="@/assets/images/pages/crew/image-douglas-hurley.png" />
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

    <div
      class="flex justify-center space-x-6 [grid-area:dots-nav] lg:justify-start
        lg:self-start"
    >
      <NuxtLink
        v-for="link in childrenLinks"
        tag="a"
        :to="link.to"
        :alt="link.label"
        class="duration-400 h-4 w-4 rounded-full border-0 bg-white bg-opacity-25 transition-all
          ease-in-out hover:bg-opacity-50 aria-selected:bg-opacity-100"
        :aria-selected="link.to === $route.path"
      >
        <span class="sr-only">slide title</span>
      </NuxtLink>
    </div>
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
const { bio, images, role, heading: pageHeading } = content;

const { usePrefixedHeading } = usePageHeading();
const [prefix, heading] = usePrefixedHeading(pageHeading);
</script>
