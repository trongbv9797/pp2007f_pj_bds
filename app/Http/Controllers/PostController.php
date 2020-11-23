<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Post;


class PostController extends Controller
{
    public function post() {
        $categories = Category::all();
        return view('', compact('categories'));
    }
}
