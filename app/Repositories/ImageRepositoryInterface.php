<?php
namespace App\Repositories;

interface ImageRepositoryInterface extends RepositoryInterface
{
    public function relatedImage($id);

    public function allImage();
}
