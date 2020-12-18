<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Broker;
use App\Models\Business;
use Illuminate\Support\Facades\Cache;

class DanhBaController extends Controller
{
    //
    public function index() {
        if(cache::has('danhba_cache')) {
            return Cache::get('danhba_cache');
        }
        else{
        $brokers = Broker::limit(15)->get();
       
        $cache_danhba = view("pages.danhba.nhamoigioi", compact('brokers'))->render();
        Cache::put('danhba_cache', $cache_danhba, 10000);
        return $cache_danhba;
        }
        
    }

    public function index1() {
        $business = Business::limit(18)->get();
        return view ('pages.danhba.doanhnghiep', compact('business'));
    }

    public function getSearch(Request $req) {
        $brokers = Broker::where('name', 'like', '%'.$req->key.'%')->get();
        return view ('pages.danhba.nhamoigioi', compact('brokers'));
    }

    public function singlepost1($id) {
        $brokers = Broker::where('id', '=', $id)->get();
        return view ('pages.danhba.singlepost1', compact('brokers'));
    }

    public function singlepost2($id) {
        $business = Business::where('id', '=', $id)->get();
        return view ('pages.danhba.singlepost2', compact('business'));
    }
}
