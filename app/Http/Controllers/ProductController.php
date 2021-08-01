<?php

namespace App\Http\Controllers;

use App\product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = product::all();
        return $data ;
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
        $shopcar = product::create(['user_id'=>$user->id,
                                    'name'=>$request->name,
                                    'price'=>$request->price,
                                    'quantity'=>$request->quantity,
                                    'picture_path'=>""]);

        return response('新增成功');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, product $product)
    {
        $user = auth()->user();
        if(($user->id)!==($product->user_id)){
            return response('非用戶產品');
        }

        $product->update([  'user_id'=>$user->id,
                            'name'=>$request->name,
                            'price'=>$request->price,
                            'quantity'=>$request->quantity,
                            'picture_path'=>""]);

        return response('更新成功');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(product $product)
    {
        $user = auth()->user();
        if(($user->id)!==($product->user_id)){
            return response('非用戶產品');
        }

        $product->delete();
        return response('刪除成功');
    }
}
