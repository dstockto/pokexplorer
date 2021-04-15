import * as React from "react";
import usePokemonDetails from "../api/pokemonDetails";
import Pokemon from "../interface/Pokemon";
import PokemonSprites from "./PokemonSprites";
import PokemonSpeciesInfo from "./PokemonSpeciesInfo";
import PokemonTypes from "./PokemonTypes";

interface PokemonDetailsProps {
  url: string
}

function PokemonDetails({url}: PokemonDetailsProps) {
  const details = usePokemonDetails(url);
  if (details.isLoading) {
    return <p>Loading</p>;
  }

  const pokemon: Pokemon = details.data;

  return (
    <div>
      <h1>{pokemon.id} - {pokemon.name}</h1>
      <PokemonTypes types={pokemon.types} />
      <div className={'height'}>Height: {pokemon.height}</div>
      <div className={'weight'}>Weight: {pokemon.weight}</div>
      <div className={'images'}>
        <PokemonSprites sprites={pokemon.sprites} />
        <PokemonSpeciesInfo species={pokemon.species.url} />
      </div>
    </div>
  )
}

export default PokemonDetails;
