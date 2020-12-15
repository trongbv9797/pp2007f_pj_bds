<?php
namespace App\Repositories;
use App\Models\Products;

class ProductRepository implements ProductRepositoryInterface
{
    
    public function singlePost($id)
    {
        return Products::where('id', '=', $id)->first();
    }

    public function relatedPost($id)
    {   
        $aa = $this->singlePost($id);
        return Products::where('district_code', $aa->district_code)
        ->orderBy('post_type_id', 'desc')
        ->orderBy('created_at', 'desc')->get();
    }
}
