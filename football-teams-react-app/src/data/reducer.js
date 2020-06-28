import initial from "./initial";

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
    players: players
  };
};

// Update the name and skill of an individual player
const editPlayer = (state, { player }) => {

  // fetch all players, store as items in assoc array
  let playerArray = state.players.slice()

  // map over items, and for the matching player ID,
  // replace the item with the new player
  let newPlayers = playerArray.map(item => {
    if (item.id === player.id) {
      return player
    } else {
      // else leave unchanged
      return item
    }
  })

  return {
    // copy state using spread operator
    ...state,
    // replace players with the newPlayers array
    // containing the updated player
    players: newPlayers
  };
};

const removePlayer = (state, { id }) => {

  // fetch all players, store as items in assoc array
  let playerArray = state.players.slice()

  // filter all players playerArray into a new array, EXCEPT for
  // the player whose ID matches that which is to be removed
  let newPlayers = playerArray.filter(item => item.id !== id)

  return {
    // copy state with spread operator
    ...state,
    // replace players with newPlayers array, containing all previous
    // players except for the player whose ID matched that to be removed
    players: newPlayers
  };
};


const reducer = (state, action) => {
  switch (action.type) {
    case "setPlayers": return setPlayers(state, action);
    case "addPlayer": return addPlayer(state, action);
    case "resetPlayers": return initial;
    case "teamSelect": return teamSelect(state, action);
    case "editPlayer": return editPlayer(state, action);
    case "removePlayer": return removePlayer(state, action);
    default: return state;
  }
};

export default reducer;