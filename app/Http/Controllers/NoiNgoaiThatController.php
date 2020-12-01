<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NoiNgoaiThatController extends Controller
{
    //
    public function index()
    {
        return view('pages.noi-ngoaithat.noingoaithat');
    }
}
