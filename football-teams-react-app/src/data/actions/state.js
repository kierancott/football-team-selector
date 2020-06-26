export const setPlayers = (players) => {
  return {
    type: "setPlayers",
    players: players,
  };
};

export const addPlayer = (player) => {
  return {
    type: "addPlayer",
    player: player,
  };
};

export const resetPlayers = () => {
  return {
    type: "resetPlayers",
  };
};

export const teamSelect = (players) => {
  return {
    type: "teamSelect",
    players: players,
  };
};