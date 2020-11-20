<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i<50; $i++) {
        $faker = Faker\Factory::create();
        DB::table('articles')->insert ([
        'title' => $faker->sentence,
        'type' => rand(0,6),    
        'image_id' => rand(1, 1000),
        'slug' => rand(1, 1000),       
        'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
    }
}
