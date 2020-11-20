<?php

namespace App\Http\Controllers;
use App\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TintucController extends Controller
{
    //
    // public function index(){
    //     return view('pages.tintucbds.tintuc');
    // }


    public function tinthitruong()
    {
        return view('pages.tintucbds.tinthitruong');
    }

    public function phantich()
    {
        return view('pages.tintucbds.phantich');
    }

    public function chinhsach()
    {
        return view('pages.tintucbds.chinhsach');
    }
    public function quyhoach()
    {
        return view('pages.tintucbds.quyhoach');
    }
    public function bdsthegioi()
    {
        return view('pages.tintucbds.bdsthegioi');
    }
    public function taichinhbds()
    {
        return view('pages.tintucbds.taichinhbds');
    }

    //Singlepost
    public function articles($id) {
        $articles = Article::where('id', '=', $id)->get();
        return view("pages.tintucbds.singlepost", compact('articles'));
    }

    public function index() {
        $articles = DB::table('articles')->limit(6)->get();
        return view("pages.tintucbds.tintuc", compact('articles'));
    }

    
    
}
