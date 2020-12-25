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
    public function index(Request $request) {
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
        if(!isset($_GET['type'])){
            $broker = Broker::Paginate(10);
            $provinces = Province::get()->sortByDesc('count_companies');
            $sidebars = Slide::where('type','sidebar')->get();
            
            return view ('pages.danhba.nhamoigioi',compact('broker','sidebars','provinces'));
            
        } else{
            $broker = Broker::where('type', $_GET['type'])->Paginate(10);
            $provinces = Province::get()->sortByDesc('count_companies');
            $sidebars = Slide::where('type','sidebar')->get();
            if ($request->ajax()) {
                return view('pages.danhba.resuitl', compact('broker','sidebars','provinces'));
            }
            return view ('pages.danhba.nhamoigioi', compact('broker', 'sidebars', 'provinces'));
        }

        

        if(!isset($_GET['province'])){
            $provinces = Province::get()->sortByDesc('count_companies');
            $broker = Broker::Paginate(10);
            $sidebars = Slide::where('type','sidebar')->get();
           
        return view ('pages.danhba.nhamoigioi', compact('broker', 'sidebars', 'provinces'));
        }

         else {
        $provinces = Province::get()->sortByDesc('count_companies');
        $broker = Broker::where('provinces_code', $_GET['province'])->Paginate(5);
        $sidebars = Slide::where('type','sidebar')->get();
        return view ('pages.danhba.nhamoigioi', compact('broker', 'sidebars', 'provinces'));
        
    }}

    
    // public function index1() {
    //     $business = Business::limit(18)->get();
    //     return view ('pages.danhba.doanhnghiep', compact('business'));
    // }

    public function getSearch(Request $req) {
        $provinces = Province::get()->sortByDesc('count_companies');
        $broker = Broker::where('name', 'like', '%'.$req->key.'%')->Paginate(5);
        $sidebars = Slide::where('name','AVPE')->get();
        return view ('pages.danhba.nhamoigioi', compact('broker', 'sidebars', 'provinces'));
    }

    public function singlepost1($id) {
        $brokers = Broker::where('id', '=', $id)->get();
        return view ('pages.danhba.singlepost1', compact('brokers'));
    }

    // public function singlepost2($id) {
    //     $business = Business::where('id', '=', $id)->get();
    //     return view ('pages.danhba.singlepost2', compact('business'));
    // }


    public function getBrokerAjax (Request $request) {
        $broker = Broker::where('type',$request->get('type'))->paginate(10);
        // dd($broker);
        echo view ('pages.danhba.resuitl', compact('broker'));
        exit;

    }
}
