<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class APIRequest extends FormRequest
{
   protected function failedValidation(Validator $Validator){
        throw New HttpResponseException(response(['error'=>$Validator->errors()],400));
   }
   
}
