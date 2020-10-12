import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import SignUp from "./Components/SignUp/SignUp";
import FriendApp from "./Components/FriendApp/FriendApp";
import Home from "./Components/Home/Home";
import CurrentFriends from "./Components/FriendApp/CurrentFriends/CurrentFriendComponent";
import "../src/index.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/add" component={FriendApp} />
        <Route path="/myfriends" component={CurrentFriends} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
