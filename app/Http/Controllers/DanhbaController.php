<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DanhbaController extends Controller
{
    //
    public function index() {
        return view ('pages.danhba.nhamoigioi');
    }
}
