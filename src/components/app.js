import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

import Home from "./home";
import Counter from "./counter";
import Toggle from "./toggle";
import Hide from "./hide";
import GrowShrink from "./growShrink";
import Position from "./positioning";
import Time from "./time";
import ColorChange from "./colorChange";
import NavBar from "./navbar.js"

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <switch>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/greeting" component={Toggle} />
            <Route path="/hide" component={Hide} />
            <Route path="/font-size" component={GrowShrink} />
            <Route path="/position" component={Position} />
            <Route path="/clock" component={Time} />
            <Route path="/color" component={ColorChange} />
          </switch>
        </div>
      </Router>
    </div>
  );
}
