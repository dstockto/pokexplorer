import {useQuery} from "react-query";

function usePokemonSpecies(speciesUrl: string) {
  return useQuery(
    ['species', speciesUrl],
    () => {
      return fetch(speciesUrl).then(res => res.json());
    },
    {
      enabled: !!speciesUrl
    }
  );
}

export default usePokemonSpecies;

