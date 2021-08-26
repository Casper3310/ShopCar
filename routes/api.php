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
    Route::post('shopcar/checkout', 'ShopcarController@checkout');
    Route::resource('product', 'ProductController',['except' => ['index']]);
    Route::get('GetUserProduct', 'ProductController@GetUserProduct');
    Route::get('order/LoadCancelOrder', 'OrderController@LoadCancelOrder');
    Route::resource('order', 'OrderController');
    Route::get('Chat/GetMessage', 'ChatMessageController@index');
    Route::post('Chat/SendMessage', 'ChatMessageController@SendMessage');
});


Route::post('order/CallBack','OrderController@CallBack');

Route::get('test','TestController@test');
Route::post('CallBack','TestController@CallBack');

Route::get('login/github', 'Auth\LoginController@redirectToProvider');
Route::get('login/github/callback', 'Auth\LoginController@handleProviderCallback');

Route::get('login/google', 'Auth\LoginController@GoogleredirectToProvider');
Route::get('login/google/callback', 'Auth\LoginController@GooglehandleProviderCallback');