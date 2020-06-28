import axios from "../axios";

import { setPlayers, addPlayer, resetPlayers, teamSelect, editPlayer, removePlayer } from "./state";

// fetch all players from the database
export const getPlayers = () => dispatch => {
  axios.get("/players").then(({ data }) => {
    const players = data;
    dispatch(setPlayers(players));
  });
};

// add a player to the database
export const postPlayer = (player_name, skill) => dispatch => {
  axios.post("/players", {
    player_name: player_name,
    skill: skill
  }).then(({ data }) => {
    const player = data.data;
    dispatch(addPlayer(player));
  });
};

// delete all players from the database
export const deletePlayers = () => dispatch => {
  axios.delete("/players").then(() => {
    dispatch(resetPlayers());
  });
};

// assign teams to players in the database
export const assignTeam = () => dispatch => {
  axios.get("/teams").then(({ data }) => {
    const players = data
    dispatch(teamSelect(players));
  });
};

// update the name and skill of a specific player in the database
// represented by a specific ID
export const patchPlayer = (id, player_name, skill) => dispatch => {
  axios.patch(`/players/${id}`, {
    player_name: player_name,
    skill: skill
  }).then(({ data }) => {
    const player = data.data;
    dispatch(editPlayer(player));
  });
};

// Delete a specific player in the database represented by a specific ID
export const deletePlayer = (id) => dispatch => {
  axios.delete(`/players/${id}`).then(() => {
    dispatch(removePlayer(id));
  });
};