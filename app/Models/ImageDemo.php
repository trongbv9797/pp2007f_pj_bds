<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImageDemo extends Model
{
    public function user()
    {
        return $this->belongsTo(BuyerSeller::class, 'buyer_seller_id');
    }
}
