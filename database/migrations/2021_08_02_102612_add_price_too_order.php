<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPriceTooOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->integer('price')->after('product_id');       
        });

        Schema::table('users', function (Blueprint $table) {
            $table->integer('level')->default(1)->after('id');       
        });

        Schema::table('shopcars', function (Blueprint $table) {
            $table->integer('quantity')->after('product_id');       
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('price');       
        });

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('level');       
        });

        Schema::table('shopcars', function (Blueprint $table) {
            $table->dropColumn('quantity');       
        });
    }
}
