import * as React from "react";
import usePokemonDetails from "../api/pokemonDetails";
import Pokemon from "../interface/Pokemon";
import PokemonSprites from "./PokemonSprites";
import PokemonSpeciesInfo from "./PokemonSpeciesInfo";
import PokemonTypes from "./PokemonTypes";
import PokemonMoves from "./PokemonMoves";
import PokemonColor from "./PokemonColor";

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
    <PokemonColor speciesUrl={pokemon.species.url}>
      <h1>{pokemon.id} - {pokemon.name}</h1>
      <PokemonTypes types={pokemon.types}/>
      <div className={'height'}><strong>Height:</strong> {pokemon.height}</div>
      <div className={'weight'}><strong>Weight:</strong> {pokemon.weight}</div>
      <PokemonSpeciesInfo species={pokemon.species.url}/>
      <PokemonMoves moves={pokemon.moves}/>
      <div className={'images'}>
        <PokemonSprites sprites={pokemon.sprites}/>
      </div>
    </PokemonColor>
  )
}

export default PokemonDetails;
