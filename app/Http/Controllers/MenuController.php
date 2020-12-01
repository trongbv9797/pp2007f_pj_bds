<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Support\Facades\DB;

class MenuController extends Controller
{
    //
    public function index()
    {
        $menu = DB::table('menus')
                ->orderBy('type', 'ASC')
                ->orderBy('parent_id', 'ASC')
                ->orderBy('order', 'ASC')
                ->get();
        return view('pages.admin.menu.menuIndex', compact('menu'));
    }
}
