// import React, { Component } from "react";

// export default class Time extends Component {
//   constructor(props) {
//     super(props);

//     let currentTime = new Date();
//     this.state = {
//       time: currentTime.toLocaleString
//     };

//     this.countingSecond = this.countingSecond.bind(this);
//   }

//   countingSecond() {
//     let currentTime = new Date();
//     this.setState({
//       time: currentTime.toLocaleTimeString()
//     });
//   }

//   componentWilllMount() {
//     setInterval(this.countingSecond, 1000);
//   }

//   render() {
//     return (
//       <div>
//         <h3>The current time is {this.state.time}</h3>
//         <hr />
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from "react";

export default function Time() {

  const [time, setTime] = useState(new Date().toLocaleTimeString())

  const interval = setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)

  useEffect(() => {
    return function cleanup() {
      clearInterval(interval)
    }
  }, [interval])
  return (
    <div>
      <h3>The current time is: {time}</h3>
    </div>
  )
}
