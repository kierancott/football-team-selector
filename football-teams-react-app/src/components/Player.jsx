import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";


class Player extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      name: this.props.player.player_name,
      skill: this.props.player.skill,
      changeable: false
    }



    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleUpdateSkill = this.handleUpdateSkill.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  handleDelete() {
    this.props.onDelete();
  }

  handleEdit() {

    this.setState({
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
      changeable: false
    });

    this.props.onUpdate(player_name, skill);
  }

  render() {

    const { player } = this.props;
    const { changeable, name } = this.state;

    let skillBadge = player.skill === 1 ? "Very Poor" : player.skill === 2 ? "Poor" : player.skill === 3 ? "Average" : player.skill === 4 ? "Good" : "Excellent";

    let skillColour = player.skill === 1 ? "darkred" : player.skill === 2 ? "darkorange" : player.skill === 3 ? "orange" : player.skill === 4 ? "lightgreen" : "green";

    return (
      <React.Fragment>
        <Card className="playercard" style={{ width: '25vw', background: " rgba(255, 255, 255, 0.5)" }}>
          <Card.Body>
            { changeable ? 
              <Form onSubmit={ this.handleSubmit }>
                <Form.Group controlId="updateName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control onChange={ this.handleName }type="text" placeholder={ name }/>
                </Form.Group>
                <Form.Group controlId="updateSkill" className="updateskill">
                  <p>Skill:</p>
                    <button onClick={ (e) => this.handleUpdateSkill(e) } value="1" style={{ background: "darkred" }}>1</button>
                    <button onClick={ (e) => this.handleUpdateSkill(e) } value="2" style={{ background: "darkorange" }}>2</button>
                    <button onClick={ (e) => this.handleUpdateSkill(e) } value="3" style={{ background: "orange" }}>3</button>
                    <button onClick={ (e) => this.handleUpdateSkill(e) } value="4" style={{ background: "lightgreen" }}>4</button>
                    <button onClick={ (e) => this.handleUpdateSkill(e) } value="5" style={{ background: "green" }}>5</button>
                </Form.Group>
                <button className="playercard__update" type="submit">Update</button>
              </Form>
            : <><Card.Title className="playercard__name" style={{ fontSize: "2.2rem"}}>{ player.player_name }</Card.Title> 
            <div className="playercard__skill">
              <p className="playercard__ability">Skill Level:</p>
              <div className="skillbadge" style={{ backgroundColor: skillColour }}>
                { skillBadge }
              </div>
            </div>
            <div className="playercard__buttons">
              <button className="playercard__buttons_edit" onClick={ this.handleEdit }>Edit</button>
              <button className="playercard__buttons_delete" onClick={ this.handleDelete }>Delete</button>
            </div></>}
          </Card.Body> 
        </Card>
      </React.Fragment>
    )
  }
}

export default Player;