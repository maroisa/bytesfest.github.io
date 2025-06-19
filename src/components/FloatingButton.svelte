<script>
    import { onMount } from "svelte";

    let floatingBtn = null

    onMount(() => floatingBtn = document.getElementById("floating-btn"))

    window.addEventListener("scroll", () => {
        if (floatingBtn == null) return
        if (window.pageYOffset > 100) {
            floatingBtn.style.display = 'block';
        } else {
            floatingBtn.style.display = 'none';
        }
    })

    function scrollToTop(e){
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

</script>

<a id="floating-btn" class="rounded-full bg-sky-500 p-4 fixed right-0 bottom-0 m-10" onclick={scrollToTop} href="/#" aria-label="Scroll to top">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" class="h-4 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z">
        </path>
    </svg>
</a>