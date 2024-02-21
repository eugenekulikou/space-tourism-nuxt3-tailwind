<template>
  <NuxtLink
    tag="a"
    :to="to"
    class="relative z-10 grid aspect-square w-[17.125rem] place-items-center rounded-full
      border-0 bg-light px-0 py-[2em] font-serif text-xl uppercase text-dark ring-1
      ring-light after:absolute after:z-[-1] after:h-full after:w-full
      after:rounded-full after:bg-light after:bg-opacity-10 after:transition-all
      after:duration-500 after:ease-in-out hover:after:scale-[150%]
      hover:after:transform hover:after:opacity-100"
    >{{ label }}</NuxtLink
  >
</template>

<script lang="ts" setup>
import type { ILink } from '~/types';

interface Props {
  to: string;
  label: string;
}

const props = defineProps<Props>();
</script>
