import React, { useState } from "react";

// export default class Hide extends Component {
//   constructor() {
//     super();

//     this.state = { isToggleOn: true };

//     this.handleToggle = this.handleToggle.bind(this);
//   }

//   handleToggle() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h3>{this.state.isToggleOn ? "Hide and seek" : ""}</h3>
//         <div>
//           <button onClick={() => this.handleToggle()}>Hide</button>
//         </div>
//         <hr />
//       </div>
//     );
//   }
// }

export default function Hide() {

  const [content, setContent] = useState("Hide and seek")

  return (
    <div>
      <h3>{content}</h3>
      <div>
        <button onClick={() => { content === "Hide and seek" ? setContent("") : setContent("Hide and seek") }}>Toggle Greeting</button>
      </div>
      <hr />
    </div>
  );
}