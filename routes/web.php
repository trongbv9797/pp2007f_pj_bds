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

Route::get('/', function () {
    return view('welcome');
});
// HomeController index
Route::get('/index', 'HomeController@index');

//ProjectController
route::get('/du-an', 'ProjectController@index')->name('indexProjects');

// DanhbaController index. 

Route::get('/nha-moi-gioi', 'DanhbaController@index');



Route::get('/tin-tuc', 'TintucController@index');

//NhadatbanController -----TAI ANH
Route::get('/nha-dat-ban', 'NhadatbanController@index');
Route::get('/ban-can-ho-chung-cu', 'NhadatbanController@ban_can_ho_chung_cu');
Route::get('/ban-nha-rieng', 'NhadatbanController@ban_nha_rieng');
Route::get('/ban-biet-thu-lien-ke', 'NhadatbanController@ban_biet_thu');
Route::get('/ban-nha-mat-pho', 'NhadatbanController@ban_nha_mat_pho');
Route::get('/ban-dat-nen-du-an', 'NhadatbanController@ban_dat_nen');
Route::get('/ban-dat', 'NhadatbanController@ban_dat');



//singlepost (chưa sửa được redirect)
Route::get('/nha-moi-gioi cong-ty-tnhh-dich-vu-bds-giga-real', 'DanhbaController@singlepost1');

//Doanh nghiep
Route::get('/doanh-nghiep', 'DanhbaController@index1');

//Noi-ngoaithat
Route::get('/noi-ngoai-that', 'NoingoaithatController@index');

