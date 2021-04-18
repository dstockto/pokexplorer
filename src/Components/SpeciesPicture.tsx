import * as React from "react";
import RestLink from "../interface/RestLink";
import usePokemonDetailsBySpeciesName from "../api/usePokemonDetailsBySpeciesName";
import PokemonPicture from "./PokemonPicture";
import Pokemon from "../interface/Pokemon";

interface SpeciesPictureProps {
  species: RestLink
}

function SpeciesPicture({ species }: SpeciesPictureProps) {
  const pokemonData = usePokemonDetailsBySpeciesName(species.name);
  if (pokemonData.isLoading) {
    return <span>{species.name}</span>
  }
  const pokemon: Pokemon = pokemonData.data;

  return <PokemonPicture url={pokemon.sprites.front_default || ''} alt={species.name} />;
}

export default SpeciesPicture;
