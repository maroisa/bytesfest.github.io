<script setup lang="ts">
interface Props {
  type?: 'hero' | 'card' | 'text' | 'button' | 'timeline' | 'list'
  count?: number
  width?: string
  height?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  count: 1,
  width: '100%',
  height: '1rem'
})
</script>

<template>
  <div class="skeleton-container">
    <!-- Hero Skeleton -->
    <div v-if="type === 'hero'" class="flex flex-col gap-8 items-center max-w-4xl">
      <!-- Title skeleton - two lines to match BYTESFEST and 2026 -->
      <div class="flex flex-col gap-2 items-center w-full">
        <div class="skeleton h-16 sm:h-20 w-3/4 sm:w-2/3 rounded-lg"></div>
        <div class="skeleton h-12 sm:h-16 w-1/3 sm:w-1/4 rounded-lg"></div>
      </div>
      <!-- Description skeleton -->
      <div class="skeleton h-5 w-full max-w-2xl rounded"></div>
      <div class="skeleton h-5 w-2/3 max-w-xl rounded"></div>
      <!-- Countdown skeleton -->
      <div class="skeleton h-16 w-64 sm:w-80 rounded-xl mt-2"></div>
      <!-- Button skeletons -->
      <div class="flex gap-3 sm:gap-4 mt-2">
        <div class="skeleton h-11 w-36 sm:w-40 rounded-full"></div>
        <div class="skeleton h-11 w-40 sm:w-48 rounded-full"></div>
      </div>
    </div>

    <!-- Card Skeleton -->
    <div v-else-if="type === 'card'" class="flex flex-col gap-4 p-8 rounded-[32px] border border-brand-blue/10 bg-white">
      <div class="flex items-start justify-between gap-4">
        <div class="skeleton w-14 h-14 rounded-2xl"></div>
        <div class="skeleton w-10 h-10 rounded-full"></div>
      </div>
      <div class="mt-6 flex flex-col gap-3">
        <div class="skeleton h-6 w-3/4 rounded"></div>
        <div class="skeleton h-3 w-1/2 rounded"></div>
        <div class="skeleton h-4 w-full rounded"></div>
        <div class="skeleton h-4 w-5/6 rounded"></div>
      </div>
      <div class="mt-10 flex gap-3">
        <div class="skeleton h-12 w-32 rounded-full"></div>
        <div class="skeleton h-12 w-32 rounded-full"></div>
      </div>
    </div>

    <!-- Text Skeleton -->
    <div v-else-if="type === 'text'" class="flex flex-col gap-3">
      <div v-for="i in count" :key="i" class="skeleton rounded" :style="{ width: i === count ? '70%' : '100%', height }"></div>
    </div>

    <!-- Button Skeleton -->
    <div v-else-if="type === 'button'" class="skeleton h-12 w-40 rounded-full"></div>

    <!-- Timeline Skeleton -->
    <div v-else-if="type === 'timeline'" class="flex flex-col gap-4">
      <div v-for="i in count" :key="i" class="flex items-start gap-4">
        <div class="skeleton w-20 h-4 rounded"></div>
        <div class="skeleton w-5 h-5 rounded-full shrink-0"></div>
        <div class="flex-1 p-5 rounded-2xl border border-brand-blue/10 bg-white">
          <div class="skeleton h-5 w-3/4 rounded mb-2"></div>
          <div class="skeleton h-4 w-full rounded"></div>
        </div>
      </div>
    </div>

    <!-- List Skeleton -->
    <div v-else-if="type === 'list'" class="flex flex-col gap-4">
      <div v-for="i in count" :key="i" class="p-6 rounded-2xl border border-brand-blue/10 bg-white">
        <div class="skeleton h-5 w-3/4 rounded mb-3"></div>
        <div class="skeleton h-4 w-full rounded"></div>
        <div class="skeleton h-4 w-5/6 rounded mt-2"></div>
      </div>
    </div>

    <!-- Default Skeleton -->
    <div v-else class="skeleton rounded" :style="{ width, height }"></div>
  </div>
</template>

<style scoped>
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
