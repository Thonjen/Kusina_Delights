<template>
    <Layout>
        <!-- Background Image -->
        <div class="relative h-[362px]">
            <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: 'url(\'/storage/' + recipe.RecipePhoto + '\')', filter: 'brightness(0.7)' }"></div>
            <div class="flex items-center justify-center h-full relative">
                <p class="text-white text-center px-4 text-large font-bold drop-shadow-xl white-shadow">
                    {{ recipe.RecipeTitle }}
                </p>
                <!-- View Count -->
                <div class="absolute bottom-4 right-4 text-white text-lg bg-black opacity-70 px-4 py-2 rounded-full">
                    Views: {{ viewCount }}
                </div>
            </div>
        </div>


        

        <!-- Recipe Details Section -->
        <div class="mx-auto text-left max-w-4xl my-4 text-small text-black-100 space-y-2">
            <!-- Ingredients -->
            <div>
                <p class="text-small font-bold">Ingredients</p>

                <ul class="list-disc pl-5">
                    <li v-for="(ingredient, index) in recipe.Ingredients.split('\n')" :key="index">
                        {{ ingredient.trim() }}
                    </li>
                </ul>
            </div>
            <br>
            <!-- Instructions -->
            <div>
                <p class="text-small font-bold">How To Prepare</p>
   
                <ol class="list-decimal pl-5 space-y-2 text-justify">
                    <li v-for="(step, index) in recipe.Instructions.split('\n')" :key="index">
                        {{ step.trim() }}
                    </li>
                </ol>
            </div>
            <br>
            <!-- Additional Information -->
            <div>
                <p class="font-bold space-y-2">Additional Information:</p>
                <p><strong>Preparation Time:</strong> {{ recipe.Preparation || 'N/A' }} minutes</p>
                <p><strong>Cooking Time:</strong> {{ recipe.CookingTime || 'N/A' }} minutes</p>
                <p><strong>Difficulty:</strong> {{ recipe.Difficulty || 'N/A' }}</p>
                <p><strong>Servings:</strong> {{ recipe.Servings || 'N/A' }}</p>
                <p><strong>Recipe By:</strong> {{ recipe.chef?.user?.name || 'Unknown' }}</p>
            </div>
            <br>
            <!-- Description -->
            <div>
                <p class="font-bold">Description</p>
                <p class="text-justify">{{ recipe.Description }}</p>
            </div>
        </div>

        <!-- Video Section -->
        <div v-if="recipe.VideoLink" class="mx-auto text-left max-w-4xl my-8">
            <p class="text-small font-bold mb-4">Video Tutorial</p>
            <div class="aspect-w-16 aspect-h-9">
                <iframe
                    :src="getEmbedUrl(recipe.VideoLink)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="w-full h-[480px] rounded-lg"
                ></iframe>
            </div>
        </div>

        <!-- Reviews Section -->
        <div class="p-6 bg-gray-100 rounded-lg max-w-6xl mx-auto space-y-4 mt-8">
            <h2 class="text-2xl font-bold">Reviews</h2>

            <!-- Overlay for Non-Logged-In Users -->
            <div v-if="!user" class=" inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center">
                <p class="text-white text-center text-lg font-bold">
                    Log in to view or write a review.
                </p>
            </div>

            <!-- Reviews Section -->
            <div v-else>
                <!-- No reviews -->
                <div v-if="recipe.reviews.length === 0" class="bg-white p-4 text-center text-gray-600 font-semibold">
                    No reviews yet.
                </div>

                <!-- Individual Reviews -->
                <div v-else class="bg-gray-200 rounded-lg p-4 space-y-4">
                    <div v-for="(review, index) in recipe.reviews" :key="index" class="bg-white rounded-lg p-4 flex justify-between items-start shadow-sm">
                        <div>
                            <p class="flex items-center text-gray-700 font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="text-gray-500">
                                    <circle cx="12" cy="8" r="4" class="fill-current text-gray-600" />
                                    <path d="M12 14c-4 0-6 2-6 3v1h12v-1c0-1-2-3-6-3z" class="fill-current text-gray-600" />
                                </svg>
                                {{ review.user.name || 'Anonymous' }}
                            </p>
                            <p class="text-gray-600 mt-1"><i>{{ review.Review }}</i></p>
                        </div>
                        <div class="flex flex-col items-center space-y-2">
                            <!-- Stylish Star SVG icons with hover effect -->
                            <div class="flex items-center space-x-1">
                                <svg v-for="star in 5" :key="star" :class="{
                                    'fill-yellow-500': review.Star >= star,
                                    'fill-gray-300': review.Star < star,
                                    'cursor-pointer': true,
                                    'hover:fill-yellow-400': true,
                                    'transition-colors': true
                                }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path :d="review.Star >= star ? 
                                    'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' : 
                                    'M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z'" />
                                </svg>
                            </div>
                            
                            <!-- Delete Review Button -->
                            <div class="flex justify-center space-x-2">
                                <button
                                    v-if="review.user.id === user.id"
                                    @click="startEditing(review)" 
                                    class="bg-blue-400 text-white font-semibold py-1 px-3 rounded-lg hover:bg-blue-500 text-sm"
                                >
                                    Edit
                                </button>
                                <button
                                    v-if="review.user.id === user.id"
                                    @click="deleteReview(review.ReviewsID)" 
                                    class="bg-red-400 text-white font-semibold py-1 px-3 rounded-lg hover:bg-red-500 text-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                </div>

                <!-- Add Review Section -->
                <div
                    v-if="!userHasReviewed"
                    class="bg-gray-200 rounded-lg p-4 space-y-3"
                >
                    <textarea
                        v-model="reviewText"
                        placeholder="Review*"
                        class="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none text-small"
                    ></textarea>
                        <div class="flex items-center space-x-1 text-2xl">
                            <p>Rate:</p>
                            <svg v-for="star in 5" :key="star" @click="setRating(star)" :class="{
                                'fill-yellow-500': rating >= star,
                                'fill-gray-300': rating < star,
                                'cursor-pointer': true,
                                'hover:fill-yellow-400': true,
                                'transition-colors': true
                            }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path :d="rating >= star ? 
                                'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' : 
                                'M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z'" />
                            </svg>
                        </div>
                    <div class="flex justify-start space-x-2 mt-4">
                        <button
                            @click="submitReview"
                            class="bg-green-400 text-white font-semibold py-2 px-36 rounded-2xl hover:bg-green-500 text-small"
                        >
                            Submit Review
                        </button>
                    </div>
                </div>
            </div>

            <!-- Add edit form modal -->
            <div v-if="editingReview" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white p-6 rounded-lg w-96">
                    <h3 class="text-lg font-bold mb-4">Edit Review</h3>
                    <textarea
                        v-model="editReviewText"
                        class="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none text-small mb-4"
                    ></textarea>
                    <div class="flex items-center space-x-1 text-2xl mb-4">
                        <p>Rate:</p>
                        <svg v-for="star in 5" :key="star" @click="editRating = star" :class="{
                            'fill-yellow-500': editRating >= star,
                            'fill-gray-300': editRating < star,
                            'cursor-pointer': true,
                            'hover:fill-yellow-400': true,
                            'transition-colors': true
                        }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path :d="editRating >= star ? 
                            'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' : 
                            'M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z'" />
                        </svg>
                    </div>
                    <div class="flex justify-end space-x-2">
                        <button @click="cancelEdit" class="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
                        <button @click="saveEdit" class="bg-green-400 text-white px-4 py-2 rounded">Save</button>
                    </div>
                </div>
            </div>



    </Layout>
</template>


<script>
import Layout from '../../Layouts/frontend.vue';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2

export default {
    components: { Layout },
    props: {
        recipe: Object,
        viewCount: Number,
        user: Object, // Pass authenticated user from the controller
    },
    data() {
        return {
            rating: 0,
            reviewText: '',
            userHasReviewed: false, // Check if the user has already reviewed
            editingReview: null,
            editReviewText: '',
            editRating: 0,
        };
    },
    mounted() {
        this.userHasReviewed = this.recipe.reviews.some(
            (review) => review.user.id === this.user?.id
        );
        
    },
    methods: {
        setRating(star) {
            this.rating = star;
        },
        async submitReview() {
            if (!this.user) {
                alert("You must be logged in to submit a review.");
                return;
            }

            try {
                const response = await axios.post(`/api/recipes/${this.recipe.RecipeID}/reviews`, {
                    review: this.reviewText,
                    star: this.rating,
                    user_id: this.user.id, // Make sure to send the user.id here
                });

                this.recipe.reviews.push(response.data);
                this.reviewText = '';
                this.rating = 0;
                this.userHasReviewed = true;

                // Reload the page to reflect the new review
                location.reload(); // This will refresh the page
            } catch (error) {
                console.error('Error submitting review:', error);
            }
        },


        // Updated delete method with SweetAlert
        async deleteReview(reviewId) {
            if (!reviewId) {
                console.error("Review ID is undefined.");
                return;
            }

            try {
                // SweetAlert2 confirmation dialog
                const result = await Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    background: 'rgba(255, 255, 255, 1)', // White background for clarity
                    confirmButtonColor: 'rgba(204, 162, 35, 1)', // Golden Yellow for confirm button
                    cancelButtonColor: 'rgba(54, 69, 79, 1)', // Charcoal Gray for cancel button to provide contrast
                    iconColor: 'rgba(255, 219, 99, 1)', // Use golden yellow for icon color for consistency
                    customClass: {
                        popup: 'swal-popup', // Add a custom class for further styling if needed
                    },
                });


                if (result.isConfirmed) {
                    // Make sure the correct review ID is passed in the URL
                    const response = await axios.delete(`/api/recipes/${this.recipe.RecipeID}/reviews/${reviewId}`);
                    // Remove the deleted review from the local reviews array
                    this.recipe.reviews = this.recipe.reviews.filter((review) => review.ReviewsID !== reviewId);
                    // Reload the page to reflect changes
                    location.reload(); // This will refresh the page
                }
            } catch (error) {
                console.error('Error deleting review:', error);
            }
        },

        startEditing(review) {
            this.editingReview = review;
            this.editReviewText = review.Review;
            this.editRating = review.Star;
        },

        cancelEdit() {
            this.editingReview = null;
            this.editReviewText = '';
            this.editRating = 0;
        },

        async saveEdit() {
            if (!this.editingReview) return;

            try {
                const response = await axios.put(
                    `/api/recipes/${this.recipe.RecipeID}/reviews/${this.editingReview.ReviewsID}`,
                    {
                        review: this.editReviewText,
                        star: this.editRating
                    }
                );

                // Show success message
                Swal.fire({
                    title: 'Success!',
                    text: 'Review updated successfully',
                    icon: 'success',
                    confirmButtonColor: 'rgba(204, 162, 35, 1)',
                });

                // Update the review in the local state
                const index = this.recipe.reviews.findIndex(
                    r => r.ReviewsID === this.editingReview.ReviewsID
                );
                if (index !== -1) {
                    this.recipe.reviews[index] = response.data;
                }

                this.cancelEdit();
                location.reload(); // Refresh to show updated review
            } catch (error) {
                console.error('Error updating review:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update review',
                    icon: 'error',
                    confirmButtonColor: 'rgba(204, 162, 35, 1)',
                });
            }
        },

        getEmbedUrl(url) {
            if (!url) return '';
            
            // Handle different YouTube URL formats
            let videoId = '';
            
            // Handle standard YouTube URLs
            if (url.includes('youtube.com/watch?v=')) {
                videoId = url.split('v=')[1];
            }
            // Handle youtu.be URLs
            else if (url.includes('youtu.be/')) {
                videoId = url.split('youtu.be/')[1];
            }
            
            // Remove any additional parameters
            if (videoId.includes('&')) {
                videoId = videoId.split('&')[0];
            }
            
            return `https://www.youtube.com/embed/${videoId}`;
        },
    },
};
</script>

<style scoped>
/* Optional styling adjustments */
</style>


