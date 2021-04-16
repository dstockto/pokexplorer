import * as React from "react";
import Type from "../interface/Type";
import Poketype from "./Poketype";

interface PokemonTypesProps {
  types: Type[]
}

function PokemonTypes({types}: PokemonTypesProps) {
  return <div className={"types"}>
    <strong>Types:</strong> {types.map((type) => <Poketype key={type.type.name} type={type.type.name}/>)}
  </div>
}

export default PokemonTypes;
