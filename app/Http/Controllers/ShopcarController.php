<?php

namespace App\Http\Controllers;

use App\shopcar;
use Illuminate\Http\Request;

class ShopcarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return shopcar::find(1)->checkout();
        $user = auth()->user();
        $shopcar = shopcar::where('user_id','=',$user->id)->get();

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
        $user = auth()->user();
        $shopcar = shopcar::create(['user_id'=>$user->id,
                                    'product_id'=>$request->product_id]);

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
        //
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
