<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    //
    protected $fillable = [
        'name',
        'slug',
        'type',
        'name_with_code',
        'code',
    ];

    public function product()
    {
        return $this->hasMany('App\Products', 'provinces_id');
    }


    public function districts()
    {
        return $this->hasMany('App\District', 'parent_code');
    }
}
