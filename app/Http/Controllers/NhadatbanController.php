<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NhadatbanController extends Controller
{
    //
    public function index() {
        return view('pages.nhadatban.index');
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
}
