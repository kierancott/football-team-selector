import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

import CardDeck from "react-bootstrap/CardDeck";
import Player from "../containers/Player";


class Players extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: "",
      skill: null,
      // set bool to false to prevent submission
      valid: false,
    }

    // binding
    this.handleName = this.handleName.bind(this);
    this.handleSkill = this.handleSkill.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // when component appears on page, dispatch the getPlayers
  // API action
  componentDidMount() {
    this.props.onLoad();
  }

  handleName(e) {

    this.setState({
      name: e.target.value,
    });
  }

  handleSkill(e) {

    // prevent form submission
    e.preventDefault();

    this.setState({
      skill: e.target.value,
      // 'valid' bool to be used to validate 'add' button
      // and allow submission
      valid: true,
    });

  }

  handleSubmit(e) {

    // prevent form submission
    e.preventDefault();

    let player_name = this.state.name;
    let skill = this.state.skill;

    // dispatch the postPlayer API action
    this.props.onSubmit(player_name, skill);

    this.setState({
      // clear state ready for next player
      name: "",
      skill: null,
      valid: false,
    });

  }

  // allows the player to erasethe database
  handleClear(e) {
    e.preventDefault();

    this.props.onClear();
  }

  render() {

    // destructure state and props
    let { players } = this.props;
    const { name } = this.state;

    // disable add button until both inputs valid
    let disabled = true ? (name.length < 1 || this.state.valid === false) : false;

    return(
      <Router>
        <React.Fragment>
          <div className="formcontainer">
            <h5 className="formheader">Add a Player:</h5>
            {/* onSubmit, dispatch postPlayer API action */}
            <form className="form" onSubmit={ this.handleSubmit }>
              <div className="formGroup">
                {/* Enter name */}
                <label htmlFor="player_name">Name: </label>
                <input className="name-input" id="player_name" onChange={ this.handleName } value={ name } autoFocus placeholder="Name..."></input>
              </div>
              <div className="formGroup skillselect__group">
                <label htmlFor="skill" className="skill__label">Skill Level: </label>
                {/* Select skill from 1 to 5 */}
                <button onClick={ (e) => this.handleSkill(e) } value="1" style={{ background: "darkred" }}>1</button>
                <button onClick={ (e) => this.handleSkill(e) } value="2" style={{ background: "darkorange" }}>2</button>
                <button onClick={ (e) => this.handleSkill(e) } value="3" style={{ background: "orange" }}>3</button>
                <button onClick={ (e) => this.handleSkill(e) } value="4" style={{ background: "lightgreen" }}>4</button>
                <button onClick={ (e) => this.handleSkill(e) } value="5" style={{ background: "green" }}>5</button>
              </div>
              {/* button will remain disabled until both inputs valid */}
              <button type="submit" className="add-player" disabled={ disabled }>Add</button>
            </form>
          </div>
          {/* While button is disabled, display prompt to enter input */}
          { disabled ? <div class="player-error">Please enter a player name and select a skill level.</div> : null }
 
          <h4 className="playercard__grid__title">Players:</h4>

          {/* While there are players in the database, map over player array and render as individual Player components */}
          { players.length ?
            <div className="playercard__grid">
                <CardDeck style={{ textAlign: "center", marginLeft: "8vw"}}>
                    { players.map(player => (
                    <div key={ player.id }>
                      <Player player={ player }/>
                    </div>
                    ))} 
                </CardDeck>
            </div>
              :
            <>{/* Else if no players in database, render error */}
            <div className="player-error">There are no players!</div></>
          }

          <div className="button-links">
            <div className="remove-players">
              {/* dispatch the deletePlayers API action and remove all players from database */}
              <button onClick={ (e) => this.handleClear(e) }>Remove all players</button>
            </div>
            <Link to="/teams">
              <div className="assign-teams">
                {/* dispatch the assignTeams API action and render TeamRoster component */}
                <button><span>Assign Teams</span></button>
              </div>
            </Link>
          </div>
        </React.Fragment>
      </Router>
    )
  }
};

export default Players;