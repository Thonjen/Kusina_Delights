<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeView extends Model
{
    use HasFactory;

    protected $table = 'recipe_views'; // Specify the table name

    protected $fillable = [
        'recipe_id',
        'session_id',
    ];

    /**
     * Define the relationship with the Recipe model.
     */
    public function recipe()
    {
        return $this->belongsTo(Recipe::class, 'recipe_id', 'RecipeID');
    }
}
