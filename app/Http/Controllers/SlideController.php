<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slide;
class SlideController extends Controller
{
    public function index() {
        $slides =Slide::get();
        return view ('pages.admin.slide', compact('slides'));
    }
}
