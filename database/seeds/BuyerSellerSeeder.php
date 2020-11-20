<?php

use Illuminate\Database\Seeder;

class BuyerSellerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 0; $i < 1000; $i++){      
            DB::table('buyer_sellers')->insert([

            
            'title'=>$faker->sentence,

            'content'=>$faker->paragraph,

            'buyer_seller_catergory_id'=>rand(1,6),
            'district_id'=>rand(1,100),
            'price'=>rand(1,100),
            'buyer_seller_area_id'=>rand(1,4),
            'start'=> $faker->date($format = 'Y-m-d', $max = 'now'),
            'end'=> $faker->date($format = 'Y-m-d', $max = 'now'),

            ]);
        }
    }
}
