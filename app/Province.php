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
        return $this->belongsToMany('App\Products', 'provinces_id');
    }
}
