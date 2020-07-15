import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import SparringBotDemo from "./SparringBotDemo";
import Timing from "./controls/Timing";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sparring Bot</h1>
      </header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/timing">Timing</Link>
      </nav>
      <Router>
        <SparringBotDemo path="/" />
        <Timing path="/timing" />
      </Router>
    </div>
  );
}

export default App;
