<?php
namespace App\Repositories\NhaDatBan;

use App\Models\Products;
use App\Repositories\NhaDatBan\NhaDatBanRepositoryInterface;
use App\Repositories\BaseRepository;

class NhaDatBanRepository extends BaseRepository implements NhaDatBanRepositoryInterface{
    public function getModel()
    {
        return Products::class;
    }
    
    public function getProducts()
    {
        return $this->model->whereIn('menu_category_id', array(1, 2, 3))->get();
    }
}