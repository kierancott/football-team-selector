import React, { Component } from "react";
import '../index.css';

class Player extends Component {
constructor(props) {
  super(props)

  this.state = {
    name: this.props.player.player_name,
    skill: this.props.player.skill
  }
}

render() {
    // destructuring the state and props objects
    const { player } = this.props;

    return (
      <React.Fragment>
        <h6>Player Name: { player.player_name }</h6>
        <p>Skill level: { player.skill }</p>
      </React.Fragment>
    )
  }
}

export default Player;
