import React, { Component } from "react";

export default class Hide extends Component {
  constructor() {
    super();

    this.state = { isToggleOn: true };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <h3>{this.state.isToggleOn ? "Hide and seek" : ""}</h3>
        <div>
          <button onClick={() => this.handleToggle()}>Hide</button>
        </div>
        <hr />
      </div>
    );
  }
}
