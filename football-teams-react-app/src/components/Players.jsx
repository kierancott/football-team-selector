import React, { Component } from "react";

import Player from "../containers/Player";

class Players extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: "",
      skill: null,
      valid: false,
    }

    this.handleName = this.handleName.bind(this);
    this.handleSkill = this.handleSkill.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // using the lifecycle method that occurs when the page loads to call the onLoad property, which gets the players from the database
  componentDidMount() {
    this.props.onLoad();
  }

  handleName(e) {

    this.setState({
      name: e.target.value,
    });
  }

  handleSkill(e) {

    this.setState({
      skill: e.target.value,
      valid: true,
    });

  }

  handleSubmit(e) {

    e.preventDefault();

    let player_name = this.state.name;
    let skill = this.state.skill;

    this.props.onSubmit(player_name, skill);

    this.setState({
      name: "",
      skill: null,
      valid: false,
    });

  }




  render() {

    // destructuring the state and props objects
    let { players } = this.props;
    const { name } = this.state;

    // check inputs are valid
    let disabled = true ? (name.length < 1 || this.state.valid === false) : false;

    return(

      <React.Fragment>
        <form className="form" onSubmit={ this.handleSubmit }>
          <label htmlFor="player_name">Add a player: </label>
          <input  id="player_name" onChange={ this.handleName } value={ name } autoFocus placeholder="Enter player's name"></input>
          <p className="skill-label">Skill Level: </p>
          <div >
            <input onChange={ (e) => this.handleSkill(e) } type="range" min="1" max="5" class="slider" id="skill"></input>
          </div>
          <button type="submit" disabled={ disabled }>Add</button>
        </form>

        { disabled ? <p>Please enter a player name and select a skill level.</p> : null }
        
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
