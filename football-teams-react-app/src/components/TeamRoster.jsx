import React, { Component } from "react";
import { Link } from "react-router-dom";

import Player from "../components/Player";
import CardDeck from "react-bootstrap/CardDeck";

class TeamRoster extends Component {

    // onLoad property must be called in order for assignTeam to be called from the API
    // Lifecycle method calls this on page load ('did mount')
    componentDidMount() {
        this.props.onLoad()
    }

    render() {

        // destructure props into players
        // { players } is an array of objects that each represent a player
        const { players } = this.props;

        // Iterate over players array and return those with team attribute of 1
        let firstTeam = players.filter(player => player.team === 1);

        // Iterate over players array and return those with team attribute of 2
        let secondTeam = players.filter(player => player.team === 2);

        return(
            <React.Fragment>
                <div>
                    <div>
                        <h3 className="team-title">Team One</h3>
                        <div className="teamroster">
                            <CardDeck style={{ textAlign: "center"}}>
                                { firstTeam.map((player, i) => (
                                    <div className="teamroster__card">
                                        <Player key={ i } player={ player }/>
                                    </div>
                                ))}
                            </CardDeck>
                        </div>
                    </div>
                    <div>
                        <h3 className="team-title">Team Two</h3>
                        <div className="teamroster">
                            <CardDeck>
                                { secondTeam.map((player, i) => (
                                    <div className="teamroster__card">
                                        <Player key={ i } player={ player }/>
                                    </div>
                                ))}
                            </CardDeck>
                        </div>
                    </div>
                    <Link to="/">
                        <div className="back-home">
                            <button><span>Back</span></button>
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default TeamRoster;