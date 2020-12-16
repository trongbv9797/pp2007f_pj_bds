<?php
namespace App\Repositories;

interface ImageRepositoryInterface
{
    public function relatedImage($id);

    public function allImage();
}
