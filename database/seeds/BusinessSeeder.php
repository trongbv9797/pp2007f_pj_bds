<?php

use Illuminate\Database\Seeder;

class BusinessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 0; $i < 20; $i++){   
        DB::table('business')->insert([
            'name' => 'CÔNG TY CPĐT PHÚ CƯỜNG KIÊN GIANG',
            'address' => 'Tòa nhà số 1, đường Hà Huy Tập, khu đô thị Phú Cường, An Hòa, Rạch Giá, Kiên Giang, Việt Nam',
            'mobile' => 'Đang cập nhật',
            'mail' => 'info@pckg.com.vn',
            'website' => 'http://www.pckg.com.vn',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
            ]);
        }
    }
}
