<?php
namespace App\Repositories;

interface ProductRepositoryInterface
{
    public function singlePost($id);

    public function relatedPost($id);

}
