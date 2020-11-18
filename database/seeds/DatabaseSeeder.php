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
<<<<<<< 6bc15b449929d15d80e19798726233117afaca67
        $this->call(ProvinceSeeder::class);
=======
        $this->call(CategorySeeder::class);

>>>>>>> create_seeder_menu_category
    }
}
