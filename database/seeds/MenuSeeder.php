<?php

use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker\Factory::create();
        for ($i=0; $i<10; $i++) {
        	# code...
        DB::table('menus')->insert([
        	'name'=> $faker->word,
        	'parent_id'=> rand(0,10),
        	'slug' => $faker->slug,
        	'order'=> rand(1,5),
        	'type' => $faker->word,

        	]);

   		}
    }
}
