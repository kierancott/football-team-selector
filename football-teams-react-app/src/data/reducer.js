// spread operator copies players array from initial.js to the players object from the database
const setPlayers = (state, { players }) => {
  return {
    ...state,
    players: players
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setPlayers": return setPlayers(state, action);
    default: return state;
  }
};

export default reducer;