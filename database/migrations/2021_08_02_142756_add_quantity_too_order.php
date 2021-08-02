<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddQuantityTooOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->integer('quantity')->after('product_id');       
        });
        
        Schema::table('orders', function (Blueprint $table) {
            $table->boolean('Cancel')->default(0)->after('Shipment');       
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
            $table->dropColumn('quantity');       
        });

        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('Cancel');       
        });
    }
}
