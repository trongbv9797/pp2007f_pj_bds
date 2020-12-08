<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Products extends Model
{
    //
    use SoftDeletes;
    
    public function image()
    {
        return $this->hasMany(Image::class, 'products_id');
    }

    public function post_type()
    {
        return $this->belongsTo(Post_type::class, 'post_type_id');
    }

    public function menu_category()
    {
        return $this->belongsTo(Menu_category::class,'menu_category_id');
    }

    public function province()
    {
        return $this->belongsTo(Province::class, 'provinces_id');
    }

    public function district()
    {
        return $this->belongsTo(District::class, 'districts_id');
    }

    public function ward()
    {
        return $this->belongsTo(Ward::class, 'wards_id');
    }




    protected $fillable = [
        'title', 'slug'
    ];

    public function owner()
    {
        return $this->belongsTo(User::class);
    }


}
