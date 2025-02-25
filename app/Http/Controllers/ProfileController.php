<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;


use App\Models\UserProfile;

use App\Models\Review;



class ProfileController extends Controller
{


    public function show()
    {
        $user = Auth::user();
        $profile = $user->profile;
        
        // Fetch paginated reviews
        $reviews = Review::with('recipe')
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->paginate(3);
        
        // Map the reviews to the desired structure
        $formattedReviews = $reviews->map(fn($review) => [
            'title' => $review->recipe->RecipeTitle,
            'stars' => $review->Star,
            'comment' => $review->Review,
            'RecipePhoto' => $review->recipe->RecipePhoto, // Assuming RecipePhoto stores the path
            'recipe_id' => $review->recipe_id, // Add the recipe_id for each review
        ]);
    
        return Inertia::render('Chef/Profile', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'date_joined' => $user->created_at->format('F j, Y'),
                'ProfileImage' => $profile->ProfileImage,
                'role' => $user->Roles,  // Add this line to pass the user's role
            ],
            'profile' => [
                'introduction' => $profile->Introduction ?? 'No introduction set yet',
            ],
            'reviews' => $formattedReviews, // Return the formatted reviews
        ]);
    }
    

    public function edit()
    {
        return Inertia::render('Chef/Profile_edit');
    }
    

    public function update(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'name' => 'required|string|max:255|unique:users,name,' . Auth::id(),
            'email' => 'required|email|max:255',
            'ProfileImage' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',  // Validate image if present
        ]);
    
        $user = Auth::user();
        $profile = $user->profile;
    
        // Update user details
        $user->update([
            'name' => $request->name,  // Update username
            'email' => $request->email, // Update email
        ]);
    
        if ($profile) {
            // Update profile details
            $profile->update([
                'FirstName' => $request->first_name,
                'LastName' => $request->last_name,
                'Introduction' => $request->introduction ?? 'No introduction set yet',
            ]);
    
            // Handle profile image update
            if ($request->hasFile('ProfileImage')) {
                $file = $request->file('ProfileImage');
                $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
                $filePath = $file->storeAs('profiles', $fileName, 'public');  // Store the image in the public disk
    
                // Update profile image path in the database
                $profile->update(['ProfileImage' => $filePath]);
            }
    
            return response()->json(['message' => 'Profile updated successfully!', 'ProfileImage' => $profile->ProfileImage]);
        }
    
        return response()->json(['message' => 'Profile not found.'], 404);
    }
    
    
    public function getProfile()
    {
        $user = Auth::user();
        $profile = $user->profile;

        return response()->json([
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at->format('F j, Y'),
                'ProfileImage' => $profile->ProfileImage,
                
            ],
            'profile' => [
                'first_name' => $profile->FirstName,
                'middle_name' => $profile->MiddleName,
                'last_name' => $profile->LastName,
                'introduction' => $profile->Introduction,
            ],
        ]);
    }

    public function uploadProfileImage(Request $request)
    {
        $request->validate([
            'profile_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Validate image format and size
        ]);

        $user = Auth::user();
        $profile = $user->profile;

        if (!$profile) {
            return response()->json(['message' => 'Profile not found.'], 404);
        }

        // Handle the file upload
        if ($request->hasFile('profile_image')) {
            $file = $request->file('profile_image');
            $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $filePath = $file->storeAs('profiles', $fileName, 'public');

            // Update the profile image path in the database
            $profile->update(['ProfileImage' => $filePath]);

            return response()->json(['filepath' => $filePath, 'message' => 'Profile image uploaded successfully!']);
        }

        return response()->json(['message' => 'Failed to upload image.'], 400);
    }


    public function updateIntroduction(Request $request)
    {
        // Get the authenticated user
        $user = Auth::user();
        
        // Ensure the profile exists for the user (using the user's id)
        $profile = UserProfile::where('user_id', $user->id)->first();
        Log::info('Profile:', ['profile' => $profile]);
    
        // If the profile exists, update the Introduction
        if ($profile) {
            $profile->update([
                'Introduction' => $request->introduction ?: 'No introduction set yet',
            ]);
    
            return response()->json(['message' => 'Introduction updated successfully!']);
        }
        
        // If no profile exists, you can either create one or return an error
        return response()->json(['message' => 'Profile not found.'], 404);
    }
    
    
    
    
    

    /**
     * Display the user's profile form.
     */
    
    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
