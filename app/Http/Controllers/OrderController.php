<?php

namespace App\Http\Controllers;

use App\order;
use Illuminate\Http\Request;
use App\Http\Services\AWSService;

class OrderController extends Controller
{
    protected $AWSService;

    public function __construct(AWSService $AWSService)
    {
        $this->AWSService = $AWSService;
    }

    public function CallBack(Request $request){ 

        $OrderNumber = $request->MerchantTradeNo;
        $orders = order::where('OrderNumber','=',$OrderNumber)->get();
        foreach ($orders as $order) {
            $order->update(['Shipment'=>1]);
        }

        $message = $OrderNumber.'已結帳';
        $this->AWSService->send_email($message);

    }

    public function LoadCancelOrder()
    {
        $userID = auth()->user()->id;
        $order = order::where('seller_id','=',$userID)
                        ->where('Cancel','=',1)
                        ->with('product')->with('user')->get();
        return $order ;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userID = auth()->user()->id;
        $order = order::where('seller_id','=',$userID)
                        ->where('Cancel','=',0)
                        ->with('product')->with('user')->get();
        
        return $order ;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(order $order)
    {
        $userID = auth()->user()->id;
        if($userID === $order->seller_id){
            $order->update(['Cancel'=>1]);
            return $order;
        }
        else{
            return("非用戶商品");
        }
        
    }
}
