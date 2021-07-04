import * as React from "react";
import "../style/poketypes.css";

interface PoketypeProps {
  type: string;
}

function Poketype({ type }: PoketypeProps) {
  return <div className={`poketype type-${type}`}>{type}</div>;
}

export default Poketype;
