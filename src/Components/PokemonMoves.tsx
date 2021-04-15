import * as React from "react";
import Move from "../interface/Move";

interface PokemonMovesProps {
  moves: Move[]
}

function PokemonMoves({moves}: PokemonMovesProps) {
  return (
    <div className={'moves'}>
      <strong>Moves: </strong>
      {moves.map((move) => {
        return move.move.name
      }).join(', ')}
    </div>
  )
}

export default PokemonMoves;
