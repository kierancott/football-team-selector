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

    e.preventDefault();

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
          <h5 className="formheader">Add a Player:</h5>
            <form className="form" onSubmit={ this.handleSubmit }>
              <div className="formGroup">
                <label htmlFor="player_name">Name: </label>
                <input className="name-input" id="player_name" onChange={ this.handleName } value={ name } autoFocus placeholder="Name..."></input>
              </div>
              <div className="formGroup skillselect__group">
                <label htmlFor="skill" className="skill__label">Skill Level: </label>
        
                <button onClick={ (e) => this.handleSkill(e) } value="1" style={{ background: "darkred" }}>1</button>
                <button onClick={ (e) => this.handleSkill(e) } value="2" style={{ background: "darkorange" }}>2</button>
                <button onClick={ (e) => this.handleSkill(e) } value="3" style={{ background: "orange" }}>3</button>
                <button onClick={ (e) => this.handleSkill(e) } value="4" style={{ background: "lightgreen" }}>4</button>
                <button onClick={ (e) => this.handleSkill(e) } value="5" style={{ background: "green" }}>5</button>
              </div>
              <button type="submit" className="add-player" disabled={ disabled }>Add</button>
            </form>
          </div>
       
          { disabled ? <div class="player-error">Please enter a player name and select a skill level.</div> : null }
 
          <h4 className="playercard__grid__title">Players:</h4>

          
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
            <div className="player-error">There are no players!</div>
          }

          <div className="button-links">
            <div className="remove-players">
              <button onClick={ (e) => this.handleClear(e) }>Remove all players</button>
            </div>
            <Link to="/teams">
              <div className="assign-teams">
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