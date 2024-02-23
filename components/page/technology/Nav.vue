<template>
  <div
    class="flex justify-center space-x-6 lg:flex-col lg:space-x-0 lg:space-y-6"
  >
    <NuxtLink
      v-for="(link, index) in links"
      :to="link.to"
      :aria-selected="link.to === $route.fullPath"
      class="grid h-20 w-20 place-content-center rounded-full border border-solid
        border-white bg-dark font-serif text-4xl text-white opacity-25
        transition-opacity duration-300 ease-in-out hover:opacity-50
        aria-selected:bg-white aria-selected:text-dark aria-selected:opacity-100"
    >
      {{ index + 1 }}</NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
import type { TNavigation } from '@/types';

interface Props {
  links: TNavigation;
}

defineProps<Props>();
</script>
