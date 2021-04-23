import * as React from "react";
import usePokemonSpecies from "../api/usePokemonSpecies";
import PokemonSpecies from "../interface/PokemonSpecies";
import "../style/pokecolors.css";
import LoadingSpinner from "./LoadingSpinner";

interface PokemonColorProps {
  speciesUrl: string,
  children: any,
}

function PokemonColor({speciesUrl, children} : PokemonColorProps) {
  const species = usePokemonSpecies(speciesUrl);
  if (species.isLoading) {
    return <LoadingSpinner />;
  }

  const pokemonSpecies: PokemonSpecies = species.data;
  const color = pokemonSpecies.color.name;

  return <div className={`pokedetail pokecolor pokecolor-${color}`}>{children}</div>
}

export default PokemonColor;
