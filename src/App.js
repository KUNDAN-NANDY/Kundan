//import logo from './logo.svg';
//import './App.css';
import React from "react"
import Home from "./page/home"
import Nav from "./comp/nav"
import Intro from "./comp/Intro"
import Footer from "./comp/footer"

function App() {
  return (
    <div>
    <Nav />
    <Intro />
    <Home />
    <Footer />
    </div>
  );
}

export default App;
