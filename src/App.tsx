import React, {useState} from 'react';
import './App.css';
import {useQuery} from "react-query";
import getPokemonList from "./api/pokemonList";
import RestLink from "./interface/RestLink";
import SearchBox from "./Components/SearchBox";
import PokemonDetails from "./Components/PokemonDetails";
import PokemonList from "./Components/PokemonList";
import LoadingSpinner from "./Components/LoadingSpinner";
import GlobalLoader from "./Components/GlobalLoader";

function App() {
  const pokemonList = useQuery('pokemon_list', getPokemonList);
  const [pokemonUrl, setPokemonUrl] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const pokeFiltered = (): RestLink[] => {
    if (filter === null) {
      return pokemonList.data.results;
    }
    return pokemonList.data.results.filter((link: RestLink) => link.name.toLowerCase().includes(filter?.toLowerCase()));
  }

  return (
    <div className="App">
      <GlobalLoader />
      {pokemonList.isLoading && <LoadingSpinner />}
      {pokemonList.data &&
      <PokemonList
        pokemonList={pokeFiltered().slice(0, 25)}
        choosePokemon={setPokemonUrl}
      >
        <SearchBox applyFilter={setFilter}/>
      </PokemonList>
      }
      {pokemonUrl && <PokemonDetails url={pokemonUrl}/>}
    </div>
  );
}

export default App;
