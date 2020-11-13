<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NhadatchothueController extends Controller
{
    //
    public function index() {
        return view('pages.nha_dat_cho_thue.index');
    }
}
