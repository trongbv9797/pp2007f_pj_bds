<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    //
    public function image()
    {
        return $this->hasMany('App\Image', 'products_id');
    }

    public function menu_category()
    {
        return $this->belongsTo('App\Menu_category', 'id');
    }

    public function province()
    {
        return $this->belongsTo('App\Province', 'id');
    }

    public function district()
    {
        return $this->belongsTo('App\District', 'id');
    }

    public function ward()
    {
        return $this->belongsTo('App\Ward', 'id');
    }
}
