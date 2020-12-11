<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\Article;
use App\Models\Products;
use App\Models\District;
use App\Models\Province;
use App\Models\Slide;

class HomeController extends Controller
{
    public function index() {
        $articles = Article::limit(6)->orderBy('id','DESC')->get();
        $i = 0;
        $j = 0;
        $k = 0;
        $l = 0;
        $districs = District::all();
        $provinces = Province::all();

        $banners = Slide::where('type','banner')->get();
        $sidebars = Slide::where('type','sidebar')->get();

        $products = Products::with('image')->limit(8)->orderBy('id','DESC')->get();
        return view('pages.index',compact('articles','i','j','k','l','products','districs','provinces','banners', 'sidebars'));
        
        
        
    }

    public function welcome()
    {
        return view('home');
    }
}
