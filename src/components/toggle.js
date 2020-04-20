import React, { useState } from "react";

// export default class Toggle extends Component {
//   constructor() {
//     super();

//     this.state = { isToggleOn: true };

//     this.handleToggle = this.handleToggle.bind(this);
//   }

export default function Toggle() {

  const [content, setContent] = useState("Hello")

  // const handleToggle = () => {
  //   setShowContent(!setShowContent)
  // }


  return (
    <div>
      <h3>{content}</h3>
      <div>
        <button onClick={() => { content === "Hello" ? setContent("Goodbye") : setContent("Hello") }}>Toggle Greeting</button>
      </div>
      <hr />
    </div>
  );
}

