<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import { ref } from 'vue'; // import ref for state management
import { Link } from '@inertiajs/vue3';

const isOpen = ref(false); // state to track if the dropdown is open
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
    <header>
        <!-- Primary Navigation Menu -->
        <div class="mx-auto max-w-7xl mb-10">
            <div class="flex h-16 justify-between">
                <div class="flex">
                    <!-- Logo -->
                    <div class="flex shrink-0 items-center">
                        <Link :href="route('dashboard')">

                        </Link>
                    </div>
                </div>

                <div class="hidden sm:ms-6 sm:flex sm:items-center">
                    <!-- Settings Dropdown -->
                    <div class="relative ms-3">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <span class="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-lg font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                        @click="toggleDropdown"
                                    >
                                        <!-- Username -->
                                        <span class="mr-2">{{ $page.props.auth.user.name }}</span>
                                        <!-- Arrow icon that changes based on dropdown state -->
                                        <svg :class="{'rotate-180': isOpen}" class="transition-transform duration-300 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                                <DropdownLink :href="route('home')" class="hover:text-gray-500">Home</DropdownLink>

                                <DropdownLink
                                    :href="route('logout')"
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </DropdownLink>
                            </template>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* Optional: Add some additional styling for a smoother transition of the arrow */
.transition-transform {
    transition: transform 0.3s ease;
}
</style>
