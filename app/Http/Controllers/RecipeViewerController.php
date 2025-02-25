<?php
namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\Review;
use App\Models\RecipeView;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;  
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;  

use Inertia\Inertia;

class RecipeViewerController extends Controller
{
    public function show($id)
    {
        $recipe = Recipe::with('reviews.user', 'chef', 'chef.user')->findOrFail($id);
        $viewCount = RecipeView::where('recipe_id', $id)->count();
        $user = Auth::user(); // Get the authenticated user
    
        return Inertia::render('Webpages/ViewRecipe', [
            'recipe' => $recipe,
            'viewCount' => $viewCount,
            'user' => $user, // Pass the user to the frontend
        ]);
    }
    
    
    
   

    public function getReviews($id)
    {
        $reviews = Review::where('recipe_id', $id)->get(); // Get reviews for the recipe
        return response()->json($reviews);
    }

    public function storeReview(Request $request, $recipeId)
    {
        $validated = $request->validate([
            'review' => 'required|string|max:1000',
            'star' => 'required|integer|min:1|max:5', // Ensure the star rating is between 1 and 5
        ]);
    
        // Debugging: Check if 'star' is available and valid
        Log::debug('Star value:', ['star' => $validated['star']]);
    
        // Create the review with the validated data
        $review = new Review();
        $review->recipe_id = $recipeId;
        $review->user_id = Auth::id();
        $review->review = $validated['review'];
        $review->star = $validated['star']; // Ensure the rating is saved
        $review->save();
    
        return response()->json($review, 201); // Respond with the created review
    }
    
    
    
    public function destroy($recipeId, $reviewId)
    {
        // Manually check if the review belongs to the current user
        $review = Review::where('ReviewsID', $reviewId)
                        ->where('recipe_id', $recipeId)
                        ->first();
    
        if (!$review) {
            return response()->json(['message' => 'Review not found'], 404);
        }
    
        // Check if the authenticated user is the owner of the review
        if ($review->user_id !== Auth::id()) {
            return response()->json(['message' => 'You are not authorized to delete this review'], 403);
        }
    
        // Delete the review
        $review->delete();
    
        return response()->json(['message' => 'Review deleted successfully']);
    }
    
    
    
    

    public function updateReview(Request $request, $recipeId, $reviewId)
    {
        $review = Review::findOrFail($reviewId);
        
        // Check if the authenticated user owns this review
        if ($review->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validated = $request->validate([
            'review' => 'required|string',
            'star' => 'required|integer|min:1|max:5',
        ]);

        $review->update([
            'Review' => $validated['review'],
            'Star' => $validated['star'],
        ]);

        return response()->json($review->load('user'));
    }

}
