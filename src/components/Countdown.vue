<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  targetDate: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  targetDate: '2026-10-01T00:00:00',
  title: ''
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
let timerInterval: ReturnType<typeof setInterval> | null = null

const calculateTime = () => {
  const target = new Date(props.targetDate).getTime()
  const now = new Date().getTime()
  const difference = target - now

  if (difference <= 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    if (timerInterval) clearInterval(timerInterval)
    return
  }

  days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((difference % (1000 * 60)) / 1000)
}

onMounted(() => {
  calculateTime()
  timerInterval = setInterval(calculateTime, 1000)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})

const padZero = (num: number): string => {
  return num.toString().padStart(2, '0')
}
</script>

<template>
  <div class="w-full max-w-lg mx-auto bg-brand-pale-teal/30 border border-brand-blue/20 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
    <!-- Decorative quadrant background circle -->
    <div class="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-brand-teal-light/20 blur-xl"></div>
    
    <span v-if="props.title" class="font-meiland text-brand-navy italic text-sm md:text-base mb-4 block font-medium">
      {{ props.title }}
    </span>
    
    <div class="flex items-center gap-4 sm:gap-6 text-brand-navy">
      <div class="flex flex-col items-center">
        <span class="font-rexlia text-3xl sm:text-4xl md:text-5xl text-brand-blue font-bold tracking-tight">
          {{ padZero(days) }}
        </span>
        <span class="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-brand-grey mt-2">HARI</span>
      </div>
      <span class="font-rexlia text-2xl sm:text-3xl text-brand-blue/50 mb-6">:</span>
      <div class="flex flex-col items-center">
        <span class="font-rexlia text-3xl sm:text-4xl md:text-5xl text-brand-blue font-bold tracking-tight">
          {{ padZero(hours) }}
        </span>
        <span class="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-brand-grey mt-2">JAM</span>
      </div>
      <span class="font-rexlia text-2xl sm:text-3xl text-brand-blue/50 mb-6">:</span>
      <div class="flex flex-col items-center">
        <span class="font-rexlia text-3xl sm:text-4xl md:text-5xl text-brand-blue font-bold tracking-tight">
          {{ padZero(minutes) }}
        </span>
        <span class="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-brand-grey mt-2">MENIT</span>
      </div>
      <span class="font-rexlia text-2xl sm:text-3xl text-brand-blue/50 mb-6">:</span>
      <div class="flex flex-col items-center">
        <span class="font-rexlia text-3xl sm:text-4xl md:text-5xl text-brand-blue font-bold tracking-tight">
          {{ padZero(seconds) }}
        </span>
        <span class="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-brand-grey mt-2">DETIK</span>
      </div>
    </div>
  </div>
</template>
