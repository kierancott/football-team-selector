import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";


class Player extends Component {
  constructor(props) {
    super(props) 

    // Initialise 'changeable' bool to false - form fields
    // hidden on default
    this.state = {
      name: this.props.player.player_name,
      skill: this.props.player.skill,
      changeable: false
    }

    // binding
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleUpdateSkill = this.handleUpdateSkill.bind(this);
  }

  // when component appears on page, dispatch the getPlayers
  // API action
  componentDidMount() {
    this.props.onLoad();
  }

  handleDelete() {
    // dispatch the deletePlayer API action
    this.props.onDelete();
  }

  handleEdit() {

    this.setState({
      // set bool to true, to show input fields in JSX
      changeable: true,
    });

  }

  handleName(e) {
    let newName = e.target.value;

    this.setState({
      name: newName,
    });

  }

  handleUpdateSkill(e) {

    // stop form submission
    e.preventDefault();

    let skill = +e.target.value;

    this.setState({
      skill: skill,
    });

  }

  handleSubmit(e) {

    e.preventDefault();

    let player_name = this.state.name;
    let skill = this.state.skill

    this.setState({
      // on submission, return bool to false
      // to prevent further changes
      changeable: false
    });

    // dispatch the patchPlayer API action
    this.props.onUpdate(player_name, skill);
  }

  render() {

    // destructure state and props
    const { player } = this.props;
    const { changeable, name } = this.state;

    // stores a description of skill as a string instead of a number
    let skillBadge = player.skill === 1 ? "Very Poor" : player.skill === 2 ? "Poor" : player.skill === 3 ? "Average" : player.skill === 4 ? "Good" : "Excellent";

    // stores a colour based on skill
    let skillColour = player.skill === 1 ? "darkred" : player.skill === 2 ? "darkorange" : player.skill === 3 ? "orange" : player.skill === 4 ? "lightgreen" : "green";

    return (
      <React.Fragment>
        <Card className="playercard" style={{ width: '25vw', background: " rgba(255, 255, 255, 0.5)" }}>
          <Card.Body>
            {/* If the 'changeable' bool from state is true, render form fields */}
            { changeable ? 
              <Form onSubmit={ this.handleSubmit }>
                <Form.Group controlId="updateName">
                  {/* Allows user to update name */}
                  <Form.Label>Name:</Form.Label>
                  <Form.Control onChange={ this.handleName }type="text" placeholder={ name }/>
                </Form.Group>
                <Form.Group controlId="updateSkill" className="updateskill">
                  {/* Allows user to update skill */}
                  <p>Skill:</p>
                    <button onClick={ (e) => this.handleUpdateSkill(e) } value="1" style={{ background: "darkred" }}>1</button>
                    <button onClick={ (e) => this.handleUpdateSkill(e) } value="2" style={{ background: "darkorange" }}>2</button>
                    <button onClick={ (e) => this.handleUpdateSkill(e) } value="3" style={{ background: "orange" }}>3</button>
                    <button onClick={ (e) => this.handleUpdateSkill(e) } value="4" style={{ background: "lightgreen" }}>4</button>
                    <button onClick={ (e) => this.handleUpdateSkill(e) } value="5" style={{ background: "green" }}>5</button>
                </Form.Group>
                <button className="playercard__update" type="submit">Update</button>
              </Form>
            : <>
            {/* Else if the 'changeable' bool from state is false, render player card */}
            <Card.Title className="playercard__name" style={{ fontSize: "2.2rem"}}>{ player.player_name }</Card.Title> 
            <div className="playercard__skill">
              <p className="playercard__ability">Skill Level:</p>
              {/* displays skill as description string and displays background colour fetched from variable based on skill */}
              <div className="skillbadge" style={{ backgroundColor: skillColour }}>
                { skillBadge }
              </div>
            </div>
            <div className="playercard__buttons">
              {/* On click, sets 'changeable' bool to true and shows form fields */}
              <button className="playercard__buttons_edit" onClick={ this.handleEdit }>Edit</button>
              {/* On click, delete player from db */}
              <button className="playercard__buttons_delete" onClick={ this.handleDelete }>Delete</button>
            </div></>}
          </Card.Body> 
        </Card>
      </React.Fragment>
    )
  }
}

export default Player;