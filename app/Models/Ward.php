<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Models;

class Ward extends Models
{
    //
    protected $fillable =[
        'name',
        'type',
        'slug',
        'name_with_type',
        'path',
        'path_with_type',
        'code',
        'parent_code'
    ];
}
