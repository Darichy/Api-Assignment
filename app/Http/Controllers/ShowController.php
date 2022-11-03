<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShowController extends Controller
{

   

    public function show(){
        $data = [
            "Ivan" => [
                'fullname' => "Ivan Sosu" , 
                'age' => 24 ,
                'dob' => "20 May , 1998",
                'complexion' => 'chocolate',
                'marital_status'=> 'single'
            ],
            "Karen" => [
                'occupation' => 'software Enginering',
                'gender'=> "female",
                'marital_status'=> "single",
                'complexion' => 'chocolate',
            ],
            "Dennis"=> [
                "height" => 1.9,
                "weight" => 82
            ]
               
            ];
        return response()->json($data);
    }

    public function showById($id){
        $dbi;
        $data = [
            "Ivan" => [
                'fullname' => "Ivan Sosu" , 
                'age' => 24 ,
                'dob' => "20 May , 1998",
                'complexion' => 'chocolate',
                'marital_status'=> 'single'
            ],
            "Karen" => [
                'occupation' => 'software Enginering',
                'gender'=> "female",
                'marital_status'=> "single",
                'complexion' => 'chocolate',
            ],
            "Dennis"=> [
                "height" => 1.9,
                "weight" => 82
            ]
               
            ];
        foreach($data as $key => $value)
        if($key === $id){
           return [$key => $value];
        }else{
            return("This user does not exist");
    }
}
