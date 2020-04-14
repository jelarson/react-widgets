import React, { Component } from "react";

export default class GrowShrink extends Component {
  constructor() {
    super();

    this.state = {
      count: 20
    };
  }

  handleSize = increment => {
    this.setState({
      count: this.state.count + increment
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <h2
            style={{
              fontSize: `${
                this.state.count === 0 ? "normal" : this.state.count
                }px`
            }}
          >
            I am {this.state.count}px tall
          </h2>
          <button onClick={() => this.handleSize(5)}>Add</button>
          <button onClick={() => this.handleSize(-5)}>Sub</button>
        </div>
        <hr />
      </div>
    );
  }
}
