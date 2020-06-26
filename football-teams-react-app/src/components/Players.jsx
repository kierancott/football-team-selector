import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

import CardDeck from "react-bootstrap/CardDeck";
import Player from "../components/Player";


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

  // allows the player to delete the database to start fresh
  handleClear(e) {
    e.preventDefault();

    this.props.onClear();
  }

  render() {

    // destructuring the state and props objects
    let { players } = this.props;
    const { name } = this.state;

    // check inputs are valid
    let disabled = true ? (name.length < 1 || this.state.valid === false) : false;

    return(
      <Router>
        <React.Fragment>
          <div className="formcontainer">
            <form className="form" onSubmit={ this.handleSubmit }>
              <div className="formGroup">
                <label htmlFor="player_name">Add a player: </label>
                <input className="name-input" id="player_name" onChange={ this.handleName } value={ name } autoFocus placeholder="Enter player's name"></input>
              </div>
              <div className="formGroup skill-radio__group">
                <label htmlFor="skill" className="skill-label">Skill Level: </label>
        
                <input onChange={ (e) => this.handleSkill(e) } className="skill-radio" type="radio" value="1" id="1" name="skill"></input>
                <label htmlFor="1">1</label>

                <input onChange={ (e) => this.handleSkill(e) } className="skill-radio" type="radio" value="2" id="2" name="skill"></input>
                <label htmlFor="2">2</label>

                <input onChange={ (e) => this.handleSkill(e) } className="skill-radio" type="radio" value="3" id="3" name="skill"></input>
                <label htmlFor="3">3</label>

                <input onChange={ (e) => this.handleSkill(e) } className="skill-radio" type="radio" value="4" id="4" name="skill"></input>
                <label htmlFor="4">4</label>

                <input onChange={ (e) => this.handleSkill(e) } className="skill-radio" type="radio" value="5" id="5" name="skill"></input>
                <label htmlFor="5">5</label>
              </div>
              <button type="submit" className="add-player" disabled={ disabled }>Add</button>
             
            </form>
          </div>
       
            { disabled ? <div class="alert alert-danger player-error" role="alert">Please enter a player name and select a skill level.</div> : null }

            <div className="remove-players">
                <button onClick={ (e) => this.handleClear(e) }>Remove all players</button>
            </div>
            
            { players.length ?
            <div className="player-card__grid">
                <CardDeck>
                    { players.map(player => (
                    <div key={ player.id }>
                      <Player player={ player }/>
                    </div>
                    ))}
                </CardDeck>
            </div>
                :
                <p>There are no players!</p>
            }

            <div className="assign-teams">
              <Link to="/teams">
                <button>Assign Teams</button>
              </Link>
            </div>

        </React.Fragment>
      </Router>
    )
  }
};

export default Players;

