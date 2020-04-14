import React from "react";
import "./styles.css";

import Counter from "./counter";
import Toggle from "./toggle";
import Hide from "./hide";
import GrowShrink from "./growShrink";
import Position from "./positioning";
import Time from "./time";
import ColorChange from "./colorChange";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <Toggle />
      <Hide />
      <GrowShrink />
      <Position />
      <Time />
      <ColorChange />
    </div>
  );
}
