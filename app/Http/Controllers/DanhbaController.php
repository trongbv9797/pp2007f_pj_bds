<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Broker;
use App\Models\Business;
use App\Models\Province;
use App\Models\Slide;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class DanhBaController extends Controller
{
    //
    public function index(Request $req) {
        // Cache
        
        // if(cache::has('danhba_cache')) {
        //     return Cache::get('danhba_cache');
        // }
        // else{
        // $brokers = Broker::limit(15)->get();
        // $sidebars = Slide::where('type','sidebar')->get();
        // $cache_danhba = view("pages.danhba.nhamoigioi", compact('brokers', 'sidebars'))->render();
        // Cache::put('danhba_cache', $cache_danhba, 10000);
        // return $cache_danhba;
        // }
        
        //Không Cache

        if(!isset($_GET['province'])){
            $provinces = Province::get()->sortByDesc('count_companies');
            $brokers = Broker::limit(15)->get();
            $sidebars = Slide::where('type','sidebar')->get();
        return view ('pages.danhba.nhamoigioi', compact('brokers', 'sidebars', 'provinces'));
        }
     else {
        $provinces = Province::get()->sortByDesc('count_companies');
        $brokers = Broker::where('provinces_code', $_GET['province'])->limit(15)->get();
        $sidebars = Slide::where('type','sidebar')->get();
        return view ('pages.danhba.nhamoigioi', compact('brokers', 'sidebars', 'provinces'));
        
    }}

    
    public function index1() {
        $business = Business::limit(18)->get();
        return view ('pages.danhba.doanhnghiep', compact('business'));
    }

    public function getSearch(Request $req) {
        $provinces = Province::get()->sortByDesc('count_companies');
        $brokers = Broker::where('name', 'like', '%'.$req->key.'%')->get();
        $sidebars = Slide::where('name','AVPE')->get();
        return view ('pages.danhba.nhamoigioi', compact('brokers', 'sidebars', 'provinces'));
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
