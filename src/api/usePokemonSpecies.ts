import {useQuery, UseQueryResult} from "react-query";
import PokemonSpecies from "../interface/PokemonSpecies";

function usePokemonSpecies(speciesUrl: string): UseQueryResult<PokemonSpecies|undefined, Error> {
  return useQuery(
    ['species', speciesUrl],
    (): Promise<PokemonSpecies> => {
      return fetch(speciesUrl).then(res => res.json());
    },
    {
      enabled: !!speciesUrl
    }
  );
}

export default usePokemonSpecies;

