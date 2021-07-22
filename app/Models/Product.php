<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Tag;

class Product extends Model
{
    use HasFactory;

    public function categories(){
    	return $this->belongsToMany(Category::class);
    }

    public function tags(){
    	return $this->hasMnay(Tag::class);
    }
}
