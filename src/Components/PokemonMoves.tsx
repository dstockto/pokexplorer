import * as React from "react";
import Move from "../interface/Move";
import { useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

interface PokemonMovesProps {
  moves: Move[];
  initial_collapsed?: boolean;
}

function PokemonMoves({ moves, initial_collapsed }: PokemonMovesProps) {
  const [collapsed, setCollapsed] = useState(
    initial_collapsed !== undefined ? initial_collapsed : false
  );

  return (
    <div className={"moves"}>
      <strong>Moves: </strong>
      <Button type={"primary"} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "Show" : "Hide"}
      </Button>
      {!collapsed &&
        moves
          .map((move) => {
            return move.move.name;
          })
          .join(", ")}
    </div>
  );
}

export default PokemonMoves;
