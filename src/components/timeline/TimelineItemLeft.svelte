<script>
    let {date, title} = $props()
</script>
<li>
    <hr class="bg-sky-100" />
    <p class="timeline-end bg-sky-400 p-3 m-4 lg:m-10 text-black border-l-4 border-l-sky-600">
        {@html date}
    </p>
    <span class="timeline-middle bg-sky-300 w-4 h-4 rounded-full"></span>
    <p class="timeline-start mx-4 lg:mx-10">
        {@html title}
    </p>
    <hr class="bg-sky-100" />
</li>
