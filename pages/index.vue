<template>
  <PageHome v-bind="data" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'page-default',
});

const { usePageData } = useApiData();

const data = await usePageData('home');
</script>
