import * as React from "react";
import Type from "../interface/Type";

interface PokemonTypesProps {
  types: Type[]
}

function PokemonTypes({types}: PokemonTypesProps) {
  return <div className={"types"}>
    <strong>Types:</strong> {types.map((type) => (type.type.name)).join(', ')}
  </div>
}

export default PokemonTypes;
