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

const reducer = (state, action) => {
  switch (action.type) {
    case "setPlayers": return setPlayers(state, action);
    case "addPlayer": return addPlayer(state, action);
    default: return state;
  }
};

export default reducer;