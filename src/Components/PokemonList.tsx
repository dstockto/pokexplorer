import * as React from "react";
import {Menu} from "antd";
import {PokemonLink} from "../interface/links";
import {pokemonName} from "../functions";

function PokemonList({pokemonList, choosePokemon, activePokemonUrl, children}: PokemonListProps) {
  return (
    <div style={{"display": "flex", flexDirection: "column"}}>
      {children}
      <Menu selectable={true} className={'pokelist'}>
        {pokemonList.length === 0 && <Menu.Item unselectable={'off'}>No pokemon found</Menu.Item>}
        {pokemonList.length > 0 && pokemonList.map((link) => {
          return (
            <Menu.Item
              key={link.name}
              isSelected={link.url === activePokemonUrl}
              onClick={() => {
                choosePokemon(link.url)
              }}
            >
              {pokemonName(link.name)}
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
}

interface PokemonListProps {
  pokemonList: PokemonLink[],
  choosePokemon: (url: string) => void,
  activePokemonUrl: string | null,
  children: JSX.Element[] | JSX.Element
}

export default PokemonList;
