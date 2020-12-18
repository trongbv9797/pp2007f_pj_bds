<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Slide;

class ChangeSlide extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'changeslide:name';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $slide = Slide::find(9);
        $slide->link = "content2.jpg";
        $slide->save();
        echo "success";
    }
}
