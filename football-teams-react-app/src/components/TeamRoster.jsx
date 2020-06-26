import React, { Component } from "react";

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
                        <h3>Team One</h3>
                        { firstTeam.map((player, i) => (
                            <p key={ i }>Name: { player.player_name }, Skill: { player.skill }</p>
                        ))}
                    </div>
                    <div>
                        <h3>Team Two</h3>
                        { secondTeam.map((player, i) => (
                            <p key={ i }>Name: { player.player_name }, Skill: { player.skill }</p>
                        ))}
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default TeamRoster;