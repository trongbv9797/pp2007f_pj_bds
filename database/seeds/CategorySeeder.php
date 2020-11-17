<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //SeederCategory
        DB::table('menu_category')->insert([
            ['name' => 'Ban can ho Chung cu'],
            ['name' => 'Ban nha rieng'],
            ['name' => 'Ban nha mat pho'],
            ['name' => 'Cho thue can ho chung cu'],
            ['name' => 'Cho thue nha rieng'],
            ['name' => 'Cho thue nha mat pho'],

        ]);

    }
}
