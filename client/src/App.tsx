import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Components/Nav/Nav"
import SignUp from "./Components/SignUp/SignUp";
import FriendApp from "./Components/FriendApp/FriendApp";
import "../src/index.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={FriendApp} />
      </Switch>
    </Router>
  );
};

export default App;
