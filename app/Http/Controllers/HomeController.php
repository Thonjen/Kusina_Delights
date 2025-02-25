<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::select('RecipeID', 'RecipeTitle', 'Description', 'RecipePhoto')->get();

        return Inertia::render('Welcome', [
            'recipes' => $recipes,
        ]);
    }
}
