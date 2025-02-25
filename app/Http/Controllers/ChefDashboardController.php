<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;

use App\Models\Chef;
use App\Models\Recipe;
use App\Models\Review;
use App\Models\RecipeView;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ChefDashboardController extends Controller
{
    public function index()
    {
        $chef = Auth::user()->chef;
        $profile = $chef->user->profile ?? null;
    
        Log::debug('Profile:', ['profile' => $profile]);
    
        if (!$profile) {
            return abort(404, 'Profile not found');
        }
    
        // Fetch all recipes of the chef (without pagination for views calculation)
        $recipes = $chef->recipes()->get();
    
        // Calculate the total views based on all recipes
        $totalViews = RecipeView::whereIn('recipe_id', $recipes->pluck('RecipeID'))->count();
        
        // Paginate the recipes for display in the dashboard (e.g., 10 per page)
        $paginatedRecipes = $chef->recipes()->paginate(2);
    
        foreach ($paginatedRecipes as $recipe) {
            $recipe->average_rating = $recipe->reviews()->avg('Star');
            $recipe->formatted_date = $recipe->created_at->format('F j, Y');
        }
    
        $totalIncome = $chef->Income;
    
        return inertia('Chef/Dashboard', [
            'chef' => $chef,
            'profile' => ['profile' => $profile, 'user' => $chef->user],
            'recipes' => $paginatedRecipes,  // Paginated recipes
            'totalViews' => $totalViews,  // Total views from all recipes
            'totalIncome' => $totalIncome,
            'totalRecipeCount' => $recipes->count(),  // Total number of recipes without pagination
        ]);
    }

    public function showAllRecipes()
    {
        $chef = Auth::user()->chef;
    
        // Fetch the recipes associated with the chef, paginate them (3 per page)
        $recipes = $chef->recipes()->paginate(3); // Adjust 3 to whatever number you want per page
    
        // Fetch additional data such as average rating, views, and income for each recipe
        foreach ($recipes as $recipe) {
            $recipe->average_rating = $recipe->reviews()->avg('Star');
            $recipe->formatted_date = $recipe->created_at->format('F j, Y');
            
            // Calculate views count for each recipe
            $viewsCount = RecipeView::where('recipe_id', $recipe->RecipeID)->count();
            $recipe->views_count = $viewsCount;
    
            // Calculate income based on views (views * 0.25)
            $recipe->income = $viewsCount * 0.25;
        }
    
        return inertia('Chef/AllRecipes', [
            'chef' => $chef,
            'recipes' => $recipes,  // Pass paginated recipes
        ]);
    }
    
    
    

    public function create()
    {
        return inertia('Chef/Create_post');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'RecipeTitle' => 'required|string|max:255',
            'Description' => 'nullable|string',
            'Ingredients' => 'nullable|string',
            'RecipePhoto' => 'nullable|image|max:10240',
            'Preparation' => 'nullable|integer',
            'CookingTime' => 'nullable|integer',
            'Difficulty' => 'nullable|string',
            'Servings' => 'nullable|integer',
            'VideoLink' => 'nullable|url',
        ]);
    
        $chef = Auth::user()->chef;
    
        if (!$chef) {
            return response()->json(['message' => 'Chef not found'], 403);
        }
    
        $recipe = new Recipe();
        $recipe->chef_id = $chef->ChefID;
        $recipe->RecipeTitle = $validated['RecipeTitle'];
        $recipe->Description = $validated['Description'];
        $recipe->Ingredients = $validated['Ingredients'];
        $recipe->VideoLink = $request->VideoLink;
        $recipe->Instructions = $request->Instructions;
        $recipe->Preparation = $request->Preparation;
        $recipe->CookingTime = $request->CookingTime;
        $recipe->Difficulty = $request->Difficulty;
        $recipe->Servings = $request->Servings;
    
        if ($request->hasFile('RecipePhoto')) {
            $path = $request->file('RecipePhoto')->store('recipes', 'public');
            $recipe->RecipePhoto = $path;
        }
    
        $recipe->save();
    
        return response()->json(['message' => 'Recipe created successfully']);
    }

    public function edit($id)
    {
        $chef = Auth::user()->chef;
        $recipe = Recipe::where('chef_id', $chef->ChefID)->findOrFail($id);
    
        return inertia('Chef/Edit_post', [
            'recipe' => $recipe,
        ]);
    }

    public function update(Request $request, $id)
    {
        try {
            $recipe = Recipe::findOrFail($id);
            
            // Check if the authenticated chef owns this recipe
            $chef = Auth::user()->chef;
            if ($recipe->chef_id !== $chef->ChefID) {
                return response()->json(['message' => 'Unauthorized'], 403);
            }

            $validated = $request->validate([
                'RecipeTitle' => 'required|string|max:255',
                'Description' => 'nullable|string',
                'Ingredients' => 'required|string',
                'Instructions' => 'required|string',
                'Preparation' => 'nullable|integer',
                'CookingTime' => 'nullable|integer',
                'Difficulty' => 'nullable|string',
                'Servings' => 'nullable|integer',
                'RecipePhoto' => 'nullable|image|max:10240',
                'VideoLink' => 'nullable|url',
            ]);

            // Handle file upload if RecipePhoto is provided
            if ($request->hasFile('RecipePhoto')) {
                // Delete old photo if exists
                if ($recipe->RecipePhoto) {
                    Storage::disk('public')->delete($recipe->RecipePhoto);
                }
                $validated['RecipePhoto'] = $request->file('RecipePhoto')->store('recipes', 'public');
            }

            // Update recipe with validated data
            $recipe->update($validated);

            return response()->json(['message' => 'Recipe updated successfully']);
        } catch (\Exception $e) {
            Log::error('Error updating recipe:', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Failed to update recipe'], 500);
        }
    }

    public function destroy($id)
    {
        try {
            // Fetch the chef and the recipe they own
            $chef = Auth::user()->chef;
            $recipe = Recipe::where('chef_id', $chef->ChefID)->findOrFail($id);
            
            // Log the recipe information
            Log::info("Attempting to delete recipe with ID: $id", ['recipe' => $recipe]);
    
            // Delete associated image file from storage
            if ($recipe->RecipePhoto) {
                Log::info("Deleting recipe photo: " . $recipe->RecipePhoto);
                Storage::disk('public')->delete($recipe->RecipePhoto);
            }
    
            // Delete the recipe
            $recipe->delete();
            
            // Log success message
            Log::info("Recipe with ID: $id deleted successfully.");
    
            return response()->json(['message' => 'Recipe deleted successfully']);
        } catch (\Exception $e) {
            // Log error if something goes wrong
            Log::error("Error deleting recipe with ID: $id", ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Failed to delete recipe'], 500);
        }
    }


    
}
