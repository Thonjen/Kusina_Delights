<template>
  <Layout>
    <div class="relative overflow-hidden">
      <!-- Wrapper for blurred background -->
      <div class="absolute inset-0 -m-[20px]">
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png'); filter: brightness(0.3) blur(20px);"
        ></div>
      </div>

      <!-- Main content -->
      <div class="flex items-center justify-center h-full relative px-8 sm:px-12 lg:px-16 mt-10  mb-10">
        <div class="bg-white w-full max-w-[1400px] p-10 sm:p-16 lg:p-20 rounded-2xl shadow-lg flex gap-10 flex-wrap lg:flex-nowrap">
          <!-- Profile Card -->
          <div class="bg-yellow-300 flex-1 h-[600px] p-10 rounded-[2rem] shadow-md relative">
            <div class="absolute top-4 right-4 text-gray-600 cursor-pointer">
              <a href="/profile">
                <i class="fas fa-pen text-2xl"></i>
              </a>
            </div>
            <div class="flex flex-col items-center">
              <!-- Profile Picture -->
              <div class="relative w-48 h-48 rounded-full shadow-md bg-gray-200 overflow-hidden">
                <label for="profile_picture" class="cursor-pointer w-full h-full block">
                  <!-- Profile Image -->
                  <img
                    v-if="profileImage"
                    :src="profileImage"
                    alt="Profile Picture"
                    class="w-full h-full object-cover"
                  />
                  <!-- Placeholder Icon -->
                  <i
                    v-else
                    class="fas fa-user text-8xl text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  ></i>
                </label>
                <!-- Hidden File Input -->
                <input
                  v-if="editMode"
                  type="file"
                  id="profile_picture"
                  class="hidden"
                  accept="image/*"
                  @change="updateProfilePicture"
                />
                
              </div>

              <div class="mt-6 w-full border-t-4 border-black-100"></div>
              <p class="text-center mt-6 font-semibold text-2xl">{{ profileData.name || 'N/A' }}</p>
              <div class="w-full text-left mt-4 pl-4">
                <p class="text-sm font-medium">Email: {{ profileData.email || 'N/A' }}</p>
                <p class="text-sm font-medium">Date Joined: {{ profileData.date_joined || 'N/A' }}</p>
              </div>
              <a href="/profile" class="text-blue-500">Go Back</a>
            </div>

          </div>

          <!-- Account Section -->
          <div class="bg-yellow-300 flex-[2] p-8 sm:p-12 rounded-2xl shadow-lg relative">
            <!-- Edit Icon -->
            <div class="absolute top-4 right-4 text-gray-600 cursor-pointer">
              <button
                class=""
                @click="toggleEditMode"
              >
                {{ editMode ? 'Save' : 'Edit' }}
                <i :class="editMode ? 'fa-solid fa-floppy-disk' : 'fas fa-pen'" class="text-2xl mr-2 transition-all duration-300 text-normal"></i>
                
              </button>


            </div>
            <h2 class="font-semibold text-2xl mb-8 text-center text-gray-800">Account</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <!-- Account Fields -->
              <div v-for="field in accountFields" :key="field.id" class="space-y-4">
                <label :for="field.id" class="block text-sm font-bold text-gray-700">{{ field.label }}</label>
                <div class="relative">
                  <!-- View Mode (Non-Editable) -->
                  <div v-if="!editMode" class="w-full p-4 rounded-lg text-gray-800 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all duration-200 ease-in-out">
                    <p class="text-sm text-gray-600">{{ field.value || field.placeholder }}</p>
                  </div>
                  <!-- Edit Mode (Editable) -->
                  <input
                    v-else
                    :id="field.id"
                    :type="field.type"
                    v-model="field.value"
                    :placeholder="field.placeholder"
                    class="w-full border border-gray-300 p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out"
                  />
                  <!-- Additional input for password confirmation -->
                  <div v-if="editMode && field.id === 'password'" class="relative mt-4">
                    <label for="confirm_password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                      v-model="confirmPassword"
                      id="confirm_password"
                      type="password"
                      placeholder="Confirm Password"
                      class="w-full border border-gray-300 p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
            
          </div>



        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "@/Layouts/frontend.vue";

const profileImage = ref(null);
const editMode = ref(false);
const accountFields = ref([]);
const confirmPassword = ref('');
const profileData = ref({});

// Fetch user profile details
const fetchProfile = async () => {
  try {
    const response = await axios.get('/api/profile');
    const { user, profile } = response.data;

    profileData.value = {
      name: user.name,
      email: user.email,
      date_joined: user.created_at,
    };

    accountFields.value = [
      { id: 'first_name', label: 'First Name', type: 'text', value: profile.first_name, placeholder: 'John' },
      { id: 'last_name', label: 'Last Name', type: 'text', value: profile.last_name, placeholder: 'Doe' },
      { id: 'name', label: 'Username', type: 'text', value: user.name, placeholder: 'johndoe123' },
      { id: 'email', label: 'Email', type: 'email', value: user.email, placeholder: 'john.doe@example.com' },
      { id: 'password', label: 'Password', type: 'password', value: '', placeholder: '**************' },
    ];

    profileImage.value = user.ProfileImage ? `/storage/${user.ProfileImage}` : null;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error fetching profile data!',
    });
  }
};

// Save profile updates
const saveProfile = async () => {
  try {
    const payload = accountFields.value.reduce((acc, field) => {
      acc[field.id] = field.value;
      return acc;
    }, {});

    payload.password_confirmation = confirmPassword.value;

    await axios.post('/profile/update', payload);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Profile updated successfully.',
    });
    editMode.value = false;
    fetchProfile();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Failed to update profile.',
    });
  }
};

// Toggle edit mode
const toggleEditMode = () => {
  if (editMode.value) {
    saveProfile();
  } else {
    editMode.value = true;
  }
};

// Update Profile Picture (within the same updateProfile function)
const updateProfilePicture = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('ProfileImage', file);  // Append the image to the form data
    formData.append('first_name', accountFields.value[0].value);  // Append other form fields
    formData.append('last_name', accountFields.value[1].value);
    formData.append('name', accountFields.value[2].value);
    formData.append('email', accountFields.value[3].value);

    try {
      const response = await axios.post('/profile/update', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      profileImage.value = `/storage/${response.data.ProfileImage}`; // Update profile image URL
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Profile picture updated successfully.',
      });
      editMode.value = false;
      fetchProfile();  // Re-fetch the profile data
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update profile picture.',
      });
    }
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'No file selected',
      text: 'Please select an image to upload.',
    });
  }
};

// Initialize data
onMounted(fetchProfile);
</script>


<style scoped>
input::placeholder {
  color: #aaa;
}
</style>
