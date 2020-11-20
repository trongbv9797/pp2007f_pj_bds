<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BuyerSeller extends Model
{
    public function buyersellerarea()
    {
        return $this->belongsTo( BuyerSellerArea::class, 'buyer_seller_area_id');
    }
    public function imagedemo()
    {
        return $this->hasMany( ImageDemo::class, 'buyer_seller_id' );
    }
    public function districts()
    {
        return $this->belongsTo( District::class, 'district_id');
    }
}
