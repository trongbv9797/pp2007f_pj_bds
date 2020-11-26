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
        //insert Support Menu

        DB::table('menus')->insert([
        	'name'=> 'HƯỚNG DẪN',
        	'parent_id'=>'0',
        	'slug' => '',
        	'order'=> '1',
        	'type' => 'Support',

            ]);
            
            DB::table('menus')->insert([
                'name'=> 'QUY ĐỊNH',
                'parent_id'=>'0',
                'slug' => '',
                'order'=> '2',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'TỔNG ĐÀI HỖ TRỢ',
                'parent_id'=>'0',
                'slug' => '',
                'order'=> '3',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'QUỐC GIA',
                'parent_id'=>'0',
                'slug' => '',
                'order'=> '4',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Báo giá & hỗ trợ',
                'parent_id'=>'1',
                'slug' => 'bao-gia-quang-cao',
                'order'=> '1',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Câu hỏi thường gặp',
                'parent_id'=>'1',
                'slug' => 'nhung-cau-hoi-thuong-gap',
                'order'=> '2',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Về chúng tôi',
                'parent_id'=>'1',
                'slug' => 'gioi-thieu',
                'order'=> '3',
                'type' => 'Support',
    
            ]);
            DB::table('menus')->insert([
                'name'=> 'Thông báo',
                'parent_id'=>'1',
                'slug' => 've-batdongsancomvn',
                'order'=> '4',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Liên hệ',
                'parent_id'=>'1',
                'slug' => 'lien-he',
                'order'=> '5',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Sitemap',
                'parent_id'=>'1',
                'slug' => 'trang-sitemap',
                'order'=> '6',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Quy định đăng tin',
                'parent_id'=>'2',
                'slug' => 'quy-dinh-dang-tin',
                'order'=> '1',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Quy chế hoạt động',
                'parent_id'=>'2',
                'slug' => 'quy-dinh-su-dung',
                'order'=> '2',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Điều khoản thỏa thuận',
                'parent_id'=>'2',
                'slug' => 'dieu-khoan-thoa-thuan',
                'order'=> '3',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Chính sách bảo mật',
                'parent_id'=>'2',
                'slug' => 'chinh-sach-bao-mat-thong-tin',
                'order'=> '4',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Giải quyết khiếu nại',
                'parent_id'=>'2',
                'slug' => 'giai-quyet-khieu-nai',
                'order'=> '5',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Góp ý báo lỗi',
                'parent_id'=>'2',
                'slug' => 'shrbaUORGfT7arZVJ',
                'order'=> '6',
                'type' => 'Support',
    
            ]);

            

            DB::table('menus')->insert([
                'name'=> 'Tổng đài CSKH: 1900 1881',
                'parent_id'=>'3',
                'slug' => 'https://file4.batdongsan.com.vn/images/newhome/hotline.png',
                'order'=> '7',
                'type' => 'Support',
    
            ]);

           

            DB::table('menus')->insert([
                'name'=> 'hotro@batdongsan.com.vn',
                'parent_id'=>'3',
                'slug' => 'https://file4.batdongsan.com.vn/images/newhome/email.png',
                'order'=> '9',
                'type' => 'Support',
    
            ]);


            DB::table('menus')->insert([
                'name'=> 'cskh@batdongsan.com.vn',
                'parent_id'=>'3',
                'slug' => 'https://file4.batdongsan.com.vn/images/newhome/icon3x/ic_mailbox1.png',
                'order'=> '11',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Chọn quốc gia',
                'parent_id'=>'4',
                'slug' => '',
                'order'=> '1',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Chọn ngôn ngữ',
                'parent_id'=>'4',
                'slug' => '',
                'order'=> '2',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'english.html',
                'parent_id'=>'4',
                'slug' => '',
                'order'=> '3',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Tải ứng dụng Batdongsan.com.vn',
                'parent_id'=>'0',
                'slug' => '',
                'order'=> '5',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'https://file4.batdongsan.com.vn/images/newhome/google-play.png',
                'parent_id'=>'5',
                'slug' => '',
                'order'=> '1',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'https://file4.batdongsan.com.vn/images/newhome/apple-app-store.png',
                'parent_id'=>'5',
                'slug' => '',
                'order'=> '2',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Đăng kí ngay để nhận thông tin từ Batdongsan.com.vn',
                'parent_id'=>'0',
                'slug' => '',
                'order'=> '6',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Nhập email của bạn',
                'parent_id'=>'6',
                'slug' => '',
                'order'=> '1',
                'type' => 'Support',
    
            ]);

            DB::table('menus')->insert([
                'name'=> 'Gửi',
                'parent_id'=>'6',
                'slug' => '',
                'order'=> '2',
                'type' => 'Support',
    
            ]);

   	}
   	
}

