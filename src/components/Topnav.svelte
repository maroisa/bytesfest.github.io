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
        <button id="hamburger" class="relative z-10 p-2 lg:hidden bg-primary-800" aria-label="open hamburger menu">
          <div id="hamburger-menu" class="m-auto flex h-6 w-6 flex-col justify-around md:h-7 md:w-7">
            <p class="block h-[2px] w-full bg-white transition-all duration-300 hamburger-line-1"></p>
            <p class="block h-[2px] w-full bg-white transition-all duration-300 hamburger-line-2"></p>
            <p class="block h-[2px] w-full bg-white transition-all duration-300 hamburger-line-3"></p>
          </div>
        </button>
        <!-- menu -->
        <div class="absolute top-20 left-0 z-5 w-full justify-center shadow-2xl transition duration-300 lg:static lg:block lg:h-full lg:w-full lg:opacity-100 lg:shadow-none hidden opacity-0">
          <ul class="flex h-64 w-10/12 flex-col items-center justify-evenly border-[.5px] border-neutral-300 bg-neutral-800 text-sm font-medium tracking-wider lg:h-full lg:flex-row lg:items-center lg:justify-around lg:border-none lg:bg-transparent lg:backdrop-blur-none">
            <li class="">
              <a href="#home" class="decoration-primary-50 decoration-2 underline-offset-4 hover:underline">Home</a>
            </li>
            <li class="group relative">
              <a href="#about" class="decoration-primary-50 decoration-2 underline-offset-4 hover:underline">About</a>
              <span class="absolute top-8 left-0 z-5 hidden h-auto w-36 rounded-sm bg-cyan-100 px-3 py-2 text-xs text-neutral-900 group-hover:block">
                Mau tau apa itu bytesfest?
              </span>
            </li>
            <li class="group relative">
              <a href="#frosty" class="decoration-primary-50 decoration-2 underline-offset-4 hover:underline">NOVA</a>
              <span class="absolute top-8 left-0 z-5 hidden h-auto w-44 rounded-sm bg-cyan-100 px-3 py-2 text-xs text-neutral-900 group-hover:block">
                Mascot kami tidak dibuat sembarangan lohh. 
                Ada filosofi dan maknanya.
              </span>
            </li>
            <li class="group relative">
              <a href="#competition" class="decoration-primary-50 decoration-2 underline-offset-4 hover:underline">Competition</a>
              <span class="absolute top-8 left-0 z-5 hidden h-auto w-36 rounded-sm bg-cyan-100 px-3 py-2 text-xs text-neutral-900 group-hover:block">
                Apa aja sih lombanya?
              </span>
            </li>
            <li class="group relative">
              <button onclick={() => {}} class="decoration-primary-50 decoration-2 underline-offset-4 hover:underline">
                Submission
              </button>
              <span class="absolute top-8 left-0 z-5 hidden h-auto w-36 rounded-sm bg-cyan-100 px-3 py-2 text-xs text-neutral-900 group-hover:block">
                Pengumpulan karya lomba disini!
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>