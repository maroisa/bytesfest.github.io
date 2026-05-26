<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { GraduationCap, Users, Shield, BookOpen, Code, Megaphone, FileText, Globe } from 'lucide-vue-next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Countdown from '@/components/Countdown.vue'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()

// Hardcoded registration links
const registrationLink = 'https://linktr.ee/daftarbytesfest2026'

// Map string keys to Lucide component references to avoid Vue 3 computed proxy issues
const iconMap: Record<string, any> = {
  GraduationCap,
  Users,
  Shield,
  BookOpen,
  Code,
  Megaphone,
  FileText,
  Globe
}

const compId = computed(() => {
  // Read last segment of route path, e.g., 'hackathon'
  return route.path.split('/').pop() || 'creative-web'
})

const compData = computed(() => {
  const data: Record<string, any> = {
    'hackathon': {
      title: 'HACKATHON COMPETITION',
      description: 'Selesaikan masalah nyata dengan solusi teknologi dalam waktu 48 jam. Uji batas kemampuan pemrograman dan kerja tim Anda untuk menyelesaikan masalah dunia nyata dengan bimbingan mentor berpengalaman.',
      icon: 'Code',
      color: 'from-brand-blue to-brand-blue-light',
      countdownTitle: 'Pendaftaran Ditutup Dalam',
      countdownTarget: '2026-09-01T23:59:59',
      guideBookLink: '#',
      criteria: [
        { title: 'Mahasiswa Aktif', desc: 'Terbuka untuk mahasiswa aktif tingkat D3/D4/S1 dari seluruh perguruan tinggi di Indonesia.', icon: 'GraduationCap' },
        { title: 'Tim 3 Orang', desc: 'Setiap tim terdiri dari maksimal 3 anggota yang berasal dari institusi pendidikan yang sama.', icon: 'Users' },
        { title: 'Solusi Solutif', desc: 'Karya harus menjawab permasalahan nyata dan belum pernah diikutsertakan dalam kompetisi lain.', icon: 'Shield' }
      ],
      timeline: [
        { date: '12 Ags - 5 Sep', title: 'Pendaftaran', desc: 'Registrasi tim dan pengisian berkas persyaratan administrasi.' },
        { date: '10 Sep - 15 Sep', title: 'Babak Penyisihan', desc: 'Pengumpulan proposal ide rancangan solusi digital.' },
        { date: '20 September', title: 'Pengumuman Finalis', desc: 'Pengumuman 10 tim terbaik yang lolos ke babak grand final.' },
        { date: '28 - 29 Sep', title: 'Grand Final & Pitching', desc: 'Hackathon offline 48 jam dan presentasi karya di depan juri.' }
      ]
    },
    'essay': {
      title: 'LOMBA ESAI NASIONAL',
      description: 'Tuangkan pemikiran kritis dan gagasan visioner Anda tentang masa depan teknologi dalam tulisan akademis yang terstruktur. Tunjukkan kemampuan analitis dan artikulasi tulisan terbaik Anda.',
      icon: 'FileText',
      color: 'from-brand-teal to-brand-teal-light',
      countdownTitle: 'Pendaftaran Ditutup Dalam',
      countdownTarget: '2026-09-05T23:59:59',
      guideBookLink: '#',
      criteria: [
        { title: 'Siswa & Mahasiswa', desc: 'Terbuka untuk siswa SMA/SMK sederajat dan mahasiswa aktif D3/D4/S1 seluruh Indonesia.', icon: 'GraduationCap' },
        { title: 'Individu / Tim 2 Orang', desc: 'Peserta dapat mengikuti lomba secara individu maupun tim maksimal 2 orang.', icon: 'Users' },
        { title: 'Karya Orisinal', desc: 'Esai harus merupakan karya orisinal, bebas plagiasi, dan belum pernah dipublikasikan.', icon: 'Shield' }
      ],
      timeline: [
        { date: '12 Ags - 5 Sep', title: 'Pendaftaran', desc: 'Pengisian data pendaftaran dan pembayaran biaya administrasi.' },
        { date: '10 Sep - 15 Sep', title: 'Pengumpulan Karya', desc: 'Batas akhir pengunggahan naskah esai lengkap.' },
        { date: '20 September', title: 'Pengumuman Finalis', desc: 'Pengumuman 10 besar esai terbaik yang masuk final.' },
        { date: '28 September', title: 'Presentasi Final', desc: 'Presentasi esai di hadapan dewan juri secara daring/luring.' }
      ]
    },
    'creative-web': {
      title: 'CREATIVE WEB COMPETITION',
      description: 'Bangun solusi inovatif dalam 48 jam. Kompetisi pengembangan web tingkat nasional ini menantang mahasiswa untuk menciptakan aplikasi berdampak nyata dengan teknologi terkini. Tunjukkan kemampuan teknis dan kreativitas tim Anda.',
      icon: 'Globe',
      color: 'from-brand-blue via-[#00a8cc] to-brand-teal-light',
      countdownTitle: 'Pendaftaran Ditutup Dalam',
      countdownTarget: '2026-09-10T23:59:59',
      guideBookLink: '#',
      criteria: [
        { title: 'Mahasiswa Aktif', desc: 'Terbuka untuk seluruh mahasiswa aktif tingkat D3/D4/S1 dari seluruh perguruan tinggi di Indonesia.', icon: 'GraduationCap' },
        { title: 'Tim 3 Orang', desc: 'Setiap tim terdiri dari maksimal 3 anggota yang berasal dari institusi pendidikan yang sama.', icon: 'Users' },
        { title: 'Karya Orisinal', desc: 'Solusi yang dikembangkan harus merupakan karya orisinal tim dan belum pernah menjuarai kompetisi lain.', icon: 'Shield' }
      ],
      timeline: [
        { date: '12 Ags - 5 Sep', title: 'Pendaftaran', desc: 'Registrasi tim dan pengumpulan berkas awal secara daring.' },
        { date: '10 Sep - 15 Sep', title: 'Babak Penyisihan', desc: 'Seleksi proposal ide dan penentuan finalis.' },
        { date: '20 September', title: 'Pengumuman Finalis', desc: 'Pengumuman 10 tim terbaik yang maju ke babak final.' },
        { date: '28 - 29 Sep', title: 'Grand Final', desc: 'Live coding 48 jam dan presentasi di venue utama.' }
      ]
    },
    'sdgs-visual-campaign': {
      title: 'SDGs VISUAL CAMPAIGN',
      description: 'Kampanyekan tujuan pembangunan berkelanjutan (SDGs) melalui karya visual yang kreatif, inspiratif, dan persuasif. Berkontribusi nyata menyuarakan isu-isu global melalui infografis atau videografis yang estetis.',
      icon: 'Megaphone',
      color: 'from-purple-600 to-pink-500',
      countdownTitle: 'Pendaftaran Ditutup Dalam',
      countdownTarget: '2026-09-08T23:59:59',
      guideBookLink: '#',
      criteria: [
        { title: 'Siswa & Mahasiswa', desc: 'Terbuka untuk siswa SMA/SMK sederajat, mahasiswa aktif, dan umum usia 15-25 tahun.', icon: 'GraduationCap' },
        { title: 'Individu / Tim 2 Orang', desc: 'Peserta dapat mendaftar secara perorangan maupun tim maksimal 2 orang.', icon: 'Users' },
        { title: 'Karya Orisinal', desc: 'Karya harus orisinal, bebas hak cipta pihak ketiga, dan tidak mengandung unsur SARA.', icon: 'Shield' }
      ],
      timeline: [
        { date: '12 Ags - 5 Sep', title: 'Pendaftaran', desc: 'Pendaftaran online dan pengisian data karya kampanye.' },
        { date: '10 Sep - 15 Sep', title: 'Pengumpulan Karya', desc: 'Batas akhir pengumpulan file visual campaign.' },
        { date: '20 September', title: 'Babak Kurasi', desc: 'Proses penilaian karya oleh dewan juri ahli.' },
        { date: '29 September', title: 'Awarding Night', desc: 'Pengumuman juara utama pada malam puncak acara BYTESFEST.' }
      ]
    }
  }

  return data[compId.value] || data['creative-web']
})

const initAnimations = () => {
  gsap.fromTo('.detail-fade', 
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    }
  )

  gsap.fromTo('.criteria-card', 
    { opacity: 0, y: 40 },
    {
      scrollTrigger: {
        trigger: '.criteria-grid',
        start: 'top 95%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    }
  )

  gsap.fromTo('.timeline-step', 
    { opacity: 0, scale: 0.95 },
    {
      scrollTrigger: {
        trigger: '.timeline-grid',
        start: 'top 95%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    }
  )
}

onMounted(() => {
  setTimeout(() => {
    initAnimations()
  }, 300)
})
</script>

<template>
  <div class="pt-28 font-meiland min-h-screen">
    <!-- Hero / Header Section -->
    <section class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <!-- Title & description (7 cols) -->
        <div class="lg:col-span-7 flex flex-col gap-6">
          <h1 class="font-rexlia text-4xl sm:text-5xl md:text-6xl tracking-wider leading-none select-none detail-fade">
            <span class="bg-gradient-to-r bg-clip-text text-transparent" :class="compData.color">
              {{ compData.title.split(' ')[0] }}
            </span>
            <br>
            <span class="text-brand-navy">
              {{ compData.title.split(' ').slice(1).join(' ') }}
            </span>
          </h1>

          <p class="text-brand-grey text-base md:text-lg leading-relaxed max-w-xl detail-fade">
            {{ compData.description }}
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap items-center gap-4 detail-fade mt-2">
            <a 
              :href="registrationLink" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-blue text-white font-rexlia text-sm tracking-wider hover:bg-brand-blue-light hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
              Pendaftaran
            </a>
            <a 
              :href="compData.guideBookLink"
              class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-brand-blue text-brand-blue font-rexlia text-sm tracking-wider hover:bg-brand-blue/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <BookOpen class="w-4 h-4" />
              Buku Panduan
            </a>
          </div>
        </div>

        <!-- Countdown Panel (5 cols) -->
        <div class="lg:col-span-5 detail-fade">
          <Countdown :targetDate="compData.countdownTarget" :title="compData.countdownTitle" />
        </div>
      </div>
    </section>

    <!-- Kriteria Umum Section -->
    <section class="max-w-6xl mx-auto px-6 py-16">
      <div class="inline-block border-b-4 border-brand-blue pb-1 mb-10">
        <h2 class="font-rexlia text-xl md:text-2xl text-brand-navy tracking-wider uppercase font-bold">
          Kriteria Umum
        </h2>
      </div>

      <div class="criteria-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="(crit, idx) in compData.criteria" 
          :key="idx"
          class="criteria-card flex flex-col gap-4 p-6 rounded-3xl border border-brand-blue/10 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-blue/30"
        >
          <div class="w-10 h-10 rounded-xl bg-brand-pale-teal/20 flex items-center justify-center text-brand-blue shrink-0 shadow-sm">
            <component :is="iconMap[crit.icon]" class="w-5 h-5" />
          </div>
          <div>
            <h4 class="font-rexlia text-sm text-brand-navy font-bold tracking-wide mb-2">
              {{ crit.title }}
            </h4>
            <p class="text-brand-grey text-xs sm:text-sm leading-relaxed">
              {{ crit.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Kompetisi Section -->
    <section class="max-w-6xl mx-auto px-6 py-16">
      <div class="inline-block border-b-4 border-brand-blue pb-1 mb-12">
        <h2 class="font-rexlia text-xl md:text-2xl text-brand-navy tracking-wider uppercase font-bold">
          Timeline Kompetisi
        </h2>
      </div>

      <div class="timeline-grid grid grid-cols-1 md:grid-cols-4 gap-6 relative before:hidden md:before:block before:absolute before:top-1/2 before:left-8 before:right-8 before:h-0.5 before:bg-brand-blue/10 before:-translate-y-6">
        <div 
          v-for="(step, idx) in compData.timeline" 
          :key="idx"
          class="timeline-step flex flex-col items-center md:items-start text-center md:text-left gap-4 relative group"
        >
          <!-- Date -->
          <span class="font-mono text-xs sm:text-sm text-brand-blue-light font-semibold tracking-wider">
            {{ step.date }}
          </span>

          <!-- Node bullet -->
          <div class="w-5 h-5 rounded-full border-2 border-brand-blue bg-white z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-125 md:ml-4 shadow-sm">
            <div class="w-2.5 h-2.5 rounded-full bg-brand-blue"></div>
          </div>

          <!-- Description card -->
          <div class="w-full p-5 rounded-2xl border border-brand-blue/10 bg-white shadow-sm mt-2 transition-shadow duration-300 group-hover:shadow-md">
            <h4 class="font-meiland font-bold italic text-brand-navy text-sm md:text-base mb-1.5">
              {{ step.title }}
            </h4>
            <p class="text-brand-grey text-xs leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
