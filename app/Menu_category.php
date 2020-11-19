<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu_category extends Model
{
    //
    public function product()
    {
        return $this->belongsTo('App\Models\product', 'menu_category_id');
    }
}
