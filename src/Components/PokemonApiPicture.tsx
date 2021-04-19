import * as React from "react";
import PokemonLink from "../interface/PokemonLink";
import usePokemonDetails from "../api/usePokemonDetails";
import Pokemon from "../interface/Pokemon";

interface PokemonApiPictureProps {
  pokemonLink: PokemonLink,
}

function PokemonApiPicture({pokemonLink}: PokemonApiPictureProps) {
  const {isLoading, data: pokemonResponse} = usePokemonDetails(pokemonLink.url);

  if (isLoading) {
    return null;
  }

  const pokemon: Pokemon = pokemonResponse;

  return (
    <figure>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} title={pokemon.name}/>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonApiPicture;

