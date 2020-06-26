import React from "react";

import {
  HashRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Players from "./containers/Players";
import TeamRoster from "./containers/TeamRoster";


const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/">
        <Header>Players</Header>
        <Players/>
      </Route>
      <Route path="/teams">
        <Header>Teams</Header>
        <TeamRoster/>
      </Route>
    </React.Fragment>
  </Router>

);

// export our component
export default App;
   