<template>
  <PageHome v-bind="data" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

definePageMeta({
  layout: 'page-default',
});

const { matched, ...route } = useRoute();
const { name } = route;

const { usePageData, useNavigationData } = useApiData();

const data = await usePageData(name as string);
const { data: navigation } = await useNavigationData();
</script>
