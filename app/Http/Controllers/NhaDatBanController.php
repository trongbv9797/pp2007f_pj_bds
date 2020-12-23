<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Image;
use App\Models\Products;
use App\Models\Province;
use App\Models\Ward;
use App\Repositories\ImageRepository;
use App\Repositories\ImageRepositoryInterface;
use App\Repositories\NhaDatBanRepositoryInterface;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Repositories\ProductRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;

class NhaDatBanController extends Controller
{
    //
    protected $productRepository;

    protected $imageRepository;

    public function __construct(ProductRepositoryInterface $productRepository, ImageRepositoryInterface $imageRepository, NhaDatBanRepositoryInterface $productRepository123)
    {
        $this->productRepository = $productRepository;

        $this->imageRepository = $imageRepository;
    }
    public function testRepo()
    {
        $products = $this->productRepository->getProducts();
        return view('RepositoryTest.nhadatban', compact('products'));
    }

    public function index(Request $request)
    {
        //viet lai 14 TH logic
        //ko ton tai 4 GET
        if (!isset($_GET['province']) && !isset($_GET['district']) && !isset($_GET['price']) && !isset($_GET['area'])) {
            $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
            $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1
                            ORDER BY post_type_id DESC, products.created_at DESC'));
            $count_posts = count($result);
            var_dump('1 ko tt 4 get');
            return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts'));
        }
        // ton tai GET[province]
        elseif (isset($_GET['province']) && !isset($_GET['price']) && !isset($_GET['district']) && !isset($_GET['area'])) {
            $province_name = Province::where('code', $_GET['province'])->get('name');
            $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
            $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code , provinces.count_posts, districts.name_with_type,wards.name_with_type
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' '
                . 'ORDER BY post_type_id DESC, products.created_at DESC'));
            $count_posts = count($result);
            $districts = District::where('parent_code', $_GET['province'])->get();
            var_dump('2 tp');
            return view("pages.nhadatban.index", compact('result', 'provinces', 'province_name', 'count_posts', 'districts'));
        }
        // ton tai GET[price]
        elseif (isset($_GET['price']) && !isset($_GET['province']) && !isset($_GET['district']) && !isset($_GET['area'])) {
            $price_min = substr($_GET['price'], 0, 1);
            $price_max = substr($_GET['price'], 1);
            $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
            $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND price BETWEEN' . ' ' . $price_min . ' ' . 'AND' . ' ' . $price_max . ' '
                . 'ORDER BY post_type_id DESC, products.created_at DESC'));
            $count_posts = count($result);
            var_dump('3 price');
            return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts'));
        }
        // ton tai GET[area]
        elseif (isset($_GET['area']) && !isset($_GET['province']) && !isset($_GET['district']) && !isset($_GET['price']) && !isset($_GET['price'])) {
            // area < 100 m2
            if ($_GET['area'] < 99999) {
                $area_min = substr($_GET['area'], 0, 2);
                $area_max = substr($_GET['area'], 2);
                $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                    . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                $count_posts = count($result);
                var_dump('4.1 area <100m2');
                return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts'));
            }
            // area >= 100 m2
            else {
                $area_min = substr($_GET['area'], 0, 3);
                $area_max = substr($_GET['area'], 3);
                $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                    . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                $count_posts = count($result);
                var_dump('4.2 area >100m2');
                return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts'));
            }
        }
        // ton tai 4 GET
        elseif (isset($_GET['province']) && isset($_GET['district']) && isset($_GET['price']) && isset($_GET['area'])) {
            // 4 GET == 0
            if ($_GET['province'] == 0 && $_GET['district'] == 0 && $_GET['price'] == 0 && $_GET['area'] == 0) {
                $province_name = Province::where('code', $_GET['province'])->get('name');
                $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1ORDER BY post_type_id DESC, products.created_at DESC'));
                $count_posts = count($result);
                var_dump('5 ton tai 4 get');
                return view("pages.nhadatban.index", compact('result', 'provinces', 'province_name', 'count_posts'));
            }
            // GET[province] != 0
            elseif ($_GET['province'] != 0 && $_GET['district'] == 0 && $_GET['price'] == 0 && $_GET['area'] == 0) {
                $province_name = Province::where('code', $_GET['province'])->get('name');
                $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' '
                    . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                $count_posts = count($result);
                $districts = District::where('parent_code', $_GET['province'])->get();
                var_dump('6 tp != 0');
                return view("pages.nhadatban.index", compact('result', 'provinces', 'province_name', 'count_posts', 'districts'));
            }
            // GET[province] != 0 && GET[district] != 0
            elseif ($_GET['province'] != 0 && $_GET['district'] != 0 && $_GET['price'] == 0 && $_GET['area'] == 0) {
                $province_name = Province::where('code', $_GET['province'])->get('name');
                $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' AND products.district_code =' . ' ' . $_GET['district'] . ' '
                    . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                $count_posts = count($result);
                $districts = District::where('parent_code', $_GET['province'])->get();
                var_dump('7 tp, quan != 0');
                return view("pages.nhadatban.index", compact('result', 'provinces', 'province_name', 'count_posts', 'districts'));
            }
            // GET[province] != 0 && GET[district] != 0 && GET[price] != 0
            elseif ($_GET['province'] != 0 && $_GET['district'] != 0 && $_GET['price'] != 0 && $_GET['area'] == 0) {
                $province_name = Province::where('code', $_GET['province'])->get('name');
                $price_min = substr($_GET['price'], 0, 1);
                $price_max = substr($_GET['price'], 1);
                $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' AND products.district_code =' . ' ' . $_GET['district']  . ' AND price BETWEEN' . ' ' . $price_min . ' ' . 'AND' . ' ' . $price_max . ' '
                    . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                $count_posts = count($result);
                $districts = District::where('parent_code', $_GET['province'])->get();
                var_dump('8 tp, quan, gia != 0');
                return view("pages.nhadatban.index", compact('result', 'provinces' , 'province_name', 'count_posts', 'districts'));
            }
            // GET[province] != 0 && GET[price] != 0
            elseif ($_GET['province'] != 0 && $_GET['district'] == 0 && $_GET['price'] != 0 && $_GET['area'] == 0) {
                $province_name = Province::where('code', $_GET['province'])->get('name');
                $price_min = substr($_GET['price'], 0, 1);
                $price_max = substr($_GET['price'], 1);
                $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' AND price BETWEEN' . ' ' . $price_min . ' ' . 'AND' . ' ' . $price_max . ' '
                    . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                $count_posts = count($result);
                $districts = District::where('parent_code', $_GET['province'])->get();
                var_dump('9 tp, price != 0');
                return view("pages.nhadatban.index", compact('result', 'provinces', 'province_name', 'count_posts', 'districts'));
            }
            //GET[province] != 0 && GET[price] != 0 && GET[area] != 0
            elseif ($_GET['province'] != 0 && $_GET['district'] == 0 && $_GET['price'] != 0 && $_GET['area'] != 0) {
                // GET[area] < 100 m2
                if ($_GET['area'] < 99999) {
                    $province_name = Province::where('code', $_GET['province'])->get('name');
                    $area_min = substr($_GET['area'], 0, 2);
                    $area_max = substr($_GET['area'], 2);
                    $price_min = substr($_GET['price'], 0, 1);
                    $price_max = substr($_GET['price'], 1);
                    $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                    $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                                FROM products
                                INNER JOIN provinces ON provinces.code = products.province_code
                                INNER JOIN districts ON districts.code = products.district_code
                                INNER JOIN wards ON wards.code = products.ward_code
                                WHERE menu_category_id IN (1,2,3) AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                            . ' AND price BETWEEN' . ' ' . $price_min . ' ' . 'AND' . ' ' . $price_max . ' '
                            . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                    $count_posts = count($result);
                    $districts = District::where('parent_code', $_GET['province'])->get();
                    var_dump('10.1 tp, dt != 0 <100');
                    return view("pages.nhadatban.index", compact('result', 'provinces', 'province_name', 'count_posts', 'districts'));
                }
                // GET[area] >= 100 m2
                else {
                    $province_name = Province::where('code', $_GET['province'])->get('name');
                    $area_min = substr($_GET['area'], 0, 3);
                    $area_max = substr($_GET['area'], 3);
                    $price_min = substr($_GET['price'], 0, 1);
                    $price_max = substr($_GET['price'], 1);
                    $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                    $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                                FROM products
                                INNER JOIN provinces ON provinces.code = products.province_code
                                INNER JOIN districts ON districts.code = products.district_code
                                INNER JOIN wards ON wards.code = products.ward_code
                                WHERE menu_category_id IN (1,2,3) AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                            . ' AND price BETWEEN' . ' ' . $price_min . ' ' . 'AND' . ' ' . $price_max . ' '
                            . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                    $count_posts = count($result);
                    $districts = District::where('parent_code', $_GET['province'])->get();
                    var_dump('10.2 tp, dt != 0');
                    return view("pages.nhadatban.index", compact('result', 'provinces', 'province_name', 'count_posts', 'districts'));
                }
            }
            // GET[province] != 0 && GET[area] != 0
            elseif ($_GET['province'] != 0 && $_GET['district'] == 0 && $_GET['price'] == 0 && $_GET['area'] != 0) {
                // GET[area] < 100 m2
                if ($_GET['area'] < 99999) {
                    $province_name = Province::where('code', $_GET['province'])->get('name');
                    $area_min = substr($_GET['area'], 0, 2);
                    $area_max = substr($_GET['area'], 2);
                    $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                    $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                                FROM products
                                INNER JOIN provinces ON provinces.code = products.province_code
                                INNER JOIN districts ON districts.code = products.district_code
                                INNER JOIN wards ON wards.code = products.ward_code
                                WHERE menu_category_id IN (1,2,3) AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                        . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                    $count_posts = count($result);
                    $districts = District::where('parent_code', $_GET['province'])->get();
                    var_dump('11.1 tp, dt != 0 <100');
                    return view("pages.nhadatban.index", compact('result', 'provinces', 'province_name', 'count_posts', 'districts'));
                }
                // GET[area] >= 100 m2
                else {
                    $province_name = Province::where('code', $_GET['province'])->get('name');
                    $area_min = substr($_GET['area'], 0, 3);
                    $area_max = substr($_GET['area'], 3);
                    $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                    $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                                FROM products
                                INNER JOIN provinces ON provinces.code = products.province_code
                                INNER JOIN districts ON districts.code = products.district_code
                                INNER JOIN wards ON wards.code = products.ward_code
                                WHERE menu_category_id IN (1,2,3) AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                        . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                    $count_posts = count($result);
                    $districts = District::where('parent_code', $_GET['province'])->get();
                    var_dump('11.2 tp, dt != 0');
                    return view("pages.nhadatban.index", compact('result', 'provinces', 'province_name', 'count_posts', 'districts'));
                }
            }
            // GET[price] != 0
            elseif ($_GET['province'] == 0 && $_GET['district'] == 0 && $_GET['price'] != 0 && $_GET['area'] == 0) {
                $price_min = substr($_GET['price'], 0, 1);
                $price_max = substr($_GET['price'], 1);
                $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND price BETWEEN' . ' ' . $price_min . ' ' . 'AND' . ' ' . $price_max . ' '
                    . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                $count_posts = count($result);
                var_dump('12 price != 0');
                return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts'));
            }
            // GET[price] != 0 && GET[area] != 0
            elseif ($_GET['province'] == 0 && $_GET['district'] == 0 && $_GET['price'] != 0 && $_GET['area'] != 0) {
                // GET[area] < 100 m2
                if ($_GET['area'] < 99999) {
                    $area_min = substr($_GET['area'], 0, 2);
                    $area_max = substr($_GET['area'], 2);
                    $price_min = substr($_GET['price'], 0, 1);
                    $price_max = substr($_GET['price'], 1);
                    $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                    $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                                FROM products
                                INNER JOIN provinces ON provinces.code = products.province_code
                                INNER JOIN districts ON districts.code = products.district_code
                                INNER JOIN wards ON wards.code = products.ward_code
                                WHERE menu_category_id IN (1,2,3) AND status = 1 AND price BETWEEN' . ' ' . $price_min . ' ' . 'AND' . ' ' . $price_max . ' AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                        . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                    $count_posts = count($result);
                    var_dump('13.1 gia, dt != 0 <100');
                    return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts'));
                }
                // GET[area] >= 100 m2
                else {
                    $area_min = substr($_GET['area'], 0, 3);
                    $area_max = substr($_GET['area'], 3);
                    $price_min = substr($_GET['price'], 0, 1);
                    $price_max = substr($_GET['price'], 1);
                    $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                    $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                                FROM products
                                INNER JOIN provinces ON provinces.code = products.province_code
                                INNER JOIN districts ON districts.code = products.district_code
                                INNER JOIN wards ON wards.code = products.ward_code
                                WHERE menu_category_id IN (1,2,3) AND status = 1 AND price BETWEEN' . ' ' . $price_min . ' ' . 'AND' . ' ' . $price_max . ' AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                        . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                    $count_posts = count($result);
                    var_dump('13.2 gia, dt != 0');
                    return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts'));
                }
            }
            // GET[area] != 0
            elseif ($_GET['province'] == 0 && $_GET['district'] == 0 && $_GET['price'] == 0 && $_GET['area'] != 0) {
                // area < 100 m2
                if ($_GET['area'] < 99999) {
                    $area_min = substr($_GET['area'], 0, 2);
                    $area_max = substr($_GET['area'], 2);
                    $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                    $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                        . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                    $count_posts = count($result);
                    var_dump('14.1 dt != 0  <100');
                    return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts'));
                }
                // area >= 100 m2
                else {
                    $area_min = substr($_GET['area'], 0, 3);
                    $area_max = substr($_GET['area'], 3);
                    $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                    $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                        . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                    $count_posts = count($result);
                    var_dump('14.2 dt != 0');
                    return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts'));
                }
            }
            // 4 GET != 0
            else{
                // area < 100m2
                if($_GET['area'] < 99999){
                    $province_name = Province::where('code', $_GET['province'])->get('name');
                    $price_min = substr($_GET['price'], 0, 1);
                    $price_max = substr($_GET['price'], 1);
                    $area_min = substr($_GET['area'], 0, 2);
                    $area_max = substr($_GET['area'], 2);
                    $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                    $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                            . ' AND price BETWEEN' . ' ' . $price_min . ' ' . 'AND' . ' ' . $price_max . ' '
                            . ' AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' AND products.district_code =' . ' ' . $_GET['district'] . ' '
                            . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                    $count_posts = count($result);
                    $districts = District::where('parent_code', $_GET['province'])->get();
                    var_dump('15 4 get != 0');
                    return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts', 'province_name', 'districts'));
                }
                // area >= 100m2
                else{
                    $province_name = Province::where('code', $_GET['province'])->get('name');
                    $price_min = substr($_GET['price'], 0, 1);
                    $price_max = substr($_GET['price'], 1);
                    $area_min = substr($_GET['area'], 0, 3);
                    $area_max = substr($_GET['area'], 3);
                    $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
                    $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND area BETWEEN' . ' ' . $area_min . ' ' . 'AND' . ' ' . $area_max . ' '
                            . ' AND price BETWEEN' . ' ' . $price_min . ' ' . 'AND' . ' ' . $price_max . ' '
                            . ' AND status = 1 AND products.province_code =' . ' ' . $_GET['province'] . ' AND products.district_code =' . ' ' . $_GET['district'] . ' '
                            . 'ORDER BY post_type_id DESC, products.created_at DESC'));
                    $count_posts = count($result);
                    $districts = District::where('parent_code', $_GET['province'])->get();
                    var_dump('15 4 get != 0');
                    return view("pages.nhadatban.index", compact('result', 'provinces', 'count_posts', 'province_name', 'districts'));
                }
            }
        }
    }

    public function nhaDatBanSinglePost($id)
    {
        $key = 'singlePost';
        $key .= $id;
        if (Cache::has($id)) {
            return (Cache::get($id));
        } else {
            $products = $this->productRepository->singlePost($id);
            $products_area = $this->productRepository->relatedPost($id);
            $images = $this->imageRepository->relatedImage($id);
            $images_area = $this->imageRepository->getAll();
            $cache_view = view("pages.nhadatban.single_post", compact('products', 'images_area', 'images', 'products_area'))->render();
            Cache::put($key, $cache_view, 10000);
            return $cache_view;
        }
    }

    public function banCanHoChungCu()
    {
        $products = DB::table('products')
            ->join('images', 'images.products_id', '=', 'products.id')
            ->join('menu_categories', 'menu_categories.id', '=', 'products.menu_category_id')
            ->join('wards', 'wards.id', '=', 'products.wards_id')
            ->select('products.*', 'images.link', 'menu_categories.name', 'wards.path_with_type')
            ->where('menu_categories.name', '=', "Bán căn hộ chung cư")
            ->get();
        return view("pages.nhadatban.index", compact('products'));
    }

    public function banNhaRieng()
    {
        $products = DB::table('products')
            ->join('images', 'images.products_id', '=', 'products.id')
            ->join('menu_categories', 'menu_categories.id', '=', 'products.menu_category_id')
            ->join('wards', 'wards.id', '=', 'products.wards_id')
            ->select('products.*', 'images.link', 'menu_categories.name', 'wards.path_with_type')
            ->Where('menu_categories.name', '=', "Bán nhà riêng")
            ->get();
        return view("pages.nhadatban.index", compact('products'));
    }

    public function banNhaMatPho()
    {
        $products = DB::table('products')
            ->join('images', 'images.products_id', '=', 'products.id')
            ->join('menu_categories', 'menu_categories.id', '=', 'products.menu_category_id')
            ->join('wards', 'wards.id', '=', 'products.wards_id')
            ->select('products.*', 'images.link', 'menu_categories.name', 'wards.path_with_type')
            ->Where('menu_categories.name', '=', "Bán nhà mặt phố")
            ->get();
        return view("pages.nhadatban.index", compact('products'));
    }

    public function district($slug)
    {
        return view("pages.nhadatban.index");
    }

    public function getDistrict(Request $request)
    {

        $districts = District::where('parent_code', $request->get('parent_code'))->get();

        echo view('pages.nhadatban.ajaxDistrict', compact('districts'));
        exit;
    }
}
