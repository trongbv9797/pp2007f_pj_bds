<?php

use App\Models\District;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('districts')->delete();
        $string = file_get_contents(public_path('assets/dist/quan_huyen.json'));
        $json_a = json_decode($string, true);
        foreach($json_a as $item){
            DB::table('districts')->insert([
                'name' => $item['name'],
                'type' => $item['type'],
                'slug' => $item['slug'],
                'name_with_type' => $item['name_with_type'],
                'path' => $item['path'],
                'path_with_type' => $item['path_with_type'],
                'code' => $item['code'],
                'parent_code' => $item['parent_code'],
                'created_at'=> date('y-m-d h:i:s'),
                'updated_at'=> date('y-m-d h:i:s'),
            ]);
        }
        
    }
}
