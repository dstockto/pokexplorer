import { useQuery } from "react-query";

function usePokemonDetailsBySpeciesUrl(url: string) {
  const id = url.match("/pokemon-species/(d+)/");
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id ? id[1] : ""}/`;
  return useQuery(
    ["pokemon", pokemonUrl],
    () => {
      return fetch(url).then((res) => res.json());
    },
    {
      enabled: !!id,
    }
  );
}

export default usePokemonDetailsBySpeciesUrl;
