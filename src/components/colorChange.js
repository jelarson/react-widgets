import React, { Component } from "react";

export default class ColorChange extends Component {
  constructor(props) {
    super(props);
    // this.state = { currentColor: 'black' };
    this.state = {
      currentColor: "",
      chosenColor: ""
    };
  }

  handleChange = e => {
    this.setState({
      currentColor: e.target.value
    });
  };

  buttonChange = e => {
    e.preventDefault();
    this.setState({
      chosenColor: this.state.currentColor,
      currentColor: ""
    });
  };

  render() {
    return (
      <div>
        <h3
          style={{
            color: `${this.state.chosenColor}`
          }}
        >
          I want the text color to be - {this.state.chosenColor}
        </h3>
        <div>
          <form>
            <input
              type="text"
              placeholder="Enter Color Here"
              onChange={e => {
                this.handleChange(e);
              }}
              value={this.state.currentColor}
              name="currentColor"
            />
            <button
              onClick={e => {
                this.buttonChange(e);
              }}
            >
              {/* <button> */}
              Change Color
            </button>
          </form>
        </div>
        <hr />
      </div>
    );
  }
}
