<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Products;
use App\Models\Province;
use App\Models\Image;

class NhaDatChoThueController extends Controller
{
    //
    public function index() {
        $products = Products::whereIn('menu_category_id', array(4, 5, 6))->orderBy('post_type_id', 'desc')->orderBy('created_at', 'desc')->get();
        $provinces = Province::all()->sortByDesc('count_posts');
        $count_products = Products::all()->count();
        return view("pages.nhadatban.index", compact('products', 'provinces', 'count_products'));
    }

    public function nhaDatBanSinglePost($id) {
        
        $products = Products::where('id', '=', $id)->first();
        $products_area = Products::whereIn('menu_category_id', array(3, 4, 5))->orderBy('post_type_id', 'desc')->orderBy('created_at', 'desc')->get();
        $images = Image::all();
        $images_area = Image::all();
        return view("pages.nhadatban.single_post", compact('products', 'images_area', 'images', 'products_area'));

    }

    public function choThueCanHo() {
        $products = DB::table('products')
        ->join('images', 'images.products_id', '=' , 'products.id')
        ->join('menu_categories', 'menu_categories.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'images.link', 'menu_categories.name', 'wards.path_with_type')
        ->where('menu_categories.name', '=', "Cho thuê căn hộ chung cư")
        ->get();
        return view("pages.nha_dat_cho_thue.index", compact('products'));
    }

    public function choThueNhaRieng() {
        $products = DB::table('products')
        ->join('images', 'images.products_id', '=' , 'products.id')
        ->join('menu_categories', 'menu_categories.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'images.link', 'menu_categories.name', 'wards.path_with_type')
        ->Where('menu_categories.name', '=', "Cho thuê nhà riêng")
        ->get();
        return view("pages.nha_dat_cho_thue.index", compact('products'));
    }

    public function choThueNhaMatPho() {
        $products = DB::table('products')
        ->join('images', 'images.products_id', '=' , 'products.id')
        ->join('menu_categories', 'menu_categories.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'images.link', 'menu_categories.name', 'wards.path_with_type')
        ->Where('menu_categories.name', '=', "Cho thuê nhà mặt phố")
        ->get();
        return view("pages.nha_dat_cho_thue.index", compact('products'));
    }
}
