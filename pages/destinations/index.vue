<template>
  <DestinationsPage v-bind="pageData" />
</template>

<script lang="ts" setup>
import type { IDestinationPageProps, ILink } from '@/types';

definePageMeta({
  title: 'My destinations',
  layout: 'page-default',
});

const destinationLinks: ILink[] = [
  { to: '/moon', label: 'moon' },
  { to: '/mars', label: 'mars' },
  { to: '/europa', label: 'europa' },
  { to: '/titan', label: 'titan' },
];

const pageData: IDestinationPageProps = {
  heading: '01 Pick your destination',
  name: 'Moon',
  images: [
    {
      webpSrc: './assets/destination/image-moon.webp',
      pngSrc: '@/assets/images/destination/image-moon.png',
      alt: '',
    },
  ],
  destinationsLinks: destinationLinks,
  description:
    'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  meta: [
    { avgDistance: 'Avg. distance', distance: '384,400 km' },
    {
      estTravel: 'Est. travel time',
      travel: '3 days',
    },
  ],
};
</script>
