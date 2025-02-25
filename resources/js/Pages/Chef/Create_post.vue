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
          <h1 class="text-center text-large font-bold mb-10">Create Recipe</h1>

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

            <!-- Video Link -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Video Link</label>
              <input
                v-model="form.VideoLink"
                type="url"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
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
              <div
                class="w-full border border-dashed border-gray-300 rounded-md p-6 text-center text-lg text-gray-500 relative"
                @dragover.prevent="handleDragOver"
                @drop.prevent="handleDrop"
                @click="triggerFileInput"
                :class="{'bg-gray-100': isFileDragged}"
              >
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="handleFileChange"
                />
                <div v-if="imagePreview" class="mb-4">
                  <img :src="imagePreview" alt="Recipe Preview" class="w-full h-auto max-h-48 object-cover rounded-md" />
                </div>
                <span class="text-orange-500 cursor-pointer">Drag & Drop your image here or click to browse</span>
              </div>
            </div>

            <!-- Preparation Time -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Preparation Time (minutes)</label>
              <input
                v-model="form.Preparation"
                type="number"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <!-- Cooking Time -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Cooking Time (minutes)</label>
              <input
                v-model="form.CookingTime"
                type="number"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <!-- Difficulty -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Difficulty</label>
              <select
                v-model="form.Difficulty"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option>Select an option</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            <!-- Servings -->
            <div class="col-span-1">
              <label class="block text-lg font-semibold mb-2">Servings</label>
              <input
                v-model="form.Servings"
                type="number"
                class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <!-- Buttons -->
            <div class="col-span-3 flex justify-center mt-6">
              <button
                type="submit"
                class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md shadow-md mr-6"
              >
                Create
              </button>

              <a href="/chef/dashboard">
                <button
                  type="button"
                  class="bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-md shadow-md"
                >
                  Cancel
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { usePage } from '@inertiajs/inertia'; // Import usePage
import { ref } from 'vue';
import Swal from 'sweetalert2';

// Access CSRF token from the page props

// Form data
const form = ref({
  RecipeTitle: '',
  Description: '',
  Ingredients: '',
  VideoLink: '',
  Instructions: '',
  RecipePhoto: null,
  Preparation: null,
  CookingTime: null,
  Difficulty: '',
  Servings: null,
});

const imagePreview = ref(null);
const isFileDragged = ref(false);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.RecipePhoto = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};

const handleDragOver = () => {
  isFileDragged.value = true;
};

const handleDrop = (event) => {
  const file = event.dataTransfer.files[0];
  if (file) {
    form.value.RecipePhoto = file;
    imagePreview.value = URL.createObjectURL(file);
  }
  isFileDragged.value = false;
};

const triggerFileInput = () => {
  const input = document.querySelector("input[type='file']");
  input.click();
};

const submitForm = async () => {
  try {
    // Show confirmation dialog before proceeding
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, submit it!',
      cancelButtonText: 'No, cancel!',
      background: 'rgba(255, 255, 255, 1)', // White background for clarity
      confirmButtonColor: 'rgba(204, 162, 35, 1)', // Golden Yellow for confirm button
      cancelButtonColor: 'rgba(54, 69, 79, 1)', // Charcoal Gray for cancel button to provide contrast
      iconColor: 'rgba(255, 219, 99, 1)', // Golden yellow for icon color for consistency
      customClass: {
        popup: 'swal-popup', // Add a custom class for further styling if needed
      },
    });

    // If user clicks "Yes, submit it!", continue with form submission
    if (result.isConfirmed) {
      const formData = new FormData();
      formData.append('RecipeTitle', form.value.RecipeTitle);
      formData.append('Description', form.value.Description);
      formData.append('Ingredients', form.value.Ingredients);
      formData.append('VideoLink', form.value.VideoLink);
      formData.append('Instructions', form.value.Instructions);
      formData.append('Preparation', form.value.Preparation);
      formData.append('CookingTime', form.value.CookingTime);
      formData.append('Difficulty', form.value.Difficulty);
      formData.append('Servings', form.value.Servings);

      if (form.value.RecipePhoto) {
        formData.append('RecipePhoto', form.value.RecipePhoto);
      }

      const response = await axios.post('/chef/dashboard/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    } else {
      // If canceled, show a message (optional)
      Swal.fire({
        title: 'Cancelled',
        text: 'Your recipe submission has been cancelled.',
        icon: 'info',
        confirmButtonText: 'Okay',
      });
    }
  } catch (error) {
    console.error('Error creating recipe:', error);

    // Show error alert if something goes wrong
    Swal.fire({
      title: 'Error!',
      text: 'There was an issue creating your recipe. Please try again.',
      icon: 'error',
      confirmButtonText: 'Okay',
    });
  }
};

</script>



<style scoped>
/* Optional: Add custom styling for drag and drop feedback */
.bg-gray-100 {
  background-color: #f7fafc;
}
</style>
