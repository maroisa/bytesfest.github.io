<script>
    import TopnavHamburger from "./TopnavHamburger.svelte";
import TopnavItem from "./TopnavItem.svelte";

</script>
<nav class="navigation absolute left-0 h-20 w-full text-white sm:h-24">
  <div class="mx-auto h-full px-5 lg:w-[1200px] lg:px-0">
    <div class="w-ful flex h-full justify-between">
      <div class="flex h-full items-center gap-x-1 lg:basis-3/12">
        <img src="/img/logo-mini.png" alt="bytesfest logo" class="h-14 w-auto md:h-16">
        <h1 class="text-sm font-semibold tracking-wider text-neutal-0 sm:text-lg lg:text-xl">
          Bytes<span class="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">fest</span>
          <span class="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">2025</span>
        </h1>
      </div>
      <div class="flex h-full items-center lg:static lg:w-auto lg:basis-5/12">
        <!-- hamburger-menu -->
        <TopnavHamburger />
        <!-- menu -->
        <div class="absolute top-20 left-0 z-5 w-full justify-center shadow-2xl transition duration-300 lg:static lg:block lg:h-full lg:w-full lg:opacity-100 lg:shadow-none hidden opacity-0">
          <ul class="flex h-64 w-10/12 flex-col items-center justify-evenly border-[.5px] border-neutral-300 bg-neutral-800 text-sm font-medium tracking-wider lg:h-full lg:flex-row lg:items-center lg:justify-around lg:border-none lg:bg-transparent lg:backdrop-blur-none">
            <li class="">
              <a href="/#" class="decoration-primary-50 decoration-2 underline-offset-4 hover:underline">Home</a>
            </li>
            <TopnavItem title="About" href="/#about">
              Mau tau apa itu bytesfest?
            </TopnavItem>
            <TopnavItem title="NOVA" href="/#nova">
              Mascot kami tidak dibuat sembarangan lohh. Ada filosofi dan maknanya.
            </TopnavItem>
            <TopnavItem title="Competition" href="/#competition">
              Apa aja sih lombanya?
            </TopnavItem>
            <TopnavItem title="Submission">
              Pengumpulan karya lomba disini
            </TopnavItem>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>