<?php
namespace App\Repositories\Slide;
use App\Models\Slide;
class SlideRepository implements SlideRepositoryInterface
{

    public function index()
    {
        return Slide::all();
    }
}