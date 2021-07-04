import * as React from "react";
import "../style/pokecolors.css";

interface PokemonColorProps {
  color: string;
  children: any;
}

function PokemonColor({ color, children }: PokemonColorProps) {
  return (
    <div className={`pokedetail pokecolor pokecolor-${color}`}>{children}</div>
  );
}

export default PokemonColor;
