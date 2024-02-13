<template>
  <section class="h-full">
    <div
      class="grid place-items-center text-center px-4 h-full 
      [&_>_*]:max-w-[50ch]
      bg-[url('@/assets/home/background-home-mobile.jpg')] bg-cover bg-bottom-center 
      sm:bg-[url('@/assets/home/background-home-tablet.jpg')] bg-bottom-center
      lg:bg-[url('@/assets/home/background-home-desktop.jpg')] bg-bottom-left
      lg:text-left lg:grid-cols-[minmax(2rem,_1fr)_repeat(2,_minmax(0,_40rem))_minmax(2rem,_1fr)]
      lg:[&_>_:first-child]:col-start-2 lg:[&_>_:first-child]:col-end-2 lg:[&_>_:last-child]:col-start-3 lg:[&_>_:last-child]:col-end-3
      lg:gap-[var(--container-gap,_2rem)]
      lg:items-end lg:pb-[max(6rem,_20vh)]"
     >
      <div>
        <h1 class="text-2xl tracking-widest font-sans-cond uppercase">
          So, you want to travel to<br />
          <span class="text-8xl lg:text-9xl font-serif uppercase leading-tight"
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
  title: "My page title",
  layout: "page-default",
});
</script>
