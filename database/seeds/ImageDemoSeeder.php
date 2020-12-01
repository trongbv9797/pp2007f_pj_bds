<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageDemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 0; $i < 1500; $i++){      

            DB::table('image_demos')->insert(
                [
                'name'=>$faker->sha1,
                'buyer_seller_id'=>rand(1,1000),
                'link'=>$faker->imageUrl($width = 640, $height = 480, 'cats'),
                
                ]
            );
        }
    }   
}
