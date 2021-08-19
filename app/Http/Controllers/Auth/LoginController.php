<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Socialite;
use App\User;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

     /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider()
    {
        $url = Socialite::driver('github')->stateless()->redirect()->getTargetUrl();
        //$url = Socialite::driver('github')->stateless()->redirect();
        return $url;
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback()
    {
        $githubuser = Socialite::driver('github')->stateless()->user();

        $user = ['name'=>$githubuser->user['login'],
                'email'=>$githubuser->user['email'],
                'password'=>$githubuser->user['id'],
                ];

        if(!Auth::attempt($user)){
            $user = New User([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => bcrypt($user['password']) ,
            ]);
            $user->save();
        }
        $user = Auth::user();
        $tokenResult = $user->createToken('Token');
        $tokenResult->token->save();
        return response(["token" => $tokenResult->accessToken,"user"=>$user],200);

        //return redirect(env('APP_URL'));
        //return response($user->token);
        // $user->token;
    }

    public function GoogleredirectToProvider()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function GooglehandleProviderCallback()
    {
        $user = Socialite::driver('google')->stateless()->user();
        dd($user);
        // $user->token;
    }
}
