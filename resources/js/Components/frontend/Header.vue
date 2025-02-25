<template>
  <header class="bg-white text-black-100 font-sans shadow-md">
    <div class="bg-yellow-300 h-[30px]"></div>
    <div class="container mx-auto px-4 flex justify-between items-center h-[113px]">
      <a href="/" class="flex items-center space-x-4 text-normal white-shadow">
        <img :src="logo" alt="Logo" class="h-20" />
        <span>Kusina Delights</span>
      </a>

      <nav class="hidden md:flex space-x-6 font-bold text-normal">
        <a href="/" class="hover:text-gray-500">Home</a>
        <a href="/allrecipes" class="hover:text-gray-500">Recipes</a>
        <a href="/aboutus" class="hover:text-gray-500">About Us</a>
      </nav>

      <!-- Centered Login/Sign Up & Search Bar Section -->
      <div class="flex flex-col items-center space-y-2">
        <!-- Authenticated user dropdown -->
        <div v-if="$page.props.auth.user" class="relative text-center">
          <button 
            @click="toggleUserDropdown" 
            class="flex items-center space-x-2 text-sm font-bold text-small hover:text-gray-500 focus:outline-none"
          >
            <span>Hello, {{ $page.props.auth.user.name }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- User Dropdown Menu -->
          <div 
            v-if="userDropdownOpen" 
            class="absolute right-0.5 left-0.5 mt-2 w-45 bg-white border border-gray-200 rounded shadow-lg z-50"
          >
          
            <a href="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
            <button 
              @click="logout" 
              class="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
            >
              Logout
            </button>
          </div>
        </div>

        <!-- Login/Sign Up links for unauthenticated users -->
        <div v-else class="flex space-x-4 text-sm font-bold text-small">
          <a href="/login" class="hover:text-gray-500">Login</a>
          <span>|</span>
          <a href="/register" class="hover:text-gray-500">Sign Up</a>
        </div>

        <!-- Recipe Search Bar -->
        <div class="relative flex items-center bg-gray-100 border border-gray-300 rounded-3xl px-2 py-2">
          <input
            v-model="searchQuery"
            @input="fetchRecipes"
            @focus="toggleRecipeDropdown(true)"
            type="text"
            placeholder="Search recipes..."
            class="text-small px-2 w-40 bg-transparent outline-none focus:outline-none focus:ring-0 border-none placeholder-gray-500"
          />
          <button class="text-gray-600 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
              <circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="2" />
              <line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>

          <!-- Recipe Dropdown Menu -->
          <div
            v-if="recipes.length && recipeDropdownOpen"
            class="absolute w-[28vh] bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-72 overflow-y-auto transition-all duration-300 ease-in-out"
            :style="{
              top: `${dropdownTopPosition}px`,
              left: '2vh',
            }"
          >
            <a
              v-for="recipe in filteredRecipes"
              :key="recipe.RecipeID"
              :href="`/api/recipes/${recipe.RecipeID}`"
              class="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 ease-in-out flex items-center space-x-4"
            >
              <!-- Display the recipe photo if it exists -->
              <img
                v-if="recipe.RecipePhoto"
                :src="recipe.RecipePhoto"
                alt="Recipe Image"
                class="h-10 w-10 object-cover rounded-full"
              />
              <span>{{ recipe.RecipeTitle }}</span>
            </a>
          </div>


        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from 'axios';
import { debounce } from 'lodash'; // Import lodash debounce function

export default {
  data() {
    return {
      logo: '/storage/logo3.png',
      searchQuery: '',
      recipes: [],
      userDropdownOpen: false,
      recipeDropdownOpen: false,
      dropdownTopPosition: 0,
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes.filter((recipe) =>
        recipe.RecipeTitle.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    searchQuery: 'debouncedFetchRecipes',
  },
  methods: {
    toggleUserDropdown() {
      this.userDropdownOpen = !this.userDropdownOpen;
    },
    closeUserDropdown() {
      this.userDropdownOpen = false;
    },
    toggleRecipeDropdown(state) {
      this.recipeDropdownOpen = state;
      this.updateDropdownPosition();
    },
    closeRecipeDropdown() {
      this.recipeDropdownOpen = false;
    },
    handleClickOutside(event) {
      // Check if the click is outside the dropdown or related buttons
      const dropdown = this.$el.querySelector('.relative.text-center');
      const searchDropdown = this.$el.querySelector('.relative.flex.items-center');

      if (dropdown && !dropdown.contains(event.target)) {
        this.closeUserDropdown();
      }
      if (searchDropdown && !searchDropdown.contains(event.target)) {
        this.closeRecipeDropdown();
      }
    },
    logout() {
      this.$inertia.post('/logout');
    },
    async fetchRecipes(query) {
      const trimmedQuery = query.trim();
      if (!trimmedQuery) {
        this.recipes = [];
        this.toggleRecipeDropdown(false);
        return;
      }

      try {
        const { data } = await axios.get('/api/recipes', {
          params: { search: trimmedQuery },
        });
        this.recipes = data;
        this.toggleRecipeDropdown(data.length > 0);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        this.toggleRecipeDropdown(false);
      }
    },
    debouncedFetchRecipes: debounce(function (query) {
      this.fetchRecipes(query);
    }, 300),
    updateDropdownPosition() {
      const inputElement = this.$el.querySelector('input');
      if (inputElement) {
        const inputRect = inputElement.getBoundingClientRect();
        this.dropdownTopPosition = inputRect.bottom + window.scrollY - 65;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};

</script>
