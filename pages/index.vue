<template>
  <PageHome :pageData="pageData" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'page-default',
});

const ROOT_PAGE_NAME = 'home';
const { usePageData } = useApiData();

/* todo: fetch page as a single one */
const data = await usePageData(ROOT_PAGE_NAME);
const pageData = unref(data)[0];
const { title, description, keywords } = pageData;

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>
