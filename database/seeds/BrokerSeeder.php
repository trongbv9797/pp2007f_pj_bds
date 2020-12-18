<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
            'broker_images' => 'https://file4.batdongsan.com.vn/resize/200x200/2019/09/25/PGsxuI1y/20190925100210-32ee.jpg',
            'name' => 'CÔNG TY TNHH DỊCH VỤ BĐS LÊ DUY HIẾU',
            'address' => 'Số 10, Ngõ 2, Hà Trì 5, Hà Cầu, Hà Đông, Hà Nội, Việt Nam',
            'mobile' => '0769969928',
            'mail' => 'cskh.gigareal@gmail.com',
            'website' => 'http://gigareal.vn',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'broker_images' => 'https://file4.batdongsan.com.vn/resize/200x200/2019/05/24/PGsxuI1y/20190524155113-8a9e.jpg',
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
            'broker_images' => 'https://file4.batdongsan.com.vn/resize/200x200/2017/12/28/JGcIp0rf/20171228134439-4160.jpg',
            'name' => 'CÔNG TY TNHH DỊCH VỤ BĐS NGUYỄN LƯƠNG TÀI ANH',
            'address' => '237 Nguyễn Văn Linh, Vĩnh Trung, Thanh Khê, Đà Nẵng, Việt Nam',
            'mobile' => '0769969928',
            'mail' => 'cskh.gigareal@gmail.com',
            'website' => 'http://gigareal.vn',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'broker_images' => 'https://file4.batdongsan.com.vn/resize/200x200/2017/10/04/eCGLjNi5/20171004152143-ca64.jpg',
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
            'broker_images' => 'https://file4.batdongsan.com.vn/resize/200x200/2015/08/08/JGcIp0rf/20150808115756-936c.jpg',
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
            'broker_images' => 'https://file4.batdongsan.com.vn/resize/200x200/2020/06/23/n1AwoD7S/20200623140450-4db7.jpg"',
            'name' => 'CÔNG TY CỔ PHẦN NGUYỄN NGỌC SƠN',
            'address' => '97 Đường D32, KDC Việt Sing, Kp4, An Phú, Thuận An, Bình Dương, Việt Nam',
            'mobile' => '0905747886',
            'mail' => 'info@levin.vn',
            'website' => 'Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'broker_images' => 'https://file4.batdongsan.com.vn/resize/200x200/2020/03/02/3ZsSL6gy/20200302101745-72d2.jpg',
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
            'broker_images' =>'https://file4.batdongsan.com.vn/images/nophoto/broker-no-photo-500_285.jpg',
            'name' => 'CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN BẤT ĐỘNG SẢN AWESOME ACADEMY',
            'address' => 'Tầng 11 Tòa nhà Handico Tower, đường Phạm Hùng, Phường Mễ Trì, Quận Nam Từ Liêm, Hà Nội',
            'mobile' => '0989199898',
            'mail' => 'victoryreal.vn@gmail.com',
            'website' => 'Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'broker_images' => 'https://file4.batdongsan.com.vn/resize/200x200/2019/08/22/PGsxuI1y/20190822155228-8f6d.jpg',
            'name' => 'CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ QUẢN LÝ THIÊN PHÚC LAND',
            'address' => '104B Võ Thị Sáu, Quyết Thắng, Biên Hòa, Đồng Nai, Việt Nam',
            'mobile' => '00943075959',
            'mail' => 'hangngavpb243@gmail.com',
            'website' => 'Đang cập nhật',
            'content' => $faker->paragraph($nbSentences = 40, $variableNbSentences = true),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);
        $faker = Faker\Factory::create();
        DB::table('brokers')->insert([
            'broker_images' => 'https://file4.batdongsan.com.vn/resize/200x200/2020/10/05/RUFz0fap/20201005164326-3c36.jpg',
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
            'broker_images' => 'https://file4.batdongsan.com.vn/resize/200x200/2020/10/02/PGsxuI1y/20201002110751-f65c.jpg',
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
            'broker_images' =>'https://file4.batdongsan.com.vn/resize/200x200/2019/11/07/3ZsSL6gy/20191107141803-7d94.jpg',
            'name' => 'CÔNG TY CỔ PHẦN TẬP ĐOÀN NAM MINH',
            'address' => '128 Phố Cấm, Gia Viên, Ngô Quyền, Hải Phòng, Việt Nam',
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
