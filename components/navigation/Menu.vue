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
      <li v-for="(link, index) in navLinks">
        <NavigationLink
          :to="link.to"
          :index="'0' + index"
          :label="link.label"
          :aria-current="link.to.includes($route.params.section as string) ? 'page' : false"
        />
      </li>
    </ul>
  </nav>

  <nav role="navigation" class="hidden bg-white bg-opacity-15 backdrop-blur-xl md:block md:-mr-8 lg:-mr-12 lg:px-8">
    <div class="underline-indicators flex space-x-8 md:mx-10 lg:mx-20">
        <NavigationLink
          v-for="(link, index) in navLinks" 
          class="px-4 py-8 nav-menu-link"
          :to="link.to"
          :index="'0' + index"
          :label="link.label"
          :aria-current="link.to.includes($route.params.section as string) ? 'page' : false"
        />
    </div>
  </nav>

</template>

<script lang="ts" setup>
import type { ILink } from '@/types';
import { onClickOutside } from '@vueuse/core';

interface Props {
  navLinks: ILink[];
}

const props = defineProps<Props>();
const { navLinks } = props;

const sidebarNavRef = ref(null);
const sidebarIsOpen = ref(false);
const toggleSidebar = () => (sidebarIsOpen.value = !sidebarIsOpen.value);

onClickOutside(sidebarNavRef, (event) => (sidebarIsOpen.value = false));
</script>
