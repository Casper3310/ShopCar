<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateUser;
use App\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function register(CreateUser $request){

        $validata = $request->validated();

        $user = New User([
            'name' => $validata['name'],
            'email' => $validata['email'],
            'password' => bcrypt($validata['password']) ,
        ]);
        $user->save();
        return response()->json(['msg'=>"儲存成功"], 201);
    }

    public function Login( Request $request){
        $validata = $request->validate([
            'email' =>'required|email|string',
            'password'=>'required|string'
        ]);
        if(!Auth::attempt($validata)){
            return response('登入失敗',401);
        }
        $user =  $request->user();
        $tokenResult = $user->createToken('Token');
        $tokenResult->token->save();
        return response(["token" => $tokenResult->accessToken],200);
    }

    public function Logout(Request $request){
        $request->user()->token()->revoke();
        return response(['msg'=>'成功登出']);
    }

    public function user(Request $request){
        return response($request->user());
    }
}
