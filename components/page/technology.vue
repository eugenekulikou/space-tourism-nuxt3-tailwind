<template>
  <div class="flex flex-row">
    <div class="w-1/2">
      <pre>{{ pageData }}</pre>
    </div>
    <div class="w-1/2">
      <pre>{{ childrenLinks }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Prop } from 'vue';

interface Props {
  pageData: Record<string, any>;
  childrenLinks: Record<string, any>;
}

const props = defineProps<Props>();
</script>
