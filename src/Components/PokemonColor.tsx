import * as React from "react";
import usePokemonSpecies from "../api/usePokemonSpecies";
import PokemonSpecies from "../interface/PokemonSpecies";
import "../style/pokecolors.css";

interface PokemonColorProps {
  speciesUrl: string,
  children: any,
}

function PokemonColor({speciesUrl, children} : PokemonColorProps) {
  const species = usePokemonSpecies(speciesUrl);
  if (species.isLoading) {
    return null;
  }

  const pokemonSpecies: PokemonSpecies = species.data;
  const color = pokemonSpecies.color.name;

  return <div className={`pokecolor pokecolor-${color}`}>{children}</div>
}

export default PokemonColor;
