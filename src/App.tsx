import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { useQuery } from "react-query";
import getPokemonList from "./api/pokemonList";
import SearchBox from "./Components/SearchBox";
import PokemonDetails from "./Components/PokemonDetails";
import PokemonList from "./Components/PokemonList";
import LoadingSpinner from "./Components/LoadingSpinner";
import GlobalLoader from "./Components/GlobalLoader";
import { PokemonLink, RestLink } from "./interface/links";

function App() {
  const pokemonList = useQuery("pokemon_list", getPokemonList);
  const [pokemon, setPokemonLink] = useState<PokemonLink | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const pokeFiltered = (): RestLink[] => {
    if (filter === null) {
      return pokemonList.data.results;
    }
    return pokemonList.data.results.filter((link: RestLink) =>
      link.name.toLowerCase().includes(filter?.toLowerCase())
    );
  };

  return (
    <div className="App">
      <GlobalLoader />
      {pokemonList.isLoading && <LoadingSpinner />}
      {pokemonList.data && (
        <PokemonList
          pokemonList={pokeFiltered().slice(0, 25)}
          choosePokemon={setPokemonLink}
          activePokemonUrl={pokemon?.url || null}
        >
          <SearchBox applyFilter={setFilter} />
        </PokemonList>
      )}
      {pokemon && (
        <PokemonDetails url={pokemon.url} setPokemon={setPokemonLink} />
      )}
    </div>
  );
}

export default App;
