<?php

namespace App\Http\Controllers;

use App\shopcar;
use App\product;
use Illuminate\Http\Request;
use App\Http\Services\ECPlayService;
use App\Http\Services\AWSService;
use Illuminate\Support\Facades\DB;

class ShopcarController extends Controller
{
    protected $ECPlayService;
    protected $AWSService;

    public function __construct(ECPlayService $ECPlayService,AWSService $AWSService)
    {
        $this->ECPlayService = $ECPlayService;
        $this->AWSService = $AWSService;
    }


    public function checkout(){
        $user = auth()->user();
        $shopcars = shopcar::where('user_id','=',$user->id)
                            ->where('check_out','=',0)
                            ->get();

        if(count($shopcars)==0){
            return response('無購物車項目');
        }

        foreach ($shopcars as  $shopcar) {
            if($shopcar->product->checkquantity($shopcar->quantity)){
                return $shopcar->product->name.'商品數量不足';
            }            
        }

        $OrderNumber = $user->id.'ID' . time();
        $ItemName="";
        $TotalAmount=0;

        foreach ($shopcars as  $shopcar) {
            $price = $shopcar->product->price;

            $shopcar->checkout($OrderNumber);
            $pruduct = $shopcar->product->name;
            $ItemName =$ItemName."$pruduct $price X $shopcar->quantity"."#";
            $TotalAmount+=$price*$shopcar->quantity;
        }
        $message = '已送出訂單';
        $this->AWSService->send_email($message);
        return $this->ECPlayService->credit_play($OrderNumber,$ItemName,$TotalAmount);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        $user = auth()->user();
        $shopcar = shopcar::where('user_id','=',$user->id)
                            ->where('check_out','=','0')
                            ->with('product')->get();

        return $shopcar;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validata = $request->validate([
            'id' =>'required|numeric',
            'BuyNumber'=>'required|numeric'
        ]);
        $product = product::find($request->id);
        if($product->checkquantity($request->quantity)){
            return response('商品數量不足',400);
        }
        $user = auth()->user();
        $shopcar = shopcar::create(['user_id'=>$user->id,
                                    'product_id'=>$request->id,
                                    'quantity'=>$request->BuyNumber])
                                    ->get();

        return $shopcar;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\shopcar  $shopcar
     * @return \Illuminate\Http\Response
     */
    public function show(shopcar $shopcar)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\shopcar  $shopcar
     * @return \Illuminate\Http\Response
     */
    public function edit(shopcar $shopcar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\shopcar  $shopcar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, shopcar $shopcar)
    {
        $user = auth()->user();

        $shopcar->update([  'user_id'=>$user->id,
                            'product_id'=>$request->product_id]);

        return response('更新成功');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\shopcar  $shopcar
     * @return \Illuminate\Http\Response
     */
    public function destroy(shopcar $shopcar)
    {
        $shopcar->delete();
        return response('刪除成功');
    }
}
