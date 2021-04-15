import React, {useState} from 'react';
import './App.css';
import SearchBox from "./Components/SearchBox";
import PokemonList from "./Components/PokemonList";
import {useQuery} from "react-query";
import getPokemonList from "./api/pokemonList";
import PokemonDetails from "./Components/PokemonDetails";
import { ReactQueryDevtools } from 'react-query/devtools'
import RestLink from "./interface/RestLink";

function App() {
  const pokemonList = useQuery('pokemon_list', getPokemonList, {cacheTime: 60*60*1000});
  const [pokemonUrl, setPokemonUrl] = useState<string|null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const pokeFiltered = (): RestLink[] => {
    if (filter === null) {
      return pokemonList.data.results;
    }
    return pokemonList.data.results.filter((link: RestLink) => link.name.toLowerCase().includes(filter?.toLowerCase()));
  }

  return (
      <div className="App">
        <SearchBox applyFilter={setFilter}/>
        {pokemonList.isLoading && <p>Loading</p>}
        {pokemonList.data &&
          <PokemonList
            pokemonList={pokeFiltered().slice(0,25)}
            choosePokemon={setPokemonUrl}
          />
        }
        {pokemonUrl && <PokemonDetails  url={pokemonUrl}/>}
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
  );
}

export default App;
