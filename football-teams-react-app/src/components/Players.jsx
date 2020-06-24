import React, { Component } from "react";

import Player from "../containers/Player";

class Players extends Component {
  constructor (props) {
    super(props);

    this.state = {
      // TODO: State for "add player" route 
    }
}

// using the lifecycle method that occurs when the page loads to call the onLoad property, which gets the players from the database
componentDidMount() {
this.props.onLoad();
}

  render() {

    // destructuring the state and props objects
    let { players } = this.props;

    return(
      <React.Fragment>
        
        { players.length ?
            <div>
                { players.map(player => (
                <div key={ player.id }>
                  {/* Once '../containers/Player.js' complete we can import container, for now use attributes */}
                  <p>Name: { player.player_name }, Skill: { player.skill }</p>  
                </div>
                ))}
            </div>
            :
            <p>There are no players!</p>
        }
      </React.Fragment>
    )
  }
};

export default Players;
