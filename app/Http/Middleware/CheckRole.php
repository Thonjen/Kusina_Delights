<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CheckRole
{
    public function handle($request, Closure $next, ...$roles)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        // Debug logging
        Log::info('User Role: ' . Auth::user()->Roles);
        Log::info('Required Roles: ' . implode(', ', $roles));

        if (!in_array(Auth::user()->Roles, $roles)) {
            return redirect()
                ->back()
                ->with('flash', [
                    'error' => 'Access denied. This area requires one of these roles: ' . implode(', ', $roles)
                ]);
        }

        return $next($request);
    }
}