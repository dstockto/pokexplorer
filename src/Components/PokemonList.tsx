import * as React from "react";
import RestLink from "../interface/RestLink";

function PokemonList({pokemonList, choosePokemon}: PokemonListProps) {
  if (pokemonList.length === 0) {
    return <p>No pokemon found</p>
  }
  return (
    <div className={'pokelist'}>
      <ul>
        {pokemonList.map((link) => (
          <li key={link.name}>
            <button onClick={() => {
              choosePokemon(link.url)
            }}>{link.name}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface PokemonListProps {
  pokemonList: RestLink[],
  choosePokemon: (url: string) => void,
}

export default PokemonList;
