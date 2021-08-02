<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class shopcar extends Model
{
    protected $guarded = [''];
    private $rate = 1;

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
        return $this->belongsTo('App\product');
    }

    public function checkout(){

        if($this->user->level === 2){
            $this->rate = 0.7;
        }

        $price =  ceil($this->product->price * $this->rate);
        $order = $this->order()->create([
                'user_id'=>$this->user_id,
                'product_id'=>$this->product_id,
                'quantity'=>$this->quantity,
                'price'=>$price * $this->quantity,]);
        $this->update(['check_out'=>true]);

        $this->product->update(['quantity'=>$this->product->quantity-$this->quantity]);

        return $order;

    }

    
}
