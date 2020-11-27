<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryFromRequest;

class CategoryController extends Controller
{
    //
    public function index()
    {
        $categories = Category::get();
        return view('pages.admin.categoriesIndex', compact('categories'));
    }

    public function create()
    {
        return view('pages.admin.createCategories');
    }

    public function store(CategoryFromRequest $categoryFromRequest){
        $category = new Category();
        $category->category_name = $categoryFromRequest->get('name');
        $category->category_price = $categoryFromRequest->get('price');
        $category->category_unit = $categoryFromRequest->get('unit');
        $category->category_days = $categoryFromRequest->get('days');

        $mess = "";
        if($category->save()){
            $mess = "Successful add new!";
        }

        return view('pages.admin.createCategories', compact('category'))->with('mess', $mess);
    }
}
