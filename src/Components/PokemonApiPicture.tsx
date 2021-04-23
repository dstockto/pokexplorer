import * as React from "react";
import PokemonLink from "../interface/PokemonLink";
import usePokemonDetails from "../api/usePokemonDetails";
import Pokemon from "../interface/Pokemon";
import LoadingSpinner from "./LoadingSpinner";

interface PokemonApiPictureProps {
  pokemonLink: PokemonLink,
}

function PokemonApiPicture({pokemonLink}: PokemonApiPictureProps) {
  const {isLoading, data: pokemonResponse} = usePokemonDetails(pokemonLink.url);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const pokemon: Pokemon = pokemonResponse;

  return (
    <figure>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} title={pokemon.name} width={'100px'} height={'100px'}/>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonApiPicture;

