<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\RecipeViewerController;
use App\Http\Controllers\ChefDashboardController;
use App\Http\Controllers\ChefApplicationController;
use App\Http\Controllers\ReviewController;
use App\Models\Recipe;
use Illuminate\Support\Facades\Auth;

use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;

#Home Page
Route::get('/', function () {
    $recipes = Recipe::with('chef.user')
        ->withCount('reviews')
        ->withAvg('reviews', 'Star')
        ->take(3)
        ->get()
        ->map(function ($recipe) {
            return [
                'RecipeID' => $recipe->RecipeID,
                'RecipeTitle' => $recipe->RecipeTitle,
                'Description' => $recipe->Description,
                'RecipePhoto' => $recipe->RecipePhoto,
                'averageStars' => $recipe->reviews_avg_star,
                'reviewCount' => $recipe->reviews_count,
                'chef' => [
                    'name' => $recipe->chef->user->name ?? 'Unknown Chef',
                ],
            ];
        });

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'recipes' => $recipes,
        'auth' => ['user' => Auth::user()],
    ]);
})->name('home');

#Storage
Route::get('/storage/{file}', function ($file) {
    return response()->file(storage_path("app/public/{$file}"));
})->name('storage');



# Views and filters for front end
Route::get('/', [RecipeController::class, 'recipeFilter']);
Route::get('/recipes/by-chef/{chefId?}', [RecipeController::class, 'recipesByChef']);
Route::get('/aboutus', function () {
    return Inertia::render('Webpages/AboutUs');  // Path relative to 'resources/js/Pages/'
});
Route::get('api/recipes/{id}', [RecipeViewerController::class, 'show']);
Route::get('api/recipes/{id}/reviews', [RecipeViewerController::class, 'getReviews']);
Route::post('api/recipes/{id}/reviews', [RecipeViewerController::class, 'storeReview']);
Route::get('api/recipes', [RecipeController::class, 'search']);
Route::delete('api/recipes/{recipe}/reviews/{reviewId}', [RecipeViewerController::class, 'destroy']);


#User Profile

#Route::post('/profile/upload-image', [ProfileController::class, 'uploadProfileImage'])->name('profile.upload.image');

#Chef Dashboard
Route::middleware(['auth', 'Roles:chef,admin'])->group(function () {
    Route::get('/chef/dashboard', [ChefDashboardController::class, 'index'])->name('chef.dashboard');
    Route::get('/chef/dashboard/recipes/create', [ChefDashboardController::class, 'create'])->name('chef.recipes.create');
    Route::post('/chef/dashboard/recipes', [ChefDashboardController::class, 'store']);
    Route::get('/chef/dashboard/recipes/{id}/edit', [ChefDashboardController::class, 'edit'])->name('chef.recipes.edit');
    Route::put('/chef/dashboard/recipes/{id}/update', [ChefDashboardController::class, 'update'])->name('chef.recipes.update');
    Route::delete('/chef/dashboard/recipes/{id}', [ChefDashboardController::class, 'destroy'])->name('chef.recipes.destroy');
    Route::get('/chef/dashboard/recipes/all', [ChefDashboardController::class, 'showAllRecipes'])->name('chef.recipes.showAll');

});


#User Dashboard
Route::middleware(['auth', 'Roles:user,chef,admin'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'show'])->name('profile.show');
    Route::put('api/recipes/{recipe}/reviews/{reviewId}', [RecipeViewerController::class, 'updateReview']);

    Route::post('/update-introduction', [ProfileController::class, 'updateIntroduction'])->name('update.introduction');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile/update', [ProfileController::class, 'update'])->name('profile.update');
    Route::get('/api/profile', [ProfileController::class, 'getProfile']);
    Route::post('/apply-chef', [ChefApplicationController::class, 'applyChef']);

});

#Admin Dashboard
Route::middleware(['auth', 'Roles:admin'])->group(function () {
    
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('users', UserController::class);
    Route::resource('recipes', RecipeController::class);
    Route::resource('reviews', ReviewController::class);
    Route::get('/recipes/{recipe}/view', [RecipeController::class, 'viewRecipe'])->name('recipes.view');
});







require __DIR__.'/auth.php';