<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    //
    public function product()
    {
        return $this->belongsToMany('App\Products', 'districts_id');
    }

    public function province()
    { 
        return $this->belongsTo('App\Province', 'code');
    }

    public function wards()
    {
        return $this->hasMany('App\Ward', 'parent_code');
    }
}
