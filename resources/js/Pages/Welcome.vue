<template>
  <Layout>
    <div
      class="relative h-[362px] overflow-hidden"
      @mouseenter="showGlow = true"
      @mouseleave="showGlow = false"
    >
      <!-- Hero Section Background -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://c.animaapp.com/IjUIznOY/img/hero-image-1.png'); filter: brightness(0.5);"
      ></div>

      <!-- Cursor Glow -->
      <div
        v-if="showGlow"
        class="absolute pointer-events-none w-[100px] h-[100px] bg-yellow-300 opacity-70 rounded-full blur-3xl"
        :style="{
          transform: `translate(${cursorX - 50}px, ${cursorY - 50}px)`, // Center the glow
          transition: 'transform 50ms linear', // Smooth transition for small movements
        }"
      ></div>
      

      <!-- Content -->
      <div
        class="flex items-center justify-center h-full relative z-10"
        @mousemove="updateCursorPosition"
      >
        <p
          class="text-white text-center px-4 text-large font-bold drop-shadow-xl"
        >
          Discover and savor the rich flavors of Filipino snack culture at Kusina
          Delights!
        </p>
      </div>
    </div>

      <div class="mt-10 mb-10">
        <p class="text-black-100 text-center text-large font-bold drop-shadow-xl mb-4">
          Famous Filipino Delights
        </p>

        <div v-if="recipes.length > 0" class="flex flex-wrap justify-center gap-10">
          <div
            v-for="recipe in recipes"
            :key="recipe.RecipeID"
            class="max-w-[403px] bg-white rounded-[40px] shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <!-- Fixed image size -->
            <div class="w-[403px] h-[250px] overflow-hidden flex-shrink-0">
            <img
              :src="recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : 'https://via.placeholder.com/403x212'"
              class="w-full h-full object-cover"
              :alt="recipe.RecipeTitle"
            />
          </div>
            <div class="p-4 flex flex-col justify-between h-[262px]">
              <div class="flex flex-col justify-between h-full">
                <div>
                  <h2 class="text-large font-semibold text-gray-800">{{ recipe.RecipeTitle }}</h2>
                  <p class="text-sm text-gray-500">By {{ recipe.chef.name }}</p>
                  <p class="mt-2 text-gray-600 text-small line-clamp-3 text-justify">
                    {{ recipe.Description || 'No description available.' }}
                  </p>
                </div>
                <!-- Ensure that this part does not push the button -->
                <div class="mt-4 flex items-center justify-between">
                  <a :href="`api/recipes/${recipe.RecipeID}`">
                    <button
                      class="bg-yellow-300 text-black-100 font-bold py-1 px-4 rounded-full text-small font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
                    >
                      View Recipe
                    </button>
                  </a>
                  <div class="flex items-center">
                    <template v-if="recipe.reviewCount > 0">
                      <span class="flex items-center">
                        <svg
                          v-for="star in 5"
                          :key="star"
                          class="w-5 h-5"
                          :class="star <= Math.round(recipe.averageStars) ? 'text-yellow-500' : 'text-gray-300'"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 .587l3.668 7.568L24 9.423l-6 6.09 1.42 8.486L12 18.727 4.58 24l1.42-8.486-6-6.09 8.332-1.268L12 .587z"
                          />
                        </svg>
                      </span>
                    </template>
                    <template v-else>
                      <span class="text-gray-500 text-[15px] italic">Not reviewed yet</span>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center text-gray-500">
          <p>No recipes available at the moment. Please check back later!</p>
        </div>
      </div>
    </Layout>
  </template>

<script setup>
import Layout from '../Layouts/frontend.vue';
import { onMounted } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { ref } from 'vue'; // Import ref to use reactive variables

// Reactive state for cursor glow effect
const showGlow = ref(false);
const cursorX = ref(0);
const cursorY = ref(0);

// Update cursor position dynamically
const updateCursorPosition = (event) => {
  cursorX.value = event.clientX - 0; // Offset to center the glow
  cursorY.value = event.clientY - 150; // Offset to center the glow
};

// Props passed from Laravel backend
defineProps({
  recipes: Array,
});

onMounted(() => {
  const { auth } = usePage().props;
  
  // Only load scripts if user is logged in
  if (auth.user) {
    // Create and append the first script
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    document.head.appendChild(script1);

    // Create and append the second script
    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2024/12/16/16/20241216164133-I8MIRLQE.js';
    document.head.appendChild(script2);
  }
}); 

   
</script>