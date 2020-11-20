<?php

use Illuminate\Database\Seeder;

class BuyerSellerAreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('buyer_seller_areas')->insert([
            'name' =>'<=30m2',
            'min_area' => 0 ,
            'max_area'=> 30 ,
        ]);
        DB::table('buyer_seller_areas')->insert([
            'name' =>'30m2-50m2',
            'min_area' => 30,
            'max_area'=> 50,
        ]);
        DB::table('buyer_seller_areas')->insert([
            'name' =>'50m2-80m2',
            'min_area' => 50,
            'max_area'=> 80,
        ]);
        DB::table('buyer_seller_areas')->insert([
            'name' =>'80m2-100m2',
            'min_area' => 80,
            'max_area'=> 100,
        ]);
    }
}
