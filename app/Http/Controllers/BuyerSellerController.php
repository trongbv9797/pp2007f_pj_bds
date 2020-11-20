<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BuyerSeller;
use App\BuyerSellerArea;
use App\ImageDemo;

class BuyerSellerController extends Controller
{
    public function index() {
        // $buyerSellers = BuyerSeller::all()->buyersellerarea();
        // dd($buyerSellers);
        // $buyerSellers=ImageDemo::all();
        
        $buyerSellers=BuyerSeller::with(['imagedemo','districts','BuyerSellerArea'])->get();

        return view ('pages.canmuacanthue.index',compact('buyerSellers'));
    }
    public function seller() {
        return view ('pages.canmuacanthue.seller');
    }
    public function buyer() {
        return view ('pages.canmuacanthue.buyer');
    }
}
