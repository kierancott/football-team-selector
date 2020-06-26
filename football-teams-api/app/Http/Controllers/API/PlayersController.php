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
        // get all the players from database
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
      // store data from POST request in variable
      $data = $request->only(["player_name", "skill"]);

      // Player model created from 
      $player = Player::create($data);

      // return the resource and use inbuilt Laravel http code
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
        // Store all players in an array in descending order of skill
        $sortedPlayers = Player::all()->sortByDesc('skill')->values()->all();

        // Iterate over items in array and update the 'team' property in turn to opposing teams
        foreach ($sortedPlayers as $key => $player) {
          if ($key % 2 !== 0) {
            $player->team = 1;
            $player->fill(["team"])->save();
          } else {
            $player->team = 2;
            $player->fill(["team"])->save();
          };
        };

        // return the players array of objects with the updated 'team' property
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
      // remove all players in database
      Player::truncate();

      // no content returned
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

      // no content returned
      return response(null, 204);
    }
}
