<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BuyerSellerContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        $faker = Faker\Factory::create();
        for($i=0;$i<1000;$i++) {
            DB::table('buyer_seller_contacts')->insert([
                'buyer_seller_id'=>rand(1,1000),
                'name'=>$faker->name,
                'addrest'=>$faker->address,
                'phone'=>$faker->tollFreePhoneNumber,
                'email'=>$faker->email,
            ]);
        }
    }
}
