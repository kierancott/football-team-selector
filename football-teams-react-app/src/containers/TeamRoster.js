import { connect } from "react-redux";
import { assignTeam } from "../data/actions/api";

import TeamRoster from "../components/TeamRoster";

const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

// When page is refreshed the data must still be retained to be passed to render()
// onLoad function dispatches assignTeam action on page load
const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(assignTeam()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamRoster);