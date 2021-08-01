<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'AuthController@register');
Route::post('Login', 'AuthController@Login');
Route::get('product','ProductController@index');

route::group(['middleware'=>'auth:api'],function(){
    Route::get('Logout', 'AuthController@Logout');
    Route::resource('shopcar', 'ShopcarController');
    Route::resource('product', 'ProductController',['except' => ['index']]);
    
});