<script>
  import CompetitionItem from "./CompetitionItem.svelte";
</script>

<div class="bg-neutral-950 pb-20">
  <div class="pt-36 text-center">
    <h1 class="mb-3 text-center text-xl font-semibold tracking-wide text-white sm:text-2xl md:mb-4 md:text-3xl lg:text-4xl">
      Bytes<span class="bg-gradient-to-r from-sky-500 to-cyan-300 bg-clip-text text-transparent">fest</span>
      Competition
      <span class="bg-gradient-to-r from-sky-500 to-cyan-300 bg-clip-text text-transparent">2025</span>
    </h1>
    <div class="mb-6 flex w-full justify-center md:mb-8">
      <div class="h-[3px] w-28 bg-sky-500"></div>
    </div>
    <p class="text-center text-xs text-sky-100">
      - GESER UNTUK INFO LOMBA LAINNYA -
    </p>
  </div>
  <div class="flex justify-center">
    <div class="carousel carousel-center rounded-box p-4 lg:max-w-2/3 lg:p-20 space-x-4">
      <CompetitionItem title="Desain Web" guidebook={""}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, optio ut illum aliquid id aliquam pariatur, dolorum libero explicabo commodi iste quos ipsam ullam quibusdam sunt nemo quae? Praesentium, voluptatum.
      </CompetitionItem>
      <CompetitionItem title="Esai" guidebook={""}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, optio ut illum aliquid id aliquam pariatur, dolorum libero explicabo commodi iste quos ipsam ullam quibusdam sunt nemo quae? Praesentium, voluptatum.
      </CompetitionItem>
      <CompetitionItem title="Esai" guidebook={""}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, optio ut illum aliquid id aliquam pariatur, dolorum libero explicabo commodi iste quos ipsam ullam quibusdam sunt nemo quae? Praesentium, voluptatum.
      </CompetitionItem>
    </div>
  </div>
</div>