<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class HomeController extends Controller
{
    public function index() {
        $menus0 = Menu::where('type','header')->where('parent_id',0)->orderby('order')->get();
        $menus1 = Menu::where('type','header')->where('parent_id','=',1)->orderby('order')->get();
        $menus2 = Menu::where('type','header')->where('parent_id','=',2)->orderby('order')->get();

        view()->share('menus0', $menus0);
        view()->share('menus1', $menus1);
        view()->share('menus2', $menus2);

        return view('pages.index');
    }
}
