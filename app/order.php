<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    protected $guarded = [''];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function shopcar()
    {
        return $this->belongsTo('App\shopcar','shopcar_id');
    }

    public function product()
    {
        return $this->belongsTo('App\product');
    }

}
