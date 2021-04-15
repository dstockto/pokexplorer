import * as React from "react";
import "../style/poketypes.css";

interface PoketypeProps {
  type: string
}

function Poketype({type}: PoketypeProps) {
  return (<span className={`poketype type-${type}`}>{type}</span>);
}

export default Poketype;
