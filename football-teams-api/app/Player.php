<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
     // Only allow the player_name and skill field to get updated via mass assignment, do not assign team
    protected $fillable = ["player_name", "skill"];
}
