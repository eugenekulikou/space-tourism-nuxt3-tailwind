<template>
  <!-- todo: find a way to group classes -->
  <header
    class="justify-space-between fixed top-0 flex h-[6rem] w-full items-center
      justify-between px-8 lg:my-10 lg:px-12 lg:after:relative lg:after:z-40
      lg:after:order-1 lg:after:-mr-8 lg:after:block lg:after:h-[.16rem]
      lg:after:w-full lg:after:bg-light lg:after:bg-opacity-30 [&_>_nav]:order-2"
  >
    <div class="relative aspect-square min-w-12 lg:mx-0 lg:mr-16">
      <img src="@/assets/shared/logo.svg" alt="Space tourism logo" />
    </div>

    <NavigationMenu :nav-links="navLinks" />
  </header>
</template>

<script lang="ts" setup>
import type { ILink } from '@/types';

interface Props {
  navLinks: ILink[];
}

const props = defineProps<Props>();
</script>
