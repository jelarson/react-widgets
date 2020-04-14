import React, { Component } from "react";

export default class Toggle extends Component {
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
        <h3>{this.state.isToggleOn ? "Hello" : "Goodbye"}</h3>
        <div>
          <button onClick={() => this.handleToggle()}>Toggle Greeting</button>
        </div>
        <hr />
      </div>
    );
  }
}
