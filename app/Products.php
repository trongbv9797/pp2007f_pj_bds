<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    //
    public function image()
    {
        return $this->hasMany('App\Image');
    }

    public function menu_category()
    {
        return $this->belongsTo('App\Menu_category', 'id');
    }

    public function province()
    {
        return $this->belongsToMany('App\Province', 'products_id');
    }

    public function district()
    {
        return $this->belongsToMany('App\District', 'products_id');
    }

    public function ward()
    {
        return $this->belongsToMany('App\Ward', 'products_id');
    }
}
