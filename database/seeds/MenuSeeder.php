<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // insert right menu
        DB::table('menus')->insert([
            'name' => 'Lọc theo khoảng giá',
            'parent_id' => '0',
            'slug' => '',
            'order' => '1',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);

        DB::table('menus')->insert([
            'name' => 'Lọc theo diện tích',
            'parent_id' => '0',
            'slug' => '',
            'order' => '2',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);

        DB::table('menus')->insert([
            'name' => 'Mua bán nhà đất',
            'parent_id' => '0',
            'slug' => '',
            'order' => '3',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);
        DB::table('menus')->insert([
            'name' => 'Hỗ trợ tiện ích',
            'parent_id' => '0',
            'slug' => '',
            'order' => '4',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);

        DB::table('menus')->insert([
            'name' => '500 - 800 triệu',
            'parent_id' => '1',
            'slug' => '500-800-trieu',
            'order' => '1',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);

        DB::table('menus')->insert([
            'name' => '800 triệu - 1 tỷ',
            'parent_id' => '1',
            'slug' => '800-trieu-1-ty',
            'order' => '2',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);

        DB::table('menus')->insert([
            'name' => '<= 30 m2',
            'parent_id' => '2',
            'slug' => '<=30m2',
            'order' => '1',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);

        DB::table('menus')->insert([
            'name' => '30 - 50 m2',
            'parent_id' => '2',
            'slug' => '30 - 50 m2',
            'order' => '2',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);

        DB::table('menus')->insert([
            'name' => 'Dự tính chi phí làm nhà ',
            'parent_id' => '4',
            'slug' => 'du-tinh-chi-phi-lam-nha',
            'order' => '1',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);

        DB::table('menus')->insert([
            'name' => 'Tính lãi suất ',
            'parent_id' => '4',
            'slug' => 'tinh-lai-suat',
            'order' => '2',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);

        DB::table('menus')->insert([
            'name' => 'Quy trình xây nhà',
            'parent_id' => '4',
            'slug' => 'quy-trinh-xay-nha',
            'order' => '3',
            'type' => 'right',
            'created_at' => date('y-m-d h:i:s'),
            'updated_at' => date('y-m-d h:i:s')

        ]);
    }
}
