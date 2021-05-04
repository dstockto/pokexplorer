import * as React from "react";
import {AbilityLink} from "../interface/links";
import {titleCase} from "title-case";

interface PokemonAbilityProps {
  abilityLink: AbilityLink
}

function PokemonAbility({abilityLink: link}: PokemonAbilityProps) {
  const {name, url} = link;
  return <li key={name}>{titleCase(name).replace('-', ' ')}</li>;
}

export default PokemonAbility;
