import React, { Component } from "react";

export default class Position extends Component {
  constructor() {
    super();

    this.state = {
      positon: `center`
    };
  }

  handlePosition(direction) {
    this.setState({
      position: direction
    });
  }

  render() {
    return (
      <div>
        <h3
          style={{
            textAlign: `${this.state.position}`
          }}
        >
          {" "}
          Where do you want me?
        </h3>
        <div>
          <button onClick={() => this.handlePosition("left")}>Left</button>
          <button onClick={() => this.handlePosition("center")}>Center</button>
          <button onClick={() => this.handlePosition("right")}>Right</button>
        </div>
        <hr />
      </div>
    );
  }
}
