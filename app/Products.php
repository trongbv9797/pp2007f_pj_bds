<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    //
    public function image()
    {
        return $this->hasMany('App\Models\Image');
    }

    public function menu_category()
    {
        return $this->hasMany('App\Models\Menu_category');
    }

    public function province()
    {
        return $this->belongsToMany('App\model\Province', 'products_id');
    }

    public function district()
    {
        return $this->belongsToMany('App\model\District', 'products_id');
    }

    public function ward()
    {
        return $this->belongsToMany('App\model\Ward', 'products_id');
    }
}
