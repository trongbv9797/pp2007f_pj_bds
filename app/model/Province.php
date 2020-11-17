<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
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
