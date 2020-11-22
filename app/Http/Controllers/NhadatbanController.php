<?php

namespace App\Http\Controllers;

use App\Products;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class NhadatbanController extends Controller
{
    //

    public function index() {
        $products = DB::table('products')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'menu_category.name', 'image.link', 'wards.path_with_type')
        ->where('menu_category.name', '=', "Bán căn hộ chung cư")
        ->orWhere('menu_category.name', '=', "Bán nhà riêng")
        ->orWhere('menu_category.name', '=', "Bán nhà mặt phố")
        ->orderBy('products.id', 'asc')
        ->get();  //->paginate(5);
        return view("pages.nhadatban.index", compact('products',));

    }

    public function nhadatban_single_post($id) {
        $products = DB::table('products')->where('products.id', '=', $id)
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'image.link', 'menu_category.name', 'wards.path_with_type')
        ->get();
        return view("pages.nhadatban.single_post", compact('products'));

    }

    public function ban_can_ho_chung_cu() {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'image.link', 'menu_category.name', 'wards.path_with_type')
        ->where('menu_category.name', '=', "Bán căn hộ chung cư")
        ->get();
        return view("pages.nhadatban.index", compact('products'));
    }

    public function ban_nha_rieng() {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'image.link', 'menu_category.name', 'wards.path_with_type')
        ->Where('menu_category.name', '=', "Bán nhà riêng")
        ->get();
        return view("pages.nhadatban.index", compact('products'));
    }

    public function ban_nha_mat_pho() {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->join('wards', 'wards.id', '=', 'products.wards_id')
        ->select('products.*', 'image.link', 'menu_category.name', 'wards.path_with_type')
        ->Where('menu_category.name', '=', "Bán nhà mặt phố")
        ->get();
        return view("pages.nhadatban.index", compact('products'));
    }

}
