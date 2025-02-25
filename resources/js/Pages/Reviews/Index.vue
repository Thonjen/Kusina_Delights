<template>
  <Layout>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Enhanced header section -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">All Reviews</h2>
        <InertiaLink 
          :href="'/reviews/create'" 
          class="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <span class="mr-2">+</span> New Review
        </InertiaLink>
      </div>

      <!-- Enhanced table section -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipe</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="review in reviews.data" :key="review.ReviewsID" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900">{{ review.user.name }}</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ review.recipe.RecipeTitle }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <!-- Enhanced star rating display -->
                  <div class="flex items-center">
                    <div class="flex">
                      <template v-for="n in 5" :key="n">
                        <svg
                          :class="[
                            'h-5 w-5',
                            n <= review.Star ? 'text-yellow-400' : 'text-gray-300'
                          ]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </template>
                    </div>
                    <span class="ml-2 text-sm text-gray-600">({{ review.Star }})</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex items-center justify-end space-x-4">
                    <InertiaLink
                      :href="route('reviews.show', review.ReviewsID)"
                      class="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                    >
                      View
                    </InertiaLink>
                    <InertiaLink
                      :href="route('reviews.edit', review.ReviewsID)"
                      class="text-orange-600 hover:text-orange-900 transition-colors duration-200"
                    >
                      Edit
                    </InertiaLink>
                    <button
                      @click="deleteReview(review.ReviewsID)"
                      class="text-red-600 hover:text-red-900 transition-colors duration-200"
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
import { InertiaLink } from '@inertiajs/inertia-vue3'; // Import InertiaLink for navigation
import { Inertia } from '@inertiajs/inertia';
import { defineProps } from 'vue';
import Layout from '../../Layouts/backend.vue';
import Swal from 'sweetalert2'; // Import SweetAlert2

const props = defineProps({
  reviews: Object,
});

// Delete review method with SweetAlert2 confirmation
const deleteReview = async (id) => {
  // Show SweetAlert2 confirmation before deleting the review
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
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
      await Inertia.delete(route('reviews.destroy', id));
      // Show success alert if the review is successfully deleted
      Swal.fire({
        title: 'Deleted!',
        text: 'The review has been deleted.',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    } catch (error) {
      // Show error alert if there is an issue with the deletion
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue deleting the review.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  } else {
    // Show cancellation alert if the user cancels the deletion
    Swal.fire({
      title: 'Cancelled',
      text: 'The review was not deleted.',
      icon: 'info',
      confirmButtonText: 'Okay',
    });
  }
};
</script>
