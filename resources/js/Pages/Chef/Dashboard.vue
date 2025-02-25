<template>
  <Layout>
    <div class="relative overflow-hidden">
      <!-- Wrapper for the blurred background with padding to avoid blurred borders -->
      <div class="absolute inset-0 -m-[20px]">
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png'); filter: brightness(0.3) blur(20px);"
        ></div>
      </div>

      <!-- Main content -->
      <div class="flex items-center justify-center h-full relative mt-10  mb-10">
        <div class="bg-white w-[200vh] p-12 rounded-3xl shadow-2xl">
          <h1 class="text-center text-large font-bold mb-10">Dashboard</h1>
          <div class="flex gap-12">
            <!-- Profile Card -->
            <div
              class="bg-yellow-300 w-1/5 p-10 rounded-[2rem] shadow-[5px_5px_10px_rgba(0,0,0,0.5)] relative"
            >
              <div class="flex flex-col items-center">
                <img
                :src="profile.profile.ProfileImage ? `/storage/${profile.profile.ProfileImage}` : 'https://via.placeholder.com/403x212'"
                alt="Profile Image"
                  class="w-48 h-48 rounded-full object-cover shadow-md"
                />
                <div class="mt-8 border-t border-black w-full"></div>
                <p class="text-center mt-4 font-semibold text-large">{{ profile.user.name }}</p>
                <div class="w-full text-left mt-4 pl-4">
                  <p class="text-normal font-medium">Email: {{ profile.user.email }}</p>
                </div>   
              </div>
              <a
                :href="`/profile`"
                class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-300 text-black-100 py-4 px-10 rounded-2xl font-semibold shadow-[5px_5px_10px_rgba(0,0,0,0.3)] text-normal"
              >
              Profile
              </a>
            </div>

            <!-- Stats Section -->
            <div class="flex flex-col gap-8 w-1/3">
              <div class="bg-gray-100 p-8 rounded-xl shadow-lg">
                <p class="text-normal text-gray-500">Total Viewers</p>
                <p class="text-large font-bold">{{ totalViews }} viewers</p>
              </div>
              <div class="bg-gray-100 p-8 rounded-xl shadow-lg">
                <p class="text-normal text-gray-500">Recipes</p>
                <p class="text-large font-bold">{{ totalRecipeCount }} Recipe(s)</p> <!-- Display total recipe count -->
              </div>
              <div class="bg-gray-100 p-8 rounded-xl shadow-lg">
                <p class="text-normal text-gray-500">Income</p>
                <p class="text-large font-bold">₱ {{ totalIncome }}</p>
              </div>
            </div>

            <!-- History Section -->
            <div class="w-1/3 bg-yellow-300 p-10 rounded-lg shadow-md rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
              <h2 class="font-semibold text-3xl text-black-100 mb-8 border-b-2 border-black-100 pb-4">History:</h2>
              <ul class="space-y-8">
                <li v-if="recipes.data.length === 0" class="text-sm text-black-100">No recipes found.</li>
                <li v-else v-for="(recipe, index) in recipes.data" :key="index" class="flex items-start gap-6 transition-transform transform hover:scale-105">
                  <img
                    :src="recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : 'https://via.placeholder.com/403x212'"
                    alt="Recipe Image"
                    class="w-24 h-24 rounded-md object-cover shadow-md border-2 border-yellow-500"
                  />
                  <div class="w-full">
                    <div class="flex justify-between mb-4">
                      <div class="w-2/4">
                        <div class="font-semibold text-lg text-black-100 mb-2">{{ recipe.RecipeTitle }}</div>
                        <p class="text-black-100 italic text-small mb-4">Created on: {{ recipe.formatted_date }}</p>

                        <!-- Render stars or 'Not reviewed yet' based on average rating -->
                        <p class="text-black-100 font-semibold">Average Rating:</p>
                        <div class="flex">
                          <template v-if="recipe.average_rating && recipe.average_rating > 0">
                            <template v-for="star in 5" :key="star">
                              <i :class="star <= Math.round(recipe.average_rating) ? 'text-yellow-500' : 'text-gray-300'">
                                ★
                              </i>
                            </template>
                          </template>
                          <template v-else>
                            <span class="text-gray-500">Not reviewed yet</span>
                          </template>
                        </div>
                      </div>
                      <div class="flex flex-col items-end w-2/4 gap-4">
                        <a
                          :href="`/api/recipes/${recipe.RecipeID}`"
                          class="px-6 py-2 bg-yellow-400 text-black-100 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                        >
                          View Recipe
                        </a>
                        <!-- Delete Button -->
                        <button
                          @click="deleteRecipe(recipe.RecipeID)"
                          class="px-6 py-2 bg-red-400 text-black-100 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 ease-in-out mt-2"
                        >
                          Delete Recipe
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <!-- Pagination Controls -->
              <div v-if="recipes.last_page > 1" class="mt-6">
                <button
                  @click="goToPage(recipes.current_page - 1)"
                  :disabled="recipes.current_page === 1"
                  class="px-4 py-2 bg-yellow-500 text-black-100 rounded-full disabled:opacity-50"
                >
                  Previous
                </button>
                <span class="mx-2">{{ recipes.current_page }} / {{ recipes.last_page }}</span>
                <button
                  @click="goToPage(recipes.current_page + 1)"
                  :disabled="recipes.current_page === recipes.last_page"
                  class="px-4 py-2 bg-yellow-500 text-black-100 rounded-full disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>

          </div>
          <div class="flex justify-center gap-8 mt-12">
            <!-- View All Recipes Button -->
            <a
              :href="`/chef/dashboard/recipes/all`"
              class="text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-4 px-16 rounded-xl shadow-lg"
            >
              View All Recipe
            </a>

            <a
              :href="`/chef/dashboard/recipes/create`"
              class="text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-4 px-16 rounded-xl shadow-lg"
            >
              Create Recipe
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<script>
import axios from 'axios';
import Layout from "@/Layouts/frontend.vue";
import Swal from "sweetalert2"; // Import SweetAlert2

export default {
  components: {
    Layout,
  },
  props: {
    chef: Object,
    profile: Object,
    recipes: Array,  // Recipes array including details like average_rating, formatted_date
    totalViews: Number,
    totalIncome: Number,
    totalRecipeCount: Number,
  },
  methods: {
    // Pagination method to go to a specific page
    goToPage(page) {
      if (page < 1 || page > this.recipes.last_page) return; // Prevent invalid page navigation

      this.$inertia.get('/chef/dashboard', { page });
    },

    // Delete Recipe function with SweetAlert2
    async deleteRecipe(recipeId) {
      try {
        // Show SweetAlert2 confirmation dialog with custom background color
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          background: 'rgba(255, 255, 255, 1)', // White background for clarity
          confirmButtonColor: 'rgba(204, 162, 35, 1)', // Golden Yellow for confirm button
          cancelButtonColor: 'rgba(54, 69, 79, 1)', // Charcoal Gray for cancel button to provide contrast
          iconColor: 'rgba(255, 219, 99, 1)', // Use golden yellow for icon color for consistency
          customClass: {
            popup: 'swal-popup', // Add a custom class for further styling if needed
          },
        });


        if (result.isConfirmed) {
          // Perform the deletion if confirmed
          const response = await axios.delete(`/chef/dashboard/recipes/${recipeId}`);
          if (response.status === 200) {
            // Show success message with SweetAlert2
            await Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'The recipe has been deleted successfully.',
              background: 'rgba(255, 219, 99, 1)', // Custom background color for success
            });

            // Refresh the page to reflect changes
            this.$inertia.reload(); // Inertia reload (without full page refresh)
          }
        }
      } catch (error) {
        console.error('Error deleting recipe:', error);

        // Show error message with SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an issue deleting the recipe. Please try again later.',
          background: 'rgba(255, 219, 99, 1)', // Custom background color for error
        });
      }
    }

  },
};
</script>

