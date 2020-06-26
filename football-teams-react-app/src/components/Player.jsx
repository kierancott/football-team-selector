import React, { Component } from "react";
import Card from "react-bootstrap/Card";


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
        <Card className="player-card" style={{ width: '25vw' }}>
          <Card.Body>
            <Card.Title>{ player.player_name }</Card.Title>
            <Card.Text>
              { player.skill }
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}

export default Player;
