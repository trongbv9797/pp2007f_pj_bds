<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NhadatchothueController extends Controller
{
    //
    public function index() {
        $products = DB::table('products')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'menu_category.name', 'image.link', 'wards.path_with_type')
        ->where('menu_category.name', '=', "Cho thuê căn hộ chung cư")
        ->orWhere('menu_category.name', '=', "Cho thuê nhà riêng")
        ->orWhere('menu_category.name', '=', "Cho thuê nhà mặt phố")
        ->orderBy('products.id')->get();
        return view("pages.nha_dat_cho_thue.index", compact('products',));
    }

    public function nhadatchothue_single_post($id) {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'image.link', 'menu_category.name', 'wards.path_with_type')
        ->where('products.id', '=', $id)->get();
        return view("pages.nha_dat_cho_thue.single_post", compact('products'));
    }

    public function cho_thue_can_ho() {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'image.link', 'menu_category.name', 'wards.path_with_type')
        ->where('menu_category.name', '=', "Cho thuê căn hộ chung cư")
        ->get();
        return view("pages.nha_dat_cho_thue.index", compact('products'));
    }

    public function cho_thue_nha_rieng() {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'image.link', 'menu_category.name', 'wards.path_with_type')
        ->Where('menu_category.name', '=', "Cho thuê nhà riêng")
        ->get();
        return view("pages.nha_dat_cho_thue.index", compact('products'));
    }

    public function cho_thue_nha_mat_pho() {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'image.link', 'menu_category.name', 'wards.path_with_type')
        ->Where('menu_category.name', '=', "Cho thuê nhà mặt phố")
        ->get();
        return view("pages.nha_dat_cho_thue.index", compact('products'));
    }
}
