// import connect fx for use on export
import { connect } from "react-redux";

// import our Players component
import Players from "../components/Players";

import { getPlayers, postPlayer, deletePlayers } from "../data/actions/api";

// map Player state to Player props
const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

// onEdit/onDelete goes here
const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getPlayers()),
    onSubmit: (player_name, skill) => dispatch(postPlayer(player_name, skill)),
    onClear: () => dispatch(deletePlayers()), 
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Players);
