import React from "react";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Players from "./containers/Players";


const App = () => (

    <React.Fragment>

      <Header>Players</Header>

      <Players/>

    </React.Fragment>


);

// export our component
export default App;
   