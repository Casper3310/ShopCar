<?php
namespace App\Http\Services;

use Aws\S3\S3Client;
use Aws\Sns\SnsClient; 
use Aws\Exception\AwsException;
use AWS;

class AWSService
{
    public function send_email($message){
        $aws = AWS::createClient('sns');
        $aws->publish([
            'Message'=>$message,
            'TargetArn'=>'arn:aws:sns:ap-northeast-1:937079787269:ShopCar']);
    }
    
}
