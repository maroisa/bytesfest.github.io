<script setup lang="ts">
import { Mail, Phone, Instagram, Youtube } from 'lucide-vue-next'
</script>

<template>
  <footer class="w-full bg-[#f2f3ff] border-t border-[#005ea4]/10 rounded-t-[40px] px-6 py-12 md:py-16 md:px-12 mt-20 font-meiland">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      
      <!-- Brand & Mission (6 columns on desktop) -->
      <div class="col-span-1 md:col-span-6 flex flex-col gap-4">
        <h3 class="font-rexlia text-xl tracking-wider text-brand-navy">
          BYTESFEST <span class="text-brand-blue-light font-bold">2026</span>
        </h3>
        <p class="text-brand-grey text-sm md:text-base max-w-md leading-relaxed">
          Tingkatkan inovasi, bangun masa depan. BYTESFEST adalah wadah bagi talenta muda yang berani bermimpi dan menciptakan karya nyata lewat teknologi, serta mendorong batas inovasi di era digital.
        </p>
      </div>

      <!-- Social Media Links (3 columns on desktop) -->
      <div class="col-span-1 md:col-span-3 flex flex-col gap-4">
        <h4 class="font-rexlia text-sm tracking-widest text-brand-navy uppercase">
          Media Sosial
        </h4>
        <div class="flex items-center gap-3">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-11 h-11 rounded-full border border-brand-blue/20 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <Instagram class="w-5 h-5" />
          </a>
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-11 h-11 rounded-full border border-brand-blue/20 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <!-- Custom TikTok/Music SVG -->
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.13 1.22 2.69 1.94 4.31 2.05v3.86a8.91 8.91 0 0 1-5.1-1.74 8.791 8.791 0 0 1-.79-.69v7.7c.06 4.9-3.9 8.95-8.8 8.95a8.877 8.877 0 0 1-8.87-8.87c-.07-4.22 2.87-7.98 6.94-8.8a8.873 8.873 0 0 1 5.91 1.76V0h.01Z" />
            </svg>
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-11 h-11 rounded-full border border-brand-blue/20 bg-white flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <Youtube class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Contact Info (3 columns on desktop) -->
      <div class="col-span-1 md:col-span-3 flex flex-col gap-4">
        <h4 class="font-rexlia text-sm tracking-widest text-brand-navy uppercase">
          Hubungi Kami
        </h4>
        <ul class="flex flex-col gap-3 text-sm text-brand-grey">
          <li class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-white border border-brand-blue/10 flex items-center justify-center text-brand-blue">
              <Mail class="w-4 h-4" />
            </div>
            <a href="mailto:info@bytesfest.id" class="hover:text-brand-blue transition-colors duration-300">
              info@bytesfest.id
            </a>
          </li>
          <li class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-white border border-brand-blue/10 flex items-center justify-center text-brand-blue">
              <Phone class="w-4 h-4" />
            </div>
            <a href="tel:+6281234567890" class="hover:text-brand-blue transition-colors duration-300">
              +62 812-3456-7890
            </a>
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom Copyright -->
    <div class="max-w-6xl mx-auto mt-12 pt-6 border-t border-brand-blue/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-grey/70">
      <p>&copy; 2026 BYTESFEST. All rights reserved.</p>
      <p>Dibuat dengan dedikasi oleh Panitia BYTESFEST 2026</p>
    </div>
  </footer>
</template>
