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

class NhaDatBanController extends Controller
{
    //
    protected $productRepository;

    protected $imageRepository;

    public function __construct(ProductRepositoryInterface $productRepository, ImageRepositoryInterface $imageRepository, NhaDatBanRepositoryInterface $productRepository123)
    {
        $this->productRepository = $productRepository;

        $this->imageRepository = $imageRepository;

        $this->productRepository = $productRepository123;
    }
    public function testRepo()
    {
        $products = $this->productRepository->getProducts();
        return view('RepositoryTest.nhadatban', compact('products'));
    }

    public function index()
    {
        // filter theo thanh pho
        if (isset($_GET['province'])) {

            $provinces = Province::all()->sortByDesc('count_posts');
            if (!$_GET['province']) {
                $provinces_code = Province::where('code', $_GET['province'])->get('code')->toArray();
                $provinces_name = Province::where('code', $_GET['province'])->get('name')->toArray();
                $products = Products::whereIn('menu_category_id', array(1, 2, 3))
                    ->orderBy('post_type_id', 'desc')
                    ->orderBy('created_at', 'desc')
                    ->paginate(10);

                $count_products = Products::whereIn('menu_category_id', array(1, 2, 3))->count();
                return view("pages.nhadatban.index", compact('products', 'provinces', 'count_products', 'provinces_code', 'provinces_name'));
            } else {
                $provinces_code = Province::where('code', $_GET['province'])->get('code')->toArray();
                $provinces_name = Province::where('code', $_GET['province'])->get('name')->toArray();
                $products = Products::whereIn('menu_category_id', array(1, 2, 3))
                    ->where('province_code', '=', $provinces_code)
                    ->orderBy('post_type_id', 'desc')
                    ->orderBy('created_at', 'desc')
                    ->paginate(10);
                $count_products = Products::whereIn('menu_category_id', array(1, 2, 3))->where('province_code', $provinces_code)->count();
                return view("pages.nhadatban.index", compact('products', 'provinces', 'count_products', 'provinces_code', 'provinces_name'));
            }
        }
        //filter theo thanh pho + dien tich
        // elseif (isset($_GET['province']) && isset($_GET['dtmin']) && isset($_GET['dtmax'])) {
        //     $provinces = Province::all()->sortByDesc('count_posts');
        //     $provinces_code = Province::where('name', $_GET['province'])->get('code')->toArray();
        //     $products = Products::whereIn('menu_category_id', array(1, 2, 3))
        //         ->where('province_code', '=', $provinces_code)
        //         ->whereBetween('area', [$_GET['dtmin'], $_GET['dtmax']])
        //         ->orderBy('post_type_id', 'desc')
        //         ->orderBy('created_at', 'desc')
        //         ->paginate(10);

        //     $count_products = Products::whereIn('menu_category_id', array(1, 2, 3))->where('province_code', $provinces_code)->whereBetween('area', [$_GET['dtmin'], $_GET['dtmax']])->count();
        //     return view("pages.nhadatban.index", compact('products', 'provinces', 'count_products', 'provinces_code'));
        // }
        // filter theo thanh pho + gia
        // elseif (isset($_GET['province']) && isset($_GET['giamin']) && isset($_GET['giamax'])) {
        //     $provinces = Province::all()->sortByDesc('count_posts');
        //     $provinces_code = Province::where('name', $_GET['province'])->get('code')->toArray();
        //     $products = Products::whereIn('menu_category_id', array(1, 2, 3))
        //         ->where('province_code', '=', $provinces_code)
        //         ->whereBetween('price', [$_GET['giamin'], $_GET['giamax']])
        //         ->orderBy('post_type_id', 'desc')
        //         ->orderBy('created_at', 'desc')
        //         ->paginate(10);

        //     $count_products = Products::whereIn('menu_category_id', array(1, 2, 3))->where('province_code', $provinces_code)->whereBetween('price', [$_GET['giamin'], $_GET['giamax']])->count();
        //     return view("pages.nhadatban.index", compact('products', 'provinces', 'count_products', 'provinces_code'));
        // }
        // filter theo thanh pho + dien tich + gia
        // elseif (isset($_GET['province']) && isset($_GET['giamin']) && isset($_GET['giamax'])  && isset($_GET['dtmin']) && isset($_GET['dtmax'])) {
        //     $provinces = Province::all()->sortByDesc('count_posts');
        //     $provinces_code = Province::where('name', $_GET['province'])->get('code')->toArray();
        //     $products = Products::whereIn('menu_category_id', array(1, 2, 3))
        //         ->where('province_code', '=', $provinces_code)
        //         ->whereBetween('price', [$_GET['giamin'], $_GET['giamax']])
        //         ->whereBetween('area', [$_GET['dtmin'], $_GET['dtmax']])
        //         ->orderBy('post_type_id', 'desc')
        //         ->orderBy('created_at', 'desc')
        //         ->paginate(10);

        //     $count_products = Products::whereIn('menu_category_id', array(1, 2, 3))->where('province_code', $provinces_code)->whereBetween('price', [$_GET['giamin'], $_GET['giamax']])->whereBetween('area', [$_GET['dtmin'], $_GET['dtmax']])->count();
        //     return view("pages.nhadatban.index", compact('products', 'provinces', 'count_products', 'provinces_code'));
        // }
        // filter theo dien tich
        elseif (isset($_GET['area'])) {
            $provinces = Province::all()->sortByDesc('count_posts');
            $products = Products::whereIn('menu_category_id', array(1, 2, 3))
                ->whereBetween('area', $_GET['area'])
                ->orderBy('post_type_id', 'desc')
                ->orderBy('created_at', 'desc')
                ->paginate(10);
            dd($_GET['area']);
            $count_products = Products::whereIn('menu_category_id', array(1, 2, 3))->whereBetween('area', $_GET['area'])->count();
            return view("pages.nhadatban.index", compact('products', 'provinces', 'count_products'));
        }
        elseif (isset($_GET['dtmin']) && isset($_GET['dtmax'])) {
            $provinces = Province::all()->sortByDesc('count_posts');
            $products = Products::whereIn('menu_category_id', array(1, 2, 3))
                ->whereBetween('area', [$_GET['dtmin'], $_GET['dtmax']])
                ->orderBy('post_type_id', 'desc')
                ->orderBy('created_at', 'desc')
                ->paginate(10);
            
            $count_products = Products::whereIn('menu_category_id', array(1, 2, 3))->whereBetween('area', [$_GET['dtmin'], $_GET['dtmax']])->count();
            return view("pages.nhadatban.index", compact('products', 'provinces', 'count_products'));
        }
        // filter theo dien tich + gia
        // elseif (isset($_GET['giamin']) && isset($_GET['giamax'])  && isset($_GET['dtmin']) && isset($_GET['dtmax'])) {
        //     $provinces = Province::all()->sortByDesc('count_posts');
        //     $products = Products::whereIn('menu_category_id', array(1, 2, 3))
        //         ->whereBetween('price', [$_GET['giamin'], $_GET['giamax']])
        //         ->whereBetween('area', [$_GET['dtmin'], $_GET['dtmax']])
        //         ->orderBy('post_type_id', 'desc')
        //         ->orderBy('created_at', 'desc')
        //         ->paginate(10);

        //     $count_products = Products::whereIn('menu_category_id', array(1, 2, 3))->whereBetween('price', [$_GET['giamin'], $_GET['giamax']])->whereBetween('area', [$_GET['dtmin'], $_GET['dtmax']])->count();
        //     return view("pages.nhadatban.index", compact('products', 'provinces', 'count_products'));
        // }
        // filter theo gia
        elseif (isset($_GET['giamin']) && isset($_GET['giamax'])) {
            $provinces = Province::all()->sortByDesc('count_posts');
            $products = Products::whereIn('menu_category_id', array(1, 2, 3))
                ->whereBetween('price', [$_GET['giamin'], $_GET['giamax']])
                ->orderBy('post_type_id', 'desc')
                ->orderBy('created_at', 'desc')
                ->paginate(10);

            $count_products = Products::whereIn('menu_category_id', array(1, 2, 3))->whereBetween('price', [$_GET['giamin'], $_GET['giamax']])->count();
            return view("pages.nhadatban.index", compact('products', 'provinces', 'count_products'));
        }
        // khong filter
        else {
            $result = DB::select('SELECT products.*, provinces.name, provinces.slug, provinces.name_with_type, provinces.code, provinces.count_posts, districts.name_with_type,wards.name_with_type, images.link 
                                FROM products
                                INNER JOIN provinces ON provinces.code = products.province_code
                                INNER JOIN districts ON districts.code = products.district_code
                                INNER JOIN wards ON wards.code = products.ward_code
                                INNER JOIN images ON images.products_id = products.id
                                WHERE menu_category_id IN (1,2,3) AND status = 1
                                ORDER BY post_type_id DESC, products.created_at DESC');
            return view("pages.nhadatban.index", compact('result'));
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
