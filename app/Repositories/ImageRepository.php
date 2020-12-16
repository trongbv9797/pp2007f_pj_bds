<?php
namespace App\Repositories;
use App\Models\Image;
use App\Repositories\BaseRepository;
use App\Repositories\ImageRepositoryInterface;


class ImageRepository extends BaseRepository implements ImageRepositoryInterface
{

    public function getModel()
    {
        return Image::class;
    }

    public function relatedImage($id)
    {
        return Image::where('products_id', $id)->get();
    }

    public function allImage()
    {
        return Image::all();
    }

}
