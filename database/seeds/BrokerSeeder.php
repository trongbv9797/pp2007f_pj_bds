<?php

use Illuminate\Database\Seeder;

class BrokerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY TNHH DỊCH VỤ BĐS LÊ DUY HIẾU',
            'address' => '1/12 Đường Số 6, Phường 5, Gò Vấp, Hồ Chí Minh, Việt Nam',
            'mobile' => '0769969928',
            'mail' => 'cskh.gigareal@gmail.com',
            'website' => 'http://gigareal.vn',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY CP - TM ĐẦU TƯ BĐS KHUẤT ĐẠI VIỆT',
            'address' => '485 Lê Văn Quới, Bình Trị Đông A, Bình Tân, Hồ Chí Minh, Việt Nam',
            'mobile' => '0911916191',
            'mail' => 'vestalands@gmail.com',
            'website' => 'http://Vestaland.vn',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY TNHH DỊCH VỤ BĐS NGUYỄN LƯƠNG TÀI ANH',
            'address' => '1/12 Đường Số 6, Phường 5, Gò Vấp, Hồ Chí Minh, Việt Nam',
            'mobile' => '0769969928',
            'mail' => 'cskh.gigareal@gmail.com',
            'website' => 'http://gigareal.vn',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY TNHH ĐẦU TƯ BẤT ĐỘNG SẢN BÙI VĂN TRỌNG',
            'address' => '125 Bà Triệu, Hà Cầu, Hà Đông, Hà Nội, Việt Nam',
            'mobile' => '0963343833',
            'mail' => 'namnt.nhl@gmail.com',
            'website' => ' Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY TNHH BĐS NGUYỄN QUANG HUY',
            'address' => '15 đường R Khu đô thị Lakeview city, 697 Đỗ Xuân Hợp, An Phú, Quận 2, Hồ Chí Minh, Việt Nam',
            'mobile' => '0906656667',
            'mail' => ' myk http://mykimland.vn/',
            'website' => 'Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY CỔ PHẦN NGUYỄN NGỌC SƠN',
            'address' => '47 đường Trần Lựu, An Phú, Quận 2, Hồ Chí Minh, Việt Nam',
            'mobile' => '0905747886',
            'mail' => 'info@levin.vn',
            'website' => 'Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN PP2007F',
            'address' => '15 đường R Khu đô thị Lakeview city, 697 Đỗ Xuân Hợp, An Phú, Quận 2, Hồ Chí Minh, Việt Nam',
            'mobile' => '0916592969',
            'mail' => 'phamlanhbds@gmail.com',
            'website' => ' http://pageland.vn/',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN BẤT ĐỘNG SẢN AWESOME ACADEMY',
            'address' => '8-10, Nguyễn Bá Tuyển, 12, Tân Bình, Hồ Chí Minh, Việt Nam',
            'mobile' => '0989199898',
            'mail' => 'victoryreal.vn@gmail.com',
            'website' => 'Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ QUẢN LÝ THIÊN PHÚC LAND',
            'address' => '30 Yên Bình, Phúc La, Hà Đông, Hà Nội, Việt Nam',
            'mobile' => '00943075959',
            'mail' => 'hangngavpb243@gmail.com',
            'website' => 'Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'DO VILLAS',
            'address' => 'Vinhomes skylake, Mỹ Đình 1, Nam Từ Liêm, Hà Nội, Việt Nam',
            'mobile' => '0983786378',
            'mail' => 'bdsdothanh.info@gmail.com',
            'website' => 'Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY CỔ PHẦN QUẢN LÝ VÀ KHAI THÁC TÀI SẢN BẾN THÀNH',
            'address' => '51 Nguyễn Sơn Hà, 5, Quận 3, Hồ Chí Minh, Việt Nam',
            'mobile' => '0915202529',
            'mail' => 'benthanhrealty@gmail.com',
            'website' => 'Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'name' => 'CÔNG TY CỔ PHẦN TẬP ĐOÀN NAM MINH',
            'address' => '110A Chu Văn An, 26, Bình Thạnh, Hồ Chí Minh, Việt Nam',
            'mobile' => '0941085085',
            'mail' => 'info@namminh.com.vn',
            'website' => 'Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $timestamps = true;
    }
}
