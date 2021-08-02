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
        return $this->hasMany('App\shopcar');
    }

    public function order()
    {
        return $this->hasMany('App\order');
    }

    public function checkquantity($Request_quantity){
        if($Request_quantity > $this->quantity){
            return true;
        }
        else{
            return false;
        }

    }
}
