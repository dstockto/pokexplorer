import * as React from "react";
import usePokemonDetails from "../api/usePokemonDetails";
import LoadingSpinner from "./LoadingSpinner";
import {PokemonLink} from "../interface/links";

interface PokemonApiPictureProps {
  pokemonLink: PokemonLink,
}

function PokemonApiPicture({pokemonLink}: PokemonApiPictureProps) {
  const {isLoading, data: pokemon} = usePokemonDetails(pokemonLink.url);

  if (isLoading || pokemon === undefined) {
    return <LoadingSpinner />;
  }

  return (
    <figure>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} title={pokemon.name} width={'100px'} height={'100px'}/>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonApiPicture;

