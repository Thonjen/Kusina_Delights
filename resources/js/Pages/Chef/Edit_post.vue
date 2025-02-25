<template>
  <Layout>
    <div class="relative overflow-hidden">
      <div class="absolute inset-0 -m-[20px]">
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png'); filter: brightness(0.3) blur(20px);"
        ></div>
      </div>

      <div class="flex items-center justify-center h-full relative px-10 sm:px-12 lg:px-16 mt-10  mb-10">
        <div class="bg-white w-full max-w-[200vh] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg">
          <h1 class="text-center text-large font-bold mb-10">Edit Recipe</h1>

          <form class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" @submit.prevent="submitForm">
            <!-- Recipe Title -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Recipe Title*</label>
              <input
                v-model="form.RecipeTitle"
                type="text"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <!-- Description -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Description</label>
              <textarea
                v-model="form.Description"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <!-- Ingredients -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Ingredients</label>
              <textarea
                v-model="form.Ingredients"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <!-- Instructions -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Instructions</label>
              <textarea
                v-model="form.Instructions"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <!-- Recipe Photo -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Recipe Photo</label>
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="handleFileChange"
                class="w-full text-gray-700"
              />
              <img v-if="imagePreview" :src="imagePreview" alt="Preview" class="mt-4 w-full h-40 object-cover" />
            </div>

            <!-- Additional Fields -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Preparation Time (minutes)</label>
              <input
                v-model="form.Preparation"
                type="number"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Cooking Time (minutes)</label>
              <input
                v-model="form.CookingTime"
                type="number"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Difficulty</label>
              <select
                v-model="form.Difficulty"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option disabled value="">Select Difficulty</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Servings</label>
              <input
                v-model="form.Servings"
                type="number"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <!-- Video Link -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">YouTube Video Link</label>
              <input 
                type="url" 
                v-model="form.VideoLink" 
                placeholder="https://www.youtube.com/watch?v=..."
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <!-- Buttons -->
            <div class="col-span-3 flex justify-center mt-6">
              <button
                type="submit"
                class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md shadow-md"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "@/Layouts/frontend.vue";
import { ref } from "vue";
import { usePage } from '@inertiajs/vue3';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';  // Import SweetAlert2
import axios from 'axios';

// Props passed from the controller
const props = defineProps({
  recipe: Object,
});

// Initialize the form with recipe data
const form = ref({
    RecipeTitle: props.recipe.RecipeTitle,
    Description: props.recipe.Description,
    Ingredients: props.recipe.Ingredients,
    Instructions: props.recipe.Instructions,
    Preparation: props.recipe.Preparation,
    CookingTime: props.recipe.CookingTime,
    Difficulty: props.recipe.Difficulty,
    Servings: props.recipe.Servings,
    RecipePhoto: null,
    VideoLink: props.recipe.VideoLink || '',
});
const imagePreview = ref(props.recipe.RecipePhoto ? `/storage/${props.recipe.RecipePhoto}` : null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.RecipePhoto = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};

const submitForm = async () => {
    try {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to update this recipe?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'No, cancel!',
            background: 'rgba(255, 255, 255, 1)', // White background for clarity
            confirmButtonColor: 'rgba(204, 162, 35, 1)', // Golden Yellow for confirm button
            cancelButtonColor: 'rgba(54, 69, 79, 1)', // Charcoal Gray for cancel button to provide contrast
            iconColor: 'rgba(255, 219, 99, 1)', // Golden yellow for icon color for consistency
            customClass: {
                popup: 'swal-popup', // Add a custom class for further styling if needed
            },
        });

        if (result.isConfirmed) {
            const formData = new FormData();
            
            // Append all form fields to FormData
            Object.keys(form.value).forEach(key => {
                if (form.value[key] !== null && form.value[key] !== undefined) {
                    if (key === 'RecipePhoto' && form.value[key] instanceof File) {
                        formData.append(key, form.value[key]);
                    } else if (key !== 'RecipePhoto') {
                        formData.append(key, form.value[key]);
                    }
                }
            });

            await axios.post(`/chef/dashboard/recipes/${props.recipe.RecipeID}/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-HTTP-Method-Override': 'PUT'
                }
            });

            // Show success message
            await Swal.fire({
                title: 'Success!',
                text: 'Recipe updated successfully',
                icon: 'success',
                confirmButtonColor: 'rgba(204, 162, 35, 1)',
            });

            // Redirect to dashboard
            window.location.href = '/chef/dashboard';
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
            title: 'Error!',
            text: error.response?.data?.error || 'Failed to update recipe',
            icon: 'error',
            confirmButtonColor: 'rgba(204, 162, 35, 1)',
        });
    }
};

</script>


<style scoped>
/* Add your custom styles here */
</style>
