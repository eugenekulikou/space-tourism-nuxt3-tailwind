<template>
  <button
    aria-controls="navigation"
    :aria-expanded="isOpened"
    class="aspect-square w-8 bg-[url(@/assets/shared/icon-hamburger.svg)] bg-cover
      md:hidden"
    :class="{ hidden: isOpened }"
    @click="emit('click')"
  >
    <span class="sr-only" :aria-expanded="isOpened">Menu</span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  isOpened: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['click']);
</script>
