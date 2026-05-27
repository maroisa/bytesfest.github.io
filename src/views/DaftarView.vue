<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Code, FileText, Globe, Megaphone, ArrowUpRight, ArrowRight } from 'lucide-vue-next'
import { gsap } from 'gsap'

// Loading state
const isLoading = ref(true)

// Prepared external link
const registrationLink = 'https://linktr.ee/daftarbytesfest2026'

const competitions = [
  {
    title: 'HACKATHON',
    subtitle: 'Hackathon Competition',
    description: 'Selesaikan masalah nyata dengan solusi teknologi inovatif dalam waktu 48 jam secara tim.',
    icon: Code,
    colorClass: 'text-brand-blue border-brand-blue/20 bg-brand-blue/5 hover:bg-brand-blue/10',
    btnClass: 'bg-brand-blue hover:bg-brand-blue-light text-white shadow-brand-blue/20',
    path: '/kompetisi/hackathon'
  },
  {
    title: 'LOMBA ESAI',
    subtitle: 'Nasional Essay Competition',
    description: 'Salurkan gagasan kritis dan akademis yang kreatif tentang pemecahan masalah SDGs masa depan.',
    icon: FileText,
    colorClass: 'text-brand-teal border-brand-teal/20 bg-brand-teal/5 hover:bg-brand-teal/10',
    btnClass: 'bg-brand-teal hover:bg-brand-teal-light text-white shadow-brand-teal/20',
    path: '/kompetisi/essay'
  },
  {
    title: 'CREATIVE WEB',
    subtitle: 'Web Development Competition',
    description: 'Tunjukkan keahlian mendesain dan membangun situs web interaktif dengan user experience terbaik.',
    icon: Globe,
    colorClass: 'text-brand-lime border-brand-lime/20 bg-brand-lime/5 hover:bg-brand-lime/10',
    btnClass: 'bg-brand-lime hover:bg-brand-lime-light text-white shadow-brand-lime/20',
    path: '/kompetisi/creative-web'
  },
  {
    title: 'SDGs CAMPAIGN',
    subtitle: 'SDGs Visual Campaign',
    description: 'Suarakan kampanye kreatif Anda terkait SDGs melalui infografis menarik atau karya videografis.',
    icon: Megaphone,
    colorClass: 'text-purple-600 border-purple-200 bg-purple-50 hover:bg-purple-100/70',
    btnClass: 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/20',
    path: '/kompetisi/sdgs-visual-campaign'
  }
]

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    isLoading.value = false
  }, 600)

  gsap.from('.daftar-fade', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="pt-28 font-meiland min-h-screen relative overflow-hidden">
    <!-- Ambient Blobs -->
    <div class="absolute -z-10 top-[5%] left-[-15%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-brand-lime-light/26 blur-[100px] sm:blur-[130px] pointer-events-none"></div>
    <div class="absolute -z-10 top-[20%] right-[-15%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-purple-400/26 blur-[100px] sm:blur-[130px] pointer-events-none"></div>
    <div class="absolute -z-10 bottom-[10%] left-[25%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-brand-blue-light/26 blur-[120px] sm:blur-[150px] pointer-events-none"></div>

    <!-- Header Section -->
    <section v-if="!isLoading" class="max-w-4xl mx-auto px-6 py-12 text-center flex flex-col items-center gap-5">
      <h1 class="font-rexlia text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-wider uppercase leading-tight daftar-fade">
        PILIH KOMPETISI
      </h1>
      
      <p class="text-brand-grey text-base md:text-lg max-w-xl leading-relaxed daftar-fade">
        Pilih cabang perlombaan BYTESFEST 2026 yang ingin Anda ikuti, siapkan tim Anda, dan daftarkan diri Anda segera!
      </p>
    </section>

    <!-- Cards Grid -->
    <section v-if="!isLoading" class="max-w-5xl mx-auto px-6 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 daftar-fade">
        <div 
          v-for="comp in competitions" 
          :key="comp.path"
          class="group flex flex-col justify-between p-8 rounded-[32px] border border-brand-blue/10 bg-white hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300"
        >
          <div>
            <!-- Icon & Headings -->
            <div class="flex items-start justify-between gap-4">
              <div :class="`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-105 ${comp.colorClass}`">
                <component :is="comp.icon" class="w-7 h-7" />
              </div>
              
              <RouterLink 
                :to="comp.path" 
                class="w-10 h-10 rounded-full border border-brand-blue/15 flex items-center justify-center text-brand-grey hover:text-brand-blue hover:border-brand-blue hover:bg-brand-pale-teal/10 transition-all duration-300"
                title="Lihat Detail Lomba"
              >
                <ArrowRight class="w-4 h-4" />
              </RouterLink>
            </div>

            <div class="mt-6">
              <h3 class="font-rexlia text-xl text-brand-navy font-bold tracking-wide group-hover:text-brand-blue transition-colors duration-300">
                {{ comp.title }}
              </h3>
              <p class="font-mono text-xs text-brand-blue-light/80 font-bold uppercase tracking-wider mt-1">
                {{ comp.subtitle }}
              </p>
              
              <p class="text-brand-grey text-xs sm:text-sm leading-relaxed mt-4">
                {{ comp.description }}
              </p>
            </div>
          </div>

          <!-- Buttons -->
          <div class="mt-10 flex flex-col sm:flex-row gap-3">
            <a 
              :href="registrationLink" 
              target="_blank"
              rel="noopener noreferrer"
              :class="`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-rexlia text-xs tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${comp.btnClass}`"
            >
              Daftar Sekarang
              <ArrowUpRight class="w-3.5 h-3.5" />
            </a>
            
            <RouterLink 
              :to="comp.path" 
              class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-brand-blue/20 text-brand-blue font-rexlia text-xs tracking-wider hover:bg-brand-blue/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              Detail Lomba
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Skeleton -->
    <section v-else class="max-w-4xl mx-auto px-6 py-12 text-center flex flex-col items-center gap-5">
      <div class="skeleton h-14 w-3/4 rounded-lg"></div>
      <div class="skeleton h-4 w-full rounded mb-2"></div>
      <div class="skeleton h-4 w-2/3 rounded"></div>
    </section>

    <section v-if="isLoading" class="max-w-5xl mx-auto px-6 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col justify-between p-8 rounded-[32px] border border-brand-blue/10 bg-white">
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
        <div class="flex flex-col justify-between p-8 rounded-[32px] border border-brand-blue/10 bg-white">
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
        <div class="flex flex-col justify-between p-8 rounded-[32px] border border-brand-blue/10 bg-white">
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
        <div class="flex flex-col justify-between p-8 rounded-[32px] border border-brand-blue/10 bg-white">
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
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Skeleton Animation */
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
