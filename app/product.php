<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    protected $guarded = [''];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function shopcar()
    {
        return $this->belongsTo('App\shopcar');
    }

    public function order()
    {
        return $this->belongsTo('App\order');
    }
}
