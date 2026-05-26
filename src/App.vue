<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import Lenis from 'lenis'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const router = useRouter()
let lenisInstance: Lenis | null = null

onMounted(() => {
  // Initialize Lenis smooth scroll
  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease out expo
    smoothWheel: true,
  })

  // Frame loop
  function raf(time: number) {
    lenisInstance?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Listen to route changes to reset scroll position
  router.afterEach(() => {
    lenisInstance?.scrollTo(0, { immediate: true })
  })
})

onUnmounted(() => {
  lenisInstance?.destroy()
  lenisInstance = null
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-brand-cream/10">
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Content Area with Page Transitions -->
    <main class="flex-grow">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style>
/* Base/Global transition animation classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
