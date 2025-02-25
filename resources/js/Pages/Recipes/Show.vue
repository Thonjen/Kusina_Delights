<template>
  <Layout>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <!-- Header section -->
        <div class="p-6 sm:p-8 border-b border-gray-200">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-gray-800">{{ recipe.RecipeTitle }}</h2>
              <p class="mt-2 text-lg text-gray-600">
                By <span class="font-semibold text-gray-800">{{ recipe.chef?.user?.name || 'Unknown Chef' }}</span>
              </p>
            </div>
            <div class="mt-4 md:mt-0 flex space-x-4">
              <InertiaLink
                :href="route('recipes.edit', recipe.RecipeID)"
                class="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Edit Recipe
              </InertiaLink>
              <button
                @click="deleteRecipe(recipe.RecipeID)"
                class="inline-flex items-center px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Delete Recipe
              </button>
            </div>
          </div>
        </div>

        <!-- Content section -->
        <div class="p-6 sm:p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Recipe Image -->
            <div class="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                v-if="recipe.RecipePhoto"
                :src="`/storage/${recipe.RecipePhoto}`"
                :alt="recipe.RecipeTitle"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div v-else class="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <span class="text-gray-400">No image available</span>
              </div>
            </div>

            <!-- Recipe Details -->
            <div class="space-y-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-orange-50 p-4 rounded-lg">
                  <p class="text-sm text-orange-600 font-medium">Preparation Time</p>
                  <p class="text-2xl font-bold text-orange-900">{{ recipe.Preparation }} min</p>
                </div>
                <div class="bg-orange-50 p-4 rounded-lg">
                  <p class="text-sm text-orange-600 font-medium">Cooking Time</p>
                  <p class="text-2xl font-bold text-orange-900">{{ recipe.CookingTime }} min</p>
                </div>
                <div class="bg-orange-50 p-4 rounded-lg">
                  <p class="text-sm text-orange-600 font-medium">Difficulty</p>
                  <p class="text-2xl font-bold text-orange-900">{{ recipe.Difficulty }}</p>
                </div>
                <div class="bg-orange-50 p-4 rounded-lg">
                  <p class="text-sm text-orange-600 font-medium">Servings</p>
                  <p class="text-2xl font-bold text-orange-900">{{ recipe.Servings }}</p>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Description</h3>
                <p class="text-gray-600">{{ recipe.Description }}</p>
              </div>
            </div>
          </div>

          <!-- Ingredients and Instructions -->
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Ingredients</h3>
              <div class="prose prose-orange max-w-none">
                {{ recipe.Ingredients }}
              </div>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Instructions</h3>
              <div class="prose prose-orange max-w-none">
                {{ recipe.Instructions }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { defineProps } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-vue3';
import Layout from '../../Layouts/backend.vue';
import Swal from 'sweetalert2';

const props = defineProps({
  recipe: Object,
});

const deleteRecipe = async (recipeId) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    background: 'rgba(255, 255, 255, 1)',
    confirmButtonColor: 'rgba(204, 162, 35, 1)',
    cancelButtonColor: 'rgba(54, 69, 79, 1)',
    iconColor: 'rgba(255, 219, 99, 1)',
  });

  if (result.isConfirmed) {
    Inertia.delete(route('recipes.destroy', recipeId));
    Swal.fire({
      title: 'Deleted!',
      text: 'Recipe has been deleted.',
      icon: 'success',
      confirmButtonText: 'Okay',
    });
  }
};
</script>

<style scoped>
/* Add any custom styling here */
</style>
