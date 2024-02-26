<template>
  <div class="container mx-auto">
    <h1 class="text-4xl uppercase">Design system</h1>

    <section id="colors" class="mx-0 my-16">
      <h2 class="text-3xl font-sans-cond uppercase tracking-widest">
        <span class="mr-2 font-semibold opacity-25">01</span> colors
      </h2>
      <div class="flex space-x-2">
        <div class="flex-grow">
          <div
            class="text-3xl border border-solid border-white bg-dark px-4 pb-4 pt-12 font-serif
              font-medium text-white"
          >
            #0B0D17
          </div>
          <p><span class="text-light">RGB</span> 11, 13, 23</p>
          <p><span class="text-light">HSL</span> 230°, 35%, 7%</p>
        </div>
        <div class="flex-grow">
          <div
            class="text-3xl border border-solid border-white bg-light px-4 pb-4 pt-12 font-serif
              font-medium text-dark"
          >
            #D0D6F9
          </div>
          <p><span class="text-light">RGB</span> 208, 214, 249</p>
          <p><span class="text-light">HSL</span> 231°, 77%, 90%</p>
        </div>
        <div class="flex-grow">
          <div
            class="text-3xl border border-solid border-white bg-dark px-4 pb-4 pt-12 font-serif
              font-medium text-white"
          >
            #FFFFFF
          </div>
          <p><span class="text-light">RGB</span> 255, 255, 255</p>
          <p><span class="text-light">HSL</span> 0°, 0%, 100%</p>
        </div>
      </div>
    </section>

    <section id="subheadings" class="mx-0 my-16">
      <div
        class="flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0"
      >
        <p
          class="text-3xl text-nowrap font-sans-cond uppercase tracking-widest text-white"
        >
          <span class="mr-6 font-semibold opacity-25">01</span>pick your
          destination
        </p>
        <p
          class="text-3xl text-nowrap font-sans-cond uppercase tracking-widest text-white"
        >
          <span class="mr-6 font-semibold opacity-25">02</span>meet your crew
        </p>
        <p
          class="text-3xl text-nowrap font-sans-cond uppercase tracking-widest text-white"
        >
          <span class="mr-6 font-semibold opacity-25">03</span>space launch 101
        </p>
      </div>
    </section>

    <section id="typography" class="mx-0 my-16">
      <h2 class="text-3xl mb-12 font-sans-cond uppercase tracking-widest">
        <span class="mr-2 font-semibold opacity-25">02 </span>Typography
      </h2>
      <div class="flex">
        <div class="basis-full space-y-4">
          <div>
            <p class="font-sans-normal text-xl">
              Heading 1 - Bellefair Regular - 150px
            </p>
            <p class="font-serif text-9xl uppercase leading-tight">Earth</p>
          </div>
          <div>
            <p class="font-sans-normal text-xl">
              Heading 2 - Bellefair Regular - 100px
            </p>
            <p class="font-serif text-8xl uppercase">Venus</p>
          </div>
          <div>
            <p class="font-sans-normal text-xl">
              Heading 3 - Bellefair Regular - 56px
            </p>
            <p class="font-serif text-6xl uppercase">Jupiter & Saturn</p>
          </div>
          <div>
            <p class="font-sans-normal text-xl">
              Heading 4 - Bellefair Regular - 32px
            </p>
            <p class="font-serif text-4xl uppercase">
              Uranus, Neptune, & Pluto
            </p>
          </div>
          <div>
            <p class="font-sans-normal text-xl">
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </p>
            <p class="text-3xl font-sans-cond uppercase tracking-widest">
              So, you want to travel to space
            </p>
          </div>
        </div>

        <div class="flex basis-full flex-col space-y-12">
          <div>
            <p class="font-sans-normal text-xl">
              Subheading 1 - Bellefair Regular - 28px
            </p>
            <p class="text-3xl font-serif uppercase">384,400 km</p>
          </div>
          <div>
            <p class="font-sans-normal text-xl">
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </p>
            <p class="font-sans-cond text-sm uppercase tracking-wide">
              Avg. Distance
            </p>
          </div>
          <div>
            <p class="mb-4 font-sans-normal text-xl">
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </p>
            <p class="font-sans-cond text-base uppercase tracking-wider">
              Europa
            </p>
          </div>
          <div>
            <p class="mb-4 text-xl">Body Text</p>
            <p class="leading-8">
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

    <section id="interactive-elements" class="mx-0 my-16">
      <h2 class="text-3xl font-sans-cond uppercase tracking-widest">
        <span class="mr-2 font-semibold opacity-25">03 </span>Interactive
        Elements
      </h2>

      <div
        id="tabs"
        class="my-12 flex w-full justify-center bg-white bg-opacity-5"
      >
        <nav>
          <ul class="underline-indicators flex space-x-40">
            <li class="py-8">
              <a href="#" class="uppercase tracking-wider text-white"
                ><span class="mr-2 font-bold">00</span>Active</a
              >
            </li>
            <li class="py-8">
              <a href="#" class="uppercase tracking-wider text-white"
                ><span class="mr-2 font-bold">01</span>Hovered</a
              >
            </li>
            <li class="py-8">
              <a href="#" class="uppercase tracking-wider text-white"
                ><span class="mr-2 font-bold">02</span>Idle</a
              >
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex">
        <div class="flex basis-full flex-col space-y-12">
          <div id="explore-button" class="m-28">
            <a href="#explore-button" class="cta-button">Explore</a>
          </div>
        </div>

        <div class="flex basis-full flex-col space-y-12">
          <div class="underline-indicators flex justify-center space-x-4">
            <button
              aria-selected="true"
              class="tracking-light py-[0.5em] font-sans-cond uppercase text-white"
            >
              Moon
            </button>
            <button
              aria-selected="false"
              class="tracking-light py-[0.5em] font-sans-cond uppercase text-white"
            >
              Mars
            </button>
            <button
              aria-selected="false"
              class="tracking-light py-[0.5em] font-sans-cond uppercase text-white"
            >
              Europe
            </button>
          </div>

          <div id="dots" class="flex justify-center space-x-4">
            <button
              class="duration-400 aspect-square h-4 w-4 rounded-full border-0 bg-white bg-opacity-25
                transition-all ease-in-out hover:bg-opacity-50 aria-selected:bg-opacity-100"
              aria-selected="true"
            >
              <span class="sr-only">slide title</span></button
            ><button
              class="duration-400 aspect-square h-4 w-4 rounded-full border-0 bg-white bg-opacity-25
                transition-all ease-in-out hover:bg-opacity-50 aria-selected:bg-opacity-100"
              aria-selected="false"
            >
              <span class="sr-only">slide title</span></button
            ><button
              class="duration-400 aspect-square h-4 w-4 rounded-full border-0 bg-white bg-opacity-25
                transition-all ease-in-out hover:bg-opacity-50 aria-selected:bg-opacity-100"
              aria-selected="false"
            >
              <span class="sr-only">slide title</span>
            </button>
          </div>

          <div class="flex justify-center">
            <div id="numbers" class="space-y-6">
              <button
                aria-selected="true"
                class="grid aspect-square w-20 place-content-center rounded-full border border-solid
                  border-white bg-dark font-serif text-4xl text-white opacity-25
                  transition-opacity duration-300 ease-in-out hover:opacity-50
                  aria-selected:bg-white aria-selected:text-dark aria-selected:opacity-100"
              >
                1</button
              ><button
                aria-selected="false"
                class="grid aspect-square w-20 place-content-center rounded-full border border-solid
                  border-white bg-dark font-serif text-4xl text-white opacity-25
                  transition-opacity duration-300 ease-in-out hover:opacity-50
                  aria-selected:bg-white aria-selected:text-dark aria-selected:opacity-100"
              >
                2</button
              ><button
                aria-selected="false"
                class="grid aspect-square w-20 place-content-center rounded-full border border-solid
                  border-white bg-dark font-serif text-4xl text-white opacity-25
                  transition-opacity duration-300 ease-in-out hover:opacity-50
                  aria-selected:bg-white aria-selected:text-dark aria-selected:opacity-100"
              >
                3
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
