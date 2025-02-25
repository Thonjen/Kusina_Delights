<script setup>
import { usePage } from '@inertiajs/inertia-vue3'
const logoPath = '/storage/logo3.png' // Adjust this to the correct path for the logo

// Extract the `url` from the `usePage()` hook
const { url } = usePage()

// Safely extract the path from the `url` object
const currentUrl = typeof url === 'string' ? url : (url?.path || '')

// Helper function to check if the current URL starts with a specific base path
const isActive = (basePath) => currentUrl.startsWith(basePath)
</script>

<template>
  <div class="sidebar">
    <div class="w-64 min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 shadow-xl">
      <div class="flex items-center px-6 py-6 border-b border-yellow-400/30 backdrop-blur-sm">
        <img :src="logoPath" alt="Logo" class="h-12 w-auto object-contain drop-shadow-md" />
        <h1 class="ml-4 text-xl font-bold text-gray-800 tracking-tight">Kusina Delights</h1>
      </div>

      <nav class="mt-8 px-4 space-y-2">
        <a
          v-for="(item, index) in [
            { href: '/dashboard', icon: 'fas fa-home', label: 'Dashboard' },
            { href: '/recipes', icon: 'fas fa-clipboard', label: 'Recipes' },
            { href: '/reviews', icon: 'fas fa-star', label: 'Reviews' },
            { href: '/users', icon: 'fas fa-users', label: 'Users' },
          ]"
          :key="index"
          :href="item.href"
          :class="[
            'flex items-center px-4 py-3 rounded-lg transition-all duration-200 ease-out',
            'hover:transform hover:scale-102 hover:shadow-md',
            isActive(item.href)
              ? 'bg-yellow-100/80 text-yellow-800 font-medium shadow-sm border border-yellow-200/50'
              : 'text-gray-700 hover:bg-white/50 hover:text-gray-900'
          ]"
        >
          <i :class="[item.icon, 'text-lg w-6']"></i>
          <span class="ml-3 text-sm font-medium">{{ item.label }}</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>


