<template>
  <Layout>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-semibold text-center mb-6">Edit User</h1>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div class="grid grid-cols-2 gap-6">
        <!-- User Details -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input v-model="form.name" id="name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="form.email" id="email" type="email" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="form.password" id="password" type="password" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" />
        </div>

        <div class="mb-4">
          <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input v-model="form.password_confirmation" id="password_confirmation" type="password" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" />
        </div>

        <div class="mb-4">
          <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
          <select v-model="form.role" id="role" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required>
            <option value="admin">Admin</option>
            <option value="chef">Chef</option>
            <option value="user">User</option>
          </select>
        </div>

        <!-- Profile Details -->
        <div class="mb-4">
          <label for="first_name" class="block text-sm font-medium text-gray-700">First Name</label>
          <input v-model="form.profile.first_name" id="first_name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
        </div>

        <div class="mb-4">
          <label for="last_name" class="block text-sm font-medium text-gray-700">Last Name</label>
          <input v-model="form.profile.last_name" id="last_name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
        </div>

        <div class="mb-4">
          <label for="middle_name" class="block text-sm font-medium text-gray-700">Middle Name</label>
          <input v-model="form.profile.middle_name" id="middle_name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" />
        </div>

        <div class="mb-4">
          <label for="introduction" class="block text-sm font-medium text-gray-700">Introduction</label>
          <textarea v-model="form.profile.introduction" id="introduction" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"></textarea>
        </div>

        <div class="mb-4">
          <label for="profile_image" class="block text-sm font-medium text-gray-700">Profile Image</label>
          <input ref="profile_image" @change="handleImageChange" id="profile_image" type="file" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" />
          <div v-if="form.profile.profile_image" class="mt-2">
            <img :src="form.profile.profile_image" alt="Profile Image" class="w-20 h-20 rounded-full object-cover" />
          </div>
        </div>

        <!-- Chef Details (Only visible if role is 'chef') -->
        <div v-if="form.role === 'chef'" class="mb-4">
          <label for="income" class="block text-sm font-medium text-gray-700">Income</label>
          <input v-model="form.chef.income" id="income" type="number" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" />
        </div>

        <div class="col-span-2 flex justify-center space-x-6 mt-6">
          <button type="submit" class="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500">Update User</button>
        </div>
      </div>
    </form>
  </div>
  </Layout>
</template>


<script setup>
import { router } from '@inertiajs/vue3';
import Layout from '../../Layouts/backend.vue';
import { watch } from 'vue';
import { ref, onMounted } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import Swal from 'sweetalert2'; // Import SweetAlert2

const props = defineProps({
  user: Object,
});

// Ensure profile exists even if it's undefined
const profile = props.user.profile || { 
  first_name: '', 
  last_name: '', 
  middle_name: '', 
  introduction: '', 
  profile_image: '' 
};

const form = useForm({
  name: props.user.name,
  email: props.user.email,
  password: '',
  password_confirmation: '',
  role: props.user.Roles,
  profile: {
    first_name: profile.FirstName,
    last_name: profile.LastName,
    middle_name: profile.MiddleName,
    introduction: profile.Introduction,
    profile_image: profile.ProfileImage ? route('storage', profile.ProfileImage) : null,
  },
  chef: {
    income: props.user.chef ? props.user.chef.Income : 0,
  },
});

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      form.profile.profile_image = reader.result; // Base64 string
    };
    reader.readAsDataURL(file);
  }
};

const submitForm = async () => {
  try {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to update this user\'s information?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, cancel!',
      background: 'rgba(255, 255, 255, 1)', // White background for clarity
      confirmButtonColor: 'rgba(204, 162, 35, 1)', // Golden Yellow for confirm button
      cancelButtonColor: 'rgba(54, 69, 79, 1)', // Charcoal Gray for cancel button to provide contrast
      iconColor: 'rgba(255, 219, 99, 1)', // Golden yellow for icon color for consistency
    });

    if (result.isConfirmed) {
      form.put(route('users.update', props.user.id), {
        preserveScroll: true,
        onSuccess: () => {
          Swal.fire({
            title: 'Success!',
            text: 'User updated successfully.',
            icon: 'success',
            confirmButtonText: 'Okay',
          });
        },
        onError: (errors) => {
          console.error(errors);
          Swal.fire({
            title: 'Error!',
            text: 'There was an error updating the user.',
            icon: 'error',
            confirmButtonText: 'Try Again',
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Cancelled',
        text: 'No changes were made.',
        icon: 'info',
        confirmButtonText: 'Okay',
      });
    }
  } catch (error) {
    console.error('Error submitting form:', error);

    // Show error alert if something goes wrong
    Swal.fire({
      title: 'Error!',
      text: 'There was an issue with your submission. Please try again.',
      icon: 'error',
      confirmButtonText: 'Okay',
    });
  }
};

watch(
  () => form.role,
  async (newRole, oldRole) => {
    if (oldRole === 'chef' && (newRole === 'admin' || newRole === 'user')) {
      // SweetAlert2 confirmation for role change
      const confirmed = await Swal.fire({
        title: `Changing role from Chef to ${newRole}`,
        text: `This will delete all chef-related data for this user. Do you want to proceed?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, proceed!',
        cancelButtonText: 'No, go back!',
        background: 'rgba(255, 255, 255, 1)', // White background for clarity
        confirmButtonColor: 'rgba(204, 162, 35, 1)', // Golden Yellow for confirm button
        cancelButtonColor: 'rgba(54, 69, 79, 1)', // Charcoal Gray for cancel button
        iconColor: 'rgba(255, 219, 99, 1)', // Golden yellow for icon color
      });

      if (!confirmed.isConfirmed) {
        form.role = oldRole; // Revert role if not confirmed
      }
    }
  }
);
</script>
