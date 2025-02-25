<script setup>
import Layout from '../Layouts/backend.vue';
import { onMounted } from 'vue';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    BarController,
    LineController
} from 'chart.js';
import { 
    UsersIcon, 
    BookOpenIcon, 
    StarIcon, 
    UserGroupIcon, 
    ChartBarIcon 
} from '@heroicons/vue/24/outline';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    BarController,
    LineController,
    Title,
    Tooltip,
    Legend
);

// Define props
const props = defineProps({
    totalUsers: Number,
    totalPosts: Number,
    totalReviews: Number,
    totalChefs: Number,
    totalViews: Number,
    usersPerDay: Array,
    viewsPerDay: Array,
});

// Function to draw the users chart
const drawUsersChart = () => {
    const ctx = document.getElementById('usersChart').getContext('2d');
    new ChartJS(ctx, {
        type: 'bar',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: 'Total Users per Day',
                data: props.usersPerDay,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

// Function to draw the views chart
const drawViewsChart = () => {
    const ctx = document.getElementById('viewsChart').getContext('2d');
    new ChartJS(ctx, {
        type: 'line',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: 'Recipe Views per Day',
                data: props.viewsPerDay,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

onMounted(() => {
    drawUsersChart();
    drawViewsChart();
});
</script>

<template>
    <Layout>
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 mb-6">
            <!-- Total Users -->
            <div class="p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div class="flex items-center gap-4 mb-2">
                    <UsersIcon class="h-6 w-6 text-orange-500" />
                    <p class="text-sm text-gray-500">Total Users</p>
                </div>
                <p class="text-2xl font-bold text-gray-800">{{ totalUsers }}</p>
            </div>

            <!-- Posts -->
            <div class="p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div class="flex items-center gap-4 mb-2">
                    <BookOpenIcon class="h-6 w-6 text-blue-500" />
                    <p class="text-sm text-gray-500">Total Recipes</p>
                </div>
                <p class="text-2xl font-bold text-gray-800">{{ totalPosts }}</p>
            </div>

            <!-- Reviews -->
            <div class="p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div class="flex items-center gap-4 mb-2">
                    <StarIcon class="h-6 w-6 text-yellow-500" />
                    <p class="text-sm text-gray-500">Total Reviews</p>
                </div>
                <p class="text-2xl font-bold text-gray-800">{{ totalReviews }}</p>
            </div>

            <!-- Chefs -->
            <div class="p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div class="flex items-center gap-4 mb-2">
                    <UserGroupIcon class="h-6 w-6 text-green-500" />
                    <p class="text-sm text-gray-500">Total Chefs</p>
                </div>
                <p class="text-2xl font-bold text-gray-800">{{ totalChefs }}</p>
            </div>

            <!-- Views -->
            <div class="p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div class="flex items-center gap-4 mb-2">
                    <ChartBarIcon class="h-6 w-6 text-purple-500" />
                    <p class="text-sm text-gray-500">Total Views</p>
                </div>
                <p class="text-2xl font-bold text-gray-800">{{ totalViews }}</p>
            </div>
        </div>

        <!-- Graphs -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Users Graph -->
            <div class="p-6 bg-white rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold text-gray-800">Users Per Day of the Week</h3>
                <canvas id="usersChart" height="200"></canvas>
            </div>

            <!-- Views Graph -->
            <div class="p-6 bg-white rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold text-gray-800">Recipe Views Per Day of the Week</h3>
                <canvas id="viewsChart" height="200"></canvas>
            </div>
        </div>
    </Layout>
</template>
