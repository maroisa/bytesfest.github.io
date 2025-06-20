<script>
    import { getContext } from "svelte";

  let { title, image, children } = $props()

  const daftarActive = getContext("daftarActive")

</script>

<div class="carousel-item w-full lg:aspect-21/9">
  <div class="shadow-sm relative">
    <div class="relative w-full h-1/3 lg:h-full text-center">
      <img class="object-cover w-full h-full" src={image} alt="Esai">
      <h3 class="absolute transform-[translateY(-50%)] top-1/2 lg:transform-none lg:top-1/8 w-full font-semibold text-4xl text-shadow-lg/90">{title}</h3>
    </div>
    <div class="lg:absolute p-4 top-10 left-0 w-full lg:h-full content-center bg-neutral-800 lg:bg-transparent">
      <p class="text-shadow-lg/90 max-w-lg m-auto text-xs lg:text-base">{@render children?.()}</p>
    </div>
    <div class="bg-neutral-700 h-20 p-2 flex justify-center items-center gap-8 w-full">
      <button onclick={() => daftarActive.toggle()} class="group relative box-border overflow-hidden rounded-sm bg-white  px-8 py-2 font-semibold text-sky-900 transition-all duration-300 md:px-10 md:py-3 cursor-pointer">
        <p class="relative z-5 transition-all duration-300 group-hover:text-white">
          Daftar
        </p>
        <span class="absolute top-0 left-0 block h-full w-0 bg-sky-500 shadow-[inset_0_0_0_1px_#fff] transition-all duration-300 group-hover:w-full"></span>
      </button>
      <a href="/#" onclick={() => {}} class="group decoration-sky-500 decoration-2 underline-offset-2 hover:underline">Guidebook
        <span class="inline-block transition-transform duration-200 group-hover:translate-x-2">&gt;</span>
      </a>
    </div>
  </div>
</div>