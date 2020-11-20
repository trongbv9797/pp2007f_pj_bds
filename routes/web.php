<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// HomeController index
Route::get('/', 'HomeController@index');

// check post
Route::get('/post', 'PostController@post');

//ProjectController
route::get('/du-an', 'ProjectController@index')->name('indexProjects');
// single post Project
route::get('/single-post','ProjectController@singlePost')->name('singlePostProject');
// vi tri ha tang - Project
route::get('/vi-tri-ha-tang', 'ProjectController@viTriHaTang')->name('viTriHaTang');

// DanhbaController index. 

Route::get('/nha-moi-gioi', 'DanhbaController@index')->name('nhamoigioi');
Route::get('/nhamoigioi{id}', 'DanhbaController@singlepost1')->name('singlepost1');
Route::get('/doanhnghiep{id}', 'DanhbaController@singlepost2')->name('singlepost2');


//TintucController
Route::get('/tin-tuc', 'TintucController@index')->name('tintucbds');
Route::get('/tin-thi-truong', 'TintucController@tinthitruong')->name('tinthitruong');
Route::get('/phan-tich','TintucController@phantich')->name('phan_tich');
Route::get('/chinh-sach','TintucController@chinhsach')->name('chinh_sach');
Route::get('/quy-hoach','TintucController@quyhoach')->name('quy_hoach');
Route::get('/bds-the-gioi','TintucController@bdsthegioi')->name('tintucbds_tg');
Route::get('/tai-chinh-chung-khoan-bds','TintucController@taichinhbds')->name('tai_chinh');
//Tintucsinglepost
Route::get('/articles{id}', 'TintucController@articles')->name('tintuc_single_post');





//NhadatbanController -----TAI ANH
Route::get('/nha-dat-ban', 'NhadatbanController@index')->name('nha_dat_ban');


Route::get('/ban-can-ho-chung-cu', 'NhadatbanController@ban_can_ho_chung_cu')->name('ban_can_ho_chung_cu');
Route::get('/ban-nha-rieng', 'NhadatbanController@ban_nha_rieng')->name('ban_nha_rieng');
Route::get('/ban-nha-mat-pho', 'NhadatbanController@ban_nha_mat_pho')->name('ban_nha_mat_pho');
Route::get('/nha-dat-ban{id}', 'NhadatbanController@nhadatban_single_post')->name('nhadatban_single_post');


//NhadatchothueController ----TAI ANH
Route::get('/nha-dat-cho-thue', 'NhadatchothueController@index')->name('nha_dat_cho_thue');
Route::get('/cho-thue-can-ho-chung-cu', 'NhadatchothueController@cho_thue_can_ho')->name('cho_thue_can_ho');
Route::get('/cho-thue-nha-rieng', 'NhadatchothueController@cho_thue_nha_rieng')->name('cho_thue_nha_rieng');
Route::get('/cho-thue-nha-mat-pho', 'NhadatchothueController@cho_thue_nha_mat_pho')->name('cho_thue_nha_mat_pho');
Route::get('/nha-dat-cho-thue{id}', 'NhadatchothueController@nhadatchothue_single_post')->name('nhadatchothue_single_post');




Route::get('/nha-moi-gioi', 'DanhbaController@index')->name('nhamoigioi');

//Doanh nghiep
Route::get('/doanh-nghiep', 'DanhbaController@index1')->name('doanhnghiep');

//Noi-ngoaithat
Route::get('/noi-ngoai-that', 'NoingoaithatController@index');

//Canmuacanthue route

Route::get('/can-mua-can-thue/', 'BuyerSellerController@index')->name('buyerseller');
Route::get('/nha-dat-can-thue', 'BuyerSellerController@seller')->name('seller');
Route::get('/nha-dat-can-mua', 'BuyerSellerController@buyer')->name('buyer');


//Phong Thuy
Route::get('/phong-thuy', 'PhongThuyController@index')->name('phongthuy');
Route::get('/phong-thuy-toan-canh', 'PhongThuyController@index1')->name('phongthuytoancanh');
Route::get('/tu-van-phong-thuy', 'PhongThuyController@index2')->name('tuvanphongthuy');
Route::get('/phong-thuy-nha-o', 'PhongThuyController@index3')->name('phongthuynhao');
Route::get('/phong-thuy-van-phong', 'PhongThuyController@index4')->name('phongthuyvanphong');
Route::get('/phong-thuy-theo-tuoi', 'PhongThuyController@index5')->name('phongthuytheotuoi');
