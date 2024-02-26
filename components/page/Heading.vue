<template>
  <h1
    class="sm:text-3xl text-nowrap text-start font-sans-cond text-base uppercase
      tracking-widest text-white"
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
