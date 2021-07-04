import * as React from "react";
import "../style/pokemon-header.css";

interface PokemonHeaderProps {
  name: string;
  id: number;
}

function PokemonHeader({ name, id }: PokemonHeaderProps) {
  let capitalName = name.slice(0, 1).toUpperCase() + name.slice(1);
  return (
    <h1 className={"pokemon-header"}>
      {capitalName} #{id}
    </h1>
  );
}

export default PokemonHeader;
