<script>
    let {title, href = "/#", onclick = null, children} = $props()
</script>

<li class="group relative">
    <a {href} {onclick} class="decoration-primary-50 decoration-2 underline-offset-4 hover:underline">
        {title}
    </a>
    <span class="absolute top-8 left-0 z-5 hidden h-auto w-36 rounded-sm bg-cyan-100 px-3 py-2 text-xs text-neutral-900 group-hover:block">
        {@render children?.()}
    </span>
</li>
