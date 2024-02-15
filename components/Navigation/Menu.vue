<template>
  <NavigationBurgerButton :isOpened="sidebarIsOpen" @click="toggleSidebar" />

  <nav
    ref="sidebarNavRef"
    role="navigation"
    :aria-hidden="!sidebarIsOpen"
    :class="[
      sidebarIsOpen ? 'translate-x-0' : 'translate-x-full', 
      'transition-transform duration-300 ease-in-out',
      'fixed right-0 top-0 z-20 flex h-full min-w-[16rem] flex-col bg-dark bg-opacity-50 backdrop-blur-xl md:hidden'
    ]"

  >
    <NavigationCloseButton :isOpened="sidebarIsOpen" @click="toggleSidebar" />

    <ul class="flex flex-col space-y-8 p-8">
      <li v-for="(link, index) in links">
        <NavigationLink
          :to="link.to"
          :index="'0' + index"
          :label="link.label"
        />
      </li>
    </ul>
  </nav>
    <!-- end of mobile nav-->

    <nav role="navigation" class="hidden bg-white bg-opacity-15 backdrop-blur-xl md:block md:-mr-8 lg:-mr-12">
    <ul class="underline-indicators flex space-x-8 md:mx-10 lg:mx-20">
      <li v-for="(link, index) in links" class="px-4 py-8">
        <NavigationLink
          :to="link.to"
          :index="'0' + index"
          :label="link.label"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';

const sidebarNavRef = ref(null);
const sidebarIsOpen = ref(false);
const toggleSidebar = () => (sidebarIsOpen.value = !sidebarIsOpen.value);

onClickOutside(sidebarNavRef, (event) => (sidebarIsOpen.value = false));

// todo: load menu data from endpoint
const links = [
  { label: 'home', to: '#' },
  { label: 'destination', to: '#' },
  { label: 'crew', to: '#' },
  { label: 'technology', to: '#' },
];
</script>
