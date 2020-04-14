import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  handleCrementer = increment => {
    this.setState({
      count: this.state.count + increment
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.handleCrementer(1)}>Add</button>
        <button onClick={() => this.handleCrementer(-1)}>Sub</button>
        <hr />
      </div>
    );
  }
}
