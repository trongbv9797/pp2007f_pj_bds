<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class ChangeNameUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ChangeNameUsers:name';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Change Name 0ne User';

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
        $user = User::find(7);
        $user->username = "New user";
        $user->save();
        echo "Update accessed";

    }
}
