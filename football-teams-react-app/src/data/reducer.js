import initial from "./initial";
import { assignTeam } from "./actions/api";

// spread operator copies players array from initial.js to the players object from the database
const setPlayers = (state, { players }) => {
  return {
    ...state,
    players: players
  };
};

// concatenates the new player object that is passed in from the database onto the players array
const addPlayer = (state, { player }) => {
  return {
    ...state,
    players: state.players.concat(player)
  };
};

// replace unassigned players array with $sortedPlayers array using spread operator
const teamSelect = (state, { players }) => {
  return {
    ...state,
    players: players,
  };
};


const reducer = (state, action) => {
  switch (action.type) {
    case "setPlayers": return setPlayers(state, action);
    case "addPlayer": return addPlayer(state, action);
    case "resetPlayers": return initial;
    case "teamSelect": return teamSelect(state, action);
    default: return state;
  }
};

export default reducer;