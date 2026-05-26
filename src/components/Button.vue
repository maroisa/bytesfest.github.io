<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  type?: 'button' | 'submit'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  disabled: false
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-rexlia text-sm tracking-wider cursor-pointer select-none transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue-light hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-0.5',
    secondary: 'bg-brand-teal text-white hover:bg-brand-teal-light hover:shadow-lg hover:shadow-brand-teal/20 hover:-translate-y-0.5',
    outline: 'border border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue/5 hover:-translate-y-0.5',
    ghost: 'text-brand-navy hover:text-brand-blue hover:bg-brand-blue/5'
  }
  
  return `${base} ${variants[props.variant]}`
})
</script>

<template>
  <button :type="props.type" :class="buttonClasses" :disabled="props.disabled">
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>
