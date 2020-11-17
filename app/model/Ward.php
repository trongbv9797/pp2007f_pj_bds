<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class Ward extends Model
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
