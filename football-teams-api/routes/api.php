<?php

use App\Http\Controllers\API\PlayersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/players', 'API\PlayersController@index');

Route::patch('/players/{player}', 'API\PlayersController@update');

Route::post('/players', 'API\PlayersController@store');

Route::delete('/players/{player}', 'API\PlayersController@destroy');

// TODO: 'players/{player}', 'PlayersController@assign';
