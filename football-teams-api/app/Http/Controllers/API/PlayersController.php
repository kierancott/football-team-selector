<?php

namespace App\Http\Controllers\API;

use App\Player;
use App\Http\Controllers\Controller;
use App\Http\Resources\API\PlayerResource;
use App\Http\Requests\API\PlayerRequest;

use Illuminate\Http\Request;

class PlayersController extends Controller 
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all the players
        return Player::all(); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    // get post request data for player_name and skill
      $data = $request->only(["player_name", "skill"]);

      // create player with data and store in DB
      $player = Player::create($data);

      // return the resource
      // automatically uses the right status code
      return new PlayerResource($player);
    }

    /**
     * Assign Team to specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function assign()
    {
        // TODO: Logic that assigns team based on respective skill 

        // return the players array of objects with the new assignments
        return Player::all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\API\PlayerRequest $request
     * @param  int  $player
     * @return App\Http\Resources\API\PlayerResource
     */
    public function update(PlayerRequest $request, Player $player)
    {   
        // get the request data
        $data = $request->only(["player_name", "skill"]);
    
        // update the player
        $player->fill($data)->save();
    
        // return the updated player in the resource format
        return new PlayerResource($player);
    }

        /**
     * Delete all players in the database
     */
    public function clear()
    {
      // delete everything in the database
      Player::truncate();

      // use a 204 code as there is no content in the response
      return response(null, 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Player $player)
    {
      $player->delete(); 

      // use a 204 code as there is no content in the response
      return response(null, 204);
    }
}
