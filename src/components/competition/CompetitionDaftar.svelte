<script>
    import { getContext } from "svelte";

    const daftarActive = getContext("daftarActive")
</script>

<div hidden={!daftarActive.get()} class="fixed w-screen h-screen left-0 top-0 z-5 bg-gray-500/20 backdrop-blur-md flex justify-center items-center">
    <div class="max-w-sm">
        <div class="bg-sky-100 p-4 rounded-t-lg text-neutral-700 flex flex-col">
            <button onclick={daftarActive.toggle} class="self-end hover:opacity-60 active:opacity-40">
                <img class="" src="/img/icons/icons8-close-24.png" alt="Close button">
            </button>
            <div class="h-20 relative flex justify-center">
                <img class="w-52 absolute -bottom-5" src="/img/Mascot Pose 2.png" alt="">
            </div>
            <div class="text-center">
                <h3 class="font-semibold text-3xl">Gaskeun!!</h3>
                <p>Yuk segera registrasi dan konfirmasi pembayaran kamu!</p>
            </div>
        </div>
        <div class="bg-sky-200 p-4 rounded-b-lg">
            <button class="w-full bg-neutral-700 shadow-md p-2 mb-2">Registrasi &gt;</button>
            <button class="w-full bg-sky-100 shadow-md text-neutral-700 p-2">Konfirmasi Pembayaran</button>
        </div>
    </div>
</div>