<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NhadatchothueController extends Controller
{
    //
    public function index() {
        return view('pages.nha_dat_cho_thue.index');
    }

    public function cho_thue_can_ho() {
        return view('pages.nha_dat_cho_thue.cho_thue_can_ho');
    }

    public function cho_thue_nha_rieng() {
        return view('pages.nha_dat_cho_thue.cho_thue_nha_rieng');
    }
}
