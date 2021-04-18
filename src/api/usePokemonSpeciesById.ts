import usePokemonSpecies from "./usePokemonSpecies";

function usePokemonSpeciesById(id: number) {
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
  return usePokemonSpecies(speciesUrl);
}

export default usePokemonSpeciesById;
