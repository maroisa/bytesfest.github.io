<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Home } from 'lucide-vue-next'
import mascot2 from '@/assets/mascot_bytesfest_2.webp'
</script>

<template>
  <div class="pt-28 font-meiland min-h-screen relative overflow-hidden flex items-center justify-center">
    <!-- Ambient Blobs - Warning Red -->
    <div class="absolute -z-10 top-[10%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-red-500/20 blur-[100px] sm:blur-[130px] pointer-events-none"></div>
    <div class="absolute -z-10 bottom-[20%] right-[-15%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-red-400/20 blur-[100px] sm:blur-[130px] pointer-events-none"></div>

    <!-- Main Content - Horizontal Layout -->
    <section class="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
      <!-- Mascot - No card background -->
      <div class="relative w-full max-w-sm lg:max-w-md aspect-square flex items-center justify-center">
        <img 
          :src="mascot2" 
          alt="FOXEL Mascot" 
          class="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      <!-- Text Content - Right side on desktop -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-xl">
        <h1 class="font-rexlia text-6xl sm:text-7xl md:text-8xl tracking-wider select-none">
          <span class="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">404</span>
        </h1>
        
        <h2 class="font-rexlia text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-wide">
          Halaman Tidak Ditemukan
        </h2>
        
        <p class="text-brand-grey text-base sm:text-lg leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>

        <!-- CTA Button -->
        <RouterLink 
          to="/" 
          class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-blue text-white font-rexlia text-sm tracking-wider hover:bg-brand-blue-light hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Home class="w-4 h-4" />
          Kembali ke Beranda
        </RouterLink>
      </div>
    </section>
  </div>
</template>
