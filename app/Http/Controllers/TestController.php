<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Test;
use Ecpay\Sdk\Factories\Factory;
use Ecpay\Sdk\Services\UrlService;
use Ecpay\Sdk\Exceptions\RtnException;

class TestController extends Controller
{
    public function test(){

        try {
            $factory = new Factory([
                'hashKey' => '5294y06JbISpM5x9',
                'hashIv' => 'v77hoKGq4kWxNNIS',
            ]);
            $autoSubmitFormService = $factory->create('AutoSubmitFormWithCmvService');
        
            $input = [
                'MerchantID' => '2000132',
                //MerchantTradeNo 特店交易編號均為唯一值，不可重複使用。
                'MerchantTradeNo' => 'Test' . time(),
                'MerchantTradeDate' => date('Y/m/d H:i:s'),
                'PaymentType' => 'aio',
                'TotalAmount' => 200,
                'TradeDesc' => UrlService::ecpayUrlEncode('測試交易描述'),
                'ItemName' => '名稱範例商品一批 200 TWD x 1#一批 555 TWD x 1',
                'ReturnURL' => 'https://9d55041276f1.ngrok.io/api/CallBack',
                'ClientBackURL' =>'http://localhost/',
                'ChoosePayment' => 'Credit',
                'EncryptType' => 1,
            ];
            $action = 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5';
            echo $autoSubmitFormService->generate($input, $action);
        } catch (RtnException $e) {
            echo '(' . $e->getCode() . ')' . $e->getMessage() . PHP_EOL;
        } 
    }

    public function CallBack(Request $request){ 

        $aaa = strstr('50ID' . time(),"ID",true);
        $input =json_encode($request->all()) ;
        Test::create(['text'=>$input]);
        return $aaa;
    }

    public function sss(){
        return 444;
    }
}
