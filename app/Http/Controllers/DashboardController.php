<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Recipe;
use App\Models\Review;
use App\Models\Chef;
use App\Models\RecipeView;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Get total counts
        $totalUsers = User::count();
        $totalRecipes = Recipe::count();
        $totalReviews = Review::count();
        $totalChefs = Chef::count();
        $totalViews = RecipeView::count();

        // Get users registered per day of the week
        $usersPerDay = User::select(DB::raw('DAYOFWEEK(created_at) as day'), DB::raw('count(*) as count'))
            ->groupBy('day')
            ->orderBy('day')
            ->pluck('count', 'day')
            ->toArray();

        // Get views per day of the week
        $viewsPerDay = RecipeView::select(DB::raw('DAYOFWEEK(created_at) as day'), DB::raw('count(*) as count'))
            ->groupBy('day')
            ->orderBy('day')
            ->pluck('count', 'day')
            ->toArray();

        // Initialize arrays with zeros for all days
        $formattedUsersPerDay = array_fill(1, 7, 0);
        $formattedViewsPerDay = array_fill(1, 7, 0);
        
        // Fill in actual values
        foreach ($usersPerDay as $day => $count) {
            $formattedUsersPerDay[$day] = $count;
        }
        
        foreach ($viewsPerDay as $day => $count) {
            $formattedViewsPerDay[$day] = $count;
        }

        return Inertia::render('Dashboard', [
            'totalUsers' => $totalUsers,
            'totalPosts' => $totalRecipes,
            'totalReviews' => $totalReviews,
            'totalChefs' => $totalChefs,
            'totalViews' => $totalViews,
            'usersPerDay' => array_values($formattedUsersPerDay),
            'viewsPerDay' => array_values($formattedViewsPerDay),
        ]);
    }
}
