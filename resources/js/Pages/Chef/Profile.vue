<template>
    <Layout>
      <div class="relative overflow-hidden">
        <!-- Blurred Background -->
        <div class="absolute inset-0 -m-[20px]">
          <div
            class="absolute inset-0 bg-cover bg-center"
            style="background-image: url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png'); filter: brightness(0.3) blur(20px);"
          ></div>
        </div>
  
        <!-- Main Content -->
        <div class="flex items-center justify-center h-full relative px-12 sm:px-16 lg:px-20 mt-10  mb-10">
          <div class="bg-white w-full max-w-[1600px] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg flex gap-12">
            <!-- Profile Card -->
            <div
              class="bg-yellow-300 w-full h-[80vh] sm:w-1/3 p-12 rounded-[2rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative"
            >
              <div class="absolute top-6 right-6 text-black-100 cursor-pointer">
                <a href="/profile/edit">
                  <i class="fas fa-pen text-4xl"></i>
                </a>
              </div>
              <div class="flex flex-col items-center">
                <img
                  :src="user.ProfileImage ? `/storage/${user.ProfileImage}` : 'https://via.placeholder.com/403x212'"
                  alt="Profile Image"
                  class="w-48 h-48 rounded-full object-cover shadow-md"
                />
                <p class="text-center mt-8 font-semibold text-2xl">{{ user.name }}</p>
                <div class="mt-10 border-t-4 border-black-100 w-full"></div>
                <div class="w-full mt-6 pl-6 text-left space-y-2">
                  <p class="text-small text-black">
                    <span class="font-medium font-semibold text-black">Email:</span> {{ user.email }}
                  </p>
                  <p class="text-small text-black">
                    <span class="font-medium font-semibold text-black">Date Joined:</span> {{ user.date_joined }}
                  </p>
                </div>
              </div>

              <!-- Buttons Container -->
              <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4">
                <!-- Admin Dashboard - Show only for admins -->
                <a
                  v-if="user.role === 'admin'"
                  href="/dashboard"
                  class="w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"
                >
                  Admin Dashboard
                </a>

                <!-- Chef Dashboard - Show only for chefs -->
                <a
                  v-if="user.role === 'chef'"
                  href="/chef/dashboard"
                  class="w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"
                >
                  Chef Dashboard
                </a>

                <!-- Apply to be Chef button - Show only for regular users -->
                <button
                  v-if="user.role === 'user'"
                  @click="showModal = true"
                  class="w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"
                >
                  Apply to be a Chef
                </button>

                <!-- Logout - Show for all users -->
                <button
                  @click="logout"
                  class="w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"
                >
                  Logout
                </button>
              </div>
            </div>

            <!-- Bio and History Section -->
            <div class="flex flex-col w-full sm:w-2/3 gap-12">
              <!-- Bio Section -->
              <div class="bg-yellow-300 p-10 rounded-lg shadow-md relative rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
                <div class="absolute top-6 right-6 text-black-100 cursor-pointer" @click="toggleEdit">
                  <i class="fas fa-pen text-3xl"></i>
                </div>
                <h2 class="font-semibold text-2xl mb-4">Bio:</h2>
                <div v-if="isEditing">
                  <input
                    v-model="newIntroduction"
                    type="text"
                    class="border p-2 rounded-md w-full"
                    placeholder="Enter your introduction"
                  />
                  <button @click="saveIntroduction" class="bg-green-300 text-black p-2 rounded-md mt-2">Save</button>
                </div>
                <div v-else>
                  <p class="text-small italic text-black-100">
                    <span class="font-semibold"></span> {{ profile.introduction }}
                  </p>
                </div>
              </div>

              <!-- History Section -->
              <div class="bg-yellow-300 p-10 rounded-lg shadow-md rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
                <h2 class="font-semibold text-3xl text-black-100 mb-8 border-b-2 border-black-100 pb-4">Review History:</h2>
                <!-- Review Section (adjusted) -->
                <ul class="space-y-8">
                  <li v-if="reviews.length === 0" class="text-sm text-black-100">
                    No reviews yet.
                  </li>
                  <li v-else v-for="(review, index) in reviews" :key="index" class="flex items-start gap-6 transition-transform transform hover:scale-105">
                    <!-- Recipe Image -->
                    <img
                      :src="review.RecipePhoto ? `/storage/${review.RecipePhoto}` : 'https://via.placeholder.com/403x212'"
                      alt="Recipe Image"
                      class="w-24 h-24 rounded-md object-cover shadow-md border-2 border-yellow-500"
                    />
                    <!-- Review Content -->
                    <div class="w-full">
                      <div class="flex justify-between mb-4">
                        <div class="w-2/4">
                          <div class="font-semibold text-lg text-black-100 mb-2">Recipe Title: {{ review.title }}</div>
                          <p class="text-black-100 italic text-small mb-4">Comment: {{ review.comment }}</p>
                        </div>
                        <div class="flex flex-col items-end w-2/4 gap-4">
                          <a
                            :href="`/api/recipes/${review.recipe_id}`"
                            class="px-6 py-2 bg-yellow-400 text-black-100 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                          >
                            View Recipe
                          </a>
                          <div class="flex items-center gap-1 text-yellow-400">
                            <p class="text-black-100 text-sm">Star rating:</p>
                            <template v-for="star in 5">
                              <i
                                v-if="star <= review.stars"
                                class="fa fa-star w-5 h-5 text-yellow-500"
                                style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
                                aria-hidden="true"
                              ></i>
                              <i
                                v-else
                                class="fa fa-star w-5 h-5 text-black-100"
                                style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
                                aria-hidden="true"
                              ></i>
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- Pagination Controls -->
                <div v-if="reviews.links && reviews.links.length > 0" class="flex justify-center mt-8 space-x-4">
                  <button
                    v-for="(link, index) in reviews.links"
                    :key="index"
                    :class="['px-4 py-2 rounded-md', link.active ? 'bg-yellow-400 text-black' : 'bg-white text-black']"
                    @click="changePage(link.url)"
                    v-html="link.label"
                  ></button>
                </div>
              </div>
            </div>

            
          </div>

          <!-- Modal -->
<!-- Modal -->
<div
  v-if="showModal"
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
>
  <div
    class="bg-gradient-to-r from-yellow-200 to-yellow-300 w-full max-w-lg p-10 rounded-2xl shadow-3xl relative"
  >
    <!-- Close Button -->
    <button
      @click="showModal = false"
      class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all"
      aria-label="Close Modal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Logo Image (Centered and Larger) -->
    <div class="flex justify-center mb-8">
      <img :src="logo" alt="Logo" class="h-36 w-36 object-contain shadow-lg rounded-full" />
    </div>

    <!-- Title -->
    <h2 class="text-3xl font-extrabold text-gray-800 mb-8 text-center">
      Apply to Be a Chef
    </h2>
    <p><strong>User ID:</strong> {{ user.id }}</p>
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>

    <!-- Form -->
    <form @submit.prevent="submitApplication">
      <!-- Message Field -->
      <div class="mb-8">
        <label
          for="message"
          class="block text-sm font-semibold text-gray-700 mb-3"
        >
          Message:
        </label>
        <textarea
          id="message"
          v-model="message"
          class="w-full border-2 border-yellow-500 rounded-lg p-4 text-gray-800 focus:ring-4 focus:ring-yellow-500 focus:outline-none resize-none transition-all"
          placeholder="Write your application message here..."
          rows="6"
          required
        ></textarea>
      </div>

      <!-- File Upload -->
      <div class="mb-8">
        <label
          for="files"
          class="block text-sm font-semibold text-gray-700 mb-3"
        >
          Upload Files:
        </label>
        <input
          id="files"
          type="file"
          @change="handleFileUpload"
          multiple
          class="w-full border-2 border-yellow-500 rounded-lg p-4 text-gray-800 focus:ring-4 focus:ring-yellow-500 focus:outline-none transition-all"
        />
      </div>

      <!-- Buttons -->
      <div class="flex justify-between gap-6">
        <button
          type="button"
          @click="showModal = false"
          class="w-full py-4 px-6 bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="w-full py-4 px-6 bg-yellow-500 text-white rounded-lg text-sm font-semibold hover:bg-yellow-600 shadow-2xl transition-all"
        >
          Submit Application
        </button>
      </div>
    </form>
  </div>
</div>





          <div v-if="isSubmitting" class="flex items-center justify-center">
            <div class="spinner">Loading...</div>
          </div>

        </div>
      </div>
    </Layout>
  </template>
  
  <script setup>
  import { reactive, ref } from "vue";
  import Layout from "@/Layouts/frontend.vue";
  import { usePage } from "@inertiajs/vue3";
  import Swal from "sweetalert2"; // Import SweetAlert2
  
  const logo = '/storage/logo3.png';
  const { props } = usePage();
  const user = reactive({
    ...props.user,
    role: props.user.role
  });
  const profile = reactive(props.profile);
  const reviews = reactive(props.reviews);
  
  // Define states for editing introduction
  const isEditing = ref(false);
  const newIntroduction = ref(profile.introduction);
  
  // Method to toggle editing
  function toggleEdit() {
    isEditing.value = !isEditing.value;
  }

  function changePage(url) {
  if (url) {
    axios
      .get(url)
      .then((response) => {
        if (response.data && response.data.data) {
          reviews.data = response.data.data; // Update reviews data
          reviews.links = response.data.links; // Update pagination links
        } else {
          console.error("Unexpected response structure:", response);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to fetch data. Please try again later.",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load the next page.",
        });
      });
  } else {
    console.warn("Invalid URL passed to changePage method.");
  }
}

    
  // Method to save the introduction
  function saveIntroduction() {
    if (!newIntroduction.value.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Introduction cannot be empty.",
      });
      return;
    }
  
    isEditing.value = false;
    updateIntroduction(newIntroduction.value);
  }
  
  // Method to call the backend API to save the introduction
  function updateIntroduction(introduction) {
    Swal.fire({
      title: "Saving...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    axios
      .post("/update-introduction", { introduction })
      .then((response) => {
        profile.introduction = introduction;
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Your introduction has been updated.",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update your introduction. Please try again.",
        });
      });
  }
  
  function logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        this.$inertia.post("/logout");
      }
    });
  }
  
  const showModal = ref(false);
  const message = ref("");
  const files = ref([]);
  const isSubmitting = ref(false);
  
  const handleFileUpload = (event) => {
    files.value = Array.from(event.target.files);
  };
  
  const submitApplication = async () => {
    if (!message.value.trim() || files.value.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Message and at least one file are required.",
      });
      return;
    }
  
    const formData = new FormData();
    formData.append("message", message.value);
    formData.append("user_id", user.id);
    formData.append("user_name", user.name);
    formData.append("user_email", user.email);
  
    files.value.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });
  
    try {
      isSubmitting.value = true;
  
      Swal.fire({
        title: "Submitting...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
  
      const response = await axios.post("/apply-chef", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      Swal.fire({
        icon: "success",
        title: "Application Sent",
        text: response.data.message,
      });
      resetModal();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send application. Please try again.",
      });
    } finally {
      isSubmitting.value = false;
    }
  };
  
  const resetModal = () => {
    showModal.value = false;
    message.value = "";
    files.value = [];
  };
  </script>
  