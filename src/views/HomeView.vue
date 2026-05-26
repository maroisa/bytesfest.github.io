<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { GraduationCap, Calendar, History, Code, FileText, Globe, Megaphone, ArrowRight } from 'lucide-vue-next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Countdown from '@/components/Countdown.vue'

gsap.registerPlugin(ScrollTrigger)

// Calculate a dynamic target date for the countdown so that it always shows around 45 days in the future for demo purposes, or a fixed date.
// Let's use a fixed date in 2026, say September 15th, 2026.
const countdownTarget = '2026-09-15T09:00:00'

const heroTitle = ref<HTMLElement | null>(null)
const targetSection = ref<HTMLElement | null>(null)
const categorySection = ref<HTMLElement | null>(null)
const timelineSection = ref<HTMLElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    // Hero Entrance Animations (using fromTo to prevent opacity locking bugs)
    gsap.fromTo('.hero-fade', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }
    )

    // Target Peserta Scroll Animations (using fromTo to resolve scroll-reset opacity bugs)
    if (targetSection.value) {
      gsap.fromTo('.target-card', 
        { opacity: 0, x: 50 },
        {
          scrollTrigger: {
            trigger: targetSection.value,
            start: 'top 95%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        }
      )
    }

    // Kategori Kompetisi Scroll Animations (using fromTo to resolve hidden category cards bug)
    if (categorySection.value) {
      gsap.fromTo('.category-card', 
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: categorySection.value,
            start: 'top 95%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      )
    }

    // Timeline Scroll Animations
    if (timelineSection.value) {
      gsap.fromTo('.timeline-item', 
        { opacity: 0, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: timelineSection.value,
            start: 'top 95%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)'
        }
      )
    }
  }, 300)
})

const categories = [
  {
    title: 'HACKATHON',
    description: 'Selesaikan masalah nyata dengan solusi teknologi dalam 48 jam.',
    icon: Code,
    color: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
    path: '/kompetisi/hackathon'
  },
  {
    title: 'ESSAY',
    description: 'Tuangkan ide inovatifmu dalam tulisan akademis yang kritis.',
    icon: FileText,
    color: 'text-brand-teal bg-brand-teal/10 border-brand-teal/20',
    path: '/kompetisi/essay'
  },
  {
    title: 'CREATIVE WEB',
    description: 'Rancang pengalaman web yang interaktif dan estetis.',
    icon: Globe,
    color: 'text-brand-lime bg-brand-lime/10 border-brand-lime/20',
    path: '/kompetisi/creative-web'
  },
  {
    title: 'SDGs VISUAL CAMPAIGN',
    description: 'Kampanyekan tujuan pembangunan berkelanjutan melalui karya visual.',
    icon: Megaphone,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
    path: '/kompetisi/sdgs-visual-campaign'
  }
]

const targetAudience = [
  {
    title: 'Mahasiswa S1/Sederajat',
    description: 'Mahasiswa aktif tingkat D3/D4/S1 seluruh perguruan tinggi di Indonesia.',
    icon: GraduationCap
  },
  {
    title: 'Siswa SMK/SMA Sederajat',
    description: 'Siswa aktif tingkat menengah atas/kejuruan se-Indonesia.',
    icon: Calendar
  },
  {
    title: 'Gap Year SMA Maksimal 1 Tahun',
    description: 'Lulusan SMA/SMK sederajat dengan maksimal gap-year 1 tahun.',
    icon: History
  }
]

const timelineItems = [
  {
    date: '1 Okt - 30 Nov 2025',
    title: 'Pendaftaran Gelombang 1',
    description: 'Pembukaan registrasi awal kompetisi',
    highlight: false
  },
  {
    date: '1 Des 2025 - 15 Jan 2026',
    title: 'Pendaftaran Gelombang 2',
    description: 'Pembukaan registrasi gelombang kedua',
    highlight: false
  },
  {
    date: '1 Feb 2026',
    title: 'Pengumuman Finalis',
    description: 'Pengumuman finalis terpilih yang lolos seleksi',
    highlight: false
  },
  {
    date: '20 - 22 Feb 2026',
    title: 'Main Event & Awarding',
    description: 'Tahap penjurian final, presentasi, dan pengumuman pemenang',
    highlight: true
  }
]

const sponsors = [
  'TECHCORP', 'CLOUDSYS', 'DEVSPACE', 'NETGLOBAL', 'TECHCORP', 'CLOUDSYS', 'DEVSPACE'
]
</script>

<template>
  <div class="pt-28 font-sans">
    <!-- Hero Section -->
    <section class="max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[80vh] gap-10 py-12">
      <div ref="heroTitle" class="flex flex-col gap-6 max-w-4xl">
        <h1 class="font-rexlia text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider leading-none select-none hero-fade">
          <span class="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">BYTESFEST</span>
          <br>
          <span class="text-brand-navy">2026</span>
        </h1>
        
        <p class="text-brand-grey text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed hero-fade">
          Ajang kompetisi teknologi terbesar tahun 2026. Tunjukkan karya terbaikmu dan jadilah pionir inovasi masa depan.
        </p>
      </div>

      <!-- Countdown -->
      <div class="w-full hero-fade">
        <Countdown :targetDate="countdownTarget" />
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-4 hero-fade">
        <RouterLink 
          to="/daftar" 
          class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-blue text-white font-rexlia text-sm tracking-wider hover:bg-brand-blue-light hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-0.5 transition-all duration-300"
        >
          Daftar Sekarang
        </RouterLink>
        <RouterLink 
          to="/tentang" 
          class="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-brand-blue text-brand-blue font-rexlia text-sm tracking-wider hover:bg-brand-blue/5 hover:-translate-y-0.5 transition-all duration-300"
        >
          Tentang BYTESFEST
        </RouterLink>
      </div>
    </section>

    <!-- Target Peserta Section -->
    <section ref="targetSection" class="max-w-6xl mx-auto px-6 py-16 sm:py-24">
      <div class="w-full border border-brand-blue/15 rounded-[32px] bg-white p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-center shadow-sm">
        <div class="w-full md:w-1/2 flex flex-col gap-4">
          <h2 class="font-rexlia text-3xl md:text-4xl text-brand-navy tracking-wide uppercase leading-tight">
            Target Peserta
          </h2>
          <p class="text-brand-grey text-sm md:text-base leading-relaxed">
            Kompetisi ini terbuka untuk seluruh talenta muda berbakat di Indonesia yang ingin menguji kemampuan teknis dan kreativitas mereka.
          </p>
        </div>
        
        <div class="w-full md:w-1/2 flex flex-col gap-4">
          <div 
            v-for="(target, idx) in targetAudience" 
            :key="idx" 
            class="target-card flex items-start gap-4 p-5 rounded-2xl border border-brand-blue/10 hover:border-brand-blue/30 bg-brand-pale-teal/10 hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <div class="w-10 h-10 rounded-xl bg-white border border-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 shadow-sm">
              <component :is="target.icon" class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-rexlia text-sm text-brand-navy font-bold tracking-wide mb-1">{{ target.title }}</h4>
              <p class="text-brand-grey text-xs md:text-sm leading-relaxed">{{ target.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kategori Kompetisi Section -->
    <section ref="categorySection" class="max-w-6xl mx-auto px-6 py-16 sm:py-24 flex flex-col gap-12 sm:gap-16">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="font-rexlia text-3xl md:text-4xl text-brand-navy tracking-wide uppercase">
          Kategori Kompetisi
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <RouterLink 
          v-for="(cat, idx) in categories" 
          :key="idx" 
          :to="cat.path"
          class="category-card group flex flex-col justify-between p-6 rounded-3xl border border-brand-blue/10 hover:border-brand-blue/30 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div class="flex flex-col gap-6">
            <div :class="`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm ${cat.color} group-hover:scale-110 transition-transform duration-300`">
              <component :is="cat.icon" class="w-6 h-6" />
            </div>
            
            <div>
              <h3 class="font-rexlia text-base text-brand-navy font-bold tracking-wide mb-2 group-hover:text-brand-blue transition-colors duration-300">
                {{ cat.title }}
              </h3>
              <p class="text-brand-grey text-xs sm:text-sm leading-relaxed">
                {{ cat.description }}
              </p>
            </div>
          </div>
          
          <div class="mt-8 flex items-center gap-2 text-xs font-rexlia text-brand-blue font-bold group-hover:gap-3 transition-all duration-300">
            Detail Lomba <ArrowRight class="w-3.5 h-3.5" />
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Timeline Section -->
    <section ref="timelineSection" class="max-w-6xl mx-auto px-6 py-16 sm:py-24 flex flex-col gap-12 sm:gap-16">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="font-rexlia text-3xl md:text-4xl text-brand-navy tracking-wide uppercase">
          Timeline Kegiatan
        </h2>
      </div>

      <!-- Horizontal Timeline (Desktop) -->
      <div class="relative hidden lg:block pt-16 pb-20">
        <!-- Connecting Line -->
        <div class="absolute top-1/2 left-4 right-4 h-0.5 bg-brand-blue/15 -translate-y-2"></div>
        
        <div class="grid grid-cols-4 gap-6">
          <div 
            v-for="(item, idx) in timelineItems" 
            :key="idx"
            class="timeline-item flex flex-col items-center text-center relative group"
          >
            <!-- Date above the line -->
            <span class="font-mono text-xs text-brand-blue-light font-bold tracking-wider mb-6 block">
              {{ item.date }}
            </span>

            <!-- Dot on the line -->
            <div 
              class="w-5 h-5 rounded-full border-2 border-white bg-brand-blue-light/10 shadow-md z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-125 mb-6"
              :class="item.highlight ? 'bg-brand-teal-light border-brand-teal' : 'bg-brand-blue border-brand-blue-light'"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>

            <!-- Title & Description inside rounded card -->
            <div 
              class="p-5 rounded-2xl border border-brand-blue/10 bg-white shadow-sm max-w-xs transition-all duration-300 group-hover:shadow-md"
              :class="{ 'bg-brand-pale-teal/30 border-brand-teal-light shadow-md': item.highlight }"
            >
              <h4 class="font-rexlia text-xs text-brand-navy font-bold tracking-wide mb-1 leading-normal">
                {{ item.title }}
              </h4>
              <p class="text-brand-grey text-xs leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Vertical Timeline (Mobile) -->
      <div class="lg:hidden flex flex-col gap-6 relative pl-8 before:absolute before:top-2 before:bottom-2 before:left-3.5 before:w-0.5 before:bg-brand-blue/15">
        <div 
          v-for="(item, idx) in timelineItems" 
          :key="idx"
          class="timeline-item flex flex-col gap-2 relative"
        >
          <!-- Dot -->
          <div 
            class="absolute top-1.5 left-[-26px] w-4.5 h-4.5 rounded-full border-2 border-white shadow-sm flex items-center justify-center"
            :class="item.highlight ? 'bg-brand-teal-light border-brand-teal' : 'bg-brand-blue border-brand-blue-light'"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>
          
          <span class="font-mono text-xs text-brand-blue-light font-bold tracking-wider">
            {{ item.date }}
          </span>
          
          <div 
            class="p-4 rounded-xl border border-brand-blue/10 bg-white"
            :class="{ 'bg-brand-pale-teal/30 border-brand-teal-light shadow-sm': item.highlight }"
          >
            <h4 class="font-rexlia text-xs text-brand-navy font-bold tracking-wide mb-1 leading-normal">
              {{ item.title }}
            </h4>
            <p class="text-brand-grey text-xs leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsor Section -->
    <section class="w-full bg-[#f2f3ff] py-10 overflow-hidden border-y border-[#005ea4]/10 flex flex-col items-center gap-6">
      <span class="font-sans text-xs md:text-sm font-semibold italic text-brand-navy/60 tracking-wider">
        SPECIAL THANKS TO OUR SPONSORS
      </span>
      
      <!-- Infinite marquee container -->
      <div class="w-full relative flex overflow-x-hidden">
        <div class="animate-marquee whitespace-nowrap flex gap-16 py-2 select-none">
          <span 
            v-for="(sp, idx) in sponsors" 
            :key="idx" 
            class="font-rexlia text-xl sm:text-2xl text-brand-blue/40 tracking-widest font-bold inline-block hover:text-brand-blue transition-colors duration-300"
          >
            {{ sp }}
          </span>
        </div>
        <div class="animate-marquee2 absolute top-2 whitespace-nowrap flex gap-16 py-2 select-none">
          <span 
            v-for="(sp, idx) in sponsors" 
            :key="idx" 
            class="font-rexlia text-xl sm:text-2xl text-brand-blue/40 tracking-widest font-bold inline-block hover:text-brand-blue transition-colors duration-300"
          >
            {{ sp }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Infinite Marquee Styles */
.animate-marquee {
  animation: marquee 25s linear infinite;
}

.animate-marquee2 {
  animation: marquee2 25s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee2 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
