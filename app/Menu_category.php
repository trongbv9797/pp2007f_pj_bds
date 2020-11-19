<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu_category extends Model
{
    //
    public function product()
    {
        return $this->belongsTo('App\Products', 'menu_category_id');
    }
}
