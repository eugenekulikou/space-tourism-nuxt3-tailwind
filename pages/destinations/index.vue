<template>
  <main
    id="main"
    class="grid gap-8 pb-12 text-center [grid-template-areas:'title''image''tabs''content']
      lg:grid-cols-[minmax(2rem,_1fr)_repeat(2,_minmax(0,_40rem))_minmax(2rem,_1fr)]
      lg:items-stretch lg:justify-start lg:gap-x-32 lg:gap-y-8 lg:pt-28 lg:text-start
      lg:[grid-template-areas:'._title_title_.''._image_tabs_.''._image_content_.']"
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
      <button
        v-for="tab in tabs"
        aria-selected="true"
        class="py-[0.5em] font-sans-cond uppercase tracking-wider text-white"
      >
        {{ tab }}
      </button>
    </div>

    <article class="mx-auto [grid-area:content] lg:mx-0">
      <h2 class="font-serif text-8xl uppercase leading-tight">
        {{ data.name }}
      </h2>

      <p class="w-[50ch] text-center leading-8 lg:text-left">
        {{ data.description }}
      </p>

      <div
        class="mx-12 mt-8 flex flex-col justify-evenly space-y-12 border-t border-white
          border-opacity-25 pt-10 md:flex-row md:space-x-20 md:space-y-0 lg:mx-0
          lg:justify-start"
      >
        <div class="space-y-2">
          <h3 class="font-sans-cond text-sm uppercase tracking-wide">
            {{ data.avgDistance }}
          </h3>
          <p class="font-serif text-2xl uppercase">{{ data.distance }}</p>
        </div>

        <div class="space-y-2">
          <h3 class="font-sans-cond text-sm uppercase tracking-wide">
            {{ data.estTravel }}
          </h3>
          <p class="font-serif text-2xl uppercase">{{ data.travel }}</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'My destinations',
  layout: 'page-default',
});

const tabs = ref(['moon', 'mars', 'europa', 'titan']);

const data = ref({
  heading: '01 Pick your destination',
  name: 'Moon',
  images: {
    png: '@/assets/images/destination/image-moon.png',
    webp: './assets/destination/image-moon.webp',
  },
  description:
    'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  avgDistance: 'Avg. distance',
  distance: '384,400 km',
  estTravel: 'Est. travel time',
  travel: '3 days',
});

const [prefix, heading] = usePageHeading(data.value.heading);
</script>
