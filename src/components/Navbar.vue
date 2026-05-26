<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X, ChevronDown } from 'lucide-vue-next'
import logoBytesfest from '@/assets/logo_bytesfest.webp'

const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleDropdown = (event: Event) => {
  event.stopPropagation()
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeAll = () => {
  isMenuOpen.value = false
  isDropdownOpen.value = false
}

const handleScroll = () => {
  if (window.scrollY > 20) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('click', closeAll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', closeAll)
})

const competitions = [
  { name: 'Hackathon', path: '/kompetisi/hackathon' },
  { name: 'Essay Competition', path: '/kompetisi/essay' },
  { name: 'Creative Web', path: '/kompetisi/creative-web' },
  { name: 'SDGs Visual Campaign', path: '/kompetisi/sdgs-visual-campaign' }
]
</script>

<template>
  <div 
    class="fixed top-0 left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 ease-in-out"
    :class="isScrolled ? 'p-4' : 'p-0'"
  >
    <nav 
      class="w-full backdrop-blur-md transition-all duration-500 ease-in-out flex items-center justify-between border"
      :class="isScrolled 
        ? 'max-w-6xl rounded-[32px] border-brand-blue/20 px-6 py-2.5 shadow-[0_12px_40px_0_rgba(0,94,164,0.15)] bg-white/80' 
        : 'max-w-[100%] rounded-none border-b-brand-blue/10 border-t-transparent border-x-transparent px-8 py-4 shadow-none bg-white/90'"
    >
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3 group" @click="closeAll">
        <img 
          :src="logoBytesfest" 
          alt="BYTESFEST 2026 Logo" 
          class="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <span class="font-rexlia text-lg tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
          BYTESFEST <span class="text-brand-blue-light font-bold">2026</span>
        </span>
      </RouterLink>

      <!-- Desktop Navigation Menu -->
      <div class="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
        <!-- Dropdown: Kompetisi -->
        <div class="relative">
          <button 
            @click="toggleDropdown" 
            class="flex items-center gap-1.5 py-2 text-brand-navy hover:text-brand-blue font-medium transition-colors duration-300 cursor-pointer"
          >
            Kompetisi 
            <ChevronDown class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180 text-brand-blue': isDropdownOpen }" />
          </button>

          <!-- Dropdown List -->
          <transition name="fade">
            <div 
              v-if="isDropdownOpen" 
              class="absolute top-full left-0 mt-3 w-60 rounded-2xl border border-brand-blue/10 bg-white p-2 shadow-xl backdrop-blur-md flex flex-col gap-1"
            >
              <RouterLink 
                v-for="comp in competitions" 
                :key="comp.path" 
                :to="comp.path"
                class="px-4 py-2.5 rounded-xl text-brand-navy hover:bg-brand-pale-teal hover:text-brand-blue transition-all duration-300 font-medium text-sm"
                @click="closeAll"
              >
                {{ comp.name }}
              </RouterLink>
            </div>
          </transition>
        </div>

        <RouterLink 
          to="/tentang" 
          class="py-2 text-brand-navy hover:text-brand-blue transition-colors duration-300"
          active-class="text-brand-blue font-semibold"
        >
          Tentang Kami
        </RouterLink>

        <RouterLink 
          to="/faq" 
          class="py-2 text-brand-navy hover:text-brand-blue transition-colors duration-300"
          active-class="text-brand-blue font-semibold"
        >
          FAQ
        </RouterLink>
      </div>

      <!-- Action Button -->
      <div class="hidden md:block">
        <RouterLink 
          to="/daftar" 
          class="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-blue text-white font-rexlia text-sm tracking-wider hover:bg-brand-blue-light hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-0.5 transition-all duration-300"
        >
          Daftar
        </RouterLink>
      </div>

      <!-- Hamburger Menu Button -->
      <button 
        @click="toggleMenu" 
        class="md:hidden p-2 text-brand-navy hover:text-brand-blue transition-colors duration-300 focus:outline-none"
      >
        <Menu v-if="!isMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </nav>

    <!-- Mobile Drawer Overlay -->
    <transition name="fade">
      <div 
        v-if="isMenuOpen" 
        class="fixed inset-0 bg-brand-navy/90 backdrop-blur-md z-40 md:hidden flex flex-col p-6 font-sans transition-all duration-300"
        :class="isScrolled ? 'top-[72px]' : 'top-[80px]'"
      >
        <div class="flex flex-col gap-6 text-white text-lg mt-4">
          <div class="border-b border-white/10 pb-4">
            <span class="text-white/50 text-sm uppercase tracking-wider block mb-3 font-rexlia">Kompetisi</span>
            <div class="flex flex-col gap-3 pl-3">
              <RouterLink 
                v-for="comp in competitions" 
                :key="comp.path" 
                :to="comp.path"
                class="hover:text-brand-teal-light py-1.5 transition-colors duration-300"
                @click="closeAll"
              >
                {{ comp.name }}
              </RouterLink>
            </div>
          </div>

          <RouterLink 
            to="/tentang" 
            class="hover:text-brand-teal-light py-2 border-b border-white/10"
            active-class="text-brand-teal-light"
            @click="closeAll"
          >
            Tentang Kami
          </RouterLink>

          <RouterLink 
            to="/faq" 
            class="hover:text-brand-teal-light py-2 border-b border-white/10"
            active-class="text-brand-teal-light"
            @click="closeAll"
          >
            FAQ
          </RouterLink>

          <RouterLink 
            to="/daftar" 
            class="mt-4 w-full py-3 rounded-full bg-brand-blue text-center text-white font-rexlia tracking-wider hover:bg-brand-blue-light transition-all duration-300 shadow-lg shadow-brand-blue/30"
            @click="closeAll"
          >
            Daftar Sekarang
          </RouterLink>
        </div>
      </div>
    </transition>
  </div>
</template>
