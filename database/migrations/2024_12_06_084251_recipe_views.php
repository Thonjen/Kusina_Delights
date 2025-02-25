<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('recipe_views', function (Blueprint $table) {
            $table->id('ViewID');
            $table->foreignId('recipe_id')
                ->constrained('recipes', 'RecipeID')
                ->onDelete('cascade'); // Ensure views are deleted if a recipe is deleted
            $table->string('session_id'); // Track views using session ID
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('recipe_views');
    }
};
