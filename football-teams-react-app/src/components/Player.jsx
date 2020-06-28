import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
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
    this.handleSkill = this.handleSkill.bind(this);
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

  handleSkill(e) {

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

    return (
      <React.Fragment>
        <Card className="player-card" style={{ width: '25vw' }}>
          <Card.Body>
            { changeable ? 
              <Form onSubmit={ this.handleSubmit }>
                <Form.Group controlId="updateName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control onChange={ this.handleName }type="text" placeholder={ name }/>
                </Form.Group>
                <Form.Group controlId="updateSkill">
                  <Form.Label>Skill:</Form.Label>
                  <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                      <Button onClick={ (e) => this.handleSkill(e) } value="1">1</Button>
                      <Button onClick={ (e) => this.handleSkill(e) } value="2">2</Button>
                      <Button onClick={ (e) => this.handleSkill(e) } value="3">3</Button>
                      <Button onClick={ (e) => this.handleSkill(e) } value="4">4</Button>
                      <Button onClick={ (e) => this.handleSkill(e) } value="5">5</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Form.Group>
                <Button type="submit">Update</Button>
              </Form>
            : <Card.Title>{ player.player_name }</Card.Title> }
            <Card.Text>
              { player.skill }
            </Card.Text>
            <Button onClick={ this.handleEdit }>Edit</Button>
            <Button onClick={ this.handleDelete }>Delete</Button>
          </Card.Body>
        </Card>
      </React.Fragment>
    )
  }
}

export default Player;