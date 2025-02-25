<template>
  <Layout>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Enhanced header section -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Recipes</h2>
        <InertiaLink
          :href="'/recipes/create'"
          class="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <span class="mr-2">+</span> New Recipe
        </InertiaLink>
      </div>

      <!-- Enhanced table section -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipe Title</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chef</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cooking Time</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servings</th>
                <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <!-- Enhanced row styling -->
              <tr v-for="recipe in recipes" :key="recipe.RecipeID" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <p class="text-lg font-medium">{{ recipe.RecipeTitle }}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <p class="text-sm text-gray-500">{{ recipe.chef?.user?.name || 'Unknown Chef' }}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <p class="text-sm">{{ recipe.CookingTime }} min</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <p class="text-sm">{{ recipe.Servings }} servings</p>
                </td>

                <!-- Similar styling for other columns -->
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex space-x-3 justify-end">
                    <InertiaLink
                      :href="`/api/recipes/${recipe.RecipeID}`"
                      class="text-blue-600 hover:text-blue-900 cursor-pointer"
                    >
                      View
                    </InertiaLink>
                    <InertiaLink
                      :href="`/recipes/${recipe.RecipeID}/edit`"
                      class="text-orange-600 hover:text-orange-900"
                    >
                      Edit
                    </InertiaLink>

                    <button
                      @click="deleteRecipe(recipe.RecipeID)"
                      class="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../../Layouts/backend.vue';
import { Inertia } from '@inertiajs/inertia';  // Import Inertia for handling the delete request
import { InertiaLink } from '@inertiajs/inertia-vue3';  // Import InertiaLink for navigation
import Swal from 'sweetalert2'; // Import SweetAlert2

// Define props for the component
defineProps({
  recipes: Array, // Pass recipes from parent component
});

// Delete method to handle recipe deletion
const deleteRecipe = async (recipeId) => {
  // Show confirmation alert using SweetAlert2
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this recipe!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    background: 'rgba(255, 255, 255, 1)', // White background for clarity
    confirmButtonColor: 'rgba(204, 162, 35, 1)', // Golden Yellow for confirm button
    cancelButtonColor: 'rgba(54, 69, 79, 1)', // Charcoal Gray for cancel button to provide contrast
    iconColor: 'rgba(255, 219, 99, 1)', // Golden yellow for icon color for consistency
  });

  if (result.isConfirmed) {
    try {
      // Perform the delete action using Inertia's delete method
      await Inertia.delete(route('recipes.destroy', recipeId));
      // Show success alert if recipe is deleted successfully
      Swal.fire({
        title: 'Deleted!',
        text: 'The recipe has been deleted.',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    } catch (error) {
      // Show error alert if there is an issue with the delete action
      Swal.fire({
        title: 'Error!',
        text: 'There was an error deleting the recipe.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  } else {
    // Show cancellation alert if the user cancels
    Swal.fire({
      title: 'Cancelled',
      text: 'The recipe was not deleted.',
      icon: 'info',
      confirmButtonText: 'Okay',
    });
  }
};
</script>


<style scoped>
/* Optional custom styles can be added here */
</style>
