//import logo from './logo.svg';
//import './App.css';
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/* Components */
import Home from "./page/home"
import Nav from "./comp/nav"
import Intro from "./comp/Intro"
import Footer from "./comp/footer"
import Card from "./comp/card"

function App() {
  return (
    <div>
    <Router>
    <Nav />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/intro" component={Intro} />
    <Route path="/card" component={Card} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
