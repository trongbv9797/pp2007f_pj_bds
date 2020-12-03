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

    public function post() {
        $categories = Post_type::all();
        return view('', compact('categories'));
    }

    public function viewPost() {
        $posts = Products::all();
        return view('admin.posts', compact('posts'));
    }

    public function editPost($id) {

        $post = Products::where('id', '=', $id)->first();
        $wards = Ward::all();
        $districts = District::all();
        $provinces = Province::all();
        $types = Post_type::all();

        return view('admin.edit_post', compact('post', 'wards', 'districts', 'provinces', 'types'));
    }

    public function updatePost(Request $request, $id) {
        $post = Products::where('id', '=', $id)->first();
        $post->title = $request->get('title');
        $post->price = $request->get('price');
        $post->area = $request->get('area');
        $post->address = $request->get('address');
        $post->number_of_bedroom = $request->get('bedroom');
        $post->number_of_restroom = $request->get('restroom');
        $post->number_of_floor = $request->get('floor');
        $post->content = $request->get('content');
        $post->post_type_id = $request->get('type');
        $post->provinces_id = $request->get('province');
        $post->districts_id = $request->get('district');
        $post->wards_id = $request->get('ward');
        $post->save();
        return back();
    }
    
    public function deletePost(Request $request)
    {
        $post = Products::find($request->get('post_id'));
        $post->delete();
        return back();
    }
}

