<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '@/assets/logo_bytesfest.webp'
import mascot1 from '@/assets/mascot_bytesfest_1.webp'
import SkeletonLoader from '@/components/SkeletonLoader.vue'

gsap.registerPlugin(ScrollTrigger)

// Loading state
const isLoading = ref(true)

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    isLoading.value = false
  }, 600)

  gsap.fromTo('.tentang-fade', 
    { opacity: 0, y: 35 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    }
  )

  gsap.fromTo('.section-scroll-1', 
    { opacity: 0, y: 40 },
    {
      scrollTrigger: {
        trigger: '.section-scroll-1',
        start: 'top 95%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }
  )

  gsap.fromTo('.section-scroll-2', 
    { opacity: 0, y: 40 },
    {
      scrollTrigger: {
        trigger: '.section-scroll-2',
        start: 'top 95%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }
  )
})

const foxelDetails = [
  { char: 'F', title: 'Forward thinking', desc: 'Selalu berpikir maju dan siap menuju masa depan' },
  { char: 'O', title: 'Open minded', desc: 'Terbuka terhadap ide-ide baru, sudut pandang berbeda, dan kolaborasi' },
  { char: 'X', title: 'eXplore', desc: 'Berani mencoba, mengeksplorasi, dan melampaui batas kreativitas' },
  { char: 'E', title: 'Empowered', desc: 'Tumbuh dengan rasa percaya diri melalui ilmu, pengalaman, dan komunitas' },
  { char: 'L', title: 'Lead', desc: 'Siap menjadi bagian dari perubahan dan memimpin inovasi yang berdampak positif' }
]
</script>

<template>
  <div class="pt-28 font-meiland min-h-screen relative overflow-hidden">
    <!-- Ambient Blobs -->
    <div class="absolute -z-10 top-[10%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-brand-blue-light/28 blur-[100px] sm:blur-[130px] pointer-events-none"></div>
    <div class="absolute -z-10 bottom-[20%] right-[-15%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-brand-teal-light/28 blur-[100px] sm:blur-[130px] pointer-events-none"></div>

    <!-- Hero Title -->
    <section v-if="!isLoading" class="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-4">
      <h1 class="font-rexlia text-3xl sm:text-4xl md:text-5xl tracking-wide tentang-fade select-none">
        <span class="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">BYTE THE FUTURE:</span>
      </h1>
      <h2 class="font-meiland text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic tentang-fade max-w-4xl leading-tight">
        <span class="bg-gradient-to-r from-brand-blue-light to-brand-teal bg-clip-text text-transparent">Architecting SDGs Solutions Through Digital Innovations</span>
      </h2>
    </section>

    <!-- Tentang BYTESFEST Block -->
    <section v-if="!isLoading" class="max-w-6xl mx-auto px-6 py-6 tentang-fade">
      <div class="w-full bg-[#f2f3ff] border border-brand-blue/10 rounded-[32px] p-8 md:p-12 shadow-sm">
        <h3 class="font-rexlia text-xs md:text-sm text-brand-blue font-bold tracking-widest uppercase mb-4">
          Tentang BYTESFEST
        </h3>
        <p class="text-brand-navy text-base md:text-lg leading-relaxed max-w-5xl">
          <strong>BYTESFEST (BUNCH OF YOUTH TECHNOTRACTION AND INFORMATICS FESTIVAL) 2026</strong> adalah program tahunan berskala nasional yang diselenggarakan oleh Himpunan Mahasiswa Program Studi Pendidikan Teknik Informatika dan Komputer (HMP MIKROPTIK), Fakultas Keguruan dan Ilmu Pendidikan, Universitas Sebelas Maret. Mengusung tema “Byte the Future: Architecting SDG Solutions Through Digital Innovation” kegiatan ini dirancang sebagai wadah strategis bagi pelajar SMA/SMK, mahasiswa, hingga masyarakat umum untuk menerapkan pengetahuan dan keterampilan mereka dalam suasana yang kreatif, kolaboratif, dan kompetitif.
        </p>
      </div>
    </section>

    <!-- Skeleton for Hero and Tentang -->
    <section v-else class="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-6">
      <SkeletonLoader type="hero" />
      <div class="w-full bg-[#f2f3ff] border border-brand-blue/10 rounded-[32px] p-8 md:p-12 shadow-sm">
        <SkeletonLoader type="text" height="1rem" width="150px" />
        <SkeletonLoader type="text" :count="4" />
      </div>
    </section>

    <!-- Tema Utama Section -->
    <section v-if="!isLoading" class="max-w-6xl mx-auto px-6 py-16 section-scroll-1">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <!-- Text details -->
        <div class="lg:col-span-7 flex flex-col gap-6">
          <div class="inline-block">
            <span class="px-4 py-2 bg-brand-pale-teal text-brand-blue font-rexlia text-[10px] tracking-wider uppercase rounded-full border border-brand-blue/15">
              Tema Utama BYTESFEST 2026
            </span>
          </div>
          
          <h3 class="font-rexlia text-2xl sm:text-3xl text-brand-navy tracking-wide font-bold">
            Architecting SDGs Solutions
          </h3>
          
          <p class="text-brand-grey text-sm md:text-base leading-relaxed text-justify">
            Seiring dengan akselerasi transformasi digital, penguasaan teknologi informasi dan komunikasi telah menjadi kompetensi krusial di berbagai sektor kehidupan. Di sisi lain, agenda global Sustainable Development Goals (SDGs) menuntut solusi nyata yang inovatif, inklusif, dan berkelanjutan serta tantangan yang hanya bisa dijawab oleh generasi muda yang melek teknologi sekaligus berwawasan kemanusiaan. 
          </p>
          
          <p class="text-brand-grey text-sm md:text-base leading-relaxed text-justify">
            Kemampuan berpikir kritis, kolaborasi lintas disiplin, dan adaptasi terhadap perubahan global pun menjadi kompetensi yang tidak kalah penting untuk dikuasai. Dalam konteks tersebut, BYTESFEST 2026 hadir sebagai bentuk nyata kontribusi mahasiswa PTIK dalam mendukung penguatan kualitas SDM Indonesia melalui pengembangan potensi teknis dan non-teknis secara seimbang.
          </p>
        </div>

        <!-- Mascot Illustration placeholder -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-md aspect-square rounded-[32px] border border-brand-blue/10 bg-brand-pale-teal/15 p-6 md:p-8 flex items-center justify-center overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
            <img 
              :src="logo" 
              alt="Logo BYTESFEST 2026" 
              class="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Skeleton -->
    <section v-else class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <div class="lg:col-span-7 flex flex-col gap-6">
          <SkeletonLoader type="button" />
          <SkeletonLoader type="text" height="2rem" />
          <SkeletonLoader type="text" :count="4" />
        </div>
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-md aspect-square rounded-[32px] border border-brand-blue/10 bg-brand-pale-teal/15 p-6 md:p-8 flex items-center justify-center overflow-hidden">
            <SkeletonLoader type="text" height="100%" width="100%" />
          </div>
        </div>
      </div>
    </section>

    <!-- Maskot Section -->
    <section v-if="!isLoading" class="max-w-6xl mx-auto px-6 py-16 border-t border-brand-blue/10 section-scroll-2">
      <h3 class="font-rexlia text-3xl text-brand-navy font-bold tracking-wide uppercase mb-12">
        Maskot BYTESFEST
      </h3>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        <!-- Mascot Image -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-md aspect-square rounded-[32px] border border-brand-blue/10 bg-brand-pale-teal/15 p-6 md:p-8 flex items-center justify-center overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
            <img 
              :src="mascot1" 
              alt="FOXEL Mascot" 
              class="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <!-- Mascot Narrative Description -->
        <div class="lg:col-span-7 flex flex-col gap-6 text-brand-navy">
          <h4 class="font-rexlia text-2xl text-brand-blue font-bold tracking-wide">
            FOXEL
          </h4>
          
          <div class="flex flex-col gap-4 text-brand-grey text-sm md:text-base leading-relaxed text-justify">
            <p>
              Rubah dipilih sebagai maskot BYTESFEST karena melambangkan kecerdasan, kelincahan, dan kemampuan beradaptasi. Rubah dikenal mampu menghadapi berbagai situasi dengan strategi dan kreativitas, yang tidak hanya mengandalkan kekuatan. Hal ini mencerminkan semangat generasi muda di dunia teknologi yang dituntut untuk berpikir inovatif, cepat beradaptasi, dan berani menciptakan solusi baru di era digital.
            </p>
            <p>
              Nama <strong>FOXEL</strong> berasal dari gabungan kata <strong>FOX</strong> (Rubah) dan <strong>EL</strong> terinspirasi dari kata <em>pixel</em> (unit terkecil yang menyusun sebuah gambar digital). FOXEL melambangkan bahwa setiap individu, sekecil apapun perannya tetap memiliki kontribusi penting dalam membangun inovasi dan masa depan teknologi.
            </p>
          </div>

          <!-- Meaning List -->
          <div class="mt-6 flex flex-col gap-4">
            <div 
              v-for="(f, idx) in foxelDetails" 
              :key="idx" 
              class="flex items-start gap-4 p-4 rounded-2xl border border-brand-blue/5 hover:border-brand-blue/20 bg-white hover:bg-brand-pale-teal/10 hover:shadow-sm transition-all duration-300"
            >
              <div class="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shrink-0 font-rexlia text-lg font-bold shadow-md shadow-brand-blue/10">
                {{ f.char }}
              </div>
              <div>
                <h5 class="font-rexlia text-xs text-brand-navy font-bold tracking-wide mb-0.5">{{ f.title }}</h5>
                <p class="text-brand-grey text-xs sm:text-sm leading-normal">{{ f.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skeleton -->
    <section v-else class="max-w-6xl mx-auto px-6 py-16 border-t border-brand-blue/10">
      <SkeletonLoader type="text" height="2.5rem" class="mb-12" />
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-md aspect-square rounded-[32px] border border-brand-blue/10 bg-brand-pale-teal/15 p-6 md:p-8 flex items-center justify-center overflow-hidden">
            <SkeletonLoader type="text" height="100%" width="100%" />
          </div>
        </div>
        <div class="lg:col-span-7 flex flex-col gap-6">
          <SkeletonLoader type="text" height="2rem" />
          <SkeletonLoader type="text" :count="4" />
          <SkeletonLoader type="card" v-for="i in 5" :key="i" />
        </div>
      </div>
    </section>
  </div>
</template>
