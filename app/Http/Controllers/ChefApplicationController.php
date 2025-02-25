<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use App\Mail\ApplicationMail;

class ChefApplicationController extends Controller
{
    public function applyChef(Request $request)
    {
        $request->validate([
            'message' => 'required|string',
            'files.*' => 'file|max:10240', // 10 MB max file size
        ]);

        // Get the authenticated user
        $user = Auth::user();

        $files = $request->file('files', []);
        foreach ($files as $file) {
            $file->store('applications');
        }

        // Create an array with all the application data
        $applicationData = [
            'message' => $request->message,
            'user_id' => $user->id,
            'user_name' => $user->name,
            'user_email' => $user->email,
            'files' => $files
        ];

        Mail::to('cameraexpert17@gmail.com')->send(new ApplicationMail($applicationData));

        return response()->json(['message' => 'Application sent successfully!']);
    }
}
