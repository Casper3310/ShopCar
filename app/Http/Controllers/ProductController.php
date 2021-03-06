<?php

namespace App\Http\Controllers;

use App\product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function GetUserProduct(){
        $userID = auth()->user()->id;
        $productdata = product::where('user_id','=',$userID)->get();
        return $productdata;
    }

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
        $request->validate([
            'name' =>'required|string',
            'price'=>'required|numeric|min:0|max:10000',
            'quantity' =>'required|numeric|min:0|max:999',
            'image' => 'image|mimes:jpeg,png,jpg',
        ]);
        $user = auth()->user();
        $path = $request->file('picture')->store('image');
        $shopcar = product::create(['user_id'=>$user->id,
                                    'name'=>$request->name,
                                    'price'=>$request->price,
                                    'quantity'=>$request->quantity,
                                    'picture_path'=>$path]);

        return response($shopcar);
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
        $request->validate([
            'name' =>'required|string',
            'price'=>'required|numeric|min:0|max:10000',
            'quantity' =>'required|numeric|min:0|max:999',
            'image' => 'image|mimes:jpeg,png,jpg',
        ]);
        $user = auth()->user();
        if(($user->id)!==($product->user_id)){
            return response('???????????????');
        }

        if($product->picture_path){
            Storage::delete($product->picture_path);
        }
        $path = $request->file('picture')->store('image');
        $product->update([  'user_id'=>$user->id,
                            'name'=>$request->name,
                            'price'=>$request->price,
                            'quantity'=>$request->quantity,
                            'picture_path'=>$path]);

        return response($product);
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
            return response('???????????????');
        }
        Storage::delete($product->picture_path);

        $product->delete();
        return response('????????????');
    }
}
