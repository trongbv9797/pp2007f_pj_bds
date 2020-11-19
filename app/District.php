<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    //
    public function product()
    {
        return $this->belongsToMany('App\Models\product', 'districts_id');
    }
}
