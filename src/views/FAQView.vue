<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Search, ChevronDown, HelpCircle, MessageSquare } from 'lucide-vue-next'
import { gsap } from 'gsap'

// State for search query and selected category
const searchQuery = ref('')
const selectedCategory = ref('Hackathon')

// Accordion open state (contains indices of open FAQs)
const openIndices = ref<number[]>([])

// FAQ categories (Exactly the 4 requested competition tracks)
const categories = [
  'Hackathon',
  'Essay Competition',
  'Creative Web Competition',
  'SDGS Visual Campaign Competition'
]

// FAQ Data mapped strictly to the 4 categories
const faqs = [
  {
    category: 'Hackathon',
    question: 'Apa itu BYTESFEST 2026 dan bagaimana sistem lombanya?',
    answer: 'BYTESFEST (Brawijaya Technology Student Festival) 2026 adalah ajang kompetisi teknologi tingkat nasional. Kategori Hackathon menantang mahasiswa memecahkan masalah nyata SDGs dengan solusi digital inovatif dalam waktu 48 jam pengerjaan.'
  },
  {
    category: 'Hackathon',
    question: 'Apakah pendaftaran Hackathon BYTESFEST 2026 dipungut biaya?',
    answer: 'Biaya pendaftaran bervariasi tergantung gelombang pendaftaran (Gelombang 1 dan Gelombang 2). Rincian biaya administrasi selengkapnya dapat Anda lihat langsung pada Buku Panduan resmi Hackathon.'
  },
  {
    category: 'Hackathon',
    question: 'Berapa jumlah anggota dalam satu tim Hackathon?',
    answer: 'Setiap tim terdiri dari maksimal 3 orang mahasiswa aktif tingkat D3/D4/S1 yang berasal dari perguruan tinggi (institusi) yang sama.'
  },
  {
    category: 'Hackathon',
    question: 'Apakah anggota tim boleh berasal dari program studi yang berbeda?',
    answer: 'Ya, anggota tim sangat diperbolehkan berasal dari jurusan atau program studi yang berbeda, asalkan masih dalam satu perguruan tinggi yang sama.'
  },
  {
    category: 'Essay Competition',
    question: 'Siapa saja yang bisa mengikuti Essay Competition?',
    answer: 'Kategori Essay Competition terbuka untuk siswa SMA/SMK/Sederajat serta mahasiswa aktif tingkat D3/D4/S1 di seluruh Indonesia.'
  },
  {
    category: 'Essay Competition',
    question: 'Apakah ada batasan jumlah halaman untuk naskah esai?',
    answer: 'Ya, naskah esai memiliki batasan panjang halaman antara 5 sampai 10 halaman di luar halaman judul, lembar orisinalitas, dan lampiran pendukung. Detail teknis format penulisan dapat Anda periksa di Buku Panduan Esai.'
  },
  {
    category: 'Essay Competition',
    question: 'Apakah diperbolehkan mengirimkan lebih dari satu naskah esai?',
    answer: 'Setiap tim atau individu diperbolehkan mengirimkan maksimal 2 karya esai yang berbeda, dengan ketentuan ketua tim harus berbeda jika mendaftar dalam bentuk kelompok.'
  },
  {
    category: 'Creative Web Competition',
    question: 'Apakah kompetisi Creative Web Competition diselenggarakan secara daring atau luring?',
    answer: 'Babak penyisihan dilaksanakan secara daring (online). Untuk babak Grand Final, 10 tim terbaik akan diundang untuk melakukan presentasi karya secara luring (offline) di Universitas Brawijaya, Malang.'
  },
  {
    category: 'Creative Web Competition',
    question: 'Teknologi apa saja yang diperbolehkan dalam Creative Web Competition?',
    answer: 'Peserta dibebaskan menggunakan framework frontend maupun backend apa pun (misalnya VueJS, ReactJS, Next.js, Svelte, Laravel, dll.) asalkan aplikasi web dideploy ke hosting publik sehingga dapat diakses dengan lancar oleh juri.'
  },
  {
    category: 'Creative Web Competition',
    question: 'Apakah tema untuk Creative Web Competition sudah ditentukan?',
    answer: 'Ya, tema Creative Web berkaitan dengan penyediaan solusi digital inovatif untuk mendukung target pembangunan berkelanjutan (SDGs). Detail sub-tema dan kriteria penilaian selengkapnya dapat diakses melalui Buku Panduan Lomba.'
  },
  {
    category: 'SDGS Visual Campaign Competition',
    question: 'Format karya apa saja yang diperbolehkan untuk SDGS Visual Campaign Competition?',
    answer: 'Karya visual campaign dapat berupa poster/infografis statis atau videografis kreatif. Karya harus memiliki resolusi tinggi, orisinal, serta mengikuti spesifikasi teknis ukuran yang tercantum di Buku Panduan.'
  },
  {
    category: 'SDGS Visual Campaign Competition',
    question: 'Bagaimana cara pengumpulan karya SDGS Visual Campaign Competition?',
    answer: 'Karya diunggah terlebih dahulu melalui link formulir pengumpulan resmi yang disiapkan panitia, lalu dipublikasikan ke media sosial Instagram peserta dengan menandai akun Instagram resmi BYTESFEST 2026.'
  }
]

// Filtered FAQs based on search and selected category
const filteredFaqs = computed(() => {
  return faqs.filter(faq => {
    const matchesCategory = faq.category === selectedCategory.value
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

// Toggle individual accordion
const toggleFaq = (index: number) => {
  const position = openIndices.value.indexOf(index)
  if (position === -1) {
    openIndices.value.push(index)
  } else {
    openIndices.value.splice(position, 1)
  }
}

// Check if a FAQ is open
const isOpen = (index: number) => {
  return openIndices.value.includes(index)
}

// Set category filter
const selectCategory = (category: string) => {
  selectedCategory.value = category
  openIndices.value = [] // Reset all accordions on category switch
}

onMounted(() => {
  // Entrance Animations
  gsap.from('.faq-fade', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="pt-28 font-sans min-h-screen">
    <!-- Header Section -->
    <section class="max-w-4xl mx-auto px-6 py-12 text-center flex flex-col items-center gap-6">
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-brand-pale-teal/30 border border-brand-teal/20 rounded-full text-brand-teal text-xs font-bold tracking-wider uppercase faq-fade">
        <MessageSquare class="w-3.5 h-3.5" />
        FAQ
      </div>
      
      <h1 class="font-rexlia text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-wider uppercase leading-tight faq-fade">
        Ada Pertanyaan?
      </h1>
      
      <p class="text-brand-grey text-base md:text-lg max-w-xl leading-relaxed faq-fade">
        Temukan jawaban cepat atas pertanyaan umum seputar pelaksanaan pendaftaran, kriteria, dan detail kompetisi BYTESFEST 2026.
      </p>

      <!-- Search Input -->
      <div class="w-full max-w-xl relative mt-4 faq-fade">
        <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-brand-grey/60">
          <Search class="w-5 h-5" />
        </span>
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Cari pertanyaan atau jawaban..." 
          class="w-full pl-12 pr-6 py-3.5 rounded-full border border-brand-blue/15 bg-white text-brand-navy placeholder:text-brand-grey/50 shadow-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all duration-300 text-sm md:text-base"
        />
      </div>
    </section>

    <!-- Filters & Content -->
    <section class="max-w-4xl mx-auto px-6 pb-24 flex flex-col gap-10">
      
      <!-- Category Chips -->
      <div class="flex flex-wrap items-center justify-center gap-2.5 faq-fade">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectCategory(cat)"
          class="px-5 py-2.5 rounded-full text-xs font-rexlia tracking-wider border transition-all duration-300 cursor-pointer"
          :class="selectedCategory === cat 
            ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20' 
            : 'bg-white text-brand-navy border-brand-blue/10 hover:border-brand-blue/30 hover:bg-brand-pale-teal/10'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- FAQ List -->
      <div class="flex flex-col gap-4 faq-fade">
        <div v-if="filteredFaqs.length === 0" class="text-center py-16 border border-dashed border-brand-blue/20 rounded-3xl bg-white p-8">
          <HelpCircle class="w-12 h-12 text-brand-blue/30 mx-auto mb-3" />
          <p class="font-rexlia text-base text-brand-navy font-bold tracking-wide">Pertanyaan tidak ditemukan</p>
          <p class="text-brand-grey text-sm mt-1">Coba gunakan kata kunci pencarian atau kategori filter lainnya.</p>
        </div>

        <div 
          v-for="(faq, index) in filteredFaqs" 
          :key="index"
          class="border border-brand-blue/10 bg-white rounded-2xl hover:border-brand-blue/25 transition-all duration-300 shadow-sm"
        >
          <!-- Accordion Header -->
          <button 
            @click="toggleFaq(index)" 
            class="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-rexlia text-sm md:text-base text-brand-navy font-bold tracking-wide hover:text-brand-blue transition-colors duration-200 cursor-pointer"
          >
            <span>{{ faq.question }}</span>
            <ChevronDown 
              class="w-5 h-5 shrink-0 text-brand-grey transition-transform duration-300"
              :class="{ 'rotate-180 text-brand-blue': isOpen(index) }"
            />
          </button>

          <!-- Accordion Content -->
          <transition 
            name="faq-slide"
            @before-enter="el => (el as HTMLElement).style.height = '0px'"
            @enter="el => (el as HTMLElement).style.height = (el as HTMLElement).scrollHeight + 'px'"
            @before-leave="el => (el as HTMLElement).style.height = (el as HTMLElement).scrollHeight + 'px'"
            @leave="el => (el as HTMLElement).style.height = '0px'"
          >
            <div 
              v-show="isOpen(index)" 
              class="overflow-hidden transition-all duration-300 ease-in-out border-t border-brand-blue/5"
            >
              <div class="px-6 py-5 text-brand-grey text-xs md:text-sm leading-relaxed text-justify bg-brand-pale-teal/5">
                {{ faq.answer }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Accordion Slide transition animation */
.faq-slide-enter-active,
.faq-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
