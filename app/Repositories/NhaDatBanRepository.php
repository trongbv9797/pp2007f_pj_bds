<?php
namespace App\Repositories;

use App\Models\Products;
use App\Repositories\NhaDatBanRepositoryInterface;

class NhaDatBanRepository implements NhaDatBanRepositoryInterface{
    public function getProducts()
    {
        return Products::whereIn('menu_category_id', array(1, 2, 3))->get();
    }
}