<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    //
    public function comments()
    {
        return $this->belongsTo('App\Models\product', 'image_id');
    }
}
