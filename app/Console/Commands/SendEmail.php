<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\MailController;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class SendEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Auto Send Emails';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $mail = User::get('email');

        $details = [
            'title' => 'Mail from PP-2007',
            'body' => 'This is for testing email using smtp'
        ];
    
        \Mail::to($mail)->send(new \App\Mail\MyTestMail($details));
    
        echo "Email is Sent.";
    }
}
