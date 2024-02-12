<template>
  <div class="container mx-auto">
    <h1 class="text-4xl uppercase">Design system</h1>

    <section id="colors" class="my-16 mx-0">
      <h2 class="uppercase text-2xl font-sans-cond tracking-widest">
        <span class="opacity-25 mr-2 font-semibold">01</span> colors
      </h2>
      <div class="flex space-x-2">
        <div class="flex-grow">
          <div
            class="bg-dark text-white font-serif font-medium pt-12 px-4 pb-4 border border-solid border-white text-2xl"
          >
            #0B0D17
          </div>
          <p><span class="text-light">RGB</span> 11, 13, 23</p>
          <p><span class="text-light">HSL</span> 230°, 35%, 7%</p>
        </div>
        <div class="flex-grow">
          <div
            class="bg-light text-dark font-serif font-medium pt-12 px-4 pb-4 border border-solid border-white text-2xl"
          >
            #D0D6F9
          </div>
          <p><span class="text-light">RGB</span> 208, 214, 249</p>
          <p><span class="text-light">HSL</span> 231°, 77%, 90%</p>
        </div>
        <div class="flex-grow">
          <div
            class="bg-dark text-white font-serif font-medium pt-12 px-4 pb-4 border border-solid border-white text-2xl"
          >
            #FFFFFF
          </div>
          <p><span class="text-light">RGB</span> 255, 255, 255</p>
          <p><span class="text-light">HSL</span> 0°, 0%, 100%</p>
        </div>
      </div>
    </section>

    <section id="subheadings" class="my-16 mx-0">
      <div
        class="flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0"
      >
        <p
          class="text-2xl uppercase text-white tracking-widest font-sans-cond text-nowrap"
        >
          <span class="opacity-25 font-semibold mr-6">01</span>pick your
          destination
        </p>
        <p
          class="text-2xl uppercase text-white tracking-widest font-sans-cond text-nowrap"
        >
          <span class="opacity-25 font-semibold mr-6">02</span>meet your crew
        </p>
        <p
          class="text-2xl uppercase text-white tracking-widest font-sans-cond text-nowrap"
        >
          <span class="opacity-25 font-semibold mr-6">03</span>space launch 101
        </p>
      </div>
    </section>

    <section id="typography" class="my-16 mx-0">
      <h2 class="uppercase text-2xl font-sans-cond tracking-widest mb-12">
        <span class="opacity-25 font-semibold mr-2">02 </span>Typography
      </h2>
      <div class="flex">
        <div class="basis-full space-y-4">
          <div>
            <p class="text-xl font-sans-normal">
              Heading 1 - Bellefair Regular - 150px
            </p>
            <p class="text-9xl font-serif uppercase leading-tight">Earth</p>
          </div>
          <div>
            <p class="text-xl font-sans-normal">
              Heading 2 - Bellefair Regular - 100px
            </p>
            <p class="text-8xl font-serif uppercase">Venus</p>
          </div>
          <div>
            <p class="text-xl font-sans-normal">
              Heading 3 - Bellefair Regular - 56px
            </p>
            <p class="text-6xl uppercase font-serif">Jupiter & Saturn</p>
          </div>
          <div>
            <p class="text-xl font-sans-normal">
              Heading 4 - Bellefair Regular - 32px
            </p>
            <p class="text-4xl uppercase font-serif">
              Uranus, Neptune, & Pluto
            </p>
          </div>
          <div>
            <p class="text-xl font-sans-normal">
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </p>
            <p class="text-2xl tracking-widest font-sans-cond uppercase">
              So, you want to travel to space
            </p>
          </div>
        </div>

        <div class="basis-full flex flex-col space-y-12">
          <div>
            <p class="text-xl font-sans-normal">
              Subheading 1 - Bellefair Regular - 28px
            </p>
            <p class="text-2xl uppercase font-serif">384,400 km</p>
          </div>
          <div>
            <p class="text-xl font-sans-normal">
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </p>
            <p class="text-sm tracking-wide font-sans-cond">Avg. Distance</p>
          </div>
          <div>
            <p class="text-xl font-sans-normal mb-4">
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </p>
            <p class="text-base tracking-wider uppercase font-sans-cond">
              Europa
            </p>
          </div>
          <div>
            <p class="text-xl mb-4">Body Text</p>
            <p class="text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
              nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
              aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="interactive-elements" class="my-16 mx-0">
      <h2 class="uppercase text-2xl font-sans-cond tracking-widest">
        <span class="opacity-25 font-semibold mr-2">03 </span>Interactive
        Elements
      </h2>

      <div id="explore-button" class="m-28">
        <a href="#explore-button" class="cta-button">Explore</a>
      </div>

      <div id="tabs" class=""></div>

      <div id="dots" class=""></div>

      <div id="numbers" class=""></div>
    </section>
  </div>
</template>
