<template>
  <!-- content focus anchor -->
  <a
    href="#main"
    class="absolute z-50 -translate-y-full bg-white p-2 text-dark transition-transform
      duration-200 ease-in focus:translate-y-0"
    >Skip to content</a
  >

  <LayoutHeader :nav-links="navLinks" class="z-20" />

  <div class="h-dvh">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const { useNavigationData } = useApiData();

const navLinks = await useNavigationData('home');
</script>
