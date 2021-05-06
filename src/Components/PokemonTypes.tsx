import * as React from "react";
import Type from "../interface/Type";
import Poketype from "./Poketype";

interface PokemonTypesProps {
  types: Type[]
}

function PokemonTypes({types}: PokemonTypesProps) {
  let title = 'Type';
  if (types.length !== 1) {
    title = 'Types';
  }

  return (
    <div className={'types'}>
      <div className={'title'}>{title}</div>
      <div className={"type-list"}>
        {types.map((type) => <Poketype key={type.type.name} type={type.type.name}/>)}
      </div>
    </div>
  );
}

export default PokemonTypes;
