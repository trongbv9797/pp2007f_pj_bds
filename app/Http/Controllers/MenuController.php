<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenuFromRequest;
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

    public function create()
    {
        return view('pages.admin.menu.createMenu');
    }

    public function store(MenuFromRequest $request)
    {
        $menu = new Menu();
        $menu->name = $request->get('name');
        $menu->parent_id = $request->get('parent_id');
        $menu->slug = $request->get('slug');
        $menu->order = $request->get('order');
        $menu->type = $request->get('type');

        $mess = '';
        if($menu->save()){
            $mess = 'Create new menu successfully!';
        }
        return view('pages.admin.menu.createMenu', compact('menu'))->with('mess', $mess);
    }
}
