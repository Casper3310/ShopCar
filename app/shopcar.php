<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class shopcar extends Model
{
    protected $guarded = [''];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function order()
    {
        return $this->hasMany('App\order');
    }

    public function product()
    {
        return $this->hasMany('App\product');
    }

    public function checkout(){
        $order = $this->order()->create([   'user_id'=>$this->user_id,
                                            'product_id'=>$this->product_id,
                                            ]);
    }
}
