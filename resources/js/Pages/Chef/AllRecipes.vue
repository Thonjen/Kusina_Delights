<template>
  <Layout>
    <div class="relative overflow-hidden">
      <!--Blurred Background-->
      <div class="absolute inset-0 -m-[20px]">
        <div class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png'); filter: brightness(0.3) blur(20px);"></div>
      </div>
      

      <!--The Recipes-->
      <div class="flex items-center justify-center h-full relative mt-10  mb-10">
        <div class="bg-white w-full max-w-screen-lg p-12 rounded-3xl shadow-2xl">
          <h1 class="text-center text-3xl font-bold mb-10">All Recipes</h1>

          <!-- Recipes List -->
          <div class="flex flex-col gap-8 w-full min-h-[400px]">
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

                      <div class="text-sm text-black-100">
                        <p><strong>Income:</strong> ₱{{ recipe.income.toFixed(2) }}</p>
                        <p><strong>Views:</strong> {{ recipe.views_count > 0 ? recipe.views_count : 'No views' }}</p>
                        <p class="text-black-100 italic text-sm mb-4">Created on: {{ recipe.formatted_date }}</p>
                      </div>

                      <p class="text-black-100 font-semibold">Average Rating:</p>
                      <div class="flex text-normal">
                        <template v-if="recipe.average_rating && recipe.average_rating > 0">
                          <template v-for="star in 5" :key="star">
                            <i :class="star <= Math.round(recipe.average_rating) ? 'text-yellow-500' : 'text-gray-300'">
                              ★
                            </i>
                          </template>
                        </template>
                        <template v-else>
                          <span class="text-gray-500 text-sm">Not reviewed yet</span>
                        </template>
                      </div>
                    </div>
                    <div class="flex flex-col items-end w-2/4 gap-4">
                      <!-- Income and Views -->

                      <a
                        :href="`/chef/dashboard/recipes/${recipe.RecipeID}/edit`"
                        class="px-6 py-2 bg-yellow-400 text-black-100 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                      >
                        Edit Recipe
                      </a>
                      <button
                        @click="deleteRecipe(recipe.RecipeID)"
                        class="px-6 py-2 bg-red-400 text-white rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 ease-in-out"
                      >
                        Delete Recipe
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Pagination -->
          <div class="flex justify-center mt-8 space-x-4">
            <!-- Previous Page Button -->
            <button
              v-if="recipes.prev_page_url"
              @click="goToPage(recipes.current_page - 1)"
              class="flex items-center px-4 py-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
            >
              <span>&laquo; Previous</span>
            </button>

            <!-- Page Numbers -->
            <div class="flex items-center space-x-2">
              <button
                v-for="page in pages"
                :key="page"
                :class="{
                  'bg-yellow-500': page === recipes.current_page,
                  'hover:bg-yellow-400': page !== recipes.current_page
                }"
                @click="goToPage(page)"
                class="px-4 py-2 rounded-full text-black-100 transition-all duration-300 ease-in-out"
              >
                {{ page }}
              </button>
            </div>

            <!-- Next Page Button -->
            <button
              v-if="recipes.next_page_url"
              @click="goToPage(recipes.current_page + 1)"
              class="flex items-center px-4 py-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
            >
              <span>Next &raquo;</span>
            </button>
          </div>

          <!-- Back Button -->
          <button
            @click="goBack"
            class="text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-xl shadow-lg mx-auto block mt-8"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/Layouts/frontend.vue";
import axios from 'axios';
import { defineProps } from 'vue';
import Swal from "sweetalert2"; // Import SweetAlert2

export default {
  components: {
    Layout,
  },
  props: {
    recipes: Object, // Paginated recipes object
  },
  computed: {
    // Generate an array of page numbers
    pages() {
      const pages = [];
      for (let i = 1; i <= this.recipes.last_page; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  
  methods: {
    // Function to handle recipe deletion
    async deleteRecipe(recipeId) {
      try {
        // Show SweetAlert2 confirmation dialog
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
          const response = await axios.delete(`/chef/dashboard/recipes/${recipeId}`);
          if (response.status === 200) {
            // Remove the recipe from the UI after deletion
            const index = this.recipes.data.findIndex(recipe => recipe.RecipeID === recipeId);
            if (index !== -1) {
              this.recipes.data.splice(index, 1);
            }
            // Show success message with SweetAlert2
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'The recipe has been deleted successfully.',
            });
          }
        }
      } catch (error) {
        console.error(error);
        // Show error message with SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong. Please try again later.',
        });
      }
    },

    // Function to handle page navigation
    goToPage(page) {
      if (page >= 1 && page <= this.recipes.last_page) {
        this.$inertia.get(`/chef/dashboard/recipes/all`, { page });
      }
    },

    // Function to handle the back button click
    goBack() {
      this.$inertia.visit('/chef/dashboard');
    }

  },
};
</script>

