import React from "react";

import {
  HashRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Players from "./containers/Players";
import TeamRoster from "./containers/TeamRoster";
import Footer from "./components/Footer";


const App = () => (
  <Router>
    <React.Fragment className="main-body">
      <Nav/>
      <Route exact path="/">
        <Header
          children={ "Football Team Selector" }
          subheader={ "Add players to your roster and generate two equally balanced teams" }
        />
        <Players/>
      </Route>
      <Route path="/teams">
        <TeamRoster/>
      </Route>
      <Footer/>
    </React.Fragment>
  </Router>

);

// export our component
export default App;
   