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

// Shows all players in database
Route::get('/players', 'API\PlayersController@index');

// Add a player to the database
Route::post('/players', 'API\PlayersController@store');

// Delete all players from the database
Route::delete('/players', 'API\PlayersController@clear');

// Edit a specific player
Route::patch('/players/{player}', 'API\PlayersController@update');

// Delete a specific players
Route::delete('/players/{player}', 'API\PlayersController@destroy');

// Assign players in database to teams
Route::get('/teams', 'API\PlayersController@assign');


