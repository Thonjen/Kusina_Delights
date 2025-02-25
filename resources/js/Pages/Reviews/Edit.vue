<template>
  <Layout>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-3xl font-semibold text-gray-900 mb-6">Edit Review</h1>

      <form @submit.prevent="submit" class="grid grid-cols-2 gap-6">
        <div>
          <label for="user_id" class="block text-sm font-medium text-gray-700">User</label>
          <select v-model="form.user_id" id="user_id" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required>
            <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
          </select>
        </div>

        <div>
          <label for="recipe_id" class="block text-sm font-medium text-gray-700">Recipe</label>
          <select v-model="form.recipe_id" id="recipe_id" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required>
            <option v-for="recipe in recipes" :key="recipe.RecipeID" :value="recipe.RecipeID">{{ recipe.RecipeTitle }}</option>
          </select>
        </div>

        <div>
          <label for="Star" class="block text-sm font-medium text-gray-700">Star Rating</label>
          <input v-model="form.Star" type="number" id="Star" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" min="1" max="5" required />
        </div>

        <div>
          <label for="Review" class="block text-sm font-medium text-gray-700">Review</label>
          <textarea v-model="form.Review" id="Review" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"></textarea>
        </div>

        <div class="col-span-2 flex space-x-3 mt-6">
          <button type="submit" class="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500">Update Review</button>
          <InertiaLink :href="route('reviews.index')" class="inline-block px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300">Cancel</InertiaLink>
        </div>
      </form>
    </div>
  </Layout>
</template>


<script setup>
import Layout from '../../Layouts/backend.vue';
import { defineProps, reactive } from 'vue';
import { Inertia } from '@inertiajs/inertia'; // Import Inertia for handling the update request
import Swal from 'sweetalert2'; // Import SweetAlert2

const props = defineProps({
  review: Object,
  users: Array,
  recipes: Array,
});

const form = reactive({
  user_id: props.review.user_id,
  recipe_id: props.review.recipe_id,
  Star: props.review.Star,
  Review: props.review.Review,
});

// Submit review update method
const submit = async () => {
  // Show SweetAlert2 confirmation before submitting the review update
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Are you sure you want to update this review?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, update review!',
    cancelButtonText: 'No, cancel!',
    background: 'rgba(255, 255, 255, 1)', // White background for clarity
    confirmButtonColor: 'rgba(204, 162, 35, 1)', // Golden Yellow for confirm button
    cancelButtonColor: 'rgba(54, 69, 79, 1)', // Charcoal Gray for cancel button to provide contrast
    iconColor: 'rgba(255, 219, 99, 1)', // Golden yellow for icon color for consistency
  });

  if (result.isConfirmed) {
    try {
      // Submit the updated review if confirmed
      await Inertia.put(route('reviews.update', props.review.ReviewsID), form);
      // Show success alert if review is successfully updated
      Swal.fire({
        title: 'Success!',
        text: 'Your review has been updated.',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    } catch (error) {
      // Show error alert if there is an issue with the review update
      Swal.fire({
        title: 'Error!',
        text: 'There was an error updating your review.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  } else {
    // Show cancellation alert if the user cancels the update
    Swal.fire({
      title: 'Cancelled',
      text: 'Your review was not updated.',
      icon: 'info',
      confirmButtonText: 'Okay',
    });
  }
};
</script>
