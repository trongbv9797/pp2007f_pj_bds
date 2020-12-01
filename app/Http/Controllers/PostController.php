<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Post;
use App\Models\Products;
use App\Models\Image;
use App\Models\Ward;
use App\Models\District;
use App\Models\Province;
use App\Models\Post_type;
use App\Models\Menu_category;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public $menu_cate;
    
    public function __construct()
    {
        $this->menu_cate = Menu_category::all();
    }

    public function post() {
        $categories = Post_type::all();
        return view('', compact('categories'));
    }

    public function viewPost() {
        // $post = Products::with('image')->get();
        $post = DB::table('products')
        ->join('images', 'images.products_id', '=' , 'products.id')
        ->join('menu_categories', 'menu_categories.id', '=', 'products.menu_category_id')
        ->select('products.*', 'images.link', 'menu_categories.name')
        ->get();
        return view('admin.posts', compact('post'));
    }

    public function editPost($id) {

        $post = Products::where('products.id', '=', $id)->first();
        $wards = Products::select('wards_id')->orderBy('wards_id', 'asc')->distinct()->get();
        $districts = Products::select('districts_id')->orderBy('districts_id', 'asc')->distinct()->get();
        $provinces = Products::select('provinces_id')->orderBy('provinces_id', 'asc')->distinct()->get();
        $products = Products::select('post_type_id')->orderBy('post_type_id', 'asc')->distinct()->get();

        return view('admin.edit_post', compact('post', 'wards', 'districts', 'provinces', 'products'));
    }

    public function updatePost(Request $request, $id) {
        $menu_cate = $this->menu_cate;
        $post = Products::where('products.id', '=', $id)->first();
        $post->title = $request->get('title');
        $post->price = $request->get('price');
        $post->area = $request->get('area');
        $post->address = $request->get('address');
        $post->number_of_bedroom = $request->get('bedroom');
        $post->number_of_restroom = $request->get('restroom');
        $post->number_of_floor = $request->get('floor');
        $post->content = $request->get('content');
        $post->post_type_id = $request->get('type');
        $post->province->name = $request->get('province');
        $post->district->name = $request->get('district');
        $post->ward->name = $request->get('ward');
        $post->save();
        return back();
    }
}

