import * as React from "react";
import RestLink from "../interface/RestLink";

interface PokemonListProps {
  pokemonList: RestLink[],
  choosePokemon: (url: string) => void,
}

function PokemonList({pokemonList, choosePokemon}: PokemonListProps ) {
  if (pokemonList.length === 0) {
    return <p>No pokemon found</p>
  }
  return (
    <ul>
      {pokemonList.map((link) => (
        <li key={link.name}><a onClick={() => {choosePokemon(link.url)}}>{link.name}</a></li>
      ))}
    </ul>
  )
}

export default PokemonList;
