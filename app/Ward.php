<?php

namespace App;

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

    public function product()
    {
        return $this->hasMany('App\Products', 'id');
    }

    public function district()
    {
        return $this->belongsTo('App\District', 'code');
    }
}
