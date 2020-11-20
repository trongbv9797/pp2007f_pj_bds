<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Models;

class Province extends Models
{
    //
    protected $fillable = [
        'name',
        'slug',
        'type',
        'name_with_code',
        'code',
    ];
}
