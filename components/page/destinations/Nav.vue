<template>
  <div
    class="underline-indicators flex h-10 justify-center space-x-8 lg:justify-start"
  >
    <NuxtLink
      v-for="link in links"
      class="pb-0 font-sans-cond uppercase tracking-wider text-white"
      :aria-selected="link.to === $route.path"
      :to="link.to"
      tag="button"
    >
      {{ link.label }}
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
