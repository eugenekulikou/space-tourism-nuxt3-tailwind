<template>
  <div class="flex justify-center space-x-6 lg:justify-start lg:self-start">
    <NuxtLink
      v-for="link in links"
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
</template>

<script lang="ts" setup>
import type { TNavigation } from '@/types';

interface Props {
  links: TNavigation;
}

defineProps<Props>();
</script>
