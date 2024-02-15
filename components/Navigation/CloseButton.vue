<template>
  <button
    class="m-8 aspect-square w-8 self-end bg-[url(@/assets/shared/icon-close.svg)] bg-cover
      md:hidden"
    @click="emit('click')"
  >
    <span class="sr-only" :aria-expanded="isOpened">Close Menu</span>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  isOpened: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['click']);
</script>
