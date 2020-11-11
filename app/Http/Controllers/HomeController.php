<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function nhadatban() {
        return view('pages.nhadatban.index');
    }
}
