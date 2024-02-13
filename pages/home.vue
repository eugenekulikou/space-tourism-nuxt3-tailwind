<template>
  <section class="h-full">
    <div
      class="bg-bottom-center bg-bottom-center bg-bottom-left grid h-full place-items-center
        bg-[url('@/assets/home/background-home-mobile.jpg')] bg-cover px-4 text-center
        sm:bg-[url('@/assets/home/background-home-tablet.jpg')]
        lg:grid-cols-[minmax(2rem,_1fr)_repeat(2,_minmax(0,_40rem))_minmax(2rem,_1fr)]
        lg:items-end lg:gap-[var(--container-gap,_2rem)]
        lg:bg-[url('@/assets/home/background-home-desktop.jpg')] lg:pb-[max(6rem,_20vh)]
        lg:text-left [&_>_*]:max-w-[50ch] lg:[&_>_:first-child]:col-start-2
        lg:[&_>_:first-child]:col-end-2 lg:[&_>_:last-child]:col-start-3
        lg:[&_>_:last-child]:col-end-3"
    >
      <div>
        <h1 class="font-sans-cond text-2xl uppercase tracking-widest">
          So, you want to travel to<br />
          <span class="font-serif text-8xl uppercase leading-tight lg:text-9xl"
            >Space</span
          >
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div class="">
        <UiBaseCallToActionButton to="#" />
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  title: 'My page title',
  layout: 'page-default',
});
</script>
