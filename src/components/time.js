import React, { Component } from "react";

export default class Time extends Component {
  constructor(props) {
    super(props);

    let currentTime = new Date();
    this.state = {
      time: currentTime.toLocaleString
    };

    this.countingSecond = this.countingSecond.bind(this);
  }

  countingSecond() {
    let currentTime = new Date();
    this.setState({
      time: currentTime.toLocaleTimeString()
    });
  }

  componentWillMount() {
    setInterval(this.countingSecond, 1000);
  }

  render() {
    return (
      <div>
        <h3>The current time is {this.state.time}</h3>
        <hr />
      </div>
    );
  }
}
