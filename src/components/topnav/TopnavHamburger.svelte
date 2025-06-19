<script>
    import menu from "daisyui/components/menu";

    let menuActive = $state(false)
</script>

<button onclick={() => menuActive = !menuActive} class="z-10 p-2 lg:hidden active:bg-sky-800 transition-all duration-50" aria-label="open hamburger menu">
    <div class="m-auto flex h-6 w-6 flex-col justify-around md:h-7 md:w-7">
    <p class="block h-[2px] w-full bg-white transition-all duration-300 hamburger-line-1"></p>
    <p class="block h-[2px] w-full bg-white transition-all duration-300 hamburger-line-2"></p>
    <p class="block h-[2px] w-full bg-white transition-all duration-300 hamburger-line-3"></p>
    </div>
</button>
<div class="absolute top-20 left-0 w-full z-5" hidden={!menuActive}>
    <div class="m-4 p-4 border border-white/40 bg-black/20 backdrop-blur-md rounded-md flex flex-col text-center gap-4">
        <a onclick={() => menuActive = false} href="/#">Home</a>
        <a onclick={() => menuActive = false} href="/#about">About</a>
        <a onclick={() => menuActive = false} href="/#nova">Nova</a>
        <a onclick={() => menuActive = false} href="/#competition">Competition</a>
        <a onclick={() => menuActive = false} href="/#">Submission</a>
    </div>
</div>