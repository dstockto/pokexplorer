import * as React from "react";
import RestLink from "../interface/RestLink";

function PokemonList({pokemonList, choosePokemon, children}: PokemonListProps) {
  return (
    <div className={'pokelist'}>
      {children}
      {pokemonList.length === 0 &&
      <p>No pokemon found</p>
      }
      {pokemonList.length > 0 &&
      <ul>
        {pokemonList.map((link) => (
          <li key={link.name}>
            <button onClick={() => {
              choosePokemon(link.url)
            }}>{link.name}</button>
          </li>
        ))}
      </ul>
      }
    </div>
  )
}

interface PokemonListProps {
  pokemonList: RestLink[],
  choosePokemon: (url: string) => void,
  children: JSX.Element[] | JSX.Element
}

export default PokemonList;
