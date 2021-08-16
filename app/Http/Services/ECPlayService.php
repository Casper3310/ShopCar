<?php
namespace App\Http\Services;

use Ecpay\Sdk\Factories\Factory;
use Ecpay\Sdk\Services\UrlService;
use Ecpay\Sdk\Exceptions\RtnException;

class ECPlayService
{
    public function credit_play($OrderNumber,$ItemName,$TotalAmount){
        try {
            $factory = new Factory([
                'hashKey' => '5294y06JbISpM5x9',
                'hashIv' => 'v77hoKGq4kWxNNIS',
            ]);
            $autoSubmitFormService = $factory->create('AutoSubmitFormWithCmvService');
        
            $input = [
                'MerchantID' => '2000132',
                //MerchantTradeNo 特店交易編號均為唯一值，不可重複使用。
                'MerchantTradeNo' => $OrderNumber,
                'MerchantTradeDate' => date('Y/m/d H:i:s'),
                'PaymentType' => 'aio',
                'TotalAmount' => $TotalAmount,
                'TradeDesc' => UrlService::ecpayUrlEncode('測試交易描述'),
                'ItemName' => $ItemName,
                'ReturnURL' => 'https://shopcar.hopto.org/api/order/CallBack',
                'ClientBackURL' =>'https://shopcar.hopto.org/',
                'ChoosePayment' => 'Credit',
                'EncryptType' => 1,
            ];
            $action = 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5';
            return $autoSubmitFormService->generate($input, $action);
        } catch (RtnException $e) {
            return '(' . $e->getCode() . ')' . $e->getMessage() . PHP_EOL;
        }
    }
    
}
