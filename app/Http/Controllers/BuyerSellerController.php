<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BuyerSellerController extends Controller
{
    public function index() {
        return view ('pages.canmuacanthue.index');
    }
    public function seller() {
        return view ('pages.canmuacanthue.seller');
    }
}
