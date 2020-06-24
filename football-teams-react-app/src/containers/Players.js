// import connect fx for use on export
import { connect } from "react-redux";

// import our Players component
import Players from "../components/Players";

import { getPlayers } from "../data/actions/api";

// map Player state to Player props
const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getPlayers()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Players);
