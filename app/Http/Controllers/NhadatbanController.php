<?php

namespace App\Http\Controllers;

use App\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NhadatbanController extends Controller
{
    //
    public function index(Request $request) 
    {
        $products = Products::paginate(5);
        if ($request->ajax()) {
            return view('pages.nhadatban.presult', compact('products'));
        }
  
        return view('pages.nhadatban.index',compact('products'));
    }

    public function single_post($id) {
        $products = Products::where('id', '=', $id)->get();
        return view("pages.nhadatban.single_post", compact('products'));
    }

    public function ban_can_ho_chung_cu() {
        return view('pages.nhadatban.ban_can_ho_chung_cu');
    }

    public function ban_nha_rieng() {
        return view('pages.nhadatban.ban_nha_rieng');
    }

    public function ban_biet_thu() {
        return view('pages.nhadatban.ban_biet_thu');
    }

    public function ban_nha_mat_pho() {
        return view('pages.nhadatban.ban_nha_mat_pho');
    }

    public function ban_dat_nen() {
        return view('pages.nhadatban.ban_dat_nen');
    }

    public function ban_dat() {
        return view('pages.nhadatban.ban_dat');
    }

    public function ban_trang_trai() {
        return view('pages.nhadatban.ban_trang_trai');
    }

    public function ban_kho_nha_xuong() {
        return view('pages.nhadatban.ban_kho_nha_xuong');
    }

    public function bat_dong_san_khac() {
        return view('pages.nhadatban.bat_dong_san_khac');
    }

    public function bien_hoa_city() {
    return view('pages.nhadatban.single_post.bien_hoa_city');
    }

    public function posts_index() {
        
    }
}
