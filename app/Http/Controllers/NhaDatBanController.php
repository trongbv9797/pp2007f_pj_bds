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
        if(!isset($_GET['province']) && !isset($_GET['district']) && !isset($_GET['price']) && !isset($_GET['area'])){
            $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
            $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type
                                FROM products
                                INNER JOIN provinces ON provinces.code = products.province_code
                                INNER JOIN districts ON districts.code = products.district_code
                                INNER JOIN wards ON wards.code = products.ward_code
                                WHERE menu_category_id IN (1,2,3) AND status = 1
                                ORDER BY post_type_id DESC, products.created_at DESC'. ' '. 'LIMIT 1'));
            return view("pages.nhadatban.index", compact('result', 'provinces'));
        }

        elseif($_GET['province'] == 0 && $_GET['district'] == 0 && $_GET['price'] == 0 && $_GET['area'] == 0){
            // $perPage = $request->input('per_page', 5);
            // $page = $request->input('page', 1);
            // $skip = $page * $perPage;
            // if($take < 1){ $take = 1; }
            // if($skip < 0){ $skip = 0; }

            $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
            $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type
                                FROM products
                                INNER JOIN provinces ON provinces.code = products.province_code
                                INNER JOIN districts ON districts.code = products.district_code
                                INNER JOIN wards ON wards.code = products.ward_code
                                WHERE menu_category_id IN (1,2,3) AND status = 1
                                ORDER BY post_type_id DESC, products.created_at DESC'));
            
            // $count = $result->count();
            // $results = $result->take($perPage)->skip($skip)->get();
            // $paginator = new LengthAwarePaginator($tcount, 5, $page);
            return view("pages.nhadatban.index", compact('result', 'provinces'));
        } else{
            // $province_code = $_GET['province'];
            // $district_code = $_GET['district'];
            $price_min = substr($_GET['price'], 0, 1);
            $price_max = substr($_GET['price'], 1);
            // $area_min = substr($_GET['price'], 0, 1);
            // $area_max = substr($_GET['price'], 1, 1);

            $provinces = DB::select(DB::raw('SELECT * FROM `provinces` ORDER BY `count_posts`  DESC'));
            $result = DB::select(DB::raw('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type 
                            FROM products
                            INNER JOIN provinces ON provinces.code = products.province_code
                            INNER JOIN districts ON districts.code = products.district_code
                            INNER JOIN wards ON wards.code = products.ward_code
                            WHERE menu_category_id IN (1,2,3) AND status = 1 AND price BETWEEN'. ' '. $price_min .' ' .'AND'. ' ' .$price_max .' '
                            .'ORDER BY post_type_id DESC, products.created_at DESC'));
            return view("pages.nhadatban.index", compact('result', 'provinces'));
        }               
    }

    public function nhaDatBanSinglePost($id)
    {

        $products = $this->productRepository->singlePost($id);
        $products_area = $this->productRepository->relatedPost($id);
        $images = $this->imageRepository->relatedImage($id);
        $images_area = $this->imageRepository->getAll();
        return view("pages.nhadatban.single_post", compact('products', 'images_area', 'images', 'products_area'));
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

    public function getDistrict(Request $request) {

        $districts = District::where('parent_code',$request->get('parent_code'))->get();

        echo view ('pages.nhadatban.ajaxDistrict',compact('districts'));
        exit;
    }
}
