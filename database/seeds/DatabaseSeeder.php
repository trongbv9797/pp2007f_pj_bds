<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);

        $this->call(DistrictSeeder::class);
        // trong
        $this->call(DistrictSeeder::class);
        $this->call(ProvinceSeeder::class);
        $this->call(WardSeeder::class);
        //tai anh
        $this->call(ProductSeeder::class);
        // //viet
        $this->call(CategorySeeder::class);
        $this->call(PostSeeder::class);
        $this->call(BuyerSellerAreaSeeder::class);
        $this->call(BuyerSellerCatergorySeeder::class);
        $this->call(BuyerSellerContactSeeder::class);
        $this->call(ImageDemoSeeder::class);
        $this->call(BuyerSellerSeeder::class);
        
        

        // //hieu
        $this->call(ImageSeeder::class);
        $this->call(BrokerSeeder::class);

        //Huy
        $this->call(MenuCategorySeeder::class);
    }
}
