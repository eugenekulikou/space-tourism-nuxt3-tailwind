<template>
  <component
    :is="pageComponent"
    :page-data="data"
    :children-links="navigation"
  />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page-default',
});

const route = useRoute();
const { section, slug } = route.params;

const { usePageData, useNavigationData } = useApiData();

const data = await usePageData(`${section}/${slug}`);
const navigation = await useNavigationData(section as string);

const pageComponent = computed(() => {
  const name = useCapitalize(section as string);
  return `Page${name}`;
});
</script>
