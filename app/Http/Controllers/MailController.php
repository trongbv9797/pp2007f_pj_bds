<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    //
    public function sendemail() 
    {
        $mail = User::get('email');

        $details = [
            'title' => 'Mail from PP-2007',
            'body' => 'This is for testing email using smtp'
        ];
    
        \Mail::to('garunemo3@gmail.com')->send(new \App\Mail\MyTestMail($details));
    
        echo "Email is Sent.";
    }
}
