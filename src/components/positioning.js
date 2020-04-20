import React, { useState } from "react";

// export default class Position extends Component {
//   constructor() {
//     super();

//     this.state = {
//       positon: `center`
//     };
//   }

//   handlePosition(direction) {
//     this.setState({
//       position: direction
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h3
//           style={{
//             textAlign: `${this.state.position}`
//           }}
//         >
//           {" "}
//           Where do you want me?
//         </h3>
//         <div>
//           <button onClick={() => this.handlePosition("left")}>Left</button>
//           <button onClick={() => this.handlePosition("center")}>Center</button>
//           <button onClick={() => this.handlePosition("right")}>Right</button>
//         </div>
//         <hr />
//       </div>
//     );
//   }
// }

export default function ToggleAlignment(props) {
  const [align, setAlign] = useState('')

  return (
    <div>
      <h3
        style={{
          textAlign: align
        }}
      >
        Where do you want me?
            </h3>
      <div>
        <button onClick={() => setAlign("left")}>Left</button>
        <button onClick={() => setAlign("center")}>Center</button>
        <button onClick={() => setAlign("right")}>Right</button>
      </div>
      <hr />
    </div>
  )


}


// export default ToggleAlignment