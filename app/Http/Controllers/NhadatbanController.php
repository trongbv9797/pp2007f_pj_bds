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
        ->select('products.*', 'menu_category.*', 'image.*')
        ->where('menu_category.name', '=', "Bán căn hộ chung cư")
        ->orWhere('menu_category.name', '=', "Bán nhà riêng")
        ->orWhere('menu_category.name', '=', "Bán nhà mặt phố")
        ->orderBy('products.id')->get();  //->paginate(5);
        return view("pages.nhadatban.index", compact('products',));

    }

    public function nhadatban_single_post($id) {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->select('products.*', 'image.*', 'menu_category.*')
        ->where('products.id', '=', $id)->get();
        return view("pages.nhadatban.single_post", compact('products'));

    }

    public function ban_can_ho_chung_cu() {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->select('products.*', 'image.*', 'menu_category.*')
        ->where('menu_category.name', '=', "Bán căn hộ chung cư")
        ->get();
        return view("pages.nhadatban.index", compact('products'));
    }

    public function ban_nha_rieng() {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->select('products.*', 'image.*', 'menu_category.*')
        ->Where('menu_category.name', '=', "Bán nhà riêng")
        ->get();
        return view("pages.nhadatban.index", compact('products'));
    }

    public function ban_nha_mat_pho() {
        $products = DB::table('products')
        ->join('image', 'image.products_id', '=' , 'products.id')
        ->join('menu_category', 'menu_category.id', '=', 'products.menu_category_id')
        ->select('products.*', 'image.*', 'menu_category.*')
        ->Where('menu_category.name', '=', "Bán nhà mặt phố")
        ->get();
        return view("pages.nhadatban.index", compact('products'));
    }

}
