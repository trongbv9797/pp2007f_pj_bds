<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    //
    protected $fillablle = [
        'name',
        'type',
        'slug',
        'name_with_slug',
        'path',
        'path_with_type',
        'code',
        'parent_code'
    ];
}
