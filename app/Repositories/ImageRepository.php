<?php
namespace App\Repositories;
use App\Models\Image;

class ImageRepository implements ImageRepositoryInterface
{
    
    public function relatedImage($id)
    {
        return Image::where('products_id', $id)->get();
    }

    public function allImage()
    {
        return Image::all();
    }
}
