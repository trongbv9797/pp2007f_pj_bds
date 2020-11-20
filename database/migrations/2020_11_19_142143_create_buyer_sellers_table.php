<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBuyerSellersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buyer_sellers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            // $table->integer('style_buyer_seller_id');
            $table->text('content');
            // $table->interger('image_demo_id');
            $table->integer('buyer_seller_catergory_id');
            $table->integer('district_id');
            $table->integer('price');
            $table->integer('buyer_seller_area_id');
            $table->date('start');
            $table->date('end');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buyer_sellers');
    }
}
