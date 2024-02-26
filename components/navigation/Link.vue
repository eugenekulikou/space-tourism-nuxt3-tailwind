<template>
  <NuxtLink
    tag="a"
    :to="to"
    :aria-current="ariaCurrent"
    class="font-sans-cond uppercase tracking-wider text-white"
    ><span
      aria-hidden="true"
      class="mr-2 inline font-bold md:hidden lg:inline"
      >{{ index }}</span
    >{{ label }}</NuxtLink
  >
</template>

<script setup>
/* todo: add props interface */
const props = defineProps(['to', 'label', 'index', 'ariaCurrent']);
</script>
