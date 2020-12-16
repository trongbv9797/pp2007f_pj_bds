<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\View;
use App\Models\Menu;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(
            \App\Repositories\User\UserRepositoryInterface::class,
            \App\Repositories\User\UserRepository::class,
            
        );


        $this->app->singleton(
            \App\Repositories\Slide\SlideRepositoryInterface::class,
            \App\Repositories\Slide\SlideRepository::class
            
        );

        $this->app->singleton(
            
            \App\Repositories\News\NewsRepositoryInterface::class,
            \App\Repositories\News\NewsRepository::class
            
        );

        $this->app->singleton(
            \App\Repositories\ArticleRepositoryInterface::class,
            \App\Repositories\ArticleRepository::class

        );

        $this->app->bind(
            'App\Repositories\ProductRepositoryInterface',
            'App\Repositories\ProductRepository'
            
        );
        $this->app->bind(
            'App\Repositories\ImageRepositoryInterface',
            "App\Repositories\ImageRepository"
            
        );

        $this->app->singleton(
            \App\Repositories\NhaDatBanRepositoryInterface::class,
            \App\Repositories\NhaDatBanRepository::class

        );

    }

    // /**
    //  * Bootstrap any application services.
    //  *
    //  * @return void
    //  */
    public function boot()
    {
        if(asset(Menu::all())) 
        {
            $menus0 = Menu::where('type','header_main')->orderby('order')->get()->toArray();
            $arr_menu = [];
        
            foreach ($menus0 as $menu0) {
                $arr_menu[$menu0['parent_id']][] = $menu0;
            }
        // dd($arr_menu);

            view::share('menus0', $menus0);
            view::share('arr_menu', $arr_menu);
        }

        if(asset(  Auth::user() )) {
            $user = Auth::user();
            view::share('user', $user);
        }

        Schema::defaultStringLength(191);

    }

}
