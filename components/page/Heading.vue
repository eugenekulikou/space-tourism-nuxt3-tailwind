<template>
  <h1
    class="text-nowrap text-start font-sans-cond text-2xl uppercase tracking-widest
      text-white"
  >
    <span class="text mr-4 font-semibold opacity-25">{{ prefix }}</span>
    {{ pageHeading }}
  </h1>
</template>

<script lang="ts" setup>
interface Props {
  heading: string;
}

const props = defineProps<Props>();

const { usePrefixedHeading } = usePageHeading();
const [prefix, pageHeading] = usePrefixedHeading(props.heading);
</script>
