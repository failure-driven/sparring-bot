import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import SparringBotDemo from "./SparringBotDemo";
import Timing from "./controls/Timing";

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: `${props.className} ${isCurrent && "active"}`,
      };
    }}
  />
);

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand mb-0 h1">
          Sparring Bot
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/timing" className="nav-link">
              Timing
            </NavLink>
          </li>
        </ul>
        <a
          href="https://github.com/failure-driven/sparring-bot"
          class="navbar-text"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-external-link-alt"></i> Github
        </a>
      </nav>
      <Router>
        <SparringBotDemo path="/" />
        <Timing path="/timing" />
      </Router>
    </div>
  );
}

export default App;
