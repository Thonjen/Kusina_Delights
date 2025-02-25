<template>
  <Layout>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header section -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">User Management</h2>
        <InertiaLink
          :href="'/users/create'"
          class="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <span class="mr-2">+</span> New User
        </InertiaLink>
      </div>

      <!-- Table section -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50 transition-colors duration-200">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ user.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ user.email }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <!-- Role badge with different colors based on role -->
                  <span 
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    :class="{
                      'bg-red-100 text-red-800': user.Roles === 'admin',
                      'bg-yellow-100 text-yellow-800': user.Roles === 'chef',
                      'bg-green-100 text-green-800': user.Roles === 'user'
                    }"
                  >
                    {{ user.Roles }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <div class="flex items-center justify-center space-x-4">
                    <InertiaLink
                      :href="`/users/${user.id}`"
                      class="text-blue-600 hover:text-blue-900"
                    >
                      View
                    </InertiaLink>
                    <InertiaLink
                      :href="`/users/${user.id}/edit`"
                      class="text-orange-600 hover:text-orange-900"
                    >
                      Edit
                    </InertiaLink>
                    <button
                      @click="submitDelete(user.id)"
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
import { defineProps } from 'vue';
import { InertiaLink } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import Layout from '../../Layouts/backend.vue';
import Swal from 'sweetalert2'; // Import SweetAlert2

const props = defineProps({
  users: Array,
});

const submitDelete = async (userId) => {
  // SweetAlert2 confirmation dialog
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

  // If confirmed, proceed with the deletion
  if (result.isConfirmed) {
    Inertia.delete(`/users/${userId}`);
    Swal.fire({
      title: 'Deleted!',
      text: 'User has been deleted.',
      icon: 'success',
      confirmButtonText: 'Okay',
    });
  } else {
    Swal.fire({
      title: 'Cancelled',
      text: 'User deletion was cancelled.',
      icon: 'info',
      confirmButtonText: 'Okay',
    });
  }
};
</script>

