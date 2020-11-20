<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Broker;

class DanhbaController extends Controller
{
    //
    public function index() {
        $brokers = Broker::limit(10)->get();
        return view("pages.danhba.nhamoigioi", compact('brokers'));
    }

    public function index1() {
        return view ('pages.danhba.doanhnghiep');
    }

    public function singlepost1($id) {
        $brokers = Broker::where('id', '=', $id)->get();
        return view ('pages.danhba.singlepost1', compact('brokers'));
    }
}
