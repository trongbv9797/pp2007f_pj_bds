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

// DanhbaController index
Route::get('/nha-moi-gioi', 'DanhbaController@index');


Route::get('/tin-tuc', 'TintucController@index');

//NhadatbanController
Route::get('/nha-dat-ban', 'NhadatbanController@index');

//Ban_can_ho_chung_cuController
Route::get('/ban-can-ho-chung-cu', 'NhadatbanController@ban_can_ho_chung_cu');
