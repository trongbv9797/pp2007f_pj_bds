<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\District;

class BuyerSeller extends Model
{
    public function buyerSellerArea()
    {
        return $this->belongsTo( BuyerSellerArea::class, 'buyer_seller_area_id');
    }
    public function imageDemo()
    {
        return $this->hasMany( ImageDemo::class, 'buyer_seller_id' );
    }
    public function disTrict()
    {
        return $this->belongsTo( District::class, 'district_id');
    }
}
