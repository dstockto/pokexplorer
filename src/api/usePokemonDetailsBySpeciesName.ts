import {useQuery} from "react-query";

function usePokemonDetailsBySpeciesName(name: string) {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  return useQuery(['pokemon', pokemonUrl], () => {
    return fetch(pokemonUrl).then(res => res.json());
  });
}

export default usePokemonDetailsBySpeciesName;
